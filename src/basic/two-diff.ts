
/**
 * Returns the exact result of subtracting b from a (as a floating point 
 * expansion).
 * @param a 
 * @param b 
 */
function twoDiff(a: number, b: number) {
    let x = a - b;
    let bvirt = a - x;
    let y = (a - (x + bvirt)) + (bvirt - b);

    return [y, x];
}


export { twoDiff }
