"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSquare = void 0;
const f = Math.pow(2, 27) + 1;
/**
 * Returns the exact result of squaring a double.
 *
 * * the resulting expansion is least significant double first.
 *
 * Theorem 18 (Shewchuk): Let a and b be p-bit floating-point numbers, where
 * p >= 6. Then the following algorithm will produce a nonoverlapping expansion
 * x + y such that ab = x + y, where x is an approximation to ab and y
 * represents the roundoff error in the calculation of x. Furthermore, if
 * round-to-even tiebreaking is used, x and y are non-adjacent.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param a A double
 */
function twoSquare(a) {
    const x = a * a;
    //const [ah, al] = split(a);
    const c = f * a;
    const ah = c - (c - a);
    const al = a - ah;
    const y = (al * al) - ((x - (ah * ah)) - 2 * (ah * al));
    return [y, x];
}
exports.twoSquare = twoSquare;
//# sourceMappingURL=two-square.js.map