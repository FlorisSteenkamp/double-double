import { describe, it, expect } from '@jest/globals';
import { ddAbs } from '../../../src/double-double/unary/dd-abs.js';
import { twoSum } from '../../../src/basic/two-sum.js';


describe('ddAbs', function() {
	it('should correctly calculate the absolute value of some double-double precision values', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [8.661162134715461e-10, 9_722_431.969870245];
        let c = [4.511949494578893e-11, -2_797_357.2918064594];

        expect(ddAbs(a)).toEqual([-4.357806199228875e-10, 11638607.274152497]);
        expect(ddAbs(b)).toEqual([8.661162134715461e-10, 9722431.969870245]);
        expect(ddAbs(c)).toEqual([-4.511949494578893e-11, 2797357.2918064594]);
    });
});
