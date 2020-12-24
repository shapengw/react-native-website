(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{277:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(8),a=(r(0),r(413)),c={id:"usecolorscheme",title:"useColorScheme"},i={unversionedId:"usecolorscheme",id:"version-0.63/usecolorscheme",isDocsHomePage:!1,title:"useColorScheme",description:"`jsx",source:"@site/versioned_docs/version-0.63/usecolorscheme.md",slug:"/usecolorscheme",permalink:"/docs/usecolorscheme",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/usecolorscheme.md",version:"0.63",lastUpdatedAt:1608780554,sidebar:"version-0.63/api",previous:{title:"Vibration",permalink:"/docs/vibration"},next:{title:"useWindowDimensions",permalink:"/docs/usewindowdimensions"}},s=[],l={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import { useColorScheme } from "react-native";\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"useColorScheme")," React hook provides and subscribes to color scheme updates from the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"appearance"}),Object(a.b)("inlineCode",{parentName:"a"},"Appearance"))," module. The return value indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle)."),Object(a.b)("p",null,"Supported color schemes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"light"),": The user prefers a light color theme."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"dark"),": The user prefers a dark color theme."),Object(a.b)("li",{parentName:"ul"},"null: The user has not indicated a preferred color theme.")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import { Text, useColorScheme } from "react-native";\n\nconst MyComponent = () => {\n  const colorScheme = useColorScheme();\n  return <Text>useColorScheme(): {colorScheme}</Text>;\n};\n')),Object(a.b)("p",null,"You can find a complete example that demonstrates the use of this hook alongside a React context to add support for light and dark themes to your application in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/Appearance/AppearanceExample.js"}),Object(a.b)("inlineCode",{parentName:"a"},"AppearanceExample.js")),"."),Object(a.b)("hr",null),Object(a.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm9630-sunnylqm370"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(a.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(96.30%), ",Object(a.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(3.70%)"))}u.isMDXComponent=!0},413:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,d=p["".concat(c,".").concat(b)]||p[b]||m[b]||a;return r?o.a.createElement(d,i(i({ref:t},l),{},{components:r})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);