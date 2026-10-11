
/**
 * Returns the exact value of the given finite double as `m * 2**e` with `m` a
 * (signed) `BigInt`.
 *
 * * used in tests
 */
function doubleToExact(x: number): { m: bigint, e: number } {
    if (x === 0) { return { m: 0n, e: 0 }; }

    const dv = new DataView(new ArrayBuffer(8));
    dv.setFloat64(0, x);
    const bits = dv.getBigUint64(0);
    const biasedExp = Number((bits >> 52n) & 0x7ffn);
    let m = bits & 0xf_ffff_ffff_ffffn;
    let e = -1074;
    if (biasedExp !== 0) { m |= 1n << 52n; e = biasedExp - 1075; }

    return { m: x < 0 ? -m : m, e };
}


/**
 * Returns the exact value of the given decimal string (e.g. `'-1.5e-10'`)
 * as `m * 10**e` with `m` a (signed) `BigInt`.
 *
 * * used in tests
 */
function decimalToExact(str: string): { m: bigint, e: number } {
    const [, sign, int, frac = '', exp = '0'] =
        str.match(/^([+-]?)(\d*)(?:\.(\d*))?(?:[eE]([+-]?\d+))?$/)!;

    const m = BigInt((int + frac) || '0');

    return { m: sign === '-' ? -m : m, e: Number(exp) - frac.length };
}


/**
 * Returns the exact sum of the given decimal string and doubles, i.e.
 * `str + xs[0] + xs[1] + ...`, as a decimal string (that can be parsed with
 * `Number` to get the correctly rounded double).
 *
 * * used in tests
 */
function exactSumStr(str: string, ...xs: number[]): string {
    const d = decimalToExact(str);
    const ds = xs.map(doubleToExact);

    // represent everything as an integer times 10**-P
    const P = Math.max(0, -d.e, ...ds.map(({ e }) => -e));

    let sum = d.m * 10n**BigInt(d.e + P);
    for (const { m, e } of ds) {
        sum += e >= 0
            ? m * 2n**BigInt(e) * 10n**BigInt(P)
            : m * 5n**BigInt(-e) * 10n**BigInt(P + e);
    }

    return `${sum}e-${P}`;
}


export { doubleToExact, decimalToExact, exactSumStr }
