---
id: "_double_double_with_error_dd_div_dd_with_error_"
title: "ddDivDdWithError"
sidebar_label: "ddDivDdWithError"
---

**ddDivDdWithError**(`numer`: number[], `denom`: number[], `nE`: number, `dE`: number): *object*

*Defined in [double-double-with-error/dd-div-dd-with-error.ts:28](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-double-with-error/dd-div-dd-with-error.ts#L28)*

Returns the result of dividing two double-double-precision floating point
numbers together with an absolute error bound where nE and dE are absolute
error bounds on the *input* values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`numer` | number[] | numerator - a double-double-precision float |
`denom` | number[] | denominator - a double-double-precision float |
`nE` | number | absolute value error bound in numerator |
`dE` | number | absolute value error bound in denominator  |

**Returns:** *object*

* **err**: *number* = Number.POSITIVE_INFINITY

* **est**: *number[]*
