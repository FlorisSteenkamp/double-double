import { describe, it, expect } from '@jest/globals';
import { divWithErr } from '../../src/double-with-err/div-with-err.js';


describe('divWithErr', function() {
	it('should correctly divide some double precision values and return a correct propagation error', 
	function() {
        // Some double
        let a = 11_638_607.274152497;
        let b = 9_722_431.969870245;

        {
            let { est, err } = divWithErr(a,b,1,10);
            expect(est).toEqual(1.1970880650253422);
            expect(err).toEqual(0.0000013341216862367694);
        }

        {
            let { est, err } = divWithErr(a,b,1,10_000_000);
            expect(est).toEqual(1.1970880650253422);
            expect(err).toEqual(Number.POSITIVE_INFINITY);
        }
    });
});
