/** @internal */
const f = 134217729; // 2**27 + 1;
/**
 * Returns the product of a double-double-precision floating point number and a
 * double.
 *
 * * slower than ALGORITHM 8 (one call to fastTwoSum more) but about 2x more
 * accurate
 * * relative error bound: 1.5u^2 + 4u^3, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 1.5u^2 + 4u^3, u = 0.5 * Number.EPSILON
 * * the bound is very sharp
 * * probably prefer `ddMultDouble2` due to extra speed
 *
 * * ALGORITHM 7 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param y a double
 * @param x a double-double precision floating point number
 */
function ddMultDouble1(y, x) {
    const xl = x[0];
    const xh = x[1];
    //const [cl1,ch] = twoProduct(xh,y);
    const ch = xh * y;
    const c = f * xh;
    const ah = c - (c - xh);
    const al = xh - ah;
    const d = f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const cl1 = (al * bl) - ((ch - (ah * bh)) - (al * bh) - (ah * bl));
    const cl2 = xl * y;
    //const [tl1,th] = fastTwoSum(ch,cl2);
    const th = ch + cl2;
    const tl1 = cl2 - (th - ch);
    const tl2 = tl1 + cl1;
    //const [zl,zh] = fastTwoSum(th,tl2);
    const zh = th + tl2;
    const zl = tl2 - (zh - th);
    return [zl, zh];
}
/**
 * Returns the product of a double-double-precision floating point number and a double.
 *
 * * faster than ALGORITHM 7 (one call to fastTwoSum less) but about 2x less
 * accurate
 * * relative error bound: 3u^2, i.e. fl(a*b) = (a*b)(1+ϵ),
 * where ϵ <= 3u^2, u = 0.5 * Number.EPSILON
 * * the bound is sharp
 * * probably prefer this algorithm due to extra speed
 *
 * * ALGORITHM 8 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param y a double
 * @param x a double-double precision floating point number
 */
function ddMultDouble2(y, x) {
    const xl = x[0];
    const xh = x[1];
    //const [cl1,ch] = twoProduct(xh,y);
    const ch = xh * y;
    const c = f * xh;
    const ah = c - (c - xh);
    const al = xh - ah;
    const d = f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const cl1 = (al * bl) - ((ch - (ah * bh)) - (al * bh) - (ah * bl));
    const cl2 = xl * y;
    const cl3 = cl1 + cl2;
    //return fastTwoSum(ch,cl3);
    const xx = ch + cl3;
    return [cl3 - (xx - ch), xx];
}
export { ddMultDouble1, ddMultDouble2 };
//# sourceMappingURL=dd-mult-double.js.map