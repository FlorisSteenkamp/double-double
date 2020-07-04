"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddNegativeOf = void 0;
/**
 * Returns the negative of the given double-double precision floating point
 * number.
 * * the result is exact
 * @param q low order double
 * @param Q high order double
 */
function ddNegativeOf([q, Q]) {
    return [-q, -Q];
}
exports.ddNegativeOf = ddNegativeOf;
//# sourceMappingURL=dd-negative-of.js.map