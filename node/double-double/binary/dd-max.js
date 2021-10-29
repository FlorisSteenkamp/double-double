import { ddDiffDd } from "./dd-diff-dd.js";
// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
/** @internal */
const diff = ddDiffDd;
/**
 * Returns the maximum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddMax(a, b) {
    const res = diff(a, b)[1];
    return res > 0 ? a : b;
}
export { ddMax };
//# sourceMappingURL=dd-max.js.map