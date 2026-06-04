/* ============================================================
   מודעות וידאו לעסקים — עדי בריל  (Direction C, static build)
   Vanilla JS: WhatsApp links, icons, botanical art,
   FAQ accordion, scroll-reveal, and the gallery carousel.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- WhatsApp ---------- */
  var WA_NUM = "972523919350";
  var WA_DEFAULT = "היי עדי, ראיתי את דף מודעות הווידאו ואשמח לקבל פרטים :)";

  function waLink(msg) {
    return "https://wa.me/" + WA_NUM + "?text=" + encodeURIComponent(msg || WA_DEFAULT);
  }

  // Enhance every WhatsApp anchor with a prefilled message.
  // (The base href in the HTML still works if JS is disabled.)
  document.querySelectorAll("a[data-wa]").forEach(function (a) {
    var msg = a.getAttribute("data-wa");
    a.href = waLink(msg && msg.length ? msg : WA_DEFAULT);
  });

  /* ---------- WhatsApp glyph (single source) ---------- */
  var WA_SVG =
    '<svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.02ZM12.04 20.15a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24a8.2 8.2 0 0 1 8.23 8.24c0 4.54-3.69 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>';
  document.querySelectorAll(".wa-ico").forEach(function (el) { el.innerHTML = WA_SVG; });

  /* ---------- botanical olive branch ---------- */
  (function () {
    var leaf = "M0 0C5-9 15-11 23-6 16 1 6 4 0 0Z";
    var ps = [[30, 56, -18], [62, 40, -40], [70, 70, 28], [104, 34, -34],
              [112, 72, 34], [150, 30, -30], [158, 70, 30], [196, 38, -22]];
    var html = '<path d="M8 60C60 44 140 44 222 58" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />';
    ps.forEach(function (p) {
      html += '<path d="' + leaf + '" fill="currentColor" transform="translate(' + p[0] + " " + p[1] + ") rotate(" + p[2] + ')" />';
    });
    [46, 90, 134, 178].forEach(function (x, i) {
      html += '<circle cx="' + x + '" cy="' + (56 + (i % 2 ? 4 : -3)) + '" r="4.6" fill="var(--brass)" opacity=".55" />';
    });
    document.querySelectorAll("[data-branch]").forEach(function (svg) { svg.innerHTML = html; });
  })();

  /* ---------- footer year ---------- */
  var foot = document.getElementById("footYear");
  if (foot) foot.textContent = "© " + new Date().getFullYear() + " עדי בריל · כל הזכויות שמורות";

  /* ---------- mobile nav (hamburger) ---------- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- FAQ accordion ---------- */
  var faqItems = Array.prototype.slice.call(document.querySelectorAll(".faq-item"));
  faqItems.forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    btn.addEventListener("click", function () {
      var willOpen = !item.classList.contains("open");
      faqItems.forEach(function (x) {
        x.classList.remove("open");
        x.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (willOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- GALLERY data (designed story-ad frames) ---------- */
  var ADS = [
    { id: "v-fashion", video: true, poster: "assets/ad2-poster.png", cat: "לחנויות ומותגי אופנה" },
    { id: "v-fitness", video: true, poster: "assets/ad3-poster.png", cat: "למאמנים ובעלי סטודיו" },
    { id: "v-finance", video: true, poster: "assets/ad1-poster.png", cat: "לעסקים ומותגים" },
    { id: "pilates", biz: "סטודיו פילאטיס", tag: "שיעור ניסיון ראשון חינם", cta: "לתיאום בסטורי", cat: "למאמנים ובעלי סטודיו",
      layout: "center", pal: { bg: "#7d8a5e", bg2: "#5d6a3d", fg: "#faf6ec", accent: "#e7dcae" } },
    { id: "bakery", biz: "מאפייה ביתית", tag: "חלות טריות לשבת — הזמינו עכשיו", cta: "הזמנה בוואטסאפ", cat: "לעסקי מזון וקולינריה",
      layout: "bottom", pal: { bg: "#c79a5b", bg2: "#9a6c34", fg: "#fff7e8", accent: "#fff7e8" } },
    { id: "gym", biz: "חדר כושר שכונתי", tag: "מנוי חודש ראשון ב-99 ₪", cta: "הצטרפו היום", cat: "למאמנים ובעלי סטודיו",
      layout: "top", pal: { bg: "#3a3d34", bg2: "#23251e", fg: "#f1efe4", accent: "#b6c47e" } },
    { id: "guitar", biz: "שיעורי גיטרה פרטיים", tag: "מהתו הראשון ועד השיר השלם", cta: "לפרטים", cat: "למורים ומטפלים",
      layout: "bottom", pal: { bg: "#8a5a3c", bg2: "#5e3a26", fg: "#fbeede", accent: "#e8b27e" } },
    { id: "dog", biz: "דוגי ווקר", tag: "הליכונים יומיים לכלב שלכם", cta: "קבעו סיבוב", cat: "לבעלי חיים",
      layout: "center", pal: { bg: "#6f9a86", bg2: "#48705e", fg: "#f4faf5", accent: "#ffe6a8" } },
    { id: "nails", biz: "סטודיו ציפורניים", tag: "לק ג'ל מושלם בכל עונה", cta: "לתיאום תור", cat: "לעולם הביוטי והטיפוח",
      layout: "bottom", pal: { bg: "#c98f86", bg2: "#9c5f57", fg: "#fdeeea", accent: "#fbe0d4" } },
    { id: "fashion", biz: "בוטיק אופנה", tag: "הקולקציה החדשה הגיעה", cta: "צפו בחנות", cat: "לחנויות ומותגי אופנה",
      layout: "top", pal: { bg: "#b56a4c", bg2: "#854228", fg: "#fff0e6", accent: "#f7d9bf" } },
    { id: "interior", biz: "עיצוב פנים", tag: "מהחלל הריק לבית שאוהבים", cta: "לייעוץ ראשוני", cat: "לעולם הבית והנדל\"ן",
      layout: "center", pal: { bg: "#b09a73", bg2: "#7e6b48", fg: "#fbf6ea", accent: "#efe2c4" } },
    { id: "wedding", biz: "שירה ואורי", tag: "מתחתנים! בואו לחגוג איתנו", cta: "אישור הגעה", cat: "ולאנשים פרטיים",
      layout: "center-elegant", pal: { bg: "#a98c54", bg2: "#7c6232", fg: "#fdf8ec", accent: "#f3e4bf" } },
  ];

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  var PLAY_SVG = '<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>';

  /* Builds the inner markup of a single story-ad frame. */
  function storyAd(ad, live) {
    if (ad.video) {
      return '<div style="position:absolute;inset:0;background:#000;overflow:hidden;container-type:inline-size">' +
        '<img src="' + ad.poster + '" alt="" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" /></div>';
    }
    var p = ad.pal;
    var base = "position:absolute;inset:0;color:" + p.fg +
      ";background:radial-gradient(130% 90% at 70% 12%," + p.bg + " 0%," + p.bg2 + " 78%)" +
      ";font-family:var(--sans);overflow:hidden;container-type:inline-size";

    var blobs =
      '<div style="position:absolute;width:70%;aspect-ratio:1;border-radius:50%;top:-18%;inset-inline-start:-22%;background:#ffffff14"></div>' +
      '<div style="position:absolute;width:46%;aspect-ratio:1;border-radius:50%;bottom:8%;inset-inline-end:-14%;background:#0000001a"></div>';

    var chrome = "";
    var bars = "";
    for (var i = 0; i < 3; i++) {
      var fill = i === 0 ? (live ? "60%" : "100%") : "0%";
      var anim = live && i === 0 ? "adfill 5s linear infinite" : "none";
      bars += '<div style="flex:1;height:3px;border-radius:2px;background:#ffffff55;overflow:hidden">' +
        '<div style="height:100%;width:' + fill + ';background:#fff;animation:' + anim + '"></div></div>';
    }
    chrome += '<div style="position:absolute;top:12px;inset-inline:12px;display:flex;gap:4px;z-index:4">' + bars + "</div>";
    if (live) {
      chrome += '<div style="position:absolute;top:30px;inset-inline-end:14px;z-index:4;display:flex;align-items:center;gap:6px;' +
        'background:#0003;border-radius:999px;padding:4px 10px 4px 7px;font-size:11px;font-weight:600;backdrop-filter:blur(3px)">' +
        PLAY_SVG + " וידאו</div>";
    }

    var dotStyle = "display:inline-block;width:5px;height:5px;border-radius:9px;background:" + p.accent + ";margin:0 5px;vertical-align:middle";
    var dot = '<span style="' + dotStyle + '"></span>';
    var body;

    if (ad.layout === "bottom") {
      body = '<div style="position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:24px 22px 30px">' +
        '<div style="width:34px;height:3px;background:' + p.accent + ';margin-bottom:12px;border-radius:2px"></div>' +
        '<div style="font-family:var(--serif);font-weight:900;font-size:clamp(20px,5.4cqw,30px);line-height:1.05">' + esc(ad.biz) + "</div>" +
        '<div style="font-size:clamp(12px,3.2cqw,15px);margin-top:8px;opacity:.95;line-height:1.4">' + esc(ad.tag) + "</div>" +
        '<div style="margin-top:16px;align-self:flex-start;background:' + p.fg + ";color:" + p.bg2 + ';font-weight:700;font-size:13px;padding:9px 16px;border-radius:999px">' + esc(ad.cta) + "</div></div>";
    } else if (ad.layout === "top") {
      var label = ad.cat.replace("ל", "").replace("ול", "");
      body = '<div style="position:absolute;inset:0;display:flex;flex-direction:column;padding:44px 22px 26px">' +
        '<div style="letter-spacing:.18em;font-size:11px;font-weight:700;color:' + p.accent + '">' + esc(label) + "</div>" +
        '<div style="font-family:var(--serif);font-weight:900;font-size:clamp(22px,6cqw,34px);line-height:1.02;margin-top:10px">' + esc(ad.biz) + "</div>" +
        '<div style="margin-top:auto;font-size:clamp(12px,3.4cqw,16px);line-height:1.4">' + esc(ad.tag) + "</div>" +
        '<div style="margin-top:16px;align-self:flex-start;border:1.5px solid ' + p.fg + ";color:" + p.fg + ';font-weight:700;font-size:13px;padding:9px 16px;border-radius:999px">' + esc(ad.cta) + " ←</div></div>";
    } else if (ad.layout === "center-elegant") {
      body = '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px 24px">' +
        '<div style="font-size:11px;letter-spacing:.22em;color:' + p.accent + '">S A V E&nbsp;&nbsp;T H E&nbsp;&nbsp;D A T E</div>' +
        '<div style="width:1px;height:26px;background:' + p.accent + ';margin:14px 0"></div>' +
        '<div style="font-family:var(--serif);font-weight:700;font-size:clamp(24px,6.6cqw,34px);line-height:1.1">' + esc(ad.biz) + "</div>" +
        '<div style="margin:12px 0;font-size:clamp(12px,3.2cqw,15px)">' + esc(ad.tag) + "</div>" +
        '<div style="width:1px;height:26px;background:' + p.accent + ';margin:2px 0 14px"></div>' +
        '<div style="border:1px solid ' + p.fg + ";color:" + p.fg + ';font-weight:600;font-size:12.5px;padding:8px 18px;border-radius:999px">' + esc(ad.cta) + "</div></div>";
    } else { // center
      body = '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px 24px">' +
        '<div style="font-family:var(--serif);font-weight:900;font-size:clamp(24px,6.4cqw,34px);line-height:1.04">' + esc(ad.biz) + "</div>" +
        '<div style="display:flex;align-items:center;justify-content:center;margin:12px 0 14px">' + dot + dot + dot + "</div>" +
        '<div style="font-size:clamp(12px,3.4cqw,16px);max-width:85%;line-height:1.4">' + esc(ad.tag) + "</div>" +
        '<div style="margin-top:18px;background:' + p.fg + ";color:" + p.bg2 + ';font-weight:700;font-size:13px;padding:10px 18px;border-radius:999px">' + esc(ad.cta) + "</div></div>";
    }

    return '<div style="' + base + '">' + blobs + body + chrome + "</div>";
  }

  /* center phone (live) and side examples (bare, static) */
  function phoneHTML(ad) {
    return '<div class="phone is-center" style="width:clamp(232px,27vw,300px);align-self:center">' +
      '<div class="screen" style="aspect-ratio:9 / 19">' + storyAd(ad, true) + "</div></div>";
  }
  function bareHTML(ad) {
    return '<div class="gallery-bare" style="width:clamp(120px,17vw,190px);align-self:center">' +
      '<div class="screen" style="aspect-ratio:9 / 19;border-radius:22px;overflow:hidden;position:relative;background:#000">' +
      storyAd(ad, false) + "</div></div>";
  }

  /* ---------- carousel state ---------- */
  var n = ADS.length;
  var idx = 0;
  var autoplay = true;
  var timer = null;

  var slotPrev = document.getElementById("slotPrev");
  var slotCenter = document.getElementById("slotCenter");
  var slotNext = document.getElementById("slotNext");
  var galCat = document.getElementById("galCat");
  var galDots = document.getElementById("galDots");

  // build dots once
  var dotsHTML = "";
  for (var di = 0; di < n; di++) {
    dotsHTML += '<button class="dot" data-i="' + di + '" aria-label="דוגמה ' + (di + 1) + '"></button>';
  }
  galDots.innerHTML = dotsHTML;
  var dotEls = Array.prototype.slice.call(galDots.querySelectorAll(".dot"));

  function schedule() {
    if (timer) clearTimeout(timer);
    if (!autoplay) return;
    var delay = ADS[idx].video ? 9000 : 5400;
    timer = setTimeout(function () { idx = (idx + 1) % n; render(); }, delay);
  }

  function render() {
    var prev = (idx - 1 + n) % n;
    var next = (idx + 1) % n;
    // DOM order matches the prototype: [next-arrow] bare(next) phone(idx) bare(prev) [prev-arrow]
    slotNext.innerHTML = bareHTML(ADS[next]);
    slotCenter.innerHTML = phoneHTML(ADS[idx]);
    slotPrev.innerHTML = bareHTML(ADS[prev]);
    galCat.textContent = ADS[idx].cat;
    dotEls.forEach(function (d, i) { d.classList.toggle("on", i === idx); });
    schedule();
  }

  function go(d) { idx = (idx + d + n) % n; render(); }

  document.getElementById("navNext").addEventListener("click", function () { go(1); });
  document.getElementById("navPrev").addEventListener("click", function () { go(-1); });
  dotEls.forEach(function (d) {
    d.addEventListener("click", function () { idx = parseInt(d.getAttribute("data-i"), 10); render(); });
  });

  render();

  /* ---------- reveal on scroll ---------- */
  (function () {
    var els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    function reveal(e) { e.classList.add("in"); }
    if (!("IntersectionObserver" in window)) { els.forEach(reveal); return; }
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (e) { io.observe(e); });
    requestAnimationFrame(function () {
      els.forEach(function (e) {
        var r = e.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) reveal(e);
      });
    });
    setTimeout(function () { els.forEach(reveal); }, 1600);
  })();

})();
