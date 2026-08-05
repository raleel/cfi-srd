# Luku 1: Hahmot

Perushahmo määritellään useilla eri elementeillä, jotka kuvaavat hahmon kyvykkyyksiä. Nämä elementit ovat:

- Ominaisuudet (Characteristics): kuten Voima tai Karisma
- Attribuutit (Attributes): asiat kuten Pituus tai Liikkuminen
- Taidot (Skills): asiantuntemus perustavanlaatuisissa kyvyissä

Suurin osa näistä elementeistä kuvataan numeroin, ja jotkut niistä ovat riippuvaisia toisista tai ne lasketaan muiden arvojen perusteella. Kunkin elementin merkitys ja niiden määrittäminen kuvataan seuraavissa osioissa.

---
## Vaihe 1: Hahmokonsepti

Hyvä tapa aloittaa on muodostaa jonkinlainen käsitys siitä, millaista hahmoa haluat pelata; esimerkiksi karaistunut taistelija tai ovela varas. Hahmokonseptin ei tarvitse olla tässä vaiheessa yksityiskohtainen; riittää idea, joka auttaa ohjaamaan valintoja kuten Rotu ja Luokka. Muutamia hahmoideoita on listattu mielikuvituksen herättämiseksi.

- Nuori, naiivi taikuuden käyttäjä
- Äreä puoliörkkitaitelija
- Itsevarma puolituishahmo (varas)
- Hurskas kääpiöpappi

---
## Vaihe 2: Ominaisuudet

Jokainen hahmo määritellään seitsemän Ominaisuuden avulla, jotka kertovat jotain hahmostasi: kuinka vahva tai nopea hän on, kuinka älykäs tai terve. Ominaisuudet ovat jokaisen _Classic Fantasy Imperative_ -hahmon ytimessä ja muodostavat pohjan useimmille muille elementeille, kuten Attribuuteille ja Taidoille. Seitsemän ominaisuutta ovat:

- Voima (STR)
- Kestävyys (CON)
- Koko (SIZ)
- Ketteryys (DEX)
- Älykkyys (INT)
- Voima (POW)
- Karisma (CHA)

Ennen kuin lasket Ominaisuudet, seuraava osio selittää, mitä kukin edustaa.

#### Voima (STR)

STR edustaa fyysistä voimaa: kuinka paljon hahmo voi nostaa, kuinka kovaa hän voi lyödä, ja niin edelleen. STR on osa [Vahinkomuuttajaa](0001_Characters.md?id=damage-modifier) (katso [Attribuutit](0001_Characters.md?id=step-3-attributes) -osio alla). Jos hahmon STR laskee nollaan, hänellä ei ole kykyä liikkua tai nostaa esineitä.

#### Kestävyys (CON)

CON on terveyden ja sitkeyden mitta. CON on komponentti määritettäessä [Osumapisteitä](0001_Characters.md?id=hit-points) ja [Parantumisnopeutta](0001_Characters.md?id=healing-rate) (katso alla). Jos CON laskee nollaan mistä tahansa syystä, hahmo kuolee.

#### Koko (SIZ)

SIZ mittaa massaa ja auttaa osoittamaan Pituutta ja Painoa. SIZ:ia käytetään auttamaan [Osumapisteiden](0001_Characters.md?id=hit-points) laskemisessa, sillä suuremmilla ja painavammilla olennoilla on yleensä suurempi kestävyys vahinkoa vastaan. SIZ:ia voidaan käyttää myös hahmon Vahinkomuuttajan määrittämiseen, koska massa auttaa lisäämään iskun voimaa.

#### Ketteryys (DEX)

Ketteryys, tasapaino ja refleksit mitataan DEX:llä. Se on tärkeä osa [Aloitetta](0001_Characters.md?id=initiative). Jos hahmon DEX laskee nollaan, hän kärsii toiminnallisesta halvauksesta.

#### Älykkyys (INT)

INT on kognitiivisen kyvyn mitta. Niiden, joilla on matalampi INT-pistemäärä, ei välttämättä tarvitse olla tyhmiä, mutta heidän luovuutensa älykkyyden käytössä on todennäköisesti rajoittunutta. INT on tekijä [Aloitteen](0001_Characters.md?id=initiative) laskennassa. Jos INT laskee nollaan, hahmosta tulee täysin tunteeton/ajatukseton.

#### Voima (POW)

POW on hahmon sielun, hengen, sisäisen ajovoiman tai taikakyvyn mitta. POW hallitsee hahmon [Taikapisteitä](0001_Characters.md?id=magic-points) ja [Onnenpisteitä](0001_Characters.md?id=luck-points). Jos hahmon POW laskee koskaan nollaan, hän menettää kaiken itsenäisen tahdon.

#### Karisma (CHA)

Karisma mittaa persoonallisuutta ja on riippumaton ulkonäöstä. CHA vaikuttaa hahmon [Kokemusmuuttajaan](0001_Characters.md?id=experience-modifier). Jos CHA laskee nollaan, hahmo ei voi enää sosiaalisesti vuorovaikuttaa muiden kanssa, tullen niin tuskallisen ujoiksi tai antisosiaalisiksi, että heidät sivuutetaan tai jopa ajetaan pois.

---
### Ominaisuuksien laskeminen

Jokaisella Ominaisuudella on numeerinen arvo, joka määrittää sen tason. Suluissa kunkin noppatuloksen jälkeen oleva numero on rodun keskiarvo, ja sitä käytetään mittarina arvioimaan hahmosi tuloksia verrattuna muihin lajinsa edustajiin. Ehdotuksia Ominaisuuksien määrittämiseen:

