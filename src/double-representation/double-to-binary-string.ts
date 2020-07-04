
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)

import { doubleToOctets } from "./double-to-octets";


function doubleToBinaryString(number: number) {
    return octetsToBinaryString(doubleToOctets(number) );
}


/**
 * @param octets The 8 bytes composing a double (msb first)
 */
function octetsToBinaryString(octets: number[]) {
    return octets
        .map(int8ToBinaryString)
        .join('');
}


/**
 * intToBinaryString(8) -> "00001000"
 */ 
function int8ToBinaryString(i: number) {
    let iStr = i.toString(2);
    for (; iStr.length < 8; iStr="0"+iStr);
    
    return iStr;
}


export { doubleToBinaryString }
