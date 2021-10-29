/** @internal */
const f = 134217729; // 2**27 + 1;
/**
 * Returns the result of dividing a double-precision floating point
 * number by a double with the result given as a double-double.
 * This is a slight modification of ddDivDd.
 *
 * * **!! NOT an error-free transformation !!**
 * * relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2,
 * u = 0.5 * Number.EPSILON
 *
 * * ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * (slightly modified)
 * @param x dividend
 * @param y divisor
 */
function doubleDivDouble(x, y) {
    const th = x / y;
    //const [πl,πh] = twoProduct(th,y);
    const πh = th * y;
    const c = f * th;
    const ah = c - (c - th);
    const al = th - ah;
    const d = f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const πl = (al * bl) - ((πh - (ah * bh)) - (al * bh) - (ah * bl));
    const δh = x - πh; // exact operation
    const δt = δh - πl; // exact operation
    const tl = δt / y;
    //return fastTwoSum(th,tl);
    const xx = th + tl;
    return [tl - (xx - th), xx];
}
export { doubleDivDouble };
//# sourceMappingURL=double-div-double.js.map