# 1. nodaļa: Tēli

Pamata tēlu nosaka virkne dažādu elementu, kas raksturo tēla spējas. Šie elementi ir:

- Raksturlielumi (Characteristics): tādi kā Spēks vai Harizma.
- Atribūti (Attributes): lietas kā Augums vai Kustība.
- Prasmes (Skills): zināšanas fundamentālās iemaņās.

Lielākā daļa šo elementu ir aprakstīti skaitliskā izteiksmē, un daži ir atkarīgi no citiem vai tiek aprēķināti, pamatojoties uz tiem. Tas, ko katrs elements nozīmē un kā tie tiek noteikti, ir aprakstīts turpmākajās sadaļās.

---
## 1. solis: Tēla koncepcija

Labs sākumpunkts ir iztēloties, kādu tēlu vēlaties spēlēt; piemēram, norūdītu karotāju vai viltīgu blēdi. Jūsu tēla koncepcijai šajā posmā nav jābūt sarežģītai; pietiek ar ideju, kas palīdzēs vadīties noteiktās izvēlēs, piemēram, Rase un Klase. Lai rosinātu iztēli, ir uzskaitītas dažas tēlu idejas:

- Jauns, naivs burvis
- Īgns pussorcim-karotājam
- Pārlieku pašpārliecināts krupjucilvēka (halfling) blēdis
- Dievbijīgs pundura garīdznieks

---
## 2. solis: Raksturlielumi

Katru tēlu nosaka septiņi raksturlielumi, kas stāsta par viņu; cik viņi ir spēcīgi vai ātri; cik gudri vai veselīgi. Raksturlielumi ir _Classic Fantasy Imperative_ tēla pamats, un uz tiem balstās vairums citu elementu, piemēram, Atribūti un Prasmes. Septiņi raksturlielumi ir:

- Spēks (STR)
- Konstitūcija (CON)
- Izmērs (SIZ)
- Veiklība (DEX)
- Intelekts (INT)
- Spēks/Griba (POW)
- Harizma (CHA)

Pirms raksturlielumu aprēķināšanas nākamajā sadaļā ir paskaidrots, ko katrs no tiem pārstāv.

#### Spēks (STR)

STR pārstāv fizisko spēku: cik daudz tēls var pacelt, cik spēcīgi var iesist utt. STR ir [Bojājuma modifikatora](0001_Characters.md?id=damage-modifier) sastāvdaļa (skat. [Atribūtu](0001_Characters.md?id=step-3-attributes) sadaļu zemāk). Ja tēla STR samazinās līdz nullei, viņš zaudē spēju pārvietoties vai celt priekšmetus.

#### Konstitūcija (CON)

CON ir veselības un izturības mērs. CON ir sastāvdaļa, nosakot [Dzīvības punktus](0001_Characters.md?id=hit-points) un [Dziedināšanas ātrumu](0001_Characters.md?id=healing-rate) (skat. zemāk). Ja CON jebkāda iemesla dēļ nokrītas līdz nullei, tēls mirst.

#### Izmērs (SIZ)

SIZ mēra masu un palīdz norādīt Augumu un Svaru. SIZ tiek izmantots, lai aprēķinātu [Dzīvības punktus](0001_Characters.md?id=hit-points), jo lielākas un smagākas būtnes mēdz būt izturīgākas pret bojājumiem. SIZ var izmantot arī, lai noteiktu tēla Bojājuma modifikatoru, jo masa palīdz palielināt sitiena spēku.

#### Veiklība (DEX)

DEX mēra veiklību, līdzsvaru un refleksus. Tas ir svarīgs [Iniciatīvas](0001_Characters.md?id=initiative) aspekts. Ja tēla DEX samazinās līdz nullei, viņš cieš no funkcionālas paralīzes.

#### Intelekts (INT)

INT ir kognitīvo spēju mērs. Tie, kuriem ir zemāks INT rādītājs, ne vienmēr ir stulbi, taču viņi, visticamāk, būs ierobežoti tajā, cik radoši var izmantot savu prātu. INT ir faktors [Iniciatīvas](0001_Characters.md?id=initiative) aprēķināšanā. Ja INT samazinās līdz nullei, tēls kļūst pilnīgi bezprātīgs.

#### Spēks/Griba (POW)

POW ir tēla dvēseles, gara, iekšējās dzinējspēka vai maģijas kapacitātes mērs. POW nosaka tēla [Maģijas punktus](0001_Characters.md?id=magic-points) un [Veiksmes punktus](0001_Characters.md?id=luck-points). Ja tēla POW kādreiz nokrītas līdz nullei, viņš zaudē visu neatkarīgo gribu.

#### Harizma (CHA)

Harizma mēra personību un ir neatkarīga no fiziskā izskata. CHA ietekmē tēla [Pieredzes modifikatoru](0001_Characters.md?id=experience-modifier). Ja CHA kādreiz nokrītas līdz nullei, tēls vairs nespēj sociāli mijiedarboties ar citiem, kļūstot tik mokoši kautrīgs vai antisociāls, ka viņš tiek ignorēts vai pat padzīts.

---
### Raksturlielumu aprēķināšana

Katram raksturlielumam ir skaitliska vērtība, kas nosaka tā potenciālu. Skaitlis iekavās pēc katra kauliņu metiena ir rasu vidējais rādītājs, un tas tiek izmantots kā mēraukla, lai novērtētu jūsu tēla rezultātus salīdzinājumā ar citiem viņa sugas pārstāvjiem. Ieteikumi raksturlielumu noteikšanai ietver:

