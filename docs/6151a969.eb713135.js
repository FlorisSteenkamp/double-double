(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return c}));var r=n(2),a=n(9),b=(n(0),n(207)),o={id:"_double_double_binary_dd_diff_dd_",title:"ddDiffDd",sidebar_label:"ddDiffDd"},l={id:"modules/_double_double_binary_dd_diff_dd_",isDocsHomePage:!1,title:"ddDiffDd",description:"ddDiffDd(x number[]): number[]",source:"@site/docs\\modules\\_double_double_binary_dd_diff_dd_.md",permalink:"/docs/modules/_double_double_binary_dd_diff_dd_",sidebar_label:"ddDiffDd",sidebar:"sidebar",previous:{title:"ddCompare",permalink:"/docs/modules/_double_double_binary_dd_compare_"},next:{title:"ddDivDd",permalink:"/docs/modules/_double_double_binary_dd_div_dd_"}},d=[],i={rightToc:d};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"ddDiffDd"),"(",Object(b.b)("inlineCode",{parentName:"p"},"x"),": number[], ",Object(b.b)("inlineCode",{parentName:"p"},"y"),": number[]): ",Object(b.b)("em",{parentName:"p"},"number[]")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/double-double/binary/dd-diff-dd.ts#L15"}),"double-double/binary/dd-diff-dd.ts:15"))),Object(b.b)("p",null,"Returns the result of subtracting the second given double-double-precision\nfloating point number from the first."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"relative error bound: 3u^2 + 13u^3, i.e. fl(a+b) = (a+b)(1+\u03f5),\nwhere \u03f5 <= 3u^2 + 13u^3, u = 0.5 * Number.EPSILON"),Object(b.b)("li",{parentName:"ul"},"the error bound is not sharp - the worst case that could be found by the\nauthors were 2.25u^2")),Object(b.b)("p",null,"ALGORITHM 6 of ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://hal.archives-ouvertes.fr/hal-01351529v3/document"}),"https://hal.archives-ouvertes.fr/hal-01351529v3/document")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"x")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number[]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"a double-double precision floating point number")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"y")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number[]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"another double-double precision floating point number")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"number[]")))}c.isMDXComponent=!0},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),c=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,o=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||b;return n?a.a.createElement(f,l(l({ref:t},i),{},{components:n})):a.a.createElement(f,l({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,o=new Array(b);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<b;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);