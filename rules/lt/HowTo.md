# Būtinosios sąlygos

1. Pagrindinis [markdown kalbos](https://www.markdownguide.org/basic-syntax/) išmanymas.

2. Turėsite susikurti nemokamą [github](https://github.com/) paskyrą, jei jos dar neturite. Rekomenduojame naudoti savo RPG žaidimo pavadinimą, nes jis taps URL adreso dalimi, kurią žmonės naudos pasiekti jūsų SRD.

3. Visą šį procesą galite atlikti naršyklėje nemokėdami naudotis „git“. Visgi „GitHub Desktop“ programos išmokimas leis jums išbandyti visus pakeitimus lokaliai prieš paskelbiant juos viešai visam pasauliui.

> Jei turite registruotą domeną, galite jį naudoti su šiuo procesu, kad sukurtumėte SRD, kaip tai padariau aš https://srd.7thextinctionrpg.com

# Procesas

## Saugyklos (Repository) kūrimas „Github“ platformoje

1. Prisijunkite prie „Github“.

2. Eikite į viešą šabloną https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Spustelėkite „Use this template“ (Naudoti šį šabloną).

![Step3](/_media/Step3.png)

4. Pasirinkite „Create a new repository“ (Sukurti naują saugyklą).

5. Įveskite saugyklos pavadinimą.

![Step5](/_media/Step5.png)

6. Pasirinkite „Private“ (Privati).

7. Spustelėkite „Create repository“ (Sukurti saugyklą).

Šablono kopijavimas užtruks 5–30 sekundžių, po to turėsite savo kopiją.

8. Įsitikinkite, kad turite failą „.nojekyll“ – tai tuščias failas, reikalingas talpinant svetainę „Github“ platformoje; priešingu atveju SRD nebus rodomas tinkamai. *(Nurodo „GitHub Pages“ nevykdyti publikuotų failų per „Jekyll“ sistemą).*


## Turinys įtraukimas

### *.md failai

.md failai yra „markdown“ failai. „Markdown“ yra lengva žymėjimo kalba, kurią galite naudoti formato elementams į paprasto teksto dokumentus įtraukti. Priklausomai nuo turinio dydžio, galite visą žaidimo informaciją patalpinti viename *.md faile arba, kaip aš padariau [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), sukurti atskirus failus kiekvienam skyriui. „sample.md“ faile pateikiami keli formatavimo pavyzdžiai.

„Markdown“ kalbą labai lengva išmokti; naudokite nuorodą, pateiktą 2 punkte „Būtinųjų sąlygų“ skiltyje, kur rasite pilną sintaksės sąrašą.

### _Sidebar.md

Tai yra jūsų meniu, naršymo juosta kairėje svetainės pusėje. Kai į savo saugyklą įkeliate „markdown“ failą, turite jį čia pridėti, kad jo turinys būtų įtrauktas. Laikykitės esamo formatavimo.


## „Github Pages“ įjungimas, kad saugykla taptų svetaine

1. Savo saugykloje spustelėkite „Settings“ (Nustatymai).

![Website-Step1](/_media/Website-Step1.png)

2. Kairėje meniu pusėje pasirinkite „Pages“.

![Website-Step2](/_media/Website-Step2.png)

3. Jei nepadarėte saugyklos „public“ (viešos), turite du pasirinkimus:
    a. Padaryti saugyklą viešą, kas leis jums nemokamai naudotis „Github Pages“ ir talpinti savo SRD svetainę.
    b. Atnaujinti savo „Github“ paskyrą (šio teksto rašymo metu tai kainuoja 4 USD per mėnesį arba 48 USD metinis mokestis).

4. Skiltyje „Branch“ pasirinkite „main“ ir spustelėkite „save“ (išsaugoti).

5. Palaukite 10–20 sekundžių ir atnaujinkite puslapį.

6. Dabar pamatysite savo URL, pvz., https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Šriftų keitimas

1. Redaguokite /_assets/style.css failą.

2. „body“ skiltyje rasite „siteFont“ ir „headingFont“.

3. Pakeiskite juos į šriftus, kuriuos norite naudoti.


## „Fontawesome“ ir/arba „Material Icons“ papildinių naudojimas nemokamoms piktogramoms SRD rodyti

### „Fontawesome“

Naudokite „Fontawesome“ nemokamoms ir animuotoms piktogramoms gauti. Prenumeratoriai gali naudoti „Pro“ piktogramas.

1. Raskite piktogramą [Fontawesome](https://fontawesome.com/icons) puslapyje.
2. Pasirinkite piktogramą.
3. Iššokančiajame lange, HTML skirtuke, nukopijuokite viską, kas yra tarp „ “.

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Įklijuokite nukopijuotą tekstą tarp `:` be tarpų.

```EXAMPLE
fa-solid fa-dice-d20
```

### „Material Icons“

Naudokite „Material Icons“, kad gautumėte daugiau nemokamų piktogramų.

1. Raskite piktogramas [Material Icons](https://fonts.google.com/icons) puslapyje.
2. Nukopijuokite ir įterpkite žiniatinklio „span“ nuorodą tiesiai į savo „markdown“ failus.

```markup
<span class="material-icons">face</span>
```