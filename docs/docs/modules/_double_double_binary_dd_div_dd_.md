---
id: "_double_double_binary_dd_div_dd_"
title: "ddDivDd"
sidebar_label: "ddDivDd"
---

**ddDivDd**(`x`: number[], `y`: number[]): *number[]*

*Defined in [double-double/binary/dd-div-dd.ts:18](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-double/binary/dd-div-dd.ts#L18)*

Returns the result of dividing two double-double-precision floating point
numbers, i.e. returns x/y.

* relative error bound: 15u^2 + 56u^3, i.e. fl(a/b) = (a/b)(1+ϵ),
where ϵ <= 15u^2 + 56u^3, u = 0.5 * Number.EPSILON
* the largest error found was 8.465u^2

* ALGORITHM 17 of https://hal.archives-ouvertes.fr/hal-01351529v3/document

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number[] | a double-double precision floating point number |
`y` | number[] | another double-double precision floating point number  |

**Returns:** *number[]*
