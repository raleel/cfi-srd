#!/usr/bin/env node
/**
 * Automated multi-language translation pipeline for cfi-srd.
 *
 * Scans `rules/en/` for markdown source files, translates each one into every
 * language in TARGET_LANGUAGES using the Gemini API. This includes the
 * Docsify TOC/navigation scaffolding files (_sidebar.md / _navbar.md): their
 * link titles (e.g. "Introduction", "Characters") are translated through
 * Gemini too - using a dedicated prompt that preserves link targets, file
 * paths, and list structure exactly - so top-level sidebar/navbar entries are
 * localized, not just sub-page content. Link targets are then rewritten to
 * be prefixed with the target language route (e.g. `/es/README.md`). If
 * scaffold translation ultimately fails, an untranslated (English-titled) but
 * correctly-routed copy is written as a fallback so navigation never breaks.
 *
 * Cost/throughput optimization: translations for each language are submitted
 * as a single Gemini Batch API job (`ai.batches.create`) containing one
 * inlined request per pending file, using the cheaper `gemini-3.1-flash-lite`
 * model. The job is polled every 15s until it reaches a terminal state, and
 * results are mapped back to their source files via a per-request `customId`.
 * If the batch job itself fails (submission error, job-level failure, or
 * timeout), or if an individual file's response comes back missing/erroneous,
 * that file falls back to the slower sequential `generateContent` path with
 * exponential backoff + jitter retries on 503/429 errors — so a batch outage
 * for one language never blocks the rest of the run.
 *
 * Already-translated files whose source content hasn't changed (tracked via
 * git blob hashes) are skipped to save API cost and execution time.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';
import { GoogleGenAI } from '@google/genai';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..', '..');
const RULES_DIR = path.join(REPO_ROOT, 'rules');
const SOURCE_LANG = 'en';
const SOURCE_DIR = path.join(RULES_DIR, SOURCE_LANG);
const MANIFEST_PATH = path.join(REPO_ROOT, '.github', 'scripts', 'translation-manifest.json');

// Full target language matrix.
const TARGET_LANGUAGES = [
  'es', 'fr', 'it', 'el', 'zh-CN', 'ar', 'fa', 'ur', 'he', 'ps', 'ku', 'dv',
  'hi', 'ja', 'ko', 'tr', 'vi', 'ru', 'uk', 'hr', 'sr', 'bs', 'sq', 'mk', 'sl',
  'tl', 'pt', 'sw', 'ha', 'ms', 'th', 'my',
];

// Human-readable language names used to build translation prompts.
const LANGUAGE_NAMES = {
  es: 'Spanish', fr: 'French', it: 'Italian', el: 'Greek', 'zh-CN': 'Simplified Chinese',
  ar: 'Arabic', fa: 'Persian (Farsi)', ur: 'Urdu', he: 'Hebrew', ps: 'Pashto',
  ku: 'Kurdish', dv: 'Dhivehi', hi: 'Hindi', ja: 'Japanese', ko: 'Korean',
  tr: 'Turkish', vi: 'Vietnamese', ru: 'Russian', uk: 'Ukrainian', hr: 'Croatian',
  sr: 'Serbian', bs: 'Bosnian', sq: 'Albanian', mk: 'Macedonian', sl: 'Slovenian',
  tl: 'Tagalog', pt: 'Portuguese', sw: 'Swahili', ha: 'Hausa', ms: 'Malay',
  th: 'Thai', my: 'Burmese',
};

const SCAFFOLD_FILES = new Set(['_sidebar.md', '_navbar.md']);
const MAX_RETRIES = 4;
const MODEL_NAME = process.env.GEMINI_MODEL || 'gemini-3.1-flash-lite';

// Batch API polling configuration.
const BATCH_POLL_INTERVAL_MS = 15000;
const BATCH_MAX_POLL_ATTEMPTS = 240; // 240 * 15s = 60 minutes ceiling per language

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY environment variable is not set. Aborting.');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function loadManifest() {
  try {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  } catch {
    return {};
  }
}

function saveManifest(manifest) {
  fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
}

/**
 * Returns the git blob hash for a file's current on-disk content, matching
 * `git hash-object`. Falls back to null if git is unavailable (e.g. file not
 * yet tracked), in which case we treat the content as "changed".
 */
function gitBlobHash(filePath) {
  try {
    return execFileSync('git', ['hash-object', filePath], {
      cwd: REPO_ROOT,
      encoding: 'utf8',
    }).trim();
  } catch {
    return null;
  }
}

/**
 * Determines whether `sourceFile` needs to be (re)translated into `lang`.
 * Skips when the output already exists and the manifest shows the source
 * content (by git blob hash) hasn't changed since the last successful run.
 */
