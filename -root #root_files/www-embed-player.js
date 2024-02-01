(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function fa(a){return a.raw=a}
function ia(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ka(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var oa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||oa});
var pa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},qa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=pa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ra;
if("function"==typeof Object.setPrototypeOf)ra=Object.setPrototypeOf;else{var sa;a:{var ta={a:!0},ua={};try{ua.__proto__=ta;sa=ua.a;break a}catch(a){}sa=!1}ra=sa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=ra;
function x(a,b){a.prototype=pa(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.za=b.prototype}
function wa(){this.A=!1;this.v=null;this.i=void 0;this.h=1;this.m=this.l=0;this.P=this.j=null}
function xa(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
wa.prototype.D=function(a){this.i=a};
function ya(a,b){a.j={exception:b,nd:!0};a.h=a.l||a.m}
wa.prototype.return=function(a){this.j={return:a};this.h=this.m};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.B=function(a){this.h=a};
function za(a,b,c){a.l=b;void 0!=c&&(a.m=c)}
function Aa(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.nd?a.h=a.l||a.m:void 0!=b.B&&a.m<b.B?(a.h=b.B,a.j=null):a.h=a.m:a.h=0}
function Ca(a){this.h=new wa;this.i=a}
function Da(a,b){xa(a.h);var c=a.h.v;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.v,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.v=null,ya(a.h,g),Fa(a)}a.h.v=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.nd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){xa(a.h);a.h.v?b=Ea(a,a.h.v.next,b,a.h.D):(a.h.D(b),b=Fa(a));return b};
this.throw=function(b){xa(a.h);a.h.v?b=Ea(a,a.h.v["throw"],b,a.h.D):(ya(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function z(a){return Ha(new Ga(new Ca(a)))}
function A(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return qa});
u("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.v()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.v=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.ba),reject:g(this.v)}};
b.prototype.ba=function(g){if(g===this)this.v(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.X(g):this.m(g)}};
b.prototype.X=function(g){var h=void 0;try{h=g.then}catch(k){this.v(k);return}"function"==typeof h?this.ha(h,g):this.m(g)};
b.prototype.v=function(g){this.D(2,g)};
b.prototype.m=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ea();this.P()};
b.prototype.ea=function(){var g=this;e(function(){if(g.T()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.T=function(){if(this.A)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.P=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.fa=function(g){var h=this.l();g.Ub(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,r){return"function"==typeof t?function(w){try{l(t(w))}catch(y){n(y)}}:r}
var l,n,p=new b(function(t,r){l=t;n=r});
this.Ub(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ub=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Ub(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(w){return function(y){t[w]=y;r--;0==r&&l(t)}}
var t=[],r=0;do t.push(void 0),r++,d(k.value).Ub(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&la(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ia(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Object.setPrototypeOf",function(a){return a||va});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ja(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return Ja(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ja(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ia(this,b,"includes").indexOf(b,c||0)}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Array.prototype.entries",function(a){return a?a:function(){return Ja(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||da});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ka=Ka||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function La(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return null!=a?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Ua=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa:Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Wa(){return Date.now()}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.za=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function hb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function ib(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function lb(a){var b=mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function nb(a){for(var b in a)return!1;return!0}
function ob(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function pb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function tb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var wb;function xb(){if(void 0===wb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){C.console&&C.console.error(c.message)}wb=a}else wb=a}return wb}
;function yb(a,b){this.h=a===zb&&b||""}
yb.prototype.toString=function(){return this.h};
function Ab(a){return new yb(zb,a)}
var zb={};Ab("");function Bb(a){this.h=a}
Bb.prototype.toString=function(){return this.h+""};
function Cb(a){if(a instanceof Bb&&a.constructor===Bb)return a.h;Ma(a);return"type_error:TrustedResourceUrl"}
var Db={};function Eb(a){var b=xb();a=b?b.createScriptURL(a):a;return new Bb(a,Db)}
;function Fb(a){this.h=a}
Fb.prototype.toString=function(){return this.h.toString()};
var Gb={},Hb=new Fb("about:invalid#zClosurez",Gb);var Ib=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var Jb=La(610401301,!1),Kb=La(572417392,!0);function Lb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Mb,Nb=C.navigator;Mb=Nb?Nb.userAgentData||null:null;function Ob(a){return Jb?Mb?Mb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Lb().indexOf(a)}
;function Pb(){return Jb?!!Mb&&0<Mb.brands.length:!1}
function Qb(){return Pb()?!1:F("Opera")}
function Rb(){return Pb()?!1:F("Trident")||F("MSIE")}
function Sb(){return F("Firefox")||F("FxiOS")}
function Tb(){return Pb()?Ob("Chromium"):(F("Chrome")||F("CriOS"))&&!(Pb()?0:F("Edge"))||F("Silk")}
;function Ub(a){this.h=a}
Ub.prototype.toString=function(){return this.h.toString()};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Vb={};function Wb(){}
Wb.prototype.toString=function(){return this.ud.toString()};function Xb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Yb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zb(a){return a?decodeURI(a):a}
function $b(a,b){return b.match(Yb)[a]||null}
function ac(a){return Zb($b(3,a))}
function bc(a){var b=a.match(Yb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function cc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function dc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)dc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ec(a){var b=[],c;for(c in a)dc(c,a[c],b);return b.join("&")}
function fc(a,b){b=ec(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function hc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var ic=/#|$/,jc=/[?&]($|#)/;function kc(a,b){for(var c=a.search(ic),d=0,e,f=[];0<=(e=hc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(jc,"$1")}
;function lc(a){this.h=a}
;function mc(a,b,c){this.j=a;this.v=b;this.i=c||[];this.h=new Map}
m=mc.prototype;m.Od=function(a){var b=A.apply(1,arguments),c=this.wc(b);c?c.push(new lc(a)):this.Bd(a,b)};
m.Bd=function(a){var b=this.getKey(A.apply(1,arguments));this.h.set(b,[new lc(a)])};
m.wc=function(){var a=this.getKey(A.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
m.ge=function(){var a=this.wc(A.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.h.clear()};
m.getKey=function(){var a=A.apply(0,arguments);return a?a.join(","):"key"};function nc(a,b){mc.call(this,a,3,b)}
x(nc,mc);nc.prototype.l=function(a){var b=A.apply(1,arguments),c=0,d=this.ge(b);d&&(c=d.h);this.Bd(c+a,b)};function oc(a,b){mc.call(this,a,2,b)}
x(oc,mc);oc.prototype.record=function(a){this.Od(a,A.apply(1,arguments))};function pc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function qc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?qc.apply(null,d):pc(d)}}
;function K(){this.ob=this.ob;this.v=this.v}
m=K.prototype;m.ob=!1;m.Z=function(){return this.ob};
m.dispose=function(){this.ob||(this.ob=!0,this.S())};
function rc(a,b){a.addOnDisposeCallback(Va(pc,b))}
m.addOnDisposeCallback=function(a,b){this.ob?void 0!==b?a.call(b):a():(this.v||(this.v=[]),this.v.push(void 0!==b?Ua(a,b):a))};
m.S=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function sc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
sc.prototype.stopPropagation=function(){this.j=!0};
sc.prototype.preventDefault=function(){this.defaultPrevented=!0};function tc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=uc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,vc[c])c=vc[c];else{c=String(c);if(!vc[c]){var f=/function\s+([^\(]+)/m.exec(c);vc[c]=f?f[1]:"[Anonymous]"}c=vc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function uc(a,b){b||(b={});b[wc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[wc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=uc(a,b));return c}
function wc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var vc={};var xc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function yc(){return Jb?!!Mb&&!!Mb.platform:!1}
function zc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Ac(a){Ac[" "](a);return a}
Ac[" "]=function(){};var Bc=Qb(),Cc=Rb(),Dc=F("Edge"),Ec=F("Gecko")&&!(-1!=Lb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Fc=-1!=Lb().toLowerCase().indexOf("webkit")&&!F("Edge");Fc&&F("Mobile");yc()||F("Macintosh");yc()||F("Windows");(yc()?"Linux"===Mb.platform:F("Linux"))||yc()||F("CrOS");var Gc=yc()?"Android"===Mb.platform:F("Android");zc();F("iPad");F("iPod");zc()||F("iPad")||F("iPod");Lb().toLowerCase().indexOf("kaios");
function Hc(){var a=C.document;return a?a.documentMode:void 0}
var Ic;a:{var Jc="",Kc=function(){var a=Lb();if(Ec)return/rv:([^\);]+)(\)|;)/.exec(a);if(Dc)return/Edge\/([\d\.]+)/.exec(a);if(Cc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Fc)return/WebKit\/(\S+)/.exec(a);if(Bc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Kc&&(Jc=Kc?Kc[1]:"");if(Cc){var Lc=Hc();if(null!=Lc&&Lc>parseFloat(Jc)){Ic=String(Lc);break a}}Ic=Jc}var Oc=Ic,Pc;if(C.document&&Cc){var Qc=Hc();Pc=Qc?Qc:parseInt(Oc,10)||void 0}else Pc=void 0;var Rc=Pc;function Sc(a,b){sc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Xa(Sc,sc);var Tc={2:"touch",3:"pen",4:"mouse"};
Sc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Ec){a:{try{Ac(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Tc[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Sc.za.preventDefault.call(this)};
Sc.prototype.stopPropagation=function(){Sc.za.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Sc.prototype.preventDefault=function(){Sc.za.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Uc="closure_listenable_"+(1E6*Math.random()|0);var Vc=0;function Wc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Yb=e;this.key=++Vc;this.Lb=this.Tb=!1}
function Xc(a){a.Lb=!0;a.listener=null;a.proxy=null;a.src=null;a.Yb=null}
;function Yc(a){this.src=a;this.listeners={};this.h=0}
Yc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Zc(a,b,d,e);-1<g?(b=a[g],c||(b.Tb=!1)):(b=new Wc(b,this.src,f,!!d,e),b.Tb=c,a.push(b));return b};
Yc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Zc(e,b,c,d);return-1<b?(Xc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function $c(a,b){var c=b.type;c in a.listeners&&ib(a.listeners[c],b)&&(Xc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Zc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Lb&&f.listener==b&&f.capture==!!c&&f.Yb==d)return e}return-1}
;var ad="closure_lm_"+(1E6*Math.random()|0),bd={},cd=0;function dd(a,b,c,d,e){if(d&&d.once)ed(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)dd(a,b[f],c,d,e);else c=fd(c),a&&a[Uc]?a.listen(b,c,Oa(d)?!!d.capture:!!d,e):gd(a,b,c,!1,d,e)}
function gd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=hd(a);h||(a[ad]=h=new Yc(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=id();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)xc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(jd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");cd++}}
function id(){function a(c){return b.call(a.src,a.listener,c)}
var b=kd;return a}
function ed(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ed(a,b[f],c,d,e);else c=fd(c),a&&a[Uc]?a.h.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):gd(a,b,c,!0,d,e)}
function ld(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ld(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=fd(c),a&&a[Uc])?a.h.remove(String(b),c,d,e):a&&(a=hd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Zc(b,c,d,e)),(c=-1<a?b[a]:null)&&md(c))}
function md(a){if("number"!==typeof a&&a&&!a.Lb){var b=a.src;if(b&&b[Uc])$c(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(jd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);cd--;(c=hd(b))?($c(c,a),0==c.h&&(c.src=null,b[ad]=null)):Xc(a)}}}
function jd(a){return a in bd?bd[a]:bd[a]="on"+a}
function kd(a,b){if(a.Lb)a=!0;else{b=new Sc(b,this);var c=a.listener,d=a.Yb||a.src;a.Tb&&md(a);a=c.call(d,b)}return a}
function hd(a){a=a[ad];return a instanceof Yc?a:null}
var nd="__closure_events_fn_"+(1E9*Math.random()>>>0);function fd(a){if("function"===typeof a)return a;a[nd]||(a[nd]=function(b){return a.handleEvent(b)});
return a[nd]}
;function od(){K.call(this);this.h=new Yc(this);this.Za=this;this.fa=null}
Xa(od,K);od.prototype[Uc]=!0;m=od.prototype;m.addEventListener=function(a,b,c,d){dd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){ld(this,a,b,c,d)};
function pd(a,b){var c=a.fa;if(c){var d=[];for(var e=1;c;c=c.fa)d.push(c),++e}a=a.Za;c=b.type||b;"string"===typeof b?b=new sc(b,a):b instanceof sc?b.target=b.target||a:(e=b,b=new sc(c,a),vb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=qd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=qd(g,c,!0,b)&&e,b.j||(e=qd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=qd(g,c,!1,b)&&e}
m.S=function(){od.za.S.call(this);this.removeAllListeners();this.fa=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Xc(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function qd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Lb&&g.capture==c){var h=g.listener,k=g.Yb||g.src;g.Tb&&$c(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function rd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
rd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function sd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function td(a,b){return a+Math.random()*(b-a)}
;function ud(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=ud.prototype;m.clone=function(){return new ud(this.x,this.y)};
m.equals=function(a){return a instanceof ud&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function vd(a,b){this.width=a;this.height=b}
m=vd.prototype;m.clone=function(){return new vd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function wd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function xd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function yd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var zd;function Ad(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=xd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ua(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Rb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.bd;c.bd=null;e()}};
return function(e){d.next={bd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Bd(a){C.setTimeout(function(){throw a;},0)}
;function Cd(){this.i=this.h=null}
Cd.prototype.add=function(a,b){var c=Dd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Cd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Dd=new rd(function(){return new Ed},function(a){return a.reset()});
function Ed(){this.next=this.scope=this.h=null}
Ed.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Ed.prototype.reset=function(){this.next=this.scope=this.h=null};var Fd,Gd=!1,Hd=new Cd;function Id(a,b){Fd||Jd();Gd||(Fd(),Gd=!0);Hd.add(a,b)}
function Jd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Fd=function(){a.then(Kd)}}else Fd=function(){var b=Kd;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Pb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(zd||(zd=Ad()),zd(b)):C.setImmediate(b)}}
function Kd(){for(var a;a=Hd.remove();){try{a.h.call(a.scope)}catch(b){Bd(b)}sd(Dd,a)}Gd=!1}
;function Ld(a){this.h=0;this.A=void 0;this.l=this.i=this.j=null;this.v=this.m=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){Md(b,2,c)},function(c){Md(b,3,c)})}catch(c){Md(this,3,c)}}
function Nd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Nd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Od=new rd(function(){return new Nd},function(a){a.reset()});
function Pd(a,b,c){var d=Od.get();d.i=a;d.h=b;d.context=c;return d}
function Qd(a){return new Ld(function(b,c){c(a)})}
Ld.prototype.then=function(a,b,c){return Rd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ld.prototype.$goog_Thenable=!0;m=Ld.prototype;m.mc=function(a,b){return Rd(this,null,a,b)};
m.catch=Ld.prototype.mc;m.cancel=function(a){if(0==this.h){var b=new Sd(a);Id(function(){Td(this,b)},this)}};
function Td(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Td(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Ud(c),Vd(c,e,3,b)))}a.j=null}else Md(a,3,b)}
function Wd(a,b){a.i||2!=a.h&&3!=a.h||Xd(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Rd(a,b,c,d){var e=Pd(null,null,null);e.child=new Ld(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Sd?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Wd(a,e);return e.child}
m.ef=function(a){this.h=0;Md(this,2,a)};
m.ff=function(a){this.h=0;Md(this,3,a)};
function Md(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.ef,f=a.ff;if(d instanceof Ld){Wd(d,Pd(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Oa(d))try{var k=d.then;if("function"===typeof k){Yd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.h=b,a.j=null,Xd(a),3!=b||c instanceof Sd||Zd(a,c))}}
function Yd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Xd(a){a.m||(a.m=!0,Id(a.ae,a))}
function Ud(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.ae=function(){for(var a;a=Ud(this);)Vd(this,a,this.h,this.A);this.m=!1};
function Vd(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.v;a=a.j)a.v=!1;if(b.child)b.child.j=null,$d(b,c,d);else try{b.j?b.i.call(b.context):$d(b,c,d)}catch(e){ae.call(null,e)}sd(Od,b)}
function $d(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Zd(a,b){a.v=!0;Id(function(){a.v&&ae.call(null,b)})}
var ae=Bd;function Sd(a){Za.call(this,a)}
Xa(Sd,Za);Sd.prototype.name="cancel";function ce(a,b){od.call(this);this.j=a||1;this.i=b||C;this.l=Ua(this.cf,this);this.m=Wa()}
Xa(ce,od);m=ce.prototype;m.enabled=!1;m.Ea=null;m.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
m.cf=function(){if(this.enabled){var a=Wa()-this.m;0<a&&a<.8*this.j?this.Ea=this.i.setTimeout(this.l,this.j-a):(this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null),pd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.i.setTimeout(this.l,this.j),this.m=Wa())};
m.stop=function(){this.enabled=!1;this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null)};
m.S=function(){ce.za.S.call(this);this.stop();delete this.i};
function de(a,b,c){if("function"===typeof a)c&&(a=Ua(a,c));else if(a&&"function"==typeof a.handleEvent)a=Ua(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function ee(a){K.call(this);this.D=a;this.j=0;this.l=100;this.m=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new ce(this.flushInterval);this.h.listen("tick",this.Pa,!1,this);rc(this,this.h)}
x(ee,K);m=ee.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function fe(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.Pa()}
m.Pa=function(){var a=this.i.values();a=[].concat(ka(a)).filter(function(b){return b.h.size});
a.length&&this.D.flush(a,this.m);ge(a);this.j=0;this.h.enabled&&this.h.stop()};
m.qc=function(a){var b=A.apply(1,arguments);this.i.has(a)||this.i.set(a,new nc(a,b))};
m.Wc=function(a){var b=A.apply(1,arguments);this.i.has(a)||this.i.set(a,new oc(a,b))};
function he(a,b){return a.A.has(b)?void 0:a.i.get(b)}
m.nc=function(a){this.Nd.apply(this,[a,1].concat(ka(A.apply(1,arguments))))};
m.Nd=function(a,b){var c=A.apply(2,arguments),d=he(this,a);d&&d instanceof nc&&(d.l(b,c),fe(this))};
m.record=function(a,b){var c=A.apply(2,arguments),d=he(this,a);d&&d instanceof oc&&(d.record(b,c),fe(this))};
function ge(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function ie(a){this.h=a;this.h.qc("/client_streamz/bg/fic",{Ba:3,Aa:"ke"})}
function je(a){this.h=a;this.h.qc("/client_streamz/bg/fiec",{Ba:3,Aa:"rk"},{Ba:3,Aa:"ke"},{Ba:2,Aa:"ec"},{Ba:3,Aa:"em"})}
function ke(a){this.h=a;this.h.Wc("/client_streamz/bg/fil",{Ba:3,Aa:"rk"},{Ba:3,Aa:"ke"})}
ke.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function le(a){this.h=a;this.h.qc("/client_streamz/bg/fsc",{Ba:3,Aa:"rk"},{Ba:3,Aa:"ke"})}
function me(a){this.h=a;this.h.Wc("/client_streamz/bg/fsl",{Ba:3,Aa:"rk"},{Ba:3,Aa:"ke"})}
me.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};var ne={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function oe(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=pe(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=qe(a,h),d+=qe(a,h+4),e+=qe(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return ne.toString(e)}
function pe(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function qe(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Sb();var re=zc()||F("iPod"),se=F("iPad");!F("Android")||Tb()||Sb()||Qb()||F("Silk");Tb();var te=F("Safari")&&!(Tb()||(Pb()?0:F("Coast"))||Qb()||(Pb()?0:F("Edge"))||(Pb()?Ob("Microsoft Edge"):F("Edg/"))||(Pb()?Ob("Opera"):F("OPR"))||Sb()||F("Silk")||F("Android"))&&!(zc()||F("iPad")||F("iPod"));var ue={},ve=null;function we(a,b){Na(a);void 0===b&&(b=0);xe();b=ue[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function ye(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;ze(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function ze(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=ve[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
xe();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function xe(){if(!ve){ve={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));ue[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===ve[f]&&(ve[f]=e)}}}}
;var Ae="undefined"!==typeof Uint8Array,Be=!Cc&&"function"===typeof btoa;function Ce(a){if(!Be)return we(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var De=/[-_.]/g,Ee={"-":"+",_:"/",".":"="};function Fe(a){return Ee[a]||""}
function Ge(a){return Ae&&null!=a&&a instanceof Uint8Array}
var He={};var Ie;function Je(a){if(a!==He)throw Error("illegal external caller");}
function Ke(a,b){Je(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Ke.prototype.sizeBytes=function(){Je(He);var a=this.h;if(null!=a&&!Ge(a))if("string"===typeof a)if(Be){De.test(a)&&(a=a.replace(De,Fe));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=ye(a);else Ma(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};function Le(){return"function"===typeof BigInt}
var Me=!Kb,Ne=!Kb;function Oe(a){return Array.prototype.slice.call(a)}
;var Pe;Pe="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ka(Object.values({If:1,Gf:2,Ff:4,Lf:8,Kf:16,Jf:32,wf:64,Nf:128,Ef:256,Df:512,Hf:1024,Bf:2048,Mf:4096,Cf:8192})));var Qe=Pe?function(a,b){a[Pe]|=b}:function(a,b){void 0!==a.Sa?a.Sa|=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Re(a){var b=Se(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Oe(a)),Te(a,b|1))}
function Ue(a,b,c){return c?a|b:a&~b}
var Se=Pe?function(a){return a[Pe]|0}:function(a){return a.Sa|0},Ve=Pe?function(a){return a[Pe]}:function(a){return a.Sa},Te=Pe?function(a,b){a[Pe]=b;
return a}:function(a,b){void 0!==a.Sa?a.Sa=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function We(){var a=[];Qe(a,1);return a}
function Xe(a,b){Te(b,(a|0)&-14591)}
function Ye(a,b){Te(b,(a|34)&-14557)}
function Ze(a){a=a>>14&1023;return 0===a?536870912:a}
;var $e={},af={};function bf(a){return!(!a||"object"!==typeof a||a.h!==af)}
function cf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var df,ef=!Kb;function ff(a,b){if(null==a){if(!b)throw Error();}else if("string"===typeof a)a=a?new Ke(a,He):Ie||(Ie=new Ke(null,He));else if(a.constructor!==Ke)if(Ge(a))a=a.length?new Ke(new Uint8Array(a),He):Ie||(Ie=new Ke(null,He));else throw Error();return a}
function gf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=Se(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;Te(a,d|1);return!0}
var hf,jf=[];Te(jf,55);hf=Object.freeze(jf);function kf(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});var lf=0,mf=0;function nf(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=v(of(c,a)),b=c.next().value,a=c.next().value,c=b);lf=c>>>0;mf=a>>>0}
function pf(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Le()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+qf(c)+qf(a));return c}
function qf(a){a=String(a);return"0000000".slice(a.length)+a}
function rf(){var a=lf,b=mf;b&2147483648?Le()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=v(of(a,b)),a=b.next().value,b=b.next().value,a="-"+pf(a,b)):a=pf(a,b);return a}
function of(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function sf(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a}
;function tf(a){return a.displayName||a.name||"unknown type name"}
function uf(a){if(null!=a&&"boolean"!==typeof a)throw Error("Expected boolean but got "+Ma(a)+": "+a);return a}
var vf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function wf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:vf.test(a)}
function xf(a){if(null!=a){if("number"!==typeof a)throw sf("int32");if(!Number.isFinite(a))throw sf("int32");a|=0}return a}
function yf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}
function zf(a){if(null!=a){var b=!!b;if(!wf(a))throw sf("int64");a="string"===typeof a?Af(a):b?Bf(a):Cf(a)}return a}
function Df(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Cf(a){wf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){nf(a);var b=lf,c=mf;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Bf(a){wf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Df(b)?a=b:(nf(a),a=rf())}return a}
function Af(a){wf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));a.indexOf(".");if(!Df(a)){if(16>a.length)nf(Number(a));else if(Le())a=BigInt(a),lf=Number(a&BigInt(4294967295))>>>0,mf=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);mf=lf=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),mf*=1E6,lf=1E6*lf+d,4294967296<=lf&&(mf+=Math.trunc(lf/4294967296),mf>>>=0,lf>>>=0);b&&(b=v(of(lf,mf)),
a=b.next().value,b=b.next().value,lf=a,mf=b)}a=rf()}return a}
function Ef(a){if("string"!==typeof a)throw Error();return a}
function Ff(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Gf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+tf(b)+" but got "+(a&&tf(a.constructor)));}
function Hf(a,b,c){if(null!=a&&"object"===typeof a&&a.Ic===$e)return a;if(Array.isArray(a)){var d=Se(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Te(a,e);return new b(a)}}
;var If;function Jf(a,b){Se(b);If=b;a=new a(b);If=void 0;return a}
function Kf(a,b,c){null==a&&(a=If);If=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=Se(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1;if(cf(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}Te(a,d);return a}
;function Lf(a,b){return Mf(b)}
function Mf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return ef||!gf(a,void 0,9999)?a:void 0;if(Ge(a))return Ce(a);if(a instanceof Ke){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=Ce(b)}}}return a}
;function Nf(a,b,c){a=Oe(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Of(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Se(a)&1?void 0:f&&Se(a)&2?a:Pf(a,b,c,void 0!==d,e,f);else if(cf(a)){var g={},h;for(h in a)g[h]=Of(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Pf(a,b,c,d,e,f){var g=d||c?Se(a):0;d=d?!!(g&32):void 0;a=Oe(a);for(var h=0;h<a.length;h++)a[h]=Of(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Qf(a){return a.Ic===$e?a.toJSON():Mf(a)}
;function Rf(a,b,c){c=void 0===c?Ye:c;if(null!=a){if(Ae&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Se(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?Te(a,(d|34)&-12293):Pf(a,Rf,d&4?Ye:c,!0,!1,!0)}a.Ic===$e&&(c=a.F,d=Ve(c),a=d&2?a:Jf(a.constructor,Sf(c,d,!0)));return a}}
function Sf(a,b,c){var d=c||b&2?Ye:Xe,e=!!(b&32);a=Nf(a,b,function(f){return Rf(f,e,d)});
Qe(a,32|(c?2:0));return a}
function Tf(a){var b=a.F,c=Ve(b);return c&2?Jf(a.constructor,Sf(b,c,!1)):a}
;function Uf(a,b){a=a.F;return Vf(a,Ve(a),b)}
function Vf(a,b,c,d){if(-1===c)return null;if(c>=Ze(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function Wf(a,b,c){var d=a.F,e=Ve(d);kf(e);Xf(d,e,b,c);return a}
function Xf(a,b,c,d,e){cf(d);var f=Ze(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&Te(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Yf(a){return void 0!==Zf(a,$f,11,!1)}
function ag(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function bg(a,b,c,d){var e=a.F,f=Ve(e);kf(f);if(null==c)return Xf(e,f,b),a;if(!Array.isArray(c))throw sf();var g=Se(c),h=g,k=!!(2&g)||Object.isFrozen(c),l=!k&&!1;if(!(4&g))for(g=21,k&&(c=Oe(c),h=0,g=cg(g,f,!0)),k=0;k<c.length;k++)c[k]=d(c[k]);l&&(c=Oe(c),h=0,g=cg(g,f,!0));g!==h&&Te(c,g);Xf(e,f,b,c);return a}
function dg(a,b,c,d){a=a.F;var e=Ve(a);kf(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=Vf(a,f,k)&&(0!==g&&(f=Xf(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=Xf(a,e,c));Xf(a,e,b,d)}
function Zf(a,b,c,d){a=a.F;var e=Ve(a),f=Vf(a,e,c,d);b=Hf(f,b,e);b!==f&&null!=b&&Xf(a,e,c,b,d);return b}
function eg(a,b,c,d){d=void 0===d?!1:d;b=Zf(a,b,c,d);if(null==b)return b;a=a.F;var e=Ve(a);if(!(e&2)){var f=Tf(b);f!==b&&(b=f,Xf(a,e,c,b,d))}return b}
function fg(a,b,c,d){null!=d?Gf(d,b):d=void 0;return Wf(a,c,d)}
function gg(a,b,c,d){var e=a.F,f=Ve(e);kf(f);if(null==d)return Xf(e,f,c),a;if(!Array.isArray(d))throw sf();for(var g=Se(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,t=!0,r=0;r<d.length;r++){var w=d[r];Gf(w,b);k||(w=!!(Se(w.F)&2),p&&(p=!w),t&&(t=w))}k||(g=Ue(g,5,!0),g=Ue(g,8,p),g=Ue(g,16,t));if(n||l&&g!==h)d=Oe(d),h=0,g=cg(g,f,!0);g!==h&&Te(d,g);Xf(e,f,c,d);return a}
function cg(a,b,c){a=Ue(a,2,!!(2&b));a=Ue(a,32,!!(32&b)&&c);return a=Ue(a,2048,!1)}
function hg(a,b){a=Uf(a,b);var c;null==a?c=a:wf(a)?"number"===typeof a?c=Cf(a):c=Af(a):c=void 0;return c}
function ig(a){a=Uf(a,1);var b=void 0===b?!1:b;b=null==a?a:wf(a)?"string"===typeof a?Af(a):b?Bf(a):Cf(a):void 0;return b}
function jg(a){a=Uf(a,1);return null==a?a:Number.isFinite(a)?a|0:void 0}
function kg(a){return ff(a,!1)}
function lg(a,b,c){return Wf(a,b,Ff(c))}
function mg(a,b,c){if(null!=c){if(!Number.isFinite(c))throw sf("enum");c|=0}return Wf(a,b,c)}
;function ng(a,b,c){this.F=Kf(a,b,c)}
m=ng.prototype;m.toJSON=function(){if(df)var a=og(this,this.F,!1);else a=Pf(this.F,Qf,void 0,void 0,!1,!1),a=og(this,a,!0);return a};
m.serialize=function(){df=!0;try{return JSON.stringify(this.toJSON(),Lf)}finally{df=!1}};
function pg(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Qe(b,32);return Jf(a,b)}
m.clone=function(){var a=this.F,b=Ve(a);return Jf(this.constructor,Sf(a,b,!1))};
m.Ic=$e;m.toString=function(){return og(this,this.F,!1).toString()};
function og(a,b,c){var d=a.constructor.Ua,e=Ve(c?a.F:b),f=Ze(e),g=!1;if(d&&ef){if(!c){b=Oe(b);var h;if(b.length&&cf(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=Ve(a.F);a=Ze(h);h=+!!(h&512)-1;for(var k,l,n=0;n<d.length;n++)if(l=d[n],l<a){l+=h;var p=f[l];null==p?f[l]=c?hf:We():c&&p!==hf&&Re(p)}else k||(p=void 0,f.length&&cf(p=f[f.length-1])?k=p:f.push(k={})),p=k[l],null==k[l]?k[l]=c?hf:We():c&&p!==hf&&Re(p)}k=b.length;if(!k)return b;var t;
if(cf(f=b[k-1])){a:{var r=f;c={};a=!1;for(var w in r){h=r[w];if(Array.isArray(h)){n=h;if(!Ne&&gf(h,d,+w)||!Me&&bf(h)&&0===h.size)h=null;h!=n&&(a=!0)}null!=h?c[w]=h:a=!0}if(a){for(var y in c){r=c;break a}r=null}}r!=f&&(t=!0);k--}for(e=+!!(e&512)-1;0<k;k--){w=k-1;f=b[w];if(!(null==f||!Ne&&gf(f,d,w-e)||!Me&&bf(f)&&0===f.size))break;var B=!0}if(!t&&!B)return b;var G;g?G=b:G=Array.prototype.slice.call(b,0,k);b=G;g&&(b.length=k);r&&b.push(r);return b}
;function qg(a){this.F=Kf(a)}
x(qg,ng);var rg=[1,2,3];function sg(a){this.F=Kf(a)}
x(sg,ng);var tg=[1,2,3];function ug(a){this.F=Kf(a)}
x(ug,ng);ug.Ua=[1];function vg(a){this.F=Kf(a)}
x(vg,ng);vg.Ua=[3,6,4];function wg(a){this.F=Kf(a)}
x(wg,ng);wg.Ua=[1];function xg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function yg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var w=e[1],y=e[2],B=e[3],G=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var J=B^w&(y^B);var H=1518500249}else J=w^y^B,H=1859775393;else 60>r?(J=w&y|B&(w|y),H=2400959708):(J=w^y^B,H=3395469782);J=((p<<5|p>>>27)&4294967295)+J+G+H+t[r]&4294967295;G=B;B=y;y=(w<<30|w>>>2)&4294967295;w=p;p=J}e[0]=e[0]+p&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+B&4294967295;e[4]=e[4]+G&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],w=0,y=p.length;w<y;++w)r.push(p.charCodeAt(w));p=r}t||(t=p.length);r=0;if(0==l)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var w=24;0<=w;w-=8)p[t++]=e[r]>>w&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Wd:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function zg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Ag(xg(d),a,c||null)].join(" "):null}
function Ag(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),Bg(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=Bg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Bg(a){var b=yg();b.update(a);return b.Wd().toLowerCase()}
;var Cg={};function Dg(a){this.h=a||{cookie:""}}
m=Dg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{dc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ig;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.dc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ib(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{dc:0,path:b,domain:c});return d};
m.zc=function(){return Eg(this).keys};
m.clear=function(){for(var a=Eg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Eg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Ib(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Fg=new Dg("undefined"==typeof document?null:document);function Gg(a){return!!Cg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Hg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Gg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Dg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Gg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Ig(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Dg(document)).get(b));return a?zg(a,c,d):null}
function Jg(a,b){b=void 0===b?!1:b;var c=xg(String(C.location.href)),d=[];if(Hg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new Dg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?zg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Gg(b)&&((b=Ig("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Ig("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function Kg(a){this.F=Kf(a)}
x(Kg,ng);Kg.Ua=[2];function Lg(a){od.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Wa()};
this.j=this.i()}
x(Lg,od);Lg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Lg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
Lg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Lg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),pd(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Mg(a){this.F=Kf(a)}
x(Mg,ng);function Ng(a){this.F=Kf(a)}
x(Ng,ng);function Og(a){this.h=this.i=this.j=a}
Og.prototype.reset=function(){this.h=this.i=this.j};
Og.prototype.getValue=function(){return this.i};function Pg(a){this.F=Kf(a)}
x(Pg,ng);Pg.prototype.Ac=function(){return jg(this)};function Qg(a){this.F=Kf(a)}
x(Qg,ng);function Rg(a){this.F=Kf(a)}
x(Rg,ng);function Sg(a,b){gg(a,Qg,1,b)}
Rg.Ua=[1];function $f(a){this.F=Kf(a)}
x($f,ng);var Tg=["platform","platformVersion","architecture","model","uaFullVersion"],Ug=new Rg,Vg=null;function Wg(a,b){b=void 0===b?Tg:b;if(!Vg){var c;a=null==(c=a.navigator)?void 0:c.userAgentData;if(!a||"function"!==typeof a.getHighEntropyValues)return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(d){var e=new Qg;e=lg(e,1,d.brand);return lg(e,2,d.version)});
Sg(Wf(Ug,2,uf(a.mobile)),c);Vg=a.getHighEntropyValues(b)}return Vg.then(function(d){var e=Ug.clone();b.includes("platform")&&lg(e,3,d.platform);b.includes("platformVersion")&&lg(e,4,d.platformVersion);b.includes("architecture")&&lg(e,5,d.architecture);b.includes("model")&&lg(e,6,d.model);b.includes("uaFullVersion")&&lg(e,7,d.uaFullVersion);return e}).catch(function(){return Ug.clone()})}
;function Xg(a){this.F=Kf(a)}
x(Xg,ng);function Yg(a){this.F=Kf(a,4)}
x(Yg,ng);function Zg(a){this.F=Kf(a,35)}
x(Zg,ng);Zg.Ua=[3,20,27];function $g(a){this.F=Kf(a,19)}
x($g,ng);$g.prototype.Mb=function(a){return mg(this,2,a)};
$g.Ua=[3,5];function ah(a){this.F=Kf(a,7)}
x(ah,ng);var bh=function(a){return function(b){return pg(a,b)}}(ah);
ah.Ua=[5,6];function ch(a){this.F=Kf(a)}
x(ch,ng);var dh=new function(a,b){this.h=a;this.ctor=b;this.isRepeated=0;this.i=eg;this.defaultValue=void 0}(175237375,ch);function eh(a){K.call(this);var b=this;this.componentId="";this.j=[];this.fa="";this.ha=this.X=-1;this.ba=!1;this.A=this.experimentIds=null;this.T=this.m=0;this.sa=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Fb=a.Fb||function(){};
this.i=new fh(a.logSource,a.eb);this.network=a.network;this.Kb=a.Kb||null;this.bufferSize=1E3;this.Fa=Va(td,0,1);this.P=a.gf||null;this.sessionIndex=a.sessionIndex||null;this.Db=a.Db||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.ed;this.eb=a.eb||!1;this.ea="undefined"!==typeof URLSearchParams;var c=mg(new Xg,1,1);gh(this.i,c);this.l=new Og(1E4);this.h=new Lg(this.l.getValue());a=hh(this,a.Xc);dd(this.h,"tick",a,!1,this);this.D=new Lg(6E5);dd(this.D,"tick",a,!1,this);this.Db||
this.D.start();this.eb||(dd(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.uc()}),dd(document,"pagehide",this.uc,!1,this))}
x(eh,K);function hh(a,b){return a.ea?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
m=eh.prototype;m.S=function(){this.uc();this.h.stop();this.D.stop();K.prototype.S.call(this)};
function ih(a,b){a.l=new Og(1>b?1:b);a.h.setInterval(a.l.getValue())}
m.log=function(a){a=a.clone();var b=this.sa++;a=Wf(a,21,zf(b));this.componentId&&lg(a,26,this.componentId);if(!ig(a)){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";Wf(b,1,zf(c))}null==hg(a,15)&&Wf(a,15,zf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=a,c=this.experimentIds.clone(),fg(b,Kg,16,c));b=this.j.length-this.bufferSize+1;0<b&&(this.j.splice(0,b),this.m+=b);this.j.push(a);this.Db||this.h.enabled||this.h.start()};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else{var d=Date.now();if(this.ha>d&&this.X<d)b&&b("throttled");else{this.network&&("function"===typeof this.network.Ac?jh(this.i,this.network.Ac()):jh(this.i,0));var e=kh(this.i,this.j,this.m,this.T,this.Kb);d={};var f=this.Fb();f&&(d.Authorization=f);this.P||(this.P=.01>this.Fa()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");var g=new URL(this.P);this.sessionIndex&&(d["X-Goog-AuthUser"]=
this.sessionIndex,g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g.searchParams.set("pageId",this.pageId));if(f&&this.fa===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.m=0;var h=e.serialize(),k;this.A&&this.A.isSupported(h.length)&&(k=this.A.compress(h));var l={url:g.toString(),body:h,Sd:1,Oc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(r){c.l.reset();c.h.setInterval(c.l.getValue());
if(r){var w=null;try{var y=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));w=bh(y)}catch(G){}if(w){r=Number;y="-1";y=void 0===y?"0":y;var B=ig(w);r=r(null!=B?B:y);0<r&&(c.X=Date.now(),c.ha=c.X+r);w=dh.ctor?dh.i(w,dh.ctor,dh.h,!0):dh.i(w,dh.h,null,!0);if(r=null===w?void 0:w)w=-1,w=void 0===w?0:w,r=yf(Uf(r,1)),w=null!=r?r:w,-1!==w&&(c.ba||ih(c,w))}}a&&a();c.T=0},p=function(r,w){var y=e.F;
var B=Ve(y),G=B,J=!(2&B),H=!!(2&G),T=H?1:2;B=1===T;T=2===T;J&&(J=!H);H=Vf(y,G,3);H=Array.isArray(H)?H:hf;var I=Se(H),ha=!!(4&I);if(!ha){var O=I;0===O&&(O=cg(O,G,!1));O=Ue(O,1,!0);I=H;var S=G,V=!!(2&O);V&&(S=Ue(S,2,!0));for(var ma=!V,na=!0,sb=0,Mc=0;sb<I.length;sb++){var Nc=Hf(I[sb],Zg,S);if(Nc instanceof Zg){if(!V){var be=!!(Se(Nc.F)&2);ma&&(ma=!be);na&&(na=be)}I[Mc++]=Nc}}Mc<sb&&(I.length=Mc);O=Ue(O,4,!0);O=Ue(O,16,na);O=Ue(O,8,ma);Te(I,O);V&&Object.freeze(I);I=O}O=!!(8&I)||B&&!H.length;if(J&&!O){ag(I)&&
(H=Oe(H),I=cg(I,G,!1),G=Xf(y,G,3,H));J=H;for(O=0;O<J.length;O++)S=J[O],V=Tf(S),S!==V&&(J[O]=V);I=Ue(I,8,!0);I=Ue(I,16,!J.length);Te(J,I)}ag(I)||(J=I,B?I=Ue(I,!H.length||16&I&&(!ha||32&I)?2:2048,!0):I=Ue(I,32,!1),I!==J&&Te(H,I),B&&Object.freeze(H));T&&ag(I)&&(H=Oe(H),I=cg(I,G,!1),Te(H,I),Xf(y,G,3,H));y=H;G=hg(e,14);B=c.l;B.h=Math.min(3E5,2*B.h);B.i=Math.min(3E5,B.h+Math.round(.2*(Math.random()-.5)*B.h));c.h.setInterval(c.l.getValue());401===r&&f&&(c.fa=f);G&&(c.m+=G);void 0===w&&(w=c.isRetryable(r));
w&&(c.j=y.concat(c.j),c.Db||c.h.enabled||c.h.start());b&&b("net-send-failed",r);++c.T},t=function(){c.network&&c.network.send(l,n,p)};
k?k.then(function(r){l.Oc["Content-Encoding"]="gzip";l.Oc["Content-Type"]="application/binary";l.body=r;l.Sd=2;t()},function(){t()}):t()}}}};
m.uc=function(){lh(this.i,!0);this.flush();lh(this.i,!1)};
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function fh(a,b){this.eb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new $g;Number.isInteger(a)&&this.h.Mb(a);b||(this.locale=document.documentElement.getAttribute("lang"));gh(this,new Xg)}
fh.prototype.Mb=function(a){this.h.Mb(a);return this};
function gh(a,b){fg(a.h,Xg,1,b);jg(b)||mg(b,1,1);if(!a.eb){b=mh(a);var c=Uf(b,5);(null==c||"string"===typeof c)&&c||lg(b,5,a.locale)}a.uach&&(b=mh(a),eg(b,Rg,9)||fg(b,Rg,9,a.uach))}
function jh(a,b){Yf(nh(a))&&(a=oh(a),mg(a,1,b))}
function lh(a,b){Yf(nh(a))&&(a=oh(a),Wf(a,2,uf(b)))}
function nh(a){return eg(a.h,Xg,1)}
function ph(a,b){var c=void 0===c?Tg:c;var d=a.eb?void 0:window;d?b(d,c).then(function(e){a.uach=e;e=mh(a);fg(e,Rg,9,a.uach);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function mh(a){a=nh(a);var b=eg(a,$f,11);b||(b=new $f,fg(a,$f,11,b));return b}
function oh(a){a=mh(a);var b=eg(a,Pg,10);b||(b=new Pg,Wf(b,2,uf(!1)),fg(a,Pg,10,b));return b}
function kh(a,b,c,d,e){var f=0,g=0;c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(Yf(nh(a))){var h=oh(a);Wf(h,3,xf(d))}Yf(nh(a))&&(d=oh(a),Wf(d,4,xf(f)));Yf(nh(a))&&(f=oh(a),Wf(f,5,xf(g)));a=a.h.clone();g=Date.now().toString();a=Wf(a,4,zf(g));b=gg(a,Zg,3,b);e&&(a=new Mg,e=Wf(a,13,xf(e)),a=new Ng,e=fg(a,Mg,2,e),a=new Yg,e=fg(a,Ng,1,e),e=mg(e,2,9),fg(b,Yg,18,e));c&&Wf(b,14,zf(c));return b}
;function qh(){}
qh.prototype.serialize=function(a){var b=[];rh(this,a,b);return b.join("")};
function rh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),rh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),sh(d,c),c.push(":"),rh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":sh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var th={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},uh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function sh(a,b){b.push('"',a.replace(uh,function(c){var d=th[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),th[c]=d);return d}),'"')}
;function vh(){}
vh.prototype.h=null;vh.prototype.getOptions=function(){var a;(a=this.h)||(a={},wh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var xh;function yh(){}
Xa(yh,vh);function zh(a){return(a=wh(a))?new ActiveXObject(a):new XMLHttpRequest}
function wh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
xh=new yh;function Ah(a){od.call(this);this.headers=new Map;this.T=a||null;this.i=!1;this.P=this.J=null;this.l=this.ea="";this.j=this.ba=this.A=this.X=!1;this.m=0;this.D=null;this.Fa="";this.ha=this.sa=!1}
Xa(Ah,od);var Bh=/^https?$/i,Ch=["POST","PUT"],Dh=[];function Eh(a,b,c,d,e,f,g){var h=new Ah;Dh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Ud,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.sa=g);h.send(a,c,d,e)}
m=Ah.prototype;m.Ud=function(){this.dispose();ib(Dh,this)};
m.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ea+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ea=a;this.l="";this.X=!1;this.i=!0;this.J=this.T?zh(this.T):zh(xh);this.P=this.T?this.T.getOptions():xh.getOptions();this.J.onreadystatechange=Ua(this.rd,this);try{this.getStatus(),this.ba=!0,this.J.open(b,String(a),!0),this.ba=!1}catch(g){this.getStatus();Fh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=cb(Ch,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.Fa&&(this.J.responseType=this.Fa);"withCredentials"in this.J&&this.J.withCredentials!==this.sa&&(this.J.withCredentials=this.sa);try{Gh(this),0<this.m&&(this.ha=Hh(this.J),this.getStatus(),this.ha?(this.J.timeout=this.m,this.J.ontimeout=Ua(this.Gd,
this)):this.D=de(this.Gd,this.m,this)),this.getStatus(),this.A=!0,this.J.send(a),this.A=!1}catch(g){this.getStatus(),Fh(this,g)}};
function Hh(a){return Cc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Gd=function(){"undefined"!=typeof Ka&&this.J&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),pd(this,"timeout"),this.abort(8))};
function Fh(a,b){a.i=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.l=b;Ih(a);Jh(a)}
function Ih(a){a.X||(a.X=!0,pd(a,"complete"),pd(a,"error"))}
m.abort=function(){this.J&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.J.abort(),this.j=!1,pd(this,"complete"),pd(this,"abort"),Jh(this))};
m.S=function(){this.J&&(this.i&&(this.i=!1,this.j=!0,this.J.abort(),this.j=!1),Jh(this,!0));Ah.za.S.call(this)};
m.rd=function(){this.Z()||(this.ba||this.A||this.j?Kh(this):this.Be())};
m.Be=function(){Kh(this)};
function Kh(a){if(a.i&&"undefined"!=typeof Ka)if(a.P[1]&&4==Lh(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==Lh(a))de(a.rd,0,a);else if(pd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Mh(a))pd(a,"complete"),pd(a,"success");else{try{var b=2<Lh(a)?a.J.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";Ih(a)}}finally{Jh(a)}}}
function Jh(a,b){if(a.J){Gh(a);var c=a.J,d=a.P[0]?function(){}:null;
a.J=null;a.P=null;b||pd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Gh(a){a.J&&a.ha&&(a.J.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.J};
m.isComplete=function(){return 4==Lh(this)};
function Mh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=$b(1,String(a.ea)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Bh.test(a?a.toLowerCase():"");c=b}return c}
function Lh(a){return a.J?a.J.readyState:0}
m.getStatus=function(){try{return 2<Lh(this)?this.J.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function Nh(){}
Nh.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
Eh(a.url,function(d){d=d.target;if(Mh(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Oc,a.timeoutMillis,a.withCredentials)};
Nh.prototype.Ac=function(){return 1};function Oh(a,b){K.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.j=!1;this.componentId="";this.network=new Nh}
x(Oh,K);Oh.prototype.ed=function(){this.X=!0;return this};function Ph(a,b,c,d,e,f,g){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;K.call(this);this.logSource=a;this.componentId=b;f?a=f:(a=new Oh(a,"0"),a.componentId=b,rc(this,a),""!==c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),g&&(a.network=g),b=new eh({logSource:a.logSource,Fb:a.Fb?a.Fb:Jg,sessionIndex:a.sessionIndex,gf:a.i,eb:a.j,Db:!1,ed:a.X,pageId:a.pageId,Xc:a.Xc,network:a.network?a.network:void 0}),rc(a,b),a.A&&gh(b.i,a.A),a.h&&(c=a.h,d=mh(b.i),lg(d,7,c)),a.m&&(b.A=
a.m),a.componentId&&(b.componentId=a.componentId),a.Kb&&(b.Kb=a.Kb),a.l&&((d=a.l)?(b.experimentIds||(b.experimentIds=new Kg),c=b.experimentIds,d=d.serialize(),lg(c,4,d)):b.experimentIds&&Wf(b.experimentIds,4)),a.P&&(c=a.P,b.experimentIds||(b.experimentIds=new Kg),bg(b.experimentIds,2,c,kg)),a.D&&(c=a.D,b.ba=!0,ih(b,c)),ph(b.i,Wg),a.T&&ph(b.i,a.T),a.network.Mb&&a.network.Mb(a.logSource),a.network.Ve&&a.network.Ve(b),a=b);this.h=a}
x(Ph,K);
Ph.prototype.flush=function(a){var b=a||[];if(b.length){a=new wg;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new vg;f=lg(f,1,e.j);for(var g=[],h=0;h<e.i.length;h++)g.push(e.i[h].Aa);f=bg(f,3,g,Ef);g=[];h=[];for(var k=v(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var n=e.v;for(var p=e.wc(l)||[],t=[],r=0;r<p.length;r++){var w=p[r],y=w&&w.h;w=new sg;switch(n){case 3:y=Number(y);Number.isFinite(y)&&dg(w,1,tg,zf(y));break;case 2:y=Number(y);if(null!=
y&&"number"!==typeof y)throw Error("Value of float/double field must be a number, found "+typeof y+": "+y);dg(w,2,tg,y)}t.push(w)}n=t;for(p=0;p<n.length;p++){t=n[p];r=new ug;t=fg(r,sg,2,t);r=l;w=[];y=[];for(var B=0;B<e.i.length;B++)y.push(e.i[B].Ba);for(B=0;B<y.length;B++){var G=y[B],J=r[B],H=new qg;switch(G){case 3:dg(H,1,rg,Ff(String(J)));break;case 2:G=Number(J);Number.isFinite(G)&&dg(H,2,rg,xf(G));break;case 1:dg(H,3,rg,uf("true"===J))}w.push(H)}gg(t,qg,1,w);g.push(t)}}gg(f,ug,4,g);c.push(f);
e.clear()}gg(a,vg,1,c);b=this.h;b.ea&&(a instanceof Zg?b.log(a):(c=new Zg,a=a.serialize(),a=lg(c,8,a),b.log(a)));this.h.flush()}};function Qh(a,b,c){this.logger=a;this.event=b;if(void 0===c||c)this.h=Rh()}
Qh.prototype.start=function(){this.h=Rh()};
Qh.prototype.done=function(){null!=this.h&&this.logger.od(this.event,Rh()-this.h)};
function Sh(){}
Sh.prototype.Fc=function(){};
Sh.prototype.od=function(){};
Sh.prototype.cc=function(){};
Sh.prototype.Pa=function(){};
function Th(a,b){this.i=b;this.l=new Ph(1828,"","",!1,"",void 0,new Nh);this.h=new ee(this.l);this.m=new ke(this.h);this.A=new le(this.h);this.D=new me(this.h);this.v=new je(this.h);this.j=oe(a);(new ie(this.h)).h.nc("/client_streamz/bg/fic",this.i)}
Th.prototype.Fc=function(){this.A.h.nc("/client_streamz/bg/fsc",this.j,this.i)};
Th.prototype.od=function(a,b){0===a?this.m.record(b,this.j,this.i):1===a&&this.D.record(b,this.j,this.i)};
Th.prototype.cc=function(a,b){this.v.h.nc("/client_streamz/bg/fiec",this.j,this.i,a,b)};
Th.prototype.Pa=function(){this.h.Pa()};
function Rh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Uh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Vh(a){function b(l,n,p){Promise.resolve().then(function(){h.done();g.resolve({Qd:l,Ye:n,dg:p})})}
this.h=!1;var c=a.program;var d=a.je;if(!1!==a.He){var e,f;this.pa=null!=(f=a.pa)?f:new Th(d,null!=(e=a.cg)?e:"_")}else this.pa=new Sh;var g=new Uh;this.i=g.promise;var h=new Qh(this.pa,0,!1);C[d]?C[d].a||(this.pa.cc(2,""),this.pa.Pa()):(this.pa.cc(1,""),this.pa.Pa());try{var k=C[d].a;h.start();this.j=v(k(c,b,!0,a.ng)).next().value;this.Xe=g.promise.then(function(){})}catch(l){throw this.pa.cc(4,l.message),this.pa.Pa(),l;
}}
Vh.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");this.pa.Fc();return this.i.then(function(c){var d=c.Qd;return new Promise(function(e){var f=new Qh(b.pa,1);d(function(g){f.done();e(g)},[a.dd,
a.Ze,a.jf])})})};
Vh.prototype.Dd=function(a){if(this.h)throw Error("Already disposed");this.pa.Fc();var b=new Qh(this.pa,1);a=this.j([a.dd,a.Ze,a.jf]);b.done();return a};
Vh.prototype.dispose=function(){this.pa.Pa();this.h=!0;this.i.then(function(a){(a=a.Ye)&&a()})};
Vh.prototype.Z=function(){return this.h};var Wh=window;Ab("csi.gstatic.com");Ab("googleads.g.doubleclick.net");Ab("partner.googleadservices.com");Ab("pubads.g.doubleclick.net");Ab("securepubads.g.doubleclick.net");Ab("tpc.googlesyndication.com");var Xh=fa([""]),Yh=ia(["\x00"],["\\0"]),Zh=ia(["\n"],["\\n"]),$h=ia(["\x00"],["\\u0000"]);function ai(a){return-1===a.toString().indexOf("`")}
ai(function(a){return a(Xh)})||ai(function(a){return a(Yh)})||ai(function(a){return a(Zh)})||ai(function(a){return a($h)});function bi(a){this.se=a}
function ci(a){return new bi(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var di=[ci("data"),ci("http"),ci("https"),ci("mailto"),ci("ftp"),new bi(function(a){return/^[^:]*([/?#]|$)/.test(a)})],ei="function"===typeof URL;
function fi(a){if(a instanceof Fb)a instanceof Fb&&a.constructor===Fb?a=a.h:(Ma(a),a="type_error:SafeUrl");else{b:if(ei){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;function gi(a,b){b=fi(b);void 0!==b&&(a.href=b)}
;function hi(){}
function ii(a){this.h=a}
x(ii,hi);ii.prototype.toString=function(){return this.h};function ji(a){var b="true".toString(),c=[new ii(ki[0].toLowerCase(),Vb)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof ii)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function li(){throw Error("unknown trace type");}
;var mi="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function ni(a,b){if(b instanceof Bb)a.href=Cb(b).toString();else{if(-1===mi.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=fi(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function oi(a){var b,c;return(a=null==(c=(b=a.document).querySelector)?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function pi(a){var b=oi(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function qi(a,b){if(b instanceof Wb)b=b.ud;else throw Error("");a.textContent=b;pi(a)}
function ri(a,b){a.src=Cb(b);pi(a)}
;function si(a){var b=ti;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ui(){var a=[];si(function(b){a.push(b)});
return a}
var ti={kf:"allow-forms",lf:"allow-modals",mf:"allow-orientation-lock",nf:"allow-pointer-lock",pf:"allow-popups",qf:"allow-popups-to-escape-sandbox",rf:"allow-presentation",sf:"allow-same-origin",tf:"allow-scripts",uf:"allow-top-navigation",vf:"allow-top-navigation-by-user-activation"},vi=bb(function(){return ui()});
function wi(){var a=xi(),b={};db(vi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function xi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function yi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var zi=(new Date).getTime();function Ai(a){od.call(this);var b=this;this.A=this.j=0;this.Da=null!=a?a:{na:function(e,f){return setTimeout(e,f)},
oa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return z(function(e){return e.yield(Bi(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.A||Ci(this)}
x(Ai,od);function Di(){var a=Ei;Ai.h||(Ai.h=new Ai(a));return Ai.h}
Ai.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Da.oa(this.A);delete Ai.h};
Ai.prototype.va=function(){return this.i};
function Ci(a){a.A=a.Da.na(function(){var b;return z(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.B(3):c.yield(Bi(a),3):c.yield(Bi(a),3);Ci(a);c.h=0})},3E4)}
function Bi(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return z(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Da.na(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.l=0;h.m=0;a.m=void 0;a.j&&(a.Da.oa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?pd(a,"networkstatus-online"):pd(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.B(3)}})})}
;function Fi(){this.data=[];this.h=-1}
Fi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Fi.prototype.get=function(a){return!!this.data[a]};
function Gi(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Hi(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
Hi.prototype[Symbol.iterator]=function(){return this};
Hi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Ii(a,b){return new Hi(a,b)}
;function Ji(){this.blockSize=-1}
;function Ki(){this.blockSize=-1;this.blockSize=64;this.h=[];this.v=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Xa(Ki,Ji);Ki.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Li(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Ki.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)Li(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Li(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Li(this,e);f=0;break}}this.i=f;this.l+=b}};
Ki.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.v[c]=b&255,b/=256;Li(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Mi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ni(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Oi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Mi(a).match(/\S+/g)||[],b=0<=cb(a,b));return b}
function Pi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Oi(a,"inverted-hdpi")&&Ni(a,Array.prototype.filter.call(a.classList?a.classList:Mi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Qi(){}
Qi.prototype.next=function(){return Ri};
var Ri={done:!0,value:void 0};function Si(a){return{value:a,done:!1}}
Qi.prototype.Ga=function(){return this};function Ti(a){if(a instanceof Ui||a instanceof Vi||a instanceof Wi)return a;if("function"==typeof a.next)return new Ui(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Ui(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ga)return new Ui(function(){return a.Ga()});
throw Error("Not an iterator or iterable.");}
function Ui(a){this.i=a}
Ui.prototype.Ga=function(){return new Vi(this.i())};
Ui.prototype[Symbol.iterator]=function(){return new Wi(this.i())};
Ui.prototype.h=function(){return new Wi(this.i())};
function Vi(a){this.i=a}
x(Vi,Qi);Vi.prototype.next=function(){return this.i.next()};
Vi.prototype[Symbol.iterator]=function(){return new Wi(this.i)};
Vi.prototype.h=function(){return new Wi(this.i)};
function Wi(a){Ui.call(this,function(){return a});
this.j=a}
x(Wi,Ui);Wi.prototype.next=function(){return this.j.next()};function Xi(a,b){this.i={};this.h=[];this.Wa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Xi)for(c=a.zc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=Xi.prototype;m.zc=function(){Yi(this);return this.h.concat()};
m.has=function(a){return Zi(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||$i;Yi(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function $i(a,b){return a===b}
m.clear=function(){this.i={};this.Wa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return Zi(this.i,a)?(delete this.i[a],--this.size,this.Wa++,this.h.length>2*this.size&&Yi(this),!0):!1};
function Yi(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Zi(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Zi(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Zi(this.i,a)?this.i[a]:b};
m.set=function(a,b){Zi(this.i,a)||(this.size+=1,this.h.push(a),this.Wa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.zc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Xi(this)};
m.keys=function(){return Ti(this.Ga(!0)).h()};
m.values=function(){return Ti(this.Ga(!1)).h()};
m.entries=function(){var a=this;return Ii(this.keys(),function(b){return[b,a.get(b)]})};
m.Ga=function(a){Yi(this);var b=0,c=this.Wa,d=this,e=new Qi;e.next=function(){if(c!=d.Wa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Ri;var f=d.h[b++];return Si(a?f:d.i[f])};
return e};
function Zi(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function L(a){K.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.A=!!a}
Xa(L,K);m=L.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.zb(a)}return!1};
m.zb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&ib(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Ya=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];aj(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.zb(c)}}return 0!=e}return!1};
function aj(a,b,c){Id(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.zb,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.S=function(){L.za.S.call(this);this.clear();this.j.length=0};function bj(a){this.h=a}
bj.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new qh).serialize(b))};
bj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
bj.prototype.remove=function(a){this.h.remove(a)};function cj(a){this.h=a}
Xa(cj,bj);function dj(a){this.data=a}
function ej(a){return void 0===a||a instanceof dj?a:new dj(a)}
cj.prototype.set=function(a,b){cj.za.set.call(this,a,ej(b))};
cj.prototype.i=function(a){a=cj.za.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
cj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function fj(a){this.h=a}
Xa(fj,cj);fj.prototype.set=function(a,b,c){if(b=ej(b)){if(c){if(c<Wa()){fj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Wa()}fj.za.set.call(this,a,b)};
fj.prototype.i=function(a){var b=fj.za.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Wa()||c&&c>Wa())fj.prototype.remove.call(this,a);else return b}};function gj(){}
;function hj(){}
Xa(hj,gj);hj.prototype[Symbol.iterator]=function(){return Ti(this.Ga(!0)).h()};
hj.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function ij(a){this.h=a;this.i=null}
Xa(ij,hj);m=ij.prototype;m.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&("QuotaExceededError"===c.name||22===c.code||1014===c.code||"NS_ERROR_DOM_QUOTA_REACHED"===c.name)&&a&&0!==a.length}else b=!1;return this.i=b};
m.set=function(a,b){jj(this);try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){jj(this);a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){jj(this);this.h.removeItem(a)};
m.Ga=function(a){jj(this);var b=0,c=this.h,d=new Qi;d.next=function(){if(b>=c.length)return Ri;var e=c.key(b++);if(a)return Si(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Si(e)};
return d};
m.clear=function(){jj(this);this.h.clear()};
m.key=function(a){jj(this);return this.h.key(a)};
function jj(a){if(null==a.h)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.i)?b:a.isAvailable())||Bd(Error("Storage mechanism: Storage unavailable"))}
;function kj(){var a=null;try{a=C.localStorage||null}catch(b){}ij.call(this,a)}
Xa(kj,ij);function lj(a,b){this.i=a;this.h=null;var c;if(c=Cc)c=!(9<=Number(Rc));if(c){mj||(mj=new Xi);this.h=mj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),mj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Xa(lj,hj);var nj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},mj=null;function oj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return nj[b]})}
m=lj.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(oj(a),b);pj(this)};
m.get=function(a){a=this.h.getAttribute(oj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(oj(a));pj(this)};
m.Ga=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Qi;d.next=function(){if(b>=c.length)return Ri;var e=c[b++];if(a)return Si(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Si(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);pj(this)};
function pj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function qj(a,b){this.i=a;this.h=b+"::"}
Xa(qj,hj);qj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
qj.prototype.get=function(a){return this.i.get(this.h+a)};
qj.prototype.remove=function(a){this.i.remove(this.h+a)};
qj.prototype.Ga=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Qi;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Si(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var M={},rj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var sj={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},tj={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){return[].concat.apply([],a)}};
M.We=function(){rj?(M.lb=Uint8Array,M.Ia=Uint16Array,M.Md=Int32Array,M.assign(M,sj)):(M.lb=Array,M.Ia=Array,M.Md=Array,M.assign(M,tj))};
M.We();var uj=!0;try{new Uint8Array(1)}catch(a){uj=!1}
function vj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new M.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var wj={};wj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var xj={},yj,zj=[],Aj=0;256>Aj;Aj++){yj=Aj;for(var Bj=0;8>Bj;Bj++)yj=yj&1?3988292384^yj>>>1:yj>>>1;zj[Aj]=yj}xj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^zj[(a^b[d])&255];return a^-1};var Cj={};Cj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Dj(a){for(var b=a.length;0<=--b;)a[b]=0}
var Ej=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Fj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Gj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Hj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ij=Array(576);Dj(Ij);var Jj=Array(60);Dj(Jj);var Kj=Array(512);Dj(Kj);var Lj=Array(256);Dj(Lj);var Mj=Array(29);Dj(Mj);var Nj=Array(30);Dj(Nj);function Oj(a,b,c,d,e){this.Ed=a;this.ce=b;this.be=c;this.Xd=d;this.ye=e;this.ld=a&&a.length}
var Pj,Qj,Rj;function Sj(a,b){this.gd=a;this.vb=0;this.Va=b}
function Tj(a,b){a.W[a.pending++]=b&255;a.W[a.pending++]=b>>>8&255}
function Uj(a,b,c){a.ga>16-c?(a.ma|=b<<a.ga&65535,Tj(a,a.ma),a.ma=b>>16-a.ga,a.ga+=c-16):(a.ma|=b<<a.ga&65535,a.ga+=c)}
function Vj(a,b,c){Uj(a,c[2*b],c[2*b+1])}
function Wj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Xj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Wj(d[e]++,e))}
function Yj(a){var b;for(b=0;286>b;b++)a.qa[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ia[2*b]=0;a.qa[512]=1;a.Oa=a.yb=0;a.xa=a.matches=0}
function Zj(a){8<a.ga?Tj(a,a.ma):0<a.ga&&(a.W[a.pending++]=a.ma);a.ma=0;a.ga=0}
function ak(a,b,c){Zj(a);Tj(a,c);Tj(a,~c);M.mb(a.W,a.window,b,c,a.pending);a.pending+=c}
function bk(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function ck(a,b,c){for(var d=a.Y[c],e=c<<1;e<=a.Ma;){e<a.Ma&&bk(b,a.Y[e+1],a.Y[e],a.depth)&&e++;if(bk(b,d,a.Y[e],a.depth))break;a.Y[c]=a.Y[e];c=e;e<<=1}a.Y[c]=d}
function dk(a,b,c){var d=0;if(0!==a.xa){do{var e=a.W[a.Cb+2*d]<<8|a.W[a.Cb+2*d+1];var f=a.W[a.Ec+d];d++;if(0===e)Vj(a,f,b);else{var g=Lj[f];Vj(a,g+256+1,b);var h=Ej[g];0!==h&&(f-=Mj[g],Uj(a,f,h));e--;g=256>e?Kj[e]:Kj[256+(e>>>7)];Vj(a,g,c);h=Fj[g];0!==h&&(e-=Nj[g],Uj(a,e,h))}}while(d<a.xa)}Vj(a,256,b)}
function ek(a,b){var c=b.gd,d=b.Va.Ed,e=b.Va.ld,f=b.Va.Xd,g,h=-1;a.Ma=0;a.qb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.Y[++a.Ma]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ma;){var k=a.Y[++a.Ma]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Oa--;e&&(a.yb-=d[2*k+1])}b.vb=h;for(g=a.Ma>>1;1<=g;g--)ck(a,c,g);k=f;do g=a.Y[1],a.Y[1]=a.Y[a.Ma--],ck(a,c,1),d=a.Y[1],a.Y[--a.qb]=g,a.Y[--a.qb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.Y[1]=k++,ck(a,c,1);while(2<=a.Ma);a.Y[--a.qb]=
a.Y[1];g=b.gd;k=b.vb;d=b.Va.Ed;e=b.Va.ld;f=b.Va.ce;var l=b.Va.be,n=b.Va.ye,p,t=0;for(p=0;15>=p;p++)a.Ja[p]=0;g[2*a.Y[a.qb]+1]=0;for(b=a.qb+1;573>b;b++){var r=a.Y[b];p=g[2*g[2*r+1]+1]+1;p>n&&(p=n,t++);g[2*r+1]=p;if(!(r>k)){a.Ja[p]++;var w=0;r>=l&&(w=f[r-l]);var y=g[2*r];a.Oa+=y*(p+w);e&&(a.yb+=y*(d[2*r+1]+w))}}if(0!==t){do{for(p=n-1;0===a.Ja[p];)p--;a.Ja[p]--;a.Ja[p+1]+=2;a.Ja[n]--;t-=2}while(0<t);for(p=n;0!==p;p--)for(r=a.Ja[p];0!==r;)d=a.Y[--b],d>k||(g[2*d+1]!==p&&(a.Oa+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),r--)}Xj(c,h,a.Ja)}
function fk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ia[2*l]+=g:0!==l?(l!==e&&a.ia[2*l]++,a.ia[32]++):10>=g?a.ia[34]++:a.ia[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function gk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Vj(a,l,a.ia);while(0!==--g)}else 0!==l?(l!==e&&(Vj(a,l,a.ia),g--),Vj(a,16,a.ia),Uj(a,g-3,2)):10>=g?(Vj(a,17,a.ia),Uj(a,g-3,3)):(Vj(a,18,a.ia),Uj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function hk(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.qa[2*c])return 0;if(0!==a.qa[18]||0!==a.qa[20]||0!==a.qa[26])return 1;for(c=32;256>c;c++)if(0!==a.qa[2*c])return 1;return 0}
var ik=!1;function jk(a,b,c){a.W[a.Cb+2*a.xa]=b>>>8&255;a.W[a.Cb+2*a.xa+1]=b&255;a.W[a.Ec+a.xa]=c&255;a.xa++;0===b?a.qa[2*c]++:(a.matches++,b--,a.qa[2*(Lj[c]+256+1)]++,a.bb[2*(256>b?Kj[b]:Kj[256+(b>>>7)])]++);return a.xa===a.Hb-1}
;function kk(a,b){a.msg=Cj[b];return b}
function lk(a){for(var b=a.length;0<=--b;)a[b]=0}
function mk(a){var b=a.state,c=b.pending;c>a.M&&(c=a.M);0!==c&&(M.mb(a.output,b.W,b.Jb,c,a.wb),a.wb+=c,b.Jb+=c,a.Sc+=c,a.M-=c,b.pending-=c,0===b.pending&&(b.Jb=0))}
function nk(a,b){var c=0<=a.ta?a.ta:-1,d=a.o-a.ta,e=0;if(0<a.level){2===a.I.sc&&(a.I.sc=hk(a));ek(a,a.ac);ek(a,a.Wb);fk(a,a.qa,a.ac.vb);fk(a,a.bb,a.Wb.vb);ek(a,a.Yc);for(e=18;3<=e&&0===a.ia[2*Hj[e]+1];e--);a.Oa+=3*(e+1)+14;var f=a.Oa+3+7>>>3;var g=a.yb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Uj(a,b?1:0,3),ak(a,c,d);else if(4===a.strategy||g===f)Uj(a,2+(b?1:0),3),dk(a,Ij,Jj);else{Uj(a,4+(b?1:0),3);c=a.ac.vb+1;d=a.Wb.vb+1;e+=1;Uj(a,c-257,5);Uj(a,d-1,5);Uj(a,e-4,4);for(f=0;f<e;f++)Uj(a,a.ia[2*
Hj[f]+1],3);gk(a,a.qa,c-1);gk(a,a.bb,d-1);dk(a,a.qa,a.bb)}Yj(a);b&&Zj(a);a.ta=a.o;mk(a.I)}
function N(a,b){a.W[a.pending++]=b}
function ok(a,b){a.W[a.pending++]=b>>>8&255;a.W[a.pending++]=b&255}
function pk(a,b){var c=a.pd,d=a.o,e=a.wa,f=a.qd,g=a.o>a.ka-262?a.o-(a.ka-262):0,h=a.window,k=a.Xa,l=a.Ha,n=a.o+258,p=h[d+e-1],t=h[d+e];a.wa>=a.kd&&(c>>=2);f>a.u&&(f=a.u);do{var r=b;if(h[r+e]===t&&h[r+e-1]===p&&h[r]===h[d]&&h[++r]===h[d+1]){d+=2;for(r++;h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&d<n;);r=258-(n-d);d=n-258;if(r>e){a.ub=b;e=r;if(r>=f)break;p=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function qk(a){var b=a.ka,c;do{var d=a.Kd-a.u-a.o;if(a.o>=b+(b-262)){M.mb(a.window,a.window,b,b,0);a.ub-=b;a.o-=b;a.ta-=b;var e=c=a.Zb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.I.la)break;e=a.I;c=a.window;f=a.o+a.u;var g=e.la;g>d&&(g=d);0===g?c=0:(e.la-=g,M.mb(c,e.input,e.hb,g,f),1===e.state.wrap?e.H=wj(e.H,c,g,f):2===e.state.wrap&&(e.H=xj(e.H,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.u+=c;if(3<=a.u+a.ra)for(d=a.o-a.ra,a.K=a.window[d],
a.K=(a.K<<a.La^a.window[d+1])&a.Ka;a.ra&&!(a.K=(a.K<<a.La^a.window[d+3-1])&a.Ka,a.Ha[d&a.Xa]=a.head[a.K],a.head[a.K]=d,d++,a.ra--,3>a.u+a.ra););}while(262>a.u&&0!==a.I.la)}
function rk(a,b){for(var c;;){if(262>a.u){qk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.K=(a.K<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);0!==c&&a.o-c<=a.ka-262&&(a.R=pk(a,c));if(3<=a.R)if(c=jk(a,a.o-a.ub,a.R-3),a.u-=a.R,a.R<=a.Gc&&3<=a.u){a.R--;do a.o++,a.K=(a.K<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o;while(0!==--a.R);a.o++}else a.o+=a.R,a.R=0,a.K=a.window[a.o],a.K=(a.K<<a.La^a.window[a.o+1])&a.Ka;else c=jk(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(nk(a,!1),0===a.I.M))return 1}a.ra=2>a.o?a.o:2;return 4===b?(nk(a,!0),0===a.I.M?3:4):a.xa&&(nk(a,!1),0===a.I.M)?1:2}
function sk(a,b){for(var c,d;;){if(262>a.u){qk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.K=(a.K<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ha[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);a.wa=a.R;a.td=a.ub;a.R=2;0!==c&&a.wa<a.Gc&&a.o-c<=a.ka-262&&(a.R=pk(a,c),5>=a.R&&(1===a.strategy||3===a.R&&4096<a.o-a.ub)&&(a.R=2));if(3<=a.wa&&a.R<=a.wa){d=a.o+a.u-3;c=jk(a,a.o-1-a.td,a.wa-3);a.u-=a.wa-1;a.wa-=2;do++a.o<=d&&(a.K=(a.K<<a.La^a.window[a.o+3-1])&a.Ka,a.Ha[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);
while(0!==--a.wa);a.fb=0;a.R=2;a.o++;if(c&&(nk(a,!1),0===a.I.M))return 1}else if(a.fb){if((c=jk(a,0,a.window[a.o-1]))&&nk(a,!1),a.o++,a.u--,0===a.I.M)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(jk(a,0,a.window[a.o-1]),a.fb=0);a.ra=2>a.o?a.o:2;return 4===b?(nk(a,!0),0===a.I.M?3:4):a.xa&&(nk(a,!1),0===a.I.M)?1:2}
function tk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){qk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.R=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.R=258-(e-d);a.R>a.u&&(a.R=a.u)}3<=a.R?(c=jk(a,1,a.R-3),a.u-=a.R,a.o+=a.R,a.R=0):(c=jk(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(nk(a,!1),0===a.I.M))return 1}a.ra=0;return 4===b?(nk(a,!0),0===a.I.M?3:4):
a.xa&&(nk(a,!1),0===a.I.M)?1:2}
function uk(a,b){for(var c;;){if(0===a.u&&(qk(a),0===a.u)){if(0===b)return 1;break}a.R=0;c=jk(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(nk(a,!1),0===a.I.M))return 1}a.ra=0;return 4===b?(nk(a,!0),0===a.I.M?3:4):a.xa&&(nk(a,!1),0===a.I.M)?1:2}
function vk(a,b,c,d,e){this.ke=a;this.xe=b;this.Ae=c;this.we=d;this.ee=e}
var wk;wk=[new vk(0,0,0,0,function(a,b){var c=65535;for(c>a.ya-5&&(c=a.ya-5);;){if(1>=a.u){qk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.ta+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,nk(a,!1),0===a.I.M)return 1;if(a.o-a.ta>=a.ka-262&&(nk(a,!1),0===a.I.M))return 1}a.ra=0;if(4===b)return nk(a,!0),0===a.I.M?3:4;a.o>a.ta&&nk(a,!1);return 1}),
new vk(4,4,8,4,rk),new vk(4,5,16,8,rk),new vk(4,6,32,32,rk),new vk(4,4,16,16,sk),new vk(8,16,32,32,sk),new vk(8,16,128,128,sk),new vk(8,32,128,256,sk),new vk(32,128,258,1024,sk),new vk(32,258,258,4096,sk)];
function xk(){this.I=null;this.status=0;this.W=null;this.wrap=this.pending=this.Jb=this.ya=0;this.G=null;this.Ca=0;this.method=8;this.sb=-1;this.Xa=this.Uc=this.ka=0;this.window=null;this.Kd=0;this.head=this.Ha=null;this.qd=this.kd=this.strategy=this.level=this.Gc=this.pd=this.wa=this.u=this.ub=this.o=this.fb=this.td=this.R=this.ta=this.La=this.Ka=this.Bc=this.Zb=this.K=0;this.qa=new M.Ia(1146);this.bb=new M.Ia(122);this.ia=new M.Ia(78);lk(this.qa);lk(this.bb);lk(this.ia);this.Yc=this.Wb=this.ac=
null;this.Ja=new M.Ia(16);this.Y=new M.Ia(573);lk(this.Y);this.qb=this.Ma=0;this.depth=new M.Ia(573);lk(this.depth);this.ga=this.ma=this.ra=this.matches=this.yb=this.Oa=this.Cb=this.xa=this.Hb=this.Ec=0}
function yk(a,b){if(!a||!a.state||5<b||0>b)return a?kk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.la||666===c.status&&4!==b)return kk(a,0===a.M?-5:-2);c.I=a;var d=c.sb;c.sb=b;if(42===c.status)if(2===c.wrap)a.H=0,N(c,31),N(c,139),N(c,8),c.G?(N(c,(c.G.text?1:0)+(c.G.Ra?2:0)+(c.G.extra?4:0)+(c.G.name?8:0)+(c.G.comment?16:0)),N(c,c.G.time&255),N(c,c.G.time>>8&255),N(c,c.G.time>>16&255),N(c,c.G.time>>24&255),N(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),N(c,c.G.os&255),c.G.extra&&c.G.extra.length&&
(N(c,c.G.extra.length&255),N(c,c.G.extra.length>>8&255)),c.G.Ra&&(a.H=xj(a.H,c.W,c.pending,0)),c.Ca=0,c.status=69):(N(c,0),N(c,0),N(c,0),N(c,0),N(c,0),N(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),N(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;ok(c,e+(31-e%31));0!==c.o&&(ok(c,a.H>>>16),ok(c,a.H&65535));a.H=1}if(69===c.status)if(c.G.extra){for(e=c.pending;c.Ca<(c.G.extra.length&65535)&&(c.pending!==c.ya||
(c.G.Ra&&c.pending>e&&(a.H=xj(a.H,c.W,c.pending-e,e)),mk(a),e=c.pending,c.pending!==c.ya));)N(c,c.G.extra[c.Ca]&255),c.Ca++;c.G.Ra&&c.pending>e&&(a.H=xj(a.H,c.W,c.pending-e,e));c.Ca===c.G.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.G.name){e=c.pending;do{if(c.pending===c.ya&&(c.G.Ra&&c.pending>e&&(a.H=xj(a.H,c.W,c.pending-e,e)),mk(a),e=c.pending,c.pending===c.ya)){var f=1;break}f=c.Ca<c.G.name.length?c.G.name.charCodeAt(c.Ca++)&255:0;N(c,f)}while(0!==f);c.G.Ra&&c.pending>
e&&(a.H=xj(a.H,c.W,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.G.comment){e=c.pending;do{if(c.pending===c.ya&&(c.G.Ra&&c.pending>e&&(a.H=xj(a.H,c.W,c.pending-e,e)),mk(a),e=c.pending,c.pending===c.ya)){f=1;break}f=c.Ca<c.G.comment.length?c.G.comment.charCodeAt(c.Ca++)&255:0;N(c,f)}while(0!==f);c.G.Ra&&c.pending>e&&(a.H=xj(a.H,c.W,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.G.Ra?(c.pending+2>c.ya&&mk(a),c.pending+2<=c.ya&&(N(c,a.H&
255),N(c,a.H>>8&255),a.H=0,c.status=113)):c.status=113);if(0!==c.pending){if(mk(a),0===a.M)return c.sb=-1,0}else if(0===a.la&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return kk(a,-5);if(666===c.status&&0!==a.la)return kk(a,-5);if(0!==a.la||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?uk(c,b):3===c.strategy?tk(c,b):wk[c.level].ee(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.M&&(c.sb=-1),0;if(2===d&&(1===b?(Uj(c,2,3),Vj(c,256,Ij),16===c.ga?(Tj(c,c.ma),c.ma=0,c.ga=0):8<=c.ga&&
(c.W[c.pending++]=c.ma&255,c.ma>>=8,c.ga-=8)):5!==b&&(Uj(c,0,3),ak(c,0,0),3===b&&(lk(c.head),0===c.u&&(c.o=0,c.ta=0,c.ra=0))),mk(a),0===a.M))return c.sb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(N(c,a.H&255),N(c,a.H>>8&255),N(c,a.H>>16&255),N(c,a.H>>24&255),N(c,a.kb&255),N(c,a.kb>>8&255),N(c,a.kb>>16&255),N(c,a.kb>>24&255)):(ok(c,a.H>>>16),ok(c,a.H&65535));mk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var zk={};zk=function(){this.input=null;this.kb=this.la=this.hb=0;this.output=null;this.Sc=this.M=this.wb=0;this.msg="";this.state=null;this.sc=2;this.H=0};var Ak=Object.prototype.toString;
function Bk(a){if(!(this instanceof Bk))return new Bk(a);a=this.options=M.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.I=new zk;this.I.M=0;var b=this.I;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=kk(b,-2);else{8===e&&(e=9);var k=new xk;b.state=k;k.I=b;k.wrap=h;k.G=null;k.Uc=e;k.ka=1<<k.Uc;k.Xa=k.ka-1;k.Bc=f+7;k.Zb=1<<k.Bc;k.Ka=k.Zb-1;k.La=~~((k.Bc+3-1)/3);k.window=new M.lb(2*k.ka);k.head=new M.Ia(k.Zb);k.Ha=new M.Ia(k.ka);k.Hb=1<<f+6;k.ya=4*k.Hb;k.W=new M.lb(k.ya);k.Cb=1*k.Hb;k.Ec=3*k.Hb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.kb=b.Sc=0;b.sc=2;c=b.state;c.pending=0;c.Jb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.H=2===c.wrap?
0:1;c.sb=0;if(!ik){d=Array(16);for(f=g=0;28>f;f++)for(Mj[f]=g,e=0;e<1<<Ej[f];e++)Lj[g++]=f;Lj[g-1]=f;for(f=g=0;16>f;f++)for(Nj[f]=g,e=0;e<1<<Fj[f];e++)Kj[g++]=f;for(g>>=7;30>f;f++)for(Nj[f]=g<<7,e=0;e<1<<Fj[f]-7;e++)Kj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Ij[2*e+1]=8,e++,d[8]++;for(;255>=e;)Ij[2*e+1]=9,e++,d[9]++;for(;279>=e;)Ij[2*e+1]=7,e++,d[7]++;for(;287>=e;)Ij[2*e+1]=8,e++,d[8]++;Xj(Ij,287,d);for(e=0;30>e;e++)Jj[2*e+1]=5,Jj[2*e]=Wj(e,5);Pj=new Oj(Ij,Ej,257,286,15);Qj=new Oj(Jj,
Fj,0,30,15);Rj=new Oj([],Gj,0,19,7);ik=!0}c.ac=new Sj(c.qa,Pj);c.Wb=new Sj(c.bb,Qj);c.Yc=new Sj(c.ia,Rj);c.ma=0;c.ga=0;Yj(c);c=0}else c=kk(b,-2);0===c&&(b=b.state,b.Kd=2*b.ka,lk(b.head),b.Gc=wk[b.level].xe,b.kd=wk[b.level].ke,b.qd=wk[b.level].Ae,b.pd=wk[b.level].we,b.o=0,b.ta=0,b.u=0,b.ra=0,b.R=b.wa=2,b.fb=0,b.K=0);b=c}}else b=-2;if(0!==b)throw Error(Cj[b]);a.header&&(b=this.I)&&b.state&&2===b.state.wrap&&(b.state.G=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=vj(a.dictionary):
"[object ArrayBuffer]"===Ak.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.I;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.H=wj(a.H,f,g,0));l.wrap=0;g>=l.ka&&(0===b&&(lk(l.head),l.o=0,l.ta=0,l.ra=0),c=new M.lb(l.ka),M.mb(c,f,g-l.ka,l.ka,0),f=c,g=l.ka);c=a.la;d=a.hb;e=a.input;a.la=g;a.hb=0;a.input=f;for(qk(l);3<=l.u;){f=l.o;g=l.u-2;do l.K=(l.K<<l.La^l.window[f+3-1])&l.Ka,l.Ha[f&l.Xa]=l.head[l.K],l.head[l.K]=f,f++;while(--g);
l.o=f;l.u=2;qk(l)}l.o+=l.u;l.ta=l.o;l.ra=l.u;l.u=0;l.R=l.wa=2;l.fb=0;a.hb=d;a.input=e;a.la=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Cj[b]);this.Of=!0}}
Bk.prototype.push=function(a,b){var c=this.I,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=vj(a):"[object ArrayBuffer]"===Ak.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.la=c.input.length;do{0===c.M&&(c.output=new M.lb(d),c.wb=0,c.M=d);a=yk(c,e);if(1!==a&&0!==a)return Ck(this,a),this.ended=!0,!1;if(0===c.M||0===c.la&&(4===e||2===e))if("string"===this.options.to){var f=M.Rc(c.output,c.wb);b=f;f=f.length;if(65537>f&&(b.subarray&&uj||!b.subarray))b=
String.fromCharCode.apply(null,M.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=M.Rc(c.output,c.wb),this.chunks.push(b)}while((0<c.la||0===c.M)&&1!==a);if(4===e)return(c=this.I)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=kk(c,-2):(c.state=null,a=113===d?kk(c,-3):0)):a=-2,Ck(this,a),this.ended=!0,0===a;2===e&&(Ck(this,0),c.M=0);return!0};
function Ck(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):M.hd(a.chunks));a.chunks=[];a.err=b;a.msg=a.I.msg}
function Dk(a,b){b=b||{};b.gzip=!0;b=new Bk(b);b.push(a,!0);if(b.err)throw b.msg||Cj[b.err];return b.result}
;function Ek(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=Eb(a):b=null;return b}
;function Fk(a){return Eb(null===a?"null":void 0===a?"undefined":a)}
;function Gk(a){this.name=a}
;var Hk=new Gk("rawColdConfigGroup");var Ik=new Gk("rawHotConfigGroup");function Jk(a){this.F=Kf(a)}
x(Jk,ng);var Kk=new Gk("continuationCommand");var Lk=new Gk("webCommandMetadata");var Mk=new Gk("signalServiceEndpoint");var Nk={Af:"EMBEDDED_PLAYER_MODE_UNKNOWN",xf:"EMBEDDED_PLAYER_MODE_DEFAULT",zf:"EMBEDDED_PLAYER_MODE_PFP",yf:"EMBEDDED_PLAYER_MODE_PFL"};var Ok=new Gk("feedbackEndpoint");function Pk(a){this.F=Kf(a)}
x(Pk,ng);Pk.prototype.setTrackingParams=function(a){return Wf(this,1,ff(a,!0))};var Qk=new Gk("webPlayerShareEntityServiceEndpoint");var Rk=new Gk("playlistEditEndpoint");var Sk=new Gk("modifyChannelNotificationPreferenceEndpoint");var Tk=new Gk("unsubscribeEndpoint");var Uk=new Gk("subscribeEndpoint");function Vk(){var a=Wk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Xk(a){D("yt.ads.biscotti.lastId_",a)}
;function Yk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Zk=C.window,$k,al,bl=(null==Zk?void 0:null==($k=Zk.yt)?void 0:$k.config_)||(null==Zk?void 0:null==(al=Zk.ytcfg)?void 0:al.data_)||{};D("yt.config_",bl);function cl(){Yk(bl,arguments)}
function P(a,b){return a in bl?bl[a]:b}
function dl(a){var b=bl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var el=[];function fl(a){el.forEach(function(b){return b(a)})}
function gl(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){hl(b)}}:a}
function hl(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),cl("ERRORS",b));fl(a)}
function il(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),cl("ERRORS",f))}
;var jl=/^[\w.]*$/,kl={q:!0,search_query:!0};function ll(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=ml(f[0]||""),h=ml(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?jb(k,h):c[g]=[k,h]}else c[g]=h}catch(t){var l=t,n=f[0],p=String(ll);l.args=[{key:n,value:f[1],query:a,method:nl===p?"unchanged":p}];kl.hasOwnProperty(n)||il(l)}}return c}
var nl=String(ll);function ol(a){var b=[];kb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];db(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function pl(a){"?"===a.charAt(0)&&(a=a.substring(1));return ll(a,"&")}
function ql(a){return-1!==a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),pl(1<a.length?a[1]:a[0])):{}}
function rl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=pl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return fc(a,e)+d}
function sl(a){if(!b)var b=window.location.href;var c=$b(1,a),d=ac(a);c&&d?(a=a.match(Yb),b=b.match(Yb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ac(b)===d&&(Number($b(4,b))||null)===(Number($b(4,a))||null):!0;return a}
function ml(a){return a&&a.match(jl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function tl(a){var b=ul;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=zi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(na){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Wh:g;try{var h=g.history.length}catch(na){h=0}e.u_his=h;var k;e.u_h=null==(k=Wh.screen)?void 0:k.height;var l;e.u_w=null==(l=Wh.screen)?void 0:l.width;var n;e.u_ah=null==(n=Wh.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=Wh.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=Wh.screen)?void 0:t.colorDepth}catch(na){}h=b.h;try{var r=h.screenX;var w=h.screenY}catch(na){}try{var y=h.outerWidth;var B=h.outerHeight}catch(na){}try{var G=h.innerWidth;var J=h.innerHeight}catch(na){}try{var H=h.screenLeft;var T=h.screenTop}catch(na){}try{G=h.innerWidth,J=h.innerHeight}catch(na){}try{var I=h.screen.availWidth;var ha=h.screen.availTop}catch(na){}r=[H,T,r,w,I,ha,y,B,G,J];try{var O=(b.h.top||window).document,S="CSS1Compat"==
O.compatMode?O.documentElement:O.body;var V=(new vd(S.clientWidth,S.clientHeight)).round()}catch(na){V=new vd(-12245933,-12245933)}O=V;V={};var ma=void 0===ma?C:ma;S=new Fi;"SVGElement"in ma&&"createElementNS"in ma.document&&S.set(0);w=wi();w["allow-top-navigation-by-user-activation"]&&S.set(1);w["allow-popups-to-escape-sandbox"]&&S.set(2);ma.crypto&&ma.crypto.subtle&&S.set(3);"TextDecoder"in ma&&"TextEncoder"in ma&&S.set(4);ma=Gi(S);V.bc=ma;V.bih=O.height;V.biw=O.width;V.brdim=r.join();b=b.i;b=(V.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,V.wgl=!!Wh.WebGLRenderingContext,V);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ul=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return ol(tl(a))});Wa();navigator.userAgent.indexOf(" (CrKey ");function R(a){a=vl(a);return"string"===typeof a&&"false"===a?!1:!!a}
function U(a,b){a=vl(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function vl(a){return P("EXPERIMENT_FLAGS",{})[a]}
function wl(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});d=v(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var xl="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function yl(){if(!xl)return null;var a=xl();return"open"in a?a:null}
function zl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Al(a,b){"function"===typeof a&&(a=gl(a));return window.setTimeout(a,b)}
;var Bl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ka(Bl),["client_dev_set_cookie"]);var Cl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Dl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka(Bl)),El=!1;
function Fl(a,b){b=void 0===b?{}:b;var c=sl(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in Cl){var f=P(Cl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=P("VISITOR_DATA"));!f||!c&&ac(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===P("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!ac(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ac(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&ac(a)||(b["X-YouTube-Ad-Signals"]=ol(tl()));return b}
function Gl(a){var b=window.location.search,c=ac(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&sl(a)&&(c=document.location.hostname);var d=Zb($b(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=pl(b),f={};db(Dl,function(g){e[g]&&(f[g]=e[g])});
return rl(a,f||{},!1)}
function Hl(a,b){var c=b.format||"JSON";a=Il(a,b);var d=Jl(a,b),e=!1,f=Kl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=zl(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=Ll(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Al(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Il(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=rl(a,b||{},!0);return a}
function Jl(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ac(a)&&!b.withCredentials&&ac(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=pl(e),vb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):ec(e));f=e||f&&!nb(f);!El&&f&&"POST"!=b.method&&(El=!0,hl(Error("AJAX request with postData should use POST")));return e}
function Ll(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,il(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ml(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=Nl(g)})}d&&Ol(e);
return e}
function Ol(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=xb();d=e?e.createHTML(d):d;a[c]=new Ub(d)}else Ol(a[b])}}
function Ml(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Nl(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Pl(a,b){b.method="POST";b.postParams||(b.postParams={});return Hl(a,b)}
function Kl(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&gl(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=yl();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;R("debug_forward_web_query_parameters")&&(a=Gl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Fl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Ql=[{Hc:function(a){return"Cannot read property '"+a.key+"'"},
ec:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Hc:function(a){return"Cannot call '"+a.key+"'"},
ec:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Hc:function(a){return a.key+" is not defined"},
ec:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Sl={Ta:[],Qa:[{callback:Rl,weight:500}]};function Rl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Tl(){this.Qa=[];this.Ta=[]}
var Ul;function Vl(){if(!Ul){var a=Ul=new Tl;a.Ta.length=0;a.Qa.length=0;Sl.Ta&&a.Ta.push.apply(a.Ta,Sl.Ta);Sl.Qa&&a.Qa.push.apply(a.Qa,Sl.Qa)}return Ul}
;var Wl=new L;function Xl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Yl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Yl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Yl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Yl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Zl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=$l(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Xl(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?$l(f+".ve",g,h,k):0;d+=f;d+=$l(e,a[e],b,c);if(500<d)break}}else c[b]=am(a),d+=c[b].length;else c[b]=am(a),d+=c[b].length;return d}
function $l(a,b,c,d){c+="."+a;a=am(b);d[c]=a;return c.length+a.length}
function am(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function bm(){this.af=!0}
function cm(){bm.h||(bm.h=new bm);return bm.h}
function dm(a,b){a={};var c=Jg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in bl||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in bl&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return a}
;var em={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function fm(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function gm(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function hm(a,b,c,d,e){Fg.set(""+a,b,{dc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function im(a){return Fg.get(""+a,void 0)}
function jm(a,b,c){Fg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function km(){if(!Fg.isEnabled())return!1;if(Fg.h.cookie)return!0;Fg.set("TESTCOOKIESENABLED","1",{dc:60});if("1"!==Fg.get("TESTCOOKIESENABLED"))return!1;Fg.remove("TESTCOOKIESENABLED");return!0}
;var lm=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",lm);function mm(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=im(this.h);a&&this.parse(a)}
var nm;function om(){nm||(nm=new mm);return nm}
m=mm.prototype;m.get=function(a,b){pm(a);qm(a);a=void 0!==lm[a]?lm[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){pm(a);qm(a);if(null==b)throw Error("ExpectedNotNull");lm[a]=b.toString()};
function rm(a){return!!((sm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){pm(a);qm(a);delete lm[a]};
m.clear=function(){for(var a in lm)delete lm[a]};
function qm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function pm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function sm(a){a=void 0!==lm[a]?lm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(lm[d]=c.toString())}};var tm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},um={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function wm(){var a=C.navigator;return a?a.connection:void 0}
function xm(){var a=wm();if(a){var b=tm[a.type||"unknown"]||"CONN_UNKNOWN";a=tm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function ym(){var a=wm();if(null!=a&&a.effectiveType)return um.hasOwnProperty(a.effectiveType)?um[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function W(a){var b=A.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
x(W,Error);function zm(){try{return Am(),!0}catch(a){return!1}}
function Am(a){if(void 0!==P("DATASYNC_ID"))return P("DATASYNC_ID");throw new W("Datasync ID not set",void 0===a?"unknown":a);}
;function Bm(){}
function Cm(a,b){return Ei.ab(a,0,b)}
Bm.prototype.na=function(a,b){return this.ab(a,1,b)};
Bm.prototype.Ab=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Dm=U("web_emulated_idle_callback_delay",300),Em=1E3/60-3,Fm=[8,5,4,3,2,1,0];
function Gm(a){a=void 0===a?{}:a;K.call(this);this.i=[];this.j={};this.ba=this.h=0;this.X=this.m=!1;this.P=[];this.T=this.ea=!1;for(var b=v(Fm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.pc=a.timeout||1;this.D=Em;this.A=0;this.ha=this.Ce.bind(this);this.oc=this.df.bind(this);this.Fa=this.Pd.bind(this);this.Za=this.le.bind(this);this.Pb=this.Fe.bind(this);this.sa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.fa=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ha)}
x(Gm,K);m=Gm.prototype;m.Ab=function(a){var b=Wa();Hm(this,a);a=Wa()-b;this.m||(this.D-=a)};
m.ab=function(a,b,c){++this.ba;if(10===b)return this.Ab(a),this.ba;var d=this.ba;this.j[d]=a;this.m&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.X||this.m||(0!==this.h&&Im(this)!==this.A&&this.stop(),this.start()));return d};
m.oa=function(a){delete this.j[a]};
function Jm(a){a.P.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function Km(a){return!a.isHidden()&&a.fa}
function Im(a){if(a.i[8].length){if(a.T)return 4;if(Km(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?Km(a)?3:2:1;return 0}
m.Ib=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Hm(a,b){try{b()}catch(c){a.Ib(c)}}
function Lm(a){for(var b=v(Fm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.le=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ea=!0;Mm(this,b);this.ea=!1};
m.df=function(){Mm(this)};
m.Pd=function(){Nm(this)};
m.Fe=function(a){this.T=!0;var b=Im(this);4===b&&b!==this.A&&(this.stop(),this.start());Mm(this,void 0,a);this.T=!1};
m.Ce=function(){this.isHidden()||Nm(this);this.h&&(this.stop(),this.start())};
function Nm(a){a.stop();a.m=!0;for(var b=Wa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Hm(a,e)}Om(a);a.m=!1;Lm(a)&&a.start();b=Wa()-b;a.D-=b}
function Om(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function Mm(a,b,c){a.T&&4===a.A&&a.h||a.stop();a.m=!0;b=Wa()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ib(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Hm(a,f);d=a.ea?0:1;d=a.l>d?a.l:d;if(!(Wa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Hm(a,c)}while(c&&Wa()<b)}a.m=!1;Om(a);a.D=Em;Lm(a)&&a.start()}
m.start=function(){this.X=!1;if(0===this.h)switch(this.A=Im(this),this.A){case 1:var a=this.Za;this.h=this.sa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Dm);break;case 2:this.h=window.setTimeout(this.oc,this.pc);break;case 3:this.h=window.requestAnimationFrame(this.Pb);break;case 4:this.h=window.setTimeout(this.Fa,0)}};
m.pause=function(){this.stop();this.X=!0};
m.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.sa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.S=function(){Jm(this);this.stop();this.fa&&document.removeEventListener("visibilitychange",this.ha);K.prototype.S.call(this)};var Pm=E("yt.scheduler.instance.timerIdMap_")||{},Qm=U("kevlar_tuner_scheduler_soft_state_timer_ms",800),Rm=0,Sm=0;function Tm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new Gm(P("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Um(){Vm();var a=E("ytglobal.schedulerInstanceInstance_");a&&(pc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Vm(){Jm(Tm());for(var a in Pm)Pm.hasOwnProperty(a)&&delete Pm[Number(a)]}
function Wm(a,b,c){if(!c)return c=void 0===c,-Tm().ab(a,b,c);var d=window.setTimeout(function(){var e=Tm().ab(a,b);Pm[d]=e},c);
return d}
function Xm(a){Tm().Ab(a)}
function Ym(a){var b=Tm();if(0>a)b.oa(-a);else{var c=Pm[a];c?(b.oa(c),delete Pm[a]):window.clearTimeout(a)}}
function Zm(){$m()}
function $m(){window.clearTimeout(Rm);Tm().start()}
function an(){Tm().pause();window.clearTimeout(Rm);Rm=window.setTimeout(Zm,Qm)}
function bn(){window.clearTimeout(Sm);Sm=window.setTimeout(function(){cn(0)},Qm)}
function cn(a){bn();var b=Tm();b.l=a;b.start()}
function dn(a){bn();var b=Tm();b.l>a&&(b.l=a,b.start())}
function en(){window.clearTimeout(Sm);var a=Tm();a.l=0;a.start()}
function fn(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",Um),D("yt.scheduler.instance.addJob",Wm),D("yt.scheduler.instance.addImmediateJob",Xm),D("yt.scheduler.instance.cancelJob",Ym),D("yt.scheduler.instance.cancelAllJobs",Vm),D("yt.scheduler.instance.start",$m),D("yt.scheduler.instance.pause",an),D("yt.scheduler.instance.setPriorityThreshold",cn),D("yt.scheduler.instance.enablePriorityThreshold",dn),D("yt.scheduler.instance.clearPriorityThreshold",en),D("yt.scheduler.initialized",
!0))}
;function gn(){Bm.apply(this,arguments)}
x(gn,Bm);function hn(){gn.h||(gn.h=new gn);return gn.h}
gn.prototype.ab=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Al(a,c||0)};
gn.prototype.oa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
gn.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
gn.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Ei=hn();R("web_scheduler_auto_init")&&fn();function jn(a){var b=new kj;(b=b.isAvailable()?a?new qj(b,a):b:null)||(a=new lj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new fj(a):null;this.i=document.domain||window.location.hostname}
jn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new qh).serialize(b))}catch(f){return}else e=escape(b);hm(a,e,c,this.i)};
jn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=im(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
jn.prototype.remove=function(a){this.h&&this.h.remove(a);jm(a,"/",this.i)};var kn=function(){var a;return function(){a||(a=new jn("ytidb"));return a}}();
function ln(){var a;return null==(a=kn())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var mn=[],nn,on=!1;function pn(){var a={};for(nn=new qn(void 0===a.handleError?rn:a.handleError,void 0===a.logEvent?sn:a.logEvent);0<mn.length;)switch(a=mn.shift(),a.type){case "ERROR":nn.Ib(a.payload);break;case "EVENT":nn.logEvent(a.eventType,a.payload)}}
function tn(a){on||(nn?nn.Ib(a):(mn.push({type:"ERROR",payload:a}),10<mn.length&&mn.shift()))}
function un(a,b){on||(nn?nn.logEvent(a,b):(mn.push({type:"EVENT",eventType:a,payload:b}),10<mn.length&&mn.shift()))}
;function vn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function wn(a){return a.substr(0,a.indexOf(":"))||a}
;var xn=re||se;function yn(a){var b=Lb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var zn={},An=(zn.AUTH_INVALID="No user identifier specified.",zn.EXPLICIT_ABORT="Transaction was explicitly aborted.",zn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",zn.MISSING_INDEX="Index not created.",zn.MISSING_OBJECT_STORES="Object stores not created.",zn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",zn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",zn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
zn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",zn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",zn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",zn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",zn),Bn={},Cn=(Bn.AUTH_INVALID="ERROR",Bn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Bn.EXPLICIT_ABORT="IGNORED",Bn.IDB_NOT_SUPPORTED="ERROR",Bn.MISSING_INDEX=
"WARNING",Bn.MISSING_OBJECT_STORES="ERROR",Bn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Bn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Bn.QUOTA_EXCEEDED="WARNING",Bn.QUOTA_MAYBE_EXCEEDED="WARNING",Bn.UNKNOWN_ABORT="WARNING",Bn.INCOMPATIBLE_DB_VERSION="WARNING",Bn),Dn={},En=(Dn.AUTH_INVALID=!1,Dn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Dn.EXPLICIT_ABORT=!1,Dn.IDB_NOT_SUPPORTED=!1,Dn.MISSING_INDEX=!1,Dn.MISSING_OBJECT_STORES=!1,Dn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Dn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Dn.QUOTA_EXCEEDED=!1,Dn.QUOTA_MAYBE_EXCEEDED=!0,Dn.UNKNOWN_ABORT=!0,Dn.INCOMPATIBLE_DB_VERSION=!1,Dn);function Fn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?An[a]:c;d=void 0===d?Cn[a]:d;e=void 0===e?En[a]:e;W.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Fn.prototype)}
x(Fn,W);function Gn(a,b){Fn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},An.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Gn.prototype)}
x(Gn,Fn);function Hn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Hn.prototype)}
x(Hn,Error);var In=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Jn(a,b,c,d){b=wn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Fn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Fn("QUOTA_EXCEEDED",a);if(te&&"UnknownError"===e.name)return new Fn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Hn)return new Fn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&In.some(function(f){return e.message.includes(f)}))return new Fn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Fn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",sd:e.name})];e.level="WARNING";return e}
function Kn(a,b,c){var d=ln();return new Fn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Ln(a){if(!a)throw Error();throw a;}
function Mn(a){return a}
function Nn(a){this.h=a}
function On(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
On.all=function(a){return new On(new Nn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={rb:0};f.rb<a.length;f={rb:f.rb},++f.rb)On.resolve(a[f.rb]).then(function(g){return function(h){d[g.rb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
On.resolve=function(a){return new On(new Nn(function(b,c){a instanceof On?a.then(b,c):b(a)}))};
On.reject=function(a){return new On(new Nn(function(b,c){c(a)}))};
On.prototype.then=function(a,b){var c=this,d=null!=a?a:Mn,e=null!=b?b:Ln;return new On(new Nn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Pn(c,c,d,f,g)}),c.i.push(function(){Qn(c,c,e,f,g)})):"FULFILLED"===c.state.status?Pn(c,c,d,f,g):"REJECTED"===c.state.status&&Qn(c,c,e,f,g)}))};
On.prototype.catch=function(a){return this.then(void 0,a)};
function Pn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof On?Rn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Qn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof On?Rn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Rn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof On?Rn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Sn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Tn(a){return new Promise(function(b,c){Sn(a,b,c)})}
function Un(a){return new On(new Nn(function(b,c){Sn(a,b,c)}))}
;function Vn(a,b){return new On(new Nn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Wn=window,X=Wn.ytcsi&&Wn.ytcsi.now?Wn.ytcsi.now:Wn.performance&&Wn.performance.timing&&Wn.performance.now&&Wn.performance.timing.navigationStart?function(){return Wn.performance.timing.navigationStart+Wn.performance.now()}:function(){return(new Date).getTime()};function Xn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(X());this.i=!1}
m=Xn.prototype;m.add=function(a,b,c){return Yn(this,[a],{mode:"readwrite",ja:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Yn(this,[a],{mode:"readwrite",ja:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Yn(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).count(b)})};
function Zn(a,b,c){a=a.h.createObjectStore(b,c);return new $n(a)}
m.delete=function(a,b){return Yn(this,[a],{mode:"readwrite",ja:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Yn(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).get(b)})};
function ao(a,b,c){return Yn(a,[b],{mode:"readwrite",ja:!0},function(d){d=d.objectStore(b);return Un(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Yn(a,b,c,d){var e,f,g,h,k,l,n,p,t,r,w,y;return z(function(B){switch(B.h){case 1:var G={mode:"readonly",ja:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.ja?3:1;g=0;case 2:if(h){B.B(4);break}g++;k=Math.round(X());za(B,5);l=a.h.transaction(b,e.mode);G=B.yield;var J=new bo(l);J=co(J,d);return G.call(B,J,7);case 7:return n=B.i,p=Math.round(X()),eo(a,k,p,g,void 0,b.join(),e),B.return(n);case 5:t=Aa(B);r=Math.round(X());w=Jn(t,
a.h.name,b.join(),a.h.version);if((y=w instanceof Fn&&!w.h)||g>=f)eo(a,k,r,g,w,b.join(),e),h=w;B.B(2);break;case 4:return B.return(Promise.reject(h))}})}
function eo(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Fn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&un("QUOTA_EXCEEDED",{dbName:wn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Fn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),un("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),fo(a,!1,d,f,b,g.tag),tn(e)):fo(a,!0,d,f,b,g.tag)}
function fo(a,b,c,d,e,f){un("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function $n(a){this.h=a}
m=$n.prototype;m.add=function(a,b){return Un(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Un(this.h.clear()).then(function(){})};
function go(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Un(this.h.count(a))};
function ho(a,b){return io(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?ho(this,a):Un(this.h.delete(a))};
m.get=function(a){return Un(this.h.get(a))};
m.index=function(a){try{return new jo(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Hn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function io(a,b,c){a=a.h.openCursor(b.query,b.direction);return ko(a).then(function(d){return Vn(d,c)})}
function bo(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Fn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function co(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
bo.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Fn("EXPLICIT_ABORT");};
bo.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new $n(a),this.i.set(a,b));return b};
function jo(a){this.h=a}
m=jo.prototype;m.count=function(a){return Un(this.h.count(a))};
m.delete=function(a){return lo(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Un(this.h.get(a))};
m.getKey=function(a){return Un(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function lo(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ko(a).then(function(d){return Vn(d,c)})}
function mo(a,b){this.request=a;this.cursor=b}
function ko(a){return Un(a).then(function(b){return b?new mo(a,b):null})}
m=mo.prototype;m.advance=function(a){this.cursor.advance(a);return ko(this.request)};
m.continue=function(a){this.cursor.continue(a);return ko(this.request)};
m.delete=function(){return Un(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Un(this.cursor.update(a))};function no(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Xn(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Rd,k=c.blocking,l=c.bf,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&un("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:wn(a)});var w=f(),y=new bo(g.transaction);
n&&n(w,function(B){return r.oldVersion<B&&r.newVersion>=B},y);
y.done.catch(function(B){e(B)})}catch(B){e(B)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){un("IDB_UNEXPECTEDLY_CLOSED",{dbName:wn(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function oo(a,b,c){c=void 0===c?{}:c;return no(a,b,c)}
function po(a,b){b=void 0===b?{}:b;var c,d,e,f;return z(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Rd)&&c.addEventListener("blocked",function(){e()}),g.yield(Tn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Aa(g),Jn(f,a,"",-1);})}
;function qo(a,b){this.name=a;this.options=b;this.j=!0;this.v=this.l=0}
qo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return oo(a,b,c)};
qo.prototype.delete=function(a){a=void 0===a?{}:a;return po(this.name,a)};
function ro(a,b){return new Fn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function so(a,b){if(!b)throw Kn("openWithToken",wn(a.name));return a.open()}
qo.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,r,w;return z(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",za(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:for(var B=h=y.i,G=c.options,J=[],H=v(Object.keys(G.xb)),T=H.next();!T.done;T=H.next()){T=T.value;var I=G.xb[T],ha=void 0===I.Ie?Number.MAX_VALUE:I.Ie;!(B.h.version>=I.Bb)||B.h.version>=ha||B.h.objectStoreNames.contains(T)||J.push(T)}k=J;if(0===k.length){y.B(5);break}l=Object.keys(c.options.xb);n=h.objectStoreNames();
if(c.v<U("ytidb_reopen_db_retries",0))return c.v++,h.close(),tn(new Fn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<U("ytidb_remake_db_retries",1))){y.B(6);break}c.l++;return y.yield(c.delete(),7);case 7:return tn(new Fn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new Gn(n,l);case 5:return y.return(h);case 2:p=Aa(y);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){y.B(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;r=t.h.version;if(void 0!==c.options.version&&r>c.options.version+1)throw t.close(),c.j=!1,ro(c,r);return y.return(t);case 8:throw b(),p instanceof Error&&!R("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Jn(p,c.name,"",null!=(w=c.options.version)?w:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw ro(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,bf:b,upgrade:this.options.upgrade};return this.h=d=a()};var to=new qo("YtIdbMeta",{xb:{databases:{Bb:1}},upgrade:function(a,b){b(1)&&Zn(a,"databases",{keyPath:"actualName"})}});
function uo(a,b){var c;return z(function(d){if(1==d.h)return d.yield(so(to,b),2);c=d.i;return d.return(Yn(c,["databases"],{ja:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Un(f.h.put(a,void 0)).then(function(){})})}))})}
function vo(a,b){var c;return z(function(d){if(1==d.h)return a?d.yield(so(to,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function wo(a,b){var c,d;return z(function(e){return 1==e.h?(c=[],e.yield(so(to,b),2)):3!=e.h?(d=e.i,e.yield(Yn(d,["databases"],{ja:!0,mode:"readonly"},function(f){c.length=0;return io(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function xo(a){return wo(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function yo(a,b,c){return wo(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function zo(a){var b,c;return z(function(d){if(1==d.h)return b=Am("YtIdbMeta hasAnyMeta other"),d.yield(wo(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Ao,Bo=new function(){}(new function(){});
function Co(){var a,b,c,d;return z(function(e){switch(e.h){case 1:a=ln();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=xn)f=/WebKit\/([0-9]+)/.exec(Lb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Lb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Dc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(uo(d,Bo),4);case 4:return e.yield(vo("yt-idb-test-do-not-use",Bo),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Do(){if(void 0!==Ao)return Ao;on=!0;return Ao=Co().then(function(a){on=!1;var b;if(null!=(b=kn())&&b.h){var c;b={hasSucceededOnce:(null==(c=ln())?void 0:c.hasSucceededOnce)||a};var d;null==(d=kn())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Eo(){return E("ytglobal.idbToken_")||void 0}
function Fo(){var a=Eo();return a?Promise.resolve(a):Do().then(function(b){(b=b?Bo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Go=0;function Ho(a,b){Go||(Go=Ei.na(function(){var c,d,e,f,g;return z(function(h){switch(h.h){case 1:return h.yield(Fo(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(yo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.B(6);break}f=e[0];return h.yield(po(f.actualName),7);case 7:return h.yield(vo(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Aa(h),tn(g),d=!1;case 4:Ei.oa(Go),Go=0,d&&Ho(a,b),h.h=0}})}))}
function Io(){var a;return z(function(b){return 1==b.h?b.yield(Fo(),2):(a=b.i)?b.return(zo(a)):b.return(!1)})}
new Uh;function Jo(a){if(!zm())throw a=new Fn("AUTH_INVALID",{dbName:a}),tn(a),a;var b=Am();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Ko(a,b,c,d){var e,f,g,h,k,l;return z(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(Fo(),2);case 2:g=n.i;if(!g)throw h=Kn("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),tn(h),h;vn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Jo(a);za(n,3);return n.yield(uo(k,g),5);case 5:return n.yield(oo(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Aa(n),za(n,7),n.yield(vo(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Aa(n);case 8:throw l;}})}
function Lo(a,b,c){c=void 0===c?{}:c;return Ko(a,b,!1,c)}
function Mo(a,b,c){c=void 0===c?{}:c;return Ko(a,b,!0,c)}
function No(a,b){b=void 0===b?{}:b;var c,d;return z(function(e){if(1==e.h)return e.yield(Fo(),2);if(3!=e.h){c=e.i;if(!c)return e.return();vn(a);d=Jo(a);return e.yield(po(d.actualName,b),3)}return e.yield(vo(d.actualName,c),0)})}
function Oo(a,b,c){a=a.map(function(d){return z(function(e){return 1==e.h?e.yield(po(d.actualName,b),2):e.yield(vo(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Po(){var a=void 0===a?{}:a;var b,c;return z(function(d){if(1==d.h)return d.yield(Fo(),2);if(3!=d.h){b=d.i;if(!b)return d.return();vn("LogsDatabaseV2");return d.yield(xo(b),3)}c=d.i;return d.yield(Oo(c,a,b),0)})}
function Qo(a,b){b=void 0===b?{}:b;var c;return z(function(d){if(1==d.h)return d.yield(Fo(),2);if(3!=d.h){c=d.i;if(!c)return d.return();vn(a);return d.yield(po(a,b),3)}return d.yield(vo(a,c),0)})}
;function Ro(a,b){qo.call(this,a,b);this.options=b;vn(a)}
x(Ro,qo);function So(a,b){var c;return function(){c||(c=new Ro(a,b));return c}}
Ro.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.lc?Mo:Lo)(a,b,Object.assign({},c))};
Ro.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.lc?Qo:No)(this.name,a)};
function To(a,b){return So(a,b)}
;var Uo={},Vo=To("ytGcfConfig",{xb:(Uo.coldConfigStore={Bb:1},Uo.hotConfigStore={Bb:1},Uo),lc:!1,upgrade:function(a,b){b(1)&&(go(Zn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),go(Zn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Wo(a){return so(Vo(),a)}
function Xo(a,b,c){var d,e,f;return z(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:X()},g.yield(Wo(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(ao(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Yo(a,b,c,d){var e,f,g;return z(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:X()},h.yield(Wo(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(ao(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Zo(a){var b,c;return z(function(d){return 1==d.h?d.yield(Wo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Yn(b,["coldConfigStore"],{mode:"readwrite",ja:!0},function(e){return lo(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function $o(a){var b,c;return z(function(d){return 1==d.h?d.yield(Wo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Yn(b,["hotConfigStore"],{mode:"readwrite",ja:!0},function(e){return lo(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function ap(){K.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ka(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
x(ap,K);ap.prototype.S=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;K.prototype.S.call(this)};function bp(){this.h=0;this.i=new ap}
function cp(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:P("RAW_HOT_CONFIG_GROUP")}
function dp(a,b,c){var d,e,f;return z(function(g){switch(g.h){case 1:if(!R("start_client_gcf")){g.B(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=Eo();if(!d){g.B(3);break}if(c){g.B(4);break}return g.yield($o(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(Xo(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function ep(a,b,c){var d,e,f,g;return z(function(h){if(1==h.h){if(!R("start_client_gcf"))return h.B(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Eo())?c?h.B(4):h.yield(Zo(d),5):h.B(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return h.yield(Yo(c,b,g,d),0)})}
function fp(){if(!bp.h){var a=new bp;bp.h=a}a=bp.h;var b=X()-a.h;if(!(0!==a.h&&b<U("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=X());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
bp.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function gp(){return"INNERTUBE_API_KEY"in bl&&"INNERTUBE_API_VERSION"in bl}
function hp(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),me:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),md:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Vf:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),oe:P("INNERTUBE_CONTEXT_HL"),ne:P("INNERTUBE_CONTEXT_GL"),pe:P("INNERTUBE_HOST_OVERRIDE")||"",re:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),qe:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function ip(a){var b={client:{hl:a.oe,gl:a.ne,clientName:a.md,clientVersion:a.innertubeContextClientVersion,configInfo:a.me}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=wl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.md;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=gm()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(R("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=xm())&&b&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&(a=ym())&&
b&&(b.client.effectiveConnectionType=a);R("start_client_gcf")&&(e=fp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(pl(P("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function jp(a,b,c){c=void 0===c?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||P("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Pf:(a=dm(cm()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var kp="undefined"!==typeof TextEncoder?new TextEncoder:null,lp=kp?function(a){return kp.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function mp(a,b){this.version=a;this.args=b}
mp.prototype.serialize=function(){return{version:this.version,args:this.args}};function np(a,b){this.topic=a;this.h=b}
np.prototype.toString=function(){return this.topic};var op=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.zb;L.prototype.publish=L.prototype.Ya;L.prototype.clear=L.prototype.clear;D("ytPubsub2Pubsub2Instance",op);var pp=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",pp);var qp=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",qp);var rp=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",rp);
D("ytPubsub2Pubsub2SkipSubKey",null);function sp(a,b){var c=tp();c&&c.publish.call(c,a.toString(),a,b)}
function up(a){var b=vp,c=tp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(pp[d])try{if(f&&b instanceof np&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Wa){var l=new h;h.Wa=l.version}var n=h.Wa}catch(B){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var t=k.args,r=t.length;if(0<r){var w=Array(r);for(k=0;k<r;k++)w[k]=t[k];var y=w}else y=[];f=p.call(n,h,y)}catch(B){throw B.message="yt.pubsub2.Data.deserialize(): "+B.message,B;}}catch(B){throw B.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+B.message,B;}a.call(window,f)}catch(B){hl(B)}},rp[b.toString()]?E("yt.scheduler.instance")?Ei.na(g):Al(g,0):g())});
pp[d]=!0;qp[b.toString()]||(qp[b.toString()]=[]);qp[b.toString()].push(d);return d}
function wp(){var a=xp,b=up(function(c){a.apply(void 0,arguments);yp(b)});
return b}
function yp(a){var b=tp();b&&("number"===typeof a&&(a=[a]),db(a,function(c){b.unsubscribeByKey(c);delete pp[c]}))}
function tp(){return E("ytPubsub2Pubsub2Instance")}
;function zp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&sp("meta_logging_csi_event",{timerName:a,mg:b})}
;var Ap=void 0,Bp=void 0;function Cp(){Bp||(Bp=Ek(P("WORKER_SERIALIZATION_URL")));return Bp||void 0}
function Dp(){var a=Cp();Ap||void 0===a||(Ap=new Worker(Cb(a),void 0));return Ap}
;var Ep=U("max_body_size_to_compress",5E5),Fp=U("min_body_size_to_compress",500),Gp=!0,Hp=0,Ip=0,Jp=U("compression_performance_threshold_lr",250),Kp=U("slow_compressions_before_abandon_count",4),Lp=!1,Mp=new Map,Np=1,Op=!0;function Pp(){if("function"===typeof Worker&&Cp()&&!Lp){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Mp.get(c.key);d&&(Qp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Mp.delete(c.key))}},b=Dp();
b&&(b.addEventListener("message",a),b.onerror=function(){Mp.clear()},Lp=!0)}}
function Rp(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:X(),ticks:{},infos:{}};if(Gp)try{var g=Sp(b);if(null!=g&&(g>Ep||g<Fp))d(a,c);else{if(R("gzip_gel_with_worker")&&(R("initial_gzip_use_main_thread")&&!Op||!R("initial_gzip_use_main_thread"))){Lp||Pp();var h=Dp();if(h&&!e){Mp.set(Np,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Np});Np++;return}}var k=Dk(lp(b));Qp(k,f,a,c,d)}}catch(l){il(l),d(a,c)}else d(a,c)}
function Qp(a,b,c,d,e){Op=!1;var f=X();b.ticks.gelc=f;Ip++;R("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Jp&&(Hp++,R("abandon_compression_after_N_slow_zips")?Ip===U("compression_disable_point")&&Hp>Kp&&(Gp=!1):Gp=!1);Tp(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Up(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=X(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Gp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Sp(g);if(null!=h&&(h>Ep||h<Fp))return a;c=b?{level:1}:void 0;f=Dk(lp(g),c);var k=X();e.ticks.gelc=k;if(b){Ip++;if((R("disable_compression_due_to_performance_degredation")||R("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Jp)if(Hp++,R("abandon_compression_after_N_slow_zips")||R("abandon_compression_after_N_slow_zips_lr")){b=Hp/Ip;var l=Kp/U("compression_disable_point");0<Ip&&0===Ip%U("compression_disable_point")&&b>=l&&(Gp=!1)}else Gp=!1;Tp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return il(n),a}}else return a}
function Sp(a){try{return(new Blob(a.split(""))).size}catch(b){return il(b),null}}
function Tp(a){R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||zp("gel_compression",a,{sampleRate:.1})}
;function Vp(a){a=Object.assign({},a);delete a.Authorization;var b=Jg();if(b){var c=new Ki;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=we(c.digest(),3)}return a}
;var Wp;function Xp(){Wp||(Wp=new jn("yt.innertube"));return Wp}
function Yp(a,b,c,d){if(d)return null;d=Xp().get("nextId",!0)||1;var e=Xp().get("requests",!0)||{};e[d]={method:a,request:b,authState:Vp(c),requestTime:Math.round(X())};Xp().set("nextId",d+1,86400,!0);Xp().set("requests",e,86400,!0);return d}
function Zp(a){var b=Xp().get("requests",!0)||{};delete b[a];Xp().set("requests",b,86400,!0)}
function $p(a){var b=Xp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(X())-d.requestTime)){var e=d.authState,f=Vp(jp(!1));qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(X())),aq(a,d.method,e,{}));delete b[c]}}Xp().set("requests",b,86400,!0)}}
;function bq(a){this.Sb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.pb=function(){};
this.now=Date.now;this.Eb=!1;var b;this.Fd=null!=(b=a.Fd)?b:100;var c;this.zd=null!=(c=a.zd)?c:1;var d;this.xd=null!=(d=a.xd)?d:2592E6;var e;this.vd=null!=(e=a.vd)?e:12E4;var f;this.yd=null!=(f=a.yd)?f:5E3;var g;this.U=null!=(g=a.U)?g:void 0;this.Xb=!!a.Xb;var h;this.Vb=null!=(h=a.Vb)?h:.1;var k;this.hc=null!=(k=a.hc)?k:10;a.handleError&&(this.handleError=a.handleError);a.pb&&(this.pb=a.pb);a.Eb&&(this.Eb=a.Eb);a.Sb&&(this.Sb=a.Sb);this.V=a.V;this.Da=a.Da;this.da=a.da;this.aa=a.aa;this.sendFn=a.sendFn;
this.Nc=a.Nc;this.Kc=a.Kc;cq(this)&&(!this.V||this.V("networkless_logging"))&&dq(this)}
function dq(a){cq(a)&&!a.Eb&&(a.h=!0,a.Xb&&Math.random()<=a.Vb&&a.da.Td(a.U),eq(a),a.aa.va()&&a.Ob(),a.aa.listen(a.Nc,a.Ob.bind(a)),a.aa.listen(a.Kc,a.Zc.bind(a)))}
m=bq.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(cq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.da.set(d,this.U).then(function(e){d.id=e;c.aa.va()&&fq(c,d)}).catch(function(e){fq(c,d);
gq(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(cq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.V&&this.V("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.va()||this.V&&this.V("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return z(function(k){if(1==k.h)return k.yield(d.da.set(e,d.U).catch(function(l){gq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.da.set(e,this.U).catch(function(g){d.sendFn(a,b,e.skipRetry);
gq(d,g)})}else this.sendFn(a,b,this.V&&this.V("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(cq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.da.nb(d.id,c.U):e=!0;c.aa.gb&&c.V&&c.V("vss_network_hint")&&c.aa.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.da.set(d,this.U).then(function(g){d.id=g;e&&c.da.nb(d.id,c.U)}).catch(function(g){gq(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Ob=function(){var a=this;if(!cq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.na(function(){var b;return z(function(c){if(1==c.h)return c.yield(a.da.jd("NEW",a.U),2);if(3!=c.h)return b=c.i,b?c.yield(fq(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Ob());c.h=0})},this.Fd))};
m.Zc=function(){this.Da.oa(this.i);this.i=0};
function fq(a,b){var c;return z(function(d){switch(d.h){case 1:if(!cq(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return d.yield(a.da.ue(b.id,a.U),3);case 3:(c=d.i)||a.pb(Error("The request cannot be found in the database."));case 2:if(hq(a,b,a.xd)){d.B(4);break}a.pb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return d.yield(a.da.nb(b.id,a.U),5);case 5:return d.return();case 4:b.skipRetry||(b=iq(a,
b));if(!b){d.B(0);break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return d.yield(a.da.nb(b.id,a.U),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function iq(a,b){if(!cq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return z(function(n){switch(n.h){case 1:g=jq(f);(h=kq(f))&&a.V&&a.V("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.V&&a.V("nwl_consider_error_code")&&g||a.V&&!a.V("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.hc)){n.B(2);break}if(!a.aa.kc){n.B(3);break}return n.yield(a.aa.kc(),3);case 3:if(a.aa.va()){n.B(2);break}c(e,f);if(!a.V||!a.V("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.B(6);
break}return n.yield(a.da.Pc(b.id,a.U,!1),6);case 6:return n.return();case 2:if(a.V&&a.V("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.hc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.B(8);break}return b.sendCount<a.zd?n.yield(a.da.Pc(b.id,a.U,!0,h?!1:void 0),12):n.yield(a.da.nb(b.id,a.U),8);case 12:a.Da.na(function(){a.aa.va()&&a.Ob()},a.yd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return z(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):h.yield(a.da.nb(b.id,a.U),2);a.aa.gb&&a.V&&a.V("vss_network_hint")&&a.aa.gb(!0);d(e,f);h.h=0})};
return b}
function hq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function eq(a){if(!cq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.da.jd("QUEUED",a.U).then(function(b){b&&!hq(a,b,a.vd)?a.Da.na(function(){return z(function(c){if(1==c.h)return void 0===b.id?c.B(2):c.yield(a.da.Pc(b.id,a.U),2);eq(a);c.h=0})}):a.aa.va()&&a.Ob()})}
function gq(a,b){a.Ld&&!a.aa.va()?a.Ld(b):a.handleError(b)}
function cq(a){return!!a.U||a.Sb}
function jq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function kq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var lq;
function mq(){if(lq)return lq();var a={};lq=To("LogsDatabaseV2",{xb:(a.LogsRequestsStore={Bb:2},a),lc:!1,upgrade:function(b,c,d){c(2)&&Zn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),go(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return lq()}
;function nq(a){return so(mq(),a)}
function oq(a,b){var c,d,e,f;return z(function(g){if(1==g.h)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(nq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(ao(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=X();pq(c);return g.return(f)})}
function qq(a,b){var c,d,e,f,g,h,k;return z(function(l){if(1==l.h)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(nq(b),2);if(3!=l.h)return d=l.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,X()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(Yn(d,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(n){return lo(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===
a&&(k.status="QUEUED",p.update(k)))})}),3);
c.ticks.tc=X();pq(c);return l.return(k)})}
function rq(a,b){var c;return z(function(d){if(1==d.h)return d.yield(nq(b),2);c=d.i;return d.return(Yn(c,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Un(f.h.put(g,void 0)).then(function(){return g})})}))})}
function sq(a,b,c,d){c=void 0===c?!0:c;var e;return z(function(f){if(1==f.h)return f.yield(nq(b),2);e=f.i;return f.return(Yn(e,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Un(h.h.put(k,void 0)).then(function(){return k})):On.resolve(void 0)})}))})}
function tq(a,b){var c;return z(function(d){if(1==d.h)return d.yield(nq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function uq(a){var b,c;return z(function(d){if(1==d.h)return d.yield(nq(a),2);b=d.i;c=X()-2592E6;return d.yield(Yn(b,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){return io(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function vq(){z(function(a){return a.yield(Po(),0)})}
function pq(a){R("nwl_csi_killswitch")||zp("networkless_performance",a,{sampleRate:1})}
;var wq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var xq={},yq=To("ServiceWorkerLogsDatabase",{xb:(xq.SWHealthLog={Bb:1},xq),lc:!0,upgrade:function(a,b){b(1)&&go(Zn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function zq(a){return so(yq(),a)}
function Aq(a){var b,c;z(function(d){if(1==d.h)return d.yield(zq(a),2);b=d.i;c=X()-2592E6;return d.yield(Yn(b,["SWHealthLog"],{mode:"readwrite",ja:!0},function(e){return io(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Bq(a){var b;return z(function(c){if(1==c.h)return c.yield(zq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Cq={},Dq=0;function Eq(a){var b=new Image,c=""+Dq++;Cq[c]=b;b.onload=b.onerror=function(){delete Cq[c]};
b.src=a}
;function Fq(){this.h=new Map;this.i=!1}
function Gq(){if(!Fq.h){var a=E("yt.networkRequestMonitor.instance")||new Fq;D("yt.networkRequestMonitor.instance",a);Fq.h=a}return Fq.h}
Fq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Fq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Fq.prototype.removeParams=function(a){return a.split("?")[0]};
Fq.prototype.removeParams=Fq.prototype.removeParams;Fq.prototype.isEndpointCFR=Fq.prototype.isEndpointCFR;Fq.prototype.requestComplete=Fq.prototype.requestComplete;Fq.getInstance=Gq;var Hq;function Iq(){Hq||(Hq=new jn("yt.offline"));return Hq}
function Jq(a){if(R("offline_error_handling")){var b=Iq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Iq().set("errors",b,2592E3,!0)}}
;function Kq(){od.call(this);var a=this;this.j=!1;this.i=Di();this.i.listen("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=Iq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new W(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;hl(d)}Iq().set("errors",{},2592E3,!0)}}})}
x(Kq,od);function Lq(){if(!Kq.h){var a=E("yt.networkStatusManager.instance")||new Kq;D("yt.networkStatusManager.instance",a);Kq.h=a}return Kq.h}
m=Kq.prototype;m.va=function(){return this.i.va()};
m.gb=function(a){this.i.i=a};
m.he=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Yd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.kc=function(a){a=Bi(this.i,a);a.then(function(b){R("use_cfr_monitor")&&Gq().requestComplete("generate_204",b)});
return a};
Kq.prototype.sendNetworkCheckRequest=Kq.prototype.kc;Kq.prototype.listen=Kq.prototype.listen;Kq.prototype.enableErrorFlushing=Kq.prototype.Yd;Kq.prototype.getWindowStatus=Kq.prototype.he;Kq.prototype.networkStatusHint=Kq.prototype.gb;Kq.prototype.isNetworkAvailable=Kq.prototype.va;Kq.getInstance=Lq;function Mq(a){a=void 0===a?{}:a;od.call(this);var b=this;this.i=this.m=0;this.j=Lq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Nq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Nq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){pd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){pd(b,"publicytnetworkstatus-offline")})))}
x(Mq,od);Mq.prototype.va=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Mq.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Mq.prototype.kc=function(a){var b=this,c;return z(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&Gq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.va())})):c?d.return(c(a)):d.return(!0)})};
function Nq(a,b){a.rateLimit?a.i?(Ei.oa(a.m),a.m=Ei.na(function(){a.l!==b&&(pd(a,b),a.l=b,a.i=X())},a.rateLimit-(X()-a.i))):(pd(a,b),a.l=b,a.i=X()):pd(a,b)}
;var Oq;function Pq(){var a=bq.call;Oq||(Oq=new Mq({Zf:!0,Tf:!0}));a.call(bq,this,{da:{Td:uq,nb:tq,jd:qq,ue:rq,Pc:sq,set:oq},aa:Oq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;il(new W(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else hl(b)},
pb:il,sendFn:Qq,now:X,Ld:Jq,Da:hn(),Nc:"publicytnetworkstatus-online",Kc:"publicytnetworkstatus-offline",Xb:!0,Vb:.1,hc:U("potential_esf_error_limit",10),V:R,Eb:!(zm()&&Rq())});this.j=new Uh;R("networkless_immediately_drop_all_requests")&&vq();Qo("LogsDatabaseV2")}
x(Pq,bq);function Sq(){var a=E("yt.networklessRequestController.instance");a||(a=new Pq,D("yt.networklessRequestController.instance",a),R("networkless_logging")&&Fo().then(function(b){a.U=b;dq(a);a.j.resolve();a.Xb&&Math.random()<=a.Vb&&a.U&&Aq(a.U);R("networkless_immediately_drop_sw_health_store")&&Tq(a)}));
return a}
Pq.prototype.writeThenSend=function(a,b){b||(b={});zm()||(this.h=!1);bq.prototype.writeThenSend.call(this,a,b)};
Pq.prototype.sendThenWrite=function(a,b,c){b||(b={});zm()||(this.h=!1);bq.prototype.sendThenWrite.call(this,a,b,c)};
Pq.prototype.sendAndWrite=function(a,b){b||(b={});zm()||(this.h=!1);bq.prototype.sendAndWrite.call(this,a,b)};
Pq.prototype.awaitInitialization=function(){return this.j.promise};
function Tq(a){var b;z(function(c){if(!a.U)throw b=Kn("clearSWHealthLogsDb"),b;return c.return(Bq(a.U).catch(function(d){a.handleError(d)}))})}
function Qq(a,b,c,d){d=void 0===d?!1:d;b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_cfr_monitor")&&Uq(a,b);if(R("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(X())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)Kl(a,void 0,"POST",f);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||
h)Kl(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new $a({url:a});if(k.j&&k.i||k.l){var l=Zb($b(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(ic),t=hc(a,0,"ri",p);if(0>t)var r=null;else{var w=a.indexOf("&",t);if(0>w||w>p)w=p;r=decodeURIComponent(a.slice(t+3,-1!==w?w:0).replace(/\+/g," "))}n="1"!==r}var y=!n;break b}}catch(G){}y=!1}if(y){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var B=!0;break b}}catch(G){}B=!1}c=B?!0:!1}else c=
!1;c||Eq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Rp(a,b.postBody,b,Hl,d)):Rp(a,JSON.stringify(b.postParams),b,Pl,d):Hl(a,b)}
function Uq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Gq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Gq().requestComplete(a,!0);d(e,f)}}
function Rq(){return"www.youtube-nocookie.com"!==ac(document.location.toString())}
;var Vq=!1,Wq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Vq};D("ytNetworklessLoggingInitializationOptions",Wq);function Xq(){var a;z(function(b){if(1==b.h)return b.yield(Fo(),2);a=b.i;if(!a||!zm()&&!R("nwl_init_require_datasync_id_killswitch")||!Rq())return b.B(0);Vq=!0;Wq.isNwlInitialized=Vq;return b.yield(Sq().awaitInitialization(),0)})}
;function Yq(a){var b=this;this.config_=null;a?this.config_=a:gp()&&(this.config_=hp());Cm(function(){$p(b)},5E3)}
Yq.prototype.isReady=function(){!this.config_&&gp()&&(this.config_=hp());return!!this.config_};
function aq(a,b,c,d){function e(w){w=void 0===w?!1:w;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(w||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=Yp(b,c,l,k)),y)){var B=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(T,I){Zp(y);B(T,I)};
c.onFetchSuccess=function(T,I){Zp(y);G(T,I)}}try{if(w&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Sq().writeThenSend(r,g):Sq().sendAndWrite(r,g);
else if(d.compress){var J=!d.networklessOptions.writeThenSend;if(g.postBody){var H=g.postBody;"string"!==typeof H&&(H=JSON.stringify(g.postBody));Rp(r,H,g,Hl,J)}else Rp(r,JSON.stringify(g.postParams),g,Pl,J)}else R("web_all_payloads_via_jspb")?Hl(r,g):Pl(r,g)}catch(T){if("InvalidAccessError"==T.name)y&&(Zp(y),y=0),il(Error("An extension is blocking network request."));else throw T;}y&&Cm(function(){$p(a)},5E3)}
!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&il(new W("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new W("innertube xhrclient not ready",b,c,d);hl(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(w,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(w){if(d.onSuccess)d.onSuccess(w)},
onError:function(w,y){if(d.onError)d.onError(y)},
onFetchError:function(w){if(d.onError)d.onError(w)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.pe)&&(h=f);var k=a.config_.re||!1,l=jp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.qe&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var r=rl(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Wq.isNwlInitialized:Vq)?Do().then(function(w){e(w)}):e(!1)}
;var Zq=0,$q=Fc?"webkit":Ec?"moz":Cc?"ms":Bc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Zq});var ar={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function br(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ar||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function cr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
br.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
br.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
br.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var mb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",mb);var dr=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",dr);
function er(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var fr=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function gr(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=er(a,b,c,d);if(e)return e;e=++dr.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new br(h);if(!yd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new br(h);
h.currentTarget=a;return c.call(a,h)};
g=gl(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),fr()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);mb[e]=[a,b,c,g,d];return e}
function hr(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in mb){var c=mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?fr()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete mb[b]}}))}
;function ir(a){this.D=a;this.h=null;this.l=0;this.A=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.T=gr(window,"mousemove",Ua(this.X,this));a=Ua(this.P,this);"function"===typeof a&&(a=gl(a));this.ba=window.setInterval(a,25)}
Xa(ir,K);ir.prototype.X=function(a){void 0===a.h&&cr(a);var b=a.h;void 0===a.i&&cr(a);this.h=new ud(b,a.i)};
ir.prototype.P=function(){if(this.h){var a=X();if(0!=this.l){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.A=this.h;this.j=(this.j+1)%4}};
ir.prototype.S=function(){window.clearInterval(this.ba);hr(this.T)};var jr={};
function kr(a){var b=void 0===a?{}:a;a=void 0===b.Ee?!1:b.Ee;b=void 0===b.Zd?!0:b.Zd;if(null==E("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&lr();gr(document,"keydown",lr);gr(document,"keyup",lr);gr(document,"mousedown",lr);gr(document,"mouseup",lr);a?gr(window,"touchmove",function(){mr("touchmove",200)},{passive:!0}):(gr(window,"resize",function(){mr("resize",200)}),b&&gr(window,"scroll",function(){mr("scroll",200)}));
new ir(function(){mr("mouse",100)});
gr(document,"touchstart",lr,{passive:!0});gr(document,"touchend",lr,{passive:!0})}}
function mr(a,b){jr[a]||(jr[a]=!0,Ei.na(function(){lr();jr[a]=!1},b))}
function lr(){null==E("_lact",window)&&kr();var a=Date.now();D("_lact",a,window);-1==E("_fact",window)&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function nr(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var or=C.ytPubsubPubsubInstance||new L,pr=C.ytPubsubPubsubSubscribedKeys||{},qr=C.ytPubsubPubsubTopicToKeys||{},rr=C.ytPubsubPubsubIsSynchronous||{};function sr(a,b){var c=tr();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){pr[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{rr[a]?f():Al(f,0)}catch(g){hl(g)}},void 0);
pr[d]=!0;qr[a]||(qr[a]=[]);qr[a].push(d);return d}return 0}
function ur(a){var b=tr();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),db(a,function(c){b.unsubscribeByKey(c);delete pr[c]}))}
function vr(a,b){var c=tr();c&&c.publish.apply(c,arguments)}
function wr(a){var b=tr();if(b)if(b.clear(a),a)xr(a);else for(var c in qr)xr(c)}
function tr(){return C.ytPubsubPubsubInstance}
function xr(a){qr[a]&&(a=qr[a],db(a,function(b){pr[b]&&delete pr[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.zb;L.prototype.publish=L.prototype.Ya;L.prototype.clear=L.prototype.clear;D("ytPubsubPubsubInstance",or);D("ytPubsubPubsubTopicToKeys",qr);D("ytPubsubPubsubIsSynchronous",rr);D("ytPubsubPubsubSubscribedKeys",pr);var yr=Symbol("injectionDeps");function zr(a){this.name=a}
zr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ar(a){this.key=a}
function Br(){this.i=new Map;this.j=new Map;this.h=new Map}
function Cr(a,b){a.i.set(b.jc,b);var c=a.j.get(b.jc);c&&c.hg(a.resolve(b.jc))}
Br.prototype.resolve=function(a){return a instanceof Ar?Dr(this,a.key,[],!0):Dr(this,a,[])};
function Dr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.Id)var e=d.Id;else if(d.hf)e=d[yr]?Er(a,d[yr],c):[],e=d.hf.apply(d,ka(e));else if(d.Hd){e=d.Hd;var f=e[yr]?Er(a,e[yr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.lg||a.h.set(b,e);return e}
function Er(a,b,c){return b?b.map(function(d){return d instanceof Ar?Dr(a,d.key,c,!0):Dr(a,d,c)}):[]}
;var Fr;function Gr(){Fr||(Fr=new Br);return Fr}
;var Hr=window;function Ir(){var a,b;return"h5vcc"in Hr&&(null==(a=Hr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Hr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Hr&&Hr.performance.mark&&Hr.performance.measure?2:0}
function Jr(a){switch(Ir()){case 1:Hr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Hr.performance.mark(a+"-start");break;case 0:break;default:li()}}
function Kr(a){switch(Ir()){case 1:Hr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Hr.performance.mark(c);Hr.performance.measure(a,b,c);break;case 0:break;default:li()}}
;var Lr=R("web_enable_lifecycle_monitoring")&&0!==Ir(),Mr=R("web_enable_lifecycle_monitoring");function Nr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?hn():d;this.j=c;this.scheduler=d;this.i=new Uh;this.h=a;for(a={cb:0};a.cb<this.h.length;a={fc:void 0,cb:a.cb},a.cb++)a.fc=this.h[a.cb],c=function(e){return function(){e.fc.Dc();b.h[e.cb].ic=!0;b.h.every(function(f){return!0===f.ic})&&b.i.resolve()}}(a),d=this.getPriority(a.fc),d=this.scheduler.ab(c,d),this.h[a.cb]=Object.assign({},a.fc,{Dc:c,
jobId:d})}
function Or(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.ic||(a.scheduler.oa(c.jobId),a.scheduler.ab(c.Dc,10))}
Nr.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.ic||this.scheduler.oa(b.jobId),b.ic=!0;this.i.resolve()};
Nr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Pr(a){this.state=a;this.plugins=[];this.l=void 0;this.A={};Lr&&Jr(this.state)}
m=Pr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;A.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Lr&&Kr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Or(this.j),this.j=void 0);Qr(this,a,b);this.state=a;Lr&&Jr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Rr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Rr(a,b){var c=b.filter(function(e){return 10===Sr(a,e)}),d=b.filter(function(e){return 10!==Sr(a,e)});
return a.A.kg?function(){var e=A.apply(0,arguments);return z(function(f){if(1==f.h)return f.yield(a.Le.apply(a,[c].concat(ka(e))),2);a.Cd.apply(a,[d].concat(ka(e)));f.h=0})}:function(){var e=A.apply(0,arguments);
a.Me.apply(a,[c].concat(ka(e)));a.Cd.apply(a,[d].concat(ka(e)))}}
m.Me=function(a){for(var b=A.apply(1,arguments),c=hn(),d=v(a),e=d.next(),f={};!e.done;f={Gb:void 0},e=d.next())f.Gb=e.value,c.Ab(function(g){return function(){Tr(g.Gb.name);g.Gb.callback.apply(g.Gb,ka(b));Ur(g.Gb.name)}}(f))};
m.Le=function(a){var b=A.apply(1,arguments),c,d,e,f,g;return z(function(h){1==h.h&&(c=hn(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.B(0);f.tb=e.value;f.Qb=void 0;g=function(k){return function(){Tr(k.tb.name);var l=k.tb.callback.apply(k.tb,ka(b));"function"===typeof(null==l?void 0:l.then)?k.Qb=l.then(function(){Ur(k.tb.name)}):Ur(k.tb.name)}}(f);
c.Ab(g);return f.Qb?h.yield(f.Qb,3):h.B(3)}f={tb:void 0,Qb:void 0};e=d.next();return h.B(2)})};
m.Cd=function(a){var b=A.apply(1,arguments),c=this,d=a.map(function(e){return{Dc:function(){Tr(e.name);e.callback.apply(e,ka(b));Ur(e.name)},
priority:Sr(c,e)}});
d.length&&(this.j=new Nr(d))};
function Sr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Tr(a){Lr&&a&&Jr(a)}
function Ur(a){Lr&&a&&Kr(a)}
function Qr(a,b,c){Mr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(Pr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Vr(a){Pr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.v},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Wr;x(Vr,Pr);Vr.prototype.i=function(a,b){var c=this;this.h=Cm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Vr.prototype.v=function(a,b){this.h&&(Ei.oa(this.h),this.h=null);a(null==b?void 0:b.event)};
function Xr(){Wr||(Wr=new Vr);return Wr}
;var Yr=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return Yr});function Zr(){this.store={};this.h={}}
Zr.prototype.storePayload=function(a,b){a=$r(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Zr.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=as(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ka(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ka(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ka(this.smartExtractMatchingEntries(a))));return c};
Zr.prototype.extractMatchingEntries=function(a){a=as(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
Zr.prototype.getSequenceCount=function(a){a=as(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function as(a,b){var c=$r(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&$r(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(bs(b.auth,g[0])){var h=b.isJspb;bs(void 0===h?"undefined":h?"true":"false",g[1])&&bs(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),bs(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function bs(a,b){return void 0===a||"undefined"===a?!0:a===b}
Zr.prototype.getSequenceCount=Zr.prototype.getSequenceCount;Zr.prototype.extractMatchingEntries=Zr.prototype.extractMatchingEntries;Zr.prototype.smartExtractMatchingEntries=Zr.prototype.smartExtractMatchingEntries;Zr.prototype.storePayload=Zr.prototype.storePayload;function $r(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function cs(a,b){if(a)return a[b.name]}
;var ds=U("initial_gel_batch_timeout",2E3),es=U("gel_queue_timeout_max_ms",6E4),gs=Math.pow(2,16)-1,hs=U("gel_min_batch_size",5),is=void 0;function js(){this.l=this.h=this.i=0;this.j=!1}
var ks=new js,ls=new js,ms=new js,ns=new js,ps,qs=!0,rs=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",rs);var ss={};function ts(){var a=E("yt.logging.ims");a||(a=new Zr,D("yt.logging.ims",a));return a}
function us(a,b){if("log_event"===a.endpoint){vs();var c=ws(a),d=xs(a.payload)||"";a:{if(R("enable_web_tiered_gel")){var e=wq[d||""];var f,g,h,k=null==Gr().resolve(new Ar(bp))?void 0:null==(f=cp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!R("web_payload_policy_disabled_killswitch"))return;k=ys(e.tier);if(400===k){zs(a,b);return}}ss[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};ts().storePayload(e,a.payload);As(b,c,e,"gelDebuggingEvent"===d)}}
function As(a,b,c,d){function e(){Bs({writeThenSend:!0},R("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(is=new a);a=U("tvhtml5_logging_max_batch_ads_fork")||U("web_logging_max_batch")||100;var g=X(),h=Cs(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=ts().getSequenceCount(c));1E3<=d?e():d>=a?ps||(ps=Ds(function(){e();ps=void 0},0)):10<=g-k&&(Es(f,c.tier),h.l=g)}
function zs(a,b){if("log_event"===a.endpoint){vs();var c=ws(a),d=new Map;d.set(c,[a.payload]);var e=xs(a.payload)||"";b&&(is=new b);return new Ld(function(f,g){is&&is.isReady()?Fs(d,is,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function ws(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);rs[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Bs(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Ld(function(e,f){var g=Cs(c,d),h=g.j;g.j=!1;Gs(g.i);Gs(g.h);g.h=0;is&&is.isReady()?void 0===d&&R("enable_web_tiered_gel")?Hs(e,f,a,b,c,300,h):Hs(e,f,a,b,c,d,h):(Es(c,d),e())})}
function Hs(a,b,c,d,e,f,g){var h=is;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=R("enable_web_tiered_gel")?ts().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):ts().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(ss)),l=d.next();!l.done;l=d.next())l=l.value,e=R("enable_web_tiered_gel")?ts().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):ts().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete ss[l];Fs(k,h,a,b,c,!1,g)}
function Es(a,b){function c(){Bs({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Cs(a,b),e=d===ns||d===ms?5E3:es;R("web_gel_timeout_cap")&&!d.h&&(e=Ds(function(){c()},e),d.h=e);
Gs(d.i);e=P("LOGGING_BATCH_TIMEOUT",U("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&qs&&(e=ds);e=Ds(function(){0<U("gel_min_batch_size")?ts().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=hs&&c():c()},e);
d.i=e}
function Fs(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(X()),k=a.size,l=(void 0===g?0:g)&&R("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={Jc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Mc:void 0,Lc:void 0},n=a.next()){var p=v(n.value);n=p.next().value;p=p.next().value;g.batchRequest=tb({context:ip(b.config_||hp())});if(!Na(p)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=rs[n])&&
Is(g.batchRequest,n,p);delete rs[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;Js(g.batchRequest,h,g.dangerousLogToVisitorSession);R("always_send_and_write")&&(e.writeThenSend=!1);g.Mc=function(t){R("start_client_gcf")&&Ei.na(function(){return z(function(r){return r.yield(Ks(t),0)})});
k--;k||c()};
g.Jc=0;g.Lc=function(t){return function(){t.Jc++;if(e.bypassNetworkless&&1===t.Jc)try{aq(b,l,t.batchRequest,Ls({writeThenSend:!0},t.dangerousLogToVisitorSession,t.Mc,t.Lc,f)),qs=!1}catch(r){hl(r),d()}k--;k||c()}}(g);
try{aq(b,l,g.batchRequest,Ls(e,g.dangerousLogToVisitorSession,g.Mc,g.Lc,f)),qs=!1}catch(t){hl(t),d()}}}
function Ls(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Qf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};Ms()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));return a}
function Js(a,b,c){Ms()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&((c=P("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*gs/2)),c++,c>gs&&(c=1),cl("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Is(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function vs(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=vl("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(Yr=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",Yr),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Ms(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Ds(a,b){return!1===R("embeds_transport_use_scheduler")?Al(a,b):R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?Cm(function(){if("none"===Xr().currentState)a();else{var c={};Xr().install((c.none={callback:a},c))}},b):Cm(a,b)}
function Gs(a){R("transport_use_scheduler")?Ei.oa(a):window.clearTimeout(a)}
function Ks(a){var b,c,d,e,f,g,h,k,l,n;return z(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=cs(d,Ik),g=null==(f=d)?void 0:f.hotHashData,h=cs(d,Hk),l=null==(k=d)?void 0:k.coldHashData,(n=Gr().resolve(new Ar(bp)))?g?e?p.yield(dp(n,g,e),2):p.yield(dp(n,g),2):p.B(2):p.return()):l?h?p.yield(ep(n,l,h),0):p.yield(ep(n,l),0):p.B(0)})}
function Cs(a,b){b=void 0===b?200:b;return a?300===b?ns:ls:300===b?ms:ks}
function xs(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,wq[b])return b}
function ys(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Ns=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Ns);
function Os(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||X());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=nr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Ns[b]=b in Ns?Ns[b]+1:0,a.sequence={index:Ns[b],groupKey:b},d.endOfSequence&&delete Ns[d.sequenceGroup]);(d.sendIsolatedPayload?zs:us)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function sn(a,b,c){c=void 0===c?{}:c;var d=Yq;P("ytLoggingEventsDefaultDisabled",!1)&&Yq===Yq&&(d=null);R("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=nr(),c.timestamp=X());Os(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Ps=new Set,Qs=0,Rs=0,Ss=0,Ts=[],Us=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function rn(a){Vs(a)}
function Ws(a){Vs(a,"WARNING")}
function Xs(a){a instanceof Error?Vs(a):(a=Oa(a)?JSON.stringify(a):String(a),a=new W(a),a.name="RejectedPromiseError",Ws(a))}
function Vs(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),R("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Qs))){d=Ts;var k=tc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(p=Zl(a.args[t],"params."+t,c,p),
500<=p);t++);else if(a.hasOwnProperty("params")&&a.params){var r=a.params;if("object"===typeof a.params)for(t in r){if(r[t]){var w="params."+t,y=am(r[t]);c[w]=y;p+=w.length+y.length;if(500<p)break}}else c.params=am(r)}if(d.length)for(t=0;t<d.length&&!(p=Zl(d[t],"params.context."+t,c,p),500<=p);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Vl();c=v(a.Ta);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.ag)){a=d.weight;break a}a=v(a.Qa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=v(Ql);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ec[t.name])for(e=v(c.ec[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Hc(f);break}t.params||(t.params={});a=Vl();t.params["params.errorServiceSignature"]="msg="+a.Ta.length+"&cb="+a.Qa.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Ab("sample").constructor!==yb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!Ps.has(t.message)){if(g&&R("web_enable_error_204"))Ys(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Wl.Ya("handleError",t),R("record_app_crashed_web")&&0===Ss&&1===t.sampleWeight&&(Ss++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},R("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),sn("appCrashed",g)),Rs++):"WARNING"===b&&Wl.Ya("handleWarning",t);if(R("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(Us);for(c=a.next();!c.done;c=a.next())if(yn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));d=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!dl("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=t.params)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=P("SERVER_NAME");e=P("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(sn("clientError",h),("ERROR"===g||R("errors_flush_gel_always_killswitch"))&&Bs(void 0,void 0,!1))}R("suppress_error_204_logging")||Ys(b,t)}try{Ps.add(t.message)}catch(B){}Qs++}}}
function Ys(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=P("SERVER_NAME");b=P("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Hl(P("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Zs(){this.register=new Map}
function $s(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.fg("ABORTED")}
Zs.prototype.clear=function(){$s(this);this.register.clear()};
var at=new Zs;var bt=Date.now().toString();function ct(){for(var a=Array(16),b=0;16>b;b++){for(var c=Date.now(),d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(bt)for(b=1,c=0;c<bt.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^bt.charCodeAt(c),b++;return a}
function dt(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=ct()}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));return a.join("")}
;var et,ft=C.ytLoggingDocDocumentNonce_;ft||(ft=dt(),D("ytLoggingDocDocumentNonce_",ft));et=ft;function gt(a){this.h=a}
m=gt.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Pk;void 0!==this.h.trackingParams?a.setTrackingParams(this.h.trackingParams):(void 0!==this.h.veType&&Wf(a,2,xf(this.h.veType)),void 0!==this.h.veCounter&&Wf(a,6,xf(this.h.veCounter)),void 0!==this.h.elementIndex&&Wf(a,3,xf(this.h.elementIndex)),this.h.isCounterfactual&&Wf(a,5,uf(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();fg(a,Pk,7,b)}void 0!==this.h.youtubeData&&fg(a,Jk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function ht(a){return P("client-screen-nonce-store",{})[void 0===a?0:a]}
function jt(a,b){b=void 0===b?0:b;var c=P("client-screen-nonce-store");c||(c={},cl("client-screen-nonce-store",c));c[b]=a}
function kt(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function lt(a){return P(kt(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",lt);function mt(){var a=P("csn-to-ctt-auth-info");a||(a={},cl("csn-to-ctt-auth-info",a));return a}
function nt(){return Object.values(P("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function ot(a){a=ht(void 0===a?0:a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",ot);function pt(a,b,c){var d=mt();(c=ot(c))&&delete d[c];b&&(d[a]=b)}
function qt(a){return mt()[a]}
D("yt_logging_screen.getCttAuthInfo",qt);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==ht(c)||b!==P(kt(c)))if(pt(a,d,c),jt(a,c),cl(kt(c),b),b=function(){setTimeout(function(){a&&sn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:et,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var rt=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",rt);function st(a){Yk(rt,arguments)}
;function tt(){var a=rb(ut),b;return(new Ld(function(c,d){a.onSuccess=function(e){zl(e)?c(new vt(e)):d(new wt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new wt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new wt("Request timed out","net.timeout",e))};
b=Hl("//googleads.g.doubleclick.net/pagead/id",a)})).mc(function(c){c instanceof Sd&&b.abort();
return Qd(c)})}
function wt(a,b,c){Za.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
x(wt,Za);function vt(a){this.xhr=a}
;function xt(){this.h=0;this.i=null}
xt.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:zt(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:At(a):this};
xt.prototype.getValue=function(){return this.i};
xt.prototype.isRejected=function(){return 2==this.h};
xt.prototype.$goog_Thenable=!0;function At(a){var b=new xt;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function zt(a){var b=new xt;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function Bt(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:sl(a)?"same-origin":"cors",credentials:sl(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Ct(){return Hg()||(re||se)&&yn("applewebkit")&&!yn("version")&&(!yn("safari")||yn("gsa/"))||Gc&&yn("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function Dt(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Nk)if(Nk[d]==c.embeddedPlayerMode){b=Nk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Et(a){Za.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ft;this.isTimeout=a instanceof wt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Sd}
x(Et,Za);Et.prototype.name="BiscottiError";function Ft(){Za.call(this,"Biscotti ID is missing from server")}
x(Ft,Za);Ft.prototype.name="BiscottiMissingError";var ut={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Gt=null;function Ht(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Ct())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if("1"==pb(a))return Error("Biscotti ID is not available in private embed mode");if(Dt(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Wk(){var a=Ht();if(void 0!==a)return Qd(a);Gt||(Gt=tt().then(It).mc(function(b){return Jt(2,b)}));
return Gt}
function It(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ft;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ft;a=a.id;Xk(a);Gt=zt(a);Kt(18E5,2);return a}
function Jt(a,b){b=new Et(b);Xk("");Gt=At(b);0<a&&Kt(12E4,a-1);throw b;}
function Kt(a,b){Al(function(){tt().then(It,function(c){return Jt(b,c)}).mc(ab)},a)}
function Lt(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Wk()}catch(b){return Qd(b)}}
;function Mt(a){if("1"!=pb(P("PLAYER_VARS",{}))){a&&Vk();try{Lt().then(function(){},function(){}),Al(Mt,18E5)}catch(b){hl(b)}}}
;var Nt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Ot(){var a=void 0===a?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;Zb($b(5,a));try{var b=ql(a).theme;return Nt.get(b)||null}catch(c){}return null}
;function Pt(){this.h={};if(this.i=km()){var a=im("CONSISTENCY");a&&Qt(this,{encryptedTokenJarContents:a})}}
Pt.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Na.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Qt(this,a)}};
function Qt(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&hm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Rt=window.location.hostname.split(".").slice(-2).join(".");function St(){var a=P("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===P("INNERTUBE_CLIENT_NAME")&&(this.h=Tt(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Ut;function Vt(){Ut=E("yt.clientLocationService.instance");Ut||(Ut=new St,D("yt.clientLocationService.instance",Ut));return Ut}
m=St.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===P("INNERTUBE_CLIENT_NAME")?(this.h=Tt(this))&&this.h.set("yt-location-playability-token",a,15552E3):hm("YT_CL",JSON.stringify({loctok:a}),15552E3,Rt,!0))};
function Tt(a){return void 0===a.h?new jn("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Tt(this))&&this.h.remove("yt-location-playability-token"):jm("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===P("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function Wt(a,b){var c,d=null==(c=cs(a,Mk))?void 0:c.signal;if(d&&b.Nb&&(c=b.Nb[d]))return c();var e;if((c=null==(e=cs(a,Kk))?void 0:e.request)&&b.Vd&&(e=b.Vd[c]))return e();for(var f in a)if(b.cd[f]&&(a=b.cd[f]))return a()}
;function Xt(a){return function(){return new a}}
;var Yt={},Zt=(Yt.WEB_UNPLUGGED="^unplugged/",Yt.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Yt.WEB_UNPLUGGED_OPS="^unplugged/",Yt.WEB_UNPLUGGED_PUBLIC="^unplugged/",Yt.WEB_CREATOR="^creator/",Yt.WEB_KIDS="^kids/",Yt.WEB_EXPERIMENTS="^experiments/",Yt.WEB_MUSIC="^music/",Yt.WEB_REMIX="^music/",Yt.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Yt.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Yt);
function $t(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Zt[b];if(c){c=new RegExp(c);for(var d=v(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(Zt).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=v(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function au(){}
au.prototype.v=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?em:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=P("INNERTUBE_CONTEXT");if(g){g=tb(g);R("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&"AUTOMOTIVE_FORM_FACTOR"!==h.clientFormFactor&&(h.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;om();var l="USER_INTERFACE_THEME_LIGHT";rm(165)?l="USER_INTERFACE_THEME_DARK":rm(174)?l="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Ot()||l;h.userInterfaceTheme=k;if(!f){if(k=xm())h.connectionType=k;R("web_log_effective_connection_type")&&(k=ym())&&(g.client.effectiveConnectionType=k)}var n;if(R("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}R("web_gcf_hashes_innertube")&&(k=fp())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=
p,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=k);p=ql(C.location.href);!R("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},R("kevlar_woffle")&&fm.h&&(p=fm.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=gm(),h.mainAppWebInfo.isWebNativeShareAvailable=
navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!R("web_lr_app_quality_killswitch")&&(p=P("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));var t;p=0<=(null==(t=P("DEVICE"))?void 0:t.indexOf("cbrand=apple"));t="MacIntel"===navigator.platform;n=0<navigator.maxTouchPoints;k="ontouchstart"in document.documentElement;!R("web_vision_pro_detection_killswitch")&&
p&&t&&n&&k&&(h.deviceModel="Vision Pro");if(!R("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(V){}r=void 0}r&&(h.timeZone=r)}(r=P("EXPERIMENTS_TOKEN",""))?h.experimentsToken=r:delete h.experimentsToken;r=wl();Pt.h||(Pt.h=new Pt);h=Pt.h.h;t=[];p=0;for(var w in h)t[p++]=h[w];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:t});!R("web_prequest_context_killswitch")&&
(w=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=w);r=om();w=rm(58);r=r.get("gsml","");g.user=Object.assign({},g.user);w&&(g.user.enableSafetyMode=w);r&&(g.user.lockedSafetyMode=!0);R("warm_op_csn_cleanup")?e&&(f=ot())&&(g.clientScreenNonce=f):!f&&(f=ot())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Vt().setLocationOnInnerTubeContext(g);try{var y=tl(),B=y.bid;delete y.bid;g.adSignalsInfo=
{params:[],bid:B};var G=v(Object.entries(y));for(var J=G.next();!J.done;J=G.next()){var H=v(J.value),T=H.next().value,I=H.next().value;y=T;B=I;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:y,value:""+B})}var ha;if(R("add_ifa_to_tvh5_requests")&&"TVHTML5"===(null==(ha=g.client)?void 0:ha.clientName)){var O=P("INNERTUBE_CONTEXT");O.adSignalsInfo&&(g.adSignalsInfo.advertisingId=O.adSignalsInfo.advertisingId,g.adSignalsInfo.limitAdTracking=O.adSignalsInfo.limitAdTracking)}}catch(V){Vs(V)}G=g}else Vs(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
G={};G={context:G};if(J=this.i(a)){this.h(G,J,b);var S;b="/youtubei/v1/"+$t(this.j());(J=null==(S=cs(a.commandMetadata,Lk))?void 0:S.apiUrl)&&(b=J);S=b;(b=P("INNERTUBE_HOST_OVERRIDE"))&&(S=String(b)+String(bc(S)));b={};b.key=P("INNERTUBE_API_KEY");R("json_condensed_response")&&(b.prettyPrint="false");S=rl(S,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:S,ib:Bt(S),Na:G,config:a};a.config.Rb?a.config.Rb.identity=c:a.config.Rb={identity:c};return a}Vs(new W("Error: Failed to create Request from Command.",
a))};
da.Object.defineProperties(au.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function bu(){}
x(bu,au);function cu(){}
x(cu,bu);cu.prototype.v=function(){return{input:"/getDatasyncIdsEndpoint",ib:Bt("/getDatasyncIdsEndpoint","GET"),Na:{}}};
cu.prototype.j=function(){return[]};
cu.prototype.i=function(){};
cu.prototype.h=function(){};var du={},eu=(du.GET_DATASYNC_IDS=Xt(cu),du);var fu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function gu(a,b){var c=void 0===c?!0:c;var d=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=ac(window.location.href);e&&d.push(e);e=ac(a);if(0<=cb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),gi(d,a),a=d.href)if(a=bc(a),a=cc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:ot()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&hu(a,b,f)}else hu(a,b)}
function hu(a,b,c){a=iu(a);b=b?ec(b):"";c=c||5;Ct()&&hm(a,b,c)}
function iu(a){for(var b=v(fu),c=b.next();!c.done;c=b.next())a=kc(a,c.value);return"ST-"+Xb(a).toString(36)}
;function ju(a){mp.call(this,1,arguments);this.csn=a}
x(ju,mp);var vp=new np("screen-created",ju),ku=[],lu=0,mu=new Map,nu=new Map,ou=new Map;
function pu(a,b,c,d,e){e=void 0===e?!1:e;for(var f=qu({cttAuthInfo:qt(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(nb(k)||!k.trackingParams&&!k.veType)&&Ws(Error("Child VE logged with no data"));if(R("no_client_ve_attach_unless_shown")){var l=ru(h,b);if(k.veType&&!nu.has(l)&&!ou.has(l)&&!e){mu.set(l,[a,b,c,h]);return}h=ru(c,b);mu.has(h)?su(c,b):ou.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:fb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?tu("visualElementAttached",f,c):a?Os("visualElementAttached",c,a,f):sn("visualElementAttached",c,f)}
function tu(a,b,c){ku.push({De:a,payload:c,Wf:void 0,options:b});lu||(lu=wp())}
function xp(a){if(ku){for(var b=v(ku),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,sn(c.De,c.payload,c.options));ku.length=0}lu=0}
function ru(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function su(a,b){a=ru(a,b);mu.has(a)&&(b=mu.get(a)||[],pu(b[0],b[1],b[2],[b[3]],!0),mu.delete(a))}
function qu(a,b){R("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function uu(){try{return!!self.localStorage}catch(a){return!1}}
;function vu(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function wu(a){if(uu()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=vu(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function xu(){if(!uu())return!1;var a=Am(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=vu(c.value),void 0!==c&&c!==a)return!0;return!1}
;function yu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return R("copy_login_info_to_st_cookie")&&("WEB"===P("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===P("INNERTUBE_CLIENT_NAME"))&&a}
function zu(a){if(P("LOGGED_IN",!0)&&yu()){var b=P("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=ac(window.location.href);c&&b.push(c);c=ac(a);0<=cb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=bc(a),(b=cc(b))?(b=iu(b),b=(b=im(b)||null)?pl(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;yu()?(d||(d=P("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&gu(a,b)}}
;function Au(a){var b=A.apply(1,arguments);if(!Bu(a)||b.some(function(d){return!Bu(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())Cu(a,c.value)}
function Cu(a,b){for(var c in b)if(Bu(b[c])){if(c in a&&!Bu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Cu(a[c],b[c])}else if(Du(b[c])){if(c in a&&!Du(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Eu(a[c],b[c])}else a[c]=b[c];return a}
function Eu(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Bu(c)?a.push(Cu({},c)):Du(c)?a.push(Eu([],c)):a.push(c);return a}
function Bu(a){return"object"===typeof a&&!Array.isArray(a)}
function Du(a){return"object"===typeof a&&Array.isArray(a)}
;function Fu(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Gu(){var a=Fu();a.info||(a.info={});return a.info}
function Hu(a){a=Fu(a);a.metadata||(a.metadata={});return a.metadata}
function Iu(a){a=Fu(a);a.tick||(a.tick={});return a.tick}
function Ju(a){a=Fu(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Ku(a){a=Ju(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Lu(a){var b=Fu(a).nonce;if(!b){if(R("enable_lr_96_bit_can_no_crypto")){b=ct();for(var c=[],d=0;d<b.length;d++)c.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[d]&63));b=c.join("")}else b=dt();Fu(a).nonce=b}return b}
;function Mu(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Nu(a){a=a||"";var b=E("ytcsi.reference");b||(Mu(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Mu(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var Y={},Ou=(Y.auto_search="LATENCY_ACTION_AUTO_SEARCH",Y.ad_to_ad="LATENCY_ACTION_AD_TO_AD",Y.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",Y["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",Y.app_startup="LATENCY_ACTION_APP_STARTUP",Y["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",Y["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",Y["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",Y["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
Y["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",Y["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",Y["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",Y["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",Y["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",Y["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",Y["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",Y["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",Y["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",Y["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",Y["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",Y["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",Y["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",Y["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",Y["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
Y["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",Y["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",Y["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",Y.browse="LATENCY_ACTION_BROWSE",Y.cast_splash="LATENCY_ACTION_CAST_SPLASH",Y.channels="LATENCY_ACTION_CHANNELS",Y.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",Y["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",Y["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
Y["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",Y["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",Y["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",Y["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",Y["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",Y["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",Y["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",Y["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
Y["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",Y["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",Y["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",Y.chips="LATENCY_ACTION_CHIPS",Y.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",Y["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",Y["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",Y["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
Y.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",Y.embed="LATENCY_ACTION_EMBED",Y.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",Y.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",Y.explore="LATENCY_ACTION_EXPLORE",Y.home="LATENCY_ACTION_HOME",Y.library="LATENCY_ACTION_LIBRARY",Y.live="LATENCY_ACTION_LIVE",Y.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",Y.mini_app="LATENCY_ACTION_MINI_APP_PLAY",Y.onboarding="LATENCY_ACTION_ONBOARDING",
Y.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",Y["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",Y["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",Y["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",Y["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",Y["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",Y["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",Y["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",Y["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",
Y["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",Y["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",Y["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",Y["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",Y["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",Y["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",Y["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",Y["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",
Y["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",Y["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",Y["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",Y["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",Y["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",Y.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",Y.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",Y.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",Y.player_att=
"LATENCY_ACTION_PLAYER_ATTESTATION",Y["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",Y["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",Y["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",Y.prebuffer="LATENCY_ACTION_PREBUFFER",Y.prefetch="LATENCY_ACTION_PREFETCH",Y.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",Y.profile_switcher="LATENCY_ACTION_LOGIN",Y.reel_watch="LATENCY_ACTION_REEL_WATCH",Y.results="LATENCY_ACTION_RESULTS",Y["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",
Y.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",Y.search_ui="LATENCY_ACTION_SEARCH_UI",Y.search_suggest="LATENCY_ACTION_SUGGEST",Y.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",Y.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",Y.seek="LATENCY_ACTION_PLAYER_SEEK",Y.settings="LATENCY_ACTION_SETTINGS",Y.store="LATENCY_ACTION_STORE",Y.tenx="LATENCY_ACTION_TENX",Y.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",Y.watch="LATENCY_ACTION_WATCH",Y.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",Y["watch,watch7"]=
"LATENCY_ACTION_WATCH",Y["watch,watch7_html5"]="LATENCY_ACTION_WATCH",Y["watch,watch7ad"]="LATENCY_ACTION_WATCH",Y["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",Y.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",Y.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",Y["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",Y["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",Y["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",Y["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",Y["video.edit"]=
"LATENCY_ACTION_CREATOR_VIDEO_EDIT",Y["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",Y["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",Y["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",Y["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",Y["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",Y["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",Y["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",
Y["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",Y.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",Y.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",Y.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",Y.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",Y.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",Y);function Pu(a,b){mp.call(this,1,arguments);this.timer=b}
x(Pu,mp);var Qu=new np("aft-recorded",Pu);var Ru=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Ru);function Su(){this.h=0}
function Tu(){Su.h||(Su.h=new Su);return Su.h}
Su.prototype.tick=function(a,b,c,d){Uu(this,"tick_"+a+"_"+b)||sn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Su.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Uu(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,sn("latencyActionInfo",a,{cttAuthInfo:c}))};
Su.prototype.jspbInfo=function(){};
Su.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Uu(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,sn("latencyActionSpan",a,{cttAuthInfo:c}))};
function Uu(a,b){Ru[b]=Ru[b]||{count:0};var c=Ru[b];c.count++;c.time=X();a.h||(a.h=Cm(function(){var d=X(),e;for(e in Ru)Ru[e]&&6E4<d-Ru[e].time&&delete Ru[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new W("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Ws(c)),!0):!1}
;var Vu=window;function Wu(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Xu(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Z?void 0:null==(a=Z.getEntriesByType)?void 0:null==(b=a.call(Z,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Yu(e.requestStart),e.responseEnd=Yu(e.responseEnd),e.redirectStart=Yu(e.redirectStart),e.redirectEnd=Yu(e.redirectEnd),e.domainLookupEnd=Yu(e.domainLookupEnd),e.connectStart=Yu(e.connectStart),e.connectEnd=
Yu(e.connectEnd),e.responseStart=Yu(e.responseStart),e.secureConnectionStart=Yu(e.secureConnectionStart),e.domainLookupStart=Yu(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=Z.timing;return a}
function Yu(a){return Math.round(Zu()+a)}
function Zu(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=Vu.performance||Vu.mozPerformance||Vu.msPerformance||Vu.webkitPerformance||new Wu;var $u=!1,av=!1,bv={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Ua(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||ab,Z);function cv(a,b){if(!R("web_csi_action_sampling_enabled")||!Fu(b).actionDisabled){var c=Nu(b||"");Au(c.info,a);a.loadType&&(c=a.loadType,Hu(b).loadType=c);Au(Ku(b),a);c=Lu(b);b=Fu(b).cttAuthInfo;Tu().info(a,c,b)}}
function dv(){var a,b,c,d;return(null!=(d=null==Gr().resolve(new Ar(bp))?void 0:null==(a=cp())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function ev(a,b,c){if(!R("web_csi_action_sampling_enabled")||!Fu(c).actionDisabled){var d=Lu(c),e;if(e=R("web_csi_debug_sample_enabled")&&d){(null==Gr().resolve(new Ar(bp))?0:cp())&&!av&&(av=!0,ev("gcfl",X(),c));var f,g,h;e=(null==Gr().resolve(new Ar(bp))?void 0:null==(f=cp())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=dv();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+
d.charCodeAt(g),g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;Fu(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,cv(f,c));Fu(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Z.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Z.mark(e)));e=Nu(c||"");e.tick[a]=b||X();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Ju(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Iu(c);e=b||X();R("log_repeated_ytcsi_ticks")?a in f||
(f[a]=e):f[a]=e;f=Fu(c).cttAuthInfo;"_start"===a?(a=Tu(),Uu(a,"baseline_"+d)||sn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Tu().tick(a,d,b,f);fv(c);return e}}}
function gv(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=$q+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function hv(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;"number"===typeof h&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=v(Object.entries(P("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function iv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);oi(window)&&a.setAttribute("nonce",oi(window));return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=Zu(),ev("rsf_"+b,c+Math.round(a.fetchStart)),ev("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function jv(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=eb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(ev("wffs",Yu(b.startTime)),ev("wffe",Yu(b.responseEnd)))}
function kv(a){var b=lv("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=lv(b[d],a);if(e)return e}return NaN}
function lv(a,b){if(a=Iu(b)[a])return"number"===typeof a?a:a[a.length-1]}
function fv(a){var b=lv("_start",a),c=kv(a);b&&c&&!$u&&(sp(Qu,new Pu(Math.round(c-b),a)),$u=!0)}
function mv(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=hb(a,function(b){return"first-paint"===b.name}))return Yu(a.startTime)}a=Z.timing;
return a.ze?Math.max(0,a.ze):0}
;function nv(a,b){gl(function(){Nu("").info.actionType=a;b&&cl("TIMING_AFT_KEYS",b);cl("TIMING_ACTION",a);var c=hv();0<Object.keys(c).length&&cv(c);c={isNavigation:!0,actionType:Ou[P("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=P("PREVIOUS_ACTION");d&&(c.previousAction=Ou[d]||"LATENCY_ACTION_UNKNOWN");if(d=P("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=P("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=ot())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=gv();if(1===d||-1===d)c.isVisible=!0;Hu();Gu();
c.loadType="cold";d=Gu();var e=Xu(),f=Zu(),g=P("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!R("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(ev("srt",e.responseStart),1!==d.prerender&&ev("_start",f,void 0));d=mv();0<d&&ev("fpt",d);d=Xu();d.isPerformanceNavigationTiming&&cv({performanceNavigationTiming:!0},void 0);ev("nreqs",d.requestStart,void 0);ev("nress",d.responseStart,void 0);ev("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(ev("nrs",d.redirectStart,void 0),ev("nre",
d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(ev("ndnss",d.domainLookupStart,void 0),ev("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(ev("ntcps",d.connectStart,void 0),ev("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Zu()&&0<d.connectEnd-d.secureConnectionStart&&(ev("nstcps",d.secureConnectionStart,void 0),ev("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&jv();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in bv)bv.hasOwnProperty(h)&&
(e=bv[h],iv(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});cv(c);c=Ju();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Ku();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if("cold"===Hu().loadType&&("cold"===c.loadType||"cold"===d)){d=Iu();e=Ju();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])ev(k,lv(k));else if(R("log_repeated_ytcsi_ticks"))for(f=
v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,ev(k.slice(1),g);k={};d=!1;h=v(h);for(e=h.next();!e.done;e=h.next())d=e.value,Au(c,d),Au(k,d),d=!0;d&&cv(k)}D("ytglobal.timingready_",!0);k=P("TIMING_ACTION");E("ytglobal.timingready_")&&k&&ov()&&kv()&&fv()})()}
function pv(a,b,c){gl(cv)(a,b,void 0===c?!1:c)}
function qv(a,b,c){return gl(ev)(a,b,c)}
function ov(){return gl(function(){return"_start"in Iu()})()}
function rv(){gl(function(){var a=Lu();requestAnimationFrame(function(){setTimeout(function(){a===Lu()&&qv("ol",void 0,void 0)},0)})})()}
var sv=window;sv.ytcsi&&(sv.ytcsi.infoGel=pv,sv.ytcsi.tick=qv);var tv="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),uv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function vv(a,b,c,d){this.v=a;this.aa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Nb||(a.Nb={});a.Nb=Object.assign({},eu,a.Nb)}
function wv(a,b,c,d){if(void 0!==vv.h){if(d=vv.h,a=[a!==d.v,b!==d.aa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new W("InnerTubeTransportService is already initialized",a);
}else vv.h=new vv(a,b,c,d)}
function xv(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?em:c;var d=Wt(b,a.v);if(!d)return Qd(new W("Error: No request builder found for command.",b));var e=d.v(b,void 0,c);return e?(zu(e.input),new Ld(function(f){var g,h,k;return z(function(l){if(1==l.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.l.af){var n=e.config,p;n=null==n?void 0:null==(p=n.Rb)?void 0:p.sessionIndex;p=dm(0,{sessionIndex:n});k=Object.assign({},yv(h),p);return l.B(2)}return l.yield(zv(e.config,
h),3)}2!=l.h&&(k=l.i);f(Av(a,e,k));l.h=0})})):Qd(new W("Error: Failed to build request for command.",b))}
function Bv(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.sequenceMetaData)?0:d.skipProcessing)&&a.j){d=v(tv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Av(a,b,c){var d,e,f,g,h,k,l,n,p,t,r,w,y,B,G,J,H,T,I,ha,O,S,V,ma,na,sb,Mc,Nc,be;return z(function(ja){switch(ja.h){case 1:ja.B(2);break;case 3:if((d=ja.i)&&!d.isExpired())return ja.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Na)?0:f.context)){ja.B(4);break}g=b.Na.context;ja.B(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){ja.B(4);break}l=k.value;return ja.yield(l.eg(g),8);case 8:k=h.next();ja.B(7);break;case 4:if(null==(n=a.i)||!n.jg(b.input,b.Na)){ja.B(11);break}return ja.yield(a.i.Yf(b.input,
b.Na),12);case 12:return p=ja.i,R("kevlar_process_local_innertube_responses_killswitch")||Bv(a,p,b),ja.return(p);case 11:return(w=null==(r=b.config)?void 0:r.gg)&&a.h.has(w)?t=a.h.get(w):(y=JSON.stringify(b.Na),J=null!=(G=null==(B=b.ib)?void 0:B.headers)?G:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},J,c)}),H=Object.assign({},b.ib),"POST"===b.ib.method&&(H=Object.assign({},H,{body:y})),(null==(T=b.config)?0:T.Je)&&qv(b.config.Je),I=function(){return a.aa.fetch(b.input,H,b.config)},t=I(),
w&&a.h.set(w,t)),ja.yield(t,13);
case 13:if((ha=ja.i)&&"error"in ha&&(null==(O=ha)?0:null==(S=O.error)?0:S.details))for(V=ha.error.details,ma=v(V),na=ma.next();!na.done;na=ma.next())sb=na.value,(Mc=sb["@type"])&&-1<uv.indexOf(Mc)&&(delete sb["@type"],ha=sb);w&&a.h.has(w)&&a.h.delete(w);(null==(Nc=b.config)?0:Nc.Ke)&&qv(b.config.Ke);if(ha||null==(be=a.i)||!be.Rf(b.input,b.Na)){ja.B(14);break}return ja.yield(a.i.Xf(b.input,b.Na),15);case 15:ha=ja.i;case 14:return Bv(a,ha,b),ja.return(ha||void 0)}})}
function zv(a,b){var c,d,e,f;return z(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Rb)?void 0:d.sessionIndex;var h=g.yield;var k=dm(0,{sessionIndex:e});if(!(k instanceof Ld)){var l=new Ld(ab);Md(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},yv(b),f)))})}
function yv(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);P("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=P("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Cv=new zr("INNERTUBE_TRANSPORT_TOKEN");var Dv=["share/get_web_player_share_panel"],Ev=["feedback"],Fv=["notification/modify_channel_preference"],Gv=["browse/edit_playlist"],Hv=["subscription/subscribe"],Iv=["subscription/unsubscribe"];function Jv(){}
x(Jv,bu);Jv.prototype.j=function(){return Hv};
Jv.prototype.i=function(a){return cs(a,Uk)||void 0};
Jv.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(Jv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Kv(){}
x(Kv,bu);Kv.prototype.j=function(){return Iv};
Kv.prototype.i=function(a){return cs(a,Tk)||void 0};
Kv.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(Kv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Lv(){}
x(Lv,bu);Lv.prototype.j=function(){return Ev};
Lv.prototype.i=function(a){return cs(a,Ok)||void 0};
Lv.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(Lv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Mv(){}
x(Mv,bu);Mv.prototype.j=function(){return Fv};
Mv.prototype.i=function(a){return cs(a,Sk)||void 0};
Mv.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Nv(){}
x(Nv,bu);Nv.prototype.j=function(){return Gv};
Nv.prototype.i=function(a){return cs(a,Rk)||void 0};
Nv.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Ov(){}
x(Ov,bu);Ov.prototype.j=function(){return Dv};
Ov.prototype.i=function(a){return cs(a,Qk)};
Ov.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Pv=new zr("NETWORK_SLI_TOKEN");function Qv(a){this.h=a}
Qv.prototype.fetch=function(a,b,c){var d=this,e;return z(function(f){e=Rv(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){Ws(g)}))})};
function Rv(a,b,c){if(a.h){var d=Zb($b(5,kc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;R("wug_networking_gzip_request")&&(a=Up(c));return new window.Request(b,a)}
Qv.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){return(null==b?0:b.te)&&a.ok?pg(b.te,d):JSON.parse(d.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Uf(),c=c.then(function(d){Ws(new W("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
Qv[yr]=[new Ar(Pv)];var Sv=new zr("NETWORK_MANAGER_TOKEN");var Tv;function Uv(){var a,b,c;return z(function(d){if(1==d.h)return a=Gr().resolve(Cv),a?d.yield(xv(a),2):(Ws(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Ws(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Sf;return d.return(c)}Ws(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Vv=C.caches,Wv;function Xv(a){var b=a.indexOf(":");return-1===b?{sd:a}:{sd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Yv(){return z(function(a){if(void 0!==Wv)return a.return(Wv);Wv=new Promise(function(b){var c;return z(function(d){switch(d.h){case 1:return za(d,2),d.yield(Vv.open("test-only"),4);case 4:return d.yield(Vv.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Aa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Wv)})}
function Zv(a){var b,c,d,e,f,g,h;z(function(k){if(1==k.h)return k.yield(Yv(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(Vv.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Xv(f),h=g.datasyncId,!h||a.includes(h)||b.push(Vv.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function $v(){var a,b,c,d,e,f,g;return z(function(h){if(1==h.h)return h.yield(Yv(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=Am("cache contains other");return h.yield(Vv.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Xv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function aw(){Uv().then(function(a){a&&(Ho(a),Zv(a),wu(a))})}
function bw(){var a=new Mq;Ei.na(function(){var b,c,d,e;return z(function(f){switch(f.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){f.B(2);break}b=Am("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Ho(g);Zv(g);wu(g);return f.return()}c=xu();return f.yield($v(),3);case 3:return d=f.i,f.yield(Io(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.va()?aw():a.h.add("publicytnetworkstatus-online",aw,!0,void 0,void 0),f.h=0}})})}
;var ki=fa(["data-"]);function cw(a){a&&(a.dataset?a.dataset[dw()]="true":ji(a))}
function ew(a){return a?a.dataset?a.dataset[dw()]:a.getAttribute("data-loaded"):null}
var fw={};function dw(){return fw.loaded||(fw.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var gw=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,hw=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function iw(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(gw,""),c=c.replace(hw,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else jw(a,b,c)}
function jw(a,b,c){c=void 0===c?null:c;var d=kw(a),e=document.getElementById(d),f=e&&ew(e),g=e&&!f;f?b&&b():(b&&(f=sr(d,b),b=""+Pa(b),lw[b]=f),g||(e=mw(a,d,function(){if(!ew(e)){cw(e);vr(d);var h=Va(wr,d);Al(h,0)}},c)))}
function mw(a,b,c,d){d=void 0===d?null:d;var e=xd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);ri(e,Fk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function nw(a){a=kw(a);var b=document.getElementById(a);b&&(wr(a),b.parentNode.removeChild(b))}
function ow(a,b){a&&b&&(a=""+Pa(b),(a=lw[a])&&ur(a))}
function kw(a){var b=document.createElement("a");gi(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Xb(a)}
var lw={};var pw=[],qw=!1;function rw(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&Ct()){var a=P("PLAYER_VARS",{});if("1"!=pb(a)&&!Dt(a)){var b=function(){qw=!0;"google_ad_status"in window?cl("DCLKSTAT",1):cl("DCLKSTAT",2)};
try{iw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}pw.push(Ei.na(function(){if(!(qw||"google_ad_status"in window)){try{ow("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}qw=!0;cl("DCLKSTAT",3)}},5E3))}}}
function sw(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;function tw(a){Pr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.D},{from:"document_active",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
x(tw,Pr);tw.prototype.D=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
tw.prototype.v=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
tw.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
tw.prototype.i=function(){this.h=new Map};function uw(a){Pr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.v},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.v},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.v},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
x(uw,Pr);uw.prototype.i=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
uw.prototype.h=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
uw.prototype.v=function(a,b){a(null==b?void 0:b.event)};
uw.prototype.m=function(a,b){a(null==b?void 0:b.event)};function vw(){this.l=new tw;this.v=new uw}
vw.prototype.install=function(){var a=A.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.v.install(c)})};function ww(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
ww.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=ot(void 0===c?0:c)){a=this.client;d=new gt({trackingParams:d});var e=void 0;if(R("no_client_ve_attach_unless_shown")){var f=ru(d,c);nu.set(f,!0);su(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=qu({cttAuthInfo:qt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?tu("visualElementGestured",f,d):a?Os("visualElementGestured",d,a,f):sn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
ww.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new gt({trackingParams:a}),b,void 0===c?0:c)};
ww.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=ot(d);a||(a=(a=lt(void 0===d?0:d))?new gt({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=qu({cttAuthInfo:qt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?tu("visualElementStateChanged",d,b):a?Os("visualElementStateChanged",b,a,d):sn("visualElementStateChanged",b,d))}};
function xw(a,b){if(void 0===b)for(var c=nt(),d=0;d<c.length;d++)void 0!==c[d]&&xw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&pu(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function yw(){vw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));R("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
x(yw,vw);yw.prototype.j=function(){sn("finalPayload",{csn:ot()})};
yw.prototype.h=function(){$s(at)};
yw.prototype.i=function(){var a=xw;ww.h||(ww.h=new ww);a(ww.h)};function zw(){}
function Aw(){var a=E("ytglobal.storage_");a||(a=new zw,D("ytglobal.storage_",a));return a}
zw.prototype.estimate=function(){var a,b,c;return z(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Bw()):d.return()})};
function Bw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",zw);function qn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=U("ytidb_transaction_ended_event_rate_limit_session",.2)}
qn.prototype.Ib=function(a){this.handleError(a)};
qn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Cw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=U("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Cw(a,b){Aw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Dw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Dw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Dw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Ew(a,b,c){K.call(this);var d=this;c=c||P("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.A=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=cb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.A)}
x(Ew,K);Ew.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){il(d)}}};
Ew.prototype.S=function(){window.removeEventListener("message",this.A);K.prototype.S.call(this)};function Fw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Ew(!!P("WIDGET_ID_ENFORCE")),b=this.Ge.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=P("WIDGET_ID"))this.h.sessionId=a}
m=Fw.prototype;m.Ge=function(a,b,c){"addEventListener"===a&&b?this.Cc(b[0],c):this.Vc(a,b,c)};
m.Vc=function(){};
m.vc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Cc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.vc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.de=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.yc());this.sendMessage("onReady");db(this.i,this.Ad,this);this.i=[]};
m.yc=function(){return null};
function Gw(a,b){a.sendMessage("infoDelivery",b)}
m.Ad=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Ad({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Hw={},Iw=(Hw["api.invalidparam"]=2,Hw.auth=150,Hw["drm.auth"]=150,Hw["heartbeat.net"]=150,Hw["heartbeat.servererror"]=150,Hw["heartbeat.stop"]=150,Hw["html5.unsupportedads"]=5,Hw["fmt.noneavailable"]=5,Hw["fmt.decode"]=5,Hw["fmt.unplayable"]=5,Hw["html5.missingapi"]=5,Hw["html5.unsupportedlive"]=5,Hw["drm.unavailable"]=5,Hw["mrm.blocked"]=151,Hw);var Jw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Kw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Lw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Jw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Mw(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Nw(a){Fw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Se.bind(this));this.addEventListener("onVolumeChange",this.Te.bind(this));this.addEventListener("onApiChange",this.Ne.bind(this));this.addEventListener("onPlaybackQualityChange",this.Pe.bind(this));this.addEventListener("onPlaybackRateChange",this.Qe.bind(this));this.addEventListener("onStateChange",this.Re.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Ue.bind(this))}
x(Nw,Fw);m=Nw.prototype;
m.Vc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Kw(a)){var d=b;if(Oa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Lw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Lw(e);break;case "loadPlaylist":case "cuePlaylist":e=Mw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Kw(a)&&Gw(this,this.yc())}};
m.Cc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Fw.prototype.Cc.call(this,a,b)};
m.vc=function(a,b){var c=this,d=Fw.prototype.vc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.h,b=this.de.bind(this);a.h=b;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var c=void 0===c?5:c;this.errorCode=a?Iw[a]||c:c;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.yc=function(){if(!this.api)return null;var a=this.api.getApiInterface();ib(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Re=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Gw(this,a)};
m.Pe=function(a){Gw(this,{playbackQuality:a})};
m.Qe=function(a){Gw(this,{playbackRate:a})};
m.Ne=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Te=function(){Gw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Se=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Gw(this,a)};
m.Ue=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Gw(this,a)};
m.dispose=function(){Fw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Ow(a){K.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.wd,this)}
x(Ow,K);m=Ow.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,b)};
m.wd=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Pw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Qw(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Oe.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Oe=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,this.xc(a,b))};
m.xc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.S=function(){this.connection.unsubscribe("command",this.wd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);K.prototype.S.call(this)};function Rw(a,b){Ow.call(this,b);this.api=a;this.start()}
x(Rw,Ow);Rw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Rw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Pw(a,b){switch(a){case "loadVideoById":return a=Lw(b),[a];case "cueVideoById":return a=Lw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Mw(b),[a];case "cuePlaylist":return a=Mw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Qw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Rw.prototype.xc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Ow.prototype.xc.call(this,a,b)};
Rw.prototype.S=function(){Ow.prototype.S.call(this);delete this.api};function Sw(a){a=void 0===a?!1:a;K.call(this);this.h=new L(a);rc(this,this.h)}
Xa(Sw,K);Sw.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
Sw.prototype.unsubscribe=function(a,b,c){return this.Z()?!1:this.h.unsubscribe(a,b,c)};
Sw.prototype.l=function(a,b){this.Z()||this.h.Ya.apply(this.h,arguments)};function Tw(a,b,c){Sw.call(this);this.j=a;this.i=b;this.id=c}
x(Tw,Sw);Tw.prototype.jb=function(a,b){this.Z()||this.j.jb(this.i,this.id,a,b)};
Tw.prototype.S=function(){this.i=this.j=null;Sw.prototype.S.call(this)};function Uw(a,b,c){K.call(this);this.h=a;this.origin=c;this.i=gr(window,"message",this.j.bind(this));this.connection=new Tw(this,a,b);rc(this,this.connection)}
x(Uw,K);Uw.prototype.jb=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
Uw.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
Uw.prototype.S=function(){hr(this.i);this.h=null;K.prototype.S.call(this)};function Vw(){this.state=1;this.h=null}
m=Vw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(f=(d=xb())?d.createScript(f):f,d=new Wb,d.ud=f,f=d):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=Ek(a.interpreterSafeUrl).toString());Ww(this,d,e,a.program,b,c)}else Ws(Error("Cannot initialize botguard without program"))};
function Ww(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,iw(c,function(){window[g]?Xw(a,d,g,e):(a.state=3,nw(c),Ws(new W("Unable to load Botguard","from "+c)))},f)):b?(f=xd("SCRIPT"),b instanceof Wb?qi(f,b):f.textContent=b,f.nonce=oi(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?Xw(a,d,g,e):(a.state=4,Ws(new W("Unable to load Botguard from JS")))):Ws(new W("Unable to load VM; no url or JS provided"))}
m.isLoading=function(){return 2===this.state};
function Xw(a,b,c,d){a.state=5;try{var e=new Vh({program:b,je:c,He:R("att_web_record_metrics")});e.Xe.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&Ws(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Jd({dd:a}):null};
m.dispose=function(){this.Qc(null);this.state=8};
m.Tc=function(){return!!this.h};
m.Jd=function(a){return this.h.Dd(a)};
m.Qc=function(a){pc(this.h);this.h=a};function Yw(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Zw(){Vw.apply(this,arguments)}
x(Zw,Vw);Zw.prototype.Qc=function(a){var b;null==(b=Yw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Dd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Zw.prototype.Tc=function(){return!!Yw()};
Zw.prototype.Jd=function(a){return Yw().bgvmc(a)};var $w=new Zw;function ax(){return $w.Tc()}
function bx(a){a=void 0===a?{}:a;return $w.invoke(a)}
;function cx(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||rb(b);this.assets=a.assets||{};this.attrs=a.attrs||rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
cx.prototype.clone=function(){var a=new cx,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ma(c)?a[b]=rb(c):a[b]=c}return a};var dx=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function ex(a){a=a||"";if(window.spf){var b=a.match(dx);spf.style.load(a,b?b[1]:"",void 0)}else fx(a)}
function fx(a){var b=gx(a),c=document.getElementById(b),d=c&&ew(c);d||c&&!d||(c=hx(a,b,function(){if(!ew(c)){cw(c);vr(b);var e=Va(wr,b);Al(e,0)}}))}
function hx(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Fk(a);ni(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function gx(a){var b=xd("A");gi(b,new Fb(a,Gb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Xb(a)}
;function ix(a,b,c,d,e){K.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.oc=e;this.Fa=!1;this.api={};this.fa=this.m=null;this.T=new L;this.h={};this.ba=this.ha=this.elementId=this.Za=this.config=null;this.X=!1;this.j=this.D=null;this.sa={};this.pc=["onReady"];this.lastError=null;this.Pb=NaN;this.P={};this.ea=0;this.i=this.l=a;rc(this,this.T);jx(this);c?this.ea=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(kx(this),lx(this))}
x(ix,K);m=ix.prototype;m.getId=function(){return this.A};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.ea&&(clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof cx||(b=new cx(b));this.config=b;this.setConfig(a);lx(this);this.isReady()&&mx(this)}};
function kx(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Za=a;this.config=nx(a);kx(this);if(!this.ha){var b;this.ha=ox(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=yi(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=yi(Number(a)||a))};
function mx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function px(a){var b=!0,c=qx(a);c&&a.config&&(b=c.dataset.version===rx(a));return b&&!!E("yt.player.Application.create")}
function lx(a){if(!a.Z()&&!a.X){var b=px(a);if(b&&"html5"===(qx(a)?"html5":null))a.ba="html5",a.isReady()||sx(a);else if(tx(a),a.ba="html5",b&&a.j&&a.l)a.l.appendChild(a.j),sx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.D=function(){c=!0;var d=ux(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?nx(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.oc);sx(a)};
a.X=!0;b?a.D():(iw(rx(a),a.D),(b=vx(a))&&ex(b),wx(a)&&!c&&D("yt.player.Application.create",null))}}}
function qx(a){var b=wd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function sx(a){if(!a.Z()){var b=qx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.X=!1;if(!ux(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}xx(a)}else a.Pb=setTimeout(function(){sx(a)},50)}}
function xx(a){jx(a);a.Fa=!0;var b=qx(a);if(b){a.m=yx(a,b,"addEventListener");a.fa=yx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=yx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);mx(a);a.ha&&a.ha(a.api);a.T.Ya("onReady",a.api)}
function yx(a,b,c){var d=b[c];return function(){var e=A.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new W("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function jx(a){a.Fa=!1;if(a.fa)for(var b in a.h)a.h.hasOwnProperty(b)&&a.fa(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.m=null;a.fa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Za};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Fa};
m.addEventListener=function(a,b){var c=this,d=ox(this,b);d&&(0<=cb(this.pc,a)||this.h[a]||(b=zx(this,a),this.m&&this.m(a,b)),this.T.subscribe(a,d),"onReady"===a&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=ox(this,b))&&this.T.unsubscribe(a,b)};
function ox(a,b){var c=b;if("string"===typeof b){if(a.sa[b])return a.sa[b];c=function(){var d=A.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new W("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.sa[b]=c}return c?c:null}
function zx(a,b){function c(d){var e=setTimeout(function(){if(!a.Z()){try{a.T.Ya(b,null!=d?d:void 0)}catch(h){var f=new W("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.A,data:d});f.level="WARNING";throw f;}f=a.P;var g=String(e);g in f&&delete f[g]}},0);
ob(a.P,String(e))}
return a.h[b]=c}
m.getPlayerType=function(){return this.ba||(qx(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function tx(a){a.cancel();jx(a);a.ba=null;a.config&&(a.config.loaded=!1);var b=qx(a);b&&(px(a)||!wx(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.D&&ow(rx(this),this.D);clearTimeout(this.Pb);this.X=!1};
m.S=function(){tx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new W("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.sa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Za=this.config=this.api=null;delete this.l;delete this.i;K.prototype.S.call(this)};
function wx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function rx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function vx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function ux(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function nx(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?rb(e):e}return b}
;var Ax={},Bx="player_uid_"+(1E9*Math.random()>>>0);function Cx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?wd(c):c;var e=Bx+"_"+Pa(c),f=Ax[e];if(f&&d)return Dx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new ix(c,e,a,b,void 0);Ax[e]=f;f.addOnDisposeCallback(function(){delete Ax[f.getId()]});
return f.api}
function Dx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Ex=null,Fx=null,Gx=null;
function Hx(){rv();var a=om(),b=rm(119),c=1<window.devicePixelRatio;if(document.body&&Oi(document.body,"exp-invert-logo"))if(c&&!Oi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Oi(d,"inverted-hdpi")){var e=Mi(d);Ni(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Oi(document.body,"inverted-hdpi")&&Pi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=sm(b)||0;d=c?d|67108864:d&-67108865;0===d?delete lm[b]:(c=d.toString(16),lm[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in lm)lm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(lm[f])));var f=d.join("&");hm(b,f,63072E3,a.i,c)}}
function Ix(){Jx()}
function Kx(){qv("ep_init_pr");Jx()}
function Jx(){var a=Ex.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Lx(){Ex&&Ex.sendAbandonmentPing&&Ex.sendAbandonmentPing();P("PL_ATT")&&$w.dispose();for(var a=Ei,b=0,c=pw.length;b<c;b++)a.oa(pw[b]);pw.length=0;nw("//static.doubleclick.net/instream/ad_status.js");qw=!1;cl("DCLKSTAT",0);qc(Gx,Fx);Ex&&(Ex.removeEventListener("onVideoDataChange",Ix),Ex.destroy())}
;function Mx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&gu(a,b);if(c)return!1;zu(a);if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=fc(a,e);zu(a);f=a+f;var h=void 0===h?di:h;a:if(h=void 0===h?di:h,f instanceof Fb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof bi&&b.se(f)){h=new Fb(f,Gb);break a}h=void 0}g=g.location;h=fi(h||Hb);void 0!==h&&(g.href=h)}return!0}
;D("yt.setConfig",cl);D("yt.config.set",cl);D("yt.setMsg",st);D("yt.msgs.set",st);D("yt.logging.errors.log",Vs);
D("writeEmbed",function(){var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}Mt(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);nv("embed",["ol"]);c=P("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=ql(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&nv("watch",["pbs","pbu","pbp"]);Ex=Cx(a,c);Ex.addEventListener("onVideoDataChange",Ix);Ex.addEventListener("onReady",Kx);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Gx=new Nw(Ex):P("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Fx=new Uw(window.parent,a,b),Gx=new Rw(Ex,Fx.connection));rw();R("ytidb_create_logger_embed_killswitch")||pn();a={};yw.h||(yw.h=new yw);
yw.h.install((a.flush_logs={callback:function(){Bs()}},a));
Xq();R("ytidb_clear_embedded_player")&&Ei.na(function(){var f,g;if(!Tv){var h=Gr();Cr(h,{jc:Sv,Hd:Qv});var k={cd:{feedbackEndpoint:Xt(Lv),modifyChannelNotificationPreferenceEndpoint:Xt(Mv),playlistEditEndpoint:Xt(Nv),subscribeEndpoint:Xt(Jv),unsubscribeEndpoint:Xt(Kv),webPlayerShareEntityServiceEndpoint:Xt(Ov)}},l=Vt(),n={};l&&(n.client_location=l);void 0===f&&(f=cm());void 0===g&&(g=h.resolve(Sv));wv(k,g,f,n);Cr(h,{jc:Cv,Id:vv.h});Tv=h.resolve(Cv)}bw()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||ax);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||bx);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||sw);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Mx);D("yt.util.activity.init",E("yt.util.activity.init")||kr);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||nr);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||lr);window.addEventListener("load",gl(function(){Hx()}));
window.addEventListener("pageshow",gl(function(a){a.persisted||Hx()}));
window.addEventListener("pagehide",gl(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Lx():a.persisted||Lx()}));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=dl("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new W(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Vs(e):Ws(e))};
ae=Xs;window.addEventListener("unhandledrejection",function(a){Xs(a.reason)});
db(P("ERRORS")||[],function(a){Vs.apply(null,a)});
cl("ERRORS",[]);R("embeds_web_enable_scheduler_to_player_binary")&&fn();}).call(this);
