# דרישות קדם

1. הבנה בסיסית של [שפת Markdown](https://www.markdownguide.org/basic-syntax/).

2. תצטרך ליצור חשבון [github](https://github.com/) בחינם אם אין לך כזה. מומלץ להשתמש בשם של משחק התפקידים שלך, כיוון שהוא יהפוך לחלק מהכתובת (URL) שאנשים ישתמשו בה כדי לגשת ל-SRD שלך.

3. ניתן לבצע את כל התהליך הזה דרך הדפדפן מבלי להכיר git. עם זאת, לימוד Github Desktop יאפשר לך לבדוק שינויים באופן מקומי לפני הפצתם לאוויר העולם.

> אם יש ברשותך שם דומיין רשום, ניתן להשתמש בו בתהליך זה כדי ליצור SRD כמו זה שיש לי: https://srd.7thextinctionrpg.com

# התהליך

## יצירת המאגר (Repository) ב-Github

1. התחבר ל-Github

2. נווט לתבנית הציבורית https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. לחץ על "Use this template"

![Step3](/_media/Step3.png)

4. בחר ב-"Create a new repository"

5. הזן שם למאגר

![Step5](/_media/Step5.png)

6. בחר באפשרות 'Private'

7. בחר ב-'Create repository'

ייקח 5-30 שניות להעתיק את התבנית, ולאחר מכן יהיה ברשותך עותק משלך.

8. ודא שקובץ ה-".nojekyll" קיים; זהו קובץ ריק שנדרש בעת אירוח אתר ב-Github, אחרת ה-SRD לא יוצג כראוי. *(הקובץ מורה ל-GitHub Pages לא להריץ את הקבצים המפורסמים דרך Jekyll).*


## הוספת התוכן שלך

### קבצי *.md

קבצי .md הם קבצי Markdown. Markdown היא שפת סימון קלה שניתן להשתמש בה כדי להוסיף אלמנטים עיצוביים למסמכי טקסט פשוטים. בהתאם להיקף התוכן שלך, באפשרותך למקם את כל המידע על המשחק בקובץ *.md יחיד, או ליצור קבצים נפרדים לכל פרק, כפי שעשיתי ב-[7thextinctionrpg.com](https://srd.7thextinctionrpg.com). הקובץ "sample.md" מספק מספר דוגמאות לעיצוב.

שפת Markdown קלה מאוד ללמידה; השתמש בקישור שסופק בסעיף 2 תחת "דרישות קדם" לעיל לקבלת רשימה מלאה של התחביר.

### _Sidebar.md

זהו התפריט, חלונית הניווט בצד שמאל של האתר. ברגע שהוספת קובץ Markdown למאגר שלך, עליך להוסיף את הקובץ לכאן כדי שתכניו ייכללו באתר. עקוב אחר העיצוב הקיים.


## הפעלת Github Pages כדי להפוך את המאגר לאתר אינטרנט

1. במאגר שלך, לחץ על 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. בחר ב-'Pages' בתפריט הצדדי משמאל

![Website-Step2](/_media/Website-Step2.png)

3. אם לא הפכת את המאגר ל-'public', יש לך שתי אפשרויות:
    א. להפוך את המאגר לציבורי, מה שיאפשר לך להשתמש ב-Github Pages כדי לארח את אתר ה-SRD שלך בחינם.
    ב. לשדרג את חשבון ה-Github שלך (בזמן כתיבת שורות אלו, העלות היא 4$ לחודש או 48$ דמי מנוי שנתיים).

4. תחת 'Branch' בחר ב-'main' ולחץ על שמירה (Save).

5. המתן 10-20 שניות ואז רענן את הדף.

6. כעת תראה את ה-URL שלך, למשל: https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## שינוי גופנים

1. ערוך את הקובץ /_assets/style.css

2. תחת סעיף ה-'body' תמצא את siteFont ו-headingFont

3. שנה אותם לגופנים שברצונך להשתמש בהם.


## שימוש בתוסף Fontawesome ו/או Material Icons להצגת אייקונים בחינם ב-SRD שלך

### Fontawesome

השתמש ב-Fontawesome כדי לקבל אייקונים בחינם ואייקונים מונפשים. משתמשים רשומים יכולים להשתמש ב-Pro Icons.

1. מצא את האייקון ב-[Fontawesome](https://fontawesome.com/icons)
2. בחר את האייקון.
3. בחלון הקופץ, תחת לשונית ה-HTML, העתק את כל מה שבין הגרשיים " ".

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. מקם את הטקסט שהועתק בין נקודותיים `:` ללא רווחים.

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

השתמש ב-Material Icons עבור אייקונים נוספים בחינם.

1. מצא את האייקונים ב-[Material Icons](https://fonts.google.com/icons)
2. העתק והכנס את קישור ה-span ישירות לקבצי ה-Markdown שלך.

```markup
<span class="material-icons">face</span>
```