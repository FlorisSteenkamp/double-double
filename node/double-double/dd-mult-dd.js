"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddMultDd = void 0;
const two_product_1 = require("../basic/two-product");
const fast_two_sum_1 = require("../basic/fast-two-sum");
/**
 * Returns the product of two double-double-precision floating point numbers.
 *
 * * relative error bound: 7u^2, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 7u^2, u = 0.5 * Number.EPSILON
 * the error bound is not sharp - the worst case that could be found by the
 * authors were 5u^2
 *
 * * ALGORITHM 10 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param xl low order double (of x in x*y)
 * @param xh hight order double (of x in x*y)
 * @param yl low order double (of y in x*y)
 * @param yh hight order double (of y in x*y)
 */
function ddMultDd([xl, xh], [yl, yh]) {
    let [cl1, ch] = two_product_1.twoProduct(xh, yh);
    return fast_two_sum_1.fastTwoSum(ch, cl1 + (xh * yl + xl * yh));
}
exports.ddMultDd = ddMultDd;
//# sourceMappingURL=dd-mult-dd.js.map