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

  // Unicode maps
  const mapAZ = (startUpper, startLower) => {
    const A = "A".charCodeAt(0), Z = "Z".charCodeAt(0);
    const a = "a".charCodeAt(0), z = "z".charCodeAt(0);
    const map = new Map();
    for (let i = 0; i <= Z - A; i++) {
      map.set(String.fromCharCode(A + i), String.fromCodePoint(startUpper + i));
      map.set(String.fromCharCode(a + i), String.fromCodePoint(startLower + i));
    }
    return map;
  };

  const MAPS = {
    bold: mapAZ(0x1D400, 0x1D41A),
    italic: mapAZ(0x1D434, 0x1D44E),
    bolditalic: mapAZ(0x1D468, 0x1D482),
    monospace: mapAZ(0x1D670, 0x1D68A),
    script: new Map([...mapAZ(0x1D49C, 0x1D4B6), ['B', 'ℬ'], ['E', 'ℰ'], ['F', 'ℱ'], ['H', 'ℋ'], ['I', 'ℐ'], ['L', 'ℒ'], ['M', 'ℳ'], ['R', 'ℛ'], ['e', 'ℯ'], ['g', 'ℊ'], ['o', 'ℴ']]),
    boldscript: mapAZ(0x1D4D0, 0x1D4EA),
    fraktur: new Map([...mapAZ(0x1D504, 0x1D51E), ['C', 'ℭ'], ['H', 'ℌ'], ['I', 'ℐ'], ['R', 'ℜ'], ['Z', 'ℨ']]),
    boldfraktur: mapAZ(0x1D56C, 0x1D586),
    doublestruck: new Map([...mapAZ(0x1D538, 0x1D552), ['C', 'ℂ'], ['H', 'ℍ'], ['N', 'ℕ'], ['P', 'ℙ'], ['Q', 'ℚ'], ['R', 'ℝ'], ['Z', 'ℤ']]),
    sans: mapAZ(0x1D5A0, 0x1D5BA),
    sansbold: mapAZ(0x1D5D4, 0x1D5EE),
    sansitalic: mapAZ(0x1D608, 0x1D622),
    sansbolditalic: mapAZ(0x1D63C, 0x1D656),
    fullwidth: (() => {
      const map = new Map();
      const chars = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
      for (let i = 0; i < chars.length; i++) {
        map.set(chars[i], String.fromCharCode(0xFF01 + i));
      }
      return map;
    })(),
  };

  const applyMap = (txt, map) => txt.split("").map(ch => map.get(ch) || ch).join("");

  const transformIG = (txt, style) => {
    if (MAPS[style]) return applyMap(txt, MAPS[style]);

    switch (style) {
      case "smallcaps":
        const small = {
          a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
          k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ",
          u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
        };
        return txt.split("").map(ch => small[ch.toLowerCase()] || ch).join("");
      case "bubble":
        return txt.split("").map(ch => {
          const c = ch.charCodeAt(0);
          if (c >= 65 && c <= 90) return String.fromCodePoint(0x24B6 + (c - 65));
          if (c >= 97 && c <= 122) return String.fromCodePoint(0x24D0 + (c - 97));
          return ch;
        }).join("");
      case "blackbubble":
        return txt.split("").map(ch => {
          const c = ch.charCodeAt(0);
          if (c >= 65 && c <= 90) return String.fromCodePoint(0x1F150 + (c - 65));
          if (c >= 97 && c <= 122) return String.fromCodePoint(0x1F150 + (c - 97));
          return ch;
        }).join("");
      case "square":
        return txt.split("").map(ch => {
          const c = ch.charCodeAt(0);
          if (c >= 65 && c <= 90) return String.fromCodePoint(0x1F170 + (c - 65));
          if (c >= 97 && c <= 122) return String.fromCodePoint(0x1F170 + (c - 97));
          return ch;
        }).join("");
      case "blacksquare":
        return txt.split("").map(ch => {
          const c = ch.charCodeAt(0);
          if (c >= 65 && c <= 90) return String.fromCodePoint(0x1F180 + (c - 65));
          if (c >= 97 && c <= 122) return String.fromCodePoint(0x1F180 + (c - 97));
          return ch;
        }).join("");
      case "strikethrough": return txt.split("").map(ch => ch + "\u0336").join("");
      case "underline": return txt.split("").map(ch => ch + "\u0332").join("");
      case "doubleunderline": return txt.split("").map(ch => ch + "\u0333").join("");
      case "slash": return txt.split("").map(ch => ch + "\u0338").join("");
      case "wavy": return txt.split("").map(ch => ch + "\u0330").join("");
      case "sparkles": return "✨ " + txt + " ✨";
      case "hearts": return "💕 " + txt + " 💕";
      case "stars": return "⭐ " + txt + " ⭐";
      case "reversed": return txt.split("").reverse().join("");
      case "knight": return "⚔️ " + txt + " ⚔️";
      case "arrow": return "➴ " + txt + " ➶";
      case "wings": return "꧁ " + txt + " ꧂";
      case "bracket": return "【 " + txt + " 】";
      case "music": return "🎵 " + txt + " 🎵";
      case "flower": return "✿ " + txt + " ✿";
      case "sunny": return "☀ " + txt + " ☀";
      default: return txt;
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

  // Common copy listener
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy], [data-copy-special]");
    if (!btn) return;

    let text = "";
    if (btn.hasAttribute("data-copy")) {
      const wrap = btn.closest("article");
      const prev = wrap?.querySelector("[data-preview]");
      text = prev?.textContent || getText();
    } else {
      // Special copy (e.g. from trending)
      const style = btn.getAttribute("data-copy-special");
      const raw = getText();
      text = style.startsWith("f-") ? raw : transformIG(raw, style);
    }

    try {
      await copyToClipboard(text);
      setCopied(btn);
    } catch { }
  });

  // Trending scroll
  const trending = $("#trendingRow");
  if (trending) {
    trending.addEventListener("click", (e) => {
      const b = e.target.closest("[data-trend]");
      if (!b) return;
      const cls = b.getAttribute("data-trend");
      const target = document.querySelector(`.${cls}`);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  // Compare logic: dropdown change
  $$("select[data-compare]").forEach(sel => {
    sel.addEventListener("change", () => {
      const key = sel.getAttribute("data-compare");
      const prev = document.querySelector(`[data-compare-preview="${key}"]`);
      if (!prev) return;

      const val = sel.value;
      prev.textContent = val.startsWith("f-") ? getText() : transformIG(getText(), val);
      prev.className = "compare-preview " + (val.startsWith("f-") ? val : "");
    });
  });

  // Compare search logic
  $$(".font-search").forEach(input => {
    input.addEventListener("input", () => {
      const q = input.value.toLowerCase();
      const key = input.dataset.search;
      const select = document.querySelector(`select[data-compare="${key}"]`);
      if (!select) return;

      Array.from(select.options).forEach(opt => {
        const match = opt.text.toLowerCase().includes(q);
        opt.style.display = match ? "" : "none";
      });
    });
  });

  // Sync compare previews on text change
  const syncCompare = () => {
    $$("select[data-compare]").forEach(sel => {
      const key = sel.getAttribute("data-compare");
      const prev = document.querySelector(`[data-compare-preview="${key}"]`);
      if (!prev) return;
      const val = sel.value;
      prev.textContent = val.startsWith("f-") ? getText() : transformIG(getText(), val);
    });
  };

  if (userText) {
    userText.addEventListener("input", syncCompare);
  }

  // ─── PNG Download ───
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-download]");
    if (!btn) return;

    const card = btn.closest(".font-card");
    if (!card) return;
    const previewEl = card.querySelector("[data-preview]");
    if (!previewEl) return;

    // Get font name for the filename
    const labelEl = card.querySelector(".font-label");
    const fontName = (labelEl?.textContent || "font").trim().replace(/\s+/g, "-").toLowerCase();

    // Show processing spinner
    const dlIcon = btn.querySelector(".dl-icon");
    btn.classList.add("is-processing");
    if (dlIcon) dlIcon.textContent = "";
    const textNode = [...btn.childNodes].find(n => n.nodeType === Node.TEXT_NODE);

    try {
      if (typeof html2canvas === "undefined") {
        throw new Error("html2canvas not loaded");
      }

      // Create an off-screen container for exactly 1200x630 rendering
      const offscreen = document.createElement("div");
      offscreen.style.position = "absolute";
      offscreen.style.left = "-9999px";
      offscreen.style.top = "-9999px";
      offscreen.style.width = "1200px";
      offscreen.style.height = "630px";
      offscreen.style.display = "flex";
      offscreen.style.alignItems = "center";
      offscreen.style.justifyContent = "center";
      offscreen.style.background = "transparent";
      offscreen.style.color = getComputedStyle(previewEl).color;
      offscreen.style.fontFamily = getComputedStyle(previewEl).fontFamily;
      offscreen.style.fontSize = "160px"; // Large font size for 1200x630 canvas
      offscreen.style.textAlign = "center";
      offscreen.style.padding = "40px";
      offscreen.style.boxSizing = "border-box";
      offscreen.style.wordBreak = "break-word";
      offscreen.textContent = previewEl.textContent;

      document.body.appendChild(offscreen);

      const canvas = await html2canvas(offscreen, {
        backgroundColor: null, // null ensures transparent background
        width: 1200,
        height: 630,
        scale: 1, // EXACT size
        useCORS: true,
        logging: false,
      });

      document.body.removeChild(offscreen);

      const link = document.createElement("a");
      link.download = `fontify-${fontName}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();

      // Show done state
      btn.classList.remove("is-processing");
      btn.classList.add("is-done");
      if (dlIcon) dlIcon.textContent = "✓";
      if (textNode) textNode.textContent = " Done";

      setTimeout(() => {
        btn.classList.remove("is-done");
        if (dlIcon) dlIcon.textContent = "⬇";
        if (textNode) textNode.textContent = " PNG";
      }, 2000);

    } catch (err) {
      btn.classList.remove("is-processing");
      if (dlIcon) dlIcon.textContent = "⬇";
      if (textNode) textNode.textContent = " PNG";
      console.error("PNG download failed:", err);
    }
  });
})();

