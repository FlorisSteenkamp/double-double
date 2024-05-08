import { getNumLeadingZerosAfterPoint } from "./get-num-leading-zeros-after-point.js";
import { set0FromTo } from "./set-0-from-to.js";
import { d } from './num-significant-digits.js';


/**
 * Returns the following parts of the number string as an object:
 * * `Z`
 * * `seH` -> the exact high part string if interpreted as a real number
 * * `seL` -> the exact low part string if interpreted as a real number
 * * `seC` -> the exact correction part string if interpreted as a real number;
 * this is used for correctly rounding the lsb; interestingly ECMASCRIPT only
 * checks up to 20 significant figures for rounding purposes (we check 45)
 * 
 * @param str 
 * 
 * @internal
 */
function getParts(str: string) {
    if (str.startsWith('+')) { str = str.slice(1); }

    let pointAt = str.indexOf('.');
    if (pointAt === -1) { str += '.0'; }
    pointAt = str.indexOf('.');

    const Z = getNumLeadingZerosAfterPoint(str);

    // Lengthen string to `3*d` significant figures
    if (str.length < 3*d + 1) {
        const zeros = new Array(3*d + 2 - str.length).join('0');
        str += zeros;
    }

    // Shorten string to `3*d` significant figures
    str = str.slice(0, 3*d + (pointAt >= 3*d ? 0 : 1) + Z);

    if (pointAt >= 3*d) {
        // Take care of numbers > 10**(3*d)
        const zeros = new Array(pointAt - 3*d + 1).join('0');
        str += zeros;
    }

    let seH = set0FromTo(str, d + Z);
    let seL = set0FromTo(str, 0, d + Z);
    seL = set0FromTo(seL, 2*d + Z);
    let seC = set0FromTo(str, 0,2*d + Z);

    return { Z, seH, seL, seC };
}


export { getParts }
