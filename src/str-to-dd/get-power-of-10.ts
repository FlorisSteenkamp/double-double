import { ddMultDouble1 } from '../double-mixed-double-double/dd-mult-double.js';


/**
 * 
 * @param a 
 * @param b 
 *
 * @internal
 */
function ddMultD(a: number[], b: number) {
    return ddMultDouble1(b,a);
}


/**
 * CACHE[i] == lower part of the double-double representing 10 ** ((i + 1) * 23)
 * 
 * @internal
 */
const CACHE = new Float64Array(13);


/**
 * @param exp
 * 
 * @internal
 */
function getPowerOf10(exp: number): number[] {
    // Powers of 10 up to 10**22 can be exactly represented as a double.
    if (exp < 23) return [0, 10 ** exp];

    // exponent == 23 * (i + 1) + m
    const m = exp % 23;
    const cp = exp - m;
    const i = cp / 23 - 1;

    // Calculate the lower double of 10 ** (23 * (i + 1)) or read of from CACHE.
    let lo = CACHE[i] || (CACHE[i] = Number(10n ** BigInt(cp) - BigInt(10 ** cp)));

    return ddMultD([lo, 10 ** cp], 10 ** m);
}


export { getPowerOf10 }
