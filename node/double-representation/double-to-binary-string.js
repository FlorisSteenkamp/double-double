"use strict";
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)
Object.defineProperty(exports, "__esModule", { value: true });
exports.doubleToBinaryString = void 0;
const double_to_octets_1 = require("./double-to-octets");
function doubleToBinaryString(number) {
    return octetsToBinaryString(double_to_octets_1.doubleToOctets(number));
}
exports.doubleToBinaryString = doubleToBinaryString;
/**
 * @param octets The 8 bytes composing a double (msb first)
 */
function octetsToBinaryString(octets) {
    return octets
        .map(int8ToBinaryString)
        .join('');
}
/**
 * intToBinaryString(8) -> "00001000"
 */
function int8ToBinaryString(i) {
    let iStr = i.toString(2);
    for (; iStr.length < 8; iStr = "0" + iStr)
        ;
    return iStr;
}
//# sourceMappingURL=double-to-binary-string.js.map