# Documento di Riferimento del Sistema Classic Fantasy Imperative

Versione 1.0, Settembre 2023

_Classic Fantasy Imperative_ è una versione Open, COS licenza ORC, del regolamento di _Mythras_, focalizzata sull'esplorazione di dungeon, grandi avventure e scontri carichi di tensione che coinvolgono tesori, magia e nemici letali. _Classic Fantasy Imperative_ emula l'emozione originale del primissimo gioco di ruolo del settore, ma lo affronta attraverso la lente del sistema di gioco _Mythras_, che si basa su 1d100 (o percentuale), anziché utilizzare un d20.

Questo documento offre un insieme di regole completo, sebbene non esaustivo, che include la creazione dei personaggi, le razze e le classi dei personaggi, le abilità, le regole per alcune situazioni tipiche, il combattimento e la magia – più che sufficienti per far iniziare sia i giocatori che i Game Master e formare una solida base per un ulteriore sviluppo. _Classic Fantasy_ è completamente compatibile COS _Classic Fantasy Imperative_, le regole base di _Mythras_ e _Mythras Imperative_. Inoltre, è compatibile COS altri sistemi di gioco percentuali COS licenza ORC.

---
## Licenza ORC

_Classic Fantasy Imperative_ è pubblicato utilizzando la Licenza ORC. La Licenza ORC fornisce un modo per i creatori di giochi di condividere apertamente le meccaniche del proprio gioco e consente agli utenti a valle di utilizzare, modificare e ricondividere liberamente gli adattamenti di tali meccaniche di gioco.

Ciò che viene condiviso apertamente sotto la ORC è noto come **Materiale Concesso in Licenza (Licensed Material)** e include gli elementi funzionali generali del gioco, come blocchi statistiche, regole di gioco, attributi del personaggio, metodi e sistemi intrinseci al gioco, nonché qualsiasi altra cosa che il licenziante desideri esplicitamente condividere. La licenza è ampia e ti consente di utilizzare i Materiali Concessi in Licenza a livello globale in relazione a libri stampati, videogiochi, podcast, IA o qualsiasi altra tecnologia che possa esistere o essere creata in futuro. La stragrande maggioranza del contenuto presente in _Classic Fantasy Imperative_ costituisce Materiale Concesso in Licenza.

Ciò che non viene condiviso sotto la ORC è noto come **Materiale Riservato (Reserved Material)** e include marchi, ambientazioni, archi narrativi, personaggi distintivi e arte visiva. Abbiamo elencato il Materiale Riservato nell'Avviso ORC, di seguito.

Sotto la Licenza ORC puoi utilizzare, condividere, adattare e costruire sul Materiale Concesso in Licenza come meglio credi, a condizione che tu fornisca un'attribuzione appropriata sotto forma di avviso nel tuo lavoro pubblicato. Questo avviso attribuisce sia i licenzianti a monte e il loro contributo al lavoro, sia fornisce un modo semplice per gli utenti a valle di accreditare l'autore del lavoro in cui appare l'avviso. Utilizzando materiale concesso in licenza sotto la ORC, accetti automaticamente di concedere in licenza le tue meccaniche di gioco nel tuo lavoro pubblicato secondo gli stessi termini. Se sviluppi il tuo Materiale Riservato, quello è di tua esclusiva proprietà.

#### Avviso ORC

