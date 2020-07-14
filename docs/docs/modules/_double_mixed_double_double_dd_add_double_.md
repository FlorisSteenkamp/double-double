---
id: "_double_mixed_double_double_dd_add_double_"
title: "ddAddDouble"
sidebar_label: "ddAddDouble"
---

**ddAddDouble**(`x`: number[], `y`: number): *number[]*

*Defined in [double-mixed-double-double/dd-add-double.ts:14](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-mixed-double-double/dd-add-double.ts#L14)*

Returns the result of adding a double to a double-double precision floating
point number.

* relative error bound: 2u^2, i.e. fl(a+b) = (a+b)(1+ϵ),
where ϵ <= 2u^2, u = 0.5 * Number.EPSILON
* the error bound is sharp

ALGORITHM 4 of https://hal.archives-ouvertes.fr/hal-01351529v3/document

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number[] | a double-double precision floating point number |
`y` | number | a double precision floating point number  |

**Returns:** *number[]*
