/**
 * Returns the result of subtracting the second given double-precision
 * floating point number from the first double-double precision float.
 *
 * * relative error bound: 3u^2 + 13u^3, i.e. fl(a-b) = (a-b)(1+ϵ),
 * where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
 * * the error bound is not sharp - the worst case that could be found by the
 * authors were 2.25u^2
 *
 * ALGORITHM 6 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y a double precision floating point number
 */
function ddDiffDouble(x, y) {
    const xl = x[0];
    const xh = x[1];
    //const [sl,sh] = twoSum(xh,yh);
    const sh = xh - y;
    const _1 = sh - xh;
    const sl = (xh - (sh - _1)) + (-y - _1);
    //const [tl,th] = twoSum(xl,yl);
    const th = xl;
    const _2 = th - xl;
    const tl = (xl - (th - _2)) - _2;
    const c = sl + th;
    //const [vl,vh] = fastTwoSum(sh,c)
    const vh = sh + c;
    const vl = c - (vh - sh);
    const w = tl + vl;
    //const [zl,zh] = fastTwoSum(vh,w)
    const zh = vh + w;
    const zl = w - (zh - vh);
    return [zl, zh];
}
export { ddDiffDouble };
//# sourceMappingURL=dd-diff-double.js.map