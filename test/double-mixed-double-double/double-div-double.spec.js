
import { expect } from 'chai';
import { describe } from 'mocha';

import { doubleDivDouble } from '../../node/index.js';

describe('divide', function() {
	it('should divide two doubles with the result accurately given as a double-double', 
	function() {
        {
			let a = 0.1;
			let b = 0;
			expect(doubleDivDouble(a,b)).to.eql([
				NaN,
				NaN
			]);
        }
        {
			let a = -0.1;
			let b = 0;
			expect(doubleDivDouble(a,b)).to.eql([
				NaN,
				NaN
			]);
		}
		{
			let a = 0.1;
			let b = 0.2;
			expect(doubleDivDouble(a,b)).to.eql([
				0,
				0.5
			]);
		}
		{
			let a = 1.12345678901234;
			let b = 1.12345678901234;
			expect(doubleDivDouble(a,b)).to.eql([
				0,
				1
			]);
		}
		{
			let a = 0.000000000000123412345678901234;
			let b = 0.0000000004321412345678901234;
			expect(doubleDivDouble(a,b)).to.eql([
				-2.3586948459034856e-20,
				0.0002855833598066721
			]);
		}
	});
});