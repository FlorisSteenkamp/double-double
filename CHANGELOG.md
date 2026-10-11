# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Breaking changes

- Node.js 22 or later is now required (`engines` field); earlier versions
  are no longer supported.
- `ddCompare` now compares the high parts first and therefore assumes
  normalized double-doubles (i.e. `hi === fl(hi + lo)`, as returned by all
  functions in this library); unnormalized inputs can give the wrong sign.
  Only the sign of the returned value is meaningful - it is no longer an
  approximation of `x - y`. `ddMax` and `ddMin` (which use `ddCompare`) inherit
  the same assumption.
- `ddSum([])` now returns `[0,0]` and `ddProduct([])` returns `[0,1]`
  (previously `undefined`).
- `strToDd` results are now correctly rounded, so the low part of some results
  differs from previous versions (by up to a few units in its last place).
- The low parts of the constants `PIDd`, `ln2Dd` and `eulerDd` have been
  corrected (they were off by 1, 1 and 5 units in the last place respectively):
  - `PIDd`: `[1.2246467991473532e-16, 3.141592653589793]`
  - `ln2Dd`: `[2.3190468138462996e-17, 0.6931471805599453]`
  - `eulerDd`: `[-4.942915152430645e-18, 0.5772156649015329]`
- `ddSin` and `ddCos` results can differ in the last bits since their
  polynomial coefficients are now correctly rounded (the results are slightly
  more accurate).
- `ddDivDdWithError` and `sqrtWithErr` return slightly larger error bounds (see
  *Fixed*).

### Fixed

- `strToDd`:
  - now works over the full double range; values beyond about `1e±300`
    (e.g. `Number.MAX_VALUE`, subnormals) previously returned `NaN` or threw a
    `RangeError`; values too large now return `[0,±Infinity]` and values that
    underflow return `[0,0]`
  - accepts an uppercase exponent (e.g. `'1E5'`, previously `NaN`) and a
    leading `+`
  - never returns `-0`
  - strings that are not plain decimal numbers return `[0,Number(str)]`, e.g.
    `[0,NaN]`
- `ddToStr` no longer throws for values smaller than about `1e-260` or for
  non-finite values (it now returns `'NaN'`, `'Infinity'` or `'-Infinity'`),
  and no longer returns `'0'` for `[x,0]` with `x !== 0`.
- `ddDivDdWithError` used a rounding error bound (`9u^2`) below the proven
  error bound of `ddDivDd` (`15u^2 + 56u^3`); the returned bound is now strict.
- `sqrtWithErr` did not account for the rounding errors of its own floating
  point operations; the returned bound is now strict.

### Performance

- `exponent`, `getHighestSetBit`, `getLowestSetBit`, `parseDouble`,
  `significand`, `bitLength`, `msbExponent`, `lsbExponent` and `isBitAligned`
  are roughly 10 to 80 times faster and no longer allocate memory on each call.
- `ddSin` and `ddCos` no longer parse strings when first loaded, which also
  makes the browser bundle smaller.
- `ddMax`, `ddMin` and `ddCompare` do less work; sorting with `ddCompare` as
  the comparator is about 15% faster.
- `ddDiffDouble` uses fewer operations (with identical results).

### Documentation

- Corrected the error bounds of `ddSum`, `ddProduct` and `ddDiffDouble`
  (`2u^2`) and several parameter descriptions.
- Documented that functions using (Veltkamp) splitting (e.g. `twoProduct`,
  `ddMultDd`, `ddDivDd`) return `NaN` when an input is larger than about
  `2^996`.
- Added documentation pages for `strToDd`, `ddToStr`, `ddSin`, `ddCos`, `ddEq`,
  `ddGt`, `ddGte`, `ddLt`, `ddLte`, `ddDiffDouble` and the constants.
- Removed outdated advice from the README about importing an `operators`
  object when using bundlers; import functions directly instead.

### Packaging

- The published package now only contains the built code (`node`, `browser`),
  the TypeScript sources (`src`, used by the source maps), the README, this
  changelog and the licence, reducing its unpacked size from about 3.3 MB to
  about 300 KB.
- Added the MIT `LICENSE` file.

### Internal

- Tests now use Jest (instead of Mocha and Chai) and import functions directly
  from their source modules.
- The browser bundle is built with `swc-loader` (instead of `ts-loader`) to
  support TypeScript 7.

## [3.0.4] and earlier

No changelog was kept for earlier versions.

[Unreleased]: https://github.com/FlorisSteenkamp/double-double/compare/v3.0.4...HEAD
[3.0.4]: https://github.com/FlorisSteenkamp/double-double/releases/tag/v3.0.4
