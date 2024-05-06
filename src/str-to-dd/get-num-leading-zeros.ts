
/**
 * Returns the number of leading extraneous zeros before the decimal point.
 * 
 * @param str 
 */
function getNumLeadingZeros(str: string) {
    if (Number(str) === 0) { return 0; }
    if (str.startsWith('0.')) { return 0; }

    let numLeadingZeros = 0;
    let i = 0;
    for (; i<str.length; i++) {
        if (str[i] === '0') {
            numLeadingZeros++;
        } else {
            break;
        }
    }

    if (str[i] === '.') { return 0; }

    return numLeadingZeros;
}


export { getNumLeadingZeros }



// Quokka tests

// getNumLeadingZeros('000000000000.001');  //?
// getNumLeadingZeros('0001000000000.001');  //?
// getNumLeadingZeros('000000000000');  //?
// getNumLeadingZeros('0000.00000000');  //?
// getNumLeadingZeros('001000000000000');  //?
// getNumLeadingZeros('1000000000000');  //?