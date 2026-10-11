import { describe, it, expect } from '@jest/globals';
import { squares } from 'squares-rng';
import { strToDd } from '../../src/str-to-dd/str-to-dd.js';
import { PIDd, eDd, ln2Dd, eulerDd } from '../../src/constants.js';
import { exactSumStr } from '../helpers/exact.js';


/**
 * Returns the correctly rounded double-double of the given decimal string,
 * i.e. the high part is the double nearest to the value and the low part the
 * double nearest to the remainder (using JavaScript's correctly rounded
 * `Number` parsing as the oracle).
 */
function correctlyRounded(str: string) {
    const hi = Number(str);
    if (!Number.isFinite(hi)) { return [0,hi]; }
    if (hi === 0) { return [0,0]; }  // avoid -0

    const lo = Number(exactSumStr(str, -hi));

    return [lo === 0 ? 0 : lo, hi];  // avoid -0
}


describe('strToDd', function() {
	it('should return correctly rounded results for some known values',
	function() {
        const PI = '3.14159265358979323846264338327950288419716939937510582097494459';
        expect(strToDd(PI)).toEqual([1.2246467991473532e-16, 3.141592653589793]);
        expect(strToDd('6.0221408e+23')).toEqual([-2097152, 6.0221408e+23]);
        expect(strToDd('0.1')).toEqual([-5.551115123125783e-18, 0.1]);
        expect(strToDd('1')).toEqual([0,1]);
        expect(strToDd('0')).toEqual([0,0]);
        expect(strToDd('-0.0e10')).toEqual([0,0]);
        expect(strToDd('-2.5')).toEqual([0,-2.5]);
    });

	it('should accept various number formats',
	function() {
        expect(strToDd('1E5')).toEqual([0,100000]);
        expect(strToDd('1e+5')).toEqual([0,100000]);
        expect(strToDd('+1.5')).toEqual([0,1.5]);
        expect(strToDd('.5')).toEqual([0,0.5]);
        expect(strToDd('5.')).toEqual([0,5]);
        expect(strToDd('-.25E-1')).toEqual(correctlyRounded('-0.025'));
        expect(strToDd('000123.4500')).toEqual(correctlyRounded('123.45'));
        expect(strToDd(' 7 ')).toEqual([0,7]);
        expect(strToDd('Infinity')).toEqual([0,Infinity]);
        expect(strToDd('abc')[1]).toBeNaN();
    });

	it('should work over the full double range (including subnormals and overflow)',
	function() {
        const strs = [
            '1.7976931348623157e308',   // max double
            '1.797693134862315799999e308',
            '2.2250738585072014e-308',  // min normal double
            '2.2250738585072011e-308',  // subnormal
            '5e-324',                   // min subnormal
            '2.4703282292062328e-324',  // just above half the min subnormal
            '1e-300',
            '1e300',
            '1e299',
            '-1e-310'
        ];
        for (const str of strs) {
            expect({ str, dd: strToDd(str) }).toEqual({ str, dd: correctlyRounded(str) });
        }

        expect(strToDd('1e309')).toEqual([0,Infinity]);
        expect(strToDd('-1.8e308')).toEqual([0,-Infinity]);
        expect(strToDd('1e99999999999')).toEqual([0,Infinity]);
        expect(strToDd('1e-400')).toEqual([0,0]);
        expect(strToDd('2.4703282292062327e-324')).toEqual([0,0]);
        expect(strToDd('1e-99999999999')).toEqual([0,0]);
    });

	it('should return correctly rounded results for random strings',
	function() {
        let rng = 0;
        for (let i=0; i<2000; i++) {
            const len = squares(rng++)%60 + 1;
            let digits = '';
            for (let j=0; j<len; j++) {
                digits += (squares(rng++)%10).toString();
            }
            const pointAt = squares(rng++)%(len + 1);
            const exp = squares(rng++)%660 - 340;
            const sign = squares(rng++)%2 === 0 ? '' : '-';

            const str = `${sign}${digits.slice(0,pointAt)}.${digits.slice(pointAt)}e${exp}`;

            expect({ str, dd: strToDd(str) }).toEqual({ str, dd: correctlyRounded(str) });
        }
    });

	it('should have correctly rounded constants',
	function() {
        expect(PIDd).toEqual(strToDd('3.14159265358979323846264338327950288419716939937510582097494459'));
        expect(eDd).toEqual(strToDd('2.71828182845904523536028747135266249775724709369995957496696762'));
        expect(ln2Dd).toEqual(strToDd('0.69314718055994530941723212145817656807550013436025525412068000'));
        expect(eulerDd).toEqual(strToDd('0.57721566490153286060651209008240243104215933593992359880576723'));
    });
});
