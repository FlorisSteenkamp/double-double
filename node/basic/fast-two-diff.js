/**
 * Returns the difference and exact error of subtracting two floating point
 * numbers.
 * Uses an EFT (error-free transformation), i.e. `a-b === x+y` exactly.
 * The returned result is a non-overlapping expansion (smallest value first!).
 *
 * * **precondition:** `abs(a) >= abs(b)` - A fast test that can be used is
 * `(a > b) === (a > -b)`
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function fastTwoDiff(a, b) {
    const x = a - b;
    const y = (a - x) - b;
    return [y, x];
}
export { fastTwoDiff };
//# sourceMappingURL=fast-two-diff.js.map