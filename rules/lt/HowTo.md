# Būtinosios sąlygos

1. Pagrindinis [markdown kalbos](https://www.markdownguide.org/basic-syntax/) išmanymas.

2. Turėsite susikurti nemokamą [GitHub](https://github.com/) paskyrą, jei jos dar neturite. Rekomenduojame naudoti savo RPG pavadinimą, nes jis taps dalimi URL adreso, kurį žmonės naudos norėdami pasiekti jūsų SRD.

3. Visą šį procesą galite atlikti naršyklėje nemokėdami naudotis „git“. Nors išmokę naudotis „GitHub Desktop“, galėsite išbandyti bet kokius pakeitimus vietoje prieš viešai juos paskelbdami pasauliui.

> Jei esate užregistravę domeno vardą, galite jį naudoti šiame procese kurdami SRD, kaip tai padariau aš https://srd.7thextinctionrpg.com

# Procesas

## Saugyklos (Repository) kūrimas „Github“ sistemoje

1. Prisijunkite prie „Github“.

2. Eikite į viešą šabloną https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Spustelėkite „Use this template“ (Naudoti šį šabloną).

![Step3](/_media/Step3.png)

4. Pasirinkite „Create a new repository“ (Sukurti naują saugyklą).

5. Įveskite saugyklos pavadinimą.

![Step5](/_media/Step5.png)

6. Pasirinkite „Private“ (Privati).

7. Pasirinkite „Create repository“ (Sukurti saugyklą).

Šablono kopijavimas užtruks 5–30 sekundžių, po to turėsite savo kopiją.

8. Įsitikinkite, kad turite failą „.nojekyll“ – tai tuščias failas, reikalingas talpinant svetainę „Github“ platformoje, kitaip SRD nebus rodomas tinkamai. *(Nurodo „GitHub Pages“ nevykdyti publikuojamų failų per „Jekyll“).*


## Turinio pridėjimas

### *.md failai

.md failai yra „markdown“ failai. „Markdown“ – tai lengvas žymėjimo kalbos formatas, kurį galite naudoti norėdami pridėti formatavimo elementų į paprasto teksto dokumentus. Atsižvelgiant į turinio kiekį, visą savo žaidimo informaciją galite įrašyti į vieną *.md failą arba, kaip aš padariau svetainėje [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), sukurti atskirus failus kiekvienam skyriui. „Sample.md“ faile pateikiami keli formatavimo pavyzdžiai.

„Markdown“ kalbą labai lengva išmokti; naudokite nuorodą, pateiktą 2 punkte aukščiau esančiose „Būtinosiose sąlygose“, kad gautumėte visą sintaksės sąrašą.

### _sidebar.md

Tai yra jūsų meniu, naršymo sritis kairėje svetainės pusėje. Kai į savo saugyklą įkelsite „markdown“ failą, turite čia pridėti failo nuorodą, kad jo turinys būtų įtrauktas. Laikykitės esamo formatavimo.


## „Github Pages“ įjungimas, kad saugykla virstų svetaine

1. Savo saugykloje spustelėkite „Settings“ (Nustatymai).

![Website-Step1](/_media/Website-Step1.png)

2. Kairėje meniu pusėje pasirinkite „Pages“ (Puslapiai).

![Website-Step2](/_media/Website-Step2.png)

3. Jei dar nepadarėte saugyklos viešos („public“), turite du pasirinkimus:
    a. Padaryti saugyklą viešą, kas leis jums naudoti „Github Pages“ ir nemokamai talpinti savo SRD svetainę.
    b. Atnaujinti savo „Github“ paskyrą (rašymo metu tai kainuoja 4 USD per mėnesį arba 48 USD metinį mokestį).

4. Skiltyje „Branch“ pasirinkite „main“ ir spustelėkite „Save“ (Išsaugoti).

5. Palaukite 10–20 sekundžių ir atnaujinkite puslapį.

6. Dabar matysite savo URL, pvz., https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Šriftų keitimas

1. Redaguokite failą /_assets/style.css 

2. „body“ skiltyje rasite „siteFont“ ir „headingFont“.

3. Pakeiskite juos į norimus naudoti šriftus.


## „Fontawesome“ ir (arba) „Material Icons“ papildinio naudojimas nemokamoms piktogramoms rodyti SRD

### „Fontawesome“

Naudokite „Fontawesome“ nemokamoms piktogramoms ir animuotoms piktogramoms gauti. Prenumeruojantys vartotojai gali naudoti „Pro“ piktogramas.

1. Raskite piktogramą [Fontawesome](https://fontawesome.com/icons) svetainėje.
2. Pasirinkite piktogramą.
3. Iššokančiajame lange, skirtuke „HTML“, nukopijuokite viską, kas yra tarp „ “.

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Įterpkite nukopijuotą tekstą tarp `:` be tarpų.

```EXAMPLE
fa-solid fa-dice-d20
```

### „Material Icons“

Naudokite „Material Icons“ norėdami gauti daugiau nemokamų piktogramų.

1. Raskite piktogramas [Material Icons](https://fonts.google.com/icons) svetainėje.
2. Nukopijuokite ir įterpkite žiniatinklio „span“ nuorodą tiesiai į savo „markdown“ failus.

```markup
<span class="material-icons">face</span>
```