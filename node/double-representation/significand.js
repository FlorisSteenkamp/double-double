import { parseDouble } from "./parse-double.js";
/**
 * Return the significand of the given double with the hidden bit added (in case
 * a is not subnormal or 0, etc.)
 *
 * @param a a double precision floating point number
 */
function significand(a) {
    return parseDouble(a).significand;
}
export { significand };
//# sourceMappingURL=significand.js.map