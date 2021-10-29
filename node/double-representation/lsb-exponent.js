import { getLowestSetBit } from "./get-max-set-bit.js";
import { exponent } from "./exponent.js";
/**
 * Returns the true exponent of the lsb that is set of the given number or
 * NaN if a === 0 or +-inf or NaN.
 * @param a An array of numbers to check
 */
function lsbExponent(a) {
    if (a === 0 || !Number.isFinite(a)) {
        return NaN;
    }
    let e = exponent(a);
    return getLowestSetBit(a) - 52 + e;
}
export { lsbExponent };
//# sourceMappingURL=lsb-exponent.js.map