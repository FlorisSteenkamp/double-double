---
id: "_double_representation_parse_double_"
title: "parseDouble"
sidebar_label: "parseDouble"
---

**parseDouble**(`x`: number): *object*

*Defined in [double-representation/parse-double.ts:16](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-representation/parse-double.ts#L16)*

Returns the relevant parts of the given IEEE-754 double. The returned
exponent has been normalized (i.e. 1023 has been subtracted) and the
significand has the hidden bit added if appropriate.

* see https://github.com/bartaz/ieee754-visualization

* the `significand` is returned as an array of 7 bytes, where the first byte
  is the 4 most significant bits of the significand (with the hidden bit added
  if appropriate) and the remaining 6 bytes are the remaining bits of the
  significand.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *object*

* **exponent**: *number*

* **sign**: *number*

* **significand**: *number[]*

___

**parseDoubleDetailed**(`x`: number): *object*

*Defined in [double-representation/parse-double.ts:51](https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-representation/parse-double.ts#L51)*

Returns the relevant parts of the given IEEE-754 double.
See https://github.com/bartaz/ieee754-visualization.
This is a slower version of parseDouble that gives binary string
representations of the components.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *object*

* **exponent**: *string*

* **full**: *string* = sign + exponent + hidden + significand

* **hidden**: *string*

* **sign**: *string*

* **significand**: *string*
