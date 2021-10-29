/** @internal */
const f = 134217729; // 2**27 + 1;
/**
 * Returns the result of dividing a double-double-precision floating point
 * number by a double.
 *
 * * relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2,
 * u = 0.5 * Number.EPSILON
 * * the bound is very sharp
 *
 * * ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y the double-precision divisor
 */
function ddDivDouble(x, y) {
    const xl = x[0];
    const xh = x[1];
    const th = xh / y;
    //const [πl,πh] = twoProduct(th,y);
    const πh = th * y;
    const c = f * th;
    const ah = c - (c - th);
    const al = th - ah;
    const d = f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const πl = (al * bl) - ((πh - (ah * bh)) - (al * bh) - (ah * bl));
    const δh = xh - πh; // exact operation
    const δt = δh - πl; // exact operation
    const δ = δt + xl;
    const tl = δ / y;
    //return fastTwoSum(th,tl);
    const rl = th + tl;
    return [tl - (rl - th), rl];
}
export { ddDivDouble };
//# sourceMappingURL=dd-div-double.js.map