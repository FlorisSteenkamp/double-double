---
id: "_double_double_binary_dd_add_dd_"
title: "ddAddDd"
sidebar_label: "ddAddDd"
---

**ddAddDd**(`x`: number[], `y`: number[]): *number[]*

*Defined in [double-double/binary/dd-add-dd.ts:15](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-double/binary/dd-add-dd.ts#L15)*

Returns the result of adding two double-double-precision floating point
numbers.

* relative error bound: 3u^2 + 13u^3, i.e. fl(a+b) = (a+b)(1+ϵ),
where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON
* the error bound is not sharp - the worst case that could be found by the
authors were 2.25u^2

ALGORITHM 6 of https://hal.archives-ouvertes.fr/hal-01351529v3/document

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number[] | a double-double precision floating point number |
`y` | number[] | another double-double precision floating point number  |

**Returns:** *number[]*
