import{S as ce,i as ue,s as _e,e as v,t as L,k as T,c as b,a as k,g as I,d as a,n as N,b as _,f as g,D as c,r as te,u as O,w as le,x,E as Z,F as Te,G as Ne,j as q,m as K,H as re,o as U,I as ae,v as W,J as xe,K as Re,L as oe,l as H,M as fe,h as V,N as Be,O as ze,P as Me,Q as Se,R as Ae,T as je,U as Oe,V as De,A as Ge}from"../chunks/vendor-3b62d163.js";import{u as qe,t as Ke,a as Ue,b as We}from"../chunks/navigation-cc5c3534.js";import{H as Fe,C as He,U as Ve}from"../chunks/Header.svelte_svelte_type_style_lang-4f2653c5.js";import{p as Qe}from"../chunks/stores-06c760a7.js";import $e from"./MediaQuery.svelte-e9649cdd.js";import{t as Je,a as Ze,b as Xe}from"../chunks/stores-5c8548b5.js";/* empty css                                                      */import"../chunks/singletons-12a22614.js";import"../chunks/Icon-fdd3e797.js";function Ye($){let t,l,e;return l=new Fe({}),{c(){t=v("div"),q(l.$$.fragment),this.h()},l(s){t=b(s,"DIV",{style:!0});var i=k(t);K(l.$$.fragment,i),i.forEach(a),this.h()},h(){re(t,"margin-right","1rem")},m(s,i){g(s,t,i),U(l,t,null),e=!0},p:ae,i(s){e||(x(l.$$.fragment,s),e=!0)},o(s){O(l.$$.fragment,s),e=!1},d(s){s&&a(t),W(l)}}}function et($){let t,l,e,s,i,p,u,n;const o=[lt,tt],d=[];function A(m,y){var E;return(E=m[1])!=null&&E.loggedIn?0:1}return p=A($),u=d[p]=o[p]($),{c(){t=v("li"),l=v("a"),e=L("Whitelists"),s=T(),i=v("li"),u.c(),this.h()},l(m){t=b(m,"LI",{class:!0});var y=k(t);l=b(y,"A",{href:!0});var E=k(l);e=I(E,"Whitelists"),E.forEach(a),y.forEach(a),s=N(m),i=b(m,"LI",{class:!0});var f=k(i);u.l(f),f.forEach(a),this.h()},h(){_(l,"href","/"),_(t,"class","svelte-9oim8o"),_(i,"class","svelte-9oim8o")},m(m,y){g(m,t,y),c(t,l),c(l,e),g(m,s,y),g(m,i,y),d[p].m(i,null),n=!0},p(m,y){let E=p;p=A(m),p===E?d[p].p(m,y):(te(),O(d[E],1,1,()=>{d[E]=null}),le(),u=d[p],u?u.p(m,y):(u=d[p]=o[p](m),u.c()),x(u,1),u.m(i,null))},i(m){n||(x(u),n=!0)},o(m){O(u),n=!1},d(m){m&&a(t),m&&a(s),m&&a(i),d[p].d()}}}function tt($){let t,l;return t=new He({}),{c(){q(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,s){U(t,e,s),l=!0},p:ae,i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){O(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function lt($){var p;let t,l,e,s,i;return l=new Ve({props:{address:((p=$[1])==null?void 0:p.addr)||"0x0",abbreviated:!0}}),{c(){t=v("button"),q(l.$$.fragment),this.h()},l(u){t=b(u,"BUTTON",{class:!0});var n=k(t);K(l.$$.fragment,n),n.forEach(a),this.h()},h(){_(t,"class","outline svelte-9oim8o")},m(u,n){g(u,t,n),U(l,t,null),e=!0,s||(i=xe(t,"click",$[2]),s=!0)},p(u,n){var d;const o={};n&2&&(o.address=((d=u[1])==null?void 0:d.addr)||"0x0"),l.$set(o)},i(u){e||(x(l.$$.fragment,u),e=!0)},o(u){O(l.$$.fragment,u),e=!1},d(u){u&&a(t),W(l),s=!1,i()}}}function st($){let t,l,e,s,i,p,u,n,o,d;const A=[et,Ye],m=[];function y(E,f){return E[0]!=="mobile"?0:1}return n=y($),o=m[n]=A[n]($),{c(){t=v("nav"),l=v("ul"),e=v("li"),s=v("h3"),i=L("LOGO"),p=T(),u=v("ul"),o.c(),this.h()},l(E){t=b(E,"NAV",{class:!0});var f=k(t);l=b(f,"UL",{});var w=k(l);e=b(w,"LI",{class:!0});var R=k(e);s=b(R,"H3",{});var r=k(s);i=I(r,"LOGO"),r.forEach(a),R.forEach(a),w.forEach(a),p=N(f),u=b(f,"UL",{});var h=k(u);o.l(h),h.forEach(a),f.forEach(a),this.h()},h(){_(e,"class","svelte-9oim8o"),_(t,"class","container")},m(E,f){g(E,t,f),c(t,l),c(l,e),c(e,s),c(s,i),c(t,p),c(t,u),m[n].m(u,null),d=!0},p(E,[f]){let w=n;n=y(E),n===w?m[n].p(E,f):(te(),O(m[w],1,1,()=>{m[w]=null}),le(),o=m[n],o?o.p(E,f):(o=m[n]=A[n](E),o.c()),x(o,1),o.m(u,null))},i(E){d||(x(o),d=!0)},o(E){O(o),d=!1},d(E){E&&a(t),m[n].d()}}}function rt($,t,l){let e;Z($,qe,u=>l(1,e=u));let{screenSize:s}=t;function i(){e&&e.loggedIn?Te():Ne()}return document.querySelector("html").setAttribute("data-theme","dark"),$.$$set=u=>{"screenSize"in u&&l(0,s=u.screenSize)},[s,e,i]}class ke extends ce{constructor(t){super();ue(this,t,rt,st,_e,{screenSize:0})}}function ye($){let t,l,e,s,i;function p(o,d){return o[1]<0?ut:o[1]<2?ct:o[1]===2?ft:o[1]===3?ot:o[1]===4?it:o[1]===5?nt:at}let u=p($),n=u($);return{c(){t=v("article"),l=L(`Transaction status:
    `),n.c(),this.h()},l(o){t=b(o,"ARTICLE",{class:!0});var d=k(t);l=I(d,`Transaction status:
    `),n.l(d),d.forEach(a),this.h()},h(){_(t,"class",e="accent-border "+($[1]==99?"error":null)+" svelte-11j8u0c")},m(o,d){g(o,t,d),c(t,l),n.m(t,null),i=!0},p(o,d){u===(u=p(o))&&n?n.p(o,d):(n.d(1),n=u(o),n&&(n.c(),n.m(t,null))),(!i||d&2&&e!==(e="accent-border "+(o[1]==99?"error":null)+" svelte-11j8u0c"))&&_(t,"class",e)},i(o){i||(Re(()=>{s||(s=oe(t,fe,{},!0)),s.run(1)}),i=!0)},o(o){s||(s=oe(t,fe,{},!1)),s.run(0),i=!1},d(o){o&&a(t),n.d(),o&&s&&s.end()}}}function at($){let t,l;return{c(){t=v("span"),l=L("Unexpected parameters were passed into the transaction."),this.h()},l(e){t=b(e,"SPAN",{"data-theme":!0});var s=k(t);l=I(s,"Unexpected parameters were passed into the transaction."),s.forEach(a),this.h()},h(){_(t,"data-theme","invalid")},m(e,s){g(e,t,s),c(t,l)},p:ae,d(e){e&&a(t)}}}function nt($){var E;let t,l,e=((E=$[2])==null?void 0:E.slice(0,8))+"",s,i,p,u,n,o,d,A,m,y;return{c(){t=v("span"),l=v("a"),s=L(e),i=L("..."),u=T(),n=v("span"),o=v("kbd"),d=L("Expired"),A=v("br"),m=v("small"),y=L("The transaction was submitted past its expiration block height."),this.h()},l(f){t=b(f,"SPAN",{class:!0});var w=k(t);l=b(w,"A",{href:!0,target:!0});var R=k(l);s=I(R,e),i=I(R,"..."),R.forEach(a),w.forEach(a),u=N(f),n=b(f,"SPAN",{});var r=k(n);o=b(r,"KBD",{});var h=k(o);d=I(h,"Expired"),h.forEach(a),A=b(r,"BR",{}),m=b(r,"SMALL",{class:!0});var P=k(m);y=I(P,"The transaction was submitted past its expiration block height."),P.forEach(a),r.forEach(a),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${$[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_(m,"class","svelte-11j8u0c")},m(f,w){g(f,t,w),c(t,l),c(l,s),c(l,i),g(f,u,w),g(f,n,w),c(n,o),c(o,d),c(n,A),c(n,m),c(m,y)},p(f,w){var R;w&4&&e!==(e=((R=f[2])==null?void 0:R.slice(0,8))+"")&&V(s,e),w&4&&p!==(p=`https://testnet.flowscan.org/transaction/${f[2]}`)&&_(l,"href",p)},d(f){f&&a(t),f&&a(u),f&&a(n)}}}function it($){var R;let t,l,e=((R=$[2])==null?void 0:R.slice(0,8))+"",s,i,p,u,n,o,d,A,m,y,E,f,w;return{c(){t=v("span"),l=v("a"),s=L(e),i=L("..."),u=T(),n=v("span"),o=v("kbd"),d=L("\u2713 Sealed"),A=v("br"),m=v("small"),y=L(`The verification nodes have verified the transaction, and the seal is
          included in the latest block.`),E=T(),f=v("progress"),w=L("Sealed!"),this.h()},l(r){t=b(r,"SPAN",{class:!0});var h=k(t);l=b(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),i=I(P,"..."),P.forEach(a),h.forEach(a),u=N(r),n=b(r,"SPAN",{});var C=k(n);o=b(C,"KBD",{});var B=k(o);d=I(B,"\u2713 Sealed"),B.forEach(a),A=b(C,"BR",{}),m=b(C,"SMALL",{class:!0});var z=k(m);y=I(z,`The verification nodes have verified the transaction, and the seal is
          included in the latest block.`),z.forEach(a),C.forEach(a),E=N(r),f=b(r,"PROGRESS",{min:!0,max:!0,class:!0});var M=k(f);w=I(M,"Sealed!"),M.forEach(a),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${$[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_(m,"class","svelte-11j8u0c"),_(f,"min","0"),_(f,"max","100"),f.value="100",_(f,"class","svelte-11j8u0c")},m(r,h){g(r,t,h),c(t,l),c(l,s),c(l,i),g(r,u,h),g(r,n,h),c(n,o),c(o,d),c(n,A),c(n,m),c(m,y),g(r,E,h),g(r,f,h),c(f,w)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&a(t),r&&a(u),r&&a(n),r&&a(E),r&&a(f)}}}function ot($){var R;let t,l,e=((R=$[2])==null?void 0:R.slice(0,8))+"",s,i,p,u,n,o,d,A,m,y,E,f,w;return{c(){t=v("span"),l=v("a"),s=L(e),i=L("..."),u=T(),n=v("span"),o=v("kbd"),d=L("Executed"),A=v("br"),m=v("small"),y=L("The execution nodes have produced a result for the transaction."),E=T(),f=v("progress"),w=L("Sealing..."),this.h()},l(r){t=b(r,"SPAN",{class:!0});var h=k(t);l=b(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),i=I(P,"..."),P.forEach(a),h.forEach(a),u=N(r),n=b(r,"SPAN",{});var C=k(n);o=b(C,"KBD",{});var B=k(o);d=I(B,"Executed"),B.forEach(a),A=b(C,"BR",{}),m=b(C,"SMALL",{class:!0});var z=k(m);y=I(z,"The execution nodes have produced a result for the transaction."),z.forEach(a),C.forEach(a),E=N(r),f=b(r,"PROGRESS",{min:!0,max:!0,class:!0});var M=k(f);w=I(M,"Sealing..."),M.forEach(a),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${$[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_(m,"class","svelte-11j8u0c"),_(f,"min","0"),_(f,"max","100"),f.value="80",_(f,"class","svelte-11j8u0c")},m(r,h){g(r,t,h),c(t,l),c(l,s),c(l,i),g(r,u,h),g(r,n,h),c(n,o),c(o,d),c(n,A),c(n,m),c(m,y),g(r,E,h),g(r,f,h),c(f,w)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&a(t),r&&a(u),r&&a(n),r&&a(E),r&&a(f)}}}function ft($){var R;let t,l,e=((R=$[2])==null?void 0:R.slice(0,8))+"",s,i,p,u,n,o,d,A,m,y,E,f,w;return{c(){t=v("span"),l=v("a"),s=L(e),i=L("..."),u=T(),n=v("span"),o=v("kbd"),d=L("Finalized"),A=v("br"),m=v("small"),y=L(`The consensus nodes have finalized the block that the transaction is
          included in.`),E=T(),f=v("progress"),w=L("Executing..."),this.h()},l(r){t=b(r,"SPAN",{class:!0});var h=k(t);l=b(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),i=I(P,"..."),P.forEach(a),h.forEach(a),u=N(r),n=b(r,"SPAN",{});var C=k(n);o=b(C,"KBD",{});var B=k(o);d=I(B,"Finalized"),B.forEach(a),A=b(C,"BR",{}),m=b(C,"SMALL",{class:!0});var z=k(m);y=I(z,`The consensus nodes have finalized the block that the transaction is
          included in.`),z.forEach(a),C.forEach(a),E=N(r),f=b(r,"PROGRESS",{min:!0,max:!0,class:!0});var M=k(f);w=I(M,"Executing..."),M.forEach(a),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${$[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_(m,"class","svelte-11j8u0c"),_(f,"min","0"),_(f,"max","100"),f.value="80",_(f,"class","svelte-11j8u0c")},m(r,h){g(r,t,h),c(t,l),c(l,s),c(l,i),g(r,u,h),g(r,n,h),c(n,o),c(o,d),c(n,A),c(n,m),c(m,y),g(r,E,h),g(r,f,h),c(f,w)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&a(t),r&&a(u),r&&a(n),r&&a(E),r&&a(f)}}}function ct($){var R;let t,l,e=((R=$[2])==null?void 0:R.slice(0,8))+"",s,i,p,u,n,o,d,A,m,y,E,f,w;return{c(){t=v("span"),l=v("a"),s=L(e),i=L("..."),u=T(),n=v("span"),o=v("kbd"),d=L("Pending"),A=v("br"),m=v("small"),y=L(`The transaction has been received by a collector but not yet
          finalized in a block.`),E=T(),f=v("progress"),w=L("Executing"),this.h()},l(r){t=b(r,"SPAN",{class:!0});var h=k(t);l=b(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),i=I(P,"..."),P.forEach(a),h.forEach(a),u=N(r),n=b(r,"SPAN",{});var C=k(n);o=b(C,"KBD",{});var B=k(o);d=I(B,"Pending"),B.forEach(a),A=b(C,"BR",{}),m=b(C,"SMALL",{class:!0});var z=k(m);y=I(z,`The transaction has been received by a collector but not yet
          finalized in a block.`),z.forEach(a),C.forEach(a),E=N(r),f=b(r,"PROGRESS",{indeterminate:!0,class:!0});var M=k(f);w=I(M,"Executing"),M.forEach(a),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${$[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_(m,"class","svelte-11j8u0c"),_(f,"indeterminate",""),_(f,"class","svelte-11j8u0c")},m(r,h){g(r,t,h),c(t,l),c(l,s),c(l,i),g(r,u,h),g(r,n,h),c(n,o),c(o,d),c(n,A),c(n,m),c(m,y),g(r,E,h),g(r,f,h),c(f,w)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&a(t),r&&a(u),r&&a(n),r&&a(E),r&&a(f)}}}function ut($){let t,l,e,s,i,p,u,n,o;return{c(){t=v("span"),l=v("kbd"),e=L("Initializing"),s=v("br"),i=v("small"),p=L("Waiting for transaction approval."),u=T(),n=v("progress"),o=L("Initializing..."),this.h()},l(d){t=b(d,"SPAN",{});var A=k(t);l=b(A,"KBD",{});var m=k(l);e=I(m,"Initializing"),m.forEach(a),s=b(A,"BR",{}),i=b(A,"SMALL",{class:!0});var y=k(i);p=I(y,"Waiting for transaction approval."),y.forEach(a),A.forEach(a),u=N(d),n=b(d,"PROGRESS",{indeterminate:!0,class:!0});var E=k(n);o=I(E,"Initializing..."),E.forEach(a),this.h()},h(){_(i,"class","svelte-11j8u0c"),_(n,"indeterminate",""),_(n,"class","svelte-11j8u0c")},m(d,A){g(d,t,A),c(t,l),c(l,e),c(t,s),c(t,i),c(i,p),g(d,u,A),g(d,n,A),c(n,o)},p:ae,d(d){d&&a(t),d&&a(u),d&&a(n)}}}function _t($){let t,l,e=$[0]&&ye($);return{c(){e&&e.c(),t=H()},l(s){e&&e.l(s),t=H()},m(s,i){e&&e.m(s,i),g(s,t,i),l=!0},p(s,[i]){s[0]?e?(e.p(s,i),i&1&&x(e,1)):(e=ye(s),e.c(),x(e,1),e.m(t.parentNode,t)):e&&(te(),O(e,1,1,()=>{e=null}),le())},i(s){l||(x(e),l=!0)},o(s){O(e),l=!1},d(s){e&&e.d(s),s&&a(t)}}}function pt($,t,l){let e,s,i;return Z($,Ke,p=>l(0,e=p)),Z($,Ue,p=>l(1,s=p)),Z($,We,p=>l(2,i=p)),[e,s,i]}class ht extends ce{constructor(t){super();ue(this,t,pt,_t,_e,{})}}function we($){let t,l,e,s,i;function p(o,d){return o[1]<0?Et:o[1]<2?kt:o[1]===2?$t:o[1]===3?bt:o[1]===4?vt:o[1]===5?dt:mt}let u=p($),n=u($);return{c(){t=v("article"),l=L(`Transaction status:
  `),n.c(),this.h()},l(o){t=b(o,"ARTICLE",{style:!0,class:!0});var d=k(t);l=I(d,`Transaction status:
  `),n.l(d),d.forEach(a),this.h()},h(){re(t,"width","40%"),_(t,"class",e="accent-border "+($[1]==99?"error":null)+" svelte-1amyy12")},m(o,d){g(o,t,d),c(t,l),n.m(t,null),i=!0},p(o,d){u===(u=p(o))&&n?n.p(o,d):(n.d(1),n=u(o),n&&(n.c(),n.m(t,null))),(!i||d&2&&e!==(e="accent-border "+(o[1]==99?"error":null)+" svelte-1amyy12"))&&_(t,"class",e)},i(o){i||(Re(()=>{s||(s=oe(t,fe,{},!0)),s.run(1)}),i=!0)},o(o){s||(s=oe(t,fe,{},!1)),s.run(0),i=!1},d(o){o&&a(t),n.d(),o&&s&&s.end()}}}function mt($){let t,l;return{c(){t=v("span"),l=L("Unexpected parameters were passed into the transaction."),this.h()},l(e){t=b(e,"SPAN",{"data-theme":!0});var s=k(t);l=I(s,"Unexpected parameters were passed into the transaction."),s.forEach(a),this.h()},h(){_(t,"data-theme","invalid")},m(e,s){g(e,t,s),c(t,l)},p:ae,d(e){e&&a(t)}}}function dt($){var E;let t,l,e=((E=$[2])==null?void 0:E.slice(0,8))+"",s,i,p,u,n,o,d,A,m,y;return{c(){t=v("span"),l=v("a"),s=L(e),i=L("..."),u=T(),n=v("span"),o=v("kbd"),d=L("Expired"),A=v("br"),m=v("small"),y=L("The transaction was submitted past its expiration block height."),this.h()},l(f){t=b(f,"SPAN",{class:!0});var w=k(t);l=b(w,"A",{href:!0,target:!0});var R=k(l);s=I(R,e),i=I(R,"..."),R.forEach(a),w.forEach(a),u=N(f),n=b(f,"SPAN",{});var r=k(n);o=b(r,"KBD",{});var h=k(o);d=I(h,"Expired"),h.forEach(a),A=b(r,"BR",{}),m=b(r,"SMALL",{class:!0});var P=k(m);y=I(P,"The transaction was submitted past its expiration block height."),P.forEach(a),r.forEach(a),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${$[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_(m,"class","svelte-1amyy12")},m(f,w){g(f,t,w),c(t,l),c(l,s),c(l,i),g(f,u,w),g(f,n,w),c(n,o),c(o,d),c(n,A),c(n,m),c(m,y)},p(f,w){var R;w&4&&e!==(e=((R=f[2])==null?void 0:R.slice(0,8))+"")&&V(s,e),w&4&&p!==(p=`https://testnet.flowscan.org/transaction/${f[2]}`)&&_(l,"href",p)},d(f){f&&a(t),f&&a(u),f&&a(n)}}}function vt($){var R;let t,l,e=((R=$[2])==null?void 0:R.slice(0,8))+"",s,i,p,u,n,o,d,A,m,y,E,f,w;return{c(){t=v("span"),l=v("a"),s=L(e),i=L("..."),u=T(),n=v("span"),o=v("kbd"),d=L("\u2713 Sealed"),A=v("br"),m=v("small"),y=L(`The verification nodes have verified the transaction, and the seal is
        included in the latest block.`),E=T(),f=v("progress"),w=L("Sealed!"),this.h()},l(r){t=b(r,"SPAN",{class:!0});var h=k(t);l=b(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),i=I(P,"..."),P.forEach(a),h.forEach(a),u=N(r),n=b(r,"SPAN",{});var C=k(n);o=b(C,"KBD",{});var B=k(o);d=I(B,"\u2713 Sealed"),B.forEach(a),A=b(C,"BR",{}),m=b(C,"SMALL",{class:!0});var z=k(m);y=I(z,`The verification nodes have verified the transaction, and the seal is
        included in the latest block.`),z.forEach(a),C.forEach(a),E=N(r),f=b(r,"PROGRESS",{min:!0,max:!0,class:!0});var M=k(f);w=I(M,"Sealed!"),M.forEach(a),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${$[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_(m,"class","svelte-1amyy12"),_(f,"min","0"),_(f,"max","100"),f.value="100",_(f,"class","svelte-1amyy12")},m(r,h){g(r,t,h),c(t,l),c(l,s),c(l,i),g(r,u,h),g(r,n,h),c(n,o),c(o,d),c(n,A),c(n,m),c(m,y),g(r,E,h),g(r,f,h),c(f,w)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&a(t),r&&a(u),r&&a(n),r&&a(E),r&&a(f)}}}function bt($){var R;let t,l,e=((R=$[2])==null?void 0:R.slice(0,8))+"",s,i,p,u,n,o,d,A,m,y,E,f,w;return{c(){t=v("span"),l=v("a"),s=L(e),i=L("..."),u=T(),n=v("span"),o=v("kbd"),d=L("Executed"),A=v("br"),m=v("small"),y=L("The execution nodes have produced a result for the transaction."),E=T(),f=v("progress"),w=L("Sealing..."),this.h()},l(r){t=b(r,"SPAN",{class:!0});var h=k(t);l=b(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),i=I(P,"..."),P.forEach(a),h.forEach(a),u=N(r),n=b(r,"SPAN",{});var C=k(n);o=b(C,"KBD",{});var B=k(o);d=I(B,"Executed"),B.forEach(a),A=b(C,"BR",{}),m=b(C,"SMALL",{class:!0});var z=k(m);y=I(z,"The execution nodes have produced a result for the transaction."),z.forEach(a),C.forEach(a),E=N(r),f=b(r,"PROGRESS",{min:!0,max:!0,class:!0});var M=k(f);w=I(M,"Sealing..."),M.forEach(a),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${$[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_(m,"class","svelte-1amyy12"),_(f,"min","0"),_(f,"max","100"),f.value="80",_(f,"class","svelte-1amyy12")},m(r,h){g(r,t,h),c(t,l),c(l,s),c(l,i),g(r,u,h),g(r,n,h),c(n,o),c(o,d),c(n,A),c(n,m),c(m,y),g(r,E,h),g(r,f,h),c(f,w)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&a(t),r&&a(u),r&&a(n),r&&a(E),r&&a(f)}}}function $t($){var R;let t,l,e=((R=$[2])==null?void 0:R.slice(0,8))+"",s,i,p,u,n,o,d,A,m,y,E,f,w;return{c(){t=v("span"),l=v("a"),s=L(e),i=L("..."),u=T(),n=v("span"),o=v("kbd"),d=L("Finalized"),A=v("br"),m=v("small"),y=L(`The consensus nodes have finalized the block that the transaction is
        included in.`),E=T(),f=v("progress"),w=L("Executing..."),this.h()},l(r){t=b(r,"SPAN",{class:!0});var h=k(t);l=b(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),i=I(P,"..."),P.forEach(a),h.forEach(a),u=N(r),n=b(r,"SPAN",{});var C=k(n);o=b(C,"KBD",{});var B=k(o);d=I(B,"Finalized"),B.forEach(a),A=b(C,"BR",{}),m=b(C,"SMALL",{class:!0});var z=k(m);y=I(z,`The consensus nodes have finalized the block that the transaction is
        included in.`),z.forEach(a),C.forEach(a),E=N(r),f=b(r,"PROGRESS",{min:!0,max:!0,class:!0});var M=k(f);w=I(M,"Executing..."),M.forEach(a),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${$[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_(m,"class","svelte-1amyy12"),_(f,"min","0"),_(f,"max","100"),f.value="80",_(f,"class","svelte-1amyy12")},m(r,h){g(r,t,h),c(t,l),c(l,s),c(l,i),g(r,u,h),g(r,n,h),c(n,o),c(o,d),c(n,A),c(n,m),c(m,y),g(r,E,h),g(r,f,h),c(f,w)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&a(t),r&&a(u),r&&a(n),r&&a(E),r&&a(f)}}}function kt($){var R;let t,l,e=((R=$[2])==null?void 0:R.slice(0,8))+"",s,i,p,u,n,o,d,A,m,y,E,f,w;return{c(){t=v("span"),l=v("a"),s=L(e),i=L("..."),u=T(),n=v("span"),o=v("kbd"),d=L("Pending"),A=v("br"),m=v("small"),y=L(`The transaction has been received by a collector but not yet
        finalized in a block.`),E=T(),f=v("progress"),w=L("Executing"),this.h()},l(r){t=b(r,"SPAN",{class:!0});var h=k(t);l=b(h,"A",{href:!0,target:!0});var P=k(l);s=I(P,e),i=I(P,"..."),P.forEach(a),h.forEach(a),u=N(r),n=b(r,"SPAN",{});var C=k(n);o=b(C,"KBD",{});var B=k(o);d=I(B,"Pending"),B.forEach(a),A=b(C,"BR",{}),m=b(C,"SMALL",{class:!0});var z=k(m);y=I(z,`The transaction has been received by a collector but not yet
        finalized in a block.`),z.forEach(a),C.forEach(a),E=N(r),f=b(r,"PROGRESS",{indeterminate:!0,class:!0});var M=k(f);w=I(M,"Executing"),M.forEach(a),this.h()},h(){_(l,"href",p=`https://testnet.flowscan.org/transaction/${$[2]}`),_(l,"target","_blank"),_(t,"class","txId"),_(m,"class","svelte-1amyy12"),_(f,"indeterminate",""),_(f,"class","svelte-1amyy12")},m(r,h){g(r,t,h),c(t,l),c(l,s),c(l,i),g(r,u,h),g(r,n,h),c(n,o),c(o,d),c(n,A),c(n,m),c(m,y),g(r,E,h),g(r,f,h),c(f,w)},p(r,h){var P;h&4&&e!==(e=((P=r[2])==null?void 0:P.slice(0,8))+"")&&V(s,e),h&4&&p!==(p=`https://testnet.flowscan.org/transaction/${r[2]}`)&&_(l,"href",p)},d(r){r&&a(t),r&&a(u),r&&a(n),r&&a(E),r&&a(f)}}}function Et($){let t,l,e,s,i,p,u,n,o;return{c(){t=v("span"),l=v("kbd"),e=L("Initializing"),s=v("br"),i=v("small"),p=L("Waiting for transaction approval."),u=T(),n=v("progress"),o=L("Initializing..."),this.h()},l(d){t=b(d,"SPAN",{});var A=k(t);l=b(A,"KBD",{});var m=k(l);e=I(m,"Initializing"),m.forEach(a),s=b(A,"BR",{}),i=b(A,"SMALL",{class:!0});var y=k(i);p=I(y,"Waiting for transaction approval."),y.forEach(a),A.forEach(a),u=N(d),n=b(d,"PROGRESS",{indeterminate:!0,class:!0});var E=k(n);o=I(E,"Initializing..."),E.forEach(a),this.h()},h(){_(i,"class","svelte-1amyy12"),_(n,"indeterminate",""),_(n,"class","svelte-1amyy12")},m(d,A){g(d,t,A),c(t,l),c(l,e),c(t,s),c(t,i),c(i,p),g(d,u,A),g(d,n,A),c(n,o)},p:ae,d(d){d&&a(t),d&&a(u),d&&a(n)}}}function gt($){let t,l,e=$[0]&&we($);return{c(){e&&e.c(),t=H()},l(s){e&&e.l(s),t=H()},m(s,i){e&&e.m(s,i),g(s,t,i),l=!0},p(s,[i]){s[0]?e?(e.p(s,i),i&1&&x(e,1)):(e=we(s),e.c(),x(e,1),e.m(t.parentNode,t)):e&&(te(),O(e,1,1,()=>{e=null}),le())},i(s){l||(x(e),l=!0)},o(s){O(e),l=!1},d(s){e&&e.d(s),s&&a(t)}}}function St($,t,l){let e,s,i;return Z($,Je,p=>l(0,e=p)),Z($,Ze,p=>l(1,s=p)),Z($,Xe,p=>l(2,i=p)),[e,s,i]}class At extends ce{constructor(t){super();ue(this,t,St,gt,_e,{})}}function Pe($){let t,l;return t=new ke({props:{screenSize:"desktop"}}),{c(){q(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,s){U(t,e,s),l=!0},i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){O(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function yt($){let t,l,e=$[3]&&Pe();return{c(){e&&e.c(),t=H()},l(s){e&&e.l(s),t=H()},m(s,i){e&&e.m(s,i),g(s,t,i),l=!0},p(s,i){s[3]?e?i&8&&x(e,1):(e=Pe(),e.c(),x(e,1),e.m(t.parentNode,t)):e&&(te(),O(e,1,1,()=>{e=null}),le())},i(s){l||(x(e),l=!0)},o(s){O(e),l=!1},d(s){e&&e.d(s),s&&a(t)}}}function Le($){let t,l;return t=new ke({props:{screenSize:"tablet"}}),{c(){q(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,s){U(t,e,s),l=!0},i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){O(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function wt($){let t,l,e=$[3]&&Le();return{c(){e&&e.c(),t=H()},l(s){e&&e.l(s),t=H()},m(s,i){e&&e.m(s,i),g(s,t,i),l=!0},p(s,i){s[3]?e?i&8&&x(e,1):(e=Le(),e.c(),x(e,1),e.m(t.parentNode,t)):e&&(te(),O(e,1,1,()=>{e=null}),le())},i(s){l||(x(e),l=!0)},o(s){O(e),l=!1},d(s){e&&e.d(s),s&&a(t)}}}function Ie($){let t,l;return t=new ke({props:{screenSize:"mobile"}}),{c(){q(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,s){U(t,e,s),l=!0},i(e){l||(x(t.$$.fragment,e),l=!0)},o(e){O(t.$$.fragment,e),l=!1},d(e){W(t,e)}}}function Pt($){let t,l,e=$[3]&&Ie();return{c(){e&&e.c(),t=H()},l(s){e&&e.l(s),t=H()},m(s,i){e&&e.m(s,i),g(s,t,i),l=!0},p(s,i){s[3]?e?i&8&&x(e,1):(e=Ie(),e.c(),x(e,1),e.m(t.parentNode,t)):e&&(te(),O(e,1,1,()=>{e=null}),le())},i(s){l||(x(e),l=!0)},o(s){O(e),l=!1},d(s){e&&e.d(s),s&&a(t)}}}function Ce($){let t,l,e,s,i;return{c(){t=v("small"),l=L(`Live claiming feed powered by
      `),e=v("a"),s=v("img"),this.h()},l(p){t=b(p,"SMALL",{class:!0});var u=k(t);l=I(u,`Live claiming feed powered by
      `),e=b(u,"A",{href:!0,target:!0,class:!0});var n=k(e);s=b(n,"IMG",{class:!0,src:!0,alt:!0}),n.forEach(a),u.forEach(a),this.h()},h(){_(s,"class","graffle svelte-j5rx0t"),Me(s.src,i="/graffle-logo.png")||_(s,"src",i),_(s,"alt","Graffle logo"),_(e,"href","https://graffle.io"),_(e,"target","_blank"),_(e,"class","svelte-j5rx0t"),_(t,"class","graffle svelte-j5rx0t")},m(p,u){g(p,t,u),c(t,l),c(t,e),c(e,s)},d(p){p&&a(t)}}}function Lt($){let t,l,e,s,i,p,u,n,o,d,A,m,y,E,f,w,R,r,h,P,C,B,z,M,pe,X,he,Q,F,J,me,se;t=new $e({props:{query:"(min-width: 1281px)",$$slots:{default:[yt,({matches:S})=>({3:S}),({matches:S})=>S?8:0]},$$scope:{ctx:$}}}),e=new $e({props:{query:"(min-width: 481px) and (max-width: 1280px)",$$slots:{default:[wt,({matches:S})=>({3:S}),({matches:S})=>S?8:0]},$$scope:{ctx:$}}}),i=new $e({props:{query:"(max-width: 480px)",$$slots:{default:[Pt,({matches:S})=>({3:S}),({matches:S})=>S?8:0]},$$scope:{ctx:$}}}),n=new Be({});const de=$[1].default,G=ze(de,$,$[2],null);A=new ht({}),E=new At({});let D=$[0].path==="/live"&&Ce();return{c(){q(t.$$.fragment),l=T(),q(e.$$.fragment),s=T(),q(i.$$.fragment),p=T(),u=v("main"),q(n.$$.fragment),o=T(),G&&G.c(),d=T(),q(A.$$.fragment),m=T(),y=v("div"),q(E.$$.fragment),f=T(),w=v("footer"),D&&D.c(),R=T(),r=v("p"),h=v("small"),P=L(`Created by
      `),C=v("a"),B=L("Emerald City DAO"),z=T(),M=v("br"),pe=T(),X=v("span"),he=L(`Contribute on
        `),Q=v("a"),F=Se("svg"),J=Se("path"),me=L(" Github"),this.h()},l(S){K(t.$$.fragment,S),l=N(S),K(e.$$.fragment,S),s=N(S),K(i.$$.fragment,S),p=N(S),u=b(S,"MAIN",{class:!0});var j=k(u);K(n.$$.fragment,j),o=N(j),G&&G.l(j),d=N(j),K(A.$$.fragment,j),j.forEach(a),m=N(S),y=b(S,"DIV",{style:!0});var ne=k(y);K(E.$$.fragment,ne),ne.forEach(a),f=N(S),w=b(S,"FOOTER",{class:!0});var Y=k(w);D&&D.l(Y),R=N(Y),r=b(Y,"P",{class:!0});var ie=k(r);h=b(ie,"SMALL",{});var ee=k(h);P=I(ee,`Created by
      `),C=b(ee,"A",{href:!0,target:!0,class:!0});var Ee=k(C);B=I(Ee,"Emerald City DAO"),Ee.forEach(a),z=N(ee),M=b(ee,"BR",{}),pe=N(ee),X=b(ee,"SPAN",{class:!0});var ve=k(X);he=I(ve,`Contribute on
        `),Q=b(ve,"A",{href:!0,target:!0,class:!0});var be=k(Q);F=Ae(be,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var ge=k(F);J=Ae(ge,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,transform:!0,fill:!0}),k(J).forEach(a),ge.forEach(a),me=I(be," Github"),be.forEach(a),ve.forEach(a),ee.forEach(a),ie.forEach(a),Y.forEach(a),this.h()},h(){_(u,"class","container"),re(y,"position","sticky"),re(y,"bottom","140px"),re(y,"left","10px"),re(y,"height","6rem"),_(C,"href","https://discord.gg/emeraldcity"),_(C,"target","_blank"),_(C,"class","svelte-j5rx0t"),_(J,"fill-rule","evenodd"),_(J,"clip-rule","evenodd"),_(J,"d","M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"),_(J,"transform","scale(64)"),_(J,"fill","currentColor"),_(F,"width","16"),_(F,"height","16"),_(F,"viewBox","0 0 1024 1024"),_(F,"fill","none"),_(F,"xmlns","http://www.w3.org/2000/svg"),_(Q,"href","https://github.com/muttoni/float"),_(Q,"target","_blank"),_(Q,"class","svelte-j5rx0t"),_(X,"class","contribute"),_(r,"class","svelte-j5rx0t"),_(w,"class","svelte-j5rx0t")},m(S,j){U(t,S,j),g(S,l,j),U(e,S,j),g(S,s,j),U(i,S,j),g(S,p,j),g(S,u,j),U(n,u,null),c(u,o),G&&G.m(u,null),c(u,d),U(A,u,null),g(S,m,j),g(S,y,j),U(E,y,null),g(S,f,j),g(S,w,j),D&&D.m(w,null),c(w,R),c(w,r),c(r,h),c(h,P),c(h,C),c(C,B),c(h,z),c(h,M),c(h,pe),c(h,X),c(X,he),c(X,Q),c(Q,F),c(F,J),c(Q,me),se=!0},p(S,[j]){const ne={};j&12&&(ne.$$scope={dirty:j,ctx:S}),t.$set(ne);const Y={};j&12&&(Y.$$scope={dirty:j,ctx:S}),e.$set(Y);const ie={};j&12&&(ie.$$scope={dirty:j,ctx:S}),i.$set(ie),G&&G.p&&(!se||j&4)&&je(G,de,S,S[2],se?De(de,S[2],j,null):Oe(S[2]),null),S[0].path==="/live"?D||(D=Ce(),D.c(),D.m(w,R)):D&&(D.d(1),D=null)},i(S){se||(x(t.$$.fragment,S),x(e.$$.fragment,S),x(i.$$.fragment,S),x(n.$$.fragment,S),x(G,S),x(A.$$.fragment,S),x(E.$$.fragment,S),se=!0)},o(S){O(t.$$.fragment,S),O(e.$$.fragment,S),O(i.$$.fragment,S),O(n.$$.fragment,S),O(G,S),O(A.$$.fragment,S),O(E.$$.fragment,S),se=!1},d(S){W(t,S),S&&a(l),W(e,S),S&&a(s),W(i,S),S&&a(p),S&&a(u),W(n),G&&G.d(S),W(A),S&&a(m),S&&a(y),W(E),S&&a(f),S&&a(w),D&&D.d()}}}function It($,t,l){let e;Z($,Qe,p=>l(0,e=p));let{$$slots:s={},$$scope:i}=t;return Ge(()=>{let p=localStorage.getItem("theme");p&&(console.log("retrieving saved theme preference"),document.querySelector("html").setAttribute("data-theme",p))}),$.$$set=p=>{"$$scope"in p&&l(2,i=p.$$scope)},[e,s,i]}class Ot extends ce{constructor(t){super();ue(this,t,It,Lt,_e,{})}}export{Ot as default};