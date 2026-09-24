# Preduslovi

1. Osnovno razumevanje [markdown jezika](https://www.markdownguide.org/basic-syntax/).

2. Moraćete da kreirate besplatan [GitHub](https://github.com/) nalog ukoliko ga već nemate. Preporučujemo da koristite naziv svog RPG-a jer će on postati deo URL-a koji će ljudi koristiti za pristup vašem SRD-u.

3. Ceo proces možete obaviti putem veb-pregledača bez poznavanja git-a. Iako će vam učenje GitHub Desktop-a omogućiti da testirate sve promene lokalno pre nego što ih objavite da ih svet vidi.

> Ako imate registrovan domen, možete ga koristiti uz ovaj proces za kreiranje SRD-a kao što sam ja uradio na https://srd.7thextinctionrpg.com

# Proces

## Kreiranje repozitorijuma na Github-u

1. Prijavite se na Github

2. Idite na javni šablon https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Kliknite na "Use this template"

![Step3](/_media/Step3.png)

4. Izaberite "Create a new repository"

5. Unesite naziv repozitorijuma

![Step5](/_media/Step5.png)

6. Izaberite 'Private'

7. Izaberite 'Create repository'

Biće potrebno 5-30 sekundi da se šablon kopira, nakon čega ćete imati sopstvenu kopiju.

8. Uverite se da imate datoteku ".nojekyll"; ovo je prazna datoteka koja je potrebna prilikom hostovanja veb-sajta na Github-u, u suprotnom se SRD neće pravilno prikazati. *(Govori GitHub Pages-u da ne pokreće objavljene datoteke kroz Jekyll).*


## Dodavanje vašeg sadržaja

### *.md datoteke

.md datoteke su markdown datoteke. Markdown je lagan jezik za označavanje koji možete koristiti za dodavanje elemenata formatiranja običnim tekstualnim dokumentima. U zavisnosti od veličine vašeg sadržaja, možete staviti sve informacije o vašoj igri u jednu *.md datoteku, ili kao što sam ja uradio na [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), kreirati zasebne datoteke za svako poglavlje. "Sample.md" pruža nekoliko primera formatiranja.

Markdown jezik je veoma lak za učenje, koristite link dat u tački 2 pod Preduslovi iznad za potpunu listu sintakse.

### _sidebar.md

Ovo je vaš meni, navigacioni panel na levoj strani veb-sajta. Kada dodate markdown datoteku u svoj repozitorijum, morate ovde dodati datoteku kako bi njen sadržaj bio uključen. Pratite postojeće formatiranje.


## Omogućavanje Github Pages-a za pretvaranje repozitorijuma u veb-sajt

1. U svom repozitorijumu kliknite na 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Izaberite 'Pages' u meniju sa leve strane

![Website-Step2](/_media/Website-Step2.png)

3. Ako repozitorijum niste učinili 'javnim' (public), imate dva izbora:
    a. Učinite repozitorijum javnim, što će vam omogućiti da koristite Github pages za besplatno hostovanje vašeg SRD veb-sajta
    b. Nadogradite svoj Github nalog (u trenutku pisanja ovoga, to košta 4 USD mesečno ili 48 USD godišnje)

4. Pod 'Branch' izaberite 'main' i kliknite Save

5. Sačekajte 10-20 sekundi, a zatim osvežite stranicu

6. Sada ćete videti svoj URL, kao što je https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Promena fontova

1. Uredite datoteku /_assets/style.css

2. U 'body sekciji' naći ćete siteFont i headingFont

3. Promenite ih u fontove koje želite da koristite


## Korišćenje Fontawesome i/ili Material Icons dodatka za prikazivanje besplatnih ikonica u vašem SRD-u

### Fontawesome

Koristite Fontawesome za besplatne ikonice i animirane ikonice. Pretplatnici mogu koristiti Pro ikonice.

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

Koristite Material Icons za još više besplatnih ikonica.

1. Pronađite ikonice na [Material Icons](https://fonts.google.com/icons)
2. Kopirajte i ubacite veb span link direktno u svoje markdown datoteke

```markup
<span class="material-icons">face</span>
```