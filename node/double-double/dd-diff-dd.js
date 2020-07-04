"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddDiffDd = void 0;
/**
 * Returns the result of subtracting the second given double-double-precision
 * floating point number from the first.
 *
 * * relative error bound: 3u^2 + 13u^3, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
 * * the error bound is not sharp - the worst case that could be found by the
 * authors were 2.25u^2
 *
 * ALGORITHM 6 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param xl low order double (of x in x - y)
 * @param xh high order double (of x in x - y)
 * @param yl low order double (of y in x - y)
 * @param yh high order double (of y in x - y)
 */
function ddDiffDd([xl, xh], [yl, yh]) {
    //let [sl,sh] = twoSum(xh,yh);
    let sh = xh - yh;
    let _1 = sh - xh;
    let sl = (xh - (sh - _1)) + (-yh - _1);
    //let [tl,th] = twoSum(xl,yl);
    let th = xl - yl;
    let _2 = th - xl;
    let tl = (xl - (th - _2)) + (-yl - _2);
    let c = sl + th;
    //let [vl,vh] = fastTwoSum(sh,c)
    let vh = sh + c;
    let vl = c - (vh - sh);
    let w = tl + vl;
    //let [zl,zh] = fastTwoSum(vh,w)
    let zh = vh + w;
    let zl = w - (zh - vh);
    return [zl, zh];
}
exports.ddDiffDd = ddDiffDd;
//# sourceMappingURL=dd-diff-dd.js.map