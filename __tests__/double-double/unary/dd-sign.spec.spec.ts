import { describe, it, expect } from '@jest/globals';
import { ddSign } from '../../../src/double-double/unary/dd-sign.js';


describe('ddSign', function() {
	it('should correctly return the sign of some double-double precision values', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [8.661162134715461e-10, 9_722_431.969870245];
        let c = [4.511949494578893e-11, -2_797_357.2918064594];

        expect(ddSign(a)).toBeGreaterThan(0);
        expect(ddSign(b)).toBeGreaterThan(0);
        expect(ddSign(c)).toBeLessThan(0);
    });
});
