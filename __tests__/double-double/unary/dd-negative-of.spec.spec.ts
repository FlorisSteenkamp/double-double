import { describe, it, expect } from '@jest/globals';
import { ddNegativeOf } from '../../../src/double-double/unary/dd-negative-of.js';


describe('ddNegativeOf', function() {
	it('should correctly return the negative of some double-double precision values',
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [8.661162134715461e-10, 9_722_431.969870245];
        let c = [4.511949494578893e-11, -2_797_357.2918064594];

        expect(ddNegativeOf(a)).toEqual([4.357806199228875e-10, -11638607.274152497]);
        expect(ddNegativeOf(b)).toEqual([-8.661162134715461e-10, -9722431.969870245]);
        expect(ddNegativeOf(c)).toEqual([-4.511949494578893e-11, 2797357.2918064594]);
    });
});
