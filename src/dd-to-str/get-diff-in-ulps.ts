
const { max, abs } = Math;

const { EPSILON: eps } = Number;

const u = eps/2;


/**
 * @internal
 */
function getDiffInUlps(a: number, b: number) {
    if (a === 0) {
        if (b === 0) { return 0; }
        return Number.POSITIVE_INFINITY;
    } 
    if (b === 0) {
        return Number.POSITIVE_INFINITY;
    }

    const maxN = max(a,b);

    const ulps = abs((a - b)/maxN)/u;

    return ulps;
}


export { getDiffInUlps }
