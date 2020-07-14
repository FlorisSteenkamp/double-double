---
id: "_double_representation_get_max_set_bit_"
title: "getLowestSetBit / getHighestSetBit"
sidebar_label: "getLowestSetBit / getHighestSetBit"
---

**getHighestSetBit**(`a`: number): *number*

*Defined in [double-representation/get-max-set-bit.ts:70](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-representation/get-max-set-bit.ts#L70)*

Returns the highest set bit of the given double. If no bit is set (input
=== 0 or +/-inf or NaN) returns NaN.
See https://stackoverflow.com/a/35190288/2010061

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |

**Returns:** *number*

___


**getLowestSetBit**(`a`: number): *number*

*Defined in [double-representation/get-max-set-bit.ts:24](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-representation/get-max-set-bit.ts#L24)*

Returns the lowest set bit of the given number's significand (where the lsb
is bit 0 and the msb is bit 52). If no bit is set (input === 0 or +-inf or
NaN) returns NaN.
See https://stackoverflow.com/a/35190288/2010061

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |

**Returns:** *number*
