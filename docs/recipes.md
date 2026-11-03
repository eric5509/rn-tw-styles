# Recipes and patterns

## Button with variants

```tsx
import { Pressable, Text } from 'react-native';
import tw, { cx } from 'rn-tw-styles';

type Props = { title: string; variant?: 'solid' | 'outline'; disabled?: boolean; onPress: () => void };

export function Button({ title, variant = 'solid', disabled, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) =>
        cx(
          tw.px5, tw.py3, tw.roundedXl, tw.itemsCenter,
          variant === 'solid' ? tw.bgEmerald600 : cx(tw.border2, tw.borderEmerald600),
          pressed && tw.opacity80,
          disabled && tw.opacity40,
        )
      }
    >
      <Text style={cx(tw.textBase, tw.fontSemibold, variant === 'solid' ? tw.textWhite : tw.textEmerald600)}>
        {title}
      </Text>
    </Pressable>
  );
}
```

## Card

```tsx
<View style={cx(tw.bgWhite, tw.rounded2xl, tw.p4, tw.shadowMd)}>
  <Text style={cx(tw.textLg, tw.fontBold, tw.textGray900)}>Title</Text>
  <Text style={cx(tw.textSm, tw.textGray500, tw.mt1)}>Subtitle</Text>
</View>
```

## Rounded top sheet

```tsx
<View style={cx(tw.bgWhite, tw.roundedT3xl, tw.p6)} />
```

## Single odd corner

```tsx
<View style={cx(tw.bgBlue500, tw.rounded2xl, tw.roundedBl0)} />   // chat bubble tail
```

Later entries in `cx` override earlier ones, so a corner override goes after the general radius.

## Mixing with your own styles

```tsx
<View style={cx(tw.p4, tw.bgWhite, { borderLeftWidth: 3, borderLeftColor: brand.primary }, props.style)} />
```

## One-off values with `arb`

```tsx
<View style={cx(tw.bgGray100, arb('height', 123), arb('borderRadius', 13), arb('marginTop', 7))} />
<Image style={cx(tw.wFull, arb('aspectRatio', 1.6))} />
```

## Overlay with transparency

```tsx
import { alpha, colors } from 'rn-tw-styles';

<View style={cx(tw.absoluteFill, { backgroundColor: alpha(colors.black, 0.5) })} />
```

## Dark mode

The package has no built-in dark variant, so choose the utility from the color scheme:

```tsx
import { useColorScheme } from 'react-native';

const dark = useColorScheme() === 'dark';
<View style={cx(tw.flex1, dark ? tw.bgGray900 : tw.bgWhite)}>
  <Text style={dark ? tw.textGray100 : tw.textGray900}>Hello</Text>
</View>
```

A tidy way is a small hook returning a themed set:

```tsx
export function useTheme() {
  const dark = useColorScheme() === 'dark';
  return {
    bg: dark ? tw.bgGray900 : tw.bgWhite,
    text: dark ? tw.textGray100 : tw.textGray900,
    muted: dark ? tw.textGray400 : tw.textGray500,
  };
}
```

## Responsive layouts

`wScreen` is read once at load. For rotation and window changes use `useWindowDimensions` with `arb`:

```tsx
import { useWindowDimensions } from 'react-native';

const { width } = useWindowDimensions();
const isTablet = width >= 768;

<View style={cx(tw.flexRow, tw.flexWrap, tw.gap4)}>
  <View style={cx(isTablet ? tw.w1_3 : tw.wFull)} />
  <View style={arb('width', Math.round(width * 0.4))} />
</View>
```

## Right-to-left layouts

Use start/end utilities so spacing and radius flip automatically:

```tsx
<View style={cx(tw.ps4, tw.roundedS2xl, tw.roundedEs0)} />
```

## Passing a utility name as a prop

```tsx
import type { TwKey } from 'rn-tw-styles';

function Dot({ color = 'bgGreen500' }: { color?: TwKey }) {
  return <View style={cx(tw.size3, tw.roundedFull, tw[color])} />;
}
```

## Using the brand theme

```tsx
import { brand } from 'rn-tw-styles';

<View style={[tw.flex1, { backgroundColor: brand.background }]}>
  <Text style={{ color: brand.ink }}>Welcome</Text>
</View>
```
