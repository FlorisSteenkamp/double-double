/**
 * Returns the cosine of the given double-double precision floating point number.
 *
 * * calculated as `ddSin(θ + π/2)` - see `ddSin` for accuracy notes; note that
 * the relative error can be large close to the zeros of the cosine
 *
 * @param θ a double-double precision floating point number
 *
 * @example
 * ```
 * import { PIDd } from 'double-double';
 * import { ddDivDouble } from 'double-double';
 *
 * ddCos(ddDivDouble(PIDd,6));  //=> [5.017542110903452e-17, 0.8660254037844386]
 * ```
 */
declare function ddCos(θ: number[]): number[];
export { ddCos };
