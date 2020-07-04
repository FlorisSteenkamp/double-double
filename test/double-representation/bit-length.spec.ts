
import { assert, expect } from 'chai';
import { describe } from 'mocha';

import { bitLength } from '../../src/index';


describe('bit length', function() {
    it('should check bit lengths correctly', 
    function() {
        expect(bitLength(0)).to.eql(0);
        expect(bitLength(1)).to.eql(1);
        expect(bitLength(2)).to.eql(1);
        expect(bitLength(65536)).to.eql(1);
        expect(bitLength(1/65536)).to.eql(1);
        expect(bitLength(65535)).to.eql(16);
        expect(bitLength(1.390671161567e-310)).to.eql(44);
        expect(bitLength(1.3906711615669e-310)).to.eql(42);
    });
});