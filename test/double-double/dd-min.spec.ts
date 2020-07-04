
import { expect } from 'chai';
import { describe } from 'mocha';

import { ddMin } from '../../src/index';


describe('ddMin', function() {
	it('should correctly find the minimum value of some double-double precision values', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [8.661162134715461e-10, 9_722_431.969870245];
        let c = [4.511949494578893e-11, -2_797_357.2918064594];

        expect(ddMin(a,a)).to.eql(a);
        expect(ddMin(a,b)).to.eql(b);
        expect(ddMin(a,c)).to.eql(c);

        expect(ddMin(b,a)).to.eql(b);
        expect(ddMin(b,b)).to.eql(b);
        expect(ddMin(b,c)).to.eql(c);

        expect(ddMin(c,a)).to.eql(c);
        expect(ddMin(c,b)).to.eql(c);
        expect(ddMin(c,c)).to.eql(c);
    });
});
