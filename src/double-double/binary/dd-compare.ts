
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
function ddCompare(x: number[], y: number[]) {
    const xh = x[1];
    const yh = y[1];

    // Note: the difference of two distinct doubles is never 0 (due to 
    // subnormals) so the sign is always correct
    return xh === yh ? x[0] - y[0] : xh - yh;
}


export { ddCompare }
