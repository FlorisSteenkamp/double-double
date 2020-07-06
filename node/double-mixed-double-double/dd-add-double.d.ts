/**
 * Returns the result of adding a double to a double-double precision floating
 * point number.
 *
 * * relative error bound: 2u^2, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 2u^2, u = 0.5 * Number.EPSILON
 * * the error bound is sharp
 *
 * ALGORITHM 4 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param xl low part of a double-double precision floating point number
 * @param xh high part of a double-double precision floating point number
 * @param y a double precision floating point number
 */
declare function ddAddDouble([xl, xh]: number[], y: number): number[];
export { ddAddDouble };
