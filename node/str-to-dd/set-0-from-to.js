/**
 *
 * @param str
 * @param from
 * @param to
 *
 * @internal
 */
function set0FromTo(str, from, to) {
    // TODO - this function is currently slow since it replaces one zero at a time.
    const pointAt = str.indexOf('.');
    let i = from + (pointAt !== -1 && pointAt < from ? 1 : 0);
    let j = i;
    to = to || str.length;
    while (i < to) {
        if (str[j] === '.') {
            j++;
            continue;
        }
        str = set0At(str, j);
        i++;
        j++;
    }
    return str;
}
/**
 * @internal
 */
function set0At(str, idx) {
    if (idx > str.length - 1) {
        return str;
    }
    ;
    return str.substring(0, idx) + '0' + str.substring(idx + 1);
}
export { set0FromTo };
//# sourceMappingURL=set-0-from-to.js.map