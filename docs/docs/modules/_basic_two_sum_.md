---
id: "_basic_two_sum_"
title: "twoSum"
sidebar_label: "twoSum"
---

**twoSum**(`a`: number, `b`: number): *number[]*

*Defined in [basic/two-sum.ts:14](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/basic/two-sum.ts#L14)*

Returns the exact result of adding two doubles.

* the resulting array is the reverse of the standard twoSum in the literature.

Theorem 7 (Knuth): Let a and b be p-bit floating-point numbers. Then the
following algorithm will produce a nonoverlapping expansion x + y such that
a + b = x + y, where x is an approximation to a + b and y is the roundoff
error in the calculation of x.

See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

**Returns:** *number[]*
