---
id: "_basic_split_"
title: "split"
sidebar_label: "split"
---

**split**(`a`: number): *number[]*

*Defined in [basic/split.ts:21](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/basic/split.ts#L21)*

Returns the result of splitting a double into 2 26-bit doubles.

Theorem 17 (Veltkamp-Dekker): Let a be a p-bit floating-point number, where
p >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the
following algorithm will produce a (p-s)-bit value a_hi and a
nonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and
a = a_hi + a_lo.

see e.g. [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | number | A double floating point number  |

**Returns:** *number[]*
