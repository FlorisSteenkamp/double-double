"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddMultBy4 = void 0;
/**
 * Returns the result of multiplying the given double-double by 4.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultBy4(f) {
    return [4 * f[0], 4 * f[1]];
}
exports.ddMultBy4 = ddMultBy4;
//# sourceMappingURL=dd-mult-by-4.js.map