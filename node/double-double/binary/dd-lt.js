/**
 * Returns `true` if `x1 < x2`, `false` otherwise.
 *
 * @param x1 a double-double precision floating point number
 * @param x2 a double-double precision floating point number
 */
function ddLt(x1, x2) {
    if (x1[1] < x2[1]) {
        return true;
    }
    if (x1[1] > x2[1]) {
        return false;
    }
    if (x1[0] < x2[0]) {
        return true;
    }
    return false;
}
export { ddLt };
//# sourceMappingURL=dd-lt.js.map