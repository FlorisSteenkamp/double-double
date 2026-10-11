---
id: "_double_double_unary_dd_sin_"
title: "ddSin"
sidebar_label: "ddSin"
---

**ddSin**(`θ`: number[]): *number[]*

*Defined in [double-double/unary/dd-sin.ts:62](https://github.com/FlorisSteenkamp/double-double/blob/master/src/double-double/unary/dd-sin.ts#L62)*

Returns the sine of the given double-double precision floating point number.

* the polynomial approximation used has a maximum relative error of
1.64e-39 (see the link in the source file); additional round-off occurs
during its evaluation
* the argument reduction (for |θ| > π/2) uses `PIDd` (π as a double-double)
and is therefore not exact, i.e. the absolute error grows with |θ|

**`example`**

```
import { PIDd } from 'double-double';
import { ddDivDouble } from 'double-double';

ddSin(ddDivDouble(PIDd,6));  //=> [0,0.5]
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`θ` | number[] | a double-double precision floating point number  |

**Returns:** *number[]*
