import { ddCompare } from "./dd-compare.js";


/**
 * Returns the maximum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddMax(a: number[], b: number[]) {
    const res = ddCompare(a,b);

    return res > 0 ? a : b;
}


export { ddMax }
