[double-double](../README.md) › [Globals](../globals.md) › ["double-with-err/div-with-err"](_double_with_err_div_with_err_.md)

# Module: "double-with-err/div-with-err"

## Index

### Variables

* [abs](_double_with_err_div_with_err_.md#const-abs)
* [u](_double_with_err_div_with_err_.md#const-u)

### Functions

* [divWithErr](_double_with_err_div_with_err_.md#divwitherr)

## Variables

### `Const` abs

• **abs**: *abs* = Math.abs

*Defined in [double-with-err/div-with-err.ts:2](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-with-err/div-with-err.ts#L2)*

___

### `Const` u

• **u**: *number* = Number.EPSILON / 2

*Defined in [double-with-err/div-with-err.ts:3](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-with-err/div-with-err.ts#L3)*

## Functions

###  divWithErr

▸ **divWithErr**(`n`: number, `d`: number, `nE`: number, `dE`: number): *object*

*Defined in [double-with-err/div-with-err.ts:15](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-with-err/div-with-err.ts#L15)*

Returns the result of dividing two double floating point numbers
together with an absolute error bound where nE and dE are absolute error
bounds on the input values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`n` | number | numerator |
`d` | number | denominator |
`nE` | number | absolute value error bound in numerator |
`dE` | number | absolute value error bound in denominator  |

**Returns:** *object*

* **err**: *number* = Number.POSITIVE_INFINITY

* **est**: *number*