- **Kauliņu metiens:** Metiet kauliņus, kas norādīti Rasu raksturlielumu tabulā STR, CON, SIZ, DEX, INT, POW un CHA, pieņemot katru izmesto rezultātu tādu, kāds tas ir. Tā kā šo metienu rezultāti var būt diezgan nejauši, bieži vien ir labāk izlemt par tēla koncepciju pēc tam, kad kauliņi ir mesti. Pretējā gadījumā galīgie raksturlielumi var liegt iepriekš iztēloto lomu. Metiet 3d6 STR, CON, DEX, POW un CHA; tad 2d6+6 SIZ un INT.
- **Kauliņu metiens, piešķiršana:** Kā iepriekš, izņemot to, ka spēlētājs var apmainīt vērtības starp raksturlielumiem ar vienādu kauliņu diapazonu. Piemēram, veidojot cilvēku, spēlētājs var mainīt vērtības starp STR, CON, DEX, POW un CHA, jo tie dala 3d6 diapazonu, vai starp SIZ un INT, kas dala 2d6+6 diapazonu — taču tiem vienmēr ir jābūt no vienas un tās pašas kauliņu diapazona grupas; jūs nevarat mainīt metienus no vienas grupas uz otru.
- **Kauliņu metiens, augstākais:** Metiet vienu papildu kauliņu, kā norādīts STR, CON, SIZ, DEX, INT, POW un CHA, un katram atmetiet zemāko rezultātu.
- **Punktu sadale:** Tā vietā, lai mestu kauliņus, lai noteiktu raksturlielumus, spēlētāji veido savu tēlu no iepriekš noteikta punktu kopuma, kura daudzumu nosaka tēla suga. Šī metode ir vislabākā grupām, kuras zina, ko vēlas spēlēt, un vēlas pielāgot savu uzbūvi konkrētai Klasei. Punktu sadales opcijai ir piemērojami noteikti noteikumi:
  - Sāciet ar rases vidējo rādītāju katram no septiņiem raksturlielumiem, kā atzīmēts iekavās pēc katra kauliņu diapazona zemāk.
  - Iztērējiet vēl 10 punktus (cilvēki) vai 6 punktus (puscilvēki/demi-humāni), lai palielinātu raksturlielumus.
  - Jūs varat arī samazināt raksturlielumu, lai iegūtu papildu punktus. Piemēram, samaziniet STR no 11 uz 9, lai iegūtu 2 punktus.
  - Raksturlielumi nevar būt *zemāki* par minimālo iespējamo vai *augstāki* par maksimālo iespējamo šim raksturlielumam, kā noteikts tā potenciālajā kauliņu metienā.

Spēļu meistari var brīvi nākt klajā ar savām metodēm vai punktu vērtībām.

Šī tabula apkopo informāciju, kas nepieciešama katrai no iepriekš minētajām metodēm. Kauliņu diapazoni tiek izmantoti abās Kauliņu metiena metodēs, savukārt iekavās esošie skaitļi tiek izmantoti Punktu sadalē.

##### Rasu raksturlielumu tabula

| Rase | Punduris | Elfs | Rūķis (Gnome) |
| --- | --- | --- | --- |
| STR | 2d6+9 (16) | 2d6+4 (11) | 2d6+1 (8) |
| CON | 2d6+9 (16) | 3d6 (11) | 2d6+6 (13) |
| SIZ | 2d4+4 (9) | 2d6+4 (11) | 1d3+2 (4) |
| DEX | 3d6 (11) | 2d6+9 (16) | 3d6+2 (13) |
| INT | 2d6+6 (13) | 2d6+7 (14) | 2d6+8 (15) |
| POW | 3d6 (11) | 2d6+7 (14) | 2d6+7 (14) |
| CHA | 2d6+2 (9) | 3d6 (11) | 3d6 (11) |

| Rase | Puselfs | Pussorcim | Krupjucilvēks | Cilvēks |
| --- | --- | --- | --- | --- |
| STR | 3d6 (11) | 2d6+9 (16) | 2d6+1 (8) | 3d6 (11) |
| CON | 3d6 (11) | 2d6+6 (13) | 2d6+7 (14) | 3d6 (11) |
| SIZ | 2d6+6 (13) | 2d6+9 (16) | 1d4+5 (8) | 2d6+6 (13) |
| DEX | 2d6+6 (13) | 3d6 (11) | 3d6+3 (14) | 3d6 (11) |
| INT | 2d6+6 (13) | 2d6+5 (12) | 2d6+6 (13) | 2d6+6 (13) |
| POW | 2d6+6 (13) | 3d6 (11) | 2d6+9 (16) | 3d6 (11) |
| CHA | 3d6 (11) | 2d6+1 (8) | 2d6+5 (12) | 3d6 (11) |

---
## 3. solis: Atribūti

Katram tēlam ir arī atribūtu kopums. Tās ir spējas, kas atvasinātas no raksturlielumiem vai to noteiktas, un tiek izmantotas, lai regulētu noteiktus spēles faktorus.

#### Darbības punkti (Action Points)

Tas, cik bieži tēls var rīkoties [Kaujas raunda](0008_Combat.md?id=combat-rounds) laikā, tiek noteikts ar Darbības punktiem. Sākotnējie tēli sāk ar 2 Darbības punktiem, bet iegūst vairāk, paaugstinoties Rangā. Sīkāku informāciju skatiet attiecīgajās Klases paaugstināšanas tabulās sadaļā [Klases](0003_Classes.md).

#### Bojājuma modifikators (Damage Modifier)

Papildu bojājuma apjoms, ko tēls nodara, fiziski sitot vai pielietojot spēku. Tas parasti tiek izmantots kaujas situācijās, bet to var izmantot arī, mēģinot salauzt objektus. Bojājuma modifikators ir papildu kauliņa metiens, kas tiek pievienots vai atņemts no ieroča vai rīka nodarītā bojājuma. Ja negatīvs Bojājuma modifikators samazina ieroča bojājumu līdz nullei vai mazāk, tad bojājums vispār netiek nodarīts.

Saskaitiet STR un SIZ un skatiet Bojājuma modifikatora tabulu:

##### Bojājuma modifikatora tabula

| STR+SIZ | Bojājuma modifikators |
| :-: | :-: |
| 5 vai mazāk | –1d8 |
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
| Katri 10 punkti | Turpināt progresiju |

#### Pieredzes modifikators

Spēles gaitā tēli uzlabo savas prasmes un spējas. Tas tiek panākts, izmantojot Pieredzes metienus, kas sīkāk izskaidroti sadaļā [Spēles sistēma](0007_Game_System.md?id=experience-rolls).

