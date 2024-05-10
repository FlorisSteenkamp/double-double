import { ddAddDd } from '../binary/dd-add-dd.js';
import { ddDivDouble } from '../../double-mixed-double-double/dd-div-double.js';
import { PIDd } from '../../constants.js';
import { ddSin } from './dd-sin.js';


// See https://gist.github.com/publik-void/067f7f2fef32dbe5c27d6e215f824c91#sin-abs-error-minimized-degree-33

// Maximum relative error: 1.64002557798425265331386526431095701e-39
// Maximum absolute error: 7.80601195686311420504782780641951757e-41

const PIDd_2 = ddDivDouble(PIDd,2);


/**
 * Returns the cosine of x.
 *
 * @param θ a double-double precision floating point number
 * 
 * @example
 * ```
 * import { PIDd } from 'double-double';
 * import { ddDivDouble } from 'double-double';
 * 
 * ddCos(ddDivDouble(PIDd,6));  //=> [5.017542110902477e-17, 0.8660254037844386]
 * ```
 */
function ddCos(θ: number[]) {
    const x_ = ddAddDd(θ, PIDd_2);

    return ddSin(x_);
}


export { ddCos }
