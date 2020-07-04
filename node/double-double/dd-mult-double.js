"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddMultDouble2 = exports.ddMultDouble1 = void 0;
const two_product_1 = require("../basic/two-product");
const fast_two_sum_1 = require("../basic/fast-two-sum");
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
 * @param xl low order double (of x in x*y)
 * @param xh high order double (of x in x*y)
 */
function ddMultDouble1(y, [xl, xh]) {
    let [cl1, ch] = two_product_1.twoProduct(xh, y);
    let cl2 = xl * y;
    let [tl1, th] = fast_two_sum_1.fastTwoSum(ch, cl2);
    let tl2 = tl1 + cl1;
    let [zl, zh] = fast_two_sum_1.fastTwoSum(th, tl2);
    return [zl, zh];
}
exports.ddMultDouble1 = ddMultDouble1;
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
 * @param xl low order double (of x in x*y)
 * @param xh high order double (of x in x*y)
 */
function ddMultDouble2(y, [xl, xh]) {
    let [cl1, ch] = two_product_1.twoProduct(xh, y);
    let cl2 = xl * y;
    let cl3 = cl1 + cl2;
    return fast_two_sum_1.fastTwoSum(ch, cl3);
}
exports.ddMultDouble2 = ddMultDouble2;
//# sourceMappingURL=dd-mult-double.js.map