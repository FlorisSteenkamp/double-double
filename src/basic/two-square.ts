

let f = 2**27 + 1;


/**
 * Returns the exact result of squaring a double.
 * 
 * * the resulting expansion is least significant double first.
 * 
 * Theorem 18 (Shewchuk): Let a and b be p-bit floating-point numbers, where 
 * p >= 6. Then the following algorithm will produce a nonoverlapping expansion 
 * x + y such that ab = x + y, where x is an approximation to ab and y 
 * represents the roundoff error in the calculation of x. Furthermore, if 
 * round-to-even tiebreaking is used, x and y are non-adjacent.
 * 
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param a A double
 */
function twoSquare(a: number): number[] { 
    let x = a*a;

    //let [ah, al] = split(a);
    let c = f * a; let ah = c - (c - a); let al = a - ah;

    let y = (al*al) - ((x - (ah*ah)) - 2*(ah*al));

    return [y,x];
}


export { twoSquare }
