
/**
 * Truncates a floating point value's significand and returns the result. 
 * Similar to split, but with the ability to specify the number of bits to keep.
 * 
 * Theorem 17 (Veltkamp-Dekker): Let a be a p-bit floating-point number, where
 * p >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the 
 * following algorithm will produce a (p-s)-bit value a_hi and a 
 * nonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and
 * a = a_hi + a_lo.
 * 
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * 
 * @param a a double
 * @param bits the number of significand bits to leave intact
 */
function reduceSignificand(
        a: number, 
        bits: number): number {

    let s = 53 - bits;
    let f = 2**s + 1;

    let c = f * a;
    let r = c - (c - a);

    return r;
}


export { reduceSignificand }
