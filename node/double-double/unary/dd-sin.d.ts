/**
 * Returns the sine of x.
 *
 * @param θ a double-double precision floating point number
 *
 * @example
 * ```
 * import { PIDd } from 'double-double';
 * import { ddDivDouble } from 'double-double';
 *
 * ddSin(ddDivDouble(PIDd,6));  //=> [0,0.5]
 * ```
 */
declare function ddSin(θ: number[]): number[];
export { ddSin };
