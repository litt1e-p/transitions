function normalizeComponent(e,t,n,o,i,_,r,s,c,a){"boolean"!=typeof r&&(c=s,s=r,r=!1);const d="function"==typeof n?n.options:n;e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,i&&(d.functional=!0)),o&&(d._scopeId=o);let l;if(_?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(_)},d._ssrRegister=l):t&&(l=r?function(e){t.call(this,a(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),l)if(d.functional){const e=d.render;d.render=function(t,n){return l.call(n),e(t,n)}}else{const e=d.beforeCreate;d.beforeCreate=e?[].concat(e,l):[l]}return n}var script={name:"transitions",props:{type:{type:String,default:function(){return String.prototype.constructor()}}},data(){return{conf:{slideLeading:"slide-leading",slideTrailing:"slide-trailing",slideTop:"slide-top",slideBottom:"slide-bottom",collapseVertical:"collapse-vertical",collapseHorizonal:"collapse-horizonal",zoom:"zoom",fade:"fade"}}},computed:{effect:{cache:!1,get(){var e=Object.keys(this.conf);return this.type&&e.includes(this.type)?this.conf[this.type]:this.conf[e[Math.floor(Math.random()*e.length)]]}}}};const __vue_script__=script;var __vue_render__=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:e.effect}},[e._t("default")],2)],1)},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;const __vue_inject_styles__=void 0,__vue_scope_id__="data-v-63587a42",__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,__vue_component__=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},void 0,__vue_script__,__vue_scope_id__,!1,void 0,!1,void 0,void 0,void 0);var components=[__vue_component__],install=function(e){components.forEach(function(t){e.component(t.name,t)})};"undefined"!=typeof window&&window.Vue&&install(window.Vue);export default install;export{__vue_component__ as transitions};
