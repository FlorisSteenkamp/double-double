[double-double](../README.md) › [Globals](../globals.md) › ["basic/two-square"](_basic_two_square_.md)

# Module: "basic/two-square"

## Index

### Variables

* [f](_basic_two_square_.md#const-f)

### Functions

* [twoSquare](_basic_two_square_.md#twosquare)

## Variables

### `Const` f

• **f**: *number* = 2**27 + 1

*Defined in [basic/two-square.ts:2](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/basic/two-square.ts#L2)*

## Functions

###  twoSquare

▸ **twoSquare**(`a`: number): *number[]*

*Defined in [basic/two-square.ts:19](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/basic/two-square.ts#L19)*

Returns the exact result of squaring a double.

* the resulting expansion is least significant double first.

Theorem 18 (Shewchuk): Let a and b be p-bit floating-point numbers, where
p >= 6. Then the following algorithm will produce a nonoverlapping expansion
x + y such that ab = x + y, where x is an approximation to ab and y
represents the roundoff error in the calculation of x. Furthermore, if
round-to-even tiebreaking is used, x and y are non-adjacent.

See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | number | A double  |

**Returns:** *number[]*
