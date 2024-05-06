import { getNumLeadingZerosAfterPoint } from "./get-num-leading-zeros-after-point";
import { set0FromTo } from "./set-0-from-to";
import { d } from './num-significant-digits';


/**
 * Returns the following parts of the number string as an object:
 * * `negative` -> `true` if the number is negative, `false` otherwise
 * * `Z` -> number of zeros after decimal point (plus 1)
 * * `Z` -> number of leading (non-significant) zeros
 * * `seH` -> the exact high part string if interpreted as a real number
 * * `seL` -> the exact low part string if interpreted as a real number
 * * `seC` -> the exact correction part string if interpreted as a real number;
 * this is used for correctly rounding the lsb; interestingly ECMASCRIPT only
 * checks up to 20 significant figures for rounding purposes (we check 45)
 * 
 * @param str 
 */
function getParts(str: string) {
    const negative = str.startsWith('-');
    if (negative) { str = str.slice(1); }

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

    return { Z, seH, seL, seC, negative };
}


export { getParts }


// Quokka tests

function test(str: string) {
    const { Z, negative, seH, seL, seC } = getParts(str);
    Z//?
    negative//?
    seH//?
    seL//?
    seC//?
    seH.length;//?
}

// test('-123456789101112131415.161718192021222324252627282930');
// test('30');
// test('0.00161718192021222324252627282930313233343536373839');

