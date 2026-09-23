# 1. fejezet: Karakterek

Az alapvető karaktert egy sor különböző elem határozza meg, amelyek leírják a karakter képességeit. Ezek az elemek a következők:

- Tulajdonságok: mint például az ERŐ vagy a KAR
- Attribútumok: olyan dolgok, mint a Magasság vagy a Mozgás
- Képzettségek: az alapvető készségekben való jártasság

Ezeknek az elemeknek a többsége számokkal van leírva, és némelyikük másoktól függ, vagy mások alapján számítódik. Hogy mit jelent az egyes elem, és hogyan határozhatók meg, azt a következő szakaszok írják le.

---
## 1. lépés: Karakterkoncepció

A kezdéshez jó, ha van valami elképzelésed arról, milyen karakterrel szeretnél játszani; például egy edzett harcos vagy egy ravasz tolvaj. A karakterkoncepciódnak ebben a szakaszban nem kell kidolgozottnak lennie; elég egy ötlet, amely segít eligazodni bizonyos választásokban, mint például a Faj és az Osztály. Néhány karakterötletet felsoroltunk a képzeleted beindításához:

- Fiatal, naiv mágiahasználó
- Rossz természetű félork harcos
- Túlzottan magabiztos félszerzet tolvaj
- Jámbor törpe pap

---
## 2. lépés: Tulajdonságok

Mindenkit hét Tulajdonság határoz meg, amelyek elmondanak valamit a karakteredről; milyen erős vagy gyors; milyen okos vagy egészséges. A Tulajdonságok minden _Classic Fantasy Imperative_ karakter lényegét alkotják, és a legtöbb egyéb elem, mint például az Attribútumok és Képzettségek alapját képezik. A hét Tulajdonság:

- ERŐ (ERŐ)
- Állóképesség (ÁLL)
- Méret (MÉR)
- Ügyesség (ÜGY)
- Intelligencia (INT)
- Hatalom (HAT)
- Karizma (KAR)

A Tulajdonságok kiszámítása előtt a következő szakasz elmagyarázza, mit képvisel az egyes érték.

#### ERŐ (ERŐ)

Az ERŐ a fizikai erőt jelképezi: mennyit tud valaki felemelni, mennyire erősen tud ütni, és így tovább. Az ERŐ a [Sebzésmódosító](0001_Characters.md?id=damage-modifier) egyik összetevője (lásd alább az [Attribútumok](0001_Characters.md?id=step-3-attributes) szakaszt). Ha egy karakter ERŐ-je nullára csökken, elveszíti a képességét, hogy mozogjon vagy tárgyakat emeljen.

#### Állóképesség (ÁLL)

Az ÁLL az egészség és a szívósság mérőszáma. Az ÁLL az [Életerőpontok](0001_Characters.md?id=hit-points) és a [Gyógyulási Ráta](0001_Characters.md?id=healing-rate) meghatározásának egyik összetevője (lásd alább). Ha az ÁLL bármely okból nullára esik, a karakter meghal.

#### Méret (MÉR)

A MÉR a tömeget méri, és segít meghatározni a Magasságot és a Súlyt. A MÉR az [Életerőpontok](0001_Characters.md?id=hit-points) kiszámításában segít, mivel a nagyobb, nehezebb lények hajlamosak nagyobb ellenálló képességgel bírni a sebzéssel szemben. A MÉR szintén használható a karakter Sebzésmódosítójának meghatározására, mivel a tömeg segít növelni az ütés erejét.

#### Ügyesség (ÜGY)

Az agilitást, az egyensúlyérzéket és a reflexeket az ÜGY méri. Ez a [Kezdeményezés](0001_Characters.md?id=initiative) egyik fontos szempontja. Ha egy karakter ÜGY-e nullára csökken, funkcionális bénulást szenved.

#### Intelligencia (INT)

Az INT a kognitív képességek mérőszáma. Azok, akiknek alacsonyabb az INT pontszáma, nem feltétlenül buták, de valószínűleg korlátozottak abban, milyen kreatívan használják az eszüket. Az INT tényező a [Kezdeményezés](0001_Characters.md?id=initiative) kiszámításában. Ha az INT nullára csökken, a karakter teljesen esztelenné válik.

#### Hatalom (HAT)

A HAT egy karakter lelkének, szellemének, belső hajtóerejének vagy mágia iránti kapacitásának mérőszáma. A HAT szabályozza a karakter [Mágia pontjait](0001_Characters.md?id=magic-points) és [Szerencse pontjait](0001_Characters.md?id=luck-points). Ha egy karakter HAT-ja valaha nullára esik, elveszíti minden önálló akaratát.

#### Karizma (KAR)

A Karizma a személyiséget méri, és független a fizikai megjelenéstől. A KAR befolyásolja a karakter [Tapasztalati Módosítóját](0001_Characters.md?id=experience-modifier). Ha a KAR valaha nullára esik, a karakter már nem tud társadalmilag interakcióba lépni másokkal, annyira fájdalmasan félénkké vagy antiszociálissá válik, hogy figyelmen kívül hagyják vagy el is űzik.

---
### Tulajdonságok kiszámítása

Minden Tulajdonságnak van egy numerikus értéke, amely meghatározza az erejét. Az egyes dobásértékek után zárójelben lévő szám a faji átlag, és mércéül szolgál a karaktered eredményeinek értékelésére, amikor más fajtársaihoz hasonlítod őket. A Tulajdonságok meghatározására vonatkozó javaslatok közé tartoznak:

