# 1. peatükk: Tegelased

Põhitegelane on määratletud rea erinevate elementidega, mis kirjeldavad tegelase võimekust. Need elemendid on:

- Karakteristikud: näiteks JÕU või KAR
- Atribuudid: asjad nagu pikkus või liikumine
- Oskused: vilumus põhilistes võimetes

Enamikku neist elementidest kirjeldatakse arvude kaudu ning mõned neist sõltuvad teistest või on nende põhjal arvutatud. Mida iga element tähendab ja kuidas neid määratakse, kirjeldatakse järgnevates sektsioonides.

---
## 1. samm: Tegelase kontseptsioon

Hea lähtepunkt on omada mingit ettekujutust, millist tüüpi tegelast soovite mängida; näiteks karastunud võitlejat või kavalat varast. Teie tegelase kontseptsioon ei pea olema selles etapis keeruline; piisab ideest, mis aitab suunata teatud valikuid, nagu rass ja klass. Kujutlusvõime ergutamiseks on loetletud mõned tegelase ideed.

- Noor, naiivne maagiakasutaja
- Halva iseloomuga pool-orkist võitleja
- Ülienesekindel poolinimestest varas
- Vagad kääbusest vaimulik

---
## 2. samm: Karakteristikud

Igaüht määratlevad seitse karakteristikut, mis räägivad midagi teie tegelase kohta; kui tugev või kiire ta on; kui nutikas või terve. Karakteristikud on iga _Classic Fantasy Imperative_ tegelase tuumaks ja moodustavad aluse enamikule teistele elementidele, nagu atribuudid ja oskused. Need seitse karakteristikut on:

- Jõud (JÕU)
- Vastupidavus (VAS)
- Suurus (SUU)
- Osavus (OSA)
- Intellekt (INT)
- Vägi (VÄG)
- Karisma (KAR)

Enne karakteristikute arvutamist selgitab järgnev sektsioon, mida igaüks neist esindab.

#### Jõud (JÕU)

JÕU esindab füüsilist jõudu: kui palju keegi suudab tõsta, kui kõvasti lüüa jne. JÕU on [Kahjumuunduri](0001_Characters.md?id=damage-modifier) komponent (vt allpool olevat sektsiooni [Atribuudid](0001_Characters.md?id=step-3-attributes)). Kui tegelase JÕU langeb nullini, kaotab ta võime liikuda või objekte tõsta.

#### Vastupidavus (VAS)

VAS on tervise ja vastupidavuse mõõt. VAS on komponent [Elupunktide](0001_Characters.md?id=hit-points) ja [Tervenemismäära](0001_Characters.md?id=healing-rate) määramisel (vt allpool). Kui VAS langeb mis tahes põhjusel nullini, tegelane sureb.

#### Suurus (SUU)

SUU mõõdab massi ja aitab näidata pikkust ja kaalu. SUU-d kasutatakse [Elupunktide](0001_Characters.md?id=hit-points) väljaselgitamiseks, kuna suuremad ja raskemad olendid taluvad vigastusi üldjuhul paremini. SUU-d saab kasutada ka tegelase Kahjumuunduri määramiseks, kuna mass aitab suurendada löögi jõudu.

#### Osavus (OSA)

Väledust, tasakaalu ja reflekse mõõdetakse OSA-ga. See on [Algatuse](0001_Characters.md?id=initiative) oluline aspekt. Kui tegelase OSA langeb nullini, tabab teda funktsionaalne halvatus.

#### Intellekt (INT)

INT on kognitiivse võimekuse mõõt. Madalama INT-skooriga tegelased ei ole tingimata rumalad, kuid nende loovus mõistuse kasutamisel võib olla piiratud. INT on tegur [Algatuse](0001_Characters.md?id=initiative) arvutamisel. Kui INT langeb nullini, muutub tegelane täiesti mõistusevaeseks.

#### Vägi (VÄG)

VÄG on tegelase hinge, vaimu, sisemise ajendatuse või maagilise mahutavuse mõõt. VÄG määrab tegelase [Maagiapunktid](0001_Characters.md?id=magic-points) ja [Õnnepunktid](0001_Characters.md?id=luck-points). Kui tegelase VÄG langeb kunagi nullini, kaotab ta igasuguse iseseisva tahte.

#### Karisma (KAR)

Karisma mõõdab isiksust ja on sõltumatu füüsilisest välimusest. KAR mõjutab tegelase [Kogemusmuundurit](0001_Characters.md?id=experience-modifier). Kui KAR langeb kunagi nullini, ei suuda tegelane enam teistega sotsiaalselt suhelda, muutudes nii piinlikult häbelikuks või antisotsiaalseks, et teda ignoreeritakse või isegi tõrjutakse eemale.

---
### Karakteristikute arvutamine

Igal karakteristikul on numbriline väärtus, mis määrab selle potentsiaali. Iga täringuväärtuse taga sulgudes olev arv on rassiline keskmine ja seda kasutatakse mõõdupuuna teie tegelase tulemuste hindamiseks võrreldes teiste oma liigi esindajatega. Soovitused karakteristikute määramiseks hõlmavad:

