
import { ddDiffDd } from "./dd-diff-dd";


// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
/** @internal */
const diff = ddDiffDd;


/**
 * Returns the minimum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddMin(a: number[], b: number[]) {
    const res = diff(a,b)[1];

    return res > 0 ? b : a;
}


export { ddMin }
