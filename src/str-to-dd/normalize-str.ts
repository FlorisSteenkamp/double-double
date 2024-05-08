import { getNumLeadingZerosAfterPoint } from "./get-num-leading-zeros-after-point.js"
import { getNumLeadingZerosBeforePoint } from "./get-num-leading-zeros-before-point.js";
import { d } from "./num-significant-digits.js";
import { extractExp } from './extract-exp.js';


/**
 * 
 * @param s 
 * 
 * @internal
 */
function normalizeStr(
        s: string): { str: string, exp: number, negative: boolean } {

    if (Number(s) === 0) {
        return { str: '0', exp: 0, negative: false };
    }

    const negative = s.startsWith('-');
    if (negative) { s = s.slice(1); }

    let exp = 0;
    ({ s, exp } = extractExp(s));

    let str: string;

    const z = getNumLeadingZerosAfterPoint(s);
    if (z > 0) {
        s = s.slice(z + 1);
        str = s[0] + '.' + s.slice(1);
        exp = exp - z;
    } else {
        const Z = getNumLeadingZerosBeforePoint(s);

        s = s.split('').filter(s => s !== '.').join('');
    
        str = s[0] + '.' + s.slice(1);
        exp = exp + Z - 1;
    }

    str = str.slice(0, 3*d + 1);

    if (str.length < 3*d + 1) {
        const zeros = new Array(3*d + 1 - str.length).join('0');
        str += zeros;
    }

    return { str, exp, negative };
}


export { normalizeStr }
