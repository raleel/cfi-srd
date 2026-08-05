# Priekšnoteikumi

1. Pamatzināšanas par [markdown valodu](https://www.markdownguide.org/basic-syntax/).

2. Jums būs jāizveido bezmaksas [github](https://github.com/) konts, ja tāds vēl nav. Ieteicams izmantot savas RPG spēles nosaukumu, jo tas kļūs par daļu no URL, kuru cilvēki izmantos, lai piekļūtu jūsu SRD.

3. Visu šo procesu varat veikt pārlūkprogrammā, nezinot git. Tomēr "github desktop" apgūšana ļaus jums pārbaudīt visas izmaiņas lokāli, pirms tās publicēt pasaulei.

> Ja esat reģistrējis domēna vārdu, varat to izmantot šajā procesā, lai izveidotu SRD tādu, kādu esmu izveidojis es: https://srd.7thextinctionrpg.com

# Process

## Repozitorija izveide Github

1. Piesakieties Github

2. Dodieties uz publisko veidni https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Noklikšķiniet uz "Use this template"

![Step3](/_media/Step3.png)

4. Atlasiet "Create a new repository"

5. Ievadiet repozitorija nosaukumu

![Step5](/_media/Step5.png)

6. Atlasiet 'Private' (Privāts)

7. Atlasiet 'Create repository'

Būs nepieciešamas 5–30 sekundes, lai nokopētu veidni, pēc tam jums būs sava kopija.

8. Pārliecinieties, ka jums ir fails ".nojekyll" — tas ir tukšs fails, kas nepieciešams, mitinot vietni Github, pretējā gadījumā SRD netiks pareizi attēlots. *(Pasaka GitHub Pages neizlaist publicētos failus caur Jekyll).*


## Satura pievienošana

### *.md faili

.md faili ir markdown faili. Markdown ir viegla iezīmēšanas valoda, ko varat izmantot, lai pievienotu formatēšanas elementus vienkārša teksta dokumentiem. Atkarībā no satura apjoma varat ievietot visu spēles informāciju vienā *.md failā vai, kā es to darīju vietnē [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), izveidot atsevišķus failus katrai nodaļai. "sample.md" sniedz dažus formatēšanas piemērus.

Markdown valodu ir ļoti viegli apgūt, izmantojiet saiti, kas norādīta 2. punktā sadaļā Priekšnoteikumi, lai iegūtu pilnu sintakses sarakstu.

### _Sidebar.md

Šī ir jūsu izvēlne, navigācijas panelis vietnes kreisajā pusē. Kad esat pievienojis markdown failu savam repozitorijam, jums šeit ir jāpievieno fails, lai tā saturs tiktu iekļauts. Ievērojiet esošo formatējumu.


## Github Pages iespējošana, lai pārvērstu repozitoriju vietnē

1. Savā repozitorijā noklikšķiniet uz 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Kreisās puses izvēlnē atlasiet 'Pages'

![Website-Step2](/_media/Website-Step2.png)

3. Ja neesat padarījis repozitoriju 'publisku', jums ir divas izvēles:
    a. Padariet repozitoriju publisku, kas ļaus jums izmantot Github pages, lai bez maksas mitinātu savu SRD vietni.
    b. Jauniniet savu Github kontu (rakstīšanas brīdī tas maksā 4 USD mēnesī vai 48 USD gada maksu).

4. Sadaļā 'Branch' atlasiet 'main' un noklikšķiniet uz save.

5. Uzgaidiet 10–20 sekundes un atsvaidziniet lapu.

6. Tagad redzēsiet savu URL, piemēram, https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Fontu mainīšana

1. Rediģējiet /_assets/style.css failu.

2. Sadaļā 'body section' atradīsiet siteFont un headingFont.

3. Mainiet tos uz fontiem, kurus vēlaties izmantot.


## Fontawesome un/vai Material Icons spraudņa izmantošana, lai SRD attēlotu bezmaksas ikonas

### Fontawesome

Izmantojiet Fontawesome, lai iegūtu bezmaksas ikonas un animētas ikonas. Abonētie lietotāji var izmantot Pro ikonas.

1. Atrodiet ikonu vietnē [Fontawesome](https://fontawesome.com/icons)
2. Atlasiet ikonu.
3. Uznirstošajā logā cilnē HTML nokopējiet visu, kas atrodas starp " ".

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Ievietojiet nokopēto tekstu starp `:` bez atstarpēm.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Izmantojiet Material Icons, lai iegūtu vairāk bezmaksas ikonu.

1. Atrodiet ikonas vietnē [Material Icons](https://fonts.google.com/icons)
2. Nokopējiet un ievietojiet tīmekļa span saiti tieši savos markdown failos.

```markup
<span class="material-icons">face</span>
```