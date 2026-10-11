// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)
/**
 * Shared buffer used to read the bytes of a double.
 *
 * @internal
 */
const buffer = new ArrayBuffer(8);
/** @internal */
const dv = new DataView(buffer);
/** @internal */
const u8 = new Uint8Array(buffer);
/**
 * Returns the IEEE-754 8 bytes composing the given double, starting from the
 * sign bit and ending in the lsb of the significand.
 * e.g. 123.456 -> [64, 94, 221, 47, 26, 159, 190, 119]
 * @internal
 */
function doubleToOctets(number) {
    dv.setFloat64(0, number, false);
    return Array.from(u8);
}
export { doubleToOctets };
//# sourceMappingURL=double-to-octets.js.map