
import { ddMin } from './double-double/dd-min';
import { ddMax } from './double-double/dd-max';
import { ddSqrt } from './double-double/dd-sqrt';
import { sqrtWithErr } from './double-with-err/sqrt-with-err';
import { ddAbs } from './double-double/dd-abs';
import { ddAddDouble } from './double-double/dd-add-double';
import { ddAddDd } from './double-double/dd-add-dd';
import { ddProduct } from './double-double/dd-product';
import { ddSum } from './double-double/dd-sum';
import { ddCompare } from './double-double/dd-compare';
import { ddDiffDd } from './double-double/dd-diff-dd';
import { ddMultDouble1, ddMultDouble2 } from './double-double/dd-mult-double';
import { ddMultBy2 } from './double-double/dd-mult-by-2';
import { ddMultBy4 } from './double-double/dd-mult-by-4';
import { ddDivBy2 } from './double-double/dd-div-by-2';
import { ddMultByNeg2 } from './double-double/dd-mult-by-neg-2';
import { ddMultByNeg4 } from './double-double/dd-mult-by-neg-4';
import { ddMultDd } from './double-double/dd-mult-dd';
import { ddDivDouble } from './double-double/dd-div-double';
import { ddDivDd } from './double-double/dd-div-dd';
import { ddNegativeOf } from './double-double/dd-negative-of';
import { ddSign } from './double-double/dd-sign';
import { fastTwoDiff } from './basic/fast-two-diff';
import { fastTwoSum } from './basic/fast-two-sum';
import { split } from './basic/split';
import { twoDiff } from './basic/two-diff';
import { twoProduct } from './basic/two-product';
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


export { 
    //---- basic ----//
    fastTwoDiff,
    fastTwoSum,
    split,
    twoDiff,
    twoProduct,
    twoSum,
    reduceSignificand,

    //---- double-double precision ----//
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
}
