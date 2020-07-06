"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddMultBy2 = void 0;
/**
 * Returns the result of multiplying the given double-double by 2.
 * * The result is exact
 * @param q a double-double - low order double
 * @param Q a double-double - high order double
 */
function ddMultBy2([q, Q]) {
    return [2 * q, 2 * Q];
}
exports.ddMultBy2 = ddMultBy2;
//# sourceMappingURL=dd-mult-by-2.js.map