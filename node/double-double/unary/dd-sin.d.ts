/**
 * Returns the sine of the given double-double precision floating point number.
 *
 * * the polynomial approximation used has a maximum relative error of
 * 1.64e-39 (see the link in the source file); additional round-off occurs
 * during its evaluation
 * * the argument reduction (for |θ| > π/2) uses `PIDd` (π as a double-double)
 * and is therefore not exact, i.e. the absolute error grows with |θ|
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
