---
id: "_basic_fast_two_diff_"
title: "fastTwoDiff"
sidebar_label: "fastTwoDiff"
---

**fastTwoDiff**(`a`: number, `b`: number): *number[]*

*Defined in [basic/fast-two-diff.ts:13](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/basic/fast-two-diff.ts#L13)*

Returns the difference and exact error of subtracting two floating point
numbers.
Uses an EFT (error-free transformation), i.e. `a-b === x+y` exactly.
The returned result is a non-overlapping expansion (smallest value first!).

* **precondition:** `abs(a) >= abs(b)` (a fast test that can be used is
`(a > b) === (a > -b)`)

See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

**Returns:** *number[]*
