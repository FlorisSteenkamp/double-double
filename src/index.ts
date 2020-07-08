
import { ddMin } from './double-double/binary/dd-min';
import { ddMax } from './double-double/binary/dd-max';
import { ddSqrt } from './double-double/unary/dd-sqrt';
import { doubleSqrt } from './double-mixed-double-double/double-sqrt';
import { sqrtWithErr } from './double-with-err/sqrt-with-err';
import { ddAbs } from './double-double/unary/dd-abs';
import { ddAddDouble } from './double-mixed-double-double/dd-add-double';
import { ddAddDd } from './double-double/binary/dd-add-dd';
import { ddProduct } from './double-double/multi/dd-product';
import { ddSum } from './double-double/multi/dd-sum';
import { ddCompare } from './double-double/binary/dd-compare';
import { ddDiffDd } from './double-double/binary/dd-diff-dd';
import { ddMultDouble1, ddMultDouble2 } from './double-mixed-double-double/dd-mult-double';
import { ddMultBy2 } from './double-double/unary/dd-mult-by-2';
import { ddMultBy4 } from './double-double/unary/dd-mult-by-4';
import { ddDivBy2 } from './double-double/unary/dd-div-by-2';
import { ddMultByNeg2 } from './double-double/unary/dd-mult-by-neg-2';
import { ddMultByNeg4 } from './double-double/unary/dd-mult-by-neg-4';
import { ddMultDd } from './double-double/binary/dd-mult-dd';
import { ddDivDouble } from './double-mixed-double-double/dd-div-double';
import { ddDivDd } from './double-double/binary/dd-div-dd';
import { ddNegativeOf } from './double-double/unary/dd-negative-of';
import { ddSign } from './double-double/unary/dd-sign';
import { fastTwoDiff } from './basic/fast-two-diff';
import { fastTwoSum } from './basic/fast-two-sum';
import { split } from './basic/split';
import { twoDiff } from './basic/two-diff';
import { twoProduct } from './basic/two-product';
import { doubleDivDouble } from './double-mixed-double-double/double-div-double';
import { twoSum } from './basic/two-sum';
import { reduceSignificand } from './basic/reduce-significand';
import { parseDouble, parseDoubleDetailed } from './double-representation/parse-double';
import { isBitAligned } from './double-representation/is-bit-aligned';
import { msbExponent } from './double-representation/msb-exponent';
import { lsbExponent } from './double-representation/lsb-exponent';
import { bitLength } from './double-representation/bit-length';
import { exponent } from './double-representation/exponent';
import { significand } from './double-representation/significand';
import { doubleToBinaryString } from './double-representation/double-to-binary-string';
import { doubleToOctets } from './double-representation/double-to-octets';
import { getHighestSetBit, getLowestSetBit } from './double-representation/get-max-set-bit';
import { ddDivDdWithError } from './double-double-with-error/dd-div-dd-with-error';
import { divWithErr } from './double-with-err/div-with-err';
import { add } from './double/add';
import { diff } from './double/diff';
import { mult } from './double/mult';
import { multBy2 } from './double/mult-by-2';


export { 
    //---- basic ----//
    fastTwoDiff,
    fastTwoSum,
    split,
    twoDiff,
    twoProduct,
    doubleDivDouble,
    twoSum,
    reduceSignificand,

    //---- double-double precision ----//
    doubleSqrt,
    ddSqrt,
    ddAbs,
    ddAddDouble,
    ddAddDd,
    ddProduct,
    ddSum,
    ddCompare,
    ddDiffDd,
    ddMultDouble1, 
    ddMultDouble2,
    ddMultDd,
    ddDivDouble,
    ddDivDd,
    ddNegativeOf,
    ddSign,
    ddMultBy2,
    ddMultBy4,
    ddDivBy2,
    ddMultByNeg2,
    ddMultByNeg4,
    ddMin,
    ddMax,

    //---- double-double precision error propagation - with error bound on input parameters
    ddDivDdWithError,    

    //---- double precision error propagation - with error bound on input parameters
    divWithErr,
    sqrtWithErr,

    //---- double floating point representation ----//
    parseDouble, 
    parseDoubleDetailed,
	isBitAligned,
	msbExponent,
	lsbExponent,
    bitLength,
    doubleToBinaryString,
    doubleToOctets, 
    getHighestSetBit, 
    getLowestSetBit,
    exponent, 
    significand,

    //---- double (for benchmark testing only)
    add,
    diff,
    mult,
    multBy2
}
