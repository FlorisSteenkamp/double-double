
/**
 * Returns the absolute value of the given double-double precision floating 
 * point number.
 * @param f a double-double precision floating point number
 */
function ddAbs(f: number[]) {
    const Q = f[1];
    
    return (Q < 0) ? [-f[0],-Q] : f;
}


export { ddAbs }
