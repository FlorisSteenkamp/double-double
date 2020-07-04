
import { expect } from 'chai';
import { describe } from 'mocha';

import { divWithErr } from '../../src/index';


describe('divWithErr', function() {
	it('should correctly divide some double precision values and return a correct propagation error', 
	function() {
        // Some double
        let a = 11_638_607.274152497;
        let b = 9_722_431.969870245;

        {
            let { est, err } = divWithErr(a,b,1,10);
            expect(est).to.eql(1.1970880650253422);
            expect(err).to.eql(0.0000013341216862367694);
        }

        {
            let { est, err } = divWithErr(a,b,1,10_000_000);
            expect(est).to.eql(1.1970880650253422);
            expect(err).to.eql(Number.POSITIVE_INFINITY);
        }
    });
});
