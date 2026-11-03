# Utility reference

Keys are camelCase. Where a key contains a **scale value** (`Sp`), use one of:

`0, 05, 1, 15, 2, 25, 3, 35, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96`

Each is that number x 4px (`05` = 0.5 = 2px, `15` = 1.5 = 6px, `4` = 16px, `96` = 384px).

Where a key contains a **fraction** (`Fr`), use one of:

`1_2, 1_3, 2_3, 1_4, 3_4, 1_5, 2_5, 3_5, 4_5, 1_6, 5_6, Full, Half, Auto`

(`Full` = 100%, `Half` = 50%, `Auto` = `'auto'`, others are percentages.)

## Flexbox and display

| Keys | Style |
|---|---|
| `flex`, `flex1` | `flex: 1` |
| `flexAuto`, `flexInitial`, `flexNone` | grow/shrink/basis combinations |
| `hidden`, `displayFlex` | `display: 'none'` / `'flex'` |
| `flexRow`, `flexRowReverse`, `flexCol`, `flexColReverse` | `flexDirection` |
| `flexWrap`, `flexWrapReverse`, `flexNoWrap` | `flexWrap` |
| `grow`, `grow0`, `shrink`, `shrink0` | `flexGrow` / `flexShrink` |
| `basis{Sp}`, `basis{Fr}` | `flexBasis` (e.g. `basis20`, `basis1_2`) |
| `itemsStart`, `itemsEnd`, `itemsCenter`, `itemsStretch`, `itemsBaseline` | `alignItems` |
| `justifyStart`, `justifyEnd`, `justifyCenter`, `justifyBetween`, `justifyAround`, `justifyEvenly` | `justifyContent` |
| `contentStart`, `contentEnd`, `contentCenter`, `contentBetween`, `contentAround`, `contentStretch` | `alignContent` |
| `selfAuto`, `selfStart`, `selfEnd`, `selfCenter`, `selfStretch`, `selfBaseline` | `alignSelf` |
| `center` | `justifyContent: 'center'` and `alignItems: 'center'` |

## Spacing

Pattern: `{prefix}{Sp}`.

| Prefix | Property | Prefix | Property |
|---|---|---|---|
| `p` | `padding` | `m` | `margin` |
| `px` | `paddingHorizontal` | `mx` | `marginHorizontal` |
| `py` | `paddingVertical` | `my` | `marginVertical` |
| `pt` `pr` `pb` `pl` | top/right/bottom/left | `mt` `mr` `mb` `ml` | top/right/bottom/left |
| `ps` `pe` | start/end | `ms` `me` | start/end |
| `gap` | `gap` | `gapX` / `gapY` | `columnGap` / `rowGap` |

- **Auto margins:** `mAuto`, `mxAuto`, `myAuto`, `mtAuto`, `mrAuto`, `mbAuto`, `mlAuto`, `msAuto`, `meAuto`.
- **Negative margins:** `nm`, `nmx`, `nmy`, `nmt`, `nmr`, `nmb`, `nml` + non-zero `Sp` (e.g. `nmt4` = `marginTop: -16`).

## Sizing

Pattern: `{prefix}{Sp | Fr}` with prefixes `w`, `h`, `size` (width + height), `minW`, `minH`, `maxW`, `maxH`.

Examples: `w10`, `h1_2`, `size12`, `minH0`, `maxWFull`.

| Keys | Style |
|---|---|
| `wScreen`, `hScreen`, `sizeScreen`, `minHScreen` | window dimensions at load time |
| `maxWNone` | `maxWidth: undefined` |
| `maxWXs` `maxWSm` `maxWMd` `maxWLg` `maxWXl` `maxW2xl` … `maxW7xl` | 320, 384, 448, 512, 576, 672, 768, 896, 1024, 1152, 1280 |
| `aspectAuto`, `aspectSquare`, `aspectVideo` | `aspectRatio` (undefined, 1, 16/9) |

## Colors

Pattern: `{bg|text|border|tint}{Color}{Shade}`.

- `bg` = `backgroundColor`, `text` = `color`, `border` = `borderColor`, `tint` = `tintColor`
- Colors: Slate, Gray, Zinc, Neutral, Stone, Red, Orange, Amber, Yellow, Lime, Green, Emerald, Teal, Cyan, Sky, Blue, Indigo, Violet, Purple, Fuchsia, Pink, Rose
- Shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
- Plus `bgWhite`, `bgBlack`, `bgTransparent` (same for `text`, `border`, `tint`)

Examples: `bgBlue500`, `textGray700`, `borderRed300`, `tintWhite`.

## Typography

