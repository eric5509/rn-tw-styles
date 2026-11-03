import { Dimensions, StyleSheet } from 'react-native';
import type { StyleProp } from 'react-native';
import { arb, style } from './arb';
import type { AnyStyle } from './arb';

export { arb, style };
export type { AnyStyle };
export { brand } from './brand';
export type { BrandName } from './brand';

// ═══════════════════════════════════════════════════════════════
//  KEY TYPES — autocomplete on `tw.`
// ═══════════════════════════════════════════════════════════════
type Sp = '0' | '05' | '1' | '15' | '2' | '25' | '3' | '35' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96';
type SpNonZero = Exclude<Sp, '0'>;
type Fr = '1_2' | '1_3' | '2_3' | '1_4' | '3_4' | '1_5' | '2_5' | '3_5' | '4_5' | '1_6' | '5_6' | 'Full' | 'Half' | 'Auto';

type SpacingPrefix = 'p' | 'px' | 'py' | 'pt' | 'pr' | 'pb' | 'pl' | 'ps' | 'pe' | 'm' | 'mx' | 'my' | 'mt' | 'mr' | 'mb' | 'ml' | 'ms' | 'me' | 'gap' | 'gapX' | 'gapY';
type MarginPrefix = 'm' | 'mx' | 'my' | 'mt' | 'mr' | 'mb' | 'ml' | 'ms' | 'me';
type NegPrefix = 'nm' | 'nmx' | 'nmy' | 'nmt' | 'nmr' | 'nmb' | 'nml';
type SizePrefix = 'w' | 'h' | 'size' | 'minW' | 'minH' | 'maxW' | 'maxH';
type PosProp = 'top' | 'right' | 'bottom' | 'left' | 'start' | 'end';

type ColorName = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';
type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
type BorderSide = '' | 'X' | 'Y' | 'T' | 'R' | 'B' | 'L' | 'S' | 'E';
// Corners: Tl/Tr/Br/Bl (physical) and Ss/Se/Es/Ee (start/end, RTL-aware)
type RadiusSide = '' | 'T' | 'R' | 'B' | 'L' | 'S' | 'E' | 'Tl' | 'Tr' | 'Br' | 'Bl' | 'Ss' | 'Se' | 'Es' | 'Ee';
type RadiusSize = '' | 'None' | 'Sm' | 'Md' | 'Lg' | 'Xl' | '2xl' | '3xl' | 'Full';
type Opacity = 0 | 5 | 10 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 75 | 80 | 90 | 95 | 100;
type Scale = 0 | 50 | 75 | 90 | 95 | 100 | 105 | 110 | 125 | 150;
type Rotate = 0 | 1 | 2 | 3 | 6 | 12 | 45 | 90 | 180;

