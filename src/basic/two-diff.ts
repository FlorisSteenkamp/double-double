
/**
 * Returns the exact result of subtracting b from a (as a floating point 
 * expansion).
 * @param a 
 * @param b 
 */
function twoDiff(a: number, b: number) {
    const x = a - b;
    const bvirt = a - x;
    const y = (a - (x + bvirt)) + (bvirt - b);

    return [y, x];
}


export { twoDiff }
