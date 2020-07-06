/**
 * Returns the result of subtracting the second given double-double-precision
 * floating point number from the first.
 *
 * * relative error bound: 3u^2 + 13u^3, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
 * * the error bound is not sharp - the worst case that could be found by the
 * authors were 2.25u^2
 *
 * ALGORITHM 6 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param xl low order double (of x in x - y)
 * @param xh high order double (of x in x - y)
 * @param yl low order double (of y in x - y)
 * @param yh high order double (of y in x - y)
 */
declare function ddDiffDd([xl, xh]: number[], [yl, yh]: number[]): number[];
export { ddDiffDd };
