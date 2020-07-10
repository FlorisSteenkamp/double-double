[double-double](../README.md) › [Globals](../globals.md) › ["double-with-err/sqrt-with-err"](_double_with_err_sqrt_with_err_.md)

# Module: "double-with-err/sqrt-with-err"

## Index

### Variables

* [abs](_double_with_err_sqrt_with_err_.md#const-abs)
* [eps](_double_with_err_sqrt_with_err_.md#const-eps)
* [u](_double_with_err_sqrt_with_err_.md#const-u)

### Functions

* [sqrtWithErr](_double_with_err_sqrt_with_err_.md#sqrtwitherr)

## Variables

### `Const` abs

• **abs**: *abs* = Math.abs

*Defined in [double-with-err/sqrt-with-err.ts:2](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-with-err/sqrt-with-err.ts#L2)*

___

### `Const` eps

• **eps**: *number* = Number.EPSILON

*Defined in [double-with-err/sqrt-with-err.ts:3](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-with-err/sqrt-with-err.ts#L3)*

___

### `Const` u

• **u**: *number* = eps / 2

*Defined in [double-with-err/sqrt-with-err.ts:4](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-with-err/sqrt-with-err.ts#L4)*

## Functions

###  sqrtWithErr

▸ **sqrtWithErr**(`x`: number, `x_`: number): *object*

*Defined in [double-with-err/sqrt-with-err.ts:16](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-with-err/sqrt-with-err.ts#L16)*

Returns the result of the square root of a double floating point number
together with an absolute error bound where x_ is an absolute error
bound on the input value.
* see also "A Reduced Product of Absolute and Relative Error Bounds for Floating-point Analysis"
by Maxime Jacquemin, Sylvie Putot, and Franck Vedrine

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | numerator |
`x_` | number | absolute value error bound in numerator  |

**Returns:** *object*

* **err**: *number* = Math.max(Math.sqrt(x + x_) - est, est)

* **est**: *number*
