
import { expect } from 'chai';
import { describe } from 'mocha';

import { ddCompare } from '../../src/index';


describe('ddCompare', function() {
	it('should correctly compare some double-double precision values', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [4.511949494578893e-11, -2_797_357.2918064594];
        let c = [-4.511949494578893e-11, 2_797_357.2918064594];
        let d = [8.661162134715461e-10, 9_722_431.969870245];
        

        expect(ddCompare(a,a)).to.be.eql(0);
        expect(ddCompare(a,b)).to.be.greaterThan(0);
        expect(ddCompare(a,c)).to.be.greaterThan(0);
        expect(ddCompare(a,d)).to.be.greaterThan(0);

        expect(ddCompare(b,a)).to.be.lessThan(0);
        expect(ddCompare(b,b)).to.be.eql(0);
        expect(ddCompare(b,c)).to.be.lessThan(0);
        expect(ddCompare(b,d)).to.be.lessThan(0);

        expect(ddCompare(c,a)).to.be.lessThan(0);
        expect(ddCompare(c,b)).to.be.greaterThan(0);
        expect(ddCompare(c,c)).to.be.eql(0);
        expect(ddCompare(c,d)).to.be.lessThan(0);

        expect(ddCompare(d,a)).to.be.lessThan(0);
        expect(ddCompare(d,b)).to.be.greaterThan(0);
        expect(ddCompare(d,c)).to.be.greaterThan(0);
        expect(ddCompare(d,d)).to.be.eql(0);
    });
});
