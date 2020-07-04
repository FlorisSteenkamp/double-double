
import { assert, expect } from 'chai';
import { describe } from 'mocha';

import { getHighestSetBit, getLowestSetBit } from '../../src/index';


describe('max set bits', function() {
    it('should check highest set bit is given correctly', 
    function() {
        expect(getHighestSetBit(1/65536)).to.eql(52);
        expect(getHighestSetBit(0)).to.eql(NaN);
        expect(getHighestSetBit(1.390671161567e-310)).to.eql(44);
        expect(getHighestSetBit(5e-324)).to.eql(0);
        expect(getHighestSetBit(1e-323)).to.eql(1);
        expect(getHighestSetBit(0.1)).to.eql(52);
        expect(getHighestSetBit(123123)).to.eql(52);
        expect(getHighestSetBit(0.0322123123)).to.eql(52);
        expect(getHighestSetBit(1.335044315104321e-308)).to.eql(51);
    });

    it('should check lowest set bit is given correctly', 
    function() {
        expect(getLowestSetBit(1/65536)).to.eql(52);
        expect(getLowestSetBit(0)).to.eql(NaN);
        expect(getLowestSetBit(1.390671161567e-310)).to.eql(1);
        expect(getLowestSetBit(1.3906711614456e-310)).to.eql(12);
        expect(getLowestSetBit(2.238980570121657e-308)).to.eql(12);
        expect(getLowestSetBit(2.2389805701196335e-308)).to.eql(15);
        expect(getLowestSetBit(0.2515624999996362)).to.eql(15);
        expect(getLowestSetBit(5e-324)).to.eql(0);
        expect(getLowestSetBit(1e-323)).to.eql(1);
    });
});