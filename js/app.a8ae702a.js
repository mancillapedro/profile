(function(){var t={9735:function(t,e,n){"use strict";var r=n(144),a=function(){var t=this,e=t._self._c;return e("v-app",[e("v-parallax",{style:{"margin-bottom":t.pixelMarginParallaxPixel},attrs:{dark:"",src:n(8210),height:t.heightParallax}}),e("v-main",[e("v-container",[e("card-component"),e("works-component"),t._e()],1)],1),t._e()],1)},o=[],i=function(){var t=this,e=t._self._c;return e("v-row",{staticClass:"mb-16",attrs:{id:"CardComponent",justify:"center"}},[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e("v-card",{staticClass:"rounded-xl pt-0",attrs:{elevation:"20"}},[e("v-avatar",{staticClass:"mt-n16",attrs:{color:"primary",size:"160"}},[e("img",{attrs:{src:n(415),alt:"Pedro Mancilla"}})]),e("v-card-title",{staticClass:"pb-4 justify-center text-h4",attrs:{tag:"h1"},domProps:{textContent:t._s("Pedro Mancilla")}}),e("v-card-subtitle",{staticClass:"font-weight-light text-subtitle-1",attrs:{tag:"h3"},domProps:{textContent:t._s("Desarrollador web")}}),e("redes-sociales-component"),e("v-card-text",[e("v-row",{attrs:{justify:"center"}},[e("v-col",{staticClass:"pb-8",attrs:{cols:"11",sm:"9",md:"7"}},[e("p",{staticClass:"text-body-1 font-weight-light"},[t._v(" Me he desempeñado en diferentes áreas en la cuales realice funciones reponedor, ayudante cocina- construcción y reparación de obras menores. "),e("br"),t._v(" Me capacite en tecnologías de la Informática, realizando curso emprendimiento digital, con tecnología web con ruby on rails, desarrollo web frontend y Amazon Web Services. "),e("br"),t._v(" Algunas de mis características personales que puedo señalar son; la capacidad de adaptación, motivación por aprender, paciencia, metódico y con un alto sentido del trabajo. ")])])],1)],1)],1)],1)],1)},s=[],l=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"RedesSocialesComponent"}},t._l(t.icons,(function({url:n,svg:r,style:a},o){return e("v-hover",{key:o,scopedSlots:t._u([{key:"default",fn:function({hover:o}){return[e("v-btn",{staticClass:"mx-md-2 icons_rrss",style:a,attrs:{elevation:o?6:0,fab:"",icon:"",tile:"",small:"",href:n,target:"_blank"},domProps:{innerHTML:t._s(r)}})]}}],null,!0)})})),1)},c=[],u=n(3555),d={name:"RedesSocialesComponent",data:()=>({icons:[{svg:u.E5W.svg,style:{fill:`#${u.E5W.hex}`},url:"https://github.com/mancillapedro"},{svg:u.cEq.svg,style:{fill:`#${u.cEq.hex}`},url:"https://www.linkedin.com/in/mancillapedro"},{svg:u.bD2.svg,style:{fill:`#${u.bD2.hex}`},url:"https://www.hackerrank.com/pedropmancillac"},{svg:u.fnU.svg,style:{fill:`#${u.fnU.hex}`},url:"https://www.codewars.com/users/mancillapedro"},{svg:u.ptj.svg,style:{fill:`#${u.ptj.hex}`},url:"https://www.sololearn.com/profile/9299702"}]})},p=d,m=n(1001),f=n(3453),v=n.n(f),h=n(6190),g=n(1338),x=(0,m.Z)(p,l,c,!1,null,null,null),C=x.exports;v()(x,{VBtn:h.Z,VHover:g.Z});var b={components:{RedesSocialesComponent:C},name:"CardComponent"},w=b,y=n(3423),_=n(8107),Z=n(4886),P=n(266),V=n(1713),k=(0,m.Z)(w,i,s,!1,null,null,null),j=k.exports;v()(k,{VAvatar:y.Z,VCard:_.Z,VCardSubtitle:Z.Qq,VCardText:Z.ZB,VCardTitle:Z.EB,VCol:P.Z,VRow:V.Z});var O=function(){var t=this,e=t._self._c;return e("button",{on:{click:function(e){return t.slider.toggle()}}},[t._v("¡Pruébame!")])},S=[],E=n(9018),M={name:"ContactComponent",data:()=>({slider:(0,E.createSlider)("uE4aLeJi",{slider:"uE4aLeJi",width:.666*document.documentElement.scrollWidth,hideHeaders:!0,position:"right",medium:"snippet"})})},T=M,$=(0,m.Z)(T,O,S,!1,null,null,null),D=$.exports,B=function(){var t=this,e=t._self._c;return e("v-footer",{attrs:{id:"FooterComponent",padless:""}},[e("v-card",{staticClass:"indigo lighten-1 white--text text-center",attrs:{flat:"",tile:""}},[e("v-card-title",[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"11",md:"5"}},[e("strong",{staticClass:"subheading",domProps:{textContent:t._s("Get connected with us on social networks!")}})]),e("v-col",{attrs:{cols:"11",md:"5"}})],1)],1),e("v-card-text",{staticClass:"white--text pt-0"},[t._v(" Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ")]),e("v-divider"),e("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("Vuetify")])])],1)],1)},F=[],I={name:"FooterComponent"},R=I,W=n(9223),q=n(8003),A=(0,m.Z)(R,B,F,!1,null,null,null),L=A.exports;v()(A,{VCard:_.Z,VCardText:Z.ZB,VCardTitle:Z.EB,VCol:P.Z,VDivider:W.Z,VFooter:q.Z,VRow:V.Z});var H=function(){var t=this,e=t._self._c;return e("v-card",{staticClass:"py-4 mb-16",attrs:{id:"WorksComponent",rounded:"xl",elevation:"24"}},[e("v-card-title",{staticClass:"justify-center text-h4",attrs:{tag:"h2"},domProps:{textContent:t._s("Proyectos")}}),e("v-row",{staticClass:"py-8",attrs:{justify:"center"}},t._l(t.works,(function({title:r,imgs:a,path:o,deploy:i,repo:s},l){return e("v-col",{key:l,attrs:{cols:"11",sm:"8",md:"5"}},[e("v-card",{staticClass:"px-4 px-sm-8 rounded-lg",attrs:{elevation:"6"}},[e("v-card-title",{staticClass:"px-0 text-h5",domProps:{textContent:t._s(r)}}),e("v-carousel",{attrs:{cycle:"","hide-delimiters":"",height:"216px",interval:"4000","show-arrows-on-hover":""}},t._l(a,(function(t,r){return e("v-carousel-item",{key:r,staticClass:"blue-grey lighten-5 rounded",attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"}},[e("v-img",{staticClass:"ma-2",attrs:{src:n(6875)(`./${o}/${t}`),height:"200px",contain:"",position:"center center"}})],1)})),1),e("v-sheet",{staticClass:"d-flex justify-space-between flex-column flex-sm-row py-4"},[e("v-btn",{attrs:{href:s,color:"secondary",target:"_blank",link:"",text:""},domProps:{textContent:t._s("Ver Repositorio")}}),e("v-btn",{staticClass:"align-self-end",attrs:{href:i,color:"primary",target:"_blank",link:"",text:""},domProps:{textContent:t._s("Ver deploy")}})],1)],1)],1)})),1)],1)},U=[],z={name:"WorksComponent",data:()=>({works:[{title:"Game Opinions",path:"game-opinions-screenshots",imgs:["desktop.png","mobile.png"],description:"1,000 miles of wonder",deploy:"https://mancillapedro.github.io/games-opinion-site/",repo:"https://github.com/mancillapedro/games-opinion-site"}]})},N=z,G=n(7053),J=n(4971),Y=n(5495),Q=n(7423),K=(0,m.Z)(N,H,U,!1,null,null,null),X=K.exports;v()(K,{VBtn:h.Z,VCard:_.Z,VCardTitle:Z.EB,VCarousel:G.Z,VCarouselItem:J.Z,VCol:P.Z,VImg:Y.Z,VRow:V.Z,VSheet:Q.Z});var tt={name:"App",components:{FooterComponent:L,CardComponent:j,WorksComponent:X,ContactComponent:D},data:()=>({heightParallax:0,marginParallax:0,marginInicial:0}),computed:{pixelMarginParallaxPixel(){return`${this.marginParallax}px`}},methods:{handleScroll(){this.marginParallax=-.75*window.scrollY+this.marginInicial}},created(){window.addEventListener("scroll",this.handleScroll),this.heightParallax=.66*document.documentElement.clientHeight,this.marginInicial=-1*(this.heightParallax-150),this.marginParallax=this.marginInicial}},et=tt,nt=n(998),rt=n(2150),at=n(3059),ot=n(9258),it=(0,m.Z)(et,a,o,!1,null,null,null),st=it.exports;v()(it,{VApp:nt.Z,VContainer:rt.Z,VMain:at.Z,VParallax:ot.Z});var lt=n(8864);r.ZP.use(lt.Z);var ct=new lt.Z({});r.ZP.config.productionTip=!1,new r.ZP({vuetify:ct,render:t=>t(st)}).$mount("#app")},6875:function(t,e,n){var r={"./game-opinions-screenshots/desktop.png":4073,"./game-opinions-screenshots/mobile.png":1782};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=6875},4073:function(t,e,n){"use strict";t.exports=n.p+"img/desktop.1e488967.png"},1782:function(t,e,n){"use strict";t.exports=n.p+"img/mobile.ee544c31.png"},415:function(t,e,n){"use strict";t.exports=n.p+"img/img-perfil.658b860a.gif"},8210:function(t,e,n){"use strict";t.exports=n.p+"img/material.c50930a4.jpg"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],o=t[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(s=!1,o<i&&(i=o));if(s){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/profile/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,i=r[0],s=r[1],l=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var u=l(n)}for(e&&e(r);c<i.length;c++)o=i[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunkprofile"]=self["webpackChunkprofile"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9735)}));r=n.O(r)})();
//# sourceMappingURL=app.a8ae702a.js.map