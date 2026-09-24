# Forkröfur

1. Grunnskilningur á [markdown-tungumálinu](https://www.markdownguide.org/basic-syntax/).

2. Þú þarft að stofna ókeypis [GitHub](https://github.com/) aðgang ef þú átt ekki einn slíkan. Við mælum með því að þú notir nafn spilsins þíns, þar sem það verður hluti af vefslóðinni sem fólk notar til að fá aðgang að SRD-skjalinu þínu.

3. Þú getur unnið allt þetta ferli í gegnum vafrann án þess að þekkja git. Hins vegar mun það að læra á GitHub Desktop gera þér kleift að prófa allar breytingar staðbundið áður en þú birtir þær fyrir umheiminn.

> Ef þú ert með skráð lén, geturðu notað það með þessu ferli til að búa til SRD eins og ég hef gert https://srd.7thextinctionrpg.com

# Ferlið

## Að búa til gagnageymslu (repository) á Github

1. Skráðu þig inn á Github

2. Farðu á opinbera sniðmátið https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Smelltu á "Use this template"

![Step3](/_media/Step3.png)

4. Veldu "Create a new repository"

5. Sláðu inn nafn á gagnageymslunni

![Step5](/_media/Step5.png)

6. Veldu 'Private'

7. Veldu 'Create repository'

Það tekur 5–30 sekúndur að afrita sniðmátið, þá munt þú eiga þitt eigið eintak.

8. Gakktu úr skugga um að þú sért með skrána ".nojekyll". Þetta er tóm skrá sem þarf þegar vefsíða er hýst á Github, annars mun SRD-skjalið ekki birtast rétt. *(Segir GitHub Pages að keyra ekki birtar skrár í gegnum Jekyll).*


## Að bæta við efni

### *.md skrár

.md skrár eru markdown-skrár. Markdown er létt uppsetningarmál sem þú getur notað til að bæta formattækifærum við venjulegar textaskrár. Eftir stærð efnisins geturðu annaðhvort sett allar upplýsingar leiksins í eina *.md skrá, eða eins og ég hef gert á [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), búið til aðskildar skrár fyrir hvern kafla. "Sample.md" skráin sýnir nokkur dæmi um formattækifæri.

Markdown-tungumálið er mjög auðvelt að læra; notaðu hlekkinn sem gefinn er í lið 2 undir Forkröfur hér að ofan fyrir heildarlista yfir setningafræði.

### _sidebar.md

Þetta er valmyndin þín, yfirlitsstika á vinstri hlið vefsíðunnar. Þegar þú hefur bætt markdown-skrá við gagnageymsluna þína þarftu að bæta skránni við hér svo innihald hennar verði tekið með. Fylgdu núverandi formattækifærum.


## Virkja Github Pages til að breyta gagnageymslunni í vefsíðu

1. Í gagnageymslunni þinni skaltu smella á 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Veldu 'Pages' í valmyndinni vinstra megin

![Website-Step2](/_media/Website-Step2.png)

3. Ef þú hefur ekki gert gagnageymsluna 'public', hefurðu tvo kosti:
    a. Gerðu gagnageymsluna opinbera, sem gerir þér síðan kleift að nota Github Pages til að hýsa SRD-vefsíðuna þína ókeypis
    b. Uppfærðu Github-aðganginn þinn (þegar þetta er skrifað kostar það $4 á mánuði eða $48 á ári)

4. Undir 'Branch' skaltu velja 'main' og smella á Save

5. Bíddu í 10–20 sekúndur og endurhlaðið síðuna

6. Þú munt nú sjá vefslóðina þína, til dæmis https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Að breyta leturgerðum

1. Breyttu skránni /_assets/style.css

2. Undir 'body section' finnurðu siteFont & headingFont

3. Breyttu þessu í þær leturgerðir sem þú vilt nota


## Að nota Fontawesome og/eða Material Icons viðbætur til að birta ókeypis táknmyndir í SRD-skjalinu þínu

### Fontawesome

Notaðu Fontawesome til að fá ókeypis táknmyndir og hreyfimyndir. Áskrifendur geta notað Pro táknmyndir.

1. Finndu táknmyndina á [Fontawesome](https://fontawesome.com/icons)
2. Veldu táknmyndina
3. Í sprettiglugganum, undir HTML-flipanum, afritaðu allt á milli " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Settu afritaða textann á milli `:` án bila

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Notaðu Material Icons fyrir fleiri ókeypis táknmyndir

1. Finndu táknmyndirnar á [Material Icons](https://fonts.google.com/icons)
2. Afritaðu og settu vef-span-hlekkinn beint inn í markdown-skrárnar þínar

```markup
<span class="material-icons">face</span>
```