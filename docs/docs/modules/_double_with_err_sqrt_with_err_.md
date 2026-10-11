---
id: "_double_with_err_sqrt_with_err_"
title: "sqrtWithErr"
sidebar_label: "sqrtWithErr"
---

**sqrtWithErr**(`x`: number, `x_`: number): *object*

*Defined in [double-with-err/sqrt-with-err.ts:15](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-with-err/sqrt-with-err.ts#L15)*

Returns the result of the square root of a double floating point number
together with an absolute error bound where `x_` is an absolute error
bound on the input value.

* the returned error bound also accounts for the rounding errors of the
floating point operations involved (including the rounding of `est` itself)
* see also "A Reduced Product of Absolute and Relative Error Bounds for Floating-point Analysis"
by Maxime Jacquemin, Sylvie Putot, and Franck Vedrine

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | the radicand |
`x_` | number | absolute value error bound in the radicand  |

**Returns:** *object*

* **err**: *number* = Math.max(maxSqrt - est, est) + 2*eps*maxSqrt

* **est**: *number*
