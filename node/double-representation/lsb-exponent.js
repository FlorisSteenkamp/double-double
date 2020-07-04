"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lsbExponent = void 0;
const get_max_set_bit_1 = require("./get-max-set-bit");
const exponent_1 = require("./exponent");
/**
 * Returns the true exponent of the lsb that is set of the given number or
 * NaN if a === 0 or +-inf or NaN.
 * @param a An array of numbers to check
 */
function lsbExponent(a) {
    if (a === 0 || !Number.isFinite(a)) {
        return NaN;
    }
    let e = exponent_1.exponent(a);
    return get_max_set_bit_1.getLowestSetBit(a) - 52 + e;
}
exports.lsbExponent = lsbExponent;
//# sourceMappingURL=lsb-exponent.js.map