
/**
 * Shared view used to read the bits of a double without allocating.
 *
 * @internal
 */
const dv = new DataView(new ArrayBuffer(8));


/**
 * Returns the lowest set bit of the given number's significand (where the lsb
 * is bit 0 and the msb is bit 52). If no bit is set (input === 0 or +-inf or
 * NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function getLowestSetBit(a: number) {
    if (a === 0 || !Number.isFinite(a)) {
        // There is no lowest set bit
        return NaN;
    }

    dv.setFloat64(0, a);

    // the low 32 bits of the significand
    const lo = dv.getUint32(4);
    if (lo !== 0) {
        return 31 - Math.clz32(lo & -lo);
    }

    // the high 20 bits of the significand with the hidden bit added (in case
    // `a` is not subnormal); note: this cannot be 0 since `a !== 0`
    const hi = dv.getUint32(0);
    const h = (hi & 0xf_ffff) | ((hi & 0x7ff0_0000) === 0 ? 0 : 0x10_0000);

    return 32 + 31 - Math.clz32(h & -h);
}


/**
 * Returns the highest set bit of the given double. If no bit is set (input
 * === 0 or +/-inf or NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function getHighestSetBit(a: number): number {
    if (a === 0 || !Number.isFinite(a)) {
        // There is no highest set bit
        return NaN;
    }

    dv.setFloat64(0, a);

    const hi = dv.getUint32(0);

    // the hidden bit is set if `a` is not subnormal
    if ((hi & 0x7ff0_0000) !== 0) { return 52; }

    // subnormal
    const h = hi & 0xf_ffff;
    if (h !== 0) {
        return 32 + 31 - Math.clz32(h);
    }

    return 31 - Math.clz32(dv.getUint32(4));
}


export { getLowestSetBit, getHighestSetBit }
