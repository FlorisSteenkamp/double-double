import { addOrSubPositiveIntegerStrs } from "./add-or-sub-positive-integer-strings.js";
import { compareIntStrs } from "./compare-int-strs.js";

const { EPSILON: eps } = Number;

const u = eps/2;
const uu = u**2;


/**
 * Get difference in ulps of `s1` as compared to `s2`.
 * 
 * @param s1 
 * @param s2 
 * 
 * @internal
 */
function getDiffInUlpsDd(
        s1: string,
        s2: string) {

    if (Number(s1) === 0) {
        if (Number(s2) === 0) {
            return 0;
        }
        return Number.POSITIVE_INFINITY;
    } 
    if (Number(s2) === 0) {
        return Number.POSITIVE_INFINITY;
    }

    const s1Neg = s1.startsWith('-');
    const s2Neg = s2.startsWith('-');

    if (s1Neg !== s2Neg) {
        return Number.POSITIVE_INFINITY;
    }

    if (s1Neg) {
        s1 = s1.slice(1);
        s2 = s2.slice(1);
    }

    const i1 = s1.indexOf('.');
    const i2 = s2.indexOf('.');

    if (i1 === -1) {
        while (s1.startsWith('0') && s1.length > 1) {
            s1 = s1.slice(1);
        }
    }
    if (i2 === -1) {
        while (s2.startsWith('0') && s2.length > 1) {
            s2 = s2.slice(1);
        }
    }

    if (i1 === -1) {
        if (i2 === -1) {
            // do nothing
        } else {
            const numDigitsAfterDot2 = s2.length - i2 - 1;
            s2 = removeDot(s2);
            const zeros = new Array(numDigitsAfterDot2 + 1).join('0');
            s1 += zeros;
        }
    } else {
        if (i2 === -1) {
            const numDigitsAfterDot1 = s1.length - i1 - 1;
            s1 = removeDot(s1);
            const zeros = new Array(numDigitsAfterDot1 + 1).join('0');
            s2 += zeros;
        } else {
            const numDigitsAfterDot1 = s1.length - i1 - 1;
            const numDigitsAfterDot2 = s2.length - i2 - 1;

            s1 = removeDot(s1);
            s2 = removeDot(s2);

            const diff = numDigitsAfterDot1 - numDigitsAfterDot2;

            if (diff > 0) {
                const zeros = new Array(diff + 1).join('0');
                s2 += zeros;
            } else if (diff < 0) {
                s2 = removeDot(s2);
                const zeros = new Array(-diff + 1).join('0');
                s1 += zeros;
            } else {
                // do nothing
            }
        }
    }
    
    const w = compareIntStrs(s1,s2);

    if (w === 0) {
        return 0;
    }

    const sss = Number(s2);

    let swapped = false;
    if (w < 0) {
        swapped = true;
        [s1,s2] = [s2,s1];
    }

    const ssStr = addOrSubPositiveIntegerStrs(s1,s2,false);
    const ss = Number(ssStr);

    const ulps = (ss/sss)/uu/4;

    return swapped ? -ulps : ulps;
}


function removeDot(s: string) {
    const idx = s.indexOf('.');

    if (idx === -1) { return s; }

    return s.substring(0,idx) + s.substring(idx + 1);
}


export { getDiffInUlpsDd }
