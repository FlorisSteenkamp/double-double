/**
 * Returns the cosine of x.
 *
 * @param θ a double-double precision floating point number
 *
 * @example
 * ```
 * import { PIDd } from 'double-double';
 * import { ddDivDouble } from 'double-double';
 *
 * ddCos(ddDivDouble(PIDd,6));  //=> [5.017542110902477e-17, 0.8660254037844386]
 * ```
 */
declare function ddCos(θ: number[]): number[];
export { ddCos };
