(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{367:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),o=(n(0),n(413)),i={id:"hermes",title:"\u4f7f\u7528\u65b0\u7684 Hermes \u5f15\u64ce"},s={unversionedId:"hermes",id:"version-0.63/hermes",isDocsHomePage:!1,title:"\u4f7f\u7528\u65b0\u7684 Hermes \u5f15\u64ce",description:"Hermes is an open-source JavaScript engine optimized for running React Native apps on Android. For many apps, enabling Hermes will result in improved start-up time, decreased memory usage, and smaller app size. At this time Hermes is an opt-in React Native feature, and this guide explains how to enable it.",source:"@site/versioned_docs/version-0.63/hermes.md",slug:"/hermes",permalink:"/docs/hermes",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/hermes.md",version:"0.63",lastUpdatedAt:1608780554,sidebar:"version-0.63/docs",previous:{title:"\u5b9a\u65f6\u5668",permalink:"/docs/timers"},next:{title:"\u8bbf\u95ee\u7f51\u7edc",permalink:"/docs/network"}},c=[{value:"Confirming Hermes is in use",id:"confirming-hermes-is-in-use",children:[]},{value:"Debugging JS on Hermes using Google Chrome&#39;s DevTools",id:"debugging-js-on-hermes-using-google-chromes-devtools",children:[]}],l={toc:c};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("a",{href:"https://hermesengine.dev"},Object(o.b)("img",{width:300,height:300,style:{float:"right",margin:"-30px 4px 0"},src:"/docs/assets/HermesLogo.svg"})),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hermesengine.dev"}),"Hermes")," is an open-source JavaScript engine optimized for running React Native apps on Android. For many apps, enabling Hermes will result in improved start-up time, decreased memory usage, and smaller app size. At this time Hermes is an ",Object(o.b)("strong",{parentName:"p"},"opt-in")," React Native feature, and this guide explains how to enable it."),Object(o.b)("p",null,"First, ensure you're using at least version 0.60.4 of React Native."),Object(o.b)("p",null,"If you have an existing app based on an earlier version of React Native, you will have to upgrade it first. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/upgrading"}),"Upgrading to new React Native Versions")," for how to do this. Make especially sure that all changes to ",Object(o.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," have been applied, as detailed by the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://react-native-community.github.io/upgrade-helper/?from=0.59.0"}),"React Native upgrade helper"),". After upgrading the app, make sure everything works before trying to switch to Hermes."),Object(o.b)("blockquote",null,Object(o.b)("h2",Object(r.a)({parentName:"blockquote"},{id:"note-for-rn-compatibility"}),"Note for RN compatibility."),Object(o.b)("p",{parentName:"blockquote"},"Each Hermes release is aimed at a specific RN version. The rule of thumb is to always follow ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/hermes/releases"}),"Hermes releases")," strictly. Version mismatch can result in instant crash of your apps in the worst case scenario.")),Object(o.b)("blockquote",null,Object(o.b)("h2",Object(r.a)({parentName:"blockquote"},{id:"note-for-windows-users"}),"Note for Windows users."),Object(o.b)("p",{parentName:"blockquote"},"Hermes requires ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.microsoft.com/en-us/download/details.aspx?id=48145"}),"Microsoft Visual C++ 2015 Redistributable"))),Object(o.b)("p",null,"Edit your ",Object(o.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," file and make the change illustrated below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),'  project.ext.react = [\n      entryFile: "index.js",\n-     enableHermes: false  // clean and rebuild if changing\n+     enableHermes: true  // clean and rebuild if changing\n  ]\n')),Object(o.b)("p",null,"Also, if you're using ProGuard, you will need to add these rules in ",Object(o.b)("inlineCode",{parentName:"p"},"proguard-rules.pro")," :"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"-keep class com.facebook.hermes.unicode.** { *; }\n-keep class com.facebook.jni.** { *; }\n")),Object(o.b)("p",null,"Next, if you've already built your app at least once, clean the build:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ cd android && ./gradlew clean\n")),Object(o.b)("p",null,"That's it! You should now be able to develop and deploy your app as normal:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ npx react-native run-android\n")),Object(o.b)("blockquote",null,Object(o.b)("h2",Object(r.a)({parentName:"blockquote"},{id:"note-about-android-app-bundles"}),"Note about Android App Bundles"),Object(o.b)("p",{parentName:"blockquote"},"Android app bundles are supported from react-native 0.62.0 and up.")),Object(o.b)("h2",{id:"confirming-hermes-is-in-use"},"Confirming Hermes is in use"),Object(o.b)("p",null,"If you've recently created a new app from scratch, you should see if Hermes is enabled in the welcome view:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Where to find JS engine status in AwesomeProject",src:n(471).default})),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"HermesInternal")," global variable will be available in JavaScript that can be used to verify that Hermes is in use:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const isHermes = () => !!global.HermesInternal;\n")),Object(o.b)("p",null,"To see the benefits of Hermes, try making a release build/deployment of your app to compare. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ npx react-native run-android --variant release\n")),Object(o.b)("p",null,"This will compile JavaScript to bytecode during build time which will improve your app's startup speed on device."),Object(o.b)("h2",{id:"debugging-js-on-hermes-using-google-chromes-devtools"},"Debugging JS on Hermes using Google Chrome's DevTools"),Object(o.b)("p",null,"Hermes supports the Chrome debugger by implementing the Chrome inspector protocol. This means Chrome's tools can be used to directly debug JavaScript running on Hermes, on an emulator or on a real, physical, device."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'Note that this is very different with the "Remote JS Debugging" from the In-App Developer Menu documented in the ',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"debugging#debugging-using-a-custom-javascript-debugger"}),"Debugging")," section, which actually runs the JS code on Chrome's V8 on your development machine (laptop or desktop).")),Object(o.b)("p",null,"Chrome connects to Hermes running on device via Metro, so you'll need to know where Metro is listening. Typically this will be on ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8081"),", but this is ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/metro/docs/configuration"}),"configurable"),". When running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start")," the address is written to stdout on startup."),Object(o.b)("p",null,"Once you know where the Metro server is listening, you can connect with Chrome using the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"chrome://inspect")," in a Chrome browser instance.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"Configure...")," button to add the Metro server address (typically ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8081")," as described above)."))),Object(o.b)("p",null,Object(o.b)("img",{alt:"Configure button in Chrome DevTools devices page",src:n(472).default})),Object(o.b)("p",null,Object(o.b)("img",{alt:"Dialog for adding Chrome DevTools network targets",src:n(473).default})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'You should now see a "Hermes React Native" target with an "inspect" link which can be used to bring up debugger. If you don\'t see the "inspect" link, make sure the Metro server is running. ',Object(o.b)("img",{alt:"Target inspect link",src:n(474).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You can now use the Chrome debug tools. For example, to breakpoint the next time some JavaScript is run, click on the pause button and trigger an action in your app which would cause JavaScript to execute. ",Object(o.b)("img",{alt:"Pause button in debug tools",src:n(475).default})))),Object(o.b)("hr",null),Object(o.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm7732-sunnylqm2268"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(o.b)("a",Object(r.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(77.32%), ",Object(o.b)("a",Object(r.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(22.68%)"))}b.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},471:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/HermesApp-ae778d80caa321ba00b558b025dc9805.jpg"},472:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/HermesDebugChromeConfig-31cb28d5b642a616aa547edd3095253b.png"},473:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/HermesDebugChromeMetroAddress-d21dc83b9eee0545a154301e1ce0be8b.png"},474:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/HermesDebugChromeInspect-8aa08afba4c7ce76a85d47d31200dd55.png"},475:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/HermesDebugChromePause-5bac724c8b705ba3e7dc9676dedd6c4f.png"}}]);