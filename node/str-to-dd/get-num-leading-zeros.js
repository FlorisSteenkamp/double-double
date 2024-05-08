/**
 * Returns the number of leading extraneous zeros before the decimal point.
 *
 * @param str
 *
 * @internal
 */
function getNumLeadingZeros(str) {
    if (Number(str) === 0) {
        return 0;
    }
    if (str.startsWith('0.')) {
        return 0;
    }
    let numLeadingZeros = 0;
    let i = 0;
    for (; i < str.length; i++) {
        if (str[i] === '0') {
            numLeadingZeros++;
        }
        else {
            break;
        }
    }
    if (str[i] === '.') {
        return 0;
    }
    return numLeadingZeros;
}
export { getNumLeadingZeros };
//# sourceMappingURL=get-num-leading-zeros.js.map