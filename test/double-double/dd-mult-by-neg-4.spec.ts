
import { expect } from 'chai';
import { describe } from 'mocha';

import { ddMultByNeg4 } from '../../src/index';


describe('ddMultByNeg4', function() {
	it('should correctly multiply some double-double precision values by negative 4', 
	function() {
        let a = [-4.357806199228875e-10, 11_638_607.274152497];

        expect(ddMultByNeg4(a)).to.eql([1.74312247969155e-9, -46554429.09660999]);
    });
});
