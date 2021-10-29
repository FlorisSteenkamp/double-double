import { ddMin as ddMin_ } from './double-double/binary/dd-min';
import { ddMax as ddMax_ } from './double-double/binary/dd-max';
import { ddSqrt as ddSqrt_ } from './double-double/unary/dd-sqrt';
import { doubleSqrt as doubleSqrt_ } from './double-mixed-double-double/double-sqrt';
import { sqrtWithErr as sqrtWithErr_ } from './double-with-err/sqrt-with-err';
import { ddAbs as ddAbs_ } from './double-double/unary/dd-abs';
import { ddAddDouble as ddAddDouble_ } from './double-mixed-double-double/dd-add-double';
import { ddAddDd as ddAddDd_ } from './double-double/binary/dd-add-dd';
import { ddProduct as ddProduct_ } from './double-double/multi/dd-product';
import { ddSum as ddSum_ } from './double-double/multi/dd-sum';
import { ddCompare as ddCompare_ } from './double-double/binary/dd-compare';
import { ddDiffDd as ddDiffDd_ } from './double-double/binary/dd-diff-dd';
import { ddMultDouble1 as ddMultDouble1_, ddMultDouble2 as ddMultDouble2_ } from './double-mixed-double-double/dd-mult-double';
import { ddMultBy2 as ddMultBy2_ } from './double-double/unary/dd-mult-by-2';
import { ddMultBy4 as ddMultBy4_ } from './double-double/unary/dd-mult-by-4';
import { ddDivBy2 as ddDivBy2_ } from './double-double/unary/dd-div-by-2';
import { ddMultByNeg2 as ddMultByNeg2_ } from './double-double/unary/dd-mult-by-neg-2';
import { ddMultByNeg4 as ddMultByNeg4_ } from './double-double/unary/dd-mult-by-neg-4';
import { ddMultDd as ddMultDd_ } from './double-double/binary/dd-mult-dd';
import { ddDivDouble as ddDivDouble_ } from './double-mixed-double-double/dd-div-double';
import { ddDivDd as ddDivDd_ } from './double-double/binary/dd-div-dd';
import { ddNegativeOf as ddNegativeOf_ } from './double-double/unary/dd-negative-of';
import { ddSign as ddSign_ } from './double-double/unary/dd-sign';
import { fastTwoDiff as fastTwoDiff_ } from './basic/fast-two-diff';
import { fastTwoSum as fastTwoSum_ } from './basic/fast-two-sum';
import { split as split_ } from './basic/split';
import { twoDiff as twoDiff_ } from './basic/two-diff';
import { twoProduct as twoProduct_ } from './basic/two-product';
import { doubleDivDouble as doubleDivDouble_ } from './double-mixed-double-double/double-div-double';
import { twoSum as twoSum_ } from './basic/two-sum';
import { reduceSignificand as reduceSignificand_ } from './basic/reduce-significand';
import { parseDouble as parseDouble_, parseDoubleDetailed as parseDoubleDetailed_ } from './double-representation/parse-double';
import { isBitAligned as isBitAligned_ } from './double-representation/is-bit-aligned';
import { msbExponent as msbExponent_ } from './double-representation/msb-exponent';
import { lsbExponent as lsbExponent_ } from './double-representation/lsb-exponent';
import { bitLength as bitLength_ } from './double-representation/bit-length';
import { exponent as exponent_ } from './double-representation/exponent';
import { significand as significand_ } from './double-representation/significand';
import { doubleToBinaryString as doubleToBinaryString_ } from './double-representation/double-to-binary-string';
import { doubleToOctets as doubleToOctets_ } from './double-representation/double-to-octets';
import { getHighestSetBit as getHighestSetBit_, getLowestSetBit as getLowestSetBit_ } from './double-representation/get-max-set-bit';
import { ddDivDdWithError as ddDivDdWithError_ } from './double-double-with-error/dd-div-dd-with-error';
import { divWithErr as divWithErr_ } from './double-with-err/div-with-err';
const ddMultDouble2 = ddMultDouble2_;
const parseDoubleDetailed = parseDoubleDetailed_;
const getLowestSetBit = getLowestSetBit_;
const ddMin = ddMin_;
const ddMax = ddMax_;
const ddSqrt = ddSqrt_;
const doubleSqrt = doubleSqrt_;
const sqrtWithErr = sqrtWithErr_;
const ddAbs = ddAbs_;
const ddAddDouble = ddAddDouble_;
const ddAddDd = ddAddDd_;
const ddProduct = ddProduct_;
const ddSum = ddSum_;
const ddCompare = ddCompare_;
const ddDiffDd = ddDiffDd_;
const ddMultDouble1 = ddMultDouble1_;
const ddMultBy2 = ddMultBy2_;
const ddMultBy4 = ddMultBy4_;
const ddDivBy2 = ddDivBy2_;
const ddMultByNeg2 = ddMultByNeg2_;
const ddMultByNeg4 = ddMultByNeg4_;
const ddMultDd = ddMultDd_;
const ddDivDouble = ddDivDouble_;
const ddDivDd = ddDivDd_;
const ddNegativeOf = ddNegativeOf_;
const ddSign = ddSign_;
const fastTwoDiff = fastTwoDiff_;
const fastTwoSum = fastTwoSum_;
const split = split_;
const twoDiff = twoDiff_;
const twoProduct = twoProduct_;
const doubleDivDouble = doubleDivDouble_;
const twoSum = twoSum_;
const reduceSignificand = reduceSignificand_;
const parseDouble = parseDouble_;
const isBitAligned = isBitAligned_;
const msbExponent = msbExponent_;
const lsbExponent = lsbExponent_;
const bitLength = bitLength_;
const exponent = exponent_;
const significand = significand_;
const doubleToBinaryString = doubleToBinaryString_;
const doubleToOctets = doubleToOctets_;
const getHighestSetBit = getHighestSetBit_;
const ddDivDdWithError = ddDivDdWithError_;
const divWithErr = divWithErr_;
const operators = {
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
    significand
};
export { operators };
export { 
//---- basic ----//
fastTwoDiff, fastTwoSum, split, twoDiff, twoProduct, doubleDivDouble, twoSum, reduceSignificand, 
//---- double-double precision ----//
doubleSqrt, ddSqrt, ddAbs, ddAddDouble, ddAddDd, ddProduct, ddSum, ddCompare, ddDiffDd, ddMultDouble1, ddMultDouble2, ddMultDd, ddDivDouble, ddDivDd, ddNegativeOf, ddSign, ddMultBy2, ddMultBy4, ddDivBy2, ddMultByNeg2, ddMultByNeg4, ddMin, ddMax, 
//---- double-double precision error propagation - with error bound on input parameters
ddDivDdWithError, 
//---- double precision error propagation - with error bound on input parameters
divWithErr, sqrtWithErr, 
//---- double floating point representation ----//
parseDouble, parseDoubleDetailed, isBitAligned, msbExponent, lsbExponent, bitLength, doubleToBinaryString, doubleToOctets, getHighestSetBit, getLowestSetBit, exponent, significand };
//# sourceMappingURL=index.js.map