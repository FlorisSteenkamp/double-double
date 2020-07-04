
import { expect } from 'chai';
import { describe } from 'mocha';

import { ddMultDouble1, ddMultDouble2 } from '../../src/index';


describe('ddMultDouble', function() {
	it('should correctly multiply some double-double precision values by doubles', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [8.661162134715461e-10, 9_722_431.969870245];
        let c = [4.511949494578893e-11, -2_797_357.2918064594];
        let d = 11_638_607.274152497;
        let e = 9_722_431.969870245;
        let f = -2_797_357.2918064594;

        expect(ddMultDouble1(d,b)).to.eql([-0.00722018195162245, 113155567446984.64]);
        expect(ddMultDouble1(e,c)).to.eql([0.000645470869807736, -27197115965008.77]);
        expect(ddMultDouble1(f,a)).to.eql([0.00131482412460407, -32557342924822.188]);

        expect(ddMultDouble2(d,b)).to.eql([-0.00722018195162245, 113155567446984.64]);
        expect(ddMultDouble2(e,c)).to.eql([0.000645470869807736, -27197115965008.77]);
        expect(ddMultDouble2(f,a)).to.eql([0.00131482412460407, -32557342924822.188]);
    });
});
