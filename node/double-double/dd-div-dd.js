"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddDivDd = void 0;
const fast_two_sum_1 = require("../basic/fast-two-sum");
const dd_mult_double_1 = require("./dd-mult-double");
/**
 * Returns the result of dividing two double-double-precision floating point
 * numbers, i.e. returns x/y.
 *
 * * relative error bound: 15u^2 + 56u^3, i.e. fl(a/b) = (a/b)(1+ϵ),
 * where ϵ <= 15u^2 + 56u^3, u = 0.5 * Number.EPSILON
 * * the largest error found was 8.465u^2
 *
 * * ALGORITHM 17 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param xl the double-double dividend - low part
 * @param xh the double-double dividend - high part
 * @param yl the double-double divisor - low part
 * @param yh the double-double divisor - high part
 */
function ddDivDd([xl, xh], [yl, yh]) {
    let th = xh / yh;
    // approximation to th*(yh + yl) using Algorithm 7
    let [rl, rh] = dd_mult_double_1.ddMultDouble1(th, [yl, yh]);
    let πh = xh - rh; // exact operation
    let δl = xl - rl;
    let δ = πh + δl;
    let tl = δ / yh;
    return fast_two_sum_1.fastTwoSum(th, tl);
}
exports.ddDivDd = ddDivDd;
//# sourceMappingURL=dd-div-dd.js.map