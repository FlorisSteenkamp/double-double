
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)

import { doubleToBinaryString } from "./double-to-binary-string";
import { doubleToOctets } from "./double-to-octets";


/**
 * Returns the relevant parts of the given IEEE-754 double. The returned 
 * exponent has been normalized (i.e. 1023 ha been subtracted) and the 
 * significand has the hidden bit added if appropriate.
 * See https://github.com/bartaz/ieee754-visualization
 */
function parseDouble(x: number) {
    let parts = doubleToOctets(x);

    let p0 = parts[0];
    let p1 = parts[1];

    let sign = p0 >> 7;
    let exponent_ = ((p0 & 0b0111_1111) << 4) + ((p1 & 0b11110000) >> 4);

    //---- Check for negative / positive zero / denormalized numbers.
    let hiddenMsb = exponent_ === 0 ? 0 : 16;

    // Note: exponent === 0 => 0 or denormalized number (a.k.a. subnormal number).
    let exponent = exponent_ === 0
        ? exponent_ - 1022 // Subnormals use a biased exponent of 1 (not 0!)
        : exponent_ - 1023;

    //---- Break up the significand into bytes
    let significand = parts.slice(1);
    significand[0] = (p1 & 0b0000_1111) + hiddenMsb;

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
    let str = doubleToBinaryString(x);

    // sign{1} exponent{11} fraction{52} === 64 bits (+1 hidden!)
    let [, sign, exponent, significand] = str.match(/^(.)(.{11})(.{52})$/)!; 

    let exponent_ = parseInt(exponent, 2);
    let hidden = exponent_ === 0 ? "0" : "1";

    return {
        full: sign + exponent + hidden + significand,
        sign,
        exponent,
        hidden,
        significand
    };
}


export { parseDouble, parseDoubleDetailed }
