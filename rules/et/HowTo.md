# Eeltingimused

1. [Markdown-keele](https://www.markdownguide.org/basic-syntax/) põhiteadmised.

2. Peate looma tasuta [github-i](https://github.com/) konto, kui teil seda veel pole. Soovitatav on kasutada oma RPG nime, kuna sellest saab osa URL-ist, mida inimesed teie SRD-le ligipääsemiseks kasutavad.

3. Kogu seda protsessi saab teha brauseri kaudu ilma giti tundmata. Küll aga võimaldab Github Desktopi õppimine testida muudatusi lokaalselt, enne kui need avalikult nähtavaks teete.

> Kui teil on registreeritud domeeninimi, saate seda selle protsessiga kasutada, et luua SRD, nagu mina tegin: https://srd.7thextinctionrpg.com

# Protsess

## Repositooriumi loomine Githubis

1. Logige sisse Githubi

2. Liikuge avaliku malli juurde https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klõpsake "Use this template"

![Step3](/_media/Step3.png)

4. Valige "Create a new repository"

5. Sisestage repositooriumi nimi

![Step5](/_media/Step5.png)

6. Valige 'Private'

7. Valige 'Create repository'

Malli kopeerimiseks kulub 5–30 sekundit, seejärel on teil oma koopia olemas.

8. Veenduge, et teil on olemas fail ".nojekyll" – see on tühi fail, mis on vajalik veebisaidi majutamisel Githubis, vastasel juhul ei kuvata SRD-d õigesti. *(Ütleb GitHub Pagesile, et see ei töötleks avaldatud faile Jekylli kaudu).*


## Sisu lisamine

### *.md failid

.md failid on markdown-failid. Markdown on kerge märgenduskeel, mida saate kasutada lihtteksti dokumentidele vorminduselementide lisamiseks. Sõltuvalt sisu mahust saate kogu oma mängu teabe paigutada ühte *.md faili või, nagu mina tegin saidil [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), luua iga peatüki jaoks eraldi failid. "sample.md" pakub mõningaid vormindusnäiteid.

Markdown-keelt on väga lihtne õppida; kasutage eeltingimuste punkti 2 all antud linki, et saada täielik süntaksi loend.

### _Sidebar.md

See on teie menüü, navigeerimispaan veebisaidi vasakus servas. Kui olete oma repositooriumi markdown-faili lisanud, peate faili siia lisama, et selle sisu kaasataks. Järgige olemasolevat vormindust.


## Github Pagesi lubamine repositooriumi veebisaidiks muutmisel

1. Klõpsake oma repositooriumis 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Valige vasakpoolsest menüüst 'Pages'

![Website-Step2](/_media/Website-Step2.png)

3. Kui te pole repositooriumi avalikuks (public) teinud, on teil kaks valikut:
    a. Tehke repositoorium avalikuks, mis võimaldab teil kasutada Github Pagesi oma SRD-veebisaidi tasuta majutamiseks.
    b. Uuendage oma Githubi kontot (selle kirjutamise ajal maksab see 4 dollarit kuus või 48 dollarit aastas).

4. Valige jaotises 'Branch' 'main' ja klõpsake "Save"

5. Oodake 10–20 sekundit ja värskendage lehte

6. Nüüd näete oma URL-i, näiteks https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Fontide muutmine

1. Muutke faili /_assets/style.css

2. Jaotise 'body' alt leiate 'siteFont' ja 'headingFont'

3. Muutke need fontideks, mida soovite kasutada


## Fontawesome'i ja/või Material Iconsi pistikprogrammi kasutamine tasuta ikoonide kuvamiseks oma SRD-s

### Fontawesome

Kasutage Fontawesome'i tasuta ja animeeritud ikoonide saamiseks. Tellijad saavad kasutada Pro ikoone.

1. Leidke ikoon [Fontawesome'ist](https://fontawesome.com/icons)
2. Valige ikoon
3. Kopeerige hüpikaknas HTML-i vahekaardi all kõik " " vahele jääv

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Asetage kopeeritud tekst `:` vahele ilma tühikuteta

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Kasutage Material Iconsi rohkemate tasuta ikoonide saamiseks

1. Leidke ikoonid [Material Iconsist](https://fonts.google.com/icons)
2. Kopeerige ja sisestage veebisaidi span-link otse oma markdown-failidesse

```markup
<span class="material-icons">face</span>
```