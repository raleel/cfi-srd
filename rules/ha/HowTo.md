# Abubuwan Bukata

1. Fahimtar asali game da [harshen markdown](https://www.markdownguide.org/basic-syntax/).

2. Za ka bukaci bude kyautar asusun [github](https://github.com/) idan ba ka da daya. Muna ba da shawarar ka yi amfani da sunan wasan RPG dinka domin wannan zai zama wani bangare na adireshin yanar gizo (URL) da mutane za su yi amfani da shi don shiga SRD dinka.

3. Za ka iya yin duk wannan tsarin ta cikin burauza ba tare da sanin yadda ake amfani da git ba. Ko da yake, koyon yadda ake amfani da github desktop zai ba ka damar gwada kowane canji da ka yi a kwamfutarka kafin ka wallafa shi ga duniya ta gani.

> Idan kana da sunan domain da ka yi rajista, za ka iya amfani da shi tare da wannan tsarin don kirkirar SRD kamar yadda na yi a https://srd.7thextinctionrpg.com

# Tsarin Aiki

## Kirkirar Ma'ajiyar (Repository) a Github

1. Shiga cikin Github

2. Kewaya zuwa ga samfuri na jama'a (public template) https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Danna "Use this template"

![Step3](/_media/Step3.png)

4. Zabi "Create a new repository"

5. Saka sunan ma'ajiyar

![Step5](/_media/Step5.png)

6. Zabi 'Private'

7. Zabi 'Create repository'

Zai dauki dakika 5-30 don kwafi samfurin, bayan haka za ka sami naka kwafin.

8. Tabbatar cewa kana da fayil din ".nojekyll", wannan fayil ne maras komai wanda ake bukata yayin ajiye gidan yanar gizo a Github, in ba haka ba SRD din ba zai bayyana yadda ya kamata ba. *(Yana gaya wa shafukan GitHub kada su sarrafa fayilolin da aka wallafa ta amfani da Jekyll).*


## Kara Abubuwan da kake Bukata

### Fayilolin *.md

Fayilolin .md su ne fayilolin markdown, Markdown harshe ne mai sauki na alama (markup language) wanda za ka iya amfani da shi don kara abubuwan tsari ga rubutu maras nauyi. Dangane da girman abubuwan da kake da su, za ka iya sanya dukkan bayanan wasanka a cikin fayil din *.md guda daya, ko kuma kamar yadda na yi a [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) ka kirkiri fayiloli daban-daban don kowane babi. "sample.md" yana bayar da wasu misalan tsari.

Harshen Markdown yana da saukin koya, yi amfani da hanyar da aka bayar a batu na 2 karkashin Abubuwan Bukata a sama don samun cikakken jerin tsarin rubutun.

### _Sidebar.md

Wannan shi ne menu naka, shafin kewayawa a gefen hagu na gidan yanar gizon. Da zarar ka kara fayil din markdown a ma'ajiyarka, kana bukatar kara fayil din a nan domin a hada abubuwan da ke ciki. Bi tsarin da aka riga aka sa.


## Kunna Github Pages don Juya Ma'ajiyar zuwa Gidan Yanar Gizo

1. A cikin ma'ajiyarka danna 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Zabi 'Pages' a cikin menu na gefen hagu

![Website-Step2](/_media/Website-Step2.png)

3. Idan ba ka sanya ma'ajiyar ta zama 'public' ba, kana da zabi biyu:
    a. Sanya ma'ajiyar ta zama 'public' wanda hakan zai ba ka damar amfani da Github pages don ajiye gidan yanar gizon SRD dinka kyauta.
    b. Haɓaka asusunka na Github (a lokacin rubuta wannan, yana kudin $4 a wata ko $48 na shekara).

4. Karkashin 'Branch' zabi 'main' sannan ka danna save

5. Ba shi dakika 10-20 sannan ka sabunta (refresh) shafin

6. Yanzu za ka ga adireshin yanar gizonka (URL) kamar https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Canza Font

1. Gyara fayil din /_assets/style.css

2. Karkashin 'body section' za ka sami siteFont & headingFont

3. Canza wadannan zuwa font din da kake son amfani da shi


## Amfani da Fontawesome da/ko Material Icons plugin don nuna gumaka kyauta a cikin SRD dinka

### Fontawesome

Yi amfani da Fontawesome don samun gumaka kyauta da kuma gumakan da ke motsi. Masu amfani da suka yi rajista za su iya amfani da Pro Icons.

1. Nemo gumakin a [Fontawesome](https://fontawesome.com/icons)
2. Zabi gumakin
3. A cikin taga mai tashi (popup window), karkashin HTML tab, kwafi duk abin da ke tsakanin " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Sanya rubutun da aka kwafa a tsakanin `:` babu sarari

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Yi amfani da Material Icons don samun karin gumaka kyauta

1. Nemo gumakan a [Material Icons](https://fonts.google.com/icons)
2. Kwafa & saka hanyar span na yanar gizo kai tsaye a cikin fayilolin markdown dinka

```markup
<span class="material-icons">face</span>
```