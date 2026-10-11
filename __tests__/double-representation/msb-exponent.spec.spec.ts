import { describe, it, expect } from '@jest/globals';
import { msbExponent } from '../../src/double-representation/msb-exponent.js';


describe('msb exponent', function() {
    it('should give msb exponent correctly', 
    function() {
        expect(msbExponent(1/65536)).toEqual(-16);
        expect(msbExponent(0)).toEqual(NaN);
        expect(msbExponent(1.1125369292536007e-308)).toEqual(-1023);
        expect(msbExponent(1.390671161567e-310)).toEqual(-1030);
        expect(msbExponent(5e-324)).toEqual(-1074);
        expect(msbExponent(1e-323)).toEqual(-1073);
        expect(msbExponent(0.1)).toEqual(-4);
        expect(msbExponent(123123)).toEqual(16);
        expect(msbExponent(0.0322123123)).toEqual(-5);
        expect(msbExponent(1.335044315104321e-308)).toEqual(-1023);
    });
});