- **Kockadobás:** Dobd ki a Faji Tulajdonságok Táblázatában jelzett kockákat az ERŐ, ÁLL, MÉR, ÜGY, INT, HAT és KAR értékekre, minden dobott eredményt elfogadva úgy, ahogy kijön. Mivel ezeknek a dobásoknak az eredményei meglehetősen véletlenszerűek lehetnek, gyakran jobb a kockadobások után dönteni a karakterkoncepcióról. Ellenkező esetben a végső Tulajdonságok kizárhatnak egy előre eltervezett szerepet. Dobj 3d6-tal az ERŐ, ÁLL, ÜGY, HAT és KAR értékekre; majd 2d6+6-tal a MÉR és INT értékekre.
- **Kockadobás, Elosztás:** Ugyanaz, mint fent, azzal a különbséggel, hogy a játékos cserélheti az értékeket az azonos kockatartományba eső Tulajdonságok között. Például, amikor egy embert generálsz, a játékos kicserélheti az értékeket az ERŐ, ÁLL, ÜGY, HAT és KAR között, mivel ezek osztoznak a 3d6-os tartományon, vagy a MÉR és INT között, amelyek osztoznak a 2d6+6-os tartományon — de ezeknek mindig ugyanabból a kockatartomány-csoportból kell származniuk; nem válthatsz dobásokat az egyik csoportból a másikba.
- **Kockadobás, Magas:** Dobj egy extra kockát az ERŐ, ÁLL, MÉR, ÜGY, INT, HAT és KAR esetében jelzettek szerint, és mindegyikből dobd el a legalacsonyabb eredményt.
- **Pontelosztás:** A kockadobás helyett a játékosok egy előre meghatározott pontkészletből építik fel a karakterüket, melynek mennyiségét a karakter faja határozza meg. Ez a módszer a legjobban azoknak a csoportoknak való, akik tudják, mivel akarnak játszani, és a felépítésüket egy adott Osztályhoz akarják igazítani. Bizonyos szabályok vonatkoznak a Pontelosztás opcióra:
  - Kezdj a hét Tulajdonság faji átlagával, ahogy az alábbi kockatartományok után zárójelben fel van tüntetve.
  - Költs el további 10 pontot (emberek) vagy 6 pontot (fél-fajok) a Tulajdonságok növelésére.
  - Csökkenthetsz is egy Tulajdonságot, hogy extra pontokat nyerj. Például csökkentsd az ERŐ-t 11-ről 9-re, hogy 2 pontot nyerj.
  - A Tulajdonságok nem lehetnek *kisebbek*, mint a lehetséges minimum, vagy *nagyobbak*, mint a lehetséges maximum az adott Tulajdonságra vonatkozó kockadobás alapján.

A Játékmesterek szabadon kitalálhatják a saját módszereiket vagy pontértékeiket, ahogy kívánják.

A következő táblázat összefoglalja a fenti módszerek mindegyikéhez szükséges információkat. A kockatartományokat a Kockadobás módszerek bármelyikében használják, míg a zárójelben lévő számokat a Pontelosztásnál.

##### Faji Tulajdonságok Táblázata

| Faj | Törpe | Elf | Gnóm |
| --- | --- | --- | --- |
| ERŐ | 2d6+9 (16) | 2d6+4 (11) | 2d6+1 (8) |
| ÁLL | 2d6+9 (16) | 3d6 (11) | 2d6+6 (13) |
| MÉR | 2d4+4 (9) | 2d6+4 (11) | 1d3+2 (4) |
| ÜGY | 3d6 (11) | 2d6+9 (16) | 3d6+2 (13) |
| INT | 2d6+6 (13) | 2d6+7 (14) | 2d6+8 (15) |
| HAT | 3d6 (11) | 2d6+7 (14) | 2d6+7 (14) |
| KAR | 2d6+2 (9) | 3d6 (11) | 3d6 (11) |

| Faj | Fél-elf | Fél-ork | Félszerzet | Ember |
| --- | --- | --- | --- | --- |
| ERŐ | 3d6 (11) | 2d6+9 (16) | 2d6+1 (8) | 3d6 (11) |
| ÁLL | 3d6 (11) | 2d6+6 (13) | 2d6+7 (14) | 3d6 (11) |
| MÉR | 2d6+6 (13) | 2d6+9 (16) | 1d4+5 (8) | 2d6+6 (13) |
| ÜGY | 2d6+6 (13) | 3d6 (11) | 3d6+3 (14) | 3d6 (11) |
| INT | 2d6+6 (13) | 2d6+5 (12) | 2d6+6 (13) | 2d6+6 (13) |
| HAT | 2d6+6 (13) | 3d6 (11) | 2d6+9 (16) | 3d6 (11) |
| KAR | 3d6 (11) | 2d6+1 (8) | 2d6+5 (12) | 3d6 (11) |

---
## 3. lépés: Attribútumok

Minden karakternek van egy sor attribútuma is. Ezek a Tulajdonságokból származtatott vagy azok által meghatározott képességek, amelyeket a játék bizonyos tényezőinek szabályozására használnak.

#### Akciópontok

Hogy milyen gyakran cselekedhet egy karakter egy [Harci Körben](0008_Combat.md?id=combat-rounds), azt az Akciópontok határozzák meg. A kezdő karakterek 2 Akcióponttal indulnak, de a Rangjuk emelkedésével egyre többet szereznek. Lásd a vonatkozó Osztályfejlődési Táblázatokat az [Osztályok](0003_Classes.md) alatt a részletekért.

#### Sebzésmódosító

A bónusz sebzés mennyisége, amelyet egy karakter okoz, amikor fizikailag üt vagy erőt fejt ki. Általában harci helyzetekben használják, de tárgyak betörésére tett kísérleteknél is alkalmazható. A Sebzésmódosító egy extra kockadobás, amely vagy hozzáadódik, vagy levonódik a fegyver vagy eszköz által okozott sebzésből. Ha egy negatív Sebzésmódosító a fegyver sebzését nullára vagy az alá csökkenti, akkor egyáltalán nem történt sebzés.

Add össze az ERŐ-t és a MÉR-t, majd tekintsd meg a Sebzésmódosító táblázatot:

##### Sebzésmódosító Táblázat

| ERŐ+MÉR | Sebzésmódosító |
| :-: | :-: |
| 5 vagy kevesebb | –1d8 |
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
| Minden 10 pont | Folytasd a sorozatot |

#### Tapasztalati Módosító

