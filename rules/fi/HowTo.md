# Esivaatimukset

1. [Markdown-kielen](https://www.markdownguide.org/basic-syntax/) perusteiden hallinta.

2. Sinun on luotava ilmainen [github](https://github.com/)-tili, jos sinulla ei sellaista vielä ole. Suositeltavaa on käyttää roolipelisi nimeä, sillä se tulee olemaan osa URL-osoitetta, jota ihmiset käyttävät SRD-sivustollesi pääsemiseksi.

3. Voit suorittaa koko prosessin selaimen kautta ilman git-osaamista. Github Desktopin opettelu kuitenkin mahdollistaa muutosten testaamisen paikallisesti ennen niiden julkaisemista koko maailman nähtäväksi.

> Jos sinulla on rekisteröity verkkotunnus, voit käyttää sitä tässä prosessissa luodaksesi SRD:n, kuten minä tein: https://srd.7thextinctionrpg.com

# Prosessi

## Repositorion luominen Githubiin

1. Kirjaudu sisään Githubiin

2. Siirry julkiseen mallipohjaan https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Napsauta "Use this template"

![Step3](/_media/Step3.png)

4. Valitse "Create a new repository"

5. Syötä repositorion nimi

![Step5](/_media/Step5.png)

6. Valitse 'Private' 

7. Valitse 'Create repository'

Mallipohjan kopioiminen kestää 5–30 sekuntia, minkä jälkeen sinulla on oma kopiosi.

8. Varmista, että sinulla on tiedosto ".nojekyll". Tämä on tyhjä tiedosto, jota tarvitaan verkkosivuston ylläpitämiseen Githubissa; muuten SRD ei näy oikein. *(Kertoo GitHub Pagesille, ettei julkaistuja tiedostoja saa ajaa Jekyllin läpi).*


## Sisällön lisääminen

### *.md-tiedostot

.md-tiedostot ovat markdown-tiedostoja. Markdown on kevyt merkintäkieli, jota voit käyttää muotoiluelementtien lisäämiseen pelkkään tekstiin. Sisällön koosta riippuen voit joko sijoittaa kaiken pelisi tiedon yhteen *.md-tiedostoon tai luoda erilliset tiedostot jokaiselle luvulle, kuten minä olen tehnyt osoitteessa [7thextinctionrpg.com](https://srd.7thextinctionrpg.com). "sample.md" tarjoaa joitakin esimerkkejä muotoilusta.

Markdown-kieli on erittäin helppo oppia; käytä esivaatimusten kohdassa 2 annettua linkkiä saadaksesi täydellisen luettelon syntaksista.

### _Sidebar.md

Tämä on verkkosivustosi valikko ja navigointipaneeli vasemmalla puolella. Kun olet lisännyt markdown-tiedoston repositoryysi, sinun on lisättävä tiedosto tänne, jotta sen sisältö tulee mukaan. Noudata olemassa olevaa muotoilua.


## Github Pagesin käyttöönotto repositorion muuttamiseksi verkkosivustoksi

1. Napsauta repositoriossasi 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Valitse vasemmanpuoleisesta valikosta 'Pages'

![Website-Step2](/_media/Website-Step2.png)

3. Jos et ole tehnyt repositoriosta julkista ('public'), sinulla on kaksi vaihtoehtoa:
    a. Tee repositoriosta julkinen, mikä sallii Github Pagesin käytön SRD-sivustosi ilmaisena isäntänä.
    b. Päivitä Github-tilisi (tätä kirjoitettaessa se maksaa 4 dollaria kuukaudessa tai 48 dollaria vuodessa).

4. Valitse 'Branch'-kohdasta 'main' ja napsauta tallenna.

5. Odota 10–20 sekuntia ja päivitä sivu.

6. Näet nyt URL-osoitteesi, kuten https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Fonttien vaihtaminen

1. Muokkaa tiedostoa /_assets/style.css

2. 'Body'-osion alta löydät kohdat siteFont & headingFont

3. Muuta nämä haluamiksesi fonteiksi


## Fontawesome- ja/tai Material Icons -liitännäisten käyttäminen ilmaisten kuvakkeiden näyttämiseen SRD:ssäsi

### Fontawesome

Käytä Fontawesomea saadaksesi ilmaisia ja animoituja kuvakkeita. Tilatut käyttäjät voivat käyttää Pro-kuvakkeita.

1. Etsi kuvake osoitteesta [Fontawesome](https://fontawesome.com/icons)
2. Valitse kuvake
3. Kopioi HTML-välilehdellä ponnahdusikkunasta kaikki " "-merkkien välissä oleva

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Sijoita kopioitu teksti `:`-merkkien väliin ilman välilyöntejä

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Käytä Material Iconseja saadaksesi lisää ilmaisia kuvakkeita.

1. Etsi kuvakkeet osoitteesta [Material Icons](https://fonts.google.com/icons)
2. Kopioi ja lisää web span -linkki suoraan markdown-tiedostoihisi

```markup
<span class="material-icons">face</span>
```