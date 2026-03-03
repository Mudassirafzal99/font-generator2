
/* Instagram Fancy Font Generator Engine Auto-Generated */

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const alphabets = {
  normal: chars,
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ",
  bold: "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳",
  boldItalic: "𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯",
  sansItalic: "𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻",
  sansBoldItalic: "𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯",
  monospace: "𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣",
  script: "𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏",
  boldScript: "𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃",
  fraktur: "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷",
  boldFraktur: "𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟",
  doubleStruck: "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫",
  fullwidth: "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",
  smallCaps: "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ",
  squared: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉",
  negativeSquared: "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉",
  circled: "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",
  negativeCircled: "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩",
  rusify: "卂乃匚刀乇下G卄工丁长乚从𠘨口尸Q尺丂丅凵V山メ丫乙卂乃匚刀乇下G卄工丁长乚从𠘨口尸Q尺丂丅凵V山メ丫乙",
  greek: "αႦƈԃҽϝɠԋιʝƙʅɱɳσρϙɾʂƚυʋɯxყȥαႦƈԃҽϝɠԋιʝƙʅɱɳσρϙɾʂƚυʋɯxყȥ",
  flipped: "ɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇnʌʍxʎzɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇnʌʍxʎz",
  currency: "₳฿₵ĐɆ₣₲ⱧłJ₭ⱠM₦Ø₱QⱤ$₮UV₩XYⱫ₳฿₵ĐɆ₣₲ⱧłJ₭ⱠM₦Ø₱QⱤ$₮UV₩XYⱫ",
  greek2: "🇵яєνιєω", // simplification logic placeholder
  greek3: "PЯΣVIΣЩ"
};

const mapChar = (c, style) => {
  const code = c.charCodeAt(0);
  let idx = -1;
  if (code >= 65 && code <= 90) idx = code - 65;
  if (code >= 97 && code <= 122) idx = code - 97 + 26;
  if (idx === -1) return c;

  if (style.startsWith('box_') || style.startsWith('joiner_') || style === 'slash' || style === 'strike' || style === 'tildeStrike' || style === 'underline') {
    return c; // Handled specially
  }

  const mapStr = alphabets[style] || alphabets.normal;
  const arr = Array.from(mapStr);
  return arr[idx] || c;
};

const applySpecialRules = (text, rule) => {
  if (rule === 'slash') return text.split('').join('\u0337') + '\u0337';
  if (rule === 'strike') return text.split('').join('\u0336') + '\u0336';
  if (rule === 'tildeStrike') return text.split('').join('\u0334') + '\u0334';
  if (rule === 'underline') return text.split('').join('\u0332') + '\u0332';
  if (rule === 'doubleUnderline') return text.split('').join('\u0333') + '\u0333';
  if (rule === 'crossAboveBelow') return text.split('').join('\u033D') + '\u033D';

  if (rule === 'spaced' || rule === 'spacedUpper') {
    let t = rule === 'spacedUpper' ? text.toUpperCase() : text;
    return t.split('').join(' ');
  }

  if (rule.startsWith('box_')) {
    const wrappers = {
      "box_weird": ["[", "]"],
      "box_thick": ["⟦", "⟧"],
      "box_diametric": ["⦑", "⦒"],
      "box_dot": ["꜍", "꜉"],
      "box_rounddot": ["﴾", "﴿"],
      "box_angular": ["⧼", "⧽"],
      "box_arrow": ["⦏", "⦎"],
      "box_bbracket": ["【", "】"],
      "box_wbracket": ["〖", "〗"]
    };
    const [b, a] = wrappers[rule] || ["[", "]"];
    return text.split('').map(c => b + c + a).join('');
  }

  if (rule.startsWith('joiner_')) {
    const chars = {
      "joiner_heart": "♥",
      "joiner_wavy": "≋",
      "joiner_dotty": "░",
      "joiner_m_smallcaps": "░",
      "joiner_m_spaced": "░"
    };
    const j = chars[rule];
    let res = text.split('').join(j);
    if (rule === 'joiner_heart') return j + res + j;
    if (rule === 'joiner_wavy') return j + res + j;
    if (rule === 'joiner_dotty') return j + res + j;
    return res;
  }
  return text;
};

function encodeFont(text, font) {
  let baseText = text;
  if (font.base === 'upper') baseText = baseText.toUpperCase();
  if (font.base === 'smallCaps') baseText = baseText.toLowerCase();

  let mapped = baseText.split('').map(c => mapChar(c, font.base)).join('');
  mapped = applySpecialRules(mapped, font.base);

  return (font.prefix || '') + mapped + (font.suffix || '');
}


