
/**
 * Returns the absolute value of the given double-double precision floating 
 * point number.
 * @param f a double-double precision floating point number
 */
function ddAbs(f: number[]) {
    let [q,Q] = f;
    
    return (Q < 0) ? [-q,-Q] : f;
}


export { ddAbs }
