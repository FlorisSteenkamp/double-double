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
declare function strToDd(str: string): number[];
export { strToDd };
