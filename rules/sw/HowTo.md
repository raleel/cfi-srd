# Masharti ya awali

1. Uelewa wa msingi wa [lugha ya markdown](https://www.markdownguide.org/basic-syntax/).

2. Utahitaji kuunda akaunti ya bure ya [github](https://github.com/) ikiwa huna moja. Ninapendekeza utumie jina la RPG yako kwani hili litakuwa sehemu ya URL ambayo watu watatumia kufikia SRD yako.

3. Unaweza kufanya mchakato huu wote kupitia kivinjari bila kujua git. Ingawa kujifunza github desktop kutakuwezesha kujaribu mabadiliko yoyote ndani ya kifaa chako kabla ya kuyaweka mtandaoni kwa ulimwengu kuyaona.

> Ikiwa una jina la kikoa (domain name) lililosajiliwa, unaweza kulitumia na mchakato huu kuunda SRD kama nilivyofanya mimi https://srd.7thextinctionrpg.com

# Mchakato

## Kuunda Hifadhi (Repository) kwenye Github

1. Ingia kwenye Github

2. Nenda kwenye kiolezo cha umma (public template) https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Bofya "Use this template"

![Step3](/_media/Step3.png)

4. Chagua "Create a new repository"

5. Ingiza jina la hifadhi

![Step5](/_media/Step5.png)

6. Chagua 'Private'

7. Chagua 'Create repository'

Itachukua sekunde 5-30 kunakili kiolezo hicho, kisha utakuwa na nakala yako mwenyewe.

8. Hakikisha kuwa una faili ya ".nojekyll" hii ni faili tupu inayohitajika wakati wa kuhost tovuti kwenye Github, vinginevyo SRD haitaonyesha vizuri. *(Inaiambia Github Pages isichakate faili zilizochapishwa kupitia Jekyll).*


## Kuongeza Maudhui Yako

### Faili za *.md

Faili za .md ni faili za markdown, Markdown ni lugha rahisi ya uwekaji alama unayoweza kutumia kuongeza vipengele vya umbizo kwenye hati za maandishi. Kulingana na ukubwa wa maudhui yako, unaweza kuweka maelezo yote ya mchezo wako kwenye faili moja ya *.md, au kama nilivyofanya kwenye [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) kuunda faili tofauti kwa kila sura. Faili ya "sample.md" inatoa mifano kadhaa ya umbizo.

Lugha ya Markdown ni rahisi sana kujifunza, tumia kiungo ulichopewa kwenye hoja ya 2 chini ya Masharti ya awali hapo juu kwa orodha kamili ya sintaksia.

### _Sidebar.md

Hii ni menyu yako, kidirisha cha urambazaji kilicho upande wa kushoto wa tovuti. Mara tu unapoongeza faili ya markdown kwenye hifadhi yako, unahitaji kuongeza faili hiyo hapa ili maudhui yake yajumuishwe. Fuata umbizo lililopo.


## Kuwezesha Github Pages kugeuza Hifadhi kuwa Tovuti

1. Kwenye hifadhi yako bofya 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Chagua 'Pages' kwenye menyu ya upande wa kushoto

![Website-Step2](/_media/Website-Step2.png)

3. Ikiwa haujafanya hifadhi kuwa 'public', una machaguo mawili:
    a. Fanya hifadhi kuwa ya umma (public) ambayo itakuwezesha kutumia Github pages kuhost Tovuti yako ya SRD bila malipo
    b. Boresha akaunti yako ya Github (wakati wa kuandika hii inagharimu $4 kwa mwezi au ada ya $48 kwa mwaka)

4. Chini ya 'Branch' chagua 'main' na bofya save

5. Ipe sekunde 10-20 kisha onyesha upya (refresh) ukurasa

6. Sasa utaona URL yako kama vile https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Kubadilisha Fonti

1. Hariri faili ya /_assets/style.css

2. Chini ya 'body section' utapata siteFont & headingFont

3. Badilisha hizi ziwe fonti unazotaka kutumia


## Kutumia plagi ya Fontawesome na/au Material Icons kuonyesha ikoni za bure kwenye SRD yako

### Fontawesome

Tumia Fontawesome kupata ikoni za bure na ikoni zilizohuishwa (animated icons). Watumiaji waliojisajili wanaweza kutumia Pro Icons

1. Tafuta ikoni kwenye [Fontawesome](https://fontawesome.com/icons)
2. Chagua ikoni hiyo
3. Katika dirisha ibukizi, chini ya kichupo cha HTML nakili kila kitu kati ya " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Weka maandishi uliyoyanakili kati ya `:` bila nafasi

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Tumia Material Icons kwa ikoni zaidi za bure

1. Tafuta ikoni kwenye [Material Icons](https://fonts.google.com/icons)
2. Nakili & ingiza kiungo cha web span moja kwa moja kwenye faili zako za markdown

```markup
<span class="material-icons">face</span>
```