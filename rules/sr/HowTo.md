# Preduslovi

1. Osnovno razumevanje [markdown jezika](https://www.markdownguide.org/basic-syntax/).

2. Moraćete da kreirate besplatan [github](https://github.com/) nalog ako ga već nemate. Preporučuje se da koristite ime vaše RPG igre jer će ono postati deo URL adrese koju će ljudi koristiti za pristup vašem SRD-u.

3. Ceo ovaj proces možete obaviti kroz pregledač bez poznavanja git-a. Ipak, učenje korišćenja github desktop aplikacije će vam omogućiti da testirate sve izmene lokalno pre nego što ih objavite da ih ceo svet vidi.

> Ako imate registrovan domen, možete ga koristiti u ovom procesu za kreiranje SRD-a kao što sam ja uradio https://srd.7thextinctionrpg.com

# Proces

## Kreiranje repozitorijuma na Github-u

1. Prijavite se na Github

2. Idite na javni šablon https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Kliknite na "Use this template"

![Step3](/_media/Step3.png)

4. Izaberite "Create a new repository"

5. Unesite ime repozitorijuma

![Step5](/_media/Step5.png)

6. Izaberite 'Private'

7. Izaberite 'Create repository'

Biće potrebno 5-30 sekundi da se šablon kopira, nakon čega ćete imati svoju kopiju.

8. Uverite se da imate datoteku ".nojekyll" - ovo je prazna datoteka koja je potrebna prilikom hostovanja veb stranice na Github-u, u suprotnom se SRD neće pravilno prikazati. *(Govori GitHub Pages-u da ne provlači objavljene datoteke kroz Jekyll).*


## Dodavanje sadržaja

### *.md datoteke

.md datoteke su markdown datoteke. Markdown je lagani jezik za označavanje koji možete koristiti za dodavanje elemenata formatiranja u tekstualne dokumente. U zavisnosti od veličine sadržaja, možete smestiti sve informacije o svojoj igri u jednu *.md datoteku, ili, kao što sam ja uradio na [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), kreirati posebne datoteke za svako poglavlje. "sample.md" pruža neke primere formatiranja.

Markdown jezik je veoma lak za učenje; koristite vezu navedenu u tački 2 pod Preduslovima iznad za potpunu listu sintakse.

### _Sidebar.md

Ovo je vaš meni, navigacioni panel na levoj strani veb stranice. Kada dodate markdown datoteku u svoj repozitorijum, potrebno je da ovde dodate tu datoteku kako bi njen sadržaj bio uključen. Pratite postojeće formatiranje.


## Omogućavanje Github Pages za pretvaranje repozitorijuma u veb stranicu

1. U svom repozitorijumu kliknite na 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Izaberite 'Pages' u meniju sa leve strane

![Website-Step2](/_media/Website-Step2.png)

3. Ako niste učinili repozitorijum 'public', imate dva izbora:
    a. Učinite repozitorijum javnim, što će vam omogućiti da koristite Github pages za besplatno hostovanje vašeg SRD veb sajta.
    b. Nadogradite svoj Github nalog (u trenutku pisanja ovog teksta košta 4 dolara mesečno ili 48 dolara godišnje).

4. Pod 'Branch' izaberite 'main' i kliknite save

5. Sačekajte 10-20 sekundi, a zatim osvežite stranicu

6. Sada ćete videti svoju URL adresu, na primer https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Promena fontova

1. Izmenite datoteku /_assets/style.css

2. Pod sekcijom 'body' pronaći ćete siteFont i headingFont

3. Promenite ih u fontove koje želite da koristite


## Korišćenje Fontawesome i/ili Material Icons dodatka za prikaz besplatnih ikonica u vašem SRD-u

### Fontawesome

Koristite Fontawesome za dobijanje besplatnih i animiranih ikonica. Pretplatnici mogu koristiti Pro ikonice.

1. Pronađite ikonicu na [Fontawesome](https://fontawesome.com/icons)
2. Izaberite ikonicu
3. U iskačućem prozoru, ispod HTML kartice kopirajte sve između " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Postavite kopirani tekst između `:` bez razmaka

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Koristite Material Icons za još besplatnih ikonica.

1. Pronađite ikonice na [Material Icons](https://fonts.google.com/icons)
2. Kopirajte i umetnite veb span vezu direktno u vaše markdown datoteke

```markup
<span class="material-icons">face</span>
```