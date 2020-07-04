"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddMax = void 0;
const dd_diff_dd_1 = require("./dd-diff-dd");
/**
 * Returns the maximum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddMax(a, b) {
    let res = dd_diff_dd_1.ddDiffDd(a, b)[1];
    return res > 0 ? a : b;
}
exports.ddMax = ddMax;
//# sourceMappingURL=dd-max.js.map