
/**
 * Returns the result of multiplying the given double-double by 4.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultBy4(f: number[]) {
    return [4*f[0],4*f[1]];
}


export { ddMultBy4 }
