// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)

import { doubleToBinaryString } from "./double-to-binary-string.js";


/** 
 * Shared view used to read the bits of a double without allocating.
 * 
 * @internal
 */
const dv = new DataView(new ArrayBuffer(8));


/**
 * Returns the relevant parts of the given IEEE-754 double. The returned 
 * exponent has been normalized (i.e. 1023 has been subtracted) and the 
 * significand has the hidden bit added if appropriate.
 * 
 * * see https://github.com/bartaz/ieee754-visualization
 * 
 * * the `significand` is returned as an array of 7 bytes, where the first byte
 *   is the 4 most significant bits of the significand (with the hidden bit added
 *   if appropriate) and the remaining 6 bytes are the remaining bits of the
 *   significand.
 */
function parseDouble(x: number) {
    dv.setFloat64(0, x);

    const p0 = dv.getUint8(0);
    const p1 = dv.getUint8(1);

    const sign = p0 >> 7;
    const exponent_ = ((p0 & 0b0111_1111) << 4) + ((p1 & 0b11110000) >> 4);

    //---- Check for negative / positive zero / denormalized numbers.
    const hiddenMsb = exponent_ === 0 ? 0 : 16;

    // Note: exponent === 0 => 0 or denormalized number (a.k.a. subnormal number).
    const exponent = exponent_ === 0
        ? exponent_ - 1022 // Subnormals use a biased exponent of 1 (not 0!)
        : exponent_ - 1023;

    //---- Break up the significand into bytes
    const significand = [
        (p1 & 0b0000_1111) + hiddenMsb,
        dv.getUint8(2), dv.getUint8(3), dv.getUint8(4),
        dv.getUint8(5), dv.getUint8(6), dv.getUint8(7)
    ];

    return {
        sign,
        exponent,
        significand
    };
}


/**
 * Returns the relevant parts of the given IEEE-754 double.
 * See https://github.com/bartaz/ieee754-visualization.
 * This is a slower version of parseDouble that gives binary string 
 * representations of the components.
 */
function parseDoubleDetailed(x: number) {
    const str = doubleToBinaryString(x);

    // sign{1} exponent{11} fraction{52} === 64 bits (+1 hidden!)
    const [, sign, exponent, significand] = str.match(/^(.)(.{11})(.{52})$/)!; 

    const exponent_ = parseInt(exponent, 2);
    const hidden = exponent_ === 0 ? "0" : "1";

    return {
        full: sign + exponent + hidden + significand,
        sign,
        exponent,
        hidden,
        significand
    };
}


export { parseDouble, parseDoubleDetailed }