- **Täringuvisked:** Veeretage täringuid, mis on näidatud Rassiliste karakteristikute tabelis JÕU, VAS, SUU, OSA, INT, VÄG ja KAR jaoks, võttes iga veeretatud skoori sellisena, nagu see tuleb. Kuna nende visete tulemused võivad olla üsna juhuslikud, on sageli parem otsustada tegelase kontseptsioon pärast täringute veeretamist. Vastasel juhul võivad lõplikud karakteristikud välistada eelnevalt kavandatud rolli. Veeretage 3d6 JÕU, VAS, OSA, VÄG ja KAR jaoks; seejärel 2d6+6 SUU ja INT jaoks.
- **Täringuvisked, määramine:** Nagu ülalpool, välja arvatud see, et mängija võib väärtusi vahetada samade täringuvahemikega karakteristikute vahel. Näiteks inimese loomisel võib mängija vahetada väärtusi JÕU, VAS, OSA, VÄG ja KAR vahel, kuna neil on ühine 3d6 vahemik, või SUU ja INT vahel, millel on ühine 2d6+6 vahemik – kuid need peavad alati olema samast täringuvahemiku grupist; te ei saa vahetada viskeid ühest grupist teise.
- **Täringuvisked, kõrgeim:** Veeretage üks lisatäring, nagu on näidatud JÕU, VAS, SUU, OSA, INT, VÄG ja KAR jaoks, ning eemaldage igaühe puhul madalaim tulemus.
- **Punktide jagamine:** Täringute veeretamise asemel karakteristikute määramiseks koostavad mängijad oma tegelase etteantud punktisummast, mille suuruse määrab tegelase liik. See meetod on parim rühmadele, kes teavad, mida nad tahavad mängida, ja soovivad oma tegelase kujundada konkreetse klassi jaoks. Punktide jagamise võimaluse kohta kehtivad teatud reeglid:
  - Alustage iga seitsme karakteristiku rassilise keskmisega, nagu on märgitud sulgudes pärast iga allpool toodud täringuvahemikku.
  - Kulutage karakteristikute suurendamiseks veel 10 punkti (inimesed) või 6 punkti (poolinimesed).
  - Võite ka karakteristikut vähendada, et saada lisapunkte. Näiteks vähendage JÕU 11-lt 9-le, et saada 2 punkti.
  - Karakteristikud ei saa olla _madalamad_ kui nende potentsiaalse täringuveeretuse kohaselt võimalik miinimum või _kõrgemad_ kui võimalik maksimum.

Mängujuhid võivad vabalt välja mõelda oma meetodeid või punktiväärtusi.

Järgnev tabel võtab kokku teabe, mida on vaja iga ülaltoodud meetodi jaoks. Täringuvahemikke kasutatakse mõlemas täringuveeretamise meetodis, samas kui sulgudes olevaid numbreid kasutatakse punktide jagamisel.

##### Rassiliste karakteristikute tabel

| Rass | Kääbus | Päkapikk | Gnoom |
| --- | --- | --- | --- |
| JÕU | 2d6+9 (16) | 2d6+4 (11) | 2d6+1 (8) |
| VAS | 2d6+9 (16) | 3d6 (11) | 2d6+6 (13) |
| SUU | 2d4+4 (9) | 2d6+4 (11) | 1d3+2 (4) |
| OSA | 3d6 (11) | 2d6+9 (16) | 3d6+2 (13) |
| INT | 2d6+6 (13) | 2d6+7 (14) | 2d6+8 (15) |
| VÄG | 3d6 (11) | 2d6+7 (14) | 2d6+7 (14) |
| KAR | 2d6+2 (9) | 3d6 (11) | 3d6 (11) |

| Rass | Poolpäkapikk | Pool-ork | Poolinimene | Inimene |
| --- | --- | --- | --- | --- |
| JÕU | 3d6 (11) | 2d6+9 (16) | 2d6+1 (8) | 3d6 (11) |
| VAS | 3d6 (11) | 2d6+6 (13) | 2d6+7 (14) | 3d6 (11) |
| SUU | 2d6+6 (13) | 2d6+9 (16) | 1d4+5 (8) | 2d6+6 (13) |
| OSA | 2d6+6 (13) | 3d6 (11) | 3d6+3 (14) | 3d6 (11) |
| INT | 2d6+6 (13) | 2d6+5 (12) | 2d6+6 (13) | 2d6+6 (13) |
| VÄG | 2d6+6 (13) | 3d6 (11) | 2d6+9 (16) | 3d6 (11) |
| KAR | 3d6 (11) | 2d6+1 (8) | 2d6+5 (12) | 3d6 (11) |

---
## 3. samm: Atribuudid

Igal tegelasel on ka komplekt atribuute. Need on karakteristikutest tuletatud või nende poolt määratud võimed, mida kasutatakse mängukäigu teatud tegurite kontrollimiseks.

#### Tegevuspunktid

Seda, kui sageli saab tegelane [Võitlusvoorus](0008_Combat.md?id=combat-rounds) tegutseda, määravad tegevuspunktid. Algajad tegelased alustavad 2 tegevuspunktiga, kuid saavad neid juurde, kui nad auastmes tõusevad. Üksikasju vaadake vastavatest klasside edasijõudmise tabelitest jaotisest [Klassid](0003_Classes.md).

#### Kahjumuundur

Täiendav kahjusumma, mida tegelane tekitab, kui ta füüsiliselt lööb või jõudu rakendab. Seda kasutatakse üldiselt võitlusolukordades, kuid seda saab kasutada ka objektide purustamisel. Kahjumuundur on täiendav täringuvise, mis kas lisatakse relva või tööriista poolt tekitatud kahjule või lahutatakse sellest. Kui negatiivne kahjumuundur viib relva kahju nulli või allapoole, siis ei ole tekitatud mingit kahju.

Liitke kokku JÕU ja SUU ning vaadake kahjumuunduri tabelit:

##### Kahjumuunduri tabel

| JÕU+SUU | Kahjumuundur |
| :-: | :-: |
| 5 või vähem | –1d8 |
| 6–10 | –1d6 |
| 11–15 | –1d4 |
| 16–20 | –1d2 |
| 21–25 | +0 |
| 26–30 | +1d2 |
| 31–35 | +1d4 |
| 36–40 | +1d6 |
| 41–45 | +1d8 |
| 46–50 | +1d10 |
| 51–60 | +1d12 |
| 61–70 | +2d6 |
| 71–80 | +1d8+1d6 |
| 81–90 | +2d8 |
| 91–100 | +1d10+1d8 |
| 101–110 | +2d10 |
| 111–120 | +2d10+1d2 |
| 121–130 | +2d10+1d4 |
| Iga 10 punkti | Jätka progresseerumist |

