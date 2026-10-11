import { describe, it, expect } from '@jest/globals';
import { ddDivDdWithError } from '../../src/double-double-with-error/dd-div-dd-with-error.js';


describe('ddDivDdWithError', function() {
	it('should correctly divide some double-double precision values and return a correct propagation error', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [8.661162134715461e-10, 9_722_431.969870245];

        {
            let { est, err } = ddDivDdWithError(a,b,1,10);
            expect(est).toEqual([1.8555685111447767e-17, 1.197088065025342]);
            expect(err).toEqual(0.0000013341216861038663);
        }

        {
            let { est, err } = ddDivDdWithError(a,b,1,10_000_000);
            expect(est).toEqual([1.8555685111447767e-17, 1.197088065025342]);
            expect(err).toEqual(Number.POSITIVE_INFINITY);
        }
    });

	it('should include the rounding error of the division itself', 
	function() {
        const u = Number.EPSILON/2;
        const a = [-4.357806199228875e-10, 11_638_607.274152497];
        const b = [8.661162134715461e-10, 9_722_431.969870245];
        const { est, err } = ddDivDdWithError(a,b,0,0);
        // the proven relative error bound of `ddDivDd` is 15u^2 + 56u^3
        expect(err).toBeGreaterThanOrEqual((15*u*u + 56*u*u*u)*est[1]*(1 - 2*u));
    });
});
