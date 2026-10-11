
;// ./src/double-double/binary/dd-compare.ts
/**
 * Returns `0` if `x === y`, a positive value if `x > y` or a negative value if 
 * `x < y` (or `NaN` if `x` or `y` is `NaN`).
 * 
 * * only the sign of the result is meaningful, e.g. it can be used as a 
 * comparator in `Array.prototype.sort`
 * * assumes the double-doubles are normalized (as returned by the functions in
 * this library), i.e. `hi === fl(hi + lo)`, in which case the result is exact
 * 
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */ function ddCompare(x, y) {
    const xh = x[1];
    const yh = y[1];
    // Note: the difference of two distinct doubles is never 0 (due to 
    // subnormals) so the sign is always correct
    return xh === yh ? x[0] - y[0] : xh - yh;
}


;// ./src/double-double/binary/dd-min.ts

/**
 * Returns the minimum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */ function ddMin(a, b) {
    const res = ddCompare(a, b);
    return res > 0 ? b : a;
}


;// ./src/double-double/binary/dd-max.ts

/**
 * Returns the maximum of a and b.
 * @param a a double-double precision floating point number
 * @param b another double-double precision floating point number
 */ function ddMax(a, b) {
    const res = ddCompare(a, b);
    return res > 0 ? a : b;
}


;// ./src/double-double/unary/dd-sqrt.ts
/** @internal */ const f = 134217729; // 2**27 + 1;
// Taken from https://github.com/munrocket/double.js/blob/master/src/double.ts
// Unfortunately no error bound given
/**
 * Returns the square root of a double-double as a double-double.
 * * no error bound is returned
 * 
 * @param x a double-double precision floating point number
 */ // TODO - calculate an error bound and add to function description
function ddSqrt(x) {
    const xl = x[0];
    const xh = x[1];
    if (xh === 0) {
        return [
            0,
            0
        ];
    }
    const s = Math.sqrt(xh);
    //const [tl,th] = twoSquare(s);
    const th = s * s;
    const c = f * s;
    const ah = c - (c - s);
    const al = s - ah;
    const tl = al * al - (th - ah * ah - 2 * (ah * al));
    const e = (xh - th - tl + xl) * 0.5 / s;
    return [
        e - (s + e - s),
        s + e
    ];
}


;// ./src/double-mixed-double-double/double-sqrt.ts
/** @internal */ const double_sqrt_f = 134217729; // 2**27 + 1;
// Taken from https://github.com/munrocket/double.js/blob/master/src/double.ts
// Unfortunately no error bound given
/**
 * Returns the square root of a double as a double-double.
 * * no error bound is returned
 */ // TODO - calculate an error bound and add to function description
function doubleSqrt(x) {
    if (x === 0) {
        return [
            0,
            0
        ];
    }
    const s = Math.sqrt(x);
    //const [tl,th] = twoSquare(s);
    const th = s * s;
    const c = double_sqrt_f * s;
    const ah = c - (c - s);
    const al = s - ah;
    const tl = al * al - (th - ah * ah - 2 * (ah * al));
    const e = (x - th - tl) * 0.5 / s;
    x = s + e;
    const xl = e - (x - s);
    return [
        xl,
        x
    ];
}


;// ./src/double-with-err/sqrt-with-err.ts
/** @internal */ const eps = Number.EPSILON;
/**
 * Returns the result of the square root of a double floating point number  
 * together with an absolute error bound where `x_` is an absolute error 
 * bound on the input value.
 * 
 * * the returned error bound also accounts for the rounding errors of the 
 * floating point operations involved (including the rounding of `est` itself)
 * * see also "A Reduced Product of Absolute and Relative Error Bounds for Floating-point Analysis"
 * by Maxime Jacquemin, Sylvie Putot, and Franck Vedrine
 * @param x the radicand
 * @param x_ absolute value error bound in the radicand
 */ function sqrtWithErr(x, x_) {
    // Note: it is assumed x + x_ >= 0, else the error in x_ was wrong in the
    // first place (since we can't have a negative input to the square root)
    // Each of `est`, `minSqrt` and `maxSqrt` below has a relative error of 
    // less than 1.5u (u === eps/2) due to rounding; the bounds are inflated 
    // to account for this and for the rounding of the subtraction.
    // estimate the result of the square root
    if (x - x_ <= 0) {
        const est = x > 0 ? Math.sqrt(x) : 0;
        const maxSqrt = Math.sqrt(x + x_);
        return {
            est,
            err: Math.max(maxSqrt - est, est) + 2 * eps * maxSqrt
        };
    }
    const est = Math.sqrt(x);
    const minSqrt = Math.sqrt(x - x_);
    const maxSqrt = Math.sqrt(x + x_);
    const err = Math.max(Math.abs(minSqrt - est), Math.abs(maxSqrt - est));
    return {
        est,
        err: (1 + eps) * err + 4 * eps * maxSqrt
    };
}