_Classic Fantasy Imperative_ è concesso in licenza sotto la Licenza ORC situata presso la Library of Congress e disponibile online in varie posizioni, inclusi [Paizo.com](https://paizo.com/community/blog/v5748dyo6sico?ORC-License-The-Final-Version-is-Here) e altri.

Tutte le garanzie sono declinate come ivi stabilito.

#### Attribuzione

Questo prodotto si basa sul seguente Materiale Riservato:

- _Mythras_, The Design Mechanism Copyright 2016, scritto da Pete Nash e Lawrence Whitaker
- _Classic Fantasy Imperative_, The Design Mechanism Copyright 2016, scritto da Rodney Leary, Pete Nash e Lawrence Whitaker

Se utilizzi il nostro Materiale Concesso in Licenza nelle tue opere pubblicate, ti preghiamo di accreditarci come segue:

_**Basato su Classic Fantasy Imperative, scritto da Rodney Leary, Pete Nash e Lawrence Whitaker, e pubblicato da The Design Mechanism, Copyright 2023**_

#### Materiale Riservato

Si noti che i giochi madre di _Classic Fantasy Imperative_, _Classic Fantasy_ e _Mythras_, pubblicati da The Design Mechanism, sono designati come Materiale Riservato sotto la licenza ORC.

Se desideri attingere a contenuti presenti in _Classic Fantasy Imperative_ o _Mythras_, contatta The Design Mechanism riguardo alla separata Mythras Gateway License, che consente di accedere al Materiale Riservato, libero da royalty, ma COS alcune condizioni riguardanti approvazioni e attribuzione.

I seguenti sono considerati anch'essi Materiale Riservato:

- _Classic Fantasy_ e _Classic Fantasy Imperative_ – come nome, salvo quando usato nell'attribuzione, incluso il relativo logo.
- _Mythras_ e _Mythras Imperative_ – come nome, salvo quando usato nell'attribuzione, inclusi i relativi loghi.
- Tutte le illustrazioni presenti in _Classic Fantasy Imperative_
- _Alexandra the Pious_
- _Barony of Ostwyn_
- _Barony of Volstad_
- _County of Thale_
- _Grand Duchy of Bethany_
- _Grand Duchy of Pelende_
- _Greymyr_
- _Inwils Isle_
- _Inwils the Sage_
- _King Korac of Norsgard_
- _Lilly Tanglefoot_
- _Lorissa of Stormholm_
- _Miranda Drake_
- _Mystamyr_
- _Mystamyr and the Borderlands_
- _Rengarth Hightower_
- _Runewood Forest_
- _Sorack Blackwolf_
- _Tashana Moonshadow_
- _The Dunfel Inn_
- _Faewood Vale_
- _The Elven Lands of Lorendel_
- _The Iron Kingdom of the Dwarves_
- _The Island Nations of Valencia_
- _The Kingdom of Greymyr_
- _The Northern Territories of Norsgard_
- _The Orc Blight Mountains_
- _The Pharaonic Lands of Aegypt_
- _The Shattered Territories_
- _The Shenzhou Monastery_
- _The Spider Wald_
- _The Undead Realms of Ravenholm_
- _The War-Torn Hinterlands_
- _The World of Areath_
- _Town of Dunfel_
- _Valamir Drake_

---
## Nuovo del d100?

_Classic Fantasy Imperative_ è un sistema d100 o percentuale. I dadi percentuali, o 1d100, vengono utilizzati per risolvere azioni chiave: uso delle abilità, combattimento, lancio di incantesimi e così via. È un sistema "roll-under", il che significa che il numero bersaglio è espresso come percentuale (Atletica 65%, per esempio), e sia il Game Master che il giocatore cercano di ottenere un risultato uguale o inferiore a questo numero bersaglio, usando 1d100, per ottenere un Successo. È abbastanza facile sostituire il 1d100 COS un d20 se preferito, e tutte le percentuali possono essere divise per 5 (arrotondando per eccesso) per ottenere il numero bersaglio per un tiro di d20. Atletica 65% diventerebbe Atletica 13, nel nostro esempio. Tuttavia, il 1d100 offre una grande quantità di flessibilità e sfumature che sostengono l'intero gioco, quindi il nostro consiglio è di provare prima l'approccio 1d100. Sebbene possa sembrare controintuitivo dover tirare _meno_ di qualcosa (in molti giochi, solitamente è meglio ottenere di più!), avere un numero bersaglio espresso come un intervallo percentuale entro cui tirare rende facile e semplice vedere le proprie possibilità di successo, e consente parecchi "trucchi COS i dadi", come i Tiri Contrapposti, i Critici, i Fallimenti Critici e alcune altre cose esplorate più avanti in queste regole. Il gioco di ruolo percentuale esiste da molto tempo ed è un sistema di gioco solidamente stabilito COS una meccanica di base collaudata che è flessibile, intuitiva e tende a svanire sullo sfondo durante il gioco.

---
## Semplificazione

I possessori di lunga data di _Mythras_ e _Classic Fantasy_ noteranno che in alcuni punti le regole di _Classic Fantasy Imperative_ sono state semplificate. Questo è stato fatto in modo che un Game Master possa introdurre più rapidamente il gioco ai nuovi giocatori COS un minimo di complicazioni. Un'altra area in cui _Classic Fantasy Imperative_ differisce è nell'incorporare le misure Imperiali anziché quelle metriche. Incorporare entrambe occupa troppo spazio e richiederebbe tabelle multiple quando si ha a che fare COS Armi a Gittata e simili. Il sistema Imperiale è stato scelto semplicemente per facilitare l'uso delle innumerevoli mappe tattiche già esistenti e per rendere più semplice la conversione di avventure da altri sistemi di gioco che utilizzano le misure Imperiali. Quando compili la tua Scheda del Personaggio, sentiti libero di utilizzare le Tabelle di Conversione nell'Appendice, e qualsiasi sistema di misurazione trovi più utile e familiare.

---
## Arrotondamento di Numeri e Risultati

In alcune occasioni ti sarà richiesto di dividere dei numeri: tipicamente il valore in un'abilità (come per determinare un Successo Critico, che è 1/10 del valore dell'abilità). Ogni volta che un risultato di divisione crea una frazione, arrotonda sempre per eccesso al numero intero. Quindi, per esempio, 1/10 di 64% è 6,4; questo viene arrotondato per eccesso a 7.

---
## Dadi Utilizzati nel Gioco

_Classic Fantasy Imperative_ utilizza il set standard di dadi poliedrici: d4, d6, d8, d10, d12, d20 e d100. Inoltre, sono richiesti i seguenti dadi:

- **d2:** Tira un dado qualsiasi. Un numero dispari equivale a 1 e i pari equivalgono a 2. Oppure lancia una moneta.

- **d3:** Tira un dado a sei facce; 1-2 = 1, 3-4 = 2, 5-6 = 3.