/**
 * Returns the relevant parts of the given IEEE-754 double. The returned
 * exponent has been normalized (i.e. 1023 ha been subtracted) and the
 * significand has the hidden bit added if appropriate.
 * See https://github.com/bartaz/ieee754-visualization
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
