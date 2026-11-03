// Smoke test: loads the built package with a mocked react-native and checks key behaviour.
const assert = require('assert');
const Module = require('module');

const originalLoad = Module._load;
Module._load = function (request, ...rest) {
  if (request === 'react-native') {
    return {
      Dimensions: { get: () => ({ width: 390, height: 844 }) },
      StyleSheet: {
        create: (o) => o,
        absoluteFillObject: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
      },
    };
  }
  return originalLoad.call(this, request, ...rest);
};

const lib = require('../dist');
const { tw, cx, arb, style, colors, alpha, brand } = lib;

// radius
assert.deepStrictEqual(tw.rounded, { borderRadius: 4 });
assert.deepStrictEqual(tw.roundedLg, { borderRadius: 8 });
assert.deepStrictEqual(tw.roundedFull, { borderRadius: 9999 });
assert.deepStrictEqual(tw.rounded4, { borderRadius: 16 });
assert.deepStrictEqual(tw.rounded05, { borderRadius: 2 });
assert.deepStrictEqual(tw.roundedTLg, { borderTopLeftRadius: 8, borderTopRightRadius: 8 });
assert.deepStrictEqual(tw.roundedBl6, { borderBottomLeftRadius: 24 });
assert.deepStrictEqual(tw.roundedSsXl, { borderTopStartRadius: 12 });
assert.deepStrictEqual(tw.roundedE2, { borderTopEndRadius: 8, borderBottomEndRadius: 8 });

// existing utilities still intact
assert.deepStrictEqual(tw.p4, { padding: 16 });
assert.deepStrictEqual(tw.mx15, { marginHorizontal: 6 });
assert.deepStrictEqual(tw.bgBlue500, { backgroundColor: '#3b82f6' });
assert.deepStrictEqual(tw.w1_2, { width: '50%' });
assert.deepStrictEqual(tw.nTop4, { top: -16 });
assert.deepStrictEqual(tw.wScreen, { width: 390 });

// arb
assert.deepStrictEqual(arb('borderRadius', 10), { borderRadius: 10 });
assert.deepStrictEqual(arb({ paddingTop: 13, opacity: 0.4 }), { paddingTop: 13, opacity: 0.4 });
assert.strictEqual(arb('width', '37%'), arb('width', '37%'), 'arb should memoize');
assert.strictEqual(style, arb);

// helpers
assert.deepStrictEqual(cx(tw.p4, false, null, tw.m2), [tw.p4, tw.m2]);
assert.strictEqual(colors.blue[500], '#3b82f6');
assert.strictEqual(alpha('#3b82f6', 0.5), 'rgba(59,130,246,0.5)');
assert.strictEqual(brand.primary, '#0F9D6B');
assert.strictEqual(lib.default, tw);

console.log('smoke tests passed (' + Object.keys(tw).length + ' utilities)');
