import { expect } from 'chai';
import { describe } from 'mocha';
import { squares } from 'squares-rng';
import { ddToStr, strToDd } from '../../src/index.js';
import { getDiffInUlpsDd } from '../../src/str-to-dd/get-diff-in-ulps-dd.js';
import { getDiffInUlps } from '../../src/dd-to-str/get-diff-in-ulps.js';
import { extractExp } from '../../src/str-to-dd/extract-exp.js';
import { multStrByPowOf10 } from '../../src/str-to-dd/mult-str-by-pow-of-10.js';

const { abs } = Math;


describe('ddToStr', function() {
	it('should correctly convert a double-double to a string', 
	function() {
        // Some double-doubles
        const PI = [1.2246467991473532e-16, 3.141592653589793];  // correctly rounded
        const PIStr = ddToStr(PI);
        expect(
            PIStr.slice(0,34),
            `PI not converted correctly, got ${PIStr}`
        ).to.eql('3.14159265358979323846264338327950');

        let ddStrs = [
            '0',
            '1',
            '1.0',
            '-0',
            '-1',
            '-1.0',
            '2.12122321e-31'
        ];

        const randomStrs = makeRandomStrs(50);

        ddStrs = [...ddStrs, ...randomStrs];

        for (const ddStr of ddStrs) {
            test(ddStr);
        }
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


function test(str: string) {
    const dd = strToDd(str);
    const ddStr = ddToStr(dd);

    const { s: s_, exp: exp_ } = extractExp(str);
    str = multStrByPowOf10(s_,exp_);
    const diffInUlpsDd = abs(getDiffInUlpsDd(str,ddStr));

    expect(
        diffInUlpsDd,
        `Failed to convert ${str}. Expected a dd (quarter) ulp error of less than or equal to 1 but found ${diffInUlpsDd}`
    ).to.be.lessThanOrEqual(1);

    const d = Number(str);

    const diffInUlps = abs(getDiffInUlps(d,dd[0] + dd[1]));

    expect(
        diffInUlps,
        `Failed to convert ${str}. Expected an ulp error of less than or equal to 1 but found ${diffInUlpsDd}`
    ).to.be.lessThanOrEqual(1);
}
