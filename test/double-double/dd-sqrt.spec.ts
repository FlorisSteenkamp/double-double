
import { expect } from 'chai';
import { describe } from 'mocha';

import { ddSqrt } from '../../src/index';


describe('ddSqrt', function() {
	it('should correctly take the square root of some double-double precision values', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [4.511949494578893e-11, -2_797_357.2918064594];

        expect(ddSqrt(a)).to.eql([-1.7210628622409775e-13, 3411.5403081529753]);
        expect(ddSqrt(b)).to.eql([NaN, NaN]);
    });
});
