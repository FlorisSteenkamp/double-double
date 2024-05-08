/**
 * Returns the number of leading zeros (plus 1) after the decimal point or `0`
 * if the number is >= 1 or equal to zero.
 *
 * * the number string must be positive
 * * the number string must not start with a `+` sign
 * * the number string must must be a simple decimal expansion, e.g. no `e-8`
 * at the end
 *
 * Examples:
 * `getNumLeadingZeros(0.1)    // => 0`
 * `getNumLeadingZeros(0.001)  // => 2`
 * `getNumLeadingZeros(3.001)  // => 0`
 * `getNumLeadingZeros(13)     // => 0`
 * `getNumLeadingZeros(0)      // => 0
 *
 * @param str
 *
 * @internal
 */
declare function getNumLeadingZerosAfterPoint(str: string): number;
export { getNumLeadingZerosAfterPoint };
