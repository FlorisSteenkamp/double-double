import { describe, it, expect } from '@jest/globals';
import { squares } from 'squares-rng';
import { ddToStr } from '../../src/dd-to-str/dd-to-str.js';
import { strToDd } from '../../src/str-to-dd/str-to-dd.js';
import { getDiffInUlpsDd } from '../../src/str-to-dd/get-diff-in-ulps-dd.js';
import { extractExp } from '../../src/str-to-dd/extract-exp.js';
import { multStrByPowOf10 } from '../../src/str-to-dd/mult-str-by-pow-of-10.js';

const { abs } = Math;


describe('ddToStr', function() {
	it('should correctly convert PI to a string', 
	function() {
        const PI = [1.2246467991473532e-16, 3.141592653589793];  // correctly rounded
        expect(ddToStr(PI).slice(0,34)).toEqual('3.14159265358979323846264338327950');
    });

    const ddStrs = [
        '0',
        '1',
        '1.0',
        '-0',
        '-1',
        '-1.0',
        '2.12122321e-31',
        ...makeRandomStrs(50)
    ];

	it.each(ddStrs)('should correctly convert a double-double to a string and back (%s)', 
	function(ddStr) {
        checkRoundTrip(ddStr);
    });

	it('should handle the full double range and non-finite values',
	function() {
        const dds = [
            [0, 1e-300],
            [0, 5e-324],
            [0, -2.2250738585072014e-308],
            [1e-317, 1e-300],
            [0, Number.MAX_VALUE],
            [-1.4e-277, -1e-260]
        ];
        for (const dd of dds) {
            // ddToStr gives enough digits for the conversion to round trip
            expect({ dd, roundTrip: strToDd(ddToStr(dd)) }).toEqual({ dd, roundTrip: dd });
        }

        // random double-doubles over (most of) the double range
        let rng = 0;
        for (let i=0; i<500; i++) {
            const e = squares(rng++)%2000 - 1000;
            const h = (1 + squares(rng++)/2**32) * 2**e;
            const l = h * (squares(rng++)/2**32 - 0.5) * 2**-53;
            const hh = h + l;  // normalize
            const dd = [l - (hh - h), hh];
            expect({ dd, roundTrip: strToDd(ddToStr(dd)) }).toEqual({ dd, roundTrip: dd });
        }

        expect(ddToStr([0,NaN])).toEqual('NaN');
        expect(ddToStr([0,Infinity])).toEqual('Infinity');
        expect(ddToStr([0,-Infinity])).toEqual('-Infinity');
        expect(ddToStr([0.5,0])).toEqual('0.5');
        expect(ddToStr([0,-0])).toEqual('0');
    });
});


function makeRandomStrs(count: number) {
    const strs: string[] = [];
    let rng = 0;

    for (let i=0; i<count; i++) {
        const exp = squares(rng++)%100 - 50;
        const l = squares(rng++)%50 + 1;

        let s: string = '';
        for (let j=0; j<l; j++) {
            const n = squares(rng++)%10;
            
            s += n.toString();
        }

        const zeros = new Array(abs(exp)).join('0');

        const negStr = squares(rng++)%2 === 0 ? '' : '-1';

        if (exp === 0) {
            strs.push(negStr + s);
        } else if (exp > 0) {
            strs.push(negStr + s + zeros);
        } else {
            strs.push(negStr + '0.' + zeros + s);
        }
    }

    return strs;
}


/**
 * Checks that converting the given decimal string to a double-double and back
 * is accurate.
 */
function checkRoundTrip(str: string) {
    const dd = strToDd(str);
    const ddStr = ddToStr(dd);

    const { s: s_, exp: exp_ } = extractExp(str);
    str = multStrByPowOf10(s_,exp_);
    const diffInUlpsDd = abs(getDiffInUlpsDd(str,ddStr));

    // the dd (quarter) ulp error
    expect(diffInUlpsDd).toBeLessThanOrEqual(1);
}
