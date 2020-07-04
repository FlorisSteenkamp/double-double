"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqrtWithErr = void 0;
const abs = Math.abs;
const eps = Number.EPSILON;
const u = eps / 2;
const sqrt = Math.sqrt;
const min = Math.min;
const max = Math.max;
/**
 * Returns the result of the square root of a double floating point number
 * together with an absolute error bound where x_ is an absolute error
 * bound on the input value.
 * * see also "A Reduced Product of Absolute and Relative Error Bounds for Floating-point Analysis"
 * by Maxime Jacquemin, Sylvie Putot, and Franck Vedrine
 * @param x numerator
 * @param x_ absolute value error bound in numerator
 */
function sqrtWithErr(x, x_) {
    // Note: it is assumed x + x_ >= 0, else the error in x_ was wrong in the
    // first place (since we can't have a negative input to the square root)
    // estimate the result of the square root
    if (x - x_ <= 0) {
        let est = x > 0 ? sqrt(x) : 0;
        return {
            est,
            err: max(sqrt(x + x_) - est, est)
        };
    }
    let est = sqrt(x);
    let minSqrt = sqrt(x - x_);
    let maxSqrt = sqrt(x + x_);
    let err = max(abs(minSqrt - est), abs(maxSqrt - est));
    //err += eps*abs(est + err);
    //err = eps*abs(est + err);
    // approx relative input error
    //let rel = x_/abs(x);
    // propogated error bound
    //let err = est*(sqrt(1 + rel) - 1) + u*abs(est);
    return { est, err };
}
exports.sqrtWithErr = sqrtWithErr;
//# sourceMappingURL=sqrt-with-err.js.map