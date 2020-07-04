
import { assert, expect } from 'chai';
import { describe } from 'mocha';

import { msbExponent } from '../../src/index';


describe('msb exponent', function() {
    it('should give msb exponent correctly', 
    function() {
        expect(msbExponent(1/65536)).to.eql(-16);
        expect(msbExponent(0)).to.eql(NaN);
        expect(msbExponent(1.1125369292536007e-308)).to.eql(-1023);
        expect(msbExponent(1.390671161567e-310)).to.eql(-1030);
        expect(msbExponent(5e-324)).to.eql(-1074);
        expect(msbExponent(1e-323)).to.eql(-1073);
        expect(msbExponent(0.1)).to.eql(-4);
        expect(msbExponent(123123)).to.eql(16);
        expect(msbExponent(0.0322123123)).to.eql(-5);
        expect(msbExponent(1.335044315104321e-308)).to.eql(-1023);
    });
});