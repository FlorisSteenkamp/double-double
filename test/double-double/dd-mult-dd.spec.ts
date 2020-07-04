
import { expect } from 'chai';
import { describe } from 'mocha';

import { ddMultDd } from '../../src/index';


describe('ddMultDd', function() {
	it('should correctly multiply some double-double precision values', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [8.661162134715461e-10, 9_722_431.969870245];
        let c = [4.511949494578893e-11, -2_797_357.2918064594];

        expect(ddMultDd(a,b)).to.eql([0.004167970617389394, 113155567446984.62]);
        expect(ddMultDd(b,c)).to.eql([-0.0017773656354986935, -27197115965008.77]);
        expect(ddMultDd(c,a)).to.eql([0.0018399522066862156, -32557342924822.188]);
    });
});
