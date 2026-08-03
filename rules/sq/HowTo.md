# Parakushtet

1. Një kuptim bazë i [gjuhës markdown](https://www.markdownguide.org/basic-syntax/).

2. Do t'ju duhet të krijoni një llogari falas në [github](https://github.com/) nëse nuk keni një të tillë. Rekomandohet të përdorni emrin e RPG-së tuaj, pasi ky do të bëhet pjesë e URL-së që njerëzit do të përdorin për të hyrë në SRD-në tuaj.

3. Ju mund ta bëni të gjithë këtë proces përmes shfletuesit pa ditur git. Megjithatë, mësimi i github desktop do t'ju lejojë të testoni çdo ndryshim lokalisht përpara se t'i publikoni ato që t'i shohë bota.

> Nëse keni një emër domaini të regjistruar, mund ta përdorni atë me këtë proces për të krijuar një SRD siç kam bërë unë https://srd.7thextinctionrpg.com

# Procesi

## Krijimi i depozitës (Repository) në Github

1. Identifikohuni në Github

2. Navigoni te shablloni publik https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klikoni "Use this template"

![Step3](/_media/Step3.png)

4. Zgjidhni "Create a new repository"

5. Vendosni një emër për depozitën

![Step5](/_media/Step5.png)

6. Zgjidhni 'Private'

7. Zgjidhni 'Create repository'

Do të duhen 5-30 sekonda për të kopjuar shabllonin, pastaj do të keni kopjen tuaj.

8. Sigurohuni që keni skedarin ".nojekyll", ky është një skedar bosh që nevojitet kur strehoni një faqe interneti në Github, përndryshe SRD-ja nuk do të shfaqet siç duhet. *(I tregon GitHub Pages të mos i përpunojë skedarët e publikuar përmes Jekyll).*


## Shtimi i përmbajtjes suaj

### Skedarët *.md

Skedarët .md janë skedarë markdown; Markdown është një gjuhë e thjeshtë shënuese që mund ta përdorni për të shtuar elemente formatimi në dokumente me tekst të thjeshtë. Në varësi të madhësisë së përmbajtjes suaj, mund t'i vendosni të gjitha informacionet e lojës suaj në një skedar të vetëm *.md, ose siç kam bërë unë në [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), të krijoni skedarë të veçantë për çdo kapitull. "sample.md" ofron disa shembuj formatimi.

Gjuha Markdown është shumë e lehtë për t'u mësuar, përdorni lidhjen e dhënë në pikën 2 nën Parakushtet më sipër për një listë të plotë të sintaksës.

### _Sidebar.md

Ky është menyja juaj, paneli i navigimit në anën e majtë të faqes. Pasi të keni shtuar një skedar markdown në depozitën tuaj, duhet ta shtoni skedarin këtu në mënyrë që përmbajtja e tij të përfshihet. Ndiqni formatimin ekzistues.


## Aktivizimi i Github Pages për ta kthyer depozitën në një faqe interneti

1. Në depozitën tuaj klikoni te 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Zgjidhni 'Pages' në menunë e anës së majtë

![Website-Step2](/_media/Website-Step2.png)

3. Nëse nuk e keni bërë depozitën 'public', keni dy zgjedhje
    a. Bëjeni depozitën publike, gjë që do t'ju lejojë të përdorni Github pages për të strehuar faqen tuaj të SRD-së falas
    b. Përmirësoni llogarinë tuaj në Github (në kohën e shkrimit të këtij teksti, kushton 4 dollarë në muaj ose tarifë vjetore 48 dollarë)

4. Nën 'Branch' zgjidhni 'main' dhe klikoni save

5. Prisni 10-20 sekonda dhe rifreskoni faqen

6. Tani do të shihni URL-në tuaj, si për shembull https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Ndryshimi i shkronjave (Fonts)

1. Redaktoni skedarin /_assets/style.css

2. Nën 'body section' do të gjeni siteFont & headingFont

3. Ndryshojini këto me shkronjat që dëshironi të përdorni


## Përdorimi i shtojcës Fontawesome dhe/ose Material Icons për të shfaqur ikona falas në SRD-në tuaj

### Fontawesome

Përdorni Fontawesome për të marrë ikona falas dhe ikona të animuara. Përdoruesit me pajtim mund të përdorin Pro Icons

1. Gjeni ikonën në [Fontawesome](https://fontawesome.com/icons)
2. Zgjidhni ikonën
3. Në dritaren që hapet, nën tab-in HTML kopjoni gjithçka midis " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Vendoseni tekstin e kopjuar midis `:` pa hapësira

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Përdorni Material Icons për më shumë ikona falas

1. Gjeni ikonat në [Material Icons](https://fonts.google.com/icons)
2. Kopjoni dhe futeni lidhjen web span direkt në skedarët tuaj markdown

```markup
<span class="material-icons">face</span>
```