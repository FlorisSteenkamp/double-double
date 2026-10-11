import { describe, it, expect } from '@jest/globals';
import { ddSqrt } from '../../../src/double-double/unary/dd-sqrt.js';


describe('ddSqrt', function() {
	it('should correctly take the square root of some double-double precision values', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [4.511949494578893e-11, -2_797_357.2918064594];
        let d = [0, 1];
        let e = [0, 1.112536929253601e-308];
        let f = [0, 0];

        expect(ddSqrt(a)).toEqual([-1.7210628622409775e-13, 3411.5403081529753]);
        expect(ddSqrt(b)).toEqual([NaN, NaN]);
        expect(ddSqrt(d)).toEqual([0, 1]);
        expect(ddSqrt(e)).toEqual([0, 1.0547686614863001e-154]);
        expect(ddSqrt(f)).toEqual([0, 0]);
    });
});
