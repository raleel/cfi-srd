# Forkröfur

1. Grunnskilningur á [markdown tungumálinu](https://www.markdownguide.org/basic-syntax/).

2. Þú þarft að stofna ókeypis [github](https://github.com/) aðgang ef þú átt ekki einn slíkan. Ég mæli með að þú notir nafn spilsins þíns þar sem það verður hluti af vefslóðinni sem fólk notar til að nálgast SRD-ið þitt.

3. Þú getur gert allt þetta ferli í gegnum vafrann án þess að þekkja git. Samt sem áður mun það að læra á GitHub Desktop leyfa þér að prófa breytingar staðbundið áður en þú birtir þær fyrir umheiminum.

> Ef þú ert með lén skráð, geturðu notað það með þessu ferli til að búa til SRD eins og ég gerði: https://srd.7thextinctionrpg.com

# Ferlið

## Að búa til geymslu (repository) á Github

1. Skráðu þig inn á Github

2. Farðu á opinbera sniðmátið https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Smelltu á "Use this template"

![Step3](/_media/Step3.png)

4. Veldu "Create a new repository"

5. Sláðu inn nafn á geymsluna

![Step5](/_media/Step5.png)

6. Veldu 'Private'

7. Smelltu á 'Create repository'

Það tekur 5-30 sekúndur að afrita sniðmátið, eftir það átt þú þitt eigið eintak.

8. Gakktu úr skugga um að þú sért með skrána ".nojekyll". Þetta er tóm skrá sem þarf þegar vefsíða er hýst á Github, annars mun SRD-ið ekki birtast rétt. *(Segir GitHub Pages að keyra ekki birtar skrár í gegnum Jekyll).*


## Að bæta við efni

### *.md skrár

.md skrár eru markdown skrár. Markdown er létt uppsetningarmál sem þú getur notað til að bæta forsniði við venjulegan texta. Eftir stærð efnisins geturðu annaðhvort sett allar upplýsingar um spilið þitt í eina *.md skrá, eða eins og ég hef gert á [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), búið til sérstakar skrár fyrir hvern kafla. "sample.md" skráin sýnir nokkur dæmi um forsnið.

Markdown tungumálið er mjög auðvelt að læra, notaðu hlekkinn sem er gefinn í lið 2 undir Forkröfur hér að ofan fyrir fullan lista yfir setningarfræði.

### _Sidebar.md

Þetta er valmyndin þín, stýripallurinn vinstra megin á vefsíðunni. Þegar þú hefur bætt markdown skrá við geymsluna þína þarftu að bæta skránni við hér svo innihald hennar verði tekið með. Fylgdu fyrirliggjandi forsniði.


## Virkja Github Pages til að breyta geymslunni í vefsíðu

1. Í geymslunni þinni, smelltu á 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Veldu 'Pages' í valmyndinni vinstra megin

![Website-Step2](/_media/Website-Step2.png)

3. Ef þú hefur ekki gert geymsluna 'public' (opinbera), hefurðu tvo valkosti:
    a. Gera geymsluna opinbera, sem gerir þér kleift að nota Github Pages til að hýsa SRD-vefsíðuna þína ókeypis.
    b. Uppfæra Github-aðganginn þinn (þegar þetta er skrifað kostar það $4 á mánuði eða $48 á ári).

4. Undir 'Branch', veldu 'main' og smelltu á save.

5. Bíddu í 10-20 sekúndur og endurhlaðið síðuna.

6. Þú munt nú sjá vefslóðina þína, svo sem https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Að breyta leturgerðum

1. Breyttu skránni /_assets/style.css

2. Undir 'body section' finnur þú siteFont & headingFont

3. Breyttu þessum í þær leturgerðir sem þú vilt nota


## Að nota Fontawesome og/eða Material Icons viðbót til að sýna ókeypis tákn í SRD-inu þínu

### Fontawesome

Notaðu Fontawesome til að fá ókeypis tákn og hreyfimyndatákn. Áskrifendur geta notað Pro tákn.

1. Finndu táknið á [Fontawesome](https://fontawesome.com/icons)
2. Veldu táknið
3. Í sprettiglugganum, undir HTML flipanum, afritaðu allt á milli " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Settu afritaða textann á milli `:` án bila

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Notaðu Material Icons fyrir fleiri ókeypis tákn

1. Finndu táknin á [Material Icons](https://fonts.google.com/icons)
2. Afritaðu og settu vef-span hlekkinn beint inn í markdown skrárnar þínar

```markup
<span class="material-icons">face</span>
```