Tēla CHA rādītājs var koriģēt Pieredzes metienu skaitu, ko tēls iegūst, atspoguļojot attiecības, kādas viņam ir ar līdzcilvēkiem, un viņa reputāciju sabiedrībā. Ja CHA ir augsta, cilvēki labprāt veltīs laiku, lai palīdzētu apmācīt vai atbalstīt tēlu, kamēr viņš iziet apmācību. Un otrādi, ja CHA ir īpaši zema, var rasties grūtības uzlabot savas spējas bez citu palīdzības; piemēram, atrodot kādu, ar ko sparingot.

##### Pieredzes modifikatora tabula

| CHA | Pieredzes modifikators |
| :-: | :-: |
| 6 vai mazāk | -1 |
| 7-12 | +0 |
| 13-18 | +1 |
| Katri 6 punkti | +1 |

#### Dziedināšanas ātrums

Pēc ievainojumu gūšanas tēlam ir jāatveseļojas. Dziedināšanas ātrums nosaka, cik ātri viņi dabiski atkopjas no brūcēm. Atkarībā no ievainojuma smaguma (skat. sadaļu par [Bojājumiem un brūcēm](0007_Game_System.md?id=damage-and-wound-levels)), Dziedināšanas ātrums norāda, cik Dzīvības punkti tiek atgūti dienā, nedēļā vai mēnesī.

##### Dziedināšanas ātruma tabula

| CON | Dziedināšanas ātrums |
| :-: | :-: |
| 6 vai mazāk | 1 |
| 7-12 | 2 |
| 13-18 | 3 |
| Katri 6 punkti | +1 |

#### Iniciatīva

Brīdis, kurā kāds reaģē kaujā, tiek kontrolēts ar Iniciatīvu. Iniciatīva darbojas kā modifikators Iniciatīvas metieniem; jo augstāka Iniciatīva, jo ātrāk reaģē kaujas situācijā, nosakot, kad varat rīkoties. Citi faktori – piemēram, bruņas – to modificē. [Kaujas](0008_Combat.md?) nodaļā ir sīkāk aprakstīts, kā [Iniciatīva](0008_Combat.md?id=initiative) tiek izmantota.

Iniciatīva ir DEX un INT raksturlielumu vidējais rādītājs.

#### Veiksmes punkti (Luck Points)

Veiksmes punkti pārstāv to dīvaino spēku, kas atšķir piedzīvojumu meklētājus no ikdienas cilvēkiem. Sauciet to par likteni, karmu vai vienkāršu veiksmi. Veiksmes punktus var izmantot, lai:

- Pārmestu kauliņus, ja tie ir nelabvēlīgi.
- Mazinātu fiziskus bojājumus vai citus nelaimīgus apstākļus.
- Iegūtu pārsvaru izšķirošā kaujas brīdī.

Tieši tas, kā un kad tie tiek izmantoti, ir aprakstīts sadaļā [Veiksmes punktu izmantošana](0007_Game_System.md?id=using-luck-points). Tiklīdz Veiksmes punkts ir iztērēts, krājums samazinās; kad Veiksmes punkti ir beigušies, tie vairs nav pieejami – ja vien Spēļu meistars nepiešķir improvizētu balvu – līdz nākamajai spēles sesijai, kad tie atjaunojas līdz to normālajai vērtībai.

##### Veiksmes punktu tabula

| POW | Veiksmes punkti |
| :-: | :-: |
| 6 vai mazāk | 1 |
| 7-12 | 2 |
| 13-18 | 3 |
| Katri 6 punkti | +1 |

*\* Cilvēki sāk ar vienu papildu Veiksmes punktu papildus tam, kas parādīts augstāk.*

*\*\* Visi tēli iegūst papildu Veiksmes punktu, sasniedzot katru jaunu Rangu.*

#### Maģijas punkti (Magic Points)

Mistikas spējas un burvestības, kas tiek mestas _Classic Fantasy Imperative_, parasti balstās uz Maģijas punktiem. Tā kā maģijas pieejamība kampaņas iestatījumos vai konkrētās maģiskās profesijās var būt ierobežota, dažiem tēliem šis Atribūts būs lieks.

Tiem, kas var izmantot šādas spējas, tēla Maģijas punkti ir vienādi ar viņa POW. Šie punkti tiek izmantoti burvestību mešanai, kuru izmaksas ir atkarīgas no izmantotās maģijas veida. Kad burvjiem beidzas Maģijas punkti, viņi ir izsmēluši savu spēju mest jebkādas burvestības, līdz Maģijas punkti tiek atjaunoti.

#### Kustības ātrums

Katrai būtnei ir Kustības ātrums – pēdu skaits, ko var veikt noteiktā periodā. Kustība netiek aprēķināta no raksturlielumiem, bet ir noklusējuma vērtība, kas atšķiras atkarībā no sugas. Cilvēku bāzes kustības ātrums ir 20 pēdas, lai gan noteiktas prasmes to var uzlabot. Sadaļa par [Kustību](0008_Combat.md?id=movement) piedāvā sīkāku informāciju.

##### Kustības ātruma tabula pa rasēm

| Suga | Pēdas | Metri |
| :-- | :-: | :-: |
| Punduris | 15 | 4.5 |
| Elfs | 20 | 6 |
| Rūķis (Gnome) | 15 | 4.5 |
| Puselfs | 20 | 6 |
| Pussorcim | 20 | 6 |
| Krupjucilvēks | 15 | 4.5 |
| Cilvēks | 20 | 6 |

#### Dzīvības punkti (Hit Points)

Dzīvības punkti pārstāv to, cik daudz ievainojumu ķermeņa daļa var izturēt, pirms tā kļūst nelietojama, iespējams, izraisot darbnespēju un galu galā tēla nāvi. Katras būtnes ķermenis ir sadalīts atsevišķās vietās – cilvēkiem, piemēram, ir septiņas; galva, krūtis, vēders, rokas un kājas – katrai vietai ir savi Dzīvības punkti.

Dažām būtnēm, piemēram, briesmoņiem vai dažādām dzīvnieku klasēm, pēc savas būtības bieži ir radikāli atšķirīga ķermeņa uzbūve, tomēr katrai vietai, kas tām ir, joprojām ir Dzīvības punkti. Kad vietas Dzīvības punkti tiek samazināti līdz noteiktam līmenim jebkāda veida bojājumu rezultātā, tēls cieš noteiktas sekas, kas atspoguļo ievainojuma smagumu. Sīkāku informāciju par brūcēm skatiet sadaļā [Bojājumi un brūces](0007_Game_System.md?id=damage-and-wound-levels).

