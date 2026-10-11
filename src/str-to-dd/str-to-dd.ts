
/** @internal */
const DECIMAL_REGEX = /^([+-]?)(\d*)(?:\.(\d*))?(?:[eE]([+-]?\d+))?$/;


/**
 * Converts the given decimal string to a double-double and returns the result.
 *
 * * the result is correctly rounded, i.e. the high part is the double nearest
 * to the exact value and the low part is the double nearest to the exact
 * remainder (ties to even)
 * * the full double range is supported, including subnormals; values too
 * large in magnitude return `[0,Infinity]` (or `[0,-Infinity]`); zero 
 * (including values that underflow) is returned as `[0,0]`, never `-0`
 * * accepts an optional sign, a decimal point and an optional exponent, e.g.
 * `'-1.5e-10'` or `'+.3E5'`; any other string returns `[0,Number(str)]`, e.g.
 * `[0,NaN]`, `[0,Infinity]`
 *
 * @param str a string to convert to double-double precision
 *
 * Examples:
 * ```
 * strToDd('3.14159265358979323846264338327950')  //=> [1.2246467991473532e-16, 3.141592653589793]
 * strToDd('6.0221408e+23')  //=> [-2097152, 6.0221408e+23]
 * ```
 */
function strToDd(str: string): number[] {
    const match = str.trim().match(DECIMAL_REGEX);
    if (match === null || (match[2] === '' && !match[3])) {
        return [0, Number(str)];
    }

    const [, signStr, intStr, fracStr = '', expStr = '0'] = match;
    const negative = signStr === '-';

    // the value is `digits * 10**exp10`
    let digits = (intStr + fracStr).replace(/^0+/, '');
    if (digits === '') { return [0,0]; }

    let exp10 = Number(expStr) - fracStr.length;
    const trimmed = digits.replace(/0+$/, '');
    exp10 += digits.length - trimmed.length;
    digits = trimmed;

    // floor(log10(value))
    const order = digits.length - 1 + exp10;
    if (order > 309) {
        return [0, negative ? -Infinity : Infinity];
    }
    if (order < -325) {
        // smaller than half the smallest subnormal
        return [0,0];
    }

    const n = BigInt(digits);
    const num = exp10 >= 0 ? n*10n**BigInt(exp10) : n;
    const den = exp10 >= 0 ? 1n : 10n**BigInt(-exp10);

    const { x: hi, rem, den: remDen, e2 } = divToDouble(num, den, 0);

    if (!Number.isFinite(hi)) {
        return [0, negative ? -Infinity : Infinity];
    }

    // `0 - x` (rather than `-x`) avoids `-0`
    const lo = rem === 0n
        ? 0
        : rem > 0n
        ? divToDouble(rem, remDen, e2).x
        : 0 - divToDouble(-rem, remDen, e2).x;

    return negative ? [0 - lo, 0 - hi] : [lo,hi];
}


/**
 * Returns `num/den * 2**e2` correctly rounded (ties to even) to a double `x`
 * together with the exact (signed) remainder given as `rem/den * 2**e2`.
 *
 * * precondition: `num > 0n`, `den > 0n`
 *
 * @internal
 */
function divToDouble(num: bigint, den: bigint, e2: number) {
    // choose `t` such that `2**52 <= num*2**t/den < 2**53`
    let t = 53 - (bitLength(num) - bitLength(den));
    if (shiftLeft(num, t) >= den << 53n) { t--; }

    // the lsb of a double cannot be smaller than 2**-1074 (subnormals)
    t = Math.min(t, e2 + 1074);

    const N = t >= 0 ? num << BigInt(t) : num;
    const D = t >= 0 ? den : den << BigInt(-t);

    let q = N/D;
    let r = N - q*D;
    if (2n*r > D || (2n*r === D && (q & 1n) === 1n)) {
        q++;
        r -= D;
    }

    return { x: mulPow2(Number(q), e2 - t), rem: r, den: D, e2: e2 - t };
}


/** @internal */
function shiftLeft(a: bigint, t: number) {
    return t >= 0 ? a << BigInt(t) : a >> BigInt(-t);
}


/** @internal */
function bitLength(a: bigint) {
    return a.toString(2).length;
}


/**
 * Returns `x * 2**p`, exactly if the result is representable, i.e. without
 * intermediate overflow / underflow.
 *
 * @internal
 */
function mulPow2(x: number, p: number) {
    while (p > 1000) { x *= 2**1000; p -= 1000; }
    while (p < -1000) { x *= 2**-1000; p += 1000; }

    return x * 2**p;
}


export { strToDd }
