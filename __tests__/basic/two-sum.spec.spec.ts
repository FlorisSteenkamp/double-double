import { describe, it, expect } from '@jest/globals';
import { twoSum } from '../../src/basic/two-sum.js';


describe('twoSum', function() {
	it('should add two doubles without any error', 
	function() {
		let a = 0.1;
		let b = 0.2;
		expect(twoSum(a,b)).toEqual([
			-2.7755575615628914e-17,
			0.30000000000000004
		]);
	});
});