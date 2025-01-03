/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  eZ: () => (/* reexport */ PIDd),
  ao: () => (/* reexport */ bitLength),
  NN: () => (/* reexport */ ddAbs),
  ei: () => (/* reexport */ ddAddDd),
  zR: () => (/* reexport */ ddAddDouble),
  e0: () => (/* reexport */ ddCompare),
  QV: () => (/* reexport */ ddCos),
  w0: () => (/* reexport */ ddDiffDd),
  PA: () => (/* reexport */ ddDiffDouble),
  vx: () => (/* reexport */ ddDivBy2),
  A5: () => (/* reexport */ ddDivDd),
  q$: () => (/* reexport */ ddDivDdWithError),
  pW: () => (/* reexport */ ddDivDouble),
  rC: () => (/* reexport */ ddEq),
  SH: () => (/* reexport */ ddGt),
  Tn: () => (/* reexport */ ddGte),
  jL: () => (/* reexport */ ddLt),
  kT: () => (/* reexport */ ddLte),
  zZ: () => (/* reexport */ ddMax),
  Rp: () => (/* reexport */ ddMin),
  IH: () => (/* reexport */ ddMultBy2),
  Is: () => (/* reexport */ ddMultBy4),
  Em: () => (/* reexport */ ddMultByNeg2),
  Sw: () => (/* reexport */ ddMultByNeg4),
  tp: () => (/* reexport */ ddMultDd),
  Lz: () => (/* reexport */ ddMultDouble1),
  QP: () => (/* reexport */ ddMultDouble2),
  Vd: () => (/* reexport */ ddNegativeOf),
  Kq: () => (/* reexport */ ddProduct),
  cV: () => (/* reexport */ ddSign),
  Rc: () => (/* reexport */ ddSin),
  VL: () => (/* reexport */ ddSqrt),
  K_: () => (/* reexport */ ddSum),
  Vx: () => (/* reexport */ ddToStr),
  P_: () => (/* reexport */ divWithErr),
  Mw: () => (/* reexport */ doubleDivDouble),
  O$: () => (/* reexport */ doubleSqrt),
  dC: () => (/* reexport */ doubleToBinaryString),
  T7: () => (/* reexport */ doubleToOctets),
  UF: () => (/* reexport */ eDd),
  wO: () => (/* reexport */ eulerDd),
  g6: () => (/* reexport */ exponent),
  gD: () => (/* reexport */ fastTwoDiff),
  uJ: () => (/* reexport */ fastTwoSum),
  QK: () => (/* reexport */ getHighestSetBit),
  aX: () => (/* reexport */ getLowestSetBit),
  O2: () => (/* reexport */ isBitAligned),
  v4: () => (/* reexport */ ln2Dd),
  pE: () => (/* reexport */ lsbExponent),
  Ei: () => (/* reexport */ msbExponent),
  bt: () => (/* reexport */ parseDouble),
  $n: () => (/* reexport */ parseDoubleDetailed),
  K1: () => (/* reexport */ reduceSignificand),
  uI: () => (/* reexport */ significand),
  lD: () => (/* reexport */ split),
  oi: () => (/* reexport */ sqrtWithErr),
  DL: () => (/* reexport */ strToDd),
  QC: () => (/* reexport */ twoDiff),
  gB: () => (/* reexport */ twoProduct),
  S4: () => (/* reexport */ twoSum)
});

;// ./src/double-double/binary/dd-diff-dd.ts
/**
 * Returns the result of subtracting the second given double-double-precision
 * floating point number from the first.
 *
 * * relative error bound: 3u^2 + 13u^3, i.e. fl(a-b) = (a-b)(1+ϵ),
 * where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
 * * the error bound is not sharp - the worst case that could be found by the
 * authors were 2.25u^2
 *
 * ALGORITHM 6 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddDiffDd(x, y) {
    const xl = x[0];
    const xh = x[1];
    const yl = y[0];
    const yh = y[1];
    //const [sl,sh] = twoSum(xh,yh);
    const sh = xh - yh;
    const _1 = sh - xh;
    const sl = (xh - (sh - _1)) + (-yh - _1);
    //const [tl,th] = twoSum(xl,yl);
    const th = xl - yl;
    const _2 = th - xl;
    const tl = (xl - (th - _2)) + (-yl - _2);
    const c = sl + th;
    //const [vl,vh] = fastTwoSum(sh,c)
    const vh = sh + c;
    const vl = c - (vh - sh);
    const w = tl + vl;
    //const [zl,zh] = fastTwoSum(vh,w)
    const zh = vh + w;
    const zl = w - (zh - vh);
    return [zl, zh];
}


;// ./src/double-double/binary/dd-min.ts

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
/** @internal */
const diff = ddDiffDd;
/**
 * Returns the minimum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddMin(a, b) {
    const res = diff(a, b)[1];
    return res > 0 ? b : a;
}


;// ./src/double-double/binary/dd-max.ts

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
/** @internal */
const dd_max_diff = ddDiffDd;
/**
 * Returns the maximum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */
function ddMax(a, b) {
    const res = dd_max_diff(a, b)[1];
    return res > 0 ? a : b;
}


;// ./src/double-double/unary/dd-sqrt.ts
/** @internal */
const f = 134217729; // 2**27 + 1;
// Taken from https://github.com/munrocket/double.js/blob/master/src/double.ts
// Unfortunately no error bound given
/**
 * Returns the square root of a double-double as a double-double.
 * * no error bound is returned
 *
 * @param x a double-double precision floating point number
 */
// TODO - calculate an error bound and add to function description
function ddSqrt(x) {
    const xl = x[0];
    const xh = x[1];
    if (xh === 0) {
        return [0, 0];
    }
    const s = Math.sqrt(xh);
    //const [tl,th] = twoSquare(s);
    const th = s * s;
    const c = f * s;
    const ah = c - (c - s);
    const al = s - ah;
    const tl = (al * al) - ((th - (ah * ah)) - 2 * (ah * al));
    const e = (xh - th - tl + xl) * 0.5 / s;
    return [e - ((s + e) - s), s + e];
}


;// ./src/double-mixed-double-double/double-sqrt.ts
/** @internal */
const double_sqrt_f = 134217729; // 2**27 + 1;
// Taken from https://github.com/munrocket/double.js/blob/master/src/double.ts
// Unfortunately no error bound given
/**
 * Returns the square root of a double as a double-double.
 * * no error bound is returned
 */
// TODO - calculate an error bound and add to function description
function doubleSqrt(x) {
    if (x === 0) {
        return [0, 0];
    }
    const s = Math.sqrt(x);
    //const [tl,th] = twoSquare(s);
    const th = s * s;
    const c = double_sqrt_f * s;
    const ah = c - (c - s);
    const al = s - ah;
    const tl = (al * al) - ((th - (ah * ah)) - 2 * (ah * al));
    const e = (x - th - tl) * 0.5 / s;
    x = s + e;
    const xl = e - (x - s);
    return [xl, x];
}


;// ./src/double-with-err/sqrt-with-err.ts
/** @internal */
const eps = Number.EPSILON;
/**
 * Returns the result of the square root of a double floating point number
 * together with an absolute error bound where x_ is an absolute error
 * bound on the input value.
 * * see also "A Reduced Product of Absolute and Relative Error Bounds for Floating-point Analysis"
 * by Maxime Jacquemin, Sylvie Putot, and Franck Vedrine
 * @param x numerator
 * @param x_ absolute value error bound in numerator
 */
function sqrtWithErr(x, x_) {
    // Note: it is assumed x + x_ >= 0, else the error in x_ was wrong in the
    // first place (since we can't have a negative input to the square root)
    // estimate the result of the square root
    if (x - x_ <= 0) {
        const est = x > 0 ? Math.sqrt(x) : 0;
        return {
            est,
            err: Math.max(Math.sqrt(x + x_) - est, est)
        };
    }
    const est = Math.sqrt(x);
    const minSqrt = Math.sqrt(x - x_);
    const maxSqrt = Math.sqrt(x + x_);
    const err = Math.max(Math.abs(minSqrt - est), Math.abs(maxSqrt - est));
    //err += eps*abs(est + err);
    //err = eps*abs(est + err);
    // approx relative input error
    //const rel = x_/abs(x);
    // propogated error bound
    //const err = est*(Math.sqrt(1 + rel) - 1) + u*abs(est);
    return { est, err };
}


