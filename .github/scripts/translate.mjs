#!/usr/bin/env node
/**
 * Automated multi-language translation pipeline for cfi-srd.
 *
 * Scans `rules/en/` for markdown source files, translates each one into every
 * language in TARGET_LANGUAGES using the Gemini API, and copies/adapts the
 * Docsify scaffolding files (_sidebar.md / _navbar.md) into each target
 * language directory.
 *
 * Designed to be resilient: transient 503/429 errors from the Gemini API are
 * retried with exponential backoff + jitter, and a single failing
 * file/language pair never aborts the overall job. Already-translated files
 * whose source content hasn't changed (tracked via git blob hashes) are
 * skipped to save API cost and execution time.
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
const MODEL_NAME = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

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

async function translateWithRetry(text, lang) {
  const languageName = LANGUAGE_NAMES[lang] || lang;
  const prompt = [
    `Translate the following Docsify/Markdown document from English into ${languageName} (locale code "${lang}").`,
    'Preserve all Markdown formatting, code blocks, HTML tags, table structure, links, and image references exactly.',
    'Do not translate content inside code fences, URLs, or file paths. Only translate prose, headings, and table cell text.',
    'Return ONLY the translated Markdown document, with no additional commentary.',
    '',
    '--- DOCUMENT START ---',
    text,
    '--- DOCUMENT END ---',
  ].join('\n');

  let lastError;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: MODEL_NAME,
        contents: prompt,
      });
      const output = response?.text;
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

  console.log(`Discovered ${contentFiles.length} content file(s) in ${SOURCE_DIR}:`);
  contentFiles.forEach((f) => console.log(`  - ${f}`));

  const manifest = loadManifest();
  let translatedCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  for (const lang of TARGET_LANGUAGES) {
    const targetDir = path.join(RULES_DIR, lang);
    fs.mkdirSync(targetDir, { recursive: true });

    console.log(`\n=== Language: ${lang} (${LANGUAGE_NAMES[lang] || lang}) ===`);

    // Scaffolding: copy _sidebar.md / _navbar.md with route-prefixed links.
    for (const scaffoldFile of SCAFFOLD_FILES) {
      try {
        copyScaffoldFile(scaffoldFile, lang, targetDir);
      } catch (err) {
        console.error(`  Failed to copy scaffold ${scaffoldFile} for ${lang}: ${err.message}`);
      }
    }

    for (const file of contentFiles) {
      const sourcePath = path.join(SOURCE_DIR, file);
      const outputPath = path.join(targetDir, file);
      const sourceHash = gitBlobHash(sourcePath);

      if (shouldSkip(manifest, file, lang, outputPath, sourceHash)) {
        console.log(`  [skip] ${file} -> ${lang} (unchanged since last translation)`);
        skippedCount++;
        continue;
      }

      const sourceText = fs.readFileSync(sourcePath, 'utf8');
      console.log(`  [translate] ${file} -> ${lang} ...`);

      try {
        const translated = await translateWithRetry(sourceText, lang);
        fs.writeFileSync(outputPath, translated, 'utf8');

        manifest[file] = manifest[file] || {};
        manifest[file][lang] = sourceHash;
        translatedCount++;
      } catch (err) {
        console.error(
          `  [FAILED] ${file} -> ${lang} after ${MAX_RETRIES} attempts: ${err.message}. Continuing with next file/language.`
        );
        failedCount++;
        continue;
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
