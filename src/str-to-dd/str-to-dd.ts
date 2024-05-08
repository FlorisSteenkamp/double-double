import { twoSum } from '../basic/two-sum.js';
import { ddAddDd } from '../double-double/binary/dd-add-dd.js';
import { ddMultDd } from '../double-double/binary/dd-mult-dd.js';
import { ddDivDd } from '../double-double/binary/dd-div-dd.js';
import { ddAddDouble } from '../double-mixed-double-double/dd-add-double.js';
import { getParts } from './get-parts.js';
import { set0FromTo } from './set-0-from-to.js';
import { d } from './num-significant-digits.js';
import { add1Ulp } from './add-1-ulp.js';
import { getNumLeadingZeros } from './get-num-leading-zeros.js';
import { normalizeStr } from './normalize-str.js';
import { getPowerOf10 } from './get-power-of-10.js';

const { abs } = Math;


// How to print floating-point numbers accurately (behind a paywall)
// https://dl.acm.org/doi/10.1145/989393.989431

// Chromium implementation at https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/base/numbers/strtod.cc
// that converts a string to a double.


/**
 * Converts the given decimal string to a double-double and returns the result.
 * 
 * * accurate to within `1` ulp^2
 * 
 * @param str a string to convert to double-double precision
 * 
 * Examples:
 * ```
 * strToDd('3.14159265358979323846264338327950')  //=> [1.2246467991473535e-16, 3.141592653589793]
 * strToDd('6.0221408e+23')  //=> [-2097152, 6.0221408e+23]
 * ```
 */
function strToDd(str: string) {
    const { str: s, exp, negative } = normalizeStr(str);

    if (negative) { str = str.slice(1); }

    // get exact low, high and correction string parts
    let { Z, seH: eH, seL: eL, seC: eC } = getParts(s);

    // adding 1 ulp ensures the string significant digits are correct up to a point
    const H = add1Ulp(Number(eH));
    const _sHC = H.toFixed(3*d);
    const sHC = set0FromTo(_sHC, 0, d + Z);

    // get exact high correction low and high string parts
    let { Z:Z2, seH:seHCH, seL:seHCL} = getParts(sHC);

    const HCH = add1Ulp(Number(seHCH));
    const sHCH = HCH.toFixed(3*d);
    const sHCL = set0FromTo(sHCH, Z2, d + Z2 + 1);

    // get exact low correction string part
    let L = add1Ulp(Number(eL));
    const lZ1 = getNumLeadingZeros(eL);
    let sLC = L.toFixed(3*d);
    sLC = set0FromTo(sLC, d + Z - lZ1, 2*d + Z + 1 - lZ1);

    const HCL = Number(sHCL);
    const LC = Number(sLC);
    const C = Number(eC);
    const HCHL = Number(seHCL);

    // (correction         ) - (low    ) + (high)
    // (HCL - LC + C - HCHL) - (HCH + L) + (H   )
    const rL = ddAddDd(twoSum(HCL,-LC), twoSum(C,-HCHL));  // correction term
    const rHL = ddAddDouble(twoSum(L, -HCH), H);
    
    let r = ddAddDd(rHL,rL);

    // get accurate power of 10
    const exp10 = getPowerOf10(abs(exp));

    r = exp === 0
        ? r
        : exp < 0
        ? ddDivDd(r,exp10)
        : ddMultDd(r,exp10);

    const q = (add1Ulp(r[1]) - r[1]);

    // remove extraneous bits (not strictly necessary)
    r[0] = r[0] + q/2 - q/2;

    r = negative ? r.map(r => -r) : [r[0],r[1]];

    return r;
}


export { strToDd }
