/**
 * Returns the relevant parts of the given IEEE-754 double. The returned
 * exponent has been normalized (i.e. 1023 has been subtracted) and the
 * significand has the hidden bit added if appropriate.
 *
 * * see https://github.com/bartaz/ieee754-visualization
 *
 * * the `significand` is returned as an array of 7 bytes, where the first byte
 *   is the 4 most significant bits of the significand (with the hidden bit added
 *   if appropriate) and the remaining 6 bytes are the remaining bits of the
 *   significand.
 */
declare function parseDouble(x: number): {
    sign: number;
    exponent: number;
    significand: number[];
};
/**
 * Returns the relevant parts of the given IEEE-754 double.
 * See https://github.com/bartaz/ieee754-visualization.
 * This is a slower version of parseDouble that gives binary string
 * representations of the components.
 */
declare function parseDoubleDetailed(x: number): {
    full: string;
    sign: string;
    exponent: string;
    hidden: string;
    significand: string;
};
export { parseDouble, parseDoubleDetailed };
