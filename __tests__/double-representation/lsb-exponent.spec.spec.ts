import { describe, it, expect } from '@jest/globals';
import { lsbExponent } from '../../src/double-representation/lsb-exponent.js';


describe('lsb exponent', function() {
    it('should give lsb exponent correctly', 
    function() {
        expect(lsbExponent(1/65536)).toEqual(-16);
        expect(lsbExponent(0)).toEqual(NaN);
        expect(lsbExponent(1.1125369292536007e-308)).toEqual(-1023);
        expect(lsbExponent(1.390671161567e-310)).toEqual(-1073);
        expect(lsbExponent(5e-324)).toEqual(-1074);
        expect(lsbExponent(1e-323)).toEqual(-1073);
        expect(lsbExponent(0.1)).toEqual(-55);
        expect(lsbExponent(123123)).toEqual(0);
        expect(lsbExponent(0.0322123123)).toEqual(-57);
        expect(lsbExponent(1.335044315104321e-308)).toEqual(-1073);
    });
});