;// ./src/double-double/unary/dd-abs.ts
/**
 * Returns the absolute value of the given double-double precision floating
 * point number.
 * @param f a double-double precision floating point number
 */
function ddAbs(f) {
    const Q = f[1];
    return (Q < 0) ? [-f[0], -Q] : f;
}


;// ./src/double-mixed-double-double/dd-add-double.ts
/**
 * Returns the result of adding a double to a double-double precision floating
 * point number.
 *
 * * relative error bound: 2u^2, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 2u^2, u = 0.5 * Number.EPSILON
 * * the error bound is sharp
 *
 * ALGORITHM 4 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y a double precision floating point number
 */
function ddAddDouble(x, y) {
    const xl = x[0];
    const xh = x[1];
    //const [sl,sh] = twoSum(xh, y);
    const sh = xh + y;
    const c = sh - xh;
    const sl = (xh - (sh - c)) + (y - c);
    const v = xl + sl;
    //const [zl,zh] = fastTwoSum(sh,v);
    const zh = sh + v;
    const zl = v - (zh - sh);
    return [zl, zh];
}


;// ./src/double-double/binary/dd-add-dd.ts
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
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddAddDd(x, y) {
    const xl = x[0];
    const xh = x[1];
    const yl = y[0];
    const yh = y[1];
    //const [sl,sh] = twoSum(xh,yh);
    const sh = xh + yh;
    const _1 = sh - xh;
    const sl = (xh - (sh - _1)) + (yh - _1);
    //const [tl,th] = twoSum(xl,yl);
    const th = xl + yl;
    const _2 = th - xl;
    const tl = (xl - (th - _2)) + (yl - _2);
    const c = sl + th;
    //const [vl,vh] = fastTwoSum(sh,c)
    const vh = sh + c;
    const vl = c - (vh - sh);
    const w = tl + vl;
    //const [zl,zh] = fastTwoSum(vh,w)
    const zh = vh + w;
    const zl = w - (zh - vh);
    return [zl, zh];
}


;// ./src/double-double/binary/dd-mult-dd.ts
/** @internal */
const dd_mult_dd_f = 2 ** 27 + 1;
/**
 * Returns the product of two double-double-precision floating point numbers.
 *
 * * relative error bound: 7u^2, i.e. fl(a+b) = (a+b)(1+ϵ),
 * where ϵ <= 7u^2, u = 0.5 * Number.EPSILON
 * the error bound is not sharp - the worst case that could be found by the
 * authors were 5u^2
 *
 * * ALGORITHM 10 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddMultDd(x, y) {
    const xh = x[1];
    const yh = y[1];
    //const [cl1,ch] = twoProduct(xh,yh);
    const ch = xh * yh;
    const c = dd_mult_dd_f * xh;
    const ah = c - (c - xh);
    const al = xh - ah;
    const d = dd_mult_dd_f * yh;
    const bh = d - (d - yh);
    const bl = yh - bh;
    const cl1 = (al * bl) - ((ch - (ah * bh)) - (al * bh) - (ah * bl));
    //return fastTwoSum(ch,cl1 + (xh*yl + xl*yh));
    const b = cl1 + (xh * y[0] + x[0] * yh);
    const xx = ch + b;
    return [b - (xx - ch), xx];
}


;// ./src/double-double/multi/dd-product.ts

/**
 * Returns the result of multiplying together an array of double-double-precision
 * floating point numbers naively (i.e. not using pairwise addition to reduce
 * error a bit).
 *
 * * an error bound is given by: (n-1)(1+ϵ),
 * where ϵ <= 7u^2, u = 0.5 * Number.EPSILON
 */
function ddProduct(qs) {
    let q = qs[0];
    for (let i = 1; i < qs.length; i++) {
        q = ddMultDd(q, qs[i]);
    }
    return q;
}


;// ./src/double-double/multi/dd-sum.ts

/**
 * Returns the result of summing an array of double-double-precision floating
 * point numbers naively (i.e. not using pairwise addition to reduce error a bit).
 *
 * * an error bound is given by: (n-1)(1+ϵ),
 * where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
 */
function ddSum(qs) {
    let q = qs[0];
    for (let i = 1; i < qs.length; i++) {
        q = ddAddDd(q, qs[i]);
    }
    return q;
}


;// ./src/double-double/binary/dd-compare.ts
/**
 * Returns 0 if a === b, a +tive value if a > b or a negative value if a < b.
 *
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */
function ddCompare(x, y) {
    //return ddDiffDd(x,y)[1];
    const xl = x[0];
    const xh = x[1];
    const yl = y[0];
    const yh = y[1];
    //const [sl,sh] = twoSum(xh,yh);
    const sh = xh - yh;
    const _1 = sh - xh;
    const sl = (xh - (sh - _1)) + (-yh - _1);
    //const [tl,th] = twoSum(xl,yl);
    const th = xl - yl;
    const _2 = th - xl;
    const tl = (xl - (th - _2)) + (-yl - _2);
    const c = sl + th;
    //const [vl,vh] = fastTwoSum(sh,c)
    const vh = sh + c;
    const vl = c - (vh - sh);
    const w = tl + vl;
    //const [zl,zh] = fastTwoSum(vh,w)
    const zh = vh + w;
    return zh;
}


;// ./src/double-mixed-double-double/dd-mult-double.ts
/** @internal */
const dd_mult_double_f = 134217729; // 2**27 + 1;
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
 * @param x a double-double precision floating point number
 */
