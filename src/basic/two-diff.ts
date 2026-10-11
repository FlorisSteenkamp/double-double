
/**
 * Returns the exact result of subtracting b from a.
 * 
 * * the resulting array is the reverse of the standard twoDiff in the literature.
 *
 * @param a minuend - a double precision floating point number
 * @param b subtrahend - a double precision floating point number
 */
function twoDiff(a: number, b: number) {
    const x = a - b;
    const bvirt = a - x;
    const y = (a - (x + bvirt)) + (bvirt - b);

    return [y, x];
}


export { twoDiff }