- **Noppien heitto:** Heitä Rodun ominaisuustaulukossa osoitetut nopat STR:lle, CON:lle, SIZ:lle, DEX:lle, INT:lle, POW:lle ja CHA:lle, ottaen kukin tulos sellaisenaan. Koska näiden heittojen tulokset voivat olla satunnaisia, on usein parempi päättää hahmon konsepti vasta noppien heiton jälkeen. Muutoin lopulliset Ominaisuudet voivat estää ennalta suunnitellun roolin. Heitä 3d6 STR:lle, CON:lle, DEX:lle, POW:lle ja CHA:lle; sitten 2d6+6 SIZ:lle ja INT:lle.
- **Noppien heitto, sijoittelu:** Kuten yllä, paitsi että pelaaja voi vaihtaa arvoja samalla noppavälillä olevien Ominaisuuksien välillä. Esimerkiksi luodessaan ihmistä pelaaja voi vaihtaa arvoja STR, CON, DEX, POW ja CHA välillä, koska ne jakavat 3d6-välin, tai SIZ:n ja INT:n välillä, jotka jakavat 2d6+6-välin — mutta niiden on aina oltava samasta noppaväliryhmästä; et voi vaihtaa tuloksia ryhmien välillä.
- **Noppien heitto, korkea:** Heitä yksi ylimääräinen noppa kullekin Ominaisuudelle ja jätä pois jokaisen kohdalla matalin tulos.
- **Pisteiden rakennus:** Noppien heittämisen sijaan pelaajat rakentavat hahmonsa ennalta määritetystä pistealtaasta, jonka määrä riippuu hahmon rodusta. Tämä menetelmä on paras ryhmille, jotka tietävät mitä haluavat pelata ja haluavat räätälöidä hahmon tiettyyn Luokkaan. Pisteiden rakennus -vaihtoehtoon sovelletaan tiettyjä sääntöjä:
  - Aloita rodun keskiarvosta jokaiselle seitsemälle Ominaisuudelle, kuten on merkitty suluissa kunkin noppavälin jälkeen alla.
  - Käytä toiset 10 pistettä (ihmiset) tai 6 pistettä (puoli-ihmiset) Ominaisuuksien kasvattamiseen.
  - Voit myös laskea Ominaisuutta saadaksesi lisäpisteitä. Esimerkiksi, alenna STR 11:stä 9:ään saadaksesi 2 pistettä.
  - Ominaisuudet eivät voi olla _pienempiä_ kuin mahdollinen minimi tai _suurempia_ kuin mahdollinen maksimi kyseiselle Ominaisuudelle, mikä määräytyy sen noppatuloksen perusteella.

Pelinjohtajat saavat vapaasti kehittää omia menetelmiään tai pistearvojaan halutessaan.

Seuraava taulukko tiivistää tiedot, joita tarvitaan kunkin yllä olevan menetelmän kohdalla. Noppavälejä käytetään molemmissa noppien heittomenetelmissä, kun taas suluissa olevia numeroita käytetään Pisteiden rakennus -menetelmässä.

##### Rodun ominaisuustaulukko

| Rotu | Kääpiö | Haltia | Maahinen |
| --- | --- | --- | --- |
| STR | 2d6+9 (16) | 2d6+4 (11) | 2d6+1 (8) |
| CON | 2d6+9 (16) | 3d6 (11) | 2d6+6 (13) |
| SIZ | 2d4+4 (9) | 2d6+4 (11) | 1d3+2 (4) |
| DEX | 3d6 (11) | 2d6+9 (16) | 3d6+2 (13) |
| INT | 2d6+6 (13) | 2d6+7 (14) | 2d6+8 (15) |
| POW | 3d6 (11) | 2d6+7 (14) | 2d6+7 (14) |
| CHA | 2d6+2 (9) | 3d6 (11) | 3d6 (11) |

| Rotu | Puolihaltia | Puoliörkki | Puolituinen | Ihminen |
| --- | --- | --- | --- | --- |
| STR | 3d6 (11) | 2d6+9 (16) | 2d6+1 (8) | 3d6 (11) |
| CON | 3d6 (11) | 2d6+6 (13) | 2d6+7 (14) | 3d6 (11) |
| SIZ | 2d6+6 (13) | 2d6+9 (16) | 1d4+5 (8) | 2d6+6 (13) |
| DEX | 2d6+6 (13) | 3d6 (11) | 3d6+3 (14) | 3d6 (11) |
| INT | 2d6+6 (13) | 2d6+5 (12) | 2d6+6 (13) | 2d6+6 (13) |
| POW | 2d6+6 (13) | 3d6 (11) | 2d6+9 (16) | 3d6 (11) |
| CHA | 3d6 (11) | 2d6+1 (8) | 2d6+5 (12) | 3d6 (11) |

---
## Vaihe 3: Attribuutit

Jokaisella hahmolla on myös joukko attribuutteja. Nämä ovat Ominaisuuksista johdettuja tai niiden määrittämiä kykyjä, joita käytetään pelin tekijöiden hallintaan.

#### Toimintapisteet

Kuinka usein hahmo voi toimia [Taistelukierroksella](0008_Combat.md?id=combat-rounds), määräytyy Toimintapisteiden mukaan. Aloittavilla hahmoilla on 2 Toimintapistettä, mutta he saavat niitä lisää Rank-tason noustessa. Katso yksityiskohdat asianmukaisista Luokkien kehitystaulukoista [Luokat](0003_Classes.md) -osiosta.

#### Vahinkomuuttaja

Bonusmäärä vahinkoa, jonka hahmo tuottaa, kun hän iskee fyysisesti tai käyttää voimaa. Sitä käytetään yleensä taistelutilanteissa, mutta sitä voidaan käyttää myös esineitä rikottaessa. Vahinkomuuttaja on ylimääräinen noppaheitto, joka joko lisätään tai vähennetään aseen tai työkalun tuottamasta vahingosta. Jos negatiivinen Vahinkomuuttaja laskee aseen vahingon nollaan tai sen alle, vahinkoa ei synny lainkaan.

Laske yhteen STR ja SIZ ja katso Vahinkomuuttajataulukko:

##### Vahinkomuuttajataulukko

| STR+SIZ | Vahinkomuuttaja |
| :-: | :-: |
| 5 tai alle | –1d8 |
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
| Jokaiset 10 pistettä | Jatka etenemistä |

#### Kokemusmuuttaja

Pelin kuluessa hahmot parantavat taitojaan ja kyvykkyyksiään. Tämä saavutetaan Kokonaisuusheittojen avulla, jotka selitetään tarkemmin [Pelijärjestelmä](0007_Game_System.md?id=experience-rolls) -osiossa.

