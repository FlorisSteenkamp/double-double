"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddSum = void 0;
const dd_add_dd_1 = require("./dd-add-dd");
/**
 * Returns the result of summing an array of double-double-precision floating
 * point numbers naively (i.e. not using pairwise addition to reduce error a bit).
 *
 * * an error bound is given by: (n-1)(1+ϵ),
 * where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
 */
function ddSum(qs) {
    let q = qs[0];
    for (let i = 1; i < qs.length; i++) {
        q = dd_add_dd_1.ddAddDd(q, qs[i]);
    }
    return q;
}
exports.ddSum = ddSum;
//# sourceMappingURL=dd-sum.js.map