#### Kogemusmuundur

Mängu käigus parandavad tegelased oma oskusi ja võimeid. See saavutatakse kogemuste veeretuste abil, mida on üksikasjalikumalt selgitatud [Mängusüsteemi](0007_Game_System.md?id=experience-rolls) sektsioonis.

Tegelase KAR-skoor võib kohandada kogemuste veeretuste arvu, mida tegelane saab, peegeldades nende suhteid kaaslastega ja nende mainet kogukonnas. Kui KAR on kõrge, on inimesed valmis pingutama, et aidata tegelast koolitada või toetada, kui ta õpib. Vastupidi, kui KAR on eriti madal, võib olla raskusi oma võimete parandamisega ilma teiste abita; näiteks kellegi leidmine, kellega treeningvõitlust pidada.

##### Kogemusmuunduri tabel

| KAR | Kog. muundur |
| :-: | :-: |
| 6 või vähem | -1 |
| 7-12 | +0 |
| 13-18 | +1 |
| Iga 6 punkti | +1 |

#### Tervenemismäär

Pärast vigastuste saamist peab tegelane taastuma. Tervenemismäär määrab, kui kiiresti ta loomulikult haavadest paraneb. Sõltuvalt vigastuse raskusest (vt sektsiooni [Kahju ja haavatase](0007_Game_System.md?id=damage-and-wound-levels)), näitab tervenemismäär, mitu elupunkti päevas, nädalas või kuus taastatakse.

##### Tervenemismäära tabel

| VAS | Tervenemismäär |
| :-: | :-: |
| 6 või vähem | 1 |
| 7-12 | 2 |
| 13-18 | 3 |
| Iga 6 punkti | +1 |

#### Algatus

Hetke, mil keegi võitluses reageerib, määrab algatus. Algatus toimib algatusvisete muundurina; mida kõrgem on algatus, seda kiiremini reageeritakse võitlusolukorras, määrates, millal saate tegutseda. Täiendavad tegurid – näiteks soomus – muudavad seda. [Võitluse](0008_Combat.md) peatükk käsitleb üksikasjalikumalt, kuidas [Algatust](0008_Combat.md?id=initiative) kasutatakse.

Algatus on OSA ja INT karakteristikute keskmine.

#### Õnnepunktid

Õnnepunktid esindavad seda kummalist jõudu, mis eristab seiklevaid kangelasi tavalistest inimestest. Nimetage seda saatuseks, karmaks või lihtsalt heaks õnneks. Õnnepunkte saab kasutada:

- Täringute uuesti veeretamiseks, kui tulemused on ebasoodsad.
- Füüsilise kahju või muude õnnetute asjaolude leevendamiseks.
- Eelise saamiseks võitluse otsustaval hetkel.

Täpselt seda, kuidas ja millal neid kasutatakse, kirjeldatakse sektsioonis [Õnnepunktide kasutamine](0007_Game_System.md?id=using-luck-points). Kui Õnnepunkt on kulutatud, väheneb nende varu; kui Õnnepunktid on otsas, pole neid rohkem saadaval – välja arvatud juhul, kui mängujuht teeb ootamatu auhinna – kuni järgmise mänguseansini, mil need taastuvad oma tavapärase väärtuseni.

##### Õnnepunktide tabel

| VÄG | Õnnepunktid |
| :-: | :-: |
| 6 või vähem | 1 |
| 7-12 | 2 |
| 13-18 | 3 |
| Iga 6 punkti | +1 |

_\* Inimesed alustavad ühe täiendava Õnnepunktiga lisaks ülalnäidatule._

_\*\* Kõik tegelased saavad ühe täiendava Õnnepunkti iga uue auastme saavutamisel._

#### Maagiapunktid

Müstilised võimed ja loitsud, mida _Classic Fantasy Imperative_ süsteemis heidetakse, tuginevad tavaliselt maagiapunktidele. Kuna maagia kättesaadavus võib olla kampaania seades piiratud või seotud kindlate maagiliste elukutsetega, võivad mõned tegelased pidada seda atribuuti üleliigseks.

Neile, kes suudavad selliseid jõude kasutada, on tegelase maagiapunktid võrdsed tema VÄG-ga. Neid punkte kasutatakse loitsude heitmiseks, mille maksumus sõltub kasutatava maagia tüübist. Kui maagiakasutajatel saavad maagiapunktid otsa, on nad ammendanud oma võime loitsida, kuni maagiapunktid on taastunud.

#### Liikumismäär

Igal olendil on liikumismäär – teatud jalgade arv, mida saab läbida kindla ajavahemiku jooksul. Liikumist ei arvutata karakteristikute põhjal, vaid see on vaikeväärtus, mis erineb liikide lõikes. Inimeste baasliikumismäär on 20 jalga, kuigi teatud oskused võivad seda parandada. Sektsioon [Liikumine](0008_Combat.md?id=movement) pakub rohkem üksikasju.

##### Liikumismäära tabel rassi järgi

| Liik | Jalad | Meetrid |
| :-- | :-: | :-: |
| Kääbus | 15 | 4,5 |
| Päkapikk | 20 | 6 |
| Gnoom | 15 | 4,5 |
| Poolpäkapikk | 20 | 6 |
| Pool-ork | 20 | 6 |
| Poolinimene | 15 | 4,5 |
| Inimene | 20 | 6 |#### Tabamispunktid

