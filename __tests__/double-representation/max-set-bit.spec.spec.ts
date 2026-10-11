import { describe, it, expect } from '@jest/globals';
import { getHighestSetBit, getLowestSetBit } from '../../src/double-representation/get-max-set-bit.js';


describe('max set bits', function() {
    it('should check highest set bit is given correctly', 
    function() {
        expect(getHighestSetBit(1/65536)).toEqual(52);
        expect(getHighestSetBit(0)).toEqual(NaN);
        expect(getHighestSetBit(1.390671161567e-310)).toEqual(44);
        expect(getHighestSetBit(5e-324)).toEqual(0);
        expect(getHighestSetBit(1e-323)).toEqual(1);
        expect(getHighestSetBit(0.1)).toEqual(52);
        expect(getHighestSetBit(123123)).toEqual(52);
        expect(getHighestSetBit(0.0322123123)).toEqual(52);
        expect(getHighestSetBit(1.335044315104321e-308)).toEqual(51);
    });

    it('should check lowest set bit is given correctly', 
    function() {
        expect(getLowestSetBit(1/65536)).toEqual(52);
        expect(getLowestSetBit(0)).toEqual(NaN);
        expect(getLowestSetBit(1.390671161567e-310)).toEqual(1);
        expect(getLowestSetBit(1.3906711614456e-310)).toEqual(12);
        expect(getLowestSetBit(2.238980570121657e-308)).toEqual(12);
        expect(getLowestSetBit(2.2389805701196335e-308)).toEqual(15);
        expect(getLowestSetBit(0.2515624999996362)).toEqual(15);
        expect(getLowestSetBit(5e-324)).toEqual(0);
        expect(getLowestSetBit(1e-323)).toEqual(1);
    });
});