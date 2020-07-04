
import { expect } from 'chai';
import { describe } from 'mocha';

import { ddProduct } from '../../src/index';


describe('ddProduct', function() {
	it('should correctly multiply some multiple double-double precision values together', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [8.661162134715461e-10, 9_722_431.969870245];
        let c = [4.511949494578893e-11, -2_797_357.2918064594];

        expect(ddProduct([a,b,c])).to.eql([32234.0050348792,-316536551706320100000]);
    });
});
