import { twoProduct } from '../basic/two-product.js';
import { ddMultDd } from '../double-double/binary/dd-mult-dd.js';
import { ddMultDouble1 } from '../double-mixed-double-double/dd-mult-double.js';
/**
 *
 * @param a
 * @param b
 *
 * @internal
 */
function ddMultD(a, b) {
    return ddMultDouble1(b, a);
}
/**
 *
 * @param pow
 *
 * @internal
 */
function getPowerOf10(pow) {
    // `10**21` (possibly `10**22`) is the max power of 10 that is exact in double
    // precision
    // we multiply in pairs to minimize error, e.g.
    const m = pow % 21;
    const d = (pow - m) / 21;
    const x = 10 ** m;
    if (d === 0) {
        return [0, x]; // exact
    }
    const a = 10 ** 21;
    const ax = twoProduct(a, x);
    const aa = twoProduct(a, a);
    const aax = ddMultD(aa, x);
    const a4 = ddMultDd(aa, aa);
    const aaax = ddMultDd(aa, ax);
    const a8 = ddMultDd(a4, a4);
    const a4x = ddMultD(a4, x);
    const a4ax = ddMultDd(a4, ax);
    const a4aax = ddMultDd(a4, aax);
    const a4aaax = ddMultDd(a4, aaax);
    if (d === 1) {
        return ax;
    }
    if (d === 2) {
        return aax;
    }
    if (d === 3) {
        return aaax;
    }
    if (d === 4) {
        return a4x;
    }
    if (d === 5) {
        return a4ax;
    }
    if (d === 6) {
        return a4aax;
    }
    if (d === 7) {
        return a4aaax;
    }
    if (d === 8) {
        return ddMultD(a8, x);
    }
    if (d === 9) {
        return ddMultDd(a8, ax);
    }
    if (d === 10) {
        return ddMultDd(a8, aax);
    }
    if (d === 11) {
        return ddMultDd(a8, aaax);
    }
    if (d === 12) {
        return ddMultDd(a8, a4x);
    }
    if (d === 13) {
        return ddMultDd(a8, a4ax);
    }
    if (d === 14) {
        return ddMultDd(a8, a4aax);
    }
    if (d === 15) {
        return ddMultDd(a8, a4aaax);
    }
    throw new Error('`exp` must be between 0 and 308; This is a bug');
}
export { getPowerOf10 };
//# sourceMappingURL=get-power-of-10.js.map