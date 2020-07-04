
import { expect } from 'chai';
import { describe } from 'mocha';

import { ddDivDdWithError } from '../../src/index';


describe('ddDivDdWithError', function() {
	it('should correctly divide some double-double precision values and return a correct propagation error', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [8.661162134715461e-10, 9_722_431.969870245];

        {
            let { est, err } = ddDivDdWithError(a,b,1,10);
            expect(est).to.eql([1.8555685111447767e-17, 1.197088065025342]);
            expect(err).to.eql(0.0000013341216861038663);
        }

        {
            let { est, err } = ddDivDdWithError(a,b,1,10_000_000);
            expect(est).to.eql([1.8555685111447767e-17, 1.197088065025342]);
            expect(err).to.eql(Number.POSITIVE_INFINITY);
        }
    });
});
