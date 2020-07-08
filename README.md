# Pure double & double-double floating point arithmetic functions *with strict error bounds*

## Installation

```cli
npm install double-double
```

## Overview
* **[Double-double precision](https://en.wikipedia.org/wiki/Quadruple-precision_floating-point_format#Double-double_arithmetic)** floating point operators (similar to quad precision)
* Optimized for speed (see benchmark below)
* Operators include: +, -, *, /, √, abs, <, >, ===, etc.
* No classes ⇒ a double-double is simply a length 2 `Number` array, e.g.
```typescript
import { twoSum } from 'double-double';
// Specified directly (low order double first)
const a = [-4.357806199228875e-10, 11_638_607.274152497];
// ...or more usually from an earlier calculation
const b = twoSum(213.456, 111.111);  // => [-1.4210854715202004e-14, 324.567] (completely error-free)
```
* All functions are pure, e.g. 
```typescript
// using `a` and `b` as defined above (ddAddDd => double-double + double-double)
const c = ddAddDd(a,b);  // => [-2.42072459299969e-10, 11638931.841152497]
```

## Research
The following research / books / lectures have been used or are directly relevant to this library (especially the first two):
* [Mioara Joldes, Jean-Michel Muller, Valentina Popescu, *Tight and rigourous error bounds for basic building
blocks of double-word arithmetic*](https://hal.archives-ouvertes.fr/hal-01351529v3/document)
* [T. J. Dekker, *A Floating-Point Technique for Extending the Available Precision*](http://csclub.uwaterloo.ca/~pbarfuss/dekker1971.pdf)
* [Yozo Hida, Xiaoye S. Li, David H. Bailey, *Library for Double-Double and Quad-Double Arithmetic*](https://www.researchgate.net/publication/228570156_Library_for_Double-Double_and_Quad-Double_Arithmetic)
* [Nicholas J. Higham, *Accuracy and Stability of Numerical Algorithms*](http://ftp.demec.ufpr.br/CFD/bibliografia/Higham_2002_Accuracy%20and%20Stability%20of%20Numerical%20Algorithms.pdf)

## Benchmark

... coming soon!

## Documentation

... coming soon!

## Introduction

... coming soon!

## Examples

... coming soon!


## Usage

....


## License
MIT