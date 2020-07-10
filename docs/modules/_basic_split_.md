[double-double](../README.md) › [Globals](../globals.md) › ["basic/split"](_basic_split_.md)

# Module: "basic/split"

## Index

### Variables

* [f](_basic_split_.md#const-f)

### Functions

* [split](_basic_split_.md#split)

## Variables

### `Const` f

• **f**: *134217729* = 134217729

*Defined in [basic/split.ts:5](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/basic/split.ts#L5)*

=== Math.ceil(p/2) where p is the # of significand bits in a double === 53.

## Functions

###  split

▸ **split**(`a`: number): *number[]*

*Defined in [basic/split.ts:20](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/basic/split.ts#L20)*

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
