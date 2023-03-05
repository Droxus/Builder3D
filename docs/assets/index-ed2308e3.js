(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function c0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ka={},f0={get exports(){return ka},set exports(t){ka=t}},ol={},an={},d0={get exports(){return an},set exports(t){an=t}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=Symbol.for("react.element"),h0=Symbol.for("react.portal"),p0=Symbol.for("react.fragment"),m0=Symbol.for("react.strict_mode"),g0=Symbol.for("react.profiler"),v0=Symbol.for("react.provider"),_0=Symbol.for("react.context"),x0=Symbol.for("react.forward_ref"),y0=Symbol.for("react.suspense"),S0=Symbol.for("react.memo"),M0=Symbol.for("react.lazy"),jf=Symbol.iterator;function w0(t){return t===null||typeof t!="object"?null:(t=jf&&t[jf]||t["@@iterator"],typeof t=="function"?t:null)}var Sp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mp=Object.assign,wp={};function Ts(t,e,n){this.props=t,this.context=e,this.refs=wp,this.updater=n||Sp}Ts.prototype.isReactComponent={};Ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ep(){}Ep.prototype=Ts.prototype;function Gc(t,e,n){this.props=t,this.context=e,this.refs=wp,this.updater=n||Sp}var Hc=Gc.prototype=new Ep;Hc.constructor=Gc;Mp(Hc,Ts.prototype);Hc.isPureReactComponent=!0;var Xf=Array.isArray,bp=Object.prototype.hasOwnProperty,Wc={current:null},Tp={key:!0,ref:!0,__self:!0,__source:!0};function Cp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bp.call(e,i)&&!Tp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ro,type:t,key:s,ref:o,props:r,_owner:Wc.current}}function E0(t,e){return{$$typeof:Ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ro}function b0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qf=/\/+/g;function Dl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?b0(""+t.key):e.toString(36)}function Sa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ro:case h0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Dl(o,0):i,Xf(r)?(n="",t!=null&&(n=t.replace(qf,"$&/")+"/"),Sa(r,e,n,"",function(u){return u})):r!=null&&(jc(r)&&(r=E0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(qf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Xf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Dl(s,a);o+=Sa(s,e,n,l,r)}else if(l=w0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Dl(s,a++),o+=Sa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Uo(t,e,n){if(t==null)return t;var i=[],r=0;return Sa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function T0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ht={current:null},Ma={transition:null},C0={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:Ma,ReactCurrentOwner:Wc};De.Children={map:Uo,forEach:function(t,e,n){Uo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Uo(t,function(){e++}),e},toArray:function(t){return Uo(t,function(e){return e})||[]},only:function(t){if(!jc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};De.Component=Ts;De.Fragment=p0;De.Profiler=g0;De.PureComponent=Gc;De.StrictMode=m0;De.Suspense=y0;De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C0;De.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Mp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)bp.call(e,l)&&!Tp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ro,type:t.type,key:r,ref:s,props:i,_owner:o}};De.createContext=function(t){return t={$$typeof:_0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:v0,_context:t},t.Consumer=t};De.createElement=Cp;De.createFactory=function(t){var e=Cp.bind(null,t);return e.type=t,e};De.createRef=function(){return{current:null}};De.forwardRef=function(t){return{$$typeof:x0,render:t}};De.isValidElement=jc;De.lazy=function(t){return{$$typeof:M0,_payload:{_status:-1,_result:t},_init:T0}};De.memo=function(t,e){return{$$typeof:S0,type:t,compare:e===void 0?null:e}};De.startTransition=function(t){var e=Ma.transition;Ma.transition={};try{t()}finally{Ma.transition=e}};De.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};De.useCallback=function(t,e){return Ht.current.useCallback(t,e)};De.useContext=function(t){return Ht.current.useContext(t)};De.useDebugValue=function(){};De.useDeferredValue=function(t){return Ht.current.useDeferredValue(t)};De.useEffect=function(t,e){return Ht.current.useEffect(t,e)};De.useId=function(){return Ht.current.useId()};De.useImperativeHandle=function(t,e,n){return Ht.current.useImperativeHandle(t,e,n)};De.useInsertionEffect=function(t,e){return Ht.current.useInsertionEffect(t,e)};De.useLayoutEffect=function(t,e){return Ht.current.useLayoutEffect(t,e)};De.useMemo=function(t,e){return Ht.current.useMemo(t,e)};De.useReducer=function(t,e,n){return Ht.current.useReducer(t,e,n)};De.useRef=function(t){return Ht.current.useRef(t)};De.useState=function(t){return Ht.current.useState(t)};De.useSyncExternalStore=function(t,e,n){return Ht.current.useSyncExternalStore(t,e,n)};De.useTransition=function(){return Ht.current.useTransition()};De.version="18.2.0";(function(t){t.exports=De})(d0);const A0=c0(an);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0=an,P0=Symbol.for("react.element"),D0=Symbol.for("react.fragment"),R0=Object.prototype.hasOwnProperty,I0=L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N0={key:!0,ref:!0,__self:!0,__source:!0};function Ap(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)R0.call(e,i)&&!N0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:P0,type:t,key:s,ref:o,props:r,_owner:I0.current}}ol.Fragment=D0;ol.jsx=Ap;ol.jsxs=Ap;(function(t){t.exports=ol})(f0);const ye=ka.jsx,lt=ka.jsxs;var Ou={},Uu={},k0={get exports(){return Uu},set exports(t){Uu=t}},mn={},Bu={},z0={get exports(){return Bu},set exports(t){Bu=t}},Lp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,V){var G=R.length;R.push(V);e:for(;0<G;){var re=G-1>>>1,F=R[re];if(0<r(F,V))R[re]=V,R[G]=F,G=re;else break e}}function n(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var V=R[0],G=R.pop();if(G!==V){R[0]=G;e:for(var re=0,F=R.length,Y=F>>>1;re<Y;){var ne=2*(re+1)-1,se=R[ne],U=ne+1,Se=R[U];if(0>r(se,G))U<F&&0>r(Se,se)?(R[re]=Se,R[U]=G,re=U):(R[re]=se,R[ne]=G,re=ne);else if(U<F&&0>r(Se,G))R[re]=Se,R[U]=G,re=U;else break e}}return V}function r(R,V){var G=R.sortIndex-V.sortIndex;return G!==0?G:R.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,x=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(R){for(var V=n(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=R)i(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function M(R){if(h=!1,_(R),!x)if(n(l)!==null)x=!0,K(S);else{var V=n(u);V!==null&&Q(M,V.startTime-R)}}function S(R,V){x=!1,h&&(h=!1,m(y),y=-1),g=!0;var G=f;try{for(_(V),d=n(l);d!==null&&(!(d.expirationTime>V)||R&&!$());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var F=re(d.expirationTime<=V);V=t.unstable_now(),typeof F=="function"?d.callback=F:d===n(l)&&i(l),_(V)}else i(l);d=n(l)}if(d!==null)var Y=!0;else{var ne=n(u);ne!==null&&Q(M,ne.startTime-V),Y=!1}return Y}finally{d=null,f=G,g=!1}}var A=!1,L=null,y=-1,T=5,P=-1;function $(){return!(t.unstable_now()-P<T)}function Z(){if(L!==null){var R=t.unstable_now();P=R;var V=!0;try{V=L(!0,R)}finally{V?z():(A=!1,L=null)}}else A=!1}var z;if(typeof v=="function")z=function(){v(Z)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,q=k.port2;k.port1.onmessage=Z,z=function(){q.postMessage(null)}}else z=function(){p(Z,0)};function K(R){L=R,A||(A=!0,z())}function Q(R,V){y=p(function(){R(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,K(S))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var G=f;f=V;try{return R()}finally{f=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,V){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var G=f;f=R;try{return V()}finally{f=G}},t.unstable_scheduleCallback=function(R,V,G){var re=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?re+G:re):G=re,R){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=G+F,R={id:c++,callback:V,priorityLevel:R,startTime:G,expirationTime:F,sortIndex:-1},G>re?(R.sortIndex=G,e(u,R),n(l)===null&&R===n(u)&&(h?(m(y),y=-1):h=!0,Q(M,G-re))):(R.sortIndex=F,e(l,R),x||g||(x=!0,K(S))),R},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(R){var V=f;return function(){var G=f;f=V;try{return R.apply(this,arguments)}finally{f=G}}}})(Lp);(function(t){t.exports=Lp})(z0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp=an,pn=Bu;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dp=new Set,uo={};function br(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(uo[t]=e,t=0;t<e.length;t++)Dp.add(e[t])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=Object.prototype.hasOwnProperty,F0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yf={},$f={};function O0(t){return Vu.call($f,t)?!0:Vu.call(Yf,t)?!1:F0.test(t)?$f[t]=!0:(Yf[t]=!0,!1)}function U0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B0(t,e,n,i){if(e===null||typeof e>"u"||U0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){At[t]=new Wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];At[e]=new Wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){At[t]=new Wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){At[t]=new Wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){At[t]=new Wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){At[t]=new Wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){At[t]=new Wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){At[t]=new Wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){At[t]=new Wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xc=/[\-:]([a-z])/g;function qc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xc,qc);At[e]=new Wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xc,qc);At[e]=new Wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xc,qc);At[e]=new Wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){At[t]=new Wt(t,1,!1,t.toLowerCase(),null,!1,!1)});At.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){At[t]=new Wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yc(t,e,n,i){var r=At.hasOwnProperty(e)?At[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(B0(e,n,r,i)&&(n=null),i||r===null?O0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _i=Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bo=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),$c=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),Rp=Symbol.for("react.provider"),Ip=Symbol.for("react.context"),Zc=Symbol.for("react.forward_ref"),Hu=Symbol.for("react.suspense"),Wu=Symbol.for("react.suspense_list"),Kc=Symbol.for("react.memo"),Ei=Symbol.for("react.lazy"),Np=Symbol.for("react.offscreen"),Zf=Symbol.iterator;function Rs(t){return t===null||typeof t!="object"?null:(t=Zf&&t[Zf]||t["@@iterator"],typeof t=="function"?t:null)}var Je=Object.assign,Rl;function qs(t){if(Rl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rl=e&&e[1]||""}return`
`+Rl+t}var Il=!1;function Nl(t,e){if(!t||Il)return"";Il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Il=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qs(t):""}function V0(t){switch(t.tag){case 5:return qs(t.type);case 16:return qs("Lazy");case 13:return qs("Suspense");case 19:return qs("SuspenseList");case 0:case 2:case 15:return t=Nl(t.type,!1),t;case 11:return t=Nl(t.type.render,!1),t;case 1:return t=Nl(t.type,!0),t;default:return""}}function ju(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $r:return"Fragment";case Yr:return"Portal";case Gu:return"Profiler";case $c:return"StrictMode";case Hu:return"Suspense";case Wu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ip:return(t.displayName||"Context")+".Consumer";case Rp:return(t._context.displayName||"Context")+".Provider";case Zc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kc:return e=t.displayName||null,e!==null?e:ju(t.type)||"Memo";case Ei:e=t._payload,t=t._init;try{return ju(t(e))}catch{}}return null}function G0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(e);case 8:return e===$c?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ui(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function H0(t){var e=kp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vo(t){t._valueTracker||(t._valueTracker=H0(t))}function zp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=kp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function za(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xu(t,e){var n=e.checked;return Je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ui(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fp(t,e){e=e.checked,e!=null&&Yc(t,"checked",e,!1)}function qu(t,e){Fp(t,e);var n=Ui(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yu(t,e.type,Ui(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yu(t,e,n){(e!=="number"||za(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ys=Array.isArray;function as(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ui(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $u(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return Je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(Ys(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ui(n)}}function Op(t,e){var n=Ui(e.value),i=Ui(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ed(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Up(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Up(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Go,Bp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Go=Go||document.createElement("div"),Go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W0=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(t){W0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),eo[e]=eo[t]})});function Vp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||eo.hasOwnProperty(t)&&eo[t]?(""+e).trim():e+"px"}function Gp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Vp(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var j0=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ku(t,e){if(e){if(j0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function Qu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ju=null;function Qc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ec=null,ls=null,us=null;function td(t){if(t=ko(t)){if(typeof ec!="function")throw Error(J(280));var e=t.stateNode;e&&(e=fl(e),ec(t.stateNode,t.type,e))}}function Hp(t){ls?us?us.push(t):us=[t]:ls=t}function Wp(){if(ls){var t=ls,e=us;if(us=ls=null,td(t),e)for(t=0;t<e.length;t++)td(e[t])}}function jp(t,e){return t(e)}function Xp(){}var kl=!1;function qp(t,e,n){if(kl)return t(e,n);kl=!0;try{return jp(t,e,n)}finally{kl=!1,(ls!==null||us!==null)&&(Xp(),Wp())}}function fo(t,e){var n=t.stateNode;if(n===null)return null;var i=fl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var tc=!1;if(pi)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){tc=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{tc=!1}function X0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var to=!1,Fa=null,Oa=!1,nc=null,q0={onError:function(t){to=!0,Fa=t}};function Y0(t,e,n,i,r,s,o,a,l){to=!1,Fa=null,X0.apply(q0,arguments)}function $0(t,e,n,i,r,s,o,a,l){if(Y0.apply(this,arguments),to){if(to){var u=Fa;to=!1,Fa=null}else throw Error(J(198));Oa||(Oa=!0,nc=u)}}function Tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Yp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nd(t){if(Tr(t)!==t)throw Error(J(188))}function Z0(t){var e=t.alternate;if(!e){if(e=Tr(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return nd(r),t;if(s===i)return nd(r),e;s=s.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function $p(t){return t=Z0(t),t!==null?Zp(t):null}function Zp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zp(t);if(e!==null)return e;t=t.sibling}return null}var Kp=pn.unstable_scheduleCallback,id=pn.unstable_cancelCallback,K0=pn.unstable_shouldYield,Q0=pn.unstable_requestPaint,it=pn.unstable_now,J0=pn.unstable_getCurrentPriorityLevel,Jc=pn.unstable_ImmediatePriority,Qp=pn.unstable_UserBlockingPriority,Ua=pn.unstable_NormalPriority,ev=pn.unstable_LowPriority,Jp=pn.unstable_IdlePriority,al=null,$n=null;function tv(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(al,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:rv,nv=Math.log,iv=Math.LN2;function rv(t){return t>>>=0,t===0?32:31-(nv(t)/iv|0)|0}var Ho=64,Wo=4194304;function $s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ba(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=$s(a):(s&=o,s!==0&&(i=$s(s)))}else o=n&~r,o!==0?i=$s(o):s!==0&&(i=$s(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function sv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ov(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=sv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ic(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function em(){var t=Ho;return Ho<<=1,!(Ho&4194240)&&(Ho=64),t}function zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function av(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ge=0;function tm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var nm,tf,im,rm,sm,rc=!1,jo=[],Pi=null,Di=null,Ri=null,ho=new Map,po=new Map,Ti=[],lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rd(t,e){switch(t){case"focusin":case"focusout":Pi=null;break;case"dragenter":case"dragleave":Di=null;break;case"mouseover":case"mouseout":Ri=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function Ns(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ko(e),e!==null&&tf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function uv(t,e,n,i,r){switch(e){case"focusin":return Pi=Ns(Pi,t,e,n,i,r),!0;case"dragenter":return Di=Ns(Di,t,e,n,i,r),!0;case"mouseover":return Ri=Ns(Ri,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ho.set(s,Ns(ho.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,po.set(s,Ns(po.get(s)||null,t,e,n,i,r)),!0}return!1}function om(t){var e=or(t.target);if(e!==null){var n=Tr(e);if(n!==null){if(e=n.tag,e===13){if(e=Yp(n),e!==null){t.blockedOn=e,sm(t.priority,function(){im(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ju=i,n.target.dispatchEvent(i),Ju=null}else return e=ko(n),e!==null&&tf(e),t.blockedOn=n,!1;e.shift()}return!0}function sd(t,e,n){wa(t)&&n.delete(e)}function cv(){rc=!1,Pi!==null&&wa(Pi)&&(Pi=null),Di!==null&&wa(Di)&&(Di=null),Ri!==null&&wa(Ri)&&(Ri=null),ho.forEach(sd),po.forEach(sd)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,rc||(rc=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,cv)))}function mo(t){function e(r){return ks(r,t)}if(0<jo.length){ks(jo[0],t);for(var n=1;n<jo.length;n++){var i=jo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Pi!==null&&ks(Pi,t),Di!==null&&ks(Di,t),Ri!==null&&ks(Ri,t),ho.forEach(e),po.forEach(e),n=0;n<Ti.length;n++)i=Ti[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ti.length&&(n=Ti[0],n.blockedOn===null);)om(n),n.blockedOn===null&&Ti.shift()}var cs=_i.ReactCurrentBatchConfig,Va=!0;function fv(t,e,n,i){var r=Ge,s=cs.transition;cs.transition=null;try{Ge=1,nf(t,e,n,i)}finally{Ge=r,cs.transition=s}}function dv(t,e,n,i){var r=Ge,s=cs.transition;cs.transition=null;try{Ge=4,nf(t,e,n,i)}finally{Ge=r,cs.transition=s}}function nf(t,e,n,i){if(Va){var r=sc(t,e,n,i);if(r===null)Xl(t,e,i,Ga,n),rd(t,i);else if(uv(r,t,e,n,i))i.stopPropagation();else if(rd(t,i),e&4&&-1<lv.indexOf(t)){for(;r!==null;){var s=ko(r);if(s!==null&&nm(s),s=sc(t,e,n,i),s===null&&Xl(t,e,i,Ga,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xl(t,e,i,null,n)}}var Ga=null;function sc(t,e,n,i){if(Ga=null,t=Qc(i),t=or(t),t!==null)if(e=Tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Yp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ga=t,null}function am(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J0()){case Jc:return 1;case Qp:return 4;case Ua:case ev:return 16;case Jp:return 536870912;default:return 16}default:return 16}}var Ai=null,rf=null,Ea=null;function lm(){if(Ea)return Ea;var t,e=rf,n=e.length,i,r="value"in Ai?Ai.value:Ai.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ea=r.slice(t,1<i?1-i:void 0)}function ba(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function od(){return!1}function gn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xo:od,this.isPropagationStopped=od,this}return Je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),e}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=gn(Cs),No=Je({},Cs,{view:0,detail:0}),hv=gn(No),Fl,Ol,zs,ll=Je({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(Fl=t.screenX-zs.screenX,Ol=t.screenY-zs.screenY):Ol=Fl=0,zs=t),Fl)},movementY:function(t){return"movementY"in t?t.movementY:Ol}}),ad=gn(ll),pv=Je({},ll,{dataTransfer:0}),mv=gn(pv),gv=Je({},No,{relatedTarget:0}),Ul=gn(gv),vv=Je({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),_v=gn(vv),xv=Je({},Cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yv=gn(xv),Sv=Je({},Cs,{data:0}),ld=gn(Sv),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ev[t])?!!e[t]:!1}function of(){return bv}var Tv=Je({},No,{key:function(t){if(t.key){var e=Mv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cv=gn(Tv),Av=Je({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ud=gn(Av),Lv=Je({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),Pv=gn(Lv),Dv=Je({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rv=gn(Dv),Iv=Je({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=gn(Iv),kv=[9,13,27,32],af=pi&&"CompositionEvent"in window,no=null;pi&&"documentMode"in document&&(no=document.documentMode);var zv=pi&&"TextEvent"in window&&!no,um=pi&&(!af||no&&8<no&&11>=no),cd=String.fromCharCode(32),fd=!1;function cm(t,e){switch(t){case"keyup":return kv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function Fv(t,e){switch(t){case"compositionend":return fm(e);case"keypress":return e.which!==32?null:(fd=!0,cd);case"textInput":return t=e.data,t===cd&&fd?null:t;default:return null}}function Ov(t,e){if(Zr)return t==="compositionend"||!af&&cm(t,e)?(t=lm(),Ea=rf=Ai=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return um&&e.locale!=="ko"?null:e.data;default:return null}}var Uv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Uv[t.type]:e==="textarea"}function dm(t,e,n,i){Hp(i),e=Ha(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var io=null,go=null;function Bv(t){wm(t,0)}function ul(t){var e=Jr(t);if(zp(e))return t}function Vv(t,e){if(t==="change")return e}var hm=!1;if(pi){var Bl;if(pi){var Vl="oninput"in document;if(!Vl){var hd=document.createElement("div");hd.setAttribute("oninput","return;"),Vl=typeof hd.oninput=="function"}Bl=Vl}else Bl=!1;hm=Bl&&(!document.documentMode||9<document.documentMode)}function pd(){io&&(io.detachEvent("onpropertychange",pm),go=io=null)}function pm(t){if(t.propertyName==="value"&&ul(go)){var e=[];dm(e,go,t,Qc(t)),qp(Bv,e)}}function Gv(t,e,n){t==="focusin"?(pd(),io=e,go=n,io.attachEvent("onpropertychange",pm)):t==="focusout"&&pd()}function Hv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ul(go)}function Wv(t,e){if(t==="click")return ul(e)}function jv(t,e){if(t==="input"||t==="change")return ul(e)}function Xv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:Xv;function vo(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Vu.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function md(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gd(t,e){var n=md(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=md(n)}}function mm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gm(){for(var t=window,e=za();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=za(t.document)}return e}function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qv(t){var e=gm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&mm(n.ownerDocument.documentElement,n)){if(i!==null&&lf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=gd(n,s);var o=gd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yv=pi&&"documentMode"in document&&11>=document.documentMode,Kr=null,oc=null,ro=null,ac=!1;function vd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ac||Kr==null||Kr!==za(i)||(i=Kr,"selectionStart"in i&&lf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ro&&vo(ro,i)||(ro=i,i=Ha(oc,"onSelect"),0<i.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Kr)))}function qo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qr={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},Gl={},vm={};pi&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function cl(t){if(Gl[t])return Gl[t];if(!Qr[t])return t;var e=Qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vm)return Gl[t]=e[n];return t}var _m=cl("animationend"),xm=cl("animationiteration"),ym=cl("animationstart"),Sm=cl("transitionend"),Mm=new Map,_d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hi(t,e){Mm.set(t,e),br(e,[t])}for(var Hl=0;Hl<_d.length;Hl++){var Wl=_d[Hl],$v=Wl.toLowerCase(),Zv=Wl[0].toUpperCase()+Wl.slice(1);Hi($v,"on"+Zv)}Hi(_m,"onAnimationEnd");Hi(xm,"onAnimationIteration");Hi(ym,"onAnimationStart");Hi("dblclick","onDoubleClick");Hi("focusin","onFocus");Hi("focusout","onBlur");Hi(Sm,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zs));function xd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$0(i,e,void 0,t),t.currentTarget=null}function wm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;xd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;xd(r,a,u),s=l}}}if(Oa)throw t=nc,Oa=!1,nc=null,t}function je(t,e){var n=e[dc];n===void 0&&(n=e[dc]=new Set);var i=t+"__bubble";n.has(i)||(Em(e,t,2,!1),n.add(i))}function jl(t,e,n){var i=0;e&&(i|=4),Em(n,t,i,e)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[Yo]){t[Yo]=!0,Dp.forEach(function(n){n!=="selectionchange"&&(Kv.has(n)||jl(n,!1,t),jl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yo]||(e[Yo]=!0,jl("selectionchange",!1,e))}}function Em(t,e,n,i){switch(am(e)){case 1:var r=fv;break;case 4:r=dv;break;default:r=nf}n=r.bind(null,e,n,t),r=void 0,!tc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Xl(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}qp(function(){var u=s,c=Qc(n),d=[];e:{var f=Mm.get(t);if(f!==void 0){var g=sf,x=t;switch(t){case"keypress":if(ba(n)===0)break e;case"keydown":case"keyup":g=Cv;break;case"focusin":x="focus",g=Ul;break;case"focusout":x="blur",g=Ul;break;case"beforeblur":case"afterblur":g=Ul;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Pv;break;case _m:case xm:case ym:g=_v;break;case Sm:g=Rv;break;case"scroll":g=hv;break;case"wheel":g=Nv;break;case"copy":case"cut":case"paste":g=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ud}var h=(e&4)!==0,p=!h&&t==="scroll",m=h?f!==null?f+"Capture":null:f;h=[];for(var v=u,_;v!==null;){_=v;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,m!==null&&(M=fo(v,m),M!=null&&h.push(xo(v,M,_)))),p)break;v=v.return}0<h.length&&(f=new g(f,x,null,n,c),d.push({event:f,listeners:h}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Ju&&(x=n.relatedTarget||n.fromElement)&&(or(x)||x[mi]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?or(x):null,x!==null&&(p=Tr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(h=ad,M="onMouseLeave",m="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(h=ud,M="onPointerLeave",m="onPointerEnter",v="pointer"),p=g==null?f:Jr(g),_=x==null?f:Jr(x),f=new h(M,v+"leave",g,n,c),f.target=p,f.relatedTarget=_,M=null,or(c)===u&&(h=new h(m,v+"enter",x,n,c),h.target=_,h.relatedTarget=p,M=h),p=M,g&&x)t:{for(h=g,m=x,v=0,_=h;_;_=Lr(_))v++;for(_=0,M=m;M;M=Lr(M))_++;for(;0<v-_;)h=Lr(h),v--;for(;0<_-v;)m=Lr(m),_--;for(;v--;){if(h===m||m!==null&&h===m.alternate)break t;h=Lr(h),m=Lr(m)}h=null}else h=null;g!==null&&yd(d,f,g,h,!1),x!==null&&p!==null&&yd(d,p,x,h,!0)}}e:{if(f=u?Jr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=Vv;else if(dd(f))if(hm)S=jv;else{S=Hv;var A=Gv}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Wv);if(S&&(S=S(t,u))){dm(d,S,n,c);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Yu(f,"number",f.value)}switch(A=u?Jr(u):window,t){case"focusin":(dd(A)||A.contentEditable==="true")&&(Kr=A,oc=u,ro=null);break;case"focusout":ro=oc=Kr=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,vd(d,n,c);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":vd(d,n,c)}var L;if(af)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Zr?cm(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(um&&n.locale!=="ko"&&(Zr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Zr&&(L=lm()):(Ai=c,rf="value"in Ai?Ai.value:Ai.textContent,Zr=!0)),A=Ha(u,y),0<A.length&&(y=new ld(y,t,null,n,c),d.push({event:y,listeners:A}),L?y.data=L:(L=fm(n),L!==null&&(y.data=L)))),(L=zv?Fv(t,n):Ov(t,n))&&(u=Ha(u,"onBeforeInput"),0<u.length&&(c=new ld("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=L))}wm(d,e)})}function xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ha(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fo(t,n),s!=null&&i.unshift(xo(t,s,r)),s=fo(t,e),s!=null&&i.push(xo(t,s,r))),t=t.return}return i}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=fo(n,s),l!=null&&o.unshift(xo(n,l,a))):r||(l=fo(n,s),l!=null&&o.push(xo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Qv=/\r\n?/g,Jv=/\u0000|\uFFFD/g;function Sd(t){return(typeof t=="string"?t:""+t).replace(Qv,`
`).replace(Jv,"")}function $o(t,e,n){if(e=Sd(e),Sd(t)!==e&&n)throw Error(J(425))}function Wa(){}var lc=null,uc=null;function cc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fc=typeof setTimeout=="function"?setTimeout:void 0,e_=typeof clearTimeout=="function"?clearTimeout:void 0,Md=typeof Promise=="function"?Promise:void 0,t_=typeof queueMicrotask=="function"?queueMicrotask:typeof Md<"u"?function(t){return Md.resolve(null).then(t).catch(n_)}:fc;function n_(t){setTimeout(function(){throw t})}function ql(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),mo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);mo(e)}function Ii(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var As=Math.random().toString(36).slice(2),Xn="__reactFiber$"+As,yo="__reactProps$"+As,mi="__reactContainer$"+As,dc="__reactEvents$"+As,i_="__reactListeners$"+As,r_="__reactHandles$"+As;function or(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mi]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wd(t);t!==null;){if(n=t[Xn])return n;t=wd(t)}return e}t=n,n=t.parentNode}return null}function ko(t){return t=t[Xn]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function fl(t){return t[yo]||null}var hc=[],es=-1;function Wi(t){return{current:t}}function qe(t){0>es||(t.current=hc[es],hc[es]=null,es--)}function We(t,e){es++,hc[es]=t.current,t.current=e}var Bi={},kt=Wi(Bi),$t=Wi(!1),gr=Bi;function gs(t,e){var n=t.type.contextTypes;if(!n)return Bi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Zt(t){return t=t.childContextTypes,t!=null}function ja(){qe($t),qe(kt)}function Ed(t,e,n){if(kt.current!==Bi)throw Error(J(168));We(kt,e),We($t,n)}function bm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,G0(t)||"Unknown",r));return Je({},n,i)}function Xa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bi,gr=kt.current,We(kt,t),We($t,$t.current),!0}function bd(t,e,n){var i=t.stateNode;if(!i)throw Error(J(169));n?(t=bm(t,e,gr),i.__reactInternalMemoizedMergedChildContext=t,qe($t),qe(kt),We(kt,t)):qe($t),We($t,n)}var ai=null,dl=!1,Yl=!1;function Tm(t){ai===null?ai=[t]:ai.push(t)}function s_(t){dl=!0,Tm(t)}function ji(){if(!Yl&&ai!==null){Yl=!0;var t=0,e=Ge;try{var n=ai;for(Ge=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,dl=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),Kp(Jc,ji),r}finally{Ge=e,Yl=!1}}return null}var ts=[],ns=0,qa=null,Ya=0,Sn=[],Mn=0,vr=null,ci=1,fi="";function Ji(t,e){ts[ns++]=Ya,ts[ns++]=qa,qa=t,Ya=e}function Cm(t,e,n){Sn[Mn++]=ci,Sn[Mn++]=fi,Sn[Mn++]=vr,vr=t;var i=ci;t=fi;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ci=1<<32-On(e)+r|n<<r|i,fi=s+t}else ci=1<<s|n<<r|i,fi=t}function uf(t){t.return!==null&&(Ji(t,1),Cm(t,1,0))}function cf(t){for(;t===qa;)qa=ts[--ns],ts[ns]=null,Ya=ts[--ns],ts[ns]=null;for(;t===vr;)vr=Sn[--Mn],Sn[Mn]=null,fi=Sn[--Mn],Sn[Mn]=null,ci=Sn[--Mn],Sn[Mn]=null}var fn=null,ln=null,$e=!1,zn=null;function Am(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Td(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,ln=Ii(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vr!==null?{id:ci,overflow:fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,ln=null,!0):!1;default:return!1}}function pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mc(t){if($e){var e=ln;if(e){var n=e;if(!Td(t,e)){if(pc(t))throw Error(J(418));e=Ii(n.nextSibling);var i=fn;e&&Td(t,e)?Am(i,n):(t.flags=t.flags&-4097|2,$e=!1,fn=t)}}else{if(pc(t))throw Error(J(418));t.flags=t.flags&-4097|2,$e=!1,fn=t}}}function Cd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function Zo(t){if(t!==fn)return!1;if(!$e)return Cd(t),$e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cc(t.type,t.memoizedProps)),e&&(e=ln)){if(pc(t))throw Lm(),Error(J(418));for(;e;)Am(t,e),e=Ii(e.nextSibling)}if(Cd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ln=Ii(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ln=null}}else ln=fn?Ii(t.stateNode.nextSibling):null;return!0}function Lm(){for(var t=ln;t;)t=Ii(t.nextSibling)}function vs(){ln=fn=null,$e=!1}function ff(t){zn===null?zn=[t]:zn.push(t)}var o_=_i.ReactCurrentBatchConfig;function Nn(t,e){if(t&&t.defaultProps){e=Je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $a=Wi(null),Za=null,is=null,df=null;function hf(){df=is=Za=null}function pf(t){var e=$a.current;qe($a),t._currentValue=e}function gc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function fs(t,e){Za=t,df=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(df!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(Za===null)throw Error(J(308));is=t,Za.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var ar=null;function mf(t){ar===null?ar=[t]:ar.push(t)}function Pm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,mf(e)):(n.next=r.next,r.next=n),e.interleaved=n,gi(t,i)}function gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var bi=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ni(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Fe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gi(t,n)}return r=i.interleaved,r===null?(e.next=e,mf(i)):(e.next=r.next,r.next=e),i.interleaved=e,gi(t,n)}function Ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ef(t,n)}}function Ad(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ka(t,e,n,i){var r=t.updateQueue;bi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,h=a;switch(f=e,g=n,h.tag){case 1:if(x=h.payload,typeof x=="function"){d=x.call(g,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,f=typeof x=="function"?x.call(g,d,f):x,f==null)break e;d=Je({},d,f);break e;case 2:bi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);xr|=o,t.lanes=o,t.memoizedState=d}}function Ld(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var Rm=new Pp.Component().refs;function vc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hl={isMounted:function(t){return(t=t._reactInternals)?Tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=zi(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ni(t,s,r),e!==null&&(Un(e,t,r,i),Ta(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Gt(),r=zi(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ni(t,s,r),e!==null&&(Un(e,t,r,i),Ta(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),i=zi(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ni(t,r,i),e!==null&&(Un(e,t,i,n),Ta(e,t,i))}};function Pd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,i)||!vo(r,s):!0}function Im(t,e,n){var i=!1,r=Bi,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=Zt(e)?gr:kt.current,i=e.contextTypes,s=(i=i!=null)?gs(t,r):Bi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&hl.enqueueReplaceState(e,e.state,null)}function _c(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Rm,gf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=Zt(e)?gr:kt.current,r.context=gs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hl.enqueueReplaceState(r,r.state,null),Ka(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Rm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function Ko(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Rd(t){var e=t._init;return e(t._payload)}function Nm(t){function e(m,v){if(t){var _=m.deletions;_===null?(m.deletions=[v],m.flags|=16):_.push(v)}}function n(m,v){if(!t)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Fi(m,v),m.index=0,m.sibling=null,m}function s(m,v,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<v?(m.flags|=2,v):_):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,v,_,M){return v===null||v.tag!==6?(v=tu(_,m.mode,M),v.return=m,v):(v=r(v,_),v.return=m,v)}function l(m,v,_,M){var S=_.type;return S===$r?c(m,v,_.props.children,M,_.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ei&&Rd(S)===v.type)?(M=r(v,_.props),M.ref=Fs(m,v,_),M.return=m,M):(M=Ra(_.type,_.key,_.props,null,m.mode,M),M.ref=Fs(m,v,_),M.return=m,M)}function u(m,v,_,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=nu(_,m.mode,M),v.return=m,v):(v=r(v,_.children||[]),v.return=m,v)}function c(m,v,_,M,S){return v===null||v.tag!==7?(v=dr(_,m.mode,M,S),v.return=m,v):(v=r(v,_),v.return=m,v)}function d(m,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=tu(""+v,m.mode,_),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bo:return _=Ra(v.type,v.key,v.props,null,m.mode,_),_.ref=Fs(m,null,v),_.return=m,_;case Yr:return v=nu(v,m.mode,_),v.return=m,v;case Ei:var M=v._init;return d(m,M(v._payload),_)}if(Ys(v)||Rs(v))return v=dr(v,m.mode,_,null),v.return=m,v;Ko(m,v)}return null}function f(m,v,_,M){var S=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:a(m,v,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Bo:return _.key===S?l(m,v,_,M):null;case Yr:return _.key===S?u(m,v,_,M):null;case Ei:return S=_._init,f(m,v,S(_._payload),M)}if(Ys(_)||Rs(_))return S!==null?null:c(m,v,_,M,null);Ko(m,_)}return null}function g(m,v,_,M,S){if(typeof M=="string"&&M!==""||typeof M=="number")return m=m.get(_)||null,a(v,m,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Bo:return m=m.get(M.key===null?_:M.key)||null,l(v,m,M,S);case Yr:return m=m.get(M.key===null?_:M.key)||null,u(v,m,M,S);case Ei:var A=M._init;return g(m,v,_,A(M._payload),S)}if(Ys(M)||Rs(M))return m=m.get(_)||null,c(v,m,M,S,null);Ko(v,M)}return null}function x(m,v,_,M){for(var S=null,A=null,L=v,y=v=0,T=null;L!==null&&y<_.length;y++){L.index>y?(T=L,L=null):T=L.sibling;var P=f(m,L,_[y],M);if(P===null){L===null&&(L=T);break}t&&L&&P.alternate===null&&e(m,L),v=s(P,v,y),A===null?S=P:A.sibling=P,A=P,L=T}if(y===_.length)return n(m,L),$e&&Ji(m,y),S;if(L===null){for(;y<_.length;y++)L=d(m,_[y],M),L!==null&&(v=s(L,v,y),A===null?S=L:A.sibling=L,A=L);return $e&&Ji(m,y),S}for(L=i(m,L);y<_.length;y++)T=g(L,m,y,_[y],M),T!==null&&(t&&T.alternate!==null&&L.delete(T.key===null?y:T.key),v=s(T,v,y),A===null?S=T:A.sibling=T,A=T);return t&&L.forEach(function($){return e(m,$)}),$e&&Ji(m,y),S}function h(m,v,_,M){var S=Rs(_);if(typeof S!="function")throw Error(J(150));if(_=S.call(_),_==null)throw Error(J(151));for(var A=S=null,L=v,y=v=0,T=null,P=_.next();L!==null&&!P.done;y++,P=_.next()){L.index>y?(T=L,L=null):T=L.sibling;var $=f(m,L,P.value,M);if($===null){L===null&&(L=T);break}t&&L&&$.alternate===null&&e(m,L),v=s($,v,y),A===null?S=$:A.sibling=$,A=$,L=T}if(P.done)return n(m,L),$e&&Ji(m,y),S;if(L===null){for(;!P.done;y++,P=_.next())P=d(m,P.value,M),P!==null&&(v=s(P,v,y),A===null?S=P:A.sibling=P,A=P);return $e&&Ji(m,y),S}for(L=i(m,L);!P.done;y++,P=_.next())P=g(L,m,y,P.value,M),P!==null&&(t&&P.alternate!==null&&L.delete(P.key===null?y:P.key),v=s(P,v,y),A===null?S=P:A.sibling=P,A=P);return t&&L.forEach(function(Z){return e(m,Z)}),$e&&Ji(m,y),S}function p(m,v,_,M){if(typeof _=="object"&&_!==null&&_.type===$r&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Bo:e:{for(var S=_.key,A=v;A!==null;){if(A.key===S){if(S=_.type,S===$r){if(A.tag===7){n(m,A.sibling),v=r(A,_.props.children),v.return=m,m=v;break e}}else if(A.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ei&&Rd(S)===A.type){n(m,A.sibling),v=r(A,_.props),v.ref=Fs(m,A,_),v.return=m,m=v;break e}n(m,A);break}else e(m,A);A=A.sibling}_.type===$r?(v=dr(_.props.children,m.mode,M,_.key),v.return=m,m=v):(M=Ra(_.type,_.key,_.props,null,m.mode,M),M.ref=Fs(m,v,_),M.return=m,m=M)}return o(m);case Yr:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(m,v.sibling),v=r(v,_.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else e(m,v);v=v.sibling}v=nu(_,m.mode,M),v.return=m,m=v}return o(m);case Ei:return A=_._init,p(m,v,A(_._payload),M)}if(Ys(_))return x(m,v,_,M);if(Rs(_))return h(m,v,_,M);Ko(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(m,v.sibling),v=r(v,_),v.return=m,m=v):(n(m,v),v=tu(_,m.mode,M),v.return=m,m=v),o(m)):n(m,v)}return p}var _s=Nm(!0),km=Nm(!1),zo={},Zn=Wi(zo),So=Wi(zo),Mo=Wi(zo);function lr(t){if(t===zo)throw Error(J(174));return t}function vf(t,e){switch(We(Mo,e),We(So,t),We(Zn,zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zu(e,t)}qe(Zn),We(Zn,e)}function xs(){qe(Zn),qe(So),qe(Mo)}function zm(t){lr(Mo.current);var e=lr(Zn.current),n=Zu(e,t.type);e!==n&&(We(So,t),We(Zn,n))}function _f(t){So.current===t&&(qe(Zn),qe(So))}var Ke=Wi(0);function Qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $l=[];function xf(){for(var t=0;t<$l.length;t++)$l[t]._workInProgressVersionPrimary=null;$l.length=0}var Ca=_i.ReactCurrentDispatcher,Zl=_i.ReactCurrentBatchConfig,_r=0,Qe=null,dt=null,St=null,Ja=!1,so=!1,wo=0,a_=0;function Dt(){throw Error(J(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function Sf(t,e,n,i,r,s){if(_r=s,Qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ca.current=t===null||t.memoizedState===null?f_:d_,t=n(i,r),so){s=0;do{if(so=!1,wo=0,25<=s)throw Error(J(301));s+=1,St=dt=null,e.updateQueue=null,Ca.current=h_,t=n(i,r)}while(so)}if(Ca.current=el,e=dt!==null&&dt.next!==null,_r=0,St=dt=Qe=null,Ja=!1,e)throw Error(J(300));return t}function Mf(){var t=wo!==0;return wo=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?Qe.memoizedState=St=t:St=St.next=t,St}function Ln(){if(dt===null){var t=Qe.alternate;t=t!==null?t.memoizedState:null}else t=dt.next;var e=St===null?Qe.memoizedState:St.next;if(e!==null)St=e,dt=t;else{if(t===null)throw Error(J(310));dt=t,t={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},St===null?Qe.memoizedState=St=t:St=St.next=t}return St}function Eo(t,e){return typeof e=="function"?e(t):e}function Kl(t){var e=Ln(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((_r&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Qe.lanes|=c,xr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Vn(i,e.memoizedState)||(Yt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Qe.lanes|=s,xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ql(t){var e=Ln(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Vn(s,e.memoizedState)||(Yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Fm(){}function Om(t,e){var n=Qe,i=Ln(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,Yt=!0),i=i.queue,wf(Vm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||St!==null&&St.memoizedState.tag&1){if(n.flags|=2048,bo(9,Bm.bind(null,n,i,r,e),void 0,null),Mt===null)throw Error(J(349));_r&30||Um(n,e,r)}return r}function Um(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bm(t,e,n,i){e.value=n,e.getSnapshot=i,Gm(e)&&Hm(t)}function Vm(t,e,n){return n(function(){Gm(e)&&Hm(t)})}function Gm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function Hm(t){var e=gi(t,1);e!==null&&Un(e,t,1,-1)}function Id(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},e.queue=t,t=t.dispatch=c_.bind(null,Qe,t),[e.memoizedState,t]}function bo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Wm(){return Ln().memoizedState}function Aa(t,e,n,i){var r=Hn();Qe.flags|=t,r.memoizedState=bo(1|e,n,void 0,i===void 0?null:i)}function pl(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(dt!==null){var o=dt.memoizedState;if(s=o.destroy,i!==null&&yf(i,o.deps)){r.memoizedState=bo(e,n,s,i);return}}Qe.flags|=t,r.memoizedState=bo(1|e,n,s,i)}function Nd(t,e){return Aa(8390656,8,t,e)}function wf(t,e){return pl(2048,8,t,e)}function jm(t,e){return pl(4,2,t,e)}function Xm(t,e){return pl(4,4,t,e)}function qm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ym(t,e,n){return n=n!=null?n.concat([t]):null,pl(4,4,qm.bind(null,e,t),n)}function Ef(){}function $m(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Zm(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Km(t,e,n){return _r&21?(Vn(n,e)||(n=em(),Qe.lanes|=n,xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yt=!0),t.memoizedState=n)}function l_(t,e){var n=Ge;Ge=n!==0&&4>n?n:4,t(!0);var i=Zl.transition;Zl.transition={};try{t(!1),e()}finally{Ge=n,Zl.transition=i}}function Qm(){return Ln().memoizedState}function u_(t,e,n){var i=zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Jm(t))eg(e,n);else if(n=Pm(t,e,n,i),n!==null){var r=Gt();Un(n,t,i,r),tg(n,e,i)}}function c_(t,e,n){var i=zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jm(t))eg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Vn(a,o)){var l=e.interleaved;l===null?(r.next=r,mf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Pm(t,e,r,i),n!==null&&(r=Gt(),Un(n,t,i,r),tg(n,e,i))}}function Jm(t){var e=t.alternate;return t===Qe||e!==null&&e===Qe}function eg(t,e){so=Ja=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ef(t,n)}}var el={readContext:An,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},f_={readContext:An,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:Nd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Aa(4194308,4,qm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Aa(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Hn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=u_.bind(null,Qe,t),[i.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:Id,useDebugValue:Ef,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=Id(!1),e=t[0];return t=l_.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Qe,r=Hn();if($e){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),Mt===null)throw Error(J(349));_r&30||Um(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Nd(Vm.bind(null,i,s,t),[t]),i.flags|=2048,bo(9,Bm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Hn(),e=Mt.identifierPrefix;if($e){var n=fi,i=ci;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=a_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},d_={readContext:An,useCallback:$m,useContext:An,useEffect:wf,useImperativeHandle:Ym,useInsertionEffect:jm,useLayoutEffect:Xm,useMemo:Zm,useReducer:Kl,useRef:Wm,useState:function(){return Kl(Eo)},useDebugValue:Ef,useDeferredValue:function(t){var e=Ln();return Km(e,dt.memoizedState,t)},useTransition:function(){var t=Kl(Eo)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Fm,useSyncExternalStore:Om,useId:Qm,unstable_isNewReconciler:!1},h_={readContext:An,useCallback:$m,useContext:An,useEffect:wf,useImperativeHandle:Ym,useInsertionEffect:jm,useLayoutEffect:Xm,useMemo:Zm,useReducer:Ql,useRef:Wm,useState:function(){return Ql(Eo)},useDebugValue:Ef,useDeferredValue:function(t){var e=Ln();return dt===null?e.memoizedState=t:Km(e,dt.memoizedState,t)},useTransition:function(){var t=Ql(Eo)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Fm,useSyncExternalStore:Om,useId:Qm,unstable_isNewReconciler:!1};function ys(t,e){try{var n="",i=e;do n+=V0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Jl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var p_=typeof WeakMap=="function"?WeakMap:Map;function ng(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){nl||(nl=!0,Lc=i),xc(t,e)},n}function ig(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xc(t,e),typeof i!="function"&&(ki===null?ki=new Set([this]):ki.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function kd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new p_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=A_.bind(null,t,e,n),e.then(t,t))}function zd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,Ni(n,e,1))),n.lanes|=1),t)}var m_=_i.ReactCurrentOwner,Yt=!1;function Bt(t,e,n,i){e.child=t===null?km(e,null,n,i):_s(e,t.child,n,i)}function Od(t,e,n,i,r){n=n.render;var s=e.ref;return fs(e,r),i=Sf(t,e,n,i,s,r),n=Mf(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):($e&&n&&uf(e),e.flags|=1,Bt(t,e,i,r),e.child)}function Ud(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Rf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,rg(t,e,s,i,r)):(t=Ra(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Fi(s,i),t.ref=e.ref,t.return=e,e.child=t}function rg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(vo(s,i)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,vi(t,e,r)}return yc(t,e,n,i,r)}function sg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(ss,on),on|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,We(ss,on),on|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,We(ss,on),on|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,We(ss,on),on|=i;return Bt(t,e,r,n),e.child}function og(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yc(t,e,n,i,r){var s=Zt(n)?gr:kt.current;return s=gs(e,s),fs(e,r),n=Sf(t,e,n,i,s,r),i=Mf(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):($e&&i&&uf(e),e.flags|=1,Bt(t,e,n,r),e.child)}function Bd(t,e,n,i,r){if(Zt(n)){var s=!0;Xa(e)}else s=!1;if(fs(e,r),e.stateNode===null)La(t,e),Im(e,n,i),_c(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=Zt(n)?gr:kt.current,u=gs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Dd(e,o,i,u),bi=!1;var f=e.memoizedState;o.state=f,Ka(e,i,o,r),l=e.memoizedState,a!==i||f!==l||$t.current||bi?(typeof c=="function"&&(vc(e,n,c,i),l=e.memoizedState),(a=bi||Pd(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Dm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Nn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=Zt(n)?gr:kt.current,l=gs(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Dd(e,o,i,l),bi=!1,f=e.memoizedState,o.state=f,Ka(e,i,o,r);var x=e.memoizedState;a!==d||f!==x||$t.current||bi?(typeof g=="function"&&(vc(e,n,g,i),x=e.memoizedState),(u=bi||Pd(e,n,u,i,f,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Sc(t,e,n,i,s,r)}function Sc(t,e,n,i,r,s){og(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&bd(e,n,!1),vi(t,e,s);i=e.stateNode,m_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,a,s)):Bt(t,e,a,s),e.memoizedState=i.state,r&&bd(e,n,!0),e.child}function ag(t){var e=t.stateNode;e.pendingContext?Ed(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ed(t,e.context,!1),vf(t,e.containerInfo)}function Vd(t,e,n,i,r){return vs(),ff(r),e.flags|=256,Bt(t,e,n,i),e.child}var Mc={dehydrated:null,treeContext:null,retryLane:0};function wc(t){return{baseLanes:t,cachePool:null,transitions:null}}function lg(t,e,n){var i=e.pendingProps,r=Ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),We(Ke,r&1),t===null)return mc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vl(o,i,0,null),t=dr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wc(n),e.memoizedState=Mc,t):bf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return g_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Fi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Fi(a,s):(s=dr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?wc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mc,i}return s=t.child,t=s.sibling,i=Fi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function bf(t,e){return e=vl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qo(t,e,n,i){return i!==null&&ff(i),_s(e,t.child,null,n),t=bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function g_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Jl(Error(J(422))),Qo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=vl({mode:"visible",children:i.children},r,0,null),s=dr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_s(e,t.child,null,o),e.child.memoizedState=wc(o),e.memoizedState=Mc,s);if(!(e.mode&1))return Qo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=Jl(s,i,void 0),Qo(t,e,o,i)}if(a=(o&t.childLanes)!==0,Yt||a){if(i=Mt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gi(t,r),Un(i,t,r,-1))}return Df(),i=Jl(Error(J(421))),Qo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=L_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ln=Ii(r.nextSibling),fn=e,$e=!0,zn=null,t!==null&&(Sn[Mn++]=ci,Sn[Mn++]=fi,Sn[Mn++]=vr,ci=t.id,fi=t.overflow,vr=e),e=bf(e,i.children),e.flags|=4096,e)}function Gd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gc(t.return,e,n)}function eu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ug(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Bt(t,e,i.children,n),i=Ke.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gd(t,n,e);else if(t.tag===19)Gd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(We(Ke,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Qa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),eu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Qa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}eu(e,!0,n,null,s);break;case"together":eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function La(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=Fi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function v_(t,e,n){switch(e.tag){case 3:ag(e),vs();break;case 5:zm(e);break;case 1:Zt(e.type)&&Xa(e);break;case 4:vf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;We($a,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(We(Ke,Ke.current&1),e.flags|=128,null):n&e.child.childLanes?lg(t,e,n):(We(Ke,Ke.current&1),t=vi(t,e,n),t!==null?t.sibling:null);We(Ke,Ke.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ug(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),We(Ke,Ke.current),i)break;return null;case 22:case 23:return e.lanes=0,sg(t,e,n)}return vi(t,e,n)}var cg,Ec,fg,dg;cg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ec=function(){};fg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,lr(Zn.current);var s=null;switch(n){case"input":r=Xu(t,r),i=Xu(t,i),s=[];break;case"select":r=Je({},r,{value:void 0}),i=Je({},i,{value:void 0}),s=[];break;case"textarea":r=$u(t,r),i=$u(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Wa)}Ku(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(uo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r?.[u],i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(uo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&je("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};dg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Os(t,e){if(!$e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function __(t,e,n){var i=e.pendingProps;switch(cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(e),null;case 1:return Zt(e.type)&&ja(),Rt(e),null;case 3:return i=e.stateNode,xs(),qe($t),qe(kt),xf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Zo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(Rc(zn),zn=null))),Ec(t,e),Rt(e),null;case 5:_f(e);var r=lr(Mo.current);if(n=e.type,t!==null&&e.stateNode!=null)fg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return Rt(e),null}if(t=lr(Zn.current),Zo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[yo]=s,t=(e.mode&1)!==0,n){case"dialog":je("cancel",i),je("close",i);break;case"iframe":case"object":case"embed":je("load",i);break;case"video":case"audio":for(r=0;r<Zs.length;r++)je(Zs[r],i);break;case"source":je("error",i);break;case"img":case"image":case"link":je("error",i),je("load",i);break;case"details":je("toggle",i);break;case"input":Kf(i,s),je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},je("invalid",i);break;case"textarea":Jf(i,s),je("invalid",i)}Ku(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&$o(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$o(i.textContent,a,t),r=["children",""+a]):uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&je("scroll",i)}switch(n){case"input":Vo(i),Qf(i,s,!0);break;case"textarea":Vo(i),ed(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Wa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Up(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Xn]=e,t[yo]=i,cg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qu(n,i),n){case"dialog":je("cancel",t),je("close",t),r=i;break;case"iframe":case"object":case"embed":je("load",t),r=i;break;case"video":case"audio":for(r=0;r<Zs.length;r++)je(Zs[r],t);r=i;break;case"source":je("error",t),r=i;break;case"img":case"image":case"link":je("error",t),je("load",t),r=i;break;case"details":je("toggle",t),r=i;break;case"input":Kf(t,i),r=Xu(t,i),je("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Je({},i,{value:void 0}),je("invalid",t);break;case"textarea":Jf(t,i),r=$u(t,i),je("invalid",t);break;default:r=i}Ku(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&co(t,l):typeof l=="number"&&co(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&je("scroll",t):l!=null&&Yc(t,s,l,o))}switch(n){case"input":Vo(t),Qf(t,i,!1);break;case"textarea":Vo(t),ed(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ui(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?as(t,!!i.multiple,s,!1):i.defaultValue!=null&&as(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Wa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Rt(e),null;case 6:if(t&&e.stateNode!=null)dg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(n=lr(Mo.current),lr(Zn.current),Zo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:$o(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$o(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return Rt(e),null;case 13:if(qe(Ke),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if($e&&ln!==null&&e.mode&1&&!(e.flags&128))Lm(),vs(),e.flags|=98560,s=!1;else if(s=Zo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[Xn]=e}else vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Rt(e),s=!1}else zn!==null&&(Rc(zn),zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ke.current&1?pt===0&&(pt=3):Df())),e.updateQueue!==null&&(e.flags|=4),Rt(e),null);case 4:return xs(),Ec(t,e),t===null&&_o(e.stateNode.containerInfo),Rt(e),null;case 10:return pf(e.type._context),Rt(e),null;case 17:return Zt(e.type)&&ja(),Rt(e),null;case 19:if(qe(Ke),s=e.memoizedState,s===null)return Rt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Os(s,!1);else{if(pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qa(t),o!==null){for(e.flags|=128,Os(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return We(Ke,Ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&it()>Ss&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304)}else{if(!i)if(t=Qa(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Os(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$e)return Rt(e),null}else 2*it()-s.renderingStartTime>Ss&&n!==1073741824&&(e.flags|=128,i=!0,Os(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=it(),e.sibling=null,n=Ke.current,We(Ke,i?n&1|2:n&1),e):(Rt(e),null);case 22:case 23:return Pf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?on&1073741824&&(Rt(e),e.subtreeFlags&6&&(e.flags|=8192)):Rt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function x_(t,e){switch(cf(e),e.tag){case 1:return Zt(e.type)&&ja(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xs(),qe($t),qe(kt),xf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(qe(Ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return qe(Ke),null;case 4:return xs(),null;case 10:return pf(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var Jo=!1,Nt=!1,y_=typeof WeakSet=="function"?WeakSet:Set,de=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){tt(t,e,i)}else n.current=null}function bc(t,e,n){try{n()}catch(i){tt(t,e,i)}}var Hd=!1;function S_(t,e){if(lc=Va,t=gm(),lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uc={focusedElem:t,selectionRange:n},Va=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,p=x.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?h:Nn(e.type,h),p);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(M){tt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return x=Hd,Hd=!1,x}function oo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&bc(e,n,s)}r=r.next}while(r!==i)}}function ml(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Tc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hg(t){var e=t.alternate;e!==null&&(t.alternate=null,hg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[yo],delete e[dc],delete e[i_],delete e[r_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pg(t){return t.tag===5||t.tag===3||t.tag===4}function Wd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wa));else if(i!==4&&(t=t.child,t!==null))for(Cc(t,e,n),t=t.sibling;t!==null;)Cc(t,e,n),t=t.sibling}function Ac(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ac(t,e,n),t=t.sibling;t!==null;)Ac(t,e,n),t=t.sibling}var wt=null,kn=!1;function xi(t,e,n){for(n=n.child;n!==null;)mg(t,e,n),n=n.sibling}function mg(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:Nt||rs(n,e);case 6:var i=wt,r=kn;wt=null,xi(t,e,n),wt=i,kn=r,wt!==null&&(kn?(t=wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(kn?(t=wt,n=n.stateNode,t.nodeType===8?ql(t.parentNode,n):t.nodeType===1&&ql(t,n),mo(t)):ql(wt,n.stateNode));break;case 4:i=wt,r=kn,wt=n.stateNode.containerInfo,kn=!0,xi(t,e,n),wt=i,kn=r;break;case 0:case 11:case 14:case 15:if(!Nt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bc(n,e,o),r=r.next}while(r!==i)}xi(t,e,n);break;case 1:if(!Nt&&(rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){tt(n,e,a)}xi(t,e,n);break;case 21:xi(t,e,n);break;case 22:n.mode&1?(Nt=(i=Nt)||n.memoizedState!==null,xi(t,e,n),Nt=i):xi(t,e,n);break;default:xi(t,e,n)}}function jd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new y_),e.forEach(function(i){var r=P_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:wt=a.stateNode,kn=!1;break e;case 3:wt=a.stateNode.containerInfo,kn=!0;break e;case 4:wt=a.stateNode.containerInfo,kn=!0;break e}a=a.return}if(wt===null)throw Error(J(160));mg(s,o,r),wt=null,kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gg(e,t),e=e.sibling}function gg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Gn(t),i&4){try{oo(3,t,t.return),ml(3,t)}catch(h){tt(t,t.return,h)}try{oo(5,t,t.return)}catch(h){tt(t,t.return,h)}}break;case 1:Pn(e,t),Gn(t),i&512&&n!==null&&rs(n,n.return);break;case 5:if(Pn(e,t),Gn(t),i&512&&n!==null&&rs(n,n.return),t.flags&32){var r=t.stateNode;try{co(r,"")}catch(h){tt(t,t.return,h)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Fp(r,s),Qu(a,o);var u=Qu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Gp(r,d):c==="dangerouslySetInnerHTML"?Bp(r,d):c==="children"?co(r,d):Yc(r,c,d,u)}switch(a){case"input":qu(r,s);break;case"textarea":Op(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?as(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?as(r,!!s.multiple,s.defaultValue,!0):as(r,!!s.multiple,s.multiple?[]:"",!1))}r[yo]=s}catch(h){tt(t,t.return,h)}}break;case 6:if(Pn(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(J(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(h){tt(t,t.return,h)}}break;case 3:if(Pn(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(h){tt(t,t.return,h)}break;case 4:Pn(e,t),Gn(t);break;case 13:Pn(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Af=it())),i&4&&jd(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Nt=(u=Nt)||c,Pn(e,t),Nt=u):Pn(e,t),Gn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(de=t,c=t.child;c!==null;){for(d=de=c;de!==null;){switch(f=de,g=f.child,f.tag){case 0:case 11:case 14:case 15:oo(4,f,f.return);break;case 1:rs(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(h){tt(i,n,h)}}break;case 5:rs(f,f.return);break;case 22:if(f.memoizedState!==null){qd(d);continue}}g!==null?(g.return=f,de=g):qd(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vp("display",o))}catch(h){tt(t,t.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){tt(t,t.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pn(e,t),Gn(t),i&4&&jd(t);break;case 21:break;default:Pn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pg(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(co(r,""),i.flags&=-33);var s=Wd(t);Ac(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Wd(t);Cc(t,a,o);break;default:throw Error(J(161))}}catch(l){tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function M_(t,e,n){de=t,vg(t)}function vg(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Jo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Nt;a=Jo;var u=Nt;if(Jo=o,(Nt=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Yd(r):l!==null?(l.return=o,de=l):Yd(r);for(;s!==null;)de=s,vg(s),s=s.sibling;de=r,Jo=a,Nt=u}Xd(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):Xd(t)}}function Xd(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nt||ml(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Nt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ld(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ld(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&mo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Nt||e.flags&512&&Tc(e)}catch(f){tt(e,e.return,f)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function qd(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Yd(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ml(4,e)}catch(l){tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){tt(e,r,l)}}var s=e.return;try{Tc(e)}catch(l){tt(e,s,l)}break;case 5:var o=e.return;try{Tc(e)}catch(l){tt(e,o,l)}}}catch(l){tt(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var w_=Math.ceil,tl=_i.ReactCurrentDispatcher,Tf=_i.ReactCurrentOwner,Cn=_i.ReactCurrentBatchConfig,Fe=0,Mt=null,ct=null,Tt=0,on=0,ss=Wi(0),pt=0,To=null,xr=0,gl=0,Cf=0,ao=null,Xt=null,Af=0,Ss=1/0,oi=null,nl=!1,Lc=null,ki=null,ea=!1,Li=null,il=0,lo=0,Pc=null,Pa=-1,Da=0;function Gt(){return Fe&6?it():Pa!==-1?Pa:Pa=it()}function zi(t){return t.mode&1?Fe&2&&Tt!==0?Tt&-Tt:o_.transition!==null?(Da===0&&(Da=em()),Da):(t=Ge,t!==0||(t=window.event,t=t===void 0?16:am(t.type)),t):1}function Un(t,e,n,i){if(50<lo)throw lo=0,Pc=null,Error(J(185));Io(t,n,i),(!(Fe&2)||t!==Mt)&&(t===Mt&&(!(Fe&2)&&(gl|=n),pt===4&&Ci(t,Tt)),Kt(t,i),n===1&&Fe===0&&!(e.mode&1)&&(Ss=it()+500,dl&&ji()))}function Kt(t,e){var n=t.callbackNode;ov(t,e);var i=Ba(t,t===Mt?Tt:0);if(i===0)n!==null&&id(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&id(n),e===1)t.tag===0?s_($d.bind(null,t)):Tm($d.bind(null,t)),t_(function(){!(Fe&6)&&ji()}),n=null;else{switch(tm(i)){case 1:n=Jc;break;case 4:n=Qp;break;case 16:n=Ua;break;case 536870912:n=Jp;break;default:n=Ua}n=bg(n,_g.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _g(t,e){if(Pa=-1,Da=0,Fe&6)throw Error(J(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var i=Ba(t,t===Mt?Tt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=rl(t,i);else{e=i;var r=Fe;Fe|=2;var s=yg();(Mt!==t||Tt!==e)&&(oi=null,Ss=it()+500,fr(t,e));do try{T_();break}catch(a){xg(t,a)}while(1);hf(),tl.current=s,Fe=r,ct!==null?e=0:(Mt=null,Tt=0,e=pt)}if(e!==0){if(e===2&&(r=ic(t),r!==0&&(i=r,e=Dc(t,r))),e===1)throw n=To,fr(t,0),Ci(t,i),Kt(t,it()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!E_(r)&&(e=rl(t,i),e===2&&(s=ic(t),s!==0&&(i=s,e=Dc(t,s))),e===1))throw n=To,fr(t,0),Ci(t,i),Kt(t,it()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:er(t,Xt,oi);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=Af+500-it(),10<e)){if(Ba(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Gt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=fc(er.bind(null,t,Xt,oi),e);break}er(t,Xt,oi);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-On(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=it()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*w_(i/1960))-i,10<i){t.timeoutHandle=fc(er.bind(null,t,Xt,oi),i);break}er(t,Xt,oi);break;case 5:er(t,Xt,oi);break;default:throw Error(J(329))}}}return Kt(t,it()),t.callbackNode===n?_g.bind(null,t):null}function Dc(t,e){var n=ao;return t.current.memoizedState.isDehydrated&&(fr(t,e).flags|=256),t=rl(t,e),t!==2&&(e=Xt,Xt=n,e!==null&&Rc(e)),t}function Rc(t){Xt===null?Xt=t:Xt.push.apply(Xt,t)}function E_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~Cf,e&=~gl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function $d(t){if(Fe&6)throw Error(J(327));ds();var e=Ba(t,0);if(!(e&1))return Kt(t,it()),null;var n=rl(t,e);if(t.tag!==0&&n===2){var i=ic(t);i!==0&&(e=i,n=Dc(t,i))}if(n===1)throw n=To,fr(t,0),Ci(t,e),Kt(t,it()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,er(t,Xt,oi),Kt(t,it()),null}function Lf(t,e){var n=Fe;Fe|=1;try{return t(e)}finally{Fe=n,Fe===0&&(Ss=it()+500,dl&&ji())}}function yr(t){Li!==null&&Li.tag===0&&!(Fe&6)&&ds();var e=Fe;Fe|=1;var n=Cn.transition,i=Ge;try{if(Cn.transition=null,Ge=1,t)return t()}finally{Ge=i,Cn.transition=n,Fe=e,!(Fe&6)&&ji()}}function Pf(){on=ss.current,qe(ss)}function fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,e_(n)),ct!==null)for(n=ct.return;n!==null;){var i=n;switch(cf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ja();break;case 3:xs(),qe($t),qe(kt),xf();break;case 5:_f(i);break;case 4:xs();break;case 13:qe(Ke);break;case 19:qe(Ke);break;case 10:pf(i.type._context);break;case 22:case 23:Pf()}n=n.return}if(Mt=t,ct=t=Fi(t.current,null),Tt=on=e,pt=0,To=null,Cf=gl=xr=0,Xt=ao=null,ar!==null){for(e=0;e<ar.length;e++)if(n=ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ar=null}return t}function xg(t,e){do{var n=ct;try{if(hf(),Ca.current=el,Ja){for(var i=Qe.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ja=!1}if(_r=0,St=dt=Qe=null,so=!1,wo=0,Tf.current=null,n===null||n.return===null){pt=1,To=e,ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=zd(o);if(g!==null){g.flags&=-257,Fd(g,o,a,s,e),g.mode&1&&kd(s,u,e),e=g,l=u;var x=e.updateQueue;if(x===null){var h=new Set;h.add(l),e.updateQueue=h}else x.add(l);break e}else{if(!(e&1)){kd(s,u,e),Df();break e}l=Error(J(426))}}else if($e&&a.mode&1){var p=zd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Fd(p,o,a,s,e),ff(ys(l,a));break e}}s=l=ys(l,a),pt!==4&&(pt=2),ao===null?ao=[s]:ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=ng(s,l,e);Ad(s,m);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ki===null||!ki.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=ig(s,a,e);Ad(s,M);break e}}s=s.return}while(s!==null)}Mg(n)}catch(S){e=S,ct===n&&n!==null&&(ct=n=n.return);continue}break}while(1)}function yg(){var t=tl.current;return tl.current=el,t===null?el:t}function Df(){(pt===0||pt===3||pt===2)&&(pt=4),Mt===null||!(xr&268435455)&&!(gl&268435455)||Ci(Mt,Tt)}function rl(t,e){var n=Fe;Fe|=2;var i=yg();(Mt!==t||Tt!==e)&&(oi=null,fr(t,e));do try{b_();break}catch(r){xg(t,r)}while(1);if(hf(),Fe=n,tl.current=i,ct!==null)throw Error(J(261));return Mt=null,Tt=0,pt}function b_(){for(;ct!==null;)Sg(ct)}function T_(){for(;ct!==null&&!K0();)Sg(ct)}function Sg(t){var e=Eg(t.alternate,t,on);t.memoizedProps=t.pendingProps,e===null?Mg(t):ct=e,Tf.current=null}function Mg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=x_(n,e),n!==null){n.flags&=32767,ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pt=6,ct=null;return}}else if(n=__(n,e,on),n!==null){ct=n;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);pt===0&&(pt=5)}function er(t,e,n){var i=Ge,r=Cn.transition;try{Cn.transition=null,Ge=1,C_(t,e,n,i)}finally{Cn.transition=r,Ge=i}return null}function C_(t,e,n,i){do ds();while(Li!==null);if(Fe&6)throw Error(J(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(av(t,s),t===Mt&&(ct=Mt=null,Tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ea||(ea=!0,bg(Ua,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=Ge;Ge=1;var a=Fe;Fe|=4,Tf.current=null,S_(t,n),gg(n,t),qv(uc),Va=!!lc,uc=lc=null,t.current=n,M_(n),Q0(),Fe=a,Ge=o,Cn.transition=s}else t.current=n;if(ea&&(ea=!1,Li=t,il=r),s=t.pendingLanes,s===0&&(ki=null),tv(n.stateNode),Kt(t,it()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(nl)throw nl=!1,t=Lc,Lc=null,t;return il&1&&t.tag!==0&&ds(),s=t.pendingLanes,s&1?t===Pc?lo++:(lo=0,Pc=t):lo=0,ji(),null}function ds(){if(Li!==null){var t=tm(il),e=Cn.transition,n=Ge;try{if(Cn.transition=null,Ge=16>t?16:t,Li===null)var i=!1;else{if(t=Li,Li=null,il=0,Fe&6)throw Error(J(331));var r=Fe;for(Fe|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var c=de;switch(c.tag){case 0:case 11:case 15:oo(8,c,s)}var d=c.child;if(d!==null)d.return=c,de=d;else for(;de!==null;){c=de;var f=c.sibling,g=c.return;if(hg(c),c===u){de=null;break}if(f!==null){f.return=g,de=f;break}de=g}}}var x=s.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,de=m;break e}de=s.return}}var v=t.current;for(de=v;de!==null;){o=de;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,de=_;else e:for(o=v;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ml(9,a)}}catch(S){tt(a,a.return,S)}if(a===o){de=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,de=M;break e}de=a.return}}if(Fe=r,ji(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(al,t)}catch{}i=!0}return i}finally{Ge=n,Cn.transition=e}}return!1}function Zd(t,e,n){e=ys(n,e),e=ng(t,e,1),t=Ni(t,e,1),e=Gt(),t!==null&&(Io(t,1,e),Kt(t,e))}function tt(t,e,n){if(t.tag===3)Zd(t,t,n);else for(;e!==null;){if(e.tag===3){Zd(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ki===null||!ki.has(i))){t=ys(n,t),t=ig(e,t,1),e=Ni(e,t,1),t=Gt(),e!==null&&(Io(e,1,t),Kt(e,t));break}}e=e.return}}function A_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,Mt===t&&(Tt&n)===n&&(pt===4||pt===3&&(Tt&130023424)===Tt&&500>it()-Af?fr(t,0):Cf|=n),Kt(t,e)}function wg(t,e){e===0&&(t.mode&1?(e=Wo,Wo<<=1,!(Wo&130023424)&&(Wo=4194304)):e=1);var n=Gt();t=gi(t,e),t!==null&&(Io(t,e,n),Kt(t,n))}function L_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wg(t,n)}function P_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),wg(t,n)}var Eg;Eg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)Yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yt=!1,v_(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,$e&&e.flags&1048576&&Cm(e,Ya,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;La(t,e),t=e.pendingProps;var r=gs(e,kt.current);fs(e,n),r=Sf(null,e,i,t,r,n);var s=Mf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zt(i)?(s=!0,Xa(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gf(e),r.updater=hl,e.stateNode=r,r._reactInternals=e,_c(e,i,t,n),e=Sc(null,e,i,!0,s,n)):(e.tag=0,$e&&s&&uf(e),Bt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(La(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=R_(i),t=Nn(i,t),r){case 0:e=yc(null,e,i,t,n);break e;case 1:e=Bd(null,e,i,t,n);break e;case 11:e=Od(null,e,i,t,n);break e;case 14:e=Ud(null,e,i,Nn(i.type,t),n);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),yc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Bd(t,e,i,r,n);case 3:e:{if(ag(e),t===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Dm(t,e),Ka(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ys(Error(J(423)),e),e=Vd(t,e,i,n,r);break e}else if(i!==r){r=ys(Error(J(424)),e),e=Vd(t,e,i,n,r);break e}else for(ln=Ii(e.stateNode.containerInfo.firstChild),fn=e,$e=!0,zn=null,n=km(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vs(),i===r){e=vi(t,e,n);break e}Bt(t,e,i,n)}e=e.child}return e;case 5:return zm(e),t===null&&mc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,cc(i,r)?o=null:s!==null&&cc(i,s)&&(e.flags|=32),og(t,e),Bt(t,e,o,n),e.child;case 6:return t===null&&mc(e),null;case 13:return lg(t,e,n);case 4:return vf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_s(e,null,i,n):Bt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Od(t,e,i,r,n);case 7:return Bt(t,e,e.pendingProps,n),e.child;case 8:return Bt(t,e,e.pendingProps.children,n),e.child;case 12:return Bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,We($a,i._currentValue),i._currentValue=o,s!==null)if(Vn(s.value,o)){if(s.children===r.children&&!$t.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Bt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,fs(e,n),r=An(r),i=i(r),e.flags|=1,Bt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),Ud(t,e,i,r,n);case 15:return rg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),La(t,e),e.tag=1,Zt(i)?(t=!0,Xa(e)):t=!1,fs(e,n),Im(e,i,r),_c(e,i,r,n),Sc(null,e,i,!0,t,n);case 19:return ug(t,e,n);case 22:return sg(t,e,n)}throw Error(J(156,e.tag))};function bg(t,e){return Kp(t,e)}function D_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new D_(t,e,n,i)}function Rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function R_(t){if(typeof t=="function")return Rf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zc)return 11;if(t===Kc)return 14}return 2}function Fi(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ra(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Rf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $r:return dr(n.children,r,s,e);case $c:o=8,r|=8;break;case Gu:return t=Tn(12,n,e,r|2),t.elementType=Gu,t.lanes=s,t;case Hu:return t=Tn(13,n,e,r),t.elementType=Hu,t.lanes=s,t;case Wu:return t=Tn(19,n,e,r),t.elementType=Wu,t.lanes=s,t;case Np:return vl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rp:o=10;break e;case Ip:o=9;break e;case Zc:o=11;break e;case Kc:o=14;break e;case Ei:o=16,i=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function dr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function vl(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=Np,t.lanes=n,t.stateNode={isHidden:!1},t}function tu(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function nu(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function I_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function If(t,e,n,i,r,s,o,a,l){return t=new I_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(s),t}function N_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Tg(t){if(!t)return Bi;t=t._reactInternals;e:{if(Tr(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(Zt(n))return bm(t,n,e)}return e}function Cg(t,e,n,i,r,s,o,a,l){return t=If(n,i,!0,t,r,s,o,a,l),t.context=Tg(null),n=t.current,i=Gt(),r=zi(n),s=di(i,r),s.callback=e??null,Ni(n,s,r),t.current.lanes=r,Io(t,r,i),Kt(t,i),t}function _l(t,e,n,i){var r=e.current,s=Gt(),o=zi(r);return n=Tg(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ni(r,e,o),t!==null&&(Un(t,r,o,s),Ta(t,r,o)),o}function sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nf(t,e){Kd(t,e),(t=t.alternate)&&Kd(t,e)}function k_(){return null}var Ag=typeof reportError=="function"?reportError:function(t){console.error(t)};function kf(t){this._internalRoot=t}xl.prototype.render=kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));_l(t,e,null,null)};xl.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yr(function(){_l(null,t,null,null)}),e[mi]=null}};function xl(t){this._internalRoot=t}xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=rm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ti.length&&e!==0&&e<Ti[n].priority;n++);Ti.splice(n,0,t),n===0&&om(t)}};function zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qd(){}function z_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=sl(o);s.call(u)}}var o=Cg(e,i,t,0,null,!1,!1,"",Qd);return t._reactRootContainer=o,t[mi]=o.current,_o(t.nodeType===8?t.parentNode:t),yr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=sl(l);a.call(u)}}var l=If(t,0,!1,null,null,!1,!1,"",Qd);return t._reactRootContainer=l,t[mi]=l.current,_o(t.nodeType===8?t.parentNode:t),yr(function(){_l(e,l,n,i)}),l}function Sl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=sl(o);a.call(l)}}_l(e,o,t,r)}else o=z_(n,e,t,r,i);return sl(o)}nm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$s(e.pendingLanes);n!==0&&(ef(e,n|1),Kt(e,it()),!(Fe&6)&&(Ss=it()+500,ji()))}break;case 13:yr(function(){var i=gi(t,1);if(i!==null){var r=Gt();Un(i,t,1,r)}}),Nf(t,1)}};tf=function(t){if(t.tag===13){var e=gi(t,134217728);if(e!==null){var n=Gt();Un(e,t,134217728,n)}Nf(t,134217728)}};im=function(t){if(t.tag===13){var e=zi(t),n=gi(t,e);if(n!==null){var i=Gt();Un(n,t,e,i)}Nf(t,e)}};rm=function(){return Ge};sm=function(t,e){var n=Ge;try{return Ge=t,e()}finally{Ge=n}};ec=function(t,e,n){switch(e){case"input":if(qu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=fl(i);if(!r)throw Error(J(90));zp(i),qu(i,r)}}}break;case"textarea":Op(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};jp=Lf;Xp=yr;var F_={usingClientEntryPoint:!1,Events:[ko,Jr,fl,Hp,Wp,Lf]},Us={findFiberByHostInstance:or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},O_={bundleType:Us.bundleType,version:Us.version,rendererPackageName:Us.rendererPackageName,rendererConfig:Us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$p(t),t===null?null:t.stateNode},findFiberByHostInstance:Us.findFiberByHostInstance||k_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ta.isDisabled&&ta.supportsFiber)try{al=ta.inject(O_),$n=ta}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F_;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(e))throw Error(J(200));return N_(t,e,null,n)};mn.createRoot=function(t,e){if(!zf(t))throw Error(J(299));var n=!1,i="",r=Ag;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=If(t,1,!1,null,null,n,!1,i,r),t[mi]=e.current,_o(t.nodeType===8?t.parentNode:t),new kf(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=$p(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return yr(t)};mn.hydrate=function(t,e,n){if(!yl(e))throw Error(J(200));return Sl(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!zf(t))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ag;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Cg(e,null,t,1,n??null,r,!1,s,o),t[mi]=e.current,_o(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new xl(e)};mn.render=function(t,e,n){if(!yl(e))throw Error(J(200));return Sl(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!yl(t))throw Error(J(40));return t._reactRootContainer?(yr(function(){Sl(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1};mn.unstable_batchedUpdates=Lf;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!yl(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return Sl(t,e,n,!1,i)};mn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=mn})(k0);var Jd=Uu;Ou.createRoot=Jd.createRoot,Ou.hydrateRoot=Jd.hydrateRoot;const U_="modulepreload",B_=function(t){return"/Builder3D/"+t},eh={},th=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=B_(s),s in eh)return;eh[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let c=r.length-1;c>=0;c--){const d=r[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":U_,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ff="149",Pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Dr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},V_=0,nh=1,G_=2,Lg=1,Pg=2,Ks=3,Vi=0,dn=1,un=2,Oi=0,hs=1,ih=2,rh=3,sh=4,H_=5,Xr=100,W_=101,j_=102,oh=103,ah=104,X_=200,q_=201,Y_=202,$_=203,Dg=204,Rg=205,Z_=206,K_=207,Q_=208,J_=209,ex=210,tx=0,nx=1,ix=2,Ic=3,rx=4,sx=5,ox=6,ax=7,Ig=0,lx=1,ux=2,hi=0,cx=1,fx=2,dx=3,hx=4,px=5,Ng=300,Ms=301,ws=302,Nc=303,kc=304,Ml=306,zc=1e3,Fn=1001,Fc=1002,Et=1003,lh=1004,iu=1005,wn=1006,mx=1007,Co=1008,Sr=1009,gx=1010,vx=1011,kg=1012,_x=1013,ur=1014,cr=1015,Ao=1016,xx=1017,yx=1018,ps=1020,Sx=1021,bn=1023,Mx=1024,wx=1025,hr=1026,Es=1027,Ex=1028,bx=1029,Tx=1030,Cx=1031,Ax=1033,ru=33776,su=33777,ou=33778,au=33779,uh=35840,ch=35841,fh=35842,dh=35843,Lx=36196,hh=37492,ph=37496,mh=37808,gh=37809,vh=37810,_h=37811,xh=37812,yh=37813,Sh=37814,Mh=37815,wh=37816,Eh=37817,bh=37818,Th=37819,Ch=37820,Ah=37821,lu=36492,Px=36283,Lh=36284,Ph=36285,Dh=36286,Mr=3e3,Xe=3001,Dx=3200,Rx=3201,Ix=0,Nx=1,Wn="srgb",Lo="srgb-linear",uu=7680,kx=519,Rh=35044,Ih="300 es",Oc=1035;class Cr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cu=Math.PI/180,Nh=180/Math.PI;function Fo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[n&63|128]+It[n>>8&255]+"-"+It[n>>16&255]+It[n>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function qt(t,e,n){return Math.max(e,Math.min(n,t))}function zx(t,e){return(t%e+e)%e}function fu(t,e,n){return(1-n)*t+n*e}function kh(t){return(t&t-1)===0&&t!==0}function Uc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function na(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(e=0,n=0){Pe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cn{constructor(){cn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],g=i[5],x=i[8],h=r[0],p=r[3],m=r[6],v=r[1],_=r[4],M=r[7],S=r[2],A=r[5],L=r[8];return s[0]=o*h+a*v+l*S,s[3]=o*p+a*_+l*A,s[6]=o*m+a*M+l*L,s[1]=u*h+c*v+d*S,s[4]=u*p+c*_+d*A,s[7]=u*m+c*M+d*L,s[2]=f*h+g*v+x*S,s[5]=f*p+g*_+x*A,s[8]=f*m+g*M+x*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,g=u*s-o*l,x=n*d+i*f+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/x;return e[0]=d*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=f*h,e[4]=(c*n-r*l)*h,e[5]=(r*s-a*n)*h,e[6]=g*h,e[7]=(i*l-u*n)*h,e[8]=(o*n-i*s)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(du.makeScale(e,n)),this}rotate(e){return this.premultiply(du.makeRotation(-e)),this}translate(e,n){return this.premultiply(du.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const du=new cn;function zg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Po(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function pr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ia(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const hu={[Wn]:{[Lo]:pr},[Lo]:{[Wn]:Ia}},Ot={legacyMode:!0,get workingColorSpace(){return Lo},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(hu[e]&&hu[e][n]!==void 0){const i=hu[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},Fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ft={r:0,g:0,b:0},Dn={h:0,s:0,l:0},ia={h:0,s:0,l:0};function pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function ra(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ot.workingColorSpace){if(e=zx(e,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=pu(o,s,e+1/3),this.g=pu(o,s,e),this.b=pu(o,s,e-1/3)}return Ot.toWorkingColorSpace(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ot.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ot.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ot.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ot.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=Wn){const i=Fg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Ot.fromWorkingColorSpace(ra(this,ft),e),qt(ft.r*255,0,255)<<16^qt(ft.g*255,0,255)<<8^qt(ft.b*255,0,255)<<0}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ot.workingColorSpace){Ot.fromWorkingColorSpace(ra(this,ft),n);const i=ft.r,r=ft.g,s=ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(ra(this,ft),n),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e=Wn){return Ot.fromWorkingColorSpace(ra(this,ft),e),e!==Wn?`color(${e} ${ft.r} ${ft.g} ${ft.b})`:`rgb(${ft.r*255|0},${ft.g*255|0},${ft.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(Dn),Dn.h+=e,Dn.s+=n,Dn.l+=i,this.setHSL(Dn.h,Dn.s,Dn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Dn),e.getHSL(ia);const i=fu(Dn.h,ia.h,n),r=fu(Dn.s,ia.s,n),s=fu(Dn.l,ia.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ze.NAMES=Fg;let Rr;class Og{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rr===void 0&&(Rr=Po("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Po("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=pr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(pr(n[i]/255)*255):n[i]=pr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ug{constructor(e=null){this.isSource=!0,this.uuid=Fo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mu(r[o].image)):s.push(mu(r[o]))}else s=mu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function mu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Og.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fx=0;class Qt extends Cr{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=Fn,r=Fn,s=wn,o=Co,a=bn,l=Sr,u=Qt.DEFAULT_ANISOTROPY,c=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Fo(),this.name="",this.source=new Ug(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new cn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zc:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zc:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Ng;Qt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],g=l[5],x=l[9],h=l[2],p=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-h)<.01&&Math.abs(x-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+h)<.1&&Math.abs(x+p)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,M=(g+1)/2,S=(m+1)/2,A=(c+f)/4,L=(d+h)/4,y=(x+p)/4;return _>M&&_>S?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=L/i):M>S?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=y/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=L/s,r=y/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-x)*(p-x)+(d-h)*(d-h)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(d-h)/v,this.z=(f-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wr extends Cr{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:wn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ug(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bg extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ox extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],x=s[o+2],h=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=x,e[n+3]=h;return}if(d!==h||l!==f||u!==g||c!==x){let p=1-a;const m=l*f+u*g+c*x+d*h,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const S=Math.sqrt(_),A=Math.atan2(S,m*v);p=Math.sin(p*A)/S,a=Math.sin(a*A)/S}const M=a*v;if(l=l*p+f*M,u=u*p+g*M,c=c*p+x*M,d=d*p+h*M,p===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+c*d+l*g-u*f,e[n+1]=l*x+c*f+u*d-a*g,e[n+2]=u*x+c*g+a*f-l*d,e[n+3]=c*x-a*d-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d-f*g*x;break;case"YXZ":this._x=f*c*d+u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d+f*g*x;break;case"ZXY":this._x=f*c*d-u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d-f*g*x;break;case"ZYX":this._x=f*c*d-u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d+f*g*x;break;case"YZX":this._x=f*c*d+u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d-f*g*x;break;case"XZY":this._x=f*c*d-u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d+f*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,d=l*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gu.copy(this).projectOnVector(e),this.sub(gu)}reflect(e){return this.sub(gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gu=new B,zh=new Er;class Oo{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Zi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Zi)}else i.boundingBox===null&&i.computeBoundingBox(),vu.copy(i.boundingBox),vu.applyMatrix4(e.matrixWorld),this.union(vu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),sa.subVectors(this.max,Bs),Ir.subVectors(e.a,Bs),Nr.subVectors(e.b,Bs),kr.subVectors(e.c,Bs),yi.subVectors(Nr,Ir),Si.subVectors(kr,Nr),Ki.subVectors(Ir,kr);let n=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-Ki.z,Ki.y,yi.z,0,-yi.x,Si.z,0,-Si.x,Ki.z,0,-Ki.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-Ki.y,Ki.x,0];return!_u(n,Ir,Nr,kr,sa)||(n=[1,0,0,0,1,0,0,0,1],!_u(n,Ir,Nr,kr,sa))?!1:(oa.crossVectors(yi,Si),n=[oa.x,oa.y,oa.z],_u(n,Ir,Nr,kr,sa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Zi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new B,new B,new B,new B,new B,new B,new B,new B],Zi=new B,vu=new Oo,Ir=new B,Nr=new B,kr=new B,yi=new B,Si=new B,Ki=new B,Bs=new B,sa=new B,oa=new B,Qi=new B;function _u(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Qi.fromArray(t,s);const a=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),l=e.dot(Qi),u=n.dot(Qi),c=i.dot(Qi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Ux=new Oo,Vs=new B,xu=new B;class Of{constructor(e=new B,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ux.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const n=Vs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Vs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(xu)),this.expandByPoint(Vs.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new B,yu=new B,aa=new B,Mi=new B,Su=new B,la=new B,Mu=new B;class Vg{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.direction).multiplyScalar(n).add(this.origin),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yu.copy(e).add(n).multiplyScalar(.5),aa.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(yu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(aa),a=Mi.dot(this.direction),l=-Mi.dot(aa),u=Mi.lengthSq(),c=Math.abs(1-o*o);let d,f,g,x;if(c>0)if(d=o*l-a,f=o*a-l,x=s*c,d>=0)if(f>=-x)if(f<=x){const h=1/c;d*=h,f*=h,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(aa).multiplyScalar(f).add(yu),g}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){Su.subVectors(n,e),la.subVectors(i,e),Mu.crossVectors(Su,la);let o=this.direction.dot(Mu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(la.crossVectors(Mi,la));if(l<0)return null;const u=a*this.direction.dot(Su.cross(Mi));if(u<0||l+u>o)return null;const c=-a*Mi.dot(Mu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,u,c,d,f,g,x,h,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=d,m[14]=f,m[3]=g,m[7]=x,m[11]=h,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),o=1/zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,g=o*d,x=a*c,h=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=g+x*u,n[5]=f-h*u,n[9]=-a*l,n[2]=h-f*u,n[6]=x+g*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,g=l*d,x=u*c,h=u*d;n[0]=f+h*a,n[4]=x*a-g,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=g*a-x,n[6]=h+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,g=l*d,x=u*c,h=u*d;n[0]=f-h*a,n[4]=-o*d,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*c,n[9]=h-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,g=o*d,x=a*c,h=a*d;n[0]=l*c,n[4]=x*u-g,n[8]=f*u+h,n[1]=l*d,n[5]=h*u+f,n[9]=g*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*u,x=a*l,h=a*u;n[0]=l*c,n[4]=h-f*d,n[8]=x*d+g,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=g*d+x,n[10]=f-h*d}else if(e.order==="XZY"){const f=o*l,g=o*u,x=a*l,h=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+h,n[5]=o*c,n[9]=g*d-x,n[2]=x*d-g,n[6]=a*c,n[10]=h*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bx,e,Vx)}lookAt(e,n,i){const r=this.elements;return rn.subVectors(e,n),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),wi.crossVectors(i,rn),wi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),wi.crossVectors(i,rn)),wi.normalize(),ua.crossVectors(rn,wi),r[0]=wi.x,r[4]=ua.x,r[8]=rn.x,r[1]=wi.y,r[5]=ua.y,r[9]=rn.y,r[2]=wi.z,r[6]=ua.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],g=i[13],x=i[2],h=i[6],p=i[10],m=i[14],v=i[3],_=i[7],M=i[11],S=i[15],A=r[0],L=r[4],y=r[8],T=r[12],P=r[1],$=r[5],Z=r[9],z=r[13],k=r[2],q=r[6],K=r[10],Q=r[14],R=r[3],V=r[7],G=r[11],re=r[15];return s[0]=o*A+a*P+l*k+u*R,s[4]=o*L+a*$+l*q+u*V,s[8]=o*y+a*Z+l*K+u*G,s[12]=o*T+a*z+l*Q+u*re,s[1]=c*A+d*P+f*k+g*R,s[5]=c*L+d*$+f*q+g*V,s[9]=c*y+d*Z+f*K+g*G,s[13]=c*T+d*z+f*Q+g*re,s[2]=x*A+h*P+p*k+m*R,s[6]=x*L+h*$+p*q+m*V,s[10]=x*y+h*Z+p*K+m*G,s[14]=x*T+h*z+p*Q+m*re,s[3]=v*A+_*P+M*k+S*R,s[7]=v*L+_*$+M*q+S*V,s[11]=v*y+_*Z+M*K+S*G,s[15]=v*T+_*z+M*Q+S*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],g=e[14],x=e[3],h=e[7],p=e[11],m=e[15];return x*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*g-i*l*g)+h*(+n*l*g-n*u*f+s*o*f-r*o*g+r*u*c-s*l*c)+p*(+n*u*d-n*a*g-s*o*d+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-n*l*d+n*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],g=e[11],x=e[12],h=e[13],p=e[14],m=e[15],v=d*p*u-h*f*u+h*l*g-a*p*g-d*l*m+a*f*m,_=x*f*u-c*p*u-x*l*g+o*p*g+c*l*m-o*f*m,M=c*h*u-x*d*u+x*a*g-o*h*g-c*a*m+o*d*m,S=x*d*l-c*h*l-x*a*f+o*h*f+c*a*p-o*d*p,A=n*v+i*_+r*M+s*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=v*L,e[1]=(h*f*s-d*p*s-h*r*g+i*p*g+d*r*m-i*f*m)*L,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*m+i*l*m)*L,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*g-i*l*g)*L,e[4]=_*L,e[5]=(c*p*s-x*f*s+x*r*g-n*p*g-c*r*m+n*f*m)*L,e[6]=(x*l*s-o*p*s-x*r*u+n*p*u+o*r*m-n*l*m)*L,e[7]=(o*f*s-c*l*s+c*r*u-n*f*u-o*r*g+n*l*g)*L,e[8]=M*L,e[9]=(x*d*s-c*h*s-x*i*g+n*h*g+c*i*m-n*d*m)*L,e[10]=(o*h*s-x*a*s+x*i*u-n*h*u-o*i*m+n*a*m)*L,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*g-n*a*g)*L,e[12]=S*L,e[13]=(c*h*r-x*d*r+x*i*f-n*h*f-c*i*p+n*d*p)*L,e[14]=(x*a*r-o*h*r-x*i*l+n*h*l+o*i*p-n*a*p)*L,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*f+n*a*f)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,f=s*u,g=s*c,x=s*d,h=o*c,p=o*d,m=a*d,v=l*u,_=l*c,M=l*d,S=i.x,A=i.y,L=i.z;return r[0]=(1-(h+m))*S,r[1]=(g+M)*S,r[2]=(x-_)*S,r[3]=0,r[4]=(g-M)*A,r[5]=(1-(f+m))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(x+_)*L,r[9]=(p-v)*L,r[10]=(1-(f+h))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=zr.set(r[0],r[1],r[2]).length();const o=zr.set(r[4],r[5],r[6]).length(),a=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const u=1/s,c=1/o,d=1/a;return Rn.elements[0]*=u,Rn.elements[1]*=u,Rn.elements[2]*=u,Rn.elements[4]*=c,Rn.elements[5]*=c,Rn.elements[6]*=c,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,n.setFromRotationMatrix(Rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),d=(n+e)*l,f=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const zr=new B,Rn=new Ct,Bx=new B(0,0,0),Vx=new B(1,1,1),wi=new B,ua=new B,rn=new B,Fh=new Ct,Oh=new Er;class wl{constructor(e=0,n=0,i=0,r=wl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Fh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wl.DEFAULT_ORDER="XYZ";class Uf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gx=0;const Uh=new B,Fr=new Er,ii=new Ct,ca=new B,Gs=new B,Hx=new B,Wx=new Er,Bh=new B(1,0,0),Vh=new B(0,1,0),Gh=new B(0,0,1),jx={type:"added"},Hh={type:"removed"};class hn extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new B,n=new wl,i=new Er,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new cn}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Bh,e)}rotateY(e){return this.rotateOnAxis(Vh,e)}rotateZ(e){return this.rotateOnAxis(Gh,e)}translateOnAxis(e,n){return Uh.copy(e).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bh,e)}translateY(e){return this.translateOnAxis(Vh,e)}translateZ(e){return this.translateOnAxis(Gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ca.copy(e):ca.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Gs,ca,this.up):ii.lookAt(ca,Gs,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(ii),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Hh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Hh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,Hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Wx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new B(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new B,ri=new B,wu=new B,si=new B,Or=new B,Ur=new B,Wh=new B,Eu=new B,bu=new B,Tu=new B;class ui{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ri.subVectors(i,n),wu.subVectors(e,n);const o=In.dot(In),a=In.dot(ri),l=In.dot(wu),u=ri.dot(ri),c=ri.dot(wu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(u*l-a*c)*f,x=(o*c-a*l)*f;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si),si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,si),l.set(0,0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ri.subVectors(e,n),In.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),In.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ui.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Or.subVectors(r,i),Ur.subVectors(s,i),Eu.subVectors(e,i);const l=Or.dot(Eu),u=Ur.dot(Eu);if(l<=0&&u<=0)return n.copy(i);bu.subVectors(e,r);const c=Or.dot(bu),d=Ur.dot(bu);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Or,o);Tu.subVectors(e,s);const g=Or.dot(Tu),x=Ur.dot(Tu);if(x>=0&&g<=x)return n.copy(s);const h=g*u-l*x;if(h<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Ur,a);const p=c*x-g*d;if(p<=0&&d-c>=0&&g-x>=0)return Wh.subVectors(s,r),a=(d-c)/(d-c+(g-x)),n.copy(r).addScaledVector(Wh,a);const m=1/(p+h+f);return o=h*m,a=f*m,n.copy(i).addScaledVector(Or,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Xx=0;class El extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=hs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Dg,this.blendDst=Rg,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uu,this.stencilZFail=uu,this.stencilZPass=uu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jt extends El{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new B,fa=new Pe;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Rh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fa.fromBufferAttribute(this,n),fa.applyMatrix3(e),this.setXY(n,fa.x,fa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)at.fromBufferAttribute(this,n),at.applyMatrix3(e),this.setXYZ(n,at.x,at.y,at.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)at.fromBufferAttribute(this,n),at.applyMatrix4(e),this.setXYZ(n,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)at.fromBufferAttribute(this,n),at.applyNormalMatrix(e),this.setXYZ(n,at.x,at.y,at.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)at.fromBufferAttribute(this,n),at.transformDirection(e),this.setXYZ(n,at.x,at.y,at.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=na(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=na(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=na(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=na(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Gg extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Hg extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class mr extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let qx=0;const xn=new Ct,Cu=new hn,Br=new B,sn=new Oo,Hs=new Oo,yt=new B;class Ar extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zg(e)?Hg:Gg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new cn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return Cu.lookAt(e),Cu.updateMatrix(),this.applyMatrix4(Cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Of);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(sn.min,Hs.min),sn.expandByPoint(yt),yt.addVectors(sn.max,Hs.max),sn.expandByPoint(yt)):(sn.expandByPoint(Hs.min),sn.expandByPoint(Hs.max))}sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)yt.fromBufferAttribute(a,u),l&&(Br.fromBufferAttribute(e,u),yt.add(Br)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let P=0;P<a;P++)u[P]=new B,c[P]=new B;const d=new B,f=new B,g=new B,x=new Pe,h=new Pe,p=new Pe,m=new B,v=new B;function _(P,$,Z){d.fromArray(r,P*3),f.fromArray(r,$*3),g.fromArray(r,Z*3),x.fromArray(o,P*2),h.fromArray(o,$*2),p.fromArray(o,Z*2),f.sub(d),g.sub(d),h.sub(x),p.sub(x);const z=1/(h.x*p.y-p.x*h.y);isFinite(z)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(g,-h.y).multiplyScalar(z),v.copy(g).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(z),u[P].add(m),u[$].add(m),u[Z].add(m),c[P].add(v),c[$].add(v),c[Z].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let P=0,$=M.length;P<$;++P){const Z=M[P],z=Z.start,k=Z.count;for(let q=z,K=z+k;q<K;q+=3)_(i[q+0],i[q+1],i[q+2])}const S=new B,A=new B,L=new B,y=new B;function T(P){L.fromArray(s,P*3),y.copy(L);const $=u[P];S.copy($),S.sub(L.multiplyScalar(L.dot($))).normalize(),A.crossVectors(y,$);const z=A.dot(c[P])<0?-1:1;l[P*4]=S.x,l[P*4+1]=S.y,l[P*4+2]=S.z,l[P*4+3]=z}for(let P=0,$=M.length;P<$;++P){const Z=M[P],z=Z.start,k=Z.count;for(let q=z,K=z+k;q<K;q+=3)T(i[q+0]),T(i[q+1]),T(i[q+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,c=new B,d=new B;if(e)for(let f=0,g=e.count;f<g;f+=3){const x=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,h),o.fromBufferAttribute(n,p),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)yt.fromBufferAttribute(e,n),yt.normalize(),e.setXYZ(n,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let g=0,x=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?g=l[h]*a.data.stride+a.offset:g=l[h]*c;for(let m=0;m<c;m++)f[x++]=u[g++]}return new Kn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ar,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,g=d.length;f<g;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const jh=new Ct,Vr=new Vg,Au=new Of,Ws=new B,js=new B,Xs=new B,Lu=new B,da=new B,ha=new Pe,pa=new Pe,ma=new Pe,Pu=new B,ga=new B;class Vt extends hn{constructor(e=new Ar,n=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){da.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Lu.fromBufferAttribute(d,e),o?da.addScaledVector(Lu,c):da.addScaledVector(Lu.sub(n),c))}n.add(da)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Au.copy(i.boundingSphere),Au.applyMatrix4(s),e.ray.intersectsSphere(Au)===!1)||(jh.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(jh),i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const h=d[g],p=r[h.materialIndex],m=Math.max(h.start,f.start),v=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let _=m,M=v;_<M;_+=3){const S=a.getX(_),A=a.getX(_+1),L=a.getX(_+2);o=va(this,p,e,Vr,u,c,S,A,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let h=g,p=x;h<p;h+=3){const m=a.getX(h),v=a.getX(h+1),_=a.getX(h+2);o=va(this,r,e,Vr,u,c,m,v,_),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const h=d[g],p=r[h.materialIndex],m=Math.max(h.start,f.start),v=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let _=m,M=v;_<M;_+=3){const S=_,A=_+1,L=_+2;o=va(this,p,e,Vr,u,c,S,A,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let h=g,p=x;h<p;h+=3){const m=h,v=h+1,_=h+2;o=va(this,r,e,Vr,u,c,m,v,_),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}}}function Yx(t,e,n,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vi,a),l===null)return null;ga.copy(a),ga.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ga);return u<n.near||u>n.far?null:{distance:u,point:ga.clone(),object:t}}function va(t,e,n,i,r,s,o,a,l){t.getVertexPosition(o,Ws),t.getVertexPosition(a,js),t.getVertexPosition(l,Xs);const u=Yx(t,e,n,i,Ws,js,Xs,Pu);if(u){r&&(ha.fromBufferAttribute(r,o),pa.fromBufferAttribute(r,a),ma.fromBufferAttribute(r,l),u.uv=ui.getUV(Pu,Ws,js,Xs,ha,pa,ma,new Pe)),s&&(ha.fromBufferAttribute(s,o),pa.fromBufferAttribute(s,a),ma.fromBufferAttribute(s,l),u.uv2=ui.getUV(Pu,Ws,js,Xs,ha,pa,ma,new Pe));const c={a:o,b:a,c:l,normal:new B,materialIndex:0};ui.getNormal(Ws,js,Xs,c.normal),u.face=c}return u}class Qn extends Ar{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new mr(u,3)),this.setAttribute("normal",new mr(c,3)),this.setAttribute("uv",new mr(d,2));function x(h,p,m,v,_,M,S,A,L,y,T){const P=M/L,$=S/y,Z=M/2,z=S/2,k=A/2,q=L+1,K=y+1;let Q=0,R=0;const V=new B;for(let G=0;G<K;G++){const re=G*$-z;for(let F=0;F<q;F++){const Y=F*P-Z;V[h]=Y*v,V[p]=re*_,V[m]=k,u.push(V.x,V.y,V.z),V[h]=0,V[p]=0,V[m]=A>0?1:-1,c.push(V.x,V.y,V.z),d.push(F/L),d.push(1-G/y),Q+=1}}for(let G=0;G<y;G++)for(let re=0;re<L;re++){const F=f+re+q*G,Y=f+re+q*(G+1),ne=f+(re+1)+q*(G+1),se=f+(re+1)+q*G;l.push(F,Y,se),l.push(Y,ne,se),R+=6}a.addGroup(g,R,T),g+=R,f+=Q}}static fromJSON(e){return new Qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ut(t){const e={};for(let n=0;n<t.length;n++){const i=bs(t[n]);for(const r in i)e[r]=i[r]}return e}function $x(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Wg(t){return t.getRenderTarget()===null&&t.outputEncoding===Xe?Wn:Lo}const Zx={clone:bs,merge:Ut};var Kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends El{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kx,this.fragmentShader=Qx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=$x(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class jg extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class En extends jg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nh*2*Math.atan(Math.tan(cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(cu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Gr=-90,Hr=1;class Jx extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new En(Gr,Hr,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new En(Gr,Hr,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new En(Gr,Hr,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new En(Gr,Hr,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new En(Gr,Hr,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new En(Gr,Hr,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=hi,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Xg extends Qt{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Ms,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ey extends wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qn(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Oi});s.uniforms.tEquirect.value=n;const o=new Vt(r,s),a=n.minFilter;return n.minFilter===Co&&(n.minFilter=wn),new Jx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Du=new B,ty=new B,ny=new cn;class tr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Du.subVectors(i,n).cross(ty.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(Du),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||ny.getNormalMatrix(e),r=this.coplanarPoint(Du).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new Of,_a=new B;class qg{constructor(e=new tr,n=new tr,i=new tr,r=new tr,s=new tr,o=new tr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],x=i[10],h=i[11],p=i[12],m=i[13],v=i[14],_=i[15];return n[0].setComponents(a-r,d-l,h-f,_-p).normalize(),n[1].setComponents(a+r,d+l,h+f,_+p).normalize(),n[2].setComponents(a+s,d+u,h+g,_+m).normalize(),n[3].setComponents(a-s,d-u,h-g,_-m).normalize(),n[4].setComponents(a-o,d-c,h-x,_-v).normalize(),n[5].setComponents(a+o,d+c,h+x,_+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSprite(e){return Wr.center.set(0,0,0),Wr.radius=.7071067811865476,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_a.x=r.normal.x>0?e.max.x:e.min.x,_a.y=r.normal.y>0?e.max.y:e.min.y,_a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function iy(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,d,f),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,g=c.updateRange;t.bindBuffer(d,u),g.count===-1?t.bufferSubData(d,0,f):(n?t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class Ls extends Ar{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,g=[],x=[],h=[],p=[];for(let m=0;m<c;m++){const v=m*f-o;for(let _=0;_<u;_++){const M=_*d-s;x.push(M,-v,0),h.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const _=v+u*m,M=v+u*(m+1),S=v+1+u*(m+1),A=v+1+u*m;g.push(_,M,A),g.push(M,S,A)}this.setIndex(g),this.setAttribute("position",new mr(x,3)),this.setAttribute("normal",new mr(h,3)),this.setAttribute("uv",new mr(p,2))}static fromJSON(e){return new Ls(e.width,e.height,e.widthSegments,e.heightSegments)}}var ry=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ay=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ly=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cy="vec3 transformed = vec3( position );",fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dy=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,hy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,py=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ey=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,by=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Py="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ry=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ny=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,By=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qy=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$y=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Jy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,iS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,aS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,_S=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,wS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ES=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,bS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,TS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,LS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zS=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,FS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,US=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,VS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,YS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,$S=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ZS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,KS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,QS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,JS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,e1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,t1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,l1=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,c1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,p1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g1=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,S1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R1=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,N1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:ry,alphamap_pars_fragment:sy,alphatest_fragment:oy,alphatest_pars_fragment:ay,aomap_fragment:ly,aomap_pars_fragment:uy,begin_vertex:cy,beginnormal_vertex:fy,bsdfs:dy,iridescence_fragment:hy,bumpmap_pars_fragment:py,clipping_planes_fragment:my,clipping_planes_pars_fragment:gy,clipping_planes_pars_vertex:vy,clipping_planes_vertex:_y,color_fragment:xy,color_pars_fragment:yy,color_pars_vertex:Sy,color_vertex:My,common:wy,cube_uv_reflection_fragment:Ey,defaultnormal_vertex:by,displacementmap_pars_vertex:Ty,displacementmap_vertex:Cy,emissivemap_fragment:Ay,emissivemap_pars_fragment:Ly,encodings_fragment:Py,encodings_pars_fragment:Dy,envmap_fragment:Ry,envmap_common_pars_fragment:Iy,envmap_pars_fragment:Ny,envmap_pars_vertex:ky,envmap_physical_pars_fragment:qy,envmap_vertex:zy,fog_vertex:Fy,fog_pars_vertex:Oy,fog_fragment:Uy,fog_pars_fragment:By,gradientmap_pars_fragment:Vy,lightmap_fragment:Gy,lightmap_pars_fragment:Hy,lights_lambert_fragment:Wy,lights_lambert_pars_fragment:jy,lights_pars_begin:Xy,lights_toon_fragment:Yy,lights_toon_pars_fragment:$y,lights_phong_fragment:Zy,lights_phong_pars_fragment:Ky,lights_physical_fragment:Qy,lights_physical_pars_fragment:Jy,lights_fragment_begin:eS,lights_fragment_maps:tS,lights_fragment_end:nS,logdepthbuf_fragment:iS,logdepthbuf_pars_fragment:rS,logdepthbuf_pars_vertex:sS,logdepthbuf_vertex:oS,map_fragment:aS,map_pars_fragment:lS,map_particle_fragment:uS,map_particle_pars_fragment:cS,metalnessmap_fragment:fS,metalnessmap_pars_fragment:dS,morphcolor_vertex:hS,morphnormal_vertex:pS,morphtarget_pars_vertex:mS,morphtarget_vertex:gS,normal_fragment_begin:vS,normal_fragment_maps:_S,normal_pars_fragment:xS,normal_pars_vertex:yS,normal_vertex:SS,normalmap_pars_fragment:MS,clearcoat_normal_fragment_begin:wS,clearcoat_normal_fragment_maps:ES,clearcoat_pars_fragment:bS,iridescence_pars_fragment:TS,output_fragment:CS,packing:AS,premultiplied_alpha_fragment:LS,project_vertex:PS,dithering_fragment:DS,dithering_pars_fragment:RS,roughnessmap_fragment:IS,roughnessmap_pars_fragment:NS,shadowmap_pars_fragment:kS,shadowmap_pars_vertex:zS,shadowmap_vertex:FS,shadowmask_pars_fragment:OS,skinbase_vertex:US,skinning_pars_vertex:BS,skinning_vertex:VS,skinnormal_vertex:GS,specularmap_fragment:HS,specularmap_pars_fragment:WS,tonemapping_fragment:jS,tonemapping_pars_fragment:XS,transmission_fragment:qS,transmission_pars_fragment:YS,uv_pars_fragment:$S,uv_pars_vertex:ZS,uv_vertex:KS,uv2_pars_fragment:QS,uv2_pars_vertex:JS,uv2_vertex:e1,worldpos_vertex:t1,background_vert:n1,background_frag:i1,backgroundCube_vert:r1,backgroundCube_frag:s1,cube_vert:o1,cube_frag:a1,depth_vert:l1,depth_frag:u1,distanceRGBA_vert:c1,distanceRGBA_frag:f1,equirect_vert:d1,equirect_frag:h1,linedashed_vert:p1,linedashed_frag:m1,meshbasic_vert:g1,meshbasic_frag:v1,meshlambert_vert:_1,meshlambert_frag:x1,meshmatcap_vert:y1,meshmatcap_frag:S1,meshnormal_vert:M1,meshnormal_frag:w1,meshphong_vert:E1,meshphong_frag:b1,meshphysical_vert:T1,meshphysical_frag:C1,meshtoon_vert:A1,meshtoon_frag:L1,points_vert:P1,points_frag:D1,shadow_vert:R1,shadow_frag:I1,sprite_vert:N1,sprite_frag:k1},oe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new cn},uv2Transform:{value:new cn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cn}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new cn}}},jn={basic:{uniforms:Ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Ut([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Ut([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Ut([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Ut([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Ut([oe.points,oe.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Ut([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Ut([oe.common,oe.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Ut([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Ut([oe.sprite,oe.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new cn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:Ut([oe.common,oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:Ut([oe.lights,oe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};jn.physical={uniforms:Ut([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const xa={r:0,b:0,g:0};function z1(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,u,c,d=null,f=0,g=null;function x(p,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:e).get(_));const M=t.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(_=null),_===null?h(a,l):_&&_.isColor&&(h(_,1),v=!0),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ml)?(c===void 0&&(c=new Vt(new Qn(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:bs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,L,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=_.encoding!==Xe,(d!==_||f!==_.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Vt(new Ls(2,2),new Gi({name:"BackgroundMaterial",uniforms:bs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_.encoding!==Xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,g=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function h(p,m){p.getRGB(xa,Wg(t)),i.buffers.color.setClear(xa.r,xa.g,xa.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:x}}function F1(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function d(k,q,K,Q,R){let V=!1;if(o){const G=h(Q,K,q);u!==G&&(u=G,g(u.object)),V=m(k,Q,K,R),V&&v(k,Q,K,R)}else{const G=q.wireframe===!0;(u.geometry!==Q.id||u.program!==K.id||u.wireframe!==G)&&(u.geometry=Q.id,u.program=K.id,u.wireframe=G,V=!0)}R!==null&&n.update(R,34963),(V||c)&&(c=!1,y(k,q,K,Q),R!==null&&t.bindBuffer(34963,n.get(R).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(k){return i.isWebGL2?t.bindVertexArray(k):s.bindVertexArrayOES(k)}function x(k){return i.isWebGL2?t.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function h(k,q,K){const Q=K.wireframe===!0;let R=a[k.id];R===void 0&&(R={},a[k.id]=R);let V=R[q.id];V===void 0&&(V={},R[q.id]=V);let G=V[Q];return G===void 0&&(G=p(f()),V[Q]=G),G}function p(k){const q=[],K=[],Q=[];for(let R=0;R<r;R++)q[R]=0,K[R]=0,Q[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:K,attributeDivisors:Q,object:k,attributes:{},index:null}}function m(k,q,K,Q){const R=u.attributes,V=q.attributes;let G=0;const re=K.getAttributes();for(const F in re)if(re[F].location>=0){const ne=R[F];let se=V[F];if(se===void 0&&(F==="instanceMatrix"&&k.instanceMatrix&&(se=k.instanceMatrix),F==="instanceColor"&&k.instanceColor&&(se=k.instanceColor)),ne===void 0||ne.attribute!==se||se&&ne.data!==se.data)return!0;G++}return u.attributesNum!==G||u.index!==Q}function v(k,q,K,Q){const R={},V=q.attributes;let G=0;const re=K.getAttributes();for(const F in re)if(re[F].location>=0){let ne=V[F];ne===void 0&&(F==="instanceMatrix"&&k.instanceMatrix&&(ne=k.instanceMatrix),F==="instanceColor"&&k.instanceColor&&(ne=k.instanceColor));const se={};se.attribute=ne,ne&&ne.data&&(se.data=ne.data),R[F]=se,G++}u.attributes=R,u.attributesNum=G,u.index=Q}function _(){const k=u.newAttributes;for(let q=0,K=k.length;q<K;q++)k[q]=0}function M(k){S(k,0)}function S(k,q){const K=u.newAttributes,Q=u.enabledAttributes,R=u.attributeDivisors;K[k]=1,Q[k]===0&&(t.enableVertexAttribArray(k),Q[k]=1),R[k]!==q&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,q),R[k]=q)}function A(){const k=u.newAttributes,q=u.enabledAttributes;for(let K=0,Q=q.length;K<Q;K++)q[K]!==k[K]&&(t.disableVertexAttribArray(K),q[K]=0)}function L(k,q,K,Q,R,V){i.isWebGL2===!0&&(K===5124||K===5125)?t.vertexAttribIPointer(k,q,K,R,V):t.vertexAttribPointer(k,q,K,Q,R,V)}function y(k,q,K,Q){if(i.isWebGL2===!1&&(k.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const R=Q.attributes,V=K.getAttributes(),G=q.defaultAttributeValues;for(const re in V){const F=V[re];if(F.location>=0){let Y=R[re];if(Y===void 0&&(re==="instanceMatrix"&&k.instanceMatrix&&(Y=k.instanceMatrix),re==="instanceColor"&&k.instanceColor&&(Y=k.instanceColor)),Y!==void 0){const ne=Y.normalized,se=Y.itemSize,U=n.get(Y);if(U===void 0)continue;const Se=U.buffer,ve=U.type,me=U.bytesPerElement;if(Y.isInterleavedBufferAttribute){const ce=Y.data,Ve=ce.stride,Te=Y.offset;if(ce.isInstancedInterleavedBuffer){for(let Me=0;Me<F.locationSize;Me++)S(F.location+Me,ce.meshPerAttribute);k.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Me=0;Me<F.locationSize;Me++)M(F.location+Me);t.bindBuffer(34962,Se);for(let Me=0;Me<F.locationSize;Me++)L(F.location+Me,se/F.locationSize,ve,ne,Ve*me,(Te+se/F.locationSize*Me)*me)}else{if(Y.isInstancedBufferAttribute){for(let ce=0;ce<F.locationSize;ce++)S(F.location+ce,Y.meshPerAttribute);k.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ce=0;ce<F.locationSize;ce++)M(F.location+ce);t.bindBuffer(34962,Se);for(let ce=0;ce<F.locationSize;ce++)L(F.location+ce,se/F.locationSize,ve,ne,se*me,se/F.locationSize*ce*me)}}else if(G!==void 0){const ne=G[re];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(F.location,ne);break;case 3:t.vertexAttrib3fv(F.location,ne);break;case 4:t.vertexAttrib4fv(F.location,ne);break;default:t.vertexAttrib1fv(F.location,ne)}}}}A()}function T(){Z();for(const k in a){const q=a[k];for(const K in q){const Q=q[K];for(const R in Q)x(Q[R].object),delete Q[R];delete q[K]}delete a[k]}}function P(k){if(a[k.id]===void 0)return;const q=a[k.id];for(const K in q){const Q=q[K];for(const R in Q)x(Q[R].object),delete Q[R];delete q[K]}delete a[k.id]}function $(k){for(const q in a){const K=a[q];if(K[k.id]===void 0)continue;const Q=K[k.id];for(const R in Q)x(Q[R].object),delete Q[R];delete K[k.id]}}function Z(){z(),c=!0,u!==l&&(u=l,g(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:$,initAttributes:_,enableAttribute:M,disableUnusedAttributes:A}}function O1(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,g;if(r)f=t,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,c,d),n.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function U1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),f=t.getParameter(35660),g=t.getParameter(3379),x=t.getParameter(34076),h=t.getParameter(34921),p=t.getParameter(36347),m=t.getParameter(36348),v=t.getParameter(36349),_=f>0,M=o||e.has("OES_texture_float"),S=_&&M,A=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:A}}function B1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new tr,a=new cn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||i!==0||r;return r=f,i=d.length,g},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,g){const x=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,m=t.get(d);if(!r||x===null||x.length===0||s&&!p)s?c(null):u();else{const v=s?0:i,_=v*4;let M=m.clippingState||null;l.value=M,M=c(x,f,_,g);for(let S=0;S!==_;++S)M[S]=n[S];m.clippingState=M,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,g,x){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,x!==!0||p===null){const m=g+h*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,M=g;_!==h;++_,M+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function V1(t){let e=new WeakMap;function n(o,a){return a===Nc?o.mapping=Ms:a===kc&&(o.mapping=ws),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Nc||a===kc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new ey(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class G1 extends jg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const os=4,Xh=[.125,.215,.35,.446,.526,.582],sr=20,Ru=new G1,qh=new Ze;let Iu=null;const nr=(1+Math.sqrt(5))/2,jr=1/nr,Yh=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,nr,jr),new B(0,nr,-jr),new B(jr,0,nr),new B(-jr,0,nr),new B(nr,jr,0),new B(-nr,jr,0)];class $h{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Iu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Iu),e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ms||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Iu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ao,format:bn,encoding:Mr,depthBuffer:!1},r=Zh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H1(s)),this._blurMaterial=W1(s,e,n)}return r}_compileMaterial(e){const n=new Vt(this._lodPlanes[0],e);this._renderer.compile(n,Ru)}_sceneToCubeUV(e,n,i,r){const a=new En(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(qh),c.toneMapping=hi,c.autoClear=!1;const g=new Jt({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),x=new Vt(new Qn,g);let h=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,h=!0):(g.color.copy(qh),h=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const _=this._cubeSize;ya(r,v*_,m>2?_:0,_,_),c.setRenderTarget(r),h&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ms||e.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ya(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ru)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yh[(r-1)%Yh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Vt(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*sr-1),h=s/x,p=isFinite(s)?1+Math.floor(c*h):sr;p>sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${sr}`);const m=[];let v=0;for(let L=0;L<sr;++L){const y=L/h,T=Math.exp(-y*y/2);m.push(T),L===0?v+=T:L<p&&(v+=2*T)}for(let L=0;L<m.length;L++)m[L]=m[L]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-i;const M=this._sizeLods[r],S=3*M*(r>_-os?r-_+os:0),A=4*(this._cubeSize-M);ya(n,S,A,3*M,2*M),l.setRenderTarget(n),l.render(d,Ru)}}function H1(t){const e=[],n=[],i=[];let r=t;const s=t-os+1+Xh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-os?l=Xh[o-t+os-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,x=6,h=3,p=2,m=1,v=new Float32Array(h*x*g),_=new Float32Array(p*x*g),M=new Float32Array(m*x*g);for(let A=0;A<g;A++){const L=A%3*2/3-1,y=A>2?0:-1,T=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];v.set(T,h*x*A),_.set(f,p*x*A);const P=[A,A,A,A,A,A];M.set(P,m*x*A)}const S=new Ar;S.setAttribute("position",new Kn(v,h)),S.setAttribute("uv",new Kn(_,p)),S.setAttribute("faceIndex",new Kn(M,m)),e.push(S),r>os&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Zh(t,e,n){const i=new wr(t,e,n);return i.texture.mapping=Ml,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function W1(t,e,n){const i=new Float32Array(sr),r=new B(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Kh(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Qh(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function j1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Nc||l===kc,c=l===Ms||l===ws;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new $h(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new $h(t));const f=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function X1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function q1(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const g=d.morphAttributes;for(const x in g){const h=g[x];for(let p=0,m=h.length;p<m;p++)e.update(h[p],34962)}}function u(d){const f=[],g=d.index,x=d.attributes.position;let h=0;if(g!==null){const v=g.array;h=g.version;for(let _=0,M=v.length;_<M;_+=3){const S=v[_+0],A=v[_+1],L=v[_+2];f.push(S,A,A,L,L,S)}}else{const v=x.array;h=x.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const S=_+0,A=_+1,L=_+2;f.push(S,A,A,L,L,S)}}const p=new(zg(f)?Hg:Gg)(f,1);p.version=h;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function c(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function Y1(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,g){t.drawElements(s,g,a,f*l),n.update(g,s,1)}function d(f,g,x){if(x===0)return;let h,p;if(r)h=t,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,g,a,f*l,x),n.update(g,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function $1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Z1(t,e){return t[0]-e[0]}function K1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Q1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new bt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0;let m=s.get(c);if(m===void 0||m.count!==p){let K=function(){k.dispose(),s.delete(c),c.removeEventListener("dispose",K)};var x=K;m!==void 0&&m.texture.dispose();const M=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let P=0;M===!0&&(P=1),S===!0&&(P=2),A===!0&&(P=3);let $=c.attributes.position.count*P,Z=1;$>e.maxTextureSize&&(Z=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const z=new Float32Array($*Z*4*p),k=new Bg(z,$,Z,p);k.type=cr,k.needsUpdate=!0;const q=P*4;for(let Q=0;Q<p;Q++){const R=L[Q],V=y[Q],G=T[Q],re=$*Z*4*Q;for(let F=0;F<R.count;F++){const Y=F*q;M===!0&&(o.fromBufferAttribute(R,F),z[re+Y+0]=o.x,z[re+Y+1]=o.y,z[re+Y+2]=o.z,z[re+Y+3]=0),S===!0&&(o.fromBufferAttribute(V,F),z[re+Y+4]=o.x,z[re+Y+5]=o.y,z[re+Y+6]=o.z,z[re+Y+7]=0),A===!0&&(o.fromBufferAttribute(G,F),z[re+Y+8]=o.x,z[re+Y+9]=o.y,z[re+Y+10]=o.z,z[re+Y+11]=G.itemSize===4?o.w:1)}}m={count:p,texture:k,size:new Pe($,Z)},s.set(c,m),c.addEventListener("dispose",K)}let v=0;for(let M=0;M<g.length;M++)v+=g[M];const _=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",g),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const h=g===void 0?0:g.length;let p=i[c.id];if(p===void 0||p.length!==h){p=[];for(let S=0;S<h;S++)p[S]=[S,0];i[c.id]=p}for(let S=0;S<h;S++){const A=p[S];A[0]=S,A[1]=g[S]}p.sort(K1);for(let S=0;S<8;S++)S<h&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Z1);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const A=a[S],L=A[0],y=A[1];L!==Number.MAX_SAFE_INTEGER&&y?(m&&c.getAttribute("morphTarget"+S)!==m[L]&&c.setAttribute("morphTarget"+S,m[L]),v&&c.getAttribute("morphNormal"+S)!==v[L]&&c.setAttribute("morphNormal"+S,v[L]),r[S]=y,_+=y):(m&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),v&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const M=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(t,"morphTargetBaseInfluence",M),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function J1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const $g=new Qt,Zg=new Bg,Kg=new Ox,Qg=new Xg,Jh=[],ep=[],tp=new Float32Array(16),np=new Float32Array(9),ip=new Float32Array(4);function Ps(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Jh[r];if(s===void 0&&(s=new Float32Array(r),Jh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bl(t,e){let n=ep[e];n===void 0&&(n=new Int32Array(e),ep[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function eM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function tM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mt(n,e))return;t.uniform2fv(this.addr,e),gt(n,e)}}function nM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(mt(n,e))return;t.uniform3fv(this.addr,e),gt(n,e)}}function iM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mt(n,e))return;t.uniform4fv(this.addr,e),gt(n,e)}}function rM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),gt(n,e)}else{if(mt(n,i))return;ip.set(i),t.uniformMatrix2fv(this.addr,!1,ip),gt(n,i)}}function sM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),gt(n,e)}else{if(mt(n,i))return;np.set(i),t.uniformMatrix3fv(this.addr,!1,np),gt(n,i)}}function oM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),gt(n,e)}else{if(mt(n,i))return;tp.set(i),t.uniformMatrix4fv(this.addr,!1,tp),gt(n,i)}}function aM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function lM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mt(n,e))return;t.uniform2iv(this.addr,e),gt(n,e)}}function uM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mt(n,e))return;t.uniform3iv(this.addr,e),gt(n,e)}}function cM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mt(n,e))return;t.uniform4iv(this.addr,e),gt(n,e)}}function fM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function dM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mt(n,e))return;t.uniform2uiv(this.addr,e),gt(n,e)}}function hM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mt(n,e))return;t.uniform3uiv(this.addr,e),gt(n,e)}}function pM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mt(n,e))return;t.uniform4uiv(this.addr,e),gt(n,e)}}function mM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||$g,r)}function gM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Kg,r)}function vM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Qg,r)}function _M(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Zg,r)}function xM(t){switch(t){case 5126:return eM;case 35664:return tM;case 35665:return nM;case 35666:return iM;case 35674:return rM;case 35675:return sM;case 35676:return oM;case 5124:case 35670:return aM;case 35667:case 35671:return lM;case 35668:case 35672:return uM;case 35669:case 35673:return cM;case 5125:return fM;case 36294:return dM;case 36295:return hM;case 36296:return pM;case 35678:case 36198:case 36298:case 36306:case 35682:return mM;case 35679:case 36299:case 36307:return gM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return _M}}function yM(t,e){t.uniform1fv(this.addr,e)}function SM(t,e){const n=Ps(e,this.size,2);t.uniform2fv(this.addr,n)}function MM(t,e){const n=Ps(e,this.size,3);t.uniform3fv(this.addr,n)}function wM(t,e){const n=Ps(e,this.size,4);t.uniform4fv(this.addr,n)}function EM(t,e){const n=Ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bM(t,e){const n=Ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function TM(t,e){const n=Ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function CM(t,e){t.uniform1iv(this.addr,e)}function AM(t,e){t.uniform2iv(this.addr,e)}function LM(t,e){t.uniform3iv(this.addr,e)}function PM(t,e){t.uniform4iv(this.addr,e)}function DM(t,e){t.uniform1uiv(this.addr,e)}function RM(t,e){t.uniform2uiv(this.addr,e)}function IM(t,e){t.uniform3uiv(this.addr,e)}function NM(t,e){t.uniform4uiv(this.addr,e)}function kM(t,e,n){const i=this.cache,r=e.length,s=bl(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||$g,s[o])}function zM(t,e,n){const i=this.cache,r=e.length,s=bl(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Kg,s[o])}function FM(t,e,n){const i=this.cache,r=e.length,s=bl(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Qg,s[o])}function OM(t,e,n){const i=this.cache,r=e.length,s=bl(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Zg,s[o])}function UM(t){switch(t){case 5126:return yM;case 35664:return SM;case 35665:return MM;case 35666:return wM;case 35674:return EM;case 35675:return bM;case 35676:return TM;case 5124:case 35670:return CM;case 35667:case 35671:return AM;case 35668:case 35672:return LM;case 35669:case 35673:return PM;case 5125:return DM;case 36294:return RM;case 36295:return IM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return OM}}class BM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=xM(n.type)}}class VM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=UM(n.type)}}class GM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Nu=/(\w+)(\])?(\[|\.)?/g;function rp(t,e){t.seq.push(e),t.map[e.id]=e}function HM(t,e,n){const i=t.name,r=i.length;for(Nu.lastIndex=0;;){const s=Nu.exec(i),o=Nu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){rp(n,u===void 0?new BM(a,t,e):new VM(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new GM(a),rp(n,d)),n=d}}}class Na{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);HM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function sp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let WM=0;function jM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function XM(t){switch(t){case Mr:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function op(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+jM(t.getShaderSource(e),o)}else return r}function qM(t,e){const n=XM(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function YM(t,e){let n;switch(e){case cx:n="Linear";break;case fx:n="Reinhard";break;case dx:n="OptimizedCineon";break;case hx:n="ACESFilmic";break;case px:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function $M(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qs).join(`
`)}function ZM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function KM(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qs(t){return t!==""}function ap(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(t){return t.replace(QM,JM)}function JM(t,e){const n=Ce[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Bc(n)}const ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function up(t){return t.replace(ew,tw)}function tw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Lg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Pg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ks&&(e="SHADOWMAP_TYPE_VSM"),e}function iw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ms:case ws:e="ENVMAP_TYPE_CUBE";break;case Ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function sw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ig:e="ENVMAP_BLENDING_MULTIPLY";break;case lx:e="ENVMAP_BLENDING_MIX";break;case ux:e="ENVMAP_BLENDING_ADD";break}return e}function ow(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=nw(n),u=iw(n),c=rw(n),d=sw(n),f=ow(n),g=n.isWebGL2?"":$M(n),x=ZM(s),h=r.createProgram();let p,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[x].filter(Qs).join(`
`),p.length>0&&(p+=`
`),m=[g,x].filter(Qs).join(`
`),m.length>0&&(m+=`
`)):(p=[cp(n),"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),m=[g,cp(n),"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hi?"#define TONE_MAPPING":"",n.toneMapping!==hi?Ce.tonemapping_pars_fragment:"",n.toneMapping!==hi?YM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,qM("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Bc(o),o=ap(o,n),o=lp(o,n),a=Bc(a),a=ap(a,n),a=lp(a,n),o=up(o),a=up(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===Ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+p+o,M=v+m+a,S=sp(r,35633,_),A=sp(r,35632,M);if(r.attachShader(h,S),r.attachShader(h,A),n.index0AttributeName!==void 0?r.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),t.debug.checkShaderErrors){const T=r.getProgramInfoLog(h).trim(),P=r.getShaderInfoLog(S).trim(),$=r.getShaderInfoLog(A).trim();let Z=!0,z=!0;if(r.getProgramParameter(h,35714)===!1){Z=!1;const k=op(r,S,"vertex"),q=op(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+T+`
`+k+`
`+q)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||$==="")&&(z=!1);z&&(this.diagnostics={runnable:Z,programLog:T,vertexShader:{log:P,prefix:p},fragmentShader:{log:$,prefix:m}})}r.deleteShader(S),r.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new Na(r,h)),L};let y;return this.getAttributes=function(){return y===void 0&&(y=KM(r,h)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=WM++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=A,this}let lw=0;class uw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new cw(e),n.set(e,i)),i}}class cw{constructor(e){this.id=lw++,this.code=e,this.usedTimes=0}}function fw(t,e,n,i,r,s,o){const a=new Uf,l=new uw,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,T,P,$,Z){const z=$.fog,k=Z.geometry,q=y.isMeshStandardMaterial?$.environment:null,K=(y.isMeshStandardMaterial?n:e).get(y.envMap||q),Q=K&&K.mapping===Ml?K.image.height:null,R=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const V=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,G=V!==void 0?V.length:0;let re=0;k.morphAttributes.position!==void 0&&(re=1),k.morphAttributes.normal!==void 0&&(re=2),k.morphAttributes.color!==void 0&&(re=3);let F,Y,ne,se;if(R){const Ve=jn[R];F=Ve.vertexShader,Y=Ve.fragmentShader}else F=y.vertexShader,Y=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),se=l.getFragmentShaderID(y);const U=t.getRenderTarget(),Se=y.alphaTest>0,ve=y.clearcoat>0,me=y.iridescence>0;return{isWebGL2:c,shaderID:R,shaderName:y.type,vertexShader:F,fragmentShader:Y,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:f,outputEncoding:U===null?t.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:Mr,map:!!y.map,matcap:!!y.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:Q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Nx,tangentSpaceNormalMap:y.normalMapType===Ix,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Xe,clearcoat:ve,clearcoatMap:ve&&!!y.clearcoatMap,clearcoatRoughnessMap:ve&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!y.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!y.iridescenceMap,iridescenceThicknessMap:me&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===hs,alphaMap:!!y.alphaMap,alphaTest:Se,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!k.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!z,useFog:y.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:hi,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===un,flipSided:y.side===dn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(m(T,y),v(T,y),T.push(t.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function m(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),y.push(a.mask)}function _(y){const T=x[y.type];let P;if(T){const $=jn[T];P=Zx.clone($.uniforms)}else P=y.uniforms;return P}function M(y,T){let P;for(let $=0,Z=u.length;$<Z;$++){const z=u[$];if(z.cacheKey===T){P=z,++P.usedTimes;break}}return P===void 0&&(P=new aw(t,T,y,s),u.push(P)),P}function S(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function L(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:_,acquireProgram:M,releaseProgram:S,releaseShaderCache:A,programs:u,dispose:L}}function dw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function hw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function fp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,g,x,h,p){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:g,groupOrder:x,renderOrder:d.renderOrder,z:h,group:p},t[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=g,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=h,m.group=p),e++,m}function a(d,f,g,x,h,p){const m=o(d,f,g,x,h,p);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function l(d,f,g,x,h,p){const m=o(d,f,g,x,h,p);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(d,f){n.length>1&&n.sort(d||hw),i.length>1&&i.sort(f||fp),r.length>1&&r.sort(f||fp)}function c(){for(let d=e,f=t.length;d<f;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function pw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new dp,t.set(i,[o])):r>=s.length?(o=new dp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function mw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Ze};break;case"SpotLight":n={position:new B,direction:new B,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function gw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let vw=0;function _w(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function xw(t,e){const n=new mw,i=gw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new B);const s=new B,o=new Ct,a=new Ct;function l(c,d){let f=0,g=0,x=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let h=0,p=0,m=0,v=0,_=0,M=0,S=0,A=0,L=0,y=0;c.sort(_w);const T=d!==!0?Math.PI:1;for(let $=0,Z=c.length;$<Z;$++){const z=c[$],k=z.color,q=z.intensity,K=z.distance,Q=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=k.r*q*T,g+=k.g*q*T,x+=k.b*q*T;else if(z.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(z.sh.coefficients[R],q);else if(z.isDirectionalLight){const R=n.get(z);if(R.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const V=z.shadow,G=i.get(z);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,r.directionalShadow[h]=G,r.directionalShadowMap[h]=Q,r.directionalShadowMatrix[h]=z.shadow.matrix,M++}r.directional[h]=R,h++}else if(z.isSpotLight){const R=n.get(z);R.position.setFromMatrixPosition(z.matrixWorld),R.color.copy(k).multiplyScalar(q*T),R.distance=K,R.coneCos=Math.cos(z.angle),R.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),R.decay=z.decay,r.spot[m]=R;const V=z.shadow;if(z.map&&(r.spotLightMap[L]=z.map,L++,V.updateMatrices(z),z.castShadow&&y++),r.spotLightMatrix[m]=V.matrix,z.castShadow){const G=i.get(z);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,r.spotShadow[m]=G,r.spotShadowMap[m]=Q,A++}m++}else if(z.isRectAreaLight){const R=n.get(z);R.color.copy(k).multiplyScalar(q),R.halfWidth.set(z.width*.5,0,0),R.halfHeight.set(0,z.height*.5,0),r.rectArea[v]=R,v++}else if(z.isPointLight){const R=n.get(z);if(R.color.copy(z.color).multiplyScalar(z.intensity*T),R.distance=z.distance,R.decay=z.decay,z.castShadow){const V=z.shadow,G=i.get(z);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,r.pointShadow[p]=G,r.pointShadowMap[p]=Q,r.pointShadowMatrix[p]=z.shadow.matrix,S++}r.point[p]=R,p++}else if(z.isHemisphereLight){const R=n.get(z);R.skyColor.copy(z.color).multiplyScalar(q*T),R.groundColor.copy(z.groundColor).multiplyScalar(q*T),r.hemi[_]=R,_++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=x;const P=r.hash;(P.directionalLength!==h||P.pointLength!==p||P.spotLength!==m||P.rectAreaLength!==v||P.hemiLength!==_||P.numDirectionalShadows!==M||P.numPointShadows!==S||P.numSpotShadows!==A||P.numSpotMaps!==L)&&(r.directional.length=h,r.spot.length=m,r.rectArea.length=v,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=A+L-y,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=y,P.directionalLength=h,P.pointLength=p,P.spotLength=m,P.rectAreaLength=v,P.hemiLength=_,P.numDirectionalShadows=M,P.numPointShadows=S,P.numSpotShadows=A,P.numSpotMaps=L,r.version=vw++)}function u(c,d){let f=0,g=0,x=0,h=0,p=0;const m=d.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){const M=c[v];if(M.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(M.isSpotLight){const S=r.spot[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),x++}else if(M.isRectAreaLight){const S=r.rectArea[h];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),h++}else if(M.isPointLight){const S=r.point[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),g++}else if(M.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:l,setupView:u,state:r}}function hp(t,e){const n=new xw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function yw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new hp(t,e),n.set(s,[l])):o>=a.length?(l=new hp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Sw extends El{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mw extends El{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ew=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bw(t,e,n){let i=new qg;const r=new Pe,s=new Pe,o=new bt,a=new Sw({depthPacking:Rx}),l=new Mw,u={},c=n.maxTextureSize,d={[Vi]:dn,[dn]:Vi,[un]:un},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:ww,fragmentShader:Ew}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const x=new Ar;x.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Vt(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lg,this.render=function(M,S,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const L=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),P=t.state;P.setBlending(Oi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let $=0,Z=M.length;$<Z;$++){const z=M[$],k=z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const q=k.getFrameExtents();if(r.multiply(q),s.copy(k.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/q.x),r.x=s.x*q.x,k.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/q.y),r.y=s.y*q.y,k.mapSize.y=s.y)),k.map===null){const Q=this.type!==Ks?{minFilter:Et,magFilter:Et}:{};k.map=new wr(r.x,r.y,Q),k.map.texture.name=z.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const K=k.getViewportCount();for(let Q=0;Q<K;Q++){const R=k.getViewport(Q);o.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),P.viewport(o),k.updateMatrices(z,Q),i=k.getFrustum(),_(S,A,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===Ks&&m(k,A),k.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(L,y,T)};function m(M,S){const A=e.update(h);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new wr(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(S,null,A,f,h,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(S,null,A,g,h,null)}function v(M,S,A,L,y,T){let P=null;const $=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if($!==void 0)P=$;else if(P=A.isPointLight===!0?l:a,t.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const Z=P.uuid,z=S.uuid;let k=u[Z];k===void 0&&(k={},u[Z]=k);let q=k[z];q===void 0&&(q=P.clone(),k[z]=q),P=q}return P.visible=S.visible,P.wireframe=S.wireframe,T===Ks?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:d[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaTest,P.map=S.map,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(A.matrixWorld),P.nearDistance=L,P.farDistance=y),P}function _(M,S,A,L,y){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===Ks)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const $=e.update(M),Z=M.material;if(Array.isArray(Z)){const z=$.groups;for(let k=0,q=z.length;k<q;k++){const K=z[k],Q=Z[K.materialIndex];if(Q&&Q.visible){const R=v(M,Q,L,A.near,A.far,y);t.renderBufferDirect(A,null,$,R,M,K)}}}else if(Z.visible){const z=v(M,Z,L,A.near,A.far,y);t.renderBufferDirect(A,null,$,z,M,null)}}const P=M.children;for(let $=0,Z=P.length;$<Z;$++)_(P[$],S,A,L,y)}}function Tw(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const W=new bt;let ee=null;const fe=new bt(0,0,0,0);return{setMask:function(_e){ee!==_e&&!D&&(t.colorMask(_e,_e,_e,_e),ee=_e)},setLocked:function(_e){D=_e},setClear:function(_e,Be,_t,Pt,Xi){Xi===!0&&(_e*=Pt,Be*=Pt,_t*=Pt),W.set(_e,Be,_t,Pt),fe.equals(W)===!1&&(t.clearColor(_e,Be,_t,Pt),fe.copy(W))},reset:function(){D=!1,ee=null,fe.set(-1,0,0,0)}}}function s(){let D=!1,W=null,ee=null,fe=null;return{setTest:function(_e){_e?Se(2929):ve(2929)},setMask:function(_e){W!==_e&&!D&&(t.depthMask(_e),W=_e)},setFunc:function(_e){if(ee!==_e){switch(_e){case tx:t.depthFunc(512);break;case nx:t.depthFunc(519);break;case ix:t.depthFunc(513);break;case Ic:t.depthFunc(515);break;case rx:t.depthFunc(514);break;case sx:t.depthFunc(518);break;case ox:t.depthFunc(516);break;case ax:t.depthFunc(517);break;default:t.depthFunc(515)}ee=_e}},setLocked:function(_e){D=_e},setClear:function(_e){fe!==_e&&(t.clearDepth(_e),fe=_e)},reset:function(){D=!1,W=null,ee=null,fe=null}}}function o(){let D=!1,W=null,ee=null,fe=null,_e=null,Be=null,_t=null,Pt=null,Xi=null;return{setTest:function(Ye){D||(Ye?Se(2960):ve(2960))},setMask:function(Ye){W!==Ye&&!D&&(t.stencilMask(Ye),W=Ye)},setFunc:function(Ye,Jn,_n){(ee!==Ye||fe!==Jn||_e!==_n)&&(t.stencilFunc(Ye,Jn,_n),ee=Ye,fe=Jn,_e=_n)},setOp:function(Ye,Jn,_n){(Be!==Ye||_t!==Jn||Pt!==_n)&&(t.stencilOp(Ye,Jn,_n),Be=Ye,_t=Jn,Pt=_n)},setLocked:function(Ye){D=Ye},setClear:function(Ye){Xi!==Ye&&(t.clearStencil(Ye),Xi=Ye)},reset:function(){D=!1,W=null,ee=null,fe=null,_e=null,Be=null,_t=null,Pt=null,Xi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},g={},x=new WeakMap,h=[],p=null,m=!1,v=null,_=null,M=null,S=null,A=null,L=null,y=null,T=!1,P=null,$=null,Z=null,z=null,k=null;const q=t.getParameter(35661);let K=!1,Q=0;const R=t.getParameter(7938);R.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(R)[1]),K=Q>=1):R.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),K=Q>=2);let V=null,G={};const re=t.getParameter(3088),F=t.getParameter(2978),Y=new bt().fromArray(re),ne=new bt().fromArray(F);function se(D,W,ee){const fe=new Uint8Array(4),_e=t.createTexture();t.bindTexture(D,_e),t.texParameteri(D,10241,9728),t.texParameteri(D,10240,9728);for(let Be=0;Be<ee;Be++)t.texImage2D(W+Be,0,6408,1,1,0,6408,5121,fe);return _e}const U={};U[3553]=se(3553,3553,1),U[34067]=se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Se(2929),l.setFunc(Ic),rt(!1),zt(nh),Se(2884),vt(Oi);function Se(D){f[D]!==!0&&(t.enable(D),f[D]=!0)}function ve(D){f[D]!==!1&&(t.disable(D),f[D]=!1)}function me(D,W){return g[D]!==W?(t.bindFramebuffer(D,W),g[D]=W,i&&(D===36009&&(g[36160]=W),D===36160&&(g[36009]=W)),!0):!1}function ce(D,W){let ee=h,fe=!1;if(D)if(ee=x.get(W),ee===void 0&&(ee=[],x.set(W,ee)),D.isWebGLMultipleRenderTargets){const _e=D.texture;if(ee.length!==_e.length||ee[0]!==36064){for(let Be=0,_t=_e.length;Be<_t;Be++)ee[Be]=36064+Be;ee.length=_e.length,fe=!0}}else ee[0]!==36064&&(ee[0]=36064,fe=!0);else ee[0]!==1029&&(ee[0]=1029,fe=!0);fe&&(n.isWebGL2?t.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Ve(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const Te={[Xr]:32774,[W_]:32778,[j_]:32779};if(i)Te[oh]=32775,Te[ah]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Te[oh]=D.MIN_EXT,Te[ah]=D.MAX_EXT)}const Me={[X_]:0,[q_]:1,[Y_]:768,[Dg]:770,[ex]:776,[Q_]:774,[Z_]:772,[$_]:769,[Rg]:771,[J_]:775,[K_]:773};function vt(D,W,ee,fe,_e,Be,_t,Pt){if(D===Oi){m===!0&&(ve(3042),m=!1);return}if(m===!1&&(Se(3042),m=!0),D!==H_){if(D!==v||Pt!==T){if((_!==Xr||A!==Xr)&&(t.blendEquation(32774),_=Xr,A=Xr),Pt)switch(D){case hs:t.blendFuncSeparate(1,771,1,771);break;case ih:t.blendFunc(1,1);break;case rh:t.blendFuncSeparate(0,769,0,1);break;case sh:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case hs:t.blendFuncSeparate(770,771,1,771);break;case ih:t.blendFunc(770,1);break;case rh:t.blendFuncSeparate(0,769,0,1);break;case sh:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,S=null,L=null,y=null,v=D,T=Pt}return}_e=_e||W,Be=Be||ee,_t=_t||fe,(W!==_||_e!==A)&&(t.blendEquationSeparate(Te[W],Te[_e]),_=W,A=_e),(ee!==M||fe!==S||Be!==L||_t!==y)&&(t.blendFuncSeparate(Me[ee],Me[fe],Me[Be],Me[_t]),M=ee,S=fe,L=Be,y=_t),v=D,T=!1}function Lt(D,W){D.side===un?ve(2884):Se(2884);let ee=D.side===dn;W&&(ee=!ee),rt(ee),D.blending===hs&&D.transparent===!1?vt(Oi):vt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const fe=D.stencilWrite;u.setTest(fe),fe&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ue(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Se(32926):ve(32926)}function rt(D){P!==D&&(D?t.frontFace(2304):t.frontFace(2305),P=D)}function zt(D){D!==V_?(Se(2884),D!==$&&(D===nh?t.cullFace(1029):D===G_?t.cullFace(1028):t.cullFace(1032))):ve(2884),$=D}function nt(D){D!==Z&&(K&&t.lineWidth(D),Z=D)}function Ue(D,W,ee){D?(Se(32823),(z!==W||k!==ee)&&(t.polygonOffset(W,ee),z=W,k=ee)):ve(32823)}function vn(D){D?Se(3089):ve(3089)}function jt(D){D===void 0&&(D=33984+q-1),V!==D&&(t.activeTexture(D),V=D)}function b(D,W,ee){ee===void 0&&(V===null?ee=33984+q-1:ee=V);let fe=G[ee];fe===void 0&&(fe={type:void 0,texture:void 0},G[ee]=fe),(fe.type!==D||fe.texture!==W)&&(V!==ee&&(t.activeTexture(ee),V=ee),t.bindTexture(D,W||U[D]),fe.type=D,fe.texture=W)}function w(){const D=G[V];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function H(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function I(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(D){Y.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Y.copy(D))}function pe(D){ne.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function Re(D,W){let ee=d.get(W);ee===void 0&&(ee=new WeakMap,d.set(W,ee));let fe=ee.get(D);fe===void 0&&(fe=t.getUniformBlockIndex(W,D.name),ee.set(D,fe))}function Ie(D,W){const fe=d.get(W).get(D);c.get(W)!==fe&&(t.uniformBlockBinding(W,fe,D.__bindingPointIndex),c.set(W,fe))}function He(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},V=null,G={},g={},x=new WeakMap,h=[],p=null,m=!1,v=null,_=null,M=null,S=null,A=null,L=null,y=null,T=!1,P=null,$=null,Z=null,z=null,k=null,Y.set(0,0,t.canvas.width,t.canvas.height),ne.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Se,disable:ve,bindFramebuffer:me,drawBuffers:ce,useProgram:Ve,setBlending:vt,setMaterial:Lt,setFlipSided:rt,setCullFace:zt,setLineWidth:nt,setPolygonOffset:Ue,setScissorTest:vn,activeTexture:jt,bindTexture:b,unbindTexture:w,compressedTexImage2D:H,compressedTexImage3D:te,texImage2D:he,texImage3D:le,updateUBOMapping:Re,uniformBlockBinding:Ie,texStorage2D:I,texStorage3D:ue,texSubImage2D:ie,texSubImage3D:ae,compressedTexSubImage2D:we,compressedTexSubImage3D:C,scissor:ge,viewport:pe,reset:He}}function Cw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,w){return m?new OffscreenCanvas(b,w):Po("canvas")}function _(b,w,H,te){let ie=1;if((b.width>te||b.height>te)&&(ie=te/Math.max(b.width,b.height)),ie<1||w===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ae=w?Uc:Math.floor,we=ae(ie*b.width),C=ae(ie*b.height);h===void 0&&(h=v(we,C));const I=H?v(we,C):h;return I.width=we,I.height=C,I.getContext("2d").drawImage(b,0,0,we,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+we+"x"+C+")."),I}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function M(b){return kh(b.width)&&kh(b.height)}function S(b){return a?!1:b.wrapS!==Fn||b.wrapT!==Fn||b.minFilter!==Et&&b.minFilter!==wn}function A(b,w){return b.generateMipmaps&&w&&b.minFilter!==Et&&b.minFilter!==wn}function L(b){t.generateMipmap(b)}function y(b,w,H,te,ie=!1){if(a===!1)return w;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ae=w;return w===6403&&(H===5126&&(ae=33326),H===5131&&(ae=33325),H===5121&&(ae=33321)),w===33319&&(H===5126&&(ae=33328),H===5131&&(ae=33327),H===5121&&(ae=33323)),w===6408&&(H===5126&&(ae=34836),H===5131&&(ae=34842),H===5121&&(ae=te===Xe&&ie===!1?35907:32856),H===32819&&(ae=32854),H===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function T(b,w,H){return A(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==Et&&b.minFilter!==wn?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function P(b){return b===Et||b===lh||b===iu?9728:9729}function $(b){const w=b.target;w.removeEventListener("dispose",$),z(w),w.isVideoTexture&&x.delete(w)}function Z(b){const w=b.target;w.removeEventListener("dispose",Z),q(w)}function z(b){const w=i.get(b);if(w.__webglInit===void 0)return;const H=b.source,te=p.get(H);if(te){const ie=te[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&k(b),Object.keys(te).length===0&&p.delete(H)}i.remove(b)}function k(b){const w=i.get(b);t.deleteTexture(w.__webglTexture);const H=b.source,te=p.get(H);delete te[w.__cacheKey],o.memory.textures--}function q(b){const w=b.texture,H=i.get(b),te=i.get(w);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)t.deleteFramebuffer(H.__webglFramebuffer[ie]),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ie]);else{if(t.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ie=0;ie<H.__webglColorRenderbuffer.length;ie++)H.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ie]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ie=0,ae=w.length;ie<ae;ie++){const we=i.get(w[ie]);we.__webglTexture&&(t.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(w[ie])}i.remove(w),i.remove(b)}let K=0;function Q(){K=0}function R(){const b=K;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),K+=1,b}function V(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.encoding),w.join()}function G(b,w){const H=i.get(b);if(b.isVideoTexture&&vn(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(H,b,w);return}}n.bindTexture(3553,H.__webglTexture,33984+w)}function re(b,w){const H=i.get(b);if(b.version>0&&H.__version!==b.version){ve(H,b,w);return}n.bindTexture(35866,H.__webglTexture,33984+w)}function F(b,w){const H=i.get(b);if(b.version>0&&H.__version!==b.version){ve(H,b,w);return}n.bindTexture(32879,H.__webglTexture,33984+w)}function Y(b,w){const H=i.get(b);if(b.version>0&&H.__version!==b.version){me(H,b,w);return}n.bindTexture(34067,H.__webglTexture,33984+w)}const ne={[zc]:10497,[Fn]:33071,[Fc]:33648},se={[Et]:9728,[lh]:9984,[iu]:9986,[wn]:9729,[mx]:9985,[Co]:9987};function U(b,w,H){if(H?(t.texParameteri(b,10242,ne[w.wrapS]),t.texParameteri(b,10243,ne[w.wrapT]),(b===32879||b===35866)&&t.texParameteri(b,32882,ne[w.wrapR]),t.texParameteri(b,10240,se[w.magFilter]),t.texParameteri(b,10241,se[w.minFilter])):(t.texParameteri(b,10242,33071),t.texParameteri(b,10243,33071),(b===32879||b===35866)&&t.texParameteri(b,32882,33071),(w.wrapS!==Fn||w.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,10240,P(w.magFilter)),t.texParameteri(b,10241,P(w.minFilter)),w.minFilter!==Et&&w.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Et||w.minFilter!==iu&&w.minFilter!==Co||w.type===cr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Ao&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(b,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Se(b,w){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",$));const te=w.source;let ie=p.get(te);ie===void 0&&(ie={},p.set(te,ie));const ae=V(w);if(ae!==b.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ie[ae].usedTimes++;const we=ie[b.__cacheKey];we!==void 0&&(ie[b.__cacheKey].usedTimes--,we.usedTimes===0&&k(w)),b.__cacheKey=ae,b.__webglTexture=ie[ae].texture}return H}function ve(b,w,H){let te=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=35866),w.isData3DTexture&&(te=32879);const ie=Se(b,w),ae=w.source;n.bindTexture(te,b.__webglTexture,33984+H);const we=i.get(ae);if(ae.version!==we.__version||ie===!0){n.activeTexture(33984+H),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const C=S(w)&&M(w.image)===!1;let I=_(w.image,C,!1,c);I=jt(w,I);const ue=M(I)||a,he=s.convert(w.format,w.encoding);let le=s.convert(w.type),ge=y(w.internalFormat,he,le,w.encoding,w.isVideoTexture);U(te,w,ue);let pe;const Re=w.mipmaps,Ie=a&&w.isVideoTexture!==!0,He=we.__version===void 0||ie===!0,D=T(w,I,ue);if(w.isDepthTexture)ge=6402,a?w.type===cr?ge=36012:w.type===ur?ge=33190:w.type===ps?ge=35056:ge=33189:w.type===cr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===hr&&ge===6402&&w.type!==kg&&w.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ur,le=s.convert(w.type)),w.format===Es&&ge===6402&&(ge=34041,w.type!==ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ps,le=s.convert(w.type))),He&&(Ie?n.texStorage2D(3553,1,ge,I.width,I.height):n.texImage2D(3553,0,ge,I.width,I.height,0,he,le,null));else if(w.isDataTexture)if(Re.length>0&&ue){Ie&&He&&n.texStorage2D(3553,D,ge,Re[0].width,Re[0].height);for(let W=0,ee=Re.length;W<ee;W++)pe=Re[W],Ie?n.texSubImage2D(3553,W,0,0,pe.width,pe.height,he,le,pe.data):n.texImage2D(3553,W,ge,pe.width,pe.height,0,he,le,pe.data);w.generateMipmaps=!1}else Ie?(He&&n.texStorage2D(3553,D,ge,I.width,I.height),n.texSubImage2D(3553,0,0,0,I.width,I.height,he,le,I.data)):n.texImage2D(3553,0,ge,I.width,I.height,0,he,le,I.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ie&&He&&n.texStorage3D(35866,D,ge,Re[0].width,Re[0].height,I.depth);for(let W=0,ee=Re.length;W<ee;W++)pe=Re[W],w.format!==bn?he!==null?Ie?n.compressedTexSubImage3D(35866,W,0,0,0,pe.width,pe.height,I.depth,he,pe.data,0,0):n.compressedTexImage3D(35866,W,ge,pe.width,pe.height,I.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?n.texSubImage3D(35866,W,0,0,0,pe.width,pe.height,I.depth,he,le,pe.data):n.texImage3D(35866,W,ge,pe.width,pe.height,I.depth,0,he,le,pe.data)}else{Ie&&He&&n.texStorage2D(3553,D,ge,Re[0].width,Re[0].height);for(let W=0,ee=Re.length;W<ee;W++)pe=Re[W],w.format!==bn?he!==null?Ie?n.compressedTexSubImage2D(3553,W,0,0,pe.width,pe.height,he,pe.data):n.compressedTexImage2D(3553,W,ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?n.texSubImage2D(3553,W,0,0,pe.width,pe.height,he,le,pe.data):n.texImage2D(3553,W,ge,pe.width,pe.height,0,he,le,pe.data)}else if(w.isDataArrayTexture)Ie?(He&&n.texStorage3D(35866,D,ge,I.width,I.height,I.depth),n.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,he,le,I.data)):n.texImage3D(35866,0,ge,I.width,I.height,I.depth,0,he,le,I.data);else if(w.isData3DTexture)Ie?(He&&n.texStorage3D(32879,D,ge,I.width,I.height,I.depth),n.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,he,le,I.data)):n.texImage3D(32879,0,ge,I.width,I.height,I.depth,0,he,le,I.data);else if(w.isFramebufferTexture){if(He)if(Ie)n.texStorage2D(3553,D,ge,I.width,I.height);else{let W=I.width,ee=I.height;for(let fe=0;fe<D;fe++)n.texImage2D(3553,fe,ge,W,ee,0,he,le,null),W>>=1,ee>>=1}}else if(Re.length>0&&ue){Ie&&He&&n.texStorage2D(3553,D,ge,Re[0].width,Re[0].height);for(let W=0,ee=Re.length;W<ee;W++)pe=Re[W],Ie?n.texSubImage2D(3553,W,0,0,he,le,pe):n.texImage2D(3553,W,ge,he,le,pe);w.generateMipmaps=!1}else Ie?(He&&n.texStorage2D(3553,D,ge,I.width,I.height),n.texSubImage2D(3553,0,0,0,he,le,I)):n.texImage2D(3553,0,ge,he,le,I);A(w,ue)&&L(te),we.__version=ae.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function me(b,w,H){if(w.image.length!==6)return;const te=Se(b,w),ie=w.source;n.bindTexture(34067,b.__webglTexture,33984+H);const ae=i.get(ie);if(ie.version!==ae.__version||te===!0){n.activeTexture(33984+H),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const we=w.isCompressedTexture||w.image[0].isCompressedTexture,C=w.image[0]&&w.image[0].isDataTexture,I=[];for(let W=0;W<6;W++)!we&&!C?I[W]=_(w.image[W],!1,!0,u):I[W]=C?w.image[W].image:w.image[W],I[W]=jt(w,I[W]);const ue=I[0],he=M(ue)||a,le=s.convert(w.format,w.encoding),ge=s.convert(w.type),pe=y(w.internalFormat,le,ge,w.encoding),Re=a&&w.isVideoTexture!==!0,Ie=ae.__version===void 0||te===!0;let He=T(w,ue,he);U(34067,w,he);let D;if(we){Re&&Ie&&n.texStorage2D(34067,He,pe,ue.width,ue.height);for(let W=0;W<6;W++){D=I[W].mipmaps;for(let ee=0;ee<D.length;ee++){const fe=D[ee];w.format!==bn?le!==null?Re?n.compressedTexSubImage2D(34069+W,ee,0,0,fe.width,fe.height,le,fe.data):n.compressedTexImage2D(34069+W,ee,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?n.texSubImage2D(34069+W,ee,0,0,fe.width,fe.height,le,ge,fe.data):n.texImage2D(34069+W,ee,pe,fe.width,fe.height,0,le,ge,fe.data)}}}else{D=w.mipmaps,Re&&Ie&&(D.length>0&&He++,n.texStorage2D(34067,He,pe,I[0].width,I[0].height));for(let W=0;W<6;W++)if(C){Re?n.texSubImage2D(34069+W,0,0,0,I[W].width,I[W].height,le,ge,I[W].data):n.texImage2D(34069+W,0,pe,I[W].width,I[W].height,0,le,ge,I[W].data);for(let ee=0;ee<D.length;ee++){const _e=D[ee].image[W].image;Re?n.texSubImage2D(34069+W,ee+1,0,0,_e.width,_e.height,le,ge,_e.data):n.texImage2D(34069+W,ee+1,pe,_e.width,_e.height,0,le,ge,_e.data)}}else{Re?n.texSubImage2D(34069+W,0,0,0,le,ge,I[W]):n.texImage2D(34069+W,0,pe,le,ge,I[W]);for(let ee=0;ee<D.length;ee++){const fe=D[ee];Re?n.texSubImage2D(34069+W,ee+1,0,0,le,ge,fe.image[W]):n.texImage2D(34069+W,ee+1,pe,le,ge,fe.image[W])}}}A(w,he)&&L(34067),ae.__version=ie.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function ce(b,w,H,te,ie){const ae=s.convert(H.format,H.encoding),we=s.convert(H.type),C=y(H.internalFormat,ae,we,H.encoding);i.get(w).__hasExternalTextures||(ie===32879||ie===35866?n.texImage3D(ie,0,C,w.width,w.height,w.depth,0,ae,we,null):n.texImage2D(ie,0,C,w.width,w.height,0,ae,we,null)),n.bindFramebuffer(36160,b),Ue(w)?f.framebufferTexture2DMultisampleEXT(36160,te,ie,i.get(H).__webglTexture,0,nt(w)):(ie===3553||ie>=34069&&ie<=34074)&&t.framebufferTexture2D(36160,te,ie,i.get(H).__webglTexture,0),n.bindFramebuffer(36160,null)}function Ve(b,w,H){if(t.bindRenderbuffer(36161,b),w.depthBuffer&&!w.stencilBuffer){let te=33189;if(H||Ue(w)){const ie=w.depthTexture;ie&&ie.isDepthTexture&&(ie.type===cr?te=36012:ie.type===ur&&(te=33190));const ae=nt(w);Ue(w)?f.renderbufferStorageMultisampleEXT(36161,ae,te,w.width,w.height):t.renderbufferStorageMultisample(36161,ae,te,w.width,w.height)}else t.renderbufferStorage(36161,te,w.width,w.height);t.framebufferRenderbuffer(36160,36096,36161,b)}else if(w.depthBuffer&&w.stencilBuffer){const te=nt(w);H&&Ue(w)===!1?t.renderbufferStorageMultisample(36161,te,35056,w.width,w.height):Ue(w)?f.renderbufferStorageMultisampleEXT(36161,te,35056,w.width,w.height):t.renderbufferStorage(36161,34041,w.width,w.height),t.framebufferRenderbuffer(36160,33306,36161,b)}else{const te=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0;ie<te.length;ie++){const ae=te[ie],we=s.convert(ae.format,ae.encoding),C=s.convert(ae.type),I=y(ae.internalFormat,we,C,ae.encoding),ue=nt(w);H&&Ue(w)===!1?t.renderbufferStorageMultisample(36161,ue,I,w.width,w.height):Ue(w)?f.renderbufferStorageMultisampleEXT(36161,ue,I,w.width,w.height):t.renderbufferStorage(36161,I,w.width,w.height)}}t.bindRenderbuffer(36161,null)}function Te(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const te=i.get(w.depthTexture).__webglTexture,ie=nt(w);if(w.depthTexture.format===hr)Ue(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ie):t.framebufferTexture2D(36160,36096,3553,te,0);else if(w.depthTexture.format===Es)Ue(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ie):t.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function Me(b){const w=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,b)}else if(H){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(36160,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]=t.createRenderbuffer(),Ve(w.__webglDepthbuffer[te],b,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),Ve(w.__webglDepthbuffer,b,!1);n.bindFramebuffer(36160,null)}function vt(b,w,H){const te=i.get(b);w!==void 0&&ce(te.__webglFramebuffer,b,b.texture,36064,3553),H!==void 0&&Me(b)}function Lt(b){const w=b.texture,H=i.get(b),te=i.get(w);b.addEventListener("dispose",Z),b.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=w.version,o.memory.textures++);const ie=b.isWebGLCubeRenderTarget===!0,ae=b.isWebGLMultipleRenderTargets===!0,we=M(b)||a;if(ie){H.__webglFramebuffer=[];for(let C=0;C<6;C++)H.__webglFramebuffer[C]=t.createFramebuffer()}else{if(H.__webglFramebuffer=t.createFramebuffer(),ae)if(r.drawBuffers){const C=b.texture;for(let I=0,ue=C.length;I<ue;I++){const he=i.get(C[I]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Ue(b)===!1){const C=ae?w:[w];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let I=0;I<C.length;I++){const ue=C[I];H.__webglColorRenderbuffer[I]=t.createRenderbuffer(),t.bindRenderbuffer(36161,H.__webglColorRenderbuffer[I]);const he=s.convert(ue.format,ue.encoding),le=s.convert(ue.type),ge=y(ue.internalFormat,he,le,ue.encoding,b.isXRRenderTarget===!0),pe=nt(b);t.renderbufferStorageMultisample(36161,pe,ge,b.width,b.height),t.framebufferRenderbuffer(36160,36064+I,36161,H.__webglColorRenderbuffer[I])}t.bindRenderbuffer(36161,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Ve(H.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(36160,null)}}if(ie){n.bindTexture(34067,te.__webglTexture),U(34067,w,we);for(let C=0;C<6;C++)ce(H.__webglFramebuffer[C],b,w,36064,34069+C);A(w,we)&&L(34067),n.unbindTexture()}else if(ae){const C=b.texture;for(let I=0,ue=C.length;I<ue;I++){const he=C[I],le=i.get(he);n.bindTexture(3553,le.__webglTexture),U(3553,he,we),ce(H.__webglFramebuffer,b,he,36064+I,3553),A(he,we)&&L(3553)}n.unbindTexture()}else{let C=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?C=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(C,te.__webglTexture),U(C,w,we),ce(H.__webglFramebuffer,b,w,36064,C),A(w,we)&&L(C),n.unbindTexture()}b.depthBuffer&&Me(b)}function rt(b){const w=M(b)||a,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0,ie=H.length;te<ie;te++){const ae=H[te];if(A(ae,w)){const we=b.isWebGLCubeRenderTarget?34067:3553,C=i.get(ae).__webglTexture;n.bindTexture(we,C),L(we),n.unbindTexture()}}}function zt(b){if(a&&b.samples>0&&Ue(b)===!1){const w=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],H=b.width,te=b.height;let ie=16384;const ae=[],we=b.stencilBuffer?33306:36096,C=i.get(b),I=b.isWebGLMultipleRenderTargets===!0;if(I)for(let ue=0;ue<w.length;ue++)n.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ue,36161,null),n.bindFramebuffer(36160,C.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ue,3553,null,0);n.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,C.__webglFramebuffer);for(let ue=0;ue<w.length;ue++){ae.push(36064+ue),b.depthBuffer&&ae.push(we);const he=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(he===!1&&(b.depthBuffer&&(ie|=256),b.stencilBuffer&&(ie|=1024)),I&&t.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[ue]),he===!0&&(t.invalidateFramebuffer(36008,[we]),t.invalidateFramebuffer(36009,[we])),I){const le=i.get(w[ue]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,le,0)}t.blitFramebuffer(0,0,H,te,0,0,H,te,ie,9728),g&&t.invalidateFramebuffer(36008,ae)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),I)for(let ue=0;ue<w.length;ue++){n.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ue,36161,C.__webglColorRenderbuffer[ue]);const he=i.get(w[ue]).__webglTexture;n.bindFramebuffer(36160,C.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ue,3553,he,0)}n.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function nt(b){return Math.min(d,b.samples)}function Ue(b){const w=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function vn(b){const w=o.render.frame;x.get(b)!==w&&(x.set(b,w),b.update())}function jt(b,w){const H=b.encoding,te=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Oc||H!==Mr&&(H===Xe?a===!1?e.has("EXT_sRGB")===!0&&te===bn?(b.format=Oc,b.minFilter=wn,b.generateMipmaps=!1):w=Og.sRGBToLinear(w):(te!==bn||ie!==Sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),w}this.allocateTextureUnit=R,this.resetTextureUnits=Q,this.setTexture2D=G,this.setTexture2DArray=re,this.setTexture3D=F,this.setTextureCube=Y,this.rebindTextures=vt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ue}function Aw(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===Sr)return 5121;if(s===xx)return 32819;if(s===yx)return 32820;if(s===gx)return 5120;if(s===vx)return 5122;if(s===kg)return 5123;if(s===_x)return 5124;if(s===ur)return 5125;if(s===cr)return 5126;if(s===Ao)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Sx)return 6406;if(s===bn)return 6408;if(s===Mx)return 6409;if(s===wx)return 6410;if(s===hr)return 6402;if(s===Es)return 34041;if(s===Oc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ex)return 6403;if(s===bx)return 36244;if(s===Tx)return 33319;if(s===Cx)return 33320;if(s===Ax)return 36249;if(s===ru||s===su||s===ou||s===au)if(o===Xe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ru)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ou)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===au)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ru)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===su)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ou)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===au)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===uh||s===ch||s===fh||s===dh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===uh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ch)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Lx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===hh||s===ph)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===hh)return o===Xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ph)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===mh||s===gh||s===vh||s===_h||s===xh||s===yh||s===Sh||s===Mh||s===wh||s===Eh||s===bh||s===Th||s===Ch||s===Ah)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===mh)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gh)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vh)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_h)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xh)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yh)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sh)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mh)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wh)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Eh)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bh)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Th)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ch)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ah)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===lu)return o===Xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Px||s===Lh||s===Ph||s===Dh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===lu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Lh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ph)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ps?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Lw extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Js extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pw={type:"move"};class ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=n.getJointPose(h,i),m=this._getHandJoint(u,h);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=p.radius),m.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),g=.02,x=.005;u.inputState.pinching&&f>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Js;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Dw extends Qt{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:hr,c!==hr&&c!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===hr&&(i=ur),i===void 0&&c===Es&&(i=ps),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1}}class Rw extends Cr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,g=null,x=null;const h=n.getContextAttributes();let p=null,m=null;const v=[],_=[],M=new Set,S=new Map,A=new En;A.layers.enable(1),A.viewport=new bt;const L=new En;L.layers.enable(2),L.viewport=new bt;const y=[A,L],T=new Lw;T.layers.enable(1),T.layers.enable(2);let P=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Y=v[F];return Y===void 0&&(Y=new ku,v[F]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(F){let Y=v[F];return Y===void 0&&(Y=new ku,v[F]=Y),Y.getGripSpace()},this.getHand=function(F){let Y=v[F];return Y===void 0&&(Y=new ku,v[F]=Y),Y.getHandSpace()};function Z(F){const Y=_.indexOf(F.inputSource);if(Y===-1)return;const ne=v[Y];ne!==void 0&&ne.dispatchEvent({type:F.type,data:F.inputSource})}function z(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",k);for(let F=0;F<v.length;F++){const Y=_[F];Y!==null&&(_[F]=null,v[F].disconnect(Y))}P=null,$=null,e.setRenderTarget(p),g=null,f=null,d=null,r=null,m=null,re.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(F){u=F},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",z),r.addEventListener("inputsourceschange",k),h.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:g}),m=new wr(g.framebufferWidth,g.framebufferHeight,{format:bn,type:Sr,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let Y=null,ne=null,se=null;h.depth&&(se=h.stencil?35056:33190,Y=h.stencil?Es:hr,ne=h.stencil?ps:ur);const U={colorFormat:32856,depthFormat:se,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(U),r.updateRenderState({layers:[f]}),m=new wr(f.textureWidth,f.textureHeight,{format:bn,type:Sr,depthTexture:new Dw(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const Se=e.properties.get(m);Se.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function k(F){for(let Y=0;Y<F.removed.length;Y++){const ne=F.removed[Y],se=_.indexOf(ne);se>=0&&(_[se]=null,v[se].disconnect(ne))}for(let Y=0;Y<F.added.length;Y++){const ne=F.added[Y];let se=_.indexOf(ne);if(se===-1){for(let Se=0;Se<v.length;Se++)if(Se>=_.length){_.push(ne),se=Se;break}else if(_[Se]===null){_[Se]=ne,se=Se;break}if(se===-1)break}const U=v[se];U&&U.connect(ne)}}const q=new B,K=new B;function Q(F,Y,ne){q.setFromMatrixPosition(Y.matrixWorld),K.setFromMatrixPosition(ne.matrixWorld);const se=q.distanceTo(K),U=Y.projectionMatrix.elements,Se=ne.projectionMatrix.elements,ve=U[14]/(U[10]-1),me=U[14]/(U[10]+1),ce=(U[9]+1)/U[5],Ve=(U[9]-1)/U[5],Te=(U[8]-1)/U[0],Me=(Se[8]+1)/Se[0],vt=ve*Te,Lt=ve*Me,rt=se/(-Te+Me),zt=rt*-Te;Y.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(zt),F.translateZ(rt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const nt=ve+rt,Ue=me+rt,vn=vt-zt,jt=Lt+(se-zt),b=ce*me/Ue*nt,w=Ve*me/Ue*nt;F.projectionMatrix.makePerspective(vn,jt,b,w,nt,Ue)}function R(F,Y){Y===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Y.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;T.near=L.near=A.near=F.near,T.far=L.far=A.far=F.far,(P!==T.near||$!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,$=T.far);const Y=F.parent,ne=T.cameras;R(T,Y);for(let U=0;U<ne.length;U++)R(ne[U],Y);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),F.matrix.copy(T.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const se=F.children;for(let U=0,Se=se.length;U<Se;U++)se[U].updateMatrixWorld(!0);ne.length===2?Q(T,A,L):T.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=F)},this.getPlanes=function(){return M};let V=null;function G(F,Y){if(c=Y.getViewerPose(u||o),x=Y,c!==null){const ne=c.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let se=!1;ne.length!==T.cameras.length&&(T.cameras.length=0,se=!0);for(let U=0;U<ne.length;U++){const Se=ne[U];let ve=null;if(g!==null)ve=g.getViewport(Se);else{const ce=d.getViewSubImage(f,Se);ve=ce.viewport,U===0&&(e.setRenderTargetTextures(m,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(m))}let me=y[U];me===void 0&&(me=new En,me.layers.enable(U),me.viewport=new bt,y[U]=me),me.matrix.fromArray(Se.transform.matrix),me.projectionMatrix.fromArray(Se.projectionMatrix),me.viewport.set(ve.x,ve.y,ve.width,ve.height),U===0&&T.matrix.copy(me.matrix),se===!0&&T.cameras.push(me)}}for(let ne=0;ne<v.length;ne++){const se=_[ne],U=v[ne];se!==null&&U!==void 0&&U.update(se,Y,u||o)}if(V&&V(F,Y),Y.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let ne=null;for(const se of M)Y.detectedPlanes.has(se)||(ne===null&&(ne=[]),ne.push(se));if(ne!==null)for(const se of ne)M.delete(se),S.delete(se),i.dispatchEvent({type:"planeremoved",data:se});for(const se of Y.detectedPlanes)if(!M.has(se))M.add(se),S.set(se,Y.lastChangedTime),i.dispatchEvent({type:"planeadded",data:se});else{const U=S.get(se);se.lastChangedTime>U&&(S.set(se,se.lastChangedTime),i.dispatchEvent({type:"planechanged",data:se}))}}x=null}const re=new Yg;re.setAnimationLoop(G),this.setAnimationLoop=function(F){V=F},this.dispose=function(){}}}function Iw(t,e){function n(h,p){p.color.getRGB(h.fogColor.value,Wg(t)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,m,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,_)):p.isMeshMatcapMaterial?(r(h,p),g(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),x(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,m,v):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===dn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===dn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const m=e.get(p).envMap;if(m&&(h.envMap.value=m,h.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const M=t.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uv2Transform.value.copy(_.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,m,v){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*m,h.scale.value=v*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let m;p.map?m=p.map:p.alphaMap&&(m=p.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),h.uvTransform.value.copy(m.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,m){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===dn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=m.texture,h.transmissionSamplerSize.value.set(m.width,m.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function g(h,p){p.matcap&&(h.matcap.value=p.matcap)}function x(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Nw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,_){const M=_.program;i.uniformBlockBinding(v,M)}function u(v,_){let M=r[v.id];M===void 0&&(x(v),M=c(v),r[v.id]=M,v.addEventListener("dispose",p));const S=_.program;i.updateUBOMapping(v,S);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function c(v){const _=d();v.__bindingPointIndex=_;const M=t.createBuffer(),S=v.__size,A=v.usage;return t.bindBuffer(35345,M),t.bufferData(35345,S,A),t.bindBuffer(35345,null),t.bindBufferBase(35345,_,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=r[v.id],M=v.uniforms,S=v.__cache;t.bindBuffer(35345,_);for(let A=0,L=M.length;A<L;A++){const y=M[A];if(g(y,A,S)===!0){const T=y.__offset,P=Array.isArray(y.value)?y.value:[y.value];let $=0;for(let Z=0;Z<P.length;Z++){const z=P[Z],k=h(z);typeof z=="number"?(y.__data[0]=z,t.bufferSubData(35345,T+$,y.__data)):z.isMatrix3?(y.__data[0]=z.elements[0],y.__data[1]=z.elements[1],y.__data[2]=z.elements[2],y.__data[3]=z.elements[0],y.__data[4]=z.elements[3],y.__data[5]=z.elements[4],y.__data[6]=z.elements[5],y.__data[7]=z.elements[0],y.__data[8]=z.elements[6],y.__data[9]=z.elements[7],y.__data[10]=z.elements[8],y.__data[11]=z.elements[0]):(z.toArray(y.__data,$),$+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,T,y.__data)}}t.bindBuffer(35345,null)}function g(v,_,M){const S=v.value;if(M[_]===void 0){if(typeof S=="number")M[_]=S;else{const A=Array.isArray(S)?S:[S],L=[];for(let y=0;y<A.length;y++)L.push(A[y].clone());M[_]=L}return!0}else if(typeof S=="number"){if(M[_]!==S)return M[_]=S,!0}else{const A=Array.isArray(M[_])?M[_]:[M[_]],L=Array.isArray(S)?S:[S];for(let y=0;y<A.length;y++){const T=A[y];if(T.equals(L[y])===!1)return T.copy(L[y]),!0}}return!1}function x(v){const _=v.uniforms;let M=0;const S=16;let A=0;for(let L=0,y=_.length;L<y;L++){const T=_[L],P={boundary:0,storage:0},$=Array.isArray(T.value)?T.value:[T.value];for(let Z=0,z=$.length;Z<z;Z++){const k=$[Z],q=h(k);P.boundary+=q.boundary,P.storage+=q.storage}if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,L>0){A=M%S;const Z=S-A;A!==0&&Z-P.boundary<0&&(M+=S-A,T.__offset=M)}M+=P.storage}return A=M%S,A>0&&(M+=S-A),v.__size=M,v.__cache={},this}function h(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){const _=v.target;_.removeEventListener("dispose",p);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}function kw(){const t=Po("canvas");return t.style.display="block",t}function Jg(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:kw(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let d=null,f=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mr,this.physicallyCorrectLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;const h=this;let p=!1,m=0,v=0,_=null,M=-1,S=null;const A=new bt,L=new bt;let y=null,T=e.width,P=e.height,$=1,Z=null,z=null;const k=new bt(0,0,T,P),q=new bt(0,0,T,P);let K=!1;const Q=new qg;let R=!1,V=!1,G=null;const re=new Ct,F=new Pe,Y=new B,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return _===null?$:1}let U=n;function Se(E,O){for(let j=0;j<E.length;j++){const N=E[j],X=e.getContext(N,O);if(X!==null)return X}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ff}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Re,!1),U===null){const O=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&O.shift(),U=Se(O,E),U===null)throw Se(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ve,me,ce,Ve,Te,Me,vt,Lt,rt,zt,nt,Ue,vn,jt,b,w,H,te,ie,ae,we,C,I,ue;function he(){ve=new X1(U),me=new U1(U,ve,t),ve.init(me),C=new Aw(U,ve,me),ce=new Tw(U,ve,me),Ve=new $1,Te=new dw,Me=new Cw(U,ve,ce,Te,me,C,Ve),vt=new V1(h),Lt=new j1(h),rt=new iy(U,me),I=new F1(U,ve,rt,me),zt=new q1(U,rt,Ve,I),nt=new J1(U,zt,rt,Ve),ie=new Q1(U,me,Me),w=new B1(Te),Ue=new fw(h,vt,Lt,ve,me,I,w),vn=new Iw(h,Te),jt=new pw,b=new yw(ve,me),te=new z1(h,vt,Lt,ce,nt,c,o),H=new bw(h,nt,me),ue=new Nw(U,Ve,me,ce),ae=new O1(U,ve,Ve,me),we=new Y1(U,ve,Ve,me),Ve.programs=Ue.programs,h.capabilities=me,h.extensions=ve,h.properties=Te,h.renderLists=jt,h.shadowMap=H,h.state=ce,h.info=Ve}he();const le=new Rw(h,U);this.xr=le,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(T,P,!1))},this.getSize=function(E){return E.set(T,P)},this.setSize=function(E,O,j){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,P=O,e.width=Math.floor(E*$),e.height=Math.floor(O*$),j!==!1&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(T*$,P*$).floor()},this.setDrawingBufferSize=function(E,O,j){T=E,P=O,$=j,e.width=Math.floor(E*j),e.height=Math.floor(O*j),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(k)},this.setViewport=function(E,O,j,N){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,O,j,N),ce.viewport(A.copy(k).multiplyScalar($).floor())},this.getScissor=function(E){return E.copy(q)},this.setScissor=function(E,O,j,N){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,O,j,N),ce.scissor(L.copy(q).multiplyScalar($).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(E){ce.setScissorTest(K=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(E=!0,O=!0,j=!0){let N=0;E&&(N|=16384),O&&(N|=256),j&&(N|=1024),U.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),jt.dispose(),b.dispose(),Te.dispose(),vt.dispose(),Lt.dispose(),nt.dispose(),I.dispose(),ue.dispose(),Ue.dispose(),le.dispose(),le.removeEventListener("sessionstart",fe),le.removeEventListener("sessionend",_e),G&&(G.dispose(),G=null),Be.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Ve.autoReset,O=H.enabled,j=H.autoUpdate,N=H.needsUpdate,X=H.type;he(),Ve.autoReset=E,H.enabled=O,H.autoUpdate=j,H.needsUpdate=N,H.type=X}function Re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ie(E){const O=E.target;O.removeEventListener("dispose",Ie),He(O)}function He(E){D(E),Te.remove(E)}function D(E){const O=Te.get(E).programs;O!==void 0&&(O.forEach(function(j){Ue.releaseProgram(j)}),E.isShaderMaterial&&Ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,j,N,X,xe){O===null&&(O=ne);const Ee=X.isMesh&&X.matrixWorld.determinant()<0,Ae=o0(E,O,j,N,X);ce.setMaterial(N,Ee);let Le=j.index,Oe=1;N.wireframe===!0&&(Le=zt.getWireframeAttribute(j),Oe=2);const Ne=j.drawRange,ke=j.attributes.position;let st=Ne.start*Oe,en=(Ne.start+Ne.count)*Oe;xe!==null&&(st=Math.max(st,xe.start*Oe),en=Math.min(en,(xe.start+xe.count)*Oe)),Le!==null?(st=Math.max(st,0),en=Math.min(en,Le.count)):ke!=null&&(st=Math.max(st,0),en=Math.min(en,ke.count));const ei=en-st;if(ei<0||ei===1/0)return;I.setup(X,N,Ae,j,Le);let qi,ot=ae;if(Le!==null&&(qi=rt.get(Le),ot=we,ot.setIndex(qi)),X.isMesh)N.wireframe===!0?(ce.setLineWidth(N.wireframeLinewidth*se()),ot.setMode(1)):ot.setMode(4);else if(X.isLine){let ze=N.linewidth;ze===void 0&&(ze=1),ce.setLineWidth(ze*se()),X.isLineSegments?ot.setMode(1):X.isLineLoop?ot.setMode(2):ot.setMode(3)}else X.isPoints?ot.setMode(0):X.isSprite&&ot.setMode(4);if(X.isInstancedMesh)ot.renderInstances(st,ei,X.count);else if(j.isInstancedBufferGeometry){const ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Cl=Math.min(j.instanceCount,ze);ot.renderInstances(st,ei,Cl)}else ot.render(st,ei)},this.compile=function(E,O){function j(N,X,xe){N.transparent===!0&&N.side===un&&N.forceSinglePass===!1?(N.side=dn,N.needsUpdate=!0,_n(N,X,xe),N.side=Vi,N.needsUpdate=!0,_n(N,X,xe),N.side=un):_n(N,X,xe)}f=b.get(E),f.init(),x.push(f),E.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(h.physicallyCorrectLights),E.traverse(function(N){const X=N.material;if(X)if(Array.isArray(X))for(let xe=0;xe<X.length;xe++){const Ee=X[xe];j(Ee,E,N)}else j(X,E,N)}),x.pop(),f=null};let W=null;function ee(E){W&&W(E)}function fe(){Be.stop()}function _e(){Be.start()}const Be=new Yg;Be.setAnimationLoop(ee),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(E){W=E,le.setAnimationLoop(E),E===null?Be.stop():Be.start()},le.addEventListener("sessionstart",fe),le.addEventListener("sessionend",_e),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(O),O=le.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,O,_),f=b.get(E,x.length),f.init(),x.push(f),re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(re),V=this.localClippingEnabled,R=w.init(this.clippingPlanes,V),d=jt.get(E,g.length),d.init(),g.push(d),_t(E,O,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(Z,z),R===!0&&w.beginShadows();const j=f.state.shadowsArray;if(H.render(j,E,O),R===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(d,E),f.setupLights(h.physicallyCorrectLights),O.isArrayCamera){const N=O.cameras;for(let X=0,xe=N.length;X<xe;X++){const Ee=N[X];Pt(d,E,Ee,Ee.viewport)}}else Pt(d,E,O);_!==null&&(Me.updateMultisampleRenderTarget(_),Me.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(h,E,O),I.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function _t(E,O,j,N){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){N&&Y.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const Ee=nt.update(E),Ae=E.material;Ae.visible&&d.push(E,Ee,Ae,j,Y.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ve.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ve.render.frame),!E.frustumCulled||Q.intersectsObject(E))){N&&Y.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const Ee=nt.update(E),Ae=E.material;if(Array.isArray(Ae)){const Le=Ee.groups;for(let Oe=0,Ne=Le.length;Oe<Ne;Oe++){const ke=Le[Oe],st=Ae[ke.materialIndex];st&&st.visible&&d.push(E,Ee,st,j,Y.z,ke)}}else Ae.visible&&d.push(E,Ee,Ae,j,Y.z,null)}}const xe=E.children;for(let Ee=0,Ae=xe.length;Ee<Ae;Ee++)_t(xe[Ee],O,j,N)}function Pt(E,O,j,N){const X=E.opaque,xe=E.transmissive,Ee=E.transparent;f.setupLightsView(j),R===!0&&w.setGlobalState(h.clippingPlanes,j),xe.length>0&&Xi(X,O,j),N&&ce.viewport(A.copy(N)),X.length>0&&Ye(X,O,j),xe.length>0&&Ye(xe,O,j),Ee.length>0&&Ye(Ee,O,j),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Xi(E,O,j){const N=me.isWebGL2;G===null&&(G=new wr(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Ao:Sr,minFilter:Co,samples:N&&s===!0?4:0})),h.getDrawingBufferSize(F),N?G.setSize(F.x,F.y):G.setSize(Uc(F.x),Uc(F.y));const X=h.getRenderTarget();h.setRenderTarget(G),h.clear();const xe=h.toneMapping;h.toneMapping=hi,Ye(E,O,j),h.toneMapping=xe,Me.updateMultisampleRenderTarget(G),Me.updateRenderTargetMipmap(G),h.setRenderTarget(X)}function Ye(E,O,j){const N=O.isScene===!0?O.overrideMaterial:null;for(let X=0,xe=E.length;X<xe;X++){const Ee=E[X],Ae=Ee.object,Le=Ee.geometry,Oe=N===null?Ee.material:N,Ne=Ee.group;Ae.layers.test(j.layers)&&Jn(Ae,O,j,Le,Oe,Ne)}}function Jn(E,O,j,N,X,xe){E.onBeforeRender(h,O,j,N,X,xe),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(h,O,j,N,E,xe),X.transparent===!0&&X.side===un&&X.forceSinglePass===!1?(X.side=dn,X.needsUpdate=!0,h.renderBufferDirect(j,O,N,X,E,xe),X.side=Vi,X.needsUpdate=!0,h.renderBufferDirect(j,O,N,X,E,xe),X.side=un):h.renderBufferDirect(j,O,N,X,E,xe),E.onAfterRender(h,O,j,N,X,xe)}function _n(E,O,j){O.isScene!==!0&&(O=ne);const N=Te.get(E),X=f.state.lights,xe=f.state.shadowsArray,Ee=X.state.version,Ae=Ue.getParameters(E,X.state,xe,O,j),Le=Ue.getProgramCacheKey(Ae);let Oe=N.programs;N.environment=E.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(E.isMeshStandardMaterial?Lt:vt).get(E.envMap||N.environment),Oe===void 0&&(E.addEventListener("dispose",Ie),Oe=new Map,N.programs=Oe);let Ne=Oe.get(Le);if(Ne!==void 0){if(N.currentProgram===Ne&&N.lightsStateVersion===Ee)return Gf(E,Ae),Ne}else Ae.uniforms=Ue.getUniforms(E),E.onBuild(j,Ae,h),E.onBeforeCompile(Ae,h),Ne=Ue.acquireProgram(Ae,Le),Oe.set(Le,Ne),N.uniforms=Ae.uniforms;const ke=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=w.uniform),Gf(E,Ae),N.needsLights=l0(E),N.lightsStateVersion=Ee,N.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.directionalShadowMap.value=X.state.directionalShadowMap,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotShadowMap.value=X.state.spotShadowMap,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMap.value=X.state.pointShadowMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix);const st=Ne.getUniforms(),en=Na.seqWithValue(st.seq,ke);return N.currentProgram=Ne,N.uniformsList=en,Ne}function Gf(E,O){const j=Te.get(E);j.outputEncoding=O.outputEncoding,j.instancing=O.instancing,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function o0(E,O,j,N,X){O.isScene!==!0&&(O=ne),Me.resetTextureUnits();const xe=O.fog,Ee=N.isMeshStandardMaterial?O.environment:null,Ae=_===null?h.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Mr,Le=(N.isMeshStandardMaterial?Lt:vt).get(N.envMap||Ee),Oe=N.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ne=!!N.normalMap&&!!j.attributes.tangent,ke=!!j.morphAttributes.position,st=!!j.morphAttributes.normal,en=!!j.morphAttributes.color,ei=N.toneMapped?h.toneMapping:hi,qi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ot=qi!==void 0?qi.length:0,ze=Te.get(N),Cl=f.state.lights;if(R===!0&&(V===!0||E!==S)){const tn=E===S&&N.id===M;w.setState(N,E,tn)}let xt=!1;N.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Cl.state.version||ze.outputEncoding!==Ae||X.isInstancedMesh&&ze.instancing===!1||!X.isInstancedMesh&&ze.instancing===!0||X.isSkinnedMesh&&ze.skinning===!1||!X.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Le||N.fog===!0&&ze.fog!==xe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==w.numPlanes||ze.numIntersection!==w.numIntersection)||ze.vertexAlphas!==Oe||ze.vertexTangents!==Ne||ze.morphTargets!==ke||ze.morphNormals!==st||ze.morphColors!==en||ze.toneMapping!==ei||me.isWebGL2===!0&&ze.morphTargetsCount!==ot)&&(xt=!0):(xt=!0,ze.__version=N.version);let Yi=ze.currentProgram;xt===!0&&(Yi=_n(N,O,X));let Hf=!1,Ds=!1,Al=!1;const Ft=Yi.getUniforms(),$i=ze.uniforms;if(ce.useProgram(Yi.program)&&(Hf=!0,Ds=!0,Al=!0),N.id!==M&&(M=N.id,Ds=!0),Hf||S!==E){if(Ft.setValue(U,"projectionMatrix",E.projectionMatrix),me.logarithmicDepthBuffer&&Ft.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,Ds=!0,Al=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const tn=Ft.map.cameraPosition;tn!==void 0&&tn.setValue(U,Y.setFromMatrixPosition(E.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Ft.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||X.isSkinnedMesh)&&Ft.setValue(U,"viewMatrix",E.matrixWorldInverse)}if(X.isSkinnedMesh){Ft.setOptional(U,X,"bindMatrix"),Ft.setOptional(U,X,"bindMatrixInverse");const tn=X.skeleton;tn&&(me.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Ft.setValue(U,"boneTexture",tn.boneTexture,Me),Ft.setValue(U,"boneTextureSize",tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ll=j.morphAttributes;if((Ll.position!==void 0||Ll.normal!==void 0||Ll.color!==void 0&&me.isWebGL2===!0)&&ie.update(X,j,N,Yi),(Ds||ze.receiveShadow!==X.receiveShadow)&&(ze.receiveShadow=X.receiveShadow,Ft.setValue(U,"receiveShadow",X.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&($i.envMap.value=Le,$i.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Ds&&(Ft.setValue(U,"toneMappingExposure",h.toneMappingExposure),ze.needsLights&&a0($i,Al),xe&&N.fog===!0&&vn.refreshFogUniforms($i,xe),vn.refreshMaterialUniforms($i,N,$,P,G),Na.upload(U,ze.uniformsList,$i,Me)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Na.upload(U,ze.uniformsList,$i,Me),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Ft.setValue(U,"center",X.center),Ft.setValue(U,"modelViewMatrix",X.modelViewMatrix),Ft.setValue(U,"normalMatrix",X.normalMatrix),Ft.setValue(U,"modelMatrix",X.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const tn=N.uniformsGroups;for(let Pl=0,u0=tn.length;Pl<u0;Pl++)if(me.isWebGL2){const Wf=tn[Pl];ue.update(Wf,Yi),ue.bind(Wf,Yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yi}function a0(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function l0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,O,j){Te.get(E.texture).__webglTexture=O,Te.get(E.depthTexture).__webglTexture=j;const N=Te.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=j===void 0,N.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const j=Te.get(E);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,j=0){_=E,m=O,v=j;let N=!0,X=null,xe=!1,Ee=!1;if(E){const Le=Te.get(E);Le.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),N=!1):Le.__webglFramebuffer===void 0?Me.setupRenderTarget(E):Le.__hasExternalTextures&&Me.rebindTextures(E,Te.get(E.texture).__webglTexture,Te.get(E.depthTexture).__webglTexture);const Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ee=!0);const Ne=Te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(X=Ne[O],xe=!0):me.isWebGL2&&E.samples>0&&Me.useMultisampledRTT(E)===!1?X=Te.get(E).__webglMultisampledFramebuffer:X=Ne,A.copy(E.viewport),L.copy(E.scissor),y=E.scissorTest}else A.copy(k).multiplyScalar($).floor(),L.copy(q).multiplyScalar($).floor(),y=K;if(ce.bindFramebuffer(36160,X)&&me.drawBuffers&&N&&ce.drawBuffers(E,X),ce.viewport(A),ce.scissor(L),ce.setScissorTest(y),xe){const Le=Te.get(E.texture);U.framebufferTexture2D(36160,36064,34069+O,Le.__webglTexture,j)}else if(Ee){const Le=Te.get(E.texture),Oe=O||0;U.framebufferTextureLayer(36160,36064,Le.__webglTexture,j||0,Oe)}M=-1},this.readRenderTargetPixels=function(E,O,j,N,X,xe,Ee){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ae=Ae[Ee]),Ae){ce.bindFramebuffer(36160,Ae);try{const Le=E.texture,Oe=Le.format,Ne=Le.type;if(Oe!==bn&&C.convert(Oe)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ne===Ao&&(ve.has("EXT_color_buffer_half_float")||me.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ne!==Sr&&C.convert(Ne)!==U.getParameter(35738)&&!(Ne===cr&&(me.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-N&&j>=0&&j<=E.height-X&&U.readPixels(O,j,N,X,C.convert(Oe),C.convert(Ne),xe)}finally{const Le=_!==null?Te.get(_).__webglFramebuffer:null;ce.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(E,O,j=0){const N=Math.pow(2,-j),X=Math.floor(O.image.width*N),xe=Math.floor(O.image.height*N);Me.setTexture2D(O,0),U.copyTexSubImage2D(3553,j,0,0,E.x,E.y,X,xe),ce.unbindTexture()},this.copyTextureToTexture=function(E,O,j,N=0){const X=O.image.width,xe=O.image.height,Ee=C.convert(j.format),Ae=C.convert(j.type);Me.setTexture2D(j,0),U.pixelStorei(37440,j.flipY),U.pixelStorei(37441,j.premultiplyAlpha),U.pixelStorei(3317,j.unpackAlignment),O.isDataTexture?U.texSubImage2D(3553,N,E.x,E.y,X,xe,Ee,Ae,O.image.data):O.isCompressedTexture?U.compressedTexSubImage2D(3553,N,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,Ee,O.mipmaps[0].data):U.texSubImage2D(3553,N,E.x,E.y,Ee,Ae,O.image),N===0&&j.generateMipmaps&&U.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(E,O,j,N,X=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=E.max.x-E.min.x+1,Ee=E.max.y-E.min.y+1,Ae=E.max.z-E.min.z+1,Le=C.convert(N.format),Oe=C.convert(N.type);let Ne;if(N.isData3DTexture)Me.setTexture3D(N,0),Ne=32879;else if(N.isDataArrayTexture)Me.setTexture2DArray(N,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,N.flipY),U.pixelStorei(37441,N.premultiplyAlpha),U.pixelStorei(3317,N.unpackAlignment);const ke=U.getParameter(3314),st=U.getParameter(32878),en=U.getParameter(3316),ei=U.getParameter(3315),qi=U.getParameter(32877),ot=j.isCompressedTexture?j.mipmaps[0]:j.image;U.pixelStorei(3314,ot.width),U.pixelStorei(32878,ot.height),U.pixelStorei(3316,E.min.x),U.pixelStorei(3315,E.min.y),U.pixelStorei(32877,E.min.z),j.isDataTexture||j.isData3DTexture?U.texSubImage3D(Ne,X,O.x,O.y,O.z,xe,Ee,Ae,Le,Oe,ot.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ne,X,O.x,O.y,O.z,xe,Ee,Ae,Le,ot.data)):U.texSubImage3D(Ne,X,O.x,O.y,O.z,xe,Ee,Ae,Le,Oe,ot),U.pixelStorei(3314,ke),U.pixelStorei(32878,st),U.pixelStorei(3316,en),U.pixelStorei(3315,ei),U.pixelStorei(32877,qi),X===0&&N.generateMipmaps&&U.generateMipmap(Ne),ce.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Me.setTextureCube(E,0):E.isData3DTexture?Me.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Me.setTexture2DArray(E,0):Me.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){m=0,v=0,_=null,ce.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class zw extends Jg{}zw.prototype.isWebGL1Renderer=!0;class Fw extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const pp={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Ow{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const g=u[d],x=u[d+1];if(g.global&&(g.lastIndex=0),g.test(c))return x}return null}}}const Uw=new Ow;class e0{constructor(e){this.manager=e!==void 0?e:Uw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Bw extends e0{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pp.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Po("img");function l(){c(),pp.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Vw extends e0{constructor(e){super(e)}load(e,n,i,r){const s=new Qt,o=new Bw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Gw{constructor(e,n,i=0,r=1/0){this.ray=new Vg(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Uf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Vc(e,this,i,n),i.sort(mp),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Vc(e[r],this,i,n);return i.sort(mp),i}}function mp(t,e){return t.distance-e.distance}function Vc(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Vc(r[s],e,n,!0)}}class gp{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ff}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ff);const vp={type:"change"},zu={type:"start"},_p={type:"end"};class Hw extends Cr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Dr.ROTATE,TWO:Dr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",jt),this._domElementKeyEvents=C},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(vp),i.update(),s=r.NONE},this.update=function(){const C=new B,I=new Er().setFromUnitVectors(e.up,new B(0,1,0)),ue=I.clone().invert(),he=new B,le=new Er,ge=2*Math.PI;return function(){const Re=i.object.position;C.copy(Re).sub(i.target),C.applyQuaternion(I),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&T(L()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ie=i.minAzimuthAngle,He=i.maxAzimuthAngle;return isFinite(Ie)&&isFinite(He)&&(Ie<-Math.PI?Ie+=ge:Ie>Math.PI&&(Ie-=ge),He<-Math.PI?He+=ge:He>Math.PI&&(He-=ge),Ie<=He?a.theta=Math.max(Ie,Math.min(He,a.theta)):a.theta=a.theta>(Ie+He)/2?Math.max(Ie,a.theta):Math.min(He,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),C.setFromSpherical(a),C.applyQuaternion(ue),Re.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||he.distanceToSquared(i.object.position)>o||8*(1-le.dot(i.object.quaternion))>o?(i.dispatchEvent(vp),he.copy(i.object.position),le.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",H),i.domElement.removeEventListener("pointerdown",vt),i.domElement.removeEventListener("pointercancel",zt),i.domElement.removeEventListener("wheel",vn),i.domElement.removeEventListener("pointermove",Lt),i.domElement.removeEventListener("pointerup",rt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",jt)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new gp,l=new gp;let u=1;const c=new B;let d=!1;const f=new Pe,g=new Pe,x=new Pe,h=new Pe,p=new Pe,m=new Pe,v=new Pe,_=new Pe,M=new Pe,S=[],A={};function L(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function T(C){l.theta-=C}function P(C){l.phi-=C}const $=function(){const C=new B;return function(ue,he){C.setFromMatrixColumn(he,0),C.multiplyScalar(-ue),c.add(C)}}(),Z=function(){const C=new B;return function(ue,he){i.screenSpacePanning===!0?C.setFromMatrixColumn(he,1):(C.setFromMatrixColumn(he,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(ue),c.add(C)}}(),z=function(){const C=new B;return function(ue,he){const le=i.domElement;if(i.object.isPerspectiveCamera){const ge=i.object.position;C.copy(ge).sub(i.target);let pe=C.length();pe*=Math.tan(i.object.fov/2*Math.PI/180),$(2*ue*pe/le.clientHeight,i.object.matrix),Z(2*he*pe/le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(ue*(i.object.right-i.object.left)/i.object.zoom/le.clientWidth,i.object.matrix),Z(he*(i.object.top-i.object.bottom)/i.object.zoom/le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(C){i.object.isPerspectiveCamera?u/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(C){i.object.isPerspectiveCamera?u*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(C){f.set(C.clientX,C.clientY)}function Q(C){v.set(C.clientX,C.clientY)}function R(C){h.set(C.clientX,C.clientY)}function V(C){g.set(C.clientX,C.clientY),x.subVectors(g,f).multiplyScalar(i.rotateSpeed);const I=i.domElement;T(2*Math.PI*x.x/I.clientHeight),P(2*Math.PI*x.y/I.clientHeight),f.copy(g),i.update()}function G(C){_.set(C.clientX,C.clientY),M.subVectors(_,v),M.y>0?k(y()):M.y<0&&q(y()),v.copy(_),i.update()}function re(C){p.set(C.clientX,C.clientY),m.subVectors(p,h).multiplyScalar(i.panSpeed),z(m.x,m.y),h.copy(p),i.update()}function F(C){C.deltaY<0?q(y()):C.deltaY>0&&k(y()),i.update()}function Y(C){let I=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?P(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),I=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?P(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),I=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),I=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),I=!0;break}I&&(C.preventDefault(),i.update())}function ne(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),I=.5*(S[0].pageY+S[1].pageY);f.set(C,I)}}function se(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),I=.5*(S[0].pageY+S[1].pageY);h.set(C,I)}}function U(){const C=S[0].pageX-S[1].pageX,I=S[0].pageY-S[1].pageY,ue=Math.sqrt(C*C+I*I);v.set(0,ue)}function Se(){i.enableZoom&&U(),i.enablePan&&se()}function ve(){i.enableZoom&&U(),i.enableRotate&&ne()}function me(C){if(S.length==1)g.set(C.pageX,C.pageY);else{const ue=we(C),he=.5*(C.pageX+ue.x),le=.5*(C.pageY+ue.y);g.set(he,le)}x.subVectors(g,f).multiplyScalar(i.rotateSpeed);const I=i.domElement;T(2*Math.PI*x.x/I.clientHeight),P(2*Math.PI*x.y/I.clientHeight),f.copy(g)}function ce(C){if(S.length===1)p.set(C.pageX,C.pageY);else{const I=we(C),ue=.5*(C.pageX+I.x),he=.5*(C.pageY+I.y);p.set(ue,he)}m.subVectors(p,h).multiplyScalar(i.panSpeed),z(m.x,m.y),h.copy(p)}function Ve(C){const I=we(C),ue=C.pageX-I.x,he=C.pageY-I.y,le=Math.sqrt(ue*ue+he*he);_.set(0,le),M.set(0,Math.pow(_.y/v.y,i.zoomSpeed)),k(M.y),v.copy(_)}function Te(C){i.enableZoom&&Ve(C),i.enablePan&&ce(C)}function Me(C){i.enableZoom&&Ve(C),i.enableRotate&&me(C)}function vt(C){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",Lt),i.domElement.addEventListener("pointerup",rt)),te(C),C.pointerType==="touch"?b(C):nt(C))}function Lt(C){i.enabled!==!1&&(C.pointerType==="touch"?w(C):Ue(C))}function rt(C){ie(C),S.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",Lt),i.domElement.removeEventListener("pointerup",rt)),i.dispatchEvent(_p),s=r.NONE}function zt(C){ie(C)}function nt(C){let I;switch(C.button){case 0:I=i.mouseButtons.LEFT;break;case 1:I=i.mouseButtons.MIDDLE;break;case 2:I=i.mouseButtons.RIGHT;break;default:I=-1}switch(I){case Pr.DOLLY:if(i.enableZoom===!1)return;Q(C),s=r.DOLLY;break;case Pr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;R(C),s=r.PAN}else{if(i.enableRotate===!1)return;K(C),s=r.ROTATE}break;case Pr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;K(C),s=r.ROTATE}else{if(i.enablePan===!1)return;R(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(zu)}function Ue(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;V(C);break;case r.DOLLY:if(i.enableZoom===!1)return;G(C);break;case r.PAN:if(i.enablePan===!1)return;re(C);break}}function vn(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(zu),F(C),i.dispatchEvent(_p))}function jt(C){i.enabled===!1||i.enablePan===!1||Y(C)}function b(C){switch(ae(C),S.length){case 1:switch(i.touches.ONE){case Dr.ROTATE:if(i.enableRotate===!1)return;ne(),s=r.TOUCH_ROTATE;break;case Dr.PAN:if(i.enablePan===!1)return;se(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Dr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Se(),s=r.TOUCH_DOLLY_PAN;break;case Dr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ve(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(zu)}function w(C){switch(ae(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;me(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ce(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Te(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Me(C),i.update();break;default:s=r.NONE}}function H(C){i.enabled!==!1&&C.preventDefault()}function te(C){S.push(C)}function ie(C){delete A[C.pointerId];for(let I=0;I<S.length;I++)if(S[I].pointerId==C.pointerId){S.splice(I,1);return}}function ae(C){let I=A[C.pointerId];I===void 0&&(I=new Pe,A[C.pointerId]=I),I.set(C.pageX,C.pageY)}function we(C){const I=C.pointerId===S[0].pointerId?S[1]:S[0];return A[I.pointerId]}i.domElement.addEventListener("contextmenu",H),i.domElement.addEventListener("pointerdown",vt),i.domElement.addEventListener("pointercancel",zt),i.domElement.addEventListener("wheel",vn,{passive:!1}),this.update()}}class Ww extends Vt{constructor(e=1,n=16,i=new Ze("grey"),r=2e3){const s=new Ls(2,2,1,1),o=new Gi({side:un,uniforms:{uSize1:{value:e},uSize2:{value:n},uColor:{value:i},uDistance:{value:r}},transparent:!0,alphaTest:.5,vertexShader:`
            
            varying vec3 worldPosition;
            
            uniform float uDistance;
            
            void main() {
            
                    vec3 pos = position.xzy * uDistance;
                    pos.xz += cameraPosition.xz;
                    
                    worldPosition = pos;
                    
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            
            }
            `,fragmentShader:`
            
            varying vec3 worldPosition;
            
            uniform float uSize1;
            uniform float uSize2;
            uniform vec3 uColor;
            uniform float uDistance;
                
                
                
                float getGrid(float size) {
                
                    vec2 r = worldPosition.xz / size;
                    
                    
                    vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
                    float line = min(grid.x, grid.y);
                    
                
                    return 1.0 - min(line, 1.0);
                }
                
            void main() {
            
                    
                    float d = 1.0 - min(distance(cameraPosition.xz, worldPosition.xz) / uDistance, 1.0);
                    
                    float g1 = getGrid(uSize1);
                    float g2 = getGrid(uSize2);
                    
                    
                    gl_FragColor = vec4(uColor.rgb, mix(g2, g1, g1) * pow(d, 3.0));
                    gl_FragColor.a = mix(0.5 * gl_FragColor.a, gl_FragColor.a, g2);
                    
                    if ( gl_FragColor.a <= 0.0 ) discard;
                    
            
            }
            
            `,extensions:{derivatives:!0}});super(s,o),this.frustumCulled=!1}}let qn,li,yn;function jw(){qn=new Fw,li=new En(60,(window.innerWidth-300)/window.innerHeight,.1,1e3),li.position.set(0,3,8),li.rotation.order="YXZ",yn=new Jg({antialias:!0}),yn.setSize(window.innerWidth-300,window.innerHeight),yn.setPixelRatio((window.innerWidth-300)/window.innerHeight),yn.toneMappingExposure=1,yn.shadowMap.enabled=!0,yn.shadowMap.type=Pg,document.body.appendChild(yn.domElement);const t=new Ww;t.position.set(8.5,-.5,8.5),qn.add(t);const e=new Vt(new Qn(1e5,1e5,1e-5),new Jt({color:16776960,visible:!1}));e.rotation.set(Math.PI/2,0,0),e.position.set(0,-.5,0),e.name="helpPlane",qn.add(e),n();function n(){requestAnimationFrame(n),yn.render(qn,li)}window.addEventListener("resize",i),document.oncontextmenu=document.body.oncontextmenu=function(){return!1},window.addEventListener("beforeunload",function(r){return r.stopPropagation(),r.preventDefault(),!1},!0);function i(){yn.domElement.getBoundingClientRect(),yn.setSize(window.innerWidth-300,window.innerHeight),yn.setPixelRatio((window.innerWidth-300)/window.innerHeight),li.aspect=(window.innerWidth-300)/window.innerHeight,li.updateProjectionMatrix(),be.update()}}let be;const Xw=new Vw;let xp=!0,Yn;t0("https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/deepslate_diamond_ore.png");async function t0(t){Xw.load(t,e=>{e&&(Yn=e,e.format=bn,Yn&&(Yn.minFilter=Et,Yn.magFilter=Et,n0()),xp&&(qw(),qr(0,0,0),xp=!1))})}function n0(){let t=new Jt({wireframe:!1,opacity:.5,transparent:!0,map:Yn,depthWrite:!1,side:un,alphaTest:.5});ut.material.visible=!1,ht.visible=!1,ht.children.forEach(e=>e.material.visible=!1),ut.material=t,ht.children.forEach(e=>e.material=t),ht.children[2].material=new Jt({wireframe:!1,opacity:0,transparent:!0,map:Yn,depthWrite:!1}),Bn=="Remove"&&(ht.children.forEach(e=>e.material.visible=!1),ht.visible=!1,ut.material=new Jt({wireframe:!0,opacity:1,transparent:!0,map:null}),ut.visible=!0)}function qr(t,e,n){let i;i=new Vt(new Qn(1,1,1),new Jt({map:Yn,transparent:!0})),i.name="block",qn.add(i),i.position.set(t,e,n)}let Do=!1,ut=new Vt(new Qn(1,1,1),new Jt({color:"white",wireframe:!0})),ht=new Js,i0=new Vt(new Ls(1,1),new Jt({transparent:!0,side:un,depthWrite:!1})),Vf=new Vt(new Ls(1,1),new Jt({transparent:!0,side:un,depthWrite:!1})),r0=new Vt(new Qn(1,1,1),new Jt({opacity:0,transparent:!0,depthWrite:!1}));i0.name="hoverBlock";Vf.name="hoverBlock";r0.name="hoverBlock";Vf.rotation.set(0,Math.PI/2,0);ht.add(i0);ht.add(Vf);ht.add(r0);ht.name="hoverBlock";ut.name="hoverBlock";function qw(){be=new Hw(li,yn.domElement),be.target.set(0,0,0),be.update(),be.autoRotate=!1,be.autoRotateSpeed=1,be.enableDamping=!0,be.dampingFactor=.05,be.enablePan=!0,document.addEventListener("keydown",t=>{t.keyCode===16&&(Do=!0,ut.visible=!1,ht.visible=!1,Bn!=="Inspect"&&(be.mouseButtons={LEFT:2,MIDDLE:1,RIGHT:0}))}),document.addEventListener("keyup",t=>{t.keyCode===16&&(Do=!1,ut.visible=!0,ht.visible=!0,Bn!=="Inspect"&&(be.mouseButtons={LEFT:void 0,MIDDLE:1,RIGHT:void 0}))}),be.mouseButtons={LEFT:void 0,MIDDLE:1,RIGHT:void 0},be.touches={ONE:void 0,TWO:void 0},be.screenSpacePanning=!1,be.minDistance=1,be.maxDistance=200,document.querySelector("canvas")?.addEventListener("mousemove",Yw),qn.add(ut),qn.add(ht),be.addEventListener("change",()=>{s0()}),document.querySelector("canvas")?.addEventListener("mousedown",t=>{(t.button==1||t.buttons==4)&&$w(t)}),document.querySelector("canvas")?.addEventListener("click",ir),document.querySelector("canvas")?.addEventListener("contextmenu",rr)}const yp=new Gw,Fu=new Pe;function Tl(t){Fu.x=(t.clientX-300)/(window.innerWidth-300)*2-1,Fu.y=-(t.clientY/window.innerHeight)*2+1,yp.setFromCamera(Fu,li);let e=yp.intersectObjects(qn.children);return e=e.filter(n=>n.object.name!=="hoverBlock"),e=e.filter(n=>n.object.geometry instanceof Qn),e[0]}function ir(t){if(!Do&&Bn!=="Inspect"){let e=Tl(t);e&&(e.object.name=="helpPlane"?qr(Math.round(e.point.x),Math.abs(Math.round(e.point.y+.001)),Math.round(e.point.z)):(Bn=="Build",e.face&&(e.object.parent&&e.object.parent.children.length==3?qr(Math.round(e.object.parent.position.x+e.face.normal.x),Math.abs(Math.round(e.object.parent.position.y+.001+e.face.normal.y)),Math.round(e.object.parent.position.z+e.face.normal.z)):qr(Math.round(e.object.position.x+e.face.normal.x),Math.abs(Math.round(e.object.position.y+.001+e.face.normal.y)),Math.round(e.object.position.z+e.face.normal.z)))))}}function rr(t){if(!Do&&Bn!=="Inspect"){let e=Tl(t);e&&e.object.name!=="helpPlane"&&e.object.name!=="hoverBlock"&&(e.object.parent&&e.object.parent.children.length==3?qn.remove(e.object.parent):qn.remove(e.object))}}let et;function Yw(t){if(et=ut,ht.children.forEach(e=>e.material.visible=!1),ht.visible=!1,Bn=="Remove"&&(et=ut,ht.children.forEach(e=>e.material.visible=!1),ht.visible=!1,ut.material.visible=!0,ut.visible=!0),!Do&&Bn!=="Inspect"){et.children.length>0?(et.children.forEach(n=>n.material.visible=!0),et.visible=!0):et.material.visible=!0;let e=Tl(t);if(e)if(e.object.name=="helpPlane")et.position.set(Math.round(e.point.x),Math.abs(Math.round(e.point.y+.001)),Math.round(e.point.z));else if(Bn=="Build"){let n=new Jt({wireframe:!1,opacity:.5,transparent:!0,map:Yn,depthWrite:!1,side:un});et.children.length>0?(et.children.forEach(i=>i.material=n),et.children[2].material=new Jt({wireframe:!1,opacity:0,transparent:!0,map:Yn,depthWrite:!1})):et.material=n,e.face&&(e.object.parent&&e.object.parent.children.length==3?et.position.set(Math.round(e.object.parent.position.x+e.face.normal.x),Math.abs(Math.round(e.object.parent.position.y+.001+e.face.normal.y)),Math.round(e.object.parent.position.z+e.face.normal.z)):(e.object.parent&&e.object.parent.children.length==3,et.position.set(Math.round(e.object.position.x+e.face.normal.x),Math.abs(Math.round(e.object.position.y+.001+e.face.normal.y)),Math.round(e.object.position.z+e.face.normal.z))))}else{let n=new Jt({wireframe:!0,opacity:1,transparent:!0,map:null});et.children.length>0?et.children.forEach(i=>i.material=n):et.material=n,e.object.parent&&e.object.parent.children.length==3?et.position.set(Math.round(e.object.parent.position.x),Math.abs(Math.round(e.object.parent.position.y+.001)),Math.round(e.object.parent.position.z)):et.position.set(Math.round(e.object.position.x),Math.abs(Math.round(e.object.position.y+.001)),Math.round(e.object.position.z))}}else et.children.length>0?et.children.forEach(e=>e.material.visible=!0):et.material.visible=!0}function $w(t){let e=Tl(t);e&&e.object.name!=="helpPlane"&&e.object.name!=="hoverBlock"&&(Yn=e.object.material.map)}function Zw(){switch(Bn){case"Build":be.mouseButtons={LEFT:void 0,MIDDLE:1,RIGHT:void 0},document.querySelector("canvas")?.removeEventListener("click",ir),document.querySelector("canvas")?.removeEventListener("contextmenu",rr),document.querySelector("canvas")?.removeEventListener("click",rr),document.querySelector("canvas")?.removeEventListener("contextmenu",ir),document.querySelector("canvas")?.addEventListener("click",ir),document.querySelector("canvas")?.addEventListener("contextmenu",rr),n0();break;case"Inspect":ut.material.visible=!1,ht.children.forEach(t=>t.material.visible=!1),ht.visible=!1,be.mouseButtons={LEFT:0,MIDDLE:1,RIGHT:2};break;case"Remove":be.mouseButtons={LEFT:void 0,MIDDLE:1,RIGHT:void 0},document.querySelector("canvas")?.removeEventListener("click",ir),document.querySelector("canvas")?.removeEventListener("contextmenu",rr),document.querySelector("canvas")?.removeEventListener("click",rr),document.querySelector("canvas")?.removeEventListener("contextmenu",ir),document.querySelector("canvas")?.addEventListener("click",rr),document.querySelector("canvas")?.addEventListener("contextmenu",ir),ut.material.map=null,ut.material.opacity=1,ut.material.transparent=!0,ut.material.wireframe=!0,ut.material.needsUpdate=!0,ut.visible=!0,ut.material.visible=!0;break}}const Kw=()=>{const[t,e]=an.useState([]);return an.useEffect(()=>{(async()=>{let r=(await th(()=>import("./textures-5599cd7a.js"),[])).default;r=r.filter(o=>o.name.slice(-7)!==".mcmeta"),(await th(()=>import("./noCubeBlocks-5a1f1ba5.js"),[])).default,e(r)})()},[]),ye("div",{className:"grid grid-cols-4 w-full",children:t.map(n=>lt("div",{onClick:Qw,className:"relative basis-1/3 flex flex-wrap justify-center",children:[ye("img",{src:n.download_url,alt:"block",className:"textures w-14 h-14 aspect-square select-none pointer-events-none"}),ye("label",{className:"break-words text-sm select-none",children:n.name.slice(0,n.name.length-4).replaceAll("_"," ")})]},n.name))})};function Qw(t){t0(t.currentTarget.querySelector("img").getAttribute("src")),t.currentTarget.querySelector("label").innerText}let Bn="Build",s0;function Jw(){const[t,e]=an.useState(""),n=v=>{e(v.target.value)};t||e("My first build");const[i,r]=an.useState(""),s=v=>{r(String(Math.max(Math.min(Number(v.target.value),be.maxDistance),be.minDistance))),li.position.setLength(Number(Math.max(Math.min(be.maxDistance-Number(v.target.value)+.5,be.maxDistance),be.minDistance)))};s0=function(){r(String(Math.round(be.maxDistance-be.getDistance()+.5))),a(String(Math.round(be.target.x))),u(String(Math.round(be.target.y))),d(String(Math.round(be.target.z)))},i||r("192");const[o,a]=an.useState(""),[l,u]=an.useState(""),[c,d]=an.useState(""),f=v=>{a(String(Math.max(Math.min(Number(v.target.value),1e4),-1e4))),be.target.set(Number(Math.max(Math.min(Number(v.target.value),1e4),-1e4)),be.target.y,be.target.z),be.update()},g=v=>{u(String(Math.max(Math.min(Number(v.target.value),1e4),-1e4))),be.target.set(be.target.x,Number(Math.max(Math.min(Number(v.target.value),1e4),-1e4)),be.target.z),be.update()},x=v=>{d(String(Math.max(Math.min(Number(v.target.value),1e4),-1e4))),be.target.set(be.target.x,be.target.y,Number(Math.max(Math.min(Number(v.target.value),1e4),-1e4))),be.update()};o||a("0"),l||u("0"),c||d("0");const[h,p]=an.useState("");h||p("Build");function m(v){p(v.currentTarget.querySelector("label").innerText),Bn=v.currentTarget.querySelector("label").innerText,Zw()}return ye("div",{className:"App h-full w-full",children:lt("div",{className:"threeSceneInterface h-full w-full overflow-hidden pointer-events-none grid grid-rows-[52px_1fr]",children:[lt("div",{className:" bg-fourthcolor z-30 grid grid-cols-[300px_25%_1fr_34%] text-firstcolor",children:[lt("div",{className:"flex items-center",children:[ye("img",{className:"ml-5 aspect-square h-9 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/whiteLogo.svg",alt:""}),ye("label",{className:"text-xl ml-4 font-medium text-thirdcolor",children:"Builder 3D"})]}),lt("div",{className:"flex items-center",children:[ye("button",{className:"h-full w-24 ",children:"Undo"}),ye("button",{className:"h-full w-24",children:"Redo"}),ye("button",{className:" h-full w-24 ",children:"Create"})]}),lt("div",{className:"flex items-center justify-center text-thirdcolor",children:[ye("button",{className:"outline-none",children:"Droxus228"}),ye("label",{className:" mx-2",children:"/"}),ye("input",{className:" bg-transparent outline-none",type:"text",value:t,onChange:n})]}),lt("div",{className:"flex items-center justify-end",children:[ye("button",{className:"h-full w-24 ",children:"Save"}),ye("button",{className:"h-full w-24",children:"Scene"}),ye("button",{className:" h-full w-24 ",children:"Import"}),ye("button",{className:"h-full w-24",children:"Export"}),ye("button",{className:" h-full w-24 ",children:"Share"})]})]}),lt("div",{className:"leftBlock absolute grid grid-rows-[200px_1fr_200px] h-full w-300  bg-firstcolor text-secondcolor",children:[lt("div",{className:"pt-20 relative z-10",children:[lt("div",{className:"grid grid-cols-[40px_1fr_40px] border-fourthcolor border-b-2",children:[ye("button",{className:"flex place-content-center items-center",children:ye("img",{className:"h-6 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/f49bd3b0400ae10036bbf4da1a187c7b7ce1647d/src/assets/img/cross.svg",alt:""})}),ye("input",{className:"bg-transparent px-2 h-10 outline-none text-center text-lg",type:"text",placeholder:"Find Block"}),ye("button",{className:"flex place-content-center items-center",children:ye("img",{className:"h-6 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/a416881d778c508fe7211f86fe9d52ef3a6730c1/src/assets/img/search.svg",alt:""})})]}),lt("div",{className:"mt-2 flex",children:[ye("button",{className:"flex-1",children:"Blocks"}),ye("button",{className:"flex-1",children:"Slabs"}),ye("button",{className:"flex-1",children:"Stairs"})]}),ye("div",{className:"h-28 bg-gradient-to-b from-firstcolor to-transparent"})]}),ye("div",{className:"texturePickBlock relative h-texturePick overflow-scroll overflow-x-hidden z-1 -mt-8 py-24",children:ye(Kw,{})}),lt("div",{className:"z-20 -mt-8",children:[ye("div",{className:"h-28 bg-gradient-to-t from-firstcolor to-transparent"}),lt("div",{className:" pt-4 h-21",children:[ye("label",{className:" text-lg font-medium",children:"Mods"}),lt("div",{className:"flex mt-2 h-full",children:[lt("button",{className:` flex-1 rounded-none ${h=="Build"?" opacity-100":"opacity-40"}`,onClick:m,children:[ye("div",{className:"w-full flex justify-center",children:ye("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/build.svg",alt:""})}),ye("label",{children:"Build"})]}),lt("button",{className:` flex-1 rounded-none ${h=="Inspect"?" opacity-100":"opacity-40"}`,onClick:m,children:[ye("div",{className:"w-full flex justify-center",children:ye("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/inspect.svg",alt:""})}),ye("label",{children:"Inspect"})]}),lt("button",{className:` flex-1 rounded-none ${h=="Remove"?" opacity-100":"opacity-40"}`,onClick:m,children:[ye("div",{className:"w-full flex justify-center",children:ye("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/remove.svg",alt:""})}),ye("label",{children:"Remove"})]})]})]})]})]}),lt("div",{className:" absolute top-full left-full -translate-x-120 -translate-y-14 w-120 h-10 flex items-center backdrop-blur-sm bg-black/1 text-firstcolor font-normal",children:[lt("div",{className:" h-8 w-40 flex items-center ",children:[ye("label",{className:" w-12",children:"Scale"}),ye("input",{id:"scaleInput",className:" w-14 bg-transparent text-right",type:"number",value:i,onChange:s}),ye("label",{children:"%"})]}),lt("div",{className:" h-8 w-80 flex items-center",children:[ye("label",{className:" w-24",children:"Position"}),ye("label",{children:"x:"}),ye("input",{className:"modsButton w-16 bg-transparent text-center",type:"number",value:o,onChange:f}),ye("label",{children:"y:"}),ye("input",{className:" w-16 bg-transparent text-center",type:"number",value:l,onChange:g}),ye("label",{children:"z:"}),ye("input",{className:" w-16 bg-transparent text-center",type:"number",value:c,onChange:x})]})]})]})})}jw();Ou.createRoot(document.getElementById("root")).render(ye(A0.StrictMode,{children:ye(Jw,{})}));
