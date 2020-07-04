
/**
 * Returns the sum and exact error of adding two floating point numbers. 
 * Uses an EFT (error-free transformation), i.e. a+b === x+y exactly.
 * The returned sum is a non-overlapping expansion (smallest value first!).
 * 
 * Precondition: abs(a) >= abs(b) - A fast test that can be used is 
 * (a > b) === (a > -b)
 * 
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function fastTwoSum(a: number, b: number) {
    let x = a + b;

    return [b - (x - a), x];
}
// inlined
//let R = a + b; let r = b - (R - a); return [r, R];


export { fastTwoSum }
