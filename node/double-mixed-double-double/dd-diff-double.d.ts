/**
 * Returns the result of subtracting the second given double-precision
 * floating point number from the first double-double precision float.
 *
 * * relative error bound: 2u^2, i.e. fl(a-b) = (a-b)(1+ϵ),
 * where ϵ <= 2u^2, u = 0.5 * Number.EPSILON
 * * the error bound is sharp
 *
 * ALGORITHM 4 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * (with `y` negated)
 * @param x a double-double precision floating point number
 * @param y a double precision floating point number
 */
declare function ddDiffDouble(x: number[], y: number): number[];
export { ddDiffDouble };
