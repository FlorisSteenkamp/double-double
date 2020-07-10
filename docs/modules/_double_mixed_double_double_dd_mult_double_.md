[double-double](../README.md) › [Globals](../globals.md) › ["double-mixed-double-double/dd-mult-double"](_double_mixed_double_double_dd_mult_double_.md)

# Module: "double-mixed-double-double/dd-mult-double"

## Index

### Variables

* [f](_double_mixed_double_double_dd_mult_double_.md#const-f)

### Functions

* [ddMultDouble1](_double_mixed_double_double_dd_mult_double_.md#ddmultdouble1)
* [ddMultDouble2](_double_mixed_double_double_dd_mult_double_.md#ddmultdouble2)

## Variables

### `Const` f

• **f**: *134217729* = 134217729

*Defined in [double-mixed-double-double/dd-mult-double.ts:2](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-mixed-double-double/dd-mult-double.ts#L2)*

## Functions

###  ddMultDouble1

▸ **ddMultDouble1**(`y`: number, `x`: number[]): *number[]*

*Defined in [double-mixed-double-double/dd-mult-double.ts:20](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-mixed-double-double/dd-mult-double.ts#L20)*

Returns the product of a double-double-precision floating point number and a
double.

* slower than ALGORITHM 8 (one call to fastTwoSum more) but about 2x more
accurate
* relative error bound: 1.5u^2 + 4u^3, i.e. fl(a+b) = (a+b)(1+ϵ),
where ϵ <= 1.5u^2 + 4u^3, u = 0.5 * Number.EPSILON
* the bound is very sharp
* probably prefer `ddMultDouble2` due to extra speed

* ALGORITHM 7 of https://hal.archives-ouvertes.fr/hal-01351529v3/document

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`y` | number | a double |
`x` | number[] | a double-double precision floating point number  |

**Returns:** *number[]*

___

###  ddMultDouble2

▸ **ddMultDouble2**(`y`: number, `x`: number[]): *number[]*

*Defined in [double-mixed-double-double/dd-mult-double.ts:58](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-mixed-double-double/dd-mult-double.ts#L58)*

Returns the product of a double-double-precision floating point number and a double.

* faster than ALGORITHM 7 (one call to fastTwoSum less) but about 2x less
accurate
* relative error bound: 3u^2, i.e. fl(a*b) = (a*b)(1+ϵ),
where ϵ <= 3u^2, u = 0.5 * Number.EPSILON
* the bound is sharp
* probably prefer this algorithm due to extra speed

* ALGORITHM 8 of https://hal.archives-ouvertes.fr/hal-01351529v3/document

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`y` | number | a double |
`x` | number[] | a double-double precision floating point number  |

**Returns:** *number[]*
