(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),c=(a(0),a(413)),o=a(417),l=a(418),i=a(419),s={id:"appearance",title:"Appearance"},b={unversionedId:"appearance",id:"version-0.63/appearance",isDocsHomePage:!1,title:"Appearance",description:"`jsx",source:"@site/versioned_docs/version-0.63/appearance.md",slug:"/appearance",permalink:"/docs/appearance",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/appearance.md",version:"0.63",lastUpdatedAt:1608780554,sidebar:"version-0.63/api",previous:{title:"Animated.ValueXY",permalink:"/docs/animatedvaluexy"},next:{title:"AppRegistry",permalink:"/docs/appregistry"}},u=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>getColorScheme()</code>",id:"getcolorscheme",children:[]},{value:"<code>addChangeListener()</code>",id:"addchangelistener",children:[]},{value:"<code>removeChangeListener()</code>",id:"removechangelistener",children:[]}]}],d={toc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import { Appearance } from "react-native";\n')),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"Appearance")," module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark)."),Object(c.b)("h4",{id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"},"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"),Object(c.b)(o.a,{groupId:"guide",defaultValue:"web",values:i.a.getDevNotesTabs(["android","ios","web"]),mdxType:"Tabs"},Object(c.b)(l.a,{value:"web",mdxType:"TabItem"},Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"The ",Object(c.b)("inlineCode",{parentName:"p"},"Appearance")," API is inspired by the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://drafts.csswg.org/mediaqueries-5/"}),"Media Queries draft")," from the W3C. The color scheme preference is modeled after the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"}),Object(c.b)("inlineCode",{parentName:"a"},"prefers-color-scheme")," CSS media feature"),"."))),Object(c.b)(l.a,{value:"android",mdxType:"TabItem"},Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/guide/topics/ui/look-and-feel/darktheme"}),"Dark theme")," preference on Android 10 (API level 29) devices and higher."))),Object(c.b)(l.a,{value:"ios",mdxType:"TabItem"},Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/"}),"Dark Mode")," preference on iOS 13 devices and higher.")))),Object(c.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(c.b)("p",null,"You can use the ",Object(c.b)("inlineCode",{parentName:"p"},"Appearance")," module to determine if the user prefers a dark color scheme:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'const colorScheme = Appearance.getColorScheme();\nif (colorScheme === "dark") {\n  // Use dark color scheme\n}\n')),Object(c.b)("p",null,"Although the color scheme is available immediately, this may change (e.g. scheduled color scheme change at sunrise or sunset). Any rendering logic or styles that depend on the user preferred color scheme should try to call this function on every render, rather than caching the value. For example, you may use the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"usecolorscheme"}),Object(c.b)("inlineCode",{parentName:"a"},"useColorScheme"))," React hook as it provides and subscribes to color scheme updates, or you may use inline styles rather than setting a value in a ",Object(c.b)("inlineCode",{parentName:"p"},"StyleSheet"),"."),Object(c.b)("h1",{id:"reference"},"Reference"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"getcolorscheme"},Object(c.b)("inlineCode",{parentName:"h3"},"getColorScheme()")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static getColorScheme()\n")),Object(c.b)("p",null,"Indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle)."),Object(c.b)("p",null,"Supported color schemes:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},'"light"')),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The user prefers a light color theme.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},'"dark"')),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The user prefers a dark color theme.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"null")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The user has not indicated a preferred color theme.")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5728\u4f7f\u7528 chrome \u8c03\u8bd5\u65f6\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"getColorScheme()"),"\u5c06\u59cb\u7ec8\u8fd4\u56de",Object(c.b)("inlineCode",{parentName:"p"},"light"),"\u3002")),Object(c.b)("p",null,"\u66f4\u591a\u8bf4\u660e\u8bf7\u53c2\u8003",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"usecolorscheme"}),Object(c.b)("inlineCode",{parentName:"a"},"useColorScheme")),"\u3002"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"addchangelistener"},Object(c.b)("inlineCode",{parentName:"h3"},"addChangeListener()")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static addChangeListener(listener)\n")),Object(c.b)("p",null,"Add an event handler that is fired when appearance preferences change."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"removechangelistener"},Object(c.b)("inlineCode",{parentName:"h3"},"removeChangeListener()")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static removeChangeListener(listener)\n")),Object(c.b)("p",null,"Remove an event handler."),Object(c.b)("hr",null),Object(c.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm6444-sunnylqm3556"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(c.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(64.44%), ",Object(c.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(35.56%)"))}p.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=b(a),p=n,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||c;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<c;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},414:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},415:function(e,t,a){"use strict";var n=a(0),r=a(416);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},416:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},417:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(415),o=a(414),l=a(62),i=a.n(l),s=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,u=e.values,d=e.groupId,p=e.className,m=Object(c.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(n.useState)(l),j=O[0],v=O[1],g=n.Children.toArray(e.children);if(null!=d){var y=h[d];null!=y&&y!==j&&u.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=d&&f(d,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},p)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},418:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},419:function(e,t,a){"use strict";var n=a(7),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),c=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",l=r?"macos":c?"windows":"linux";t.a={defaultGuide:"native",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}}}]);