const fontsList = [
  {
    "category": "Calligraphy Fonts",
    "name": "Script (Cursive)",
    "prefix": "",
    "suffix": "",
    "base": "script"
  },
  {
    "category": "Calligraphy Fonts",
    "name": "Bold Script",
    "prefix": "",
    "suffix": "",
    "base": "boldScript"
  },
  {
    "category": "Calligraphy Fonts",
    "name": "Fraktur (Gothic)",
    "prefix": "",
    "suffix": "",
    "base": "fraktur"
  },
  {
    "category": "Calligraphy Fonts",
    "name": "Bold Fraktur",
    "prefix": "",
    "suffix": "",
    "base": "boldFraktur"
  },
  {
    "category": "Calligraphy Fonts",
    "name": "Double Struck",
    "prefix": "",
    "suffix": "",
    "base": "doubleStruck"
  },
  {
    "category": "Top Instagram Fonts",
    "name": "RainbowPreview",
    "prefix": "▄︻デ",
    "suffix": "══━一",
    "base": "slash"
  },
  {
    "category": "Top Instagram Fonts",
    "name": "TextGunPreview",
    "prefix": "•♬•♫",
    "suffix": "•♬•♫•",
    "base": "doubleStruck"
  },
  {
    "category": "Top Instagram Fonts",
    "name": "DoubleStrikeDeco",
    "prefix": "꧁𓊈𒆜",
    "suffix": "𒆜𓊉꧂",
    "base": "negativeSquared"
  },
  {
    "category": "Top Instagram Fonts",
    "name": "BlackSquaredD",
    "prefix": "",
    "suffix": "",
    "base": "blackSquaredD"
  },
  {
    "category": "Top Instagram Fonts",
    "name": "ClassicPreview",
    "prefix": "乂 ",
    "suffix": " 乂",
    "base": "fullwidth"
  },
  {
    "category": "Top Instagram Fonts",
    "name": "CrossedPreview",
    "prefix": "𝄟✮͢🦋⃟≛⃝𝄟✮⃝ ",
    "suffix": "🍁⃝",
    "base": "greek2"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "Italic1",
    "prefix": "",
    "suffix": "",
    "base": "boldItalic"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "Italic2",
    "prefix": "",
    "suffix": "",
    "base": "boldScript"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "CursiveBold",
    "prefix": "",
    "suffix": "",
    "base": "bold"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "Bold",
    "prefix": "",
    "suffix": "",
    "base": "script"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "Cursive",
    "prefix": "",
    "suffix": "",
    "base": "smallCaps"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "Tiny",
    "prefix": "",
    "suffix": "",
    "base": "boldFraktur"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "FrakturBold",
    "prefix": "",
    "suffix": "",
    "base": "doubleStruck"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "DoubleStruck",
    "prefix": "",
    "suffix": "",
    "base": "greek"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "GreekStyle",
    "prefix": "",
    "suffix": "",
    "base": "negativeCircled"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "BlackBubble",
    "prefix": "",
    "suffix": "",
    "base": "flags"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "BlueFont",
    "prefix": "",
    "suffix": "",
    "base": "fraktur"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "Fraktur",
    "prefix": "",
    "suffix": "",
    "base": "sansItalic"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "ItalicBold",
    "prefix": "",
    "suffix": "",
    "base": "sansBoldItalic"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "BoldItalic",
    "prefix": "",
    "suffix": "",
    "base": "monospace"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "Monospace",
    "prefix": "",
    "suffix": "",
    "base": "circled"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "BubbleFont",
    "prefix": "",
    "suffix": "",
    "base": "negativeSquared"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "BlackSquare",
    "prefix": "",
    "suffix": "",
    "base": "squared"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "WhiteSquare",
    "prefix": "",
    "suffix": "",
    "base": "currency"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "CurrencyStyle",
    "prefix": "",
    "suffix": "",
    "base": "sunburst"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "InkStyle",
    "prefix": "",
    "suffix": "",
    "base": "cyrillic"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "Rusify Font",
    "prefix": "",
    "suffix": "",
    "base": "rusify"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "JapanFlip",
    "prefix": "",
    "suffix": "",
    "base": "flipped"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "FlippedCaps",
    "prefix": "",
    "suffix": "",
    "base": "canada"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "NeonGlow",
    "prefix": "",
    "suffix": "",
    "base": "greek3"
  },
  {
    "category": "Common Instagram Fonts",
    "name": "UpperCase",
    "prefix": "",
    "suffix": "",
    "base": "upper"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "ButterflyCursive",
    "prefix": "🦋",
    "suffix": "🦋",
    "base": "boldScript"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "CursiveBoldD",
    "prefix": "ıllıllı",
    "suffix": "ıllıllı",
    "base": "normal"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "VenomStyle",
    "prefix": "╚»★«╝",
    "suffix": "╚»★«╝",
    "base": "normal"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "AppleStyle",
    "prefix": "꧁༺",
    "suffix": "༻꧂",
    "base": "squiggle3"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "StylishNames1",
    "prefix": "꧁ঔৣ☬",
    "suffix": "☬ঔৣ꧂",
    "base": "boldScript"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "OmStyle",
    "prefix": "꧁𓊈𒆜",
    "suffix": "𒆜𓊉꧂",
    "base": "boldScript"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "Cursive Decor",
    "prefix": "꧁💖 ",
    "suffix": " 💖꧂",
    "base": "rusify"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "JapanDeco",
    "prefix": "♥️꯭ ⃝𝆺𝅥⃝꯭🫧꯭𓋥꯭⟬꯭",
    "suffix": "⟭𓋥꯭♥️꯭ ⃝꯭𝆺𝅥⃝꯭🫧",
    "base": "squiggle3"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "JapanDeco1",
    "prefix": "꧁༒☬",
    "suffix": "☬༒꧂",
    "base": "boldScript"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "StylishBoxed",
    "prefix": "★彡[",
    "suffix": "]彡★",
    "base": "smallCaps"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "MusicPanda",
    "prefix": "👑⃟≛⃝ ",
    "suffix": "🕊️⃟⋆≛⃝",
    "base": "greek"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "GreekDecor",
    "prefix": "",
    "suffix": "",
    "base": "negativeCircled"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "StylishBubble",
    "prefix": "",
    "suffix": "",
    "base": "negativeSquared"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "DecoratedDoubleStruck",
    "prefix": "꧁𓊈𒆜",
    "suffix": "𒆜𓊉꧂",
    "base": "negativeSquared"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "WingsSparkle",
    "prefix": "🦋✨",
    "suffix": "🕊✩⍣",
    "base": "normal"
  },
  {
    "category": "Most Popular Instagram Name Fonts",
    "name": "CrazyStyle",
    "prefix": "",
    "suffix": "",
    "base": "normal"
  },
  {
    "category": "Attitude Instagram Name Fonts",
    "name": "DecorShadowStyle",
    "prefix": "◥꧁ད",
    "suffix": "ཌ꧂◤",
    "base": "boldFraktur"
  },
  {
    "category": "Attitude Instagram Name Fonts",
    "name": "AttitudeStyle1",
    "prefix": "👑⃝🕊⃝❂͜͡ ",
    "suffix": "⍣⃟❂͜͡࿐",
    "base": "boldScript"
  },
  {
    "category": "Attitude Instagram Name Fonts",
    "name": "OfficialVibeFont",
    "prefix": "◈➻❥≛⃝ ❍͜ғͥғɪᴄͣɪͫ͢͢͢ʟ",
    "suffix": "❤⃟",
    "base": "normal"
  },
  {
    "category": "Attitude Instagram Name Fonts",
    "name": "AttitudeSquare",
    "prefix": "꧁༺",
    "suffix": "༻꧂",
    "base": "currency"
  },
  {
    "category": "Attitude Instagram Name Fonts",
    "name": "InstaBoyStyle",
    "prefix": "★彡[ ",
    "suffix": "]彡★",
    "base": "flags"
  },
  {
    "category": "Instagram Name Fonts for Girls",
    "name": "FloralCursive",
    "prefix": "🌸💕",
    "suffix": "💕🌸",
    "base": "boldScript"
  },
  {
    "category": "Instagram Name Fonts for Girls",
    "name": "GirlStyle1",
    "prefix": "༒͢🦋⃟ ",
    "suffix": "🦋⃟💙࿐",
    "base": "boldScript"
  },
  {
    "category": "Instagram Name Fonts for Girls",
    "name": "GirlStyle2",
    "prefix": "༒͢🦋⃟ ",
    "suffix": "🦋⃟💙࿐",
    "base": "negativeSquared"
  },
  {
    "category": "Instagram Name Fonts for Girls",
    "name": "GirlStyle3",
    "prefix": "༒🦋✨",
    "suffix": "✨🦋",
    "base": "squiggle3"
  },
  {
    "category": "Instagram Name Fonts for Girls",
    "name": "GirlStyle4",
    "prefix": "👑⃟≛⃝ 🕊⃟⋆≛⃝ ",
    "suffix": "",
    "base": "greek2"
  },
  {
    "category": "Instagram Name Fonts for Girls",
    "name": "GirlStyle7",
    "prefix": "꧁༺༒͢❥🦋⃟",
    "suffix": "♥⃟🕊༻꧂",
    "base": "squiggle7"
  },
  {
    "category": "Instagram Name Fonts for Girls",
    "name": "GirlStyle8",
    "prefix": "❦✿⍣✡ღ",
    "suffix": "✡⍣✿❦☠︎ঔৣ",
    "base": "boldFraktur"
  },
  {
    "category": "Instagram Name Fonts for Girls",
    "name": "GirlStyle9",
    "prefix": "🦋⃟ ",
    "suffix": "💙࿐★",
    "base": "boldFraktur"
  },
  {
    "category": "Instagram Name Fonts for Girls",
    "name": "GirlStyle10",
    "prefix": "♛꧁💖💞༒𓆩",
    "suffix": "𓆪༒💕💖꧂♛•°",
    "base": "boldFraktur"
  },
  {
    "category": "Instagram Name Fonts for Girls",
    "name": "GirlStyle11",
    "prefix": "༒✮͢🦋⃟≛⃝ ",
    "suffix": "=✰ ❤️",
    "base": "squiggle3"
  },
  {
    "category": "Instagram Name Fonts for Girls",
    "name": "GirlStyle12",
    "prefix": "𝄟✮͢🦋⃟≛⃝𝄟✮⃝ ",
    "suffix": "🍁⃝",
    "base": "greek2"
  },
  {
    "category": "Strikes Instagram Name Fonts",
    "name": "Strike",
    "prefix": "",
    "suffix": "",
    "base": "strike"
  },
  {
    "category": "Strikes Instagram Name Fonts",
    "name": "StrikeThrough",
    "prefix": "",
    "suffix": "",
    "base": "tildeStrike"
  },
  {
    "category": "Strikes Instagram Name Fonts",
    "name": "TildeStrikeThrough",
    "prefix": "👑__",
    "suffix": "__👑",
    "base": "monospace"
  },
  {
    "category": "Strikes Instagram Name Fonts",
    "name": "MonospaceSlashThrough",
    "prefix": "",
    "suffix": "",
    "base": "slash"
  },
  {
    "category": "Strikes Instagram Name Fonts",
    "name": "SlashThrough",
    "prefix": "",
    "suffix": "",
    "base": "underline"
  },
  {
    "category": "Strikes Instagram Name Fonts",
    "name": "Underline",
    "prefix": "",
    "suffix": "",
    "base": "underline"
  },
  {
    "category": "Floral Instagram Name Fonts",
    "name": "Floral1",
    "prefix": "˙·٠•●★[ ",
    "suffix": " ]★●•٠·˙",
    "base": "normal"
  },
  {
    "category": "Floral Instagram Name Fonts",
    "name": "Floral2",
    "prefix": "✿⁂★ ",
    "suffix": " ★⁂✿",
    "base": "normal"
  },
  {
    "category": "Floral Instagram Name Fonts",
    "name": "Floral3",
    "prefix": "◦•●◉✿⚘ ",
    "suffix": " ⚘✿◉●•◦",
    "base": "normal"
  },
  {
    "category": "Floral Instagram Name Fonts",
    "name": "Floral4",
    "prefix": "꧁✿[ ",
    "suffix": " ]✿꧂",
    "base": "normal"
  },
  {
    "category": "Floral Instagram Name Fonts",
    "name": "Floral5",
    "prefix": "◦•●◉✿[ ",
    "suffix": " ]✿◉●•◦",
    "base": "negativeCircled"
  },
  {
    "category": "Floral Instagram Name Fonts",
    "name": "Loved",
    "prefix": "ıllıllı",
    "suffix": "ıllıllı",
    "base": "normal"
  },
  {
    "category": "Gaming Instagram Name Fonts",
    "name": "BoldItalicD",
    "prefix": "◤ ",
    "suffix": " ◢",
    "base": "sansBoldItalic"
  },
  {
    "category": "Gaming Instagram Name Fonts",
    "name": "Op",
    "prefix": "༄ᴼᴾ✿",
    "suffix": "࿐",
    "base": "normal"
  },
  {
    "category": "Gaming Instagram Name Fonts",
    "name": "Sword1",
    "prefix": "o==[]::::",
    "suffix": "::::::>",
    "base": "normal"
  },
  {
    "category": "Gaming Instagram Name Fonts",
    "name": "Sword2",
    "prefix": "¤==[]>>>>",
    "suffix": ">>>>>",
    "base": "normal"
  },
  {
    "category": "Gaming Instagram Name Fonts",
    "name": "Scar",
    "prefix": "︻╦╤─ ",
    "suffix": " ─╤╦︻",
    "base": "normal"
  },
  {
    "category": "Gaming Instagram Name Fonts",
    "name": "Gun",
    "prefix": "▄︻┻═┳一•",
    "suffix": "✿࿐",
    "base": "negativeCircled"
  },
  {
    "category": "Fancy Instagram Name Fonts",
    "name": "Sparkles",
    "prefix": "˜”°•.˜”°• ",
    "suffix": " •°”˜.•°”˜",
    "base": "normal"
  },
  {
    "category": "Fancy Instagram Name Fonts",
    "name": "Musical",
    "prefix": "♫♪♩·.¸¸.·♩♪♫ ",
    "suffix": " ♫♪♩·.¸¸.·♩♪♫",
    "base": "normal"
  },
  {
    "category": "Fancy Instagram Name Fonts",
    "name": "Barcode",
    "prefix": "▌│█║▌║▌║ ",
    "suffix": " ║▌║▌║█│▌",
    "base": "normal"
  },
  {
    "category": "Fancy Instagram Name Fonts",
    "name": "Equilizer",
    "prefix": "▁ ▂ ▄ ▅ ▆ ▇ █ ",
    "suffix": " █ ▇ ▆ ▅ ▄ ▂ ▁",
    "base": "normal"
  },
  {
    "category": "Bricks Instagram Name Fonts",
    "name": "Bricks1",
    "prefix": "█⃞▓⃞▒⃞[",
    "suffix": "▒⃞▓⃞█⃞",
    "base": "smallCaps"
  },
  {
    "category": "Bricks Instagram Name Fonts",
    "name": "Bricks2",
    "prefix": "█▓▒░",
    "suffix": "░▒▓█",
    "base": "squared"
  },
  {
    "category": "Bricks Instagram Name Fonts",
    "name": "Bricks3",
    "prefix": "█▓▒░",
    "suffix": "░▒▓█",
    "base": "negativeSquared"
  },
  {
    "category": "Bricks Instagram Name Fonts",
    "name": "Bricks4",
    "prefix": "█▓▒░⡷",
    "suffix": "⢾░▒▓█",
    "base": "greek3"
  },
  {
    "category": "Bricks Instagram Name Fonts",
    "name": "Bricks5",
    "prefix": "▀▄▀▄▀▄",
    "suffix": "▀▄▀▄▀▄",
    "base": "greek3"
  },
  {
    "category": "Bricks Instagram Name Fonts",
    "name": "Bricks6",
    "prefix": "▀▄▀▄▀▄",
    "suffix": "▀▄▀▄▀▄",
    "base": "squared"
  },
  {
    "category": "Bricks Instagram Name Fonts",
    "name": "Bricks7",
    "prefix": "▀▄▀▄▀▄",
    "suffix": "▀▄▀▄▀▄",
    "base": "negativeSquared"
  },
  {
    "category": "Squiggle Instagram Name Fonts",
    "name": "Squiggle1",
    "prefix": "",
    "suffix": "",
    "base": "squiggle1"
  },
  {
    "category": "Squiggle Instagram Name Fonts",
    "name": "Squiggle2",
    "prefix": "",
    "suffix": "",
    "base": "squiggle2"
  },
  {
    "category": "Squiggle Instagram Name Fonts",
    "name": "Squiggle3",
    "prefix": "",
    "suffix": "",
    "base": "squiggle3"
  },
  {
    "category": "Squiggle Instagram Name Fonts",
    "name": "Squiggle4",
    "prefix": "",
    "suffix": "",
    "base": "squiggle4"
  },
  {
    "category": "Squiggle Instagram Name Fonts",
    "name": "Squiggle5",
    "prefix": "",
    "suffix": "",
    "base": "squiggle5"
  },
  {
    "category": "Squiggle Instagram Name Fonts",
    "name": "Squiggle6",
    "prefix": "",
    "suffix": "",
    "base": "squiggle6"
  },
  {
    "category": "Squiggle Instagram Name Fonts",
    "name": "Squiggle7",
    "prefix": "",
    "suffix": "",
    "base": "squiggle7"
  },
  {
    "category": "Squiggle Instagram Name Fonts",
    "name": "Wide",
    "prefix": "",
    "suffix": "",
    "base": "fullwidth"
  },
  {
    "category": "Squiggle Instagram Name Fonts",
    "name": "Doublestruck2",
    "prefix": "⫷【⪩",
    "suffix": "⪨】⫸",
    "base": "doubleStruck"
  },
  {
    "category": "Squiggle Instagram Name Fonts",
    "name": "DoubleUnderline",
    "prefix": "",
    "suffix": "",
    "base": "doubleUnderline"
  },
  {
    "category": "Weird Instagram Name Fonts",
    "name": "BridgeAbove",
    "prefix": "",
    "suffix": "",
    "base": "bridgeAbove"
  },
  {
    "category": "Weird Instagram Name Fonts",
    "name": "BridgeBelow",
    "prefix": "",
    "suffix": "",
    "base": "bridgeBelow"
  },
  {
    "category": "Weird Instagram Name Fonts",
    "name": "CrossAboveBelow",
    "prefix": "",
    "suffix": "",
    "base": "crossAboveBelow"
  },
  {
    "category": "Weird Instagram Name Fonts",
    "name": "Candrabindu",
    "prefix": "",
    "suffix": "",
    "base": "candrabindu"
  },
  {
    "category": "Weird Instagram Name Fonts",
    "name": "ZigzagAbove",
    "prefix": "",
    "suffix": "",
    "base": "zigzagAbove"
  },
  {
    "category": "Weird Instagram Name Fonts",
    "name": "Sunflower",
    "prefix": "🌻 ( ",
    "suffix": " ) 🌻",
    "base": "monospace"
  },
  {
    "category": "Crazy Instagram Name Fonts",
    "name": "Stinky",
    "prefix": "",
    "suffix": "",
    "base": "stinky"
  },
  {
    "category": "Crazy Instagram Name Fonts",
    "name": "ArrowBelow",
    "prefix": "",
    "suffix": "",
    "base": "arrowBelow"
  },
  {
    "category": "Crazy Instagram Name Fonts",
    "name": "Symbol",
    "prefix": "",
    "suffix": "",
    "base": "symbol"
  },
  {
    "category": "Boxed Instagram Name Fonts",
    "name": "Weirdbox",
    "prefix": "",
    "suffix": "",
    "base": "box_weird"
  },
  {
    "category": "Boxed Instagram Name Fonts",
    "name": "Thickblock",
    "prefix": "",
    "suffix": "",
    "base": "box_thick"
  },
  {
    "category": "Boxed Instagram Name Fonts",
    "name": "Diametricblock",
    "prefix": "",
    "suffix": "",
    "base": "box_diametric"
  },
  {
    "category": "Boxed Instagram Name Fonts",
    "name": "Dotbox",
    "prefix": "",
    "suffix": "",
    "base": "box_dot"
  },
  {
    "category": "Boxed Instagram Name Fonts",
    "name": "Rounddot",
    "prefix": "",
    "suffix": "",
    "base": "box_rounddot"
  },
  {
    "category": "Boxed Instagram Name Fonts",
    "name": "Angular",
    "prefix": "",
    "suffix": "",
    "base": "box_angular"
  },
  {
    "category": "Boxed Instagram Name Fonts",
    "name": "Arrowblock",
    "prefix": "",
    "suffix": "",
    "base": "box_arrow"
  },
  {
    "category": "Boxed Instagram Name Fonts",
    "name": "BBracket",
    "prefix": "",
    "suffix": "",
    "base": "box_bbracket"
  },
  {
    "category": "Boxed Instagram Name Fonts",
    "name": "WBracket",
    "prefix": "",
    "suffix": "",
    "base": "box_wbracket"
  },
  {
    "category": "Joiner Instagram Name Fonts",
    "name": "HeartsBetween",
    "prefix": "",
    "suffix": "",
    "base": "joiner_heart"
  },
  {
    "category": "Joiner Instagram Name Fonts",
    "name": "WavyJoiner",
    "prefix": "",
    "suffix": "",
    "base": "joiner_wavy"
  },
  {
    "category": "Joiner Instagram Name Fonts",
    "name": "DottyJoiner",
    "prefix": "",
    "suffix": "",
    "base": "joiner_dotty"
  },
  {
    "category": "Joiner Instagram Name Fonts",
    "name": "DottyJoinerG",
    "prefix": "༄✿",
    "suffix": "✿࿐",
    "base": "joiner_m_smallcaps"
  },
  {
    "category": "Joiner Instagram Name Fonts",
    "name": "WideDottyJoiner",
    "prefix": "",
    "suffix": "",
    "base": "fullwidth"
  },
  {
    "category": "Joiner Instagram Name Fonts",
    "name": "WideDottyJoiner2",
    "prefix": "",
    "suffix": "",
    "base": "joiner_m_spaced"
  },
  {
    "category": "Cursive Instagram Name Fonts",
    "name": "CursiveNameFonts",
    "prefix": "༒✮͢🦋⃟≛⃝ ",
    "suffix": "=✰ ❤️",
    "base": "boldScript"
  },
  {
    "category": "Cursive Instagram Name Fonts",
    "name": "CursiveNameFonts1",
    "prefix": "◦•●◉✿",
    "suffix": "✿◉●•◦",
    "base": "boldScript"
  },
  {
    "category": "Cursive Instagram Name Fonts",
    "name": "CursiveNameFonts2",
    "prefix": "꧁",
    "suffix": "꧂",
    "base": "boldScript"
  },
  {
    "category": "Cursive Instagram Name Fonts",
    "name": "CursiveNameFonts3",
    "prefix": "🦋⁂༄",
    "suffix": "༄⁂🦋",
    "base": "boldScript"
  },
  {
    "category": "Cursive Instagram Name Fonts",
    "name": "CursiveNameFonts4",
    "prefix": "𓆩💜𓆪",
    "suffix": "𓆩💜𓆪",
    "base": "boldScript"
  },
  {
    "category": "Cursive Instagram Name Fonts",
    "name": "CursiveNameFonts5",
    "prefix": "💙",
    "suffix": "💙",
    "base": "boldScript"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "BubbleNameFonts",
    "prefix": "💎⟭⟬👑✨",
    "suffix": "⟭⟬✨💜💎",
    "base": "negativeCircled"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "BubbleNameFonts1",
    "prefix": "◦•●◉",
    "suffix": "◉●•◦",
    "base": "negativeCircled"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "BubbleNameFonts2",
    "prefix": "꧁★",
    "suffix": "★꧂",
    "base": "negativeCircled"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "BubbleNameFonts3",
    "prefix": "⏤͟͟͞➼⃟❦❤⃞ ",
    "suffix": "🤍⃟💜❥⃟࿐",
    "base": "negativeCircled"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "BubbleNameFonts4",
    "prefix": "ıllıllı",
    "suffix": "ıllıllı",
    "base": "negativeCircled"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "BubbleNameFonts5",
    "prefix": "꧁ঔৣ☬✞",
    "suffix": "✞☬ঔৣ꧂",
    "base": "negativeCircled"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "BoxNameFonts",
    "prefix": "◥꧁ད",
    "suffix": "ཌ꧂◤",
    "base": "negativeSquared"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "BoxNameFonts1",
    "prefix": "❚█══",
    "suffix": "══█❚",
    "base": "negativeSquared"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "BoxNameFonts2",
    "prefix": "⏤͟͟͞➼⃟❦❤⃞",
    "suffix": "🤍⃟💜❥⃟࿐",
    "base": "negativeSquared"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Happy Face Text",
    "prefix": "",
    "suffix": " (ㆆᴗㆆ)",
    "base": "normal"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Send Flower Text",
    "prefix": "",
    "suffix": " (ʘ‿ʘ)ノ✿",
    "base": "normal"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Shrug Lenny Face Text",
    "prefix": "¯\\_(ツ)_/¯ ",
    "suffix": " ¯\\_(ツ)_/¯",
    "base": "monospace"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Happy Text",
    "prefix": "(◉‿◉) ",
    "suffix": " (◉‿◉)❥⃟",
    "base": "normal"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Heart Eye Text",
    "prefix": "(｡♥‿♥｡) ",
    "suffix": " (｡♥‿♥｡)",
    "base": "normal"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Heart Face Fonts",
    "prefix": "(😍‿😍) ",
    "suffix": " (😍‿😍)",
    "base": "normal"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Cat Face Font",
    "prefix": "(=◍․̫◍=) ♥ ",
    "suffix": " (=◍․̫◍=)",
    "base": "normal"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Hidden Face Font",
    "prefix": "(-(-_( ",
    "suffix": " )_-)-)",
    "base": "normal"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Cute Text Style",
    "prefix": "♥ ",
    "suffix": " ♥ ▀▄▀▄▀▄",
    "base": "script"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Cute Text Style 2",
    "prefix": "🎀 ",
    "suffix": " 🎀 🍩 ⋆ 🍦 ⋆ 🍩",
    "base": "script"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Cute Text Style 3",
    "prefix": "♫♪ ",
    "suffix": " ♫♪ ๑۞๑,¸¸,ø¤º°`°๑۩",
    "base": "script"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Cute Text Style 4",
    "prefix": "ꕥ ",
    "suffix": " ꕥ 🐑 ⋆ 🐨",
    "base": "script"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Cute Text Style 5",
    "prefix": "🌀 ",
    "suffix": " 🌀 🐚 ⋆ 🐯 ⋆ 🐧",
    "base": "script"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Cute Text Style 6",
    "prefix": "Ƹ̵̡Ӝ̵̨̄Ʒ ",
    "suffix": " Ƹ̵̡Ӝ̵̨̄Ʒ 🍌 ⋆ 🍰 ⋆ 🍰",
    "base": "script"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Cute Text Style 7",
    "prefix": "⚜ ",
    "suffix": " ⚜ •°¯`••",
    "base": "script"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Cute Text Style 8",
    "prefix": "🌸 ",
    "suffix": " 🌸 •´¯`•»",
    "base": "script"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Cute Text Style 9",
    "prefix": "🌸 ",
    "suffix": " 🌸 🍬 ⋆ 🍪 ⋆ 🎂",
    "base": "script"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Christmas Fancy Text Generator",
    "prefix": "🎅 ",
    "suffix": " 🎅",
    "base": "squiggle4"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Santa Claus Fancy Font Style",
    "prefix": "☃️ ",
    "suffix": " ☃️",
    "base": "rusify"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Snowman Fancy Font Style",
    "prefix": "❄️ ",
    "suffix": " ❄️",
    "base": "squiggle2"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Snowflake Fancy Font Style",
    "prefix": "❄️ ",
    "suffix": " ❄️",
    "base": "squiggle4"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Fancy Font Style with Christmas emoji",
    "prefix": "¸.·✩·.¸¸.·¯⍣✩ ",
    "suffix": " ✩⍣¯·.¸¸.·✩·.¸",
    "base": "squiggle1"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Christmas fancy text",
    "prefix": "🎅🏮🌟🏮❄️ ",
    "suffix": " ❄️🏮🌟🏮🎅",
    "base": "squiggle3"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Italic1",
    "prefix": "",
    "suffix": "🐾 ⋆ 🐥",
    "base": "boldItalic"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Italic2",
    "prefix": "🌸 ",
    "suffix": "🌸 ✴❈",
    "base": "boldScript"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "CursiveBold",
    "prefix": "ꕥ  ",
    "suffix": " ꕥ •´¯`•»",
    "base": "bold"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Bold",
    "prefix": "꧁꫱꧂ ",
    "suffix": " ꧁꫱꧂ §.•´¨'°÷•..×",
    "base": "script"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Cursive",
    "prefix": "♫♪ ",
    "suffix": " ♫♪ ･ﾟ⋆",
    "base": "smallCaps"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Tiny",
    "prefix": "⚜ ",
    "suffix": " ⚜ ✧🌠⋆",
    "base": "boldFraktur"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "FrakturBold",
    "prefix": "᯽ ",
    "suffix": " ᯽ 🐫 ⋆ 🐥",
    "base": "doubleStruck"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "DoubleStruck",
    "prefix": "☘ ",
    "suffix": "  ☘ 🍰 ⋆ 🍑",
    "base": "greek"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "GreekStyle",
    "prefix": "🌸 ",
    "suffix": " 🌸 🍎 ⋆ 🍒 ⋆ 🍪",
    "base": "negativeCircled"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "BlackBubble",
    "prefix": "◦•●◉✿ ",
    "suffix": " ✿◉●•◦",
    "base": "flags"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "BlueFont",
    "prefix": "🐝♧ ",
    "suffix": " 🐳🐯",
    "base": "fraktur"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Fraktur",
    "prefix": "`•.¸¸.•´´¯`••._.•  ",
    "suffix": "  •._.••`¯´´•.¸¸.•`",
    "base": "sansItalic"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "ItalicBold",
    "prefix": "✊🐟 ",
    "suffix": " 🍩☢",
    "base": "sansBoldItalic"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Full Crazy Text Style",
    "prefix": "👣💀 ",
    "suffix": "  ✊",
    "base": "monospace"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Full Crazy Text Style 2",
    "prefix": "🍭🍔  ",
    "suffix": " ♧♙ඏ👤",
    "base": "circled"
  },
  {
    "category": "Bubble Instagram Name Fonts",
    "name": "Full Crazy Text Style 7",
    "prefix": "🌀 ",
    "suffix": " 🌀 🐚 ⋆ 🐯 ⋆ 🐧",
    "base": "script"
  }
];

