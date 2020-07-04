
import { expect } from 'chai';
import { describe } from 'mocha';

import { split } from '../../src/index';


describe('split', function() {
	it('should split a double into two 27-bit significand doubles without any error', 
	function() {
		let a = 1.23456789012345;
        let parts = split(a);
		expect(parts).to.eql([
			1.2345678806304932,
			9.492956865031488e-9
        ]);
	});
});