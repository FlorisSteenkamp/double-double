"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddAddDouble = void 0;
/**
 * Returns the result of adding a double to a double-double precision floating
 * point number.
 *
 * * relative error bound: 2u^2, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 2u^2, u = 0.5 * Number.EPSILON
 * * the error bound is sharp
 *
 * ALGORITHM 4 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param xl low part of a double-double precision floating point number
 * @param xh high part of a double-double precision floating point number
 * @param y a double precision floating point number
 */
function ddAddDouble([xl, xh], y) {
    //let [sl,sh] = twoSum(xh, y);
    let sh = xh + y;
    let c = sh - xh;
    let sl = (xh - (sh - c)) + (y - c);
    let v = xl + sl;
    //let [zl,zh] = fastTwoSum(sh,v);
    let zh = sh + v;
    let zl = v - (zh - sh);
    return [zl, zh];
}
exports.ddAddDouble = ddAddDouble;
//# sourceMappingURL=dd-add-double.js.map