
/**
 * * percondition: `aStr` > `bStr` as numbers when subtracting so there can
 * never be a negative value.
 *
 * @param aStr 
 * @param bStr 
 * @param addElseSub 
 * 
 * @internal
 */
function addOrSubPositiveIntegerStrs(
        aStr: string,
        bStr: string,
        addElseSub: boolean) {

    aStr = aStr.startsWith('-') ? aStr.slice(1) : aStr;
    bStr = bStr.startsWith('-') ? bStr.slice(1) : bStr;

    while (bStr.length < aStr.length) {
        bStr = '0' + bStr;
    }
    while (aStr.length < bStr.length) {
        aStr = '0' + aStr;
    }

    const len = aStr.length;
    let carry = 0;
    let str = '';

    for (let i=0; i<len; i++) {
        const idx = len - 1 - i;

        const a1 = Number(aStr[idx]);//?
        const b1 = Number(bStr[idx]);//?
        
        let v: number;
        if (addElseSub) {
            const sum = a1 + b1 + carry;
            v = sum%10;
            carry = sum > 9 ? 1 : 0;
        } else {
            const diff = a1 - b1 - carry;//?
            v = diff < 0 ? diff + 10 : diff;//?
            carry = diff < 0 ? 1 : 0;//?
        }

        str += v.toString();
    }

    const strReversed = str.split('').reverse().join('');

    return strReversed;
}


export { addOrSubPositiveIntegerStrs }
