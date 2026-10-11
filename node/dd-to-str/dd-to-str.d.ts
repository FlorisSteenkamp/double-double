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
declare function ddToStr(dd: number[]): string;
export { ddToStr };
