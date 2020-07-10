[double-double](../README.md) › [Globals](../globals.md) › ["basic/two-product"](_basic_two_product_.md)

# Module: "basic/two-product"

## Index

### Variables

* [f](_basic_two_product_.md#const-f)

### Functions

* [twoProduct](_basic_two_product_.md#twoproduct)

## Variables

### `Const` f

• **f**: *134217729* = 134217729

*Defined in [basic/two-product.ts:2](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/basic/two-product.ts#L2)*

## Functions

###  twoProduct

▸ **twoProduct**(`a`: number, `b`: number): *number[]*

*Defined in [basic/two-product.ts:20](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/basic/two-product.ts#L20)*

Returns the exact result of multiplying two doubles.

* the resulting array is the reverse of the standard twoSum in the literature.

Theorem 18 (Shewchuk): Let a and b be p-bit floating-point numbers, where
p >= 6. Then the following algorithm will produce a nonoverlapping expansion
x + y such that ab = x + y, where x is an approximation to ab and y
represents the roundoff error in the calculation of x. Furthermore, if
round-to-even tiebreaking is used, x and y are non-adjacent.

See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | number | A double |
`b` | number | Another double  |

**Returns:** *number[]*
