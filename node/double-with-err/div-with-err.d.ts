/**
 * Returns the result of dividing two double floating point numbers
 * together with an absolute error bound where nE and dE are absolute error
 * bounds on the input values.
 * @param n numerator
 * @param d denominator
 * @param nE absolute value error bound in numerator
 * @param dE absolute value error bound in denominator
 */
declare function divWithErr(n: number, d: number, nE: number, dE: number): {
    est: number;
    err: number;
};
export { divWithErr };
