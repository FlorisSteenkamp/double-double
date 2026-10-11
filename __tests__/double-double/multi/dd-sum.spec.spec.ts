import { describe, it, expect } from '@jest/globals';
import { ddSum } from '../../../src/double-double/multi/dd-sum.js';


describe('ddSum', function() {
	it('should correctly sum some multiple double-double precision values together', 
	function() {
        // Some double-doubles
        let a = [-4.357806199228875e-10, 11_638_607.274152497];
        let b = [8.661162134715461e-10, 9_722_431.969870245];
        let c = [4.511949494578893e-11, -2_797_357.2918064594];

        expect(ddSum([a,b,c])).toEqual([4.754550884944475e-10,18_563_681.952216282]);
    });

	it('should return zero for an empty array', 
	function() {
        expect(ddSum([])).toEqual([0,0]);
    });

	it('should return the value itself for a single value', 
	function() {
        expect(ddSum([[1e-17,3]])).toEqual([1e-17,3]);
    });
});
