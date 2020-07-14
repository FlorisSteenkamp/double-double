---
id: "_double_mixed_double_double_dd_div_double_"
title: "ddDivDouble"
sidebar_label: "ddDivDouble"
---

**ddDivDouble**(`x`: number[], `y`: number): *number[]*

*Defined in [double-mixed-double-double/dd-div-double.ts:18](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-mixed-double-double/dd-div-double.ts#L18)*

Returns the result of dividing a double-double-precision floating point
number by a double.

* relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2,
u = 0.5 * Number.EPSILON
* the bound is very sharp

* ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number[] | a double-double precision floating point number |
`y` | number | the double-precision divisor  |

**Returns:** *number[]*