Hahmon CHA-pistemäärä voi säätää Kokonaisuusheittojen määrää, mikä heijastaa hahmon suhdetta vertaisiinsa ja hänen mainettaan yhteisössä. Jos CHA on korkea, ihmiset ovat halukkaita auttamaan koulutuksessa tai tukemaan hahmoa opintojen aikana. Päinvastoin, jos CHA on erityisen alhainen, voi olla vaikeaa parantaa kykyjään ilman muiden apua; esimerkiksi harjoitusvastustajan löytäminen voi olla vaikeaa.

##### Kokemusmuuttajataulukko

| CHA | Kok. muuttaja |
| :-: | :-: |
| 6 tai alle | -1 |
| 7-12 | +0 |
| 13-18 | +1 |
| Jokaiset 6 pistettä | +1 |

#### Parantumisnopeus

Saatuaan vammoja hahmon täytyy toipua. Parantumisnopeus määrittää, kuinka nopeasti hän toipuu luonnollisesti haavoistaan. Riippuen vamman vakavuudesta (katso osio [Vahinko ja haavat](0007_Game_System.md?id=damage-and-wound-levels)), Parantumisnopeus ilmoittaa, kuinka monta Osumapistettä palautuu päivässä, viikossa tai kuukaudessa.

##### Parantumisnopeustaulukko

| CON | Parantumisnopeus |
| :-: | :-: |
| 6 tai alle | 1 |
| 7-12 | 2 |
| 13-18 | 3 |
| Jokaiset 6 pistettä | +1 |

#### Aloite

Hetki, jolloin joku reagoi taistelussa, määräytyy Aloitteen mukaan. Aloite toimii muuttajana Aloiteheittoihin; mitä korkeampi Aloite, sitä nopeammin hahmo reagoi taistelutilanteessa, mikä määrittää, milloin voit toimia. Muut tekijät – esimerkiksi haarniska – muokkaavat sitä. [Taistelu](0008_Combat.md?)-luku käsittelee tarkemmin, miten [Aloitetta](0008_Combat.md?id=initiative) käytetään.

Aloite on DEX- ja INT-ominaisuuksien keskiarvo.

#### Onnenpisteet

Onnenpisteet edustavat sitä outoa voimaa, joka erottaa seikkailijat tavallisista ihmisistä. Sitä voi kutsua kohtaloksi, karmaksi tai yksinkertaisesti hyväksi onneksi. Onnenpisteitä voidaan käyttää:

- Heittämään nopat uudelleen, jos tulos on epäsuotuisa.
- Lieventämään fyysistä vahinkoa tai muita epäonnisia tilanteita.
- Saamaan etulyöntiasema ratkaisevalla hetkellä taistelussa.

Se, miten ja milloin niitä käytetään, kuvataan osiossa [Onnenpisteiden käyttö](0007_Game_System.md?id=using-luck-points). Kun Onnenpiste on käytetty, määrä vähenee; kun Onnenpisteet loppuvat, niitä ei ole saatavilla lisää – ellei Pelinjohtaja tee välitöntä palkintoa – kunnes seuraavassa peli-istunnossa, jolloin ne palautuvat normaalille tasolleen.

##### Onnenpistetaulukko

| POW | Onnenpisteet |
| :-: | :-: |
| 6 tai alle | 1 |
| 7-12 | 2 |
| 13-18 | 3 |
| Jokaiset 6 pistettä | +1 |

_\* Ihmiset aloittavat yhdellä ylimääräisellä Onnenpisteellä tämän taulukon arvojen lisäksi._

_\*\* Kaikki hahmot saavat yhden ylimääräisen Onnenpisteen jokaisen uuden Rank-tason saavuttaessa._

#### Taikapisteet

Mystiset kyvyt ja loitsut, joita heitetään _Classic Fantasy Imperative_ -pelissä, luottavat yleensä Taikapisteisiin. Koska taikuuden saatavuus voi olla rajoitettua kampanjan asetuksissa tai tietyissä maagisissa ammateissa, jotkut hahmot pitävät tätä attribuuttia tarpeettomana.

Niille, jotka voivat käyttää tällaisia voimia, hahmon Taikapisteet ovat yhtä suuret kuin heidän POW-arvonsa. Näitä pisteitä käytetään loitsujen heittämiseen, joiden kustannus riippuu käytetyn taikuuden tyypistä. Kun loitsijoiden Taikapisteet loppuvat, he ovat kuluttaneet kykynsä heittää loitsuja, kunnes Taikapisteet palautuvat.

#### Liikkumisnopeus

Jokaisella olennolla on Liikkumisnopeus – määrä jalkoja, jotka voidaan kulkea tietyn ajan kuluessa. Liikkuminen ei perustu Ominaisuuksiin, vaan se on oletusarvo, joka vaihtelee lajista toiseen. Ihmisten perusliikkumisnopeus on 20 jalkaa, vaikka tietyt taidot voivat parantaa tätä. Osiossa [Liikkuminen](0008_Combat.md?id=movement) on lisätietoja.

##### Liikkumisnopeustaulukko roduittain

| Laji | Jalkaa | Metriä |
| :-- | :-: | :-: |
| Kääpiö | 15 | 4.5 |
| Haltia | 20 | 6 |
| Maahinen | 15 | 4.5 |
| Puolihaltia | 20 | 6 |
| Puoliörkki | 20 | 6 |
| Puolituinen | 15 | 4.5 |
| Ihminen | 20 | 6 |

#### Osumapisteet

Osumapisteet edustavat sitä, kuinka paljon vaurioita kehon alue voi kestää ennen kuin se muuttuu käyttökelvottomaksi, mikä voi johtaa toimintakyvyttömyyteen ja lopulta hahmon kuolemaan. Jokaisen olennon keho on jaettu erillisiin sijainteihin – ihmisillä on esimerkiksi seitsemän: pää, rintakehä, vatsa, kädet ja jalat – jokaisella sijainnilla on omat Osumapisteensä.

