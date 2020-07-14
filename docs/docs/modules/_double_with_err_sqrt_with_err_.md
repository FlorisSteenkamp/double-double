---
id: "_double_with_err_sqrt_with_err_"
title: "sqrtWithErr"
sidebar_label: "sqrtWithErr"
---

**sqrtWithErr**(`x`: number, `x_`: number): *object*

*Defined in [double-with-err/sqrt-with-err.ts:15](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-with-err/sqrt-with-err.ts#L15)*

Returns the result of the square root of a double floating point number
together with an absolute error bound where x_ is an absolute error
bound on the input value.
* see also "A Reduced Product of Absolute and Relative Error Bounds for Floating-point Analysis"
by Maxime Jacquemin, Sylvie Putot, and Franck Vedrine

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | numerator |
`x_` | number | absolute value error bound in numerator  |

**Returns:** *object*

* **err**: *number* = Math.max(Math.sqrt(x + x_) - est, est)

* **est**: *number*
