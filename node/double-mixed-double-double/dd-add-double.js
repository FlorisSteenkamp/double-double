/**
 * Returns the result of adding a double to a double-double precision floating
 * point number.
 *
 * * relative error bound: 2u^2, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 2u^2, u = 0.5 * Number.EPSILON
 * * the error bound is sharp
 *
 * ALGORITHM 4 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y a double precision floating point number
 */
function ddAddDouble(x, y) {
    const xl = x[0];
    const xh = x[1];
    //const [sl,sh] = twoSum(xh, y);
    const sh = xh + y;
    const c = sh - xh;
    const sl = (xh - (sh - c)) + (y - c);
    const v = xl + sl;
    //const [zl,zh] = fastTwoSum(sh,v);
    const zh = sh + v;
    const zl = v - (zh - sh);
    return [zl, zh];
}
export { ddAddDouble };
//# sourceMappingURL=dd-add-double.js.map