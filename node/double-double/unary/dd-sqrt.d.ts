/**
 * Returns the square root of a double-double as a double-double.
 * * no error bound is returned
 */
declare function ddSqrt([xl, xh]: number[]): number[];
/**
 * Returns the square root of a **double** as a **double-double**
 *
 * Based on Algorithm 11: Truncated “division-free” Newton iteration (31) based
 * algorithm for reciprocal of the square root of an FP expansion. By
 * “division-free” we mean that we do not need a division of FP expansions.
 * * only compact expansions are allowed as input - so call compress before
 * calling this function AND make sure expansion length is correct.
 * * error bound: ??? TODO - it is in the paper
 * @param a a floating point expansion - important: see function description
 */
export { ddSqrt };