function ddMultDouble1(y, x) {
    const xl = x[0];
    const xh = x[1];
    //const [cl1,ch] = twoProduct(xh,y);
    const ch = xh * y;
    const c = dd_mult_double_f * xh;
    const ah = c - (c - xh);
    const al = xh - ah;
    const d = dd_mult_double_f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const cl1 = (al * bl) - ((ch - (ah * bh)) - (al * bh) - (ah * bl));
    const cl2 = xl * y;
    //const [tl1,th] = fastTwoSum(ch,cl2);
    const th = ch + cl2;
    const tl1 = cl2 - (th - ch);
    const tl2 = tl1 + cl1;
    //const [zl,zh] = fastTwoSum(th,tl2);
    const zh = th + tl2;
    const zl = tl2 - (zh - th);
    return [zl, zh];
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
 * @param x a double-double precision floating point number
 */
function ddMultDouble2(y, x) {
    const xl = x[0];
    const xh = x[1];
    //const [cl1,ch] = twoProduct(xh,y);
    const ch = xh * y;
    const c = dd_mult_double_f * xh;
    const ah = c - (c - xh);
    const al = xh - ah;
    const d = dd_mult_double_f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const cl1 = (al * bl) - ((ch - (ah * bh)) - (al * bh) - (ah * bl));
    const cl2 = xl * y;
    const cl3 = cl1 + cl2;
    //return fastTwoSum(ch,cl3);
    const xx = ch + cl3;
    return [cl3 - (xx - ch), xx];
}


;// ./src/double-double/unary/dd-mult-by-2.ts
/**
 * Returns the result of multiplying the given double-double by 2.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultBy2(f) {
    return [2 * f[0], 2 * f[1]];
}


;// ./src/double-double/unary/dd-mult-by-4.ts
/**
 * Returns the result of multiplying the given double-double by 4.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultBy4(f) {
    return [4 * f[0], 4 * f[1]];
}


;// ./src/double-double/unary/dd-div-by-2.ts
/**
 * Returns the result of dividing the given double-double by 2.
 * @param f a double-double precision floating point number
 */
function ddDivBy2(f) {
    return [f[0] / 2, f[1] / 2];
}


;// ./src/double-double/unary/dd-mult-by-neg-2.ts
/**
 * Returns the result of multiplying the given double-double by -2.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultByNeg2(f) {
    return [-2 * f[0], -2 * f[1]];
}


;// ./src/double-double/unary/dd-mult-by-neg-4.ts
/**
 * Returns the result of multiplying the given double-double by -4.
 * * The result is exact
 * @param f a double-double precision floating point number
 */
function ddMultByNeg4(f) {
    return [-4 * f[0], -4 * f[1]];
}


;// ./src/double-mixed-double-double/dd-div-double.ts
/** @internal */
const dd_div_double_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of dividing a double-double-precision floating point
 * number by a double.
 *
 * * relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2,
 * u = 0.5 * Number.EPSILON
 * * the bound is very sharp
 *
 * * ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y the double-precision divisor
 */
function ddDivDouble(x, y) {
    const xl = x[0];
    const xh = x[1];
    const th = xh / y;
    //const [πl,πh] = twoProduct(th,y);
    const πh = th * y;
    const c = dd_div_double_f * th;
    const ah = c - (c - th);
    const al = th - ah;
    const d = dd_div_double_f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const πl = (al * bl) - ((πh - (ah * bh)) - (al * bh) - (ah * bl));
    const δh = xh - πh; // exact operation
    const δt = δh - πl; // exact operation
    const δ = δt + xl;
    const tl = δ / y;
    //return fastTwoSum(th,tl);
    const rl = th + tl;
    return [tl - (rl - th), rl];
}


;// ./src/double-double/binary/dd-div-dd.ts
/** @internal */
const dd_div_dd_f = 134217729; // 2**27 + 1;
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
function ddDivDd(x, y) {
    const xl = x[0];
    const xh = x[1];
    const yl = y[0];
    const yh = y[1];
    const th = xh / yh;
    // approximation to th*(yh + yl) using Algorithm 7
    //const [rl,rh] = ddMultDouble1(th,[yl,yh]);  
    const ch = yh * th;
    const c = dd_div_dd_f * yh;
    const ah = c - (c - yh);
    const al = yh - ah;
    const d = dd_div_dd_f * th;
    const bh = d - (d - th);
    const bl = th - bh;
    const cl1 = (al * bl) - ((ch - (ah * bh)) - (al * bh) - (ah * bl));
    const cl2 = yl * th;
    const th_ = ch + cl2;
    const tl1 = cl2 - (th_ - ch);
    const tl2 = tl1 + cl1;
    const rh = th_ + tl2;
    const rl = tl2 - (rh - th_);
    const πh = xh - rh; // exact operation
    const δl = xl - rl;
    const δ = πh + δl;
    const tl = δ / yh;
    //return fastTwoSum(th,tl);
    const xx = th + tl;
    return [tl - (xx - th), xx];
}


;// ./src/double-double/unary/dd-negative-of.ts
/**
 * Returns the negative of the given double-double precision floating point
 * number.
 * * the result is exact
 * @param f a double-double precision floating point number
 */
function ddNegativeOf(f) {
    return [-f[0], -f[1]];
}


;// ./src/double-double/unary/dd-sign.ts
/**
 * Returns the sign of the given double-double-precision floating point number.
 * * a positive or negative double or zero is returned - not necessarily +1, 0
 * or -1
 * * prefer inlining this - it is really only here for reference
 */
function ddSign(f) {
    return f[1];
}


;// ./src/basic/fast-two-diff.ts
/**
 * Returns the difference and exact error of subtracting two floating point
 * numbers.
 * Uses an EFT (error-free transformation), i.e. `a-b === x+y` exactly.
 * The returned result is a non-overlapping expansion (smallest value first!).
 *
 * * **precondition:** `abs(a) >= abs(b)` - A fast test that can be used is
 * `(a > b) === (a > -b)`
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function fastTwoDiff(a, b) {
    const x = a - b;
    const y = (a - x) - b;
    return [y, x];
}


;// ./src/basic/fast-two-sum.ts
/**
 * Returns the sum and exact error of adding two floating point numbers.
 * Uses an EFT (error-free transformation), i.e. a+b === x+y exactly.
 * The returned sum is a non-overlapping expansion (smallest value first!).
 *
 * Precondition: abs(a) >= abs(b) - A fast test that can be used is
 * (a > b) === (a > -b)
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function fastTwoSum(a, b) {
    const x = a + b;
    return [b - (x - a), x];
}
// inlined
//const R = a + b; const r = b - (R - a); return [r, R];


;// ./src/basic/split.ts
/**
 * === 2^Math.ceil(p/2) + 1 where p is the # of significand bits in a double === 53.
 * @internal
 */
const split_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of splitting a double into 2 26-bit doubles.
 *
 * Theorem 17 (Veltkamp-Dekker): Let a be a p-bit floating-point number, where
 * p >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the
 * following algorithm will produce a (p-s)-bit value a_hi and a
 * nonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and
 * a = a_hi + a_lo.
 *
 * see e.g. [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * @param a A double floating point number
 */
function split(a) {
    const c = split_f * a;
    const a_h = c - (c - a);
    const a_l = a - a_h;
    return [a_h, a_l];
}
// inlined - input a, output a_h, a_l
// const c = f * a; const a_h = c - (c - a); const a_l = a - a_h; return [a_h, a_l];


;// ./src/basic/two-diff.ts
/**
 * Returns the exact result of subtracting b from a.
 *
 * @param a minuend - a double-double precision floating point number
 * @param b subtrahend - a double-double precision floating point number
 */
function twoDiff(a, b) {
    const x = a - b;
    const bvirt = a - x;
    const y = (a - (x + bvirt)) + (bvirt - b);
    return [y, x];
}


;// ./src/basic/two-product.ts
/** @internal */
const two_product_f = 134217729; // 2**27 + 1;
/**
 * Returns the exact result of multiplying two doubles.
 *
 * * the resulting array is the reverse of the standard twoSum in the literature.
 *
 * Theorem 18 (Shewchuk): Let a and b be p-bit floating-point numbers, where
 * p >= 6. Then the following algorithm will produce a nonoverlapping expansion
 * x + y such that ab = x + y, where x is an approximation to ab and y
 * represents the roundoff error in the calculation of x. Furthermore, if
 * round-to-even tiebreaking is used, x and y are non-adjacent.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param a A double
 * @param b Another double
 */
function twoProduct(a, b) {
    const x = a * b;
    //const [ah, al] = split(a);
    const c = two_product_f * a;
    const ah = c - (c - a);
    const al = a - ah;
    //const [bh, bl] = split(b);
    const d = two_product_f * b;
    const bh = d - (d - b);
    const bl = b - bh;
    const y = (al * bl) - ((x - (ah * bh)) - (al * bh) - (ah * bl));
    //const err1 = x - (ah * bh);
    //const err2 = err1 - (al * bh);
    //const err3 = err2 - (ah * bl);
    //const y = (al * bl) - err3;
    return [y, x];
}


;// ./src/double-mixed-double-double/double-div-double.ts
/** @internal */
const double_div_double_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of dividing a double-precision floating point
 * number by a double with the result given as a double-double.
 * This is a slight modification of ddDivDd.
 *
 * * **!! NOT an error-free transformation !!**
 * * relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2,
 * u = 0.5 * Number.EPSILON
 *
 * * ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * (slightly modified)
 * @param x dividend
 * @param y divisor
 */
function doubleDivDouble(x, y) {
    const th = x / y;
    //const [πl,πh] = twoProduct(th,y);
    const πh = th * y;
    const c = double_div_double_f * th;
    const ah = c - (c - th);
    const al = th - ah;
    const d = double_div_double_f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const πl = (al * bl) - ((πh - (ah * bh)) - (al * bh) - (ah * bl));
    const δh = x - πh; // exact operation
    const δt = δh - πl; // exact operation
    const tl = δt / y;
    //return fastTwoSum(th,tl);
    const xx = th + tl;
    return [tl - (xx - th), xx];
}


;// ./src/basic/two-sum.ts
/**
 * Returns the exact result of adding two doubles.
 *
 * * the resulting array is the reverse of the standard twoSum in the literature.
 *
 * Theorem 7 (Knuth): Let a and b be p-bit floating-point numbers. Then the
 * following algorithm will produce a nonoverlapping expansion x + y such that
 * a + b = x + y, where x is an approximation to a + b and y is the roundoff
 * error in the calculation of x.
 *
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 */
function twoSum(a, b) {
    const x = a + b;
    const bv = x - a;
    return [(a - (x - bv)) + (b - bv), x];
}
// inlined
//const R = a + b; const _ = R - a; const r = (a - (R - _)) + (b - _); return [r,R]


;// ./src/basic/reduce-significand.ts
/**
 * Truncates a floating point value's significand and returns the result.
 * Similar to split, but with the ability to specify the number of bits to keep.
 *
 * **Theorem 17 (Veltkamp-Dekker)**: Let a be a p-bit floating-point number, where
 * p >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the
 * following algorithm will produce a (p-s)-bit value a_hi and a
 * nonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and
 * a = a_hi + a_lo.
 *
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 *
 * @param a a double
 * @param bits the number of significand bits to leave intact
 */
function reduceSignificand(a, bits) {
    const s = 53 - bits;
    const f = 2 ** s + 1;
    const c = f * a;
    const r = c - (c - a);
    return r;
}


;// ./src/double-representation/double-to-octets.ts
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)
/**
 * Returns the ieee-574 8 bytes composing the given double, starting from the
 * sign bit and ending in the lsb of the significand.
 * e.g. 123.456 -> [64, 94, 221, 47, 26, 159, 190, 119]
 * @internal
 */
function doubleToOctets(number) {
    const buffer = new ArrayBuffer(8);
    new DataView(buffer).setFloat64(0, number, false);
    return Array.from(new Uint8Array(buffer));
}


;// ./src/double-representation/double-to-binary-string.ts
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)

