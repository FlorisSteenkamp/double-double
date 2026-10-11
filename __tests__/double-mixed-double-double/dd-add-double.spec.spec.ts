import { describe, it, expect } from '@jest/globals';
import { ddAddDouble } from '../../src/double-mixed-double-double/dd-add-double.js';


describe('ddAddDouble', function() {
	it('should correctly add some double-double precision values to doubles', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [4.511949494578893e-11, -2_797_357.2918064594];
        // ... and some doubles
        let c = 12_394_082.1234567891011

        expect(ddAddDouble(a,c)).toEqual([-4.357806199228875e-10, 24_032_689.397609286]);
        expect(ddAddDouble(b,c)).toEqual([4.511949494578893e-11, 9596724.83165033]);
    });
});
