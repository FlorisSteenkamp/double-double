import { describe, it, expect } from '@jest/globals';
import { bitLength } from '../../src/double-representation/bit-length.js';


describe('bit length', function() {
    it('should check bit lengths correctly', 
    function() {
        expect(bitLength(0)).toEqual(0);
        expect(bitLength(1)).toEqual(1);
        expect(bitLength(2)).toEqual(1);
        expect(bitLength(65536)).toEqual(1);
        expect(bitLength(1/65536)).toEqual(1);
        expect(bitLength(65535)).toEqual(16);
        expect(bitLength(1.390671161567e-310)).toEqual(44);
        expect(bitLength(1.3906711615669e-310)).toEqual(42);
    });
});