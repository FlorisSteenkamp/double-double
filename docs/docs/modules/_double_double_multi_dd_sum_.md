---
id: "_double_double_multi_dd_sum_"
title: "ddSum"
sidebar_label: "ddSum"
---

**ddSum**(`qs`: number[][]): *number[]*

*Defined in [double-double/multi/dd-sum.ts:12](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-double/multi/dd-sum.ts#L12)*

Returns the result of summing an array of double-double-precision floating
point numbers naively (i.e. not using pairwise addition to reduce error a bit).

* an error bound is given by: (n-1)(1+ϵ),
where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON

**Parameters:**

Name | Type |
------ | ------ |
`qs` | number[][] |

**Returns:** *number[]*
