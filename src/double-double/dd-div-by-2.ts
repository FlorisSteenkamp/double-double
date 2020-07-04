
/**
 * Returns the result of dividing the given double-double by 2.
 * @param q the double-double - low part
 * @param Q the double-double - high part
 */
function ddDivBy2([q,Q]: number[]) {
    return [q/2,Q/2];
}


export { ddDivBy2 }
