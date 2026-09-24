# Priekšnosacījumi

1. Pamatzināšanas par [markdown valodu](https://www.markdownguide.org/basic-syntax/).

2. Jums būs jāizveido bezmaksas [GitHub](https://github.com/) konts, ja jums tāda vēl nav. Mēs iesakām izmantot savas RPG spēles nosaukumu, jo tas kļūs par daļu no URL, kuru cilvēki izmantos, lai piekļūtu jūsu SRD.

3. Jūs varat veikt visu šo procesu caur pārlūkprogrammu, nezinot git. Lai gan GitHub Desktop apgūšana ļaus jums pārbaudīt visas izmaiņas lokāli, pirms to publicēšanas pasaulei.

> Ja esat reģistrējis domēna vārdu, varat to izmantot šajā procesā, lai izveidotu SRD, kā es to izdarīju https://srd.7thextinctionrpg.com

# Process

## Repozitorija izveide Github

1. Piesakieties Github

2. Dodieties uz publisko veidni https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Noklikšķiniet uz "Use this template"

![Step3](/_media/Step3.png)

4. Atlasiet "Create a new repository"

5. Ievadiet repozitorija nosaukumu

![Step5](/_media/Step5.png)

6. Atlasiet 'Private'

7. Atlasiet 'Create repository'

Veidnes kopēšana aizņems 5–30 sekundes, pēc tam jums būs sava kopija.

8. Pārliecinieties, vai jums ir fails ".nojekyll" — tas ir tukšs fails, kas nepieciešams, mitinot vietni Github, pretējā gadījumā SRD netiks pareizi attēlots. *(Norāda GitHub Pages neapstrādāt publicētos failus caur Jekyll).*


## Satura pievienošana

### *.md faili

.md faili ir markdown faili; Markdown ir viegla iezīmēšanas valoda, kuru varat izmantot, lai pievienotu formatējuma elementus vienkārša teksta dokumentiem. Atkarībā no jūsu satura apjoma varat ievietot visu spēles informāciju vienā *.md failā vai, kā es to esmu izdarījis vietnē [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), izveidot atsevišķus failus katrai nodaļai. "Sample.md" sniedz dažus formatēšanas piemērus.

Markdown valodu ir ļoti viegli apgūt; izmantojiet saiti, kas sniegta 2. punktā sadaļā Priekšnosacījumi, lai iegūtu pilnu sintakses sarakstu.

### _sidebar.md

Šī ir jūsu izvēlne, navigācijas panelis vietnes kreisajā pusē. Kad esat pievienojis markdown failu savam repozitorijam, jums šeit ir jāpievieno fails, lai tā saturs tiktu iekļauts. Ievērojiet esošo formatējumu.


## Github Pages iespējošana, lai pārvērstu repozitoriju par vietni

1. Savā repozitorijā noklikšķiniet uz 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Kreisās puses izvēlnē atlasiet 'Pages'

![Website-Step2](/_media/Website-Step2.png)

3. Ja neesat padarījis repozitoriju 'public', jums ir divas izvēles:
    a. Padariet repozitoriju publisku, kas ļaus jums izmantot Github pages, lai bez maksas mitinātu savu SRD vietni
    b. Jauniniet savu Github kontu (rakstīšanas brīdī tas maksā 4 USD mēnesī vai 48 USD gada maksa)

4. Sadaļā 'Branch' atlasiet 'main' un noklikšķiniet uz Save

5. Uzgaidiet 10–20 sekundes, tad atsvaidziniet lapu

6. Tagad jūs redzēsiet savu URL, piemēram, https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Fontu maiņa

1. Rediģējiet failu /_assets/style.css

2. Sadaļā 'body' atradīsiet siteFont un headingFont

3. Nomainiet tos uz fontiem, kurus vēlaties izmantot


## Fontawesome un/vai Material Icons spraudņa izmantošana, lai SRD parādītu bezmaksas ikonas

### Fontawesome

Izmantojiet Fontawesome, lai iegūtu bezmaksas ikonas un animētas ikonas. Abonētie lietotāji var izmantot Pro ikonas

1. Atrodiet ikonu [Fontawesome](https://fontawesome.com/icons)
2. Atlasiet ikonu
3. Uznirstošajā logā, cilnē HTML, nokopējiet visu, kas atrodas starp " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Ievietojiet nokopēto tekstu starp `:` bez atstarpēm

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Izmantojiet Material Icons, lai iegūtu vairāk bezmaksas ikonu

1. Atrodiet ikonas [Material Icons](https://fonts.google.com/icons)
2. Nokopējiet un ievietojiet web span saiti tieši savos markdown failos

```markup
<span class="material-icons">face</span>
```