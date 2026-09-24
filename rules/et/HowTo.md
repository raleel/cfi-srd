# Eeldused

1. Põhiline arusaam [markdown-keelest](https://www.markdownguide.org/basic-syntax/).

2. Peate looma tasuta [GitHubi](https://github.com/) konto, kui teil seda veel pole. Soovitame kasutada oma RPG nime, kuna sellest saab osa URL-ist, mida inimesed teie SRD-le ligipääsemiseks kasutavad.

3. Kogu seda protsessi saab teha brauseri kaudu ilma giti tundmata. Kuigi GitHub Desktopi õppimine võimaldab teil muudatusi kohalikult testida, enne kui need maailmale nähtavaks teete.

> Kui teil on registreeritud domeeninimi, saate seda selle protsessiga kasutada SRD loomiseks, nagu mina tegin: https://srd.7thextinctionrpg.com

# Protsess

## Hoidla loomine GitHubis

1. Logige sisse GitHubi

2. Navigeerige avaliku malli juurde https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klõpsake "Use this template" (Kasuta seda malli)

![Step3](/_media/Step3.png)

4. Valige "Create a new repository" (Loo uus hoidla)

5. Sisestage hoidla nimi

![Step5](/_media/Step5.png)

6. Valige 'Private' (Privaatne)

7. Valige 'Create repository' (Loo hoidla)

Malli kopeerimiseks kulub 5-30 sekundit, seejärel on teil oma koopia.

8. Veenduge, et teil on fail ".nojekyll" – see on tühi fail, mida on vaja veebisaidi majutamisel GitHubis, vastasel juhul ei kuvata SRD-d õigesti. *(Ütleb GitHub Pagesile, et avaldatud faile ei tohi Jekylliga töödelda).*


## Oma sisu lisamine

### *.md failid

.md failid on markdown-failid. Markdown on kerge märgenduskeel, mida saate kasutada tekstidokumentidele vorminduselementide lisamiseks. Sõltuvalt sisu mahust saate kogu oma mängu teabe paigutada ühte *.md faili või luua iga peatüki jaoks eraldi failid, nagu mina tegin aadressil [7thextinctionrpg.com](https://srd.7thextinctionrpg.com). "Sample.md" pakub mõningaid vormindamisnäiteid.

Markdown-keelt on väga lihtne õppida, kasutage süntaksi täieliku loendi saamiseks ülaltoodud Eelduste punkti 2 all olevat linki.

### _sidebar.md

See on teie menüü, navigeerimispaan veebisaidi vasakus servas. Kui olete oma hoidlasse markdown-faili lisanud, peate faili siia lisama, et selle sisu oleks kaasatud. Järgige olemasolevat vormindust.


## GitHub Pagesi lubamine hoidla veebisaidiks muutmiseks

1. Klõpsake oma hoidlas 'Settings' (Seaded)

![Website-Step1](/_media/Website-Step1.png)

2. Valige vasakpoolsest menüüst 'Pages'

![Website-Step2](/_media/Website-Step2.png)

3. Kui te pole hoidlat 'avalikuks' muutnud, on teil kaks valikut:
    a. Muutke hoidla avalikuks, mis võimaldab teil kasutada GitHub pagesi oma SRD-veebisaidi tasuta majutamiseks
    b. Uuendage oma GitHubi kontot (selle kirjutamise ajal maksab see 4 dollarit kuus või 48 dollarit aastas)

4. Valige jaotise 'Branch' all 'main' ja klõpsake Save (Salvesta)

5. Oodake 10-20 sekundit ja värskendage lehte

6. Nüüd näete oma URL-i, näiteks https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Fontide muutmine

1. Muutke faili /_assets/style.css

2. Jaotise 'body' alt leiate siteFont ja headingFont

3. Muutke need fontideks, mida soovite kasutada


## Fontawesome'i ja/või Material Icons plugina kasutamine tasuta ikoonide kuvamiseks teie SRD-s

### Fontawesome

Kasutage Fontawesome'i tasuta ikoonide ja animeeritud ikoonide saamiseks. Tellijad saavad kasutada Pro ikoone

1. Leidke ikoon [Fontawesome'ist](https://fontawesome.com/icons)
2. Valige ikoon
3. Hüpikaknas kopeerige HTML-i vahekaardi all kõik jutumärkide " " vahele jääv

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Paigutage kopeeritud tekst `:` vahele ilma tühikuteta

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Kasutage Material Iconsi rohkemate tasuta ikoonide jaoks

1. Leidke ikoonid [Material Iconsist](https://fonts.google.com/icons)
2. Kopeerige ja sisestage veebipõhine span-link otse oma markdown-failidesse

```markup
<span class="material-icons">face</span>
```