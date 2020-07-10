[double-double](../README.md) › [Globals](../globals.md) › ["basic/fast-two-sum"](_basic_fast_two_sum_.md)

# Module: "basic/fast-two-sum"

## Index

### Functions

* [fastTwoSum](_basic_fast_two_sum_.md#fasttwosum)

## Functions

###  fastTwoSum

▸ **fastTwoSum**(`a`: number, `b`: number): *number[]*

*Defined in [basic/fast-two-sum.ts:12](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/basic/fast-two-sum.ts#L12)*

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
