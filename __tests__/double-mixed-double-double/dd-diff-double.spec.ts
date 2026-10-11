import { describe, it, expect } from '@jest/globals';
import { squares } from 'squares-rng';

import { ddDiffDouble } from '../../src/double-mixed-double-double/dd-diff-double.js';
import { ddAddDouble } from '../../src/double-mixed-double-double/dd-add-double.js';


describe('ddDiffDouble', function() {
	it('should correctly subtract some doubles from double-double precision values',
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [4.511949494578893e-11, -2_797_357.2918064594];
        // ... and some doubles
        let c = -12_394_082.1234567891011

        expect(ddDiffDouble(a,c)).toEqual([-4.357806199228875e-10, 24_032_689.397609286]);
        expect(ddDiffDouble(b,c)).toEqual([4.511949494578893e-11, 9596724.83165033]);
    });

	it('should give the same result as adding the negated double',
	function() {
        let rng = 0;
        for (let i=0; i<1000; i++) {
            const h = (squares(rng++)/2**32 - 0.5) * 2**(squares(rng++)%100 - 50);
            const l = h * (squares(rng++)/2**32 - 0.5) * 2**-53;
            const hh = h + l;
            const x = [l - (hh - h), hh];
            const y = (squares(rng++)/2**32 - 0.5) * 2**(squares(rng++)%100 - 50);

            expect(ddDiffDouble(x,y)).toEqual(ddAddDouble(x,-y));
        }
    });
});
