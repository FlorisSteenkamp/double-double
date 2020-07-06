/**
 * Returns the result of dividing two double-double-precision floating point
 * numbers, i.e. returns x/y.
 *
 * * relative error bound: 15u^2 + 56u^3, i.e. fl(a/b) = (a/b)(1+ϵ),
 * where ϵ <= 15u^2 + 56u^3, u = 0.5 * Number.EPSILON
 * * the largest error found was 8.465u^2
 *
 * * ALGORITHM 17 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param xl the double-double dividend - low part
 * @param xh the double-double dividend - high part
 * @param yl the double-double divisor - low part
 * @param yh the double-double divisor - high part
 */
declare function ddDivDd([xl, xh]: number[], [yl, yh]: number[]): number[];
export { ddDivDd };
