# 1. Fejezet: Karakterek

Az alapkaraktert olyan különböző elemek sorozata határozza meg, amelyek leírják a karakter képességeit. Ezek az elemek:

- Jellemzők: például Erő vagy Karizma
- Attribútumok: olyan dolgok, mint a Magasság vagy a Mozgás
- Képességek: alapvető jártasságok

Ezeknek az elemeknek a többsége számokkal van leírva, és némelyikük másoktól függ, vagy mások alapján számítandó. Az egyes elemek jelentését és meghatározásuk módját az alábbi fejezetek írják le.

---
## 1. lépés: Karakterkoncepció

Jó kiindulópont, ha van elképzelésed arról, milyen karaktert szeretnél játszani; például egy edzett harcost vagy egy ravasz tolvajt. A karakterkoncepciódnak ebben a szakaszban nem kell kidolgozottnak lennie; elég egy ötlet, amely segít eligazodni bizonyos választásokban, mint például a Faj és az Osztály. Néhány karakterötletet felsorolunk a képzeleted beindításához.

- Fiatal, naiv mágiahasználó
- Rossz természetű félork harcos
- Túlzottan magabiztos félszerzet tolvaj
- Jámbor törpe pap

---
## 2. lépés: Jellemzők

Mindenkit hét Jellemző határoz meg, amelyek elmondanak valamit a karakteredről; milyen erős vagy gyors; milyen okos vagy egészséges. A Jellemzők minden _Classic Fantasy Imperative_ karakter magját képezik, és a legtöbb egyéb elem, például az Attribútumok és Képességek alapját adják. A hét Jellemző:

- Erő (STR)
- Alkotmány (CON)
- Méret (SIZ)
- Ügyesség (DEX)
- Intelligencia (INT)
- Erő (POW)
- Karizma (CHA)

A Jellemzők kiszámítása előtt az alábbi szakasz elmagyarázza, mit képvisel az egyes értékek.

#### Erő (STR)

A STR a fizikai erőt képviseli: mennyit tud valaki emelni, milyen erőset tud ütni, és így tovább. A STR a [Sebzésmódosító](0001_Characters.md?id=damage-modifier) (lásd az [Attribútumok](0001_Characters.md?id=step-3-attributes) szakaszt alább) egyik összetevője. Ha egy karakter STR-je nullára csökken, képtelen mozogni vagy tárgyakat emelni.

#### Alkotmány (CON)

A CON az egészség és az állóképesség mértéke. A CON összetevője a [Életerőpontok](0001_Characters.md?id=hit-points) és a [Gyógyulási arány](0001_Characters.md?id=healing-rate) meghatározásának (lásd alább). Ha a CON bármilyen okból nullára esik, a karakter meghal.

#### Méret (SIZ)

A SIZ a tömeget méri, és segít meghatározni a Magasságot és a Súlyt. A SIZ-t az [Életerőpontok](0001_Characters.md?id=hit-points) kiszámításához használják, mivel a nagyobb, nehezebb lények általában nagyobb tűrőképességgel bírnak a sérülésekkel szemben. A SIZ a karakter Sebzésmódosítójának meghatározására is használható, mivel a tömeg segít növelni az ütés erejét.

#### Ügyesség (DEX)

A mozgékonyságot, az egyensúlyt és a reflexeket a DEX méri. A [Kezdeményezés](0001_Characters.md?id=initiative) fontos szempontja. Ha egy karakter DEX-e nullára csökken, funkcionális bénulást szenved.

#### Intelligencia (INT)

Az INT a kognitív képességek mértéke. Az alacsonyabb INT értékkel rendelkezők nem feltétlenül ostobák, de valószínűleg korlátozottak abban, milyen kreatívan használják az eszüket. Az INT a [Kezdeményezés](0001_Characters.md?id=initiative) kiszámításának egyik tényezője. Ha az INT nullára csökken, a karakter teljesen esztelenné válik.

#### Erő (POW)

A POW a karakter lelkének, szellemének, belső hajtóerejének vagy a mágia iránti kapacitásának mérése. A POW szabályozza a karakter [Mágiapontjait](0001_Characters.md?id=magic-points) és [Szerencsepontjait](0001_Characters.md?id=luck-points). Ha egy karakter POW-ja valaha is nullára esik, elveszíti minden önálló akaratát.

#### Karizma (CHA)

A Karizma a személyiséget méri, és független a fizikai megjelenéstől. A CHA befolyásolja a karakter [Tapasztalat-módosítóját](0001_Characters.md?id=experience-modifier). Ha a CHA valaha is nullára csökken, a karakter már nem tud társadalmilag interakcióba lépni másokkal, olyan fájdalmasan félénkké vagy antiszociálissá válik, hogy figyelmen kívül hagyják vagy akár el is űzik.

---
### Jellemzők kiszámítása

Minden Jellemzőnek van egy numerikus értéke, amely meghatározza az erejét. Az egyes dobások után zárójelben lévő szám a faji átlag, és mércéül szolgál a karaktered eredményeinek értékeléséhez, amikor összehasonlítod őket fajának más tagjaival. A Jellemzők meghatározására vonatkozó javaslatok a következők:

