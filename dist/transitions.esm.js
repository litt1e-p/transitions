import { useCssVars as e, unref as t, reactive as a, computed as o, openBlock as n, createElementBlock as s, createVNode as i, Transition as r, withCtx as l, renderSlot as c } from "vue";
const d = { class: "lp-ts__wrapper" }, f = { name: "transitions" };
var u = ((e2, t2) => {
  for (const [a2, o2] of t2)
    e2[a2] = o2;
  return e2;
})(Object.assign(f, { props: { type: { type: String, default: String.prototype.constructor() }, duration: { type: [Number, String], default: 0.25 } }, setup: function(f2) {
  const u2 = f2;
  e((e2) => ({ "0d79edd1": t(g) }));
  const p2 = a({ conf: { slideLeading: { className: "slide-leading", duration: 0.5 }, slideTrailing: { className: "slide-trailing", duration: 0.5 }, slideTop: { className: "slide-top", duration: 0.5 }, slideBottom: { className: "slide-bottom", duration: 0.5 }, collapseVertical: { className: "collapse-vertical", duration: 0.5 }, collapseHorizonal: { className: "collapse-horizonal", duration: 0.5 }, zoom: { className: "zoom", duration: 0.5 }, fade: { className: "fade", duration: 0.25 } }, effect: void 0 }), m2 = o({ get: () => {
    var _a;
    return (_a = p2 == null ? void 0 : p2.effect) == null ? void 0 : _a.className;
  } }), g = o({ get: () => (parseFloat(u2.duration) || p2.effect.duration) + "s" }), N = () => {
    p2.effect = y();
  }, y = () => {
    const e2 = Object.keys(p2.conf);
    return u2.type && e2.includes(u2.type) ? p2.conf[u2.type] : p2.conf[e2[Math.floor(Math.random() * e2.length)]];
  };
  return (e2, a2) => (n(), s("div", d, [i(r, { name: t(m2), onAfterEnter: N }, { default: l(() => [c(e2.$slots, "default", { effect: t(p2).effect }, void 0, true)]), _: 3 }, 8, ["name"])]));
} }), [["__scopeId", "data-v-c4fb76aa"]]);
const p = [u], m = function(e2) {
  p.forEach((t2) => {
    e2.component(t2.name, t2);
  });
};
typeof window != "undefined" && window.Vue && m(window.Vue);
export { m as default, u as transitions };