Lai aprēķinātu katras vietas Dzīvības punktus, saskaitiet CON un SIZ kopā un skatiet rezultātu Dzīvības punktu tabulā. Visi tēli iegūst 1 papildu Dzīvības punktu katrā vietā 2. un 4. Rangā.

##### Dzīvības punkti pēc vietas tabulas

| Vieta | CON+SIZ |  |  |  |  |  |  |  |  |
| :-- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  | 1–5 | 6–10 | 11–15 | 16–20 | 21–25 | 26–30 | 31–35 | 36–40 | +5 |
| Galva | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | +1 |
| Krūtis | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | +1 |
| Vēders | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | +1 |
| Katra roka | 1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | +1 |
| Katra kāja | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | +1 |

---
## 4. solis: Prasmes

Pēc noklusējuma katram tēlam ir Standarta prasmju klāsts, kas ļauj viņam veikt dažādas darbības ar dažādu ekspertīzes līmeni. Šīs prasmes ir sīkāk aprakstītas [Prasmju](0005_Skills.md) nodaļā, taču tās aptver virkni ikdienas darbību un vietējo zināšanu, kuras ikviens var izmantot bez specializētas apmācības. Šajā tēla izveides punktā spēlētājiem būs jāzina tikai katras Standarta prasmes Bāzes līmenis.

Katras Standarta prasmes pamata rādītājs tiek noteikts kā divu raksturlielumu summa vai viena raksturlieluma reizinājums. Vērtība atspoguļo tēla iedzimto kompetenci katrā jomā, faktiski viņa neapstrādāto talantu pirms jebkādas formatīvās apmācības, kas saņemta kā daļa no viņa kultūras un profesijas.

Standarta prasmju tabulā parādīts, kā tiek aprēķinātas pamata vērtības, kā arī sniegts īss apraksts par to, kas ir prasme un ko tā dara. Rezultāts atspoguļo prasmju panākumu procentuālo iespējamību; tātad Vieglatlētikas rādītājs 25 tiek izteikts kā 25%. Tas, kā darbojas prasmju procenti un sīkāki prasmju apraksti, ir sniegti [Prasmju](0005_Skills.md) nodaļā.

Ņemiet vērā, ka dažu prasmju pamata procentuālos rādītājus modificēs gan kultūra, gan profesija, tāpēc šīs sākuma vērtības mainīsies, tēla izveidei turpinoties.

##### Standarta prasmju tabula

| Prasme | Pamata procenti |
| :-- | :-: |
| Vieglatlētika (Athletics) | STR+DEX |
| Laivošana (Boating) | STR+CON |
| Muskuļi (Brawn) | STR+SIZ |
| Slēpšana (Conceal) | DEX+POW |
| Muitas (Customs) | INT x2, +40\* |
| Deja (Dance) | DEX+CHA |
| Viltība (Deceit) | INT+CHA |
| Braukšana (Drive) | DEX+POW |
| Izturība (Endurance) | CON x2 |
| Izvairīšanās (Evade) | DEX x2 |
| Pirmā palīdzība (First Aid) | INT+DEX |
| Ietekme (Influence) | CHA x2 |
| Ieskats (Insight) | INT+POW |
| Vietējās zināšanas (Locale) | INT x2 |
| Dzimtā valoda | INT+CHA, +40\* |
| Uztvere (Perception) | INT+POW |
| Jāšana (Ride) | DEX+POW |
| Dziedāšana (Sing) | CHA+POW |
| Maskēšanās (Stealth) | DEX+INT |
| Peldēšana (Swim) | STR+CON |
| Cīņa bez ieročiem (Unarmed) | STR+DEX |
| Gribasspēks (Willpower) | POW x2 |

_\* Ietver statisku +40% bonusu gan Muitai, gan tēla Dzimtajai valodai (kopīgā/Common valoda cilvēkiem). Katra pus-cilvēku rase var runāt Kopīgajā valodā ar +40%, papildus savai Dzimtajai valodai ar +40%, kā sīkāk aprakstīts attiecīgajos aprakstos._

---
## 5. solis: Rase/Kultūra

_Classic Fantasy Imperative_ spēlētāji parasti var izvēlēties vienu no sešām rasēm saviem tēliem: Cilvēks vai kāda no pus-cilvēku rasēm (Punduris, Elfs, Rūķis, Puselfs, Pussorcim vai Krupjucilvēks). Ja tēls ir cilvēks, viņiem tālāk ir jādefinē savs tēls ar vienu no trim kultūras foniem; Barbars, Civilizēts un Nomads. Cilvēkiem kultūra nosaka sabiedrības veidu, kurā tēls tika audzināts, un tādējādi nosaka noteiktus uzskatus un filozofiju, kas viņiem varētu būt. Praktiskāk runājot, kultūra palīdz noteikt to dažādo prasmju vērtības, kas veido jūsu tēla vispārējās spējas. Pus-cilvēku rases parasti nāk no rasu kultūras, kas ir daudz stereotipiskāka par rasi kopumā. Sīkāku informāciju skatiet [2. nodaļas](0002_Culture_and_Races.md) rasu un kultūru aprakstos.

Visiem tēliem ir Orientācija (Alignment), kas sastāv no viena ētiskā un viena morālā koda, kā arī divām vai trim Kaislībām (Passions). Dažiem būs Zvērests (Oath) reliģiskam ordenim, ģildei vai organizācijai. Katrā Klases aprakstā ir norādīta jebkāda nepieciešamā Orientācija vai Zvēresti. Pirms turpināt, atrodiet savu rasi [2. nodaļā](0002_Culture_and_Races.md) un pierakstiet ieteikto Orientāciju un Kaislības, kā arī pārbaudiet [Klašu](0003_Classes.md) sadaļu, lai redzētu, vai ir kādas Orientācijas vai Zvēresta prasības. Skatiet [4. nodaļu, Orientācija un kaislības](0004_Alignment_and_Passions.md), lai noteiktu jebkādas specifikas attiecībā uz jūsu Orientāciju, Kaislībām un Zvērestiem, ja tādi ir.

