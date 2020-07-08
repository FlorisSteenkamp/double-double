/**
 * Returns the result of dividing a double-double-precision floating point
 * number by a double.
 *
 * * relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2,
 * u = 0.5 * Number.EPSILON
 * * the bound is very sharp
 *
 * * ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y the double-precision divisor
 */
declare function ddDivDouble(x: number[], y: number): number[];
export { ddDivDouble };
