import { describe, it, expect } from '@jest/globals';
import { ddMultBy4 } from '../../../src/double-double/unary/dd-mult-by-4.js';


describe('ddMultBy4', function() {
	it('should correctly multiply some double-double precision values by 4',
	function() {
        let a = [-4.357806199228875e-10, 11_638_607.274152497];

        expect(ddMultBy4(a)).toEqual([-1.74312247969155e-9, 46554429.09660999]);
    });
});
