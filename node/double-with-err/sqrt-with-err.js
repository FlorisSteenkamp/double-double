/** @internal */
const eps = Number.EPSILON;
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
        const est = x > 0 ? Math.sqrt(x) : 0;
        return {
            est,
            err: Math.max(Math.sqrt(x + x_) - est, est)
        };
    }
    const est = Math.sqrt(x);
    const minSqrt = Math.sqrt(x - x_);
    const maxSqrt = Math.sqrt(x + x_);
    const err = Math.max(Math.abs(minSqrt - est), Math.abs(maxSqrt - est));
    //err += eps*abs(est + err);
    //err = eps*abs(est + err);
    // approx relative input error
    //const rel = x_/abs(x);
    // propogated error bound
    //const err = est*(Math.sqrt(1 + rel) - 1) + u*abs(est);
    return { est, err };
}
export { sqrtWithErr };
//# sourceMappingURL=sqrt-with-err.js.map