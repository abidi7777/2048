var Zt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Te=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var o=(e,t,n)=>(Te(e,t,"read from private field"),n?n.call(e):t.get(e)),u=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},p=(e,t,n,r)=>(Te(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);var m=(e,t,n)=>(Te(e,t,"access private method"),n);var po=Zt((b,w)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Qt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function le(e){return function(t){if(Array.isArray(t))return _e(t)}(e)||function(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}(e)||function(t,n){if(!!t){if(typeof t=="string")return _e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _e(t,n)}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function _e(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Xe,Se,D,Ae,Je,Z=(Xe=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],Se=function(){function e(r){var i=r.targetModal,a=r.triggers,s=a===void 0?[]:a,c=r.onShow,l=c===void 0?function(){}:c,h=r.onClose,d=h===void 0?function(){}:h,_=r.openTrigger,A=_===void 0?"data-micromodal-trigger":_,T=r.closeTrigger,x=T===void 0?"data-micromodal-close":T,ze=r.openClass,Ht=ze===void 0?"is-open":ze,He=r.disableScroll,qt=He!==void 0&&He,qe=r.disableFocus,Kt=qe!==void 0&&qe,Ke=r.awaitCloseAnimation,kt=Ke!==void 0&&Ke,ke=r.awaitOpenAnimation,Wt=ke!==void 0&&ke,We=r.debugMode,Xt=We!==void 0&&We;(function(Jt,Yt){if(!(Jt instanceof Yt))throw new TypeError("Cannot call a class as a function")})(this,e),this.modal=document.getElementById(i),this.config={debugMode:Xt,disableScroll:qt,openTrigger:A,closeTrigger:x,openClass:Ht,onShow:l,onClose:d,awaitCloseAnimation:kt,awaitOpenAnimation:Wt,disableFocus:Kt},s.length>0&&this.registerTriggers.apply(this,le(s)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var t,n;return t=e,(n=[{key:"registerTriggers",value:function(){for(var r=this,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];a.filter(Boolean).forEach(function(c){c.addEventListener("click",function(l){return r.showModal(l)})})}},{key:"showModal",value:function(){var r=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var a=function s(){r.modal.removeEventListener("animationend",s,!1),r.setFocusToFirstNode()};this.modal.addEventListener("animationend",a,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,i)}},{key:"closeModal",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,r),this.config.awaitCloseAnimation){var a=this.config.openClass;this.modal.addEventListener("animationend",function s(){i.classList.remove(a),i.removeEventListener("animationend",s,!1)},!1)}else i.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(r){this.modal=document.getElementById(r),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(r){if(this.config.disableScroll){var i=document.querySelector("body");switch(r){case"enable":Object.assign(i.style,{overflow:""});break;case"disable":Object.assign(i.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(r){(r.target.hasAttribute(this.config.closeTrigger)||r.target.parentNode.hasAttribute(this.config.closeTrigger))&&(r.preventDefault(),r.stopPropagation(),this.closeModal(r))}},{key:"onKeydown",value:function(r){r.keyCode===27&&this.closeModal(r),r.keyCode===9&&this.retainFocus(r)}},{key:"getFocusableNodes",value:function(){var r=this.modal.querySelectorAll(Xe);return Array.apply(void 0,le(r))}},{key:"setFocusToFirstNode",value:function(){var r=this;if(!this.config.disableFocus){var i=this.getFocusableNodes();if(i.length!==0){var a=i.filter(function(s){return!s.hasAttribute(r.config.closeTrigger)});a.length>0&&a[0].focus(),a.length===0&&i[0].focus()}}}},{key:"retainFocus",value:function(r){var i=this.getFocusableNodes();if(i.length!==0)if(i=i.filter(function(s){return s.offsetParent!==null}),this.modal.contains(document.activeElement)){var a=i.indexOf(document.activeElement);r.shiftKey&&a===0&&(i[i.length-1].focus(),r.preventDefault()),!r.shiftKey&&i.length>0&&a===i.length-1&&(i[0].focus(),r.preventDefault())}else i[0].focus()}}])&&Qt(t.prototype,n),e}(),D=null,Ae=function(e){if(!document.getElementById(e))return console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},Je=function(e,t){if(function(r){r.length<=0&&(console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var n in t)Ae(n);return!0},{init:function(e){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),n=le(document.querySelectorAll("[".concat(t.openTrigger,"]"))),r=function(s,c){var l=[];return s.forEach(function(h){var d=h.attributes[c].value;l[d]===void 0&&(l[d]=[]),l[d].push(h)}),l}(n,t.openTrigger);if(t.debugMode!==!0||Je(n,r)!==!1)for(var i in r){var a=r[i];t.targetModal=i,t.triggers=le(a),D=new Se(t)}},show:function(e,t){var n=t||{};n.targetModal=e,n.debugMode===!0&&Ae(e)===!1||(D&&D.removeEventListeners(),(D=new Se(n)).showModal())},close:function(e){e?D.closeModalById(e):D.closeModal()}});typeof window<"u"&&(window.MicroModal=Z);function Vt(){}const L=Object.freeze({ArrowLeft:"arrowleft",ArrowRight:"arrowright",ArrowUp:"arrowup",ArrowDown:"arrowdown",W:"w",A:"a",S:"s",D:"d"}),vt=Object.seal({score:0,highestTile:0,date:new Date,tiles:[]}),en=Object.seal({stats:{highestTile:0,highestScore:0},currentGame:vt}),tn=4,nn=19,rn=2,Ye=75,on=500;var P,F;class an{constructor(t,n){u(this,P,void 0);u(this,F,void 0);this.x=t,this.y=n}get tile(){return o(this,P)}set tile(t){p(this,P,t),t&&(o(this,P).x=this.x,o(this,P).y=this.y)}get mergeTile(){return o(this,F)}set mergeTile(t){p(this,F,t),t&&(o(this,F).x=this.x,o(this,F).y=this.y)}canAccept(t){return!this.tile||!this.mergeTile&&o(this,P).value===t.value}mergeTiles(){return!this.tile||!this.mergeTile?0:(this.tile.value+=this.mergeTile.value,this.mergeTile.remove(),this.mergeTile=null,this.tile.pop(),this.tile.value)}}P=new WeakMap,F=new WeakMap;function ue(e){return e.some(t=>t.some((n,r)=>r===0||!n.tile?!1:t[r-1].canAccept(n.tile)))}var V,ee,E,te,Me,G,J,de,yt;class sn{constructor(t,n={}){u(this,te);u(this,G);u(this,de);u(this,V,[]);u(this,ee,void 0);u(this,E,void 0);const{gridSize:r=tn,cellSize:i=nn,cellGap:a=rn}=n;t.innerHTML="",t.style.setProperty("--grid-size",r),t.style.setProperty("--cell-size",`${i}vmin`),t.style.setProperty("--cell-gap",`${a}vmin`),p(this,ee,t),p(this,E,r),m(this,de,yt).call(this)}get cellsByColumn(){return this.cells.reduce((t,n)=>(t[n.x]=t[n.x]||[],t[n.x][n.y]=n,t),[])}get cellsByRow(){return this.cells.reduce((t,n)=>(t[n.y]=t[n.y]||[],t[n.y][n.x]=n,t),[])}get cells(){return o(this,V)}get size(){return o(this,E)}randomEmptyCell(){const t=Math.random()*o(this,te,Me).length>>0;return o(this,te,Me)[t]}moveTilesUp(){return m(this,G,J).call(this,this.cellsByColumn)}moveTilesDown(){return m(this,G,J).call(this,this.cellsByColumn.map(t=>[...t].reverse()))}moveTilesLeft(){return m(this,G,J).call(this,this.cellsByRow)}moveTilesRight(){return m(this,G,J).call(this,this.cellsByRow.map(t=>[...t].reverse()))}canMoveTilesAnyDirection(){return this.canMoveTilesUp()||this.canMoveTilesDown()||this.canMoveTilesLeft()||this.canMoveTilesRight()}canMoveTilesUp(){return ue(this.cellsByColumn)}canMoveTilesDown(){return ue(this.cellsByColumn.map(t=>[...t].reverse()))}canMoveTilesLeft(){return ue(this.cellsByRow)}canMoveTilesRight(){return ue(this.cellsByRow.map(t=>[...t].reverse()))}}V=new WeakMap,ee=new WeakMap,E=new WeakMap,te=new WeakSet,Me=function(){return this.cells.filter(t=>!t.tile)},G=new WeakSet,J=async function(t){await Promise.all(t.flatMap(r=>{const i=[];for(let a=1;a<r.length;a+=1){const s=r[a];if(s.tile){let c;for(let l=a-1;l>=0;l-=1){const h=r[l];if(!h.canAccept(s.tile))break;c=h}c!=null&&(i.push(s.tile.awaitTransition()),c.tile!=null?c.mergeTile=s.tile:c.tile=s.tile,s.tile=null)}}return i}));let n=0;return this.cells.forEach(r=>{r.mergeTile&&r.tile&&(n+=r.tile.value+r.mergeTile.value),r.mergeTiles()}),n},de=new WeakSet,yt=function(){const t=o(this,E)*o(this,E);for(let n=0;n<t;n+=1){const r=document.createElement("div");r.classList.add("cell"),o(this,V).push(new an(n%o(this,E),Math.floor(n/o(this,E)))),o(this,ee).append(r)}return this};function Ze(e){e.preventDefault()}var R,U,z,C,pe,mt,ge,bt;class cn{constructor(t,n){u(this,pe);u(this,ge);u(this,R,void 0);u(this,U,void 0);u(this,z,void 0);u(this,C,void 0);p(this,C,n),p(this,U,m(this,ge,bt).bind(this)),p(this,z,m(this,pe,mt).bind(this)),p(this,R,t)}activate(){window.addEventListener("keydown",o(this,U),{once:!0}),o(this,C).addEventListener("touchstart",o(this,z),{once:!0,passive:!1})}deactivate(){window.removeEventListener("keydown",o(this,U)),o(this,C).removeEventListener("touchstart",o(this,z))}}R=new WeakMap,U=new WeakMap,z=new WeakMap,C=new WeakMap,pe=new WeakSet,mt=function(t){t.preventDefault(),this.deactivate();const n=new Date,r=t.changedTouches[0];o(this,C).addEventListener("touchmove",Ze,{passive:!1}),o(this,C).addEventListener("touchend",async i=>{i.preventDefault(),o(this,C).removeEventListener("touchmove",Ze);const a=i.changedTouches[0];if(new Date-n>on){this.activate();return}const s=a.pageX-r.pageX,c=a.pageY-r.pageY;Math.abs(s)>=Ye?await o(this,R).call(this,s>0?"ArrowRight":"ArrowLeft"):Math.abs(c)>=Ye&&await o(this,R).call(this,c>0?"ArrowDown":"ArrowUp"),this.activate()},{once:!0})},ge=new WeakSet,bt=async function(t){this.deactivate(),await o(this,R).call(this,t.key),this.activate()};class N extends Error{constructor(...t){super(...t),this.name="InvalidMoveError"}}function Fe(e){return new Promise(t=>{const n=()=>{e.removeEventListener("transitionend",n),e.removeEventListener("transitioncancel",n),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),t()};e.addEventListener("transitionend",n),e.addEventListener("transitioncancel",n),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)})}async function xe(e,t){return e.dataset.animation?Promise.resolve():(e.dataset.animation=t,Fe(e).then(()=>{delete e.dataset.animation}))}var ne,re,ie,y;class Qe{constructor(t=Math.random()>.5?2:4){u(this,ne,void 0);u(this,re,void 0);u(this,ie,void 0);u(this,y,void 0);p(this,y,document.createElement("div")),o(this,y).classList.add("tile"),this.value=t,xe(o(this,y),"show")}get value(){return o(this,ie)}set value(t){const n=Math.log2(t),r=100-n*9;p(this,ie,t),o(this,y).textContent=t,o(this,y).style.setProperty("--background-lightness",`${r}%`),o(this,y).style.setProperty("--text-lightness",`${r<=50?90:10}%`)}get x(){return o(this,ne)}set x(t){o(this,y).style.setProperty("--x",t),p(this,ne,t)}get y(){return o(this,re)}set y(t){o(this,y).style.setProperty("--y",t),p(this,re,t)}get $ele(){return o(this,y)}remove(){o(this,y).remove()}awaitTransition(){return Fe(o(this,y))}pop(){return o(this,y).style.setProperty("--pop-duration","100ms"),o(this,y).style.setProperty("--pop-magnitude",Math.log2(this.value)),xe(o(this,y),"pop")}}ne=new WeakMap,re=new WeakMap,ie=new WeakMap,y=new WeakMap;const wt=e=>{if(typeof e=="object"){const t=Array.isArray(e)?[]:{};for(const[n,r]of Object.entries(e))t[n]=wt(r);return t}return e};function Tt(e){return wt(e)}function ln(e){return e.split(".")}function un(e,t){const n=e.slice();return n.push(t),n}const hn=["apply","construct","defineProperty","deleteProperty","enumerate","get","getOwnPropertyDescriptor","getPrototypeOf","has","isExtensible","ownKeys","preventExtensions","set","setPrototypeOf"],fn={get:1,set:1,deleteProperty:1,has:1,defineProperty:1,getOwnPropertyDescriptor:1};function dn(e,t,n){let r=[],i={};n!==void 0&&typeof n.path<"u"&&(r=ln(n.path)),n!==void 0&&typeof n.userData<"u"&&(i=n.userData);function a(s,c){const l={rootTarget:e,path:c};Object.assign(l,i);const h={};for(const d of hn){const _=fn[d],A=t[d];typeof A<"u"&&(typeof _<"u"?h[d]=function(){const T=arguments[_];return l.nest=function(x){return x===void 0&&(x=e),a(x,un(c,T))},A.apply(l,arguments)}:h[d]=function(){return l.nest=function(T){return T===void 0&&(T={}),a(T,c)},A.apply(l,arguments)})}return new Proxy(s,h)}return a(e,r)}var pn=dn;function _t(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function St(e){return e}var Ve=Math.max;function gn(e,t,n){return t=Ve(t===void 0?e.length-1:t,0),function(){for(var r=arguments,i=-1,a=Ve(r.length-t,0),s=Array(a);++i<a;)s[i]=r[t+i];i=-1;for(var c=Array(t+1);++i<t;)c[i]=r[i];return c[t]=n(s),_t(e,this,c)}}function vn(e){return function(){return e}}var yn=typeof global=="object"&&global&&global.Object===Object&&global;const At=yn;var mn=typeof self=="object"&&self&&self.Object===Object&&self,bn=At||mn||Function("return this")();const K=bn;var wn=K.Symbol;const he=wn;var Et=Object.prototype,Tn=Et.hasOwnProperty,_n=Et.toString,X=he?he.toStringTag:void 0;function Sn(e){var t=Tn.call(e,X),n=e[X];try{e[X]=void 0;var r=!0}catch{}var i=_n.call(e);return r&&(t?e[X]=n:delete e[X]),i}var An=Object.prototype,En=An.toString;function Cn(e){return En.call(e)}var On="[object Null]",Mn="[object Undefined]",et=he?he.toStringTag:void 0;function ye(e){return e==null?e===void 0?Mn:On:et&&et in Object(e)?Sn(e):Cn(e)}function O(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var xn="[object AsyncFunction]",Ln="[object Function]",Pn="[object GeneratorFunction]",$n="[object Proxy]";function Ge(e){if(!O(e))return!1;var t=ye(e);return t==Ln||t==Pn||t==xn||t==$n}var jn=K["__core-js_shared__"];const Ee=jn;var tt=function(){var e=/[^.]+$/.exec(Ee&&Ee.keys&&Ee.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Dn(e){return!!tt&&tt in e}var In=Function.prototype,Fn=In.toString;function Gn(e){if(e!=null){try{return Fn.call(e)}catch{}try{return e+""}catch{}}return""}var Rn=/[\\^$.*+?()[\]{}|]/g,Bn=/^\[object .+?Constructor\]$/,Nn=Function.prototype,Un=Object.prototype,zn=Nn.toString,Hn=Un.hasOwnProperty,qn=RegExp("^"+zn.call(Hn).replace(Rn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Kn(e){if(!O(e)||Dn(e))return!1;var t=Ge(e)?qn:Bn;return t.test(Gn(e))}function kn(e,t){return e==null?void 0:e[t]}function Re(e,t){var n=kn(e,t);return Kn(n)?n:void 0}var Wn=function(){try{var e=Re(Object,"defineProperty");return e({},"",{}),e}catch{}}();const fe=Wn;var Xn=fe?function(e,t){return fe(e,"toString",{configurable:!0,enumerable:!1,value:vn(t),writable:!0})}:St;const Jn=Xn;var Yn=800,Zn=16,Qn=Date.now;function Vn(e){var t=0,n=0;return function(){var r=Qn(),i=Zn-(r-n);if(n=r,i>0){if(++t>=Yn)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var er=Vn(Jn);const tr=er;function Ct(e,t){return tr(gn(e,t,St),e+"")}function nr(){this.__data__=[],this.size=0}function me(e,t){return e===t||e!==e&&t!==t}function be(e,t){for(var n=e.length;n--;)if(me(e[n][0],t))return n;return-1}var rr=Array.prototype,ir=rr.splice;function or(e){var t=this.__data__,n=be(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():ir.call(t,n,1),--this.size,!0}function ar(e){var t=this.__data__,n=be(t,e);return n<0?void 0:t[n][1]}function sr(e){return be(this.__data__,e)>-1}function cr(e,t){var n=this.__data__,r=be(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function M(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}M.prototype.clear=nr;M.prototype.delete=or;M.prototype.get=ar;M.prototype.has=sr;M.prototype.set=cr;function lr(){this.__data__=new M,this.size=0}function ur(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function hr(e){return this.__data__.get(e)}function fr(e){return this.__data__.has(e)}var dr=Re(K,"Map");const Ot=dr;var pr=Re(Object,"create");const Q=pr;function gr(){this.__data__=Q?Q(null):{},this.size=0}function vr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var yr="__lodash_hash_undefined__",mr=Object.prototype,br=mr.hasOwnProperty;function wr(e){var t=this.__data__;if(Q){var n=t[e];return n===yr?void 0:n}return br.call(t,e)?t[e]:void 0}var Tr=Object.prototype,_r=Tr.hasOwnProperty;function Sr(e){var t=this.__data__;return Q?t[e]!==void 0:_r.call(t,e)}var Ar="__lodash_hash_undefined__";function Er(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Q&&t===void 0?Ar:t,this}function B(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}B.prototype.clear=gr;B.prototype.delete=vr;B.prototype.get=wr;B.prototype.has=Sr;B.prototype.set=Er;function Cr(){this.size=0,this.__data__={hash:new B,map:new(Ot||M),string:new B}}function Or(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function we(e,t){var n=e.__data__;return Or(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Mr(e){var t=we(this,e).delete(e);return this.size-=t?1:0,t}function xr(e){return we(this,e).get(e)}function Lr(e){return we(this,e).has(e)}function Pr(e,t){var n=we(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function k(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}k.prototype.clear=Cr;k.prototype.delete=Mr;k.prototype.get=xr;k.prototype.has=Lr;k.prototype.set=Pr;var $r=200;function jr(e,t){var n=this.__data__;if(n instanceof M){var r=n.__data__;if(!Ot||r.length<$r-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new k(r)}return n.set(e,t),this.size=n.size,this}function W(e){var t=this.__data__=new M(e);this.size=t.size}W.prototype.clear=lr;W.prototype.delete=ur;W.prototype.get=hr;W.prototype.has=fr;W.prototype.set=jr;function Be(e,t,n){t=="__proto__"&&fe?fe(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Le(e,t,n){(n!==void 0&&!me(e[t],n)||n===void 0&&!(t in e))&&Be(e,t,n)}function Dr(e){return function(t,n,r){for(var i=-1,a=Object(t),s=r(t),c=s.length;c--;){var l=s[e?c:++i];if(n(a[l],l,a)===!1)break}return t}}var Ir=Dr();const Fr=Ir;var Mt=typeof b=="object"&&b&&!b.nodeType&&b,nt=Mt&&typeof w=="object"&&w&&!w.nodeType&&w,Gr=nt&&nt.exports===Mt,rt=Gr?K.Buffer:void 0,it=rt?rt.allocUnsafe:void 0;function Rr(e,t){if(t)return e.slice();var n=e.length,r=it?it(n):new e.constructor(n);return e.copy(r),r}var Br=K.Uint8Array;const ot=Br;function Nr(e){var t=new e.constructor(e.byteLength);return new ot(t).set(new ot(e)),t}function Ur(e,t){var n=t?Nr(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function zr(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}var at=Object.create,Hr=function(){function e(){}return function(t){if(!O(t))return{};if(at)return at(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const qr=Hr;function Kr(e,t){return function(n){return e(t(n))}}var kr=Kr(Object.getPrototypeOf,Object);const xt=kr;var Wr=Object.prototype;function Lt(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||Wr;return e===n}function Xr(e){return typeof e.constructor=="function"&&!Lt(e)?qr(xt(e)):{}}function ce(e){return e!=null&&typeof e=="object"}var Jr="[object Arguments]";function st(e){return ce(e)&&ye(e)==Jr}var Pt=Object.prototype,Yr=Pt.hasOwnProperty,Zr=Pt.propertyIsEnumerable,Qr=st(function(){return arguments}())?st:function(e){return ce(e)&&Yr.call(e,"callee")&&!Zr.call(e,"callee")};const Pe=Qr;var Vr=Array.isArray;const $e=Vr;var ei=9007199254740991;function $t(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ei}function Ne(e){return e!=null&&$t(e.length)&&!Ge(e)}function ti(e){return ce(e)&&Ne(e)}function ni(){return!1}var jt=typeof b=="object"&&b&&!b.nodeType&&b,ct=jt&&typeof w=="object"&&w&&!w.nodeType&&w,ri=ct&&ct.exports===jt,lt=ri?K.Buffer:void 0,ii=lt?lt.isBuffer:void 0,oi=ii||ni;const Dt=oi;var ai="[object Object]",si=Function.prototype,ci=Object.prototype,It=si.toString,li=ci.hasOwnProperty,ui=It.call(Object);function hi(e){if(!ce(e)||ye(e)!=ai)return!1;var t=xt(e);if(t===null)return!0;var n=li.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&It.call(n)==ui}var fi="[object Arguments]",di="[object Array]",pi="[object Boolean]",gi="[object Date]",vi="[object Error]",yi="[object Function]",mi="[object Map]",bi="[object Number]",wi="[object Object]",Ti="[object RegExp]",_i="[object Set]",Si="[object String]",Ai="[object WeakMap]",Ei="[object ArrayBuffer]",Ci="[object DataView]",Oi="[object Float32Array]",Mi="[object Float64Array]",xi="[object Int8Array]",Li="[object Int16Array]",Pi="[object Int32Array]",$i="[object Uint8Array]",ji="[object Uint8ClampedArray]",Di="[object Uint16Array]",Ii="[object Uint32Array]",f={};f[Oi]=f[Mi]=f[xi]=f[Li]=f[Pi]=f[$i]=f[ji]=f[Di]=f[Ii]=!0;f[fi]=f[di]=f[Ei]=f[pi]=f[Ci]=f[gi]=f[vi]=f[yi]=f[mi]=f[bi]=f[wi]=f[Ti]=f[_i]=f[Si]=f[Ai]=!1;function Fi(e){return ce(e)&&$t(e.length)&&!!f[ye(e)]}function Gi(e){return function(t){return e(t)}}var Ft=typeof b=="object"&&b&&!b.nodeType&&b,Y=Ft&&typeof w=="object"&&w&&!w.nodeType&&w,Ri=Y&&Y.exports===Ft,Ce=Ri&&At.process,Bi=function(){try{var e=Y&&Y.require&&Y.require("util").types;return e||Ce&&Ce.binding&&Ce.binding("util")}catch{}}();const ut=Bi;var ht=ut&&ut.isTypedArray,Ni=ht?Gi(ht):Fi;const Gt=Ni;function je(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}var Ui=Object.prototype,zi=Ui.hasOwnProperty;function Hi(e,t,n){var r=e[t];(!(zi.call(e,t)&&me(r,n))||n===void 0&&!(t in e))&&Be(e,t,n)}function qi(e,t,n,r){var i=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var c=t[a],l=r?r(n[c],e[c],c,n,e):void 0;l===void 0&&(l=e[c]),i?Be(n,c,l):Hi(n,c,l)}return n}function Ki(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var ki=9007199254740991,Wi=/^(?:0|[1-9]\d*)$/;function Rt(e,t){var n=typeof e;return t=t==null?ki:t,!!t&&(n=="number"||n!="symbol"&&Wi.test(e))&&e>-1&&e%1==0&&e<t}var Xi=Object.prototype,Ji=Xi.hasOwnProperty;function Yi(e,t){var n=$e(e),r=!n&&Pe(e),i=!n&&!r&&Dt(e),a=!n&&!r&&!i&&Gt(e),s=n||r||i||a,c=s?Ki(e.length,String):[],l=c.length;for(var h in e)(t||Ji.call(e,h))&&!(s&&(h=="length"||i&&(h=="offset"||h=="parent")||a&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||Rt(h,l)))&&c.push(h);return c}function Zi(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var Qi=Object.prototype,Vi=Qi.hasOwnProperty;function eo(e){if(!O(e))return Zi(e);var t=Lt(e),n=[];for(var r in e)r=="constructor"&&(t||!Vi.call(e,r))||n.push(r);return n}function Bt(e){return Ne(e)?Yi(e,!0):eo(e)}function to(e){return qi(e,Bt(e))}function no(e,t,n,r,i,a,s){var c=je(e,n),l=je(t,n),h=s.get(l);if(h){Le(e,n,h);return}var d=a?a(c,l,n+"",e,t,s):void 0,_=d===void 0;if(_){var A=$e(l),T=!A&&Dt(l),x=!A&&!T&&Gt(l);d=l,A||T||x?$e(c)?d=c:ti(c)?d=zr(c):T?(_=!1,d=Rr(l,!0)):x?(_=!1,d=Ur(l,!0)):d=[]:hi(l)||Pe(l)?(d=c,Pe(c)?d=to(c):(!O(c)||Ge(c))&&(d=Xr(l))):_=!1}_&&(s.set(l,d),i(d,l,r,a,s),s.delete(l)),Le(e,n,d)}function Ue(e,t,n,r,i){e!==t&&Fr(t,function(a,s){if(i||(i=new W),O(a))no(e,t,s,n,Ue,r,i);else{var c=r?r(je(e,s),a,s+"",e,t,i):void 0;c===void 0&&(c=a),Le(e,s,c)}},Bt)}function Nt(e,t,n,r,i,a){return O(e)&&O(t)&&(a.set(t,e),Ue(e,t,void 0,Nt,a),a.delete(t)),e}function ro(e,t,n){if(!O(n))return!1;var r=typeof t;return(r=="number"?Ne(n)&&Rt(t,n.length):r=="string"&&t in n)?me(n[t],e):!1}function io(e){return Ct(function(t,n){var r=-1,i=n.length,a=i>1?n[i-1]:void 0,s=i>2?n[2]:void 0;for(a=e.length>3&&typeof a=="function"?(i--,a):void 0,s&&ro(n[0],n[1],s)&&(a=i<3?void 0:a,i=1),t=Object(t);++r<i;){var c=n[r];c&&e(t,c,r,a)}return t})}var oo=io(function(e,t,n,r){Ue(e,t,n,r)});const ao=oo;var so=Ct(function(e){return e.push(void 0,Nt),_t(ao,void 0,e)});const co=so,Oe=Tt(en);let I=null;try{I={...Oe,...JSON.parse(localStorage.getItem("gameState"))},I.currentGame.date=new Date(I.currentGame.date),co(I,Oe)}catch{I={...Oe}}const ft=new pn(I,{get(...e){const t=Reflect.get(...e);return t!==null&&typeof t=="object"&&!(t instanceof Date)?this.nest(t):t},set(...e){const t=Reflect.set(...e);return localStorage.setItem("gameState",JSON.stringify(I)),t}});function dt(e,{currentGame:t,stats:n}){e.querySelector("#current-game-score").textContent=t.score.toLocaleString(),e.querySelector("#highest-score").textContent=n.highestScore.toLocaleString(),e.querySelector("#current-game-best-tile").textContent=t.highestTile.toLocaleString(),e.querySelector("#highest-tile").textContent=n.highestTile.toLocaleString()}function lo(e=1e3){return new Promise(t=>{setTimeout(t,e)})}const uo=document.querySelector("[data-score]"),pt=document.querySelector("[data-score-amount]");function gt(e=0,t=0){if(t>0){const n=document.createElement("div");n.textContent=`+${t.toLocaleString()}`,n.classList.add("additional-score"),uo.appendChild(n),Fe(n).then(()=>n.remove())}pt.textContent=e.toLocaleString(),xe(pt,"pop")}var H,$,j,v,S,g,oe,q,ae,De,se,Ie,ve,Ut;class ho{constructor({gameboardSelector:t,winningTile:n=2048,onWin:r=Vt}){u(this,ae);u(this,se);u(this,ve);u(this,H,!1);u(this,$,!1);u(this,j,void 0);u(this,v,void 0);u(this,S,void 0);u(this,g,void 0);u(this,oe,void 0);u(this,q,void 0);p(this,g,ft),p(this,j,document.querySelector(t)),p(this,S,new cn(m(this,ve,Ut).bind(this),o(this,j))),p(this,q,n),p(this,oe,r),p(this,$,ft.currentGame.highestTile>=n),o(this,$)&&r(n),Z.init({onShow:i=>{i.id==="stats-modal"&&dt(i,{...o(this,g)}),o(this,S).deactivate()},onClose:()=>{o(this,v).canMoveTilesAnyDirection()?o(this,S).activate():this.resetGame()}})}init(){if(!o(this,H)){const t=[],n=document.createDocumentFragment();p(this,v,new sn(o(this,j))),o(this,g).currentGame.tiles.forEach(r=>{const i=new Qe(r.value);i.x=r.x,i.y=r.y,o(this,v).cells[o(this,v).size*r.y+r.x].tile=i,n.appendChild(i.$ele),t.push(i.awaitTransition())}),o(this,j).appendChild(n),Promise.all(t).then(()=>{o(this,v).canMoveTilesAnyDirection()||!t.length?(this.createRandomTiles(t.length===0?2:0),o(this,S).activate()):m(this,se,Ie).call(this)}),gt(o(this,g).currentGame.score),p(this,H,!0)}return this}saveCurrentState(){const{tiles:t,highestTile:n}=o(this,v).cells.filter(r=>r.tile).reduce((r,i)=>(r.highestTile=Math.max(r.highestTile,i.tile.value),r.tiles.push({x:i.x,y:i.y,value:i.tile.value}),r),{tiles:[],highestTile:0});return o(this,g).currentGame.tiles=t,o(this,g).currentGame.highestTile=n,this}createRandomTiles(t=1){const n=[],r=document.createDocumentFragment();for(let i=0;i<t;i+=1){const a=o(this,v).randomEmptyCell();if(!a)break;const s=new Qe;a.tile=s,r.appendChild(s.$ele),n.push(s)}return o(this,j).appendChild(r),n}resetGame(){return o(this,g).currentGame={...Tt(vt)},p(this,H,!1),p(this,$,!1),this.init(),this}async moveTiles(t){switch(t.toLowerCase()){case L.ArrowUp:case L.W:if(!o(this,v).canMoveTilesUp())throw new N;return o(this,v).moveTilesUp();case L.ArrowDown:case L.S:if(!o(this,v).canMoveTilesDown())throw new N;return o(this,v).moveTilesDown();case L.ArrowLeft:case L.A:if(!o(this,v).canMoveTilesLeft())throw new N;return o(this,v).moveTilesLeft();case L.ArrowRight:case L.D:if(!o(this,v).canMoveTilesRight())throw new N;return o(this,v).moveTilesRight();default:throw new N}}}H=new WeakMap,$=new WeakMap,j=new WeakMap,v=new WeakMap,S=new WeakMap,g=new WeakMap,oe=new WeakMap,q=new WeakMap,ae=new WeakSet,De=async function(){o(this,S).deactivate(),o(this,g).stats.highestScore=Math.max(o(this,g).stats.highestScore,o(this,g).currentGame.score),o(this,g).stats.highestTile=Math.max(o(this,g).stats.highestTile,o(this,g).currentGame.highestTile),o(this,g).stats.lastTimePlayed=o(this,g).currentGame.date,m(this,se,Ie).call(this)},se=new WeakSet,Ie=async function(){await Promise.all(o(this,v).cells.map(async t=>(await lo(50*(t.x+t.y)),t.tile?t.tile.pop():null))),Z.show("stats-modal",{onShow:t=>dt(t,{...o(this,g)}),onClose:()=>this.resetGame()})},ve=new WeakSet,Ut=async function(t){try{const n=await this.moveTiles(t);n>0&&(o(this,g).currentGame.score+=n,gt(o(this,g).currentGame.score,n));const[r]=this.createRandomTiles(1);this.saveCurrentState(),!o(this,$)&&o(this,g).currentGame.highestTile===o(this,q)&&(o(this,oe).call(this,o(this,q)),p(this,$,!0)),o(this,v).canMoveTilesAnyDirection()?o(this,S).activate():r?r.awaitTransition().then(()=>m(this,ae,De).call(this)):m(this,ae,De).call(this)}catch(n){if(!(n instanceof N))throw n;o(this,v).canMoveTilesAnyDirection()&&o(this,S).activate()}};const fo=document.querySelector("#winning-tile"),zt=new ho({gameboardSelector:"#twenty-fourty-eight-gameboard",winningTile:2048,onWin:e=>Z.show("game-won-modal",{onShow:()=>{fo.textContent=e}})});zt.init();window.resetGame=e=>{e&&Z.close(e),zt.resetGame()}});export default po();