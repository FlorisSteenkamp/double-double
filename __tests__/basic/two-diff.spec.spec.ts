import { describe, it, expect } from '@jest/globals';
import { twoDiff } from '../../src/basic/two-diff.js';


describe('twoDiff', function() {
    it('should subtract two doubles without any error', 
    function() {
        let a = 0.1;
        let b = -0.2;
        expect(twoDiff(a,b)).toEqual([
            -2.7755575615628914e-17,
            0.30000000000000004
        ]);
    });
});