Joillakin olennoilla, kuten hirviöillä tai eri eläinluokilla, on usein luonnostaan radikaalisti erilainen kehon rakenne, mutta jokaisella niiden sijainnilla on silti Osumapisteet. Kun sijainnin Osumapisteet laskevat tietylle tasolle minkä tahansa vahingon seurauksena, hahmo kärsii tietyistä seurauksista, jotka heijastavat vamman vakavuutta. Lisätietoja vammoista saat osiosta [Vahinko ja haavat](0007_Game_System.md?id=damage-and-wound-levels).

Laskeaksesi kunkin sijainnin Osumapisteet, laske yhteen CON ja SIZ ja katso tulos Osumapistetaulukosta. Kaikki hahmot saavat 1 ylimääräisen Osumapisteen jokaiseen sijaintiin Rank 2 ja 4 tasoilla.

##### Osumapistetaulukko sijainneittain

| Sijainti | CON+SIZ |  |  |  |  |  |  |  |  |
| :-- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  | 1–5 | 6–10 | 11–15 | 16–20 | 21–25 | 26–30 | 31–35 | 36–40 | +5 |
| Pää | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | +1 |
| Rintakehä | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | +1 |
| Vatsa | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | +1 |
| Kumpikin käsi | 1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | +1 |
| Kumpikin jalka | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | +1 |

---
## Vaihe 4: Taidot

Oletuksena jokaisella hahmolla on valikoima Perustaitoja, joiden avulla hän voi suorittaa erilaisia toimintoja vaihtelevalla asiantuntemuksella. Nämä taidot on kuvattu tarkemmin [Taidot](0005_Skills.md) -luvussa, mutta ne kattavat arkipäiväiset toiminnot ja paikallistuntemuksen, joita kuka tahansa voi käyttää ilman erikoiskoulutusta. Tässä hahmonluonnin vaiheessa pelaajien tarvitsee tietää vain kunkin Perustaidon perustaso.

Jokaisen Perustaidon perusarvo määräytyy kahden Ominaisuuden summan tai yhden Ominaisuuden kerrannaisen perusteella. Arvo edustaa hahmon synnynnäistä pätevyyttä kullakin alalla, eli hänen raakaa kykyään ennen mitään kulttuurista tai ammatillista koulutusta.

Perustaitotaulukko näyttää, miten perusarvot lasketaan, sekä lyhyen kuvauksen siitä, mitä taito tarkoittaa ja tekee. Pistemäärä edustaa taidon onnistumisen prosentuaalista todennäköisyyttä; siis 25:n Urheilupistemäärä ilmaistaan 25 %:na. Miten taitoprosentit toimivat ja tarkemmat taitokuvaukset on esitetty [Taidot](0005_Skills.md) -luvussa.

Huomaa, että joidenkin taitojen perusprosentteja muokkaavat sekä kulttuuri että ammatti, joten nämä aloitusarvot muuttuvat hahmonluonnin edetessä.

##### Perustaitotaulukko

| Taito | Perusprosentti |
| :-- | :-: |
| Urheilu | STR+DEX |
| Veneily | STR+CON |
| Voimailu | STR+SIZ |
| Piiloutuminen | DEX+POW |
| Tavat | INT x2, +40\* |
| Tanssi | DEX+CHA |
| Petkutus | INT+CHA |
| Ajo | DEX+POW |
| Kestävyys | CON x2 |
| Väistäminen | DEX x2 |
| Ensiapu | INT+DEX |
| Vaikuttaminen | CHA x2 |
| Oivallus | INT+POW |
| Paikallistuntemus | INT x2 |
| Äidinkieli | INT+CHA, +40\* |
| Havainnointi | INT+POW |
| Ratsastus | DEX+POW |
| Laulu | CHA+POW |
| Hiipiminen | DEX+INT |
| Uinti | STR+CON |
| Aseeton taistelu | STR+DEX |
| Tahdonvoima | POW x2 |

_\* Sisältää +40 % staattisen bonuksen sekä Tavoille että hahmon Äidinkielelle (ihmisille Yleiskieli). Jokainen puoli-ihmisrotu voi puhua Yleiskieltä +40 %:n bonuksella, äidinkielensä lisäksi +40 %:n bonuksella, kuten niiden vastaavissa kuvauksissa on yksityiskohtaisesti esitetty._

---
## Vaihe 5: Rotu/Kulttuuri

_Classic Fantasy Imperative_ -pelissä pelaajat voivat yleensä valita hahmolleen yhden kuudesta rodusta: Ihminen tai jokin puoli-ihmisroduista (Kääpiö, Haltia, Maahinen, Puolihaltia, Puoliörkki tai Puolituinen). Jos hahmo on ihminen, hänen on määriteltävä hahmonsa edelleen yhden kolmesta kulttuuritaustasta: barbaari, sivistynyt tai nomadi. Ihmisillä kulttuuri määrittää yhteiskunnan, jossa hahmo on kasvanut, ja määrää siten tiettyjä näkökulmia ja filosofioita. Käytännöllisemmin kulttuuri auttaa määrittelemään niiden taitojen arvoja, jotka muovaavat hahmosi yleistä kyvykkyyttä. Puoli-ihmisrodut tulevat yleensä rodullisesta kulttuurista, joka on paljon stereotyyppisempi kyseiselle rodulle yleisesti. Katso lisätietoja [Luvun 2](0002_Culture_and_Races.md) rotu- ja kulttuurikuvauksista.

Kaikilla hahmoilla on Aate, joka koostuu yhdestä eettisestä ja yhdestä moraalisesta säännöstä, sekä kahdesta tai kolmesta Intohimosta. Joillakin on Valan uskonnolliseen järjestöön, kiltaan tai organisaatioon. Kunkin Luokan kuvaus huomioi vaaditun Aatteen tai Valat. Ennen kuin jatkat, katso rotusi [Luvusta 2](0002_Culture_and_Races.md) ja merkitse muistiin ehdotettu Aate ja Intohimot, ja tarkista [Luokat](0003_Classes.md) -osio nähdäksesi, onko olemassa Aate- tai Valavaatimuksia. Katso [Luku 4, Aate ja Intohimot](0004_Alignment_and_Passions.md) määrittääksesi mahdolliset yksityiskohdat Aatteeseesi, Intohimoihisi ja Valoihisi liittyen.

