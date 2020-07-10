[double-double](../README.md) › [Globals](../globals.md) › ["double-mixed-double-double/dd-div-double"](_double_mixed_double_double_dd_div_double_.md)

# Module: "double-mixed-double-double/dd-div-double"

## Index

### Variables

* [f](_double_mixed_double_double_dd_div_double_.md#const-f)

### Functions

* [ddDivDouble](_double_mixed_double_double_dd_div_double_.md#dddivdouble)

## Variables

### `Const` f

• **f**: *134217729* = 134217729

*Defined in [double-mixed-double-double/dd-div-double.ts:2](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-mixed-double-double/dd-div-double.ts#L2)*

## Functions

###  ddDivDouble

▸ **ddDivDouble**(`x`: number[], `y`: number): *number[]*

*Defined in [double-mixed-double-double/dd-div-double.ts:17](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-mixed-double-double/dd-div-double.ts#L17)*

Returns the result of dividing a double-double-precision floating point
number by a double.

* relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2,
u = 0.5 * Number.EPSILON
* the bound is very sharp

* ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number[] | a double-double precision floating point number |
`y` | number | the double-precision divisor  |

**Returns:** *number[]*
