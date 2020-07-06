
import { expect } from 'chai';
import { describe } from 'mocha';

import { doubleSqrt } from '../../src/index';


describe('ddSqrt', function() {
	it('should correctly take the square root of some double precision values and return the result accurately as a double-double', 
	function() {
        // Some double-doubles
        let a = 11_638_607.274152497;
        let b = -2_797_357.2918064594;
        let d = 1;
        let e = 1.112536929253601e-308;
        let f = 0;

        expect(doubleSqrt(a)).to.eql([-1.0823768427889293e-13, 3411.5403081529753]);
        expect(doubleSqrt(b)).to.eql([NaN, NaN]);
        expect(doubleSqrt(d)).to.eql([0, 1]);
        expect(doubleSqrt(e)).to.eql([0, 1.0547686614863001e-154]);
        expect(doubleSqrt(f)).to.eql([0, 0]);
    });
});
