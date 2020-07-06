"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddMultByNeg2 = void 0;
/**
 * Returns the result of multiplying the given double-double by -2.
 * * The result is exact
 * @param q a double-double - low order double
 * @param Q a double-double - high order double
 */
function ddMultByNeg2([q, Q]) {
    return [-2 * q, -2 * Q];
}
exports.ddMultByNeg2 = ddMultByNeg2;
//# sourceMappingURL=dd-mult-by-neg-2.js.map