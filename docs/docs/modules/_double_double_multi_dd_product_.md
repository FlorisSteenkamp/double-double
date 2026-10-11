---
id: "_double_double_multi_dd_product_"
title: "ddProduct"
sidebar_label: "ddProduct"
---

**ddProduct**(`qs`: number[][]): *number[]*

*Defined in [double-double/multi/dd-product.ts:13](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-double/multi/dd-product.ts#L13)*

Returns the result of multiplying together an array of double-double-precision
floating point numbers naively (i.e. not using pairwise addition to reduce
error a bit).

* relative error bound: (1+ϵ)^(n-1) - 1 ≈ (n-1)ϵ,
where |ϵ| < 5u^2, u = 0.5 * Number.EPSILON (the error bound of a single
multiplication), assuming no underflow or overflow
* returns `[0,1]` (i.e. one) if the given array is empty

**Parameters:**

Name | Type |
------ | ------ |
`qs` | number[][] |

**Returns:** *number[]*
