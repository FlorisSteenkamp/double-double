
import { expect } from 'chai';
import { describe } from 'mocha';

import { ddMax } from '../../src/index';


describe('ddMax', function() {
	it('should correctly find the maximum value of some double-double precision values', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [8.661162134715461e-10, 9_722_431.969870245];
        let c = [4.511949494578893e-11, -2_797_357.2918064594];

        expect(ddMax(a,a)).to.eql(a);
        expect(ddMax(a,b)).to.eql(a);
        expect(ddMax(a,c)).to.eql(a);

        expect(ddMax(b,a)).to.eql(a);
        expect(ddMax(b,b)).to.eql(b);
        expect(ddMax(b,c)).to.eql(b);

        expect(ddMax(c,a)).to.eql(a);
        expect(ddMax(c,b)).to.eql(b);
        expect(ddMax(c,c)).to.eql(c);
    });
});