- **Kockadobás:** Dobd a Faji Jellemzők Táblázatban jelzett kockákkal a STR, CON, SIZ, DEX, INT, POW és CHA értékeket, és vedd az egyes dobott eredményeket úgy, ahogy kijöttek. Mivel ezen dobások eredményei némileg véletlenszerűek lehetnek, gyakran jobb a karakterkoncepciót a dobások után eldönteni. Ellenkező esetben a végső Jellemzők kizárhatnak egy előre elképzelt szerepet. Dobj 3d6-tal STR, CON, DEX, POW és CHA esetén; majd 2d6+6-tal SIZ és INT esetén.
- **Kockadobás, Hozzárendelés:** Mint fentebb, kivéve, hogy a játékos kicserélheti az értékeket az azonos kockatartományú Jellemzők között. Például, amikor egy embert készítesz, a játékos cserélheti az értékeket a STR, CON, DEX, POW és CHA között, mivel osztoznak a 3d6-os tartományon, vagy a SIZ és INT között, amelyek osztoznak a 2d6+6-os tartományon — de mindig ugyanabból a kockatartomány-csoportból kell származniuk; nem válthatsz dobásokat az egyik csoportból a másikba.
- **Kockadobás, Magas:** Dobj egy extra kockát az előírtak szerint STR, CON, SIZ, DEX, INT, POW és CHA esetén, és dobd el a legalacsonyabb eredményt mindegyikből.
- **Pontelosztás:** A Jellemzők meghatározásához szükséges kockadobás helyett a játékosok egy előre beállított pontkészletből építik fel a karakterüket, amelynek mennyiségét a karakter faja határozza meg. Ez a módszer a legjobb azoknak a csoportoknak, akik tudják, mit akarnak játszani, és az építésüket egy adott Osztályhoz akarják igazítani. Bizonyos szabályok vonatkoznak a Pontelosztás opcióra:
  - Kezdj a hét Jellemző faji átlagával, ahogy az az alábbi kockatartományok után zárójelben szerepel.
  - Költs el további 10 pontot (emberek) vagy 6 pontot (fél-emberek) a Jellemzők növelésére.
  - Egy Jellemzőt csökkenthetsz is, hogy extra pontokat szerezz. Például csökkentsd a 11-es STR-t 9-re, hogy 2 pontot szerezz.
  - A Jellemzők nem lehetnek *alacsonyabbak*, mint a minimálisan lehetséges, vagy *magasabbak*, mint a maximálisan lehetséges érték az adott Jellemző számára, amit a kockadobási lehetőségei határoznak meg.

A Játékmesterek szabadon kitalálhatják saját módszereiket vagy pontértékeiket, ahogy kívánják.

A következő táblázat összefoglalja a fenti módszerek mindegyikéhez szükséges információkat. A kockatartományokat a Kockadobás módszereknél használják, míg a zárójelben lévő számokat a Pontelosztásnál.

##### Faji Jellemzők Táblázat

| Faj | Törpe | Elf | Gnóm |
| --- | --- | --- | --- |
| STR | 2d6+9 (16) | 2d6+4 (11) | 2d6+1 (8) |
| CON | 2d6+9 (16) | 3d6 (11) | 2d6+6 (13) |
| SIZ | 2d4+4 (9) | 2d6+4 (11) | 1d3+2 (4) |
| DEX | 3d6 (11) | 2d6+9 (16) | 3d6+2 (13) |
| INT | 2d6+6 (13) | 2d6+7 (14) | 2d6+8 (15) |
| POW | 3d6 (11) | 2d6+7 (14) | 2d6+7 (14) |
| CHA | 2d6+2 (9) | 3d6 (11) | 3d6 (11) |

| Faj | Fél-elf | Fél-ork | Félszerzet | Ember |
| --- | --- | --- | --- | --- |
| STR | 3d6 (11) | 2d6+9 (16) | 2d6+1 (8) | 3d6 (11) |
| CON | 3d6 (11) | 2d6+6 (13) | 2d6+7 (14) | 3d6 (11) |
| SIZ | 2d6+6 (13) | 2d6+9 (16) | 1d4+5 (8) | 2d6+6 (13) |
| DEX | 2d6+6 (13) | 3d6 (11) | 3d6+3 (14) | 3d6 (11) |
| INT | 2d6+6 (13) | 2d6+5 (12) | 2d6+6 (13) | 2d6+6 (13) |
| POW | 2d6+6 (13) | 3d6 (11) | 2d6+9 (16) | 3d6 (11) |
| CHA | 3d6 (11) | 2d6+1 (8) | 2d6+5 (12) | 3d6 (11) |

---
## 3. lépés: Attribútumok

Minden karakternek van egy sor attribútuma is. Ezek a Jellemzőkből származó vagy azok által meghatározott képességek, amelyek a játék bizonyos tényezőinek irányítására szolgálnak.

#### Akciópontok

Hogy milyen gyakran cselekedhet egy karakter egy [Harci körben](0008_Combat.md?id=combat-rounds), azt az Akciópontok határozzák meg. A kezdő karakterek 2 Akcióponttal indulnak, de többet szereznek, ahogy emelkedik a Rangjuk. A részletekért lásd a vonatkozó Osztályfejlesztési Táblázatokat az [Osztályok](0003_Classes.md) alatt.

#### Sebzésmódosító

Az a bónusz sebzésmennyiség, amelyet egy karakter okoz, amikor fizikailag üt vagy erőt fejt ki. Általában harci helyzetekben használják, de tárgyak összetörésekor is alkalmazható. A Sebzésmódosító egy extra kockadobás, amelyet vagy hozzáadnak, vagy kivonnak a fegyver vagy eszköz által okozott sebzésből. Ha egy negatív Sebzésmódosító a fegyver sebzését nullára vagy az alá csökkenti, akkor egyáltalán nem történt sebzés.

Add össze a STR-t és a SIZ-t, és nézd meg a Sebzésmódosító táblázatot:

##### Sebzésmódosító Táblázat

| STR+SIZ | Sebzésmódosító |
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
| Minden 10 pont | Folytasd a progressziót |

#### Tapasztalat-módosító

A játék során a karakterek fejlesztik képességeiket és jártasságaikat. Ezt Tapasztalatdobások használatával érik el, amelyeket részletesebben a [Játékrendszer](0007_Game_System.md?id=experience-rolls) szakasz magyaráz.

