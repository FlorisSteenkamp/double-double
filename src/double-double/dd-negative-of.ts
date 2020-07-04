
/**
 * Returns the negative of the given double-double precision floating point 
 * number.
 * * the result is exact
 * @param q low order double
 * @param Q high order double
 */
function ddNegativeOf([q,Q]: number[]): number[] {
    return [-q,-Q];
}


export { ddNegativeOf }
