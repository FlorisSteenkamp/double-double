import { describe, it, expect } from '@jest/globals';
import { ddMin } from '../../../src/double-double/binary/dd-min.js';


describe('ddMin', function() {
	it('should correctly find the minimum value of some double-double precision values', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [8.661162134715461e-10, 9_722_431.969870245];
        let c = [4.511949494578893e-11, -2_797_357.2918064594];

        expect(ddMin(a,a)).toEqual(a);
        expect(ddMin(a,b)).toEqual(b);
        expect(ddMin(a,c)).toEqual(c);

        expect(ddMin(b,a)).toEqual(b);
        expect(ddMin(b,b)).toEqual(b);
        expect(ddMin(b,c)).toEqual(c);

        expect(ddMin(c,a)).toEqual(c);
        expect(ddMin(c,b)).toEqual(c);
        expect(ddMin(c,c)).toEqual(c);
    });
});
