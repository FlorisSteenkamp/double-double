"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddMin = void 0;
const dd_diff_dd_1 = require("./dd-diff-dd");
// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const diff = dd_diff_dd_1.ddDiffDd;
/**
 * Returns the minimum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddMin(a, b) {
    const res = diff(a, b)[1];
    return res > 0 ? b : a;
}
exports.ddMin = ddMin;
//# sourceMappingURL=dd-min.js.map