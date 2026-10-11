
/** @internal */
const f = 2**27 + 1;


/**
 * Returns the product of two double-double-precision floating point numbers.
 * 
 * * relative error bound: 5u^2, i.e. fl(a*b) = (a*b)(1+ϵ),
 * where |ϵ| < 5u^2, u = 0.5 * Number.EPSILON (assuming no underflow or overflow)
 * * this bound (for round-to-nearest ties-to-even, as used by JavaScript) was
 * formally proven (in Coq) by J.-M. Muller and L. Rideau, see
 * https://doi.org/10.1145/3484514 - it improves on the 7u^2 bound given in
 * the original paper (below); the worst case found is 4.985u^2
 *
 * * assumes no overflow; note that (Veltkamp) splitting overflows (giving
 * `NaN`) if the magnitude of `x[1]` or `y[1]` exceeds ~2^996
 * 
 * * ALGORITHM 10 (DWTimesDW1) of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddMultDd(x: number[], y: number[]): number[] {
    const xh = x[1];
    const yh = y[1];

    //const [cl1,ch] = twoProduct(xh,yh);
    const ch = xh*yh;
    const c = f * xh; const ah = c - (c - xh); const al = xh - ah;
    const d = f * yh; const bh = d - (d - yh); const bl = yh - bh;
    const cl1 = (al*bl) - ((ch - (ah*bh)) - (al*bh) - (ah*bl));

    //return fastTwoSum(ch,cl1 + (xh*yl + xl*yh));
    const b = cl1 + (xh*y[0] + x[0]*yh);
    const xx = ch + b;

    return [b - (xx - ch), xx];
}


export { ddMultDd }
