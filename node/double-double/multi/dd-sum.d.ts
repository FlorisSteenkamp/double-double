/**
 * Returns the result of summing an array of double-double-precision floating
 * point numbers naively (i.e. not using pairwise addition to reduce error a bit).
 *
 * * an error bound is given by: (n-1)(1+ϵ),
 * where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
 */
declare function ddSum(qs: number[][]): number[];
export { ddSum };
