import { expect } from 'chai';
import { describe } from 'mocha';
import { normalizeStr } from '../../src/str-to-dd/normalize-str.js';


describe('normalizeStr', function() {
	it('should correctly normalize a double-double string',
	function() {
        {
            const s = '0';
            const r = normalizeStr(s);

            expect(r).to.eql({ str: '0', exp: 0, negative: false });
        }
        const oneStr = '1.0000000000000000000000000000000000000000000';
        {
            const s = '1';
            const r = normalizeStr(s);
            expect(r).to.eql({ str: oneStr, exp: 0, negative: false });
        }
        {
            const s = '1.0';
            const r = normalizeStr(s);
            expect(r).to.eql({ str: oneStr, exp: 0, negative: false });
        }
        {
            const s = '1.000000';
            const r = normalizeStr(s);
            expect(r).to.eql({ str: oneStr, exp: 0, negative: false });
        }
        {
            const s = '10000.000000';
            const r = normalizeStr(s);
            expect(r).to.eql({ str: oneStr, exp: 4, negative: false });
        }
        {
            const s = '1e10';
            const r = normalizeStr(s);
            expect(r).to.eql({ str: oneStr, exp: 10, negative: false });
        }
        {
            const s = '0';
            const r = normalizeStr(s);

            expect(r).to.eql({ str: '0', exp: 0, negative: false });
        }

        {
            const s = '-1';
            const r = normalizeStr(s);
            expect(r).to.eql({ str: oneStr, exp: 0, negative: true });
        }
        {
            const s = '-1.0';
            const r = normalizeStr(s);
            expect(r).to.eql({ str: oneStr, exp: 0, negative: true });
        }
        {
            const s = '-1.000000';
            const r = normalizeStr(s);
            expect(r).to.eql({ str: oneStr, exp: 0, negative: true });
        }
        {
            const s = '-10000.000000';
            const r = normalizeStr(s);
            expect(r).to.eql({ str: oneStr, exp: 4, negative: true });
        }
        {
            const s = '-1e10';
            const r = normalizeStr(s);
            expect(r).to.eql({ str: oneStr, exp: 10, negative: true });
        }
        {
            const s = '22222.223412312300123112312313333332221212e+10';
            const r = normalizeStr(s);
            expect(r).to.eql({ str: '2.2222223412312300123112312313333332221212000', exp: 14, negative: false });
        }
        {
            const s = '-21.223412312300123112312313333332221212e-40';
            const r = normalizeStr(s);
            expect(r).to.eql({ str: '2.1223412312300123112312313333332221212000000', exp: -39, negative: true });
        }
    });
});
