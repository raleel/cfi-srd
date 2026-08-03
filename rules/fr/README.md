# Document de ressources du système Classic Fantasy Imperative

Version 1.0, septembre 2023

_Classic Fantasy Imperative_ est une version ouverte, sous licence ORC, du système de règles _Mythras_, axée sur l'exploration de donjons, les grandes aventures et les rencontres tendues impliquant des trésors, de la magie et des ennemis mortels. _Classic Fantasy Imperative_ reproduit le frisson original du tout premier jeu de rôle du hobby, mais l'aborde sous l'angle du système de jeu _Mythras_, qui est basé sur 1d100 (ou système centile), plutôt que sur l'utilisation d'un d20.

Ce document propose un ensemble complet, mais non exhaustif, de règles, incluant la création de personnages, les races et classes de personnages, les compétences, les règles pour certaines situations typiques, le combat et la magie – bien plus qu'il n'en faut pour permettre aux joueurs et aux Maîtres de Jeu de se lancer, et pour former une base solide pour un développement ultérieur. _Classic Fantasy Imperative_ est entièrement compatible avec _Classic Fantasy Imperative_, les règles de base de _Mythras_ et _Mythras Imperative_. De plus, il est également compatible avec d'autres systèmes de jeu basés sur le système centile sous licence ORC.

---
## Licences ORC

_Classic Fantasy Imperative_ est publié sous la licence ORC. La licence ORC fournit aux créateurs de jeux un moyen de partager ouvertement les mécaniques de leur jeu et permet aux utilisateurs en aval d'utiliser, de modifier et de repartager librement des adaptations de ces mécaniques de jeu.

Ce qui est partagé ouvertement sous la licence ORC est connu sous le nom de **Matériel sous licence** (Licensed Material), et comprend les éléments fonctionnels généraux du jeu, tels que les blocs de statistiques, les règles de jeu, les attributs des personnages, ainsi que les méthodes et systèmes inhérents au jeu, ainsi que tout ce que le concédant souhaite explicitement partager. La licence est large et vous permet d'utiliser le Matériel sous licence mondialement en lien avec des livres imprimés, des jeux vidéo, des podcasts, de l'IA ou toute autre technologie existante ou à venir. La grande majorité du contenu présent dans _Classic Fantasy Imperative_ constitue du Matériel sous licence.

Ce qui n'est pas partagé sous la licence ORC est connu sous le nom de **Matériel réservé** (Reserved Material) et inclut les marques déposées, l'univers du jeu, les arcs narratifs, les personnages distinctifs et les illustrations. Nous avons listé le Matériel réservé dans l'Avis ORC ci-dessous.

Sous la licence ORC, vous pouvez utiliser, partager, adapter et bâtir sur le Matériel sous licence comme bon vous semble, tant que vous fournissez une attribution appropriée sous la forme d'un avis dans votre travail publié. Cet avis crédite à la fois les concédants en amont et leur contribution à l'œuvre, tout en offrant un moyen facile aux utilisateurs en aval de créditer l'auteur de l'œuvre dans laquelle l'avis apparaît. En utilisant du matériel sous licence ORC, vous acceptez automatiquement de licencier les mécaniques de votre jeu dans votre travail publié sous les mêmes termes. Si vous développez votre propre Matériel réservé, celui-ci est votre propriété exclusive.

#### Avis ORC

