---
id: "_double_mixed_double_double_double_div_double_"
title: "doubleDivDouble"
sidebar_label: "doubleDivDouble"
---

**doubleDivDouble**(`x`: number, `y`: number): *number[]*

*Defined in [double-mixed-double-double/double-div-double.ts:20](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-mixed-double-double/double-div-double.ts#L20)*

Returns the result of dividing a double-precision floating point
number by a double with the result given as a double-double.
This is a slight modification of ddDivDd.

* **!! NOT an error-free transformation !!**
* relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2,
u = 0.5 * Number.EPSILON

* ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
(slightly modified)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | dividend |
`y` | number | divisor  |

**Returns:** *number[]*
