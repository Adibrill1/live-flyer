# מודעות וידאו לעסקים · עדי בריל

דף נחיתה (landing page) למוצר **מודעות וידאו לעסקים** — מודעות פרסום שמשלבות
טקסט שיווקי עם וידאו קצר, מותאמות אישית לוואטסאפ ולרשתות החברתיות.

עיצוב: "Direction C – Hi-Fi" מתוך בריף הלקוח. בעברית, מיושר לימין (RTL),
פלטת זית / זהב / שמנת עם מרקם נייר ועלים בוטניים.

## Tech

Static **HTML + CSS + vanilla JS** — no build step, no dependencies.
Just open `index.html` or upload the folder to any static host
(Netlify / Vercel / GitHub Pages / cPanel וכו').

```
index.html        # all page sections (semantic, SEO-ready)
css/styles.css    # full design system (palette, type, components)
js/main.js        # carousel, FAQ accordion, scroll-reveal, WhatsApp links
assets/           # gallery posters + about photo
```

Fonts load from Google Fonts (Frank Ruhl Libre / Assistant / Heebo / Suez One /
Gveret Levin). The only runtime JS powers the gallery carousel, the FAQ
accordion, scroll-reveal animations, and prefilling the WhatsApp messages.

## Sections

Nav · Hero · **גלריית דוגמאות** (קרוסלה במסגרת טלפון) · יתרונות · מחיר ·
אודות · שאלות נפוצות · תגובות לקוחות · CTA סופי · פוטר · כפתור וואטסאפ צף לנייד.

## כפתורי וואטסאפ

כל כפתורי הוואטסאפ מצביעים ל-`wa.me/972523919350` (052-3919350) עם הודעה
מוכנה מראש. אם JavaScript מושבת, הקישור עדיין פותח צ'אט (ללא הטקסט המוכן).

## דברים שעדיין צריך להשלים

- **וידאו בגלריה** — שלוש המשבצות הראשונות בקרוסלה מציגות כרגע תמונות
  פוסטר (`assets/ad1-poster.png` וכו'). כשיתקבלו קובצי הווידאו אפשר להחליף
  את ה-`<img>` שב-`storyAd()` (ב-`js/main.js`) ב-`<video autoplay muted loop playsinline poster=...>`.
- **קישורי רשתות חברתיות** — אייקוני אינסטגרם/פייסבוק בפוטר מקשרים כרגע
  ל-`#` (placeholder). יש להחליף בכתובות האמיתיות.
- **הודעת הוואטסאפ ב-CTA הסופי** מזכירה "חבילת שני העיצובים (220 ₪)" —
  הועתק כלשונו מהעיצוב המקורי, אך אינו תואם לטבלת התמחור הנוכחית
  (140 / 180 / 600). כדאי לעדכן את ההודעה.
