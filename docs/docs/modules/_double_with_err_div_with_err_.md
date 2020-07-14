---
id: "_double_with_err_div_with_err_"
title: "divWithErr"
sidebar_label: "divWithErr"
---

**divWithErr**(`n`: number, `d`: number, `nE`: number, `dE`: number): *object*

*Defined in [double-with-err/div-with-err.ts:16](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-with-err/div-with-err.ts#L16)*

Returns the result of dividing two double floating point numbers
together with an absolute error bound where nE and dE are absolute error
bounds on the input values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | numerator |
`d` | number | denominator |
`nE` | number | absolute value error bound in numerator |
`dE` | number | absolute value error bound in denominator  |

**Returns:** *object*

* **err**: *number* = Number.POSITIVE_INFINITY

* **est**: *number*
