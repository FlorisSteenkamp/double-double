
import { ddDiffDd } from "./dd-diff-dd";


/**
 * Returns the maximum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddMax(a: number[], b: number[]) {
    let res = ddDiffDd(a,b)[1];

    return res > 0 ? a : b;
}


export { ddMax }
