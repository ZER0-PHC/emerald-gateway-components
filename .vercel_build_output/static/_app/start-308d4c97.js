var ot=Object.defineProperty,lt=Object.defineProperties;var ct=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var W=(i,t,e)=>t in i?ot(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,k=(i,t)=>{for(var e in t||(t={}))G.call(t,e)&&W(i,e,t[e]);if(N)for(var e of N(t))Q.call(t,e)&&W(i,e,t[e]);return i},X=(i,t)=>lt(i,ct(t));var F=(i,t)=>{var e={};for(var s in i)G.call(i,s)&&t.indexOf(s)<0&&(e[s]=i[s]);if(i!=null&&N)for(var s of N(i))t.indexOf(s)<0&&Q.call(i,s)&&(e[s]=i[s]);return e};import{S as ut,i as ft,s as ht,e as dt,c as _t,a as pt,d as $,b as D,f as L,t as mt,g as gt,h as wt,j as A,k as yt,l as v,m as K,n as bt,o as O,p as Y,q as z,r as T,u as E,v as I,w as C,x as w,y as vt,z as Et,A as $t,B as J,C as B}from"./chunks/vendor-716abb8a.js";import{i as Rt}from"./chunks/singletons-12a22614.js";function Z(i){let t,e,s;const r=[i[2]||{}];var a=i[0][1];function n(o){let l={$$slots:{default:[kt]},$$scope:{ctx:o}};for(let c=0;c<r.length;c+=1)l=J(l,r[c]);return{props:l}}return a&&(t=new a(n(i))),{c(){t&&A(t.$$.fragment),e=v()},l(o){t&&K(t.$$.fragment,o),e=v()},m(o,l){t&&O(t,o,l),L(o,e,l),s=!0},p(o,l){const c=l&4?Y(r,[z(o[2]||{})]):{};if(l&521&&(c.$$scope={dirty:l,ctx:o}),a!==(a=o[0][1])){if(t){T();const u=t;E(u.$$.fragment,1,0,()=>{I(u,1)}),C()}a?(t=new a(n(o)),A(t.$$.fragment),w(t.$$.fragment,1),O(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&w(t.$$.fragment,o),s=!0)},o(o){t&&E(t.$$.fragment,o),s=!1},d(o){o&&$(e),t&&I(t,o)}}}function x(i){let t,e,s;const r=[i[3]||{}];var a=i[0][2];function n(o){let l={};for(let c=0;c<r.length;c+=1)l=J(l,r[c]);return{props:l}}return a&&(t=new a(n())),{c(){t&&A(t.$$.fragment),e=v()},l(o){t&&K(t.$$.fragment,o),e=v()},m(o,l){t&&O(t,o,l),L(o,e,l),s=!0},p(o,l){const c=l&8?Y(r,[z(o[3]||{})]):{};if(a!==(a=o[0][2])){if(t){T();const u=t;E(u.$$.fragment,1,0,()=>{I(u,1)}),C()}a?(t=new a(n()),A(t.$$.fragment),w(t.$$.fragment,1),O(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&w(t.$$.fragment,o),s=!0)},o(o){t&&E(t.$$.fragment,o),s=!1},d(o){o&&$(e),t&&I(t,o)}}}function kt(i){let t,e,s=i[0][2]&&x(i);return{c(){s&&s.c(),t=v()},l(r){s&&s.l(r),t=v()},m(r,a){s&&s.m(r,a),L(r,t,a),e=!0},p(r,a){r[0][2]?s?(s.p(r,a),a&1&&w(s,1)):(s=x(r),s.c(),w(s,1),s.m(t.parentNode,t)):s&&(T(),E(s,1,1,()=>{s=null}),C())},i(r){e||(w(s),e=!0)},o(r){E(s),e=!1},d(r){s&&s.d(r),r&&$(t)}}}function St(i){let t,e,s=i[0][1]&&Z(i);return{c(){s&&s.c(),t=v()},l(r){s&&s.l(r),t=v()},m(r,a){s&&s.m(r,a),L(r,t,a),e=!0},p(r,a){r[0][1]?s?(s.p(r,a),a&1&&w(s,1)):(s=Z(r),s.c(),w(s,1),s.m(t.parentNode,t)):s&&(T(),E(s,1,1,()=>{s=null}),C())},i(r){e||(w(s),e=!0)},o(r){E(s),e=!1},d(r){s&&s.d(r),r&&$(t)}}}function tt(i){let t,e=i[5]&&et(i);return{c(){t=dt("div"),e&&e.c(),this.h()},l(s){t=_t(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=pt(t);e&&e.l(r),r.forEach($),this.h()},h(){D(t,"id","svelte-announcer"),D(t,"aria-live","assertive"),D(t,"aria-atomic","true"),D(t,"class","svelte-1j55zn5")},m(s,r){L(s,t,r),e&&e.m(t,null)},p(s,r){s[5]?e?e.p(s,r):(e=et(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&$(t),e&&e.d()}}}function et(i){let t;return{c(){t=mt(i[6])},l(e){t=gt(e,i[6])},m(e,s){L(e,t,s)},p(e,s){s&64&&wt(t,e[6])},d(e){e&&$(t)}}}function Lt(i){let t,e,s,r;const a=[i[1]||{}];var n=i[0][0];function o(c){let u={$$slots:{default:[St]},$$scope:{ctx:c}};for(let h=0;h<a.length;h+=1)u=J(u,a[h]);return{props:u}}n&&(t=new n(o(i)));let l=i[4]&&tt(i);return{c(){t&&A(t.$$.fragment),e=yt(),l&&l.c(),s=v()},l(c){t&&K(t.$$.fragment,c),e=bt(c),l&&l.l(c),s=v()},m(c,u){t&&O(t,c,u),L(c,e,u),l&&l.m(c,u),L(c,s,u),r=!0},p(c,[u]){const h=u&2?Y(a,[z(c[1]||{})]):{};if(u&525&&(h.$$scope={dirty:u,ctx:c}),n!==(n=c[0][0])){if(t){T();const f=t;E(f.$$.fragment,1,0,()=>{I(f,1)}),C()}n?(t=new n(o(c)),A(t.$$.fragment),w(t.$$.fragment,1),O(t,e.parentNode,e)):t=null}else n&&t.$set(h);c[4]?l?l.p(c,u):(l=tt(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){r||(t&&w(t.$$.fragment,c),r=!0)},o(c){t&&E(t.$$.fragment,c),r=!1},d(c){t&&I(t,c),c&&$(e),l&&l.d(c),c&&$(s)}}}function qt(i,t,e){let{stores:s}=t,{page:r}=t,{components:a}=t,{props_0:n=null}=t,{props_1:o=null}=t,{props_2:l=null}=t;vt("__svelte__",s),Et(s.page.notify);let c=!1,u=!1,h=null;return $t(()=>{const f=s.page.subscribe(()=>{c&&(e(5,u=!0),e(6,h=document.title||"untitled page"))});return e(4,c=!0),f}),i.$$set=f=>{"stores"in f&&e(7,s=f.stores),"page"in f&&e(8,r=f.page),"components"in f&&e(0,a=f.components),"props_0"in f&&e(1,n=f.props_0),"props_1"in f&&e(2,o=f.props_1),"props_2"in f&&e(3,l=f.props_2)},i.$$.update=()=>{i.$$.dirty&384&&s.page.set(r)},[a,n,o,l,c,u,h,s,r]}class Ut extends ut{constructor(t){super();ft(this,t,qt,Lt,ht,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const At="modulepreload",st={},Ot="/_app/",S=function(t,e){return!e||e.length===0?t():Promise.all(e.map(s=>{if(s=`${Ot}${s}`,s in st)return;st[s]=!0;const r=s.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":At,r||(n.as="script",n.crossOrigin=""),n.href=s,document.head.appendChild(n),r)return new Promise((o,l)=>{n.addEventListener("load",o),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},d=[()=>S(()=>import("./pages/__layout.svelte-6408ffd6.js"),["pages/__layout.svelte-6408ffd6.js","assets/pages/__layout.svelte-298b32e2.css","assets/Sidebar.svelte_svelte_type_style_lang-a8b8b1ab.css","chunks/vendor-716abb8a.js","assets/vendor-25757cea.css","chunks/stores-b031beb9.js","chunks/singletons-12a22614.js","chunks/Header.svelte_svelte_type_style_lang-959e330a.js","assets/Header.svelte_svelte_type_style_lang-6c895964.css","chunks/stores-6080713b.js","assets/stores-bb8d33eb.css","pages/MediaQuery.svelte-764e8fc2.js"]),()=>S(()=>import("./pages/__error.svelte-1d8a99e1.js"),["pages/__error.svelte-1d8a99e1.js","chunks/vendor-716abb8a.js","assets/vendor-25757cea.css"]),()=>S(()=>import("./pages/index.svelte-7aad9c09.js"),["pages/index.svelte-7aad9c09.js","assets/pages/index.svelte-30cff0a6.css","assets/Sidebar.svelte_svelte_type_style_lang-a8b8b1ab.css","chunks/vendor-716abb8a.js","assets/vendor-25757cea.css","chunks/stores-b031beb9.js","chunks/singletons-12a22614.js","chunks/whitelists-75da607a.js","assets/whitelists-7506989d.css","pages/MediaQuery.svelte-764e8fc2.js","chunks/constants-29589109.js","chunks/Header.svelte_svelte_type_style_lang-959e330a.js","assets/Header.svelte_svelte_type_style_lang-6c895964.css","chunks/stores-6080713b.js","assets/stores-bb8d33eb.css"]),()=>S(()=>import("./pages/projectDetails.svelte-5dec9b1f.js"),["pages/projectDetails.svelte-5dec9b1f.js","assets/pages/projectDetails.svelte-8d3b1a51.css","chunks/vendor-716abb8a.js","assets/vendor-25757cea.css","chunks/stores-6080713b.js","assets/stores-bb8d33eb.css"]),()=>S(()=>import("./pages/MediaQuery.svelte-764e8fc2.js"),["pages/MediaQuery.svelte-764e8fc2.js","chunks/vendor-716abb8a.js","assets/vendor-25757cea.css"]),()=>S(()=>import("./pages/create.svelte-f23dbba1.js"),["pages/create.svelte-f23dbba1.js","assets/pages/create.svelte-73bcfad8.css","chunks/vendor-716abb8a.js","assets/vendor-25757cea.css","chunks/stores-6080713b.js","assets/stores-bb8d33eb.css","chunks/Dialog-a346bbd5.js","assets/Dialog-1351e10c.css","chunks/stores-b031beb9.js","chunks/singletons-12a22614.js","chunks/constants-29589109.js","chunks/Header.svelte_svelte_type_style_lang-959e330a.js","assets/Header.svelte_svelte_type_style_lang-6c895964.css","pages/MediaQuery.svelte-764e8fc2.js"]),()=>S(()=>import("./pages/_address_/whitelists.svelte-d22354b6.js"),["pages/_address_/whitelists.svelte-d22354b6.js","chunks/vendor-716abb8a.js","assets/vendor-25757cea.css","chunks/whitelists-75da607a.js","assets/whitelists-7506989d.css","pages/MediaQuery.svelte-764e8fc2.js"]),()=>S(()=>import("./pages/_address_/_whitelistId_.svelte-beaaec92.js"),["pages/_address_/_whitelistId_.svelte-beaaec92.js","assets/pages/_address_/_whitelistId_.svelte-b48647cc.css","chunks/vendor-716abb8a.js","assets/vendor-25757cea.css","chunks/stores-b031beb9.js","chunks/singletons-12a22614.js","chunks/Dialog-a346bbd5.js","assets/Dialog-1351e10c.css","chunks/stores-6080713b.js","assets/stores-bb8d33eb.css"])],M=decodeURIComponent,It=[[/^\/$/,[d[0],d[2]],[d[1]]],[/^\/projectDetails\/?$/,[d[0],d[3]],[d[1]]],[/^\/MediaQuery\/?$/,[d[0],d[4]],[d[1]]],[/^\/create\/?$/,[d[0],d[5]],[d[1]]],[/^\/([^/]+?)\/whitelists\/?$/,[d[0],d[6]],[d[1]],i=>({address:M(i[1])})],[/^\/([^/]+?)\/([^/]+?)\/?$/,[d[0],d[7]],[d[1]],i=>({address:M(i[1]),whitelistId:M(i[2])})]],Pt=[d[0](),d[1]()];function Tt(i){let t=i.baseURI;if(!t){const e=i.getElementsByTagName("base");t=e.length?e[0].href:i.URL}return t}let rt="";function Ct(i){rt=i.base,i.assets}function H(){return{x:pageXOffset,y:pageYOffset}}function it(i){return i.composedPath().find(e=>e instanceof Node&&e.nodeName.toUpperCase()==="A")}function nt(i){return i instanceof SVGAElement?new URL(i.href.baseVal,document.baseURI):new URL(i.href)}class Vt{constructor({base:t,routes:e,trailing_slash:s,renderer:r}){this.base=t,this.routes=e,this.trailing_slash=s,this.navigating=0,this.renderer=r,r.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let t;addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{const a=X(k({},history.state||{}),{"sveltekit:scroll":H()});history.replaceState(a,document.title,window.location.href)},200)});const e=a=>{const n=it(a);n&&n.href&&n.hasAttribute("sveltekit:prefetch")&&this.prefetch(nt(n))};let s;const r=a=>{clearTimeout(s),s=setTimeout(()=>{e(a)},20)};addEventListener("touchstart",e),addEventListener("mousemove",r),addEventListener("click",a=>{if(!this.enabled||a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const n=it(a);if(!n||!n.href)return;const o=nt(n),l=o.toString();if(l===location.href){location.hash||a.preventDefault();return}const c=(n.getAttribute("rel")||"").split(/\s+/);if(n.hasAttribute("download")||c&&c.includes("external")||(n instanceof SVGAElement?n.target.baseVal:n.target)||!this.owns(o))return;const u=n.hasAttribute("sveltekit:noscroll"),h=l.indexOf("#"),f=location.href.indexOf("#"),b=h>=0?l.substring(0,h):l,m=f>=0?location.href.substring(0,f):location.href;history.pushState({},"",o.href),b===m&&window.dispatchEvent(new HashChangeEvent("hashchange")),this._navigate(o,u?H():null,!1,[],o.hash),a.preventDefault()}),addEventListener("popstate",a=>{if(a.state&&this.enabled){const n=new URL(location.href);this._navigate(n,a.state["sveltekit:scroll"],!1,[])}})}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=t.pathname.slice(this.base.length)||"/",s=decodeURI(e),r=this.routes.filter(([o])=>o.test(s)),a=new URLSearchParams(t.search);return{id:`${e}?${a}`,routes:r,path:e,decoded_path:s,query:a}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:r=!1,state:a={}}={},n){const o=new URL(t,Tt(document));return this.enabled&&this.owns(o)?(history[s?"replaceState":"pushState"](a,"",t),this._navigate(o,e?H():null,r,n,o.hash)):(location.href=o.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,r,a){const n=this.parse(t);if(!n)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.navigating++,n.path!=="/"){const o=n.path.endsWith("/");(o&&this.trailing_slash==="never"||!o&&this.trailing_slash==="always"&&!(n.path.split("/").pop()||"").includes("."))&&(n.path=o?n.path.slice(0,-1):n.path+"/",history.replaceState({},"",`${this.base}${n.path}${location.search}`))}await this.renderer.handle_navigation(n,r,!1,{hash:a,scroll:e,keepfocus:s}),this.navigating--,this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-end"))}}function at(i){return i instanceof Error||i&&i.name&&i.message?i:new Error(JSON.stringify(i))}function Nt(i){let t=5381,e=i.length;if(typeof i=="string")for(;e;)t=t*33^i.charCodeAt(--e);else for(;e;)t=t*33^i[--e];return(t>>>0).toString(36)}function Dt(i){const t=i.status&&i.status>=400&&i.status<=599&&!i.redirect;if(i.error||t){const e=i.status;if(!i.error&&t)return{status:e||500,error:new Error};const s=typeof i.error=="string"?new Error(i.error):i.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(i.redirect){if(!i.status||Math.floor(i.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof i.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(i.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return i}function jt(i){const t=B(i);let e=!0;function s(){e=!0,t.update(n=>n)}function r(n){e=!1,t.set(n)}function a(n){let o;return t.subscribe(l=>{(o===void 0||e&&l!==o)&&n(o=l)})}return{notify:s,set:r,subscribe:a}}function Mt(i,t){const e=typeof i=="string"?i:i.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(e)}]`;t&&typeof t.body=="string"&&(s+=`[data-body="${Nt(t.body)}"]`);const r=document.querySelector(s);if(r&&r.textContent){const a=JSON.parse(r.textContent),{body:n}=a,o=F(a,["body"]);return Promise.resolve(new Response(n,o))}return fetch(i,t)}class Ht{constructor({Root:t,fallback:e,target:s,session:r,host:a}){this.Root=t,this.fallback=e,this.host=a,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:jt({}),navigating:B(null),session:B(r)},this.$session=null,this.root=null;let n=!1;this.stores.session.subscribe(async o=>{if(this.$session=o,!n||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),n=!0}async start({status:t,error:e,nodes:s,page:r}){const a=[];let n={},o,l;try{for(let c=0;c<s.length;c+=1){const u=c===s.length-1,h=await this._load_node({module:await s[c],page:r,stuff:n,status:u?t:void 0,error:u?e:void 0});if(a.push(h),h&&h.loaded)if(h.loaded.error){if(e)throw h.loaded.error;l={status:h.loaded.status,error:h.loaded.error,path:r.path,query:r.query}}else h.loaded.stuff&&(n=k(k({},n),h.loaded.stuff))}o=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:r,branch:a})}catch(c){if(e)throw c;o=await this._load_error({status:500,error:at(c),path:r.path,query:r.query})}if(o.redirect){location.href=new URL(o.redirect,location.href).href;return}this._init(o)}async handle_navigation(t,e,s,r){this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t.path,query:t.query}}),await this.update(t,e,s,r)}async update(t,e,s,r){var l;const a=this.token={};let n=await this._get_navigation_result(t,s);if(a!==this.token)return;if(this.invalid.clear(),n.redirect)if(e.length>10||e.includes(t.path))n=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(n.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(n.redirect,location.href).href;return}if(this.started?(this.current=n.state,this.root.$set(n.props),this.stores.navigating.set(null)):this._init(n),r){const{hash:c,scroll:u,keepfocus:h}=r;h||((l=getSelection())==null||l.removeAllRanges(),document.body.focus());const f=Math.round(pageYOffset),b=document.documentElement.scrollHeight-innerHeight;await 0;const m=Math.round(pageYOffset),R=document.documentElement.scrollHeight-innerHeight;if(m===Math.min(f,R)||b-f===R-m){const q=c&&document.getElementById(c.slice(1));u?scrollTo(u.x,u.y):q?q.scrollIntoView():scrollTo(0,0)}}else await 0;if(this.loading.promise=null,this.loading.id=null,!this.router)return;const o=n.state.branch[n.state.branch.length-1];o&&o.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:k({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const r=t.routes[s];let a=s+1;for(;a<t.routes.length;){const o=t.routes[a];if(o[0].toString()===r[0].toString())o[1].forEach(l=>l()),a+=1;else break}const n=await this._load({route:r,info:t},e);if(n)return n}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),r=s.find(l=>l.loaded&&l.loaded.redirect),a={redirect:r&&r.loaded?r.loaded.redirect:void 0,state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const c=s[l].loaded;a.props[`props_${l}`]=c?await c.props:null}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(a.props.page=t);const n=s[s.length-1],o=n.loaded&&n.loaded.maxage;if(o){const l=`${t.path}?${t.query}`;let c=!1;const u=()=>{this.cache.get(l)===a&&this.cache.delete(l),f(),clearTimeout(h)},h=setTimeout(u,o*1e3),f=this.stores.session.subscribe(()=>{c&&u()});c=!0,this.cache.set(l,a)}return a}async _load_node({status:t,error:e,module:s,page:r,stuff:a}){const n={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:a},o={};for(const c in r.params)Object.defineProperty(o,c,{get(){return n.uses.params.add(c),r.params[c]},enumerable:!0});const l=this.$session;if(s.load){const{started:c}=this,u={page:{host:r.host,params:o,get path(){return n.uses.path=!0,r.path},get query(){return n.uses.query=!0,r.query}},get session(){return n.uses.session=!0,l},get stuff(){return n.uses.stuff=!0,k({},a)},fetch(f,b){const m=typeof f=="string"?f:f.url,{href:R}=new URL(m,new URL(r.path,document.baseURI));return n.uses.dependencies.push(R),c?fetch(f,b):Mt(f,b)}};e&&(u.status=t,u.error=e);const h=await s.load.call(null,u);if(!h)return;n.loaded=Dt(h),n.loaded.stuff&&(n.stuff=n.loaded.stuff)}return n}async _load({route:t,info:{path:e,decoded_path:s,query:r}},a){const n=`${s}?${r}`;if(!a){const _=this.cache.get(n);if(_)return _}const[o,l,c,u]=t,h=u?u(o.exec(s)):{},f=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(h).filter(_=>this.current.page.params[_]!==h[_]),query:r.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},b={host:this.host,path:e,query:r,params:h};let m=[],R={},j=!1,q=200,P;l.forEach(_=>_());t:for(let _=0;_<l.length;_+=1){let p;try{if(!l[_])continue;const y=await l[_](),g=this.current.branch[_];if(!g||y!==g.module||f.path&&g.uses.path||f.params.some(U=>g.uses.params.has(U))||f.query&&g.uses.query||f.session&&g.uses.session||g.uses.dependencies.some(U=>this.invalid.has(U))||j&&g.uses.stuff){p=await this._load_node({module:y,page:b,stuff:R});const U=_===l.length-1;if(p&&p.loaded){if(p.loaded.error&&(q=p.loaded.status,P=p.loaded.error),p.loaded.redirect)return{redirect:p.loaded.redirect,props:{},state:this.current};p.loaded.stuff&&(j=!0)}else if(U&&y.load)return}else p=g}catch(y){q=500,P=at(y)}if(P){for(;_--;)if(c[_]){let y,g,V=_;for(;!(g=m[V]);)V-=1;try{if(y=await this._load_node({status:q,error:P,module:await c[_](),page:b,stuff:g.stuff}),y&&y.loaded&&y.loaded.error)continue;m=m.slice(0,V+1).concat(y);break t}catch{continue}}return await this._load_error({status:q,error:P,path:e,query:r})}else p&&p.loaded&&p.loaded.stuff&&(R=k(k({},R),p.loaded.stuff)),m.push(p)}return await this._get_navigation_result_from_branch({page:b,branch:m})}async _load_error({status:t,error:e,path:s,query:r}){const a={host:this.host,path:s,query:r,params:{}},n=await this._load_node({module:await this.fallback[0],page:a,stuff:{}}),o=[n,await this._load_node({status:t,error:e,module:await this.fallback[1],page:a,stuff:n&&n.loaded&&n.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:a,branch:o})}}async function zt({paths:i,target:t,session:e,host:s,route:r,spa:a,trailing_slash:n,hydrate:o}){const l=new Ht({Root:Ut,fallback:Pt,target:t,session:e,host:s}),c=r?new Vt({base:i.base,routes:It,trailing_slash:n,renderer:l}):null;Rt(c),Ct(i),o&&await l.start(o),c&&(a&&c.goto(location.href,{replaceState:!0},[]),c.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{zt as start};