_Classic Fantasy Imperative_ est sous licence ORC, déposée à la Bibliothèque du Congrès et disponible en ligne à divers endroits, notamment [Paizo.com](https://paizo.com/community/blog/v5748dyo6sico?ORC-License-The-Final-Version-is-Here) et autres.

Toutes les garanties sont exclues tel qu'énoncé dans ladite licence.

#### Attribution

Ce produit est basé sur le Matériel réservé suivant :

- _Mythras_, The Design Mechanism, Copyright 2016, écrit par Pete Nash et Lawrence Whitaker
- _Classic Fantasy Imperative_, The Design Mechanism, Copyright 2016, écrit par Rodney Leary, Pete Nash et Lawrence Whitaker

Si vous utilisez notre Matériel sous licence dans vos propres travaux publiés, veuillez nous créditer comme suit :

_**Basé sur Classic Fantasy Imperative, écrit par Rodney Leary, Pete Nash et Lawrence Whitaker, et publié par The Design Mechanism, Copyright 2023**_

#### Matériel réservé

Veuillez noter que les jeux parents de _Classic Fantasy Imperative_, à savoir _Classic Fantasy_ et _Mythras_, publiés par The Design Mechanism, sont désignés comme Matériel réservé sous la licence ORC.

Si vous souhaitez puiser dans le contenu trouvé dans _Classic Fantasy Imperative_ ou _Mythras_, veuillez contacter The Design Mechanism au sujet de la licence distincte Mythras Gateway, qui permet d'accéder au Matériel réservé, sans redevances, mais avec certaines conditions concernant les approbations et l'attribution.

Les éléments suivants sont également considérés comme Matériel réservé :

- _Classic Fantasy_ et _Classic Fantasy Imperative_ – en tant que nom, sauf lorsqu'utilisé dans l'attribution, incluant leur logo.
- _Mythras_ et _Mythras Imperative_ – en tant que nom, sauf lorsqu'utilisés dans l'attribution, incluant leurs logos.
- Toutes les illustrations trouvées dans _Classic Fantasy Imperative_
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
- _Mystamyr and the Boarderlands_
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
## Nouveau sur le d100 ?

_Classic Fantasy Imperative_ est un système d100 ou centile. Les dés centiles, ou 1d100, sont utilisés pour résoudre les actions clés : utilisation de compétences, combat, lancement de sortilèges, etc. Il s'agit d'un système de jet sous le score, ce qui signifie que le nombre cible est exprimé en pourcentage (Athlétisme 65 %, par exemple), et que le Maître de Jeu comme le joueur cherchent à obtenir un résultat égal ou inférieur à ce nombre cible, en utilisant 1d100, pour obtenir un Succès. Il est assez facile de remplacer le 1d100 par un d20 si vous le préférez, et tous les pourcentages peuvent être divisés par 5 (arrondis à l'unité supérieure) pour obtenir le nombre cible pour un jet de d20. Dans notre exemple, Athlétisme 65 % deviendrait Athlétisme 13. Cependant, le 1d100 offre une grande flexibilité et une nuance qui sous-tendent tout le jeu ; nous recommandons donc d'essayer l'approche 1d100 en premier. Bien qu'il puisse sembler contre-intuitif de devoir faire _moins_ que quelque chose (dans de nombreux jeux, faire plus est généralement mieux !), le fait d'avoir un nombre cible exprimé sous forme de plage de pourcentage dans laquelle on doit rouler permet de voir facilement et simplement ses chances de succès, et autorise un certain nombre d'« astuces de dés », telles que les Jets Opposés, les Critiques, les Échecs Critiques, et quelques autres éléments explorés plus loin dans ces règles. Le jeu de rôle centile existe depuis longtemps et est un système de jeu fermement établi avec une mécanique de base éprouvée qui est flexible, intuitive et qui a tendance à s'effacer au second plan pendant le jeu.

---
## Simplification

Les anciens propriétaires de _Mythras_ et _Classic Fantasy_ noteront que, par endroits, les règles de _Classic Fantasy Imperative_ ont été simplifiées. Cela a été fait pour qu'un Maître de Jeu puisse plus rapidement initier de nouveaux joueurs au jeu avec un minimum de complications. Un autre domaine où _Classic Fantasy Imperative_ diffère est l'intégration des mesures impériales au lieu du système métrique. Intégrer les deux prendrait beaucoup trop de place et nécessiterait de multiples tableaux pour les armes à distance et autres. Le système impérial a été choisi simplement pour faciliter l'utilisation des innombrables tapis de combat (battle mats) déjà existants, et pour rendre plus simple la conversion d'aventures provenant d'autres systèmes de jeu utilisant les mesures impériales. Lorsque vous remplissez votre feuille de personnage, n'hésitez pas à utiliser les tableaux de conversion en annexe, et le système de mesure que vous trouvez le plus utile et le plus familier.

---
## Arrondissement des nombres et résultats

À certaines occasions, vous serez amené à diviser des nombres – typiquement le score d'une compétence (par exemple pour déterminer un Succès Critique, qui correspond à 1/10e de la valeur de la compétence). Chaque fois qu'un résultat de division crée une fraction, arrondissez toujours à l'unité supérieure. Ainsi, par exemple, 1/10e de 64 % est 6,4 ; cela est arrondi à 7.

---
## Dés utilisés dans le jeu

_Classic Fantasy Imperative_ utilise le jeu de dés polyédriques standard : d4, d6, d8, d10, d12, d20 et d100. De plus, les dés suivants sont requis :

- **d2 :** Lancez n'importe quel dé. Un nombre impair équivaut à 1 et un pair équivaut à 2. Ou lancez une pièce de monnaie.

- **d3 :** Lancez un dé à six faces ; 1-2 = 1, 3-4 = 2, 5-6 = 3.