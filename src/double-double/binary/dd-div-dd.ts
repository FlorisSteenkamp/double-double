
import { ddMultDouble1 } from "../../double-mixed-double-double/dd-mult-double";


/**
 * Returns the result of dividing two double-double-precision floating point 
 * numbers, i.e. returns x/y.
 * 
 * * relative error bound: 15u^2 + 56u^3, i.e. fl(a/b) = (a/b)(1+ϵ), 
 * where ϵ <= 15u^2 + 56u^3, u = 0.5 * Number.EPSILON 
 * * the largest error found was 8.465u^2
 * 
 * * ALGORITHM 17 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddDivDd(x: number[], y: number[]): number[] {
    const xl = x[0];
    const xh = x[1];
    const yl = y[0];
    const yh = y[1];

    const th = xh/yh;
    // approximation to th*(yh + yl) using Algorithm 7
    const [rl,rh] = ddMultDouble1(th,[yl,yh]);  
    const πh = xh - rh;  // exact operation
    const δl = xl - rl;
    const δ = πh + δl;
    const tl = δ/yh;
    
    //return fastTwoSum(th,tl);
    const xx = th + tl;
    return [tl - (xx - th), xx];
}


export { ddDivDd }
