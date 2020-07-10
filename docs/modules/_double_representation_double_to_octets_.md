[double-double](../README.md) › [Globals](../globals.md) › ["double-representation/double-to-octets"](_double_representation_double_to_octets_.md)

# Module: "double-representation/double-to-octets"

## Index

### Functions

* [doubleToOctets](_double_representation_double_to_octets_.md#doubletooctets)

## Functions

###  doubleToOctets

▸ **doubleToOctets**(`number`: number): *number[]*

*Defined in [double-representation/double-to-octets.ts:12](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-representation/double-to-octets.ts#L12)*

Returns the ieee-574 8 bytes composing the given double, starting from the
sign bit and ending in the lsb of the significand.
e.g. 123.456 -> [64, 94, 221, 47, 26, 159, 190, 119]

**Parameters:**

Name | Type |
------ | ------ |
`number` | number |

**Returns:** *number[]*
