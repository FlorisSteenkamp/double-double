---
id: "_basic_fast_two_sum_"
title: "fastTwoSum"
sidebar_label: "fastTwoSum"
---

**fastTwoSum**(`a`: number, `b`: number): *number[]*

*Defined in [basic/fast-two-sum.ts:12](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/basic/fast-two-sum.ts#L12)*

Returns the sum and exact error of adding two floating point numbers.
Uses an EFT (error-free transformation), i.e. a+b === x+y exactly.
The returned sum is a non-overlapping expansion (smallest value first!).

Precondition: abs(a) >= abs(b) - A fast test that can be used is
(a > b) === (a > -b)

See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

**Returns:** *number[]*
