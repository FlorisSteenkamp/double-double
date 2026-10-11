import { describe, it, expect } from '@jest/globals';
import { doubleSqrt } from '../../src/double-mixed-double-double/double-sqrt.js';


describe('ddSqrt', function() {
	it('should correctly take the square root of some double precision values and return the result accurately as a double-double', 
	function() {
        // Some doubles
        let a = 11_638_607.274152497;
        let b = -2_797_357.2918064594;
        let d = 1;
        let e = 1.112536929253601e-308;
        let f = 0;

        expect(doubleSqrt(a)).toEqual([-1.0823768427889293e-13, 3411.5403081529753]);
        expect(doubleSqrt(b)).toEqual([NaN, NaN]);
        expect(doubleSqrt(d)).toEqual([0, 1]);
        expect(doubleSqrt(e)).toEqual([0, 1.0547686614863001e-154]);
        expect(doubleSqrt(f)).toEqual([0, 0]);
    });
});
