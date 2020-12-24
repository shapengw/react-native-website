(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),l=a(8),r=(a(0),a(413)),b=a(417),i=a(418),c=a(419),o={id:"modal",title:"Modal"},d={unversionedId:"modal",id:"version-0.63/modal",isDocsHomePage:!1,title:"Modal",description:"Modal \u7ec4\u4ef6\u662f\u4e00\u79cd\u7b80\u5355\u7684\u8986\u76d6\u5728\u5176\u4ed6\u89c6\u56fe\u4e4b\u4e0a\u663e\u793a\u5185\u5bb9\u7684\u65b9\u5f0f\u3002",source:"@site/versioned_docs/version-0.63/modal.md",slug:"/modal",permalink:"/docs/modal",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/modal.md",version:"0.63",lastUpdatedAt:1608780554,sidebar:"version-0.63/\u7ec4\u4ef6",previous:{title:"KeyboardAvoidingView",permalink:"/docs/keyboardavoidingview"},next:{title:"Pressable",permalink:"/docs/pressable"}},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"<code>visible</code>",id:"visible",children:[]},{value:"<code>supportedOrientations</code>",id:"supportedorientations",children:[]},{value:"<code>onRequestClose</code>",id:"onrequestclose",children:[]},{value:"<code>onShow</code>",id:"onshow",children:[]},{value:"<code>transparent</code>",id:"transparent",children:[]},{value:"<code>animationType</code>",id:"animationtype",children:[]},{value:"<code>hardwareAccelerated</code>",id:"hardwareaccelerated",children:[]},{value:"<code>statusBarTranslucent</code>",id:"statusbartranslucent",children:[]},{value:"<code>onDismiss</code>",id:"ondismiss",children:[]},{value:"<code>onOrientationChange</code>",id:"onorientationchange",children:[]},{value:"<code>presentationStyle</code>",id:"presentationstyle",children:[]}]}],u={toc:s};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Modal \u7ec4\u4ef6\u662f\u4e00\u79cd\u7b80\u5355\u7684\u8986\u76d6\u5728\u5176\u4ed6\u89c6\u56fe\u4e4b\u4e0a\u663e\u793a\u5185\u5bb9\u7684\u65b9\u5f0f\u3002"),Object(r.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(r.b)(b.a,{groupId:"syntax",defaultValue:c.a.defaultSyntax,values:c.a.syntax,mdxType:"Tabs"},Object(r.b)(i.a,{value:"functional",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"Modal","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Alert%2C%0A%20%20Modal%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20TouchableHighlight%2C%0A%20%20View%0A%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BmodalVisible%2C%20setModalVisible%5D%20%3D%20useState(false)%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20animationType%3D%22slide%22%0A%20%20%20%20%20%20%20%20transparent%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20visible%3D%7BmodalVisible%7D%0A%20%20%20%20%20%20%20%20onRequestClose%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20Alert.alert(%22Modal%20has%20been%20closed.%22)%3B%0A%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.modalView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.modalText%7D%3EHello%20World!%3C%2FText%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20...styles.openButton%2C%20backgroundColor%3A%20%22%232196F3%22%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EHide%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%0A%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20style%3D%7Bstyles.openButton%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setModalVisible(true)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EShow%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20centeredView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20marginTop%3A%2022%0A%20%20%7D%2C%0A%20%20modalView%3A%20%7B%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2035%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20shadowColor%3A%20%22%23000%22%2C%0A%20%20%20%20shadowOffset%3A%20%7B%0A%20%20%20%20%20%20width%3A%200%2C%0A%20%20%20%20%20%20height%3A%202%0A%20%20%20%20%7D%2C%0A%20%20%20%20shadowOpacity%3A%200.25%2C%0A%20%20%20%20shadowRadius%3A%203.84%2C%0A%20%20%20%20elevation%3A%205%0A%20%20%7D%2C%0A%20%20openButton%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%23F194FF%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20elevation%3A%202%0A%20%20%7D%2C%0A%20%20textStyle%3A%20%7B%0A%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20modalText%3A%20%7B%0A%20%20%20%20marginBottom%3A%2015%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(r.b)(i.a,{value:"classical",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"Modal","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Alert%2C%0A%20%20Modal%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20TouchableHighlight%2C%0A%20%20View%0A%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20modalVisible%3A%20false%0A%20%20%7D%3B%0A%0A%20%20setModalVisible%20%3D%20(visible)%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20modalVisible%3A%20visible%20%7D)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20modalVisible%20%7D%20%3D%20this.state%3B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20%20%20animationType%3D%22slide%22%0A%20%20%20%20%20%20%20%20%20%20transparent%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20visible%3D%7BmodalVisible%7D%0A%20%20%20%20%20%20%20%20%20%20onRequestClose%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Alert.alert(%22Modal%20has%20been%20closed.%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.modalView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.modalText%7D%3EHello%20World!%3C%2FText%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20...styles.openButton%2C%20backgroundColor%3A%20%22%232196F3%22%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EHide%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FModal%3E%0A%0A%20%20%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.openButton%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(true)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EShow%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20centeredView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20marginTop%3A%2022%0A%20%20%7D%2C%0A%20%20modalView%3A%20%7B%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2035%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20shadowColor%3A%20%22%23000%22%2C%0A%20%20%20%20shadowOffset%3A%20%7B%0A%20%20%20%20%20%20width%3A%200%2C%0A%20%20%20%20%20%20height%3A%202%0A%20%20%20%20%7D%2C%0A%20%20%20%20shadowOpacity%3A%200.25%2C%0A%20%20%20%20shadowRadius%3A%203.84%2C%0A%20%20%20%20elevation%3A%205%0A%20%20%7D%2C%0A%20%20openButton%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%23F194FF%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20elevation%3A%202%0A%20%20%7D%2C%0A%20%20textStyle%3A%20%7B%0A%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20modalText%3A%20%7B%0A%20%20%20%20marginBottom%3A%2015%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(r.b)("hr",null),Object(r.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"visible"},Object(r.b)("inlineCode",{parentName:"h3"},"visible")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"visible"),"\u5c5e\u6027\u51b3\u5b9a modal \u662f\u5426\u663e\u793a\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"supportedorientations"},Object(r.b)("inlineCode",{parentName:"h3"},"supportedOrientations")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"supportedOrientations"),"\u7528\u4e8e\u6307\u5b9a\u5728\u8bbe\u5907\u5207\u6362\u6a2a\u7ad6\u5c4f\u65b9\u5411\u65f6\uff0cmodal \u4f1a\u5728\u54ea\u4e9b\u5c4f\u5e55\u671d\u5411\u4e0b\u8ddf\u968f\u65cb\u8f6c\u3002\u5728 iOS \u4e0a\uff0c\u9664\u4e86\u672c\u5c5e\u6027\u5916\uff0c\u8fd8\u4f1a\u53d7\u5230\u5e94\u7528\u7684 Info.plist \u6587\u4ef6\u4e2d",Object(r.b)("inlineCode",{parentName:"p"},"UISupportedInterfaceOrientations"),"\u7684\u9650\u5236\u3002\u5982\u679c\u8fd8\u8bbe\u7f6e\u4e86",Object(r.b)("inlineCode",{parentName:"p"},"presentationStyle"),"\u5c5e\u6027\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"pageSheet"),"\u6216",Object(r.b)("inlineCode",{parentName:"p"},"formSheet"),"\uff0c\u5219\u5728 iOS \u4e0a\u672c\u5c5e\u6027\u5c06\u88ab\u5ffd\u7565\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"array of enum('portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right')"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onrequestclose"},Object(r.b)("inlineCode",{parentName:"h3"},"onRequestClose")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"onRequestClose"),"\u56de\u8c03\u4f1a\u5728\u7528\u6237\u6309\u4e0b Android \u8bbe\u5907\u4e0a\u7684\u540e\u9000\u6309\u952e\u6216\u662f Apple TV \u4e0a\u7684\u83dc\u5355\u952e\u65f6\u89e6\u53d1\u3002\u8bf7\u52a1\u5fc5\u6ce8\u610f\u672c\u5c5e\u6027\u5728 Android \u5e73\u53f0\u4e0a\u4e3a\u5fc5\u586b\uff0c\u4e14\u4f1a\u5728 modal \u5904\u4e8e\u5f00\u542f\u72b6\u6001\u65f6\u963b\u6b62",Object(r.b)("inlineCode",{parentName:"p"},"BackHandler"),"\u4e8b\u4ef6\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android, Platform.isTVOS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(Others)")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onshow"},Object(r.b)("inlineCode",{parentName:"h3"},"onShow")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"onShow"),"\u56de\u8c03\u51fd\u6570\u4f1a\u5728 modal \u663e\u793a\u65f6\u8c03\u7528\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"transparent"},Object(r.b)("inlineCode",{parentName:"h3"},"transparent")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"transparent")," \u5c5e\u6027\u662f\u6307\u80cc\u666f\u662f\u5426\u900f\u660e\uff0c\u9ed8\u8ba4\u4e3a\u767d\u8272\uff0c\u5c06\u8fd9\u4e2a\u5c5e\u6027\u8bbe\u4e3a\uff1atrue \u7684\u65f6\u5019\u5f39\u51fa\u4e00\u4e2a\u900f\u660e\u80cc\u666f\u5c42\u7684 modal\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"animationtype"},Object(r.b)("inlineCode",{parentName:"h3"},"animationType")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"animationType"),"\u6307\u5b9a\u4e86 modal \u7684\u52a8\u753b\u7c7b\u578b\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"slide")," \u4ece\u5e95\u90e8\u6ed1\u5165\u6ed1\u51fa\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fade")," \u6de1\u5165\u6de1\u51fa\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"none")," \u6ca1\u6709\u52a8\u753b\uff0c\u76f4\u63a5\u8e66\u51fa\u6765\u3002")),Object(r.b)("p",null,"\u9ed8\u8ba4\u503c\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"none"),"\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('none', 'slide', 'fade')"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"hardwareaccelerated"},Object(r.b)("inlineCode",{parentName:"h3"},"hardwareAccelerated")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"hardwareAccelerated"),"\u5c5e\u6027\u51b3\u5b9a\u662f\u5426\u5f3a\u5236\u542f\u7528\u786c\u4ef6\u52a0\u901f\u6765\u7ed8\u5236\u5f39\u51fa\u5c42\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"statusbartranslucent"},Object(r.b)("inlineCode",{parentName:"h3"},"statusBarTranslucent")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"statusBarTranslucent")," prop determines whether your modal should go under the system statusbar."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"ondismiss"},Object(r.b)("inlineCode",{parentName:"h3"},"onDismiss")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"onDismiss"),"\u56de\u8c03\u4f1a\u5728 modal \u88ab\u5173\u95ed\u65f6\u8c03\u7528\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onorientationchange"},Object(r.b)("inlineCode",{parentName:"h3"},"onOrientationChange")),Object(r.b)("p",null,"\u6a21\u6001\u7a97\u663e\u793a\u7684\u65f6\u5019\uff0c\u5f53\u8bbe\u5907\u65b9\u5411\u53d1\u751f\u66f4\u6539\u65f6\uff0c\u5c06\u8c03\u7528",Object(r.b)("inlineCode",{parentName:"p"},"onOrientationChange"),"\u56de\u8c03\u65b9\u6cd5\u3002 \u63d0\u4f9b\u7684\u8bbe\u5907\u65b9\u5411\u4ec5\u4e3a\u201c\u7ad6\u5c4f\u201d\u6216\u201c\u6a2a\u5c4f\u201d\u3002 \u65e0\u8bba\u5f53\u524d\u65b9\u5411\u5982\u4f55\uff0c\u4e5f\u4f1a\u5728\u521d\u59cb\u6e32\u67d3\u65f6\u8c03\u7528\u6b64\u56de\u8c03\u65b9\u6cd5\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"presentationstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"presentationStyle")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"presentationStyle"),"\u51b3\u5b9a modal\uff08\u5728\u8f83\u5927\u5c4f\u5e55\u7684\u8bbe\u5907\u6bd4\u5982 iPad \u6216\u662f Plus \u673a\u578b\uff09\u5982\u4f55\u5c55\u73b0\u3002\u66f4\u591a\u7ec6\u8282\u8bf7\u53c2\u9605",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/reference/uikit/uimodalpresentationstyle"}),"https://developer.apple.com/reference/uikit/uimodalpresentationstyle"),"\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fullScreen"),"\u5b8c\u5168\u76d6\u6ee1\u5c4f\u5e55\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pageSheet"),"\u7ad6\u76f4\u65b9\u5411\u51e0\u4e4e\u76d6\u6ee1\uff0c\u6c34\u5e73\u5c45\u4e2d\uff0c\u5de6\u53f3\u7559\u51fa\u4e00\u5b9a\u7a7a\u767d\uff08\u4ec5\u7528\u4e8e\u5927\u5c4f\u8bbe\u5907\uff09\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"formSheet"),"\u7ad6\u76f4\u548c\u6c34\u5e73\u90fd\u5c45\u4e2d\uff0c\u56db\u5468\u90fd\u7559\u51fa\u4e00\u5b9a\u7a7a\u767d\uff08\u4ec5\u7528\u4e8e\u5927\u5c4f\u8bbe\u5907\uff09\u3002"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"overFullScreen"),"\u5b8c\u5168\u76d6\u6ee1\u5c4f\u5e55\uff0c\u540c\u65f6\u5141\u8bb8\u900f\u660e\u3002")),Object(r.b)("p",null,"\u9ed8\u8ba4\u4f1a\u6839\u636e",Object(r.b)("inlineCode",{parentName:"p"},"transparent"),"\u5c5e\u6027\u800c\u8bbe\u7f6e\u4e3a",Object(r.b)("inlineCode",{parentName:"p"},"overFullScreen"),"\u6216\u662f",Object(r.b)("inlineCode",{parentName:"p"},"fullScreen"),"\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('fullScreen', 'pageSheet', 'formSheet', 'overFullScreen')"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(r.b)("hr",null),Object(r.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm9507-sunnylqm464-hqwlkj029"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(r.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(95.07%), ",Object(r.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(4.64%), ",Object(r.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=hqwlkj&type=Users"}),"hqwlkj"),"(0.29%)"))}p.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),d=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=d(a),p=n,O=s["".concat(b,".").concat(p)]||s[p]||u[p]||r;return a?l.a.createElement(O,i(i({ref:t},o),{},{components:a})):l.a.createElement(O,i({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var o=2;o<r;o++)b[o]=a[o];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},414:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}},415:function(e,t,a){"use strict";var n=a(0),l=a(416);t.a=function(){var e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},416:function(e,t,a){"use strict";var n=a(0),l=Object(n.createContext)(void 0);t.a=l},417:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(415),b=a(414),i=a(62),c=a.n(i),o=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,s=e.values,u=e.groupId,p=e.className,O=Object(r.a)(),m=O.tabGroupChoices,j=O.setTabGroupChoices,A=Object(n.useState)(i),h=A[0],C=A[1],g=n.Children.toArray(e.children);if(null!=u){var N=m[u];null!=N&&N!==h&&s.some((function(e){return e.value===N}))&&C(N)}var y=function(e){C(e),null!=u&&j(u,e)},f=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":a},p)},s.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(b.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return f.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(f,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},418:function(e,t,a){"use strict";var n=a(3),l=a(0),r=a.n(l);t.a=function(e){var t=e.children,a=e.hidden,l=e.className;return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:l}),t)}},419:function(e,t,a){"use strict";var n=a(7),l=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),b=l?"ios":"android",i=l?"macos":r?"windows":"linux";t.a={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:b,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}}}]);