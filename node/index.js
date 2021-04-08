"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.significand = exports.exponent = exports.getLowestSetBit = exports.getHighestSetBit = exports.doubleToOctets = exports.doubleToBinaryString = exports.bitLength = exports.lsbExponent = exports.msbExponent = exports.isBitAligned = exports.parseDoubleDetailed = exports.parseDouble = exports.sqrtWithErr = exports.divWithErr = exports.ddDivDdWithError = exports.ddMax = exports.ddMin = exports.ddMultByNeg4 = exports.ddMultByNeg2 = exports.ddDivBy2 = exports.ddMultBy4 = exports.ddMultBy2 = exports.ddSign = exports.ddNegativeOf = exports.ddDivDd = exports.ddDivDouble = exports.ddMultDd = exports.ddMultDouble2 = exports.ddMultDouble1 = exports.ddDiffDd = exports.ddCompare = exports.ddSum = exports.ddProduct = exports.ddAddDd = exports.ddAddDouble = exports.ddAbs = exports.ddSqrt = exports.doubleSqrt = exports.reduceSignificand = exports.twoSum = exports.doubleDivDouble = exports.twoProduct = exports.twoDiff = exports.split = exports.fastTwoSum = exports.fastTwoDiff = exports.operators = void 0;
const dd_min_1 = require("./double-double/binary/dd-min");
const dd_max_1 = require("./double-double/binary/dd-max");
const dd_sqrt_1 = require("./double-double/unary/dd-sqrt");
const double_sqrt_1 = require("./double-mixed-double-double/double-sqrt");
const sqrt_with_err_1 = require("./double-with-err/sqrt-with-err");
const dd_abs_1 = require("./double-double/unary/dd-abs");
const dd_add_double_1 = require("./double-mixed-double-double/dd-add-double");
const dd_add_dd_1 = require("./double-double/binary/dd-add-dd");
const dd_product_1 = require("./double-double/multi/dd-product");
const dd_sum_1 = require("./double-double/multi/dd-sum");
const dd_compare_1 = require("./double-double/binary/dd-compare");
const dd_diff_dd_1 = require("./double-double/binary/dd-diff-dd");
const dd_mult_double_1 = require("./double-mixed-double-double/dd-mult-double");
const dd_mult_by_2_1 = require("./double-double/unary/dd-mult-by-2");
const dd_mult_by_4_1 = require("./double-double/unary/dd-mult-by-4");
const dd_div_by_2_1 = require("./double-double/unary/dd-div-by-2");
const dd_mult_by_neg_2_1 = require("./double-double/unary/dd-mult-by-neg-2");
const dd_mult_by_neg_4_1 = require("./double-double/unary/dd-mult-by-neg-4");
const dd_mult_dd_1 = require("./double-double/binary/dd-mult-dd");
const dd_div_double_1 = require("./double-mixed-double-double/dd-div-double");
const dd_div_dd_1 = require("./double-double/binary/dd-div-dd");
const dd_negative_of_1 = require("./double-double/unary/dd-negative-of");
const dd_sign_1 = require("./double-double/unary/dd-sign");
const fast_two_diff_1 = require("./basic/fast-two-diff");
const fast_two_sum_1 = require("./basic/fast-two-sum");
const split_1 = require("./basic/split");
const two_diff_1 = require("./basic/two-diff");
const two_product_1 = require("./basic/two-product");
const double_div_double_1 = require("./double-mixed-double-double/double-div-double");
const two_sum_1 = require("./basic/two-sum");
const reduce_significand_1 = require("./basic/reduce-significand");
const parse_double_1 = require("./double-representation/parse-double");
const is_bit_aligned_1 = require("./double-representation/is-bit-aligned");
const msb_exponent_1 = require("./double-representation/msb-exponent");
const lsb_exponent_1 = require("./double-representation/lsb-exponent");
const bit_length_1 = require("./double-representation/bit-length");
const exponent_1 = require("./double-representation/exponent");
const significand_1 = require("./double-representation/significand");
const double_to_binary_string_1 = require("./double-representation/double-to-binary-string");
const double_to_octets_1 = require("./double-representation/double-to-octets");
const get_max_set_bit_1 = require("./double-representation/get-max-set-bit");
const dd_div_dd_with_error_1 = require("./double-double-with-error/dd-div-dd-with-error");
const div_with_err_1 = require("./double-with-err/div-with-err");
const ddMultDouble2 = dd_mult_double_1.ddMultDouble2;
exports.ddMultDouble2 = ddMultDouble2;
const parseDoubleDetailed = parse_double_1.parseDoubleDetailed;
exports.parseDoubleDetailed = parseDoubleDetailed;
const getLowestSetBit = get_max_set_bit_1.getLowestSetBit;
exports.getLowestSetBit = getLowestSetBit;
const ddMin = dd_min_1.ddMin;
exports.ddMin = ddMin;
const ddMax = dd_max_1.ddMax;
exports.ddMax = ddMax;
const ddSqrt = dd_sqrt_1.ddSqrt;
exports.ddSqrt = ddSqrt;
const doubleSqrt = double_sqrt_1.doubleSqrt;
exports.doubleSqrt = doubleSqrt;
const sqrtWithErr = sqrt_with_err_1.sqrtWithErr;
exports.sqrtWithErr = sqrtWithErr;
const ddAbs = dd_abs_1.ddAbs;
exports.ddAbs = ddAbs;
const ddAddDouble = dd_add_double_1.ddAddDouble;
exports.ddAddDouble = ddAddDouble;
const ddAddDd = dd_add_dd_1.ddAddDd;
exports.ddAddDd = ddAddDd;
const ddProduct = dd_product_1.ddProduct;
exports.ddProduct = ddProduct;
const ddSum = dd_sum_1.ddSum;
exports.ddSum = ddSum;
const ddCompare = dd_compare_1.ddCompare;
exports.ddCompare = ddCompare;
const ddDiffDd = dd_diff_dd_1.ddDiffDd;
exports.ddDiffDd = ddDiffDd;
const ddMultDouble1 = dd_mult_double_1.ddMultDouble1;
exports.ddMultDouble1 = ddMultDouble1;
const ddMultBy2 = dd_mult_by_2_1.ddMultBy2;
exports.ddMultBy2 = ddMultBy2;
const ddMultBy4 = dd_mult_by_4_1.ddMultBy4;
exports.ddMultBy4 = ddMultBy4;
const ddDivBy2 = dd_div_by_2_1.ddDivBy2;
exports.ddDivBy2 = ddDivBy2;
const ddMultByNeg2 = dd_mult_by_neg_2_1.ddMultByNeg2;
exports.ddMultByNeg2 = ddMultByNeg2;
const ddMultByNeg4 = dd_mult_by_neg_4_1.ddMultByNeg4;
exports.ddMultByNeg4 = ddMultByNeg4;
const ddMultDd = dd_mult_dd_1.ddMultDd;
exports.ddMultDd = ddMultDd;
const ddDivDouble = dd_div_double_1.ddDivDouble;
exports.ddDivDouble = ddDivDouble;
const ddDivDd = dd_div_dd_1.ddDivDd;
exports.ddDivDd = ddDivDd;
const ddNegativeOf = dd_negative_of_1.ddNegativeOf;
exports.ddNegativeOf = ddNegativeOf;
const ddSign = dd_sign_1.ddSign;
exports.ddSign = ddSign;
const fastTwoDiff = fast_two_diff_1.fastTwoDiff;
exports.fastTwoDiff = fastTwoDiff;
const fastTwoSum = fast_two_sum_1.fastTwoSum;
exports.fastTwoSum = fastTwoSum;
const split = split_1.split;
exports.split = split;
const twoDiff = two_diff_1.twoDiff;
exports.twoDiff = twoDiff;
const twoProduct = two_product_1.twoProduct;
exports.twoProduct = twoProduct;
const doubleDivDouble = double_div_double_1.doubleDivDouble;
exports.doubleDivDouble = doubleDivDouble;
const twoSum = two_sum_1.twoSum;
exports.twoSum = twoSum;
const reduceSignificand = reduce_significand_1.reduceSignificand;
exports.reduceSignificand = reduceSignificand;
const parseDouble = parse_double_1.parseDouble;
exports.parseDouble = parseDouble;
const isBitAligned = is_bit_aligned_1.isBitAligned;
exports.isBitAligned = isBitAligned;
const msbExponent = msb_exponent_1.msbExponent;
exports.msbExponent = msbExponent;
const lsbExponent = lsb_exponent_1.lsbExponent;
exports.lsbExponent = lsbExponent;
const bitLength = bit_length_1.bitLength;
exports.bitLength = bitLength;
const exponent = exponent_1.exponent;
exports.exponent = exponent;
const significand = significand_1.significand;
exports.significand = significand;
const doubleToBinaryString = double_to_binary_string_1.doubleToBinaryString;
exports.doubleToBinaryString = doubleToBinaryString;
const doubleToOctets = double_to_octets_1.doubleToOctets;
exports.doubleToOctets = doubleToOctets;
const getHighestSetBit = get_max_set_bit_1.getHighestSetBit;
exports.getHighestSetBit = getHighestSetBit;
const ddDivDdWithError = dd_div_dd_with_error_1.ddDivDdWithError;
exports.ddDivDdWithError = ddDivDdWithError;
const divWithErr = div_with_err_1.divWithErr;
exports.divWithErr = divWithErr;
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
exports.operators = operators;
//# sourceMappingURL=index.js.map