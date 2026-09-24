# Masharti ya Awali

1. Uelewa wa kimsingi wa [lugha ya markdown](https://www.markdownguide.org/basic-syntax/).

2. Utahitaji kuunda akaunti ya [GitHub](https://github.com/) isiyolipishwa ikiwa huna moja. Tunapendekeza utumie jina la RPG yako kwani hili litakuwa sehemu ya URL ambayo watu watatumia kufikia SRD yako.

3. Unaweza kufanya mchakato huu wote kupitia kivinjari bila kujua git. Ingawa kujifunza GitHub Desktop kutakuwezesha kujaribu mabadiliko yoyote ndani ya kifaa chako kabla ya kuyaweka hadharani ili ulimwengu uyaone.

> Ikiwa umesajili jina la kikoa (domain name), unaweza kulitumia na mchakato huu ili kuunda SRD kama nilivyofanya https://srd.7thextinctionrpg.com

# Mchakato

## Kuunda Hifadhi (Repository) kwenye Github

1. Ingia kwenye Github

2. Nenda kwenye kiolezo MVU umma (public template) https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Bofya "Use this template"

![Step3](/_media/Step3.png)

4. Chagua "Create a new repository"

5. Ingiza jina la hifadhi

![Step5](/_media/Step5.png)

6. Chagua 'Private'

7. Chagua 'Create repository'

Itachukua sekunde 5-30 kunakili kiolezo hicho, kisha utakuwa na nakala yako mwenyewe.

8. Hakikisha una faili ya ".nojekyll" hii ni faili tupu inayohitajika unapopangisha tovuti kwenye Github vinginevyo SRD haitaonyeshwa ipasavyo. *(Inaiambia GitHub Pages isichakate faili zilizochapishwa kupitia Jekyll).*

## Kuongeza Maudhui Yako

### Faili za *.md

Faili za .md ni faili za markdown, Markdown ni lugha nyepesi ya alama (markup language) unayoweza kutumia kuongeza vipengele vya uumbizaji kwenye hati za maandishi wazi. Kulingana na ukubwa wa maudhui yako unaweza kuweka maelezo yote ya mchezo wako katika faili moja ya *.md, au kama nilivyofanya katika [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) kuunda faili tofauti kwa kila sura. "Sample.md" inatoa mifano kadhaa ya uumbizaji.

Lugha ya Markdown ni rahisi sana kujifunza, tumia kiungo kilichotolewa kwenye hatua ya 2 chini ya Masharti ya Awali hapo juu kwa orodha kamili ya sintaksia.

### _sidebar.md

Hii ni menyu yako, kidirisha MVU urambazaji upande wa kushoto wa tovuti. Mara tu unapoongeza faili ya markdown kwenye hifadhi yako unahitaji kuongeza faili hiyo hapa ili maudhui yake yajumuishwe. Fuata uumbizaji uliopo.

## Washa Github Pages ili Kugeuza Hifadhi kuwa Tovuti

1. Katika hifadhi yako bofya 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Chagua 'Pages' kwenye menyu ya upande wa kushoto

![Website-Step2](/_media/Website-Step2.png)

3. Ikiwa hujafanya hifadhi kuwa 'public', una chaguo mbili
    a. Ifanye hifadhi kuwa ya umma (public) ambayo itakuwezesha kutumia Github pages kupangisha Tovuti yako ya SRD bila malipo
    b. Boresha akaunti yako ya Github (wakati wa kuandika hii inagharimu $4 kwa mwezi au ada ya $48 kwa mwaka)

4. Chini ya 'Branch' chagua 'main' na bofya Save

5. Ipe sekunde 10-20 kisha uburudishe (refresh) ukurasa

6. Sasa utaona URL yako kama vile https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)

## Kubadilisha Fonti

1. Hariri faili ya /_assets/style.css

2. Chini ya 'body section' utapata siteFont & headingFont

3. Badilisha hizi kuwa fonti unazotaka kutumia

## Kutumia programu jalizi ya Fontawesome na/au Material Icons ili kuonyesha ikoni za bure katika SRD yako

### Fontawesome

Tumia Fontawesome kupata ikoni za bure na ikoni za uhuishaji. Watumiaji waliosajiliwa wanaweza kutumia Pro Icons

1. Tafuta ikoni kwenye [Fontawesome](https://fontawesome.com/icons)
2. Chagua ikoni
3. Kwenye dirisha ibukizi, chini ya kichupo MVU HTML nakili kila kitu kati ya " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Weka maandishi yaliyonakiliwa kati ya `:` bila nafasi

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Tumia Material Icons kwa ikoni zaidi za bure

1. Tafuta ikoni kwenye [Material Icons](https://fonts.google.com/icons)
2. Nakili & ingiza kiungo MVU web span moja kwa moja kwenye faili zako za markdown

```markup
<span class="material-icons">face</span>
```