import { expect } from 'chai';
import { describe } from 'mocha';

import { sqrtWithErr } from '../../src/index';


describe('sqrtWithErr', function() {
	it('should correctly take the square root of some double precision values and return a correct propagation error', 
	function() {
        // Some double
        let a = 9;
        let b = 81;

        {
            let { est, err } = sqrtWithErr(a,1);
            expect(est).to.eql(3);
            expect(err).to.eql(0.1715728752538097);
        }

        {
            let { est, err } = sqrtWithErr(b,10_000);
            expect(est).to.eql(9);
            expect(err).to.eql(91.40418317978589);
        }
    });
});
