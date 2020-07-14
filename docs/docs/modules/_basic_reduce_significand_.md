---
id: "_basic_reduce_significand_"
title: "reduceSignificand"
sidebar_label: "reduceSignificand"
---

**reduceSignificand**(`a`: number, `bits`: number): *number*

*Defined in [basic/reduce-significand.ts:17](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/basic/reduce-significand.ts#L17)*

Truncates a floating point value's significand and returns the result.
Similar to split, but with the ability to specify the number of bits to keep.

Theorem 17 (Veltkamp-Dekker): Let a be a p-bit floating-point number, where
p >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the
following algorithm will produce a (p-s)-bit value a_hi and a
nonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and
a = a_hi + a_lo.

* see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | number | a double |
`bits` | number | the number of significand bits to leave intact  |

**Returns:** *number*
