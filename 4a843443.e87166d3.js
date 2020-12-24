(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(3),i=n(8),r=(n(0),n(413)),a={id:"app-extensions",title:"iOS\u5e94\u7528\u6269\u5c55"},s={unversionedId:"app-extensions",id:"version-0.63/app-extensions",isDocsHomePage:!1,title:"iOS\u5e94\u7528\u6269\u5c55",description:"App extensions let you provide custom functionality and content outside of your main app. There are different types of app extensions on iOS, and they are all covered in the App Extension Programming Guide. In this guide, we'll briefly cover how you may take advantage of app extensions on iOS.",source:"@site/versioned_docs/version-0.63/app-extensions.md",slug:"/app-extensions",permalink:"/docs/app-extensions",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/app-extensions.md",version:"0.63",lastUpdatedAt:1608780554,sidebar:"version-0.63/docs",previous:{title:"\u548c\u539f\u751f\u7aef\u901a\u4fe1",permalink:"/docs/communication-ios"},next:{title:"\u4e0a\u67b6 App Store",permalink:"/docs/publishing-to-app-store"}},c=[{value:"Memory use in extensions",id:"memory-use-in-extensions",children:[{value:"Today widget",id:"today-widget",children:[]},{value:"Other app extensions",id:"other-app-extensions",children:[]}]}],p={toc:c};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"App extensions let you provide custom functionality and content outside of your main app. There are different types of app extensions on iOS, and they are all covered in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.apple.com/library/content/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214-CH20-SW1"}),"App Extension Programming Guide"),". In this guide, we'll briefly cover how you may take advantage of app extensions on iOS."),Object(r.b)("h2",{id:"memory-use-in-extensions"},"Memory use in extensions"),Object(r.b)("p",null,"As these extensions are loaded outside of the regular app sandbox, it's highly likely that several of these app extensions will be loaded simultaneously. As you might expect, these extensions have small memory usage limits. Keep these in mind when developing your app extensions. It's always highly recommended to test your application on an actual device, and more so when developing app extensions: too frequently, developers find that their extension works fine in the iOS Simulator, only to get user reports that their extension is not loading on actual devices."),Object(r.b)("p",null,"We highly recommend that you watch Conrad Kramer's talk on ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cocoaheads.tv/memory-use-in-extensions-by-conrad-kramer/"}),"Memory Use in Extensions")," to learn more about this topic."),Object(r.b)("h3",{id:"today-widget"},"Today widget"),Object(r.b)("p",null,"The memory limit of a Today widget is 16 MB. As it happens, Today widget implementations using React Native may work unreliably because the memory usage tends to be too high. You can tell if your Today widget is exceeding the memory limit if it yields the message 'Unable to Load':"),Object(r.b)("p",null,Object(r.b)("img",{src:n(525).default})),Object(r.b)("p",null,"Always make sure to test your app extensions in a real device, but be aware that this may not be sufficient, especially when dealing with Today widgets. Debug-configured builds are more likely to exceed the memory limits, while release-configured builds don't fail right away. We highly recommend that you use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/index.html"}),"Xcode's Instruments")," to analyze your real world memory usage, as it's very likely that your release-configured build is very close to the 16 MB limit. In situations like these, you can quickly go over the 16 MB limit by performing common operations, such as fetching data from an API."),Object(r.b)("p",null,"To experiment with the limits of React Native Today widget implementations, try extending the example project in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/matejkriz/react-native-today-widget/"}),"react-native-today-widget"),"."),Object(r.b)("h3",{id:"other-app-extensions"},"Other app extensions"),Object(r.b)("p",null,"Other types of app extensions have greater memory limits than the Today widget. For instance, Custom Keyboard extensions are limited to 48 MB, and Share extensions are limited to 120 MB. Implementing such app extensions with React Native is more viable. One proof of concept example is ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/andrewsardone/react-native-ios-share-extension"}),"react-native-ios-share-extension"),"."),Object(r.b)("hr",null),Object(r.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(r.b)("a",Object(o.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(100.00%)"))}l.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,y=u["".concat(a,".").concat(m)]||u[m]||d[m]||r;return n?i.a.createElement(y,s(s({ref:t},p),{},{components:n})):i.a.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},525:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/TodayWidgetUnableToLoad-b931f8be6eeb72c037338b9ab9766477.jpg"}}]);