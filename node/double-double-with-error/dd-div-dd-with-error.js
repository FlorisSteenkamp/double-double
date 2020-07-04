"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddDivDdWithError = void 0;
const dd_div_dd_1 = require("../double-double/dd-div-dd");
const abs = Math.abs;
const eps = Number.EPSILON;
const u = eps / 2;
const uu = u * u;
/**
 * Returns the result of dividing two double-double-precision floating point
 * numbers together with an absolute error bound where nE and dE are absolute
 * error bounds on the *input* values.
 *
 * @param n numerator - a double-double-precision float - low part
 * @param N numerator - a double-double-precision float - high part
 * @param d denominator - a double-double-precision float - low part
 * @param D denominator - a double-double-precision float - high part
 * @param nE absolute value error bound in numerator
 * @param dE absolute value error bound in denominator
 */
function ddDivDdWithError([n, N], [d, D], nE, dE) {
    // estimate the result of the division
    let est = dd_div_dd_1.ddDivDd([n, N], [d, D]);
    let _n = abs(n + N); // absolute value of estimate of n accurate to within 1/2 ulp
    let _d = abs(d + D); // absolute value of estimate of d accurate to within 1/2 ulp
    let δd = u * _d; // the max error in the rounding to _d
    // if the error in the denominator is too high the error can be 
    // arbitrarily high
    let minD = _d - δd - dE;
    // maxErr is only valid if minD > 0
    if (minD <= 0) {
        // the error can be arbitrarily high; est is mostly irrelevant
        return { est, err: Number.POSITIVE_INFINITY };
    }
    let err = ((_d * nE + _n * dE) / Math.pow(minD, 2)) + 9 * uu * abs(_n / _d);
    return { est, err };
}
exports.ddDivDdWithError = ddDivDdWithError;
//# sourceMappingURL=dd-div-dd-with-error.js.map