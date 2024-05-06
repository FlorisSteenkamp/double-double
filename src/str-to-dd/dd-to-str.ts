import { add1Ulp } from "./add-1-ulp";
import { d } from "./num-significant-digits";


const { abs, round, log2, log10, ceil } = Math;


// Doesn't work for really small numbers (due to `toFixed`)
function ddToStr2(dd: number[]) {
    const [_l,_h] = dd;//?

    const h = abs(_h);
    const l = abs(_l);
    let a = h.toFixed(3*d);
    let b = l.toFixed(3*d);

    while (b.length < a.length) {
        b = '0' + b;
    }

    const add = _h*_l >= 0;

    const len = a.length;
    let carry = 0;
    let str = '';

    for (let i=0; i<len; i++) {
        const idx = len - 1 - i;

        if (a[idx] === '.') {
            str += '.';
            continue;
        }

        const a1 = Number(a[idx]);
        const b1 = Number(b[idx]);
        
        let v: number;
        if (add) {
            const sum = a1 + b1 + carry;
            v = sum%10;
            carry = sum > 9 ? 1 : 0;
        } else {
            const diff = a1 - b1 - carry;
            v = diff < 0 ? diff + 10 : diff;
            carry = diff < 0 ? 1 : 0;
        }

        str += v.toString();
    }

    const strReversed = str.split('').reverse().join('');

    return (_h < 0 ? '-' : '') + strReversed;
}


function ddToStr(
        dd: number[]) {

    const [l,h] = dd;
    
    if (l === 0 && h === 0) {
        return '0';
    }

    let p = l === 0 ? h : l;
    const scale2 = -round(log2(p)) + 53;//?
    const scale10 = BigInt(-ceil(log10(p)) + 17);//?

    const ll = l*(2**scale2);//?
    const hh = h*(2**scale2);//?

    const b = (BigInt(ll) + BigInt(hh))*(10n**scale10);//?
    const bb = b/(2n**(BigInt(scale2)));//?
    
    const bStr = bb.toString();//?

    let str = bStr[0] + '.' + bStr.slice(1);//?

    // Lengthen string to `3*d` significant figures
    if (str.length < 3*d + 1) {
        const zeros = new Array(3*d + 2 - str.length).join('0');
        str += zeros;
    }

    str.length;//?

    return str;
}


ddToStr2([1.2246467991473532e-16, 3.141592653589793]);//?
ddToStr ([1.2246467991473532e-16, 3.141592653589793]);//?


export { ddToStr }


// Quokka tests

// 3.141592653589793238462643383279502884197169399375105820974944

// ddToStr([1.2246467991473532e-16, 3.141592653589793]);  //?
// ddToStr([2.679593556293667e-54, 5.772156649015328e-38]);//?

