import { describe, it, expect } from '@jest/globals';
import { reduceSignificand } from '../../src/basic/reduce-significand.js';


describe('reduce significand', function() {
	it('should reduce the significand of a double correctly',
	function() {
        {
            let a = 218.125; // 218 + 1/8
			expect(reduceSignificand(a, 11)).toEqual(
				218.125
			);
        }

		{
			let a = 218.0625; // 218 + 1/16
			expect(reduceSignificand(a, 11)).toEqual(
				218
			);
        }
	});
});
