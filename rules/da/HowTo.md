# Forudsætninger

1. En grundlæggende forståelse af [markdown-sproget](https://www.markdownguide.org/basic-syntax/).

2. Du skal oprette en gratis [github](https://github.com/)-konto, hvis du ikke allerede har en. Det anbefales, at du bruger navnet på dit RPG, da dette vil blive en del af den URL, som folk bruger for at få adgang til dit SRD.

3. Du kan gennemføre hele denne proces via din browser uden at kende til git. Det kan dog anbefales at lære GitHub Desktop at kende, da det giver dig mulighed for at teste ændringer lokalt, før du publicerer dem, så verden kan se dem.

> Hvis du har et registreret domænenavn, kan du bruge dette i processen til at oprette et SRD som det, jeg har: https://srd.7thextinctionrpg.com

# Processen

## Oprettelse af et repository på Github

1. Log ind på Github

2. Gå til den offentlige skabelon https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klik på "Use this template"

![Step3](/_media/Step3.png)

4. Vælg "Create a new repository"

5. Indtast et navn til dit repository

![Step5](/_media/Step5.png)

6. Vælg 'Private'

7. Vælg 'Create repository'

Det tager 5-30 sekunder at kopiere skabelonen, hvorefter du har din egen kopi.

8. Sørg for, at du har filen ".nojekyll". Dette er en tom fil, der er nødvendig, når man hoster en hjemmeside på Github; ellers vil SRD'et ikke blive vist korrekt. *(Fortæller GitHub Pages, at de publicerede filer ikke skal køres gennem Jekyll).*


## Tilføjelse af dit indhold

### *.md-filer

.md-filer er markdown-filer. Markdown er et letvægts-markup-sprog, som du kan bruge til at tilføje formateringselementer til almindelig tekst. Afhængigt af mængden af indhold kan du enten placere al din spilinformation i en enkelt *.md-fil, eller – som jeg har gjort på [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) – oprette separate filer for hvert kapitel. "sample.md" giver nogle eksempler på formatering.

Markdown-sproget er meget nemt at lære. Brug linket i punkt 2 under Forudsætninger ovenfor for at få en komplet liste over syntaksen.

### _Sidebar.md

Dette er din menu, navigationspanelet i venstre side af hjemmesiden. Når du har tilføjet en markdown-fil til dit repository, skal du tilføje filen her, så dens indhold bliver inkluderet. Følg den eksisterende formatering.


## Aktivér Github Pages for at omdanne dit Repository til en hjemmeside

1. Klik på 'Settings' i dit repository

![Website-Step1](/_media/Website-Step1.png)

2. Vælg 'Pages' i menuen til venstre

![Website-Step2](/_media/Website-Step2.png)

3. Hvis du ikke har gjort dit repository 'public', har du to valgmuligheder:
    a. Gør dit repository offentligt (public), hvilket giver dig mulighed for at bruge Github Pages til at hoste din SRD-hjemmeside gratis.
    b. Opgradér din Github-konto (da denne tekst blev skrevet, koster det $4 om måneden eller et årligt gebyr på $48).

4. Under 'Branch', vælg 'main' og klik på gem.

5. Giv det 10-20 sekunder og opdatér derefter siden.

6. Du vil nu se din URL, for eksempel https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Ændring af skrifttyper

1. Redigér filen /_assets/style.css

2. Under 'body section' finder du siteFont & headingFont

3. Skift disse til de skrifttyper, du ønsker at bruge.


## Brug af Fontawesome og/eller Material Icons-plugin til at vise gratis ikoner i dit SRD

### Fontawesome

Brug Fontawesome til at få gratis ikoner og animerede ikoner. Abonnenter kan bruge Pro-ikoner.

1. Find ikonet på [Fontawesome](https://fontawesome.com/icons)
2. Vælg ikonet
3. I pop-op-vinduet, under HTML-fanen, kopiér alt indholdet mellem " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Placer den kopierede tekst mellem `:` uden mellemrum

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Brug Material Icons for at få flere gratis ikoner

1. Find ikonerne på [Material Icons](https://fonts.google.com/icons)
2. Kopiér & indsæt web-span-linket direkte ind i dine markdown-filer

```markup
<span class="material-icons">face</span>
```