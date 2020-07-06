
/**
 * Returns the result of adding two double-double-precision floating point 
 * numbers. 
 * 
 * * relative error bound: 3u^2 + 13u^3, i.e. fl(a+b) = (a+b)(1+ϵ), 
 * where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON 
 * * the error bound is not sharp - the worst case that could be found by the 
 * authors were 2.25u^2
 * 
 * ALGORITHM 6 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 */
function ddAddDd([xl,xh]: number[], [yl,yh]: number[]) {
    //let [sl,sh] = twoSum(xh,yh);
    let sh = xh + yh; let _1 = sh - xh; let sl = (xh - (sh - _1)) + (yh - _1);
    //let [tl,th] = twoSum(xl,yl);
    let th = xl + yl; let _2 = th - xl; let tl = (xl - (th - _2)) + (yl - _2);
    let c = sl + th;
    //let [vl,vh] = fastTwoSum(sh,c)
    let vh = sh + c; let vl = c - (vh - sh);
    let w = tl + vl
    //let [zl,zh] = fastTwoSum(vh,w)
    let zh = vh + w; let zl = w - (zh - vh); 

    return [zl,zh];
}


export { ddAddDd }
