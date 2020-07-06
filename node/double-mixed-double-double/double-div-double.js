"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doubleDivDouble = void 0;
const two_product_1 = require("../basic/two-product");
const fast_two_sum_1 = require("../basic/fast-two-sum");
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
    let th = x / y;
    let [πl, πh] = two_product_1.twoProduct(th, y);
    let δh = x - πh; // exact operation
    let δt = δh - πl; // exact operation
    let tl = δt / y;
    return fast_two_sum_1.fastTwoSum(th, tl);
}
exports.doubleDivDouble = doubleDivDouble;
//# sourceMappingURL=double-div-double.js.map