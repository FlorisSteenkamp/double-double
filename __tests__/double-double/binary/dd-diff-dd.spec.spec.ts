import { describe, it, expect } from '@jest/globals';
import { ddDiffDd } from '../../../src/double-double/binary/dd-diff-dd.js';


describe('ddDiffDd', function() {
	it('should correctly minus some double-double precision values', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11638607.274152497];
        let b = [-4.511949494578893e-11, 2797357.2918064594];

        expect(ddDiffDd(a,b)).toEqual([-3.906611249770986e-10, 8841249.982346037]);
    });
});
