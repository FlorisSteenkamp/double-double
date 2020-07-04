
import { twoProduct } from "../basic/two-product";
import { fastTwoSum } from "../basic/fast-two-sum";


/**
 * Returns the product of a double-double-precision floating point number and a 
 * double.
 * 
 * * slower than ALGORITHM 8 (one call to fastTwoSum more) but about 2x more
 * accurate
 * * relative error bound: 1.5u^2 + 4u^3, i.e. fl(a+b) = (a+b)(1+ϵ), 
 * where ϵ <= 1.5u^2 + 4u^3, u = 0.5 * Number.EPSILON 
 * * the bound is very sharp
 * * probably prefer `ddMultDouble2` due to extra speed
 * 
 * * ALGORITHM 7 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param y a double
 * @param xl low order double (of x in x*y)
 * @param xh high order double (of x in x*y)
 */
function ddMultDouble1(y: number, [xl,xh]: number[]): number[] {
    let [cl1,ch] = twoProduct(xh,y)
    let cl2 = xl*y;
    let [tl1,th] = fastTwoSum(ch,cl2);
    let tl2 = tl1 + cl1;
    let [zl, zh] = fastTwoSum(th,tl2)

    return [zl,zh];
}


/**
 * Returns the product of a double-double-precision floating point number and a double.
 * 
 * * faster than ALGORITHM 7 (one call to fastTwoSum less) but about 2x less 
 * accurate
 * * relative error bound: 3u^2, i.e. fl(a*b) = (a*b)(1+ϵ), 
 * where ϵ <= 3u^2, u = 0.5 * Number.EPSILON 
 * * the bound is sharp
 * * probably prefer this algorithm due to extra speed
 * 
 * * ALGORITHM 8 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param y a double
 * @param xl low order double (of x in x*y)
 * @param xh high order double (of x in x*y)
 */
function ddMultDouble2(y: number, [xl,xh]: number[]): number[] {
    let [cl1,ch] = twoProduct(xh,y)
    let cl2 = xl*y;
    let cl3 = cl1 + cl2;

    return fastTwoSum(ch,cl3);
}


export { ddMultDouble1, ddMultDouble2 }
