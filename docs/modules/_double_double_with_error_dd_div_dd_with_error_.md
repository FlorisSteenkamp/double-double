[double-double](../README.md) › [Globals](../globals.md) › ["double-double-with-error/dd-div-dd-with-error"](_double_double_with_error_dd_div_dd_with_error_.md)

# Module: "double-double-with-error/dd-div-dd-with-error"

## Index

### Variables

* [div](_double_double_with_error_dd_div_dd_with_error_.md#const-div)
* [eps](_double_double_with_error_dd_div_dd_with_error_.md#const-eps)
* [u](_double_double_with_error_dd_div_dd_with_error_.md#const-u)
* [uu](_double_double_with_error_dd_div_dd_with_error_.md#const-uu)

### Functions

* [ddDivDdWithError](_double_double_with_error_dd_div_dd_with_error_.md#dddivddwitherror)

## Variables

### `Const` div

• **div**: *[ddDivDd](_double_double_binary_dd_div_dd_.md#dddivdd)* = ddDivDd

*Defined in [double-double-with-error/dd-div-dd-with-error.ts:6](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-double-with-error/dd-div-dd-with-error.ts#L6)*

___

### `Const` eps

• **eps**: *number* = Number.EPSILON

*Defined in [double-double-with-error/dd-div-dd-with-error.ts:9](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-double-with-error/dd-div-dd-with-error.ts#L9)*

___

### `Const` u

• **u**: *number* = eps / 2

*Defined in [double-double-with-error/dd-div-dd-with-error.ts:10](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-double-with-error/dd-div-dd-with-error.ts#L10)*

___

### `Const` uu

• **uu**: *number* = u*u

*Defined in [double-double-with-error/dd-div-dd-with-error.ts:11](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-double-with-error/dd-div-dd-with-error.ts#L11)*

## Functions

###  ddDivDdWithError

▸ **ddDivDdWithError**(`numer`: number[], `denom`: number[], `nE`: number, `dE`: number): *object*

*Defined in [double-double-with-error/dd-div-dd-with-error.ts:24](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-double-with-error/dd-div-dd-with-error.ts#L24)*

Returns the result of dividing two double-double-precision floating point
numbers together with an absolute error bound where nE and dE are absolute
error bounds on the *input* values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`numer` | number[] | numerator - a double-double-precision float |
`denom` | number[] | denominator - a double-double-precision float |
`nE` | number | absolute value error bound in numerator |
`dE` | number | absolute value error bound in denominator  |

**Returns:** *object*

* **err**: *number* = Number.POSITIVE_INFINITY

* **est**: *number[]*
