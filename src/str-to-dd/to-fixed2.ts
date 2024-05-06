
const { min } = Math;


// flawed
function toFixed2(
        n: number,
        fractionDigits: number): string {

    const maxL = min(fractionDigits,100);
    const s = n.toFixed(maxL);

    // If equal to '0.0000000000000...xxxx'
    if (s.length === maxL + 2) {
        const ss = n.toString();//?

        const idx = ss.indexOf('e');

        const _nStr = ss.slice(0, idx);
        const nStr = _nStr.split('').filter(s => s !== '.').join('');//?

        const exp = Number(ss.slice(idx + 2));

        const zeros = new Array(exp - nStr.length).join('0');

        const r = '0.' + zeros + nStr;

        if (r.length < fractionDigits + 2) {
            const zeros2 = new Array(fractionDigits - r.length + 2).join('0');

            return r + zeros2;
        }

        return r;
    }

    const idx = s.indexOf('e');

    if (idx === -1) { return s; }

    const expStr = s.slice(idx + 2);

    const _nStr = s.slice(0, idx);
    const nStr = _nStr.split('').filter(s => s !== '.').join('');

    const zeros = new Array(Number(expStr) - nStr.length + 2).join('0');

    const r = nStr + zeros;

    if (r.length < fractionDigits + 2) {
        const zeros2 = new Array(fractionDigits - r.length).join('0');

        return r + '.0' + zeros2;
    }

    return r;
}


export { toFixed2 }


// Quokka tests
// toFixed2(12345678910111213141516171819, 60);  //?
// const n1 = 0.00000000000000000000000000000000000000000000000000012345678910111213141516171819;
// toFixed2(n1, 42);  //?
// toFixed2(0.000000000000000000000012345678910111213141516171819, 160);  //?

