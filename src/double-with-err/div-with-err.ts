
const abs = Math.abs;
const u = Number.EPSILON / 2;


/**
 * Returns the result of dividing two double floating point numbers 
 * together with an absolute error bound where nE and dE are absolute error 
 * bounds on the input values.
 * @param n numerator
 * @param d denominator
 * @param nE absolute value error bound in numerator
 * @param dE absolute value error bound in denominator
 */
function divWithErr(
        n: number, 
        d: number,  
        nE: number, 
        dE: number) {

    // estimate the result of the division
    let est = n/d;

    let _n = abs(n);
    let _d = abs(d);

    // if the error in the denominator is too high the error can be 
    // arbitrarily high
    let minD = _d - dE;
    // maxErr is only valid if minD > 0
    if (minD <= 0) { 
        // the error can be arbitrarily high; est is mostly irrelevant
        return {est, err: Number.POSITIVE_INFINITY}; 
    }

    let err = ((_d*nE + _n*dE) / minD**2) + u*abs(_n/_d);

    return { est, err };

}


export { divWithErr }
