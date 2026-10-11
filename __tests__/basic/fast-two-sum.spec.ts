import { describe, it, expect } from '@jest/globals';
import { twoSum } from '../../src/basic/two-sum.js';
import { fastTwoSum } from '../../src/basic/fast-two-sum.js';


describe('fastTwoSum', function() {
	it('should add two doubles without any error', 
	function() {
		{
			let a = 0.2;
			let b = 0.1;
			expect(fastTwoSum(a,b)).toEqual([
				-2.7755575615628914e-17,
				0.30000000000000004
			]);
		}

		{ 
			// Note: a < b which breaks the precondition of fastTwoSum
			let a = 0.01; // broken precondition
			let b = 0.2;  // ...
			expect(fastTwoSum(a,b)).toEqual([
				0,
				0.21000000000000002
			]);

			// Since the precondition is broken these two should differ
			expect(fastTwoSum(a,b)).not.toEqual(twoSum(a,b));
		}
	});
});