Tabamispunktid tähistavad seda, kui palju vigastusi kehaosa talub, enne kui see muutub kasutuskõlbmatuks, mis võib viia töövõimetuse ja lõpuks tegelase surmani. Iga olendi keha on jaotatud eraldi piirkondadeks – näiteks inimestel on seitse: pea, rind, kõht, käed ja jalad –, millest igaühel on oma tabamispunktid.

Mõnedel olenditel, nagu koletised või erinevat liiki loomad, on oma loomuse tõttu sageli radikaalselt erinev kehaehitus, kuid igal nende kehaosal on siiski tabamispunktid. Kui kehaosa tabamispunktid langevad mis tahes liiki kahjustuse tõttu teatud tasemeni, kannatab tegelane teatud tagajärgi, mis peegeldavad vigastuse raskust. Lisateavet haavade kohta leiate jaotisest [Kahjustused ja haavad](0007_Game_System.md?id=damage-and-wound-levels).

Iga piirkonna tabamispunktide arvutamiseks liitke VAS ja SUU ning leidke tulemus tabamispunktide tabelist. Kõik tegelased saavad 2. ja 4. järgus 1 täiendava tabamispunkti igas piirkonnas.

##### Piirkondlike tabamispunktide tabel

| Piirkond | VAS+SUU |  |  |  |  |  |  |  |  |
| :-- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  | 1–5 | 6–10 | 11–15 | 16–20 | 21–25 | 26–30 | 31–35 | 36–40 | +5 |
| Pea | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | +1 |
| Rind | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | +1 |
| Kõht | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | +1 |
| Kumbki käsi | 1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | +1 |
| Kumbki jalg | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | +1 |

---
## 4. samm: Oskused

Vaikimisi on igal tegelasel hulk tavaoskusi, mis võimaldavad tal sooritada mitmesuguseid toiminguid erineva asjatundlikkusega. Neid oskusi on üksikasjalikumalt kirjeldatud peatükis [Oskused](0005_Skills.md), kuid need hõlmavad igapäevaseid tegevusi ja kohalikke teadmisi, mida igaüks saab kasutada ilma eriväljaõppeta. Tegelase loomise selles etapis peavad mängijad teadma vaid iga tavaoskuse baastaset.

Iga tavaoskuse baasskoor määratakse kahe karakteristikute summa või ühe karakteristikute kordaja alusel. See väärtus esindab tegelase loomupärast pädevust igas valdkonnas, sisuliselt tema toorest annet enne igasugust kujundavat väljaõpet, mida ta on saanud oma kultuuri ja elukutse raames.

Tavaoskuste tabel näitab, kuidas baasväärtused arvutatakse, koos lühikirjeldusega selle kohta, mis oskus on ja mida see teeb. Skoor esindab oskuse õnnestumise protsentuaalset tõenäosust; seega väljendatakse kergejõustiku skoori 25 kui 25%. Oskuste protsentide toimimist ja üksikasjalikumaid oskuste kirjeldusi on kirjeldatud peatükis [Oskused](0005_Skills.md).

Pange tähele, et mõne oskuse baasprotsente muudavad nii kultuur kui ka elukutse, seega muutuvad need algväärtused tegelase loomise käigus.

##### Tavaoskuste tabel

| Oskus | Baasprotsent |
| :-- | :--: |
| Kergejõustik | JÕU+OSA |
| Paadisõit | JÕU+VAS |
| Ramm | JÕU+SUU |
| Peitmine | OSA+VÄG |
| Tavad | INT x2, +40* |
| Tants | OSA+KAR |
| Petmine | INT+KAR |
| Sõidukijuhtimine | OSA+VÄG |
| Vastupidavus | VAS x2 |
| Kõrvalepõige | OSA x2 |
| Esmaabi | INT+OSA |
| Mõjutamine | KAR x2 |
| Läbinägelikkus | INT+VÄG |
| Kohalikud teadmised | INT x2 |
| Emakeel | INT+KAR, +40* |
| Taju | INT+VÄG |
| Ratsutamine | OSA+VÄG |
| Laulmine | KAR+VÄG |
| Hiilimine | OSA+INT |
| Ujumine | JÕU+VAS |
| Võitlus relvadeta | JÕU+OSA |
| Tahtejõud | VÄG x2 |

_* Sisaldab staatilist +40% boonust nii tavadele kui ka tegelase emakeelele (inimestele omane). Iga poolinimlik rass võib rääkida ühist keelt +40% boonusega, lisaks oma emakeelele +40% boonusega, nagu on üksikasjalikult kirjeldatud nende vastavates kirjeldustes._

---
## 5. samm: Rass/Kultuur

Mängus _Classic Fantasy Imperative_ saavad mängijad tavaliselt valida oma tegelasele ühe seitsmest rassist: inimene või üks poolinimlikest rassidest (päkapikk, päkapikk-haldjas, gnoom, poolhaldjas, poolork või poolpikk). Kui tegelane on inimene, peab ta end täiendavalt määratlema ühe neljast kultuurilisest taustast: barbaarsus, tsiviliseeritud, rändav või primitiivne. Inimeste puhul määrab kultuur ühiskonnatüübi, milles tegelane üles kasvas, ja seega määrab see teatud vaated ja filosoofiad, mis neil võivad olla. Praktilisemalt aitab kultuur määratleda mitmesuguste oskuste väärtusi, mis kujundavad tegelase üldisi võimeid. Poolinimlikud rassid pärinevad üldiselt rassilisest kultuurist, mis on selle rassi kohta palju stereotüüpsem. Lisateabe saamiseks vaadake [2. peatüki](0002_Culture_and_Races.md) rassi- ja kultuurikirjeldusi.