let currentText = "Preview";
const MAX_CHARS = 200;
const DOM = {};
let activeFontsList = [];

function init() {
  DOM.main = document.querySelector('main');
  DOM.input = document.getElementById('main-input');
  DOM.charCount = document.getElementById('char-count');
  DOM.resetBtn = document.getElementById('reset-btn');
  DOM.previewContainer = document.getElementById('preview-container');

  // Filter fonts mapped to page type
  const pageType = DOM.main.getAttribute('data-font-type');
  if (pageType === 'calligraphy') {
    activeFontsList = fontsList.filter(f => f.category === 'Calligraphy Fonts');
  } else {
    activeFontsList = fontsList.filter(f => f.category !== 'Calligraphy Fonts');
  }

  renderPreviewRows();
  DOM.input.value = "";
  updateCharCount();
  bindEvents();
}

function bindEvents() {
  DOM.input.addEventListener('input', (e) => {
    let text = e.target.value;
    if (text.length > MAX_CHARS) {
      text = text.substring(0, MAX_CHARS);
      e.target.value = text;
    }
    currentText = text || "Preview";
    updateCharCount();
    updatePreviewText();
  });

  if (DOM.resetBtn) {
    DOM.resetBtn.addEventListener('click', () => {
      DOM.input.value = "";
      currentText = "Preview";
      updateCharCount();
      updatePreviewText();
      DOM.input.focus();
    });
  }
}

