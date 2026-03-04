/* FontiFy Core Engine */

(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  // Footer year
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile nav
  const navToggle = $(".nav-toggle");
  const nav = $("#primary-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    $$("#primary-nav a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Tabs
  const tabs = $$(".tab");
  const panels = $$(".panel");
  tabs.forEach(t => {
    t.addEventListener("click", () => {
      tabs.forEach(x => {
        x.classList.remove("is-active");
        x.setAttribute("aria-selected", "false");
      });
      panels.forEach(p => p.classList.remove("is-active"));
      t.classList.add("is-active");
      t.setAttribute("aria-selected", "true");
      const target = document.getElementById(t.dataset.tab);
      if (target) target.classList.add("is-active");
    });
  });

  // Counter + input
  const userText = $("#userText");
  const counter = $("#charCounter");
  const resetBtn = $("#resetBtn");
  const DEFAULT_TEXT = "Preview Text";

  const getText = () => (userText?.value || "").trim() || DEFAULT_TEXT;

  const updateCounter = () => {
    if (!userText || !counter) return;
    counter.textContent = `${userText.value.length} / ${userText.maxLength || 200}`;
  };

  // Instagram Unicode maps
  const mapAZ = (startUpper, startLower) => {
    const A = "A".charCodeAt(0),
      Z = "Z".charCodeAt(0);
    const a = "a".charCodeAt(0),
      z = "z".charCodeAt(0);
    const map = new Map();
    for (let i = 0; i <= Z - A; i++) {
      map.set(String.fromCharCode(A + i), String.fromCodePoint(startUpper + i));
      map.set(String.fromCharCode(a + i), String.fromCodePoint(startLower + i));
    }
    return map;
  };
  const MAP_BOLD = mapAZ(0x1D400, 0x1D41A);
  const MAP_ITALIC = mapAZ(0x1D434, 0x1D44E);
  const MAP_BOLDITALIC = mapAZ(0x1D468, 0x1D482);
  const MAP_MONO = mapAZ(0x1D670, 0x1D68A);

  const applyMap = (txt, map) => txt.split("").map(ch => map.get(ch) || ch).join("");

  const toSmallCaps = (txt) => {
    const small = {
      a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
      k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ",
      u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
    };
    return txt.split("").map(ch => small[ch.toLowerCase()] || ch).join("");
  };

  const toBubble = (txt) => {
    const A = "A".charCodeAt(0),
      Z = "Z".charCodeAt(0);
    const a = "a".charCodeAt(0),
      z = "z".charCodeAt(0);
    return txt.split("").map(ch => {
      const c = ch.charCodeAt(0);
      if (c >= A && c <= Z) return String.fromCodePoint(0x24B6 + (c - A));
      if (c >= a && c <= z) return String.fromCodePoint(0x24D0 + (c - a));
      return ch;
    }).join("");
  };

  const transformIG = (txt, style) => {
    switch (style) {
      case "bold":
        return applyMap(txt, MAP_BOLD);
      case "italic":
        return applyMap(txt, MAP_ITALIC);
      case "bolditalic":
        return applyMap(txt, MAP_BOLDITALIC);
      case "monospace":
        return applyMap(txt, MAP_MONO);
      case "smallcaps":
        return toSmallCaps(txt);
      case "bubble":
        return toBubble(txt);
      default:
        return txt;
    }
  };

  const applyPreviews = () => {
    const txt = getText();
    $$("[data-preview]").forEach(el => {
      const card = el.closest("[data-ig]");
      if (card) {
        el.textContent = transformIG(txt, card.getAttribute("data-ig"));
      } else {
        el.textContent = txt;
      }
    });

    // compare previews
    $$("[data-compare-preview]").forEach(el => el.textContent = txt);
  };

  if (userText) {
    userText.addEventListener("input", () => {
      updateCounter();
      applyPreviews();
    });
  }
  if (resetBtn && userText) {
    resetBtn.addEventListener("click", () => {
      userText.value = "";
      updateCounter();
      applyPreviews();
    });
  }
  updateCounter();
  applyPreviews();

  // Copy behavior
  async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }

  function setCopied(btn) {
    const original = btn.dataset.original || btn.textContent;
    btn.dataset.original = original;
    btn.classList.add("is-copied");
    btn.innerHTML = `<span class="check">✓</span> Copied`;
    setTimeout(() => {
      btn.classList.remove("is-copied");
      btn.textContent = original;
    }, 1500);
  }
  $$("[data-copy]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const wrap = btn.closest("article");
      const prev = wrap?.querySelector("[data-preview]");
      const text = prev?.textContent || getText();
      try {
        await copyToClipboard(text);
      } catch { }
      setCopied(btn);
    });
  });

  // Trending scroll
  const trending = $("#trendingRow");
  if (trending) {
    trending.addEventListener("click", (e) => {
      const b = e.target.closest("[data-trend]");
      if (!b) return;
      const cls = b.getAttribute("data-trend");
      const target = document.querySelector(`.${cls}`);
      if (target) target.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  }

  // Compare dropdowns: swap classes
  $$("select[data-compare]").forEach(sel => {
    sel.addEventListener("change", () => {
      const key = sel.getAttribute("data-compare");
      const prev = document.querySelector(`[data-compare-preview="${key}"]`);
      if (!prev) return;
      prev.className = "compare-preview " + sel.value;
    });
  });
})();