A játék során a karakterek fejlesztik készségeiket és képességeiket. Ezt Tapasztalati Dobásokkal érik el, amelyeket részletesebben a [Játékrendszer](0007_Game_System.md?id=experience-rolls) szakaszban magyarázunk el.

A karakter KAR értéke módosíthatja a karakter Tapasztalati Dobásainak számát, tükrözve a társaival való kapcsolatát és a közösségben kivívott hírnevét. Ha a KAR magas, az emberek hajlandóak segíteni a karakter képzésében vagy támogatásában, miközben az oktatásban részesül. Ezzel szemben, ha a KAR különösen alacsony, nehézségek adódhatnak a képességek fejlesztésében mások segítsége nélkül; például nehéz lehet edzőpartnert találni.

##### Tapasztalati Módosító Táblázat

| KAR | Tap. Módosító |
| :-: | :-: |
| 6 vagy kevesebb | -1 |
| 7-12 | +0 |
| 13-18 | +1 |
| Minden 6 pont | +1 |

#### Gyógyulási Ráta

Sérülések elszenvedése után a karakternek regenerálódnia kell. A Gyógyulási Ráta határozza meg, milyen gyorsan épül fel természetes úton a sebekből. A sérülés súlyosságától függően (lásd a [Sebzés és Sebzési szintek](0007_Game_System.md?id=damage-and-wound-levels) szakaszt), a Gyógyulási Ráta jelzi, hány Életerőpont regenerálódik naponta, hetente vagy havonta.

##### Gyógyulási Ráta Táblázat

| ÁLL | Gyógyulási Ráta |
| :-: | :-: |
| 6 vagy kevesebb | 1 |
| 7-12 | 2 |
| 13-18 | 3 |
| Minden 6 pont | +1 |

#### Kezetményezés

Azt a pillanatot, amikor valaki reagál a harcban, a Kezdeményezés szabályozza. A Kezdeményezés módosítóként hat a Kezdeményezés dobásokra; minél magasabb a Kezdeményezés, annál gyorsabban reagál valaki harci helyzetben, meghatározva, mikor cselekedhetsz. További tényezők – például a páncél – módosítják ezt. A [Harc](0008_Combat.md) fejezet részletesebben kitér arra, hogyan használják a [Kezdeményezést](0008_Combat.md?id=initiative).

A Kezdeményezés az ÜGY és az INT Tulajdonság átlaga.

#### Szerencse pontok

A Szerencse pontok azt a furcsa erőt képviselik, amely megkülönbözteti a kalandozó hősöket a hétköznapi emberektől. Nevezd sorsnak, karmának vagy egyszerűen jó szerencsének. A Szerencse pontok felhasználhatók:

- A kockák újradobására, ha az eredmény kedvezőtlen.
- Fizikai sérülések vagy más szerencsétlen körülmények enyhítésére.
- Előny szerzésére a harc egy kritikus pillanatában.

Hogy pontosan hogyan és mikor használhatók fel, az a [Szerencse pontok használata](0007_Game_System.md?id=using-luck-points) szakaszban van leírva. Amint egy Szerencse pont elköltésre kerül, a készlet csökken; ha elfogytak a Szerencse pontok, több nem áll rendelkezésre – kivéve, ha a Játékmester rögtönzött jutalmat ad – a következő játékülésig, amikor visszaállnak a normál értékükre.

##### Szerencse pontok Táblázat

| HAT | Szerencse pontok |
| :-: | :-: |
| 6 vagy kevesebb | 1 |
| 7-12 | 2 |
| 13-18 | 3 |
| Minden 6 pont | +1 |

_* Az emberek egy további Szerencse ponttal kezdenek a fentieken felül._

_** Minden karakter egy további Szerencse pontot kap minden új Rang elérésekor._

#### Mágia pontok

A misztikus képességek és a _Classic Fantasy Imperative_-ban elmondott varázslatok általában a Mágia pontokra támaszkodnak. Mivel a mágia elérhetőségét korlátozhatja egy kampánybeállítás vagy specifikus mágikus szakmák, egyes karakterek számára ez az Attribútum felesleges lehet.

Azok számára, akik képesek ilyen erők hasznosítására, a karakter Mágia pontjai egyenlők a HAT-jukkal. Ezeket a pontokat varázslatok elmondására használják, aminek költsége a használt mágia típusától függ. Amikor a varázslók kifogynak a Mágia pontokból, kimerítették a képességüket bármilyen varázslat elmondására, amíg a Mágia pontok újra nem töltődnek.

#### Mozgási Ráta

Minden lénynek van egy Mozgási Rátája – néhány láb, amelyet egy adott időszak alatt megtehet. A mozgás nem a Tulajdonságokból számítódik, hanem egy alapérték, amely fajonként eltérő. Az emberek Alap Mozgási Rátája 20 láb, bár bizonyos képességek ezt javíthatják. A [Mozgás](0008_Combat.md?id=movement) szakasz további részleteket kínál.

##### Mozgási Ráta Fajok Szerint Táblázat

| Faj | Láb | Méter |
| :-- | :-: | :-: |
| Törpe | 15 | 4.5 |
| Elf | 20 | 6 |
| Gnóm | 15 | 4.5 |
| Fél-elf | 20 | 6 |
| Fél-ork | 20 | 6 |
| Félszerzet | 15 | 4.5 |
| Ember | 20 | 6 |#### Életerő (Hit Points)

Az Életerő azt mutatja meg, mennyi sérülést képes elviselni egy testrész, mielőtt használhatatlanná válna, ami cselekvőképtelenséghez, végső soron pedig a karakter halálához vezethet. Minden lény teste különálló testtájakra oszlik – az embereknek például hét van: a fej, a mellkas, a has, a karok és a lábak –, és mindegyik testtáj saját Életerővel rendelkezik.

