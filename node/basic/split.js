"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.split = void 0;
/**
 * === Math.ceil(p/2) where p is the # of significand bits in a double === 53.
 */
const f = 134217729; // 2**27 + 1;
/**
 * Returns the result of splitting a double into 2 26-bit doubles.
 *
 * Theorem 17 (Veltkamp-Dekker): Let a be a p-bit floating-point number, where
 * p >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the
 * following algorithm will produce a (p-s)-bit value a_hi and a
 * nonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and
 * a = a_hi + a_lo.
 *
 * see e.g. [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * @param a A double floating point number
 */
function split(a) {
    const c = f * a;
    const a_h = c - (c - a);
    const a_l = a - a_h;
    return [a_h, a_l];
}
exports.split = split;
//# sourceMappingURL=split.js.map