"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddProduct = void 0;
const dd_mult_dd_1 = require("./dd-mult-dd");
/**
 * Returns the result of multiplying together an array of double-double-precision
 * floating point numbers naively (i.e. not using pairwise addition to reduce
 * error a bit).
 *
 * * an error bound is given by: (n-1)(1+ϵ),
 * where ϵ <= 7u^2, u = 0.5 * Number.EPSILON
 */
function ddProduct(qs) {
    let q = qs[0];
    for (let i = 1; i < qs.length; i++) {
        q = dd_mult_dd_1.ddMultDd(q, qs[i]);
    }
    return q;
}
exports.ddProduct = ddProduct;
//# sourceMappingURL=dd-product.js.map