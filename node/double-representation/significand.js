"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.significand = void 0;
const parse_double_1 = require("./parse-double");
/**
 * Return the significand of the given double with the hidden bit added (in case
 * a is not subnormal or 0, etc.)
 * @param a A double
 */
function significand(a) {
    return parse_double_1.parseDouble(a).significand;
}
exports.significand = significand;
//# sourceMappingURL=significand.js.map