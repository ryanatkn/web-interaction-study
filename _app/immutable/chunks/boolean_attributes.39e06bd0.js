var G=Object.defineProperty;var R=(t,e,n)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(R(t,typeof e!="symbol"?e+"":e,n),n);function D(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function I(t){return t()}function pt(){return Object.create(null)}function P(t){t.forEach(I)}function J(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e}function wt(t){return Object.keys(t).length===0}function K(t,...e){if(t==null){for(const i of e)i(void 0);return D}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function bt(t,e,n){t.$$.on_destroy.push(K(e,n))}function xt(t,e,n,i){if(t){const s=k(t,e,n,i);return t[0](s)}}function k(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function vt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let c=0;c<r;c+=1)o[c]=e.dirty[c]|s[c];return o}return e.dirty|s}return e.dirty}function Et(t,e,n,i,s,o){if(s){const r=k(e,n,i,o);t.p(r,s)}}function Tt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function At(t,e,n){return t.set(n),e}function Nt(t){return t&&J(t.destroy)?t.destroy:D}const Q=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in Q;let x=!1;function Mt(){x=!0}function St(){x=!1}function U(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:U(1,s,B=>e[n[B]].claim_order,a))-1;i[l]=n[u]+1;const M=u+1;n[M]=l,s=Math.max(M,s)}const o=[],r=[];let c=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);c>=l;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);o.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<o.length&&r[l].claim_order>=o[a].claim_order;)a++;const u=a<o.length?o[a]:null;t.insertBefore(r[l],u)}}function X(t,e){t.appendChild(e)}function Y(t,e){if(x){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Z(t,e,n){t.insertBefore(e,n||null)}function $(t,e,n){x&&!n?Y(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function A(t){return document.createElement(t)}function tt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function Ct(){return N(" ")}function Ht(){return N("")}function S(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function O(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const et=["width","height"];function nt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&et.indexOf(i)===-1?t[i]=e[i]:O(t,i,e[i])}function it(t,e){Object.keys(e).forEach(n=>{st(t,n,e[n])})}function st(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:O(t,e,n)}function Lt(t){return/-/.test(t)?it:nt}function jt(t){return t.dataset.svelteH}function Dt(t){return Array.from(t.childNodes)}function W(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,e,n,i,s=!1){W(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function rt(t,e,n,i){return q(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const c=s.attributes[r];n[c.name]||o.push(c.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Pt(t,e,n){return rt(t,e,n,A)}function ot(t,e){return q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>N(e),!0)}function kt(t){return ot(t," ")}function C(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Ot(t,e){const n=C(t,"HTML_TAG_START",0),i=C(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new H(e);W(t);const s=t.splice(n,i-n+1);w(s[0]),w(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new H(e,o)}function Wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function qt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let y;function lt(){if(y===void 0){y=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{y=!0}}return y}function zt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=A("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=lt();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=S(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=S(i.contentWindow,"resize",e),e()}),X(t,i),()=>{(s||o&&i.contentWindow)&&o(),w(i)}}function Bt(t,e,n){t.classList.toggle(e,!!n)}function ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Gt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class at{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=tt(n.nodeName):this.e=A(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Z(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class H extends at{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)$(this.t,this.n[i],n)}}function Rt(t,e){return new t(e)}let b;function v(t){b=t}function m(){if(!b)throw new Error("Function called outside component initialization");return b}function Ft(t){m().$$.on_mount.push(t)}function It(t){m().$$.after_update.push(t)}function Jt(t){m().$$.on_destroy.push(t)}function Kt(){const t=m();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=ct(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function Qt(t,e){return m().$$.context.set(t,e),e}function Ut(t){return m().$$.context.get(t)}const p=[],L=[];let h=[];const j=[],z=Promise.resolve();let T=!1;function ut(){T||(T=!0,z.then(dt))}function Vt(){return ut(),z}function ft(t){h.push(t)}const E=new Set;let _=0;function dt(){if(_!==0)return;const t=b;do{try{for(;_<p.length;){const e=p[_];_++,v(e),_t(e.$$)}}catch(e){throw p.length=0,_=0,e}for(v(null),p.length=0,_=0;L.length;)L.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];E.has(n)||(E.add(n),n())}h.length=0}while(p.length);for(;j.length;)j.pop()();T=!1,E.clear(),v(t)}function _t(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ft)}}function Xt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}const g=new Set;let d;function Yt(){d={r:0,c:[],p:d}}function Zt(){d.r||P(d.c),d=d.p}function $t(t,e){t&&t.i&&(g.delete(t),t.i(e))}function te(t,e,n,i){if(t&&t.o){if(g.has(t))return;g.add(t),d.c.push(()=>{g.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ht=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...ht];export{wt as $,Y as A,Ot as B,D as C,K as D,xt as E,Et as F,Tt as G,H,vt as I,F as J,Lt as K,Kt as L,Jt as M,S as N,J as O,Q as P,Bt as Q,P as R,bt as S,At as T,ft as U,zt as V,jt as W,Nt as X,yt as Y,pt as Z,dt as _,te as a,Xt as a0,b as a1,v as a2,I as a3,p as a4,ut as a5,Mt as a6,St as a7,Zt as b,kt as c,$t as d,Ht as e,w as f,It as g,A as h,$ as i,Pt as j,Dt as k,O as l,qt as m,gt as n,Ft as o,N as p,ot as q,Wt as r,Ct as s,Vt as t,Yt as u,L as v,Rt as w,Qt as x,Ut as y,Gt as z};