Jokainen rotu ja kulttuuri listaa erilaisia Perustaitoja, joita hahmo oppii osana muodollista kehitystään kyseisessä yhteiskunnassa. Nämä ovat ydinosaamisia, joita kaikki saman kulttuurin hahmot parantavat jossain määrin. Hahmot oppivat myös joitakin erikoistuneita tai esoteerisia Ammattitaitoja omien henkilökohtaisten kiinnostustensa mukaan.

Ammattitaidot selitetään tarkemmin [Taidot](0005_Skills.md) -luvussa, mutta lyhyesti sanottuna ne edustavat taitoja, joita ei voi yrittää ilman vuosien tiukkaa opiskelua ja erikoiskoulutusta. Siinä missä hahmolla on peruskyky kaikissa Perustaidoissa, hänellä on nollaosaaminen missä tahansa Ammattitaidossa, ellei sitä valita osana kulttuurista kasvatusta tai Luokkaa.

Valitut Ammattitaidot alkavat niiden Perustason ominaisuusarvosta, kuten Perustaitojen kohdalla. Jotkut Ammattitaidot, kuten Käsityö, Kielet tai Tiedot, tarjoavat valinnan erikoistumisesta. Näissä tapauksissa valitun erikoisalan tulee sopia kyseiseen kulttuuriin.

### Rodun taitojen pikavalinnat

Pikavalinnat tarjoavat keskimääräisen taitovalikoiman, mikä mahdollistaa nopean hahmonluonnin. Voit vapaasti vaihtaa pisteitä, jos haluat; kuitenkin mikään taito ei voi olla pienempi kuin +5 tai suurempi kuin +15 bonus.

##### Rodun pikavalintataulukko

| Rotu/Kulttuuri | Perustaidot | Ammattitaidot |
| :-- | :-- | :-- |
| Ihminen (Barbaari, soturi) | Urheilu +10, Voimailu +10, Kestävyys +15, Ensiapu +5, Paikallistuntemus +10, Havainnointi +10 ja joko Veneily tai Ratsastus +10 | Navigointi +10, Merenkulku tai Selviytyminen +10, Jäljitys +10 |
| Ihminen (Barbaari, viisas) | Urheilu +5, Kestävyys +5, Ensiapu +15, Paikallistuntemus +15, Havainnointi +15 ja joko Veneily tai Ratsastus +10 | Parantaminen +10, Kieli (mikä tahansa\*) +10, Tieto (mikä tahansa) +15 |
| Ihminen (Sivistynyt, katuviisas) | Piiloutuminen +10, Petkutus +15, Ajo +5, Vaikuttaminen +10, Oivallus +10, Paikallistuntemus +10, Tahdonvoima +10 | Käsityö (mikä tahansa) +5, Kaupankäynti +10, Katujen tuntemus +15 |
| Ihminen (Sivistynyt, lukenut) | Piiloutuminen +5, Petkutus +5, Ajo +5, Vaikuttaminen +10, Oivallus +15, Paikallistuntemus +15, Tahdonvoima +10 | Kaupankäynti +10, Kieli (mikä tahansa\*) tai Tieto (mikä tahansa) +10, Tieto (mikä tahansa) tai Musiikki +15 |
| Ihminen (Nomadi, soturi) | Kestävyys +10, Ensiapu +5, Paikallistuntemus +5, Havainnointi +10, Hiipiminen +10 ja kaksi seuraavista +15 kumpikin: Urheilu, Veneily, Ajo, Ratsastus tai Uinti (riippuen ensisijaisesta kulkuvälineestä) | Navigointi +10, Selviytyminen +10, Jäljitys +10 |
| Ihminen (Nomadi, viisas) | Kestävyys +5, Ensiapu +15, Paikallistuntemus +10, Tieto (mikä tahansa) +15, Havainnointi +10, Hiipiminen +5 ja kaksi seuraavista, toinen +5 kumpikin: Urheilu, Veneily, Ajo, Ratsastus tai Uinti (riippuen ensisijaisesta kulkuvälineestä) | Parantaminen +10, Kieli (mikä tahansa\*) +10, Tieto (mikä tahansa) +10 |
| Ihminen (Primitiivinen, soturi) | Voimailu +10, Kestävyys +10, Väistäminen +10, Paikallistuntemus +5, Havainnointi +10, Hiipiminen +15 ja yksi seuraavista: Urheilu, Veneily, Ensiapu tai Uinti +10 | Selviytyminen +10, Jäljitys +10; ja yksi seuraavista: Urheilu, Veneily, Ensiapu, Navigointi tai Uinti +10 |
| Ihminen (Primitiivinen, viisas) | Kestävyys +5, Väistäminen +5, Ensiapu +15, Paikallistuntemus +15, Havainnointi +15, Hiipiminen +5 ja yksi seuraavista: Urheilu, Veneily tai Uinti +5 | Parantaminen +10, Kieli (mikä tahansa\*) +10, Tieto (mikä tahansa) +15 |
| Kääpiö | Urheilu +10, Voimailu +15, Kestävyys +10, Väistäminen +10, Paikallistuntemus +10, Havainnointi +5, Tahdonvoima +10 | Kaupankäynti tai Mekanismit +10, Käsityö (mikä tahansa) +10, Selviytyminen +10 |
| Haltia | Piiloutuminen +5, Vaikuttaminen +10, Oivallus +10, Paikallistuntemus +10, Havainnointi +15, Hiipiminen +10, Tahdonvoima +10 | Selviytyminen +10 ja kaksi seuraavista +10 kumpikin: Kieli (mikä tahansa\*\*), Tieto (mikä tahansa) tai Musiikki |
| Maahinen | Petkutus +10, Väistäminen +15, Oivallus +10, Paikallistuntemus +10, Havainnointi +5, Hiipiminen +10, Tahdonvoima +10 | Kaupankäynti +10, Käsityö (mikä tahansa) +10, Mekanismit tai Selviytyminen +10 |
| Puolihaltia (kasvatettu haltiana) | Piiloutuminen +10, Vaikuttaminen +10, Oivallus +10, Paikallistuntemus +10, Havainnointi +10, Hiipiminen +10, Tahdonvoima +10 | Kieli (mikä tahansa\*\*) +10, Tieto (mikä tahansa) +10, Musiikki tai Selviytyminen +10 |
| Puolihaltia (kasvatettu ihmisenä) | Valitse asianmukainen ihmisen pikavalinta |
| Puoliörkki (kasvatettu örkkinä) | Urheilu +15, Voimailu +15, Kestävyys +15, Väistäminen +10, Ensiapu +5, Paikallistuntemus +5, Havainnointi +5 | Navigointi +10, Selviytyminen +10, Jäljitys +10 |
| Puoliörkki (kasvatettu ihmisenä) | Valitse asianmukainen ihmisen pikavalinta |
| Puolituinen | Tanssi tai Laulu +5, Väistäminen +15, Oivallus +5, Paikallistuntemus +5, Havainnointi +15, Hiipiminen +15, Tahdonvoima +15 | Käsityö (mikä tahansa) +10, Musiikki +5, Katujen tuntemus +10 |

