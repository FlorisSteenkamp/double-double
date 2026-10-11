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
declare function sqrtWithErr(x: number, x_: number): {
    est: number;
    err: number;
};
export { sqrtWithErr };