function shouldSkip(manifest, relativeFile, lang, outputPath, sourceHash) {
  if (!fs.existsSync(outputPath)) return false;
  const recorded = manifest?.[relativeFile]?.[lang];
  return Boolean(sourceHash) && recorded === sourceHash;
}

/**
 * Builds the translation prompt sent to Gemini for a given source document
 * and target language. Shared by both the batch and sequential code paths.
 */
function buildPrompt(text, lang) {
  const languageName = LANGUAGE_NAMES[lang] || lang;
  return [
    `Translate the following Docsify/Markdown document from English into ${languageName} (locale code "${lang}").`,
    'Preserve all Markdown formatting, code blocks, HTML tags, table structure, links, and image references exactly.',
    'Do not translate content inside code fences, URLs, or file paths. Only translate prose, headings, and table cell text.',
    'Return ONLY the translated Markdown document, with no additional commentary.',
    '',
    '--- DOCUMENT START ---',
    text,
    '--- DOCUMENT END ---',
  ].join('\n');
}

/**
 * Builds the translation prompt used for Docsify TOC/navigation scaffolding
 * files (_sidebar.md / _navbar.md). Unlike regular content, these files are
 * short Markdown link lists (e.g. `- [Characters](0001_Characters.md)`) that
 * define the sidebar's top-level category/group names. Only the human
 * readable link title (the text inside `[...]`) should be translated - the
 * link target, file paths, anchors, and `---` separators must be preserved
 * byte-for-byte so the translated file still routes to the correct pages.
 */
function buildScaffoldPrompt(text, lang) {
  const languageName = LANGUAGE_NAMES[lang] || lang;
  return [
    `Translate only the human-readable link titles in the following Docsify sidebar/navbar navigation Markdown into ${languageName} (locale code "${lang}").`,
    'This file is a navigation menu. Each non-blank line is either a Markdown link list item, e.g. "- [Introduction](README.md)", or a horizontal rule "---".',
    'Translate ONLY the text inside the square brackets [ ] (the link title/category name). Do NOT translate, reorder, add, or remove anything else.',
    'Do NOT modify the link target in parentheses ( ) - keep every file path, URL, and anchor exactly as-is, character for character.',
    'Do NOT modify "---" separators, list markers ("- "), or line order/count.',
    'Return ONLY the translated Markdown document, with no additional commentary.',
    '',
    '--- DOCUMENT START ---',
    text,
    '--- DOCUMENT END ---',
  ].join('\n');
}

/**
 * Extracts concatenated text from a GenerateContentResponse-shaped object.
 * Batch API inlined responses are deserialized as plain objects (not
 * GenerateContentResponse class instances), so we can't rely on the SDK's
 * `.text` convenience getter and instead walk candidates/content/parts
 * ourselves. Works equally well for responses from the sequential path.
 */
function extractResponseText(response) {
  const parts = response?.candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts) || parts.length === 0) return undefined;
  let text = '';
  let foundText = false;
  for (const part of parts) {
    if (typeof part?.text === 'string' && !part.thought) {
      text += part.text;
      foundText = true;
    }
  }
  return foundText ? text : undefined;
}

async function translateWithRetry(text, lang, isScaffold = false) {
  const prompt = isScaffold ? buildScaffoldPrompt(text, lang) : buildPrompt(text, lang);

  let lastError;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: MODEL_NAME,
        contents: prompt,
      });
      const output = extractResponseText(response);
      if (!output) throw new Error('Empty response from Gemini API');
      return output;
    } catch (err) {
      lastError = err;
      const status = err?.status ?? err?.response?.status ?? err?.code;
      const message = String(err?.message || err);
      const isRetriable =
        status === 503 || status === 429 ||
        /\b503\b|\b429\b|UNAVAILABLE|RESOURCE_EXHAUSTED|rate.?limit/i.test(message);

      if (isRetriable && attempt < MAX_RETRIES) {
        const backoffMs = (2 ** attempt * 1000) + Math.random() * 500;
        console.warn(
          `  [retry ${attempt}/${MAX_RETRIES}] ${lang}: ${message}. Waiting ${Math.round(backoffMs)}ms before retrying...`
        );
        await sleep(backoffMs);
        continue;
      }
      break;
    }
  }
  throw lastError;
}

/**
 * Polls a submitted batch job with `ai.batches.get` every
 * BATCH_POLL_INTERVAL_MS until it reaches a terminal state. Resolves with the
 * final job object on success ('SUCCEEDED'/'PARTIALLY_SUCCEEDED'), and throws
 * on failure, cancellation, expiry, or exceeding the poll attempt ceiling.
 */
