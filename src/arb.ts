import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type AnyStyle = ViewStyle & TextStyle & ImageStyle;

const cache = new Map<string, AnyStyle>();

/**
 * Arbitrary-value style helper (like Tailwind's `w-[123px]`).
 *
 *   arb('borderRadius', 10)                 -> { borderRadius: 10 }
 *   arb('width', '37%')                     -> { width: '37%' }
 *   arb({ paddingTop: 13, opacity: 0.4 })   -> { paddingTop: 13, opacity: 0.4 }
 *
 * Results are memoized, so the same input returns the same object
 * reference (cheap for React re-renders).
 */
export function arb<K extends keyof AnyStyle>(prop: K, value: AnyStyle[K]): AnyStyle;
export function arb(styles: AnyStyle): AnyStyle;
export function arb(a: keyof AnyStyle | AnyStyle, b?: unknown): AnyStyle {
  const style: AnyStyle = typeof a === 'string' ? ({ [a]: b } as AnyStyle) : a;
  const key = JSON.stringify(style);
  let hit = cache.get(key);
  if (!hit) {
    hit = style;
    cache.set(key, hit);
  }
  return hit;
}

export const style = arb;
