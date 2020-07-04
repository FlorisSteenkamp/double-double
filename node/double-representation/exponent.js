"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exponent = void 0;
const parse_double_1 = require("./parse-double");
/**
 * Returns the normalized exponent of the given number.
 * @param a A double
 */
function exponent(a) {
    return parse_double_1.parseDouble(a).exponent;
}
exports.exponent = exponent;
//# sourceMappingURL=exponent.js.map