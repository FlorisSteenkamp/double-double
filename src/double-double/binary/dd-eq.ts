
/**
 * Returns `true` if `x1 === x2`, `false` otherwise.
 * 
 * * assumes the double-doubles are normalized (as returned by the functions in
 * this library)
 * 
 * @param x1 a double-double precision floating point number
 * @param x2 a double-double precision floating point number
 */
function ddEq(x1: number[], x2: number[]) {
    return x1[0] === x2[0] && x1[1] === x2[1];
}


export { ddEq }
