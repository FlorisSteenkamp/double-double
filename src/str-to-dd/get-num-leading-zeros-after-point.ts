
/**
 * Returns the number of leading zeros (plus 1) after the decimal point or `0`
 * if the number is >= 1 or equal to zero.
 * 
 * * the number string must be positive
 * * the number string must not start with a `+` sign
 * * the number string must must be a simple decimal expansion, e.g. no `e-8`
 * at the end
 * 
 * Examples:
 * `getNumLeadingZeros(0.1)    // => 0`
 * `getNumLeadingZeros(0.001)  // => 2`
 * `getNumLeadingZeros(3.001)  // => 0`
 * `getNumLeadingZeros(13)     // => 0`
 * `getNumLeadingZeros(0)      // => 0
 * 
 * @param str 
 */
function getNumLeadingZerosAfterPoint(str: string) {
    if (!str.startsWith('0.')) { return 0; }
    if (Number(str) === 0) { return 0; }

    let numLeadingZeros = 1;
    for (let i=0; i<str.length; i++) {
        if (str[i + 2] === '0') {
            numLeadingZeros++;
        } else {
            break;
        }
    }

    return numLeadingZeros;
}


export { getNumLeadingZerosAfterPoint }


// Quokka tests
// getNumLeadingZerosAfterPoint('0.1');    //?
// getNumLeadingZerosAfterPoint('0.001');  //?
// getNumLeadingZerosAfterPoint('3.001');  //?
// getNumLeadingZerosAfterPoint('1');  //?
// getNumLeadingZerosAfterPoint('0');  //?
// getNumLeadingZerosAfterPoint('0.0');  //?
// getNumLeadingZerosAfterPoint('0.00000000000000000000000000000000000000000000000000000000000000000000000000001');  //?
// getNumLeadingZerosAfterPoint('0.1001');  //?