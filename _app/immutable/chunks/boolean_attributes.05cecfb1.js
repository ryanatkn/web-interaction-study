function j(){}function E(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function W(){return Object.create(null)}function b(t){t.forEach(q)}function A(t){return typeof t=="function"}function B(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function D(t,n){return t!=t?n==n:t!==n}function F(t){return Object.keys(t).length===0}function M(t,...n){if(t==null){for(const o of n)o(void 0);return j}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function P(t,n,e){t.$$.on_destroy.push(M(n,e))}function U(t,n,e,o){if(t){const r=x(t,n,e,o);return t[0](r)}}function x(t,n,e,o){return t[1]&&o?E(e.ctx.slice(),t[1](o(n))):e.ctx}function G(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],p=Math.max(n.dirty.length,r.length);for(let a=0;a<p;a+=1)l[a]=n.dirty[a]|r[a];return l}return n.dirty|r}return n.dirty}function H(t,n,e,o,r,l){if(r){const p=x(n,e,o,l);t.p(p,r)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}const k=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in k;let d;function _(t){d=t}function y(){if(!d)throw new Error("Function called outside component initialization");return d}function J(t){y().$$.on_mount.push(t)}function K(t){y().$$.after_update.push(t)}function L(t,n){return y().$$.context.set(t,n),n}const c=[],m=[];let i=[];const w=[],v=Promise.resolve();let g=!1;function S(){g||(g=!0,v.then(z))}function N(){return S(),v}function O(t){i.push(t)}const h=new Set;let u=0;function z(){if(u!==0)return;const t=d;do{try{for(;u<c.length;){const n=c[u];u++,_(n),C(n.$$)}}catch(n){throw c.length=0,u=0,n}for(_(null),c.length=0,u=0;m.length;)m.pop()();for(let n=0;n<i.length;n+=1){const e=i[n];h.has(e)||(h.add(e),e())}i.length=0}while(c.length);for(;w.length;)w.pop()();g=!1,h.clear(),_(t)}function C(t){if(t.fragment!==null){t.update(),b(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function Q(t){const n=[],e=[];i.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),i=n}const f=new Set;let s;function R(){s={r:0,c:[],p:s}}function V(){s.r||b(s.c),s=s.p}function X(t,n){t&&t.i&&(f.delete(t),t.i(n))}function Y(t,n,e,o){if(t&&t.o){if(f.has(t))return;f.add(t),s.c.push(()=>{f.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}else o&&o()}const T=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...T];export{d as A,_ as B,q as C,c as D,S as E,Y as a,X as b,V as c,K as d,m as e,j as f,R as g,M as h,U as i,I as j,G as k,E as l,P as m,D as n,J as o,B as p,A as q,b as r,L as s,N as t,H as u,W as v,z as w,F as x,O as y,Q as z};
