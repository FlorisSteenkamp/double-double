
import { expect } from 'chai';
import { describe } from 'mocha';

import { ddDivDouble } from '../../src/index';


describe('ddDivDouble', function() {
	it('should correctly divide some double-double precision values by a double', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11638607.274152497];
        let b = 9722431.969870245;

        expect(ddDivDouble(a,b)).to.eql([-9.68471469233417e-17, 1.1970880650253422]);
    });
});