/** @internal */
function doubleToBinaryString(number) {
    return octetsToBinaryString(doubleToOctets(number));
}
/**
 * @param octets The 8 bytes composing a double (msb first)
 * @internal
 */
function octetsToBinaryString(octets) {
    return octets
        .map(int8ToBinaryString)
        .join('');
}
/**
 * intToBinaryString(8) -> "00001000"
 * @internal
 */
function int8ToBinaryString(i) {
    let iStr = i.toString(2);
    for (; iStr.length < 8; iStr = "0" + iStr)
        ;
    return iStr;
}


;// ./src/double-representation/parse-double.ts
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)


/**
 * Returns the relevant parts of the given IEEE-754 double. The returned
 * exponent has been normalized (i.e. 1023 ha been subtracted) and the
 * significand has the hidden bit added if appropriate.
 * See https://github.com/bartaz/ieee754-visualization
 */
function parseDouble(x) {
    const parts = doubleToOctets(x);
    const p0 = parts[0];
    const p1 = parts[1];
    const sign = p0 >> 7;
    const exponent_ = ((p0 & 0b0111_1111) << 4) + ((p1 & 0b11110000) >> 4);
    //---- Check for negative / positive zero / denormalized numbers.
    const hiddenMsb = exponent_ === 0 ? 0 : 16;
    // Note: exponent === 0 => 0 or denormalized number (a.k.a. subnormal number).
    const exponent = exponent_ === 0
        ? exponent_ - 1022 // Subnormals use a biased exponent of 1 (not 0!)
        : exponent_ - 1023;
    //---- Break up the significand into bytes
    const significand = parts.slice(1);
    significand[0] = (p1 & 0b0000_1111) + hiddenMsb;
    return {
        sign,
        exponent,
        significand
    };
}
/**
 * Returns the relevant parts of the given IEEE-754 double.
 * See https://github.com/bartaz/ieee754-visualization.
 * This is a slower version of parseDouble that gives binary string
 * representations of the components.
 */
function parseDoubleDetailed(x) {
    const str = doubleToBinaryString(x);
    // sign{1} exponent{11} fraction{52} === 64 bits (+1 hidden!)
    const [, sign, exponent, significand] = str.match(/^(.)(.{11})(.{52})$/);
    const exponent_ = parseInt(exponent, 2);
    const hidden = exponent_ === 0 ? "0" : "1";
    return {
        full: sign + exponent + hidden + significand,
        sign,
        exponent,
        hidden,
        significand
    };
}


;// ./src/double-representation/significand.ts

/**
 * Return the significand of the given double with the hidden bit added (in case
 * a is not subnormal or 0, etc.)
 *
 * @param a A double
 */
function significand(a) {
    return parseDouble(a).significand;
}


;// ./src/double-representation/get-max-set-bit.ts

/**
 * Returns the lowest set bit of the given value in [1, (2**31)-1],
 * i.e. from 1 up to 2147483647 else if no bit is set (input === 0) returns
 * NaN, otherwise if the number is out of range returns a non-finite
 * number.
 * See https://stackoverflow.com/a/35190288/2010061
 * @internal
 */
function getLowestSetBit_(a) {
    return Math.log2(a & -a);
}
/**
 * Returns the lowest set bit of the given number's significand (where the lsb
 * is bit 0 and the msb is bit 52). If no bit is set (input === 0 or +-inf or
 * NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function getLowestSetBit(a) {
    if (a === 0 || !Number.isFinite(a)) {
        // There is no lowest set bit
        return NaN;
    }
    // Note: the significand includes the hidden bit!
    const s = significand(a);
    const len = s.length;
    for (let i = len - 1; i >= 0; i--) {
        if (s[i] === 0) {
            continue;
        }
        const l = getLowestSetBit_(s[i]);
        if (Number.isFinite(l)) {
            return (8 * (len - i - 1)) + l;
        }
    }
    return NaN;
}
/**
 * Returns the highest set bit of the given value in [1, 255], i.e. from 1 up
 * to 255. If the input number === 0 returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 * @internal
 */
function getHighestSetBit_(a) {
    return a >= 128 ? 7
        : a >= 64 ? 6
            : a >= 32 ? 5
                : a >= 16 ? 4
                    : a >= 8 ? 3
                        : a >= 4 ? 2
                            : a >= 2 ? 1
                                : a >= 1 ? 0
                                    : NaN;
}
/**
 * Returns the highest set bit of the given double. If no bit is set (input
 * === 0 or +/-inf or NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */
function getHighestSetBit(a) {
    if (a === 0 || !Number.isFinite(a)) {
        // There is no lowest set bit
        return NaN;
    }
    // At this point there must be a highest set bit (always === 52 if the 
    // number is not a subnormal.
    const s = significand(a);
    const len = s.length;
    for (let i = 0; i < len; i++) {
        const l = getHighestSetBit_(s[i]);
        if (Number.isFinite(l)) {
            return (8 * (len - i - 1)) + l;
        }
    }
    return NaN;
}


;// ./src/double-representation/exponent.ts

/**
 * Returns the normalized exponent of the given number.
 * @param a A double
 */
function exponent(a) {
    return parseDouble(a).exponent;
}


;// ./src/double-representation/is-bit-aligned.ts


/**
 * Returns true if the given number is bit-aligned in the sense that its a
 * multiple of a given power of 2, say e, and such that the number, say a,
 * conforms to: a/2^e < 2^(l-e), where l is the max allowed bit length.
 * This essentially means the numbers act somewhat like fixed-point numbers
 * which can drastically speed up some geometric algorithms and also reduce
 * their complexity.
 *
 * Visually:
 * These numbers (a,b and c) are grid aligned with e === 3 and max
 * bitlength === 6:
 *   a -> 00|101100|000
 *   b -> 00|000100|000
 *   c -> 00|110111|000
 * These are not
 *   a -> 01|101100|000
 *   b -> 00|000100|000
 * These are not
 *   a -> 00|101100|000
 *   b -> 00|000100|100
 * These are not
 *   a -> 00|101100|100
 *   b -> 00|000100|100
 * @param as An array of numbers to check
 * @param maxBitLength The max allowed bitlength
 * @param gridSpacingExponent The grid spacing === 1^gridSpacingExponent
 */
function isBitAligned(a, maxBitLength, gridSpacingExponent) {
    if (a === 0) {
        return true;
    }
    const e = exponent(a);
    const maxSetBit = getHighestSetBit(a) - 52 + e;
    const minSetBit = getLowestSetBit(a) - 52 + e;
    const minBitBigEnough = minSetBit >= gridSpacingExponent;
    const maxBitSmallEnough = maxSetBit <= maxBitLength - 1 + gridSpacingExponent;
    return minBitBigEnough && maxBitSmallEnough;
}


;// ./src/double-representation/msb-exponent.ts


/**
 * Returns the true exponent of the msb that is set of the given number or
 * NaN if a === 0 or +-inf or NaN.
 * @param a An array of numbers to check
 */
function msbExponent(a) {
    if (a === 0 || !Number.isFinite(a)) {
        return NaN;
    }
    const e = exponent(a);
    // Will return e for all but subnormal numbers
    return getHighestSetBit(a) - 52 + e;
}


;// ./src/double-representation/lsb-exponent.ts


