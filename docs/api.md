# API reference

```ts
import tw, {
  tw,        // same object as the default export
  cx, arb, style,
  colors, alpha, brand,
} from 'rn-tw-styles';
import type { TwKey, AnyStyle, BrandName } from 'rn-tw-styles';
```

## `tw`

A `Record<TwKey, AnyStyle>` created with `StyleSheet.create`. Access a utility as a property:

```tsx
<View style={tw.p4} />
```

Both the default export and the named `tw` export are the same object.

Accessing a key that doesn't exist returns `undefined` at runtime. TypeScript prevents this at compile time because the keys are typed.

## `cx(...styles)`

Combines styles and removes falsy values. Returns an array that React Native accepts as `style`.

```tsx
<View style={cx(tw.p4, isActive && tw.bgBlue500, error ? tw.borderRed500 : null, props.style)} />
```

Accepted arguments: any RN style, arrays, or `false | null | undefined | 0 | ''`.

## `arb(prop, value)` / `arb(styleObject)`

Creates a style from any React Native style property, for values outside the scale.

```ts
arb('borderRadius', 10);                   // { borderRadius: 10 }
arb('width', '37%');                       // { width: '37%' }
arb('transform', [{ rotate: '7deg' }]);
arb({ paddingTop: 13, marginLeft: 7 });    // several at once
```

- **Typed.** `prop` must be a valid key of `ViewStyle & TextStyle & ImageStyle` and `value` must match that property's type. `arb('opacity', 'x')` is a type error, and `arb('width', '37%')` is accepted.
- **Memoized.** Identical inputs return the same object reference (keyed by `JSON.stringify` of the style), which avoids needless prop changes between renders.
- **Don't pass dynamic values at high frequency.** Each distinct value is stored in the cache for the app's lifetime. For values that change every frame (animations, scroll position), use an inline object or `Animated` values instead of `arb`.
- **Not registered with `StyleSheet.create`.** `arb` returns a plain object, which is fine for modern React Native.

`style` is an alias: `import { style } from 'rn-tw-styles'`.

## `colors`

Raw hex values, for props that don't accept style objects (icons, `placeholderTextColor`, `ActivityIndicator color`, navigation themes).

```tsx
<TextInput placeholderTextColor={colors.gray[400]} />
<Icon name="check" color={colors.emerald[600]} />
colors.white;  // '#ffffff'
colors.black;  // '#000000'
colors.transparent;
```

22 colors (`slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`) with shades `50, 100, 200 … 900, 950`.

## `alpha(hex, opacity)`

Turns a hex color into an `rgba()` string.

```ts
alpha('#3b82f6', 0.5);          // 'rgba(59,130,246,0.5)'
alpha(colors.black, 0.4);       // overlay color
alpha('#fff', 0.2);             // 3-digit hex works
```

Takes 3- or 6-digit hex (with or without `#`). It doesn't accept 8-digit hex or named colors.

## `brand`

An optional emerald theme object (`primary`, `primarySoft`, `dark`, `background`, `card`, `ink`, `muted`, `line`, `accent`, `danger`, `success`). Use it directly or ignore it.

```tsx
<View style={[tw.p4, { backgroundColor: brand.card, borderColor: brand.line }]} />
```

## Types

| Type | Meaning |
|---|---|
| `TwKey` | Union of every valid key of `tw` |
| `AnyStyle` | `ViewStyle & TextStyle & ImageStyle` |
| `BrandName` | `keyof typeof brand` |

Example: a prop that accepts one utility name.

```tsx
import type { TwKey } from 'rn-tw-styles';

function Box({ bg }: { bg: TwKey }) {
  return <View style={tw[bg]} />;
}
```

## Runtime notes

- `tw` is built once at import time. Importing the package creates a few thousand small style objects once.
- `wScreen`, `hScreen`, `sizeScreen` and `minHScreen` read `Dimensions.get('window')` once at load. They don't update on rotation. See [troubleshooting](troubleshooting.md).
