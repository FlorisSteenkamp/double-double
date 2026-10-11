import { describe, it, expect } from '@jest/globals';
import { squares } from 'squares-rng';
import { ddCompare } from '../../../src/double-double/binary/dd-compare.js';
import { ddAddDouble } from '../../../src/double-mixed-double-double/dd-add-double.js';
import { ddAddDd } from '../../../src/double-double/binary/dd-add-dd.js';
import { doubleToExact } from '../../helpers/exact.js';


/** Returns the sign of `x - y` computed exactly. */
function exactSign(x: number[], y: number[]) {
    const vs = [x[0], x[1], -y[0], -y[1]].map(doubleToExact);
    const minE = Math.min(...vs.map(v => v.e));
    const sum = vs.reduce((acc, v) => acc + (v.m << BigInt(v.e - minE)), 0n);

    return sum > 0n ? 1 : sum < 0n ? -1 : 0;
}


describe('ddCompare', function() {
	it('should correctly compare some double-double precision values', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [4.511949494578893e-11, -2_797_357.2918064594];
        let c = [-4.511949494578893e-11, 2_797_357.2918064594];
        let d = [8.661162134715461e-10, 9_722_431.969870245];
        

        expect(ddCompare(a,a)).toEqual(0);
        expect(ddCompare(a,b)).toBeGreaterThan(0);
        expect(ddCompare(a,c)).toBeGreaterThan(0);
        expect(ddCompare(a,d)).toBeGreaterThan(0);

        expect(ddCompare(b,a)).toBeLessThan(0);
        expect(ddCompare(b,b)).toEqual(0);
        expect(ddCompare(b,c)).toBeLessThan(0);
        expect(ddCompare(b,d)).toBeLessThan(0);

        expect(ddCompare(c,a)).toBeLessThan(0);
        expect(ddCompare(c,b)).toBeGreaterThan(0);
        expect(ddCompare(c,c)).toEqual(0);
        expect(ddCompare(c,d)).toBeLessThan(0);

        expect(ddCompare(d,a)).toBeLessThan(0);
        expect(ddCompare(d,b)).toBeGreaterThan(0);
        expect(ddCompare(d,c)).toBeGreaterThan(0);
        expect(ddCompare(d,d)).toEqual(0);
    });

	it('should give the exact sign for normalized double-doubles', 
	function() {
        let rng = 0;
        const rand = () => squares(rng++)/2**32 - 0.5;
        const randDd = () => {
            const h = rand() * 2**(squares(rng++)%200 - 100);
            const l = h * rand() * 2**-53;
            const hh = h + l;
            return [l - (hh - h), hh];
        }

        for (let i=0; i<10_000; i++) {
            const x = randDd();
            // `y` far from, close to (differing in the low part only or in the
            // last bit of the high part) or equal to `x`
            const k = i%4;
            const y = k === 0 ? randDd()
                : k === 1 ? ddAddDouble(x, x[1]*rand()*2**-100)
                : k === 2 ? ddAddDd(x, [0, x[1]*rand()*2**-52])
                : [x[0], x[1]];

            expect({ x, y, sign: Math.sign(ddCompare(x,y)) }).toEqual({ x, y, sign: exactSign(x,y) });
            expect({ x, y, sign: Math.sign(ddCompare(y,x)) }).toEqual({ x, y, sign: exactSign(y,x) });
        }
    });

	it('should handle special values', 
	function() {
        expect(ddCompare([0,0],[-0,-0])).toEqual(0);
        expect(ddCompare([0,Infinity],[0,Infinity])).toEqual(0);
        expect(ddCompare([0,Infinity],[0,1])).toBeGreaterThan(0);
        expect(ddCompare([0,-Infinity],[0,1])).toBeLessThan(0);
        expect(ddCompare([0,Number.MAX_VALUE],[0,-Number.MAX_VALUE])).toBeGreaterThan(0);
        expect(ddCompare([0,5e-324],[0,0])).toBeGreaterThan(0);
        expect(ddCompare([0,NaN],[0,1])).toBeNaN();
        expect(ddCompare([0,1],[0,NaN])).toBeNaN();
    });

	it('should work as a sort comparator', 
	function() {
        const dds = [[1e-17,1], [0,-2], [-1e-17,1], [0,1], [0,0.5]];
        expect(dds.sort(ddCompare)).toEqual([[0,-2], [0,0.5], [-1e-17,1], [0,1], [1e-17,1]]);
    });
});