/**
 * Returns the true exponent of the lsb that is set of the given number or
 * NaN if a === 0 or +-inf or NaN.
 * @param a An array of numbers to check
 */
function lsbExponent(a) {
    if (a === 0 || !Number.isFinite(a)) {
        return NaN;
    }
    const e = exponent(a);
    return getLowestSetBit(a) - 52 + e;
}


;// ./src/double-representation/bit-length.ts

/**
 * Returns the bit-length of the significand of the given number in such a way
 * that trailing zeros are not counted.
 * @param a a double precision floating point number
 */
function bitLength(a) {
    if (a === 0) {
        return 0;
    }
    return getHighestSetBit(a) - getLowestSetBit(a) + 1;
}


;// ./src/double-double-with-error/dd-div-dd-with-error.ts

// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
/** @internal */
const div = ddDivDd;
/** @internal */
const dd_div_dd_with_error_eps = Number.EPSILON;
/** @internal */
const u = dd_div_dd_with_error_eps / 2;
/** @internal */
const uu = u * u;
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
function ddDivDdWithError(numer, denom, nE, dE) {
    const n = numer[0];
    const N = numer[1];
    const d = denom[0];
    const D = denom[1];
    // estimate the result of the division
    const est = div(numer, denom);
    const _n = Math.abs(n + N); // absolute value of estimate of n accurate to within 1/2 ulp
    const _d = Math.abs(d + D); // absolute value of estimate of d accurate to within 1/2 ulp
    const δd = u * _d; // the max error in the rounding to _d
    // if the error in the denominator is too high the error can be 
    // arbitrarily high
    const minD = _d - δd - dE;
    // maxErr is only valid if minD > 0
    if (minD <= 0) {
        // the error can be arbitrarily high; est is mostly irrelevant
        return { est, err: Number.POSITIVE_INFINITY };
    }
    const err = ((_d * nE + _n * dE) / minD ** 2) + 9 * uu * Math.abs(_n / _d);
    return { est, err };
}


;// ./src/double-with-err/div-with-err.ts
/** @internal */
const div_with_err_u = Number.EPSILON / 2;
/**
 * Returns the result of dividing two double floating point numbers
 * together with an absolute error bound where nE and dE are absolute error
 * bounds on the input values.
 * @param n numerator
 * @param d denominator
 * @param nE absolute value error bound in numerator
 * @param dE absolute value error bound in denominator
 */
function divWithErr(n, d, nE, dE) {
    // estimate the result of the division
    const est = n / d;
    const _n = Math.abs(n);
    const _d = Math.abs(d);
    // if the error in the denominator is too high the error can be 
    // arbitrarily high
    const minD = _d - dE;
    // maxErr is only valid if minD > 0
    if (minD <= 0) {
        // the error can be arbitrarily high; est is mostly irrelevant
        return { est, err: Number.POSITIVE_INFINITY };
    }
    const err = ((_d * nE + _n * dE) / minD ** 2) + div_with_err_u * Math.abs(_n / _d);
    return { est, err };
}


;// ./src/str-to-dd/get-zeros-str.ts
/**
 * Returns a string having the given number of zeros.
 *
 * @internal
 */
function getZerosStr(n) {
    return new Array(n + 1).join('0');
}


;// ./src/str-to-dd/mult-str-by-pow-of-10.ts

/**
 * * string must not contain an `'e'`, e.g. `'1e-10'` is not allowed
 *
 * @internal
 */
function multStrByPowOf10(s, pow) {
    if (pow === 0 || Number(s) === 0) {
        return s;
    }
    const negative = s.indexOf('-') !== -1;
    const negativeStr = negative ? '-' : '';
    if (negative) {
        s = s.slice(1);
    }
    if (s.startsWith('+')) {
        s = s.slice(1);
    }
    const idx = s.indexOf('.');
    if (pow > 0) {
        // shift dot right
        if (idx === -1) {
            const zeros = getZerosStr(pow);
            return negativeStr + s + zeros;
        }
        const [bef, aft] = s.split('.'); //?
        if (aft.length < pow) {
            return negativeStr + bef + aft + getZerosStr(pow - aft.length);
        }
        else {
            const aftP1 = aft.substring(0, pow); //?
            const aftP2 = aft.substring(pow);
            return negativeStr + bef + aftP1 + (aftP2 ? '.' + aftP2 : '');
        }
    }
    // shift dot left
    pow = -pow;
    let bef = '';
    let aft = '';
    if (idx === -1) {
        bef = s;
    }
    else {
        [bef, aft] = s.split('.');
    }
    if (bef.length === pow) {
        return negativeStr + '0.' + bef + aft;
    }
    else if (bef.length > pow) {
        const l = bef.length - pow; //?
        const befP1 = bef.substring(0, l); //?
        const befP2 = bef.substring(l); //?
        return negativeStr + befP1 + '.' + befP2 + aft;
    }
    else {
        const l = pow - bef.length; //?
        const zeros = getZerosStr(l) || '0';
        return negativeStr + '0.' + zeros + bef + aft;
    }
}


;// ./src/dd-to-str/dd-to-str.ts

const { floor, max, round, log2, log10, ceil } = Math;
const LOG2_10 = log2(1024) / log10(1024);
/**
 * Converts the given double-double precision value to a string and returns the
 * result.
 *
 * * there will always be enough decimal digits returned but some could be
 * extraneous.
 *
 * @param dd
 */
function ddToStr(dd) {
    let [l, h] = dd;
    let negative = false;
    if (h < 0) {
        h = -h;
        l = -l;
        negative = true;
    }
    if (h === 0) {
        return '0';
    }
    const scale2 = max(0, -floor(log2(h)) + 3 * 53);
    if (scale2 === 0) {
        const llb = BigInt(round(l));
        const hhb = BigInt(round(h));
        const str = (llb + hhb).toString();
        return negative ? '-' + str : str;
    }
    const scale2b = BigInt(scale2);
    const scale10 = ceil(scale2 / LOG2_10);
    const scale10b = BigInt(scale10);
    const ll = l * (2 ** scale2);
    const hh = h * (2 ** scale2);
    const llb = BigInt(round(ll));
    const hhb = BigInt(round(hh));
    const b = (llb + hhb) * (10n ** scale10b);
    const bb = b / (2n ** (scale2b));
    let bStr = bb.toString();
    let str = multStrByPowOf10(bStr, -scale10);
    str = removeExtraneousZeros(str);
    return negative ? '-' + str : str;
}
function removeExtraneousZeros(str) {
    const idx = str.indexOf('.');
    if (idx === -1) {
        return str;
    }
    let i = 0;
    let c = 0;
    while (i < str.length) {
        if (str[str.length - 1 - i] === '0') {
            c++;
        }
        else {
            break;
        }
        i++;
    }
    if (c > 0) {
        str = str.slice(0, str.length - c);
    }
    if (str.endsWith('.')) {
        str = str.slice(0, str.length - 1);
    }
    return str;
}


;// ./src/str-to-dd/get-num-leading-zeros-after-point.ts
/**
 * Returns the number of leading zeros (plus 1) after the decimal point or `0`
 * if the number is >= 1 or equal to zero.
 *
 * * the number string must be positive
 * * the number string must not start with a `+` sign
 * * the number string must must be a simple decimal expansion, e.g. no `e-8`
 * at the end
 *
 * Examples:
 * `getNumLeadingZeros(0.1)    // => 0`
 * `getNumLeadingZeros(0.001)  // => 2`
 * `getNumLeadingZeros(3.001)  // => 0`
 * `getNumLeadingZeros(13)     // => 0`
 * `getNumLeadingZeros(0)      // => 0
 *
 * @param str
 *
 * @internal
 */
function getNumLeadingZerosAfterPoint(str) {
    if (!str.startsWith('0.')) {
        return 0;
    }
    if (Number(str) === 0) {
        return 0;
    }
    let numLeadingZeros = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i + 2] === '0') {
            numLeadingZeros++;
        }
        else {
            break;
        }
    }
    return numLeadingZeros;
}


;// ./src/str-to-dd/set-0-from-to.ts
/**
 *
 * @param str
 * @param from
 * @param to
 *
 * @internal
 */
