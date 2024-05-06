
function findFirstNonZeroDiffIdx(
        a: string,
        b: string) {

    if (a === b) { return -1 };

    let i = 0;
    let r = 0;
    let foundNonZero = false;
    while (a[i] === b[i]) {
        const special = a[i] === '.' || a[i] === '-';

        if (!special && a[i] !== '0') {
            foundNonZero = true;
        }

        if (foundNonZero && !special) {
            r++
        }

        i++;
    };

    return r;
}


export { findFirstNonZeroDiffIdx }


// Quokka tests

// findFirstNonZeroDiffIdx('123','123'); //?
// findFirstNonZeroDiffIdx('123','1234'); //?
// findFirstNonZeroDiffIdx('1234','123'); //?
// findFirstNonZeroDiffIdx('12345','12335'); //?
// findFirstNonZeroDiffIdx('01234','123'); //?
// findFirstNonZeroDiffIdx('001234','001235'); //?
// findFirstNonZeroDiffIdx('0012.34167','0012.34567'); //?
// findFirstNonZeroDiffIdx('12.34167','12.34567'); //?