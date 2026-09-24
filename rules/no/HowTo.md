# Forutsetninger

1. En grunnleggende forståelse av [markdown-språket](https://www.markdownguide.org/basic-syntax/).

2. Du må opprette en gratis [GitHub](https://github.com/)-konto hvis du ikke allerede har en. Vi anbefaler at du bruker navnet på rollespillet ditt, da dette vil bli en del av URL-adressen folk bruker for å få tilgang til SRD-en din.

3. Du kan gjøre hele denne prosessen gjennom nettleseren uten å kunne git. Selv om det å lære GitHub Desktop vil tillate deg å teste eventuelle endringer lokalt før du publiserer dem live slik at verden kan se dem.

> Hvis du har et registrert domenenavn, kan du bruke dette sammen med denne prosessen for å opprette en SRD slik jeg har gjort: https://srd.7thextinctionrpg.com

# Prosessen

## Opprette repositoriet på GitHub

1. Logg inn på GitHub

2. Naviger til den offentlige malen https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klikk på "Use this template"

![Step3](/_media/Step3.png)

4. Velg "Create a new repository"

5. Skriv inn et navn på repositoriet

![Step5](/_media/Step5.png)

6. Velg 'Private'

7. Velg 'Create repository'

Det vil ta 5-30 sekunder å kopiere malen, deretter vil du ha din egen kopi.

8. Sørg for at du har filen ".nojekyll". Dette er en tom fil som er nødvendig når du hoster et nettsted på GitHub; ellers vil ikke SRD-en vises på riktig måte. *(Forteller GitHub Pages at de publiserte filene ikke skal kjøres gjennom Jekyll).*


## Legge til innholdet ditt

### *.md-filer

.md-filer er markdown-filer. Markdown er et lettvekts markeringsspråk som du kan bruke til å legge til formateringselementer i ren tekst. Avhengig av størrelsen på innholdet ditt, kan du enten plassere all spillinformasjonen din i én enkelt *.md-fil, eller som jeg har gjort på [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), opprette separate filer for hvert kapittel. "Sample.md" gir noen formateringseksempler.

Markdown-språket er veldig enkelt å lære; bruk lenken som er oppgitt i punkt 2 under Forutsetninger ovenfor for en fullstendig liste over syntaks.

### _sidebar.md

Dette er menyen din, navigasjonsfeltet på venstre side av nettstedet. Når du har lagt til en markdown-fil i repositoriet ditt, må du legge til filen her slik at innholdet blir inkludert. Følg den eksisterende formateringen.


## Aktiver GitHub Pages for å gjøre repositoriet til et nettsted

1. I repositoriet ditt, klikk på 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Velg 'Pages' i menyen på venstre side

![Website-Step2](/_media/Website-Step2.png)

3. Hvis du ikke har gjort repositoriet 'public', har du to valg:
    a. Gjør repositoriet offentlig, noe som vil tillate deg å bruke GitHub Pages til å hoste SRD-nettstedet ditt gratis
    b. Oppgrader GitHub-kontoen din (da dette skrives koster det $4 i måneden eller en årlig avgift på $48)

4. Under 'Branch' velger du 'main' og klikker på Save

5. Vent 10-20 sekunder og oppdater deretter siden

6. Du vil nå se URL-adressen din, for eksempel https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Endre fonter

1. Rediger filen /_assets/style.css

2. Under 'body section' finner du siteFont & headingFont

3. Endre disse til fontene du ønsker å bruke


## Bruke Fontawesome og/eller Material Icons-plugin for å vise gratis ikoner i SRD-en din

### Fontawesome

Bruk Fontawesome for å få gratis ikoner og animerte ikoner. Abonnenter kan bruke Pro Icons.

1. Finn ikonet på [Fontawesome](https://fontawesome.com/icons)
2. Velg ikonet
3. I popup-vinduet, under HTML-fanen, kopier alt mellom " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Plasser den kopierte teksten mellom `:` uten mellomrom

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Bruk Material Icons for flere gratis ikoner

1. Finn ikonene på [Material Icons](https://fonts.google.com/icons)
2. Kopier og sett inn web-span-lenken direkte i markdown-filene dine

```markup
<span class="material-icons">face</span>
```