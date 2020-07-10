[double-double](../README.md) › [Globals](../globals.md) › ["double-representation/double-to-binary-string"](_double_representation_double_to_binary_string_.md)

# Module: "double-representation/double-to-binary-string"

## Index

### Functions

* [doubleToBinaryString](_double_representation_double_to_binary_string_.md#doubletobinarystring)
* [int8ToBinaryString](_double_representation_double_to_binary_string_.md#int8tobinarystring)
* [octetsToBinaryString](_double_representation_double_to_binary_string_.md#octetstobinarystring)

## Functions

###  doubleToBinaryString

▸ **doubleToBinaryString**(`number`: number): *string*

*Defined in [double-representation/double-to-binary-string.ts:9](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-representation/double-to-binary-string.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`number` | number |

**Returns:** *string*

___

###  int8ToBinaryString

▸ **int8ToBinaryString**(`i`: number): *string*

*Defined in [double-representation/double-to-binary-string.ts:27](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-representation/double-to-binary-string.ts#L27)*

intToBinaryString(8) -> "00001000"

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |

**Returns:** *string*

___

###  octetsToBinaryString

▸ **octetsToBinaryString**(`octets`: number[]): *string*

*Defined in [double-representation/double-to-binary-string.ts:17](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-representation/double-to-binary-string.ts#L17)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`octets` | number[] | The 8 bytes composing a double (msb first)  |

**Returns:** *string*
