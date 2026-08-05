# Förutsättningar

1. En grundläggande förståelse för [markdown-språket](https://www.markdownguide.org/basic-syntax/).

2. Du behöver skapa ett kostnadsfritt [github](https://github.com/)-konto om du inte redan har ett. Det rekommenderas att du använder namnet på ditt rollspel, eftersom detta kommer att bli en del av URL:en som folk använder för att komma åt din SRD.

3. Du kan utföra hela processen via webbläsaren utan att behöva kunna git. Att lära sig GitHub Desktop gör dock att du kan testa ändringar lokalt innan du publicerar dem så att hela världen kan se dem.

> Om du har ett registrerat domännamn kan du använda det i den här processen för att skapa en SRD likt den jag har: https://srd.7thextinctionrpg.com

# Processen

## Skapa ett arkiv (repository) på Github

1. Logga in på Github.

2. Navigera till den publika mallen https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klicka på "Use this template".

![Step3](/_media/Step3.png)

4. Välj "Create a new repository".

5. Ange ett namn för arkivet.

![Step5](/_media/Step5.png)

6. Välj 'Private'.

7. Välj 'Create repository'.

Det tar 5–30 sekunder att kopiera mallen, därefter har du en egen kopia.

8. Säkerställ att du har filen ".nojekyll". Detta är en tom fil som krävs vid publicering av en webbplats på Github, annars kommer din SRD inte att visas korrekt. *(Talar om för GitHub Pages att inte köra de publicerade filerna genom Jekyll).*

## Lägga till ditt innehåll

### *.md-filer

.md-filer är markdown-filer. Markdown är ett lättviktsmärkspråk som du kan använda för att lägga till formateringselement i vanlig text. Beroende på mängden innehåll kan du antingen placera all din spelinformation i en enda *.md-fil, eller skapa separata filer för varje kapitel, precis som jag har gjort på [7thextinctionrpg.com](https://srd.7thextinctionrpg.com). "sample.md"-filen innehåller några exempel på formatering.

Markdown-språket är mycket lätt att lära sig. Använd länken i punkt 2 under Förutsättningar ovan för en fullständig lista över syntax.

### _Sidebar.md

Detta är din meny, navigeringspanelen på webbplatsens vänstra sida. När du har lagt till en markdown-fil i ditt arkiv måste du lägga till filen här för att dess innehåll ska inkluderas. Följ den befintliga formateringen.

## Aktivera Github Pages för att förvandla arkivet till en webbplats

1. Klicka på 'Settings' i ditt arkiv.

![Website-Step1](/_media/Website-Step1.png)

2. Välj 'Pages' i menyn på vänster sida.

![Website-Step2](/_media/Website-Step2.png)

3. Om du inte har gjort arkivet 'public', har du två val:
    a. Gör arkivet publikt, vilket gör att du kan använda Github Pages för att vara värd för din SRD-webbplats gratis.
    b. Uppgradera ditt Github-konto (i skrivande stund kostar det $4 i månaden eller $48 per år).

4. Under 'Branch', välj 'main' och klicka på spara.

5. Vänta 10–20 sekunder och uppdatera sedan sidan.

6. Du ser nu din URL, exempelvis https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Ändra typsnitt

1. Redigera filen /_assets/style.css.

2. Under sektionen 'body' hittar du siteFont & headingFont.

3. Ändra dessa till de typsnitt du vill använda.

## Använda pluginen Fontawesome och/eller Material Icons för att visa gratisikoner i din SRD

### Fontawesome

Använd Fontawesome för att få gratisikoner och animerade ikoner. Prenumererande användare kan använda Pro-ikoner.

1. Hitta ikonen på [Fontawesome](https://fontawesome.com/icons).
2. Välj ikonen.
3. I popup-fönstret, under HTML-fliken, kopiera allt mellan " ".

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Placera den kopierade texten mellan `:` utan mellanslag.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Använd Material Icons för fler gratisikoner.

1. Hitta ikonerna på [Material Icons](https://fonts.google.com/icons).
2. Kopiera och klistra in webb-span-länken direkt i dina markdown-filer.

```markup
<span class="material-icons">face</span>
```