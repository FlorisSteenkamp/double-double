---
id: "_dd_to_str_dd_to_str_"
title: "ddToStr"
sidebar_label: "ddToStr"
---

**ddToStr**(`dd`: number[]): *string*

*Defined in [dd-to-str/dd-to-str.ts:28](https://github.com/FlorisSteenkamp/double-double/blob/master/src/dd-to-str/dd-to-str.ts#L28)*

Converts the given double-double precision value to a string and returns the
result.

* there will always be enough decimal digits returned but some could be
extraneous.
* non-finite values return `'NaN'`, `'Infinity'` or `'-Infinity'`

**`example`**

```
ddToStr([1.2246467991473532e-16, 3.141592653589793]);  //=> '3.141592653589793238462643383279505878966979117714'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dd` | number[] | a double-double precision floating point number  |

**Returns:** *string*
