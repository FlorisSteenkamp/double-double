
import { assert, expect } from 'chai';
import { describe } from 'mocha';

import { lsbExponent } from '../../src/index';


describe('lsb exponent', function() {
    it('should give lsb exponent correctly', 
    function() {
        expect(lsbExponent(1/65536)).to.eql(-16);
        expect(lsbExponent(0)).to.eql(NaN);
        expect(lsbExponent(1.1125369292536007e-308)).to.eql(-1023);
        expect(lsbExponent(1.390671161567e-310)).to.eql(-1073);
        expect(lsbExponent(5e-324)).to.eql(-1074);
        expect(lsbExponent(1e-323)).to.eql(-1073);
        expect(lsbExponent(0.1)).to.eql(-55);
        expect(lsbExponent(123123)).to.eql(0);
        expect(lsbExponent(0.0322123123)).to.eql(-57);
        expect(lsbExponent(1.335044315104321e-308)).to.eql(-1073);
    });
});