type StaticKey = 'flex' | 'flex1' | 'flexAuto' | 'flexInitial' | 'flexNone' | 'hidden' | 'displayFlex' | 'flexRow' | 'flexRowReverse' | 'flexCol' | 'flexColReverse' | 'flexWrap' | 'flexWrapReverse' | 'flexNoWrap' | 'grow' | 'grow0' | 'shrink' | 'shrink0' | 'itemsStart' | 'itemsEnd' | 'itemsCenter' | 'itemsStretch' | 'itemsBaseline' | 'justifyStart' | 'justifyEnd' | 'justifyCenter' | 'justifyBetween' | 'justifyAround' | 'justifyEvenly' | 'contentStart' | 'contentEnd' | 'contentCenter' | 'contentBetween' | 'contentAround' | 'contentStretch' | 'selfAuto' | 'selfStart' | 'selfEnd' | 'selfCenter' | 'selfStretch' | 'selfBaseline' | 'center' | 'bgWhite' | 'textWhite' | 'borderWhite' | 'tintWhite' | 'bgBlack' | 'textBlack' | 'borderBlack' | 'tintBlack' | 'bgTransparent' | 'textTransparent' | 'borderTransparent' | 'tintTransparent' | 'fontThin' | 'fontExtralight' | 'fontLight' | 'fontNormal' | 'fontMedium' | 'fontSemibold' | 'fontBold' | 'fontExtrabold' | 'fontBlack' | 'textLeft' | 'textCenter' | 'textRight' | 'textJustify' | 'textAuto' | 'textTop' | 'textMiddle' | 'textBottom' | 'trackingTighter' | 'trackingTight' | 'trackingNormal' | 'trackingWide' | 'trackingWider' | 'trackingWidest' | 'leading3' | 'leading4' | 'leading5' | 'leading6' | 'leading7' | 'leading8' | 'leading9' | 'leading10' | 'underline' | 'lineThrough' | 'underlineLineThrough' | 'noUnderline' | 'uppercase' | 'lowercase' | 'capitalize' | 'normalCase' | 'italic' | 'notItalic' | 'wScreen' | 'hScreen' | 'sizeScreen' | 'minHScreen' | 'maxWNone' | 'maxWXs' | 'maxWSm' | 'maxWMd' | 'maxWLg' | 'maxWXl' | 'maxW2xl' | 'maxW3xl' | 'maxW4xl' | 'maxW5xl' | 'maxW6xl' | 'maxW7xl' | 'borderSolid' | 'borderDashed' | 'borderDotted' | 'absolute' | 'relative' | 'absoluteFill' | 'z0' | 'z10' | 'z20' | 'z30' | 'z40' | 'z50' | 'shadowSm' | 'shadow' | 'shadowMd' | 'shadowLg' | 'shadowXl' | 'shadow2xl' | 'shadowNone' | 'textShadowSm' | 'textShadow' | 'textShadowMd' | 'textShadowLg' | 'overflowHidden' | 'overflowVisible' | 'overflowScroll' | 'aspectAuto' | 'aspectSquare' | 'aspectVideo' | 'pointerEventsNone' | 'pointerEventsAuto' | 'pointerEventsBoxNone' | 'pointerEventsBoxOnly' | 'objectContain' | 'objectCover' | 'objectFill' | 'objectNone' | 'outlineNone' | 'outline' | 'outline2' | 'outline4';

export type TwKey =
  | StaticKey
  | `${SpacingPrefix}${Sp}`
  | `${MarginPrefix}Auto`
  | `${NegPrefix}${SpNonZero}`
  | `basis${Sp | Fr}`
  | `${'bg' | 'text' | 'border' | 'tint'}${Capitalize<ColorName>}${Shade}`
  | `${SizePrefix}${Sp | Fr}`
  | `text${Capitalize<TextSize>}`
  | `border${BorderSide}${'' | '0' | '2' | '4' | '8'}`
  | `rounded${RadiusSide}${RadiusSize | Sp}`
  | `${PosProp}${Sp | Fr}`
  | `n${Capitalize<PosProp>}${SpNonZero}`
  | `${'inset' | 'insetX' | 'insetY'}${Sp}`
  | `opacity${Opacity}`
  | `scale${Scale}`
  | `rotate${Rotate}`
  | `nRotate${Exclude<Rotate, 0>}`
  | `translate${'X' | 'Y'}${Sp}`
  | `nTranslate${'X' | 'Y'}${SpNonZero}`;

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

