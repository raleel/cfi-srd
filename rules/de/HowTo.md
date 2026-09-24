# Voraussetzungen

1. Ein grundlegendes Verständnis der [Markdown-Sprache](https://www.markdownguide.org/basic-syntax/).

2. Sie müssen ein kostenloses [GitHub](https://github.com/)-Konto erstellen, falls Sie noch keines haben. Wir empfehlen Ihnen, den Namen Ihres RPGs zu verwenden, da dies Teil der URL wird, die Leute verwenden werden, um auf Ihr SRD zuzugreifen.

3. Sie können diesen gesamten Vorgang über den Browser erledigen, ohne git zu kennen. Das Erlernen von GitHub Desktop ermöglicht es Ihnen jedoch, Änderungen lokal zu testen, bevor Sie sie live für die Welt sichtbar machen.

> Wenn Sie einen registrierten Domainnamen haben, können Sie diesen mit diesem Prozess verwenden, um ein SRD wie meines zu erstellen: https://srd.7thextinctionrpg.com

# Der Prozess

## Erstellen des Repositories auf Github

1. Melden Sie sich bei Github an

2. Navigieren Sie zur öffentlichen Vorlage https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klicken Sie auf „Use this template“

![Step3](/_media/Step3.png)

4. Wählen Sie „Create a new repository“

5. Geben Sie einen Repository-Namen ein

![Step5](/_media/Step5.png)

6. Wählen Sie „Private“

7. Wählen Sie „Create repository“

Es dauert 5-30 Sekunden, die Vorlage zu kopieren, danach haben Sie Ihre eigene Kopie.

8. Stellen Sie sicher, dass Sie die Datei „.nojekyll“ haben. Dies ist eine leere Datei, die beim Hosten einer Website auf Github benötigt wird, da das SRD sonst nicht korrekt angezeigt wird. *(Sagt GitHub Pages, dass die veröffentlichten Dateien nicht durch Jekyll verarbeitet werden sollen).*


## Hinzufügen Ihrer Inhalte

### *.md Dateien

.md Dateien sind Markdown-Dateien. Markdown ist eine einfache Auszeichnungssprache, die Sie verwenden können, um Klartextdokumenten Formatierungselemente hinzuzufügen. Je nach Umfang Ihrer Inhalte können Sie entweder alle Informationen Ihres Spiels in einer einzigen *.md Datei platzieren oder, wie ich es unter [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) getan habe, separate Dateien für jedes Kapitel erstellen. Die „Sample.md“ enthält einige Formatierungsbeispiele.

Die Markdown-Sprache ist sehr leicht zu erlernen; verwenden Sie den unter Punkt 2 der Voraussetzungen angegebenen Link für eine vollständige Liste der Syntax.

### _sidebar.md

Dies ist Ihr Menü, das Navigationsfenster auf der linken Seite der Website. Sobald Sie eine Markdown-Datei zu Ihrem Repository hinzugefügt haben, müssen Sie die Datei hier eintragen, damit ihr Inhalt eingebunden wird. Folgen Sie der bestehenden Formatierung.


## Aktivieren von Github Pages, um das Repository in eine Website zu verwandeln

1. Klicken Sie in Ihrem Repository auf „Settings“

![Website-Step1](/_media/Website-Step1.png)

2. Wählen Sie „Pages“ im Menü auf der linken Seite

![Website-Step2](/_media/Website-Step2.png)

3. Wenn Sie das Repository nicht „public“ gemacht haben, haben Sie zwei Möglichkeiten:
    a. Machen Sie das Repository öffentlich, wodurch Sie dann Github Pages verwenden können, um Ihre SRD-Website kostenlos zu hosten.
    b. Aktualisieren Sie Ihr Github-Konto (zum Zeitpunkt des Schreibens kostet dies 4 $ pro Monat oder eine jährliche Gebühr von 48 $).

4. Wählen Sie unter „Branch“ die Option „main“ und klicken Sie auf „Save“.

5. Warten Sie 10-20 Sekunden und aktualisieren Sie dann die Seite.

6. Sie sehen nun Ihre URL, wie z. B. https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Ändern von Schriftarten

1. Bearbeiten Sie die Datei /_assets/Stil.css

2. Im Abschnitt „body“ finden Sie siteFont & headingFont

3. Ändern Sie diese in die Schriftarten, die Sie verwenden möchten.


## Verwendung des Fontawesome- und/oder Material Icons-Plugins zur Anzeige kostenloser Icons in Ihrem SRD

### Fontawesome

Verwenden Sie Fontawesome, um kostenlose Icons und animierte Icons zu erhalten. Abonnenten können Pro-Icons verwenden.

1. Finden Sie das Icon auf [Fontawesome](https://fontawesome.com/icons)
2. Wählen Sie das Icon aus
3. Kopieren Sie im Popup-Fenster unter dem HTML-Tab alles zwischen " "

```EXAMPLE
<i Klasse="fa-solid fa-dice-d20"></i>
```

4. Platzieren Sie den kopierten Text ohne Leerzeichen zwischen `:`

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Verwenden Sie Material Icons für weitere kostenlose Icons.

1. Finden Sie die Icons unter [Material Icons](https://fonts.google.com/icons)
2. Kopieren Sie den Web-Span-Link und fügen Sie ihn direkt in Ihre Markdown-Dateien ein.

```markup
<span Klasse="material-icons">face</span>
```