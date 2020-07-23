(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{605:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{records:{MyDataitem1:"Joe"},dataitems:{MyDataitem1:{name:"FirstName",label:"First Name:"}}}}},o=s(1),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"input-groups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-groups"}},[t._v("#")]),t._v(" Input Groups")]),t._v(" "),s("p",[t._v("Input groups work like this:")]),t._v(" "),s("h2",{attrs:{id:"prepend-slot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepend-slot"}},[t._v("#")]),t._v(" prepend slot")]),t._v(" "),s("DemoAndCode",{attrs:{htmlStr:"%3Cdiv%3E%0A%09%3Cinput-group%20%3Adi%3D%22dataitems.MyDataitem1%22%3E%0A%09%09%3Cspan%20slot%3D%22prepend%22%20class%3D%22input-group-text%22%3EFirst%20Name%3C%2Fspan%3E%0A%09%09%3Ctextbox%20v-model%3D%22records.MyDataitem1%22%20justified%3E%3C%2Ftextbox%3E%0A%09%3C%2Finput-group%3E%0A%3C%2Fdiv%3E%0A",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[s("template",{slot:"demo"},[s("div",[s("input-group",{attrs:{di:t.dataitems.MyDataitem1}},[s("span",{staticClass:"input-group-text",attrs:{slot:"prepend"},slot:"prepend"},[t._v("First Name")]),t._v(" "),s("textbox",{attrs:{justified:""},model:{value:t.records.MyDataitem1,callback:function(e){t.$set(t.records,"MyDataitem1",e)},expression:"records.MyDataitem1"}})],1)],1)])],2),t._v(" "),s("h2",{attrs:{id:"size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size"}},[t._v("#")]),t._v(" size")]),t._v(" "),s("p",[t._v("add an optional size prop to see a small or large version.  The child version will resize to fit.")]),t._v(" "),s("DemoAndCode",{attrs:{htmlStr:"%3Cdiv%3E%0A%09%3Cinput-group%20size%3D%22sm%22%20%3Adi%3D%22dataitems.MyDataitem1%22%3E%0A%09%09%3Cspan%20slot%3D%22prepend%22%20class%3D%22input-group-text%22%3EFirst%20Name%3C%2Fspan%3E%0A%09%09%3Ctextbox%20size%3D%22sm%22%20v-model%3D%22records.MyDataitem1%22%20justified%3E%3C%2Ftextbox%3E%0A%09%3C%2Finput-group%3E%0A%09%3Chr%3E%0A%09%3Cinput-group%20size%3D%22lg%22%20%3Adi%3D%22dataitems.MyDataitem1%22%3E%0A%09%09%3Cspan%20slot%3D%22prepend%22%20class%3D%22input-group-text%22%3EFirst%20Name%3C%2Fspan%3E%0A%09%09%3Ctextbox%20v-model%3D%22records.MyDataitem1%22%20justified%3E%3C%2Ftextbox%3E%0A%09%3C%2Finput-group%3E%0A%3C%2Fdiv%3E%0A",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[s("template",{slot:"demo"},[s("div",[s("input-group",{attrs:{size:"sm",di:t.dataitems.MyDataitem1}},[s("span",{staticClass:"input-group-text",attrs:{slot:"prepend"},slot:"prepend"},[t._v("First Name")]),t._v(" "),s("textbox",{attrs:{size:"sm",justified:""},model:{value:t.records.MyDataitem1,callback:function(e){t.$set(t.records,"MyDataitem1",e)},expression:"records.MyDataitem1"}})],1),t._v(" "),s("hr"),t._v(" "),s("input-group",{attrs:{size:"lg",di:t.dataitems.MyDataitem1}},[s("span",{staticClass:"input-group-text",attrs:{slot:"prepend"},slot:"prepend"},[t._v("First Name")]),t._v(" "),s("textbox",{attrs:{justified:""},model:{value:t.records.MyDataitem1,callback:function(e){t.$set(t.records,"MyDataitem1",e)},expression:"records.MyDataitem1"}})],1)],1)])],2),t._v(" "),s("h2",{attrs:{id:"append-slot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#append-slot"}},[t._v("#")]),t._v(" append slot")]),t._v(" "),s("DemoAndCode",{attrs:{htmlStr:"%3Cdiv%3E%0A%09%3Cinput-group%20%3Adi%3D%22dataitems.MyDataitem1%22%3E%0A%09%09%3Ctextbox%20v-model%3D%22records.MyDataitem1%22%20justified%2F%3E%0A%09%09%3Cspan%20slot%3D%22append%22%20class%3D%22input-group-text%22%3EFirst%20Name%3C%2Fspan%3E%0A%09%3C%2Finput-group%3E%0A%3C%2Fdiv%3E%0A",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[s("template",{slot:"demo"},[s("div",[s("input-group",{attrs:{di:t.dataitems.MyDataitem1}},[s("textbox",{attrs:{justified:""},model:{value:t.records.MyDataitem1,callback:function(e){t.$set(t.records,"MyDataitem1",e)},expression:"records.MyDataitem1"}}),t._v(" "),s("span",{staticClass:"input-group-text",attrs:{slot:"append"},slot:"append"},[t._v("First Name")])],1)],1)])],2),t._v(" "),s("h2",{attrs:{id:"btn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#btn"}},[t._v("#")]),t._v(" btn")]),t._v(" "),s("DemoAndCode",{attrs:{htmlStr:"%3Cdiv%3E%0A%09%3Cinput-group%3E%0A%09%09%3Cspan%20slot%3D%22prepend%22%20class%3D%22input-group-text%22%3ETest%3C%2Fspan%3E%0A%09%09%3Ctextbox%20v-model%3D%22records.MyDataitem1%22%20justified%2F%3E%0A%09%09%3Cbtn%20slot%3D%22append%22%20class%3D%22input-group-btn%22%3EButton%3C%2Fbtn%3E%0A%09%09%3Cbtn%20slot%3D%22append%22%20class%3D%22input-group-btn%22%3EButton%3C%2Fbtn%3E%0A%09%3C%2Finput-group%3E%0A%3C%2Fdiv%3E%0A",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[s("template",{slot:"demo"},[s("div",[s("input-group",[s("span",{staticClass:"input-group-text",attrs:{slot:"prepend"},slot:"prepend"},[t._v("Test")]),t._v(" "),s("textbox",{attrs:{justified:""},model:{value:t.records.MyDataitem1,callback:function(e){t.$set(t.records,"MyDataitem1",e)},expression:"records.MyDataitem1"}}),t._v(" "),s("btn",{staticClass:"input-group-btn",attrs:{slot:"append"},slot:"append"},[t._v("Button")]),t._v(" "),s("btn",{staticClass:"input-group-btn",attrs:{slot:"append"},slot:"append"},[t._v("Button")])],1)],1)])],2)],1)}),[],!1,null,null,null);e.default=i.exports}}]);