Katra rase un kultūra uzskaita dažādas Standarta prasmes, kuras tēls apgūst kā daļu no sava formatīvā attīstības procesa šajā sabiedrībā. Tās ir galvenās spējas, kuras visi tēli no vienas un tās pašas specifiskās kultūras zināmā mērā uzlabo. Tēli arī apgūst dažas specializētas vai ezotēriskas Profesionālās prasmes atbilstoši savām personīgajām interesēm.

Profesionālās prasmes ir sīkāk izskaidrotas [Prasmju](0005_Skills.md) nodaļā, taču īsumā tās pārstāv tās prasmes, kuras nevar mēģināt bez gadiem ilgas rūpīgas studēšanas un specializētas apmācības. Kamēr tēlam ir pamata spējas visās Standarta prasmēs, viņam nav spēju nevienā Profesionālajā prasmē, ja vien tās nav izvēlētas kā daļa no kultūras audzināšanas vai Klases.

Izvēlētās Profesionālās prasmes sāk ar to Bāzes līmeņa raksturlieluma vērtību, kā noteikts Standarta prasmēm. Dažas Profesionālās prasmes, piemēram, Amatniecība, Valodas vai Zināšanas, piedāvā specializācijas izvēli. Šādos gadījumos izvēlētajai specialitātei jābūt tādai, kas atbilst šai kultūrai.

### Rasu prasmju ātrā izvēle

Ātrā izvēle sniedz vidēju prasmju atlasi, ļaujot ātri izveidot tēlu. Jūtieties brīvi apmainīt punktus, ja vēlaties; tomēr nevienai prasmei nevar būt mazāks par +5 vai lielāks par +15 bonusu.

##### Rasu ātrās izvēles tabula

| Rase/Kultūra | Standarta prasmes | Profesionālās prasmes |
| :-- | :-- | :-- |
| Cilvēks (Barbars, Karotāja tips) | Vieglatlētika +10, Muskuļi +10, Izturība +15, Pirmā palīdzība +5, Vietējās zināšanas +10, Uztvere +10 un vai nu Laivošana vai Jāšana +10 | Navigācija +10, Jūrniecība vai Izdzīvošana +10, Pēdošana +10 |
| Cilvēks (Barbars, Gudrais) | Vieglatlētika +5, Izturība +5, Pirmā palīdzība +15, Vietējās zināšanas +15, Uztvere +15 un vai nu Laivošana vai Jāšana +10 | Dziedināšana +10, Valoda (jebkura\*) +10, Zināšanas (jebkuras) +15 |
| Cilvēks (Civilizēts, Ielu gudrais) | Slēpšana +10, Viltība +15, Braukšana +5, Ietekme +10, Ieskats +10, Vietējās zināšanas +10, Gribasspēks +10 | Amatniecība (jebkura) +5, Tirdzniecība +10, Ielu zināšanas +15 |
| Cilvēks (Civilizēts, Grāmatu gudrais) | Slēpšana +5, Viltība +5, Braukšana +5, Ietekme +10, Ieskats +15, Vietējās zināšanas +15, Gribasspēks +10 | Tirdzniecība +10, Valoda (jebkura\*) vai Zināšanas (jebkuras) +10, Zināšanas (jebkuras) vai Muzikalitāte +15 |
| Cilvēks (Nomads, Karotāja tips) | Izturība +10, Pirmā palīdzība +5, Vietējās zināšanas +5, Uztvere +10, Maskēšanās +10 un divas no sekojošām, katra +15: Vieglatlētika, Laivošana, Braukšana, Jāšana vai Peldēšana (atkarībā no primārā pārvietošanās veida) | Navigācija +10, Izdzīvošana +10, Pēdošana +10 |
| Cilvēks (Nomads, Gudrais) | Izturība +5, Pirmā palīdzība +15, Vietējās zināšanas +10, Zināšanas (jebkuras) +15, Uztvere +10, Maskēšanās +5 un divas no sekojošām, katra +5: Vieglatlētika, Laivošana, Braukšana, Jāšana vai Peldēšana (atkarībā no primārā pārvietošanās veida) | Dziedināšana +10, Valoda (jebkura\*) +10, Zināšanas (jebkuras) +10 |
| Cilvēks (Primitīvs, Karotāja tips) | Muskuļi +10, Izturība +10, Izvairīšanās +10, Vietējās zināšanas +5, Uztvere +10, Maskēšanās +15 un viena no sekojošām: Vieglatlētika, Laivošana, Pirmā palīdzība vai Peldēšana +10 | Izdzīvošana +10, Pēdošana +10; un viena no sekojošām: Vieglatlētika, Laivošana, Pirmā palīdzība, Navigācija vai Peldēšana +10 |
| Cilvēks (Primitīvs, Gudrais) | Izturība +5, Izvairīšanās +5, Pirmā palīdzība +15, Vietējās zināšanas +15, Uztvere +15, Maskēšanās +5 un viena no sekojošām: Vieglatlētika, Laivošana vai Peldēšana +5 | Dziedināšana +10, Valoda (jebkura\*) +10, Zināšanas (jebkuras) +15 |
| Punduris | Vieglatlētika +10, Muskuļi +15, Izturība +10, Izvairīšanās +10, Vietējās zināšanas +10, Uztvere +5, Gribasspēks +10 | Tirdzniecība vai Mehānismi +10, Amatniecība (jebkura) +10, Izdzīvošana +10 |
| Elfs | Slēpšana +5, Ietekme +10, Ieskats +10, Vietējās zināšanas +10, Uztvere +15, Maskēšanās +10, Gribasspēks +10 | Izdzīvošana +10 un divas no sekojošām, katra +10: Valoda (jebkura\*\*), Zināšanas (jebkuras) vai Muzikalitāte |
| Rūķis (Gnome) | Viltība +10, Izvairīšanās +15, Ieskats +10, Vietējās zināšanas +10, Uztvere +5, Maskēšanās +10, Gribasspēks +10 | Tirdzniecība +10, Amatniecība (jebkura) +10, Mehānismi vai Izdzīvošana +10 |
| Puselfs (Audzināts kā Elfs) | Slēpšana +10, Ietekme +10, Ieskats +10, Vietējās zināšanas +10, Uztvere +10, Maskēšanās +10, Gribasspēks +10 | Valoda (jebkura\*\*) +10, Zināšanas (jebkuras) +10, Muzikalitāte vai Izdzīvošana +10 |
| Puselfs (Audzināts kā Cilvēks) | Izvēlieties atbilstošu Cilvēka ātro izvēli |
| Pussorcim (Audzināts kā Orc) | Vieglatlētika +15, Muskuļi +15, Izturība +15, Izvairīšanās +10, Pirmā palīdzība +5, Vietējās zināšanas +5, Uztvere +5 | Navigācija +10, Izdzīvošana +10, Pēdošana +10 |
| Pussorcim (Audzināts kā Cilvēks) | Izvēlieties atbilstošu Cilvēka ātro izvēli |
| Krupjucilvēks | Deja vai Dziedāšana +5, Izvairīšanās +15, Ieskats +5, Vietējās zināšanas +5, Uztvere +15, Maskēšanās +15, Gribasspēks +15 | Amatniecība (jebkura) +10, Muzikalitāte +5, Ielu zināšanas +10 |

