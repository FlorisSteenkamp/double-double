"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddMultByNeg4 = void 0;
/**
 * Returns the result of multiplying the given double-double by -4.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultByNeg4(f) {
    return [-4 * f[0], -4 * f[1]];
}
exports.ddMultByNeg4 = ddMultByNeg4;
//# sourceMappingURL=dd-mult-by-neg-4.js.map