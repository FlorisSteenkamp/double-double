
/**
 * Returns a string having the given number of zeros.
 * 
 * @internal
 */
function getZerosStr(n: number) {
    return new Array(n + 1).join('0');
}


export { getZerosStr }
