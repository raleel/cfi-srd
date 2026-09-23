# Voraussetzungen

1. Ein grundlegendes Verständnis der [Markdown-Sprache](https://www.markdownguide.org/basic-syntax/).

2. Du musst ein kostenloses [Github](https://github.com/)-Konto erstellen, falls du noch keines hast. Es wird empfohlen, den Namen deines RPGs zu verwenden, da dieser Teil der URL wird, über die Leute auf dein SRD zugreifen werden.

3. Du kannst diesen gesamten Prozess über den Browser abwickeln, ohne Git zu kennen. Das Erlernen von Github Desktop ermöglicht es dir jedoch, Änderungen lokal zu testen, bevor du sie live für die Welt sichtbar machst.

> Wenn du einen registrierten Domainnamen hast, kannst du diesen mit diesem Prozess verwenden, um ein SRD zu erstellen, so wie ich es getan habe: https://srd.7thextinctionrpg.com

# Der Prozess

## Erstellen des Repositorys auf Github

1. Melde dich bei Github an.

2. Navigiere zur öffentlichen Vorlage https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klicke auf „Use this template“ (Diese Vorlage verwenden).

![Step3](/_media/Step3.png)

4. Wähle „Create a new repository“ (Ein neues Repository erstellen).

5. Gib einen Repository-Namen ein.

![Step5](/_media/Step5.png)

6. Wähle „Private“ aus.

7. Wähle „Create repository“ (Repository erstellen).

Es dauert 5–30 Sekunden, um die Vorlage zu kopieren, danach hast du deine eigene Kopie.

8. Stelle sicher, dass du die Datei „.nojekyll“ hast. Dies ist eine leere Datei, die beim Hosten einer Website auf Github benötigt wird, da das SRD sonst nicht korrekt angezeigt wird. *(Teilt GitHub Pages mit, die veröffentlichten Dateien nicht durch Jekyll laufen zu lassen).*


## Hinzufügen deiner Inhalte

### *.md-Dateien

.md-Dateien sind Markdown-Dateien. Markdown ist eine leichtgewichtige Auszeichnungssprache, die du verwenden kannst, um Texte mit Formatierungselementen zu versehen. Je nach Umfang deiner Inhalte kannst du entweder alle Informationen deines Spiels in eine einzige *.md-Datei einfügen oder, wie ich es unter [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) gemacht habe, separate Dateien für jedes Kapitel erstellen. Die „sample.md“ bietet einige Formatierungsbeispiele.

Die Markdown-Sprache ist sehr leicht zu erlernen; nutze den Link in Punkt 2 unter „Voraussetzungen“ oben für eine vollständige Liste der Syntax.

### _Sidebar.md

Dies ist dein Menü, der Navigationsbereich auf der linken Seite der Website. Sobald du eine Markdown-Datei zu deinem Repository hinzugefügt hast, musst du die Datei hier eintragen, damit ihre Inhalte aufgenommen werden. Folge der bestehenden Formatierung.


## Github Pages aktivieren, um das Repository in eine Website zu verwandeln

1. Klicke in deinem Repository auf „Settings“ (Einstellungen).

![Website-Step1](/_media/Website-Step1.png)

2. Wähle „Pages“ im Menü auf der linken Seite aus.

![Website-Step2](/_media/Website-Step2.png)

3. Falls du das Repository nicht auf „public“ (öffentlich) gesetzt hast, hast du zwei Möglichkeiten:
    a. Mache das Repository öffentlich, wodurch du Github Pages nutzen kannst, um deine SRD-Website kostenlos zu hosten.
    b. Führe ein Upgrade deines Github-Kontos durch (zum Zeitpunkt des Schreibens kostet dies 4 $ pro Monat oder 48 $ Jahresgebühr).

4. Wähle unter „Branch“ (Zweig) den Eintrag „main“ aus und klicke auf „Save“ (Speichern).

5. Warte 10–20 Sekunden und aktualisiere dann die Seite.

6. Du siehst nun deine URL, wie zum Beispiel https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Schriftarten ändern

1. Bearbeite die Datei /_assets/Stil.css

2. Unter dem Abschnitt „body“ findest du `siteFont` & `headingFont`.

3. Ändere diese in die Schriftarten, die du verwenden möchtest.


## Verwendung des Fontawesome- und/oder Material Icons-Plugins zur Anzeige kostenloser Icons in deinem SRD

### Fontawesome

Verwende Fontawesome, um kostenlose Icons und animierte Icons zu erhalten. Abonnenten können Pro-Icons verwenden.

1. Finde das Icon auf [Fontawesome](https://fontawesome.com/icons)
2. Wähle das Icon aus.
3. Kopiere im Popup-Fenster unter dem HTML-Tab alles zwischen " "

```EXAMPLE
<i Klasse="fa-solid fa-dice-d20"></i>
```

4. Platziere den kopierten Text ohne Leerzeichen zwischen `:`

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Verwende Material Icons für weitere kostenlose Icons.

1. Finde die Icons auf [Material Icons](https://fonts.google.com/icons)
2. Kopiere den Web-Span-Link und füge ihn direkt in deine Markdown-Dateien ein.

```markup
<span Klasse="material-icons">face</span>
```