Egyes lények, mint például a szörnyek vagy a különböző állatfajok, természetükből adódóan gyökeresen eltérő testfelépítéssel rendelkeznek, mégis minden testtájuknak van saját Életereje. Amikor egy testtáj Életereje bármilyen sérülés következtében egy bizonyos szintre csökken, a karakter bizonyos következményeket szenved el, amelyek a sérülés súlyosságát tükrözik. A sebekkel kapcsolatos további információkért lásd a [Sebzés és Sebek](0007_Game_System.md?id=damage-and-wound-levels) című szakaszt.

Az egyes testtájak Életerejének kiszámításához add össze az ÁLL és a MÉR értékét, majd keresd meg az eredményt az Életerő táblázatban. Minden karakter +1 Életerő pontot kap minden testtájon a 2. és a 4. rangon.

##### Testtájankénti Életerő táblázat

| Testtáj | ÁLL+MÉR |  |  |  |  |  |  |  |  |
| :-- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| | 1–5 | 6–10 | 11–15 | 16–20 | 21–25 | 26–30 | 31–35 | 36–40 | +5 |
| Fej | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | +1 |
| Mellkas | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | +1 |
| Has | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | +1 |
| Mindkét Kar | 1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | +1 |
| Mindkét Láb | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | +1 |

---
## 4. Lépés: Képzettségek

Alapértelmezés szerint minden karakter rendelkezik egy sor Általános Képzettséggel, amelyek lehetővé teszik számára, hogy változatos tevékenységeket végezzen eltérő szintű szakértelemmel. Ezeket a képzettségeket részletesebben a [Képzettségek](0005_Skills.md) fejezet tárgyalja, de lefedik a hétköznapi tevékenységek és a helyi ismeretek körét, amelyeket bárki használhat különösebb képzés nélkül. A karakteralkotás ezen pontján a játékosoknak csak az egyes Általános Képzettségek Alapszintjét kell ismerniük.

Az egyes Általános Képzettségek alapértékét két Tulajdonság összege, vagy egyetlen Tulajdonság többszöröse határozza meg. Az érték a karakter veleszületett kompetenciáját jelzi az adott területen, lényegében a nyers tehetségét, még mielőtt a kultúrája és hivatása részeként formális képzésben részesült volna.

Az Általános Képzettségek táblázata bemutatja az alapértékek kiszámításának módját, valamint egy rövid leírást arról, mi az adott képzettség és mit tesz. A pontszám a képzettség sikerességének százalékos esélyét reprezentálja; így egy 25-ös Atlétika érték 25%-ot jelent. Hogy hogyan működnek a képzettségi százalékok, és a részletes képzettségleírások a [Képzettségek](0005_Skills.md) fejezetben találhatók.

Ne feledd, hogy egyes képzettségek alap százalékos értékeit a kultúra és a hivatás egyaránt módosítja, így ezek a kiinduló értékek a karakteralkotás előrehaladtával változni fognak.

##### Általános Képzettségek táblázata

| Képzettség | Alap Százalék |
| :-- | :-: |
| Atlétika | ERŐ+ÜGY |
| Csónakázás | ERŐ+ÁLL |
| Erőfitogtatás | ERŐ+MÉR |
| Rejtőzés | ÜGY+HAT |
| Szokások | INT x2, +40* |
| Tánc | ÜGY+KAR |
| Csalás | INT+KAR |
| Járművezetés | ÜGY+HAT |
| Állóképesség | ÁLL x2 |
| Kitérés | ÜGY x2 |
| Elsősegély | INT+ÜGY |
| Befolyásolás | KAR x2 |
| Észrevétel | INT+HAT |
| Helyismeret | INT x2 |
| Anyanyelv | INT+KAR, +40* |
| Érzékelés | INT+HAT |
| Lovaglás | ÜGY+HAT |
| Éneklés | KAR+HAT |
| Lopakodás | ÜGY+INT |
| Úszás | ERŐ+ÁLL |
| Fegyvertelen harc | ERŐ+ÜGY |
| Akaraterő | HAT x2 |

_* Tartalmaz egy statikus +40%-os bónuszt mind a Szokások, mind a karakter Anyanyelve esetében (ez az emberek esetében a Közös nyelv). Minden nem emberi faj beszélheti a Közös nyelvet +40%-kal, az anyanyelvükön felül, amely szintén +40%-ot kap, a fajok leírásának megfelelően._

---
## 5. Lépés: Faj/Kultúra

A _Classic Fantasy Imperative_ játékban a játékosok általában hét faj közül választhatnak karakterüknek: Ember, vagy az egyik nem emberi faj (Törpe, Elf, Gnóm, Fél-elf, Fél-ork vagy Félszerzet). Ha ember, akkor karakterét tovább kell határoznia a négy kulturális háttér egyikével: Barbár, Civilizált, Nomád vagy Primitív. Emberek esetében a kultúra határozza meg azt a társadalmi közeget, amelyben a karakter felnőtt, és így előír bizonyos nézeteket és filozófiákat, amelyeket vallhat. Gyakorlatiasabb szempontból a kultúra segít meghatározni azon különféle képzettségek értékét, amelyek formálják a karakter átfogó képességeit. A nem emberi fajok általában egy olyan faji kultúrából származnak, amely sokkal inkább sztereotipikus az adott fajra nézve. Lásd a [2. Fejezetet](0002_Culture_and_Races.md) a fajok és kultúrák leírásáért további információkért.

Minden karakter rendelkezik egy Jellemmel (Alignment), amely egy etikai és egy erkölcsi kódexből, valamint két vagy három Szenvedélyből áll. Némelyek rendelkeznek esküvel egy vallási rendhez, céhhez vagy szervezethez. Minden Kaszt leírása megjegyzi a szükséges Jellemet vagy esküket. Mielőtt folytatnád, keresd ki a fajodat a [2. Fejezetben](0002_Culture_and_Races.md), jegyezd fel a javasolt Jellemet és Szenvedélyeket, majd ellenőrizd a [Kasztok](0003_Classes.md) szakaszt, hogy vannak-e Jellem- vagy esküigények. Lásd a [4. Fejezetet, Jellem & Szenvedélyek](0004_Alignment_and_Passions.md), hogy meghatározd a Jellemedre, Szenvedélyeidre és esküidre vonatkozó részleteket, ha vannak.

