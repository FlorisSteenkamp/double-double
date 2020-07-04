
import { significand } from "./significand";


/**
 * Returns the lowest set bit of the given value in [1, (2**31)-1], 
 * i.e. from 1 up to 2147483647 else if no bit is set (input === 0) returns 
 * NaN, otherwise if the number is out of range returns a non-finite 
 * number.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function getLowestSetBit_(a: number) {
    return Math.log2(a & -a);
}


/**
 * Returns the lowest set bit of the given number's significand (where the lsb
 * is bit 0 and the msb is bit 52). If no bit is set (input === 0 or +-inf or 
 * NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function getLowestSetBit(a: number) {
    if (a === 0 || !Number.isFinite(a)) { 
        // There is no lowest set bit
        return NaN; 
    }

    // Note: the significand includes the hidden bit!
    let s = significand(a);

    let len = s.length;
    for (let i=len-1; i>=0; i--) {
        if (s[i] === 0) { continue; }
        let l = getLowestSetBit_(s[i]);
        if (Number.isFinite(l)) {
            return (8*(len-i-1)) + l;
        }
    }

    return NaN;
}


/**
 * Returns the highest set bit of the given value in [1, 255], i.e. from 1 up 
 * to 255. If the input number === 0 returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function getHighestSetBit_(a: number) {
    return a >= 128 ? 7 
         : a >= 64 ? 6
         : a >= 32 ? 5
         : a >= 16 ? 4
         : a >= 8  ? 3
         : a >= 4  ? 2
         : a >= 2  ? 1
         : a >= 1  ? 0
         : NaN;
}


/**
 * Returns the highest set bit of the given double. If no bit is set (input 
 * === 0 or +/-inf or NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function getHighestSetBit(a: number): number {
    if (a === 0 || !Number.isFinite(a)) { 
        // There is no lowest set bit
        return NaN; 
    }

    // At this point there must be a highest set bit (always === 52 if the 
    // number is not a subnormal.

    let s = significand(a);

    let len = s.length;
    for (let i=0; i<len; i++) {
        
        let l = getHighestSetBit_(s[i]);
        if (Number.isFinite(l)) {
            return (8*(len-i-1)) + l;
        }
    }

    return NaN;
}


export { getLowestSetBit, getHighestSetBit }
