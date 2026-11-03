# Troubleshooting and limitations

## `tw.something` is `undefined`
The key doesn't exist. Check spelling against the [utility reference](utilities.md). Decimal scale values drop the dot (`mt15`, not `mt1.5`), fractions use an underscore (`w1_2`), and negative margins use `nm` (`nmt4`). In TypeScript, a bad key is a compile error.

## My border radius doesn't show
- On `Image`, apply `overflow: 'hidden'` only if the radius is on a wrapping `View`. Put the radius on the `Image` itself when possible.
- `roundedFull` is `9999`, which makes squares into circles and wide boxes into pills.
- With `cx`, later styles win. `cx(tw.roundedLg, tw.rounded0)` is square.

## Only one transform applies
`scale*`, `rotate*` and `translate*` each set the whole `transform` array, so combining them keeps just the last. Use `arb('transform', [{ scale: 1.1 }, { rotate: '5deg' }])`.

## Screen-size utilities don't update on rotation
`wScreen`, `hScreen`, `sizeScreen` and `minHScreen` are measured once when the package is imported. Use `useWindowDimensions()` plus `arb('width', width)`. See [recipes](recipes.md#responsive-layouts).

## Shadows look different on Android
Android ignores iOS shadow props and uses `elevation` (included in every shadow utility). Colored shadows aren't supported by `elevation` on older Android versions.

## `outline*` or `pointerEvents` has no effect
`outlineWidth` needs React Native 0.77 or newer. `pointerEvents` as a style prop needs RN 0.71 or newer. Both are applied at the platform level, not by this package.

## `textTop`, `textMiddle`, `textBottom`
These set `textAlignVertical`, which only works on Android.

## No `hover:`, `dark:` or breakpoint variants
This is a static style library, not a compiler like NativeWind. Choose utilities in code. See the dark mode and responsive recipes.

## Import time
All utilities are generated when the package is first imported. If you only need a handful, the cost is still a one-time startup creation of a few thousand small objects.

## Reporting a bug
Open an issue with your React Native version, the utility involved, and a minimal snippet.