| Keys | Style |
|---|---|
| `textXs` `textSm` `textBase` `textLg` `textXl` `text2xl` … `text9xl` | `fontSize` + `lineHeight`: 12/16, 14/20, 16/24, 18/28, 20/28, 24/32, 30/36, 36/40, 48/48, 60/60, 72/72, 96/96, 128/128 |
| `fontThin` … `fontBlack` | `fontWeight` 100 to 900 (`fontNormal` 400, `fontMedium` 500, `fontSemibold` 600, `fontBold` 700) |
| `textLeft` `textCenter` `textRight` `textJustify` `textAuto` | `textAlign` |
| `textTop` `textMiddle` `textBottom` | `textAlignVertical` (Android only) |
| `trackingTighter` `trackingTight` `trackingNormal` `trackingWide` `trackingWider` `trackingWidest` | `letterSpacing` -0.8 to 1.6 |
| `leading3` … `leading10` | `lineHeight` 12, 16, 20, 24, 28, 32, 36, 40 |
| `underline` `lineThrough` `underlineLineThrough` `noUnderline` | `textDecorationLine` |
| `uppercase` `lowercase` `capitalize` `normalCase` | `textTransform` |
| `italic` `notItalic` | `fontStyle` |

`textShadowSm`, `textShadow`, `textShadowMd`, `textShadowLg` set a text shadow (Text only).

## Borders

Width pattern: `border{Side}{Width}`.

- Side: none, `X` (left+right), `Y` (top+bottom), `T`, `R`, `B`, `L`, `S` (start), `E` (end)
- Width: none (1px), `0`, `2`, `4`, `8`

Examples: `border` (1px all sides), `borderB2`, `borderX0`, `borderT4`.

Style: `borderSolid`, `borderDashed`, `borderDotted`.
Color: see [Colors](#colors) (`borderGray200`, ...).

## Border radius

Pattern: `rounded{Side}{Size}`, where `Size` is a name or a scale value.

- Side: none (all corners), `T`, `R`, `B`, `L` (edges), `S`, `E` (start/end edges), `Tl`, `Tr`, `Br`, `Bl` (corners), `Ss`, `Se`, `Es`, `Ee` (start/end corners)
- Name: none (4px), `None` (0), `Sm` (2), `Md` (6), `Lg` (8), `Xl` (12), `2xl` (16), `3xl` (24), `Full` (9999)
- Scale: any `Sp` value (`rounded4` = 16px)

Examples: `rounded`, `roundedFull`, `roundedTXl`, `roundedBl4`, `roundedSsLg`.

| Side | Properties set |
|---|---|
| none | `borderRadius` |
| `T` | `borderTopLeftRadius`, `borderTopRightRadius` |
| `R` | `borderTopRightRadius`, `borderBottomRightRadius` |
| `B` | `borderBottomLeftRadius`, `borderBottomRightRadius` |
| `L` | `borderTopLeftRadius`, `borderBottomLeftRadius` |
| `S` | `borderTopStartRadius`, `borderBottomStartRadius` |
| `E` | `borderTopEndRadius`, `borderBottomEndRadius` |
| `Tl` `Tr` `Br` `Bl` | `borderTopLeftRadius`, `borderTopRightRadius`, `borderBottomRightRadius`, `borderBottomLeftRadius` |
| `Ss` `Se` `Es` `Ee` | `borderTopStartRadius`, `borderTopEndRadius`, `borderBottomStartRadius`, `borderBottomEndRadius` |

## Position

| Keys | Style |
|---|---|
| `absolute`, `relative` | `position` |
| `absoluteFill` | `StyleSheet.absoluteFillObject` |
| `{top\|right\|bottom\|left\|start\|end}{Sp \| Fr}` | offsets, e.g. `top0`, `right4`, `left1_2` |
| `n{Top\|Right\|Bottom\|Left\|Start\|End}{Sp}` | negative offsets, e.g. `nTop4` = `top: -16` |
| `inset{Sp}`, `insetX{Sp}`, `insetY{Sp}` | all sides / left+right / top+bottom |
| `z0` `z10` `z20` `z30` `z40` `z50` | `zIndex` |

## Effects

| Keys | Style |
|---|---|
| `opacity{0,5,10,20,25,30,40,50,60,70,75,80,90,95,100}` | `opacity` as a fraction (`opacity50` = 0.5) |
| `shadowSm` `shadow` `shadowMd` `shadowLg` `shadowXl` `shadow2xl` | iOS shadow props plus Android `elevation` (1, 2, 4, 8, 12, 16) |
| `shadowNone` | removes shadow and elevation |

## Transforms

| Keys | Style |
|---|---|
| `scale{0,50,75,90,95,100,105,110,125,150}` | `scale` (`scale110` = 1.1) |
| `rotate{0,1,2,3,6,12,45,90,180}` | `rotate` in degrees |
| `nRotate{1,2,3,6,12,45,90,180}` | negative rotation |
| `translateX{Sp}`, `translateY{Sp}` | translate in px |
| `nTranslateX{Sp}`, `nTranslateY{Sp}` | negative translate |

Each of these sets the whole `transform` array, so only **one** transform utility applies per element. For combinations, use `arb('transform', [{ scale: 1.1 }, { rotate: '5deg' }])`.

## Misc

| Keys | Style |
|---|---|
| `overflowHidden`, `overflowVisible`, `overflowScroll` | `overflow` |
| `pointerEventsNone`, `pointerEventsAuto`, `pointerEventsBoxNone`, `pointerEventsBoxOnly` | `pointerEvents` |
| `objectContain`, `objectCover`, `objectFill`, `objectNone` | `resizeMode`: contain, cover, stretch, center (Image) |
| `outlineNone`, `outline`, `outline2`, `outline4` | `outlineWidth` (RN 0.77+) |