A karakter CHA értéke módosíthatja a Tapasztalatdobások számát, tükrözve a társaival való kapcsolatát és a közösségben szerzett hírnevét. Ha a CHA magas, az emberek hajlandóak segíteni a karakter képzésében vagy támogatásában, miközben oktatáson vesz részt. Ezzel szemben, ha a CHA különösen alacsony, nehézségekbe ütközhet a képességek javítása mások segítsége nélkül; például sparring-partner keresése.

##### Tapasztalat-módosító Táblázat

| CHA | Tap. Módosító |
| :-: | :-: |
| 6 vagy kevesebb | -1 |
| 7-12 | +0 |
| 13-18 | +1 |
| Minden 6 pont | +1 |

#### Gyógyulási arány

A sérülések elszenvedése után a karakternek regenerálódnia kell. A Gyógyulási arány határozza meg, milyen gyorsan épül fel természetes módon a sebekből. A sérülés súlyosságától függően (lásd a [Sebzés és Sebek](0007_Game_System.md?id=damage-and-wound-levels) szakaszt), a Gyógyulási arány jelzi, hány Életerőpont áll helyre naponta, hetente vagy havonta.

##### Gyógyulási arány Táblázat

| CON | Gyógyulási arány |
| :-: | :-: |
| 6 vagy kevesebb | 1 |
| 7-12 | 2 |
| 13-18 | 3 |
| Minden 6 pont | +1 |

#### Kelezdeményezés

Azt a pillanatot, amikor valaki reagál a harcban, a Kezdeményezés szabályozza. A Kezdeményezés módosítóként hat a kezdeményezés-dobásokra; minél magasabb a Kezdeményezés, annál gyorsabban reagál valaki harci helyzetben, meghatározva, mikor cselekedhet. További tényezők – például a páncél – módosítják. A [Harc](0008_Combat.md?) fejezet részletesebben foglalkozik azzal, hogyan használják a [Kezdeményezést](0008_Combat.md?id=initiative).

A Kezdeményezés a DEX és INT Jellemzők átlaga.

#### Szerencsepontok

A Szerencsepontok azt a furcsa erőt képviselik, amely megkülönbözteti a kalandozó hősöket a hétköznapi emberektől. Nevezheted sorsnak, karmának vagy egyszerű szerencsének. A Szerencsepontok használhatók:

- A kockák újradobására, ha kedvezőtlenek.
- Fizikai sérülések vagy más szerencsétlen körülmények enyhítésére.
- Előny szerzésére a harc döntő pillanataiban.

Azt, hogy pontosan hogyan és mikor használják őket, a [Szerencsepontok használata](0007_Game_System.md?id=using-luck-points) szakasz írja le. Amint egy Szerencsepont el lett költve, a készlet csökken; ha elfogytak a Szerencsepontok, több nem áll rendelkezésre – hacsak a Játékmester nem ad egy improvizált jutalmat – egészen a következő játékülésig, amikor is feltöltődnek a normál értékükre.

##### Szerencsepontok Táblázat

| POW | Szerencsepontok |
| :-: | :-: |
| 6 vagy kevesebb | 1 |
| 7-12 | 2 |
| 13-18 | 3 |
| Minden 6 pont | +1 |

_\* Az emberek egy extra Szerencseponttal kezdik, a fentieken felül._

_\*\* Minden karakter szerez egy extra Szerencsepontot minden új Rang elérésekor._

#### Mágiapontok

A _Classic Fantasy Imperative_-ban a misztikus képességek és elvarázsolt varázslatok általában a Mágiapontokra támaszkodnak. Mivel a mágia elérhetőségét korlátozhatja egy kampánybeállítás vagy specifikus mágikus szakmák, egyes karakterek számára ez az Attribútum feleslegesnek bizonyulhat.

Azok számára, akik képesek ilyen erőket használni, a karakter Mágiapontjai egyenlők a POW értékével. Ezeket a pontokat varázslatok leadására használják, amelyek költsége a használt mágia típusától függ. Amikor a varázslók kifogynak a Mágiapontokból, kimerítették a képességüket bármilyen varázslat leadására, amíg a Mágiapontok fel nem töltődnek.

#### Mozgási arány

Minden lénynek van Mozgási aránya – az a lábnyi távolság, amelyet egy adott időszak alatt megtehet. A mozgást nem a Jellemzőkből számítják, hanem egy alapérték, amely fajonként eltérő. Az emberek Alap Mozgási aránya 20 láb, bár bizonyos képességek ezt javíthatják. A [Mozgás](0008_Combat.md?id=movement) szakasz további részleteket kínál.

##### Mozgási arány Fajonkénti Táblázat

| Faj | Láb | Méter |
| :-- | :-: | :-: |
| Törpe | 15 | 4.5 |
| Elf | 20 | 6 |
| Gnóm | 15 | 4.5 |
| Fél-elf | 20 | 6 |
| Fél-ork | 20 | 6 |
| Félszerzet | 15 | 4.5 |
| Ember | 20 | 6 |

#### Életerőpontok

Az Életerőpontok azt képviselik, mennyi sérülést tud elviselni a test egy területe, mielőtt használhatatlanná válik, ami esetleg cselekvőképtelenséghez és végső soron a karakter halálához vezethet. Minden lény teste külön területekre oszlik – az embereknek például hét van; a fej, mellkas, has, karok és lábak – mindegyik területnek saját Életerőpontjaival.

Egyes lények, mint például a szörnyek vagy a különböző állatfajok, természetüknél fogva gyakran gyökeresen eltérő testfelépítéssel rendelkeznek, mégis minden területüknek van Életerőpontja. Amikor egy terület Életerőpontja a sérülések hatására egy bizonyos szintre csökken, akkor a karakter bizonyos következményeket szenved el, amelyek tükrözik a sérülés súlyosságát. A sebekkel kapcsolatos további információkért lásd a [Sebzés és Sebek](0007_Game_System.md?id=damage-and-wound-levels) szakaszt.

