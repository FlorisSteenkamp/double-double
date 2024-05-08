import { multStrByPowOf10 } from "../str-to-dd/mult-str-by-pow-of-10.js";

const { floor, max, round, log2, log10, ceil } = Math;


const LOG2_10 = log2(1024)/log10(1024);



/**
 * Converts the given double-double precision value to a string and returns the
 * result.
 * 
 * * there will always be enough decimal digits returned but some could be
 * extraneous.
 * 
 * @param dd 
 */
function ddToStr(
        dd: number[]) {

    let [l,h] = dd;

    let negative = false;
    if (h < 0) {
        h = -h;
        l = -l;
        negative = true;
    }
    
    if (h === 0) {
        return '0';
    }

    const scale2 = max(0,-floor(log2(h)) + 3*53);

    if (scale2 === 0) {
        const llb = BigInt(round(l));
        const hhb = BigInt(round(h));

        const str = (llb + hhb).toString();
        return negative ? '-' + str : str;
    }

    const scale2b = BigInt(scale2);
    const scale10 = ceil(scale2/LOG2_10);
    const scale10b = BigInt(scale10);

    const ll = l*(2**scale2);
    const hh = h*(2**scale2);
    const llb = BigInt(round(ll));
    const hhb = BigInt(round(hh));

    const b = (llb + hhb)*(10n**scale10b);
    const bb = b/(2n**(scale2b));
    
    let bStr = bb.toString();

    let str = multStrByPowOf10(bStr,-scale10);

    str = removeExtraneousZeros(str);

    return negative ? '-' + str : str;
}


function removeExtraneousZeros(str: string) {
    const idx = str.indexOf('.');

    if (idx === -1) {
        return str;
    }

    let i = 0;
    let c = 0;
    while (i < str.length) {
        if (str[str.length - 1 - i] === '0') {
            c++;
        } else {
            break;
        }
        i++;
    }

    if (c > 0) {
        str = str.slice(0, str.length - c);
    }

    if (str.endsWith('.')) {
        str = str.slice(0, str.length - 1);
    }

    return str;
}


export { ddToStr }