Minden faj és kultúra felsorol egy sor Általános Képzettséget, amelyet a karakter az adott társadalmon belüli fejlődése során sajátít el. Ezek alapvető képességek, amelyeket az ugyanabból a kultúrából származó összes karakter bizonyos fokig fejleszt. A karakterek emellett néhány speciális vagy ezoterikus Szakmai Képzettséget is tanulnak személyes érdeklődésüknek megfelelően.

A Szakmai Képzettségeket a [Képzettségek](0005_Skills.md) fejezet magyarázza tovább, de röviden, ezek olyan képzettségek, amelyek nem kísérelhetők meg évekig tartó szigorú tanulmányok és speciális képzés nélkül. Míg a karakter alapvető képességgel rendelkezik az összes Általános Képzettségben, a Szakmai Képzettségekben nulla a képessége, hacsak nem választotta azokat kulturális neveltetése vagy Kasztja részeként.

A választott Szakmai Képzettségek az Alapszintű Tulajdonságértékükön indulnak, az Általános Képzettségeknek megfelelően. Néhány Szakmai Képzettség, mint a Mesterség, Nyelvek vagy Ismeretek, specializációs választási lehetőséget kínál. Ezekben az esetekben a választott specializációnak olyannak kell lennie, amely illik az adott kultúrához.

### Faji képzettség gyorsválasztók

A Gyorsválasztók a képzettségek átlagos választékát biztosítják, lehetővé téve a gyors karakteralkotást. Nyugodtan cserélj pontokat, ha kívánod; azonban egyetlen képzettség sem kaphat +5-nél kisebb vagy +15-nél nagyobb bónuszt.

##### Faji gyorsválasztók táblázata

| Faj/Kultúra | Általános Képzettségek | Szakmai Képzettségek |
| :-- | :-- | :-- |
| Ember (Barbár, Harcos típus) | Atlétika +10, Erőfitogtatás +10, Állóképesség +15, Elsősegély +5, Helyismeret +10, Érzékelés +10, és vagy Csónakázás vagy Lovaglás +10 | Navigáció +10, Tengerészet vagy Túlélés +10, Nyomkövetés +10 |
| Ember (Barbár, Bölcs típus) | Atlétika +5, Állóképesség +5, Elsősegély +15, Helyismeret +15, Érzékelés +15, és vagy Csónakázás vagy Lovaglás +10 | Gyógyítás +10, Nyelv (bármilyen*) +10, Ismeret (bármilyen) +15 |
| Ember (Civilizált, Utcai eszes) | Rejtőzés +10, Csalás +15, Járművezetés +5, Befolyásolás +10, Észrevétel +10, Helyismeret +10, Akaraterő +10 | Mesterség (bármilyen) +5, Kereskedelem +10, Utcai tájékozottság +15 |
| Ember (Civilizált, Könyvmoly) | Rejtőzés +5, Csalás +5, Járművezetés +5, Befolyásolás +10, Észrevétel +15, Helyismeret +15, Akaraterő +10 | Kereskedelem +10, Nyelv (bármilyen*) vagy Ismeret (bármilyen) +10, Ismeret (bármilyen) vagy Zenélés +15 |
| Ember (Nomád, Harcos típus) | Állóképesség +10, Elsősegély +5, Helyismeret +5, Érzékelés +10, Lopakodás +10, és kettő az alábbiak közül, +15-tel: Atlétika, Csónakázás, Járművezetés, Lovaglás vagy Úszás (az elsődleges közlekedési módtól függően) | Navigáció +10, Túlélés +10, Nyomkövetés +10 |
| Ember (Nomád, Bölcs típus) | Állóképesség +5, Elsősegély +15, Helyismeret +10, Ismeret (bármilyen) +15, Érzékelés +10, Lopakodás +5, és kettő az alábbiak közül, egyenként +5-tel: Atlétika, Csónakázás, Járművezetés, Lovaglás vagy Úszás (az elsődleges közlekedési módtól függően) | Gyógyítás +10, Nyelv (bármilyen*) +10, Ismeret (bármilyen) +10 |
| Ember (Primitív, Harcos típus) | Erőfitogtatás +10, Állóképesség +10, Kitérés +10, Helyismeret +5, Érzékelés +10, Lopakodás +15, és egy az alábbiak közül: Atlétika, Csónakázás, Elsősegély vagy Úszás +10 | Túlélés +10, Nyomkövetés +10; és egy az alábbiak közül: Atlétika, Csónakázás, Elsősegély, Navigáció vagy Úszás +10 |
| Ember (Primitív, Bölcs típus) | Állóképesség +5, Kitérés +5, Elsősegély +15, Helyismeret +15, Érzékelés +15, Lopakodás +5, és egy az alábbiak közül: Atlétika, Csónakázás vagy Úszás +5 | Gyógyítás +10, Nyelv (bármilyen*) +10, Ismeret (bármilyen) +15 |
| Törpe | Atlétika +10, Erőfitogtatás +15, Állóképesség +10, Kitérés +10, Helyismeret +10, Érzékelés +5, Akaraterő +10 | Kereskedelem vagy Mechanizmusok +10, Mesterség (bármilyen) +10, Túlélés +10 |
| Elf | Rejtőzés +5, Befolyásolás +10, Észrevétel +10, Helyismeret +10, Érzékelés +15, Lopakodás +10, Akaraterő +10 | Túlélés +10, és kettő az alábbiak közül, +10-zel: Nyelv (bármilyen**), Ismeret (bármilyen) vagy Zenélés |
| Gnóm | Csalás +10, Kitérés +15, Észrevétel +10, Helyismeret +10, Érzékelés +5, Lopakodás +10, Akaraterő +10 | Kereskedelem +10, Mesterség (bármilyen) +10, Mechanizmusok vagy Túlélés +10 |
| Fél-elf (Elfek között nevelkedett) | Rejtőzés +10, Befolyásolás +10, Észrevétel +10, Helyismeret +10, Érzékelés +10, Lopakodás +10, Akaraterő +10 | Nyelv (bármilyen**) +10, Ismeret (bármilyen) +10, Zenélés vagy Túlélés +10 |
| Fél-elf (Emberek között nevelkedett) | Válassz egy megfelelő Ember gyorsválasztót |
| Fél-ork (Orkok között nevelkedett) | Atlétika +15, Erőfitogtatás +15, Állóképesség +15, Kitérés +10, Elsősegély +5, Helyismeret +5, Érzékelés +5 | Navigáció +10, Túlélés +10, Nyomkövetés +10 |
| Fél-ork (Emberek között nevelkedett) | Válassz egy megfelelő Ember gyorsválasztót |
| Félszerzet | Tánc vagy Éneklés +5, Kitérés +15, Észrevétel +5, Helyismeret +5, Érzékelés +15, Lopakodás +15, Akaraterő +15 | Mesterség (bármilyen) +10, Zenélés +5, Utcai tájékozottság +10 |