Az egyes területek Életerőpontjának kiszámításához add össze a CON-t és a SIZ-t, és nézd meg az eredményt az Életerőpont táblázatban. Minden karakter 1 extra Életerőpontot kap minden területen a 2. és 4. Rangnál.

##### Életerőpontok Területenkénti Táblázat

| Terület | CON+SIZ | | | | | | | | |
| :-- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| | 1–5 | 6–10 | 11–15 | 16–20 | 21–25 | 26–30 | 31–35 | 36–40 | +5 |
| Fej | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | +1 |
| Mellkas | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | +1 |
| Has | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | +1 |
| Minden kar | 1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | +1 |
| Minden láb | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | +1 |

---
## 4. lépés: Képességek

Alapértelmezés szerint minden karakter rendelkezik egy sor Alapképességgel, amelyek lehetővé teszik számára, hogy különböző cselekvéseket hajtson végre különböző fokú szakértelemmel. Ezek a képességek részletesebben a [Képességek](0005_Skills.md) fejezetben vannak leírva, de olyan mindennapi tevékenységeket és helyi ismereteket fednek le, amelyeket bárki használhat speciális képzés nélkül. A karakterkészítés ezen szakaszában a játékosoknak csak az egyes Alapképességek Alapszintjét kell ismerniük.

Minden Alapképesség alappontszámát két Jellemző összege vagy egyetlen Jellemző többszöröse határozza meg. Az érték a karakter veleszületett kompetenciáját képviseli az adott területen, gyakorlatilag a nyers tehetségét a kultúrája és szakmája részeként kapott bármilyen formáló képzés előtt.

Az Alapképességek Táblázata bemutatja, hogyan számítják ki az alapértékeket, valamint rövid leírást ad arról, mi az a képesség és mit csinál. A pontszám a képesség sikerességének százalékos esélyét jelenti; így egy 25-ös Atlétika pontszám 25%-ként fejeződik ki. Azt, hogy hogyan működnek a képességszázalékok, és a részletesebb képességleírásokat a [Képességek](0005_Skills.md) fejezet tartalmazza.

Megjegyzendő, hogy egyes képességek alap-százalékait mind a kultúra, mind a szakma módosítani fogja, így ezek a kezdő értékek a karakterkészítés előrehaladtával változni fognak.

##### Alapképességek Táblázat

| Képesség | Alapszázalék |
| :-- | :-: |
| Atlétika | STR+DEX |
| Csónakázás | STR+CON |
| Izomerő | STR+SIZ |
| Rejtőzés | DEX+POW |
| Szokások | INT x2, +40\* |
| Tánc | DEX+CHA |
| Megtévesztés | INT+CHA |
| Hajtás | DEX+POW |
| Állóképesség | CON x2 |
| Kitérés | DEX x2 |
| Elsősegély | INT+DEX |
| Befolyásolás | CHA x2 |
| Beleérzés | INT+POW |
| Helyismeret | INT x2 |
| Anyanyelv | INT+CHA, +40\* |
| Észlelés | INT+POW |
| Lovaglás | DEX+POW |
| Éneklés | CHA+POW |
| Lopakodás | DEX+INT |
| Úszás | STR+CON |
| Pusztakezes harc | STR+DEX |
| Akaraterő | POW x2 |

_\* Tartalmaz egy +40%-os statikus bónuszt mind a Szokások, mind a karakter Anyanyelve (embereknek Közös nyelv) esetében. Minden fél-ember faj beszélheti a Közös nyelvet +40%-on, az Anyanyelvük +40%-os bónusza mellett, ahogy az a megfelelő leírásukban szerepel._

---
## 5. lépés: Faj/Kultúra

A _Classic Fantasy Imperative_-ban a játékosok általában hat faj közül választhatnak karakterüknek: Ember, vagy a fél-ember fajok egyike (Törpe, Elf, Gnóm, Fél-elf, Fél-ork vagy Félszerzet). Ha ember, akkor karakterét tovább kell definiálnia három kulturális háttér egyikével: Barbár, Civilizált és Nomád. Az emberek esetében a kultúra határozza meg azt a társadalmat, amelyben a karakter felnőtt, és így előír bizonyos nézeteket és filozófiákat, amelyekkel rendelkezhet. Gyakorlatiasabban, a kultúra segít meghatározni azoknak a különböző képességeknek az értékeit, amelyek alakítják a karaktered általános képességeit. A fél-ember fajok általában egy faji kultúrából származnak, amely sokkal sztereotipikusabb az adott fajra nézve. További információkért lásd a [2. Fejezet](0002_Culture_and_Races.md) faji és kulturális leírásait.

Minden karakternek van Jelleme, amely egy Etikai és egy Morális Kódexből, valamint két vagy három Szenvedélyből áll. Némelyeknek lesz Esküje egy vallási rendhez, céhhez vagy szervezethez. Minden Osztály leírása megjegyzi az esetlegesen megkövetelt Jellemet vagy Esküket. Folytatás előtt nézd meg a fajodat a [2. Fejezetben](0002_Culture_and_Races.md), jegyezd fel a javasolt Jellemet és Szenvedélyeket, és ellenőrizd az [Osztályok](0003_Classes.md) szakaszt, hogy vannak-e Jellem- vagy Eskü-követelmények. Lásd a [4. Fejezetet, Jellem és Szenvedélyek](0004_Alignment_and_Passions.md), hogy meghatározd a Jellemedre, Szenvedélyeidre és Esküidre vonatkozó részleteket, ha vannak ilyenek.

