# Előfeltételek

1. A [markdown nyelv](https://www.markdownguide.org/basic-syntax/) alapvető ismerete.

2. Szükséged lesz egy ingyenes [github](https://github.com/) fiókra, ha még nincs. Javasolt az RPG-d nevét használni, mivel ez része lesz annak az URL-nek, amelyet a felhasználók az SRD eléréséhez használnak.

3. Ezt az egész folyamatot elvégezheted a böngészőn keresztül anélkül, hogy ismerned kellene a git-et. Bár a github desktop elsajátítása lehetővé teszi, hogy a változtatásokat helyileg teszteld, mielőtt élesítenéd őket a világ számára.

> Ha van regisztrált domain neved, ezt a folyamatot használva létrehozhatsz egy SRD-t, mint amilyen az enyém: https://srd.7thextinctionrpg.com

# A folyamat

## A tároló (repository) létrehozása a Githubon

1. Jelentkezz be a Githubra

2. Navigálj a nyilvános sablonra: https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Kattints a "Use this template" (Sablon használata) gombra

![Step3](/_media/Step3.png)

4. Válaszd a "Create a new repository" (Új tároló létrehozása) lehetőséget

5. Adj meg egy nevet a tárolónak

![Step5](/_media/Step5.png)

6. Válaszd a 'Private' (Privát) opciót

7. Kattints a 'Create repository' gombra

5-30 másodpercbe telik, amíg lemásolja a sablont, utána meglesz a saját példányod.

8. Győződj meg róla, hogy megvan a ".nojekyll" fájl. Ez egy üres fájl, amelyre szükség van, amikor webhelyet hosztingolsz a Githubon, különben az SRD nem jelenik meg megfelelően. *(Ez jelzi a GitHub Pages-nek, hogy ne futtassa a közzétett fájlokat a Jekyll-en keresztül).*


## Tartalom hozzáadása

### *.md fájlok

A .md fájlok markdown fájlok; a Markdown egy könnyű jelölőnyelv, amelyet formázási elemek egyszerű szöveges dokumentumokhoz való hozzáadására használhatsz. A tartalom méretétől függően a játékod összes információját elhelyezheted egyetlen *.md fájlban, vagy ahogy én tettem a [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) oldalon, létrehozhatsz külön fájlokat minden fejezetnek. A "sample.md" néhány formázási példát tartalmaz.

A Markdown nyelv nagyon könnyen megtanulható, a teljes szintaxislista megtekintéséhez használd az Előfeltételek 2. pontjában megadott linket.

### _Sidebar.md

Ez a menüd, a webhely bal oldalán található navigációs panel. Miután hozzáadtál egy markdown fájlt a tárolódhoz, itt hozzá kell adnod a fájlt, hogy a tartalma bekerüljön. Kövesd a meglévő formázást.


## Github Pages engedélyezése a tároló webhellyé alakításához

1. A tárolódban kattints a 'Settings' (Beállítások) fülre

![Website-Step1](/_media/Website-Step1.png)

2. Válaszd a 'Pages' opciót a bal oldali menüben

![Website-Step2](/_media/Website-Step2.png)

3. Ha még nem tetted 'public' (nyilvános) állapotúvá a tárolót, két választásod van:
    a. Tedd nyilvánossá a tárolót, ami lehetővé teszi, hogy a Github Pages-t használd az SRD webhelyed ingyenes hosztolására
    b. Frissítsd a Github fiókodat (ennek megírásakor ez havi 4 dollárba vagy évi 48 dollárba kerül)

4. A 'Branch' (Ág) alatt válaszd a 'main'-t és kattints a mentésre

5. Várj 10-20 másodpercet, majd frissítsd az oldalt

6. Most már látni fogod az URL-edet, például: https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Betűtípusok módosítása

1. Szerkeszd az /_assets/style.css fájlt

2. A 'body section' alatt megtalálod a siteFont & headingFont beállításokat

3. Módosítsd ezeket a használni kívánt betűtípusokra


## Fontawesome és/vagy Material Icons bővítmény használata ingyenes ikonok megjelenítéséhez az SRD-dben

### Fontawesome

Használd a Fontawesome-ot ingyenes ikonokért és animált ikonokért. Az előfizetők használhatják a Pro ikonokat.

1. Keresd meg az ikont a [Fontawesome](https://fontawesome.com/icons) oldalon
2. Válaszd ki az ikont
3. A felugró ablakban, a HTML fül alatt másold ki mindent a " " között

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Illeszd a kimásolt szöveget `:` közé, szóközök nélkül

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Használd a Material Icons-t további ingyenes ikonokért

1. Keresd meg az ikonokat a [Material Icons](https://fonts.google.com/icons) oldalon
2. Másold ki és illeszd be a web span linket közvetlenül a markdown fájljaidba

```markup
<span class="material-icons">face</span>
```