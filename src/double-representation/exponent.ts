
/**
 * Shared view used to read the bits of a double without allocating.
 *
 * @internal
 */
const dv = new DataView(new ArrayBuffer(8));


/**
 * Returns the normalized exponent of the given number.
 * @param a A double
 */
function exponent(a: number) {
    dv.setFloat64(0, a);

    // the 11 exponent bits follow the sign bit
    const e = (dv.getUint16(0) >>> 4) & 0x7ff;

    // Subnormals (and 0) use a biased exponent of 1 (not 0!)
    return e === 0 ? -1022 : e - 1023;
}


export { exponent }
