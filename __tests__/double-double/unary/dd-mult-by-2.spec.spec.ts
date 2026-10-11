import { describe, it, expect } from '@jest/globals';
import { ddMultBy2 } from '../../../src/double-double/unary/dd-mult-by-2.js';


describe('ddMultBy2', function() {
	it('should correctly multiply some double-double precision values by 2', 
	function() {
        let a = [-4.357806199228875e-10, 11_638_607.274152497];

        expect(ddMultBy2(a)).toEqual([-8.71561239845775e-10, 23277214.548304994]);
    });
});
