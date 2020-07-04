
import { expect } from 'chai';
import { describe } from 'mocha';

import { ddDivDd } from '../../src/index';


describe('ddDivDd', function() {
	it('should correctly divide some double-double precision values', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11638607.274152497];
        let b = [8.661162134715461e-10, 9722431.969870245];

        expect(ddDivDd(a,b)).to.eql([1.8555685111447767e-17, 1.197088065025342]);
    });
});
