import{aC as l,r as i,aD as k,aE as D,d as F,aF as A,aG as G,aH as V,aI as K,c as _,aJ as w,aK as y,M as R,ay as W,aL as u}from"./assets-page.BzasPhui.js";var h=l(i,"WeakMap");function q(t){return t!=null&&k(t.length)&&!D(t)}var H=Object.prototype;function N(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||H;return t===r}function J(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}function Y(){return!1}var z=typeof exports=="object"&&exports&&!exports.nodeType&&exports,x=z&&typeof module=="object"&&module&&!module.nodeType&&module,Z=x&&x.exports===z,S=Z?i.Buffer:void 0,Q=S?S.isBuffer:void 0,X=Q||Y,tt="[object Arguments]",rt="[object Array]",et="[object Boolean]",at="[object Date]",nt="[object Error]",ot="[object Function]",st="[object Map]",it="[object Number]",ut="[object Object]",ct="[object RegExp]",ft="[object Set]",pt="[object String]",gt="[object WeakMap]",bt="[object ArrayBuffer]",yt="[object DataView]",lt="[object Float32Array]",dt="[object Float64Array]",vt="[object Int8Array]",ht="[object Int16Array]",Tt="[object Int32Array]",jt="[object Uint8Array]",mt="[object Uint8ClampedArray]",At="[object Uint16Array]",_t="[object Uint32Array]",a={};a[lt]=a[dt]=a[vt]=a[ht]=a[Tt]=a[jt]=a[mt]=a[At]=a[_t]=!0;a[tt]=a[rt]=a[bt]=a[et]=a[yt]=a[at]=a[nt]=a[ot]=a[st]=a[it]=a[ut]=a[ct]=a[ft]=a[pt]=a[gt]=!1;function wt(t){return F(t)&&k(t.length)&&!!a[A(t)]}function xt(t){return function(e){return t(e)}}var U=typeof exports=="object"&&exports&&!exports.nodeType&&exports,g=U&&typeof module=="object"&&module&&!module.nodeType&&module,St=g&&g.exports===U,v=St&&G.process,O=function(){try{var t=g&&g.require&&g.require("util").types;return t||v&&v.binding&&v.binding("util")}catch{}}(),P=O&&O.isTypedArray,Ot=P?xt(P):wt,Pt=Object.prototype,Mt=Pt.hasOwnProperty;function Ct(t,e){var r=_(t),n=!r&&V(t),c=!r&&!n&&X(t),f=!r&&!n&&!c&&Ot(t),p=r||n||c||f,d=p?J(t.length,String):[],L=d.length;for(var o in t)(e||Mt.call(t,o))&&!(p&&(o=="length"||c&&(o=="offset"||o=="parent")||f&&(o=="buffer"||o=="byteLength"||o=="byteOffset")||K(o,L)))&&d.push(o);return d}function It(t,e){return function(r){return t(e(r))}}var $t=It(Object.keys,Object),Et=Object.prototype,Bt=Et.hasOwnProperty;function kt(t){if(!N(t))return $t(t);var e=[];for(var r in Object(t))Bt.call(t,r)&&r!="constructor"&&e.push(r);return e}function zt(t){return q(t)?Ct(t):kt(t)}function er(){if(!arguments.length)return[];var t=arguments[0];return _(t)?t:[t]}function Ut(){this.__data__=new w,this.size=0}function Lt(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function Dt(t){return this.__data__.get(t)}function Ft(t){return this.__data__.has(t)}var Gt=200;function Vt(t,e){var r=this.__data__;if(r instanceof w){var n=r.__data__;if(!y||n.length<Gt-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new R(n)}return r.set(t,e),this.size=r.size,this}function b(t){var e=this.__data__=new w(t);this.size=e.size}b.prototype.clear=Ut;b.prototype.delete=Lt;b.prototype.get=Dt;b.prototype.has=Ft;b.prototype.set=Vt;function Kt(t,e){for(var r=-1,n=t==null?0:t.length,c=0,f=[];++r<n;){var p=t[r];e(p,r,t)&&(f[c++]=p)}return f}function Rt(){return[]}var Wt=Object.prototype,qt=Wt.propertyIsEnumerable,M=Object.getOwnPropertySymbols,Ht=M?function(t){return t==null?[]:(t=Object(t),Kt(M(t),function(e){return qt.call(t,e)}))}:Rt;function Nt(t,e,r){var n=e(t);return _(t)?n:W(n,r(t))}function ar(t){return Nt(t,zt,Ht)}var T=l(i,"DataView"),j=l(i,"Promise"),m=l(i,"Set"),C="[object Map]",Jt="[object Object]",I="[object Promise]",$="[object Set]",E="[object WeakMap]",B="[object DataView]",Yt=u(T),Zt=u(y),Qt=u(j),Xt=u(m),tr=u(h),s=A;(T&&s(new T(new ArrayBuffer(1)))!=B||y&&s(new y)!=C||j&&s(j.resolve())!=I||m&&s(new m)!=$||h&&s(new h)!=E)&&(s=function(t){var e=A(t),r=e==Jt?t.constructor:void 0,n=r?u(r):"";if(n)switch(n){case Yt:return B;case Zt:return C;case Qt:return I;case Xt:return $;case tr:return E}return e});var nr=i.Uint8Array;export{b as S,nr as U,s as a,Ot as b,er as c,N as d,q as e,Ct as f,ar as g,Ht as h,X as i,Nt as j,zt as k,xt as l,O as n,It as o,Rt as s};
