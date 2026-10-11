---
id: "_double_mixed_double_double_dd_diff_double_"
title: "ddDiffDouble"
sidebar_label: "ddDiffDouble"
---

**ddDiffDouble**(`x`: number[], `y`: number): *number[]*

*Defined in [double-mixed-double-double/dd-diff-double.ts:15](https://github.com/FlorisSteenkamp/double-double/blob/master/src/double-mixed-double-double/dd-diff-double.ts#L15)*

Returns the result of subtracting the second given double-precision
floating point number from the first double-double precision float.

* relative error bound: 2u^2, i.e. fl(a-b) = (a-b)(1+ϵ),
where ϵ <= 2u^2, u = 0.5 * Number.EPSILON
* the error bound is sharp

ALGORITHM 4 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
(with `y` negated)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number[] | a double-double precision floating point number |
`y` | number | a double precision floating point number  |

**Returns:** *number[]*
