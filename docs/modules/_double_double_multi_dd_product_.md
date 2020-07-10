[double-double](../README.md) › [Globals](../globals.md) › ["double-double/multi/dd-product"](_double_double_multi_dd_product_.md)

# Module: "double-double/multi/dd-product"

## Index

### Functions

* [ddProduct](_double_double_multi_dd_product_.md#ddproduct)

## Functions

###  ddProduct

▸ **ddProduct**(`qs`: number[][]): *number[]*

*Defined in [double-double/multi/dd-product.ts:13](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-double/multi/dd-product.ts#L13)*

Returns the result of multiplying together an array of double-double-precision
floating point numbers naively (i.e. not using pairwise addition to reduce
error a bit).

* an error bound is given by: (n-1)(1+ϵ),
where ϵ <= 7u^2, u = 0.5 * Number.EPSILON

**Parameters:**

Name | Type |
------ | ------ |
`qs` | number[][] |

**Returns:** *number[]*
