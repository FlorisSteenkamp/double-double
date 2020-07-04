"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddSqrt = void 0;
const two_square_1 = require("../basic/two-square");
const sqrt = Math.sqrt;
// Taken from https://github.com/munrocket/double.js/blob/master/src/double.ts
// Unfortunately no error bound given
/**
 * Returns the square root of a double-double as a double-double.
 * * no error bound is returned
 */
function ddSqrt([xl, xh]) {
    let s = sqrt(xh);
    let [tl, th] = two_square_1.twoSquare(s);
    let e = (xh - th - tl + xl) * 0.5 / s;
    xh = s + e;
    xl = e - (xh - s);
    return [xl, xh];
}
exports.ddSqrt = ddSqrt;
//# sourceMappingURL=dd-sqrt.js.map