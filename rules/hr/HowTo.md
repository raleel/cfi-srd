# Preduvjeti

1. Osnovno razumijevanje [markdown jezika](https://www.markdownguide.org/basic-syntax/).

2. Morat ćete stvoriti besplatan [github](https://github.com/) korisnički račun ako ga već nemate. Preporučujemo da koristite naziv svog RPG-a jer će to postati dio URL-a koji će ljudi koristiti za pristup vašem SRD-u.

3. Cijeli ovaj proces možete obaviti putem preglednika bez poznavanja git-a. Ipak, učenje github desktop-a omogućit će vam da testirate sve izmjene lokalno prije nego što ih objavite uživo da ih cijeli svijet vidi.

> Ako imate registriranu domenu, možete je koristiti u ovom procesu za stvaranje SRD-a poput mog na https://srd.7thextinctionrpg.com

# Proces

## Stvaranje repozitorija na Github-u

1. Prijavite se na Github

2. Idite na javni predložak https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Kliknite na "Use this template"

![Step3](/_media/Step3.png)

4. Odaberite "Create a new repository"

5. Unesite naziv repozitorija

![Step5](/_media/Step5.png)

6. Odaberite 'Private' 

7. Odaberite 'Create repository'

Trajat će 5-30 sekundi da se kopira predložak, nakon čega ćete imati vlastitu kopiju.

8. Provjerite imate li datoteku ".nojekyll" - ovo je prazna datoteka koja je potrebna prilikom hostiranja web stranice na Github-u, inače se SRD neće pravilno prikazivati. *(Govori GitHub Pages-u da ne provlači objavljene datoteke kroz Jekyll).*


## Dodavanje vašeg sadržaja

### *.md datoteke

.md datoteke su markdown datoteke. Markdown je lagan jezik za označavanje koji možete koristiti za dodavanje elemenata oblikovanja u tekstualne dokumente. Ovisno o veličini vašeg sadržaja, možete smjestiti sve informacije o igri u jednu *.md datoteku ili, kao što sam ja učinio na [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), stvoriti zasebne datoteke za svako poglavlje. "sample.md" pruža nekoliko primjera oblikovanja.

Markdown jezik je vrlo jednostavan za naučiti; koristite poveznicu navedenu pod točkom 2 u odjeljku Preduvjeti iznad za potpuni popis sintakse.

### _Sidebar.md

Ovo je vaš izbornik, navigacijska traka na lijevoj strani web stranice. Nakon što dodate markdown datoteku u svoj repozitorij, ovdje morate dodati datoteku kako bi se njezin sadržaj uključio. Slijedite postojeće oblikovanje.


## Omogućite Github Pages da pretvori repozitorij u web stranicu

1. U svom repozitoriju kliknite na 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Odaberite 'Pages' u izborniku na lijevoj strani

![Website-Step2](/_media/Website-Step2.png)

3. Ako niste učinili repozitorij 'public', imate dva izbora:
    a. Učinite repozitorij javnim (public), što će vam omogućiti korištenje Github stranica za besplatno hostiranje vaše SRD web stranice
    b. Nadogradite svoj Github račun (u trenutku pisanja ovog teksta košta 4 USD mjesečno ili 48 USD godišnje)

4. Pod 'Branch' odaberite 'main' i kliknite spremi

5. Pričekajte 10-20 sekundi, a zatim osvježite stranicu

6. Sada ćete vidjeti svoj URL kao što je https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Promjena fontova

1. Uredite datoteku /_assets/style.css

2. Pod 'body section' pronaći ćete siteFont i headingFont

3. Promijenite ih u fontove koje želite koristiti


## Korištenje dodataka Fontawesome i/ili Material Icons za prikaz besplatnih ikona u vašem SRD-u

### Fontawesome

Koristite Fontawesome za dobivanje besplatnih ikona i animiranih ikona. Pretplatnici mogu koristiti Pro ikone.

1. Pronađite ikonu na [Fontawesome](https://fontawesome.com/icons)
2. Odaberite ikonu
3. U skočnom prozoru, pod HTML karticom kopirajte sve između " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Postavite kopirani tekst između `:` bez razmaka

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Koristite Material Icons za još više besplatnih ikona.

1. Pronađite ikone na [Material Icons](https://fonts.google.com/icons)
2. Kopirajte i umetnite web span poveznicu izravno u svoje markdown datoteke

```markup
<span class="material-icons">face</span>
```