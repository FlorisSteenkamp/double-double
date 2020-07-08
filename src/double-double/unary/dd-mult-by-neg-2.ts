
/**
 * Returns the result of multiplying the given double-double by -2.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultByNeg2(f: number[]) {
    return [-2*f[0],-2*f[1]];
}


export { ddMultByNeg2 }