;// ./src/double-double/unary/dd-abs.ts
/**
 * Returns the absolute value of the given double-double precision floating 
 * point number.
 * @param f a double-double precision floating point number
 */ function ddAbs(f) {
    const Q = f[1];
    return Q < 0 ? [
        -f[0],
        -Q
    ] : f;
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
 */ function ddAddDouble(x, y) {
    const xl = x[0];
    const xh = x[1];
    //const [sl,sh] = twoSum(xh, y);
    const sh = xh + y;
    const c = sh - xh;
    const sl = xh - (sh - c) + (y - c);
    const v = xl + sl;
    //const [zl,zh] = fastTwoSum(sh,v);
    const zh = sh + v;
    const zl = v - (zh - sh);
    return [
        zl,
        zh
    ];
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
 */ function ddAddDd(x, y) {
    const xl = x[0];
    const xh = x[1];
    const yl = y[0];
    const yh = y[1];
    //const [sl,sh] = twoSum(xh,yh);
    const sh = xh + yh;
    const _1 = sh - xh;
    const sl = xh - (sh - _1) + (yh - _1);
    //const [tl,th] = twoSum(xl,yl);
    const th = xl + yl;
    const _2 = th - xl;
    const tl = xl - (th - _2) + (yl - _2);
    const c = sl + th;
    //const [vl,vh] = fastTwoSum(sh,c)
    const vh = sh + c;
    const vl = c - (vh - sh);
    const w = tl + vl;
    //const [zl,zh] = fastTwoSum(vh,w)
    const zh = vh + w;
    const zl = w - (zh - vh);
    return [
        zl,
        zh
    ];
}


;// ./src/double-double/binary/dd-mult-dd.ts
/** @internal */ const dd_mult_dd_f = 2 ** 27 + 1;
/**
 * Returns the product of two double-double-precision floating point numbers.
 * 
 * * relative error bound: 5u^2, i.e. fl(a*b) = (a*b)(1+ϵ),
 * where |ϵ| < 5u^2, u = 0.5 * Number.EPSILON (assuming no underflow or overflow)
 * * this bound (for round-to-nearest ties-to-even, as used by JavaScript) was
 * formally proven (in Coq) by J.-M. Muller and L. Rideau, see
 * https://doi.org/10.1145/3484514 - it improves on the 7u^2 bound given in
 * the original paper (below); the worst case found is 4.985u^2
 *
 * * assumes no overflow; note that (Veltkamp) splitting overflows (giving
 * `NaN`) if the magnitude of `x[1]` or `y[1]` exceeds ~2^996
 * 
 * * ALGORITHM 10 (DWTimesDW1) of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */ function ddMultDd(x, y) {
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
    const cl1 = al * bl - (ch - ah * bh - al * bh - ah * bl);
    //return fastTwoSum(ch,cl1 + (xh*yl + xl*yh));
    const b = cl1 + (xh * y[0] + x[0] * yh);
    const xx = ch + b;
    return [
        b - (xx - ch),
        xx
    ];
}


;// ./src/double-double/multi/dd-product.ts

/**
 * Returns the result of multiplying together an array of double-double-precision 
 * floating point numbers naively (i.e. not using pairwise addition to reduce 
 * error a bit).
 * 
 * * relative error bound: (1+ϵ)^(n-1) - 1 ≈ (n-1)ϵ,
 * where |ϵ| < 5u^2, u = 0.5 * Number.EPSILON (the error bound of a single
 * multiplication), assuming no underflow or overflow
 * * returns `[0,1]` (i.e. one) if the given array is empty
 */ function ddProduct(qs) {
    if (qs.length === 0) {
        return [
            0,
            1
        ];
    }
    let q = qs[0];
    for(let i = 1; i < qs.length; i++){
        q = ddMultDd(q, qs[i]);
    }
    return q;
}


;// ./src/double-double/multi/dd-sum.ts

/**
 * Returns the result of summing an array of double-double-precision floating 
 * point numbers naively (i.e. not using pairwise addition to reduce error a bit).
 * 
 * * there is no useful *relative* error bound (due to possible cancellation);
 * an absolute error bound is given by: ϵ(|s_2| + |s_3| + ... + |s_n|),
 * where s_i is the i-th (computed) partial sum and
 * ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON (the error bound of a single
 * addition), neglecting terms of order ϵ^2
 * * returns `[0,0]` (i.e. zero) if the given array is empty
 */ function ddSum(qs) {
    if (qs.length === 0) {
        return [
            0,
            0
        ];
    }
    let q = qs[0];
    for(let i = 1; i < qs.length; i++){
        q = ddAddDd(q, qs[i]);
    }
    return q;
}


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
 */ function ddDiffDd(x, y) {
    const xl = x[0];
    const xh = x[1];
    const yl = y[0];
    const yh = y[1];
    //const [sl,sh] = twoSum(xh,yh);
    const sh = xh - yh;
    const _1 = sh - xh;
    const sl = xh - (sh - _1) + (-yh - _1);
    //const [tl,th] = twoSum(xl,yl);
    const th = xl - yl;
    const _2 = th - xl;
    const tl = xl - (th - _2) + (-yl - _2);
    const c = sl + th;
    //const [vl,vh] = fastTwoSum(sh,c)
    const vh = sh + c;
    const vl = c - (vh - sh);
    const w = tl + vl;
    //const [zl,zh] = fastTwoSum(vh,w)
    const zh = vh + w;
    const zl = w - (zh - vh);
    return [
        zl,
        zh
    ];
}


;// ./src/double-mixed-double-double/dd-mult-double.ts
/** @internal */ const dd_mult_double_f = 134217729; // 2**27 + 1;
/**
 * Returns the product of a double-double-precision floating point number and a 
 * double.
 * 
 * * slower than ALGORITHM 8 (one call to fastTwoSum more) but about 2x more
 * accurate
 * * relative error bound: 1.5u^2 + 4u^3, i.e. fl(a*b) = (a*b)(1+ϵ), 
 * where ϵ <= 1.5u^2 + 4u^3, u = 0.5 * Number.EPSILON 
 * * the bound is very sharp
 * * probably prefer `ddMultDouble2` due to extra speed
 * 
 * * assumes no overflow; note that (Veltkamp) splitting overflows (giving
 * `NaN`) if the magnitude of `x[1]` or `y` exceeds ~2^996
 * 
 * * ALGORITHM 7 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param y a double
 * @param x a double-double precision floating point number
 */ function ddMultDouble1(y, x) {
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
    const cl1 = al * bl - (ch - ah * bh - al * bh - ah * bl);
    const cl2 = xl * y;
    //const [tl1,th] = fastTwoSum(ch,cl2);
    const th = ch + cl2;
    const tl1 = cl2 - (th - ch);
    const tl2 = tl1 + cl1;
    //const [zl,zh] = fastTwoSum(th,tl2);
    const zh = th + tl2;
    const zl = tl2 - (zh - th);
    return [
        zl,
        zh
    ];
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
 * * assumes no overflow; note that (Veltkamp) splitting overflows (giving
 * `NaN`) if the magnitude of `x[1]` or `y` exceeds ~2^996
 * 
 * * ALGORITHM 8 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param y a double
 * @param x a double-double precision floating point number
 */ function ddMultDouble2(y, x) {
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
    const cl1 = al * bl - (ch - ah * bh - al * bh - ah * bl);
    const cl2 = xl * y;
    const cl3 = cl1 + cl2;
    //return fastTwoSum(ch,cl3);
    const xx = ch + cl3;
    return [
        cl3 - (xx - ch),
        xx
    ];
}


;// ./src/double-double/unary/dd-mult-by-2.ts
/**
 * Returns the result of multiplying the given double-double by 2.
 * * The result is exact
 * @param f a double-double precision floating point number
 */ function ddMultBy2(f) {
    return [
        2 * f[0],
        2 * f[1]
    ];
}


;// ./src/double-double/unary/dd-mult-by-4.ts
/**
 * Returns the result of multiplying the given double-double by 4.
 * * The result is exact
 * @param f a double-double precision floating point number
 */ function ddMultBy4(f) {
    return [
        4 * f[0],
        4 * f[1]
    ];
}


;// ./src/double-double/unary/dd-div-by-2.ts
/**
 * Returns the result of dividing the given double-double by 2.
 * @param f a double-double precision floating point number
 */ function ddDivBy2(f) {
    return [
        f[0] / 2,
        f[1] / 2
    ];
}


;// ./src/double-double/unary/dd-mult-by-neg-2.ts
/**
 * Returns the result of multiplying the given double-double by -2.
 * * The result is exact
 * @param f a double-double precision floating point number
 */ function ddMultByNeg2(f) {
    return [
        -2 * f[0],
        -2 * f[1]
    ];
}


;// ./src/double-double/unary/dd-mult-by-neg-4.ts
/**
 * Returns the result of multiplying the given double-double by -4.
 * * The result is exact
 * @param f a double-double precision floating point number
 */ function ddMultByNeg4(f) {
    return [
        -4 * f[0],
        -4 * f[1]
    ];
}


;// ./src/double-mixed-double-double/dd-div-double.ts
/** @internal */ const dd_div_double_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of dividing a double-double-precision floating point 
 * number by a double.
 * 
 * * relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2, 
 * u = 0.5 * Number.EPSILON 
 * * the bound is very sharp
 * 
 * * assumes no overflow; note that (Veltkamp) splitting overflows (giving
 * `NaN`) if the magnitude of `x[1]/y` or `y` exceeds ~2^996
 * 
 * * ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y the double-precision divisor
 */ function ddDivDouble(x, y) {
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
    const πl = al * bl - (πh - ah * bh - al * bh - ah * bl);
    const δh = xh - πh; // exact operation
    const δt = δh - πl; // exact operation
    const δ = δt + xl;
    const tl = δ / y;
    //return fastTwoSum(th,tl);
    const rl = th + tl;
    return [
        tl - (rl - th),
        rl
    ];
}


;// ./src/double-double/binary/dd-div-dd.ts
/** @internal */ const dd_div_dd_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of dividing two double-double-precision floating point 
 * numbers, i.e. returns x/y.
 * 
 * * relative error bound: 15u^2 + 56u^3, i.e. fl(a/b) = (a/b)(1+ϵ), 
 * where ϵ <= 15u^2 + 56u^3, u = 0.5 * Number.EPSILON 
 * * the largest error found was 8.465u^2
 * 
 * * assumes no overflow; note that (Veltkamp) splitting overflows (giving
 * `NaN`) if the magnitude of `x[1]/y[1]` or `y[1]` exceeds ~2^996
 * 
 * * ALGORITHM 17 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * @param x a double-double precision floating point number
 * @param y another double-double precision floating point number
 */ function ddDivDd(x, y) {
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
    const cl1 = al * bl - (ch - ah * bh - al * bh - ah * bl);
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
    return [
        tl - (xx - th),
        xx
    ];
}


;// ./src/double-double/unary/dd-negative-of.ts
/**
 * Returns the negative of the given double-double precision floating point 
 * number.
 * * the result is exact
 * @param f a double-double precision floating point number
 */ function ddNegativeOf(f) {
    return [
        -f[0],
        -f[1]
    ];
}


;// ./src/double-double/unary/dd-sign.ts
/**
 * Returns the sign of the given double-double-precision floating point number.
 * 
 * * a positive or negative double or zero is returned - not necessarily +1, 0
 * or -1
 * * prefer inlining this - it is really only here for reference
 */ function ddSign(f) {
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
 */ function fastTwoDiff(a, b) {
    const x = a - b;
    const y = a - x - b;
    return [
        y,
        x
    ];
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
 */ function fastTwoSum(a, b) {
    const x = a + b;
    return [
        b - (x - a),
        x
    ];
}
// inlined
//const R = a + b; const r = b - (R - a); return [r, R];


;// ./src/basic/split.ts
/** 
 * === 2^Math.ceil(p/2) + 1 where p is the # of significand bits in a double === 53.
 * @internal
 */ const split_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of splitting a double into 2 26-bit doubles.
 * 
 * Theorem 17 (Veltkamp-Dekker): Let a be a p-bit floating-point number, where
 * p >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the 
 * following algorithm will produce a (p-s)-bit value a_hi and a 
 * nonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and
 * a = a_hi + a_lo.
 * 
 * * assumes no overflow; note that (Veltkamp) splitting overflows (giving
 * `NaN`) if the magnitude of `a` exceeds ~2^996
 * 
 * see e.g. [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * @param a A double floating point number
 */ function split(a) {
    const c = split_f * a;
    const a_h = c - (c - a);
    const a_l = a - a_h;
    return [
        a_h,
        a_l
    ];
}
// inlined - input a, output a_h, a_l
// const c = f * a; const a_h = c - (c - a); const a_l = a - a_h; return [a_h, a_l];


;// ./src/basic/two-diff.ts
/**
 * Returns the exact result of subtracting b from a.
 * 
 * * the resulting array is the reverse of the standard twoDiff in the literature.
 *
 * @param a minuend - a double precision floating point number
 * @param b subtrahend - a double precision floating point number
 */ function twoDiff(a, b) {
    const x = a - b;
    const bvirt = a - x;
    const y = a - (x + bvirt) + (bvirt - b);
    return [
        y,
        x
    ];
}


;// ./src/basic/two-product.ts
/** @internal */ const two_product_f = 134217729; // 2**27 + 1;
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
 * * assumes no overflow; note that (Veltkamp) splitting overflows (giving
 * `NaN`) if the magnitude of `a` or `b` exceeds ~2^996
 * 
 * See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
 * @param a A double
 * @param b Another double
 */ function twoProduct(a, b) {
    const x = a * b;
    //const [ah, al] = split(a);
    const c = two_product_f * a;
    const ah = c - (c - a);
    const al = a - ah;
    //const [bh, bl] = split(b);
    const d = two_product_f * b;
    const bh = d - (d - b);
    const bl = b - bh;
    const y = al * bl - (x - ah * bh - al * bh - ah * bl);
    //const err1 = x - (ah * bh);
    //const err2 = err1 - (al * bh);
    //const err3 = err2 - (ah * bl);
    //const y = (al * bl) - err3;
    return [
        y,
        x
    ];
}


;// ./src/double-mixed-double-double/double-div-double.ts
/** @internal */ const double_div_double_f = 134217729; // 2**27 + 1;
/**
 * Returns the result of dividing a double-precision floating point 
 * number by a double with the result given as a double-double.
 * This is a slight modification of ddDivDd.
 * 
 * * **!! NOT an error-free transformation !!**
 * * relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2, 
 * u = 0.5 * Number.EPSILON 
 * 
 * * assumes no overflow; note that (Veltkamp) splitting overflows (giving
 * `NaN`) if the magnitude of `x/y` or `y` exceeds ~2^996
 * 
 * * ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * (slightly modified)
 * @param x dividend
 * @param y divisor
 */ function doubleDivDouble(x, y) {
    const th = x / y;
    //const [πl,πh] = twoProduct(th,y);
    const πh = th * y;
    const c = double_div_double_f * th;
    const ah = c - (c - th);
    const al = th - ah;
    const d = double_div_double_f * y;
    const bh = d - (d - y);
    const bl = y - bh;
    const πl = al * bl - (πh - ah * bh - al * bh - ah * bl);
    const δh = x - πh; // exact operation
    const δt = δh - πl; // exact operation
    const tl = δt / y;
    //return fastTwoSum(th,tl);
    const xx = th + tl;
    return [
        tl - (xx - th),
        xx
    ];
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
 */ function twoSum(a, b) {
    const x = a + b;
    const bv = x - a;
    return [
        a - (x - bv) + (b - bv),
        x
    ];
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
 * * assumes no overflow; note that (Veltkamp) splitting overflows (giving
 * `NaN`) if the magnitude of `a` exceeds ~2^996
 * 
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * 
 * @param a a double
 * @param bits the number of significand bits to leave intact
 */ function reduceSignificand(a, bits) {
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
 * Shared buffer used to read the bytes of a double.
 * 
 * @internal
 */ const buffer = new ArrayBuffer(8);
/** @internal */ const dv = new DataView(buffer);
/** @internal */ const u8 = new Uint8Array(buffer);
/** 
 * Returns the IEEE-754 8 bytes composing the given double, starting from the
 * sign bit and ending in the lsb of the significand.
 * e.g. 123.456 -> [64, 94, 221, 47, 26, 159, 190, 119] 
 * @internal
 */ function doubleToOctets(number) {
    dv.setFloat64(0, number, false);
    return Array.from(u8);
}


;// ./src/double-representation/double-to-binary-string.ts
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)

/** @internal */ function doubleToBinaryString(number) {
    return octetsToBinaryString(doubleToOctets(number));
}
/**
 * @param octets The 8 bytes composing a double (msb first)
 * @internal
 */ function octetsToBinaryString(octets) {
    return octets.map(int8ToBinaryString).join('');
}
/**
 * intToBinaryString(8) -> "00001000"
 * @internal
 */ function int8ToBinaryString(i) {
    return i.toString(2).padStart(8, '0');
}


;// ./src/double-representation/parse-double.ts
// Modified from https://github.com/bartaz/ieee754-visualization/
// under the MIT license
// Copyright 2013 Bartek Szopka (original author)

/** 
 * Shared view used to read the bits of a double without allocating.
 * 
 * @internal
 */ const parse_double_dv = new DataView(new ArrayBuffer(8));
/**
 * Returns the relevant parts of the given IEEE-754 double. The returned 
 * exponent has been normalized (i.e. 1023 has been subtracted) and the 
 * significand has the hidden bit added if appropriate.
 * 
 * * see https://github.com/bartaz/ieee754-visualization
 * 
 * * the `significand` is returned as an array of 7 bytes, where the first byte
 *   is the 4 most significant bits of the significand (with the hidden bit added
 *   if appropriate) and the remaining 6 bytes are the remaining bits of the
 *   significand.
 */ function parseDouble(x) {
    parse_double_dv.setFloat64(0, x);
    const p0 = parse_double_dv.getUint8(0);
    const p1 = parse_double_dv.getUint8(1);
    const sign = p0 >> 7;
    const exponent_ = ((p0 & 0b0111_1111) << 4) + ((p1 & 0b11110000) >> 4);
    //---- Check for negative / positive zero / denormalized numbers.
    const hiddenMsb = exponent_ === 0 ? 0 : 16;
    // Note: exponent === 0 => 0 or denormalized number (a.k.a. subnormal number).
    const exponent = exponent_ === 0 ? exponent_ - 1022 // Subnormals use a biased exponent of 1 (not 0!)
     : exponent_ - 1023;
    //---- Break up the significand into bytes
    const significand = [
        (p1 & 0b0000_1111) + hiddenMsb,
        parse_double_dv.getUint8(2),
        parse_double_dv.getUint8(3),
        parse_double_dv.getUint8(4),
        parse_double_dv.getUint8(5),
        parse_double_dv.getUint8(6),
        parse_double_dv.getUint8(7)
    ];
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
 */ function parseDoubleDetailed(x) {
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


;// ./src/double-representation/get-max-set-bit.ts
/**
 * Shared view used to read the bits of a double without allocating.
 *
 * @internal
 */ const get_max_set_bit_dv = new DataView(new ArrayBuffer(8));
/**
 * Returns the lowest set bit of the given number's significand (where the lsb
 * is bit 0 and the msb is bit 52). If no bit is set (input === 0 or +-inf or
 * NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */ function getLowestSetBit(a) {
    if (a === 0 || !Number.isFinite(a)) {
        // There is no lowest set bit
        return NaN;
    }
    get_max_set_bit_dv.setFloat64(0, a);
    // the low 32 bits of the significand
    const lo = get_max_set_bit_dv.getUint32(4);
    if (lo !== 0) {
        return 31 - Math.clz32(lo & -lo);
    }
    // the high 20 bits of the significand with the hidden bit added (in case
    // `a` is not subnormal); note: this cannot be 0 since `a !== 0`
    const hi = get_max_set_bit_dv.getUint32(0);
    const h = hi & 0xf_ffff | ((hi & 0x7ff0_0000) === 0 ? 0 : 0x10_0000);
    return 32 + 31 - Math.clz32(h & -h);
}
/**
 * Returns the highest set bit of the given double. If no bit is set (input
 * === 0 or +/-inf or NaN) returns NaN.
 * See https://stackoverflow.com/a/35190288/2010061
 */ function getHighestSetBit(a) {
    if (a === 0 || !Number.isFinite(a)) {
        // There is no highest set bit
        return NaN;
    }
    get_max_set_bit_dv.setFloat64(0, a);
    const hi = get_max_set_bit_dv.getUint32(0);
    // the hidden bit is set if `a` is not subnormal
    if ((hi & 0x7ff0_0000) !== 0) {
        return 52;
    }
    // subnormal
    const h = hi & 0xf_ffff;
    if (h !== 0) {
        return 32 + 31 - Math.clz32(h);
    }
    return 31 - Math.clz32(get_max_set_bit_dv.getUint32(4));
}


;// ./src/double-representation/exponent.ts
/**
 * Shared view used to read the bits of a double without allocating.
 *
 * @internal
 */ const exponent_dv = new DataView(new ArrayBuffer(8));
/**
 * Returns the normalized exponent of the given number.
 * @param a A double
 */ function exponent(a) {
    exponent_dv.setFloat64(0, a);
    // the 11 exponent bits follow the sign bit
    const e = exponent_dv.getUint16(0) >>> 4 & 0x7ff;
    // Subnormals (and 0) use a biased exponent of 1 (not 0!)
    return e === 0 ? -1022 : e - 1023;
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
 * @param a The number to check
 * @param maxBitLength The max allowed bitlength
 * @param gridSpacingExponent The grid spacing === 2^gridSpacingExponent
 */ function isBitAligned(a, maxBitLength, gridSpacingExponent) {
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
 * @param a a double precision floating point number
 */ function msbExponent(a) {
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
 * `NaN` if `a === 0` or `a` is `+-Infinity` or `NaN`.
 * 
 * @param a a double precision floating point number
 */ function lsbExponent(a) {
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
 * 
 * @param a a double precision floating point number
 */ function bitLength(a) {
    if (a === 0) {
        return 0;
    }
    return getHighestSetBit(a) - getLowestSetBit(a) + 1;
}


;// ./src/double-representation/significand.ts

/**
 * Return the significand of the given double with the hidden bit added (in case
 * a is not subnormal or 0, etc.)
 * 
 * @param a a double precision floating point number
 */ function significand(a) {
    return parseDouble(a).significand;
}


;// ./src/double-double-with-error/dd-div-dd-with-error.ts

/** @internal */ const dd_div_dd_with_error_eps = Number.EPSILON;
/** @internal */ const u = dd_div_dd_with_error_eps / 2;
/** @internal */ const uu = u * u;
/** @internal */ const uuu = u * u * u;
/**
 * Returns the result of dividing two double-double-precision floating point 
 * numbers together with an absolute error bound where nE and dE are absolute 
 * error bounds on the *input* values.
 * 
 * * the rounding error of the division itself is bounded using the proven 
 * relative error bound of `ddDivDd`, i.e. `15u^2 + 56u^3`
 * 
 * @param numer numerator - a double-double-precision float
 * @param denom denominator - a double-double-precision float
 * @param nE absolute value error bound in numerator
 * @param dE absolute value error bound in denominator
 */ function ddDivDdWithError(numer, denom, nE, dE) {
    const n = numer[0];
    const N = numer[1];
    const d = denom[0];
    const D = denom[1];
    // estimate the result of the division
    const est = ddDivDd(numer, denom);
    const _n = Math.abs(n + N); // absolute value of estimate of n accurate to within 1/2 ulp
    const _d = Math.abs(d + D); // absolute value of estimate of d accurate to within 1/2 ulp
    const δd = u * _d; // the max error in the rounding to _d
    // if the error in the denominator is too high the error can be 
    // arbitrarily high
    const minD = _d - δd - dE;
    // maxErr is only valid if minD > 0
    if (minD <= 0) {
        // the error can be arbitrarily high; est is mostly irrelevant
        return {
            est,
            err: Number.POSITIVE_INFINITY
        };
    }
    const err = (_d * nE + _n * dE) / minD ** 2 + (15 * uu + 56 * uuu) * Math.abs(_n / _d);
    return {
        est,
        err
    };
}


;// ./src/double-with-err/div-with-err.ts
/** @internal */ const div_with_err_u = Number.EPSILON / 2;
/**
 * Returns the result of dividing two double floating point numbers 
 * together with an absolute error bound where nE and dE are absolute error 
 * bounds on the input values.
 * @param n numerator
 * @param d denominator
 * @param nE absolute value error bound in numerator
 * @param dE absolute value error bound in denominator
 */ function divWithErr(n, d, nE, dE) {
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
        return {
            est,
            err: Number.POSITIVE_INFINITY
        };
    }
    const err = (_d * nE + _n * dE) / minD ** 2 + div_with_err_u * Math.abs(_n / _d);
    return {
        est,
        err
    };
}


;// ./src/str-to-dd/get-zeros-str.ts
/**
 * Returns a string having the given number of zeros.
 * 
 * @internal
 */ function getZerosStr(n) {
    return '0'.repeat(n);
}


;// ./src/str-to-dd/mult-str-by-pow-of-10.ts

/**
 * * string must not contain an `'e'`, e.g. `'1e-10'` is not allowed
 * 
 * @internal
 */ function multStrByPowOf10(s, pow) {
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
        } else {
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
    } else {
        [bef, aft] = s.split('.');
    }
    if (bef.length === pow) {
        return negativeStr + '0.' + bef + aft;
    } else if (bef.length > pow) {
        const l = bef.length - pow; //?
        const befP1 = bef.substring(0, l); //?
        const befP2 = bef.substring(l); //?
        return negativeStr + befP1 + '.' + befP2 + aft;
    } else {
        const l = pow - bef.length; //?
        const zeros = getZerosStr(l) || '0';
        return negativeStr + '0.' + zeros + bef + aft;
    }
}


;// ./src/dd-to-str/dd-to-str.ts

const { floor, max, log2, ceil } = Math;
/** @internal */ const LOG2_10 = log2(10);
/** @internal */ const dd_to_str_dv = new DataView(new ArrayBuffer(8));
/**
 * Converts the given double-double precision value to a string and returns the
 * result.
 * 
 * * there will always be enough decimal digits returned but some could be
 * extraneous.
 * * non-finite values return `'NaN'`, `'Infinity'` or `'-Infinity'`
 * 
 * @param dd a double-double precision floating point number
 * 
 * @example
 * ```
 * ddToStr([1.2246467991473532e-16, 3.141592653589793]);  //=> '3.141592653589793238462643383279505878966979117714'
 * ```
 */ function ddToStr(dd) {
    let [l, h] = dd;
    if (!Number.isFinite(h) || !Number.isFinite(l)) {
        return String(h + l);
    }
    if (h === 0) {
        if (l === 0) {
            return '0';
        }
        // not normalized
        h = l;
        l = 0;
    }
    let negative = false;
    if (h < 0) {
        h = -h;
        l = -l;
        negative = true;
    }
    const scale2 = max(0, -floor(log2(h)) + 3 * 53);
    const scale10 = ceil(scale2 / LOG2_10);
    // the scaling is done exactly (using `BigInt`) to avoid overflow
    const b = (roundScaled(l, scale2) + roundScaled(h, scale2)) * 10n ** BigInt(scale10);
    const bb = b / 2n ** BigInt(scale2);
    let str = multStrByPowOf10(bb.toString(), -scale10);
    str = removeExtraneousZeros(str);
    return negative ? '-' + str : str;
}
/**
 * Returns `x * 2**s` rounded (ties away from zero) to an integer.
 * 
 * @internal
 */ function roundScaled(x, s) {
    if (x === 0) {
        return 0n;
    }
    dd_to_str_dv.setFloat64(0, x);
    const bits = dd_to_str_dv.getBigUint64(0);
    const biasedExp = Number(bits >> 52n & 0x7ffn);
    let m = bits & 0xf_ffff_ffff_ffffn;
    let e;
    if (biasedExp === 0) {
        // subnormal
        e = -1074;
    } else {
        m |= 1n << 52n;
        e = biasedExp - 1075;
    }
    // x === ±m * 2**e
    const sh = e + s;
    const r = sh >= 0 ? m << BigInt(sh) : m + (1n << BigInt(-sh - 1)) >> BigInt(-sh);
    return x < 0 ? -r : r;
}
function removeExtraneousZeros(str) {
    const idx = str.indexOf('.');
    if (idx === -1) {
        return str;
    }
    let i = 0;
    let c = 0;
    while(i < str.length){
        if (str[str.length - 1 - i] === '0') {
            c++;
        } else {
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


;// ./src/str-to-dd/str-to-dd.ts
/** @internal */ const DECIMAL_REGEX = /^([+-]?)(\d*)(?:\.(\d*))?(?:[eE]([+-]?\d+))?$/;
/**
 * Converts the given decimal string to a double-double and returns the result.
 *
 * * the result is correctly rounded, i.e. the high part is the double nearest
 * to the exact value and the low part is the double nearest to the exact
 * remainder (ties to even)
 * * the full double range is supported, including subnormals; values too
 * large in magnitude return `[0,Infinity]` (or `[0,-Infinity]`); zero 
 * (including values that underflow) is returned as `[0,0]`, never `-0`
 * * accepts an optional sign, a decimal point and an optional exponent, e.g.
 * `'-1.5e-10'` or `'+.3E5'`; any other string returns `[0,Number(str)]`, e.g.
 * `[0,NaN]`, `[0,Infinity]`
 *
 * @param str a string to convert to double-double precision
 *
 * Examples:
 * ```
 * strToDd('3.14159265358979323846264338327950')  //=> [1.2246467991473532e-16, 3.141592653589793]
 * strToDd('6.0221408e+23')  //=> [-2097152, 6.0221408e+23]
 * ```
 */ function strToDd(str) {
    const match = str.trim().match(DECIMAL_REGEX);
    if (match === null || match[2] === '' && !match[3]) {
        return [
            0,
            Number(str)
        ];
    }
    const [, signStr, intStr, fracStr = '', expStr = '0'] = match;
    const negative = signStr === '-';
    // the value is `digits * 10**exp10`
    let digits = (intStr + fracStr).replace(/^0+/, '');
    if (digits === '') {
        return [
            0,
            0
        ];
    }
    let exp10 = Number(expStr) - fracStr.length;
    const trimmed = digits.replace(/0+$/, '');
    exp10 += digits.length - trimmed.length;
    digits = trimmed;
    // floor(log10(value))
    const order = digits.length - 1 + exp10;
    if (order > 309) {
        return [
            0,
            negative ? -Infinity : Infinity
        ];
    }
    if (order < -325) {
        // smaller than half the smallest subnormal
        return [
            0,
            0
        ];
    }
    const n = BigInt(digits);
    const num = exp10 >= 0 ? n * 10n ** BigInt(exp10) : n;
    const den = exp10 >= 0 ? 1n : 10n ** BigInt(-exp10);
    const { x: hi, rem, den: remDen, e2 } = divToDouble(num, den, 0);
    if (!Number.isFinite(hi)) {
        return [
            0,
            negative ? -Infinity : Infinity
        ];
    }
    // `0 - x` (rather than `-x`) avoids `-0`
    const lo = rem === 0n ? 0 : rem > 0n ? divToDouble(rem, remDen, e2).x : 0 - divToDouble(-rem, remDen, e2).x;
    return negative ? [
        0 - lo,
        0 - hi
    ] : [
        lo,
        hi
    ];
}
/**
 * Returns `num/den * 2**e2` correctly rounded (ties to even) to a double `x`
 * together with the exact (signed) remainder given as `rem/den * 2**e2`.
 *
 * * precondition: `num > 0n`, `den > 0n`
 *
 * @internal
 */ function divToDouble(num, den, e2) {
    // choose `t` such that `2**52 <= num*2**t/den < 2**53`
    let t = 53 - (str_to_dd_bitLength(num) - str_to_dd_bitLength(den));
    if (shiftLeft(num, t) >= den << 53n) {
        t--;
    }
    // the lsb of a double cannot be smaller than 2**-1074 (subnormals)
    t = Math.min(t, e2 + 1074);
    const N = t >= 0 ? num << BigInt(t) : num;
    const D = t >= 0 ? den : den << BigInt(-t);
    let q = N / D;
    let r = N - q * D;
    if (2n * r > D || 2n * r === D && (q & 1n) === 1n) {
        q++;
        r -= D;
    }
    return {
        x: mulPow2(Number(q), e2 - t),
        rem: r,
        den: D,
        e2: e2 - t
    };
}
/** @internal */ function shiftLeft(a, t) {
    return t >= 0 ? a << BigInt(t) : a >> BigInt(-t);
}
/** @internal */ function str_to_dd_bitLength(a) {
    return a.toString(2).length;
}
/**
 * Returns `x * 2**p`, exactly if the result is representable, i.e. without
 * intermediate overflow / underflow.
 *
 * @internal
 */ function mulPow2(x, p) {
    while(p > 1000){
        x *= 2 ** 1000;
        p -= 1000;
    }
    while(p < -1000){
        x *= 2 ** -1000;
        p += 1000;
    }
    return x * 2 ** p;
}


;// ./src/constants.ts
// import { strToDd } from "./str-to-dd/str-to-dd.js";
/** π as a (correctly rounded) double-double precision floating point number */ const PIDd = [
    1.2246467991473532e-16,
    3.141592653589793
];
/** Euler's number `e` as a (correctly rounded) double-double precision floating point number */ const eDd = [
    1.4456468917292502e-16,
    2.718281828459045
];
/** The natural logarithm of 2 as a (correctly rounded) double-double precision floating point number */ const ln2Dd = [
    2.3190468138462996e-17,
    0.6931471805599453
];
/** The Euler–Mascheroni constant `γ` as a (correctly rounded) double-double precision floating point number */ const eulerDd = [
    -4.942915152430645e-18,
    0.5772156649015329
];
// strToDd('0.5772156649015328606065120900824024310421593359399235988057672348');//?


;// ./src/double-double/binary/dd-gt.ts
/**
 * Returns `true` if `x1 > x2`, `false` otherwise.
 * 
 * * assumes the double-doubles are normalized (as returned by the functions in
 * this library)
 * 
 * @param x1 a double-double precision floating point number
 * @param x2 a double-double precision floating point number
 */ function ddGt(x1, x2) {
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
const a0 = [
    0,
    1
];
// The coefficients below are the correctly rounded double-doubles of the 
// given decimal strings (as given by `strToDd`), precomputed to avoid the cost 
// of string conversion at module load.
const a1 = [
    -9.25185853854297e-18,
    -0.16666666666666666
]; // -0.166666666666666666666666666666666667
const a2 = [
    1.1564823173178714e-19,
    0.008333333333333333
]; // 0.00833333333333333333333333333333333069
const a3 = [
    -1.7209558293417997e-22,
    -0.0001984126984126984
]; // -0.000198412698412698412698412698412671319
const a4 = [
    -1.8583932740480583e-22,
    0.0000027557319223985893
]; // 2.75573192239858906525573192223995808e-6
const a5 = [
    1.4488140715251414e-24,
    -2.505210838544172e-8
]; // -2.50521083854417187750521077962123682e-8
const a6 = [
    1.2585293106672098e-26,
    1.6059043836821613e-10
]; // 1.60590438368216145993922289621550506e-10
const a7 = [
    -7.036096766056555e-30,
    -7.647163731819816e-13
]; // -7.64716373181981647587481187300831335e-13
const a8 = [
    1.61699240775674e-31,
    2.8114572543455206e-15
]; // 2.81145725434552075980975905006999319e-15
const a9 = [
    -8.892173355837475e-35,
    -8.220635246624326e-18
]; // -8.22063524662432650297086257962703293e-18
const aa = [
    -1.9242101469994406e-38,
    1.9572941063389003e-20
]; // 1.95729410633890026175367390152305383e-20
const ab = [
    2.9153006001390485e-39,
    -3.8681701705134027e-23
]; // -3.86817017051340241224838720319634797e-23
const ac = [
    -8.067279870395944e-43,
    6.446950239992221e-26
]; // 6.44695023999222092772271073593727141e-26
const ad = [
    -4.2307674290181006e-45,
    -9.183677960601706e-29
]; // -9.1836779606017064087088551595474321e-29
const ae = [
    3.210442311866782e-48,
    1.1307820705777977e-31
]; // 1.13078207057779775850779192271873238e-31
const af = [
    6.77241689956236e-51,
    1.192900464242203e-34
]; // 1.19290046424220296937971101373203567e-34
const PIDd_2 = ddDivDouble(PIDd, 2);
const PIDd2 = ddMultDouble1(2, PIDd);
/**
 * Returns the sine of the given double-double precision floating point number.
 *
 * * the polynomial approximation used has a maximum relative error of 
 * 1.64e-39 (see the link in the source file); additional round-off occurs 
 * during its evaluation
 * * the argument reduction (for |θ| > π/2) uses `PIDd` (π as a double-double)
 * and is therefore not exact, i.e. the absolute error grows with |θ|
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
 */ function ddSin(θ) {
    let negate = θ[1] < 0;
    if (negate) {
        θ = [
            -θ[0],
            -θ[1]
        ];
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
    const r = ddMultDd(x1, ddAddDd(a0, ddMultDd(x2, ddAddDd(a1, ddMultDd(x2, ddAddDd(a2, ddMultDd(x2, ddAddDd(a3, ddMultDd(x2, ddAddDd(a4, ddMultDd(x2, ddAddDd(a5, ddMultDd(x2, ddAddDd(a6, ddMultDd(x2, ddAddDd(a7, ddMultDd(x2, ddAddDd(a8, ddMultDd(x2, ddAddDd(a9, ddMultDd(x2, ddAddDd(aa, ddMultDd(x2, ddAddDd(ab, ddMultDd(x2, ddAddDd(ac, ddMultDd(x2, ddAddDd(ad, ddMultDd(x2, ddDiffDd(ae, ddMultDd(x2, af)))))))))))))))))))))))))))))));
    return negate ? [
        -r[0],
        -r[1]
    ] : r;
}


;// ./src/double-double/unary/dd-cos.ts




// See https://gist.github.com/publik-void/067f7f2fef32dbe5c27d6e215f824c91#sin-abs-error-minimized-degree-33
// Maximum relative error: 1.64002557798425265331386526431095701e-39
// Maximum absolute error: 7.80601195686311420504782780641951757e-41
const dd_cos_PIDd_2 = ddDivDouble(PIDd, 2);
/**
 * Returns the cosine of the given double-double precision floating point number.
 *
 * * calculated as `ddSin(θ + π/2)` - see `ddSin` for accuracy notes; note that 
 * the relative error can be large close to the zeros of the cosine
 *
 * @param θ a double-double precision floating point number
 * 
 * @example
 * ```
 * import { PIDd } from 'double-double';
 * import { ddDivDouble } from 'double-double';
 * 
 * ddCos(ddDivDouble(PIDd,6));  //=> [5.017542110903452e-17, 0.8660254037844386]
 * ```
 */ function ddCos(θ) {
    const x_ = ddAddDd(θ, dd_cos_PIDd_2);
    return ddSin(x_);
}


;// ./src/double-double/binary/dd-eq.ts
/**
 * Returns `true` if `x1 === x2`, `false` otherwise.
 * 
 * * assumes the double-doubles are normalized (as returned by the functions in
 * this library)
 * 
 * @param x1 a double-double precision floating point number
 * @param x2 a double-double precision floating point number
 */ function ddEq(x1, x2) {
    return x1[0] === x2[0] && x1[1] === x2[1];
}


;// ./src/double-double/binary/dd-gte.ts
/**
 * Returns `true` if `x1 >= x2`, `false` otherwise.
 * 
 * * assumes the double-doubles are normalized (as returned by the functions in
 * this library)
 * 
 * @param x1 a double-double precision floating point number
 * @param x2 a double-double precision floating point number
 */ function ddGte(x1, x2) {
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
 * * assumes the double-doubles are normalized (as returned by the functions in
 * this library)
 * 
 * @param x1 a double-double precision floating point number
 * @param x2 a double-double precision floating point number
 */ function ddLt(x1, x2) {
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
 * * assumes the double-doubles are normalized (as returned by the functions in
 * this library)
 * 
 * @param x1 a double-double precision floating point number
 * @param x2 a double-double precision floating point number
 */ function ddLte(x1, x2) {
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
 * * relative error bound: 2u^2, i.e. fl(a-b) = (a-b)(1+ϵ), 
 * where ϵ <= 2u^2, u = 0.5 * Number.EPSILON
 * * the error bound is sharp
 * 
 * ALGORITHM 4 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
 * (with `y` negated)
 * @param x a double-double precision floating point number
 * @param y a double precision floating point number
 */ function ddDiffDouble(x, y) {
    const xl = x[0];
    const xh = x[1];
    //const [sl,sh] = twoSum(xh,-y);
    const sh = xh - y;
    const c = sh - xh;
    const sl = xh - (sh - c) + (-y - c);
    const v = xl + sl;
    //const [zl,zh] = fastTwoSum(sh,v);
    const zh = sh + v;
    const zl = v - (zh - sh);
    return [
        zl,
        zh
    ];
}


;// ./src/index.ts























































export { PIDd, bitLength, ddAbs, ddAddDd, ddAddDouble, ddCompare, ddCos, ddDiffDd, ddDiffDouble, ddDivBy2, ddDivDd, ddDivDdWithError, ddDivDouble, ddEq, ddGt, ddGte, ddLt, ddLte, ddMax, ddMin, ddMultBy2, ddMultBy4, ddMultByNeg2, ddMultByNeg4, ddMultDd, ddMultDouble1, ddMultDouble2, ddNegativeOf, ddProduct, ddSign, ddSin, ddSqrt, ddSum, ddToStr, divWithErr, doubleDivDouble, doubleSqrt, doubleToBinaryString, doubleToOctets, eDd, eulerDd, exponent, fastTwoDiff, fastTwoSum, getHighestSetBit, getLowestSetBit, isBitAligned, ln2Dd, lsbExponent, msbExponent, parseDouble, parseDoubleDetailed, reduceSignificand, significand, split, sqrtWithErr, strToDd, twoDiff, twoProduct, twoSum };
