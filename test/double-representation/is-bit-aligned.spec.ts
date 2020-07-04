
import { assert } from 'chai';
import { describe } from 'mocha';

import { isBitAligned } from '../../src/index';


describe('grid aligned', function() {
    it('should check grid aligned correctly', 
    function() {
        assert( isBitAligned(0, 1, 10));
        assert( isBitAligned(1, 1, 0));
        assert(!isBitAligned(2, 1, 0));
        assert( isBitAligned(2, 1, 1));
        assert(!isBitAligned(4, 1, 1));
        assert( isBitAligned(4, 1, 2));
        assert(!isBitAligned(1/65536, 1, -15));
        assert( isBitAligned(1/65536, 1, -16));
        assert(!isBitAligned(1/65536, 1, -17));
        assert(!isBitAligned(1/65535, 1, -16));
        assert(!isBitAligned(1/65537, 1, -16));
        assert( isBitAligned(65535, 16, 0));
        assert(!isBitAligned(65535, 15, 0));
        assert(!isBitAligned(65536, 15, 0));
        assert(!isBitAligned(65536, 16, 0));
        assert( isBitAligned(65536, 17, 0));
        assert( isBitAligned(65536, 12, 5));
        assert( isBitAligned(65536, 1, 16));
        assert(!isBitAligned(65536, 1, 17));
    });
});