/**
 * Return the significand of the given double with the hidden bit added (in case
 * a is not subnormal or 0, etc.)
 *
 * @param a a double precision floating point number
 */
declare function significand(a: number): number[];
export { significand };