_\* Cilvēki nav ierobežoti valodu izvēlē tēla izveides laikā, ja viņi var pamatot savu izvēli._

_\*\* Tēla izveides laikā papildu valodas ir ierobežotas ar rūķu, krupjucilvēku, goblinu, hobgoblinu, orku un gnollu valodām._


### Rasu prasmju punktu pirkšana

Pēc izvēles jūs varat tērēt punktus, lai pielāgotu konkrētu tēla koncepciju. Tas ļauj izveidot precīzāk pielāgotu tēlu uz laika rēķina. Piemērojot prasmes, veiciet šādas darbības:

- Izvēlieties trīs Profesionālās prasmes no piedāvātajām opcijām (Sīkāku informāciju par rasu aprakstiem skatiet [2. nodaļā](0002_Culture_and_Races.md)).
- Sadaliet 100 punktus starp uzskaitītajām Standarta prasmēm un izvēlētajām Profesionālajām prasmēm, palielinot šo prasmi par 1% par katru punktu, kas iztērēts tās uzlabošanai. Spēlētāji var brīvi izvēlēties, cik katra prasme tiek uzlabota, taču katra prasme ir jāsaņem vismaz 5% un nevar saņemt vairāk par 15%.

---
## 6. solis: Klase

Klase pārstāv karjeru, uz kuru tēls ir uzsācis ceļu kā daļu no pārejas uz pilngadību, un tā vēl vairāk definē tēla prasmju attīstību.

Spēlētājiem parasti ir brīva izvēle izvēlēties, kādu Klasi viņi vēlas spēlēt, pieņemot, ka Spēļu meistars to uzskata par piemērotu. Klases apraksti sniedz norādes par kopīgajām Klasēm, kas pieejamas katram rases/kultūras tipam. Tas būtu jāuzskata par biežākajiem piemēriem, nevis ierobežojumiem. Spēlētājiem vajadzētu justies brīvi spēlēt jebkuru Klases/Rases kombināciju, kas vislabāk atbilst viņu redzējumam.

Tāpat kā Rases/Kultūras foni, katra Klase piedāvā iespēju uzlabot virkni Standarta un Profesionālo prasmju, kuras parasti izmanto šī profesija. Atšķirībā no kultūras foniem, tēliem nav jāiegulda savi punkti katrā pieejamajā prasmē, bet viņi var izvēlēties, kuras no tām tiek ņemtas kā tās, kas atbilst viņu konkrētajai lomai vai Kultūrai.

### Klases prasmju ātrā izvēle

Izvēlieties Klases ātro izvēli vidējai prasmju atlasei, kas noderīga attiecīgajai Klasei. Jūtieties brīvi apmainīt punktus, ja vēlaties; tomēr, lai gan prasmi var samazināt līdz +0, darbojoties Bāzes līmenī (ieskaitot Profesionālās prasmes), neviena prasme nevar saņemt vairāk par +15 bonusu. Šīs prasmes jau ietver jebkādus Klases prasmju bonusus no Spējām.

##### Klases ātrās izvēles tabula

| Klase | Standarta prasmes | Profesionālās prasmes |
| :-- | :-- | :-- |
| Garīdznieks | Kaujas prasme (Garīdznieks) +15; Pirmā palīdzība +5; Ietekme +5; Ieskats +10; Gribasspēks +15 | Kanāls +15; Pieklājība +10; Dedzība (dieviība) +15; Zināšanas (Reliģija) +5 un viena no sekojošām +5: Valoda (jebkura), Zināšanas (jebkuras) vai Oratorija |
| Karotājs | Vieglatlētika +10; Laivošana vai Jāšana +5; Muskuļi +15; Kaujas prasme (Karotājs) +20\*\*; Izturība +15; Izvairīšanās +10; Cīņa bez ieročiem +15\*\* | Iebiedēšana +10; un divas no sekojošām +5: Azartspēles, Izdzīvošana vai Navigācija |
| Burvis | Izvairīšanās +10; Pirmā palīdzība +5; Ietekme +5; Ieskats +5; Vietējās zināšanas +5; Uztvere +5; Gribasspēks +15 | Arkanā buršana +15; Arkanās zināšanas +15; Valoda (jebkura) +5; Valoda (jebkura) vai Zināšanas (jebkuras) +5; Zināšanas (Alķīmija) +10 |
| Blēdis | Vieglatlētika +15; Kaujas prasme (Blēdis) +10; Viltība +5; Izvairīšanās +15; Ieskats +5; Uztvere +5; Maskēšanās +15 | Valoda (Zagļu slengs) +40\*\*\*; Slēdzeņu uzlaušana +10; Mehānismi +10; un divas no sekojošām +5: Akrobātika, Aktierspēle, Tirdzniecība, Maskēšanās, Iebiedēšana, Seducija, Veiklība vai Ielu zināšanas |

_\* Iegūts Bāzes līmenī._

_\*\* Ietver +5 Kaujas prasmju bonusu._

_\*\*\* Iegūts Bāzes līmenī, piemērots +40% bonuss._

