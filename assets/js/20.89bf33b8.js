(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{597:function(t,e,a){"use strict";a.r(e);var s={data:function(){return{}}},r=a(1),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"card-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#card-group"}},[t._v("#")]),t._v(" Card-Group")]),t._v(" "),a("h2",{attrs:{id:"groups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#groups"}},[t._v("#")]),t._v(" Groups")]),t._v(" "),a("p",[t._v("Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use display: flex; to achieve their uniform sizing.")]),t._v(" "),a("DemoAndCode",{attrs:{htmlStr:"%3Cdiv%3E%0A%09%3Ccard-group%3E%0A%09%09%3Ccard%20head%20title%3D%22Card%20Title%22%20class%3D%22border-primary%20text-primary%20mb-2%22%3E%0A%09%09%09Example%20body%20content%0A%09%09%3C%2Fcard%3E%0A%09%09%3Ccard%20head%20title%3D%22Card%20Title%22%20class%3D%22border-secondary%20text-secondary%20mb-2%22%3E%09%0A%09%09%09Example%20body%20content%20is%20longer%0A%09%09%3C%2Fcard%3E%0A%09%09%3Ccard%20head%20title%3D%22Card%20Title%22%20class%3D%22border-success%20text-success%20mb-2%22%3E%09%0A%09%09%09Example%20body%20content%0A%09%09%3C%2Fcard%3E%0A%09%3C%2Fcard-group%3E%0A%3C%2Fdiv%3E%0A",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[a("template",{slot:"demo"},[a("div",[a("card-group",[a("card",{staticClass:"border-primary text-primary mb-2",attrs:{head:"",title:"Card Title"}},[t._v("\n\t\t\tExample body content\n\t\t")]),t._v(" "),a("card",{staticClass:"border-secondary text-secondary mb-2",attrs:{head:"",title:"Card Title"}},[t._v("\t\n\t\t\tExample body content is longer\n\t\t")]),t._v(" "),a("card",{staticClass:"border-success text-success mb-2",attrs:{head:"",title:"Card Title"}},[t._v("\t\n\t\t\tExample body content\n\t\t")])],1)],1)])],2),t._v(" "),a("p",[t._v("Card footers in groups will automatically line up.")]),t._v(" "),a("DemoAndCode",{attrs:{htmlStr:"%3Cdiv%3E%0A%09%3Ccard-group%3E%0A%09%09%3Ccard%20head%20foot%20title%3D%22Card%20Title%22%20class%3D%22border-primary%20text-primary%20mb-2%22%3E%0A%09%09%09This%20is%20a%20wider%20card%20with%20supporting%20text%20below%20as%20a%20natural%20lead-in%20to%20additional%20content.%20This%20content%20is%20a%20little%20bit%20longer.%0A%09%09%09%3Ctemplate%20%23footer-inner%3E%20Last%20updated%203%20mins%20ago%20%3C%2Ftemplate%3E%0A%09%09%3C%2Fcard%3E%0A%09%09%3Ccard%20head%20foot%20title%3D%22Card%20Title%22%20class%3D%22border-secondary%20text-secondary%20mb-2%22%3E%09%0A%09%09%09This%20card%20has%20supporting%20text%20below%20as%20a%20natural%20lead-in%20to%20additional%20content.%0A%09%09%09%3Ctemplate%20%23footer-inner%3E%20Last%20updated%203%20mins%20ago%20%3C%2Ftemplate%3E%0A%09%09%3C%2Fcard%3E%0A%09%09%3Ccard%20head%20foot%20title%3D%22Card%20Title%22%20class%3D%22border-success%20text-success%20mb-2%22%3E%09%0A%09%09%09This%20is%20a%20wider%20card%20with%20supporting%20text%20below%20as%20a%20natural%20lead-in%20to%20additional%20content.%20This%20card%20has%20even%20longer%20content%20than%20the%20first%20to%20show%20that%20equal%20height%20action.%0A%09%09%09%3Ctemplate%20%23footer-inner%3E%20Last%20updated%203%20mins%20ago%20%3C%2Ftemplate%3E%0A%09%09%3C%2Fcard%3E%0A%09%3C%2Fcard-group%3E%0A%3C%2Fdiv%3E%0A",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[a("template",{slot:"demo"},[a("div",[a("card-group",[a("card",{staticClass:"border-primary text-primary mb-2",attrs:{head:"",foot:"",title:"Card Title"},scopedSlots:t._u([{key:"footer-inner",fn:function(){return[t._v(" Last updated 3 mins ago ")]},proxy:!0}])},[t._v("\n\t\t\tThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.\n\t\t\t")]),t._v(" "),a("card",{staticClass:"border-secondary text-secondary mb-2",attrs:{head:"",foot:"",title:"Card Title"},scopedSlots:t._u([{key:"footer-inner",fn:function(){return[t._v(" Last updated 3 mins ago ")]},proxy:!0}])},[t._v("\t\n\t\t\tThis card has supporting text below as a natural lead-in to additional content.\n\t\t\t")]),t._v(" "),a("card",{staticClass:"border-success text-success mb-2",attrs:{head:"",foot:"",title:"Card Title"},scopedSlots:t._u([{key:"footer-inner",fn:function(){return[t._v(" Last updated 3 mins ago ")]},proxy:!0}])},[t._v("\t\n\t\t\tThis is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.\n\t\t\t")])],1)],1)])],2),t._v(" "),a("h2",{attrs:{id:"decks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decks"}},[t._v("#")]),t._v(" Decks")]),t._v(" "),a("p",[t._v("Need a set of equal width and height cards that aren’t attached to one another? Use card decks.")]),t._v(" "),a("DemoAndCode",{attrs:{htmlStr:"%3Cdiv%3E%0A%09%3Ccard-group%20deck%3E%0A%09%09%3Ccard%20title%3D%22Card%20Title%22%20class%3D%22border-primary%20text-primary%20mb-2%22%3E%0A%09%09%09%3Ctemplate%20%23header%3E%3Cimg%20src%3D%22https%3A%2F%2Fpicsum.photos%2F400%2F400%3Frandom%22%20class%3D%22card-img-top%22%20alt%3D%22...%22%3E%3C%2Ftemplate%3E%0A%09%09%09Example%20body%20content%0A%09%09%3C%2Fcard%3E%0A%09%09%3Ccard%20title%3D%22Card%20Title%22%20class%3D%22border-secondary%20text-secondary%20mb-2%22%3E%09%0A%09%09%09Example%20body%20content%20is%20longer%0A%09%09%09%3Ctemplate%20%23header%3E%3Cimg%20src%3D%22https%3A%2F%2Fpicsum.photos%2F400%2F400%3Frandom%22%20class%3D%22card-img-top%22%20alt%3D%22...%22%3E%3C%2Ftemplate%3E%0A%09%09%3C%2Fcard%3E%0A%09%09%3Ccard%20title%3D%22Card%20Title%22%20class%3D%22border-success%20text-success%20mb-2%22%3E%09%0A%09%09%09Example%20body%20content%0A%09%09%09%3Ctemplate%20%23header%3E%3Cimg%20src%3D%22https%3A%2F%2Fpicsum.photos%2F400%2F400%3Frandom%22%20class%3D%22card-img-top%22%20alt%3D%22...%22%3E%3C%2Ftemplate%3E%0A%09%09%3C%2Fcard%3E%0A%09%3C%2Fcard-group%3E%0A%3C%2Fdiv%3E%0A",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[a("template",{slot:"demo"},[a("div",[a("card-group",{attrs:{deck:""}},[a("card",{staticClass:"border-primary text-primary mb-2",attrs:{title:"Card Title"},scopedSlots:t._u([{key:"header",fn:function(){return[a("img",{staticClass:"card-img-top",attrs:{src:"https://picsum.photos/400/400?random",alt:"..."}})]},proxy:!0}])},[t._v("\n\t\t\tExample body content\n\t\t")]),t._v(" "),a("card",{staticClass:"border-secondary text-secondary mb-2",attrs:{title:"Card Title"},scopedSlots:t._u([{key:"header",fn:function(){return[a("img",{staticClass:"card-img-top",attrs:{src:"https://picsum.photos/400/400?random",alt:"..."}})]},proxy:!0}])},[t._v("\t\n\t\t\tExample body content is longer\n\t\t\t")]),t._v(" "),a("card",{staticClass:"border-success text-success mb-2",attrs:{title:"Card Title"},scopedSlots:t._u([{key:"header",fn:function(){return[a("img",{staticClass:"card-img-top",attrs:{src:"https://picsum.photos/400/400?random",alt:"..."}})]},proxy:!0}])},[t._v("\t\n\t\t\tExample body content\n\t\t\t")])],1)],1)])],2),t._v(" "),a("p",[t._v("Just like with card groups, card footers in decks will automatically line up.")]),t._v(" "),a("DemoAndCode",{attrs:{htmlStr:"%3Cdiv%3E%0A%09%3Ccard-group%20deck%3E%0A%09%09%3Ccard%20head%20foot%20title%3D%22Card%20Title%22%20class%3D%22border-primary%20text-primary%20mb-2%22%3E%0A%09%09%09This%20is%20a%20wider%20card%20with%20supporting%20text%20below%20as%20a%20natural%20lead-in%20to%20additional%20content.%20This%20content%20is%20a%20little%20bit%20longer.%0A%09%09%09%3Ctemplate%20%23footer-inner%3E%20Last%20updated%203%20mins%20ago%20%3C%2Ftemplate%3E%0A%09%09%3C%2Fcard%3E%0A%09%09%3Ccard%20head%20foot%20title%3D%22Card%20Title%22%20class%3D%22border-secondary%20text-secondary%20mb-2%22%3E%09%0A%09%09%09This%20card%20has%20supporting%20text%20below%20as%20a%20natural%20lead-in%20to%20additional%20content.%0A%09%09%09%3Ctemplate%20%23footer-inner%3E%20Last%20updated%203%20mins%20ago%20%3C%2Ftemplate%3E%0A%09%09%3C%2Fcard%3E%0A%09%09%3Ccard%20head%20foot%20title%3D%22Card%20Title%22%20class%3D%22border-success%20text-success%20mb-2%22%3E%09%0A%09%09%09This%20is%20a%20wider%20card%20with%20supporting%20text%20below%20as%20a%20natural%20lead-in%20to%20additional%20content.%20This%20card%20has%20even%20longer%20content%20than%20the%20first%20to%20show%20that%20equal%20height%20action.%0A%09%09%09%3Ctemplate%20%23footer-inner%3E%20Last%20updated%203%20mins%20ago%20%3C%2Ftemplate%3E%0A%09%09%3C%2Fcard%3E%0A%09%3C%2Fcard-group%3E%0A%3C%2Fdiv%3E%0A",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[a("template",{slot:"demo"},[a("div",[a("card-group",{attrs:{deck:""}},[a("card",{staticClass:"border-primary text-primary mb-2",attrs:{head:"",foot:"",title:"Card Title"},scopedSlots:t._u([{key:"footer-inner",fn:function(){return[t._v(" Last updated 3 mins ago ")]},proxy:!0}])},[t._v("\n\t\t\tThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.\n\t\t\t")]),t._v(" "),a("card",{staticClass:"border-secondary text-secondary mb-2",attrs:{head:"",foot:"",title:"Card Title"},scopedSlots:t._u([{key:"footer-inner",fn:function(){return[t._v(" Last updated 3 mins ago ")]},proxy:!0}])},[t._v("\t\n\t\t\tThis card has supporting text below as a natural lead-in to additional content.\n\t\t\t")]),t._v(" "),a("card",{staticClass:"border-success text-success mb-2",attrs:{head:"",foot:"",title:"Card Title"},scopedSlots:t._u([{key:"footer-inner",fn:function(){return[t._v(" Last updated 3 mins ago ")]},proxy:!0}])},[t._v("\t\n\t\t\tThis is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.\n\t\t\t")])],1)],1)])],2),t._v(" "),a("h2",{attrs:{id:"grid-cards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grid-cards"}},[t._v("#")]),t._v(" Grid cards")]),t._v(" "),a("p",[t._v("Use the row and column components to control how many grid columns (wrapped around your cards) you show per row. For example, here’s .row-cols-1 laying out the cards on one column, and .row-cols-md-2 splitting four cards to equal width across multiple rows, from the medium breakpoint up.")]),t._v(" "),a("DemoAndCode",{attrs:{htmlStr:"%3Crow%20%3Asizes%3D%22%5B1%2C%7Bmd%3A2%2Clg%3A3%2Cxl%3A4%7D%5D%22%3E%0A%20%20%3Ccolumn%20class%3D%22mb-4%22%3E%0A%20%20%20%20%3Ccard%20title%3D%22Card%20Title%22%3E%09%0A%09%09%09Example%20body%20content%0A%09%09%09%3Ctemplate%20%23header%3E%3Cimg%20src%3D%22https%3A%2F%2Fvia.placeholder.com%2F350%22%20class%3D%22card-img-top%22%20alt%3D%22...%22%3E%3C%2Ftemplate%3E%0A%09%09%3C%2Fcard%3E%0A%20%20%3C%2Fcolumn%3E%0A%20%20%3Ccolumn%20class%3D%22mb-4%22%3E%0A%20%20%20%20%3Ccard%20title%3D%22Card%20Title%22%3E%09%0A%09%09%09Example%20body%20content%0A%09%09%09%3Ctemplate%20%23header%3E%3Cimg%20src%3D%22https%3A%2F%2Fvia.placeholder.com%2F350%22%20class%3D%22card-img-top%22%20alt%3D%22...%22%3E%3C%2Ftemplate%3E%0A%09%09%3C%2Fcard%3E%0A%20%20%3C%2Fcolumn%3E%0A%20%20%3Ccolumn%20class%3D%22mb-4%22%3E%0A%20%20%20%20%3Ccard%20title%3D%22Card%20Title%22%3E%09%0A%09%09%09Example%20body%20content%0A%09%09%09%3Ctemplate%20%23header%3E%3Cimg%20src%3D%22https%3A%2F%2Fvia.placeholder.com%2F350%22%20class%3D%22card-img-top%22%20alt%3D%22...%22%3E%3C%2Ftemplate%3E%0A%09%09%3C%2Fcard%3E%0A%20%20%3C%2Fcolumn%3E%0A%20%20%3Ccolumn%20class%3D%22mb-4%22%3E%0A%20%20%20%20%3Ccard%20title%3D%22Card%20Title%22%3E%09%0A%09%09%09Example%20body%20content%0A%09%09%09%3Ctemplate%20%23header%3E%3Cimg%20src%3D%22https%3A%2F%2Fvia.placeholder.com%2F350%22%20class%3D%22card-img-top%22%20alt%3D%22...%22%3E%3C%2Ftemplate%3E%0A%09%09%3C%2Fcard%3E%0A%20%20%3C%2Fcolumn%3E%0A%3C%2Frow%3E%0A",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[a("template",{slot:"demo"},[a("row",{attrs:{sizes:[1,{md:2,lg:3,xl:4}]}},[a("column",{staticClass:"mb-4"},[a("card",{attrs:{title:"Card Title"},scopedSlots:t._u([{key:"header",fn:function(){return[a("img",{staticClass:"card-img-top",attrs:{src:"https://via.placeholder.com/350",alt:"..."}})]},proxy:!0}])},[t._v("\t\n\t\t\tExample body content\n\t\t\t")])],1),t._v(" "),a("column",{staticClass:"mb-4"},[a("card",{attrs:{title:"Card Title"},scopedSlots:t._u([{key:"header",fn:function(){return[a("img",{staticClass:"card-img-top",attrs:{src:"https://via.placeholder.com/350",alt:"..."}})]},proxy:!0}])},[t._v("\t\n\t\t\tExample body content\n\t\t\t")])],1),t._v(" "),a("column",{staticClass:"mb-4"},[a("card",{attrs:{title:"Card Title"},scopedSlots:t._u([{key:"header",fn:function(){return[a("img",{staticClass:"card-img-top",attrs:{src:"https://via.placeholder.com/350",alt:"..."}})]},proxy:!0}])},[t._v("\t\n\t\t\tExample body content\n\t\t\t")])],1),t._v(" "),a("column",{staticClass:"mb-4"},[a("card",{attrs:{title:"Card Title"},scopedSlots:t._u([{key:"header",fn:function(){return[a("img",{staticClass:"card-img-top",attrs:{src:"https://via.placeholder.com/350",alt:"..."}})]},proxy:!0}])},[t._v("\t\n\t\t\tExample body content\n\t\t\t")])],1)],1)],1)],2),t._v(" "),a("h2",{attrs:{id:"card-columns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#card-columns"}},[t._v("#")]),t._v(" Card columns")]),t._v(" "),a("p",[t._v("Cards can be organized into Masonry-like columns with just CSS by wrapping them in a card-group with the "),a("code",[t._v("columns")]),t._v(" prop set. Cards are built with CSS column properties instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right.")]),t._v(" "),a("p",[t._v("Heads up! Your mileage with card columns may vary. To prevent cards breaking across columns, we must set them to display: inline-block as column-break-inside: avoid isn’t a bulletproof solution yet.")]),t._v(" "),a("DemoAndCode",{attrs:{htmlStr:"%3Cdiv%3E%0A%09%3Ccard-group%20columns%3E%0A%09%09%3Ccard%20v-for%3D%22i%20in%209%22%20head%20foot%20%3Atitle%3D%22'Card%20Title%20'%2Bi%22%20class%3D%22border-primary%20text-primary%20mb-2%22%3E%0A%09%09%09%3Ctemplate%20%23header%3E%3Cimg%20%20v-dummy%3A200%2C400x200%2C400%20%20class%3D%22card-img-top%22%2F%3E%3C%2Ftemplate%3E%0A%09%09%09%3Cp%20v-dummy%3A8%2C20%3E%3C%2Fp%3E%0A%09%09%09%3Ctemplate%20%23footer-inner%3E%20Last%20updated%203%20mins%20ago%20%3C%2Ftemplate%3E%0A%09%09%3C%2Fcard%3E%0A%09%3C%2Fcard-group%3E%0A%3C%2Fdiv%3E%0A",language:"vue",showText:"show code",hideText:"hide code",jsLibsStr:"%5B%5D",cssLibsStr:"%5B%5D",minHeight:void 0,onlineBtnsStr:"%7B%22codepen%22%3Atrue%2C%22jsfiddle%22%3Atrue%2C%22codesandbox%22%3Atrue%7D",codesandboxStr:"%7B%22deps%22%3A%7B%7D%2C%22json%22%3A%22%22%2C%22query%22%3A%22module%3DApp.vue%22%2C%22embed%22%3A%22%22%7D"}},[a("template",{slot:"demo"},[a("div",[a("card-group",{attrs:{columns:""}},t._l(9,(function(e){return a("card",{staticClass:"border-primary text-primary mb-2",attrs:{head:"",foot:"",title:"Card Title "+e},scopedSlots:t._u([{key:"header",fn:function(){return[a("img",{directives:[{name:"dummy",rawName:"v-dummy:200,400x200,400",arg:"200,400x200,400"}],staticClass:"card-img-top"})]},proxy:!0},{key:"footer-inner",fn:function(){return[t._v(" Last updated 3 mins ago ")]},proxy:!0}],null,!0)},[t._v(" "),a("p",{directives:[{name:"dummy",rawName:"v-dummy:8,20",arg:"8,20"}]})])})),1)],1)])],2),t._v(" "),a("p",[t._v("Card columns can also be extended and customized with some additional code. Shown below is an extension of the .card-columns class using the same CSS we use—CSS columns— to generate a set of responsive tiers for changing the number of columns.")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card-columns")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("media-breakpoint-only")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("column-count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("media-breakpoint-only")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("column-count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),a("table",{staticClass:"table-responsive"},[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),a("td",[t._v("The title for the card")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")])])])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);