[double-double](../README.md) › [Globals](../globals.md) › ["basic/fast-two-diff"](_basic_fast_two_diff_.md)

# Module: "basic/fast-two-diff"

## Index

### Functions

* [fastTwoDiff](_basic_fast_two_diff_.md#fasttwodiff)

## Functions

###  fastTwoDiff

▸ **fastTwoDiff**(`a`: number, `b`: number): *number[]*

*Defined in [basic/fast-two-diff.ts:13](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/basic/fast-two-diff.ts#L13)*

Returns the difference and exact error of subtracting two floating point
numbers.
Uses an EFT (error-free transformation), i.e. a-b === x+y exactly.
The returned result is a non-overlapping expansion (smallest value first!).

Precondition: abs(a) >= abs(b) - A fast test that can be used is
(a > b) === (a > -b)

See https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

**Returns:** *number[]*
