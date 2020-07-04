"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fastTwoDiff = void 0;
/**
 * Returns the difference and exact error of subtracting two floating point
 * numbers.
 * Uses an EFT (error-free transformation), i.e. a-b === x+y exactly.
 * The returned result is a non-overlapping expansion (smallest value first!).
 *
 * Precondition: abs(a) >= abs(b) - A fast test that can be used is
 * (a > b) === (a > -b)
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function fastTwoDiff(a, b) {
    let x = a - b;
    let y = (a - x) - b;
    return [y, x];
}
exports.fastTwoDiff = fastTwoDiff;
//# sourceMappingURL=fast-two-diff.js.map