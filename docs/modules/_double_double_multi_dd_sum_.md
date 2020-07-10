[double-double](../README.md) › [Globals](../globals.md) › ["double-double/multi/dd-sum"](_double_double_multi_dd_sum_.md)

# Module: "double-double/multi/dd-sum"

## Index

### Functions

* [ddSum](_double_double_multi_dd_sum_.md#ddsum)

## Functions

###  ddSum

▸ **ddSum**(`qs`: number[][]): *number[]*

*Defined in [double-double/multi/dd-sum.ts:12](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-double/multi/dd-sum.ts#L12)*

Returns the result of summing an array of double-double-precision floating
point numbers naively (i.e. not using pairwise addition to reduce error a bit).

* an error bound is given by: (n-1)(1+ϵ),
where ϵ <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON

**Parameters:**

Name | Type |
------ | ------ |
`qs` | number[][] |

**Returns:** *number[]*