function set0FromTo(str, from, to) {
    // TODO - this function is currently slow since it replaces one zero at a time.
    const pointAt = str.indexOf('.');
    let i = from + (pointAt !== -1 && pointAt < from ? 1 : 0);
    let j = i;
    to = to || str.length;
    while (i < to) {
        if (str[j] === '.') {
            j++;
            continue;
        }
        str = set0At(str, j);
        i++;
        j++;
    }
    return str;
}
/**
 * @internal
 */
function set0At(str, idx) {
    if (idx > str.length - 1) {
        return str;
    }
    ;
    return str.substring(0, idx) + '0' + str.substring(idx + 1);
}


;// ./src/str-to-dd/num-significant-digits.ts
/**
 * The number of significant digits per nibble.
 *
 * Since we use 3 nibbles there are 3*15 significant decimal figures looked at
 * to convert a string to a double-double.
 */
const d = 15;


;// ./src/str-to-dd/get-parts.ts



/**
 * Returns the following parts of the number string as an object:
 * * `Z`
 * * `seH` -> the exact high part string if interpreted as a real number
 * * `seL` -> the exact low part string if interpreted as a real number
 * * `seC` -> the exact correction part string if interpreted as a real number;
 * this is used for correctly rounding the lsb; interestingly ECMASCRIPT only
 * checks up to 20 significant figures for rounding purposes (we check 45)
 *
 * @param str
 *
 * @internal
 */
function getParts(str) {
    if (str.startsWith('+')) {
        str = str.slice(1);
    }
    let pointAt = str.indexOf('.');
    if (pointAt === -1) {
        str += '.0';
    }
    pointAt = str.indexOf('.');
    const Z = getNumLeadingZerosAfterPoint(str);
    // Lengthen string to `3*d` significant figures
    if (str.length < 3 * d + 1) {
        const zeros = new Array(3 * d + 2 - str.length).join('0');
        str += zeros;
    }
    // Shorten string to `3*d` significant figures
    str = str.slice(0, 3 * d + (pointAt >= 3 * d ? 0 : 1) + Z);
    if (pointAt >= 3 * d) {
        // Take care of numbers > 10**(3*d)
        const zeros = new Array(pointAt - 3 * d + 1).join('0');
        str += zeros;
    }
    let seH = set0FromTo(str, d + Z);
    let seL = set0FromTo(str, 0, d + Z);
    seL = set0FromTo(seL, 2 * d + Z);
    let seC = set0FromTo(str, 0, 2 * d + Z);
    return { Z, seH, seL, seC };
}


;// ./src/str-to-dd/add-1-ulp.ts
const { EPSILON: add_1_ulp_eps } = Number;
const add_1_ulp_u = add_1_ulp_eps / 2;
const es = (add_1_ulp_eps ** 2) / 2;
const ups = add_1_ulp_u + es;
/**
 * Add one unit in the last place (ulp) to the given number.
 *
 * * subnormal numbers (and 0) are returned unaltered
 *
 * @internal
 */
function add1Ulp(n) {
    return n > 0 ? n + n * ups : n - n * ups;
}


;// ./src/str-to-dd/get-num-leading-zeros.ts
/**
 * Returns the number of leading extraneous zeros before the decimal point.
 *
 * @param str
 *
 * @internal
 */
function getNumLeadingZeros(str) {
    if (Number(str) === 0) {
        return 0;
    }
    if (str.startsWith('0.')) {
        return 0;
    }
    let numLeadingZeros = 0;
    let i = 0;
    for (; i < str.length; i++) {
        if (str[i] === '0') {
            numLeadingZeros++;
        }
        else {
            break;
        }
    }
    if (str[i] === '.') {
        return 0;
    }
    return numLeadingZeros;
}


;// ./src/str-to-dd/get-num-leading-zeros-before-point.ts
/**
 * Returns the number of leading zeros before the decimal point.
 *
 * @param str
 *
 * @internal
 */
function getNumLeadingZerosBeforePoint(str) {
    if (str.startsWith('0.')) {
        return 0;
    }
    if (Number(str) === 0) {
        return 0;
    }
    const idx = str.indexOf('.');
    return idx === -1 ? str.length : idx;
}


;// ./src/str-to-dd/extract-exp.ts
function extractExp(s) {
    const idx = s.indexOf('e');
    let exp = 0;
    if (idx !== -1) {
        exp = Number(s.slice(idx + 1));
        s = s.slice(0, idx);
    }
    return { s, exp };
}


;// ./src/str-to-dd/normalize-str.ts




/**
 *
 * @param s
 *
 * @internal
 */
function normalizeStr(s) {
    if (Number(s) === 0) {
        return { str: '0', exp: 0, negative: false };
    }
    const negative = s.startsWith('-');
    if (negative) {
        s = s.slice(1);
    }
    let exp = 0;
    ({ s, exp } = extractExp(s));
    let str;
    const z = getNumLeadingZerosAfterPoint(s);
    if (z > 0) {
        s = s.slice(z + 1);
        str = s[0] + '.' + s.slice(1);
        exp = exp - z;
    }
    else {
        const Z = getNumLeadingZerosBeforePoint(s);
        s = s.split('').filter(s => s !== '.').join('');
        str = s[0] + '.' + s.slice(1);
        exp = exp + Z - 1;
    }
    str = str.slice(0, 3 * d + 1);
    if (str.length < 3 * d + 1) {
        const zeros = new Array(3 * d + 1 - str.length).join('0');
        str += zeros;
    }
    return { str, exp, negative };
}


;// ./src/str-to-dd/get-power-of-10.ts

/**
 *
 * @param a
 * @param b
 *
 * @internal
 */
function ddMultD(a, b) {
    return ddMultDouble1(b, a);
}
/**
 * CACHE[i] == lower part of the double-double representing 10 ** ((i + 1) * 23)
 *
 * @internal
 */
const CACHE = new Float64Array(13);
/**
 * @param exp
 *
 * @internal
 */
function getPowerOf10(exp) {
    // Powers of 10 up to 10**22 can be exactly represented as a double.
    if (exp < 23)
        return [0, 10 ** exp];
    // exponent == 23 * (i + 1) + m
    const m = exp % 23;
    const cp = exp - m;
    const i = cp / 23 - 1;
    // Calculate the lower double of 10 ** (23 * (i + 1)) or read of from CACHE.
    let lo = CACHE[i] || (CACHE[i] = Number(10n ** BigInt(cp) - BigInt(10 ** cp)));
    return ddMultD([lo, 10 ** cp], 10 ** m);
}


;// ./src/str-to-dd/str-to-dd.ts












const { abs } = Math;
// How to print floating-point numbers accurately (behind a paywall)
// https://dl.acm.org/doi/10.1145/989393.989431
// Chromium implementation at https://chromium.googlesource.com/v8/v8/+/refs/heads/main/src/base/numbers/strtod.cc
// that converts a string to a double.
/**
 * Converts the given decimal string to a double-double and returns the result.
 *
 * * accurate to within `1` ulp^2
 *
 * @param str a string to convert to double-double precision
 *
 * Examples:
 * ```
 * strToDd('3.14159265358979323846264338327950')  //=> [1.2246467991473535e-16, 3.141592653589793]
 * strToDd('6.0221408e+23')  //=> [-2097152, 6.0221408e+23]
 * ```
 */
function strToDd(str) {
    const { str: s, exp, negative } = normalizeStr(str);
    if (negative) {
        str = str.slice(1);
    }
    // get exact low, high and correction string parts
    let { Z, seH: eH, seL: eL, seC: eC } = getParts(s);
    // adding 1 ulp ensures the string significant digits are correct up to a point
    const H = add1Ulp(Number(eH));
    const _sHC = H.toFixed(3 * d);
    const sHC = set0FromTo(_sHC, 0, d + Z);
    // get exact high correction low and high string parts
    let { Z: Z2, seH: seHCH, seL: seHCL } = getParts(sHC);
    const HCH = add1Ulp(Number(seHCH));
    const sHCH = HCH.toFixed(3 * d);
    const sHCL = set0FromTo(sHCH, Z2, d + Z2 + 1);
    // get exact low correction string part
    let L = add1Ulp(Number(eL));
    const lZ1 = getNumLeadingZeros(eL);
    let sLC = L.toFixed(3 * d);
    sLC = set0FromTo(sLC, d + Z - lZ1, 2 * d + Z + 1 - lZ1);
    const HCL = Number(sHCL);
    const LC = Number(sLC);
    const C = Number(eC);
    const HCHL = Number(seHCL);
    // (correction         ) - (low    ) + (high)
    // (HCL - LC + C - HCHL) - (HCH + L) + (H   )
    const rL = ddAddDd(twoSum(HCL, -LC), twoSum(C, -HCHL)); // correction term
    const rHL = ddAddDouble(twoSum(L, -HCH), H);
    let r = ddAddDd(rHL, rL);
    // get accurate power of 10
    const exp10 = getPowerOf10(abs(exp));
    r = exp === 0
        ? r
        : exp < 0
            ? ddDivDd(r, exp10)
            : ddMultDd(r, exp10);
    const q = (add1Ulp(r[1]) - r[1]);
    // remove extraneous bits (not strictly necessary)
    r[0] = r[0] + q / 2 - q / 2;
    r = negative ? r.map(r => -r) : [r[0], r[1]];
    return r;
}


