
import { expect } from 'chai';
import { describe } from 'mocha';

import { twoSum } from '../../src/index';


describe('twoSum', function() {
	it('should add two doubles without any error', 
	function() {
		let a = 0.1;
		let b = 0.2;
		expect(twoSum(a,b)).to.eql([
			-2.7755575615628914e-17,
			0.30000000000000004
		]);
	});
});