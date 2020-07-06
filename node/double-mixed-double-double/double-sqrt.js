"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doubleSqrt = void 0;
const two_square_1 = require("../basic/two-square");
// Taken from https://github.com/munrocket/double.js/blob/master/src/double.ts
// Unfortunately no error bound given
/**
 * Returns the square root of a double-double as a double-double.
 * * no error bound is returned
 */
// TODO - calculate an error bound and add to function description
function doubleSqrt(x) {
    if (x === 0) {
        return [0, 0];
    }
    let s = Math.sqrt(x);
    let [tl, th] = two_square_1.twoSquare(s);
    let e = (x - th - tl) * 0.5 / s;
    x = s + e;
    let xl = e - (x - s);
    return [xl, x];
}
exports.doubleSqrt = doubleSqrt;
//# sourceMappingURL=double-sqrt.js.map