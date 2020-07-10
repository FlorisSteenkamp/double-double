[double-double](../README.md) › [Globals](../globals.md) › ["double-representation/get-max-set-bit"](_double_representation_get_max_set_bit_.md)

# Module: "double-representation/get-max-set-bit"

## Index

### Functions

* [getHighestSetBit](_double_representation_get_max_set_bit_.md#gethighestsetbit)
* [getHighestSetBit_](_double_representation_get_max_set_bit_.md#gethighestsetbit_)
* [getLowestSetBit](_double_representation_get_max_set_bit_.md#getlowestsetbit)
* [getLowestSetBit_](_double_representation_get_max_set_bit_.md#getlowestsetbit_)

## Functions

###  getHighestSetBit

▸ **getHighestSetBit**(`a`: number): *number*

*Defined in [double-representation/get-max-set-bit.ts:68](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-representation/get-max-set-bit.ts#L68)*

Returns the highest set bit of the given double. If no bit is set (input
=== 0 or +/-inf or NaN) returns NaN.
See https://stackoverflow.com/a/35190288/2010061

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |

**Returns:** *number*

___

###  getHighestSetBit_

▸ **getHighestSetBit_**(`a`: number): *number*

*Defined in [double-representation/get-max-set-bit.ts:50](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-representation/get-max-set-bit.ts#L50)*

Returns the highest set bit of the given value in [1, 255], i.e. from 1 up
to 255. If the input number === 0 returns NaN.
See https://stackoverflow.com/a/35190288/2010061

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |

**Returns:** *number*

___

###  getLowestSetBit

▸ **getLowestSetBit**(`a`: number): *number*

*Defined in [double-representation/get-max-set-bit.ts:23](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-representation/get-max-set-bit.ts#L23)*

Returns the lowest set bit of the given number's significand (where the lsb
is bit 0 and the msb is bit 52). If no bit is set (input === 0 or +-inf or
NaN) returns NaN.
See https://stackoverflow.com/a/35190288/2010061

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |

**Returns:** *number*

___

###  getLowestSetBit_

▸ **getLowestSetBit_**(`a`: number): *number*

*Defined in [double-representation/get-max-set-bit.ts:12](https://github.com/FlorisSteenkamp/double-double/blob/bf93768/src/double-representation/get-max-set-bit.ts#L12)*

Returns the lowest set bit of the given value in [1, (2**31)-1],
i.e. from 1 up to 2147483647 else if no bit is set (input === 0) returns
NaN, otherwise if the number is out of range returns a non-finite
number.
See https://stackoverflow.com/a/35190288/2010061

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |

**Returns:** *number*
