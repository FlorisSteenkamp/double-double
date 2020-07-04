"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddMultBy4 = void 0;
/**
 * Returns the result of multiplying the given double-double by 4.
 * * The result is exact
 * @param q a double-double - low order double
 * @param Q a double-double - high order double
 */
function ddMultBy4([q, Q]) {
    return [4 * q, 4 * Q];
}
exports.ddMultBy4 = ddMultBy4;
//# sourceMappingURL=dd-mult-by-4.js.map