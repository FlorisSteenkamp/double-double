(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return i}));var r=n(2),b=n(9),a=(n(0),n(207)),o={id:"_double_mixed_double_double_dd_div_double_",title:"ddDivDouble",sidebar_label:"ddDivDouble"},l={id:"modules/_double_mixed_double_double_dd_div_double_",isDocsHomePage:!1,title:"ddDivDouble",description:"ddDivDouble(x number): number[]",source:"@site/docs\\modules\\_double_mixed_double_double_dd_div_double_.md",permalink:"/double-double/docs/modules/_double_mixed_double_double_dd_div_double_",sidebar_label:"ddDivDouble",sidebar:"sidebar",previous:{title:"ddAddDouble",permalink:"/double-double/docs/modules/_double_mixed_double_double_dd_add_double_"},next:{title:"ddMultDouble",permalink:"/double-double/docs/modules/_double_mixed_double_double_dd_mult_double_"}},u=[],d={rightToc:u};function i(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ddDivDouble"),"(",Object(a.b)("inlineCode",{parentName:"p"},"x"),": number[], ",Object(a.b)("inlineCode",{parentName:"p"},"y"),": number): ",Object(a.b)("em",{parentName:"p"},"number[]")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-mixed-double-double/dd-div-double.ts#L18"}),"double-mixed-double-double/dd-div-double.ts:18"))),Object(a.b)("p",null,"Returns the result of dividing a double-double-precision floating point\nnumber by a double."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"relative error bound: 3u^2, i.e. fl(a/b) = (a/b)(1+\u03f5), where \u03f5 <= 3u^2,\nu = 0.5 * Number.EPSILON")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"the bound is very sharp")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"ALGORITHM 15 of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://hal.archives-ouvertes.fr/hal-01351529v3/document"}),"https://hal.archives-ouvertes.fr/hal-01351529v3/document")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Parameters:")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"x")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number[]"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"a double-double precision floating point number")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"y")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"the double-precision divisor")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"number[]")))}i.isMDXComponent=!0},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return O}));var r=n(0),b=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,b=function(e,t){if(null==e)return{};var n,r,b={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var d=b.a.createContext({}),i=function(e){var t=b.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return b.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=b.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=i(n),m=r,O=c["".concat(o,".").concat(m)]||c[m]||p[m]||a;return n?b.a.createElement(O,l(l({ref:t},d),{},{components:n})):b.a.createElement(O,l({ref:t},d))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return b.a.createElement.apply(null,o)}return b.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);