/** @internal */
const f = 134217729; // 2**27 + 1;
// Taken from https://github.com/munrocket/double.js/blob/master/src/double.ts
// Unfortunately no error bound given
/**
 * Returns the square root of a double as a double-double.
 * * no error bound is returned
 */
// TODO - calculate an error bound and add to function description
function doubleSqrt(x) {
    if (x === 0) {
        return [0, 0];
    }
    const s = Math.sqrt(x);
    //const [tl,th] = twoSquare(s);
    const th = s * s;
    const c = f * s;
    const ah = c - (c - s);
    const al = s - ah;
    const tl = (al * al) - ((th - (ah * ah)) - 2 * (ah * al));
    const e = (x - th - tl) * 0.5 / s;
    x = s + e;
    const xl = e - (x - s);
    return [xl, x];
}
export { doubleSqrt };
//# sourceMappingURL=double-sqrt.js.map