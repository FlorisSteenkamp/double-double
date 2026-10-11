import { multStrByPowOf10 } from "../str-to-dd/mult-str-by-pow-of-10.js";
const { floor, max, log2, ceil } = Math;
/** @internal */
const LOG2_10 = log2(10);
/** @internal */
const dv = new DataView(new ArrayBuffer(8));
/**
 * Converts the given double-double precision value to a string and returns the
 * result.
 *
 * * there will always be enough decimal digits returned but some could be
 * extraneous.
 * * non-finite values return `'NaN'`, `'Infinity'` or `'-Infinity'`
 *
 * @param dd a double-double precision floating point number
 *
 * @example
 * ```
 * ddToStr([1.2246467991473532e-16, 3.141592653589793]);  //=> '3.141592653589793238462643383279505878966979117714'
 * ```
 */
function ddToStr(dd) {
    let [l, h] = dd;
    if (!Number.isFinite(h) || !Number.isFinite(l)) {
        return String(h + l);
    }
    if (h === 0) {
        if (l === 0) {
            return '0';
        }
        // not normalized
        h = l;
        l = 0;
    }
    let negative = false;
    if (h < 0) {
        h = -h;
        l = -l;
        negative = true;
    }
    const scale2 = max(0, -floor(log2(h)) + 3 * 53);
    const scale10 = ceil(scale2 / LOG2_10);
    // the scaling is done exactly (using `BigInt`) to avoid overflow
    const b = (roundScaled(l, scale2) + roundScaled(h, scale2)) * (10n ** BigInt(scale10));
    const bb = b / (2n ** BigInt(scale2));
    let str = multStrByPowOf10(bb.toString(), -scale10);
    str = removeExtraneousZeros(str);
    return negative ? '-' + str : str;
}
/**
 * Returns `x * 2**s` rounded (ties away from zero) to an integer.
 *
 * @internal
 */
function roundScaled(x, s) {
    if (x === 0) {
        return 0n;
    }
    dv.setFloat64(0, x);
    const bits = dv.getBigUint64(0);
    const biasedExp = Number((bits >> 52n) & 0x7ffn);
    let m = bits & 0xfffffffffffffn;
    let e;
    if (biasedExp === 0) {
        // subnormal
        e = -1074;
    }
    else {
        m |= 1n << 52n;
        e = biasedExp - 1075;
    }
    // x === ±m * 2**e
    const sh = e + s;
    const r = sh >= 0
        ? m << BigInt(sh)
        : (m + (1n << BigInt(-sh - 1))) >> BigInt(-sh);
    return x < 0 ? -r : r;
}
function removeExtraneousZeros(str) {
    const idx = str.indexOf('.');
    if (idx === -1) {
        return str;
    }
    let i = 0;
    let c = 0;
    while (i < str.length) {
        if (str[str.length - 1 - i] === '0') {
            c++;
        }
        else {
            break;
        }
        i++;
    }
    if (c > 0) {
        str = str.slice(0, str.length - c);
    }
    if (str.endsWith('.')) {
        str = str.slice(0, str.length - 1);
    }
    return str;
}
export { ddToStr };
//# sourceMappingURL=dd-to-str.js.map