function updateCharCount() {
  DOM.charCount.textContent = `${DOM.input.value.length} / ${MAX_CHARS}`;
}

function renderPreviewRows() {
  DOM.previewContainer.innerHTML = '';

  // Group fonts by category
  const categories = {};
  activeFontsList.forEach((font, idx) => {
    if (!categories[font.category]) categories[font.category] = [];
    categories[font.category].push({ font, idx });
  });

  Object.entries(categories).forEach(([categoryName, items]) => {
    // Category Header
    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `<h3 style="margin-top: 32px; margin-bottom: 12px; color: var(--clr-gold); font-size: 1.25rem;">${categoryName}</h3>`;
    DOM.previewContainer.appendChild(header);

    items.forEach(item => {
      const { font, idx } = item;
      const defaultText = encodeFont(currentText, font);

      const row = document.createElement('div');
      row.className = 'preview-row';

      row.innerHTML = `
          <div class="preview-header">${font.name}</div>
          <div class="preview-text-container">
            <span class="preview-output" data-index="${idx}">${defaultText}</span>
          </div>
          <button class="copy-btn" data-index="${idx}">
            <span>Copy</span>
          </button>
        `;

      DOM.previewContainer.appendChild(row);
    });
  });

  // Bind copy buttons
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = e.currentTarget.getAttribute('data-index');
      const inputValue = DOM.input.value.trim();
      const textToCopy = encodeFont(inputValue ? inputValue : "Preview", activeFontsList[idx]);
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHtml = e.currentTarget.innerHTML;
        e.currentTarget.classList.add('copied');
        e.currentTarget.innerHTML = `<span>Copied ✅</span>`;
        setTimeout(() => {
          e.currentTarget.classList.remove('copied');
          e.currentTarget.innerHTML = originalHtml;
        }, 2000);
      });
    });
  });
}

function updatePreviewText() {
  const outputs = document.querySelectorAll('.preview-output');
  outputs.forEach(output => {
    const idx = output.getAttribute('data-index');
    output.textContent = encodeFont(currentText, activeFontsList[idx]);
  });
}

document.addEventListener('DOMContentLoaded', init);
