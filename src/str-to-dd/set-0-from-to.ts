

/**
 * 
 * @param str 
 * @param from 
 * @param to 
 */
function set0FromTo(str: string, from: number, to?: number) {
    const pointAt = str.indexOf('.');
    let i = from + (pointAt !== -1 && pointAt < from ? 1 : 0);
    let j = i;

    to = to || str.length;
    
    while (i < to) {
        if (str[j] === '.') { j++; continue; }
        str = set0At(str, j);
        i++; j++;
    }

    return str;
}


function set0At(str: string, idx: number) {
    if (idx > str.length - 1) { return str };
    return str.substring(0,idx) + '0' + str.substring(idx + 1);
}


export { set0FromTo }
