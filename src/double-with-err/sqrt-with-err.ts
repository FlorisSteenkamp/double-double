
/** @internal */
const eps = Number.EPSILON;


/**
 * Returns the result of the square root of a double floating point number  
 * together with an absolute error bound where `x_` is an absolute error 
 * bound on the input value.
 * 
 * * the returned error bound also accounts for the rounding errors of the 
 * floating point operations involved (including the rounding of `est` itself)
 * * see also "A Reduced Product of Absolute and Relative Error Bounds for Floating-point Analysis"
 * by Maxime Jacquemin, Sylvie Putot, and Franck Vedrine
 * @param x the radicand
 * @param x_ absolute value error bound in the radicand
 */
function sqrtWithErr(
        x: number, 
        x_: number) {

    // Note: it is assumed x + x_ >= 0, else the error in x_ was wrong in the
    // first place (since we can't have a negative input to the square root)

    // Each of `est`, `minSqrt` and `maxSqrt` below has a relative error of 
    // less than 1.5u (u === eps/2) due to rounding; the bounds are inflated 
    // to account for this and for the rounding of the subtraction.

    // estimate the result of the square root
    if (x - x_ <= 0) {
        const est = x > 0 ? Math.sqrt(x) : 0;
        const maxSqrt = Math.sqrt(x + x_);
        return { 
            est,
            err: Math.max(maxSqrt - est, est) + 2*eps*maxSqrt
        }
    }

    const est = Math.sqrt(x);
    const minSqrt = Math.sqrt(x - x_);
    const maxSqrt = Math.sqrt(x + x_);
    const err = Math.max(
        Math.abs(minSqrt - est), 
        Math.abs(maxSqrt - est)
    );
    
    return { est, err: (1 + eps)*err + 4*eps*maxSqrt };
}


export { sqrtWithErr }