Minden faj és kultúra felsorol különféle Alapképességeket, amelyeket a karakter az adott társadalomban végzett formáló fejlődése részeként tanul meg. Ezek alapvető képességek, amelyeket az ugyanabból a konkrét kultúrából származó összes karakter valamilyen mértékben fejleszt. A karakterek megtanulnak néhány speciális vagy ezoterikus Szakmai Képességet is, személyes érdeklődésüknek megfelelően.

A Szakmai Képességeket a [Képességek](0005_Skills.md) fejezet ismerteti részletesebben, de röviden, azok a képességek, amelyeket nem lehet megkísérelni évekig tartó szigorú tanulmányok és speciális képzés nélkül. Míg egy karakternek van alapvető képessége az összes Alapképességben, nulla képessége van bármely Szakmai Képességben, hacsak nem választotta azokat kulturális neveltetése vagy Osztálya részeként.

A választott Szakmai Képességek az Alapszintű Jellemző értékükkel indulnak, az Alapképességeknek megfelelően. Néhány Szakmai Képesség, mint például a Kézművesség, Nyelvek vagy Tudások, választási lehetőséget kínál a specializációra. Ezekben az esetekben a választott specializációnak olyannak kell lennie, amely illik az adott kultúrához.

### Faji Képesség Gyorsválasztók

A Gyorsválasztók a képességek átlagos választékát biztosítják, lehetővé téve a gyors karakterkészítést. Nyugodtan cserélj pontokat, ha szeretnél; azonban egyik képességnek sem lehet +5-nél kisebb vagy +15-nél nagyobb bónusza.

##### Faji Gyorsválasztók Táblázat

| Faj/Kultúra | Alapképességek | Szakmai Képességek |
| :-- | :-- | :-- |
| Ember (Barbár, Harcos típus) | Atlétika +10, Izomerő +10, Állóképesség +15, Elsősegély +5, Helyismeret +10, Észlelés +10, és vagy Csónakázás vagy Lovaglás +10 | Navigáció +10, Tengerészet vagy Túlélés +10, Nyomkövetés +10 |
| Ember (Barbár, Bölcs személy) | Atlétika +5, Állóképesség +5, Elsősegély +15, Helyismeret +15, Észlelés +15, és vagy Csónakázás vagy Lovaglás +10 | Gyógyítás +10, Nyelv (bármilyen\*) +10, Tudás (bármilyen) +15 |
| Ember (Civilizált, Utcai okos) | Rejtőzés +10, Megtévesztés +15, Hajtás +5, Befolyásolás +10, Beleérzés +10, Helyismeret +10, Akaraterő +10 | Kézművesség (bármilyen) +5, Kereskedelem +10, Utcai jártasság +15 |
| Ember (Civilizált, Könyvmoly) | Rejtőzés +5, Megtévesztés +5, Hajtás +5, Befolyásolás +10, Beleérzés +15, Helyismeret +15, Akaraterő +10 | Kereskedelem +10, Nyelv (bármilyen\*) vagy Tudás (bármilyen) +10, Tudás (bármilyen) vagy Zenélés +15 |
| Ember (Nomád, Harcos típus) | Állóképesség +10, Elsősegély +5, Helyismeret +5, Észlelés +10, Lopakodás +10, és kettő az alábbiak közül, +15-tel mindegyik: Atlétika, Csónakázás, Hajtás, Lovaglás vagy Úszás (az elsődleges utazási módtól függően) | Navigáció +10, Túlélés +10, Nyomkövetés +10 |
| Ember (Nomád, Bölcs személy) | Állóképesség +5, Elsősegély +15, Helyismeret +10, Tudás (bármilyen) +15, Észlelés +10, Lopakodás +5, és kettő az alábbiak közül, egyenként +5-tel: Atlétika, Csónakázás, Hajtás, Lovaglás vagy Úszás (az elsődleges utazási módtól függően) | Gyógyítás +10, Nyelv (bármilyen\*) +10, Tudás (bármilyen) +10 |
| Ember (Primitív, Harcos típus) | Izomerő +10, Állóképesség +10, Kitérés +10, Helyismeret +5, Észlelés +10, Lopakodás +15, és egy vagy Atlétika, Csónakázás, Elsősegély vagy Úszás +10 | Túlélés +10, Nyomkövetés +10; és egy vagy Atlétika, Csónakázás, Elsősegély, Navigáció vagy Úszás +10 |
| Ember (Primitív, Bölcs személy) | Állóképesség +5, Kitérés +5, Elsősegély +15, Helyismeret +15, Észlelés +15, Lopakodás +5, és egy vagy Atlétika, Csónakázás vagy Úszás +5 | Gyógyítás +10, Nyelv (bármilyen\*) +10, Tudás (bármilyen) +15 |
| Törpe | Atlétika +10, Izomerő +15, Állóképesség +10, Kitérés +10, Helyismeret +10, Észlelés +5, Akaraterő +10 | Kereskedelem vagy Mechanika +10, Kézművesség (bármilyen) +10, Túlélés +10 |
| Elf | Rejtőzés +5, Befolyásolás +10, Beleérzés +10, Helyismeret +10, Észlelés +15, Lopakodás +10, Akaraterő +10 | Túlélés +10, és kettő az alábbiak közül, +10-zel mindegyik: Nyelv (bármilyen\*\*), Tudás (bármilyen) vagy Zenélés |
| Gnóm | Megtévesztés +10, Kitérés +15, Beleérzés +10, Helyismeret +10, Észlelés +5, Lopakodás +10, Akaraterő +10 | Kereskedelem +10, Kézművesség (bármilyen) +10, Mechanika vagy Túlélés +10 |
| Fél-elf (Elf nevelés) | Rejtőzés +10, Befolyásolás +10, Beleérzés +10, Helyismeret +10, Észlelés +10, Lopakodás +10, Akaraterő +10 | Nyelv (bármilyen\*\*) +10, Tudás (bármilyen) +10, Zenélés vagy Túlélés +10 |
| Fél-elf (Ember nevelés) | Válassz egy megfelelő Ember Gyorsválasztót |
| Fél-ork (Ork nevelés) | Atlétika +15, Izomerő +15, Állóképesség +15, Kitérés +10, Elsősegély +5, Helyismeret +5, Észlelés +5 | Navigáció +10, Túlélés +10, Nyomkövetés +10 |
| Fél-ork (Ember nevelés) | Válassz egy megfelelő Ember Gyorsválasztót |
| Félszerzet | Tánc vagy Éneklés +5, Kitérés +15, Beleérzés +5, Helyismeret +5, Észlelés +15, Lopakodás +15, Akaraterő +15 | Kézművesség (bármilyen) +10, Zenélés +5, Utcai jártasság +10 |

