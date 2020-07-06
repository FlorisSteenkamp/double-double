"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddDivBy2 = void 0;
/**
 * Returns the result of dividing the given double-double by 2.
 * @param q the double-double - low part
 * @param Q the double-double - high part
 */
function ddDivBy2([q, Q]) {
    return [q / 2, Q / 2];
}
exports.ddDivBy2 = ddDivBy2;
//# sourceMappingURL=dd-div-by-2.js.map