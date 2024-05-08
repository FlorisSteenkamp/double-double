
const { sign } = Math;


/**
 * 
 * @param s1 
 * @param s2 
 * 
 * @internal
 */
function compareIntStrs(s1: string, s2: string) {
    const l1 = s1.length;
    const l2 = s2.length;

    if (l1 > l2) { return 1; }
    if (l1 < l2) { return -1; }

    for (let i=0; i<l1; i++) {
        let v1 = Number(s1[i]);
        let v2 = Number(s2[i]);

        if (v1 !== v2) {
            return sign(v1 - v2);
        }
    }

    return 0;
}


export { compareIntStrs }