_\* Az emberek nem korlátozottak a nyelvek kiválasztásában a karakterkészítés során, ha meg tudják indokolni a választást._

_\*\* A karakterkészítés során a további nyelvek a következőkre korlátozódnak: gnóm, félszerzet, goblin, hobgoblin, ork és gnoll._

### Faji Képesség Pontvásárlás

Választhatóan pontokat költhetsz egy specifikus karakterkoncepció testreszabására. Ez lehetővé teszi egy pontosabban beállított karakter létrehozását az idő rovására. A Képességek alkalmazásakor hajtsd végre a következő lépéseket:

- Válassz három Szakmai Képességet a kínált lehetőségekből (Lásd a [2. Fejezetet](0002_Culture_and_Races.md) a fajok leírásához).
- Oszd el a 100 pontot a felsorolt Alapképességek és a választott Szakmai Képességek között, minden egyes, a fejlesztésre költött ponttal 1%-kal növelve a képességet. A játékosok szabadon eldönthetik, mennyivel javítják az egyes képességeket, de minden képességnek legalább 5%-ot kell kapnia, és nem kaphat többet 15%-nál.

---
## 6. lépés: Osztály

Az Osztály azt a pályát képviseli, amelyre a karakter a felnőttkorba lépés részeként lépett, és ez tovább határozza meg a karakter képességfejlődését.

A játékosok általában szabadon választhatnak, milyen Osztályt szeretnének játszani, feltéve, hogy a Játékmester megfelelőnek találja. Az Osztály-leírások adnak némi útmutatást az egyes faji/kulturális típusok számára gyakori Osztályokról. Ezt közös ábrázolásoknak kell tekinteni, nem korlátozásoknak. A játékosok bátran játszhatnak bármilyen Osztály/Faj kombinációval, amely a legjobban illik az elképzelésükhöz.

A Faj/Kulturális hátterekhez hasonlóan minden Osztály lehetőséget kínál az adott foglalkozás által gyakran használt Alap- és Szakmai Képességek fejlesztésére. A kulturális háttértől eltérően a karaktereknek nem kell minden elérhető képességbe befektetniük a pontjaikat, hanem testre szabhatják, melyeket veszik fel, mint az adott szerepkörhöz vagy Kultúrához illőket.

### Osztály Képesség Gyorsválasztók

Válassz egy Osztály Gyorsválasztót az adott Osztály számára hasznos képességek átlagos választékához. Nyugodtan cserélj pontokat, ha szeretnél; azonban, bár a képesség csökkenthető +0-ra, Alapszinten működve (beleértve a Szakmai Képességeket is), egyik képességnek sem lehet +15-nél nagyobb bónusza. Ezek a képességek már tartalmazzák az Alapvető Képességek Osztály-képesség bónuszait.

##### Osztály Gyorsválasztók Táblázat

| Osztály | Alapképességek | Szakmai Képességek |
| :-- | :-- | :-- |
| Pap | Harci képesség (Pap) +15; Elsősegély +5; Befolyásolás +5; Beleérzés +10; Akaraterő +15 | Csatornázás +15; Udvariasság +10; Odaadás (istenség) +15; Tudás (Vallás) +5 és egy az alábbiak közül +5-tel: Nyelv (bármilyen), Tudás (bármilyen) vagy Szónoklás |
| Harcos | Atlétika +10; Csónakázás vagy Lovaglás +5; Izomerő +15; Harci képesség (Harcos) +20\*\*; Állóképesség +15; Kitérés +10; Pusztakezes harc +15\*\* | Megfélemlítés +10; és kettő az alábbiak közül +5-tel: Szerencsejáték, Túlélés vagy Navigáció |
| Mágiahasználó | Kitérés +10; Elsősegély +5; Befolyásolás +5; Beleérzés +5; Helyismeret +5; Észlelés +5; Akaraterő +15 | Arkánum varázslás +15; Arkánum tudás +15; Nyelv (bármilyen) +5; Nyelv (bármilyen) vagy Tudás (bármilyen) +5; Tudás (Alkímia) +10 |
| Tolvaj | Atlétika +15; Harci képesség (Tolvaj) +10; Megtévesztés +5; Kitérés +15; Beleérzés +5; Észlelés +5; Lopakodás +15 | Nyelv (Tolvajnyelv) +40\*\*\*; Zárfeltörés +10; Mechanika +10; és kettő az alábbiak közül +5-tel: Akrobatika, Színészet, Kereskedelem, Álcázás, Megfélemlítés, Csábítás, Ügyesség vagy Utcai jártasság |

_\* Alapszinten szerezve._

_\*\* Tartalmaz egy +5 Harci Jártassági bónuszt._

_\*\*\* Alapszinten szerezve, +40%-os bónusz alkalmazva._

