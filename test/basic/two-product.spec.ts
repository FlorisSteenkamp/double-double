
import { expect } from 'chai';
import { describe } from 'mocha';

import { twoProduct } from '../../src/index';

describe('multiply', function() {
	it('should multiply two doubles without any error', 
	function() {
		{
			let a = 0.1;
			let b = 0.2;
			expect(twoProduct(a,b)).to.eql([
				-1.6653345369377347e-18,
				0.020000000000000004
			]);
		}
		{
			let a = 1.12345678901234;
			let b = 1.12345678901234;
			expect(twoProduct(a,b)).to.eql([
				1.9577543036711243e-17,
				1.2621551567779172
			]);
		}
		{
			let a = 0.000000000000123412345678901234;
			let b = 0.0000000004321412345678901234;
			expect(twoProduct(a,b)).to.eql([
				-9.012187111832017e-41,
				5.333156342259961e-23
			]);
		}
	});
});