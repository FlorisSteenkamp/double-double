"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddMultByNeg2 = void 0;
/**
 * Returns the result of multiplying the given double-double by -2.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultByNeg2(f) {
    return [-2 * f[0], -2 * f[1]];
}
exports.ddMultByNeg2 = ddMultByNeg2;
//# sourceMappingURL=dd-mult-by-neg-2.js.map