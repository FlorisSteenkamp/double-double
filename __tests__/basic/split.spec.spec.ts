import { describe, it, expect } from '@jest/globals';
import { split } from '../../src/basic/split.js';


describe('split', function() {
	it('should split a double into two 27-bit significand doubles without any error', 
	function() {
		let a = 1.23456789012345;
        let parts = split(a);
		expect(parts).toEqual([
			1.2345678806304932,
			9.492956865031488e-9
        ]);
	});
});