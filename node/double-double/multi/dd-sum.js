import { ddAddDd } from "../binary/dd-add-dd.js";
/**
 * Returns the result of summing an array of double-double-precision floating
 * point numbers naively (i.e. not using pairwise addition to reduce error a bit).
 *
 * * there is no useful *relative* error bound (due to possible cancellation);
 * an absolute error bound is given by: ϵ(|s_2| + |s_3| + ... + |s_n|),
 * where s_i is the i-th (computed) partial sum and
 * ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON (the error bound of a single
 * addition), neglecting terms of order ϵ^2
 * * returns `[0,0]` (i.e. zero) if the given array is empty
 */
function ddSum(qs) {
    if (qs.length === 0) {
        return [0, 0];
    }
    let q = qs[0];
    for (let i = 1; i < qs.length; i++) {
        q = ddAddDd(q, qs[i]);
    }
    return q;
}
export { ddSum };
//# sourceMappingURL=dd-sum.js.map