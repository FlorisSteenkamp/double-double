
import { expect } from 'chai';
import { describe } from 'mocha';

import { twoSum, fastTwoDiff } from '../../src/index';


describe('fastTwoDiff', function() {
	it('should take the difference between two doubles without any error', 
	function() {
		{
			let a = 0.1;
			let b = -0.2;
			expect(fastTwoDiff(a,b)).to.eql([
				-2.7755575615628914e-17,
				0.30000000000000004
			]);
		}

		{ 
			// Note: a < b which breaks the precondition of fastTwoDiff
			let a = 0.01;
			let b = 0.21234;
			expect(fastTwoDiff(a,b)).to.eql([
				0,
				-0.20234
			]);

			// Since the precondition is broken these two should differ
			expect(fastTwoDiff(a,b)).not.to.eql(twoSum(a,b));
		}
	});
});