_* Az emberek nincsenek korlátozva a nyelvek kiválasztásában a karakteralkotás során, ha meg tudják indokolni a választást._

_** A karakteralkotás során a további nyelvek korlátozódnak a következőkre: gnóm, félszerzet, goblin, hobgoblin, ork és gnoll._


### Faji képzettségpont-vásárlás

Opcionálisan elkölthetsz pontokat egy adott karakterkoncepció testreszabására. Ez lehetővé teszi a személyre szabottabb karaktert, az idő rovására. A képzettségek alkalmazásakor kövesd az alábbi lépéseket:

- Válassz három Szakmai Képzettséget a felkínált lehetőségek közül (Lásd a [2. Fejezetet](0002_Culture_and_Races.md) a fajok leírásáért).
- Ossz el 100 pontot a felsorolt Általános Képzettségek és a választott Szakmai Képzettségek között, minden egyes ponttal 1%-kal növelve az adott képzettséget. A játékosok szabadon dönthetnek arról, mennyivel fejlesztik az egyes képzettségeket, de minden képzettségnek minimum 5%-ot kell kapnia, és nem kaphat többet 15%-nál.

---
## 6. Lépés: Kaszt

A Kaszt azt a karriert jelöli, amelybe a karakter a felnőttkorba lépés részeként belekezdett, és tovább határozza a karakter képzettségfejlődését.

A játékosok általában szabadon választhatnak, milyen Kaszttal szeretnének játszani, feltéve, hogy a Játékmester ezt megfelelőnek ítéli. A Kaszt leírások némi iránymutatást adnak az egyes faji/kulturális típusok számára elérhető gyakori Kasztokról. Ezeket közös reprezentációknak kell tekinteni, nem korlátozásoknak. A játékosok bátran játszhatnak bármilyen Kaszt/Faj kombinációval, amely a leginkább illik az elképzelésükhöz.

A faji/kulturális háttérhez hasonlóan, minden Kaszt lehetőséget kínál az adott foglalkozás által gyakran használt Általános és Szakmai Képzettségek körének fejlesztésére. A kulturális háttérrel ellentétben a karaktereknek nem kell minden elérhető képzettségre pontokat fordítaniuk, hanem testreszabhatják, melyeket veszik fel, mint a saját szerepükhöz vagy Kultúrájukhoz illőket.

### Kasztképzettség gyorsválasztók

Válassz egy Kaszt gyorsválasztót egy olyan képzettségválasztékért, amely hasznos az adott Kaszt számára. Nyugodtan cserélj pontokat, ha kívánod; azonban, bár a képzettség csökkenthető +0-ra, Alapszinten működve (beleértve a Szakmai Képzettségeket is), egyetlen képzettség sem rendelkezhet +15-nél nagyobb bónusszal. Ezek a képzettségek már tartalmazzák a Képességekből származó Kasztképzettség bónuszokat.

##### Kaszt gyorsválasztók táblázata

| Kaszt | Általános Képzettségek | Szakmai Képzettségek |
| :-- | :-- | :-- |
| Klerikus | Harci képzettség (Klerikus) +15; Elsősegély +5; Befolyásolás +5; Észrevétel +10; Akaraterő +15 | Csatornázás +15; Udvariasság +10; Odaadás (istenség) +15; Ismeret (Vallás) +5 és az egyik az alábbiak közül +5-tel: Nyelv (bármilyen), Ismeret (bármilyen) vagy Szónoklat |
| Harcos | Atlétika +10; Csónakázás vagy Lovaglás +5; Erőfitogtatás +15; Harci képzettség (Harcos) +20**; Állóképesség +15; Kitérés +10; Fegyvertelen harc +15** | Megfélemlítés +10; és kettő az alábbiak közül +5-tel: Szerencsejáték, Túlélés vagy Navigáció |
| Varázshasználó | Kitérés +10; Elsősegély +5; Befolyásolás +5; Észrevétel +5; Helyismeret +5; Érzékelés +5; Akaraterő +15 | Arkánum varázslás +15; Arkánum ismeretek +15; Nyelv (bármilyen) +5; Nyelv (bármilyen) vagy Ismeret (bármilyen) +5; Ismeret (Alkímia) +10 |
| Zsivány | Atlétika +15; Harci képzettség (Zsivány) +10; Csalás +5; Kitérés +15; Észrevétel +5; Érzékelés +5; Lopakodás +15 | Nyelv (Tolvajnyelv) +40***; Zárak feltörése +10; Mechanizmusok +10; és kettő az alábbiak közül +5-tel: Akrobatika, Színészet, Kereskedelem, Álca, Megfélemlítés, Csábítás, Ügyesség vagy Utcai tájékozottság |

_* Alapszinten megszerzett._

_** Tartalmaz egy +5-ös Harci jártasság bónuszt._

_*** Alapszinten megszerzett, +40%-os bónusszal alkalmazva._