Kõigil tegelastel on maailmavaade (Alignment), mis koosneb ühest eetilisest ja ühest moraalsest koodeksist, ning kaks või kolm kirge (Passions). Mõnel on vanne usulise ordu, gildi või organisatsiooni ees. Iga klassi kirjelduses on märgitud kõik nõutavad maailmavaated või vanded. Enne jätkamist leidke [2. peatükist](0002_Culture_and_Races.md) oma rass ja märkige üles soovitatud maailmavaade ja kired, ning kontrollige [Klasside](0003_Classes.md) jaotist, et näha, kas on mingeid maailmavaate või vande nõudeid. Vaadake [4. peatükki, Maailmavaade ja kired](0004_Alignment_and_Passions.md), et määrata kindlaks kõik oma maailmavaate, kirgede ja vandega seotud eripärad.

Iga rass ja kultuur loetleb erinevaid tavaoskusi, mida tegelane õpib oma kujunemise ajal selles ühiskonnas. Need on põhivõimed, mida kõik sama kultuuri tegelased teatud määral arendavad. Tegelased õpivad ka mõningaid spetsialiseeritud või esoteerilisi kutseoskusi vastavalt oma isiklikele huvidele.

Kutseoskusi selgitatakse täpsemalt peatükis [Oskused](0005_Skills.md), kuid lühidalt öeldes esindavad need oskusi, mida ei saa proovida ilma aastatepikkuse range õppimise ja eriväljaõppeta. Kui tegelasel on põhivõime kõigis tavaoskustes, siis kutseoskustes on tal nullvõime, välja arvatud juhul, kui need on valitud kultuurilise kasvatuse või klassi osana.

Valitud kutseoskused algavad nende baastaseme karakteristikute väärtusest vastavalt tavaoskustele. Mõned kutseoskused, nagu käsitöö, keeled või teadmised (Lore), pakuvad võimalust valida spetsialiseerumine. Sellistel juhtudel peaks valitud eriala olema see, mis sobib antud kultuuriga.

### Rassiliste oskuste kiirvalikud

Kiirvalikud pakuvad keskmist oskuste valikut, võimaldades kiiret tegelase loomist. Võite soovi korral punkte vahetada; siiski ei tohi ühelgi oskusel olla väiksem kui +5 või suurem kui +15 boonus.

##### Rassiliste kiirvalikute tabel

| Rass/Kultuur | Tavaoskused | Kutseoskused |
| :-- | :-- | :-- |
| Inimene (barbar, sõdalane) | Kergejõustik +10, Ramm +10, Vastupidavus +15, Esmaabi +5, Kohalikud teadmised +10, Taju +10 ja kas Paadisõit või Ratsutamine +10 | Navigeerimine +10, Merendus või Ellujäämine +10, Jälitamine +10 |
| Inimene (barbar, tark) | Kergejõustik +5, Vastupidavus +5, Esmaabi +15, Kohalikud teadmised +15, Taju +15 ja kas Paadisõit või Ratsutamine +10 | Tervendamine +10, Keel (mis tahes*) +10, Teadmised (mis tahes) +15 |
| Inimene (tsiviliseeritud, tänavatark) | Peitmine +10, Petmine +15, Sõidukijuhtimine +5, Mõjutamine +10, Läbinägelikkus +10, Kohalikud teadmised +10, Tahtejõud +10 | Käsitöö (mis tahes) +5, Kaubandus +10, Tänavatarkus +15 |
| Inimene (tsiviliseeritud, raamatutark) | Peitmine +5, Petmine +5, Sõidukijuhtimine +5, Mõjutamine +10, Läbinägelikkus +15, Kohalikud teadmised +15, Tahtejõud +10 | Kaubandus +10, Keel (mis tahes*) või Teadmised (mis tahes) +10, Teadmised (mis tahes) või Muusikaline suutlikkus +15 |
| Inimene (rändur, sõdalane) | Vastupidavus +10, Esmaabi +5, Kohalikud teadmised +5, Taju +10, Hiilimine +10 ja kaks järgmistest +15 kumbki: Kergejõustik, Paadisõit, Sõidukijuhtimine, Ratsutamine või Ujumine (sõltuvalt peamisest liikumisviisist) | Navigeerimine +10, Ellujäämine +10, Jälitamine +10 |
| Inimene (rändur, tark) | Vastupidavus +5, Esmaabi +15, Kohalikud teadmised +10, Teadmised (mis tahes) +15, Taju +10, Hiilimine +5 ja kaks järgmistest, üks +5 kumbki: Kergejõustik, Paadisõit, Sõidukijuhtimine, Ratsutamine või Ujumine (sõltuvalt peamisest liikumisviisist) | Tervendamine +10, Keel (mis tahes*) +10, Teadmised (mis tahes) +10 |
| Inimene (primitiivne, sõdalane) | Ramm +10, Vastupidavus +10, Kõrvalepõige +10, Kohalikud teadmised +5, Taju +10, Hiilimine +15 ja üks järgmistest +10: Kergejõustik, Paadisõit, Esmaabi või Ujumine | Ellujäämine +10, Jälitamine +10; ja üks järgmistest +10: Kergejõustik, Paadisõit, Esmaabi, Navigeerimine või Ujumine |
| Inimene (primitiivne, tark) | Vastupidavus +5, Kõrvalepõige +5, Esmaabi +15, Kohalikud teadmised +15, Taju +15, Hiilimine +5 ja üks järgmistest +5: Kergejõustik, Paadisõit või Ujumine | Tervendamine +10, Keel (mis tahes*) +10, Teadmised (mis tahes) +15 |
| Päkapikk | Kergejõustik +10, Ramm +15, Vastupidavus +10, Kõrvalepõige +10, Kohalikud teadmised +10, Taju +5, Tahtejõud +10 | Kaubandus või Mehhanismid +10, Käsitöö (mis tahes) +10, Ellujäämine +10 |
| Haldjas | Peitmine +5, Mõjutamine +10, Läbinägelikkus +10, Kohalikud teadmised +10, Taju +15, Hiilimine +10, Tahtejõud +10 | Ellujäämine +10 ja kaks järgmistest +10 kumbki: Keel (mis tahes**), Teadmised (mis tahes) või Muusikaline suutlikkus |
| Gnoom | Petmine +10, Kõrvalepõige +15, Läbinägelikkus +10, Kohalikud teadmised +10, Taju +5, Hiilimine +10, Tahtejõud +10 | Kaubandus +10, Käsitöö (mis tahes) +10, Mehhanismid või Ellujäämine +10 |
| Poolhaldjas (kasvatatud haldjana) | Peitmine +10, Mõjutamine +10, Läbinägelikkus +10, Kohalikud teadmised +10, Taju +10, Hiilimine +10, Tahtejõud +10 | Keel (mis tahes**) +10, Teadmised (mis tahes) +10, Muusikaline suutlikkus või Ellujäämine +10 |
| Poolhaldjas (kasvatatud inimesena) | Valige sobiv inimese kiirvalik |
| Poolork (kasvatatud orgina) | Kergejõustik +15, Ramm +15, Vastupidavus +15, Kõrvalepõige +10, Esmaabi +5, Kohalikud teadmised +5, Taju +5 | Navigeerimine +10, Ellujäämine +10, Jälitamine +10 |
| Poolork (kasvatatud inimesena) | Valige sobiv inimese kiirvalik |
| Poolpikk | Tants või Laulmine +5, Kõrvalepõige +15, Läbinägelikkus +5, Kohalikud teadmised +5, Taju +15, Hiilimine +15, Tahtejõud +15 | Käsitöö (mis tahes) +10, Muusikaline suutlikkus +5, Tänavatarkus +10 |

