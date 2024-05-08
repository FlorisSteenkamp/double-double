import { getZerosStr } from './get-zeros-str.js';


/**
 * * string must not contain an `'e'`, e.g. `'1e-10'` is not allowed
 * 
 * @internal
 */
function multStrByPowOf10(
        s: string,
        pow: number) {

    if (pow === 0 || Number(s) === 0) {
        return s;
    }

    const negative = s.indexOf('-') !== -1;
    const negativeStr = negative ? '-' : '';
    if (negative) {
        s = s.slice(1);
    }
    if (s.startsWith('+')) {
        s = s.slice(1);
    }

    const idx = s.indexOf('.');

    if (pow > 0) {
        // shift dot right
        if (idx === -1) {
            const zeros = getZerosStr(pow);
            return negativeStr + s + zeros;
        }

        const [bef,aft] = s.split('.');//?

        if (aft.length < pow) {
            return negativeStr + bef + aft + getZerosStr(pow - aft.length);
        } else {
            const aftP1 = aft.substring(0, pow);//?
            const aftP2 = aft.substring(pow);

            return negativeStr + bef + aftP1 + (aftP2 ? '.' + aftP2 : '');
        }
    }

    // shift dot left

    pow = -pow;
    let bef = '';
    let aft = '';
    if (idx === -1) {
        bef = s;
    } else {
        [bef,aft] = s.split('.');
    }

    if (bef.length === pow) {
        return negativeStr + '0.' + bef + aft;
    } else if (bef.length > pow) {
        const l = bef.length - pow;//?
        const befP1 = bef.substring(0, l);//?
        const befP2 = bef.substring(l);//?

        return negativeStr + befP1 + '.' + befP2 + aft;
    } else {
        const l = pow - bef.length;//?
        const zeros = getZerosStr(l) || '0';
        
        return negativeStr + '0.' + zeros + bef + aft;
    }
}


export { multStrByPowOf10 }
