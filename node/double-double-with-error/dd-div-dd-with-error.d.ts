/**
 * Returns the result of dividing two double-double-precision floating point
 * numbers together with an absolute error bound where nE and dE are absolute
 * error bounds on the *input* values.
 *
 * * the rounding error of the division itself is bounded using the proven
 * relative error bound of `ddDivDd`, i.e. `15u^2 + 56u^3`
 *
 * @param numer numerator - a double-double-precision float
 * @param denom denominator - a double-double-precision float
 * @param nE absolute value error bound in numerator
 * @param dE absolute value error bound in denominator
 */
declare function ddDivDdWithError(numer: number[], denom: number[], nE: number, dE: number): {
    est: number[];
    err: number;
};
export { ddDivDdWithError };