_* Inimesed ei ole tegelase loomisel keelte valimisel piiratud, kui nad suudavad valikut põhjendada._

_** Tegelase loomisel on lisakeeled piiratud gnoomi, poolpika, goblini, hobgoblini, orgi ja gnolliga._


### Rassiliste oskuspunktide ostmine

Soovi korral võite kulutada punkte konkreetse tegelase kontseptsiooni kohandamiseks. See võimaldab aja arvelt saada isikupärasema tegelase. Oskuste rakendamisel järgige järgmisi samme:

- Valige pakutavate valikute hulgast kolm kutseoskust (vt rassikirjeldusi [2. peatükist](0002_Culture_and_Races.md)).
- Jaotage 100 punkti loetletud tavaoskuste ja valitud kutseoskuste vahel, suurendades oskust 1% võrra iga selle parandamiseks kulutatud punkti eest. Mängijad võivad vabalt valida, kui palju iga oskust parandatakse, kuid iga oskus peab saama vähemalt 5% ja ei tohi saada rohkem kui 15%.

---
## 6. samm: Klass

Klass tähistab karjääri, mille tegelane on täiskasvanuks saamise teel valinud, ja see määratleb täiendavalt tegelase oskuste arengu.

Mängijatel on tavaliselt vabadus valida, millist klassi nad soovivad oma tegelasele, eeldusel, et mängujuht peab seda sobivaks. Klasside kirjeldused annavad juhiseid selle kohta, millised klassid on iga rassi/kultuuritüübi puhul levinud. Neid tuleks käsitleda kui tavapäraseid esindusi, mitte kui piiranguid. Mängijad peaksid tundma end vabalt mängides mis tahes klassi/rassi kombinatsiooniga, mis nende visiooniga kõige paremini sobib.

Sarnaselt rassi/kultuuritaustaga pakub iga klass võimalust parandada mitmesuguseid tava- ja kutseoskusi, mida see amet tavaliselt kasutab. Erinevalt kultuurilisest taustast ei pea tegelased investeerima punkte igasse saadaolevasse oskusesse, vaid võivad kohandada, milliseid neist võetakse vastavalt nende konkreetsele rollile või kultuurile.

### Klassioskuste kiirvalikud

Valige klassi kiirvalik, et saada keskmine valik oskusi, mis on kõnealuse klassi jaoks kasulikud. Võite punkte soovi korral vahetada; siiski, kuigi oskust saab vähendada +0-ni, töötades baastasemel (sh kutseoskused), ei tohi ühelgi oskusel olla rohkem kui +15 boonus. Need oskused sisaldavad juba kõiki võimetest tulenevaid klassioskuste boonuseid.

##### Klasside kiirvalikute tabel

| Klass | Tavaoskused | Kutseoskused |
| :-- | :-- | :-- |
| Vaimulik (Cleric) | Võitlusoskus (Vaimulik) +15; Esmaabi +5; Mõjutamine +5; Läbinägelikkus +10; Tahtejõud +15 | Kanaliseerimine +15; Viisakus +10; Pühendumus (jumalus) +15; Teadmised (religioon) +5 ja üks järgmistest +5: Keel (mis tahes), Teadmised (mis tahes) või Oraatorlus |
| Võitleja (Fighter) | Kergejõustik +10; Paadisõit või Ratsutamine +5; Ramm +15; Võitlusoskus (Võitleja) +20**; Vastupidavus +15; Kõrvalepõige +10; Võitlus relvadeta +15** | Hirmutamine +10; ja kaks järgmistest +5: Hasartmängud, Ellujäämine või Navigeerimine |
| Maag (Magic-User) | Kõrvalepõige +10; Esmaabi +5; Mõjutamine +5; Läbinägelikkus +5; Kohalikud teadmised +5; Taju +5; Tahtejõud +15 | Arkaanne loitsimine +15; Arkaansed teadmised +15; Keel (mis tahes) +5; Keel (mis tahes) või Teadmised (mis tahes) +5; Teadmised (alkeemia) +10 |
| Kelm (Rogue) | Kergejõustik +15; Võitlusoskus (Kelm) +10; Petmine +5; Kõrvalepõige +15; Läbinägelikkus +5; Taju +5; Hiilimine +15 | Keel (Varaste kõnepruuk) +40***; Lukuvalimine +10; Mehhanismid +10; ja kaks järgmistest +5: Akrobaatika, Näitlemine, Kaubandus, Maskeerimine, Hirmutamine, Võrgutamine, Osavus või Tänavatarkus |

