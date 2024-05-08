/**
 * Returns the number of leading zeros before the decimal point.
 *
 * @param str
 *
 * @internal
 */
function getNumLeadingZerosBeforePoint(str) {
    if (str.startsWith('0.')) {
        return 0;
    }
    if (Number(str) === 0) {
        return 0;
    }
    const idx = str.indexOf('.');
    return idx === -1 ? str.length : idx;
}
export { getNumLeadingZerosBeforePoint };
//# sourceMappingURL=get-num-leading-zeros-before-point.js.map