_\* Ihmisiä ei rajoiteta kielivalinnoissa hahmonluonnin aikana, jos he voivat perustella valinnan._

_\*\* Hahmonluonnin aikana ylimääräiset kielet on rajoitettu maahiseen, puolituiseen, gobliiniin, hobgobliiniin, örkkiin ja gnolliin._

### Rodun taitopisteiden osto

Valinnaisesti voit käyttää pisteitä muokataksesi tiettyä hahmokonseptia. Tämä mahdollistaa räätälöidymmän hahmon ajan kustannuksella. Kun sovellat taitoja, suorita seuraavat vaiheet:

- Valitse kolme Ammattitaitoa tarjotuista vaihtoehdoista (katso [Luku 2](0002_Culture_and_Races.md) rotukuvauksista).
- Jaa 100 pistettä listattujen Perustaitojen ja valittujen Ammattitaitojen kesken, kasvattaen kyseistä taitoa 1 % jokaisesta parantamiseen käytetystä pisteestä. Pelaajat saavat vapaasti päättää, kuinka paljon kutakin taitoa parannetaan, mutta kunkin taidon on saatava vähintään 5 % eikä se voi saada enempää kuin 15 %.

---
## Vaihe 6: Luokka

Luokka edustaa uraa, jolle hahmo on lähtenyt osana aikuistumista, ja se määrittelee edelleen hahmon taitojen kehitystä.

Pelaajat saavat yleensä vapaasti valita, mitä Luokkaa haluavat hahmonsa pelaavan, olettaen että Pelinjohtaja pitää sitä sopivana. Luokkien kuvaukset antavat ohjeita kunkin rotu-/kulttuurityypin yleisistä Luokista. Näitä tulisi pitää yleisinä esityksinä, ei rajoituksina. Pelaajien tulisi tuntea olonsa vapaaksi pelaamaan millä tahansa Luokka/Rotu-yhdistelmällä, joka parhaiten sopii heidän visioonsa.

Kuten Rotu/Kulttuuritaustat, jokainen Luokka tarjoaa mahdollisuuden parantaa useita Perustaitoja ja Ammattitaitoja, joita kyseisessä ammatissa yleisesti käytetään. Toisin kuin kulttuuritaustoissa, hahmojen ei tarvitse sijoittaa pisteitään jokaiseen saatavilla olevaan taitoon, vaan he voivat räätälöidä, mitkä valitaan niiksi, jotka sopivat heidän rooliinsa tai kulttuuriinsa.

### Luokkien taitojen pikavalinnat

Valitse Luokan pikavalinta keskimääräiselle taitovalikoimalle, joka on hyödyllinen kyseiselle Luokalle. Voit vapaasti vaihtaa pisteitä, jos haluat; kuitenkin, vaikka taito voidaan laskea +0-tasolle (perustaso mukaan lukien Ammattitaidot), mikään taito ei voi saada yli +15 bonusta. Nämä taidot sisältävät jo mahdolliset Luokkataitojen bonukset kyvyistä.

##### Luokkien pikavalintataulukko

| Luokka | Perustaidot | Ammattitaidot |
| :-- | :-- | :-- |
| Pappi | Taistelutaito (Pappi) +15; Ensiapu +5; Vaikuttaminen +5; Oivallus +10; Tahdonvoima +15 | Kanavointi +15; Kohteliaisuus +10; Omistautuminen (jumaluus) +15; Tieto (uskonto) +5 ja yksi seuraavista +5: Kieli (mikä tahansa), Tieto (mikä tahansa) tai Puhetaito |
| Taistelija | Urheilu +10; Veneily tai Ratsastus +5; Voimailu +15; Taistelutaito (Taistelija) +20\*\*; Kestävyys +15; Väistäminen +10; Aseeton taistelu +15\*\* | Pelottelu +10; ja kaksi seuraavista +5: Uhkapeli, Selviytyminen tai Navigointi |
| Taikuuden käyttäjä | Väistäminen +10; Ensiapu +5; Vaikuttaminen +5; Oivallus +5; Paikallistuntemus +5; Havainnointi +5; Tahdonvoima +15 | Arkaaninen loitsiminen +15; Arkaaninen tieto +15; Kieli (mikä tahansa) +5; Kieli (mikä tahansa) tai Tieto (mikä tahansa) +5; Tieto (alkemia) +10 |
| Varas | Urheilu +15; Taistelutaito (Varas) +10; Petkutus +5; Väistäminen +15; Oivallus +5; Havainnointi +5; Hiipiminen +15 | Kieli (varasjargon) +40\*\*\*; Lukkojen tiirikoiminen +10; Mekanismit +10; ja kaksi seuraavista +5: Akrobatia, Näytteleminen, Kaupankäynti, Naamioituminen, Pelottelu, Viettely, Taskuvarkaus tai Katujen tuntemus |

_\* Hankittu perustasolla._

_\*\* Sisältää +5 Taisteluosaamisen bonuksen._

