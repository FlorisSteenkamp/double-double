
/**
 * Returns the number of leading zeros before the decimal point.
 * 
 * @param str 
 */
function getNumLeadingZerosBeforePoint(str: string) {
    if (str.startsWith('0.')) { return 0; }
    if (Number(str) === 0) { return 0; }

    const idx = str.indexOf('.');

    return idx === -1 ? str.length : idx;
}


export { getNumLeadingZerosBeforePoint }


// Quokka tests
getNumLeadingZerosBeforePoint('0.1');      //?
getNumLeadingZerosBeforePoint('0.001');    //?
getNumLeadingZerosBeforePoint('3.001');    //?
getNumLeadingZerosBeforePoint('121');      //?
getNumLeadingZerosBeforePoint('123.456');  //?
getNumLeadingZerosBeforePoint('0.0');      //?
getNumLeadingZerosBeforePoint('0');        //?
