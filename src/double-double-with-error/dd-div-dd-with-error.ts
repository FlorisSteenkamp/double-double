
import { ddDivDd } from "../double-double/binary/dd-div-dd";


const eps = Number.EPSILON;
const u = eps / 2;
const uu = u*u;


/**
 * Returns the result of dividing two double-double-precision floating point 
 * numbers together with an absolute error bound where nE and dE are absolute 
 * error bounds on the *input* values.
 * 
 * @param numer numerator - a double-double-precision float
 * @param denom denominator - a double-double-precision float
 * @param nE absolute value error bound in numerator
 * @param dE absolute value error bound in denominator
 */
function ddDivDdWithError(
        numer: number[], 
        denom: number[], 
        nE: number, 
        dE: number) {

    const n = numer[0];
    const N = numer[1];
    const d = denom[0];
    const D = denom[1];

    // estimate the result of the division
    const est = ddDivDd(numer, denom);

    const _n = Math.abs(n+N);  // absolute value of estimate of n accurate to within 1/2 ulp
    const _d = Math.abs(d+D);  // absolute value of estimate of d accurate to within 1/2 ulp
    const δd = u*_d;  // the max error in the rounding to _d
  
    // if the error in the denominator is too high the error can be 
    // arbitrarily high
    const minD = _d - δd - dE;
    // maxErr is only valid if minD > 0
    if (minD <= 0) { 
        // the error can be arbitrarily high; est is mostly irrelevant
        return {est, err: Number.POSITIVE_INFINITY}; 
    }

    const err = ((_d*nE + _n*dE) / minD**2) + 9*uu*Math.abs(_n/_d);

    return { est, err };
}


export { ddDivDdWithError }
