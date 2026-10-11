import { describe, it, expect } from '@jest/globals';
import { isBitAligned } from '../../src/double-representation/is-bit-aligned.js';


describe('grid aligned', function() {
    it('should check grid aligned correctly', 
    function() {
        expect(isBitAligned(0, 1, 10)).toBe(true);
        expect(isBitAligned(1, 1, 0)).toBe(true);
        expect(isBitAligned(2, 1, 0)).toBe(false);
        expect(isBitAligned(2, 1, 1)).toBe(true);
        expect(isBitAligned(4, 1, 1)).toBe(false);
        expect(isBitAligned(4, 1, 2)).toBe(true);
        expect(isBitAligned(1/65536, 1, -15)).toBe(false);
        expect(isBitAligned(1/65536, 1, -16)).toBe(true);
        expect(isBitAligned(1/65536, 1, -17)).toBe(false);
        expect(isBitAligned(1/65535, 1, -16)).toBe(false);
        expect(isBitAligned(1/65537, 1, -16)).toBe(false);
        expect(isBitAligned(65535, 16, 0)).toBe(true);
        expect(isBitAligned(65535, 15, 0)).toBe(false);
        expect(isBitAligned(65536, 15, 0)).toBe(false);
        expect(isBitAligned(65536, 16, 0)).toBe(false);
        expect(isBitAligned(65536, 17, 0)).toBe(true);
        expect(isBitAligned(65536, 12, 5)).toBe(true);
        expect(isBitAligned(65536, 1, 16)).toBe(true);
        expect(isBitAligned(65536, 1, 17)).toBe(false);
    });
});