
/**
 * Returns the result of multiplying the given double-double by 4.
 * * The result is exact
 * @param q a double-double - low order double
 * @param Q a double-double - high order double
 */
function ddMultBy4([q,Q]: number[]) {
    return [4*q,4*Q];
}


export { ddMultBy4 }
