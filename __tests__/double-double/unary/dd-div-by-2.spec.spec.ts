import { describe, it, expect } from '@jest/globals';
import { ddDivBy2 } from '../../../src/double-double/unary/dd-div-by-2.js';


describe('ddDivBy2', function() {
	it('should correctly divide some double-double precision values by 2', 
	function() {
        // Some double-doubles
        let a = [4.511949494578893e-11, -2797357.2918064594];

        expect(ddDivBy2(a)).toEqual([2.2559747472894465e-11, -1398678.6459032297]);
    });
});