_* Omandatud baastasemel._

_** Sisaldab +5 võitlusosavuse boonust._

_*** Omandatud baastasemel, rakendatud +40% boonus._

### Klassioskuste punktide ostmine

Soovi korral võite kulutada punkte konkreetse tegelase kontseptsiooni kohandamiseks. Nagu eespool, võimaldab see aja arvelt saada isikupärasema tegelase. Selle meetodiga tegelased arendavad oma klassioskusi järgmiselt:

- Valige kuni 3 oskust klassi jaoks saadaolevate kutseoskuste hulgast.
- Jaotage 100 punkti klassi loetletud tavaoskuste ja valitud kutseoskuste vahel, suurendades iga oskust 1% võrra iga selle parandamiseks kulutatud punkti eest. Kõiki saadaolevaid oskusi ei pea parandama, kuid ükski üksik oskus ei tohi saada üle 15% suurust kasvu. Mõned klassid annavad rohkem kui 3 kutseoskust, kuid kunagi rohkem punkte.
- Kõik klassid hõlmavad võitlusoskust, mis hõlmab relvi, mille kasutamises klass on tavaliselt treenitud. See võib olla vaid 4 või 5 lihtsat relva, nagu maagi puhul, kuni kõigi relvade ja kilpideni, nagu võitleja puhul. Kui võitlusoskus on tavaoskuste loendis, käsitletakse seda sellena ja seda võib parandada klassioskuste punktidega. Kui võitlusoskus on välja jäetud, nagu maagi puhul, saab seda parandada ainult boonusoskuste punktide abil tegelase loomise 7. sammus.

Äsja valitud kutseoskused ja klassi võitlusoskus algavad nende baastaseme karakteristikute väärtusest. Varem kultuurilise tausta kaudu omandatud kutseoskuse valimine võimaldab tegelasel selles etapis lihtsalt rakendada mõningaid oma klassioskuste punkte. Mõned neist oskustest, nagu käsitöö, keel või teadmised, pakuvad võimalust valida spetsialiseerumine. Sellistel juhtudel peaks valitud eriala olema see, mis sobib tegelase kultuuriga.

Mõnel klassil võib olla rohkem oskusi, mille vahel valida, või nad võivad valida rohkem oskusi kui teised. Seda tasakaalustab asjaolu, et kõik tegelased on endiselt ehitatud sama 100 punkti abil. Seega peab rohkem oskusi omav tegelane oma punkte laiemalt hajutama, teades palju vähesest, ja tegelane, kellel on vähem oskusi valida, muutub spetsialiseeritumaks.

#### Märkus klassi võimete ja järgu kohta

Pidage meeles, et kõik klassid nõuavad vähemalt _**40% oskuste taset mis tahes viies klassioskuses**_, et kasutada selle klassi erivõimeid või loitsida. Teid peetakse oskuses pädevaks 50% või kõrgema taseme juures. Seega, et kvalifitseeruda 1. järku, peab tegelane omama vähemalt 40% taset mis tahes viies klassioskuses. 2. järk nõuab 70% taset mis tahes viies klassioskuses, 3. järk nõuab 90% taset mis tahes neljas klassioskuses jne.

Tegelane võib soovi korral alustada 0. järgus, kui tal pole piisavalt oskuste tasemeid, ja saavutada 1. järgu mängu käigus, kuid loitsude kasutamiseks peavad need eeldused olema täidetud.#### Võitlusoskus (JÕU+OSA)

Võitlusoskus on oskus, mis on seotud võitlemise ja relvade kasutamisega. See on mitmekülgne oskus, millel on palju erialasid vastavalt asjaomasele tegelase klassile. Enamik võitlustraditsioone hõlmab treeningut mitme sama tüüpi relvaga, koos tehnikatega, mida on vaja nende kõigi tõhusaks kasutamiseks. Seetõttu on võitlusoskus katusmõiste, mis ühendab paljud võitlemisega seotud aspektid ühe võime alla, kõrvaldades vajaduse osta mitut alam-oskust.

Võitlusoskusel on algprotsent, mis võrdub JÕU+OSA.

Kuna enamik inimesi suudab relva kätte võtta ja instinktiivselt sellega kas lüüa, visata või tulistada, loetakse võitlusoskust tavaoskuseks. Ometi on need oma potentsiaalselt mitmekesise olemuse tõttu eraldi kategoriseeritud ja määratletud.

Kõik tegelased õpivad oma võitlusoskuse osana oma valitud klassist, nagu on kirjeldatud [3. peatükis](0003_Classes.md).

---
## 7. samm: Boonus-oskuspunkte

Selles etapis saab iga tegelane täiendava 'vabade' oskuspunktide kogumi, mis põhineb kogemustasemel ja mida saab jaotada olemasolevate oskuste vahel. Need on ette nähtud tegelase täiendamiseks, lisades huvisid või ekspertiisivaldkondi. Värskete alustavate tegelaste vaikimisi kogum on 100 punkti, kusjuures ühe oskuse kohta tohib määrata maksimaalselt 10 punkti. Kui tegelased on kogenumad, siis oskuspunktide arv ja piirangud erinevad, nagu on näidatud kogemuste tabelis.

Boonus-oskuspunkte kasutatakse järgmisel viisil:

