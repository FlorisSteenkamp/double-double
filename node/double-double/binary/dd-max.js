"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddMax = void 0;
const dd_diff_dd_1 = require("./dd-diff-dd");
// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
/** @internal */
const diff = dd_diff_dd_1.ddDiffDd;
/**
 * Returns the maximum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddMax(a, b) {
    const res = diff(a, b)[1];
    return res > 0 ? a : b;
}
exports.ddMax = ddMax;
//# sourceMappingURL=dd-max.js.map