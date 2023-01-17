import { getHighestSetBit } from "./get-max-set-bit.js";
import { exponent } from "./exponent.js";
/**
 * Returns the true exponent of the msb that is set of the given number or
 * NaN if a === 0 or +-inf or NaN.
 * @param a An array of numbers to check
 */
function msbExponent(a) {
    if (a === 0 || !Number.isFinite(a)) {
        return NaN;
    }
    const e = exponent(a);
    // Will return e for all but subnormal numbers
    return getHighestSetBit(a) - 52 + e;
}
export { msbExponent };
//# sourceMappingURL=msb-exponent.js.map