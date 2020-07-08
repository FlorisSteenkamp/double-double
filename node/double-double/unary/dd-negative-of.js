"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddNegativeOf = void 0;
/**
 * Returns the negative of the given double-double precision floating point
 * number.
 * * the result is exact
 * @param f a double-double precision floating point number
 */
function ddNegativeOf(f) {
    return [-f[0], -f[1]];
}
exports.ddNegativeOf = ddNegativeOf;
//# sourceMappingURL=dd-negative-of.js.map