// ═══════════════════════════════════════════════════════════════
//  PALETTE (Tailwind v3 — 22 colors × 11 shades)
// ═══════════════════════════════════════════════════════════════
const hexes = {
  slate:   ['f8fafc','f1f5f9','e2e8f0','cbd5e1','94a3b8','64748b','475569','334155','1e293b','0f172a','020617'],
  gray:    ['f9fafb','f3f4f6','e5e7eb','d1d5db','9ca3af','6b7280','4b5563','374151','1f2937','111827','030712'],
  zinc:    ['fafafa','f4f4f5','e4e4e7','d4d4d8','a1a1aa','71717a','52525b','3f3f46','27272a','18181b','09090b'],
  neutral: ['fafafa','f5f5f5','e5e5e5','d4d4d4','a3a3a3','737373','525252','404040','262626','171717','0a0a0a'],
  stone:   ['fafaf9','f5f5f4','e7e5e4','d6d3d1','a8a29e','78716c','57534e','44403c','292524','1c1917','0c0a09'],
  red:     ['fef2f2','fee2e2','fecaca','fca5a5','f87171','ef4444','dc2626','b91c1c','991b1b','7f1d1d','450a0a'],
  orange:  ['fff7ed','ffedd5','fed7aa','fdba74','fb923c','f97316','ea580c','c2410c','9a3412','7c2d12','431407'],
  amber:   ['fffbeb','fef3c7','fde68a','fcd34d','fbbf24','f59e0b','d97706','b45309','92400e','78350f','451a03'],
  yellow:  ['fefce8','fef9c3','fef08a','fde047','facc15','eab308','ca8a04','a16207','854d0e','713f12','422006'],
  lime:    ['f7fee7','ecfccb','d9f99d','bef264','a3e635','84cc16','65a30d','4d7c0f','3f6212','365314','1a2e05'],
  green:   ['f0fdf4','dcfce7','bbf7d0','86efac','4ade80','22c55e','16a34a','15803d','166534','14532d','052e16'],
  emerald: ['ecfdf5','d1fae5','a7f3d0','6ee7b7','34d399','10b981','059669','047857','065f46','064e3b','022c22'],
  teal:    ['f0fdfa','ccfbf1','99f6e4','5eead4','2dd4bf','14b8a6','0d9488','0f766e','115e59','134e4a','042f2e'],
  cyan:    ['ecfeff','cffafe','a5f3fc','67e8f9','22d3ee','06b6d4','0891b2','0e7490','155e75','164e63','083344'],
  sky:     ['f0f9ff','e0f2fe','bae6fd','7dd3fc','38bdf8','0ea5e9','0284c7','0369a1','075985','0c4a6e','082f49'],
  blue:    ['eff6ff','dbeafe','bfdbfe','93c5fd','60a5fa','3b82f6','2563eb','1d4ed8','1e40af','1e3a8a','172554'],
  indigo:  ['eef2ff','e0e7ff','c7d2fe','a5b4fc','818cf8','6366f1','4f46e5','4338ca','3730a3','312e81','1e1b4b'],
  violet:  ['f5f3ff','ede9fe','ddd6fe','c4b5fd','a78bfa','8b5cf6','7c3aed','6d28d9','5b21b6','4c1d95','2e1065'],
  purple:  ['faf5ff','f3e8ff','e9d5ff','d8b4fe','c084fc','a855f7','9333ea','7e22ce','6b21a8','581c87','3b0764'],
  fuchsia: ['fdf4ff','fae8ff','f5d0fe','f0abfc','e879f9','d946ef','c026d3','a21caf','86198f','701a75','4a044e'],
  pink:    ['fdf2f8','fce7f3','fbcfe8','f9a8d4','f472b6','ec4899','db2777','be185d','9d174d','831843','500724'],
  rose:    ['fff1f2','ffe4e6','fecdd3','fda4af','fb7185','f43f5e','e11d48','be123c','9f1239','881337','4c0519'],
};

const palette: Record<string, Record<number, string>> = {};
for (const [name, arr] of Object.entries(hexes)) {
  palette[name] = {};
  arr.forEach((h, i) => { palette[name][SHADES[i]] = `#${h}`; });
}

