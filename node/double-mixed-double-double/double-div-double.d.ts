/**
 * Returns the result of dividing a double-precision floating point
 * number by a double with the result given as a double-double.
 * This is a slight modification of ddDivDd.
 *
 * * **!! NOT an error-free transformation !!**
 * * relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2,
 * u = 0.5 * Number.EPSILON
 *
 * * ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * (slightly modified)
 * @param x dividend
 * @param y divisor
 */
declare function doubleDivDouble(x: number, y: number): number[];
export { doubleDivDouble };
