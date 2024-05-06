import { twoSum } from '../basic/two-sum';
import { ddAddDd } from '../double-double/binary/dd-add-dd';
import { ddDivDouble } from '../double-mixed-double-double/dd-div-double';
import { ddMultDouble1 } from '../double-mixed-double-double/dd-mult-double';
import { ddAddDouble } from '../double-mixed-double-double/dd-add-double';
import { getParts } from './get-parts';
import { set0FromTo } from './set-0-from-to';
import { d } from './num-significant-digits';
import { ddToStr } from './dd-to-str';
import { findFirstNonZeroDiffIdx } from './find-first-diff-idx';
import { add1Ulp } from './add-1-ulp';
import { sub1Ulp } from './sub-1-ulp';
import { getNumLeadingZeros } from './get-num-leading-zeros';
import { normalizeStr } from './normalize-str';

const { log2, round } = Math;

// How to print floating-point numbers accurately (behind a paywall)
// https://dl.acm.org/doi/10.1145/989393.989431

// Chromium implementation at https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/base/numbers/strtod.cc
// that converts a string to a double.


/**
 * 
 * @param str
 */
function strToDd(str: string) {
    const { str: s, exp } = normalizeStr(str);

    let {Z, seH: eH, seL: eL, seC: eC, negative } = getParts(s);
    eH;//?
    eL;//?
    eC;//?

    const H = add1Ulp(Number(eH));
    const _sHC = H.toFixed(3*d);
    const sHC = set0FromTo(_sHC, 0, d + Z);

    let {Z:Z2, seH:seHCH, seL:seHCL} = getParts(sHC);
    seHCH;//?
    seHCL;//?

    const HCH = add1Ulp(Number(seHCH));
    const sHCH = HCH.toFixed(3*d);
    const sHCL = set0FromTo(sHCH, Z2, d + Z2 + 1);

    let L = add1Ulp(Number(eL));
    const lZ1 = getNumLeadingZeros(eL);
    let sLC = L.toFixed(3*d);
    sLC = set0FromTo(sLC, d + Z - lZ1, 2*d + Z + 1 - lZ1);

    const HCL = Number(sHCL);
    const LC = Number(sLC);
    let C = Number(eC);

    let HCHL = Number(seHCL);

    // (correction         ) - (low    ) + (high)
    // (HCL - LC + C - HCHL) - (HCH + L) + (H   )
    const rL = ddAddDd(twoSum(HCL,-LC), twoSum(C,-HCHL));

    if (exp < 0) {
        ddDivDouble(rL, exp)
    }

    const rHL = ddAddDouble(twoSum(L, -HCH), H);
    
    let r = ddAddDd(rHL,rL);
    r = negative ? r.map(r => -r) : r;

    r = exp === 0
        ? r
        : exp < 0
        ? ddDivDouble(r,10**-exp)
        : ddMultDouble1(10**exp,r)

    // str;         //?
    // ddToStr(r);  //?

    // we need to scale so `ddToStr` can work.
    // const scale = round(log2(Number(str)));//?

    // const r1 = [r[0]*(2**-scale), r[1]*(2**-scale)];



    return r;
}


export { strToDd }



// Quokka tests

// Note: `fl(𝜋) === [1.2246467991473532e-16, 3.141592653589793]`


function test(str: string) {
    const dd = strToDd(str);
    const ddStr1 = ddToStr(dd);

    // Note: We're not adding and subtracting one ulp because the rounding might
    // be out by one, we're doing it since as is similiar with double precision
    // numbers we can have e.g.:
    // `fl(1.250100000000000000000000000000001153709073886)
    // === 1.250099999999999999999999999999998072221162867` EXACTLY
    const ddStr2 = ddToStr([add1Ulp(dd[0]),dd[1]]);//?
    const ddStr3 = ddToStr([sub1Ulp(dd[0]),dd[1]]);//?
    
    const r = Math.max(
        findFirstNonZeroDiffIdx(str,ddStr1),
        findFirstNonZeroDiffIdx(str,ddStr2),
        findFirstNonZeroDiffIdx(str,ddStr3)
    );
    r;//?

    if (r < 32 && r !== -1) {
        throw new Error(`bug; must have at least 32 digits correct but only ${r} was`);
    }
}


// const 𝜋Str = '3.141592653589793238462643383279502884197169399375105820974944';
const eulerStr = '0.0000000000000000000000000000000000000577215664901532860606512090082402431042159335939923598805767';

// test(𝜋Str);
test(eulerStr);
// test('1.250100000000000000000000000000000000000000000000000000000000');
// test('-11111111111111110.0000000000000000000000000000000000000');
// test('-11111111111111110.0000000000000000000000000000000000000');



