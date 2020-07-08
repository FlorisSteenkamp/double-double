"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddAbs = void 0;
/**
 * Returns the absolute value of the given double-double precision floating
 * point number.
 * @param f a double-double precision floating point number
 */
function ddAbs(f) {
    const Q = f[1];
    return (Q < 0) ? [-f[0], -Q] : f;
}
exports.ddAbs = ddAbs;
//# sourceMappingURL=dd-abs.js.map