### Osztály Képesség Pontvásárlás

Választhatóan pontokat költhetsz egy specifikus karakterkoncepció testreszabására. Mint fentebb, ez lehetővé teszi egy pontosabban beállított karakter létrehozását az idő rovására. Az ezzel a módszerrel élő karakterek a következő módon fejlesztik Osztály-képességeiket:

- Válassz legfeljebb 3 képességet az adott Osztály számára elérhető Szakmai Képességek közül.
- Oszd el a 100 pontot az Osztály felsorolt Alapképességei és a választott Szakmai Képességek között, minden egyes, a fejlesztésre költött ponttal 1%-kal növelve a képességet. Nem kell minden elérhető képességet fejleszteni, de egyetlen képesség sem kaphat 15%-nál nagyobb növelést. Egyes Osztályok 3-nál több Szakmai Képességet biztosítanak, de sosem több pontot.
- Minden Osztály tartalmaz egy Harci képességet, amely magában foglalja azokat a fegyvereket, amelyek használatában az Osztály tipikusan képzett. Ez lehet mindössze 4 vagy 5 egyszerű fegyver, mint a mágiahasználó esetében, vagy az összes fegyver és pajzs, mint a harcos esetében. Ahol a Harci képesség szerepel az Alapképességek listájában, az olyanként kezelendő, és fejleszthető Osztály Képességpontokkal. Ahol a Harci képesség hiányzik, mint a mágiahasználó esetében, az csak a karakterkészítés 7. lépésében kapott Bónusz Képességpontokkal fejleszthető.

Az újonnan választott Szakmai Képességek és az Osztály Harci képessége az Alapszintű Jellemző értékükről indulnak. A korábban kulturális háttéren keresztül megszerzett Szakmai Képesség választása egyszerűen lehetővé teszi a karakter számára, hogy Osztály Képességpontjainak egy részét alkalmazza ebben a szakaszban. Néhány ilyen képesség, mint a Kézművesség, Nyelv vagy Tudás, specializáció választását kínálja. Ezekben az esetekben a választott specializációnak olyannak kell lennie, amely illik a karakter kultúrájához.

Egyes Osztályoknak több képessége lehet, amiből választhatnak, vagy több képességet választhatnak, mint mások. Ezt ellensúlyozza, hogy minden karakter ugyanabból a 100 pontból épül fel. Így az a karakter, akinek több képessége van, kénytelen lesz szétosztani a pontjait, tudva egy keveset sok mindenről, míg az a karakter, akinek kevesebb képessége van, specializáltabb lesz.

#### Megjegyzés az Osztály-képességekről és Rangról

Ne feledd, hogy minden Osztály megköveteli legalább _**40%-os képességszintet bármely öt Osztály-képességben**_ az Osztály speciális Képességeinek kihasználásához vagy varázslatok leadásához. 50%-os vagy magasabb szinten tekintesz kompetensnek egy képességben. Tehát, az 1. Rang eléréséhez a karakternek legalább 40%-os szinttel kell rendelkeznie bármely öt Osztály-képességben. A 2. Rang megköveteli bármely öt Osztály-képességet 70%-on, a 3. Rang megköveteli bármely négy Osztály-képességet 90%-on, és így tovább.

A karakter dönthet úgy, hogy a 0. Rangon kezd, ha nem rendelkezik elegendő képességszinttel, és játék közben érheti el az 1. Rangot, ha akarja, de a varázslatok használatához vagy leadásához ezeket az előfeltételeket teljesíteni kell.

#### Harci képesség (STR+DEX)

A Harci képesség a harchoz és a fegyverek használatához kapcsolódó képesség. Sokszínű képesség, sok specializációval, amelyek az adott karakter Osztályához kapcsolódnak. A legtöbb harci hagyomány magában foglalja az azonos típusú fegyverek többségével való képzést, azokkal a technikákkal együtt, amelyek szükségesek mindegyik hatékony használatához. Ezért a Harci képesség egy ernyő, amely egyetlen képesség alá vonja a harc sok kapcsolódó aspektusát, megszüntetve a több alképesség megvásárlásának szükségességét.

A Harci képesség Alapszázaléka egyenlő a STR+DEX értékével.

Mivel a legtöbb ember képes kézbe venni egy fegyvert és ösztönösen lendíteni, dobni vagy lőni vele, a Harci képesség Alapképességnek tekintendő. Mégis, potenciálisan változatos természetük miatt, külön vannak kategorizálva és definiálva.

Minden karakter a választott Osztálya részeként tanulja meg a Harci képességét, ahogy azt a [3. Fejezet](0003_Classes.md) leírja.

---
## 7. lépés: Bónusz Képességpontok

Ebben a szakaszban minden karakter egy kiegészítő 'szabad' Képességpontkészletet kap a Tapasztalati szint alapján, amely elosztható a meglévő képességek között. Ezek azért vannak, hogy kerekítsék a karaktert, érdeklődési köröket vagy szakértelemi területeket adva hozzá. Az újonnan kezdő karakterek alapértelmezetten 100 pontos készlettel indulnak, képességenként legfeljebb 10 pont hozzárendelésének korlátjával. Ha a karakterek tapasztaltabbak, akkor a Képességpontok száma és a korlátozások eltérőek lesznek, ahogy az a Tapasztalati Táblázaton látható.

A Bónusz Képességpontok a következő módokon használhatók:

