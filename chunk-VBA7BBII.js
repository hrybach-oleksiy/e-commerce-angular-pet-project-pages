import{a as ot,g as Ft}from"./chunk-KTITZPUL.js";import{Ga as Nt,Ja as It,Mb as Mt,Oa as dt,Ob as mt,P as x,Pa as xt,Q as Ct,Qa as Pt,S as At,V as R,Va as Dt,X as Rt,a as A,ga as Lt,i as Ot,mb as ft,nb as ht,ra as M,va as wt}from"./chunk-2AECPLNM.js";function Ee(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function _e(t,i){if(t&&i){let e=n=>{Ee(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function be(){return window.innerWidth-document.documentElement.offsetWidth}function kt(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function ze(t="p-overflow-hidden"){let i=kt(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,be()+"px"),_e(document.body,t)}function Te(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function qe(t="p-overflow-hidden"){let i=kt(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),Te(document.body,t)}function Ze(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function k(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function ve(t){let i=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?i=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?i=t.el.nativeElement:i=t.el)),k(i)?i:void 0}function Qe(t,i){let e=ve(t);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function at(t,i={}){if(k(t)){let e=(n,r)=>{var o,s;let c=(o=t?.$attrs)!=null&&o[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[r].flat().reduce((l,a)=>{if(a!=null){let p=typeof a;if(p==="string"||p==="number")l.push(a);else if(p==="object"){let f=Array.isArray(a)?e(n,a):Object.entries(a).map(([d,u])=>n==="style"&&(u||u===0)?`${d.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${u}`:u?d:void 0);l=f.length?l.concat(f.filter(d=>!!d)):l}}return l},c)};Object.entries(i).forEach(([n,r])=>{if(r!=null){let o=n.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),r):n==="p-bind"||n==="pBind"?at(t,r):(r=n==="class"?[...new Set(e("class",r))].join(" ").trim():n==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=r),t.setAttribute(n,r))}})}}function Je(t,i={},...e){if(t){let n=document.createElement(t);return at(n,i),n.append(...e),n}}function Oe(t,i){return k(t)?Array.from(t.querySelectorAll(i)):[]}function Xe(t,i){return k(t)?t.matches(i)?t:t.querySelector(i):null}function ti(t,i){t&&document.activeElement!==t&&t.focus(i)}function ei(t,i){if(k(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Ht(t,i=""){let e=Oe(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let r of e)getComputedStyle(r).display!="none"&&getComputedStyle(r).visibility!="hidden"&&n.push(r);return n}function ii(t,i){let e=Ht(t,i);return e.length>0?e[0]:null}function ni(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function ri(t,i){let e=Ht(t,i);return e.length>0?e[e.length-1]:null}function si(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function oi(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function ai(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function ci(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function $t(t,i="",e){k(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function Wt(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(r=>{r(e)})},clear(){t.clear()}}}var Ce=Object.defineProperty,Ut=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,Bt=(t,i,e)=>i in t?Ce(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Le=(t,i)=>{for(var e in i||(i={}))Ae.call(i,e)&&Bt(t,e,i[e]);if(Ut)for(var e of Ut(i))Re.call(i,e)&&Bt(t,e,i[e]);return t};function V(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function we(t){return!!(t&&t.constructor&&t.call&&t.apply)}function h(t){return!V(t)}function T(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function _(t,...i){return we(t)?t(...i):t}function P(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Vt(t){return P(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Gt(t,i="",e={}){let n=Vt(i).split("."),r=n.shift();return r?T(t)?Gt(_(t[Object.keys(t).find(o=>Vt(o)===r)||""],e),n.join("."),e):void 0:_(t,e)}function ct(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function Kt(t){return h(t)&&!isNaN(t)}function E(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function G(...t){let i=(e={},n={})=>{let r=Le({},e);return Object.keys(n).forEach(o=>{T(n[o])&&o in e&&T(e[o])?r[o]=i(e[o],n[o]):r[o]=n[o]}),r};return t.reduce((e,n,r)=>r===0?n:i(e,n),{})}function F(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function lt(t){return P(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function gt(t){return P(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var pt={};function fi(t="pui_id_"){return pt.hasOwnProperty(t)||(pt[t]=0),pt[t]++,`${t}${pt[t]}`}function Ne(){let t=[],i=(s,c,l=999)=>{let a=r(s,c,l),p=a.value+(a.key===s?0:l)+1;return t.push({key:s,value:p}),p},e=s=>{t=t.filter(c=>c.value!==s)},n=(s,c)=>r(s,c).value,r=(s,c,l=0)=>[...t].reverse().find(a=>c?!0:a.key===s)||{key:s,value:l},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,c,l)=>{c&&(c.style.zIndex=String(i(s,!0,l)))},clear:s=>{s&&(e(o(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var mi=Ne();var jt=["*"];var y=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var Ni=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=dt({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:jt,decls:1,vars:0,template:function(n,r){n&1&&(ft(),ht(0))},encapsulation:2})}return t})(),Ii=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=dt({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:jt,decls:1,vars:0,template:function(n,r){n&1&&(ft(),ht(0))},encapsulation:2})}return t})(),xi=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(It(Nt))};static \u0275dir=Pt({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),Pi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=xt({type:t});static \u0275inj=Ct({imports:[Ft]})}return t})();var Ie=Object.defineProperty,xe=Object.defineProperties,Pe=Object.getOwnPropertyDescriptors,ut=Object.getOwnPropertySymbols,qt=Object.prototype.hasOwnProperty,Zt=Object.prototype.propertyIsEnumerable,Yt=(t,i,e)=>i in t?Ie(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,O=(t,i)=>{for(var e in i||(i={}))qt.call(i,e)&&Yt(t,e,i[e]);if(ut)for(var e of ut(i))Zt.call(i,e)&&Yt(t,e,i[e]);return t},St=(t,i)=>xe(t,Pe(i)),L=(t,i)=>{var e={};for(var n in t)qt.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&ut)for(var n of ut(t))i.indexOf(n)<0&&Zt.call(t,n)&&(e[n]=t[n]);return e};function Fi(...t){return G(...t)}var De=Wt(),C=De;function zt(t,i){ct(t)?t.push(...i||[]):T(t)&&Object.assign(t,i)}function Me(t){return T(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Fe(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Et(t="",i=""){return Fe(`${P(t,!1)&&P(i,!1)?`${t}-`:t}${i}`)}function Qt(t="",i=""){return`--${Et(t,i)}`}function ke(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Jt(t,i="",e="",n=[],r){if(P(t)){let o=/{([^}]*)}/g,s=t.trim();if(ke(s))return;if(E(s,o)){let c=s.replaceAll(o,p=>{let d=p.replace(/{|}/g,"").split(".").filter(u=>!n.some(g=>E(u,g)));return`var(${Qt(e,lt(d.join("-")))}${h(r)?`, ${r}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,a=/var\([^)]+\)/g;return E(c.replace(a,"0"),l)?`calc(${c})`:c}return s}else if(Kt(t))return t}function He(t,i,e){P(i,!1)&&t.push(`${i}:${e};`)}function H(t,i){return t?`${t}{${i}}`:""}var $=(...t)=>$e(m.getTheme(),...t),$e=(t={},i,e,n)=>{if(i){let{variable:r,options:o}=m.defaults||{},{prefix:s,transform:c}=t?.options||o||{},a=E(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||V(n)&&c==="strict"?m.getTokenValue(i):Jt(a,void 0,s,[r.excludedKeyRegex],e)}return""};function We(t,i={}){let e=m.defaults.variable,{prefix:n=e.prefix,selector:r=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=i,s=(a,p="")=>Object.entries(a).reduce((f,[d,u])=>{let g=E(d,o)?Et(p):Et(p,lt(d)),S=Me(u);if(T(S)){let{variables:w,tokens:N}=s(S,g);zt(f.tokens,N),zt(f.variables,w)}else f.tokens.push((n?g.replace(`${n}-`,""):g).replaceAll("-",".")),He(f.variables,Qt(g),Jt(S,g,n,[o]));return f},{variables:[],tokens:[]}),{variables:c,tokens:l}=s(t,n);return{value:c,tokens:l,declarations:c.join(""),css:H(r,c.join(""))}}var v={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(r=>r.resolve(e)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return We(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:r}){var o,s,c,l,a,p,f;let{preset:d,options:u}=i,g,S,w,N,I,D,b;if(h(d)&&u.transform!=="strict"){let{primitive:K,semantic:j,extend:Y}=d,W=j||{},{colorScheme:z}=W,q=L(W,["colorScheme"]),Z=Y||{},{colorScheme:Q}=Z,U=L(Z,["colorScheme"]),B=z||{},{dark:J}=B,X=L(B,["dark"]),tt=Q||{},{dark:et}=tt,it=L(tt,["dark"]),nt=h(K)?this._toVariables({primitive:K},u):{},rt=h(q)?this._toVariables({semantic:q},u):{},st=h(X)?this._toVariables({light:X},u):{},_t=h(J)?this._toVariables({dark:J},u):{},bt=h(U)?this._toVariables({semantic:U},u):{},Tt=h(it)?this._toVariables({light:it},u):{},vt=h(et)?this._toVariables({dark:et},u):{},[ee,ie]=[(o=nt.declarations)!=null?o:"",nt.tokens],[ne,re]=[(s=rt.declarations)!=null?s:"",rt.tokens||[]],[se,oe]=[(c=st.declarations)!=null?c:"",st.tokens||[]],[ae,ce]=[(l=_t.declarations)!=null?l:"",_t.tokens||[]],[le,pe]=[(a=bt.declarations)!=null?a:"",bt.tokens||[]],[ue,de]=[(p=Tt.declarations)!=null?p:"",Tt.tokens||[]],[fe,he]=[(f=vt.declarations)!=null?f:"",vt.tokens||[]];g=this.transformCSS(t,ee,"light","variable",u,n,r),S=ie;let me=this.transformCSS(t,`${ne}${se}`,"light","variable",u,n,r),ge=this.transformCSS(t,`${ae}`,"dark","variable",u,n,r);w=`${me}${ge}`,N=[...new Set([...re,...oe,...ce])];let ye=this.transformCSS(t,`${le}${ue}color-scheme:light`,"light","variable",u,n,r),Se=this.transformCSS(t,`${fe}color-scheme:dark`,"dark","variable",u,n,r);I=`${ye}${Se}`,D=[...new Set([...pe,...de,...he])],b=_(d.css,{dt:$})}return{primitive:{css:g,tokens:S},semantic:{css:w,tokens:N},global:{css:I,tokens:D},style:b}},getPreset({name:t="",preset:i={},options:e,params:n,set:r,defaults:o,selector:s}){var c,l,a;let p,f,d;if(h(i)&&e.transform!=="strict"){let u=t.replace("-directive",""),g=i,{colorScheme:S,extend:w,css:N}=g,I=L(g,["colorScheme","extend","css"]),D=w||{},{colorScheme:b}=D,K=L(D,["colorScheme"]),j=S||{},{dark:Y}=j,W=L(j,["dark"]),z=b||{},{dark:q}=z,Z=L(z,["dark"]),Q=h(I)?this._toVariables({[u]:O(O({},I),K)},e):{},U=h(W)?this._toVariables({[u]:O(O({},W),Z)},e):{},B=h(Y)?this._toVariables({[u]:O(O({},Y),q)},e):{},[J,X]=[(c=Q.declarations)!=null?c:"",Q.tokens||[]],[tt,et]=[(l=U.declarations)!=null?l:"",U.tokens||[]],[it,nt]=[(a=B.declarations)!=null?a:"",B.tokens||[]],rt=this.transformCSS(u,`${J}${tt}`,"light","variable",e,r,o,s),st=this.transformCSS(u,it,"dark","variable",e,r,o,s);p=`${rt}${st}`,f=[...new Set([...X,...et,...nt])],d=_(N,{dt:$})}return{css:p,tokens:f,style:d}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let{preset:s,options:c}=i,l=(o=s?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:l,options:c,params:e,set:n,defaults:r})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let s=t.replace("-directive",""),{preset:c,options:l}=i,a=(o=c?.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:a,options:l,params:e,set:n,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:r}=i;return r?`@layer ${_(r.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){let s=this.getCommon({name:t,theme:i,params:e,set:r,defaults:o}),c=Object.entries(n).reduce((l,[a,p])=>l.push(`${a}="${p}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[a,p])=>{if(p?.css){let f=F(p?.css),d=`${a}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${d}" ${c}>${f}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){var s;let c={name:t,theme:i,params:e,set:r,defaults:o},l=(s=t.includes("-directive")?this.getPresetD(c):this.getPresetC(c))==null?void 0:s.css,a=Object.entries(n).reduce((p,[f,d])=>p.push(`${f}="${d}"`)&&p,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${a}>${F(l)}</style>`:""},createTokens(t={},i,e="",n="",r={}){return Object.entries(t).forEach(([o,s])=>{let c=E(o,i.variable.excludedKeyRegex)?e:e?`${e}.${gt(o)}`:gt(o),l=n?`${n}.${o}`:o;T(s)?this.createTokens(s,i,c,l,r):(r[c]||(r[c]={paths:[],computed(a,p={}){var f,d;return this.paths.length===1?(f=this.paths[0])==null?void 0:f.computed(this.paths[0].scheme,p.binding):a&&a!=="none"?(d=this.paths.find(u=>u.scheme===a))==null?void 0:d.computed(a,p.binding):this.paths.map(u=>u.computed(u.scheme,p[u.scheme]))}}),r[c].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(a,p={}){let f=/{([^}]*)}/g,d=s;if(p.name=this.path,p.binding||(p.binding={}),E(s,f)){let g=s.trim().replaceAll(f,N=>{var I;let D=N.replace(/{|}/g,""),b=(I=r[D])==null?void 0:I.computed(a,p);return ct(b)&&b.length===2?`light-dark(${b[0].value},${b[1].value})`:b?.value}),S=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,w=/var\([^)]+\)/g;d=E(g.replace(w,"0"),S)?`calc(${g})`:g}return V(p.binding)&&delete p.binding,{colorScheme:a,path:this.path,paths:p,value:d.includes("undefined")?void 0:d}}}))}),r},getTokenValue(t,i,e){var n;let o=(l=>l.split(".").filter(p=>!E(p.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,c=[(n=t[o])==null?void 0:n.computed(s)].flat().filter(l=>l);return c.length===1?c[0].value:c.reduce((l={},a)=>{let p=a,{colorScheme:f}=p,d=L(p,["colorScheme"]);return l[f]=d,l},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?H(h(i)?`${t}${i},${t} ${i}`:t,n):H(t,h(i)?H(i,n):n)},transformCSS(t,i,e,n,r={},o,s,c){if(h(i)){let{cssLayer:l}=r;if(n!=="style"){let a=this.getColorSchemeOption(r,s);i=e==="dark"?a.reduce((p,{type:f,selector:d})=>(h(d)&&(p+=d.includes("[CSS]")?d.replace("[CSS]",i):this.getSelectorRule(d,c,f,i)),p),""):H(c??":root",i)}if(l){let a={name:"primeui",order:"primeui"};T(l)&&(a.name=_(l.name,{name:t,type:n})),h(a.name)&&(i=H(`@layer ${a.name}`,i),o?.layerNames(a.name))}return i}return""}},m={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=St(O({},i),{options:O(O({},this.defaults.options),i.options)}),this._tokens=v.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),C.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=St(O({},this.theme),{preset:t}),this._tokens=v.createTokens(t,this.defaults),this.clearLoadedStyleNames(),C.emit("preset:change",t),C.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=St(O({},this.theme),{options:t}),this.clearLoadedStyleNames(),C.emit("options:change",t),C.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return v.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return v.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return v.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return v.getPresetD(e)},getCustomPreset(t="",i,e,n){let r={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return v.getPreset(r)},getLayerOrderCSS(t=""){return v.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return v.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return v.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return v.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),C.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&C.emit("theme:load"))}};var Ue=0,Xt=(()=>{class t{document=R(ot);use(e,n={}){let r=!1,o=e,s=null,{immediate:c=!0,manual:l=!1,name:a=`style_${++Ue}`,id:p=void 0,media:f=void 0,nonce:d=void 0,first:u=!1,props:g={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${a}"]`)||p&&this.document.getElementById(p)||this.document.createElement("style"),!s.isConnected){o=e,at(s,{type:"text/css",media:f,nonce:d});let S=this.document.head;u&&S.firstChild?S.insertBefore(s,S.firstChild):S.appendChild(s),$t(s,"data-primeng-style-id",a)}return s.textContent!==o&&(s.textContent=o),{id:p,name:a,el:s,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rn={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Be=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,Ve=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,te=(()=>{class t{name="base";useStyle=R(Xt);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},r=o=>o)=>{let o=r(_(e,{dt:$}));return o?this.useStyle.use(F(o),A({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(r="")=>m.transformCSS(e.name||this.name,`${r}${n}`));loadGlobalCSS=(e={})=>this.load(Ve,e);loadGlobalTheme=(e={},n="")=>this.load(Be,e,(r="")=>m.transformCSS(e.name||this.name,`${r}${n}`));getCommonTheme=e=>m.getCommon(this.name,e);getComponentTheme=e=>m.getComponent(this.name,e);getDirectiveTheme=e=>m.getDirective(this.name,e);getPresetTheme=(e,n,r)=>m.getCustomPreset(this.name,e,n,r);getLayerOrderThemeCSS=()=>m.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let r=_(this.css,{dt:$}),o=F(`${r}${e}`),s=Object.entries(n).reduce((c,[l,a])=>c.push(`${l}="${a}"`)&&c,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>m.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let r=[m.getStyleSheet(this.name,e,n)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,s=_(this.theme,{dt:$}),c=F(m.transformCSS(o,s)),l=Object.entries(n).reduce((a,[p,f])=>a.push(`${p}="${f}"`)&&a,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${o}" ${l}>${c}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ge=(()=>{class t{theme=M(void 0);csp=M({nonce:void 0});isThemeChanged=!1;document=R(ot);baseStyle=R(te);constructor(){mt(()=>{C.on("theme:change",e=>{Mt(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),mt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){m.clearLoadedStyleNames(),C.clear()}onThemeChange(e){m.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!m.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,A({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,A({name:"semantic-variables"},s)),this.baseStyle.load(r?.css,A({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(A({name:"global-style"},s),o),m.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:r}=e||{};n&&this.theme.set(n),r&&this.csp.set(r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ke=(()=>{class t extends Ge{ripple=M(!1);platformId=R(wt);inputStyle=M(null);inputVariant=M(null);overlayOptions={};csp=M({nonce:void 0});filterMatchModeOptions={text:[y.STARTS_WITH,y.CONTAINS,y.NOT_CONTAINS,y.ENDS_WITH,y.EQUALS,y.NOT_EQUALS],numeric:[y.EQUALS,y.NOT_EQUALS,y.LESS_THAN,y.LESS_THAN_OR_EQUAL_TO,y.GREATER_THAN,y.GREATER_THAN_OR_EQUAL_TO],date:[y.DATE_IS,y.DATE_IS_NOT,y.DATE_BEFORE,y.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Ot;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=A(A({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:r,inputStyle:o,inputVariant:s,theme:c,overlayOptions:l,translation:a,filterMatchModeOptions:p}=e||{};n&&this.csp.set(n),r&&this.ripple.set(r),o&&this.inputStyle.set(o),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),a&&this.setTranslation(a),p&&(this.filterMatchModeOptions=p),c&&this.setThemeConfig({theme:c,csp:n})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Lt(t)))(r||t)}})();static \u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),je=new At("PRIME_NG_CONFIG");function hn(...t){let i=t?.map(n=>({provide:je,useValue:n,multi:!1})),e=Dt(()=>{let n=R(Ke);t?.forEach(r=>n.setConfig(r))});return Rt([...i,e])}export{_e as a,ze as b,Te as c,qe as d,Ze as e,Qe as f,Je as g,Oe as h,Xe as i,ti as j,ei as k,ii as l,ni as m,ri as n,si as o,oi as p,ai as q,ci as r,$t as s,V as t,h as u,Gt as v,fi as w,Ni as x,Ii as y,xi as z,Pi as A,Fi as B,C,m as D,rn as E,te as F,Ke as G,hn as H};
