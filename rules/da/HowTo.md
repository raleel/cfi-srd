# Forudsætninger

1. En grundlæggende forståelse af [markdown-sproget](https://www.markdownguide.org/basic-syntax/).

2. Du skal oprette en gratis [GitHub](https://github.com/)-konto, hvis du ikke allerede har en. Vi anbefaler, at du bruger navnet på dit RPG, da dette bliver en del af den URL, folk vil bruge for at få adgang til dit SRD.

3. Du kan gennemføre hele denne proces via browseren uden at kende til git. Selvom det at lære GitHub Desktop vil give dig mulighed for at teste ændringer lokalt, før du gør dem offentligt tilgængelige for verden.

> Hvis du har et registreret domænenavn, kan du bruge dette sammen med denne proces til at oprette et SRD som jeg har gjort https://srd.7thextinctionrpg.com

# Processen

## Oprettelse af repository på Github

1. Log ind på Github

2. Naviger til den offentlige skabelon https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klik på "Use this template"

![Step3](/_media/Step3.png)

4. Vælg "Create a new repository"

5. Indtast et navn til dit repository

![Step5](/_media/Website-Step1.png)

6. Vælg 'Private'

7. Vælg 'Create repository'

Det tager 5-30 sekunder at kopiere skabelonen, derefter har du din egen kopi.

8. Sørg for, at du har filen ".nojekyll". Dette er en tom fil, som er nødvendig, når man hoster en hjemmeside på Github, ellers vil SRD'et ikke blive vist korrekt. *(Fortæller GitHub Pages, at de publicerede filer ikke skal køres gennem Jekyll).*


## Tilføjelse af dit indhold

### *.md filer

.md filer er markdown-filer. Markdown er et letvægts-opmærkningssprog, som du kan bruge til at tilføje formateringselementer til almindelige tekstfiler. Afhængigt af mængden af dit indhold kan du enten placere al din spilinformation i en enkelt *.md-fil, eller ligesom jeg har gjort på [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), oprette separate filer til hvert kapitel. "Sample.md" giver nogle eksempler på formatering.

Markdown-sproget er meget nemt at lære; brug linket i punkt 2 under Forudsætninger ovenfor for at få en fuld liste over syntaks.

### _sidebar.md

Dette er din menu, navigationspanelet på venstre side af hjemmesiden. Når du har tilføjet en markdown-fil til dit repository, skal du tilføje filen her, så dens indhold bliver inkluderet. Følg den eksisterende formatering.


## Aktiver Github Pages for at omdanne dit Repository til en hjemmeside

1. Klik på 'Settings' i dit repository

![Website-Step1](/_media/Website-Step1.png)

2. Vælg 'Pages' i menuen i venstre side

![Website-Step2](/_media/Website-Step2.png)

3. Hvis du ikke har gjort dit repository 'public', har du to valgmuligheder:
    a. Gør dit repository offentligt, hvilket vil give dig mulighed for at bruge Github Pages til at hoste dit SRD-website gratis.
    b. Opgrader din Github-konto (da dette skrives, koster det $4 om måneden eller et årligt gebyr på $48).

4. Under 'Branch' skal du vælge 'main' og klikke på Gem (Save)

5. Giv det 10-20 sekunder og opdater derefter siden

6. Du vil nu se din URL, såsom https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Ændring af skrifttyper

1. Rediger filen /_assets/style.css

2. Under 'body section' finder du siteFont & headingFont

3. Skift disse til de skrifttyper, du ønsker at bruge


## Brug af Fontawesome og/eller Material Icons plugin til at vise gratis ikoner i dit SRD

### Fontawesome

Brug Fontawesome til at få gratis ikoner og animerede ikoner. Abonnenter kan bruge Pro-ikoner.

1. Find ikonet på [Fontawesome](https://fontawesome.com/icons)
2. Vælg ikonet
3. I pop-up vinduet, under HTML-fanen, skal du kopiere alt mellem " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Placer den kopierede tekst mellem `:` uden mellemrum

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Brug Material Icons til flere gratis ikoner

1. Find ikonerne på [Material Icons](https://fonts.google.com/icons)
2. Kopier & indsæt web span-linket direkte i dine markdown-filer

```markup
<span class="material-icons">face</span>
```