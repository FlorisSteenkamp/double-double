(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(207)),i={id:"_basic_split_",title:"split",sidebar_label:"split"},l={id:"modules/_basic_split_",isDocsHomePage:!1,title:"split",description:"split(a number[]",source:"@site/docs\\modules\\_basic_split_.md",permalink:"/double-double/docs/modules/_basic_split_",sidebar_label:"split",sidebar:"sidebar",previous:{title:"reduceSignificand",permalink:"/double-double/docs/modules/_basic_reduce_significand_"},next:{title:"twoDiff",permalink:"/double-double/docs/modules/_basic_two_diff_"}},b=[],c={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"split"),"(",Object(o.b)("inlineCode",{parentName:"p"},"a"),": number): ",Object(o.b)("em",{parentName:"p"},"number[]")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/FlorisSteenkamp/double-double/blob/d35ae52/src/basic/split.ts#L21"}),"basic/split.ts:21"))),Object(o.b)("p",null,"Returns the result of splitting a double into 2 26-bit doubles."),Object(o.b)("p",null,"Theorem 17 (Veltkamp-Dekker): Let a be a p-bit floating-point number, where\np >= 3. Choose a splitting point s such that p/2 <= s <= p-1. Then the\nfollowing algorithm will produce a (p-s)-bit value a_hi and a\nnonoverlapping (s-1)-bit value a_lo such that abs(a_hi) >= abs(a_lo) and\na = a_hi + a_lo."),Object(o.b)("p",null,"see e.g. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"}),"Shewchuk")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"a")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A double floating point number")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"number[]")))}p.isMDXComponent=!0},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);