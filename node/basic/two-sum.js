"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum = void 0;
/**
 * Returns the exact result of adding two doubles.
 *
 * * the resulting array is the reverse of the standard twoSum in the literature.
 *
 * Theorem 7 (Knuth): Let a and b be p-bit floating-point numbers. Then the
 * following algorithm will produce a nonoverlapping expansion x + y such that
 * a + b = x + y, where x is an approximation to a + b and y is the roundoff
 * error in the calculation of x.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function twoSum(a, b) {
    let x = a + b;
    let bv = x - a;
    return [(a - (x - bv)) + (b - bv), x];
}
exports.twoSum = twoSum;
//# sourceMappingURL=two-sum.js.map