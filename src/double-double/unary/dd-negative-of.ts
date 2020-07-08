
/**
 * Returns the negative of the given double-double precision floating point 
 * number.
 * * the result is exact
 * @param f a double-double precision floating point number
 */
function ddNegativeOf(f: number[]): number[] {
    return [-f[0],-f[1]];
}


export { ddNegativeOf }
