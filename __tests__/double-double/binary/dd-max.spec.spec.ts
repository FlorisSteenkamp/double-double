import { describe, it, expect } from '@jest/globals';
import { ddMax } from '../../../src/double-double/binary/dd-max.js';


describe('ddMax', function() {
	it('should correctly find the maximum value of some double-double precision values', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [8.661162134715461e-10, 9_722_431.969870245];
        let c = [4.511949494578893e-11, -2_797_357.2918064594];

        expect(ddMax(a,a)).toEqual(a);
        expect(ddMax(a,b)).toEqual(a);
        expect(ddMax(a,c)).toEqual(a);

        expect(ddMax(b,a)).toEqual(a);
        expect(ddMax(b,b)).toEqual(b);
        expect(ddMax(b,c)).toEqual(b);

        expect(ddMax(c,a)).toEqual(a);
        expect(ddMax(c,b)).toEqual(b);
        expect(ddMax(c,c)).toEqual(c);
    });
});
