import{r as ke,b as Ce,n as Le,f as be,q as I,e as Te}from"../chunks/boolean_attributes.05cecfb1.js";import{S as Ie,i as Me,b as c,s as P,t as Q,f as h,g as q,d as M,c as z,x,k as W,h as v,a as Ee,u as n,y as m,z as $,l as de}from"../chunks/index.c45f7f24.js";import{b as Ae}from"../chunks/paths.5e468e2b.js";function ge(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Be(e,o){e.d(1),o.delete(e.key)}function Ue(e,o,t,l,d,g,L,s,A,i,b,G){let E=e.length,a=g.length,_=E;const T={};for(;_--;)T[e[_].key]=_;const p=[],B=new Map,U=new Map,D=[];for(_=a;_--;){const r=G(d,g,_),w=t(r);let y=L.get(w);y?l&&D.push(()=>y.p(r,o)):(y=i(w,r),y.c()),B.set(w,p[_]=y),w in T&&U.set(w,Math.abs(_-T[w]))}const f=new Set,V=new Set;function O(r){Ce(r,1),r.m(s,b),L.set(r.key,r),b=r.first,a--}for(;E&&a;){const r=p[a-1],w=e[E-1],y=r.key,j=w.key;r===w?(b=r.first,E--,a--):B.has(j)?!L.has(y)||f.has(y)?O(r):V.has(j)?E--:U.get(y)>U.get(j)?(V.add(y),O(r)):(f.add(j),E--):(A(w,L),E--)}for(;E--;){const r=e[E];B.has(r.key)||A(r,L)}for(;a;)O(p[a-1]);return ke(D),p}function we(e,o,t){const l=e.slice();l[24]=o[t],l[28]=t;const d=l[24].time-l[7];l[25]=d;const g=l[28]===l[1]-1?l[25]:l[25]-(l[0][l[28]+1].time-l[7]);return l[26]=g,l}function ye(e,o){let t,l,d=o[24].name+"",g,L,s,A=Math.round(o[26])+"",i,b,G="ms",E,a,_=Math.round(o[25])+"",T,p,B="ms",U;return{key:e,first:null,c(){t=c("li"),l=c("div"),g=Q(d),L=P(),s=c("div"),i=Q(A),b=c("small"),b.textContent=G,E=P(),a=c("div"),T=Q(_),p=c("small"),p.textContent=B,U=P(),this.h()},l(D){t=h(D,"LI",{class:!0});var f=q(t);l=h(f,"DIV",{class:!0});var V=q(l);g=W(V,d),V.forEach(M),L=z(f),s=h(f,"DIV",{class:!0});var O=q(s);i=W(O,A),b=h(O,"SMALL",{class:!0,["data-svelte-h"]:!0}),x(b)!=="svelte-vi6eq0"&&(b.textContent=G),O.forEach(M),E=z(f),a=h(f,"DIV",{class:!0});var r=q(a);T=W(r,_),p=h(r,"SMALL",{class:!0,["data-svelte-h"]:!0}),x(p)!=="svelte-vi6eq0"&&(p.textContent=B),r.forEach(M),U=z(f),f.forEach(M),this.h()},h(){v(l,"class","name svelte-1n8pb7w"),v(b,"class","svelte-1n8pb7w"),v(s,"class","dt svelte-1n8pb7w"),v(p,"class","svelte-1n8pb7w"),v(a,"class","time svelte-1n8pb7w"),v(t,"class","svelte-1n8pb7w"),$(t,"mouse",o[24].type==="mouse"),$(t,"touch",o[24].type==="touch"),$(t,"pointer",o[24].type==="pointer"),this.first=t},m(D,f){Ee(D,t,f),n(t,l),n(l,g),n(t,L),n(t,s),n(s,i),n(s,b),n(t,E),n(t,a),n(a,T),n(a,p),n(t,U)},p(D,f){o=D,f&1&&d!==(d=o[24].name+"")&&de(g,d),f&131&&A!==(A=Math.round(o[26])+"")&&de(i,A),f&129&&_!==(_=Math.round(o[25])+"")&&de(T,_),f&1&&$(t,"mouse",o[24].type==="mouse"),f&1&&$(t,"touch",o[24].type==="touch"),f&1&&$(t,"pointer",o[24].type==="pointer")},d(D){D&&M(t)}}}function De(e){let o,t,l,d=[],g=new Map,L,s,A,i,b,G="clear log",E,a,_="copy log",T,p,B,U,D,f,V,O,r,w,y,j,u,S,F,H,X,Y,pe="reset",ne,J,K,ce="source",se,Z,le,oe,he,ee=ge(e[0]);const ve=C=>C[24];for(let C=0;C<ee.length;C+=1){let k=we(e,ee,C),R=ve(k);g.set(R,d[C]=ye(R,k))}return{c(){o=c("div"),t=c("div"),l=c("ul");for(let C=0;C<d.length;C+=1)d[C].c();L=P(),s=c("div"),A=P(),i=c("div"),b=c("button"),b.textContent=G,E=P(),a=c("button"),a.textContent=_,T=P(),p=c("label"),B=c("input"),U=Q("move events"),D=P(),f=c("label"),V=c("input"),O=Q("mouse events"),r=P(),w=c("label"),y=c("input"),j=Q("touch events"),u=P(),S=c("label"),F=c("input"),H=Q("pointer events"),X=P(),Y=c("button"),Y.textContent=pe,ne=P(),J=c("footer"),K=c("a"),K.textContent=ce,se=P(),Z=c("a"),le=Q("home"),this.h()},l(C){o=h(C,"DIV",{class:!0});var k=q(o);t=h(k,"DIV",{class:!0});var R=q(t);l=h(R,"UL",{class:!0});var me=q(l);for(let re=0;re<d.length;re+=1)d[re].l(me);me.forEach(M),L=z(R),s=h(R,"DIV",{class:!0,role:!0}),q(s).forEach(M),R.forEach(M),A=z(k),i=h(k,"DIV",{class:!0});var N=q(i);b=h(N,"BUTTON",{["data-svelte-h"]:!0}),x(b)!=="svelte-y6ldve"&&(b.textContent=G),E=z(N),a=h(N,"BUTTON",{["data-svelte-h"]:!0}),x(a)!=="svelte-172l8vu"&&(a.textContent=_),T=z(N),p=h(N,"LABEL",{class:!0});var ie=q(p);B=h(ie,"INPUT",{type:!0}),U=W(ie,"move events"),ie.forEach(M),D=z(N),f=h(N,"LABEL",{class:!0});var ae=q(f);V=h(ae,"INPUT",{type:!0}),O=W(ae,"mouse events"),ae.forEach(M),r=z(N),w=h(N,"LABEL",{class:!0});var ue=q(w);y=h(ue,"INPUT",{type:!0}),j=W(ue,"touch events"),ue.forEach(M),u=z(N),S=h(N,"LABEL",{class:!0});var fe=q(S);F=h(fe,"INPUT",{type:!0}),H=W(fe,"pointer events"),fe.forEach(M),X=z(N),Y=h(N,"BUTTON",{["data-svelte-h"]:!0}),x(Y)!=="svelte-gaf3q0"&&(Y.textContent=pe),ne=z(N),J=h(N,"FOOTER",{class:!0});var te=q(J);K=h(te,"A",{href:!0,class:!0,["data-svelte-h"]:!0}),x(K)!=="svelte-znpt0d"&&(K.textContent=ce),se=z(te),Z=h(te,"A",{href:!0,class:!0});var _e=q(Z);le=W(_e,"home"),_e.forEach(M),te.forEach(M),N.forEach(M),k.forEach(M),this.h()},h(){v(l,"class","log svelte-1n8pb7w"),v(s,"class","pointing_events svelte-1n8pb7w"),v(s,"role","none"),v(t,"class","content svelte-1n8pb7w"),v(B,"type","checkbox"),v(p,"class","svelte-1n8pb7w"),v(V,"type","checkbox"),v(f,"class","svelte-1n8pb7w"),v(y,"type","checkbox"),v(w,"class","svelte-1n8pb7w"),v(F,"type","checkbox"),v(S,"class","svelte-1n8pb7w"),v(K,"href","https://github.com/ryanatkn/web-interaction-study/blob/main/src/routes/pointing-events/%2Bpage.svelte"),v(K,"class","svelte-1n8pb7w"),v(Z,"href",Ae+"/"),v(Z,"class","svelte-1n8pb7w"),v(J,"class","panel svelte-1n8pb7w"),v(i,"class","scrollable svelte-1n8pb7w"),v(o,"class","wrapper svelte-1n8pb7w")},m(C,k){Ee(C,o,k),n(o,t),n(t,l);for(let R=0;R<d.length;R+=1)d[R]&&d[R].m(l,null);e[14](l),n(t,L),n(t,s),n(o,A),n(o,i),n(i,b),n(i,E),n(i,a),n(i,T),n(i,p),n(p,B),B.checked=e[2],n(p,U),n(i,D),n(i,f),n(f,V),V.checked=e[3],n(f,O),n(i,r),n(i,w),n(w,y),y.checked=e[4],n(w,j),n(i,u),n(i,S),n(S,F),F.checked=e[5],n(S,H),n(i,X),n(i,Y),n(i,ne),n(i,J),n(J,K),n(J,se),n(J,Z),n(Z,le),oe||(he=[m(s,"click",function(){I(e[3]?e[8]("click"):void 0)&&(e[3]?e[8]("click"):void 0).apply(this,arguments)},{passive:!1}),m(s,"dblclick",function(){I(e[3]?e[8]("dblclick"):void 0)&&(e[3]?e[8]("dblclick"):void 0).apply(this,arguments)},{passive:!1}),m(s,"mousedown",function(){I(e[3]?e[8]("mousedown"):void 0)&&(e[3]?e[8]("mousedown"):void 0).apply(this,arguments)},{passive:!1}),m(s,"mouseup",function(){I(e[3]?e[8]("mouseup"):void 0)&&(e[3]?e[8]("mouseup"):void 0).apply(this,arguments)},{passive:!1}),m(s,"mouseenter",function(){I(e[3]?e[8]("mouseenter"):void 0)&&(e[3]?e[8]("mouseenter"):void 0).apply(this,arguments)},{passive:!1}),m(s,"mouseleave",function(){I(e[3]?e[8]("mouseleave"):void 0)&&(e[3]?e[8]("mouseleave"):void 0).apply(this,arguments)},{passive:!1}),m(s,"mousemove",function(){I(e[3]&&e[2]?e[8]("mousemove"):void 0)&&(e[3]&&e[2]?e[8]("mousemove"):void 0).apply(this,arguments)},{passive:!1}),m(s,"pointerdown",function(){I(e[5]?e[9]("pointerdown"):void 0)&&(e[5]?e[9]("pointerdown"):void 0).apply(this,arguments)},{passive:!1}),m(s,"pointerup",function(){I(e[5]?e[9]("pointerup"):void 0)&&(e[5]?e[9]("pointerup"):void 0).apply(this,arguments)},{passive:!1}),m(s,"pointercancel",function(){I(e[5]?e[9]("pointercancel"):void 0)&&(e[5]?e[9]("pointercancel"):void 0).apply(this,arguments)},{passive:!1}),m(s,"pointerenter",function(){I(e[5]?e[9]("pointerenter"):void 0)&&(e[5]?e[9]("pointerenter"):void 0).apply(this,arguments)},{passive:!1}),m(s,"pointerleave",function(){I(e[5]?e[9]("pointerleave"):void 0)&&(e[5]?e[9]("pointerleave"):void 0).apply(this,arguments)},{passive:!1}),m(s,"pointermove",function(){I(e[5]&&e[2]?e[9]("pointermove"):void 0)&&(e[5]&&e[2]?e[9]("pointermove"):void 0).apply(this,arguments)},{passive:!1}),m(s,"touchstart",function(){I(e[4]?e[10]("touchstart"):void 0)&&(e[4]?e[10]("touchstart"):void 0).apply(this,arguments)},{passive:!1}),m(s,"touchend",function(){I(e[4]?e[10]("touchend"):void 0)&&(e[4]?e[10]("touchend"):void 0).apply(this,arguments)},{passive:!1}),m(s,"touchcancel",function(){I(e[4]?e[10]("touchcancel"):void 0)&&(e[4]?e[10]("touchcancel"):void 0).apply(this,arguments)},{passive:!1}),m(s,"touchmove",function(){I(e[4]&&e[2]?e[10]("touchmove"):void 0)&&(e[4]&&e[2]?e[10]("touchmove"):void 0).apply(this,arguments)},{passive:!1}),m(b,"click",e[12]),m(a,"click",e[11]),m(B,"change",e[15]),m(V,"change",e[16]),m(y,"change",e[17]),m(F,"change",e[18]),m(Y,"click",e[13])],oe=!0)},p(C,[k]){e=C,k&131&&(ee=ge(e[0]),d=Ue(d,k,ve,1,e,ee,g,l,Be,ye,null,we)),k&4&&(B.checked=e[2]),k&8&&(V.checked=e[3]),k&16&&(y.checked=e[4]),k&32&&(F.checked=e[5])},i:be,o:be,d(C){C&&M(o);for(let k=0;k<d.length;k+=1)d[k].d();e[14](null),oe=!1,ke(he)}}}function Ne(e,o,t){let l,d,g=[];const L=(u,S)=>{t(0,g=g.slice()),g.unshift({type:u,name:S,time:performance.now()})};let s=!1,A=!1,i=!1;const b=u=>S=>{if(a){if(u==="mousemove"&&!s)return;u==="mousedown"&&(s=!0),u==="mouseup"&&(s=!1)}L("mouse",u)},G=u=>S=>{if(a){if(u==="pointermove"&&!i)return;u==="pointerdown"&&(i=!0),(u==="pointerup"||u==="pointercancel")&&(i=!1)}L("pointer",u)},E=u=>S=>{if(a){if(u==="touchmove"&&!A)return;u==="touchstart"&&(A=!0),(u==="touchend"||u==="touchcancel")&&(A=!1)}L("touch",u)};let a=!1,_=!0,T=!0,p=!0;const B=u=>{const S=u.split(/\s/gu);let F="";for(let H=0;H<S.length;H++){const X=S[H];switch(H%3){case 0:{F+=X;break}case 1:{F+=" "+X;break}case 2:{F+=" "+X+`
`;break}}}return F};let U;const D=async()=>{try{await navigator.clipboard.writeText(B(U.innerText))}catch{alert("failed to copy")}},f=()=>{t(0,g=[])},V=()=>{f(),t(2,a=!1),t(3,_=!0),t(4,T=!0),t(5,p=!0)};function O(u){Te[u?"unshift":"push"](()=>{U=u,t(6,U)})}function r(){a=this.checked,t(2,a)}function w(){_=this.checked,t(3,_)}function y(){T=this.checked,t(4,T)}function j(){p=this.checked,t(5,p)}return e.$$.update=()=>{var u;e.$$.dirty&1&&t(1,l=g.length),e.$$.dirty&3&&t(7,d=(u=g[l-1])==null?void 0:u.time)},[g,l,a,_,T,p,U,d,b,G,E,D,f,V,O,r,w,y,j]}class Oe extends Ie{constructor(o){super(),Me(this,o,Ne,De,Le,{})}}export{Oe as component};