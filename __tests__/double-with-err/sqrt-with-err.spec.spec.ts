import { describe, it, expect } from '@jest/globals';
import { sqrtWithErr } from '../../src/double-with-err/sqrt-with-err.js';
import { ddSqrt } from '../../src/double-double/unary/dd-sqrt.js';
import { ddDiffDouble } from '../../src/double-mixed-double-double/dd-diff-double.js';


describe('sqrtWithErr', function() {
	it('should correctly take the square root of some double precision values and return a correct propagation error', 
	function() {
        // Some double
        let a = 9;
        let b = 81;

        {
            let { est, err } = sqrtWithErr(a,1);
            expect(est).toEqual(3);
            // slightly larger than the error in exact arithmetic due to rounding
            expect(err).toBeGreaterThanOrEqual(0.1715728752538097);
            expect(err).toBeLessThanOrEqual(0.1715728752538097*(1 + 1e-13));
        }

        {
            let { est, err } = sqrtWithErr(b,10_000);
            expect(est).toEqual(9);
            expect(err).toBeGreaterThanOrEqual(91.40418317978589);
            expect(err).toBeLessThanOrEqual(91.40418317978589*(1 + 1e-13));
        }
    });

	it.each([[9,1],[81,10_000],[2,1e-10],[1e20,3],[0.3,0.1],[1e-200,1e-216],[5,0]])(
	'should return an error bound that contains the true error (x = %p, x_ = %p)', 
	function(x, x_) {
        const { est, err } = sqrtWithErr(x,x_);
        // check the extremes of the input interval (using double-double)
        for (const t of [Math.max(0,x - x_), x, x + x_]) {
            const d = ddDiffDouble(ddSqrt([0,t]), est);
            expect(Math.abs(d[1] + d[0])).toBeLessThanOrEqual(err);
        }
    });
});
