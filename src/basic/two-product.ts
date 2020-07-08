
const f = 134217729; // 2**27 + 1;


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
function twoProduct(a: number, b: number): number[] { 
    const x = a*b;

    //const [ah, al] = split(a);
    const c = f * a; const ah = c - (c - a); const al = a - ah;
    //const [bh, bl] = split(b);
    const d = f * b; const bh = d - (d - b); const bl = b - bh;

    const y = (al*bl) - ((x - (ah*bh)) - (al*bh) - (ah*bl));

    //const err1 = x - (ah * bh);
    //const err2 = err1 - (al * bh);
    //const err3 = err2 - (ah * bl);
    //const y = (al * bl) - err3;

    return [y,x];
}


export { twoProduct }
