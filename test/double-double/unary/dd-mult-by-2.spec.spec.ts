
import { expect } from 'chai';
import { describe } from 'mocha';

import { ddMultBy2 } from '../../../src/index.js';


describe('ddMultBy2', function() {
	it('should correctly multiply some double-double precision values by 2', 
	function() {
        let a = [-4.357806199228875e-10, 11_638_607.274152497];

        expect(ddMultBy2(a)).to.eql([-8.71561239845775e-10, 23277214.548304994]);
    });
});