_\*\*\* Hankittu perustasolla, +40 % bonus sovellettu._

### Luokkien taitopisteiden osto

Valinnaisesti voit käyttää pisteitä muokataksesi tiettyä hahmokonseptia. Kuten yllä, tämä mahdollistaa räätälöidymmän hahmon ajan kustannuksella. Hahmot, jotka käyttävät tätä menetelmää, kehittävät Luokkataitojaan seuraavasti:

- Valitse enintään 3 taitoa Luokan saatavilla olevista Ammattitaidoista.
- Jaa 100 pistettä Luokan listattujen Perustaitojen ja valittujen Ammattitaitojen kesken, kasvattaen kunkin taidon 1 % jokaisesta parantamiseen käytetystä pisteestä. Kaikkia saatavilla olevia taitoja ei tarvitse parantaa, mutta yksittäinen taito ei voi saada yli 15 %:n lisäystä. Jotkut Luokat tarjoavat enemmän kuin 3 Ammattitaitoa, mutta pisteitä ei koskaan anneta enempää.
- Kaikki Luokat sisältävät Taistelutaidon, joka kattaa aseet, joiden käytössä Luokka on tyypillisesti koulutettu. Tämä voi olla vain 4 tai 5 yksinkertaista asetta, kuten taikuuden käyttäjällä, tai kaikki aseet ja kilvet, kuten taistelijalla. Kun Taistelutaito sisältyy Perustaitojen listaan, sitä käsitellään sellaisena ja sitä voi parantaa Luokan taitopisteillä. Kun Taistelutaito on jätetty pois, kuten taikuuden käyttäjällä, sitä voi parantaa vain käyttämällä bonustaitopisteitä hahmonluonnin vaiheessa 7.

Vasta valitut Ammattitaidot ja Luokan Taistelutaito alkavat niiden Perustason ominaisuusarvosta. Kulttuuritaustan kautta aiemmin hankitun Ammattitaidon valitseminen mahdollistaa vain sen, että hahmo voi edelleen käyttää joitakin Luokan taitopisteitään tässä vaiheessa. Jotkut näistä taidoista, kuten Käsityö, Kieli tai Tieto, tarjoavat erikoistumisvalinnan. Näissä tapauksissa valitun erikoisalan tulee sopia hahmon kulttuuriin.

Joillakin Luokilla voi olla enemmän taitoja, joista valita, tai ne voivat valita useampia taitoja kuin muut. Tätä tasapainottaa se, että kaikki hahmot rakennetaan samoilla 100 pisteellä. Niinpä hahmo, jolla on enemmän taitoja, joutuu levittämään pisteensä ohuemmin tietäen vähän paljon, ja hahmo, jolla on vähemmän valittavia taitoja, tulee olemaan erikoistuneempi.

#### Huomautus Luokan kyvyistä ja Rank-tasosta

Muista, että kaikki Luokat vaativat vähintään _**40 % taitotason missä tahansa viidessä Luokkataidossa**_ voidakseen käyttää Luokan erikoiskykyjä tai heittää loitsuja. Olet pätevä taidossa 50 %:n tasolla tai korkeammalla. Joten, päästäkseen Rank 1:een, hahmon on omattava mitkä tahansa viisi Luokkataitoa vähintään 40 %:n tasolla. Rank 2 vaatii mitkä tahansa viisi Luokkataitoa 70 %:n tasolla, Rank 3 vaatii mitkä tahansa neljä Luokkataitoa 90 %:n tasolla, ja niin edelleen.

Hahmo voi päättää aloittaa Rank 0 -tasolla, jos hänellä ei ole riittäviä taitotasoja, ja saavuttaa Rank 1:n pelin aikana, jos haluaa, mutta voidakseen käyttää tai heittää loitsuja, nämä esivaatimukset on täytettävä.

#### Taistelutaito (STR+DEX)

Taistelutaito on taito, joka liittyy taisteluun ja aseiden käyttöön. Se on monipuolinen taito, jossa on monia erikoistumisia, jotka liittyvät kyseiseen hahmoluokkaan. Useimmat taisteluperinteet kattavat koulutuksen useissa saman tyypin aseissa sekä tekniikat, joita tarvitaan niiden kaikkien tehokkaaseen käyttöön. Siksi Taistelutaito on sateenvarjo, joka sulauttaa yhteen monia taistelun liittyviä puolia yhden kyvyn alle, mikä poistaa tarpeen ostaa useita alataitoja.

Taistelutaidolla on perusprosentti, joka on yhtä suuri kuin STR+DEX.

Koska useimmat ihmiset voivat poimia aseen ja vaistomaisesti joko heilauttaa, heittää tai ampua sitä, Taistelutaitoa pidetään Perustaitona. Mutta niiden mahdollisesti monipuolisen luonteen vuoksi ne luokitellaan ja määritellään erikseen.

Kaikki hahmot oppivat Taistelutaitonsa osana valittua Luokkaa, kuten [Luvussa 3](0003_Classes.md) on kuvattu.

---
## Vaihe 7: Bonustaitopisteet

Tässä vaiheessa jokainen hahmo saa ylimääräisen "ilmaisten" taitopisteiden altaan Kokemustason perusteella, joka voidaan jakaa olemassa olevien taitojen kesken. Nämä tarjotaan hahmon pyöristämiseksi, lisäämällä kiinnostuksen kohteita tai asiantuntemusta. Oletus uusille aloittaville hahmoille on 100 pisteen allas, rajana enintään 10 pisteen sijoittaminen per taito. Jos hahmot ovat kokeneempia, taitopisteiden määrä ja rajoitukset eroavat, kuten Kokemustaulukossa on osoitettu.

Bonustaitopisteitä käytetään seuraavilla tavoilla:

