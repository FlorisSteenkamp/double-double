/**
 * Returns `0` if `x === y`, a positive value if `x > y` or a negative value if
 * `x < y` (or `NaN` if `x` or `y` is `NaN`).
 *
 * * only the sign of the result is meaningful, e.g. it can be used as a
 * comparator in `Array.prototype.sort`
 * * assumes the double-doubles are normalized (as returned by the functions in
 * this library), i.e. `hi === fl(hi + lo)`, in which case the result is exact
 *
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
declare function ddCompare(x: number[], y: number[]): number;
export { ddCompare };
