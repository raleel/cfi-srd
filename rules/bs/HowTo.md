# Preduslovi

1. Osnovno razumijevanje [markdown jezika](https://www.markdownguide.org/basic-syntax/).

2. Morat ćete kreirati besplatan [github](https://github.com/) nalog ako ga već nemate. Preporučujemo da koristite naziv vašeg RPG-a, jer će to postati dio URL-a koji će ljudi koristiti za pristup vašem SRD-u. 

3. Cijeli ovaj proces možete obaviti putem pretraživača bez poznavanja git-a. Iako će vam učenje github desktop-a omogućiti da testirate sve izmjene lokalno prije nego što ih postavite javno da ih svijet vidi.

> Ako imate registrovan naziv domene, možete ga koristiti u ovom procesu za kreiranje SRD-a kao što sam ja uradio https://srd.7thextinctionrpg.com

# Proces

## Kreiranje repozitorijuma na Github-u

1. Prijavite se na Github

2. Idite na javni šablon https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Kliknite na "Use this template"

![Step3](/_media/Step3.png)

4. Odaberite "Create a new repository"

5. Unesite naziv repozitorijuma

![Step5](/_media/Step5.png)

6. Odaberite 'Private' 

7. Odaberite 'Create repository'

Trebat će 5-30 sekundi da se kopira šablon, nakon čega ćete imati svoju kopiju.

8. Uvjerite se da imate datoteku ".nojekyll"; ovo je prazna datoteka koja je potrebna prilikom hostovanja web stranice na Github-u, u suprotnom se SRD neće pravilno prikazati. *(Govori GitHub stranicama da ne obrađuju objavljene datoteke kroz Jekyll).*


## Dodavanje vašeg sadržaja

### *.md datoteke

.md datoteke su markdown datoteke; Markdown je lagani jezik za označavanje koji možete koristiti za dodavanje elemenata formatiranja u tekstualne dokumente. U zavisnosti od veličine vašeg sadržaja, možete staviti sve informacije o igri u jednu *.md datoteku, ili kao što sam ja uradio na [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), kreirati posebne datoteke za svako poglavlje. "sample.md" pruža neke primjere formatiranja. 

Markdown jezik je vrlo jednostavan za naučiti, koristite link naveden pod tačkom 2 u odjeljku Preduslovi iznad za punu listu sintakse. 

### _Sidebar.md

Ovo je vaš meni, navigaciona tabla na lijevoj strani web stranice. Kada dodate markdown datoteku u svoj repozitorijum, potrebno je da dodate datoteku ovdje kako bi njen sadržaj bio uključen. Pratite postojeće formatiranje.


## Omogućavanje Github stranica (Pages) za pretvaranje repozitorijuma u web stranicu

1. U svom repozitorijumu kliknite na 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Odaberite 'Pages' u meniju na lijevoj strani

![Website-Step2](/_media/Website-Step2.png)

3. Ako niste učinili repozitorijum 'public', imate dvije opcije:
    a. Učinite repozitorijum javnim (public), što će vam omogućiti korištenje Github stranica za besplatno hostovanje vaše SRD web stranice
    b. Nadogradite svoj Github nalog (u vrijeme pisanja ovoga, košta 4 USD mjesečno ili 48 USD godišnje)

4. Pod 'Branch' odaberite 'main' i kliknite na save

5. Sačekajte 10-20 sekundi, a zatim osvježite stranicu

6. Sada ćete vidjeti svoj URL, kao što je https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Promjena fontova

1. Uredite datoteku /_assets/style.css 

2. Pod 'body section' naći ćete siteFont i headingFont

3. Promijenite ih u fontove koje želite koristiti


## Korištenje Fontawesome i/ili Material Icons dodataka za prikaz besplatnih ikona u vašem SRD-u

### Fontawesome

Koristite Fontawesome za dobijanje besplatnih ikona i animiranih ikona. Pretplatnici mogu koristiti Pro ikone.

1. Pronađite ikonu na [Fontawesome](https://fontawesome.com/icons)
2. Odaberite ikonu
3. U iskačućem prozoru, pod HTML karticom kopirajte sve između " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Postavite kopirani tekst između `:` bez razmaka

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Koristite Material Icons za više besplatnih ikona

1. Pronađite ikone na [Material Icons](https://fonts.google.com/icons)
2. Kopirajte i umetnite web span link direktno u svoje markdown datoteke

```markup
<span class="material-icons">face</span>
```