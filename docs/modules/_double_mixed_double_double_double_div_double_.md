[double-double](../README.md) › [Globals](../globals.md) › ["double-mixed-double-double/double-div-double"](_double_mixed_double_double_double_div_double_.md)

# Module: "double-mixed-double-double/double-div-double"

## Index

### Variables

* [f](_double_mixed_double_double_double_div_double_.md#const-f)

### Functions

* [doubleDivDouble](_double_mixed_double_double_double_div_double_.md#doubledivdouble)

## Variables

### `Const` f

• **f**: *134217729* = 134217729

*Defined in [double-mixed-double-double/double-div-double.ts:2](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-mixed-double-double/double-div-double.ts#L2)*

## Functions

###  doubleDivDouble

▸ **doubleDivDouble**(`x`: number, `y`: number): *number[]*

*Defined in [double-mixed-double-double/double-div-double.ts:19](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-mixed-double-double/double-div-double.ts#L19)*

Returns the result of dividing a double-precision floating point
number by a double with the result given as a double-double.
This is a slight modification of ddDivDd.

* **!! NOT an error-free transformation !!**
* relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+ϵ), where ϵ <= 3u^2,
u = 0.5 * Number.EPSILON

* ALGORITHM 15 of https://hal.archives-ouvertes.fr/hal-01351529v3/document
(slightly modified)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | dividend |
`y` | number | divisor  |

**Returns:** *number[]*