// Raw colors for icons, placeholderTextColor, etc:  colors.blue[500]
export const colors = {
  ...palette,
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as unknown as Record<ColorName, Record<Shade, string>> & {
  white: string;
  black: string;
  transparent: string;
};

// alpha('#3b82f6', 0.5) -> 'rgba(59,130,246,0.5)'
export const alpha = (hex: string, a: number) => {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};

// ═══════════════════════════════════════════════════════════════
//  SCALES
// ═══════════════════════════════════════════════════════════════
// 1 unit = 4px. Decimal keys drop the dot: 0.5 -> "05", 1.5 -> "15"  (p05, mt15)
const spacing = {
  0: 0, '0.5': 2, 1: 4, '1.5': 6, 2: 8, '2.5': 10, 3: 12, '3.5': 14,
  4: 16, 5: 20, 6: 24, 7: 28, 8: 32, 9: 36, 10: 40, 11: 44, 12: 48,
  14: 56, 16: 64, 20: 80, 24: 96, 28: 112, 32: 128, 36: 144, 40: 160,
  44: 176, 48: 192, 52: 208, 56: 224, 60: 240, 64: 256, 72: 288,
  80: 320, 96: 384,
};
const spacingEntries = Object.entries(spacing).map(([k, v]) => [k.replace('.', ''), v] as [string, number]);

const fractions = {
  '1_2': '50%', '1_3': '33.333333%', '2_3': '66.666667%',
  '1_4': '25%', '3_4': '75%',
  '1_5': '20%', '2_5': '40%', '3_5': '60%', '4_5': '80%',
  '1_6': '16.666667%', '5_6': '83.333333%',
  Full: '100%', Half: '50%', Auto: 'auto',
};

const textScale = {
  xs: [12, 16], sm: [14, 20], base: [16, 24], lg: [18, 28], xl: [20, 28],
  '2xl': [24, 32], '3xl': [30, 36], '4xl': [36, 40], '5xl': [48, 48],
  '6xl': [60, 60], '7xl': [72, 72], '8xl': [96, 96], '9xl': [128, 128],
};

const radii = { None: 0, Sm: 2, '': 4, Md: 6, Lg: 8, Xl: 12, '2xl': 16, '3xl': 24, Full: 9999 };

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

const buildTw = () => {
  const s: Record<string, any> = {};

  // ─────────────────────────────────────────────────────────
  // DISPLAY / FLEXBOX
  // ─────────────────────────────────────────────────────────
  Object.assign(s, {
    flex:             { flex: 1 },
    flex1:            { flex: 1 },
    flexAuto:         { flexGrow: 1, flexShrink: 1, flexBasis: 'auto' },
    flexInitial:      { flexGrow: 0, flexShrink: 1, flexBasis: 'auto' },
    flexNone:         { flexGrow: 0, flexShrink: 0, flexBasis: 'auto' },

    hidden:           { display: 'none' },
    displayFlex:      { display: 'flex' },

    flexRow:          { flexDirection: 'row' },
    flexRowReverse:   { flexDirection: 'row-reverse' },
    flexCol:          { flexDirection: 'column' },
    flexColReverse:   { flexDirection: 'column-reverse' },

    flexWrap:         { flexWrap: 'wrap' },
    flexWrapReverse:  { flexWrap: 'wrap-reverse' },
    flexNoWrap:       { flexWrap: 'nowrap' },

    grow:             { flexGrow: 1 },
    grow0:            { flexGrow: 0 },
    shrink:           { flexShrink: 1 },
    shrink0:          { flexShrink: 0 },

    itemsStart:       { alignItems: 'flex-start' },
    itemsEnd:         { alignItems: 'flex-end' },
    itemsCenter:      { alignItems: 'center' },
    itemsStretch:     { alignItems: 'stretch' },
    itemsBaseline:    { alignItems: 'baseline' },

    justifyStart:     { justifyContent: 'flex-start' },
    justifyEnd:       { justifyContent: 'flex-end' },
    justifyCenter:    { justifyContent: 'center' },
    justifyBetween:   { justifyContent: 'space-between' },
    justifyAround:    { justifyContent: 'space-around' },
    justifyEvenly:    { justifyContent: 'space-evenly' },

    contentStart:     { alignContent: 'flex-start' },
    contentEnd:       { alignContent: 'flex-end' },
    contentCenter:    { alignContent: 'center' },
    contentBetween:   { alignContent: 'space-between' },
    contentAround:    { alignContent: 'space-around' },
    contentStretch:   { alignContent: 'stretch' },

    selfAuto:         { alignSelf: 'auto' },
    selfStart:        { alignSelf: 'flex-start' },
    selfEnd:          { alignSelf: 'flex-end' },
    selfCenter:       { alignSelf: 'center' },
    selfStretch:      { alignSelf: 'stretch' },
    selfBaseline:     { alignSelf: 'baseline' },

    center:           { justifyContent: 'center', alignItems: 'center' },
  });

  // ─────────────────────────────────────────────────────────
  // SPACING — padding, margin, gap
  // ─────────────────────────────────────────────────────────
  const spacingProps = {
    p: ['padding'], px: ['paddingHorizontal'], py: ['paddingVertical'],
    pt: ['paddingTop'], pr: ['paddingRight'], pb: ['paddingBottom'], pl: ['paddingLeft'],
    ps: ['paddingStart'], pe: ['paddingEnd'],
    m: ['margin'], mx: ['marginHorizontal'], my: ['marginVertical'],
    mt: ['marginTop'], mr: ['marginRight'], mb: ['marginBottom'], ml: ['marginLeft'],
    ms: ['marginStart'], me: ['marginEnd'],
    gap: ['gap'], gapX: ['columnGap'], gapY: ['rowGap'],
  };
  for (const [prefix, [prop]] of Object.entries(spacingProps)) {
    for (const [key, value] of spacingEntries) s[`${prefix}${key}`] = { [prop]: value };
  }

  // margin: auto  (mAuto, mxAuto, mtAuto ...)
  for (const [prefix, [prop]] of Object.entries(spacingProps)) {
    if (prefix.startsWith('m')) s[`${prefix}Auto`] = { [prop]: 'auto' };
  }

  // negative margins: nm4, nmx4, nmt4 ...
  const negativeProps = {
    nm: 'margin', nmx: 'marginHorizontal', nmy: 'marginVertical',
    nmt: 'marginTop', nmr: 'marginRight', nmb: 'marginBottom', nml: 'marginLeft',
  };
  for (const [prefix, prop] of Object.entries(negativeProps)) {
    for (const [key, value] of spacingEntries) {
      if (value === 0) continue;
      s[`${prefix}${key}`] = { [prop]: -value };
    }
  }

  // ─────────────────────────────────────────────────────────
  // FLEX BASIS
  // ─────────────────────────────────────────────────────────
  for (const [key, value] of spacingEntries) s[`basis${key}`] = { flexBasis: value };
  for (const [key, value] of Object.entries(fractions)) s[`basis${key}`] = { flexBasis: value };

  // ─────────────────────────────────────────────────────────
  // COLORS — bg / text / border / tint
  // ─────────────────────────────────────────────────────────
  for (const [name, shades] of Object.entries(palette)) {
    const c = cap(name);
    for (const [shade, hex] of Object.entries(shades)) {
      s[`bg${c}${shade}`]     = { backgroundColor: hex };
      s[`text${c}${shade}`]   = { color: hex };
      s[`border${c}${shade}`] = { borderColor: hex };
      s[`tint${c}${shade}`]   = { tintColor: hex };
    }
  }
  for (const [name, hex] of [['White', '#ffffff'], ['Black', '#000000'], ['Transparent', 'transparent']]) {
    s[`bg${name}`]     = { backgroundColor: hex };
    s[`text${name}`]   = { color: hex };
    s[`border${name}`] = { borderColor: hex };
    s[`tint${name}`]   = { tintColor: hex };
  }

  // ─────────────────────────────────────────────────────────
  // TYPOGRAPHY
  // ─────────────────────────────────────────────────────────
  for (const [key, [fontSize, lineHeight]] of Object.entries(textScale)) {
    s[`text${cap(key)}`] = { fontSize, lineHeight };
  }

  Object.assign(s, {
    fontThin:       { fontWeight: '100' },
    fontExtralight: { fontWeight: '200' },
    fontLight:      { fontWeight: '300' },
    fontNormal:     { fontWeight: '400' },
    fontMedium:     { fontWeight: '500' },
    fontSemibold:   { fontWeight: '600' },
    fontBold:       { fontWeight: '700' },
    fontExtrabold:  { fontWeight: '800' },
    fontBlack:      { fontWeight: '900' },

    textLeft:    { textAlign: 'left' },
    textCenter:  { textAlign: 'center' },
    textRight:   { textAlign: 'right' },
    textJustify: { textAlign: 'justify' },
    textAuto:    { textAlign: 'auto' },

    textTop:     { textAlignVertical: 'top' },      // Android only
    textMiddle:  { textAlignVertical: 'center' },   // Android only
    textBottom:  { textAlignVertical: 'bottom' },   // Android only

    trackingTighter: { letterSpacing: -0.8 },
    trackingTight:   { letterSpacing: -0.4 },
    trackingNormal:  { letterSpacing: 0 },
    trackingWide:    { letterSpacing: 0.4 },
    trackingWider:   { letterSpacing: 0.8 },
    trackingWidest:  { letterSpacing: 1.6 },

    leading3:  { lineHeight: 12 },
    leading4:  { lineHeight: 16 },
    leading5:  { lineHeight: 20 },
    leading6:  { lineHeight: 24 },
    leading7:  { lineHeight: 28 },
    leading8:  { lineHeight: 32 },
    leading9:  { lineHeight: 36 },
    leading10: { lineHeight: 40 },

    underline:           { textDecorationLine: 'underline' },
    lineThrough:         { textDecorationLine: 'line-through' },
    underlineLineThrough:{ textDecorationLine: 'underline line-through' },
    noUnderline:         { textDecorationLine: 'none' },

    uppercase:  { textTransform: 'uppercase' },
    lowercase:  { textTransform: 'lowercase' },
    capitalize: { textTransform: 'capitalize' },
    normalCase: { textTransform: 'none' },

    italic:    { fontStyle: 'italic' },
    notItalic: { fontStyle: 'normal' },
  });

  // ─────────────────────────────────────────────────────────
  // SIZING
  // ─────────────────────────────────────────────────────────
  const sizeProps = {
    w: ['width'], h: ['height'], size: ['width', 'height'],
    minW: ['minWidth'], minH: ['minHeight'],
    maxW: ['maxWidth'], maxH: ['maxHeight'],
  };
  for (const [prefix, props] of Object.entries(sizeProps)) {
    const set = (v: string | number) => Object.fromEntries(props.map((p) => [p, v] as const));
    for (const [key, value] of spacingEntries) s[`${prefix}${key}`] = set(value);
    for (const [key, value] of Object.entries(fractions)) s[`${prefix}${key}`] = set(value);
  }

  // Screen-based (read once at load — use useWindowDimensions for rotation)
  Object.assign(s, {
    wScreen:      { width: SCREEN_W },
    hScreen:      { height: SCREEN_H },
    sizeScreen:   { width: SCREEN_W, height: SCREEN_H },
    minHScreen:   { minHeight: SCREEN_H },
  });

  // Named max widths
  Object.assign(s, {
    maxWNone: { maxWidth: undefined },
    maxWXs:   { maxWidth: 320 },
    maxWSm:   { maxWidth: 384 },
    maxWMd:   { maxWidth: 448 },
    maxWLg:   { maxWidth: 512 },
    maxWXl:   { maxWidth: 576 },
    maxW2xl:  { maxWidth: 672 },
    maxW3xl:  { maxWidth: 768 },
    maxW4xl:  { maxWidth: 896 },
    maxW5xl:  { maxWidth: 1024 },
    maxW6xl:  { maxWidth: 1152 },
    maxW7xl:  { maxWidth: 1280 },
  });

  // ─────────────────────────────────────────────────────────
  // BORDERS
  // ─────────────────────────────────────────────────────────
  const borderWidths = { '': 1, 0: 0, 2: 2, 4: 4, 8: 8 };
  const borderSides = {
    '': ['borderWidth'],
    X: ['borderLeftWidth', 'borderRightWidth'],
    Y: ['borderTopWidth', 'borderBottomWidth'],
    T: ['borderTopWidth'], R: ['borderRightWidth'],
    B: ['borderBottomWidth'], L: ['borderLeftWidth'],
    S: ['borderStartWidth'], E: ['borderEndWidth'],
  };
  for (const [side, props] of Object.entries(borderSides)) {
    for (const [w, value] of Object.entries(borderWidths)) {
      s[`border${side}${w}`] = Object.fromEntries(props.map((p) => [p, value] as const));
    }
  }

  Object.assign(s, {
    borderSolid:  { borderStyle: 'solid' },
    borderDashed: { borderStyle: 'dashed' },
    borderDotted: { borderStyle: 'dotted' },
  });

  // ─────────────────────────────────────────────────────────
  // BORDER RADIUS
  //   Named:    rounded, roundedLg, roundedFull, roundedTLg (top edge) ...
  //   Numeric:  rounded4 (16px), rounded05 (2px) — same scale as spacing
  //   Corners:  Tl/Tr/Br/Bl (physical)  Ss/Se/Es/Ee (start/end, RTL-aware)
  //   Edges:    T/R/B/L (physical)      S/E (start/end)
  // ─────────────────────────────────────────────────────────
  const radiusSides = {
    '': ['borderRadius'],
    T: ['borderTopLeftRadius', 'borderTopRightRadius'],
    R: ['borderTopRightRadius', 'borderBottomRightRadius'],
    B: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    L: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    S: ['borderTopStartRadius', 'borderBottomStartRadius'],
    E: ['borderTopEndRadius', 'borderBottomEndRadius'],
    Tl: ['borderTopLeftRadius'],
    Tr: ['borderTopRightRadius'],
    Br: ['borderBottomRightRadius'],
    Bl: ['borderBottomLeftRadius'],
    Ss: ['borderTopStartRadius'],
    Se: ['borderTopEndRadius'],
    Es: ['borderBottomStartRadius'],
    Ee: ['borderBottomEndRadius'],
  };
  for (const [side, props] of Object.entries(radiusSides)) {
    const set = (v: number) => Object.fromEntries(props.map((p) => [p, v] as const));
    for (const [size, value] of Object.entries(radii)) s[`rounded${side}${size}`] = set(value);
    for (const [key, value] of spacingEntries) s[`rounded${side}${key}`] = set(value);
  }

  // ─────────────────────────────────────────────────────────
  // POSITIONING
  // ─────────────────────────────────────────────────────────
  Object.assign(s, {
    absolute:     { position: 'absolute' },
    relative:     { position: 'relative' },
    absoluteFill: StyleSheet.absoluteFillObject,
  });

  for (const prop of ['top', 'right', 'bottom', 'left', 'start', 'end']) {
    for (const [key, value] of spacingEntries) {
      s[`${prop}${key}`] = { [prop]: value };
      if (value !== 0) s[`n${cap(prop)}${key}`] = { [prop]: -value }; // nTop4 => top: -16
    }
    for (const [key, value] of Object.entries(fractions)) s[`${prop}${key}`] = { [prop]: value };
  }
  for (const [key, value] of spacingEntries) {
    s[`inset${key}`]  = { top: value, right: value, bottom: value, left: value };
    s[`insetX${key}`] = { left: value, right: value };
    s[`insetY${key}`] = { top: value, bottom: value };
  }

  Object.assign(s, {
    z0: { zIndex: 0 }, z10: { zIndex: 10 }, z20: { zIndex: 20 },
    z30: { zIndex: 30 }, z40: { zIndex: 40 }, z50: { zIndex: 50 },
  });

  // ─────────────────────────────────────────────────────────
  // EFFECTS
  // ─────────────────────────────────────────────────────────
  for (const o of [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100]) {
    s[`opacity${o}`] = { opacity: o / 100 };
  }

  Object.assign(s, {
    shadowSm: {
      shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18, shadowRadius: 1.0, elevation: 1,
    },
    shadow: {
      shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2, shadowRadius: 1.41, elevation: 2,
    },
    shadowMd: {
      shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4,
    },
    shadowLg: {
      shadowColor: '#000', shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3, shadowRadius: 4.65, elevation: 8,
    },
    shadowXl: {
      shadowColor: '#000', shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.3, shadowRadius: 7.0, elevation: 12,
    },
    shadow2xl: {
      shadowColor: '#000', shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.35, shadowRadius: 12.0, elevation: 16,
    },
    shadowNone: { shadowOpacity: 0, shadowRadius: 0, elevation: 0 },

    // Text shadows (Text only)
    textShadowSm: { textShadowColor: 'rgba(0,0,0,0.25)', textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 2 },
    textShadow:   { textShadowColor: 'rgba(0,0,0,0.25)', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4 },
    textShadowMd: { textShadowColor: 'rgba(0,0,0,0.35)', textShadowOffset: { width: 0, height: 4 }, textShadowRadius: 8 },
    textShadowLg: { textShadowColor: 'rgba(0,0,0,0.45)', textShadowOffset: { width: 0, height: 8 }, textShadowRadius: 16 },
  });

  // ─────────────────────────────────────────────────────────
  // TRANSFORMS — each util sets the whole `transform` array, so only ONE
  // of these can apply per element. For combos, write an inline transform.
  // ─────────────────────────────────────────────────────────
  for (const v of [0, 50, 75, 90, 95, 100, 105, 110, 125, 150]) {
    s[`scale${v}`] = { transform: [{ scale: v / 100 }] };
  }
  for (const v of [0, 1, 2, 3, 6, 12, 45, 90, 180]) {
    s[`rotate${v}`] = { transform: [{ rotate: `${v}deg` }] };
    if (v) s[`nRotate${v}`] = { transform: [{ rotate: `-${v}deg` }] };
  }
  for (const [key, value] of spacingEntries) {
    s[`translateX${key}`] = { transform: [{ translateX: value }] };
    s[`translateY${key}`] = { transform: [{ translateY: value }] };
    if (value) {
      s[`nTranslateX${key}`] = { transform: [{ translateX: -value }] };
      s[`nTranslateY${key}`] = { transform: [{ translateY: -value }] };
    }
  }

  // ─────────────────────────────────────────────────────────
  // MISC
  // ─────────────────────────────────────────────────────────
  Object.assign(s, {
    overflowHidden:  { overflow: 'hidden' },
    overflowVisible: { overflow: 'visible' },
    overflowScroll:  { overflow: 'scroll' },

    aspectAuto:   { aspectRatio: undefined },
    aspectSquare: { aspectRatio: 1 },
    aspectVideo:  { aspectRatio: 16 / 9 },

    pointerEventsNone:    { pointerEvents: 'none' },
    pointerEventsAuto:    { pointerEvents: 'auto' },
    pointerEventsBoxNone: { pointerEvents: 'box-none' },
    pointerEventsBoxOnly: { pointerEvents: 'box-only' },

    // Image resizeMode
    objectContain: { resizeMode: 'contain' },
    objectCover:   { resizeMode: 'cover' },
    objectFill:    { resizeMode: 'stretch' },
    objectNone:    { resizeMode: 'center' },

    // Outline (RN 0.77+)
    outlineNone: { outlineWidth: 0 },
    outline:     { outlineWidth: 1 },
    outline2:    { outlineWidth: 2 },
    outline4:    { outlineWidth: 4 },
  });

  return s;
};

export const tw = StyleSheet.create(buildTw()) as Record<TwKey, AnyStyle>;

// Conditional helper: style={cx(tw.p4, active && tw.bgBlue500)}
export const cx = (...styles: Array<StyleProp<AnyStyle> | false | null | undefined | 0 | ''>) =>
  styles.filter(Boolean) as StyleProp<AnyStyle>[];

export default tw;