- Lehetővé teszik a karakter számára, hogy ingyenesen válasszon egy utolsó új Szakmai Képességet, tükrözve egy személyes hobbit vagy érdeklődési kört.
- Alternatívaként a karakter új fegyvertípust adhat a Harci képességéhez.
- Vagy +10 bónuszt adhatsz tíz különböző képességhez, vagy eloszthatod közöttük a pontokat, minden egyes, a fejlesztésre költött ponttal 1%-kal növelve a képességet. Egyetlen képesség sem kaphat több pontot, mint amennyit a Tapasztalati szintjük jelez. Ha új Szakmai Képességet választasz, pontokat kell hozzáadnod.
- A választható hobbispecializáción kívül semmilyen pont nem rendelhető olyan Szakmai Képességekhez, amelyeket nem a kultúrájuk vagy Osztályuk részeként tanultak.

### Tapasztalt karakterek készítése

Javasolt, hogy a kezdő karakterek frissen, az 1. Rangon kezdjenek, kevés vagy semmi gyakorlati tapasztalattal. Természetesen a karakterek szintje nagymértékben függ a beállítástól és attól, hogy a játék egy rövid egyedi kaland vagy egy hosszú távú kampány lesz-e. Gyakori, hogy a játékos tapasztaltabb karaktert készít, ha egy játékban elhunytat helyettesít, vagy egy meglévő kampányhoz csatlakozik.

Egy táblázat van biztosítva, amely a tapasztalatot Tapasztalati Kategóriákra bontja. A karakter tapasztalata közvetlen korrelációban áll az életkorral és a képességek kompetenciájával; a tapasztaltabb karaktereknek természetesen több élettapasztalatuk van, mint fiatalabb társaiknak. Azonban a jelzett Életkori Bónuszt hozzávetőlegesnek kell tekinteni, mivel a kampányok eltérő ütemben haladnak – egyes kampányokban sok játékidő telik el a kalandok között, míg mások egyetlen hosszú, megszakítás nélküli kalandot jelentenek. Egy meglévő karakter konvertálásakor egyszerűen helyettesítsd a tényleges életkort az alább jelölttel.

Ez a táblázat használható NPC-khez is, függetlenül attól, hogy Osztállyal vagy karrierrel készültek-e, és ugyanazokat a szabályokat követi. Van egy kivétel: a karrierként épített Nem Játékos Karaktereknek nincsenek speciális Képességeik, beleértve az extra Szerencsepontokat sem, amelyek csak a játékos karakterek és a fontos Nem Játékos Karakterek számára vannak fenntartva. Jegyezd meg, hogy egy karrierként épített kezdő NPC alapértelmezésben 1. Rangú.

##### Tapasztalati Táblázat

| Rang (Szint\*) | Életkor | Bónusz Képességpontok | Maximális Képességnövelés | Átlagos Képességszint\*\* | Fejlődés |
| :-- | :-: | :-: | :-: | :-: | :-: |
| 1. Rang (1-4): _Friss_ | Faj szerint | 100 | +10 | 40-60 | Bármely 5 Osztály-képesség 40%-on |
| 2. Rang (5-9): _Alacsony szint_ | +1d6 | 300 | +30 | 65-75 | Bármely 5 Osztály-képesség 70%-on |
| 3. Rang (10-14): _Középszint_ | +1d6+5 | 500 | +50 | 85-95 | Bármely 4 Osztály-képesség 90%-on |
| 4. Rang (15-19): _Magas szint_ | +1d6+10 | 700 | +70 | 105-115 | Bármely 3 Osztály-képesség 110%-on |
| 5. Rang (20+): _Epikus szint_ | +1d6+20 | 900 | +90 | 125-135 | Bármely 2 Osztály-képesség 130%-on |

_\* A zárójelben lévő szám mércéül szolgálhat, amikor létező karaktereket konvertálsz Szintalapú játékokból._

_\*\* Ez az adott Osztály számára különösen fontos képességek átlagos képességszintje._

**Tapasztalati Táblázat Megjegyzések**

- A Rang egy durva leíró útmutató a különböző képességszintű karakterek összehasonlításához.
- Az életkort a faj szerinti életkor kiszámításával és a jelzett bónusz hozzáadásával határozzák meg. Inkább irányelv, mint szigorú szabály, mivel az idő kampányról kampányra eltérően telik.
- A Bónusz Képességpontok határozzák meg, hány pontot kell költenie a karakternek képességek fejlesztésére. Ez NEM kumulatív a korábbi rangokéval. Például egy 2. Rangú karakter 300 ponttal épül, nem 300 ponttal, plusz az 1. Rang 100 pontjával.
- A Maximális Képességnövelés korlátozza, hogy a Bónuszpontok közül hány alkalmazható egyetlen képességre.
- Az Átlagos Képességszint mutatja a tipikus tartományt a karakter legfontosabb Osztályhoz kapcsolódó képességeihez minden Tapasztalati Szinten. Referencia céljából szerepel, és 16-os Alapszintű Jellemzőket feltételez, az egyes lépések során elköltött maximális Képességpontokkal. A tényleges eredmények változni fognak.
- Fejlődés: Ez a jelzett Rang eléréséhez szükséges Osztály-képességek számát képviseli. Például a 3. Rang eléréséhez a vonatkozó Osztály-leírásban jelzett bármely négy Osztály-képességnek legalább 90%-on kell lennie.

---
## 8. lépés: Végül…

- Határozd meg a Jellemedet és Szenvedélyeidet a választott Kultúra/Faj és Osztály alapján. Lásd a [4. Fejezetet](0004_Alignment_and_Passions.md).
- Jegyezz fel minden kezdő Képességet a fajodból és Osztályodból.
- A Rangsorolt Képességek alatt válassz egy 1. Rangú Osztály-képességet, amelynek követelményeit teljesíted, EXP dobások költsége nélkül.
- Másold le a kezdő felszerelést, ahogy az az Osztály-leírásod végén szerepel.
- Ne felejts el nevet adni a karakterednek. Ezenkívül keress lehetőségeket kapcsolatok kialakítására más karakterekkel, ha szeretnéd.