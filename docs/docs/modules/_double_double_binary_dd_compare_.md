---
id: "_double_double_binary_dd_compare_"
title: "ddCompare"
sidebar_label: "ddCompare"
---

**ddCompare**(`x`: number[], `y`: number[]): *number*

*Defined in [double-double/binary/dd-compare.ts:14](https://github.com/FlorisSteenkamp/double-double/blob/master/src/double-double/binary/dd-compare.ts#L14)*

Returns `0` if `x === y`, a positive value if `x > y` or a negative value if
`x < y` (or `NaN` if `x` or `y` is `NaN`).

* only the sign of the result is meaningful, e.g. it can be used as a
comparator in `Array.prototype.sort`
* assumes the double-doubles are normalized (as returned by the functions in
this library), i.e. `hi === fl(hi + lo)`, in which case the result is exact

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number[] | a double-double precision floating point number |
`y` | number[] | another double-double precision floating point number  |

**Returns:** *number*
