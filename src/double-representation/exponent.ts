
import { parseDouble } from './parse-double';


/**
 * Returns the normalized exponent of the given number.
 * @param a A double
 */
function exponent(a: number) {
    return parseDouble(a).exponent;
}


export { exponent }