async function pollBatchJob(job) {
  let current = job;
  for (let attempt = 0; attempt < BATCH_MAX_POLL_ATTEMPTS; attempt++) {
    const state = String(current?.state || '');
    if (state.includes('SUCCEEDED')) return current;
    if (state.includes('FAILED') || state.includes('CANCELLED') || state.includes('EXPIRED')) {
      const detail = current?.error ? `: ${JSON.stringify(current.error)}` : '';
      throw new Error(`Batch job ${current?.name} ended with state ${state}${detail}`);
    }
    await sleep(BATCH_POLL_INTERVAL_MS);
    current = await ai.batches.get({ name: current.name });
  }
  throw new Error(
    `Batch job ${current?.name} did not complete within ${(BATCH_MAX_POLL_ATTEMPTS * BATCH_POLL_INTERVAL_MS) / 60000} minutes (last state: ${current?.state})`
  );
}

/**
 * Submits and polls a single Gemini Batch API job translating every pending
 * file into `lang`. Returns a Map keyed by file name, with values of the form
 * `{ text }` on success or `{ error }` on a per-item failure. Throws if the
 * batch job itself cannot be submitted or fails/times out at the job level —
 * callers should catch this and fall back to sequential processing.
 */
async function translateLanguageWithBatch(lang, pendingFiles) {
  const inlinedRequests = pendingFiles.map((item, index) => ({
    model: MODEL_NAME,
    contents: (item.isScaffold ? buildScaffoldPrompt : buildPrompt)(item.sourceText, lang),
    metadata: { customId: `file-${index}-${item.file}` },
  }));

  console.log(`  [batch] Submitting batch job for ${lang} (${inlinedRequests.length} file(s), model ${MODEL_NAME})...`);
  const job = await ai.batches.create({
    model: MODEL_NAME,
    src: { inlinedRequests },
    config: { displayName: `cfi-srd-translate-${lang}-${Date.now()}` },
  });

  console.log(`  [batch] Job ${job?.name} submitted for ${lang}. Polling every ${BATCH_POLL_INTERVAL_MS / 1000}s...`);
  const completed = await pollBatchJob(job);

  const responses = completed?.dest?.inlinedResponses || [];
  const responseByCustomId = new Map();
  for (const inlinedResponse of responses) {
    const customId = inlinedResponse?.metadata?.customId;
    if (!customId) continue;
    responseByCustomId.set(customId, inlinedResponse);
  }

  const results = new Map();
  pendingFiles.forEach((item, index) => {
    const customId = `file-${index}-${item.file}`;
    const inlinedResponse = responseByCustomId.get(customId);

    if (!inlinedResponse) {
      results.set(item.file, { error: new Error('No matching response returned by batch job') });
      return;
    }
    if (inlinedResponse.error) {
      results.set(item.file, { error: new Error(JSON.stringify(inlinedResponse.error)) });
      return;
    }
    const text = extractResponseText(inlinedResponse.response);
    if (!text) {
      results.set(item.file, { error: new Error('Empty response text in batch result') });
      return;
    }
    results.set(item.file, { text });
  });

  return results;
}

/**
 * Rewrites relative Markdown links (e.g. `README.md`, `0001_Characters.md`)
 * so they are explicitly prefixed with the target language route
 * (`/es/README.md`), leaving absolute URLs, anchors, and already-prefixed
 * links untouched.
 */
function prefixScaffoldLinks(content, lang) {
  return content.replace(/\]\(([^)]+)\)/g, (match, target) => {
    const trimmed = target.trim();
    if (
      /^([a-z]+:)?\/\//i.test(trimmed) || // http(s)://, //cdn...
      trimmed.startsWith('#') ||
      trimmed.startsWith('mailto:') ||
      trimmed.startsWith(`/${lang}/`) ||
      trimmed.startsWith('/_media/') ||
      trimmed.startsWith('/_assets/')
    ) {
      return match;
    }
    const cleanTarget = trimmed.startsWith('/') ? trimmed.slice(1) : trimmed;
    return `](/${lang}/${cleanTarget})`;
  });
}

function copyScaffoldFile(fileName, lang, targetDir) {
  const sourcePath = path.join(SOURCE_DIR, fileName);
  if (!fs.existsSync(sourcePath)) return;
  const content = fs.readFileSync(sourcePath, 'utf8');
  const adapted = prefixScaffoldLinks(content, lang);
  fs.writeFileSync(path.join(targetDir, fileName), adapted, 'utf8');
}

