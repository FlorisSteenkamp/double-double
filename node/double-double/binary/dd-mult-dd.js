/** @internal */
const f = 2 ** 27 + 1;
/**
 * Returns the product of two double-double-precision floating point numbers.
 *
 * * relative error bound: 7u^2, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 7u^2, u = 0.5 * Number.EPSILON
 * the error bound is not sharp - the worst case that could be found by the
 * authors were 5u^2
 *
 * * ALGORITHM 10 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddMultDd(x, y) {
    //const xl = x[0];
    const xh = x[1];
    //const yl = y[0];
    const yh = y[1];
    //const [cl1,ch] = twoProduct(xh,yh);
    const ch = xh * yh;
    const c = f * xh;
    const ah = c - (c - xh);
    const al = xh - ah;
    const d = f * yh;
    const bh = d - (d - yh);
    const bl = yh - bh;
    const cl1 = (al * bl) - ((ch - (ah * bh)) - (al * bh) - (ah * bl));
    //return fastTwoSum(ch,cl1 + (xh*yl + xl*yh));
    const b = cl1 + (xh * y[0] + x[0] * yh);
    const xx = ch + b;
    return [b - (xx - ch), xx];
}
export { ddMultDd };
//# sourceMappingURL=dd-mult-dd.js.map