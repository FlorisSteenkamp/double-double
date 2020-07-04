
import { getHighestSetBit } from "./get-max-set-bit";
import { exponent } from "./exponent";


/**
 * Returns the true exponent of the msb that is set of the given number or
 * NaN if a === 0 or +-inf or NaN.
 * @param a An array of numbers to check
 */
function msbExponent(a: number): number {
    if (a === 0 || !Number.isFinite(a)) { 
        return NaN;
    }

    let e = exponent(a);

    // Will return e for all but subnormal numbers
    return getHighestSetBit(a) - 52 + e;
}


export { msbExponent }
