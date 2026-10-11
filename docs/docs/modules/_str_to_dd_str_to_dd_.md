---
id: "_str_to_dd_str_to_dd_"
title: "strToDd"
sidebar_label: "strToDd"
---

**strToDd**(`str`: string): *number[]*

*Defined in [str-to-dd/str-to-dd.ts:27](https://github.com/FlorisSteenkamp/double-double/blob/master/src/str-to-dd/str-to-dd.ts#L27)*

Converts the given decimal string to a double-double and returns the result.

* the result is correctly rounded, i.e. the high part is the double nearest
to the exact value and the low part is the double nearest to the exact
remainder (ties to even)
* the full double range is supported, including subnormals; values too
large in magnitude return `[0,Infinity]` (or `[0,-Infinity]`); zero
(including values that underflow) is returned as `[0,0]`, never `-0`
* accepts an optional sign, a decimal point and an optional exponent, e.g.
`'-1.5e-10'` or `'+.3E5'`; any other string returns `[0,Number(str)]`, e.g.
`[0,NaN]`, `[0,Infinity]`

Examples:
```
strToDd('3.14159265358979323846264338327950')  //=> [1.2246467991473532e-16, 3.141592653589793]
strToDd('6.0221408e+23')  //=> [-2097152, 6.0221408e+23]
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`str` | string | a string to convert to double-double precision  |

**Returns:** *number[]*