### Klases prasmju punktu pirkšana

Pēc izvēles jūs varat tērēt punktus, lai pielāgotu konkrētu tēla koncepciju. Kā iepriekš, tas ļauj izveidot precīzāk pielāgotu tēlu uz laika rēķina. Tēli, izmantojot šo metodi, attīsta savas Klases prasmes šādi:

- Izvēlieties līdz 3 prasmēm no Profesionālajām prasmēm, kas pieejamas šai Klasei.
- Sadaliet 100 punktus starp Klases uzskaitītajām Standarta prasmēm un izvēlētajām Profesionālajām prasmēm, palielinot katru prasmi par 1% par katru punktu, kas iztērēts tās uzlabošanai. Visas pieejamās prasmes nav jāuzlabo, taču neviena atsevišķa prasme nevar saņemt vairāk par 15% palielinājumu. Dažas Klases piešķir vairāk nekā 3 Profesionālās prasmes, bet nekad vairāk punktu.
- Visas Klases ietver Kaujas prasmi, kas aptver ieročus, kuru lietošanā Klase parasti ir apmācīta. Tas var būt tik maz kā 4 vai 5 vienkārši ieroči, kā tas ir burvja gadījumā, līdz visiem ieročiem un vairogiem, kā tas ir karotāja gadījumā. Kur Kaujas prasme ir iekļauta Standarta prasmju sarakstā, tā tiek uzskatīta par tādu un to var uzlabot ar Klases prasmju punktiem. Kur Kaujas prasme ir izlaista, kā tas ir burvja gadījumā, to var uzlabot tikai, izmantojot Bonusa prasmju punktus tēla izveides 7. solī.

Tikko izvēlētās Profesionālās prasmes un Klases Kaujas prasme sākas to Bāzes līmeņa raksturlieluma vērtībā. Izvēloties Profesionālo prasmi, kas iepriekš iegūta kultūras fona dēļ, vienkārši ļauj tēlam tālāk pielietot dažus savus Klases prasmju punktus šajā posmā. Dažas no šīm prasmēm, piemēram, Amatniecība, Valoda vai Zināšanas, piedāvā specializācijas izvēli. Šādos gadījumos izvēlētajai specialitātei jābūt tādai, kas atbilst tēla kultūrai.

Dažām Klasēm var būt vairāk prasmju, no kurām izvēlēties, vai arī tās var izvēlēties vairāk prasmju nekā citas. Tas ir līdzsvarots ar to, ka visi tēli joprojām tiek veidoti ar vieniem un tiem pašiem 100 punktiem. Tātad tēls ar vairāk prasmēm beigās būs spiests sadalīt savus punktus plānāk, zinot nedaudz par daudz ko, un tēls, kuram ir mazāk prasmju, no kurām izvēlēties, beigās būs vairāk specializējies.

#### Piezīme par Klases spējām un Rangu

Paturiet prātā, ka visām Klasēm ir nepieciešams prasmju līmenis vismaz _**40% jebkurās piecās Klases prasmēs**_, lai izmantotu šīs Klases īpašās Spējas vai mestu burvestības. Jūs tiekat uzskatīts par kompetentu prasmē, ja tā ir 50% vai augstāk. Tātad, lai kvalificētos 1. Rangam, tēlam ir jābūt piecām Klases prasmēm 40% vai augstāk. 2. Rangs prasa piecas Klases prasmes 70% līmenī, 3. Rangs prasa četras Klases prasmes 90% līmenī utt.

Tēls var izvēlēties sākt 0. Rangā, ja viņam nav pietiekamu prasmju līmeņu, un spēles laikā sasniegt 1. Rangu, ja vēlas, bet, lai varētu izmantot vai mest burvestības, šīm priekšnoteikumiem ir jābūt izpildītiem.

#### Kaujas prasme (STR+DEX)

Kaujas prasme ir prasme, kas saistīta ar cīņu un ieroču lietošanu. Tā ir daudzveidīga prasme ar daudzām specializācijām, kas saistītas ar attiecīgo tēla Klasi. Lielākā daļa cīņas tradīciju ietver apmācību vairākos viena veida ieročos, kā arī tehnikas, kas nepieciešamas, lai tos visus efektīvi izmantotu. Tāpēc Kaujas prasme ir lietussargs, kas apvieno daudzus saistītus cīņas aspektus vienā spējā, novēršot nepieciešamību iegādāties vairākas apakšprasmes.

Kaujas prasmei ir Bāzes procentuālā vērtība, kas vienāda ar STR+DEX.

Tā kā lielākā daļa cilvēku var paņemt ieroci un instinktīvi ar to vai nu sist, mest vai šaut, Kaujas prasme tiek uzskatīta par Standarta prasmi. Tomēr to potenciāli daudzveidīgās dabas dēļ tās ir kategorizētas un definētas atsevišķi.

Visi tēli apgūst savu Kaujas prasmi kā daļu no izvēlētās Klases, kā aprakstīts [3. nodaļā](0003_Classes.md).

---
## 7. solis: Bonusa prasmju punkti

Šajā posmā katrs tēls iegūst papildu "brīvo" Prasmju punktu krājumu, pamatojoties uz Pieredzes līmeni, kurus var sadalīt starp esošajām prasmēm. Tie tiek nodrošināti, lai papildinātu tēlu, pievienojot intereses vai ekspertīzes jomas. Svaigiem iesācēju tēliem noklusējums ir 100 punktu krājums ar ierobežojumu piešķirt ne vairāk kā 10 punktus vienā prasmē. Ja tēli ir pieredzējušāki, tad Prasmju punktu skaits un ierobežojumi atšķirsies, kā norādīts Pieredzes tabulā.

Bonusa prasmju punkti tiek izmantoti šādos veidos:

