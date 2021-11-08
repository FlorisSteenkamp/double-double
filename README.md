# Pure double & double-double floating point arithmetic functions *with strict error bounds*

## [Documentation](https://florissteenkamp.github.io/double-double/)

## Overview
* **[Double-double precision](https://en.wikipedia.org/wiki/Quadruple-precision_floating-point_format#Double-double_arithmetic)** floating point operators (similar to quad precision)
* Each function documents a strict error bound (see research [1] below)
* Optimized for speed (see benchmark below)
* Operators include: +, -, *, /, √, abs, <, >, ===, min, max, etc.
* Operators mixing double and double-doubles are also included, e.g. `ddAddDouble` (for adding a double to a double-double)
* Error free double precision operators also included, e.g. `twoProduct` (for calculating the *exact* result of multiplying to doubles)
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
* No dependencies


## Installation

```cli
npm install double-double
```

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
and can be used in `Node.js` (or in a browser when bundled using e.g. Webpack).

Additionally, self-contained `ECMAScript Module` (ESM) files `index.module.js` and
`index.module.min.js` in the `./browser` folder is provided.

Or, if you need a legacy browser script there is also `index.js`
and `index.min.js` in the `./browser` folder. Either script exposes a global 
variable called `doubleDouble`.

See full examples below.

## Usage

### Node.js
```JavaScript
// @filename: `test.mjs` (or `test.js` if { "type": "module" } is specified in your package.json)
import { ddAddDd } from 'double-double';  // `ddAddDd` returns the sum of two double-doubles 

const dd1 = [-4.357806199228875e-10, 11638607.274152497];  // some double-double
const dd2 = [4.511949494578893e-11, -2797357.2918064594];  // another double-double

const r1 = ddAddDd(dd1,dd2);  // sum the two double-doubles
const r2 = [-3.906611249770986e-10, 8841249.982346037];  // the correct result

if (r1[0] === r2[0] && r1[1] === r2[1]) {
    console.log('success! 😁');  // we should get to here!
} else {
    console.log('failure! 😥');  // ...and not here
}
```

### Browsers - ESM - (Chrome 61+, Safari 11+, Firefox 60+, Opera 48+, Edge 16+, ~~Internet Explorer~~)

```html
<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Double-double</title>
    <meta name="description" content="Double-double example usage in the browser - using ECMAScript Modules - full example">

    <script type="module">
        import { ddAddDd } from "./node_modules/double-double/node/index.js";

        const dd1 = [-4.357806199228875e-10, 11638607.274152497];  // some double-double
        const dd2 = [4.511949494578893e-11, -2797357.2918064594];  // another double-double

        const r1 = ddAddDd(dd1,dd2);  // sum the two double-doubles
        const r2 = [-3.906611249770986e-10, 8841249.982346037];  // the correct result

        if (r1[0] === r2[0] && r1[1] === r2[1]) {
            console.log('success! 😁');  // we should get to here!
        } else {
            console.log('failure! 😥');  // ...and not here
        }
    </script>
</head>

<body>
    Check the console.
</body>

</html>
```

### Browsers (older) - Legacy Scripts

```html
<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Double-double</title>
    <meta name="description" content="End to end test for the `global var browser build`">

    <!-- <script src="./browser/index.js"></script> -->
    <script src="./browser/index.min.js"></script>
    <script>
        const { ddAddDd } = doubleDouble;

        const dd1 = [-4.357806199228875e-10, 11638607.274152497];  // some double-double
        const dd2 = [4.511949494578893e-11, -2797357.2918064594];  // another double-double

        const r1 = ddAddDd(dd1,dd2);  // sum the two double-doubles
        const r2 = [-3.906611249770986e-10, 8841249.982346037];  // the correct result

        if (r1[0] === r2[0] && r1[1] === r2[1]) {
            console.log('success! 😁');  // we should get to here!
        } else {
            console.log('failure! 😥');  // ...and not here
        }
    </script>
</head>

<body>
    Check the console.
</body>

</html>
```

### Bundlers (Webpack, Rollup, ...)

Webpack will be taken as an example here.

Since your webpack config file might still use `CommonJS` you must rename 
`webpack.config.js` to `webpack.config.cjs`.

If you are using TypeScript:

Since this is an [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
library you must use [resolve-typescript-plugin](https://www.npmjs.com/package/resolve-typescript-plugin) 
(at least until webpack catches up with ESM?) in your `webpack.config.cjs` file.

```cli
npm install --save-dev resolve-typescript-plugin
```

and follow the instructions given at [resolve-typescript-plugin](https://www.npmjs.com/package/resolve-typescript-plugin).

Additionally, follow this [guide](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#how-can-i-make-my-typescript-project-output-esm).


>**❗Important❗**
>
>When using bundlers:
>
>```TypeScript
>import { operators } from 'double-double'
>```
>
> and then later in the code get the functions you need, e.g.:
>
>```TypeScript
>const { ddAddDd as add, twoProduct, /* etc. */ } = operators;
>```
>
>as opposed to importing the operators directly.
>
>This will increase performance roughly 5 times!
>
>**Why?** Because Webpack (and Rollup) exports functions using getters that gets 
>invoked on every function call adding a big overhead and slowing down each
>function. This is not an issue if the code is not bundled, e.g. when
>using Node.js.


## Research
The following research / books / lectures have been used or are directly relevant to this library (especially the first two):
1. [Mioara Joldes, Jean-Michel Muller, Valentina Popescu, *Tight and rigourous error bounds for basic building
blocks of double-word arithmetic*](https://hal.archives-ouvertes.fr/hal-01351529v3/document)
2. [T. J. Dekker, *A Floating-Point Technique for Extending the Available Precision*](http://csclub.uwaterloo.ca/~pbarfuss/dekker1971.pdf)
3. [Yozo Hida, Xiaoye S. Li, David H. Bailey, *Library for Double-Double and Quad-Double Arithmetic*](https://www.researchgate.net/publication/228570156_Library_for_Double-Double_and_Quad-Double_Arithmetic)
4. [Nicholas J. Higham, *Accuracy and Stability of Numerical Algorithms*](http://ftp.demec.ufpr.br/CFD/bibliografia/Higham_2002_Accuracy%20and%20Stability%20of%20Numerical%20Algorithms.pdf)

## [Benchmark](https://florissteenkamp.github.io/big-float-benchmark/)

![benchmark](assets/benchmark.png)

## Similar libraries
* [double.js](https://github.com/munrocket/double.js)

## License
MIT