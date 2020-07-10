[double-double](../README.md) › [Globals](../globals.md) › ["double-double/binary/dd-mult-dd"](_double_double_binary_dd_mult_dd_.md)

# Module: "double-double/binary/dd-mult-dd"

## Index

### Variables

* [f](_double_double_binary_dd_mult_dd_.md#const-f)

### Functions

* [ddMultDd](_double_double_binary_dd_mult_dd_.md#ddmultdd)

## Variables

### `Const` f

• **f**: *number* = 2**27 + 1

*Defined in [double-double/binary/dd-mult-dd.ts:2](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-double/binary/dd-mult-dd.ts#L2)*

## Functions

###  ddMultDd

▸ **ddMultDd**(`x`: number[], `y`: number[]): *number[]*

*Defined in [double-double/binary/dd-mult-dd.ts:17](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-double/binary/dd-mult-dd.ts#L17)*

Returns the product of two double-double-precision floating point numbers.

* relative error bound: 7u^2, i.e. fl(a+b) = (a+b)(1+ϵ),
where ϵ <= 7u^2, u = 0.5 * Number.EPSILON
the error bound is not sharp - the worst case that could be found by the
authors were 5u^2

* ALGORITHM 10 of https://hal.archives-ouvertes.fr/hal-01351529v3/document

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number[] | a double-double precision floating point number |
`y` | number[] | another double-double precision floating point number  |

**Returns:** *number[]*
