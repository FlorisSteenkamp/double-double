
import { expect } from 'chai';
import { describe } from 'mocha';

import { ddAbs, twoSum } from '../../src/index';


describe('ddAbs', function() {
	it('should correctly calculate the absolute value of some double-double precision values', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [8.661162134715461e-10, 9_722_431.969870245];
        let c = [4.511949494578893e-11, -2_797_357.2918064594];

        expect(ddAbs(a)).to.eql([-4.357806199228875e-10, 11638607.274152497]);
        expect(ddAbs(b)).to.eql([8.661162134715461e-10, 9722431.969870245]);
        expect(ddAbs(c)).to.eql([-4.511949494578893e-11, 2797357.2918064594]);
    });
});
