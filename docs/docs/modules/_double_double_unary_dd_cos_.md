---
id: "_double_double_unary_dd_cos_"
title: "ddCos"
sidebar_label: "ddCos"
---

**ddCos**(`θ`: number[]): *number[]*

*Defined in [double-double/unary/dd-cos.ts:31](https://github.com/FlorisSteenkamp/double-double/blob/master/src/double-double/unary/dd-cos.ts#L31)*

Returns the cosine of the given double-double precision floating point number.

* calculated as `ddSin(θ + π/2)` - see `ddSin` for accuracy notes; note that
the relative error can be large close to the zeros of the cosine

**`example`**

```
import { PIDd } from 'double-double';
import { ddDivDouble } from 'double-double';

ddCos(ddDivDouble(PIDd,6));  //=> [5.017542110903452e-17, 0.8660254037844386]
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`θ` | number[] | a double-double precision floating point number  |

**Returns:** *number[]*
