"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoDiff = void 0;
/**
 * Returns the exact result of subtracting b from a (as a floating point
 * expansion).
 * @param a
 * @param b
 */
function twoDiff(a, b) {
    const x = a - b;
    const bvirt = a - x;
    const y = (a - (x + bvirt)) + (bvirt - b);
    return [y, x];
}
exports.twoDiff = twoDiff;
//# sourceMappingURL=two-diff.js.map