;// ./src/constants.ts
// import { strToDd } from "./str-to-dd/str-to-dd.js";
const PIDd = [1.2246467991473535e-16, 3.141592653589793];
const eDd = [1.4456468917292502e-16, 2.718281828459045];
const ln2Dd = [2.3190468138463e-17, 0.6931471805599453];
const eulerDd = [-4.942915152430649e-18, 0.5772156649015329];
// strToDd('0.5772156649015328606065120900824024310421593359399235988057672348');//?


;// ./src/double-double/binary/dd-gt.ts
/**
 * Returns `true` if `x1 > x2`, `false` otherwise.
 *
 * @param x1 a double-double precision floating point number
 * @param x2 a double-double precision floating point number
 */
function ddGt(x1, x2) {
    if (x1[1] > x2[1]) {
        return true;
    }
    if (x1[1] < x2[1]) {
        return false;
    }
    if (x1[0] > x2[0]) {
        return true;
    }
    return false;
}


;// ./src/double-double/unary/dd-sin.ts









const { trunc } = Math;
// See https://gist.github.com/publik-void/067f7f2fef32dbe5c27d6e215f824c91#sin-abs-error-minimized-degree-33
// Maximum relative error: 1.64002557798425265331386526431095701e-39
// Maximum absolute error: 7.80601195686311420504782780641951757e-41
const a0 = [0, 1];
const a1 = strToDd('-0.166666666666666666666666666666666667');
const a2 = strToDd('0.00833333333333333333333333333333333069');
const a3 = strToDd('-0.000198412698412698412698412698412671319');
const a4 = strToDd('2.75573192239858906525573192223995808e-6');
const a5 = strToDd('-2.50521083854417187750521077962123682e-8');
const a6 = strToDd('1.60590438368216145993922289621550506e-10');
const a7 = strToDd('-7.64716373181981647587481187300831335e-13');
const a8 = strToDd('2.81145725434552075980975905006999319e-15');
const a9 = strToDd('-8.22063524662432650297086257962703293e-18');
const aa = strToDd('1.95729410633890026175367390152305383e-20');
const ab = strToDd('-3.86817017051340241224838720319634797e-23');
const ac = strToDd('6.44695023999222092772271073593727141e-26');
const ad = strToDd('-9.1836779606017064087088551595474321e-29');
const ae = strToDd('1.13078207057779775850779192271873238e-31');
const af = strToDd('1.19290046424220296937971101373203567e-34');
const PIDd_2 = ddDivDouble(PIDd, 2);
const PIDd2 = ddMultDouble1(2, PIDd);
/**
 * Returns the sine of x.
 *
 * @param θ a double-double precision floating point number
 *
 * @example
 * ```
 * import { PIDd } from 'double-double';
 * import { ddDivDouble } from 'double-double';
 *
 * ddSin(ddDivDouble(PIDd,6));  //=> [0,0.5]
 * ```
 */
function ddSin(θ) {
    let negate = θ[1] < 0;
    if (negate) {
        θ = [-θ[0], -θ[1]];
    }
    if (ddGt(θ, PIDd)) {
        const _c = ddDivDd(θ, PIDd2);
        const c = trunc(_c[1] + _c[0]);
        θ = ddDiffDd(θ, ddMultDouble1(c, PIDd2));
    }
    if (ddGt(θ, PIDd)) {
        // between 𝜋 and 2𝜋
        θ = ddDiffDd(θ, PIDd);
        negate = !negate;
    }
    if (ddGt(θ, PIDd_2)) {
        // between 𝜋/2 and 𝜋
        θ = ddDiffDd(PIDd, θ);
    }
    const x1 = θ;
    const x2 = ddMultDd(θ, θ);
    const r = ddMultDd(x1, (ddAddDd(a0, ddMultDd(x2, (ddAddDd(a1, ddMultDd(x2, (ddAddDd(a2, ddMultDd(x2, (ddAddDd(a3, ddMultDd(x2, (ddAddDd(a4, ddMultDd(x2, (ddAddDd(a5, ddMultDd(x2, (ddAddDd(a6, ddMultDd(x2, (ddAddDd(a7, ddMultDd(x2, (ddAddDd(a8, ddMultDd(x2, (ddAddDd(a9, ddMultDd(x2, (ddAddDd(aa, ddMultDd(x2, (ddAddDd(ab, ddMultDd(x2, (ddAddDd(ac, ddMultDd(x2, (ddAddDd(ad, ddMultDd(x2, (ddDiffDd(ae, ddMultDd(x2, af))))))))))))))))))))))))))))))))))))))))))))));
    return negate ? [-r[0], -r[1]] : r;
}


;// ./src/double-double/unary/dd-cos.ts




// See https://gist.github.com/publik-void/067f7f2fef32dbe5c27d6e215f824c91#sin-abs-error-minimized-degree-33
// Maximum relative error: 1.64002557798425265331386526431095701e-39
// Maximum absolute error: 7.80601195686311420504782780641951757e-41
const dd_cos_PIDd_2 = ddDivDouble(PIDd, 2);
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
function ddCos(θ) {
    const x_ = ddAddDd(θ, dd_cos_PIDd_2);
    return ddSin(x_);
}


;// ./src/double-double/binary/dd-eq.ts
/**
 * Returns `true` if `x1 === x2`, `false` otherwise.
 *
 * @param x1 a double-double precision floating point number
 * @param x2 a double-double precision floating point number
 */
function ddEq(x1, x2) {
    return x1[0] === x2[0] && x1[1] === x2[1];
}


;// ./src/double-double/binary/dd-gte.ts
/**
 * Returns `true` if `x1 >= x2`, `false` otherwise.
 *
 * @param x1 a double-double precision floating point number
 * @param x2 a double-double precision floating point number
 */
function ddGte(x1, x2) {
    if (x1[1] > x2[1]) {
        return true;
    }
    if (x1[1] < x2[1]) {
        return false;
    }
    if (x1[0] >= x2[0]) {
        return true;
    }
    return false;
}


;// ./src/double-double/binary/dd-lt.ts
/**
 * Returns `true` if `x1 < x2`, `false` otherwise.
 *
 * @param x1 a double-double precision floating point number
 * @param x2 a double-double precision floating point number
 */
function ddLt(x1, x2) {
    if (x1[1] < x2[1]) {
        return true;
    }
    if (x1[1] > x2[1]) {
        return false;
    }
    if (x1[0] < x2[0]) {
        return true;
    }
    return false;
}


;// ./src/double-double/binary/dd-lte.ts
/**
 * Returns `true` if `x1 <= x2`, `false` otherwise.
 *
 * @param x1 a double-double precision floating point number
 * @param x2 a double-double precision floating point number
 */
function ddLte(x1, x2) {
    if (x1[1] < x2[1]) {
        return true;
    }
    if (x1[1] > x2[1]) {
        return false;
    }
    if (x1[0] <= x2[0]) {
        return true;
    }
    return false;
}


;// ./src/double-mixed-double-double/dd-diff-double.ts
/**
 * Returns the result of subtracting the second given double-precision
 * floating point number from the first double-double precision float.
 *
 * * relative error bound: 3u^2 + 13u^3, i.e. fl(a-b) = (a-b)(1+ϵ),
 * where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
 * * the error bound is not sharp - the worst case that could be found by the
 * authors were 2.25u^2
 *
 * ALGORITHM 6 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y a double precision floating point number
 */
