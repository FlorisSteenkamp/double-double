
import { parseDouble } from "./parse-double";


/**
 * Return the significand of the given double with the hidden bit added (in case
 * a is not subnormal or 0, etc.)
 * @param a A double
 */
function significand(a: number) {
    return parseDouble(a).significand;
}


export { significand }
