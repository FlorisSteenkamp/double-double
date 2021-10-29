// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)
import { doubleToOctets } from "./double-to-octets.js";
/** @internal */
function doubleToBinaryString(number) {
    return octetsToBinaryString(doubleToOctets(number));
}
/**
 * @param octets The 8 bytes composing a double (msb first)
 * @internal
 */
function octetsToBinaryString(octets) {
    return octets
        .map(int8ToBinaryString)
        .join('');
}
/**
 * intToBinaryString(8) -> "00001000"
 * @internal
 */
function int8ToBinaryString(i) {
    let iStr = i.toString(2);
    for (; iStr.length < 8; iStr = "0" + iStr)
        ;
    return iStr;
}
export { doubleToBinaryString };
//# sourceMappingURL=double-to-binary-string.js.map