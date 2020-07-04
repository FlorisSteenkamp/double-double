"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddCompare = void 0;
const dd_diff_dd_1 = require("./dd-diff-dd");
/**
 * Returns 0 if a === b, a +tive value if a > b or a negative value if a < b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddCompare(a, b) {
    return dd_diff_dd_1.ddDiffDd(a, b)[1];
}
exports.ddCompare = ddCompare;
//# sourceMappingURL=dd-compare.js.map