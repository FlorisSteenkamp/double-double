---
id: "_double_double_binary_dd_mult_dd_"
title: "ddMultDd"
sidebar_label: "ddMultDd"
---

**ddMultDd**(`x`: number[], `y`: number[]): *number[]*

*Defined in [double-double/binary/dd-mult-dd.ts:18](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-double/binary/dd-mult-dd.ts#L18)*

Returns the product of two double-double-precision floating point numbers.

* relative error bound: 7u^2, i.e. fl(a+b) = (a+b)(1+ϵ),
where ϵ <= 7u^2, u = 0.5 * Number.EPSILON
the error bound is not sharp - the worst case that could be found by the
authors were 5u^2

* ALGORITHM 10 of https://hal.archives-ouvertes.fr/hal-01351529v3/document

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number[] | a double-double precision floating point number |
`y` | number[] | another double-double precision floating point number  |

**Returns:** *number[]*
