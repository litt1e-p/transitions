!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).transitions={})}(this,(function(e){"use strict";const t={name:"transitions",props:{type:{type:String,default:function(){return String.prototype.constructor()}}},data:function(){return{conf:{slideLeading:"slide-leading",slideTrailing:"slide-trailing",slideTop:"slide-top",slideBottom:"slide-bottom",collapseVertical:"collapse-vertical",collapseHorizonal:"collapse-horizonal",zoom:"zoom",fade:"fade"}}},computed:{effect:{cache:!1,get:function(){var e=Object.keys(this.conf);return this.type&&e.includes(this.type)?this.conf[this.type]:this.conf[e[Math.floor(Math.random()*e.length)]]}}}};var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"lp-ts__wrapper"},[t("transition",{attrs:{name:this.effect}},[this._t("default")],2)],1)};n._withStripped=!0;const o=function(e,t,n,o,i,s,r,a,d,c){"boolean"!=typeof r&&(d=a,a=r,r=!1);const f="function"==typeof n?n.options:n;let l;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,i&&(f.functional=!0)),o&&(f._scopeId=o),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},f._ssrRegister=l):t&&(l=r?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),l)if(f.functional){const e=f.render;f.render=function(t,n){return l.call(n),e(t,n)}}else{const e=f.beforeCreate;f.beforeCreate=e?[].concat(e,l):[l]}return n}({render:n,staticRenderFns:[]},void 0,t,"data-v-c1a59c38",!1,void 0,!1,void 0,void 0,void 0);var i=[o],s=function(e){i.forEach((function(t){e.component(t.name,t)}))};"undefined"!=typeof window&&window.Vue&&s(window.Vue),e.default=s,e.transitions=o,Object.defineProperty(e,"__esModule",{value:!0})}));
