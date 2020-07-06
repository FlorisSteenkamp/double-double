
/**
 * Returns the result of multiplying the given double-double by 2.
 * * The result is exact
 * @param q a double-double - low order double
 * @param Q a double-double - high order double
 */
function ddMultBy2([q,Q]: number[]) {
    return [2*q,2*Q];
}


export { ddMultBy2 }