### Kasztképzettség pontvásárlás

Opcionálisan elkölthetsz pontokat egy adott karakterkoncepció testreszabására. Ahogy fentebb, ez lehetővé teszi a személyre szabottabb karaktert, az idő rovására. Azok a karakterek, akik ezt a módszert használják, az alábbi módon fejlesztik Kasztképzettségeiket:

- Válassz legfeljebb 3 képzettséget az adott Kaszt számára elérhető Szakmai Képzettségek közül.
- Ossz el 100 pontot a Kaszt felsorolt Általános Képzettségei és a választott Szakmai Képzettségek között, minden egyes ponttal 1%-kal növelve az adott képzettséget. Nem kell minden elérhető képzettséget fejleszteni, de egyetlen képzettség sem kaphat 15%-nál nagyobb növelést. Egyes Kasztok 3-nál több Szakmai Képzettséget biztosítanak, de soha nem több pontot.
- Minden Kaszt tartalmaz egy Harci képzettséget, amely magában foglalja azokat a fegyvereket, amelyek használatában a Kaszt tipikusan kiképzett. Ez lehet akár csak 4 vagy 5 egyszerű fegyver, mint a varázshasználó esetében, vagy az összes fegyver és pajzs, mint a harcos esetében. Ahol a Harci képzettség szerepel az Általános Képzettségek listáján, az úgy is kezelendő, és fejleszthető Kasztképzettség pontokkal. Ahol a Harci képzettség hiányzik, mint a varázshasználó esetében, az csak a karakteralkotás 7. lépésében kapott Bónusz Képzettségpontok felhasználásával fejleszthető.

Az újonnan választott Szakmai Képzettségek és a Kaszt Harci képzettsége az Alapszintű Tulajdonságértékükön indulnak. A kulturális háttérrel korábban megszerzett Szakmai Képzettség választása egyszerűen lehetővé teszi a karakternek, hogy Kasztképzettség pontjainak egy részét ebben a szakaszban tovább alkalmazza. Néhány képzettség, mint a Mesterség, Nyelv vagy Ismeret, specializációs választási lehetőséget kínál. Ezekben az esetekben a választott specializációnak olyannak kell lennie, amely illik a karakter kultúrájához.

Bizonyos Kasztoknak több képzettség állhat rendelkezésükre, vagy többet választhatnak, mint mások. Ezt ellensúlyozza az a tény, hogy minden karakter ugyanabból a 100 pontból épül fel. Így egy több képzettséggel rendelkező karakternek a pontjait jobban szét kell osztania, tudva sokat egy kicsiről, míg egy olyan karakter, akinek kevesebb képzettség közül választhat, jobban specializálódik.

#### Megjegyzés a Kasztképességekről és a Rangról

Ne feledd, hogy minden Kaszt esetében a Kaszt speciális Képességeinek használatához vagy varázslatok elsütéséhez legalább _**40%-os képzettségi szint szükséges öt tetszőleges Kasztképzettségben**_. 50%-os vagy magasabb értéknél tekintesz kompetensnek egy képzettségben. Tehát az 1. rangra való jogosultsághoz a karakternek öt Kasztképzettséggel kell rendelkeznie 40%-os vagy magasabb szinten. A 2. ranghoz öt Kasztképzettség szükséges 70%-on, a 3. ranghoz négy Kasztképzettség 90%-on, és így tovább.

Egy karakter dönthet úgy, hogy a 0. rangon kezdi, ha nincs megfelelő képzettségi szintje, és játék közben éri el az 1. rangot, ha kívánja, de a varázslatok használatához vagy elsütéséhez ezeket az előfeltételeket teljesíteni kell.#### Harci Jártasság (ERŐ+ÜGY)

A Harci Jártasság a harchoz és a fegyverek használatához kapcsolódó jártasság. Ez egy szerteágazó jártasság, számos, az adott karakterosztályhoz kapcsolódó specializációval. A legtöbb harci hagyomány több, azonos típusú fegyver használatának oktatását, valamint azok hatékony használatához szükséges technikák elsajátítását is magában foglalja. Ezért a Harci Jártasság egy ernyőfogalom, amely a harc sok kapcsolódó aspektusát egyetlen képesség alá vonja össze, így nincs szükség több alkészség megvásárlására.

A Harci Jártasság alap-százalékértéke az ERŐ+ÜGY összegével egyenlő.

Mivel a legtöbb ember képes kézbe venni egy fegyvert, és ösztönösen sújtani, dobni vagy lőni vele, a Harci Jártasság Alap Jártasságnak minősül. A potenciálisan sokszínű jellegük miatt azonban külön kategóriákba sorolják és definiálják őket.

Minden karakter a választott osztálya részeként tanulja meg a Harci Jártasságát, a [3. Fejezetben](0003_Classes.md) leírtak szerint.

---
## 7. Lépés: Bónusz Jártasságpontok

Ebben a szakaszban minden karakter további „szabad” Jártasságpont-készletet kap a Tapasztalati Szintje alapján, amelyeket szétoszthat a meglévő jártasságai között. Ezek a pontok a karakter kerekebbé tételét szolgálják, érdeklődési körökkel vagy szakterületekkel bővítve azt. Az újonnan kezdő karakterek alapértelmezetten 100 pontos készlettel rendelkeznek, azzal a korlátozással, hogy jártasságonként legfeljebb 10 pont osztható ki. Ha a karakterek tapasztaltabbak, akkor a Jártasságpontok száma és a korlátozások eltérőek, ahogy azt a Tapasztalati Táblázat jelzi.

A Bónusz Jártasságpontok a következőképpen használhatók fel:

- Lehetővé teszik a karakter számára, hogy egy végső, új Szakmai Jártasságot válasszon ingyen, tükrözve egy személyes hobbit vagy érdeklődési kört.
- Alternatív megoldásként a karakter hozzáadhat egy új fegyvertípust a Harci Jártasságához.
- Vagy hozzáadhat egy +10-es bónuszt tíz különböző jártassághoz, vagy eloszthatja a pontokat közöttük, minden elköltött ponttal 1%-kal növelve az adott jártasságot. Egyetlen jártasság sem kaphat több pontot, mint amennyit a Tapasztalati Szintje jelez. Ha új Szakmai Jártasságot választ, pontokat kell hozzárendelnie.
- A választható hobbikivételtől eltekintve, nem rendelhetők pontok olyan Szakmai Jártasságokhoz, amelyeket a karakter nem a kultúrája vagy osztálya részeként tanult meg.

### Tapasztalt Karakterek Létrehozása

Ajánlott, hogy a kezdő karakterek frissen, 1. Rangon, kevés vagy semmilyen gyakorlati tapasztalattal induljanak. Természetesen a karakterek szintje nagyban függ a környezettől, és attól, hogy a játék egy rövid, egyszeri kaland lesz-e, vagy egy hosszú, folyamatos kampány. Gyakori az is, hogy a játékos tapasztaltabb karaktert hoz létre, ha egy játék közben elhunyt karaktert pótol, vagy egy meglévő kampányhoz csatlakozik.

Rendelkezésre áll egy táblázat, amely a tapasztalatot Tapasztalati Kategóriákra bontja. A karakter tapasztalata közvetlen összefüggésben áll az életkorral és a jártassági kompetenciával; a tapasztaltabb karakterek természetesen több élettapasztalattal rendelkeznek, mint fiatalabb társaik. A feltüntetett Életkor Bónuszt azonban hozzávetőlegesnek kell tekinteni, mivel a kampányok különböző ütemben haladnak – egyes kampányokban sok játékbeli idő telik el a kalandok között, míg mások egyetlen hosszú, megszakítás nélküli kalandsorozatból állnak. Meglévő karakter konvertálásakor egyszerűen helyettesítse a tényleges életkort az alább megjelölttel.

Ez a táblázat nem játékos karakterekre (NPC-k) is használható, függetlenül attól, hogy osztály vagy karrier alapján épültek-e fel, és ugyanazokat a szabályokat követi. Egy kivétel van: a karrier részeként felépített NPC-knek nincsenek különleges Képességeik, beleértve az extra Szerencsepontokat sem, amelyek kizárólag a játékos karakterek és a fontos nem játékos karakterek számára vannak fenntartva. Megjegyzendő, hogy a karrierként létrehozott kezdő NPC alapértelmezetten 1. Rangú.

##### Tapasztalati Táblázat

| Rang (Szint\*) | Életkor | Bónusz Jártasságpontok | Maximális Jártasságnövelés | Átlagos Jártasságszint\*\* | Fejlődés |
| :-- | :-: | :-: | :-: | :-: | :-: |
| 1. Rang (1-4): _Friss_ | Faj szerint | 100 | +10 | 40-60 | Bármely 5 Osztályjártasság 40%-on |
| 2. Rang (5-9): _Alacsony Szint_ | +1d6 | 300 | +30 | 65-75 | Bármely 5 Osztályjártasság 70%-on |
| 3. Rang (10-14): _Középszint_ | +1d6+5 | 500 | +50 | 85-95 | Bármely 4 Osztályjártasság 90%-on |
| 4. Rang (15-19): _Magas Szint_ | +1d6+10 | 700 | +70 | 105-115 | Bármely 3 Osztályjártasság 110%-on |
| 5. Rang (20+): _Eposzi Szint_ | +1d6+20 | 900 | +90 | 125-135 | Bármely 2 Osztályjártasság 130%-on |

_\* A zárójelben lévő szám mércéként használható a szintalapú játékokból származó meglévő karakterek konvertálásakor._

_\*\* Ez az adott osztály számára különösen fontos jártasságok átlagos jártasságszintje._

**Tapasztalati Táblázat Megjegyzések**

- A Rang egy durva leíró útmutató a különböző jártasságszintű karakterek összehasonlítására.
- Az életkor meghatározása a faj szerinti életkor kiszámításával és az esetleges bónuszok hozzáadásával történik. Ez inkább irányelv, mint szigorú szabály, mivel az idő kampányonként eltérően telik.
- A Bónusz Jártasságpontok határozzák meg, hány pontot kell a karakternek a jártasságok fejlesztésére költenie. Ez NEM kumulatív a korábbi rangok pontjaival. Például egy 2. Rangú karakter 300 ponttal épül fel, nem 300 ponttal, plusz az 1. Rang 100 pontjával.
- A Maximális Jártasságnövelés korlátozza, hogy a Bónuszpontok közül hány alkalmazható egyetlen jártasságra.
- Az Átlagos Jártasságszint mutatja a karakter legfontosabb osztályfüggő jártasságainak tipikus tartományát minden Tapasztalati Szinten. Referenciaként szolgál, és 16-os alapértékű Jellemzőket feltételez, az egyes lépések során elköltött maximális Jártasságpontokkal. A tényleges eredmények változhatnak.
- Fejlődés: Ez a megjelölt Rang eléréséhez szükséges Osztályjártasságok számát jelenti. Például a 3. Rang eléréséhez a vonatkozó osztályleírásban szereplő Osztályjártasságok közül bármelyik négynek legalább 90%-osnak kell lennie.

---
## 8. Lépés: Végezetül…

- Határozd meg a jellemvilágodat (Alignment) és a szenvedélyeidet (Passions) a választott kultúra/faj és osztály alapján. Lásd a [4. Fejezetet](0004_Alignment_and_Passions.md).
- Jegyezz fel minden kezdő Képességet a fajod és osztályod alapján.
- A Rangsorolt Képességek közül válassz egy 1. Rangú Osztályképességet, amelynek a feltételeit teljesíted, EXP-dobások költsége nélkül.
- Másold le a kezdő felszerelést az osztályleírásod végén jelzettek szerint.
- Ne felejts el nevet adni a karakterednek. Emellett, ha szeretnéd, keress módokat arra, hogy kapcsolatokat építs ki más karakterekkel.