"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bitLength = void 0;
const get_max_set_bit_1 = require("./get-max-set-bit");
/**
 * Returns the bit-length of the significand of the given number in such a way
 * that trailing zeros are not counted.
 * @param a a double precision floating point number
 */
function bitLength(a) {
    if (a === 0) {
        return 0;
    }
    return get_max_set_bit_1.getHighestSetBit(a) - get_max_set_bit_1.getLowestSetBit(a) + 1;
}
exports.bitLength = bitLength;
//# sourceMappingURL=bit-length.js.map