# rn-tw-styles

Tailwind-style utility styles for React Native, with full TypeScript autocomplete.

```tsx
import tw, { cx, arb } from 'rn-tw-styles';

<View style={cx(tw.flexRow, tw.itemsCenter, tw.p4, tw.roundedXl, tw.bgEmerald500, active && tw.shadowMd)}>
  <Text style={cx(tw.textLg, tw.fontBold, tw.textWhite)}>Hello</Text>
  <View style={cx(tw.w10, tw.h10, arb('borderRadius', 13))} />
</View>
```

- **Zero runtime dependencies.** Only `react-native` as a peer dependency.
- **Built on `StyleSheet.create`.** Styles are registered once at load, no per-render parsing.
- **Typed.** Every key is part of the `TwKey` type, so typos fail at compile time and your editor autocompletes `tw.`.
- **Full Tailwind v3 palette**, spacing scale, typography, borders, shadows, transforms and more.
- **Border radius scale** with named sizes, a numeric scale, per-edge and per-corner variants, and RTL-aware start/end variants.
- **`arb()`** for one-off values outside the scale.
- Works with Expo and bare React Native (>= 0.71).

## Install

```bash
npm install rn-tw-styles
# or
yarn add rn-tw-styles
# or
pnpm add rn-tw-styles
```

## Quick start

```tsx
import React from 'react';
import { Text, View } from 'react-native';
import tw, { cx } from 'rn-tw-styles';

export function Badge({ label, active }: { label: string; active: boolean }) {
  return (
    <View style={cx(tw.px3, tw.py1, tw.roundedFull, active ? tw.bgBlue500 : tw.bgGray200)}>
      <Text style={cx(tw.textSm, tw.fontMedium, active ? tw.textWhite : tw.textGray700)}>{label}</Text>
    </View>
  );
}
```

`tw.x` is a registered style object, and `cx(...)` combines several into an array and drops falsy values, so you can write `cond && tw.something`.

## Naming rules

Class names become camelCase keys. The pattern is `prefix + value`:

| Tailwind | rn-tw-styles | Result |
|---|---|---|
| `p-4` | `tw.p4` | `padding: 16` |
| `mt-1.5` | `tw.mt15` | `marginTop: 6` (the dot is dropped) |
| `w-1/2` | `tw.w1_2` | `width: '50%'` |
| `-mt-4` | `tw.nmt4` | `marginTop: -16` |
| `bg-blue-500` | `tw.bgBlue500` | `backgroundColor: '#3b82f6'` |
| `rounded-lg` | `tw.roundedLg` | `borderRadius: 8` |
| `rounded-t-lg` | `tw.roundedTLg` | top-left and top-right radius 8 |
| `w-[37%]` | `arb('width', '37%')` | arbitrary value |

The spacing scale is 1 unit = 4px, same as Tailwind.

## Border radius

| Group | Keys | Notes |
|---|---|---|
| Named, all corners | `rounded`, `roundedNone`, `roundedSm`, `roundedMd`, `roundedLg`, `roundedXl`, `rounded2xl`, `rounded3xl`, `roundedFull` | 4, 0, 2, 6, 8, 12, 16, 24, 9999 |
| Numeric, all corners | `rounded0` … `rounded96`, `rounded05`, `rounded15` … | spacing scale: `rounded4` = 16 |
| One edge | `roundedT*`, `roundedR*`, `roundedB*`, `roundedL*` | e.g. `roundedTLg`, `roundedB4` |
| One corner | `roundedTl*`, `roundedTr*`, `roundedBr*`, `roundedBl*` | e.g. `roundedBlXl` |
| Start/end edge | `roundedS*`, `roundedE*` | flips in right-to-left layouts |
| Start/end corner | `roundedSs*`, `roundedSe*`, `roundedEs*`, `roundedEe*` | top-start, top-end, bottom-start, bottom-end |

## Arbitrary values with `arb()`

```tsx
import { arb } from 'rn-tw-styles';

arb('borderRadius', 10);            // { borderRadius: 10 }
arb('width', '37%');                // { width: '37%' }
arb({ paddingTop: 13, opacity: 0.4 });

<View style={cx(tw.p4, arb('height', 123), arb('borderTopLeftRadius', 30))} />
```

Details are in [docs/api.md](docs/api.md).

## Documentation

- [API reference](docs/api.md): `tw`, `cx`, `arb`, `colors`, `alpha`, `brand`, types
- [Utility reference](docs/utilities.md): every utility group and key pattern
- [Recipes and patterns](docs/recipes.md): buttons, cards, dark mode, responsive, RTL, theming
- [Troubleshooting and limitations](docs/troubleshooting.md)
- [Changelog](CHANGELOG.md)

## Contributing

Issues and pull requests are welcome. To work on the library:

```bash
git clone https://github.com/eric5509/rn-tw-styles.git
cd rn-tw-styles
npm install
npm test        # builds and runs the smoke tests
```

The source is in `src/index.ts` (utilities), `src/arb.ts` and `src/brand.ts`. When you add a new utility, also add its key to the `TwKey` type so autocomplete works.

## License

[MIT](LICENSE)
