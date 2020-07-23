(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{613:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{}},mounted:function(){},methods:{}},n=o(1),i=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"popover"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#popover"}},[t._v("#")]),t._v(" Popover")]),t._v(" "),o("p",[t._v("Popover is enabled by using the "),o("a",{attrs:{href:"../directives/popover"}},[t._v("popover directive")]),t._v(" or the popover component")]),t._v(" "),o("h2",{attrs:{id:"popover-directive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#popover-directive"}},[t._v("#")]),t._v(" popover directive")]),t._v(" "),o("DemoAndCode",{attrs:{htmlStr:"%3Cbtn%20v-popover%3D%22%7Btitle%3A'Popover%20title'%2Cbody%3A'And%20heres%20some%20amazing%20content.%20Its%20very%20engaging.%20Right%3F'%7D%22%3EClick%20to%20toggle%20popover%3C%2Fbtn%3E",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[o("template",{slot:"demo"},[o("p",[o("btn",{directives:[{name:"popover",rawName:"v-popover",value:{title:"Popover title",body:"And heres some amazing content. Its very engaging. Right?"},expression:"{title:'Popover title',body:'And heres some amazing content. Its very engaging. Right?'}"}]},[t._v("Click to toggle popover")])],1)])],2),t._v(" "),o("h2",{attrs:{id:"popover-component"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#popover-component"}},[t._v("#")]),t._v(" popover component")]),t._v(" "),o("DemoAndCode",{attrs:{htmlStr:"%3Cbtn%20id%3D%22pop-target-1%22%3EClick%20to%20toggle%20popover%3C%2Fbtn%3E%0A%3Cpopover%20event%3D%22click%22%20target%3D%22pop-target-1%22%20title%3D%22Popover%20title%22%20body%3D%22And%20heres%20some%20amazing%20content.%20Its%20very%20engaging.%20Right%3F%22%2F%3E%0A%3Cbtn%20id%3D%22pop-target-2%22%3EHover%20to%20toggle%20popover%3C%2Fbtn%3E%0A%3Cpopover%20event%3D%22hover%22%20target%3D%22pop-target-2%22%20title%3D%22Popover%20title%22%20body%3D%22And%20heres%20some%20amazing%20content.%20Its%20very%20engaging.%20Right%3F%22%2F%3E",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[o("template",{slot:"demo"},[o("p",[o("btn",{attrs:{id:"pop-target-1"}},[t._v("Click to toggle popover")]),t._v(" "),o("popover",{attrs:{event:"click",target:"pop-target-1",title:"Popover title",body:"And heres some amazing content. Its very engaging. Right?"}}),t._v(" "),o("btn",{attrs:{id:"pop-target-2"}},[t._v("Hover to toggle popover")]),t._v(" "),o("popover",{attrs:{event:"hover",target:"pop-target-2",title:"Popover title",body:"And heres some amazing content. Its very engaging. Right?"}})],1)])],2),t._v(" "),o("h2",{attrs:{id:"position"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[t._v("#")]),t._v(" position")]),t._v(" "),o("p",[t._v("By default should automatically choose most sensible position.  You can configure it to use a specific relative position like so:")]),t._v(" "),o("DemoAndCode",{attrs:{htmlStr:"%3Cbtn%20id%3D%22pop-target-3%22%3EPopover%20on%20top%3C%2Fbtn%3E%0A%3Cbtn%20id%3D%22pop-target-4%22%3EPopover%20on%20right%3C%2Fbtn%3E%0A%3Cbtn%20id%3D%22pop-target-5%22%3EPopover%20on%20bottom%3C%2Fbtn%3E%0A%3Cbtn%20id%3D%22pop-target-6%22%3EPopover%20on%20left%3C%2Fbtn%3E%0A%3Cbtn%20id%3D%22pop-target-7%22%3EPopover%20on%20auto%3C%2Fbtn%3E%0A%3Cpopover%20event%3D%22hover%22%20position%3D%22top%22%20target%3D%22pop-target-3%22%20title%3D%22Popover%20title%22%20body%3D%22And%20heres%20some%20amazing%20content.%20Its%20very%20engaging.%20Right%3F%22%2F%3E%0A%3Cpopover%20event%3D%22hover%22%20position%3D%22right%22%20target%3D%22pop-target-4%22%20title%3D%22Popover%20title%22%20body%3D%22And%20heres%20some%20amazing%20content.%20Its%20very%20engaging.%20Right%3F%22%2F%3E%0A%3Cpopover%20event%3D%22hover%22%20position%3D%22bottom%22%20target%3D%22pop-target-5%22%20title%3D%22Popover%20title%22%20body%3D%22And%20heres%20some%20amazing%20content.%20Its%20very%20engaging.%20Right%3F%22%2F%3E%0A%3Cpopover%20event%3D%22hover%22%20position%3D%22left%22%20target%3D%22pop-target-6%22%20title%3D%22Popover%20title%22%20body%3D%22And%20heres%20some%20amazing%20content.%20Its%20very%20engaging.%20Right%3F%22%2F%3E%0A%3Cpopover%20event%3D%22hover%22%20position%3D%22auto%22%20target%3D%22pop-target-7%22%20title%3D%22Popover%20title%22%20body%3D%22And%20heres%20some%20amazing%20content.%20Its%20very%20engaging.%20Right%3F%22%2F%3E",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[o("template",{slot:"demo"},[o("p",[o("btn",{attrs:{id:"pop-target-3"}},[t._v("Popover on top")]),t._v(" "),o("btn",{attrs:{id:"pop-target-4"}},[t._v("Popover on right")]),t._v(" "),o("btn",{attrs:{id:"pop-target-5"}},[t._v("Popover on bottom")]),t._v(" "),o("btn",{attrs:{id:"pop-target-6"}},[t._v("Popover on left")]),t._v(" "),o("btn",{attrs:{id:"pop-target-7"}},[t._v("Popover on auto")]),t._v(" "),o("popover",{attrs:{event:"hover",position:"top",target:"pop-target-3",title:"Popover title",body:"And heres some amazing content. Its very engaging. Right?"}}),t._v(" "),o("popover",{attrs:{event:"hover",position:"right",target:"pop-target-4",title:"Popover title",body:"And heres some amazing content. Its very engaging. Right?"}}),t._v(" "),o("popover",{attrs:{event:"hover",position:"bottom",target:"pop-target-5",title:"Popover title",body:"And heres some amazing content. Its very engaging. Right?"}}),t._v(" "),o("popover",{attrs:{event:"hover",position:"left",target:"pop-target-6",title:"Popover title",body:"And heres some amazing content. Its very engaging. Right?"}}),t._v(" "),o("popover",{attrs:{event:"hover",position:"auto",target:"pop-target-7",title:"Popover title",body:"And heres some amazing content. Its very engaging. Right?"}})],1)])],2),t._v(" "),o("h2",{attrs:{id:"html"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" html")]),t._v(" "),o("p",[t._v("Put html content inside the popover:")]),t._v(" "),o("DemoAndCode",{attrs:{htmlStr:"%3Cbtn%20v-popover%3D%22%7Btitle%3A'Popover%20title'%2Chtml%3A'%3Cb%3EPopover%3C%2Fb%3E%20text'%7D%22%3EPopover%20with%20HTML%20from%20directive%3C%2Fbtn%3E%0A%3Cbtn%20id%3D%22popover-target-8%22%3EPopover%20with%20HTML%20from%20component%3C%2Fbtn%3E%0A%3Cpopover%20target%3D%22popover-target-8%22%20title%3D%22Popover%20title%22%20html%3D%22%3Cb%3EPopover%3C%2Fb%3E%20text%22%2F%3E",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[o("template",{slot:"demo"},[o("p",[o("btn",{directives:[{name:"popover",rawName:"v-popover",value:{title:"Popover title",html:"<b>Popover</b> text"},expression:"{title:'Popover title',html:'<b>Popover</b> text'}"}]},[t._v("Popover with HTML from directive")]),t._v(" "),o("btn",{attrs:{id:"popover-target-8"}},[t._v("Popover with HTML from component")]),t._v(" "),o("popover",{attrs:{target:"popover-target-8",title:"Popover title",html:"<b>Popover</b> text"}})],1)])],2),t._v(" "),o("h2",{attrs:{id:"slots"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("#")]),t._v(" slots")]),t._v(" "),o("h3",{attrs:{id:"default"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#default"}},[t._v("#")]),t._v(" default")]),t._v(" "),o("p",[t._v("The default slot will replace the contents inside the popover\nYou should use the click event to trigger so you can interact with contents of popover")]),t._v(" "),o("DemoAndCode",{attrs:{htmlStr:"%3Cbtn%20id%3D%22popover-target-9%22%3ETooltip%20with%20HTML%20from%20default%20slot%3C%2Fbtn%3E%0A%3Cpopover%20event%3D%22click%22%20target%3D%22popover-target-9%22%20title%3D%22Popover%20title%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22d-flex%22%3E%0A%20%20%20%20%20%20%3Cbtn%20class%3D%22mx-auto%20mb-4%22%20btn-class%3D%22secondary%22%3EClick%3C%2Fbtn%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%3C%2Fpopover%3E",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[o("template",{slot:"demo"},[o("p",[o("btn",{attrs:{id:"popover-target-9"}},[t._v("Tooltip with HTML from default slot")]),t._v(" "),o("popover",{attrs:{event:"click",target:"popover-target-9",title:"Popover title"}},[o("div",{staticClass:"d-flex"},[o("btn",{staticClass:"mx-auto mb-4",attrs:{"btn-class":"secondary"}},[t._v("Click")])],1)])],1)])],2),t._v(" "),o("h3",{attrs:{id:"header"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[t._v("#")]),t._v(" header")]),t._v(" "),o("p",[t._v("The header slot will be placed inside the popover-header container")]),t._v(" "),o("DemoAndCode",{attrs:{htmlStr:"%3Cbtn%20id%3D%22popover-target-10%22%3ETooltip%20with%20HTML%20from%20header%20slot%3C%2Fbtn%3E%0A%3Cpopover%20event%3D%22click%22%20target%3D%22popover-target-10%22%3E%0A%20%20%3Ctemplate%20v-slot%3Aheader%3E%0A%20%20%20%20%3Cb%3EAlternative%20title%3C%2Fb%3E%0A%20%20%3C%2Ftemplate%3E%0A%3C%2Fpopover%3E",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[o("template",{slot:"demo"},[o("p",[o("btn",{attrs:{id:"popover-target-10"}},[t._v("Tooltip with HTML from header slot")]),t._v(" "),o("popover",{attrs:{event:"click",target:"popover-target-10"},scopedSlots:t._u([{key:"header",fn:function(){return[o("b",[t._v("Alternative title")])]},proxy:!0}])})],1)])],2),t._v(" "),o("h3",{attrs:{id:"props"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),o("table",{staticClass:"table-responsive"},[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),o("th",[t._v("Description")]),t._v(" "),o("th",[t._v("Default")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("event")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),o("td",[t._v("click or hover")]),t._v(" "),o("td",[t._v("null")])]),t._v(" "),o("tr",[o("td",[t._v("target")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}}),t._v(" "),o("td",[t._v("id of dom node that will trigger popover")]),t._v(" "),o("td",[t._v("null")])]),t._v(" "),o("tr",[o("td",[t._v("title")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}}),t._v(" "),o("td",[t._v("Title of popover")]),t._v(" "),o("td",[t._v("null")])]),t._v(" "),o("tr",[o("td",[t._v("body")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}}),t._v(" "),o("td",[t._v("body text of popover")]),t._v(" "),o("td",[t._v("null")])]),t._v(" "),o("tr",[o("td",[t._v("html")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}}),t._v(" "),o("td",[t._v("body markup of popover")]),t._v(" "),o("td",[t._v("null")])])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);