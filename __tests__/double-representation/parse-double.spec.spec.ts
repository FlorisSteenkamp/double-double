import { describe, it, expect } from '@jest/globals';
import { parseDouble, parseDoubleDetailed } from '../../src/double-representation/parse-double.js';


describe('parseDouble', function() {
	it('should parse a double correctly', 
	function() {
        {
            let a = -0.1;
            let rd = parseDoubleDetailed(a);
            
            expect(rd).toEqual({
                full: '10111111101111001100110011001100110011001100110011001100110011010',
                sign: '1',
                exponent: '01111111011',
                hidden: '1',
                significand: '1001100110011001100110011001100110011001100110011010'
            });
            

            let r = parseDouble(a);

            expect(r).toEqual({
                sign: 1,
                exponent: -4,
                significand: [
                    25, 
                    153,
                    153,
                    153,
                    153,
                    153,
                    154
                ]
            });
        }

        {
            let a = +0.1;
            let rd = parseDoubleDetailed(a);
            
            expect(rd).toEqual({
                full: '00111111101111001100110011001100110011001100110011001100110011010',
                sign: '0',
                exponent: '01111111011',
                hidden: '1',
                significand: '1001100110011001100110011001100110011001100110011010'
            });

            let r = parseDouble(a);

            expect(r).toEqual({
                sign: 0,
                exponent: -4,
                significand: [
                    25, 
                    153,
                    153,
                    153,
                    153,
                    153,
                    154
                ]
            });
        }
	});
});