- Salli hahmolle mahdollisuus valita yksi lopullinen uusi Ammattitaito ilmaiseksi, heijastaen henkilökohtaista harrastusta tai kiinnostusta.
- Vaihtoehtoisesti hahmo voi lisätä uuden asetyypin Taistelutaitoonsa.
- Joko lisää +10 bonus kymmeneen eri taitoon tai jaa pisteitä niiden välillä, kasvattaen kunkin taidon 1 % jokaisesta parantamiseen käytetystä pisteestä. Yksittäinen taito ei voi vastaanottaa enempää pisteitä kuin Kokemustaso osoittaa. Jos valitset uuden Ammattitaidon, sinun on lisättävä pisteitä siihen.
- Harrastuserikoisuutta lukuun ottamatta pisteitä ei saa sijoittaa Ammattitaitoihin, joita ei ole opittu osana kulttuuria tai Luokkaa.

### Kokeneiden hahmojen luominen

On suositeltavaa, että aloittavat hahmot aloittavat tuoreina, Rank 1 -tasolla, vähäisellä tai olemattomalla käytännön kokemuksella. Tietysti hahmojen taso riippuu suuresti asetuksista ja siitä, tuleeko peli olemaan lyhyt kertaseikkailu vai pitkäkestoinen kampanja. On myös tavallista, että pelaaja luo kokeneemman hahmon, jos hän korvaa pelissä kuolleen hahmon tai liittyessään olemassa olevaan kampanjaan.

Taulukko on toimitettu, jakaen kokemuksen Kokemusluokkiin. Hahmon kokemuksella on suora korrelaatio ikään ja taitotasoihin; kokeneemmilla hahmoilla on luonnostaan enemmän elämänkokemusta kuin nuoremmilla maanmiehillään. Kuitenkin huomioitua Ikäbonusta tulisi kohdella arvioina, sillä kampanjat etenevät eri tahtia – joissakin kampanjoissa seikkailujen välillä kuluu paljon peliaikaa, kun taas toiset ovat yksi pitkä katkeamaton seikkailujen sarja. Kun muunnat olemassa olevaa hahmoa, korvaa vain todellinen ikä alla mainitulla.

Tätä taulukkoa voidaan käyttää myös NPC-hahmoille, riippumatta siitä, onko ne rakennettu Luokan tai uran mukaan, ja se noudattaa samoja sääntöjä. Yksi poikkeus on: NPC-hahmoilla, jotka on rakennettu osana uraa, ei ole erityisiä Kykyjä, mukaan lukien ylimääräiset Onnenpisteet, jotka on varattu vain pelaajahahmoille ja merkittäville NPC-hahmoille. Huomaa, että aloittava NPC, joka on rakennettu urana, on oletuksena Rank 1.

##### Kokemustaulukko

| Rank (Taso\*) | Ikä | Bonustaitopisteet | Maksimitaitolisäys | Keskimääräinen taitotaso\*\* | Edistyminen |
| :-- | :-: | :-: | :-: | :-: | :-- |
| Rank 1 (1-4): _Tuore_ | Rodun mukaan | 100 | +10 | 40-60 | Mitkä tahansa 5 Luokkataitoa 40 % |
| Rank 2 (5-9): _Matala taso_ | +1d6 | 300 | +30 | 65-75 | Mitkä tahansa 5 Luokkataitoa 70 % |
| Rank 3 (10-14): _Keskitaso_ | +1d6+5 | 500 | +50 | 85-95 | Mitkä tahansa 4 Luokkataitoa 90 % |
| Rank 4 (15-19): _Korkea taso_ | +1d6+10 | 700 | +70 | 105-115 | Mitkä tahansa 3 Luokkataitoa 110 % |
| Rank 5 (20+): _Eeppinen taso_ | +1d6+20 | 900 | +90 | 125-135 | Mitkä tahansa 2 Luokkataitoa 130 % |

_\* Suluissa olevaa numeroa voidaan käyttää mittarina muunnettaessa olemassa olevia hahmoja tasopohjaisista peleistä._

_\*\* Tämä on keskimääräinen taitotaso kaikille kyseisen Luokan kannalta erityisen tärkeille taidoille._

**Kokemustaulukon huomautukset**

- Rank on karkea kuvaava opas eritasoisten hahmojen vertailemiseen.
- Ikä määritetään laskemalla ikä rodun mukaan ja lisäämällä mahdolliset huomautetut bonukset. Se on enemmän suuntaviiva kuin tiukka sääntö, sillä aika kuluu eri tavalla kampanjasta toiseen.
- Bonustaitopisteet määrittävät, kuinka monta pistettä hahmon on käytettävä taitojen kehittämiseen. Tämä EI ole kumulatiivinen edellisten tasojen pisteiden kanssa. Esimerkiksi Rank 2 -hahmo rakennetaan 300 pisteellä, ei 300 pisteellä plus 100 pisteellä Rank 1 -tasolta.
- Maksimitaitolisäys rajoittaa, kuinka monta bonuspistettä voidaan soveltaa yhteen taitoon.
- Keskimääräinen taitotaso näyttää tyypillisen vaihteluvälin hahmon tärkeimmille Luokkataidoille kullakin kokemustasolla. Se on sisällytetty viitteelliseksi ja olettaa 16:n perustason ominaisuudet, jolloin jokaisessa vaiheessa on käytetty maksimimäärä taitopisteitä. Todelliset tulokset vaihtelevat.
- Edistyminen: Tämä edustaa niiden Luokkataitojen määrää, jotka vaaditaan kyseisen Rank-tason saavuttamiseksi. Esimerkiksi Rank 3 -tason saavuttamiseksi neljän asiaankuuluvassa Luokan kuvauksessa mainitun Luokkataidon on oltava vähintään 90 %.

---
## Vaihe 8: Lopuksi…

- Määritä Aate ja Intohimot valitun Kulttuurin/Rodun ja Luokan perusteella. Katso [Luku 4](0004_Alignment_and_Passions.md).
- Merkitse muistiin rodun ja Luokan mukaiset Aloituskyvyt.
- Valitse Rank 1 -luokkakykylistasta yksi Rank 1 -kyky, jonka vaatimukset täytät, ilman kustannuksia EXP-heittoina.
- Kopioi aloitusvarusteet, kuten Luokkasi kuvauksen lopussa on mainittu.
- Älä unohda antaa hahmollesi nimeä. Etsi myös tapoja luoda yhteyksiä muihin hahmoihin tarvittaessa.