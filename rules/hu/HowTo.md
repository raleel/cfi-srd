# Előfeltételek

1. A [markdown nyelv](https://www.markdownguide.org/basic-syntax/) alapvető ismerete.

2. Szükséged lesz egy ingyenes [GitHub](https://github.com/) fiókra, ha még nincs. Azt javasoljuk, hogy az RPG-d nevét használd, mivel ez annak az URL-nek a része lesz, amelyet a felhasználók az SRD eléréséhez használni fognak.

3. Ezt az egész folyamatot elvégezheted a böngészőn keresztül, git-ismeretek nélkül. Bár a GitHub Desktop elsajátítása lehetővé teszi, hogy lokálisan tesztelj bármilyen változtatást, mielőtt élesben publikálnád azokat a világ számára.

> Ha regisztráltál saját domain nevet, azt is használhatod ebben a folyamatban egy olyan SRD létrehozásához, mint amilyen az enyém: https://srd.7thextinctionrpg.com

# A folyamat

## A tároló (Repository) létrehozása a GitHubon

1. Jelentkezz be a GitHubra

2. Navigálj a nyilvános sablonhoz: https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Kattints a "Use this template" (Sablon használata) gombra

![Step3](/_media/Step3.png)

4. Válaszd a "Create a new repository" (Új tároló létrehozása) lehetőséget

5. Adj meg egy tárolónevet

![Step5](/_media/Step5.png)

6. Válaszd a 'Private' (Privát) opciót

7. Válaszd a 'Create repository' (Tároló létrehozása) gombot

5-30 másodpercet vesz igénybe a sablon másolása, utána meglesz a saját példányod.

8. Győződj meg róla, hogy megvan a ".nojekyll" fájl. Ez egy üres fájl, amelyre szükség van, ha weboldalt üzemeltetsz a GitHubon, különben az SRD nem fog megfelelően megjelenni. *(Azt közli a GitHub Pages-szel, hogy a publikált fájlokat ne futtassa át a Jekyllen).*


## Tartalom hozzáadása

### *.md fájlok

A .md fájlok markdown fájlok. A Markdown egy könnyű jelölőnyelv, amelyet formázási elemek hozzáadására használhatsz egyszerű szöveges dokumentumokhoz. A tartalom méretétől függően az összes játékadatot elhelyezheted egyetlen *.md fájlban, vagy – ahogy én tettem a [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) oldalon – külön fájlokat hozhatsz létre az egyes fejezeteknek. A "Sample.md" néhány formázási példát tartalmaz.

A Markdown nyelv nagyon könnyen megtanulható, a fenti Előfeltételek 2. pontjában található linket használhatod a szintaxis teljes listájához.

### _sidebar.md

Ez a menü, a navigációs panel a weboldal bal oldalán. Miután hozzáadtál egy markdown fájlt a tárolódhoz, itt kell hozzáadnod a fájlt, hogy a tartalma bekerüljön. Kövesd a meglévő formázást.


## GitHub Pages engedélyezése a tároló weboldallá alakításához

1. A tárolódban kattints a 'Settings' (Beállítások) gombra

![Website-Step1](/_media/Website-Step1.png)

2. Válaszd a 'Pages' (Oldalak) menüpontot a bal oldali menüben

![Website-Step2](/_media/Website-Step2.png)

3. Ha még nem tetted 'nyilvánossá' (public) a tárolót, két választásod van:
    a. Tedd nyilvánossá a tárolót, ami lehetővé teszi, hogy a GitHub Pages segítségével ingyenesen üzemeltesd az SRD weboldalad
    b. Frissítsd a GitHub-fiókod (ennek írásakor havi 4 dollárba vagy évi 48 dollárba kerül)

4. A 'Branch' (Ág) alatt válaszd a 'main'-t, és kattints a Mentés gombra

5. Várj 10-20 másodpercet, majd frissítsd az oldalt

6. Most látni fogod az URL-edet, például: https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Betűtípusok módosítása

1. Szerkeszd a /_assets/style.css fájlt

2. A 'body section' (törzs szakasz) alatt megtalálod a siteFont és headingFont beállításokat

3. Módosítsd ezeket a kívánt betűtípusokra


## Fontawesome és/vagy Material Icons beépülő modul használata ingyenes ikonok megjelenítéséhez az SRD-ben

### Fontawesome

Használd a Fontawesome-ot az ingyenes és animált ikonokért. Az előfizetők használhatják a Pro ikonokat.

1. Keresd meg az ikont a [Fontawesome](https://fontawesome.com/icons) oldalon
2. Válaszd ki az ikont
3. A felugró ablakban, a HTML fül alatt másolj ki mindent a " " jelek közül

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Helyezd a kimásolt szöveget a `:` közé, szóközök nélkül

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Használd a Material Icons-t további ingyenes ikonokért.

1. Keresd meg az ikonokat a [Material Icons](https://fonts.google.com/icons) oldalon
2. Másold ki és illeszd be a webes span linket közvetlenül a markdown fájljaidba

```markup
<span class="material-icons">face</span>
```