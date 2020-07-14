---
id: "_double_representation_is_bit_aligned_"
title: "isBitAligned"
sidebar_label: "isBitAligned"
---

**isBitAligned**(`a`: number, `maxBitLength`: number, `gridSpacingExponent`: number): *boolean*

*Defined in [double-representation/is-bit-aligned.ts:33](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-representation/is-bit-aligned.ts#L33)*

Returns true if the given number is bit-aligned in the sense that its a
multiple of a given power of 2, say e, and such that the number, say a,
conforms to: a/2^e < 2^(l-e), where l is the max allowed bit length.
This essentially means the numbers act somewhat like fixed-point numbers
which can drastically speed up some geometric algorithms and also reduce
their complexity.

Visually:
These numbers (a,b and c) are grid aligned with e === 3 and max
bitlength === 6:  
  a -> 00|101100|000  
  b -> 00|000100|000  
  c -> 00|110111|000  
These are not  
  a -> 01|101100|000  
  b -> 00|000100|000  
These are not  
  a -> 00|101100|000  
  b -> 00|000100|100  
These are not  
  a -> 00|101100|100  
  b -> 00|000100|100  

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | number | - |
`maxBitLength` | number | The max allowed bitlength |
`gridSpacingExponent` | number | The grid spacing === 1^gridSpacingExponent  |

**Returns:** *boolean*