- Ļauj tēlam iespēju izvēlēties vienu pēdējo jaunu Profesionālo prasmi bez maksas, atspoguļojot personīgo vaļasprieku vai interesi.
- Alternatīvi, tēls var pievienot jaunu ieroča veidu savai Kaujas prasmei.
- Vai nu pievienojiet +10 bonusu desmit dažādām prasmēm, vai sadaliet punktus starp tām, palielinot katru prasmi par 1% par katru punktu, kas iztērēts tās uzlabošanai. Neviena atsevišķa prasme nevar saņemt vairāk punktu, nekā norādīts to Pieredzes līmenī. Ja izvēlaties jaunu Profesionālo prasmi, jums tai ir jāpievieno punkti.
- Izņemot izvēles vaļasprieka specialitāti, punktus nedrīkst piešķirt Profesionālajām prasmēm, kas nav apgūtas kā daļa no to kultūras vai Klases.

### Pieredzējušu tēlu izveide

Ieteicams, lai iesācēju tēli sāktu svaigi, 1. Rangā, ar maz vai nemaz praktiskās pieredzes. Protams, tēlu līmenis būs ļoti atkarīgs no iestatījuma un no tā, vai spēle būs īss vienreizējs piedzīvojums vai ilgstoša kampaņa. Tāpat ir ierasts, ka spēlētājs izveido pieredzējušāku tēlu, ja aizstāj kādu, kurš ir gājis bojā spēles gaitā, vai pievienojoties esošai kampaņai.

Ir sniegta tabula, kas sadala pieredzi Pieredzes kategorijās. Tēla Pieredzei ir tieša korelācija ar vecumu un prasmju kompetenci; pieredzējušākiem tēliem dabiski ir vairāk dzīves pieredzes nekā viņu jaunākajiem līdzbiedriem. Tomēr atzīmētais Vecuma bonuss būtu jāuzskata par aptuvenu, jo kampaņas attīstās dažādos ātrumos – dažās kampaņās starp piedzīvojumiem paej liels spēles laiks, kamēr citas ir viena gara nepārtrauktu piedzīvojumu virkne. Konvertējot esošu tēlu, vienkārši aizstājiet faktisko vecumu ar to, kas norādīts zemāk.

Šo tabulu var izmantot arī NPC (spēles meistara tēliem), neatkarīgi no tā, vai tie ir veidoti, izmantojot Klasi vai karjeru, un tai seko tie paši noteikumi. Ir viens izņēmums: NPC, kas veidoti kā daļa no karjeras, nav nekādu īpašu Spēju, ieskaitot papildu Veiksmes punktus, kuri ir rezervēti tikai spēlētāju tēliem un nozīmīgiem NPC. Ņemiet vērā, ka sākuma NPC, kas veidots kā karjera, pēc noklusējuma ir 1. Rangā.

##### Pieredzes tabula

| Rangs (Līmenis\*) | Vecums | Bonusa prasmju punkti | Maksimālais prasmju palielinājums | Vidējais prasmju līmenis\*\* | Paaugstināšana |
| :-- | :-: | :-: | :-: | :-: | :-: |
| 1. Rangs (1-4): _Svaigs_ | Pēc sugas | 100 | +10 | 40-60 | Jebkuras 5 Klases prasmes 40% |
| 2. Rangs (5-9): _Zems līmenis_ | +1d6 | 300 | +30 | 65-75 | Jebkuras 5 Klases prasmes 70% |
| 3. Rangs (10-14): _Vidējais līmenis_ | +1d6+5 | 500 | +50 | 85-95 | Jebkuras 4 Klases prasmes 90% |
| 4. Rangs (15-19): _Augsts līmenis_ | +1d6+10 | 700 | +70 | 105-115 | Jebkuras 3 Klases prasmes 110% |
| 5. Rangs (20+): _Episkais līmenis_ | +1d6+20 | 900 | +90 | 125-135 | Jebkuras 2 Klases prasmes 130% |

_\* Iekavās esošo skaitli var izmantot kā mērauklu, konvertējot esošus tēlus no uz līmeņiem balstītām spēlēm._

_\*\* Šis ir vidējais prasmju līmenis jebkurām prasmēm, kas ir īpaši svarīgas attiecīgajai Klasei._

**Pieredzes tabulas piezīmes**

- Rangs ir aptuvens aprakstošs ceļvedis, lai salīdzinātu dažāda prasmju līmeņa tēlus.
- Vecums tiek noteikts, aprēķinot vecumu atbilstoši sugai un pievienojot jebkādu atzīmēto bonusu. Tas ir vairāk kā vadlīnija, nevis ciets un ātrs noteikums, jo laiks katrā kampaņā rit citādi.
- Bonusa prasmju punkti nosaka, cik punktu tēlam jāiztērē prasmju attīstīšanai. Tas NAV kumulatīvs ar iepriekšējo rangu punktiem. Piemēram, 2. Ranga tēls tiek veidots ar 300 punktiem, nevis 300 punktiem plus 100 no 1. Ranga.
- Maksimālais prasmju palielinājums ierobežo, cik daudz Bonusa punktu var tikt piemērots jebkurai vienai Prasmei.
- Vidējais prasmju līmenis parāda tipisko diapazonu tēla svarīgākajām ar Klasi saistītajām prasmēm katrā Pieredzes līmenī. Tas ir iekļauts atsauces nolūkos un pieņem Bāzes līmeņa raksturlielumus 16, ar maksimāliem Prasmju punktiem, kas iztērēti katrā solī. Faktiskie rezultāti atšķirsies.
- Paaugstināšana: Tas pārstāv Klases prasmju skaitu, kas nepieciešams, lai sasniegtu atzīmēto Rangu. Piemēram, lai sasniegtu 3. Rangu, jebkurām četrām no Klases prasmēm, kas norādītas attiecīgajā Klases aprakstā, jābūt vismaz 90%.

---
## 8. solis: Visbeidzot…

- Nosakiet savu Orientāciju un Kaislības, pamatojoties uz izvēlēto Kultūru/Rasi un Klasi. Skatiet [4. nodaļu](0004_Alignment_and_Passions.md).
- Pierakstiet jebkādas Sākuma spējas no savas Rases un Klases.
- Zem Ranga spējām izvēlieties vienu 1. Ranga Klases spēju, kuras prasības jūs izpildāt, bez izmaksām EXP metienos.
- Nokopējiet sākuma aprīkojumu, kā norādīts jūsu Klases apraksta beigās.
- Neaizmirstiet dot savam tēlam vārdu. Tāpat meklējiet veidus, kā izveidot savienojumus ar citiem tēliem, ja vēlaties.