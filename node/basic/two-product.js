"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoProduct = void 0;
let f = Math.pow(2, 27) + 1;
/**
 * Returns the exact result of multiplying two doubles.
 *
 * * the resulting array is the reverse of the standard twoSum in the literature.
 *
 * Theorem 18 (Shewchuk): Let a and b be p-bit floating-point numbers, where
 * p >= 6. Then the following algorithm will produce a nonoverlapping expansion
 * x + y such that ab = x + y, where x is an approximation to ab and y
 * represents the roundoff error in the calculation of x. Furthermore, if
 * round-to-even tiebreaking is used, x and y are non-adjacent.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param a A double
 * @param b Another double
 */
function twoProduct(a, b) {
    let x = a * b;
    //let [ah, al] = split(a);
    let c = f * a;
    let ah = c - (c - a);
    let al = a - ah;
    //let [bh, bl] = split(b);
    let d = f * b;
    let bh = d - (d - b);
    let bl = b - bh;
    let y = (al * bl) - ((x - (ah * bh)) - (al * bh) - (ah * bl));
    //let err1 = x - (ah * bh);
    //let err2 = err1 - (al * bh);
    //let err3 = err2 - (ah * bl);
    //let y = (al * bl) - err3;
    return [y, x];
}
exports.twoProduct = twoProduct;
//# sourceMappingURL=two-product.js.map