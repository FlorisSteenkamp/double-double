---
id: "_double_double_binary_dd_mult_dd_"
title: "ddMultDd"
sidebar_label: "ddMultDd"
---

**ddMultDd**(`x`: number[], `y`: number[]): *number[]*

*Defined in [double-double/binary/dd-mult-dd.ts:18](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-double/binary/dd-mult-dd.ts#L18)*

Returns the product of two double-double-precision floating point numbers.

* relative error bound: 5u^2, i.e. fl(a*b) = (a*b)(1+ϵ),
where |ϵ| < 5u^2, u = 0.5 * Number.EPSILON (assuming no underflow or overflow)
* this bound (for round-to-nearest ties-to-even, as used by JavaScript) was
formally proven (in Coq) by J.-M. Muller and L. Rideau, see
https://doi.org/10.1145/3484514 - it improves on the 7u^2 bound given in
the original paper (below); the worst case found is 4.985u^2

* assumes no overflow; note that (Veltkamp) splitting overflows (giving
`NaN`) if the magnitude of `x[1]` or `y[1]` exceeds ~2^996

* ALGORITHM 10 (DWTimesDW1) of https://hal.archives-ouvertes.fr/hal-01351529v3/document

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number[] | a double-double precision floating point number |
`y` | number[] | another double-double precision floating point number  |

**Returns:** *number[]*
