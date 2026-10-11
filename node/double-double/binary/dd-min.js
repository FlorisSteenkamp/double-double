import { ddCompare } from "./dd-compare.js";
/**
 * Returns the minimum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddMin(a, b) {
    const res = ddCompare(a, b);
    return res > 0 ? b : a;
}
export { ddMin };
//# sourceMappingURL=dd-min.js.map