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
declare function ddDivDdWithError([n, N]: number[], [d, D]: number[], nE: number, dE: number): {
    est: number[];
    err: number;
};
export { ddDivDdWithError };
