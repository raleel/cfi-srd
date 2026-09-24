# Esivaatimukset

1. Markdown-kielen perusteiden tuntemus [markdown language](https://www.markdownguide.org/basic-syntax/).

2. Sinun on luotava ilmainen [GitHub](https://github.com/)-tili, jos sinulla ei sellaista ole. Suosittelemme käyttämään roolipelisi nimeä, sillä se tulee osaksi URL-osoitetta, jota ihmiset käyttävät SRD-sivustollesi pääsemiseksi.

3. Voit tehdä koko prosessin selaimen kautta ilman git-osaamista. GitHub Desktopin opettelu kuitenkin mahdollistaa muutosten testaamisen paikallisesti ennen niiden julkaisemista koko maailman nähtäväksi.

> Jos sinulla on rekisteröity verkkotunnus, voit käyttää sitä tässä prosessissa luodaksesi SRD-sivuston, kuten minä olen tehnyt: https://srd.7thextinctionrpg.com

# Prosessi

## Repositorion luominen GitHubiin

1. Kirjaudu GitHubiin

2. Siirry julkiseen malliin: https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klikkaa "Use this template"

![Step3](/_media/Step3.png)

4. Valitse "Create a new repository"

5. Syötä repositorion nimi

![Step5](/_media/Step5.png)

6. Valitse 'Private' (yksityinen)

7. Valitse 'Create repository'

Malli kopioituu 5–30 sekunnissa, jonka jälkeen sinulla on oma kopiosi.

8. Varmista, että sinulla on ".nojekyll"-tiedosto. Tämä on tyhjä tiedosto, jota tarvitaan sivustoa GitHubissa ylläpidettäessä; muuten SRD ei näy oikein. *(Kertoo GitHub Pagesille, ettei julkaistuja tiedostoja saa ajaa Jekyllin läpi).*


## Sisällön lisääminen

### *.md-tiedostot

.md-tiedostot ovat markdown-tiedostoja. Markdown on kevyt merkintäkieli, jota voit käyttää muotoiluelementtien lisäämiseen pelkkään tekstimuotoiseen dokumenttiin. Sisältösi koosta riippuen voit joko sijoittaa kaiken pelisi tiedon yhteen *.md-tiedostoon tai luoda erilliset tiedostot jokaiselle luvulle, kuten minä olen tehnyt osoitteessa [7thextinctionrpg.com](https://srd.7thextinctionrpg.com). "Sample.md"-tiedosto sisältää esimerkkejä muotoilusta.

Markdown-kieli on erittäin helppo oppia; käytä esivaatimusten kohdassa 2 annettua linkkiä saadaksesi täyden listan syntaksista.

### _sidebar.md

Tämä on valikkosi, sivuston vasemmassa reunassa oleva navigointipaneeli. Kun olet lisännyt markdown-tiedoston repositoryysi, sinun on lisättävä tiedosto tänne, jotta sen sisältö tulee mukaan. Seuraa olemassa olevaa muotoilua.


## GitHub Pagesin käyttöönotto repositorion muuttamiseksi verkkosivustoksi

1. Klikkaa repositoriostasi 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Valitse vasemmanpuoleisesta valikosta 'Pages'

![Website-Step2](/_media/Website-Step2.png)

3. Jos et ole tehnyt repositoriosta julkista, sinulla on kaksi vaihtoehtoa:
    a. Tee repositoriosta julkinen, mikä sallii GitHub Pagesin käytön SRD-sivustosi isännöintiin ilmaiseksi.
    b. Päivitä GitHub-tilisi (tätä kirjoitettaessa se maksaa 4 dollaria kuukaudessa tai 48 dollaria vuodessa).

4. Valitse 'Branch'-kohdasta 'main' ja klikkaa Save (tallenna).

5. Odota 10–20 sekuntia ja päivitä sivu.

6. Näet nyt URL-osoitteesi, kuten https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Fonttien muuttaminen

1. Muokkaa tiedostoa /_assets/style.css

2. 'body section' -kohdasta löydät kohdat siteFont ja headingFont

3. Muuta nämä fonteiksi, joita haluat käyttää


## Fontawesome- ja/tai Material Icons -lisäosien käyttäminen ilmaisten ikonien näyttämiseen SRD:ssä

### Fontawesome

Käytä Fontawesomea saadaksesi ilmaisia ikoneita ja animoituja ikoneita. Tilatut käyttäjät voivat käyttää Pro-ikoneita.

1. Etsi ikoni osoitteesta [Fontawesome](https://fontawesome.com/icons)
2. Valitse ikoni
3. Kopioi ponnahdusikkunasta HTML-välilehden alta kaikki lainausmerkkien " " välistä

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Aseta kopioitu teksti `:` väliin ilman välilyöntejä

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Käytä Material Iconsia saadaksesi lisää ilmaisia ikoneita.

1. Etsi ikoni osoitteesta [Material Icons](https://fonts.google.com/icons)
2. Kopioi ja lisää web span -linkki suoraan markdown-tiedostoihisi

```markup
<span class="material-icons">face</span>
```