function ddDiffDouble(x, y) {
    const xl = x[0];
    const xh = x[1];
    //const [sl,sh] = twoSum(xh,yh);
    const sh = xh - y;
    const _1 = sh - xh;
    const sl = (xh - (sh - _1)) + (-y - _1);
    //const [tl,th] = twoSum(xl,yl);
    const th = xl;
    const _2 = th - xl;
    const tl = (xl - (th - _2)) - _2;
    const c = sl + th;
    //const [vl,vh] = fastTwoSum(sh,c)
    const vh = sh + c;
    const vl = c - (vh - sh);
    const w = tl + vl;
    //const [zl,zh] = fastTwoSum(vh,w)
    const zh = vh + w;
    const zl = w - (zh - vh);
    return [zl, zh];
}


;// ./src/index.ts























































var __webpack_exports__PIDd = __webpack_exports__.eZ;
var __webpack_exports__bitLength = __webpack_exports__.ao;
var __webpack_exports__ddAbs = __webpack_exports__.NN;
var __webpack_exports__ddAddDd = __webpack_exports__.ei;
var __webpack_exports__ddAddDouble = __webpack_exports__.zR;
var __webpack_exports__ddCompare = __webpack_exports__.e0;
var __webpack_exports__ddCos = __webpack_exports__.QV;
var __webpack_exports__ddDiffDd = __webpack_exports__.w0;
var __webpack_exports__ddDiffDouble = __webpack_exports__.PA;
var __webpack_exports__ddDivBy2 = __webpack_exports__.vx;
var __webpack_exports__ddDivDd = __webpack_exports__.A5;
var __webpack_exports__ddDivDdWithError = __webpack_exports__.q$;
var __webpack_exports__ddDivDouble = __webpack_exports__.pW;
var __webpack_exports__ddEq = __webpack_exports__.rC;
var __webpack_exports__ddGt = __webpack_exports__.SH;
var __webpack_exports__ddGte = __webpack_exports__.Tn;
var __webpack_exports__ddLt = __webpack_exports__.jL;
var __webpack_exports__ddLte = __webpack_exports__.kT;
var __webpack_exports__ddMax = __webpack_exports__.zZ;
var __webpack_exports__ddMin = __webpack_exports__.Rp;
var __webpack_exports__ddMultBy2 = __webpack_exports__.IH;
var __webpack_exports__ddMultBy4 = __webpack_exports__.Is;
var __webpack_exports__ddMultByNeg2 = __webpack_exports__.Em;
var __webpack_exports__ddMultByNeg4 = __webpack_exports__.Sw;
var __webpack_exports__ddMultDd = __webpack_exports__.tp;
var __webpack_exports__ddMultDouble1 = __webpack_exports__.Lz;
var __webpack_exports__ddMultDouble2 = __webpack_exports__.QP;
var __webpack_exports__ddNegativeOf = __webpack_exports__.Vd;
var __webpack_exports__ddProduct = __webpack_exports__.Kq;
var __webpack_exports__ddSign = __webpack_exports__.cV;
var __webpack_exports__ddSin = __webpack_exports__.Rc;
var __webpack_exports__ddSqrt = __webpack_exports__.VL;
var __webpack_exports__ddSum = __webpack_exports__.K_;
var __webpack_exports__ddToStr = __webpack_exports__.Vx;
var __webpack_exports__divWithErr = __webpack_exports__.P_;
var __webpack_exports__doubleDivDouble = __webpack_exports__.Mw;
var __webpack_exports__doubleSqrt = __webpack_exports__.O$;
var __webpack_exports__doubleToBinaryString = __webpack_exports__.dC;
var __webpack_exports__doubleToOctets = __webpack_exports__.T7;
var __webpack_exports__eDd = __webpack_exports__.UF;
var __webpack_exports__eulerDd = __webpack_exports__.wO;
var __webpack_exports__exponent = __webpack_exports__.g6;
var __webpack_exports__fastTwoDiff = __webpack_exports__.gD;
var __webpack_exports__fastTwoSum = __webpack_exports__.uJ;
var __webpack_exports__getHighestSetBit = __webpack_exports__.QK;
var __webpack_exports__getLowestSetBit = __webpack_exports__.aX;
var __webpack_exports__isBitAligned = __webpack_exports__.O2;
var __webpack_exports__ln2Dd = __webpack_exports__.v4;
var __webpack_exports__lsbExponent = __webpack_exports__.pE;
var __webpack_exports__msbExponent = __webpack_exports__.Ei;
var __webpack_exports__parseDouble = __webpack_exports__.bt;
var __webpack_exports__parseDoubleDetailed = __webpack_exports__.$n;
var __webpack_exports__reduceSignificand = __webpack_exports__.K1;
var __webpack_exports__significand = __webpack_exports__.uI;
var __webpack_exports__split = __webpack_exports__.lD;
var __webpack_exports__sqrtWithErr = __webpack_exports__.oi;
var __webpack_exports__strToDd = __webpack_exports__.DL;
var __webpack_exports__twoDiff = __webpack_exports__.QC;
var __webpack_exports__twoProduct = __webpack_exports__.gB;
var __webpack_exports__twoSum = __webpack_exports__.S4;
export { __webpack_exports__PIDd as PIDd, __webpack_exports__bitLength as bitLength, __webpack_exports__ddAbs as ddAbs, __webpack_exports__ddAddDd as ddAddDd, __webpack_exports__ddAddDouble as ddAddDouble, __webpack_exports__ddCompare as ddCompare, __webpack_exports__ddCos as ddCos, __webpack_exports__ddDiffDd as ddDiffDd, __webpack_exports__ddDiffDouble as ddDiffDouble, __webpack_exports__ddDivBy2 as ddDivBy2, __webpack_exports__ddDivDd as ddDivDd, __webpack_exports__ddDivDdWithError as ddDivDdWithError, __webpack_exports__ddDivDouble as ddDivDouble, __webpack_exports__ddEq as ddEq, __webpack_exports__ddGt as ddGt, __webpack_exports__ddGte as ddGte, __webpack_exports__ddLt as ddLt, __webpack_exports__ddLte as ddLte, __webpack_exports__ddMax as ddMax, __webpack_exports__ddMin as ddMin, __webpack_exports__ddMultBy2 as ddMultBy2, __webpack_exports__ddMultBy4 as ddMultBy4, __webpack_exports__ddMultByNeg2 as ddMultByNeg2, __webpack_exports__ddMultByNeg4 as ddMultByNeg4, __webpack_exports__ddMultDd as ddMultDd, __webpack_exports__ddMultDouble1 as ddMultDouble1, __webpack_exports__ddMultDouble2 as ddMultDouble2, __webpack_exports__ddNegativeOf as ddNegativeOf, __webpack_exports__ddProduct as ddProduct, __webpack_exports__ddSign as ddSign, __webpack_exports__ddSin as ddSin, __webpack_exports__ddSqrt as ddSqrt, __webpack_exports__ddSum as ddSum, __webpack_exports__ddToStr as ddToStr, __webpack_exports__divWithErr as divWithErr, __webpack_exports__doubleDivDouble as doubleDivDouble, __webpack_exports__doubleSqrt as doubleSqrt, __webpack_exports__doubleToBinaryString as doubleToBinaryString, __webpack_exports__doubleToOctets as doubleToOctets, __webpack_exports__eDd as eDd, __webpack_exports__eulerDd as eulerDd, __webpack_exports__exponent as exponent, __webpack_exports__fastTwoDiff as fastTwoDiff, __webpack_exports__fastTwoSum as fastTwoSum, __webpack_exports__getHighestSetBit as getHighestSetBit, __webpack_exports__getLowestSetBit as getLowestSetBit, __webpack_exports__isBitAligned as isBitAligned, __webpack_exports__ln2Dd as ln2Dd, __webpack_exports__lsbExponent as lsbExponent, __webpack_exports__msbExponent as msbExponent, __webpack_exports__parseDouble as parseDouble, __webpack_exports__parseDoubleDetailed as parseDoubleDetailed, __webpack_exports__reduceSignificand as reduceSignificand, __webpack_exports__significand as significand, __webpack_exports__split as split, __webpack_exports__sqrtWithErr as sqrtWithErr, __webpack_exports__strToDd as strToDd, __webpack_exports__twoDiff as twoDiff, __webpack_exports__twoProduct as twoProduct, __webpack_exports__twoSum as twoSum };