- Võimaldavad tegelasele valiku valida üks uus erialaoskus tasuta, peegeldades isiklikku hobi või huvi.
- Teise võimalusena võib tegelane lisada oma võitlusoskusele uue relvatüübi.
- Kas lisage +10 boonus kümnele erinevale oskusele või jaotage punkte nende vahel, suurendades iga oskust 1% võrra iga selle parandamiseks kulutatud punkti eest. Ükski individuaalne oskus ei saa saada rohkem punkte, kui on märgitud nende kogemustaseme järgi. Kui valite uue erialaoskuse, peate sellele punkte lisama.
- Välja arvatud valikuline hobieriala, ei tohi punkte määrata erialaoskustele, mida pole õpitud osana tegelase kultuurist või klassist.

### Kogenud tegelaste loomine

Soovitatav on, et alustavad tegelased alustaksid värskelt, 1. järgus, vähese või olematu praktilise kogemusega. Loomulikult sõltub tegelaste tase suuresti maailmast ja sellest, kas mäng on lühike ühekordne seiklus või pikaajaline kampaania. Samuti on tavaline, et mängija loob kogenuma tegelase, kui asendab mängus hukkunud tegelast või liitub olemasoleva kampaaniaga.

Lisatud on tabel, mis jagab kogemused kogemuskategooriatesse. Tegelase kogemus on otseses korrelatsioonis vanuse ja oskuste pädevusega; kogenumatel tegelastel on loomulikult rohkem elukogemust kui nende noorematel kaasmaalastel. Siiski tuleks märgitud vanuseboonust käsitleda ligikaudsena, kuna kampaaniad arenevad erineva kiirusega — mõnes kampaanias möödub seikluste vahel palju mänguaega, samas kui teised on üks pikk katkematu seikluste jada. Olemasoleva tegelase teisendamisel asendage lihtsalt tegelik vanus allpool märgituga.

Seda tabelit võib kasutada ka mitte-mängijategelaste (NPC) puhul, olenemata sellest, kas nad on ehitatud klassi või karjääri järgi, ja see järgib samu reegleid. On üks erand: karjääri järgi ehitatud mitte-mängijategelastel ei ole erilisi võimeid, sealhulgas ekstra õnnepunkte, mis on reserveeritud ainult mängijategelastele ja olulistele mitte-mängijategelastele. Pange tähele, et karjääri järgi ehitatud alustav NPC on vaikimisi 1. järgus.

##### Kogemuste tabel

| Järk (Tase\*) | Vanus | Boonus-oskuspunkte | Maksimaalne oskuse tõus | Keskmine oskustase\*\* | Edendamine |
| :-- | :-: | :-: | :-: | :-: | :-: |
| Järk 1 (1-4): _Värske_ | Liigiti | 100 | +10 | 40-60 | Suvalised 5 klassioskust 40% |
| Järk 2 (5-9): _Madal tase_ | +1d6 | 300 | +30 | 65-75 | Suvalised 5 klassioskust 70% |
| Järk 3 (10-14): _Keskmine tase_ | +1d6+5 | 500 | +50 | 85-95 | Suvalised 4 klassioskust 90% |
| Järk 4 (15-19): _Kõrge tase_ | +1d6+10 | 700 | +70 | 105-115 | Suvalised 3 klassioskust 110% |
| Järk 5 (20+): _Eepiline tase_ | +1d6+20 | 900 | +90 | 125-135 | Suvalised 2 klassioskust 130% |

_\* Sulgudes olevat numbrit võib kasutada mõõdupuuna, kui teisendate olemasolevaid tegelasi tasemepõhistest mängudest._

_\*\* See on klassi jaoks oluliste oskuste keskmine oskustase._

**Kogemuste tabeli märkused**

- Järk on ligikaudne kirjeldav juhend erineva oskustasemega tegelaste võrdlemiseks.
- Vanus määratakse vanuse arvutamisel vastavalt liigile ja lisades märgitud boonuse. See on pigem suunis kui kindel reegel, kuna aeg möödub kampaaniati erinevalt.
- Boonus-oskuspunkid määravad, kui palju punkte peab tegelane kulutama oskuste arendamisele. See EI OLE kumulatiivne eelmiste järkudega. Näiteks 2. järgu tegelane ehitatakse 300 punktiga, mitte 300 punktiga pluss 1. järgu 100 punktiga.
- Maksimaalne oskuse tõus piirab, kui palju boonuspunkte saab rakendada ühele oskusele.
- Keskmine oskustase näitab tüüpilist vahemikku tegelase kõige olulisematele klassiga seotud oskustele igal kogemustasemel. See on lisatud võrdluseks ja eeldab 16-punktilisi baastaseme karakteristikuid, kusjuures iga sammu ajal on kulutatud maksimaalselt oskuspunkte. Tegelikud tulemused võivad erineda.
- Edendamine: See esindab märgitud järgu saavutamiseks vajalike klassioskuste arvu. Näiteks 3. järgu saavutamiseks peavad mis tahes neli asjaomases klassikirjelduses märgitud klassioskust olema vähemalt 90%.

---
## 8. samm: Lõpuks…

- Määrake oma maailmavaade ja kired vastavalt oma valitud kultuurile/rassile ja klassile. Vaadake [4. peatükki](0004_Alignment_and_Passions.md).
- Pange kirja kõik oma rassi ja klassi algvõimed.
- Valige järjestatud võimete alt üks 1. järgu klassivõime, mille nõuded te täidate, ilma kogemuspunktide (EXP) kuluta.
- Kopeerige algvarustus, nagu on märgitud teie klassikirjelduse lõpus.
- Ärge unustage oma tegelasele nime anda. Samuti otsige võimalusi luua ühendusi teiste tegelastega, kui soovite.