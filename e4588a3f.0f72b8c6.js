(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{375:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(8),r=(n(0),n(413)),i={id:"toastandroid",title:"ToastAndroid"},s={unversionedId:"toastandroid",id:"version-0.63/toastandroid",isDocsHomePage:!1,title:"ToastAndroid",description:"\u672c\u6a21\u5757\u5c06\u539f\u751f\u7684 ToastAndroid \u6a21\u5757\u5bfc\u51fa\u4e3a\u4e00\u4e2a JS \u6a21\u5757\uff0c\u7528\u4e8e\u5728 Android \u8bbe\u5907\u4e0a\u663e\u793a\u4e00\u4e2a\u60ac\u6d6e\u7684\u63d0\u793a\u4fe1\u606f\u3002\u672c\u6a21\u5757\u5305\u542b\u4e00\u4e2ashow\u65b9\u6cd5\u63a5\u53d7\u4ee5\u4e0b\u7684\u53c2\u6570\uff1a",source:"@site/versioned_docs/version-0.63/toastandroid.md",slug:"/toastandroid",permalink:"/docs/toastandroid",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/toastandroid.md",version:"0.63",lastUpdatedAt:1608780554,sidebar:"version-0.63/api",previous:{title:"PermissionsAndroid",permalink:"/docs/permissionsandroid"},next:{title:"ActionSheetIOS",permalink:"/docs/actionsheetios"}},c=[{value:"Imperative hack",id:"imperative-hack",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>show()</code>",id:"show",children:[]},{value:"<code>showWithGravity()</code>",id:"showwithgravity",children:[]},{value:"<code>showWithGravityAndOffset()</code>",id:"showwithgravityandoffset",children:[]}]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"<code>SHORT</code>",id:"short",children:[]},{value:"<code>LONG</code>",id:"long",children:[]},{value:"<code>TOP</code>",id:"top",children:[]},{value:"<code>BOTTOM</code>",id:"bottom",children:[]},{value:"<code>CENTER</code>",id:"center",children:[]}]}],d={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u672c\u6a21\u5757\u5c06\u539f\u751f\u7684 ToastAndroid \u6a21\u5757\u5bfc\u51fa\u4e3a\u4e00\u4e2a JS \u6a21\u5757\uff0c\u7528\u4e8e\u5728 Android \u8bbe\u5907\u4e0a\u663e\u793a\u4e00\u4e2a\u60ac\u6d6e\u7684\u63d0\u793a\u4fe1\u606f\u3002\u672c\u6a21\u5757\u5305\u542b\u4e00\u4e2a",Object(r.b)("inlineCode",{parentName:"p"},"show"),"\u65b9\u6cd5\u63a5\u53d7\u4ee5\u4e0b\u7684\u53c2\u6570\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"message")," \u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u5c06\u8981\u663e\u793a\u7684\u6587\u672c\u5185\u5bb9\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"duration")," \u63d0\u793a\u4fe1\u606f\u6301\u7eed\u663e\u793a\u7684\u65f6\u95f4\u3002\u53ef\u4ee5\u662f",Object(r.b)("inlineCode",{parentName:"li"},"ToastAndroid.SHORT"),"\u6216\u8005",Object(r.b)("inlineCode",{parentName:"li"},"ToastAndroid.LONG"),"\u3002")),Object(r.b)("p",null,"\u8fd8\u6709\u4e00\u4e2a\u540d\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"showWithGravity"),"\u7684\u65b9\u6cd5\u53ef\u4ee5\u6307\u5b9a\u5f39\u51fa\u7684\u4f4d\u7f6e\u3002\u53ef\u9009\u9879\u6709\uff1aToastAndroid.TOP, ToastAndroid.BOTTOM, ToastAndroid.CENTER."),Object(r.b)("p",null,"The 'showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)' method adds the ability to specify an offset with in pixels."),Object(r.b)("div",{className:"snack-player","data-snack-name":"Toast Android API Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20ToastAndroid%2C%20Button%20%7D%20from%20%22react-native%22%3B%0Aimport%20Constants%20from%20%22expo-constants%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20showToast%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20ToastAndroid.show(%22A%20pikachu%20appeared%20nearby%20!%22%2C%20ToastAndroid.SHORT)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20showToastWithGravity%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20ToastAndroid.showWithGravity(%0A%20%20%20%20%20%20%22All%20Your%20Base%20Are%20Belong%20To%20Us%22%2C%0A%20%20%20%20%20%20ToastAndroid.SHORT%2C%0A%20%20%20%20%20%20ToastAndroid.CENTER%0A%20%20%20%20)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20showToastWithGravityAndOffset%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20ToastAndroid.showWithGravityAndOffset(%0A%20%20%20%20%20%20%22A%20wild%20toast%20appeared!%22%2C%0A%20%20%20%20%20%20ToastAndroid.LONG%2C%0A%20%20%20%20%20%20ToastAndroid.BOTTOM%2C%0A%20%20%20%20%20%2025%2C%0A%20%20%20%20%20%2050%0A%20%20%20%20)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%22Toggle%20Toast%22%20onPress%3D%7B()%20%3D%3E%20showToast()%7D%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Toggle%20Toast%20With%20Gravity%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20showToastWithGravity()%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Toggle%20Toast%20With%20Gravity%20%26%20Offset%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20showToastWithGravityAndOffset()%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%0A%20%20%20%20backgroundColor%3A%20%22%23888888%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("h3",{id:"imperative-hack"},"Imperative hack"),Object(r.b)("p",null,"The ToastAndroid API is imperative, but there is a way to expose a declarative component from it as in this example:"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Advanced Toast Android API Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20ToastAndroid%2C%20Button%20%7D%20from%20%22react-native%22%3B%0Aimport%20Constants%20from%20%22expo-constants%22%3B%0A%0Aconst%20Toast%20%3D%20(%7B%20visible%2C%20message%20%7D)%20%3D%3E%20%7B%0A%20%20if%20(visible)%20%7B%0A%20%20%20%20ToastAndroid.showWithGravityAndOffset(%0A%20%20%20%20%20%20message%2C%0A%20%20%20%20%20%20ToastAndroid.LONG%2C%0A%20%20%20%20%20%20ToastAndroid.BOTTOM%2C%0A%20%20%20%20%20%2025%2C%0A%20%20%20%20%20%2050%0A%20%20%20%20)%3B%0A%20%20%20%20return%20null%3B%0A%20%20%7D%0A%20%20return%20null%3B%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BvisibleToast%2C%20setvisibleToast%5D%20%3D%20useState(false)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20setvisibleToast(false)%2C%20%5BvisibleToast%5D)%3B%0A%0A%20%20const%20handleButtonPress%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setvisibleToast(true)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CToast%20visible%3D%7BvisibleToast%7D%20message%3D%22Example%22%20%2F%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%22Toggle%20Toast%22%20onPress%3D%7B()%20%3D%3E%20handleButtonPress()%7D%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%0A%20%20%20%20backgroundColor%3A%20%22%23888888%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("hr",null),Object(r.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(r.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(r.b)("h3",{id:"show"},Object(r.b)("inlineCode",{parentName:"h3"},"show()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static show(message, duration)\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"showwithgravity"},Object(r.b)("inlineCode",{parentName:"h3"},"showWithGravity()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static showWithGravity(message, duration, gravity)\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"showwithgravityandoffset"},Object(r.b)("inlineCode",{parentName:"h3"},"showWithGravityAndOffset()")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static showWithGravityAndOffset(message, duration, gravity, xOffset, yOffset)\n")),Object(r.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(r.b)("h3",{id:"short"},Object(r.b)("inlineCode",{parentName:"h3"},"SHORT")),Object(r.b)("p",null,"Indicates the duration on the screen."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"ToastAndroid.SHORT;\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"long"},Object(r.b)("inlineCode",{parentName:"h3"},"LONG")),Object(r.b)("p",null,"Indicates the duration on the screen."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"ToastAndroid.LONG;\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"top"},Object(r.b)("inlineCode",{parentName:"h3"},"TOP")),Object(r.b)("p",null,"Indicates the position on the screen."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"ToastAndroid.TOP;\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"bottom"},Object(r.b)("inlineCode",{parentName:"h3"},"BOTTOM")),Object(r.b)("p",null,"Indicates the position on the screen."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"ToastAndroid.BOTTOM;\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"center"},Object(r.b)("inlineCode",{parentName:"h3"},"CENTER")),Object(r.b)("p",null,"Indicates the position on the screen."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"ToastAndroid.CENTER;\n")),Object(r.b)("hr",null),Object(r.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(r.b)("a",Object(a.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(100.00%)"))}l.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),l=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},A=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=l(n),A=a,u=b["".concat(i,".").concat(A)]||b[A]||p[A]||r;return n?o.a.createElement(u,s(s({ref:t},d),{},{components:n})):o.a.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=A;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}A.displayName="MDXCreateElement"}}]);