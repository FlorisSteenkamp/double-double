/**
 * Returns `true` if `x1 < x2`, `false` otherwise.
 *
 * * assumes the double-doubles are normalized (as returned by the functions in
 * this library)
 *
 * @param x1 a double-double precision floating point number
 * @param x2 a double-double precision floating point number
 */
declare function ddLt(x1: number[], x2: number[]): boolean;
export { ddLt };
