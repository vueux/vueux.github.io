(function(e){function t(t){for(var o,a,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5cb4ca18"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var s=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",s.name="ChunkLoadError",s.type=o,s.request=c,n[1](s)}r[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var p=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1f13":function(e,t,n){"use strict";n("9ee5")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("caad"),n("2532");var o=n("7a23");function r(e,t){var n=Object(o["t"])("router-view");return Object(o["n"])(),Object(o["c"])(n)}n("1f13");const c={};c.render=r;var a=c,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),i=Object(o["z"])("data-v-627cdd3f");Object(o["q"])("data-v-627cdd3f");var s={class:"home"},d=Object(o["d"])(" Hello World! ");Object(o["o"])();var p=i((function(e,t,n,r,c,a){var u=Object(o["t"])("Tools"),i=Object(o["t"])("Vue");return Object(o["n"])(),Object(o["c"])("div",s,[d,Object(o["e"])(u,{style:{height:"40px"}}),Object(o["e"])(i,{style:{height:"calc(100% - 40px)"}})])})),l=Object(o["z"])("data-v-29f6c6d4");Object(o["q"])("data-v-29f6c6d4");var f={id:"tools"};Object(o["o"])();var v=l((function(e,t,n,r,c,a){return Object(o["n"])(),Object(o["c"])("div",f,Object(o["v"])(e.msg),1)})),b={data:function(){return{msg:"Tools coming soon"}}};n("f4f1");b.render=v,b.__scopeId="data-v-29f6c6d4";var m=b,h=Object(o["z"])("data-v-a36cd9ec"),j=h((function(e,t,n,r,c,a){return Object(o["n"])(),Object(o["c"])("iframe",{src:a.render},null,8,["src"])})),y=(n("99af"),{computed:{render:function(){return"data:text/html,"+encodeURIComponent('<div id="app"/>')+encodeURIComponent("<script src='https://unpkg.com/vue@3.1.5/dist/vue.global.js'><\/script>")+encodeURIComponent("\n          <script>\n            ".concat(this.dependencies,"\n            let app = Vue.createApp(").concat(this.script,")\n            // app.use(window.router)\n            app.mount('#app')\n          </")+"script>\n          <style>".concat(this.style,"</style>\n          <style scoped>").concat(this.styleScoped,"</style>\n        "))},dependencies:function(){return"\n        let example = {\n          props: ['what'],\n          data: () => ({\n            msg: 'a dependency'\n          }),\n          template: `\n            <div>\n              I {{what}} {{ msg }}\n              <div class=\"test\">Scoped color dependency?</div>\n            </div>\n          `\n        }\n      "},template:function(){return'\n        <div>\n          {{msg}}\n          <example :what="\'am\'"/>\n          <div class="test">Scoped color main?</div>\n          for sure...\n        </div>\n      '},script:function(){return"{\n        components: { example },\n        data: () => ({\n          msg: 'Hello World!'\n        }),\n        template: `".concat(this.template,"`\n      }")},style:function(){return"\n        #app { color: green; }\n      "},styleScoped:function(){return"\n        .test { color: red; }\n      "}}});n("68d3");y.render=j,y.__scopeId="data-v-a36cd9ec";var O=y,g={components:{Tools:m,Vue:O}};n("c6df");g.render=p,g.__scopeId="data-v-627cdd3f";var w=g,x=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],_=Object(u["a"])({history:Object(u["b"])("/"),routes:x}),P=_,S=n("f7e2"),C=Object(o["b"])(a);C.use(P),location.host.includes("vueux.com")?C.use(S["a"],{property:[{id:"G-5KE4ZC1K2K"}]}):location.host.includes("vueux.io")?C.use(S["a"],{property:[{id:"G-JBBCL2QDC9"}]}):location.host.includes("vueux.no")&&C.use(S["a"],{property:[{id:"G-5VDZMK2V2Y"}]}),C.mount("#app")},"68d3":function(e,t,n){"use strict";n("c867")},8279:function(e,t,n){},"9ee5":function(e,t,n){},c6df:function(e,t,n){"use strict";n("cb0c")},c867:function(e,t,n){},cb0c:function(e,t,n){},f4f1:function(e,t,n){"use strict";n("8279")}});
//# sourceMappingURL=app.eb8ec818.js.map