async function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  const allEntries = fs.readdirSync(SOURCE_DIR).filter((f) => f.endsWith('.md'));
  const contentFiles = allEntries.filter((f) => !SCAFFOLD_FILES.has(f));
  const scaffoldFiles = allEntries.filter((f) => SCAFFOLD_FILES.has(f));

  console.log(`Discovered ${contentFiles.length} content file(s) in ${SOURCE_DIR}:`);
  contentFiles.forEach((f) => console.log(`  - ${f}`));
  console.log(`Discovered ${scaffoldFiles.length} TOC/scaffold file(s) (sidebar/navbar) to localize:`);
  scaffoldFiles.forEach((f) => console.log(`  - ${f}`));

  const manifest = loadManifest();
  let translatedCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  for (const lang of TARGET_LANGUAGES) {
    const targetDir = path.join(RULES_DIR, lang);
    fs.mkdirSync(targetDir, { recursive: true });

    console.log(`\n=== Language: ${lang} (${LANGUAGE_NAMES[lang] || lang}) ===`);

    const pendingFiles = [];
    for (const file of [...contentFiles, ...scaffoldFiles]) {
      const isScaffold = SCAFFOLD_FILES.has(file);
      const sourcePath = path.join(SOURCE_DIR, file);
      const outputPath = path.join(targetDir, file);
      const sourceHash = gitBlobHash(sourcePath);

      if (shouldSkip(manifest, file, lang, outputPath, sourceHash)) {
        console.log(`  [skip] ${file} -> ${lang} (unchanged since last translation)`);
        skippedCount++;
        continue;
      }

      pendingFiles.push({
        file,
        sourcePath,
        outputPath,
        sourceHash,
        isScaffold,
        sourceText: fs.readFileSync(sourcePath, 'utf8'),
      });
    }

    if (pendingFiles.length === 0) {
      console.log(`  Nothing to translate for ${lang} (all files up to date).`);
      continue;
    }

    /**
     * Applies TOC/scaffold-specific post-processing (rewriting link targets
     * to be prefixed with the target language route) before writing a
     * translated file, so category/group titles are localized *and* the
     * sidebar/navbar still routes to the correct language folder.
     */
    const finalizeOutput = (item, translatedText) =>
      item.isScaffold ? prefixScaffoldLinks(translatedText, lang) : translatedText;

    // Files that still need translating after the batch attempt (either
    // because the whole job failed, or because individual items came back
    // with errors/empty responses). These are retried sequentially so a
    // batch-level or per-item failure never blocks the rest of the run.
    let sequentialFallbackQueue = [];

    try {
      const batchResults = await translateLanguageWithBatch(lang, pendingFiles);

      for (const item of pendingFiles) {
        const result = batchResults.get(item.file);
        if (result?.text) {
          fs.writeFileSync(item.outputPath, finalizeOutput(item, result.text), 'utf8');
          manifest[item.file] = manifest[item.file] || {};
          manifest[item.file][lang] = item.sourceHash;
          translatedCount++;
        } else {
          console.warn(
            `  [batch-item-failed] ${item.file} -> ${lang}: ${result?.error?.message || 'unknown error'}. Falling back to sequential translation for this file.`
          );
          sequentialFallbackQueue.push(item);
        }
      }
    } catch (err) {
      console.warn(
        `  [batch-job-failed] Batch translation job for ${lang} failed: ${err.message}. Falling back to sequential processing for all ${pendingFiles.length} pending file(s) in this language.`
      );
      sequentialFallbackQueue = pendingFiles;
    }

    for (const item of sequentialFallbackQueue) {
      console.log(`  [translate:sequential] ${item.file} -> ${lang} ...`);
      try {
        const translated = await translateWithRetry(item.sourceText, lang, item.isScaffold);
        fs.writeFileSync(item.outputPath, finalizeOutput(item, translated), 'utf8');

        manifest[item.file] = manifest[item.file] || {};
        manifest[item.file][lang] = item.sourceHash;
        translatedCount++;
      } catch (err) {
        console.error(
          `  [FAILED] ${item.file} -> ${lang} after ${MAX_RETRIES} attempts: ${err.message}. Continuing with next file/language.`
        );
        failedCount++;

        // For TOC/scaffold files specifically, fall back to an untranslated
        // (English-titled) but correctly route-prefixed copy so navigation
        // never ends up missing/broken just because Gemini translation
        // failed for the sidebar/navbar.
        if (item.isScaffold) {
          try {
            copyScaffoldFile(item.file, lang, targetDir);
            console.warn(`  [scaffold-fallback] Wrote untranslated (English-titled) ${item.file} for ${lang}.`);
          } catch (copyErr) {
            console.error(`  Failed to write scaffold fallback for ${item.file} -> ${lang}: ${copyErr.message}`);
          }
        }
      }
    }
  }

  saveManifest(manifest);

  console.log('\n=== Translation run summary ===');
  console.log(`Translated: ${translatedCount}`);
  console.log(`Skipped (unchanged): ${skippedCount}`);
  console.log(`Failed: ${failedCount}`);
}

main().catch((err) => {
  console.error('Fatal error in translation pipeline:', err);
  process.exit(1);
});
