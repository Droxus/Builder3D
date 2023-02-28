(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Jg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var La={},e0={get exports(){return La},set exports(t){La=t}},el={},Ri={},t0={get exports(){return Ri},set exports(t){Ri=t}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),n0=Symbol.for("react.portal"),i0=Symbol.for("react.fragment"),r0=Symbol.for("react.strict_mode"),s0=Symbol.for("react.profiler"),o0=Symbol.for("react.provider"),a0=Symbol.for("react.context"),l0=Symbol.for("react.forward_ref"),u0=Symbol.for("react.suspense"),c0=Symbol.for("react.memo"),f0=Symbol.for("react.lazy"),Uf=Symbol.iterator;function d0(t){return t===null||typeof t!="object"?null:(t=Uf&&t[Uf]||t["@@iterator"],typeof t=="function"?t:null)}var pp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mp=Object.assign,gp={};function xs(t,e,n){this.props=t,this.context=e,this.refs=gp,this.updater=n||pp}xs.prototype.isReactComponent={};xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _p(){}_p.prototype=xs.prototype;function Fc(t,e,n){this.props=t,this.context=e,this.refs=gp,this.updater=n||pp}var zc=Fc.prototype=new _p;zc.constructor=Fc;mp(zc,xs.prototype);zc.isPureReactComponent=!0;var Bf=Array.isArray,vp=Object.prototype.hasOwnProperty,Oc={current:null},xp={key:!0,ref:!0,__self:!0,__source:!0};function yp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vp.call(e,i)&&!xp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:wo,type:t,key:s,ref:o,props:r,_owner:Oc.current}}function h0(t,e){return{$$typeof:wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Uc(t){return typeof t=="object"&&t!==null&&t.$$typeof===wo}function p0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vf=/\/+/g;function El(t,e){return typeof t=="object"&&t!==null&&t.key!=null?p0(""+t.key):e.toString(36)}function ma(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wo:case n0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+El(o,0):i,Bf(r)?(n="",t!=null&&(n=t.replace(Vf,"$&/")+"/"),ma(r,e,n,"",function(u){return u})):r!=null&&(Uc(r)&&(r=h0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Vf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Bf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+El(s,a);o+=ma(s,e,n,l,r)}else if(l=d0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+El(s,a++),o+=ma(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ro(t,e,n){if(t==null)return t;var i=[],r=0;return ma(t,i,"","",function(s){return e.call(n,s,r++)}),i}function m0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ot={current:null},ga={transition:null},g0={ReactCurrentDispatcher:Ot,ReactCurrentBatchConfig:ga,ReactCurrentOwner:Oc};Le.Children={map:Ro,forEach:function(t,e,n){Ro(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ro(t,function(){e++}),e},toArray:function(t){return Ro(t,function(e){return e})||[]},only:function(t){if(!Uc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Le.Component=xs;Le.Fragment=i0;Le.Profiler=s0;Le.PureComponent=Fc;Le.StrictMode=r0;Le.Suspense=u0;Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g0;Le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=mp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Oc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)vp.call(e,l)&&!xp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:wo,type:t.type,key:r,ref:s,props:i,_owner:o}};Le.createContext=function(t){return t={$$typeof:a0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:o0,_context:t},t.Consumer=t};Le.createElement=yp;Le.createFactory=function(t){var e=yp.bind(null,t);return e.type=t,e};Le.createRef=function(){return{current:null}};Le.forwardRef=function(t){return{$$typeof:l0,render:t}};Le.isValidElement=Uc;Le.lazy=function(t){return{$$typeof:f0,_payload:{_status:-1,_result:t},_init:m0}};Le.memo=function(t,e){return{$$typeof:c0,type:t,compare:e===void 0?null:e}};Le.startTransition=function(t){var e=ga.transition;ga.transition={};try{t()}finally{ga.transition=e}};Le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Le.useCallback=function(t,e){return Ot.current.useCallback(t,e)};Le.useContext=function(t){return Ot.current.useContext(t)};Le.useDebugValue=function(){};Le.useDeferredValue=function(t){return Ot.current.useDeferredValue(t)};Le.useEffect=function(t,e){return Ot.current.useEffect(t,e)};Le.useId=function(){return Ot.current.useId()};Le.useImperativeHandle=function(t,e,n){return Ot.current.useImperativeHandle(t,e,n)};Le.useInsertionEffect=function(t,e){return Ot.current.useInsertionEffect(t,e)};Le.useLayoutEffect=function(t,e){return Ot.current.useLayoutEffect(t,e)};Le.useMemo=function(t,e){return Ot.current.useMemo(t,e)};Le.useReducer=function(t,e,n){return Ot.current.useReducer(t,e,n)};Le.useRef=function(t){return Ot.current.useRef(t)};Le.useState=function(t){return Ot.current.useState(t)};Le.useSyncExternalStore=function(t,e,n){return Ot.current.useSyncExternalStore(t,e,n)};Le.useTransition=function(){return Ot.current.useTransition()};Le.version="18.2.0";(function(t){t.exports=Le})(t0);const _0=Jg(Ri);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0=Ri,x0=Symbol.for("react.element"),y0=Symbol.for("react.fragment"),S0=Object.prototype.hasOwnProperty,M0=v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w0={key:!0,ref:!0,__self:!0,__source:!0};function Sp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)S0.call(e,i)&&!w0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:x0,type:t,key:s,ref:o,props:r,_owner:M0.current}}el.Fragment=y0;el.jsx=Sp;el.jsxs=Sp;(function(t){t.exports=el})(e0);const ke=La.jsx,Vt=La.jsxs;var Du={},Ru={},E0={get exports(){return Ru},set exports(t){Ru=t}},un={},Iu={},T0={get exports(){return Iu},set exports(t){Iu=t}},Mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,V){var G=R.length;R.push(V);e:for(;0<G;){var re=G-1>>>1,z=R[re];if(0<r(z,V))R[re]=V,R[G]=z,G=re;else break e}}function n(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var V=R[0],G=R.pop();if(G!==V){R[0]=G;e:for(var re=0,z=R.length,Y=z>>>1;re<Y;){var ne=2*(re+1)-1,se=R[ne],U=ne+1,ye=R[U];if(0>r(se,G))U<z&&0>r(ye,se)?(R[re]=ye,R[U]=G,re=U):(R[re]=se,R[ne]=G,re=ne);else if(U<z&&0>r(ye,G))R[re]=ye,R[U]=G,re=U;else break e}}return V}function r(R,V){var G=R.sortIndex-V.sortIndex;return G!==0?G:R.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,x=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var V=n(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=R)i(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function M(R){if(h=!1,v(R),!x)if(n(l)!==null)x=!0,K(S);else{var V=n(u);V!==null&&Q(M,V.startTime-R)}}function S(R,V){x=!1,h&&(h=!1,g(y),y=-1),m=!0;var G=f;try{for(v(V),d=n(l);d!==null&&(!(d.expirationTime>V)||R&&!$());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var z=re(d.expirationTime<=V);V=t.unstable_now(),typeof z=="function"?d.callback=z:d===n(l)&&i(l),v(V)}else i(l);d=n(l)}if(d!==null)var Y=!0;else{var ne=n(u);ne!==null&&Q(M,ne.startTime-V),Y=!1}return Y}finally{d=null,f=G,m=!1}}var A=!1,L=null,y=-1,b=5,P=-1;function $(){return!(t.unstable_now()-P<b)}function Z(){if(L!==null){var R=t.unstable_now();P=R;var V=!0;try{V=L(!0,R)}finally{V?F():(A=!1,L=null)}}else A=!1}var F;if(typeof _=="function")F=function(){_(Z)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,q=k.port2;k.port1.onmessage=Z,F=function(){q.postMessage(null)}}else F=function(){p(Z,0)};function K(R){L=R,A||(A=!0,F())}function Q(R,V){y=p(function(){R(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,K(S))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var G=f;f=V;try{return R()}finally{f=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,V){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var G=f;f=R;try{return V()}finally{f=G}},t.unstable_scheduleCallback=function(R,V,G){var re=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?re+G:re):G=re,R){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=G+z,R={id:c++,callback:V,priorityLevel:R,startTime:G,expirationTime:z,sortIndex:-1},G>re?(R.sortIndex=G,e(u,R),n(l)===null&&R===n(u)&&(h?(g(y),y=-1):h=!0,Q(M,G-re))):(R.sortIndex=z,e(l,R),x||m||(x=!0,K(S))),R},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(R){var V=f;return function(){var G=f;f=V;try{return R.apply(this,arguments)}finally{f=G}}}})(Mp);(function(t){t.exports=Mp})(T0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp=Ri,ln=Iu;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ep=new Set,eo={};function vr(t,e){ls(t,e),ls(t+"Capture",e)}function ls(t,e){for(eo[t]=e,t=0;t<e.length;t++)Ep.add(e[t])}var si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=Object.prototype.hasOwnProperty,b0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gf={},Hf={};function C0(t){return Nu.call(Hf,t)?!0:Nu.call(Gf,t)?!1:b0.test(t)?Hf[t]=!0:(Gf[t]=!0,!1)}function A0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L0(t,e,n,i){if(e===null||typeof e>"u"||A0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){wt[t]=new Ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];wt[e]=new Ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){wt[t]=new Ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){wt[t]=new Ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){wt[t]=new Ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){wt[t]=new Ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){wt[t]=new Ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){wt[t]=new Ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){wt[t]=new Ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bc=/[\-:]([a-z])/g;function Vc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bc,Vc);wt[e]=new Ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bc,Vc);wt[e]=new Ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bc,Vc);wt[e]=new Ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){wt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!1,!1)});wt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){wt[t]=new Ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gc(t,e,n,i){var r=wt.hasOwnProperty(e)?wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(L0(e,n,r,i)&&(n=null),i||r===null?C0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ui=wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),Hc=Symbol.for("react.strict_mode"),ku=Symbol.for("react.profiler"),Tp=Symbol.for("react.provider"),bp=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),Fu=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),jc=Symbol.for("react.memo"),mi=Symbol.for("react.lazy"),Cp=Symbol.for("react.offscreen"),Wf=Symbol.iterator;function Es(t){return t===null||typeof t!="object"?null:(t=Wf&&t[Wf]||t["@@iterator"],typeof t=="function"?t:null)}var Qe=Object.assign,Tl;function Us(t){if(Tl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Tl=e&&e[1]||""}return`
`+Tl+t}var bl=!1;function Cl(t,e){if(!t||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Us(t):""}function P0(t){switch(t.tag){case 5:return Us(t.type);case 16:return Us("Lazy");case 13:return Us("Suspense");case 19:return Us("SuspenseList");case 0:case 2:case 15:return t=Cl(t.type,!1),t;case 11:return t=Cl(t.type.render,!1),t;case 1:return t=Cl(t.type,!0),t;default:return""}}function Ou(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gr:return"Fragment";case Vr:return"Portal";case ku:return"Profiler";case Hc:return"StrictMode";case Fu:return"Suspense";case zu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bp:return(t.displayName||"Context")+".Consumer";case Tp:return(t._context.displayName||"Context")+".Provider";case Wc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jc:return e=t.displayName||null,e!==null?e:Ou(t.type)||"Memo";case mi:e=t._payload,t=t._init;try{return Ou(t(e))}catch{}}return null}function D0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ou(e);case 8:return e===Hc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ii(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ap(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function R0(t){var e=Ap(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function No(t){t._valueTracker||(t._valueTracker=R0(t))}function Lp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ap(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Pa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uu(t,e){var n=e.checked;return Qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ii(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pp(t,e){e=e.checked,e!=null&&Gc(t,"checked",e,!1)}function Bu(t,e){Pp(t,e);var n=Ii(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vu(t,e.type,Ii(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vu(t,e,n){(e!=="number"||Pa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bs=Array.isArray;function es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ii(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return Qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(Bs(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ii(n)}}function Dp(t,e){var n=Ii(e.value),i=Ii(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Yf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Rp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Rp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ko,Ip=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function to(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I0=["Webkit","ms","Moz","O"];Object.keys(js).forEach(function(t){I0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),js[e]=js[t]})});function Np(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||js.hasOwnProperty(t)&&js[t]?(""+e).trim():e+"px"}function kp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Np(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var N0=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wu(t,e){if(e){if(N0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function ju(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xu=null;function Xc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qu=null,ts=null,ns=null;function $f(t){if(t=bo(t)){if(typeof qu!="function")throw Error(J(280));var e=t.stateNode;e&&(e=sl(e),qu(t.stateNode,t.type,e))}}function Fp(t){ts?ns?ns.push(t):ns=[t]:ts=t}function zp(){if(ts){var t=ts,e=ns;if(ns=ts=null,$f(t),e)for(t=0;t<e.length;t++)$f(e[t])}}function Op(t,e){return t(e)}function Up(){}var Al=!1;function Bp(t,e,n){if(Al)return t(e,n);Al=!0;try{return Op(t,e,n)}finally{Al=!1,(ts!==null||ns!==null)&&(Up(),zp())}}function no(t,e){var n=t.stateNode;if(n===null)return null;var i=sl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var Yu=!1;if(si)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){Yu=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{Yu=!1}function k0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Xs=!1,Da=null,Ra=!1,$u=null,F0={onError:function(t){Xs=!0,Da=t}};function z0(t,e,n,i,r,s,o,a,l){Xs=!1,Da=null,k0.apply(F0,arguments)}function O0(t,e,n,i,r,s,o,a,l){if(z0.apply(this,arguments),Xs){if(Xs){var u=Da;Xs=!1,Da=null}else throw Error(J(198));Ra||(Ra=!0,$u=u)}}function xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Vp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zf(t){if(xr(t)!==t)throw Error(J(188))}function U0(t){var e=t.alternate;if(!e){if(e=xr(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Zf(r),t;if(s===i)return Zf(r),e;s=s.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function Gp(t){return t=U0(t),t!==null?Hp(t):null}function Hp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hp(t);if(e!==null)return e;t=t.sibling}return null}var Wp=ln.unstable_scheduleCallback,Kf=ln.unstable_cancelCallback,B0=ln.unstable_shouldYield,V0=ln.unstable_requestPaint,tt=ln.unstable_now,G0=ln.unstable_getCurrentPriorityLevel,qc=ln.unstable_ImmediatePriority,jp=ln.unstable_UserBlockingPriority,Ia=ln.unstable_NormalPriority,H0=ln.unstable_LowPriority,Xp=ln.unstable_IdlePriority,tl=null,Gn=null;function W0(t){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(tl,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:q0,j0=Math.log,X0=Math.LN2;function q0(t){return t>>>=0,t===0?32:31-(j0(t)/X0|0)|0}var Fo=64,zo=4194304;function Vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Na(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Vs(a):(s&=o,s!==0&&(i=Vs(s)))}else o=n&~r,o!==0?i=Vs(o):s!==0&&(i=Vs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-In(e),r=1<<n,i|=t[n],e&=~r;return i}function Y0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Y0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qp(){var t=Fo;return Fo<<=1,!(Fo&4194240)&&(Fo=64),t}function Ll(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Eo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function Z0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-In(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Yc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-In(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ve=0;function Yp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $p,$c,Zp,Kp,Qp,Ku=!1,Oo=[],wi=null,Ei=null,Ti=null,io=new Map,ro=new Map,vi=[],K0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(t,e){switch(t){case"focusin":case"focusout":wi=null;break;case"dragenter":case"dragleave":Ei=null;break;case"mouseover":case"mouseout":Ti=null;break;case"pointerover":case"pointerout":io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(e.pointerId)}}function bs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=bo(e),e!==null&&$c(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Q0(t,e,n,i,r){switch(e){case"focusin":return wi=bs(wi,t,e,n,i,r),!0;case"dragenter":return Ei=bs(Ei,t,e,n,i,r),!0;case"mouseover":return Ti=bs(Ti,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return io.set(s,bs(io.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ro.set(s,bs(ro.get(s)||null,t,e,n,i,r)),!0}return!1}function Jp(t){var e=Ji(t.target);if(e!==null){var n=xr(e);if(n!==null){if(e=n.tag,e===13){if(e=Vp(n),e!==null){t.blockedOn=e,Qp(t.priority,function(){Zp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _a(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Xu=i,n.target.dispatchEvent(i),Xu=null}else return e=bo(n),e!==null&&$c(e),t.blockedOn=n,!1;e.shift()}return!0}function Jf(t,e,n){_a(t)&&n.delete(e)}function J0(){Ku=!1,wi!==null&&_a(wi)&&(wi=null),Ei!==null&&_a(Ei)&&(Ei=null),Ti!==null&&_a(Ti)&&(Ti=null),io.forEach(Jf),ro.forEach(Jf)}function Cs(t,e){t.blockedOn===e&&(t.blockedOn=null,Ku||(Ku=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,J0)))}function so(t){function e(r){return Cs(r,t)}if(0<Oo.length){Cs(Oo[0],t);for(var n=1;n<Oo.length;n++){var i=Oo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(wi!==null&&Cs(wi,t),Ei!==null&&Cs(Ei,t),Ti!==null&&Cs(Ti,t),io.forEach(e),ro.forEach(e),n=0;n<vi.length;n++)i=vi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<vi.length&&(n=vi[0],n.blockedOn===null);)Jp(n),n.blockedOn===null&&vi.shift()}var is=ui.ReactCurrentBatchConfig,ka=!0;function e_(t,e,n,i){var r=Ve,s=is.transition;is.transition=null;try{Ve=1,Zc(t,e,n,i)}finally{Ve=r,is.transition=s}}function t_(t,e,n,i){var r=Ve,s=is.transition;is.transition=null;try{Ve=4,Zc(t,e,n,i)}finally{Ve=r,is.transition=s}}function Zc(t,e,n,i){if(ka){var r=Qu(t,e,n,i);if(r===null)Ul(t,e,i,Fa,n),Qf(t,i);else if(Q0(r,t,e,n,i))i.stopPropagation();else if(Qf(t,i),e&4&&-1<K0.indexOf(t)){for(;r!==null;){var s=bo(r);if(s!==null&&$p(s),s=Qu(t,e,n,i),s===null&&Ul(t,e,i,Fa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ul(t,e,i,null,n)}}var Fa=null;function Qu(t,e,n,i){if(Fa=null,t=Xc(i),t=Ji(t),t!==null)if(e=xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Vp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fa=t,null}function em(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G0()){case qc:return 1;case jp:return 4;case Ia:case H0:return 16;case Xp:return 536870912;default:return 16}default:return 16}}var yi=null,Kc=null,va=null;function tm(){if(va)return va;var t,e=Kc,n=e.length,i,r="value"in yi?yi.value:yi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return va=r.slice(t,1<i?1-i:void 0)}function xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Uo(){return!0}function ed(){return!1}function cn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Uo:ed,this.isPropagationStopped=ed,this}return Qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qc=cn(ys),To=Qe({},ys,{view:0,detail:0}),n_=cn(To),Pl,Dl,As,nl=Qe({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(Pl=t.screenX-As.screenX,Dl=t.screenY-As.screenY):Dl=Pl=0,As=t),Pl)},movementY:function(t){return"movementY"in t?t.movementY:Dl}}),td=cn(nl),i_=Qe({},nl,{dataTransfer:0}),r_=cn(i_),s_=Qe({},To,{relatedTarget:0}),Rl=cn(s_),o_=Qe({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),a_=cn(o_),l_=Qe({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),u_=cn(l_),c_=Qe({},ys,{data:0}),nd=cn(c_),f_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=h_[t])?!!e[t]:!1}function Jc(){return p_}var m_=Qe({},To,{key:function(t){if(t.key){var e=f_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?d_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(t){return t.type==="keypress"?xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),g_=cn(m_),__=Qe({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),id=cn(__),v_=Qe({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),x_=cn(v_),y_=Qe({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),S_=cn(y_),M_=Qe({},nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),w_=cn(M_),E_=[9,13,27,32],ef=si&&"CompositionEvent"in window,qs=null;si&&"documentMode"in document&&(qs=document.documentMode);var T_=si&&"TextEvent"in window&&!qs,nm=si&&(!ef||qs&&8<qs&&11>=qs),rd=String.fromCharCode(32),sd=!1;function im(t,e){switch(t){case"keyup":return E_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function b_(t,e){switch(t){case"compositionend":return rm(e);case"keypress":return e.which!==32?null:(sd=!0,rd);case"textInput":return t=e.data,t===rd&&sd?null:t;default:return null}}function C_(t,e){if(Hr)return t==="compositionend"||!ef&&im(t,e)?(t=tm(),va=Kc=yi=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nm&&e.locale!=="ko"?null:e.data;default:return null}}var A_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!A_[t.type]:e==="textarea"}function sm(t,e,n,i){Fp(i),e=za(e,"onChange"),0<e.length&&(n=new Qc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ys=null,oo=null;function L_(t){gm(t,0)}function il(t){var e=Xr(t);if(Lp(e))return t}function P_(t,e){if(t==="change")return e}var om=!1;if(si){var Il;if(si){var Nl="oninput"in document;if(!Nl){var ad=document.createElement("div");ad.setAttribute("oninput","return;"),Nl=typeof ad.oninput=="function"}Il=Nl}else Il=!1;om=Il&&(!document.documentMode||9<document.documentMode)}function ld(){Ys&&(Ys.detachEvent("onpropertychange",am),oo=Ys=null)}function am(t){if(t.propertyName==="value"&&il(oo)){var e=[];sm(e,oo,t,Xc(t)),Bp(L_,e)}}function D_(t,e,n){t==="focusin"?(ld(),Ys=e,oo=n,Ys.attachEvent("onpropertychange",am)):t==="focusout"&&ld()}function R_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(oo)}function I_(t,e){if(t==="click")return il(e)}function N_(t,e){if(t==="input"||t==="change")return il(e)}function k_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:k_;function ao(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Nu.call(e,r)||!kn(t[r],e[r]))return!1}return!0}function ud(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cd(t,e){var n=ud(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ud(n)}}function lm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function um(){for(var t=window,e=Pa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pa(t.document)}return e}function tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function F_(t){var e=um(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lm(n.ownerDocument.documentElement,n)){if(i!==null&&tf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=cd(n,s);var o=cd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var z_=si&&"documentMode"in document&&11>=document.documentMode,Wr=null,Ju=null,$s=null,ec=!1;function fd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ec||Wr==null||Wr!==Pa(i)||(i=Wr,"selectionStart"in i&&tf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$s&&ao($s,i)||($s=i,i=za(Ju,"onSelect"),0<i.length&&(e=new Qc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Wr)))}function Bo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var jr={animationend:Bo("Animation","AnimationEnd"),animationiteration:Bo("Animation","AnimationIteration"),animationstart:Bo("Animation","AnimationStart"),transitionend:Bo("Transition","TransitionEnd")},kl={},cm={};si&&(cm=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function rl(t){if(kl[t])return kl[t];if(!jr[t])return t;var e=jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cm)return kl[t]=e[n];return t}var fm=rl("animationend"),dm=rl("animationiteration"),hm=rl("animationstart"),pm=rl("transitionend"),mm=new Map,dd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zi(t,e){mm.set(t,e),vr(e,[t])}for(var Fl=0;Fl<dd.length;Fl++){var zl=dd[Fl],O_=zl.toLowerCase(),U_=zl[0].toUpperCase()+zl.slice(1);zi(O_,"on"+U_)}zi(fm,"onAnimationEnd");zi(dm,"onAnimationIteration");zi(hm,"onAnimationStart");zi("dblclick","onDoubleClick");zi("focusin","onFocus");zi("focusout","onBlur");zi(pm,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));function hd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,O0(i,e,void 0,t),t.currentTarget=null}function gm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;hd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;hd(r,a,u),s=l}}}if(Ra)throw t=$u,Ra=!1,$u=null,t}function We(t,e){var n=e[sc];n===void 0&&(n=e[sc]=new Set);var i=t+"__bubble";n.has(i)||(_m(e,t,2,!1),n.add(i))}function Ol(t,e,n){var i=0;e&&(i|=4),_m(n,t,i,e)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[Vo]){t[Vo]=!0,Ep.forEach(function(n){n!=="selectionchange"&&(B_.has(n)||Ol(n,!1,t),Ol(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vo]||(e[Vo]=!0,Ol("selectionchange",!1,e))}}function _m(t,e,n,i){switch(em(e)){case 1:var r=e_;break;case 4:r=t_;break;default:r=Zc}n=r.bind(null,e,n,t),r=void 0,!Yu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ul(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ji(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Bp(function(){var u=s,c=Xc(n),d=[];e:{var f=mm.get(t);if(f!==void 0){var m=Qc,x=t;switch(t){case"keypress":if(xa(n)===0)break e;case"keydown":case"keyup":m=g_;break;case"focusin":x="focus",m=Rl;break;case"focusout":x="blur",m=Rl;break;case"beforeblur":case"afterblur":m=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=r_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=x_;break;case fm:case dm:case hm:m=a_;break;case pm:m=S_;break;case"scroll":m=n_;break;case"wheel":m=w_;break;case"copy":case"cut":case"paste":m=u_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=id}var h=(e&4)!==0,p=!h&&t==="scroll",g=h?f!==null?f+"Capture":null:f;h=[];for(var _=u,v;_!==null;){v=_;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,g!==null&&(M=no(_,g),M!=null&&h.push(uo(_,M,v)))),p)break;_=_.return}0<h.length&&(f=new m(f,x,null,n,c),d.push({event:f,listeners:h}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Xu&&(x=n.relatedTarget||n.fromElement)&&(Ji(x)||x[oi]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?Ji(x):null,x!==null&&(p=xr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(h=td,M="onMouseLeave",g="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(h=id,M="onPointerLeave",g="onPointerEnter",_="pointer"),p=m==null?f:Xr(m),v=x==null?f:Xr(x),f=new h(M,_+"leave",m,n,c),f.target=p,f.relatedTarget=v,M=null,Ji(c)===u&&(h=new h(g,_+"enter",x,n,c),h.target=v,h.relatedTarget=p,M=h),p=M,m&&x)t:{for(h=m,g=x,_=0,v=h;v;v=wr(v))_++;for(v=0,M=g;M;M=wr(M))v++;for(;0<_-v;)h=wr(h),_--;for(;0<v-_;)g=wr(g),v--;for(;_--;){if(h===g||g!==null&&h===g.alternate)break t;h=wr(h),g=wr(g)}h=null}else h=null;m!==null&&pd(d,f,m,h,!1),x!==null&&p!==null&&pd(d,p,x,h,!0)}}e:{if(f=u?Xr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var S=P_;else if(od(f))if(om)S=N_;else{S=R_;var A=D_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=I_);if(S&&(S=S(t,u))){sm(d,S,n,c);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Vu(f,"number",f.value)}switch(A=u?Xr(u):window,t){case"focusin":(od(A)||A.contentEditable==="true")&&(Wr=A,Ju=u,$s=null);break;case"focusout":$s=Ju=Wr=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,fd(d,n,c);break;case"selectionchange":if(z_)break;case"keydown":case"keyup":fd(d,n,c)}var L;if(ef)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Hr?im(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(nm&&n.locale!=="ko"&&(Hr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Hr&&(L=tm()):(yi=c,Kc="value"in yi?yi.value:yi.textContent,Hr=!0)),A=za(u,y),0<A.length&&(y=new nd(y,t,null,n,c),d.push({event:y,listeners:A}),L?y.data=L:(L=rm(n),L!==null&&(y.data=L)))),(L=T_?b_(t,n):C_(t,n))&&(u=za(u,"onBeforeInput"),0<u.length&&(c=new nd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=L))}gm(d,e)})}function uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function za(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=no(t,n),s!=null&&i.unshift(uo(t,s,r)),s=no(t,e),s!=null&&i.push(uo(t,s,r))),t=t.return}return i}function wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=no(n,s),l!=null&&o.unshift(uo(n,l,a))):r||(l=no(n,s),l!=null&&o.push(uo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var V_=/\r\n?/g,G_=/\u0000|\uFFFD/g;function md(t){return(typeof t=="string"?t:""+t).replace(V_,`
`).replace(G_,"")}function Go(t,e,n){if(e=md(e),md(t)!==e&&n)throw Error(J(425))}function Oa(){}var tc=null,nc=null;function ic(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rc=typeof setTimeout=="function"?setTimeout:void 0,H_=typeof clearTimeout=="function"?clearTimeout:void 0,gd=typeof Promise=="function"?Promise:void 0,W_=typeof queueMicrotask=="function"?queueMicrotask:typeof gd<"u"?function(t){return gd.resolve(null).then(t).catch(j_)}:rc;function j_(t){setTimeout(function(){throw t})}function Bl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),so(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);so(e)}function bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _d(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),Bn="__reactFiber$"+Ss,co="__reactProps$"+Ss,oi="__reactContainer$"+Ss,sc="__reactEvents$"+Ss,X_="__reactListeners$"+Ss,q_="__reactHandles$"+Ss;function Ji(t){var e=t[Bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[oi]||n[Bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_d(t);t!==null;){if(n=t[Bn])return n;t=_d(t)}return e}t=n,n=t.parentNode}return null}function bo(t){return t=t[Bn]||t[oi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function sl(t){return t[co]||null}var oc=[],qr=-1;function Oi(t){return{current:t}}function Xe(t){0>qr||(t.current=oc[qr],oc[qr]=null,qr--)}function He(t,e){qr++,oc[qr]=t.current,t.current=e}var Ni={},Pt=Oi(Ni),Xt=Oi(!1),ur=Ni;function us(t,e){var n=t.type.contextTypes;if(!n)return Ni;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function qt(t){return t=t.childContextTypes,t!=null}function Ua(){Xe(Xt),Xe(Pt)}function vd(t,e,n){if(Pt.current!==Ni)throw Error(J(168));He(Pt,e),He(Xt,n)}function vm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,D0(t)||"Unknown",r));return Qe({},n,i)}function Ba(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ni,ur=Pt.current,He(Pt,t),He(Xt,Xt.current),!0}function xd(t,e,n){var i=t.stateNode;if(!i)throw Error(J(169));n?(t=vm(t,e,ur),i.__reactInternalMemoizedMergedChildContext=t,Xe(Xt),Xe(Pt),He(Pt,t)):Xe(Xt),He(Xt,n)}var Jn=null,ol=!1,Vl=!1;function xm(t){Jn===null?Jn=[t]:Jn.push(t)}function Y_(t){ol=!0,xm(t)}function Ui(){if(!Vl&&Jn!==null){Vl=!0;var t=0,e=Ve;try{var n=Jn;for(Ve=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Jn=null,ol=!1}catch(r){throw Jn!==null&&(Jn=Jn.slice(t+1)),Wp(qc,Ui),r}finally{Ve=e,Vl=!1}}return null}var Yr=[],$r=0,Va=null,Ga=0,pn=[],mn=0,cr=null,ti=1,ni="";function qi(t,e){Yr[$r++]=Ga,Yr[$r++]=Va,Va=t,Ga=e}function ym(t,e,n){pn[mn++]=ti,pn[mn++]=ni,pn[mn++]=cr,cr=t;var i=ti;t=ni;var r=32-In(i)-1;i&=~(1<<r),n+=1;var s=32-In(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ti=1<<32-In(e)+r|n<<r|i,ni=s+t}else ti=1<<s|n<<r|i,ni=t}function nf(t){t.return!==null&&(qi(t,1),ym(t,1,0))}function rf(t){for(;t===Va;)Va=Yr[--$r],Yr[$r]=null,Ga=Yr[--$r],Yr[$r]=null;for(;t===cr;)cr=pn[--mn],pn[mn]=null,ni=pn[--mn],pn[mn]=null,ti=pn[--mn],pn[mn]=null}var sn=null,nn=null,Ye=!1,Pn=null;function Sm(t,e){var n=vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,sn=t,nn=bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,sn=t,nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=cr!==null?{id:ti,overflow:ni}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,sn=t,nn=null,!0):!1;default:return!1}}function ac(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lc(t){if(Ye){var e=nn;if(e){var n=e;if(!yd(t,e)){if(ac(t))throw Error(J(418));e=bi(n.nextSibling);var i=sn;e&&yd(t,e)?Sm(i,n):(t.flags=t.flags&-4097|2,Ye=!1,sn=t)}}else{if(ac(t))throw Error(J(418));t.flags=t.flags&-4097|2,Ye=!1,sn=t}}}function Sd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function Ho(t){if(t!==sn)return!1;if(!Ye)return Sd(t),Ye=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ic(t.type,t.memoizedProps)),e&&(e=nn)){if(ac(t))throw Mm(),Error(J(418));for(;e;)Sm(t,e),e=bi(e.nextSibling)}if(Sd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nn=bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nn=null}}else nn=sn?bi(t.stateNode.nextSibling):null;return!0}function Mm(){for(var t=nn;t;)t=bi(t.nextSibling)}function cs(){nn=sn=null,Ye=!1}function sf(t){Pn===null?Pn=[t]:Pn.push(t)}var $_=ui.ReactCurrentBatchConfig;function An(t,e){if(t&&t.defaultProps){e=Qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ha=Oi(null),Wa=null,Zr=null,of=null;function af(){of=Zr=Wa=null}function lf(t){var e=Ha.current;Xe(Ha),t._currentValue=e}function uc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){Wa=t,of=Zr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(jt=!0),t.firstContext=null)}function Sn(t){var e=t._currentValue;if(of!==t)if(t={context:t,memoizedValue:e,next:null},Zr===null){if(Wa===null)throw Error(J(308));Zr=t,Wa.dependencies={lanes:0,firstContext:t}}else Zr=Zr.next=t;return e}var er=null;function uf(t){er===null?er=[t]:er.push(t)}function wm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,uf(e)):(n.next=r.next,r.next=n),e.interleaved=n,ai(t,i)}function ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gi=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Em(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ci(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Fe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ai(t,n)}return r=i.interleaved,r===null?(e.next=e,uf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ai(t,n)}function ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yc(t,n)}}function Md(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ja(t,e,n,i){var r=t.updateQueue;gi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,h=a;switch(f=e,m=n,h.tag){case 1:if(x=h.payload,typeof x=="function"){d=x.call(m,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,f=typeof x=="function"?x.call(m,d,f):x,f==null)break e;d=Qe({},d,f);break e;case 2:gi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);dr|=o,t.lanes=o,t.memoizedState=d}}function wd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var Tm=new wp.Component().refs;function cc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var al={isMounted:function(t){return(t=t._reactInternals)?xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=zt(),r=Li(t),s=ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ci(t,s,r),e!==null&&(Nn(e,t,r,i),ya(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=zt(),r=Li(t),s=ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ci(t,s,r),e!==null&&(Nn(e,t,r,i),ya(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=zt(),i=Li(t),r=ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ci(t,r,i),e!==null&&(Nn(e,t,i,n),ya(e,t,i))}};function Ed(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ao(n,i)||!ao(r,s):!0}function bm(t,e,n){var i=!1,r=Ni,s=e.contextType;return typeof s=="object"&&s!==null?s=Sn(s):(r=qt(e)?ur:Pt.current,i=e.contextTypes,s=(i=i!=null)?us(t,r):Ni),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=al,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Td(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&al.enqueueReplaceState(e,e.state,null)}function fc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Tm,cf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Sn(s):(s=qt(e)?ur:Pt.current,r.context=us(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&al.enqueueReplaceState(r,r.state,null),ja(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ls(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Tm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function Wo(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bd(t){var e=t._init;return e(t._payload)}function Cm(t){function e(g,_){if(t){var v=g.deletions;v===null?(g.deletions=[_],g.flags|=16):v.push(_)}}function n(g,_){if(!t)return null;for(;_!==null;)e(g,_),_=_.sibling;return null}function i(g,_){for(g=new Map;_!==null;)_.key!==null?g.set(_.key,_):g.set(_.index,_),_=_.sibling;return g}function r(g,_){return g=Pi(g,_),g.index=0,g.sibling=null,g}function s(g,_,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<_?(g.flags|=2,_):v):(g.flags|=2,_)):(g.flags|=1048576,_)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,_,v,M){return _===null||_.tag!==6?(_=Yl(v,g.mode,M),_.return=g,_):(_=r(_,v),_.return=g,_)}function l(g,_,v,M){var S=v.type;return S===Gr?c(g,_,v.props.children,M,v.key):_!==null&&(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===mi&&bd(S)===_.type)?(M=r(_,v.props),M.ref=Ls(g,_,v),M.return=g,M):(M=ba(v.type,v.key,v.props,null,g.mode,M),M.ref=Ls(g,_,v),M.return=g,M)}function u(g,_,v,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=$l(v,g.mode,M),_.return=g,_):(_=r(_,v.children||[]),_.return=g,_)}function c(g,_,v,M,S){return _===null||_.tag!==7?(_=sr(v,g.mode,M,S),_.return=g,_):(_=r(_,v),_.return=g,_)}function d(g,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Yl(""+_,g.mode,v),_.return=g,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Io:return v=ba(_.type,_.key,_.props,null,g.mode,v),v.ref=Ls(g,null,_),v.return=g,v;case Vr:return _=$l(_,g.mode,v),_.return=g,_;case mi:var M=_._init;return d(g,M(_._payload),v)}if(Bs(_)||Es(_))return _=sr(_,g.mode,v,null),_.return=g,_;Wo(g,_)}return null}function f(g,_,v,M){var S=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:a(g,_,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Io:return v.key===S?l(g,_,v,M):null;case Vr:return v.key===S?u(g,_,v,M):null;case mi:return S=v._init,f(g,_,S(v._payload),M)}if(Bs(v)||Es(v))return S!==null?null:c(g,_,v,M,null);Wo(g,v)}return null}function m(g,_,v,M,S){if(typeof M=="string"&&M!==""||typeof M=="number")return g=g.get(v)||null,a(_,g,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Io:return g=g.get(M.key===null?v:M.key)||null,l(_,g,M,S);case Vr:return g=g.get(M.key===null?v:M.key)||null,u(_,g,M,S);case mi:var A=M._init;return m(g,_,v,A(M._payload),S)}if(Bs(M)||Es(M))return g=g.get(v)||null,c(_,g,M,S,null);Wo(_,M)}return null}function x(g,_,v,M){for(var S=null,A=null,L=_,y=_=0,b=null;L!==null&&y<v.length;y++){L.index>y?(b=L,L=null):b=L.sibling;var P=f(g,L,v[y],M);if(P===null){L===null&&(L=b);break}t&&L&&P.alternate===null&&e(g,L),_=s(P,_,y),A===null?S=P:A.sibling=P,A=P,L=b}if(y===v.length)return n(g,L),Ye&&qi(g,y),S;if(L===null){for(;y<v.length;y++)L=d(g,v[y],M),L!==null&&(_=s(L,_,y),A===null?S=L:A.sibling=L,A=L);return Ye&&qi(g,y),S}for(L=i(g,L);y<v.length;y++)b=m(L,g,y,v[y],M),b!==null&&(t&&b.alternate!==null&&L.delete(b.key===null?y:b.key),_=s(b,_,y),A===null?S=b:A.sibling=b,A=b);return t&&L.forEach(function($){return e(g,$)}),Ye&&qi(g,y),S}function h(g,_,v,M){var S=Es(v);if(typeof S!="function")throw Error(J(150));if(v=S.call(v),v==null)throw Error(J(151));for(var A=S=null,L=_,y=_=0,b=null,P=v.next();L!==null&&!P.done;y++,P=v.next()){L.index>y?(b=L,L=null):b=L.sibling;var $=f(g,L,P.value,M);if($===null){L===null&&(L=b);break}t&&L&&$.alternate===null&&e(g,L),_=s($,_,y),A===null?S=$:A.sibling=$,A=$,L=b}if(P.done)return n(g,L),Ye&&qi(g,y),S;if(L===null){for(;!P.done;y++,P=v.next())P=d(g,P.value,M),P!==null&&(_=s(P,_,y),A===null?S=P:A.sibling=P,A=P);return Ye&&qi(g,y),S}for(L=i(g,L);!P.done;y++,P=v.next())P=m(L,g,y,P.value,M),P!==null&&(t&&P.alternate!==null&&L.delete(P.key===null?y:P.key),_=s(P,_,y),A===null?S=P:A.sibling=P,A=P);return t&&L.forEach(function(Z){return e(g,Z)}),Ye&&qi(g,y),S}function p(g,_,v,M){if(typeof v=="object"&&v!==null&&v.type===Gr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Io:e:{for(var S=v.key,A=_;A!==null;){if(A.key===S){if(S=v.type,S===Gr){if(A.tag===7){n(g,A.sibling),_=r(A,v.props.children),_.return=g,g=_;break e}}else if(A.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===mi&&bd(S)===A.type){n(g,A.sibling),_=r(A,v.props),_.ref=Ls(g,A,v),_.return=g,g=_;break e}n(g,A);break}else e(g,A);A=A.sibling}v.type===Gr?(_=sr(v.props.children,g.mode,M,v.key),_.return=g,g=_):(M=ba(v.type,v.key,v.props,null,g.mode,M),M.ref=Ls(g,_,v),M.return=g,g=M)}return o(g);case Vr:e:{for(A=v.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(g,_.sibling),_=r(_,v.children||[]),_.return=g,g=_;break e}else{n(g,_);break}else e(g,_);_=_.sibling}_=$l(v,g.mode,M),_.return=g,g=_}return o(g);case mi:return A=v._init,p(g,_,A(v._payload),M)}if(Bs(v))return x(g,_,v,M);if(Es(v))return h(g,_,v,M);Wo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(g,_.sibling),_=r(_,v),_.return=g,g=_):(n(g,_),_=Yl(v,g.mode,M),_.return=g,g=_),o(g)):n(g,_)}return p}var fs=Cm(!0),Am=Cm(!1),Co={},Hn=Oi(Co),fo=Oi(Co),ho=Oi(Co);function tr(t){if(t===Co)throw Error(J(174));return t}function ff(t,e){switch(He(ho,e),He(fo,t),He(Hn,Co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hu(e,t)}Xe(Hn),He(Hn,e)}function ds(){Xe(Hn),Xe(fo),Xe(ho)}function Lm(t){tr(ho.current);var e=tr(Hn.current),n=Hu(e,t.type);e!==n&&(He(fo,t),He(Hn,n))}function df(t){fo.current===t&&(Xe(Hn),Xe(fo))}var Ze=Oi(0);function Xa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gl=[];function hf(){for(var t=0;t<Gl.length;t++)Gl[t]._workInProgressVersionPrimary=null;Gl.length=0}var Sa=ui.ReactCurrentDispatcher,Hl=ui.ReactCurrentBatchConfig,fr=0,Ke=null,lt=null,gt=null,qa=!1,Zs=!1,po=0,Z_=0;function bt(){throw Error(J(321))}function pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function mf(t,e,n,i,r,s){if(fr=s,Ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sa.current=t===null||t.memoizedState===null?ev:tv,t=n(i,r),Zs){s=0;do{if(Zs=!1,po=0,25<=s)throw Error(J(301));s+=1,gt=lt=null,e.updateQueue=null,Sa.current=nv,t=n(i,r)}while(Zs)}if(Sa.current=Ya,e=lt!==null&&lt.next!==null,fr=0,gt=lt=Ke=null,qa=!1,e)throw Error(J(300));return t}function gf(){var t=po!==0;return po=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ke.memoizedState=gt=t:gt=gt.next=t,gt}function Mn(){if(lt===null){var t=Ke.alternate;t=t!==null?t.memoizedState:null}else t=lt.next;var e=gt===null?Ke.memoizedState:gt.next;if(e!==null)gt=e,lt=t;else{if(t===null)throw Error(J(310));lt=t,t={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},gt===null?Ke.memoizedState=gt=t:gt=gt.next=t}return gt}function mo(t,e){return typeof e=="function"?e(t):e}function Wl(t){var e=Mn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((fr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ke.lanes|=c,dr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,kn(i,e.memoizedState)||(jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ke.lanes|=s,dr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jl(t){var e=Mn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);kn(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Pm(){}function Dm(t,e){var n=Ke,i=Mn(),r=e(),s=!kn(i.memoizedState,r);if(s&&(i.memoizedState=r,jt=!0),i=i.queue,_f(Nm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||gt!==null&&gt.memoizedState.tag&1){if(n.flags|=2048,go(9,Im.bind(null,n,i,r,e),void 0,null),_t===null)throw Error(J(349));fr&30||Rm(n,e,r)}return r}function Rm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Im(t,e,n,i){e.value=n,e.getSnapshot=i,km(e)&&Fm(t)}function Nm(t,e,n){return n(function(){km(e)&&Fm(t)})}function km(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function Fm(t){var e=ai(t,1);e!==null&&Nn(e,t,1,-1)}function Cd(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},e.queue=t,t=t.dispatch=J_.bind(null,Ke,t),[e.memoizedState,t]}function go(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function zm(){return Mn().memoizedState}function Ma(t,e,n,i){var r=zn();Ke.flags|=t,r.memoizedState=go(1|e,n,void 0,i===void 0?null:i)}function ll(t,e,n,i){var r=Mn();i=i===void 0?null:i;var s=void 0;if(lt!==null){var o=lt.memoizedState;if(s=o.destroy,i!==null&&pf(i,o.deps)){r.memoizedState=go(e,n,s,i);return}}Ke.flags|=t,r.memoizedState=go(1|e,n,s,i)}function Ad(t,e){return Ma(8390656,8,t,e)}function _f(t,e){return ll(2048,8,t,e)}function Om(t,e){return ll(4,2,t,e)}function Um(t,e){return ll(4,4,t,e)}function Bm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vm(t,e,n){return n=n!=null?n.concat([t]):null,ll(4,4,Bm.bind(null,e,t),n)}function vf(){}function Gm(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Hm(t,e){var n=Mn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Wm(t,e,n){return fr&21?(kn(n,e)||(n=qp(),Ke.lanes|=n,dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n)}function K_(t,e){var n=Ve;Ve=n!==0&&4>n?n:4,t(!0);var i=Hl.transition;Hl.transition={};try{t(!1),e()}finally{Ve=n,Hl.transition=i}}function jm(){return Mn().memoizedState}function Q_(t,e,n){var i=Li(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Xm(t))qm(e,n);else if(n=wm(t,e,n,i),n!==null){var r=zt();Nn(n,t,i,r),Ym(n,e,i)}}function J_(t,e,n){var i=Li(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xm(t))qm(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,kn(a,o)){var l=e.interleaved;l===null?(r.next=r,uf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=wm(t,e,r,i),n!==null&&(r=zt(),Nn(n,t,i,r),Ym(n,e,i))}}function Xm(t){var e=t.alternate;return t===Ke||e!==null&&e===Ke}function qm(t,e){Zs=qa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ym(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Yc(t,n)}}var Ya={readContext:Sn,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},ev={readContext:Sn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:Sn,useEffect:Ad,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ma(4194308,4,Bm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ma(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ma(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Q_.bind(null,Ke,t),[i.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:Cd,useDebugValue:vf,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=Cd(!1),e=t[0];return t=K_.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ke,r=zn();if(Ye){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),_t===null)throw Error(J(349));fr&30||Rm(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ad(Nm.bind(null,i,s,t),[t]),i.flags|=2048,go(9,Im.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=_t.identifierPrefix;if(Ye){var n=ni,i=ti;n=(i&~(1<<32-In(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Z_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tv={readContext:Sn,useCallback:Gm,useContext:Sn,useEffect:_f,useImperativeHandle:Vm,useInsertionEffect:Om,useLayoutEffect:Um,useMemo:Hm,useReducer:Wl,useRef:zm,useState:function(){return Wl(mo)},useDebugValue:vf,useDeferredValue:function(t){var e=Mn();return Wm(e,lt.memoizedState,t)},useTransition:function(){var t=Wl(mo)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:Pm,useSyncExternalStore:Dm,useId:jm,unstable_isNewReconciler:!1},nv={readContext:Sn,useCallback:Gm,useContext:Sn,useEffect:_f,useImperativeHandle:Vm,useInsertionEffect:Om,useLayoutEffect:Um,useMemo:Hm,useReducer:jl,useRef:zm,useState:function(){return jl(mo)},useDebugValue:vf,useDeferredValue:function(t){var e=Mn();return lt===null?e.memoizedState=t:Wm(e,lt.memoizedState,t)},useTransition:function(){var t=jl(mo)[0],e=Mn().memoizedState;return[t,e]},useMutableSource:Pm,useSyncExternalStore:Dm,useId:jm,unstable_isNewReconciler:!1};function hs(t,e){try{var n="",i=e;do n+=P0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Xl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iv=typeof WeakMap=="function"?WeakMap:Map;function $m(t,e,n){n=ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Za||(Za=!0,Mc=i),dc(t,e)},n}function Zm(t,e,n){n=ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){dc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dc(t,e),typeof i!="function"&&(Ai===null?Ai=new Set([this]):Ai.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ld(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new iv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=_v.bind(null,t,e,n),e.then(t,t))}function Pd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ii(-1,1),e.tag=2,Ci(n,e,1))),n.lanes|=1),t)}var rv=ui.ReactCurrentOwner,jt=!1;function Ft(t,e,n,i){e.child=t===null?Am(e,null,n,i):fs(e,t.child,n,i)}function Rd(t,e,n,i,r){n=n.render;var s=e.ref;return rs(e,r),i=mf(t,e,n,i,s,r),n=gf(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,li(t,e,r)):(Ye&&n&&nf(e),e.flags|=1,Ft(t,e,i,r),e.child)}function Id(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!bf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Km(t,e,s,i,r)):(t=ba(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(o,i)&&t.ref===e.ref)return li(t,e,r)}return e.flags|=1,t=Pi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Km(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ao(s,i)&&t.ref===e.ref)if(jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(jt=!0);else return e.lanes=t.lanes,li(t,e,r)}return hc(t,e,n,i,r)}function Qm(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Qr,tn),tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,He(Qr,tn),tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,He(Qr,tn),tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,He(Qr,tn),tn|=i;return Ft(t,e,r,n),e.child}function Jm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hc(t,e,n,i,r){var s=qt(n)?ur:Pt.current;return s=us(e,s),rs(e,r),n=mf(t,e,n,i,s,r),i=gf(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,li(t,e,r)):(Ye&&i&&nf(e),e.flags|=1,Ft(t,e,n,r),e.child)}function Nd(t,e,n,i,r){if(qt(n)){var s=!0;Ba(e)}else s=!1;if(rs(e,r),e.stateNode===null)wa(t,e),bm(e,n,i),fc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Sn(u):(u=qt(n)?ur:Pt.current,u=us(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Td(e,o,i,u),gi=!1;var f=e.memoizedState;o.state=f,ja(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Xt.current||gi?(typeof c=="function"&&(cc(e,n,c,i),l=e.memoizedState),(a=gi||Ed(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Em(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:An(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Sn(l):(l=qt(n)?ur:Pt.current,l=us(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Td(e,o,i,l),gi=!1,f=e.memoizedState,o.state=f,ja(e,i,o,r);var x=e.memoizedState;a!==d||f!==x||Xt.current||gi?(typeof m=="function"&&(cc(e,n,m,i),x=e.memoizedState),(u=gi||Ed(e,n,u,i,f,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return pc(t,e,n,i,s,r)}function pc(t,e,n,i,r,s){Jm(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&xd(e,n,!1),li(t,e,s);i=e.stateNode,rv.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,a,s)):Ft(t,e,a,s),e.memoizedState=i.state,r&&xd(e,n,!0),e.child}function eg(t){var e=t.stateNode;e.pendingContext?vd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vd(t,e.context,!1),ff(t,e.containerInfo)}function kd(t,e,n,i,r){return cs(),sf(r),e.flags|=256,Ft(t,e,n,i),e.child}var mc={dehydrated:null,treeContext:null,retryLane:0};function gc(t){return{baseLanes:t,cachePool:null,transitions:null}}function tg(t,e,n){var i=e.pendingProps,r=Ze.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),He(Ze,r&1),t===null)return lc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fl(o,i,0,null),t=sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gc(n),e.memoizedState=mc,t):xf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return sv(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Pi(a,s):(s=sr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?gc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mc,i}return s=t.child,t=s.sibling,i=Pi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xf(t,e){return e=fl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jo(t,e,n,i){return i!==null&&sf(i),fs(e,t.child,null,n),t=xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sv(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Xl(Error(J(422))),jo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=fl({mode:"visible",children:i.children},r,0,null),s=sr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&fs(e,t.child,null,o),e.child.memoizedState=gc(o),e.memoizedState=mc,s);if(!(e.mode&1))return jo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=Xl(s,i,void 0),jo(t,e,o,i)}if(a=(o&t.childLanes)!==0,jt||a){if(i=_t,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ai(t,r),Nn(i,t,r,-1))}return Tf(),i=Xl(Error(J(421))),jo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=vv.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,nn=bi(r.nextSibling),sn=e,Ye=!0,Pn=null,t!==null&&(pn[mn++]=ti,pn[mn++]=ni,pn[mn++]=cr,ti=t.id,ni=t.overflow,cr=e),e=xf(e,i.children),e.flags|=4096,e)}function Fd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),uc(t.return,e,n)}function ql(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ng(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ft(t,e,i.children,n),i=Ze.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fd(t,n,e);else if(t.tag===19)Fd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(He(Ze,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ql(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ql(e,!0,n,null,s);break;case"together":ql(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=Pi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ov(t,e,n){switch(e.tag){case 3:eg(e),cs();break;case 5:Lm(e);break;case 1:qt(e.type)&&Ba(e);break;case 4:ff(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;He(Ha,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(He(Ze,Ze.current&1),e.flags|=128,null):n&e.child.childLanes?tg(t,e,n):(He(Ze,Ze.current&1),t=li(t,e,n),t!==null?t.sibling:null);He(Ze,Ze.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ng(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),He(Ze,Ze.current),i)break;return null;case 22:case 23:return e.lanes=0,Qm(t,e,n)}return li(t,e,n)}var ig,_c,rg,sg;ig=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_c=function(){};rg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,tr(Hn.current);var s=null;switch(n){case"input":r=Uu(t,r),i=Uu(t,i),s=[];break;case"select":r=Qe({},r,{value:void 0}),i=Qe({},i,{value:void 0}),s=[];break;case"textarea":r=Gu(t,r),i=Gu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Oa)}Wu(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(eo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r?.[u],i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(eo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&We("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};sg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ps(t,e){if(!Ye)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function av(t,e,n){var i=e.pendingProps;switch(rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return qt(e.type)&&Ua(),Ct(e),null;case 3:return i=e.stateNode,ds(),Xe(Xt),Xe(Pt),hf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ho(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pn!==null&&(Tc(Pn),Pn=null))),_c(t,e),Ct(e),null;case 5:df(e);var r=tr(ho.current);if(n=e.type,t!==null&&e.stateNode!=null)rg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return Ct(e),null}if(t=tr(Hn.current),Ho(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Bn]=e,i[co]=s,t=(e.mode&1)!==0,n){case"dialog":We("cancel",i),We("close",i);break;case"iframe":case"object":case"embed":We("load",i);break;case"video":case"audio":for(r=0;r<Gs.length;r++)We(Gs[r],i);break;case"source":We("error",i);break;case"img":case"image":case"link":We("error",i),We("load",i);break;case"details":We("toggle",i);break;case"input":jf(i,s),We("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},We("invalid",i);break;case"textarea":qf(i,s),We("invalid",i)}Wu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Go(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Go(i.textContent,a,t),r=["children",""+a]):eo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&We("scroll",i)}switch(n){case"input":No(i),Xf(i,s,!0);break;case"textarea":No(i),Yf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Oa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Rp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Bn]=e,t[co]=i,ig(t,e,!1,!1),e.stateNode=t;e:{switch(o=ju(n,i),n){case"dialog":We("cancel",t),We("close",t),r=i;break;case"iframe":case"object":case"embed":We("load",t),r=i;break;case"video":case"audio":for(r=0;r<Gs.length;r++)We(Gs[r],t);r=i;break;case"source":We("error",t),r=i;break;case"img":case"image":case"link":We("error",t),We("load",t),r=i;break;case"details":We("toggle",t),r=i;break;case"input":jf(t,i),r=Uu(t,i),We("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Qe({},i,{value:void 0}),We("invalid",t);break;case"textarea":qf(t,i),r=Gu(t,i),We("invalid",t);break;default:r=i}Wu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?kp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ip(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&to(t,l):typeof l=="number"&&to(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(eo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&We("scroll",t):l!=null&&Gc(t,s,l,o))}switch(n){case"input":No(t),Xf(t,i,!1);break;case"textarea":No(t),Yf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ii(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?es(t,!!i.multiple,s,!1):i.defaultValue!=null&&es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Oa)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ct(e),null;case 6:if(t&&e.stateNode!=null)sg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(n=tr(ho.current),tr(Hn.current),Ho(e)){if(i=e.stateNode,n=e.memoizedProps,i[Bn]=e,(s=i.nodeValue!==n)&&(t=sn,t!==null))switch(t.tag){case 3:Go(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Go(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Bn]=e,e.stateNode=i}return Ct(e),null;case 13:if(Xe(Ze),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ye&&nn!==null&&e.mode&1&&!(e.flags&128))Mm(),cs(),e.flags|=98560,s=!1;else if(s=Ho(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[Bn]=e}else cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ct(e),s=!1}else Pn!==null&&(Tc(Pn),Pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ze.current&1?ut===0&&(ut=3):Tf())),e.updateQueue!==null&&(e.flags|=4),Ct(e),null);case 4:return ds(),_c(t,e),t===null&&lo(e.stateNode.containerInfo),Ct(e),null;case 10:return lf(e.type._context),Ct(e),null;case 17:return qt(e.type)&&Ua(),Ct(e),null;case 19:if(Xe(Ze),s=e.memoizedState,s===null)return Ct(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ps(s,!1);else{if(ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xa(t),o!==null){for(e.flags|=128,Ps(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return He(Ze,Ze.current&1|2),e.child}t=t.sibling}s.tail!==null&&tt()>ps&&(e.flags|=128,i=!0,Ps(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xa(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ye)return Ct(e),null}else 2*tt()-s.renderingStartTime>ps&&n!==1073741824&&(e.flags|=128,i=!0,Ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=tt(),e.sibling=null,n=Ze.current,He(Ze,i?n&1|2:n&1),e):(Ct(e),null);case 22:case 23:return Ef(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?tn&1073741824&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function lv(t,e){switch(rf(e),e.tag){case 1:return qt(e.type)&&Ua(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ds(),Xe(Xt),Xe(Pt),hf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return df(e),null;case 13:if(Xe(Ze),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Xe(Ze),null;case 4:return ds(),null;case 10:return lf(e.type._context),null;case 22:case 23:return Ef(),null;case 24:return null;default:return null}}var Xo=!1,Lt=!1,uv=typeof WeakSet=="function"?WeakSet:Set,de=null;function Kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Je(t,e,i)}else n.current=null}function vc(t,e,n){try{n()}catch(i){Je(t,e,i)}}var zd=!1;function cv(t,e){if(tc=ka,t=um(),tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nc={focusedElem:t,selectionRange:n},ka=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,p=x.memoizedState,g=e.stateNode,_=g.getSnapshotBeforeUpdate(e.elementType===e.type?h:An(e.type,h),p);g.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(M){Je(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return x=zd,zd=!1,x}function Ks(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&vc(e,n,s)}r=r.next}while(r!==i)}}function ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function og(t){var e=t.alternate;e!==null&&(t.alternate=null,og(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bn],delete e[co],delete e[sc],delete e[X_],delete e[q_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ag(t){return t.tag===5||t.tag===3||t.tag===4}function Od(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ag(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oa));else if(i!==4&&(t=t.child,t!==null))for(yc(t,e,n),t=t.sibling;t!==null;)yc(t,e,n),t=t.sibling}function Sc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Sc(t,e,n),t=t.sibling;t!==null;)Sc(t,e,n),t=t.sibling}var vt=null,Ln=!1;function ci(t,e,n){for(n=n.child;n!==null;)lg(t,e,n),n=n.sibling}function lg(t,e,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:Lt||Kr(n,e);case 6:var i=vt,r=Ln;vt=null,ci(t,e,n),vt=i,Ln=r,vt!==null&&(Ln?(t=vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(Ln?(t=vt,n=n.stateNode,t.nodeType===8?Bl(t.parentNode,n):t.nodeType===1&&Bl(t,n),so(t)):Bl(vt,n.stateNode));break;case 4:i=vt,r=Ln,vt=n.stateNode.containerInfo,Ln=!0,ci(t,e,n),vt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!Lt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vc(n,e,o),r=r.next}while(r!==i)}ci(t,e,n);break;case 1:if(!Lt&&(Kr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Je(n,e,a)}ci(t,e,n);break;case 21:ci(t,e,n);break;case 22:n.mode&1?(Lt=(i=Lt)||n.memoizedState!==null,ci(t,e,n),Lt=i):ci(t,e,n);break;default:ci(t,e,n)}}function Ud(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uv),e.forEach(function(i){var r=xv.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:vt=a.stateNode,Ln=!1;break e;case 3:vt=a.stateNode.containerInfo,Ln=!0;break e;case 4:vt=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(vt===null)throw Error(J(160));lg(s,o,r),vt=null,Ln=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Je(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ug(e,t),e=e.sibling}function ug(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),Fn(t),i&4){try{Ks(3,t,t.return),ul(3,t)}catch(h){Je(t,t.return,h)}try{Ks(5,t,t.return)}catch(h){Je(t,t.return,h)}}break;case 1:wn(e,t),Fn(t),i&512&&n!==null&&Kr(n,n.return);break;case 5:if(wn(e,t),Fn(t),i&512&&n!==null&&Kr(n,n.return),t.flags&32){var r=t.stateNode;try{to(r,"")}catch(h){Je(t,t.return,h)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Pp(r,s),ju(a,o);var u=ju(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?kp(r,d):c==="dangerouslySetInnerHTML"?Ip(r,d):c==="children"?to(r,d):Gc(r,c,d,u)}switch(a){case"input":Bu(r,s);break;case"textarea":Dp(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?es(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?es(r,!!s.multiple,s.defaultValue,!0):es(r,!!s.multiple,s.multiple?[]:"",!1))}r[co]=s}catch(h){Je(t,t.return,h)}}break;case 6:if(wn(e,t),Fn(t),i&4){if(t.stateNode===null)throw Error(J(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(h){Je(t,t.return,h)}}break;case 3:if(wn(e,t),Fn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{so(e.containerInfo)}catch(h){Je(t,t.return,h)}break;case 4:wn(e,t),Fn(t);break;case 13:wn(e,t),Fn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Mf=tt())),i&4&&Ud(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Lt=(u=Lt)||c,wn(e,t),Lt=u):wn(e,t),Fn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(de=t,c=t.child;c!==null;){for(d=de=c;de!==null;){switch(f=de,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ks(4,f,f.return);break;case 1:Kr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(h){Je(i,n,h)}}break;case 5:Kr(f,f.return);break;case 22:if(f.memoizedState!==null){Vd(d);continue}}m!==null?(m.return=f,de=m):Vd(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Np("display",o))}catch(h){Je(t,t.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){Je(t,t.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:wn(e,t),Fn(t),i&4&&Ud(t);break;case 21:break;default:wn(e,t),Fn(t)}}function Fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ag(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(to(r,""),i.flags&=-33);var s=Od(t);Sc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Od(t);yc(t,a,o);break;default:throw Error(J(161))}}catch(l){Je(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fv(t,e,n){de=t,cg(t)}function cg(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Xo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Lt;a=Xo;var u=Lt;if(Xo=o,(Lt=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Gd(r):l!==null?(l.return=o,de=l):Gd(r);for(;s!==null;)de=s,cg(s),s=s.sibling;de=r,Xo=a,Lt=u}Bd(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):Bd(t)}}function Bd(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Lt||ul(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Lt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:An(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&so(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Lt||e.flags&512&&xc(e)}catch(f){Je(e,e.return,f)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function Vd(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Gd(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ul(4,e)}catch(l){Je(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Je(e,r,l)}}var s=e.return;try{xc(e)}catch(l){Je(e,s,l)}break;case 5:var o=e.return;try{xc(e)}catch(l){Je(e,o,l)}}}catch(l){Je(e,e.return,l)}if(e===t){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var dv=Math.ceil,$a=ui.ReactCurrentDispatcher,yf=ui.ReactCurrentOwner,yn=ui.ReactCurrentBatchConfig,Fe=0,_t=null,ot=null,St=0,tn=0,Qr=Oi(0),ut=0,_o=null,dr=0,cl=0,Sf=0,Qs=null,Ht=null,Mf=0,ps=1/0,Qn=null,Za=!1,Mc=null,Ai=null,qo=!1,Si=null,Ka=0,Js=0,wc=null,Ea=-1,Ta=0;function zt(){return Fe&6?tt():Ea!==-1?Ea:Ea=tt()}function Li(t){return t.mode&1?Fe&2&&St!==0?St&-St:$_.transition!==null?(Ta===0&&(Ta=qp()),Ta):(t=Ve,t!==0||(t=window.event,t=t===void 0?16:em(t.type)),t):1}function Nn(t,e,n,i){if(50<Js)throw Js=0,wc=null,Error(J(185));Eo(t,n,i),(!(Fe&2)||t!==_t)&&(t===_t&&(!(Fe&2)&&(cl|=n),ut===4&&xi(t,St)),Yt(t,i),n===1&&Fe===0&&!(e.mode&1)&&(ps=tt()+500,ol&&Ui()))}function Yt(t,e){var n=t.callbackNode;$0(t,e);var i=Na(t,t===_t?St:0);if(i===0)n!==null&&Kf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Kf(n),e===1)t.tag===0?Y_(Hd.bind(null,t)):xm(Hd.bind(null,t)),W_(function(){!(Fe&6)&&Ui()}),n=null;else{switch(Yp(i)){case 1:n=qc;break;case 4:n=jp;break;case 16:n=Ia;break;case 536870912:n=Xp;break;default:n=Ia}n=vg(n,fg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fg(t,e){if(Ea=-1,Ta=0,Fe&6)throw Error(J(327));var n=t.callbackNode;if(ss()&&t.callbackNode!==n)return null;var i=Na(t,t===_t?St:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Qa(t,i);else{e=i;var r=Fe;Fe|=2;var s=hg();(_t!==t||St!==e)&&(Qn=null,ps=tt()+500,rr(t,e));do try{mv();break}catch(a){dg(t,a)}while(1);af(),$a.current=s,Fe=r,ot!==null?e=0:(_t=null,St=0,e=ut)}if(e!==0){if(e===2&&(r=Zu(t),r!==0&&(i=r,e=Ec(t,r))),e===1)throw n=_o,rr(t,0),xi(t,i),Yt(t,tt()),n;if(e===6)xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!hv(r)&&(e=Qa(t,i),e===2&&(s=Zu(t),s!==0&&(i=s,e=Ec(t,s))),e===1))throw n=_o,rr(t,0),xi(t,i),Yt(t,tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:Yi(t,Ht,Qn);break;case 3:if(xi(t,i),(i&130023424)===i&&(e=Mf+500-tt(),10<e)){if(Na(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=rc(Yi.bind(null,t,Ht,Qn),e);break}Yi(t,Ht,Qn);break;case 4:if(xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-In(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dv(i/1960))-i,10<i){t.timeoutHandle=rc(Yi.bind(null,t,Ht,Qn),i);break}Yi(t,Ht,Qn);break;case 5:Yi(t,Ht,Qn);break;default:throw Error(J(329))}}}return Yt(t,tt()),t.callbackNode===n?fg.bind(null,t):null}function Ec(t,e){var n=Qs;return t.current.memoizedState.isDehydrated&&(rr(t,e).flags|=256),t=Qa(t,e),t!==2&&(e=Ht,Ht=n,e!==null&&Tc(e)),t}function Tc(t){Ht===null?Ht=t:Ht.push.apply(Ht,t)}function hv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xi(t,e){for(e&=~Sf,e&=~cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),i=1<<n;t[n]=-1,e&=~i}}function Hd(t){if(Fe&6)throw Error(J(327));ss();var e=Na(t,0);if(!(e&1))return Yt(t,tt()),null;var n=Qa(t,e);if(t.tag!==0&&n===2){var i=Zu(t);i!==0&&(e=i,n=Ec(t,i))}if(n===1)throw n=_o,rr(t,0),xi(t,e),Yt(t,tt()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yi(t,Ht,Qn),Yt(t,tt()),null}function wf(t,e){var n=Fe;Fe|=1;try{return t(e)}finally{Fe=n,Fe===0&&(ps=tt()+500,ol&&Ui())}}function hr(t){Si!==null&&Si.tag===0&&!(Fe&6)&&ss();var e=Fe;Fe|=1;var n=yn.transition,i=Ve;try{if(yn.transition=null,Ve=1,t)return t()}finally{Ve=i,yn.transition=n,Fe=e,!(Fe&6)&&Ui()}}function Ef(){tn=Qr.current,Xe(Qr)}function rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,H_(n)),ot!==null)for(n=ot.return;n!==null;){var i=n;switch(rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ua();break;case 3:ds(),Xe(Xt),Xe(Pt),hf();break;case 5:df(i);break;case 4:ds();break;case 13:Xe(Ze);break;case 19:Xe(Ze);break;case 10:lf(i.type._context);break;case 22:case 23:Ef()}n=n.return}if(_t=t,ot=t=Pi(t.current,null),St=tn=e,ut=0,_o=null,Sf=cl=dr=0,Ht=Qs=null,er!==null){for(e=0;e<er.length;e++)if(n=er[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}er=null}return t}function dg(t,e){do{var n=ot;try{if(af(),Sa.current=Ya,qa){for(var i=Ke.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}qa=!1}if(fr=0,gt=lt=Ke=null,Zs=!1,po=0,yf.current=null,n===null||n.return===null){ut=1,_o=e,ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=St,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Pd(o);if(m!==null){m.flags&=-257,Dd(m,o,a,s,e),m.mode&1&&Ld(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var h=new Set;h.add(l),e.updateQueue=h}else x.add(l);break e}else{if(!(e&1)){Ld(s,u,e),Tf();break e}l=Error(J(426))}}else if(Ye&&a.mode&1){var p=Pd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Dd(p,o,a,s,e),sf(hs(l,a));break e}}s=l=hs(l,a),ut!==4&&(ut=2),Qs===null?Qs=[s]:Qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=$m(s,l,e);Md(s,g);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ai===null||!Ai.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Zm(s,a,e);Md(s,M);break e}}s=s.return}while(s!==null)}mg(n)}catch(S){e=S,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(1)}function hg(){var t=$a.current;return $a.current=Ya,t===null?Ya:t}function Tf(){(ut===0||ut===3||ut===2)&&(ut=4),_t===null||!(dr&268435455)&&!(cl&268435455)||xi(_t,St)}function Qa(t,e){var n=Fe;Fe|=2;var i=hg();(_t!==t||St!==e)&&(Qn=null,rr(t,e));do try{pv();break}catch(r){dg(t,r)}while(1);if(af(),Fe=n,$a.current=i,ot!==null)throw Error(J(261));return _t=null,St=0,ut}function pv(){for(;ot!==null;)pg(ot)}function mv(){for(;ot!==null&&!B0();)pg(ot)}function pg(t){var e=_g(t.alternate,t,tn);t.memoizedProps=t.pendingProps,e===null?mg(t):ot=e,yf.current=null}function mg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lv(n,e),n!==null){n.flags&=32767,ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,ot=null;return}}else if(n=av(n,e,tn),n!==null){ot=n;return}if(e=e.sibling,e!==null){ot=e;return}ot=e=t}while(e!==null);ut===0&&(ut=5)}function Yi(t,e,n){var i=Ve,r=yn.transition;try{yn.transition=null,Ve=1,gv(t,e,n,i)}finally{yn.transition=r,Ve=i}return null}function gv(t,e,n,i){do ss();while(Si!==null);if(Fe&6)throw Error(J(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Z0(t,s),t===_t&&(ot=_t=null,St=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,vg(Ia,function(){return ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yn.transition,yn.transition=null;var o=Ve;Ve=1;var a=Fe;Fe|=4,yf.current=null,cv(t,n),ug(n,t),F_(nc),ka=!!tc,nc=tc=null,t.current=n,fv(n),V0(),Fe=a,Ve=o,yn.transition=s}else t.current=n;if(qo&&(qo=!1,Si=t,Ka=r),s=t.pendingLanes,s===0&&(Ai=null),W0(n.stateNode),Yt(t,tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Za)throw Za=!1,t=Mc,Mc=null,t;return Ka&1&&t.tag!==0&&ss(),s=t.pendingLanes,s&1?t===wc?Js++:(Js=0,wc=t):Js=0,Ui(),null}function ss(){if(Si!==null){var t=Yp(Ka),e=yn.transition,n=Ve;try{if(yn.transition=null,Ve=16>t?16:t,Si===null)var i=!1;else{if(t=Si,Si=null,Ka=0,Fe&6)throw Error(J(331));var r=Fe;for(Fe|=4,de=t.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var c=de;switch(c.tag){case 0:case 11:case 15:Ks(8,c,s)}var d=c.child;if(d!==null)d.return=c,de=d;else for(;de!==null;){c=de;var f=c.sibling,m=c.return;if(og(c),c===u){de=null;break}if(f!==null){f.return=m,de=f;break}de=m}}}var x=s.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ks(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,de=g;break e}de=s.return}}var _=t.current;for(de=_;de!==null;){o=de;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,de=v;else e:for(o=_;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ul(9,a)}}catch(S){Je(a,a.return,S)}if(a===o){de=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,de=M;break e}de=a.return}}if(Fe=r,Ui(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(tl,t)}catch{}i=!0}return i}finally{Ve=n,yn.transition=e}}return!1}function Wd(t,e,n){e=hs(n,e),e=$m(t,e,1),t=Ci(t,e,1),e=zt(),t!==null&&(Eo(t,1,e),Yt(t,e))}function Je(t,e,n){if(t.tag===3)Wd(t,t,n);else for(;e!==null;){if(e.tag===3){Wd(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ai===null||!Ai.has(i))){t=hs(n,t),t=Zm(e,t,1),e=Ci(e,t,1),t=zt(),e!==null&&(Eo(e,1,t),Yt(e,t));break}}e=e.return}}function _v(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=zt(),t.pingedLanes|=t.suspendedLanes&n,_t===t&&(St&n)===n&&(ut===4||ut===3&&(St&130023424)===St&&500>tt()-Mf?rr(t,0):Sf|=n),Yt(t,e)}function gg(t,e){e===0&&(t.mode&1?(e=zo,zo<<=1,!(zo&130023424)&&(zo=4194304)):e=1);var n=zt();t=ai(t,e),t!==null&&(Eo(t,e,n),Yt(t,n))}function vv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gg(t,n)}function xv(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),gg(t,n)}var _g;_g=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xt.current)jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return jt=!1,ov(t,e,n);jt=!!(t.flags&131072)}else jt=!1,Ye&&e.flags&1048576&&ym(e,Ga,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;wa(t,e),t=e.pendingProps;var r=us(e,Pt.current);rs(e,n),r=mf(null,e,i,t,r,n);var s=gf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(i)?(s=!0,Ba(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cf(e),r.updater=al,e.stateNode=r,r._reactInternals=e,fc(e,i,t,n),e=pc(null,e,i,!0,s,n)):(e.tag=0,Ye&&s&&nf(e),Ft(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(wa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Sv(i),t=An(i,t),r){case 0:e=hc(null,e,i,t,n);break e;case 1:e=Nd(null,e,i,t,n);break e;case 11:e=Rd(null,e,i,t,n);break e;case 14:e=Id(null,e,i,An(i.type,t),n);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),hc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),Nd(t,e,i,r,n);case 3:e:{if(eg(e),t===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Em(t,e),ja(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=hs(Error(J(423)),e),e=kd(t,e,i,n,r);break e}else if(i!==r){r=hs(Error(J(424)),e),e=kd(t,e,i,n,r);break e}else for(nn=bi(e.stateNode.containerInfo.firstChild),sn=e,Ye=!0,Pn=null,n=Am(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cs(),i===r){e=li(t,e,n);break e}Ft(t,e,i,n)}e=e.child}return e;case 5:return Lm(e),t===null&&lc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ic(i,r)?o=null:s!==null&&ic(i,s)&&(e.flags|=32),Jm(t,e),Ft(t,e,o,n),e.child;case 6:return t===null&&lc(e),null;case 13:return tg(t,e,n);case 4:return ff(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fs(e,null,i,n):Ft(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),Rd(t,e,i,r,n);case 7:return Ft(t,e,e.pendingProps,n),e.child;case 8:return Ft(t,e,e.pendingProps.children,n),e.child;case 12:return Ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,He(Ha,i._currentValue),i._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===r.children&&!Xt.current){e=li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ii(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),uc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),uc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ft(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,rs(e,n),r=Sn(r),i=i(r),e.flags|=1,Ft(t,e,i,n),e.child;case 14:return i=e.type,r=An(i,e.pendingProps),r=An(i.type,r),Id(t,e,i,r,n);case 15:return Km(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),wa(t,e),e.tag=1,qt(i)?(t=!0,Ba(e)):t=!1,rs(e,n),bm(e,i,r),fc(e,i,r,n),pc(null,e,i,!0,t,n);case 19:return ng(t,e,n);case 22:return Qm(t,e,n)}throw Error(J(156,e.tag))};function vg(t,e){return Wp(t,e)}function yv(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,e,n,i){return new yv(t,e,n,i)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sv(t){if(typeof t=="function")return bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wc)return 11;if(t===jc)return 14}return 2}function Pi(t,e){var n=t.alternate;return n===null?(n=vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ba(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Gr:return sr(n.children,r,s,e);case Hc:o=8,r|=8;break;case ku:return t=vn(12,n,e,r|2),t.elementType=ku,t.lanes=s,t;case Fu:return t=vn(13,n,e,r),t.elementType=Fu,t.lanes=s,t;case zu:return t=vn(19,n,e,r),t.elementType=zu,t.lanes=s,t;case Cp:return fl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tp:o=10;break e;case bp:o=9;break e;case Wc:o=11;break e;case jc:o=14;break e;case mi:o=16,i=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=vn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function sr(t,e,n,i){return t=vn(7,t,i,e),t.lanes=n,t}function fl(t,e,n,i){return t=vn(22,t,i,e),t.elementType=Cp,t.lanes=n,t.stateNode={isHidden:!1},t}function Yl(t,e,n){return t=vn(6,t,null,e),t.lanes=n,t}function $l(t,e,n){return e=vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Mv(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Cf(t,e,n,i,r,s,o,a,l){return t=new Mv(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cf(s),t}function wv(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function xg(t){if(!t)return Ni;t=t._reactInternals;e:{if(xr(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(qt(n))return vm(t,n,e)}return e}function yg(t,e,n,i,r,s,o,a,l){return t=Cf(n,i,!0,t,r,s,o,a,l),t.context=xg(null),n=t.current,i=zt(),r=Li(n),s=ii(i,r),s.callback=e??null,Ci(n,s,r),t.current.lanes=r,Eo(t,r,i),Yt(t,i),t}function dl(t,e,n,i){var r=e.current,s=zt(),o=Li(r);return n=xg(n),e.context===null?e.context=n:e.pendingContext=n,e=ii(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ci(r,e,o),t!==null&&(Nn(t,r,o,s),ya(t,r,o)),o}function Ja(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Af(t,e){jd(t,e),(t=t.alternate)&&jd(t,e)}function Ev(){return null}var Sg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lf(t){this._internalRoot=t}hl.prototype.render=Lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));dl(t,e,null,null)};hl.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hr(function(){dl(null,t,null,null)}),e[oi]=null}};function hl(t){this._internalRoot=t}hl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Kp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vi.length&&e!==0&&e<vi[n].priority;n++);vi.splice(n,0,t),n===0&&Jp(t)}};function Pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xd(){}function Tv(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ja(o);s.call(u)}}var o=yg(e,i,t,0,null,!1,!1,"",Xd);return t._reactRootContainer=o,t[oi]=o.current,lo(t.nodeType===8?t.parentNode:t),hr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ja(l);a.call(u)}}var l=Cf(t,0,!1,null,null,!1,!1,"",Xd);return t._reactRootContainer=l,t[oi]=l.current,lo(t.nodeType===8?t.parentNode:t),hr(function(){dl(e,l,n,i)}),l}function ml(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ja(o);a.call(l)}}dl(e,o,t,r)}else o=Tv(n,e,t,r,i);return Ja(o)}$p=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vs(e.pendingLanes);n!==0&&(Yc(e,n|1),Yt(e,tt()),!(Fe&6)&&(ps=tt()+500,Ui()))}break;case 13:hr(function(){var i=ai(t,1);if(i!==null){var r=zt();Nn(i,t,1,r)}}),Af(t,1)}};$c=function(t){if(t.tag===13){var e=ai(t,134217728);if(e!==null){var n=zt();Nn(e,t,134217728,n)}Af(t,134217728)}};Zp=function(t){if(t.tag===13){var e=Li(t),n=ai(t,e);if(n!==null){var i=zt();Nn(n,t,e,i)}Af(t,e)}};Kp=function(){return Ve};Qp=function(t,e){var n=Ve;try{return Ve=t,e()}finally{Ve=n}};qu=function(t,e,n){switch(e){case"input":if(Bu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=sl(i);if(!r)throw Error(J(90));Lp(i),Bu(i,r)}}}break;case"textarea":Dp(t,n);break;case"select":e=n.value,e!=null&&es(t,!!n.multiple,e,!1)}};Op=wf;Up=hr;var bv={usingClientEntryPoint:!1,Events:[bo,Xr,sl,Fp,zp,wf]},Ds={findFiberByHostInstance:Ji,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Cv={bundleType:Ds.bundleType,version:Ds.version,rendererPackageName:Ds.rendererPackageName,rendererConfig:Ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gp(t),t===null?null:t.stateNode},findFiberByHostInstance:Ds.findFiberByHostInstance||Ev,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{tl=Yo.inject(Cv),Gn=Yo}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bv;un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pf(e))throw Error(J(200));return wv(t,e,null,n)};un.createRoot=function(t,e){if(!Pf(t))throw Error(J(299));var n=!1,i="",r=Sg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Cf(t,1,!1,null,null,n,!1,i,r),t[oi]=e.current,lo(t.nodeType===8?t.parentNode:t),new Lf(e)};un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=Gp(e),t=t===null?null:t.stateNode,t};un.flushSync=function(t){return hr(t)};un.hydrate=function(t,e,n){if(!pl(e))throw Error(J(200));return ml(null,t,e,!0,n)};un.hydrateRoot=function(t,e,n){if(!Pf(t))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Sg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yg(e,null,t,1,n??null,r,!1,s,o),t[oi]=e.current,lo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new hl(e)};un.render=function(t,e,n){if(!pl(e))throw Error(J(200));return ml(null,t,e,!1,n)};un.unmountComponentAtNode=function(t){if(!pl(t))throw Error(J(40));return t._reactRootContainer?(hr(function(){ml(null,null,t,!1,function(){t._reactRootContainer=null,t[oi]=null})}),!0):!1};un.unstable_batchedUpdates=wf;un.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!pl(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return ml(t,e,n,!1,i)};un.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=un})(E0);var qd=Ru;Du.createRoot=qd.createRoot,Du.hydrateRoot=qd.hydrateRoot;const Av="modulepreload",Lv=function(t){return"/Builder3D/"+t},Yd={},Pv=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Lv(s),s in Yd)return;Yd[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let c=r.length-1;c>=0;c--){const d=r[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Av,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Df="149",Er={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dv=0,$d=1,Rv=2,Mg=1,wg=2,Hs=3,ki=0,on=1,Vn=2,Di=0,os=1,Zd=2,Kd=3,Qd=4,Iv=5,Br=100,Nv=101,kv=102,Jd=103,eh=104,Fv=200,zv=201,Ov=202,Uv=203,Eg=204,Tg=205,Bv=206,Vv=207,Gv=208,Hv=209,Wv=210,jv=0,Xv=1,qv=2,bc=3,Yv=4,$v=5,Zv=6,Kv=7,bg=0,Qv=1,Jv=2,ri=0,ex=1,tx=2,nx=3,ix=4,rx=5,Cg=300,ms=301,gs=302,Cc=303,Ac=304,gl=306,Lc=1e3,Dn=1001,Pc=1002,xt=1003,th=1004,Zl=1005,gn=1006,sx=1007,vo=1008,pr=1009,ox=1010,ax=1011,Ag=1012,lx=1013,nr=1014,ir=1015,xo=1016,ux=1017,cx=1018,as=1020,fx=1021,Rn=1023,dx=1024,hx=1025,or=1026,_s=1027,px=1028,mx=1029,gx=1030,_x=1031,vx=1033,Kl=33776,Ql=33777,Jl=33778,eu=33779,nh=35840,ih=35841,rh=35842,sh=35843,xx=36196,oh=37492,ah=37496,lh=37808,uh=37809,ch=37810,fh=37811,dh=37812,hh=37813,ph=37814,mh=37815,gh=37816,_h=37817,vh=37818,xh=37819,yh=37820,Sh=37821,tu=36492,yx=36283,Mh=36284,wh=36285,Eh=36286,mr=3e3,je=3001,Sx=3200,Mx=3201,wx=0,Ex=1,On="srgb",yo="srgb-linear",nu=7680,Tx=519,Th=35044,bh="300 es",Dc=1035;class yr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iu=Math.PI/180,Ch=180/Math.PI;function Ao(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[t&255]+At[t>>8&255]+At[t>>16&255]+At[t>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[n&63|128]+At[n>>8&255]+"-"+At[n>>16&255]+At[n>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function bx(t,e){return(t%e+e)%e}function ru(t,e,n){return(1-n)*t+n*e}function Ah(t){return(t&t-1)===0&&t!==0}function Rc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function $o(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,n=0){Ae.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rn{constructor(){rn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],m=i[5],x=i[8],h=r[0],p=r[3],g=r[6],_=r[1],v=r[4],M=r[7],S=r[2],A=r[5],L=r[8];return s[0]=o*h+a*_+l*S,s[3]=o*p+a*v+l*A,s[6]=o*g+a*M+l*L,s[1]=u*h+c*_+d*S,s[4]=u*p+c*v+d*A,s[7]=u*g+c*M+d*L,s[2]=f*h+m*_+x*S,s[5]=f*p+m*v+x*A,s[8]=f*g+m*M+x*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,m=u*s-o*l,x=n*d+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/x;return e[0]=d*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=f*h,e[4]=(c*n-r*l)*h,e[5]=(r*s-a*n)*h,e[6]=m*h,e[7]=(i*l-u*n)*h,e[8]=(o*n-i*s)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(su.makeScale(e,n)),this}rotate(e){return this.premultiply(su.makeRotation(-e)),this}translate(e,n){return this.premultiply(su.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const su=new rn;function Lg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function So(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ar(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ca(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const ou={[On]:{[yo]:ar},[yo]:{[On]:Ca}},It={legacyMode:!0,get workingColorSpace(){return yo},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(ou[e]&&ou[e][n]!==void 0){const i=ou[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},at={r:0,g:0,b:0},En={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function au(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Ko(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=It.workingColorSpace){return this.r=e,this.g=n,this.b=i,It.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=It.workingColorSpace){if(e=bx(e,1),n=Wt(n,0,1),i=Wt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=au(o,s,e+1/3),this.g=au(o,s,e),this.b=au(o,s,e-1/3)}return It.toWorkingColorSpace(this,r),this}setStyle(e,n=On){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,It.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,It.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,It.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,It.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=On){const i=Pg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return It.fromWorkingColorSpace(Ko(this,at),e),Wt(at.r*255,0,255)<<16^Wt(at.g*255,0,255)<<8^Wt(at.b*255,0,255)<<0}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=It.workingColorSpace){It.fromWorkingColorSpace(Ko(this,at),n);const i=at.r,r=at.g,s=at.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=It.workingColorSpace){return It.fromWorkingColorSpace(Ko(this,at),n),e.r=at.r,e.g=at.g,e.b=at.b,e}getStyle(e=On){return It.fromWorkingColorSpace(Ko(this,at),e),e!==On?`color(${e} ${at.r} ${at.g} ${at.b})`:`rgb(${at.r*255|0},${at.g*255|0},${at.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(En),En.h+=e,En.s+=n,En.l+=i,this.setHSL(En.h,En.s,En.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(En),e.getHSL(Zo);const i=ru(En.h,Zo.h,n),r=ru(En.s,Zo.s,n),s=ru(En.l,Zo.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}$e.NAMES=Pg;let br;class Dg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{br===void 0&&(br=So("canvas")),br.width=e.width,br.height=e.height;const i=br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=So("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ar(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ar(n[i]/255)*255):n[i]=ar(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Rg{constructor(e=null){this.isSource=!0,this.uuid=Ao(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lu(r[o].image)):s.push(lu(r[o]))}else s=lu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Dg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cx=0;class $t extends yr{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=Dn,r=Dn,s=gn,o=vo,a=Rn,l=pr,u=$t.DEFAULT_ANISOTROPY,c=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Ao(),this.name="",this.source=new Rg(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lc:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lc:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Cg;$t.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,n=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],m=l[5],x=l[9],h=l[2],p=l[6],g=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-h)<.01&&Math.abs(x-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+h)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,M=(m+1)/2,S=(g+1)/2,A=(c+f)/4,L=(d+h)/4,y=(x+p)/4;return v>M&&v>S?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=L/i):M>S?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=y/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=L/s,r=y/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-x)*(p-x)+(d-h)*(d-h)+(f-c)*(f-c));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(d-h)/_,this.z=(f-c)/_,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gr extends yr{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:gn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Rg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ig extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ax extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=xt,this.minFilter=xt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _r{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],h=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=m,e[n+2]=x,e[n+3]=h;return}if(d!==h||l!==f||u!==m||c!==x){let p=1-a;const g=l*f+u*m+c*x+d*h,_=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const S=Math.sqrt(v),A=Math.atan2(S,g*_);p=Math.sin(p*A)/S,a=Math.sin(a*A)/S}const M=a*_;if(l=l*p+f*M,u=u*p+m*M,c=c*p+x*M,d=d*p+h*M,p===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+c*d+l*m-u*f,e[n+1]=l*x+c*f+u*d-a*m,e[n+2]=u*x+c*m+a*f-l*d,e[n+3]=c*x-a*d-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*m*x,this._y=u*m*d-f*c*x,this._z=u*c*x+f*m*d,this._w=u*c*d-f*m*x;break;case"YXZ":this._x=f*c*d+u*m*x,this._y=u*m*d-f*c*x,this._z=u*c*x-f*m*d,this._w=u*c*d+f*m*x;break;case"ZXY":this._x=f*c*d-u*m*x,this._y=u*m*d+f*c*x,this._z=u*c*x+f*m*d,this._w=u*c*d-f*m*x;break;case"ZYX":this._x=f*c*d-u*m*x,this._y=u*m*d+f*c*x,this._z=u*c*x-f*m*d,this._w=u*c*d+f*m*x;break;case"YZX":this._x=f*c*d+u*m*x,this._y=u*m*d+f*c*x,this._z=u*c*x-f*m*d,this._w=u*c*d-f*m*x;break;case"XZY":this._x=f*c*d-u*m*x,this._y=u*m*d-f*c*x,this._z=u*c*x+f*m*d,this._w=u*c*d+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,d=l*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uu=new B,Lh=new _r;class Lo{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Wi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Wi)}else i.boundingBox===null&&i.computeBoundingBox(),cu.copy(i.boundingBox),cu.applyMatrix4(e.matrixWorld),this.union(cu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),Qo.subVectors(this.max,Rs),Cr.subVectors(e.a,Rs),Ar.subVectors(e.b,Rs),Lr.subVectors(e.c,Rs),fi.subVectors(Ar,Cr),di.subVectors(Lr,Ar),ji.subVectors(Cr,Lr);let n=[0,-fi.z,fi.y,0,-di.z,di.y,0,-ji.z,ji.y,fi.z,0,-fi.x,di.z,0,-di.x,ji.z,0,-ji.x,-fi.y,fi.x,0,-di.y,di.x,0,-ji.y,ji.x,0];return!fu(n,Cr,Ar,Lr,Qo)||(n=[1,0,0,0,1,0,0,0,1],!fu(n,Cr,Ar,Lr,Qo))?!1:(Jo.crossVectors(fi,di),n=[Jo.x,Jo.y,Jo.z],fu(n,Cr,Ar,Lr,Qo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Wi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new B,new B,new B,new B,new B,new B,new B,new B],Wi=new B,cu=new Lo,Cr=new B,Ar=new B,Lr=new B,fi=new B,di=new B,ji=new B,Rs=new B,Qo=new B,Jo=new B,Xi=new B;function fu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Xi.fromArray(t,s);const a=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),l=e.dot(Xi),u=n.dot(Xi),c=i.dot(Xi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Lx=new Lo,Is=new B,du=new B;class Rf{constructor(e=new B,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Lx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const n=Is.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Is,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(du)),this.expandByPoint(Is.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new B,hu=new B,ea=new B,hi=new B,pu=new B,ta=new B,mu=new B;class Ng{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Yn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yn.copy(this.direction).multiplyScalar(n).add(this.origin),Yn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hu.copy(e).add(n).multiplyScalar(.5),ea.copy(n).sub(e).normalize(),hi.copy(this.origin).sub(hu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ea),a=hi.dot(this.direction),l=-hi.dot(ea),u=hi.lengthSq(),c=Math.abs(1-o*o);let d,f,m,x;if(c>0)if(d=o*l-a,f=o*a-l,x=s*c,d>=0)if(f>=-x)if(f<=x){const h=1/c;d*=h,f*=h,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(ea).multiplyScalar(f).add(hu),m}intersectSphere(e,n){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,n,i,r,s){pu.subVectors(n,e),ta.subVectors(i,e),mu.crossVectors(pu,ta);let o=this.direction.dot(mu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);const l=a*this.direction.dot(ta.crossVectors(hi,ta));if(l<0)return null;const u=a*this.direction.dot(pu.cross(hi));if(u<0||l+u>o)return null;const c=-a*hi.dot(mu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,u,c,d,f,m,x,h,p){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=d,g[14]=f,g[3]=m,g[7]=x,g[11]=h,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,m=o*d,x=a*c,h=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=m+x*u,n[5]=f-h*u,n[9]=-a*l,n[2]=h-f*u,n[6]=x+m*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,m=l*d,x=u*c,h=u*d;n[0]=f+h*a,n[4]=x*a-m,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=m*a-x,n[6]=h+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,m=l*d,x=u*c,h=u*d;n[0]=f-h*a,n[4]=-o*d,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*c,n[9]=h-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,m=o*d,x=a*c,h=a*d;n[0]=l*c,n[4]=x*u-m,n[8]=f*u+h,n[1]=l*d,n[5]=h*u+f,n[9]=m*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*u,x=a*l,h=a*u;n[0]=l*c,n[4]=h-f*d,n[8]=x*d+m,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=m*d+x,n[10]=f-h*d}else if(e.order==="XZY"){const f=o*l,m=o*u,x=a*l,h=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+h,n[5]=o*c,n[9]=m*d-x,n[2]=x*d-m,n[6]=a*c,n[10]=h*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Px,e,Dx)}lookAt(e,n,i){const r=this.elements;return Jt.subVectors(e,n),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),pi.crossVectors(i,Jt),pi.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),pi.crossVectors(i,Jt)),pi.normalize(),na.crossVectors(Jt,pi),r[0]=pi.x,r[4]=na.x,r[8]=Jt.x,r[1]=pi.y,r[5]=na.y,r[9]=Jt.y,r[2]=pi.z,r[6]=na.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],m=i[13],x=i[2],h=i[6],p=i[10],g=i[14],_=i[3],v=i[7],M=i[11],S=i[15],A=r[0],L=r[4],y=r[8],b=r[12],P=r[1],$=r[5],Z=r[9],F=r[13],k=r[2],q=r[6],K=r[10],Q=r[14],R=r[3],V=r[7],G=r[11],re=r[15];return s[0]=o*A+a*P+l*k+u*R,s[4]=o*L+a*$+l*q+u*V,s[8]=o*y+a*Z+l*K+u*G,s[12]=o*b+a*F+l*Q+u*re,s[1]=c*A+d*P+f*k+m*R,s[5]=c*L+d*$+f*q+m*V,s[9]=c*y+d*Z+f*K+m*G,s[13]=c*b+d*F+f*Q+m*re,s[2]=x*A+h*P+p*k+g*R,s[6]=x*L+h*$+p*q+g*V,s[10]=x*y+h*Z+p*K+g*G,s[14]=x*b+h*F+p*Q+g*re,s[3]=_*A+v*P+M*k+S*R,s[7]=_*L+v*$+M*q+S*V,s[11]=_*y+v*Z+M*K+S*G,s[15]=_*b+v*F+M*Q+S*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],m=e[14],x=e[3],h=e[7],p=e[11],g=e[15];return x*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*m-i*l*m)+h*(+n*l*m-n*u*f+s*o*f-r*o*m+r*u*c-s*l*c)+p*(+n*u*d-n*a*m-s*o*d+i*o*m+s*a*c-i*u*c)+g*(-r*a*c-n*l*d+n*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],m=e[11],x=e[12],h=e[13],p=e[14],g=e[15],_=d*p*u-h*f*u+h*l*m-a*p*m-d*l*g+a*f*g,v=x*f*u-c*p*u-x*l*m+o*p*m+c*l*g-o*f*g,M=c*h*u-x*d*u+x*a*m-o*h*m-c*a*g+o*d*g,S=x*d*l-c*h*l-x*a*f+o*h*f+c*a*p-o*d*p,A=n*_+i*v+r*M+s*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=_*L,e[1]=(h*f*s-d*p*s-h*r*m+i*p*m+d*r*g-i*f*g)*L,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*g+i*l*g)*L,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*m-i*l*m)*L,e[4]=v*L,e[5]=(c*p*s-x*f*s+x*r*m-n*p*m-c*r*g+n*f*g)*L,e[6]=(x*l*s-o*p*s-x*r*u+n*p*u+o*r*g-n*l*g)*L,e[7]=(o*f*s-c*l*s+c*r*u-n*f*u-o*r*m+n*l*m)*L,e[8]=M*L,e[9]=(x*d*s-c*h*s-x*i*m+n*h*m+c*i*g-n*d*g)*L,e[10]=(o*h*s-x*a*s+x*i*u-n*h*u-o*i*g+n*a*g)*L,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*m-n*a*m)*L,e[12]=S*L,e[13]=(c*h*r-x*d*r+x*i*f-n*h*f-c*i*p+n*d*p)*L,e[14]=(x*a*r-o*h*r-x*i*l+n*h*l+o*i*p-n*a*p)*L,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*f+n*a*f)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,f=s*u,m=s*c,x=s*d,h=o*c,p=o*d,g=a*d,_=l*u,v=l*c,M=l*d,S=i.x,A=i.y,L=i.z;return r[0]=(1-(h+g))*S,r[1]=(m+M)*S,r[2]=(x-v)*S,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(f+g))*A,r[6]=(p+_)*A,r[7]=0,r[8]=(x+v)*L,r[9]=(p-_)*L,r[10]=(1-(f+h))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const o=Pr.set(r[4],r[5],r[6]).length(),a=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Tn.copy(this);const u=1/s,c=1/o,d=1/a;return Tn.elements[0]*=u,Tn.elements[1]*=u,Tn.elements[2]*=u,Tn.elements[4]*=c,Tn.elements[5]*=c,Tn.elements[6]*=c,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,n.setFromRotationMatrix(Tn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),d=(n+e)*l,f=(i+r)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Pr=new B,Tn=new Mt,Px=new B(0,0,0),Dx=new B(1,1,1),pi=new B,na=new B,Jt=new B,Ph=new Mt,Dh=new _r;class _l{constructor(e=0,n=0,i=0,r=_l.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ph,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_l.DEFAULT_ORDER="XYZ";class If{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rx=0;const Rh=new B,Dr=new _r,$n=new Mt,ia=new B,Ns=new B,Ix=new B,Nx=new _r,Ih=new B(1,0,0),Nh=new B(0,1,0),kh=new B(0,0,1),kx={type:"added"},Fh={type:"removed"};class an extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new B,n=new _l,i=new _r,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new rn}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new If,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,n){return Dr.setFromAxisAngle(e,n),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(Ih,e)}rotateY(e){return this.rotateOnAxis(Nh,e)}rotateZ(e){return this.rotateOnAxis(kh,e)}translateOnAxis(e,n){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ih,e)}translateY(e){return this.translateOnAxis(Nh,e)}translateZ(e){return this.translateOnAxis(kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ia.copy(e):ia.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ns,ia,this.up):$n.lookAt(ia,Ns,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix($n),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Fh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Fh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,Ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Nx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new B(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new B,Zn=new B,gu=new B,Kn=new B,Rr=new B,Ir=new B,zh=new B,_u=new B,vu=new B,xu=new B;class ei{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),bn.subVectors(e,n),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){bn.subVectors(r,n),Zn.subVectors(i,n),gu.subVectors(e,n);const o=bn.dot(bn),a=bn.dot(Zn),l=bn.dot(gu),u=Zn.dot(Zn),c=Zn.dot(gu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(u*l-a*c)*f,x=(o*c-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Kn),Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Kn),l.set(0,0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l}static isFrontFacing(e,n,i,r){return bn.subVectors(i,n),Zn.subVectors(e,n),bn.cross(Zn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),bn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ei.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Rr.subVectors(r,i),Ir.subVectors(s,i),_u.subVectors(e,i);const l=Rr.dot(_u),u=Ir.dot(_u);if(l<=0&&u<=0)return n.copy(i);vu.subVectors(e,r);const c=Rr.dot(vu),d=Ir.dot(vu);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Rr,o);xu.subVectors(e,s);const m=Rr.dot(xu),x=Ir.dot(xu);if(x>=0&&m<=x)return n.copy(s);const h=m*u-l*x;if(h<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Ir,a);const p=c*x-m*d;if(p<=0&&d-c>=0&&m-x>=0)return zh.subVectors(s,r),a=(d-c)/(d-c+(m-x)),n.copy(r).addScaledVector(zh,a);const g=1/(p+h+f);return o=h*g,a=f*g,n.copy(i).addScaledVector(Rr,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Fx=0;class vl extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=os,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Eg,this.blendDst=Tg,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=bc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nu,this.stencilZFail=nu,this.stencilZPass=nu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Po extends vl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new B,ra=new Ae;class Wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Th,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ra.fromBufferAttribute(this,n),ra.applyMatrix3(e),this.setXY(n,ra.x,ra.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)st.fromBufferAttribute(this,n),st.applyMatrix3(e),this.setXYZ(n,st.x,st.y,st.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)st.fromBufferAttribute(this,n),st.applyMatrix4(e),this.setXYZ(n,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)st.fromBufferAttribute(this,n),st.applyNormalMatrix(e),this.setXYZ(n,st.x,st.y,st.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)st.fromBufferAttribute(this,n),st.transformDirection(e),this.setXYZ(n,st.x,st.y,st.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$o(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$o(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$o(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$o(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Th&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class kg extends Wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Fg extends Wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class lr extends Wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let zx=0;const hn=new Mt,yu=new an,Nr=new B,en=new Lo,ks=new Lo,mt=new B;class Sr extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lg(e)?Fg:kg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new rn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,n,i){return hn.makeTranslation(e,n,i),this.applyMatrix4(hn),this}scale(e,n,i){return hn.makeScale(e,n,i),this.applyMatrix4(hn),this}lookAt(e){return yu.lookAt(e),yu.updateMatrix(),this.applyMatrix4(yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new lr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(en.min,ks.min),en.expandByPoint(mt),mt.addVectors(en.max,ks.max),en.expandByPoint(mt)):(en.expandByPoint(ks.min),en.expandByPoint(ks.max))}en.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)mt.fromBufferAttribute(a,u),l&&(Nr.fromBufferAttribute(e,u),mt.add(Nr)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let P=0;P<a;P++)u[P]=new B,c[P]=new B;const d=new B,f=new B,m=new B,x=new Ae,h=new Ae,p=new Ae,g=new B,_=new B;function v(P,$,Z){d.fromArray(r,P*3),f.fromArray(r,$*3),m.fromArray(r,Z*3),x.fromArray(o,P*2),h.fromArray(o,$*2),p.fromArray(o,Z*2),f.sub(d),m.sub(d),h.sub(x),p.sub(x);const F=1/(h.x*p.y-p.x*h.y);isFinite(F)&&(g.copy(f).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(F),_.copy(m).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(F),u[P].add(g),u[$].add(g),u[Z].add(g),c[P].add(_),c[$].add(_),c[Z].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let P=0,$=M.length;P<$;++P){const Z=M[P],F=Z.start,k=Z.count;for(let q=F,K=F+k;q<K;q+=3)v(i[q+0],i[q+1],i[q+2])}const S=new B,A=new B,L=new B,y=new B;function b(P){L.fromArray(s,P*3),y.copy(L);const $=u[P];S.copy($),S.sub(L.multiplyScalar(L.dot($))).normalize(),A.crossVectors(y,$);const F=A.dot(c[P])<0?-1:1;l[P*4]=S.x,l[P*4+1]=S.y,l[P*4+2]=S.z,l[P*4+3]=F}for(let P=0,$=M.length;P<$;++P){const Z=M[P],F=Z.start,k=Z.count;for(let q=F,K=F+k;q<K;q+=3)b(i[q+0]),b(i[q+1]),b(i[q+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,c=new B,d=new B;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,h),o.fromBufferAttribute(n,p),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)mt.fromBufferAttribute(e,n),mt.normalize(),e.setXYZ(n,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let m=0,x=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*c;for(let g=0;g<c;g++)f[x++]=u[m++]}return new Wn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Sr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],m=e(f,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const m=u[d];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,m=d.length;f<m;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oh=new Mt,kr=new Ng,Su=new Rf,Fs=new B,zs=new B,Os=new B,Mu=new B,sa=new B,oa=new Ae,aa=new Ae,la=new Ae,wu=new B,ua=new B;class xn extends an{constructor(e=new Sr,n=new Po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){sa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Mu.fromBufferAttribute(d,e),o?sa.addScaledVector(Mu,c):sa.addScaledVector(Mu.sub(n),c))}n.add(sa)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Su.copy(i.boundingSphere),Su.applyMatrix4(s),e.ray.intersectsSphere(Su)===!1)||(Oh.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Oh),i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const h=d[m],p=r[h.materialIndex],g=Math.max(h.start,f.start),_=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let v=g,M=_;v<M;v+=3){const S=a.getX(v),A=a.getX(v+1),L=a.getX(v+2);o=ca(this,p,e,kr,u,c,S,A,L),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let h=m,p=x;h<p;h+=3){const g=a.getX(h),_=a.getX(h+1),v=a.getX(h+2);o=ca(this,r,e,kr,u,c,g,_,v),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const h=d[m],p=r[h.materialIndex],g=Math.max(h.start,f.start),_=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let v=g,M=_;v<M;v+=3){const S=v,A=v+1,L=v+2;o=ca(this,p,e,kr,u,c,S,A,L),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let h=m,p=x;h<p;h+=3){const g=h,_=h+1,v=h+2;o=ca(this,r,e,kr,u,c,g,_,v),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}}}function Ox(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ki,a),l===null)return null;ua.copy(a),ua.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ua);return u<n.near||u>n.far?null:{distance:u,point:ua.clone(),object:t}}function ca(t,e,n,i,r,s,o,a,l){t.getVertexPosition(o,Fs),t.getVertexPosition(a,zs),t.getVertexPosition(l,Os);const u=Ox(t,e,n,i,Fs,zs,Os,wu);if(u){r&&(oa.fromBufferAttribute(r,o),aa.fromBufferAttribute(r,a),la.fromBufferAttribute(r,l),u.uv=ei.getUV(wu,Fs,zs,Os,oa,aa,la,new Ae)),s&&(oa.fromBufferAttribute(s,o),aa.fromBufferAttribute(s,a),la.fromBufferAttribute(s,l),u.uv2=ei.getUV(wu,Fs,zs,Os,oa,aa,la,new Ae));const c={a:o,b:a,c:l,normal:new B,materialIndex:0};ei.getNormal(Fs,zs,Os,c.normal),u.face=c}return u}class Mr extends Sr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new lr(u,3)),this.setAttribute("normal",new lr(c,3)),this.setAttribute("uv",new lr(d,2));function x(h,p,g,_,v,M,S,A,L,y,b){const P=M/L,$=S/y,Z=M/2,F=S/2,k=A/2,q=L+1,K=y+1;let Q=0,R=0;const V=new B;for(let G=0;G<K;G++){const re=G*$-F;for(let z=0;z<q;z++){const Y=z*P-Z;V[h]=Y*_,V[p]=re*v,V[g]=k,u.push(V.x,V.y,V.z),V[h]=0,V[p]=0,V[g]=A>0?1:-1,c.push(V.x,V.y,V.z),d.push(z/L),d.push(1-G/y),Q+=1}}for(let G=0;G<y;G++)for(let re=0;re<L;re++){const z=f+re+q*G,Y=f+re+q*(G+1),ne=f+(re+1)+q*(G+1),se=f+(re+1)+q*G;l.push(z,Y,se),l.push(Y,ne,se),R+=6}a.addGroup(m,R,b),m+=R,f+=Q}}static fromJSON(e){return new Mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function kt(t){const e={};for(let n=0;n<t.length;n++){const i=vs(t[n]);for(const r in i)e[r]=i[r]}return e}function Ux(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function zg(t){return t.getRenderTarget()===null&&t.outputEncoding===je?On:yo}const Bx={clone:vs,merge:kt};var Vx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends vl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vx,this.fragmentShader=Gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=Ux(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Og extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends Og{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ch*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(iu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ch*2*Math.atan(Math.tan(iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(iu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fr=-90,zr=1;class Hx extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new _n(Fr,zr,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new _n(Fr,zr,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new _n(Fr,zr,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new _n(Fr,zr,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new _n(Fr,zr,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new _n(Fr,zr,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=ri,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Ug extends $t{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ms,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wx extends gr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ug(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:gn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Mr(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Di});s.uniforms.tEquirect.value=n;const o=new xn(r,s),a=n.minFilter;return n.minFilter===vo&&(n.minFilter=gn),new Hx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Eu=new B,jx=new B,Xx=new rn;class $i{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Eu.subVectors(i,n).cross(jx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(Eu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Xx.getNormalMatrix(e),r=this.coplanarPoint(Eu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Rf,fa=new B;class Bg{constructor(e=new $i,n=new $i,i=new $i,r=new $i,s=new $i,o=new $i){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],m=i[9],x=i[10],h=i[11],p=i[12],g=i[13],_=i[14],v=i[15];return n[0].setComponents(a-r,d-l,h-f,v-p).normalize(),n[1].setComponents(a+r,d+l,h+f,v+p).normalize(),n[2].setComponents(a+s,d+u,h+m,v+g).normalize(),n[3].setComponents(a-s,d-u,h-m,v-g).normalize(),n[4].setComponents(a-o,d-c,h-x,v-_).normalize(),n[5].setComponents(a+o,d+c,h+x,v+_).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(fa.x=r.normal.x>0?e.max.x:e.min.x,fa.y=r.normal.y>0?e.max.y:e.min.y,fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function qx(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,m=t.createBuffer();t.bindBuffer(c,m),t.bufferData(c,d,f),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,m=c.updateRange;t.bindBuffer(d,u),m.count===-1?t.bufferSubData(d,0,f):(n?t.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):t.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class Do extends Sr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,m=[],x=[],h=[],p=[];for(let g=0;g<c;g++){const _=g*f-o;for(let v=0;v<u;v++){const M=v*d-s;x.push(M,-_,0),h.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const v=_+u*g,M=_+u*(g+1),S=_+1+u*(g+1),A=_+1+u*g;m.push(v,M,A),m.push(M,S,A)}this.setIndex(m),this.setAttribute("position",new lr(x,3)),this.setAttribute("normal",new lr(h,3)),this.setAttribute("uv",new lr(p,2))}static fromJSON(e){return new Do(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ey="vec3 transformed = vec3( position );",ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ny=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,iy=`#ifdef USE_IRIDESCENCE
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
#endif`,ry=`#ifdef USE_BUMPMAP
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hy=`#define PI 3.141592653589793
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
}`,py=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,my=`vec3 transformedNormal = objectNormal;
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
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,My=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ey=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,by=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ly=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dy=`#ifdef USE_GRADIENTMAP
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
}`,Ry=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fy=`uniform bool receiveShadow;
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
#endif`,zy=`#if defined( USE_ENVMAP )
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
#endif`,Oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,By=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gy=`PhysicalMaterial material;
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
#endif`,Hy=`struct PhysicalMaterial {
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
}`,Wy=`
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
#endif`,jy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,qy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ky=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rS=`#ifdef USE_MORPHNORMALS
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
#endif`,sS=`#ifdef USE_MORPHTARGETS
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
#endif`,oS=`#ifdef USE_MORPHTARGETS
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
#endif`,aS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,lS=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,uS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dS=`#ifdef USE_NORMALMAP
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
#endif`,hS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,pS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,mS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_S=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ES=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AS=`float getShadowMask() {
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
}`,LS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PS=`#ifdef USE_SKINNING
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
#endif`,DS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RS=`#ifdef USE_SKINNING
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
#endif`,IS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zS=`#ifdef USE_TRANSMISSION
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
#endif`,OS=`#ifdef USE_TRANSMISSION
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
#endif`,US=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,BS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,VS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,GS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,HS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,WS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,jS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qS=`uniform sampler2D t2D;
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
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$S=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,QS=`#include <common>
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
}`,JS=`#if DEPTH_PACKING == 3200
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
}`,e1=`#define DISTANCE
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
}`,t1=`#define DISTANCE
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
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,r1=`uniform float scale;
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
}`,s1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,a1=`uniform vec3 diffuse;
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
}`,l1=`#define LAMBERT
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
}`,u1=`#define LAMBERT
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
}`,c1=`#define MATCAP
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
}`,f1=`#define MATCAP
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
}`,d1=`#define NORMAL
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
}`,h1=`#define NORMAL
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
}`,p1=`#define PHONG
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
}`,m1=`#define PHONG
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
}`,g1=`#define STANDARD
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
}`,_1=`#define STANDARD
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
}`,v1=`#define TOON
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
}`,x1=`#define TOON
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
}`,y1=`uniform float size;
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
}`,S1=`uniform vec3 diffuse;
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
}`,M1=`#include <common>
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
}`,w1=`uniform vec3 color;
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
}`,E1=`uniform float rotation;
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
}`,T1=`uniform vec3 diffuse;
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
}`,Te={alphamap_fragment:Yx,alphamap_pars_fragment:$x,alphatest_fragment:Zx,alphatest_pars_fragment:Kx,aomap_fragment:Qx,aomap_pars_fragment:Jx,begin_vertex:ey,beginnormal_vertex:ty,bsdfs:ny,iridescence_fragment:iy,bumpmap_pars_fragment:ry,clipping_planes_fragment:sy,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:ay,clipping_planes_vertex:ly,color_fragment:uy,color_pars_fragment:cy,color_pars_vertex:fy,color_vertex:dy,common:hy,cube_uv_reflection_fragment:py,defaultnormal_vertex:my,displacementmap_pars_vertex:gy,displacementmap_vertex:_y,emissivemap_fragment:vy,emissivemap_pars_fragment:xy,encodings_fragment:yy,encodings_pars_fragment:Sy,envmap_fragment:My,envmap_common_pars_fragment:wy,envmap_pars_fragment:Ey,envmap_pars_vertex:Ty,envmap_physical_pars_fragment:zy,envmap_vertex:by,fog_vertex:Cy,fog_pars_vertex:Ay,fog_fragment:Ly,fog_pars_fragment:Py,gradientmap_pars_fragment:Dy,lightmap_fragment:Ry,lightmap_pars_fragment:Iy,lights_lambert_fragment:Ny,lights_lambert_pars_fragment:ky,lights_pars_begin:Fy,lights_toon_fragment:Oy,lights_toon_pars_fragment:Uy,lights_phong_fragment:By,lights_phong_pars_fragment:Vy,lights_physical_fragment:Gy,lights_physical_pars_fragment:Hy,lights_fragment_begin:Wy,lights_fragment_maps:jy,lights_fragment_end:Xy,logdepthbuf_fragment:qy,logdepthbuf_pars_fragment:Yy,logdepthbuf_pars_vertex:$y,logdepthbuf_vertex:Zy,map_fragment:Ky,map_pars_fragment:Qy,map_particle_fragment:Jy,map_particle_pars_fragment:eS,metalnessmap_fragment:tS,metalnessmap_pars_fragment:nS,morphcolor_vertex:iS,morphnormal_vertex:rS,morphtarget_pars_vertex:sS,morphtarget_vertex:oS,normal_fragment_begin:aS,normal_fragment_maps:lS,normal_pars_fragment:uS,normal_pars_vertex:cS,normal_vertex:fS,normalmap_pars_fragment:dS,clearcoat_normal_fragment_begin:hS,clearcoat_normal_fragment_maps:pS,clearcoat_pars_fragment:mS,iridescence_pars_fragment:gS,output_fragment:_S,packing:vS,premultiplied_alpha_fragment:xS,project_vertex:yS,dithering_fragment:SS,dithering_pars_fragment:MS,roughnessmap_fragment:wS,roughnessmap_pars_fragment:ES,shadowmap_pars_fragment:TS,shadowmap_pars_vertex:bS,shadowmap_vertex:CS,shadowmask_pars_fragment:AS,skinbase_vertex:LS,skinning_pars_vertex:PS,skinning_vertex:DS,skinnormal_vertex:RS,specularmap_fragment:IS,specularmap_pars_fragment:NS,tonemapping_fragment:kS,tonemapping_pars_fragment:FS,transmission_fragment:zS,transmission_pars_fragment:OS,uv_pars_fragment:US,uv_pars_vertex:BS,uv_vertex:VS,uv2_pars_fragment:GS,uv2_pars_vertex:HS,uv2_vertex:WS,worldpos_vertex:jS,background_vert:XS,background_frag:qS,backgroundCube_vert:YS,backgroundCube_frag:$S,cube_vert:ZS,cube_frag:KS,depth_vert:QS,depth_frag:JS,distanceRGBA_vert:e1,distanceRGBA_frag:t1,equirect_vert:n1,equirect_frag:i1,linedashed_vert:r1,linedashed_frag:s1,meshbasic_vert:o1,meshbasic_frag:a1,meshlambert_vert:l1,meshlambert_frag:u1,meshmatcap_vert:c1,meshmatcap_frag:f1,meshnormal_vert:d1,meshnormal_frag:h1,meshphong_vert:p1,meshphong_frag:m1,meshphysical_vert:g1,meshphysical_frag:_1,meshtoon_vert:v1,meshtoon_frag:x1,points_vert:y1,points_frag:S1,shadow_vert:M1,shadow_frag:w1,sprite_vert:E1,sprite_frag:T1},oe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new rn},uv2Transform:{value:new rn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rn}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rn}}},Un={basic:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:kt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:kt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:kt([oe.points,oe.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:kt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:kt([oe.common,oe.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:kt([oe.sprite,oe.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new rn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:kt([oe.common,oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:kt([oe.lights,oe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Un.physical={uniforms:kt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const da={r:0,b:0,g:0};function b1(t,e,n,i,r,s,o){const a=new $e(0);let l=s===!0?0:1,u,c,d=null,f=0,m=null;function x(p,g){let _=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v));const M=t.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?h(a,l):v&&v.isColor&&(h(v,1),_=!0),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===gl)?(c===void 0&&(c=new xn(new Mr(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:vs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,L,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=v.encoding!==je,(d!==v||f!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new xn(new Do(2,2),new Fi({name:"BackgroundMaterial",uniforms:vs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=v.encoding!==je,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function h(p,g){p.getRGB(da,zg(t)),i.buffers.color.setClear(da.r,da.g,da.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:x}}function C1(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function d(k,q,K,Q,R){let V=!1;if(o){const G=h(Q,K,q);u!==G&&(u=G,m(u.object)),V=g(k,Q,K,R),V&&_(k,Q,K,R)}else{const G=q.wireframe===!0;(u.geometry!==Q.id||u.program!==K.id||u.wireframe!==G)&&(u.geometry=Q.id,u.program=K.id,u.wireframe=G,V=!0)}R!==null&&n.update(R,34963),(V||c)&&(c=!1,y(k,q,K,Q),R!==null&&t.bindBuffer(34963,n.get(R).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(k){return i.isWebGL2?t.bindVertexArray(k):s.bindVertexArrayOES(k)}function x(k){return i.isWebGL2?t.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function h(k,q,K){const Q=K.wireframe===!0;let R=a[k.id];R===void 0&&(R={},a[k.id]=R);let V=R[q.id];V===void 0&&(V={},R[q.id]=V);let G=V[Q];return G===void 0&&(G=p(f()),V[Q]=G),G}function p(k){const q=[],K=[],Q=[];for(let R=0;R<r;R++)q[R]=0,K[R]=0,Q[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:K,attributeDivisors:Q,object:k,attributes:{},index:null}}function g(k,q,K,Q){const R=u.attributes,V=q.attributes;let G=0;const re=K.getAttributes();for(const z in re)if(re[z].location>=0){const ne=R[z];let se=V[z];if(se===void 0&&(z==="instanceMatrix"&&k.instanceMatrix&&(se=k.instanceMatrix),z==="instanceColor"&&k.instanceColor&&(se=k.instanceColor)),ne===void 0||ne.attribute!==se||se&&ne.data!==se.data)return!0;G++}return u.attributesNum!==G||u.index!==Q}function _(k,q,K,Q){const R={},V=q.attributes;let G=0;const re=K.getAttributes();for(const z in re)if(re[z].location>=0){let ne=V[z];ne===void 0&&(z==="instanceMatrix"&&k.instanceMatrix&&(ne=k.instanceMatrix),z==="instanceColor"&&k.instanceColor&&(ne=k.instanceColor));const se={};se.attribute=ne,ne&&ne.data&&(se.data=ne.data),R[z]=se,G++}u.attributes=R,u.attributesNum=G,u.index=Q}function v(){const k=u.newAttributes;for(let q=0,K=k.length;q<K;q++)k[q]=0}function M(k){S(k,0)}function S(k,q){const K=u.newAttributes,Q=u.enabledAttributes,R=u.attributeDivisors;K[k]=1,Q[k]===0&&(t.enableVertexAttribArray(k),Q[k]=1),R[k]!==q&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,q),R[k]=q)}function A(){const k=u.newAttributes,q=u.enabledAttributes;for(let K=0,Q=q.length;K<Q;K++)q[K]!==k[K]&&(t.disableVertexAttribArray(K),q[K]=0)}function L(k,q,K,Q,R,V){i.isWebGL2===!0&&(K===5124||K===5125)?t.vertexAttribIPointer(k,q,K,R,V):t.vertexAttribPointer(k,q,K,Q,R,V)}function y(k,q,K,Q){if(i.isWebGL2===!1&&(k.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const R=Q.attributes,V=K.getAttributes(),G=q.defaultAttributeValues;for(const re in V){const z=V[re];if(z.location>=0){let Y=R[re];if(Y===void 0&&(re==="instanceMatrix"&&k.instanceMatrix&&(Y=k.instanceMatrix),re==="instanceColor"&&k.instanceColor&&(Y=k.instanceColor)),Y!==void 0){const ne=Y.normalized,se=Y.itemSize,U=n.get(Y);if(U===void 0)continue;const ye=U.buffer,_e=U.type,me=U.bytesPerElement;if(Y.isInterleavedBufferAttribute){const ce=Y.data,Be=ce.stride,Ee=Y.offset;if(ce.isInstancedInterleavedBuffer){for(let Se=0;Se<z.locationSize;Se++)S(z.location+Se,ce.meshPerAttribute);k.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Se=0;Se<z.locationSize;Se++)M(z.location+Se);t.bindBuffer(34962,ye);for(let Se=0;Se<z.locationSize;Se++)L(z.location+Se,se/z.locationSize,_e,ne,Be*me,(Ee+se/z.locationSize*Se)*me)}else{if(Y.isInstancedBufferAttribute){for(let ce=0;ce<z.locationSize;ce++)S(z.location+ce,Y.meshPerAttribute);k.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ce=0;ce<z.locationSize;ce++)M(z.location+ce);t.bindBuffer(34962,ye);for(let ce=0;ce<z.locationSize;ce++)L(z.location+ce,se/z.locationSize,_e,ne,se*me,se/z.locationSize*ce*me)}}else if(G!==void 0){const ne=G[re];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(z.location,ne);break;case 3:t.vertexAttrib3fv(z.location,ne);break;case 4:t.vertexAttrib4fv(z.location,ne);break;default:t.vertexAttrib1fv(z.location,ne)}}}}A()}function b(){Z();for(const k in a){const q=a[k];for(const K in q){const Q=q[K];for(const R in Q)x(Q[R].object),delete Q[R];delete q[K]}delete a[k]}}function P(k){if(a[k.id]===void 0)return;const q=a[k.id];for(const K in q){const Q=q[K];for(const R in Q)x(Q[R].object),delete Q[R];delete q[K]}delete a[k.id]}function $(k){for(const q in a){const K=a[q];if(K[k.id]===void 0)continue;const Q=K[k.id];for(const R in Q)x(Q[R].object),delete Q[R];delete K[k.id]}}function Z(){F(),c=!0,u!==l&&(u=l,m(u.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:P,releaseStatesOfProgram:$,initAttributes:v,enableAttribute:M,disableUnusedAttributes:A}}function A1(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,m;if(r)f=t,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,u,c,d),n.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function L1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),f=t.getParameter(35660),m=t.getParameter(3379),x=t.getParameter(34076),h=t.getParameter(34921),p=t.getParameter(36347),g=t.getParameter(36348),_=t.getParameter(36349),v=f>0,M=o||e.has("OES_texture_float"),S=v&&M,A=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:A}}function P1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new $i,a=new rn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,m){const x=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,g=t.get(d);if(!r||x===null||x.length===0||s&&!p)s?c(null):u();else{const _=s?0:i,v=_*4;let M=g.clippingState||null;l.value=M,M=c(x,f,v,m);for(let S=0;S!==v;++S)M[S]=n[S];g.clippingState=M,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,m,x){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,x!==!0||p===null){const g=m+h*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,M=m;v!==h;++v,M+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function D1(t){let e=new WeakMap;function n(o,a){return a===Cc?o.mapping=ms:a===Ac&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Cc||a===Ac)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Wx(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class R1 extends Og{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Jr=4,Uh=[.125,.215,.35,.446,.526,.582],Ki=20,Tu=new R1,Bh=new $e;let bu=null;const Zi=(1+Math.sqrt(5))/2,Ur=1/Zi,Vh=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Zi,Ur),new B(0,Zi,-Ur),new B(Ur,0,Zi),new B(-Ur,0,Zi),new B(Zi,Ur,0),new B(-Zi,Ur,0)];class Gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu),e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:xo,format:Rn,encoding:mr,depthBuffer:!1},r=Hh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I1(s)),this._blurMaterial=N1(s,e,n)}return r}_compileMaterial(e){const n=new xn(this._lodPlanes[0],e);this._renderer.compile(n,Tu)}_sceneToCubeUV(e,n,i,r){const a=new _n(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Bh),c.toneMapping=ri,c.autoClear=!1;const m=new Po({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),x=new xn(new Mr,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(Bh),h=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const v=this._cubeSize;ha(r,_*v,g>2?v:0,v,v),c.setRenderTarget(r),h&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ha(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Tu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vh[(r-1)%Vh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new xn(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ki-1),h=s/x,p=isFinite(s)?1+Math.floor(c*h):Ki;p>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ki}`);const g=[];let _=0;for(let L=0;L<Ki;++L){const y=L/h,b=Math.exp(-y*y/2);g.push(b),L===0?_+=b:L<p&&(_+=2*b)}for(let L=0;L<g.length;L++)g[L]=g[L]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-i;const M=this._sizeLods[r],S=3*M*(r>v-Jr?r-v+Jr:0),A=4*(this._cubeSize-M);ha(n,S,A,3*M,2*M),l.setRenderTarget(n),l.render(d,Tu)}}function I1(t){const e=[],n=[],i=[];let r=t;const s=t-Jr+1+Uh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Jr?l=Uh[o-t+Jr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,x=6,h=3,p=2,g=1,_=new Float32Array(h*x*m),v=new Float32Array(p*x*m),M=new Float32Array(g*x*m);for(let A=0;A<m;A++){const L=A%3*2/3-1,y=A>2?0:-1,b=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];_.set(b,h*x*A),v.set(f,p*x*A);const P=[A,A,A,A,A,A];M.set(P,g*x*A)}const S=new Sr;S.setAttribute("position",new Wn(_,h)),S.setAttribute("uv",new Wn(v,p)),S.setAttribute("faceIndex",new Wn(M,g)),e.push(S),r>Jr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Hh(t,e,n){const i=new gr(t,e,n);return i.texture.mapping=gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function N1(t,e,n){const i=new Float32Array(Ki),r=new B(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nf(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Wh(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nf(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function jh(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Nf(){return`

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
	`}function k1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Cc||l===Ac,c=l===ms||l===gs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Gh(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new Gh(t));const f=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function F1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function z1(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const m=d.morphAttributes;for(const x in m){const h=m[x];for(let p=0,g=h.length;p<g;p++)e.update(h[p],34962)}}function u(d){const f=[],m=d.index,x=d.attributes.position;let h=0;if(m!==null){const _=m.array;h=m.version;for(let v=0,M=_.length;v<M;v+=3){const S=_[v+0],A=_[v+1],L=_[v+2];f.push(S,A,A,L,L,S)}}else{const _=x.array;h=x.version;for(let v=0,M=_.length/3-1;v<M;v+=3){const S=v+0,A=v+1,L=v+2;f.push(S,A,A,L,L,S)}}const p=new(Lg(f)?Fg:kg)(f,1);p.version=h;const g=s.get(d);g&&e.remove(g),s.set(d,p)}function c(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function O1(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,m){t.drawElements(s,m,a,f*l),n.update(m,s,1)}function d(f,m,x){if(x===0)return;let h,p;if(r)h=t,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,a,f*l,x),n.update(m,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function U1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function B1(t,e){return t[0]-e[0]}function V1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function G1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new yt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0;let g=s.get(c);if(g===void 0||g.count!==p){let K=function(){k.dispose(),s.delete(c),c.removeEventListener("dispose",K)};var x=K;g!==void 0&&g.texture.dispose();const M=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let P=0;M===!0&&(P=1),S===!0&&(P=2),A===!0&&(P=3);let $=c.attributes.position.count*P,Z=1;$>e.maxTextureSize&&(Z=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const F=new Float32Array($*Z*4*p),k=new Ig(F,$,Z,p);k.type=ir,k.needsUpdate=!0;const q=P*4;for(let Q=0;Q<p;Q++){const R=L[Q],V=y[Q],G=b[Q],re=$*Z*4*Q;for(let z=0;z<R.count;z++){const Y=z*q;M===!0&&(o.fromBufferAttribute(R,z),F[re+Y+0]=o.x,F[re+Y+1]=o.y,F[re+Y+2]=o.z,F[re+Y+3]=0),S===!0&&(o.fromBufferAttribute(V,z),F[re+Y+4]=o.x,F[re+Y+5]=o.y,F[re+Y+6]=o.z,F[re+Y+7]=0),A===!0&&(o.fromBufferAttribute(G,z),F[re+Y+8]=o.x,F[re+Y+9]=o.y,F[re+Y+10]=o.z,F[re+Y+11]=G.itemSize===4?o.w:1)}}g={count:p,texture:k,size:new Ae($,Z)},s.set(c,g),c.addEventListener("dispose",K)}let _=0;for(let M=0;M<m.length;M++)_+=m[M];const v=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",m),f.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const h=m===void 0?0:m.length;let p=i[c.id];if(p===void 0||p.length!==h){p=[];for(let S=0;S<h;S++)p[S]=[S,0];i[c.id]=p}for(let S=0;S<h;S++){const A=p[S];A[0]=S,A[1]=m[S]}p.sort(V1);for(let S=0;S<8;S++)S<h&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(B1);const g=c.morphAttributes.position,_=c.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const A=a[S],L=A[0],y=A[1];L!==Number.MAX_SAFE_INTEGER&&y?(g&&c.getAttribute("morphTarget"+S)!==g[L]&&c.setAttribute("morphTarget"+S,g[L]),_&&c.getAttribute("morphNormal"+S)!==_[L]&&c.setAttribute("morphNormal"+S,_[L]),r[S]=y,v+=y):(g&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),_&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const M=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",M),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function H1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Gg=new $t,Hg=new Ig,Wg=new Ax,jg=new Ug,Xh=[],qh=[],Yh=new Float32Array(16),$h=new Float32Array(9),Zh=new Float32Array(4);function Ms(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Xh[r];if(s===void 0&&(s=new Float32Array(r),Xh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xl(t,e){let n=qh[e];n===void 0&&(n=new Int32Array(e),qh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function W1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function j1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ct(n,e))return;t.uniform2fv(this.addr,e),ft(n,e)}}function X1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ct(n,e))return;t.uniform3fv(this.addr,e),ft(n,e)}}function q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ct(n,e))return;t.uniform4fv(this.addr,e),ft(n,e)}}function Y1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ft(n,e)}else{if(ct(n,i))return;Zh.set(i),t.uniformMatrix2fv(this.addr,!1,Zh),ft(n,i)}}function $1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ft(n,e)}else{if(ct(n,i))return;$h.set(i),t.uniformMatrix3fv(this.addr,!1,$h),ft(n,i)}}function Z1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ft(n,e)}else{if(ct(n,i))return;Yh.set(i),t.uniformMatrix4fv(this.addr,!1,Yh),ft(n,i)}}function K1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ct(n,e))return;t.uniform2iv(this.addr,e),ft(n,e)}}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ct(n,e))return;t.uniform3iv(this.addr,e),ft(n,e)}}function eM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ct(n,e))return;t.uniform4iv(this.addr,e),ft(n,e)}}function tM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function nM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ct(n,e))return;t.uniform2uiv(this.addr,e),ft(n,e)}}function iM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ct(n,e))return;t.uniform3uiv(this.addr,e),ft(n,e)}}function rM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ct(n,e))return;t.uniform4uiv(this.addr,e),ft(n,e)}}function sM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Gg,r)}function oM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Wg,r)}function aM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||jg,r)}function lM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Hg,r)}function uM(t){switch(t){case 5126:return W1;case 35664:return j1;case 35665:return X1;case 35666:return q1;case 35674:return Y1;case 35675:return $1;case 35676:return Z1;case 5124:case 35670:return K1;case 35667:case 35671:return Q1;case 35668:case 35672:return J1;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}function cM(t,e){t.uniform1fv(this.addr,e)}function fM(t,e){const n=Ms(e,this.size,2);t.uniform2fv(this.addr,n)}function dM(t,e){const n=Ms(e,this.size,3);t.uniform3fv(this.addr,n)}function hM(t,e){const n=Ms(e,this.size,4);t.uniform4fv(this.addr,n)}function pM(t,e){const n=Ms(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function mM(t,e){const n=Ms(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function gM(t,e){const n=Ms(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _M(t,e){t.uniform1iv(this.addr,e)}function vM(t,e){t.uniform2iv(this.addr,e)}function xM(t,e){t.uniform3iv(this.addr,e)}function yM(t,e){t.uniform4iv(this.addr,e)}function SM(t,e){t.uniform1uiv(this.addr,e)}function MM(t,e){t.uniform2uiv(this.addr,e)}function wM(t,e){t.uniform3uiv(this.addr,e)}function EM(t,e){t.uniform4uiv(this.addr,e)}function TM(t,e,n){const i=this.cache,r=e.length,s=xl(n,r);ct(i,s)||(t.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Gg,s[o])}function bM(t,e,n){const i=this.cache,r=e.length,s=xl(n,r);ct(i,s)||(t.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Wg,s[o])}function CM(t,e,n){const i=this.cache,r=e.length,s=xl(n,r);ct(i,s)||(t.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||jg,s[o])}function AM(t,e,n){const i=this.cache,r=e.length,s=xl(n,r);ct(i,s)||(t.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Hg,s[o])}function LM(t){switch(t){case 5126:return cM;case 35664:return fM;case 35665:return dM;case 35666:return hM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return vM;case 35668:case 35672:return xM;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return wM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return AM}}class PM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=uM(n.type)}}class DM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=LM(n.type)}}class RM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Cu=/(\w+)(\])?(\[|\.)?/g;function Kh(t,e){t.seq.push(e),t.map[e.id]=e}function IM(t,e,n){const i=t.name,r=i.length;for(Cu.lastIndex=0;;){const s=Cu.exec(i),o=Cu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Kh(n,u===void 0?new PM(a,t,e):new DM(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new RM(a),Kh(n,d)),n=d}}}class Aa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);IM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Qh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let NM=0;function kM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function FM(t){switch(t){case mr:return["Linear","( value )"];case je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Jh(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+kM(t.getShaderSource(e),o)}else return r}function zM(t,e){const n=FM(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function OM(t,e){let n;switch(e){case ex:n="Linear";break;case tx:n="Reinhard";break;case nx:n="OptimizedCineon";break;case ix:n="ACESFilmic";break;case rx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function UM(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ws).join(`
`)}function BM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function VM(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ws(t){return t!==""}function ep(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(t){return t.replace(GM,HM)}function HM(t,e){const n=Te[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Ic(n)}const WM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function np(t){return t.replace(WM,jM)}function jM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ip(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Mg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===wg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Hs&&(e="SHADOWMAP_TYPE_VSM"),e}function qM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function $M(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case bg:e="ENVMAP_BLENDING_MULTIPLY";break;case Qv:e="ENVMAP_BLENDING_MIX";break;case Jv:e="ENVMAP_BLENDING_ADD";break}return e}function ZM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function KM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=XM(n),u=qM(n),c=YM(n),d=$M(n),f=ZM(n),m=n.isWebGL2?"":UM(n),x=BM(s),h=r.createProgram();let p,g,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[x].filter(Ws).join(`
`),p.length>0&&(p+=`
`),g=[m,x].filter(Ws).join(`
`),g.length>0&&(g+=`
`)):(p=[ip(n),"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),g=[m,ip(n),"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ri?"#define TONE_MAPPING":"",n.toneMapping!==ri?Te.tonemapping_pars_fragment:"",n.toneMapping!==ri?OM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,zM("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ws).join(`
`)),o=Ic(o),o=ep(o,n),o=tp(o,n),a=Ic(a),a=ep(a,n),a=tp(a,n),o=np(o),a=np(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",n.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=_+p+o,M=_+g+a,S=Qh(r,35633,v),A=Qh(r,35632,M);if(r.attachShader(h,S),r.attachShader(h,A),n.index0AttributeName!==void 0?r.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),t.debug.checkShaderErrors){const b=r.getProgramInfoLog(h).trim(),P=r.getShaderInfoLog(S).trim(),$=r.getShaderInfoLog(A).trim();let Z=!0,F=!0;if(r.getProgramParameter(h,35714)===!1){Z=!1;const k=Jh(r,S,"vertex"),q=Jh(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+b+`
`+k+`
`+q)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(P===""||$==="")&&(F=!1);F&&(this.diagnostics={runnable:Z,programLog:b,vertexShader:{log:P,prefix:p},fragmentShader:{log:$,prefix:g}})}r.deleteShader(S),r.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new Aa(r,h)),L};let y;return this.getAttributes=function(){return y===void 0&&(y=VM(r,h)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=NM++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=A,this}let QM=0;class JM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ew(e),n.set(e,i)),i}}class ew{constructor(e){this.id=QM++,this.code=e,this.usedTimes=0}}function tw(t,e,n,i,r,s,o){const a=new If,l=new JM,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,b,P,$,Z){const F=$.fog,k=Z.geometry,q=y.isMeshStandardMaterial?$.environment:null,K=(y.isMeshStandardMaterial?n:e).get(y.envMap||q),Q=K&&K.mapping===gl?K.image.height:null,R=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const V=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,G=V!==void 0?V.length:0;let re=0;k.morphAttributes.position!==void 0&&(re=1),k.morphAttributes.normal!==void 0&&(re=2),k.morphAttributes.color!==void 0&&(re=3);let z,Y,ne,se;if(R){const Be=Un[R];z=Be.vertexShader,Y=Be.fragmentShader}else z=y.vertexShader,Y=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),se=l.getFragmentShaderID(y);const U=t.getRenderTarget(),ye=y.alphaTest>0,_e=y.clearcoat>0,me=y.iridescence>0;return{isWebGL2:c,shaderID:R,shaderName:y.type,vertexShader:z,fragmentShader:Y,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:f,outputEncoding:U===null?t.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:mr,map:!!y.map,matcap:!!y.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:Q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Ex,tangentSpaceNormalMap:y.normalMapType===wx,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===je,clearcoat:_e,clearcoatMap:_e&&!!y.clearcoatMap,clearcoatRoughnessMap:_e&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!y.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!y.iridescenceMap,iridescenceThicknessMap:me&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===os,alphaMap:!!y.alphaMap,alphaTest:ye,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!k.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!F,useFog:y.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:re,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:ri,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vn,flipSided:y.side===on,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)b.push(P),b.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(g(b,y),_(b,y),b.push(t.outputEncoding)),b.push(y.customProgramCacheKey),b.join()}function g(y,b){y.push(b.precision),y.push(b.outputEncoding),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.combine),y.push(b.vertexUvs),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function _(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.lightMap&&a.enable(7),b.aoMap&&a.enable(8),b.emissiveMap&&a.enable(9),b.bumpMap&&a.enable(10),b.normalMap&&a.enable(11),b.objectSpaceNormalMap&&a.enable(12),b.tangentSpaceNormalMap&&a.enable(13),b.clearcoat&&a.enable(14),b.clearcoatMap&&a.enable(15),b.clearcoatRoughnessMap&&a.enable(16),b.clearcoatNormalMap&&a.enable(17),b.iridescence&&a.enable(18),b.iridescenceMap&&a.enable(19),b.iridescenceThicknessMap&&a.enable(20),b.displacementMap&&a.enable(21),b.specularMap&&a.enable(22),b.roughnessMap&&a.enable(23),b.metalnessMap&&a.enable(24),b.gradientMap&&a.enable(25),b.alphaMap&&a.enable(26),b.alphaTest&&a.enable(27),b.vertexColors&&a.enable(28),b.vertexAlphas&&a.enable(29),b.vertexUvs&&a.enable(30),b.vertexTangents&&a.enable(31),b.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.physicallyCorrectLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.specularIntensityMap&&a.enable(15),b.specularColorMap&&a.enable(16),b.transmission&&a.enable(17),b.transmissionMap&&a.enable(18),b.thicknessMap&&a.enable(19),b.sheen&&a.enable(20),b.sheenColorMap&&a.enable(21),b.sheenRoughnessMap&&a.enable(22),b.decodeVideoTexture&&a.enable(23),b.opaque&&a.enable(24),y.push(a.mask)}function v(y){const b=x[y.type];let P;if(b){const $=Un[b];P=Bx.clone($.uniforms)}else P=y.uniforms;return P}function M(y,b){let P;for(let $=0,Z=u.length;$<Z;$++){const F=u[$];if(F.cacheKey===b){P=F,++P.usedTimes;break}}return P===void 0&&(P=new KM(t,b,y,s),u.push(P)),P}function S(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function L(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:S,releaseShaderCache:A,programs:u,dispose:L}}function nw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function iw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function rp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function sp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,m,x,h,p){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:m,groupOrder:x,renderOrder:d.renderOrder,z:h,group:p},t[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=m,g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=h,g.group=p),e++,g}function a(d,f,m,x,h,p){const g=o(d,f,m,x,h,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):n.push(g)}function l(d,f,m,x,h,p){const g=o(d,f,m,x,h,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):n.unshift(g)}function u(d,f){n.length>1&&n.sort(d||iw),i.length>1&&i.sort(f||rp),r.length>1&&r.sort(f||rp)}function c(){for(let d=e,f=t.length;d<f;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function rw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new sp,t.set(i,[o])):r>=s.length?(o=new sp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function sw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new $e};break;case"SpotLight":n={position:new B,direction:new B,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function ow(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let aw=0;function lw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function uw(t,e){const n=new sw,i=ow(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new B);const s=new B,o=new Mt,a=new Mt;function l(c,d){let f=0,m=0,x=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let h=0,p=0,g=0,_=0,v=0,M=0,S=0,A=0,L=0,y=0;c.sort(lw);const b=d!==!0?Math.PI:1;for(let $=0,Z=c.length;$<Z;$++){const F=c[$],k=F.color,q=F.intensity,K=F.distance,Q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=k.r*q*b,m+=k.g*q*b,x+=k.b*q*b;else if(F.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(F.sh.coefficients[R],q);else if(F.isDirectionalLight){const R=n.get(F);if(R.color.copy(F.color).multiplyScalar(F.intensity*b),F.castShadow){const V=F.shadow,G=i.get(F);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,r.directionalShadow[h]=G,r.directionalShadowMap[h]=Q,r.directionalShadowMatrix[h]=F.shadow.matrix,M++}r.directional[h]=R,h++}else if(F.isSpotLight){const R=n.get(F);R.position.setFromMatrixPosition(F.matrixWorld),R.color.copy(k).multiplyScalar(q*b),R.distance=K,R.coneCos=Math.cos(F.angle),R.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),R.decay=F.decay,r.spot[g]=R;const V=F.shadow;if(F.map&&(r.spotLightMap[L]=F.map,L++,V.updateMatrices(F),F.castShadow&&y++),r.spotLightMatrix[g]=V.matrix,F.castShadow){const G=i.get(F);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,r.spotShadow[g]=G,r.spotShadowMap[g]=Q,A++}g++}else if(F.isRectAreaLight){const R=n.get(F);R.color.copy(k).multiplyScalar(q),R.halfWidth.set(F.width*.5,0,0),R.halfHeight.set(0,F.height*.5,0),r.rectArea[_]=R,_++}else if(F.isPointLight){const R=n.get(F);if(R.color.copy(F.color).multiplyScalar(F.intensity*b),R.distance=F.distance,R.decay=F.decay,F.castShadow){const V=F.shadow,G=i.get(F);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,r.pointShadow[p]=G,r.pointShadowMap[p]=Q,r.pointShadowMatrix[p]=F.shadow.matrix,S++}r.point[p]=R,p++}else if(F.isHemisphereLight){const R=n.get(F);R.skyColor.copy(F.color).multiplyScalar(q*b),R.groundColor.copy(F.groundColor).multiplyScalar(q*b),r.hemi[v]=R,v++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const P=r.hash;(P.directionalLength!==h||P.pointLength!==p||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==v||P.numDirectionalShadows!==M||P.numPointShadows!==S||P.numSpotShadows!==A||P.numSpotMaps!==L)&&(r.directional.length=h,r.spot.length=g,r.rectArea.length=_,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=A+L-y,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=y,P.directionalLength=h,P.pointLength=p,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=v,P.numDirectionalShadows=M,P.numPointShadows=S,P.numSpotShadows=A,P.numSpotMaps=L,r.version=aw++)}function u(c,d){let f=0,m=0,x=0,h=0,p=0;const g=d.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const M=c[_];if(M.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(M.isSpotLight){const S=r.spot[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),x++}else if(M.isRectAreaLight){const S=r.rectArea[h];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),a.identity(),o.copy(M.matrixWorld),o.premultiply(g),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),h++}else if(M.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),m++}else if(M.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:l,setupView:u,state:r}}function op(t,e){const n=new uw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function cw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new op(t,e),n.set(s,[l])):o>=a.length?(l=new op(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class fw extends vl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dw extends vl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pw=`uniform sampler2D shadow_pass;
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
}`;function mw(t,e,n){let i=new Bg;const r=new Ae,s=new Ae,o=new yt,a=new fw({depthPacking:Mx}),l=new dw,u={},c=n.maxTextureSize,d={[ki]:on,[on]:ki,[Vn]:Vn},f=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:hw,fragmentShader:pw}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new Sr;x.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new xn(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mg,this.render=function(M,S,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const L=t.getRenderTarget(),y=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),P=t.state;P.setBlending(Di),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let $=0,Z=M.length;$<Z;$++){const F=M[$],k=F.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const q=k.getFrameExtents();if(r.multiply(q),s.copy(k.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/q.x),r.x=s.x*q.x,k.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/q.y),r.y=s.y*q.y,k.mapSize.y=s.y)),k.map===null){const Q=this.type!==Hs?{minFilter:xt,magFilter:xt}:{};k.map=new gr(r.x,r.y,Q),k.map.texture.name=F.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const K=k.getViewportCount();for(let Q=0;Q<K;Q++){const R=k.getViewport(Q);o.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),P.viewport(o),k.updateMatrices(F,Q),i=k.getFrustum(),v(S,A,k.camera,F,this.type)}k.isPointLightShadow!==!0&&this.type===Hs&&g(k,A),k.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(L,y,b)};function g(M,S){const A=e.update(h);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new gr(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(S,null,A,f,h,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(S,null,A,m,h,null)}function _(M,S,A,L,y,b){let P=null;const $=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if($!==void 0)P=$;else if(P=A.isPointLight===!0?l:a,t.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const Z=P.uuid,F=S.uuid;let k=u[Z];k===void 0&&(k={},u[Z]=k);let q=k[F];q===void 0&&(q=P.clone(),k[F]=q),P=q}return P.visible=S.visible,P.wireframe=S.wireframe,b===Hs?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:d[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaTest,P.map=S.map,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(A.matrixWorld),P.nearDistance=L,P.farDistance=y),P}function v(M,S,A,L,y){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===Hs)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const $=e.update(M),Z=M.material;if(Array.isArray(Z)){const F=$.groups;for(let k=0,q=F.length;k<q;k++){const K=F[k],Q=Z[K.materialIndex];if(Q&&Q.visible){const R=_(M,Q,L,A.near,A.far,y);t.renderBufferDirect(A,null,$,R,M,K)}}}else if(Z.visible){const F=_(M,Z,L,A.near,A.far,y);t.renderBufferDirect(A,null,$,F,M,null)}}const P=M.children;for(let $=0,Z=P.length;$<Z;$++)v(P[$],S,A,L,y)}}function gw(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const W=new yt;let ee=null;const fe=new yt(0,0,0,0);return{setMask:function(ve){ee!==ve&&!D&&(t.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){D=ve},setClear:function(ve,Ue,ht,Tt,Bi){Bi===!0&&(ve*=Tt,Ue*=Tt,ht*=Tt),W.set(ve,Ue,ht,Tt),fe.equals(W)===!1&&(t.clearColor(ve,Ue,ht,Tt),fe.copy(W))},reset:function(){D=!1,ee=null,fe.set(-1,0,0,0)}}}function s(){let D=!1,W=null,ee=null,fe=null;return{setTest:function(ve){ve?ye(2929):_e(2929)},setMask:function(ve){W!==ve&&!D&&(t.depthMask(ve),W=ve)},setFunc:function(ve){if(ee!==ve){switch(ve){case jv:t.depthFunc(512);break;case Xv:t.depthFunc(519);break;case qv:t.depthFunc(513);break;case bc:t.depthFunc(515);break;case Yv:t.depthFunc(514);break;case $v:t.depthFunc(518);break;case Zv:t.depthFunc(516);break;case Kv:t.depthFunc(517);break;default:t.depthFunc(515)}ee=ve}},setLocked:function(ve){D=ve},setClear:function(ve){fe!==ve&&(t.clearDepth(ve),fe=ve)},reset:function(){D=!1,W=null,ee=null,fe=null}}}function o(){let D=!1,W=null,ee=null,fe=null,ve=null,Ue=null,ht=null,Tt=null,Bi=null;return{setTest:function(qe){D||(qe?ye(2960):_e(2960))},setMask:function(qe){W!==qe&&!D&&(t.stencilMask(qe),W=qe)},setFunc:function(qe,jn,dn){(ee!==qe||fe!==jn||ve!==dn)&&(t.stencilFunc(qe,jn,dn),ee=qe,fe=jn,ve=dn)},setOp:function(qe,jn,dn){(Ue!==qe||ht!==jn||Tt!==dn)&&(t.stencilOp(qe,jn,dn),Ue=qe,ht=jn,Tt=dn)},setLocked:function(qe){D=qe},setClear:function(qe){Bi!==qe&&(t.clearStencil(qe),Bi=qe)},reset:function(){D=!1,W=null,ee=null,fe=null,ve=null,Ue=null,ht=null,Tt=null,Bi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},m={},x=new WeakMap,h=[],p=null,g=!1,_=null,v=null,M=null,S=null,A=null,L=null,y=null,b=!1,P=null,$=null,Z=null,F=null,k=null;const q=t.getParameter(35661);let K=!1,Q=0;const R=t.getParameter(7938);R.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(R)[1]),K=Q>=1):R.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),K=Q>=2);let V=null,G={};const re=t.getParameter(3088),z=t.getParameter(2978),Y=new yt().fromArray(re),ne=new yt().fromArray(z);function se(D,W,ee){const fe=new Uint8Array(4),ve=t.createTexture();t.bindTexture(D,ve),t.texParameteri(D,10241,9728),t.texParameteri(D,10240,9728);for(let Ue=0;Ue<ee;Ue++)t.texImage2D(W+Ue,0,6408,1,1,0,6408,5121,fe);return ve}const U={};U[3553]=se(3553,3553,1),U[34067]=se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ye(2929),l.setFunc(bc),nt(!1),Dt($d),ye(2884),dt(Di);function ye(D){f[D]!==!0&&(t.enable(D),f[D]=!0)}function _e(D){f[D]!==!1&&(t.disable(D),f[D]=!1)}function me(D,W){return m[D]!==W?(t.bindFramebuffer(D,W),m[D]=W,i&&(D===36009&&(m[36160]=W),D===36160&&(m[36009]=W)),!0):!1}function ce(D,W){let ee=h,fe=!1;if(D)if(ee=x.get(W),ee===void 0&&(ee=[],x.set(W,ee)),D.isWebGLMultipleRenderTargets){const ve=D.texture;if(ee.length!==ve.length||ee[0]!==36064){for(let Ue=0,ht=ve.length;Ue<ht;Ue++)ee[Ue]=36064+Ue;ee.length=ve.length,fe=!0}}else ee[0]!==36064&&(ee[0]=36064,fe=!0);else ee[0]!==1029&&(ee[0]=1029,fe=!0);fe&&(n.isWebGL2?t.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Be(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const Ee={[Br]:32774,[Nv]:32778,[kv]:32779};if(i)Ee[Jd]=32775,Ee[eh]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ee[Jd]=D.MIN_EXT,Ee[eh]=D.MAX_EXT)}const Se={[Fv]:0,[zv]:1,[Ov]:768,[Eg]:770,[Wv]:776,[Gv]:774,[Bv]:772,[Uv]:769,[Tg]:771,[Hv]:775,[Vv]:773};function dt(D,W,ee,fe,ve,Ue,ht,Tt){if(D===Di){g===!0&&(_e(3042),g=!1);return}if(g===!1&&(ye(3042),g=!0),D!==Iv){if(D!==_||Tt!==b){if((v!==Br||A!==Br)&&(t.blendEquation(32774),v=Br,A=Br),Tt)switch(D){case os:t.blendFuncSeparate(1,771,1,771);break;case Zd:t.blendFunc(1,1);break;case Kd:t.blendFuncSeparate(0,769,0,1);break;case Qd:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case os:t.blendFuncSeparate(770,771,1,771);break;case Zd:t.blendFunc(770,1);break;case Kd:t.blendFuncSeparate(0,769,0,1);break;case Qd:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,S=null,L=null,y=null,_=D,b=Tt}return}ve=ve||W,Ue=Ue||ee,ht=ht||fe,(W!==v||ve!==A)&&(t.blendEquationSeparate(Ee[W],Ee[ve]),v=W,A=ve),(ee!==M||fe!==S||Ue!==L||ht!==y)&&(t.blendFuncSeparate(Se[ee],Se[fe],Se[Ue],Se[ht]),M=ee,S=fe,L=Ue,y=ht),_=D,b=!1}function Et(D,W){D.side===Vn?_e(2884):ye(2884);let ee=D.side===on;W&&(ee=!ee),nt(ee),D.blending===os&&D.transparent===!1?dt(Di):dt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const fe=D.stencilWrite;u.setTest(fe),fe&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Oe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ye(32926):_e(32926)}function nt(D){P!==D&&(D?t.frontFace(2304):t.frontFace(2305),P=D)}function Dt(D){D!==Dv?(ye(2884),D!==$&&(D===$d?t.cullFace(1029):D===Rv?t.cullFace(1028):t.cullFace(1032))):_e(2884),$=D}function et(D){D!==Z&&(K&&t.lineWidth(D),Z=D)}function Oe(D,W,ee){D?(ye(32823),(F!==W||k!==ee)&&(t.polygonOffset(W,ee),F=W,k=ee)):_e(32823)}function fn(D){D?ye(3089):_e(3089)}function Bt(D){D===void 0&&(D=33984+q-1),V!==D&&(t.activeTexture(D),V=D)}function T(D,W,ee){ee===void 0&&(V===null?ee=33984+q-1:ee=V);let fe=G[ee];fe===void 0&&(fe={type:void 0,texture:void 0},G[ee]=fe),(fe.type!==D||fe.texture!==W)&&(V!==ee&&(t.activeTexture(ee),V=ee),t.bindTexture(D,W||U[D]),fe.type=D,fe.texture=W)}function w(){const D=G[V];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function H(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function I(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(D){Y.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Y.copy(D))}function pe(D){ne.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function Pe(D,W){let ee=d.get(W);ee===void 0&&(ee=new WeakMap,d.set(W,ee));let fe=ee.get(D);fe===void 0&&(fe=t.getUniformBlockIndex(W,D.name),ee.set(D,fe))}function De(D,W){const fe=d.get(W).get(D);c.get(W)!==fe&&(t.uniformBlockBinding(W,fe,D.__bindingPointIndex),c.set(W,fe))}function Ge(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},V=null,G={},m={},x=new WeakMap,h=[],p=null,g=!1,_=null,v=null,M=null,S=null,A=null,L=null,y=null,b=!1,P=null,$=null,Z=null,F=null,k=null,Y.set(0,0,t.canvas.width,t.canvas.height),ne.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ye,disable:_e,bindFramebuffer:me,drawBuffers:ce,useProgram:Be,setBlending:dt,setMaterial:Et,setFlipSided:nt,setCullFace:Dt,setLineWidth:et,setPolygonOffset:Oe,setScissorTest:fn,activeTexture:Bt,bindTexture:T,unbindTexture:w,compressedTexImage2D:H,compressedTexImage3D:te,texImage2D:he,texImage3D:le,updateUBOMapping:Pe,uniformBlockBinding:De,texStorage2D:I,texStorage3D:ue,texSubImage2D:ie,texSubImage3D:ae,compressedTexSubImage2D:Me,compressedTexSubImage3D:C,scissor:ge,viewport:pe,reset:Ge}}function _w(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,w){return g?new OffscreenCanvas(T,w):So("canvas")}function v(T,w,H,te){let ie=1;if((T.width>te||T.height>te)&&(ie=te/Math.max(T.width,T.height)),ie<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ae=w?Rc:Math.floor,Me=ae(ie*T.width),C=ae(ie*T.height);h===void 0&&(h=_(Me,C));const I=H?_(Me,C):h;return I.width=Me,I.height=C,I.getContext("2d").drawImage(T,0,0,Me,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Me+"x"+C+")."),I}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function M(T){return Ah(T.width)&&Ah(T.height)}function S(T){return a?!1:T.wrapS!==Dn||T.wrapT!==Dn||T.minFilter!==xt&&T.minFilter!==gn}function A(T,w){return T.generateMipmaps&&w&&T.minFilter!==xt&&T.minFilter!==gn}function L(T){t.generateMipmap(T)}function y(T,w,H,te,ie=!1){if(a===!1)return w;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae=w;return w===6403&&(H===5126&&(ae=33326),H===5131&&(ae=33325),H===5121&&(ae=33321)),w===33319&&(H===5126&&(ae=33328),H===5131&&(ae=33327),H===5121&&(ae=33323)),w===6408&&(H===5126&&(ae=34836),H===5131&&(ae=34842),H===5121&&(ae=te===je&&ie===!1?35907:32856),H===32819&&(ae=32854),H===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function b(T,w,H){return A(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==xt&&T.minFilter!==gn?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function P(T){return T===xt||T===th||T===Zl?9728:9729}function $(T){const w=T.target;w.removeEventListener("dispose",$),F(w),w.isVideoTexture&&x.delete(w)}function Z(T){const w=T.target;w.removeEventListener("dispose",Z),q(w)}function F(T){const w=i.get(T);if(w.__webglInit===void 0)return;const H=T.source,te=p.get(H);if(te){const ie=te[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&k(T),Object.keys(te).length===0&&p.delete(H)}i.remove(T)}function k(T){const w=i.get(T);t.deleteTexture(w.__webglTexture);const H=T.source,te=p.get(H);delete te[w.__cacheKey],o.memory.textures--}function q(T){const w=T.texture,H=i.get(T),te=i.get(w);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)t.deleteFramebuffer(H.__webglFramebuffer[ie]),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ie]);else{if(t.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ie=0;ie<H.__webglColorRenderbuffer.length;ie++)H.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ie]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ie=0,ae=w.length;ie<ae;ie++){const Me=i.get(w[ie]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(w[ie])}i.remove(w),i.remove(T)}let K=0;function Q(){K=0}function R(){const T=K;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),K+=1,T}function V(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.encoding),w.join()}function G(T,w){const H=i.get(T);if(T.isVideoTexture&&fn(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(H,T,w);return}}n.bindTexture(3553,H.__webglTexture,33984+w)}function re(T,w){const H=i.get(T);if(T.version>0&&H.__version!==T.version){_e(H,T,w);return}n.bindTexture(35866,H.__webglTexture,33984+w)}function z(T,w){const H=i.get(T);if(T.version>0&&H.__version!==T.version){_e(H,T,w);return}n.bindTexture(32879,H.__webglTexture,33984+w)}function Y(T,w){const H=i.get(T);if(T.version>0&&H.__version!==T.version){me(H,T,w);return}n.bindTexture(34067,H.__webglTexture,33984+w)}const ne={[Lc]:10497,[Dn]:33071,[Pc]:33648},se={[xt]:9728,[th]:9984,[Zl]:9986,[gn]:9729,[sx]:9985,[vo]:9987};function U(T,w,H){if(H?(t.texParameteri(T,10242,ne[w.wrapS]),t.texParameteri(T,10243,ne[w.wrapT]),(T===32879||T===35866)&&t.texParameteri(T,32882,ne[w.wrapR]),t.texParameteri(T,10240,se[w.magFilter]),t.texParameteri(T,10241,se[w.minFilter])):(t.texParameteri(T,10242,33071),t.texParameteri(T,10243,33071),(T===32879||T===35866)&&t.texParameteri(T,32882,33071),(w.wrapS!==Dn||w.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,10240,P(w.magFilter)),t.texParameteri(T,10241,P(w.minFilter)),w.minFilter!==xt&&w.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===xt||w.minFilter!==Zl&&w.minFilter!==vo||w.type===ir&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===xo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ye(T,w){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",$));const te=w.source;let ie=p.get(te);ie===void 0&&(ie={},p.set(te,ie));const ae=V(w);if(ae!==T.__cacheKey){ie[ae]===void 0&&(ie[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ie[ae].usedTimes++;const Me=ie[T.__cacheKey];Me!==void 0&&(ie[T.__cacheKey].usedTimes--,Me.usedTimes===0&&k(w)),T.__cacheKey=ae,T.__webglTexture=ie[ae].texture}return H}function _e(T,w,H){let te=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=35866),w.isData3DTexture&&(te=32879);const ie=ye(T,w),ae=w.source;n.bindTexture(te,T.__webglTexture,33984+H);const Me=i.get(ae);if(ae.version!==Me.__version||ie===!0){n.activeTexture(33984+H),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const C=S(w)&&M(w.image)===!1;let I=v(w.image,C,!1,c);I=Bt(w,I);const ue=M(I)||a,he=s.convert(w.format,w.encoding);let le=s.convert(w.type),ge=y(w.internalFormat,he,le,w.encoding,w.isVideoTexture);U(te,w,ue);let pe;const Pe=w.mipmaps,De=a&&w.isVideoTexture!==!0,Ge=Me.__version===void 0||ie===!0,D=b(w,I,ue);if(w.isDepthTexture)ge=6402,a?w.type===ir?ge=36012:w.type===nr?ge=33190:w.type===as?ge=35056:ge=33189:w.type===ir&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===or&&ge===6402&&w.type!==Ag&&w.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=nr,le=s.convert(w.type)),w.format===_s&&ge===6402&&(ge=34041,w.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=as,le=s.convert(w.type))),Ge&&(De?n.texStorage2D(3553,1,ge,I.width,I.height):n.texImage2D(3553,0,ge,I.width,I.height,0,he,le,null));else if(w.isDataTexture)if(Pe.length>0&&ue){De&&Ge&&n.texStorage2D(3553,D,ge,Pe[0].width,Pe[0].height);for(let W=0,ee=Pe.length;W<ee;W++)pe=Pe[W],De?n.texSubImage2D(3553,W,0,0,pe.width,pe.height,he,le,pe.data):n.texImage2D(3553,W,ge,pe.width,pe.height,0,he,le,pe.data);w.generateMipmaps=!1}else De?(Ge&&n.texStorage2D(3553,D,ge,I.width,I.height),n.texSubImage2D(3553,0,0,0,I.width,I.height,he,le,I.data)):n.texImage2D(3553,0,ge,I.width,I.height,0,he,le,I.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){De&&Ge&&n.texStorage3D(35866,D,ge,Pe[0].width,Pe[0].height,I.depth);for(let W=0,ee=Pe.length;W<ee;W++)pe=Pe[W],w.format!==Rn?he!==null?De?n.compressedTexSubImage3D(35866,W,0,0,0,pe.width,pe.height,I.depth,he,pe.data,0,0):n.compressedTexImage3D(35866,W,ge,pe.width,pe.height,I.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?n.texSubImage3D(35866,W,0,0,0,pe.width,pe.height,I.depth,he,le,pe.data):n.texImage3D(35866,W,ge,pe.width,pe.height,I.depth,0,he,le,pe.data)}else{De&&Ge&&n.texStorage2D(3553,D,ge,Pe[0].width,Pe[0].height);for(let W=0,ee=Pe.length;W<ee;W++)pe=Pe[W],w.format!==Rn?he!==null?De?n.compressedTexSubImage2D(3553,W,0,0,pe.width,pe.height,he,pe.data):n.compressedTexImage2D(3553,W,ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?n.texSubImage2D(3553,W,0,0,pe.width,pe.height,he,le,pe.data):n.texImage2D(3553,W,ge,pe.width,pe.height,0,he,le,pe.data)}else if(w.isDataArrayTexture)De?(Ge&&n.texStorage3D(35866,D,ge,I.width,I.height,I.depth),n.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,he,le,I.data)):n.texImage3D(35866,0,ge,I.width,I.height,I.depth,0,he,le,I.data);else if(w.isData3DTexture)De?(Ge&&n.texStorage3D(32879,D,ge,I.width,I.height,I.depth),n.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,he,le,I.data)):n.texImage3D(32879,0,ge,I.width,I.height,I.depth,0,he,le,I.data);else if(w.isFramebufferTexture){if(Ge)if(De)n.texStorage2D(3553,D,ge,I.width,I.height);else{let W=I.width,ee=I.height;for(let fe=0;fe<D;fe++)n.texImage2D(3553,fe,ge,W,ee,0,he,le,null),W>>=1,ee>>=1}}else if(Pe.length>0&&ue){De&&Ge&&n.texStorage2D(3553,D,ge,Pe[0].width,Pe[0].height);for(let W=0,ee=Pe.length;W<ee;W++)pe=Pe[W],De?n.texSubImage2D(3553,W,0,0,he,le,pe):n.texImage2D(3553,W,ge,he,le,pe);w.generateMipmaps=!1}else De?(Ge&&n.texStorage2D(3553,D,ge,I.width,I.height),n.texSubImage2D(3553,0,0,0,he,le,I)):n.texImage2D(3553,0,ge,he,le,I);A(w,ue)&&L(te),Me.__version=ae.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function me(T,w,H){if(w.image.length!==6)return;const te=ye(T,w),ie=w.source;n.bindTexture(34067,T.__webglTexture,33984+H);const ae=i.get(ie);if(ie.version!==ae.__version||te===!0){n.activeTexture(33984+H),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const Me=w.isCompressedTexture||w.image[0].isCompressedTexture,C=w.image[0]&&w.image[0].isDataTexture,I=[];for(let W=0;W<6;W++)!Me&&!C?I[W]=v(w.image[W],!1,!0,u):I[W]=C?w.image[W].image:w.image[W],I[W]=Bt(w,I[W]);const ue=I[0],he=M(ue)||a,le=s.convert(w.format,w.encoding),ge=s.convert(w.type),pe=y(w.internalFormat,le,ge,w.encoding),Pe=a&&w.isVideoTexture!==!0,De=ae.__version===void 0||te===!0;let Ge=b(w,ue,he);U(34067,w,he);let D;if(Me){Pe&&De&&n.texStorage2D(34067,Ge,pe,ue.width,ue.height);for(let W=0;W<6;W++){D=I[W].mipmaps;for(let ee=0;ee<D.length;ee++){const fe=D[ee];w.format!==Rn?le!==null?Pe?n.compressedTexSubImage2D(34069+W,ee,0,0,fe.width,fe.height,le,fe.data):n.compressedTexImage2D(34069+W,ee,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?n.texSubImage2D(34069+W,ee,0,0,fe.width,fe.height,le,ge,fe.data):n.texImage2D(34069+W,ee,pe,fe.width,fe.height,0,le,ge,fe.data)}}}else{D=w.mipmaps,Pe&&De&&(D.length>0&&Ge++,n.texStorage2D(34067,Ge,pe,I[0].width,I[0].height));for(let W=0;W<6;W++)if(C){Pe?n.texSubImage2D(34069+W,0,0,0,I[W].width,I[W].height,le,ge,I[W].data):n.texImage2D(34069+W,0,pe,I[W].width,I[W].height,0,le,ge,I[W].data);for(let ee=0;ee<D.length;ee++){const ve=D[ee].image[W].image;Pe?n.texSubImage2D(34069+W,ee+1,0,0,ve.width,ve.height,le,ge,ve.data):n.texImage2D(34069+W,ee+1,pe,ve.width,ve.height,0,le,ge,ve.data)}}else{Pe?n.texSubImage2D(34069+W,0,0,0,le,ge,I[W]):n.texImage2D(34069+W,0,pe,le,ge,I[W]);for(let ee=0;ee<D.length;ee++){const fe=D[ee];Pe?n.texSubImage2D(34069+W,ee+1,0,0,le,ge,fe.image[W]):n.texImage2D(34069+W,ee+1,pe,le,ge,fe.image[W])}}}A(w,he)&&L(34067),ae.__version=ie.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function ce(T,w,H,te,ie){const ae=s.convert(H.format,H.encoding),Me=s.convert(H.type),C=y(H.internalFormat,ae,Me,H.encoding);i.get(w).__hasExternalTextures||(ie===32879||ie===35866?n.texImage3D(ie,0,C,w.width,w.height,w.depth,0,ae,Me,null):n.texImage2D(ie,0,C,w.width,w.height,0,ae,Me,null)),n.bindFramebuffer(36160,T),Oe(w)?f.framebufferTexture2DMultisampleEXT(36160,te,ie,i.get(H).__webglTexture,0,et(w)):(ie===3553||ie>=34069&&ie<=34074)&&t.framebufferTexture2D(36160,te,ie,i.get(H).__webglTexture,0),n.bindFramebuffer(36160,null)}function Be(T,w,H){if(t.bindRenderbuffer(36161,T),w.depthBuffer&&!w.stencilBuffer){let te=33189;if(H||Oe(w)){const ie=w.depthTexture;ie&&ie.isDepthTexture&&(ie.type===ir?te=36012:ie.type===nr&&(te=33190));const ae=et(w);Oe(w)?f.renderbufferStorageMultisampleEXT(36161,ae,te,w.width,w.height):t.renderbufferStorageMultisample(36161,ae,te,w.width,w.height)}else t.renderbufferStorage(36161,te,w.width,w.height);t.framebufferRenderbuffer(36160,36096,36161,T)}else if(w.depthBuffer&&w.stencilBuffer){const te=et(w);H&&Oe(w)===!1?t.renderbufferStorageMultisample(36161,te,35056,w.width,w.height):Oe(w)?f.renderbufferStorageMultisampleEXT(36161,te,35056,w.width,w.height):t.renderbufferStorage(36161,34041,w.width,w.height),t.framebufferRenderbuffer(36160,33306,36161,T)}else{const te=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0;ie<te.length;ie++){const ae=te[ie],Me=s.convert(ae.format,ae.encoding),C=s.convert(ae.type),I=y(ae.internalFormat,Me,C,ae.encoding),ue=et(w);H&&Oe(w)===!1?t.renderbufferStorageMultisample(36161,ue,I,w.width,w.height):Oe(w)?f.renderbufferStorageMultisampleEXT(36161,ue,I,w.width,w.height):t.renderbufferStorage(36161,I,w.width,w.height)}}t.bindRenderbuffer(36161,null)}function Ee(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const te=i.get(w.depthTexture).__webglTexture,ie=et(w);if(w.depthTexture.format===or)Oe(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ie):t.framebufferTexture2D(36160,36096,3553,te,0);else if(w.depthTexture.format===_s)Oe(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ie):t.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function Se(T){const w=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ee(w.__webglFramebuffer,T)}else if(H){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(36160,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]=t.createRenderbuffer(),Be(w.__webglDepthbuffer[te],T,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),Be(w.__webglDepthbuffer,T,!1);n.bindFramebuffer(36160,null)}function dt(T,w,H){const te=i.get(T);w!==void 0&&ce(te.__webglFramebuffer,T,T.texture,36064,3553),H!==void 0&&Se(T)}function Et(T){const w=T.texture,H=i.get(T),te=i.get(w);T.addEventListener("dispose",Z),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=w.version,o.memory.textures++);const ie=T.isWebGLCubeRenderTarget===!0,ae=T.isWebGLMultipleRenderTargets===!0,Me=M(T)||a;if(ie){H.__webglFramebuffer=[];for(let C=0;C<6;C++)H.__webglFramebuffer[C]=t.createFramebuffer()}else{if(H.__webglFramebuffer=t.createFramebuffer(),ae)if(r.drawBuffers){const C=T.texture;for(let I=0,ue=C.length;I<ue;I++){const he=i.get(C[I]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Oe(T)===!1){const C=ae?w:[w];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let I=0;I<C.length;I++){const ue=C[I];H.__webglColorRenderbuffer[I]=t.createRenderbuffer(),t.bindRenderbuffer(36161,H.__webglColorRenderbuffer[I]);const he=s.convert(ue.format,ue.encoding),le=s.convert(ue.type),ge=y(ue.internalFormat,he,le,ue.encoding,T.isXRRenderTarget===!0),pe=et(T);t.renderbufferStorageMultisample(36161,pe,ge,T.width,T.height),t.framebufferRenderbuffer(36160,36064+I,36161,H.__webglColorRenderbuffer[I])}t.bindRenderbuffer(36161,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Be(H.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(36160,null)}}if(ie){n.bindTexture(34067,te.__webglTexture),U(34067,w,Me);for(let C=0;C<6;C++)ce(H.__webglFramebuffer[C],T,w,36064,34069+C);A(w,Me)&&L(34067),n.unbindTexture()}else if(ae){const C=T.texture;for(let I=0,ue=C.length;I<ue;I++){const he=C[I],le=i.get(he);n.bindTexture(3553,le.__webglTexture),U(3553,he,Me),ce(H.__webglFramebuffer,T,he,36064+I,3553),A(he,Me)&&L(3553)}n.unbindTexture()}else{let C=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?C=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(C,te.__webglTexture),U(C,w,Me),ce(H.__webglFramebuffer,T,w,36064,C),A(w,Me)&&L(C),n.unbindTexture()}T.depthBuffer&&Se(T)}function nt(T){const w=M(T)||a,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,ie=H.length;te<ie;te++){const ae=H[te];if(A(ae,w)){const Me=T.isWebGLCubeRenderTarget?34067:3553,C=i.get(ae).__webglTexture;n.bindTexture(Me,C),L(Me),n.unbindTexture()}}}function Dt(T){if(a&&T.samples>0&&Oe(T)===!1){const w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,te=T.height;let ie=16384;const ae=[],Me=T.stencilBuffer?33306:36096,C=i.get(T),I=T.isWebGLMultipleRenderTargets===!0;if(I)for(let ue=0;ue<w.length;ue++)n.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ue,36161,null),n.bindFramebuffer(36160,C.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ue,3553,null,0);n.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,C.__webglFramebuffer);for(let ue=0;ue<w.length;ue++){ae.push(36064+ue),T.depthBuffer&&ae.push(Me);const he=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(he===!1&&(T.depthBuffer&&(ie|=256),T.stencilBuffer&&(ie|=1024)),I&&t.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[ue]),he===!0&&(t.invalidateFramebuffer(36008,[Me]),t.invalidateFramebuffer(36009,[Me])),I){const le=i.get(w[ue]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,le,0)}t.blitFramebuffer(0,0,H,te,0,0,H,te,ie,9728),m&&t.invalidateFramebuffer(36008,ae)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),I)for(let ue=0;ue<w.length;ue++){n.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ue,36161,C.__webglColorRenderbuffer[ue]);const he=i.get(w[ue]).__webglTexture;n.bindFramebuffer(36160,C.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ue,3553,he,0)}n.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function et(T){return Math.min(d,T.samples)}function Oe(T){const w=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function fn(T){const w=o.render.frame;x.get(T)!==w&&(x.set(T,w),T.update())}function Bt(T,w){const H=T.encoding,te=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Dc||H!==mr&&(H===je?a===!1?e.has("EXT_sRGB")===!0&&te===Rn?(T.format=Dc,T.minFilter=gn,T.generateMipmaps=!1):w=Dg.sRGBToLinear(w):(te!==Rn||ie!==pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),w}this.allocateTextureUnit=R,this.resetTextureUnits=Q,this.setTexture2D=G,this.setTexture2DArray=re,this.setTexture3D=z,this.setTextureCube=Y,this.rebindTextures=dt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Oe}function vw(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===pr)return 5121;if(s===ux)return 32819;if(s===cx)return 32820;if(s===ox)return 5120;if(s===ax)return 5122;if(s===Ag)return 5123;if(s===lx)return 5124;if(s===nr)return 5125;if(s===ir)return 5126;if(s===xo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===fx)return 6406;if(s===Rn)return 6408;if(s===dx)return 6409;if(s===hx)return 6410;if(s===or)return 6402;if(s===_s)return 34041;if(s===Dc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===px)return 6403;if(s===mx)return 36244;if(s===gx)return 33319;if(s===_x)return 33320;if(s===vx)return 36249;if(s===Kl||s===Ql||s===Jl||s===eu)if(o===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Kl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Kl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ql)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Jl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nh||s===ih||s===rh||s===sh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===nh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ih)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===oh||s===ah)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===oh)return o===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ah)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lh||s===uh||s===ch||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===yh||s===Sh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===lh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===uh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ch)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ph)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_h)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sh)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===tu)return o===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===yx||s===Mh||s===wh||s===Eh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===tu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Mh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Eh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===as?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class xw extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pa extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yw={type:"move"};class Au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=n.getJointPose(h,i),g=this._getHandJoint(u,h);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),m=.02,x=.005;u.inputState.pinching&&f>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new pa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Sw extends $t{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:or,c!==or&&c!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===or&&(i=nr),i===void 0&&c===_s&&(i=as),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1}}class Mw extends yr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,m=null,x=null;const h=n.getContextAttributes();let p=null,g=null;const _=[],v=[],M=new Set,S=new Map,A=new _n;A.layers.enable(1),A.viewport=new yt;const L=new _n;L.layers.enable(2),L.viewport=new yt;const y=[A,L],b=new xw;b.layers.enable(1),b.layers.enable(2);let P=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Y=_[z];return Y===void 0&&(Y=new Au,_[z]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(z){let Y=_[z];return Y===void 0&&(Y=new Au,_[z]=Y),Y.getGripSpace()},this.getHand=function(z){let Y=_[z];return Y===void 0&&(Y=new Au,_[z]=Y),Y.getHandSpace()};function Z(z){const Y=v.indexOf(z.inputSource);if(Y===-1)return;const ne=_[Y];ne!==void 0&&ne.dispatchEvent({type:z.type,data:z.inputSource})}function F(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",k);for(let z=0;z<_.length;z++){const Y=v[z];Y!==null&&(v[z]=null,_[z].disconnect(Y))}P=null,$=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,g=null,re.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(z){u=z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",F),r.addEventListener("inputsourceschange",k),h.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:m}),g=new gr(m.framebufferWidth,m.framebufferHeight,{format:Rn,type:pr,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let Y=null,ne=null,se=null;h.depth&&(se=h.stencil?35056:33190,Y=h.stencil?_s:or,ne=h.stencil?as:nr);const U={colorFormat:32856,depthFormat:se,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(U),r.updateRenderState({layers:[f]}),g=new gr(f.textureWidth,f.textureHeight,{format:Rn,type:pr,depthTexture:new Sw(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const ye=e.properties.get(g);ye.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function k(z){for(let Y=0;Y<z.removed.length;Y++){const ne=z.removed[Y],se=v.indexOf(ne);se>=0&&(v[se]=null,_[se].disconnect(ne))}for(let Y=0;Y<z.added.length;Y++){const ne=z.added[Y];let se=v.indexOf(ne);if(se===-1){for(let ye=0;ye<_.length;ye++)if(ye>=v.length){v.push(ne),se=ye;break}else if(v[ye]===null){v[ye]=ne,se=ye;break}if(se===-1)break}const U=_[se];U&&U.connect(ne)}}const q=new B,K=new B;function Q(z,Y,ne){q.setFromMatrixPosition(Y.matrixWorld),K.setFromMatrixPosition(ne.matrixWorld);const se=q.distanceTo(K),U=Y.projectionMatrix.elements,ye=ne.projectionMatrix.elements,_e=U[14]/(U[10]-1),me=U[14]/(U[10]+1),ce=(U[9]+1)/U[5],Be=(U[9]-1)/U[5],Ee=(U[8]-1)/U[0],Se=(ye[8]+1)/ye[0],dt=_e*Ee,Et=_e*Se,nt=se/(-Ee+Se),Dt=nt*-Ee;Y.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Dt),z.translateZ(nt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const et=_e+nt,Oe=me+nt,fn=dt-Dt,Bt=Et+(se-Dt),T=ce*me/Oe*et,w=Be*me/Oe*et;z.projectionMatrix.makePerspective(fn,Bt,T,w,et,Oe)}function R(z,Y){Y===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Y.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;b.near=L.near=A.near=z.near,b.far=L.far=A.far=z.far,(P!==b.near||$!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,$=b.far);const Y=z.parent,ne=b.cameras;R(b,Y);for(let U=0;U<ne.length;U++)R(ne[U],Y);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),z.matrix.copy(b.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const se=z.children;for(let U=0,ye=se.length;U<ye;U++)se[U].updateMatrixWorld(!0);ne.length===2?Q(b,A,L):b.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.getPlanes=function(){return M};let V=null;function G(z,Y){if(c=Y.getViewerPose(u||o),x=Y,c!==null){const ne=c.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let se=!1;ne.length!==b.cameras.length&&(b.cameras.length=0,se=!0);for(let U=0;U<ne.length;U++){const ye=ne[U];let _e=null;if(m!==null)_e=m.getViewport(ye);else{const ce=d.getViewSubImage(f,ye);_e=ce.viewport,U===0&&(e.setRenderTargetTextures(g,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(g))}let me=y[U];me===void 0&&(me=new _n,me.layers.enable(U),me.viewport=new yt,y[U]=me),me.matrix.fromArray(ye.transform.matrix),me.projectionMatrix.fromArray(ye.projectionMatrix),me.viewport.set(_e.x,_e.y,_e.width,_e.height),U===0&&b.matrix.copy(me.matrix),se===!0&&b.cameras.push(me)}}for(let ne=0;ne<_.length;ne++){const se=v[ne],U=_[ne];se!==null&&U!==void 0&&U.update(se,Y,u||o)}if(V&&V(z,Y),Y.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let ne=null;for(const se of M)Y.detectedPlanes.has(se)||(ne===null&&(ne=[]),ne.push(se));if(ne!==null)for(const se of ne)M.delete(se),S.delete(se),i.dispatchEvent({type:"planeremoved",data:se});for(const se of Y.detectedPlanes)if(!M.has(se))M.add(se),S.set(se,Y.lastChangedTime),i.dispatchEvent({type:"planeadded",data:se});else{const U=S.get(se);se.lastChangedTime>U&&(S.set(se,se.lastChangedTime),i.dispatchEvent({type:"planechanged",data:se}))}}x=null}const re=new Vg;re.setAnimationLoop(G),this.setAnimationLoop=function(z){V=z},this.dispose=function(){}}}function ww(t,e){function n(h,p){p.color.getRGB(h.fogColor.value,zg(t)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,g,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,v)):p.isMeshMatcapMaterial?(r(h,p),m(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),x(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,g,_):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===on&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===on&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const M=t.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uv2Transform.value.copy(v.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,g,_){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*g,h.scale.value=_*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,g){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===on&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function x(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ew(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(_,v){const M=v.program;i.uniformBlockBinding(_,M)}function u(_,v){let M=r[_.id];M===void 0&&(x(_),M=c(_),r[_.id]=M,_.addEventListener("dispose",p));const S=v.program;i.updateUBOMapping(_,S);const A=e.render.frame;s[_.id]!==A&&(f(_),s[_.id]=A)}function c(_){const v=d();_.__bindingPointIndex=v;const M=t.createBuffer(),S=_.__size,A=_.usage;return t.bindBuffer(35345,M),t.bufferData(35345,S,A),t.bindBuffer(35345,null),t.bindBufferBase(35345,v,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],M=_.uniforms,S=_.__cache;t.bindBuffer(35345,v);for(let A=0,L=M.length;A<L;A++){const y=M[A];if(m(y,A,S)===!0){const b=y.__offset,P=Array.isArray(y.value)?y.value:[y.value];let $=0;for(let Z=0;Z<P.length;Z++){const F=P[Z],k=h(F);typeof F=="number"?(y.__data[0]=F,t.bufferSubData(35345,b+$,y.__data)):F.isMatrix3?(y.__data[0]=F.elements[0],y.__data[1]=F.elements[1],y.__data[2]=F.elements[2],y.__data[3]=F.elements[0],y.__data[4]=F.elements[3],y.__data[5]=F.elements[4],y.__data[6]=F.elements[5],y.__data[7]=F.elements[0],y.__data[8]=F.elements[6],y.__data[9]=F.elements[7],y.__data[10]=F.elements[8],y.__data[11]=F.elements[0]):(F.toArray(y.__data,$),$+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,b,y.__data)}}t.bindBuffer(35345,null)}function m(_,v,M){const S=_.value;if(M[v]===void 0){if(typeof S=="number")M[v]=S;else{const A=Array.isArray(S)?S:[S],L=[];for(let y=0;y<A.length;y++)L.push(A[y].clone());M[v]=L}return!0}else if(typeof S=="number"){if(M[v]!==S)return M[v]=S,!0}else{const A=Array.isArray(M[v])?M[v]:[M[v]],L=Array.isArray(S)?S:[S];for(let y=0;y<A.length;y++){const b=A[y];if(b.equals(L[y])===!1)return b.copy(L[y]),!0}}return!1}function x(_){const v=_.uniforms;let M=0;const S=16;let A=0;for(let L=0,y=v.length;L<y;L++){const b=v[L],P={boundary:0,storage:0},$=Array.isArray(b.value)?b.value:[b.value];for(let Z=0,F=$.length;Z<F;Z++){const k=$[Z],q=h(k);P.boundary+=q.boundary,P.storage+=q.storage}if(b.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=M,L>0){A=M%S;const Z=S-A;A!==0&&Z-P.boundary<0&&(M+=S-A,b.__offset=M)}M+=P.storage}return A=M%S,A>0&&(M+=S-A),_.__size=M,_.__cache={},this}function h(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function g(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}function Tw(){const t=So("canvas");return t.style.display="block",t}function Xg(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:Tw(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let d=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=mr,this.physicallyCorrectLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;const h=this;let p=!1,g=0,_=0,v=null,M=-1,S=null;const A=new yt,L=new yt;let y=null,b=e.width,P=e.height,$=1,Z=null,F=null;const k=new yt(0,0,b,P),q=new yt(0,0,b,P);let K=!1;const Q=new Bg;let R=!1,V=!1,G=null;const re=new Mt,z=new Ae,Y=new B,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return v===null?$:1}let U=n;function ye(E,O){for(let j=0;j<E.length;j++){const N=E[j],X=e.getContext(N,O);if(X!==null)return X}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Df}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Pe,!1),U===null){const O=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&O.shift(),U=ye(O,E),U===null)throw ye(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let _e,me,ce,Be,Ee,Se,dt,Et,nt,Dt,et,Oe,fn,Bt,T,w,H,te,ie,ae,Me,C,I,ue;function he(){_e=new F1(U),me=new L1(U,_e,t),_e.init(me),C=new vw(U,_e,me),ce=new gw(U,_e,me),Be=new U1,Ee=new nw,Se=new _w(U,_e,ce,Ee,me,C,Be),dt=new D1(h),Et=new k1(h),nt=new qx(U,me),I=new C1(U,_e,nt,me),Dt=new z1(U,nt,Be,I),et=new H1(U,Dt,nt,Be),ie=new G1(U,me,Se),w=new P1(Ee),Oe=new tw(h,dt,Et,_e,me,I,w),fn=new ww(h,Ee),Bt=new rw,T=new cw(_e,me),te=new b1(h,dt,Et,ce,et,c,o),H=new mw(h,et,me),ue=new Ew(U,Be,me,ce),ae=new A1(U,_e,Be,me),Me=new O1(U,_e,Be,me),Be.programs=Oe.programs,h.capabilities=me,h.extensions=_e,h.properties=Ee,h.renderLists=Bt,h.shadowMap=H,h.state=ce,h.info=Be}he();const le=new Mw(h,U);this.xr=le,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=_e.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=_e.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(b,P,!1))},this.getSize=function(E){return E.set(b,P)},this.setSize=function(E,O,j){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=E,P=O,e.width=Math.floor(E*$),e.height=Math.floor(O*$),j!==!1&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(b*$,P*$).floor()},this.setDrawingBufferSize=function(E,O,j){b=E,P=O,$=j,e.width=Math.floor(E*j),e.height=Math.floor(O*j),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(k)},this.setViewport=function(E,O,j,N){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,O,j,N),ce.viewport(A.copy(k).multiplyScalar($).floor())},this.getScissor=function(E){return E.copy(q)},this.setScissor=function(E,O,j,N){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,O,j,N),ce.scissor(L.copy(q).multiplyScalar($).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(E){ce.setScissorTest(K=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){F=E},this.getClearColor=function(E){return E.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(E=!0,O=!0,j=!0){let N=0;E&&(N|=16384),O&&(N|=256),j&&(N|=1024),U.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Pe,!1),Bt.dispose(),T.dispose(),Ee.dispose(),dt.dispose(),Et.dispose(),et.dispose(),I.dispose(),ue.dispose(),Oe.dispose(),le.dispose(),le.removeEventListener("sessionstart",fe),le.removeEventListener("sessionend",ve),G&&(G.dispose(),G=null),Ue.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Be.autoReset,O=H.enabled,j=H.autoUpdate,N=H.needsUpdate,X=H.type;he(),Be.autoReset=E,H.enabled=O,H.autoUpdate=j,H.needsUpdate=N,H.type=X}function Pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function De(E){const O=E.target;O.removeEventListener("dispose",De),Ge(O)}function Ge(E){D(E),Ee.remove(E)}function D(E){const O=Ee.get(E).programs;O!==void 0&&(O.forEach(function(j){Oe.releaseProgram(j)}),E.isShaderMaterial&&Oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,j,N,X,xe){O===null&&(O=ne);const we=X.isMesh&&X.matrixWorld.determinant()<0,be=$g(E,O,j,N,X);ce.setMaterial(N,we);let Ce=j.index,ze=1;N.wireframe===!0&&(Ce=Dt.getWireframeAttribute(j),ze=2);const Re=j.drawRange,Ie=j.attributes.position;let it=Re.start*ze,Zt=(Re.start+Re.count)*ze;xe!==null&&(it=Math.max(it,xe.start*ze),Zt=Math.min(Zt,(xe.start+xe.count)*ze)),Ce!==null?(it=Math.max(it,0),Zt=Math.min(Zt,Ce.count)):Ie!=null&&(it=Math.max(it,0),Zt=Math.min(Zt,Ie.count));const Xn=Zt-it;if(Xn<0||Xn===1/0)return;I.setup(X,N,be,j,Ce);let Vi,rt=ae;if(Ce!==null&&(Vi=nt.get(Ce),rt=Me,rt.setIndex(Vi)),X.isMesh)N.wireframe===!0?(ce.setLineWidth(N.wireframeLinewidth*se()),rt.setMode(1)):rt.setMode(4);else if(X.isLine){let Ne=N.linewidth;Ne===void 0&&(Ne=1),ce.setLineWidth(Ne*se()),X.isLineSegments?rt.setMode(1):X.isLineLoop?rt.setMode(2):rt.setMode(3)}else X.isPoints?rt.setMode(0):X.isSprite&&rt.setMode(4);if(X.isInstancedMesh)rt.renderInstances(it,Xn,X.count);else if(j.isInstancedBufferGeometry){const Ne=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,yl=Math.min(j.instanceCount,Ne);rt.renderInstances(it,Xn,yl)}else rt.render(it,Xn)},this.compile=function(E,O){function j(N,X,xe){N.transparent===!0&&N.side===Vn&&N.forceSinglePass===!1?(N.side=on,N.needsUpdate=!0,dn(N,X,xe),N.side=ki,N.needsUpdate=!0,dn(N,X,xe),N.side=Vn):dn(N,X,xe)}f=T.get(E),f.init(),x.push(f),E.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(h.physicallyCorrectLights),E.traverse(function(N){const X=N.material;if(X)if(Array.isArray(X))for(let xe=0;xe<X.length;xe++){const we=X[xe];j(we,E,N)}else j(X,E,N)}),x.pop(),f=null};let W=null;function ee(E){W&&W(E)}function fe(){Ue.stop()}function ve(){Ue.start()}const Ue=new Vg;Ue.setAnimationLoop(ee),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(E){W=E,le.setAnimationLoop(E),E===null?Ue.stop():Ue.start()},le.addEventListener("sessionstart",fe),le.addEventListener("sessionend",ve),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(O),O=le.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,O,v),f=T.get(E,x.length),f.init(),x.push(f),re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(re),V=this.localClippingEnabled,R=w.init(this.clippingPlanes,V),d=Bt.get(E,m.length),d.init(),m.push(d),ht(E,O,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(Z,F),R===!0&&w.beginShadows();const j=f.state.shadowsArray;if(H.render(j,E,O),R===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(d,E),f.setupLights(h.physicallyCorrectLights),O.isArrayCamera){const N=O.cameras;for(let X=0,xe=N.length;X<xe;X++){const we=N[X];Tt(d,E,we,we.viewport)}}else Tt(d,E,O);v!==null&&(Se.updateMultisampleRenderTarget(v),Se.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(h,E,O),I.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function ht(E,O,j,N){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){N&&Y.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const we=et.update(E),be=E.material;be.visible&&d.push(E,we,be,j,Y.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Be.render.frame&&(E.skeleton.update(),E.skeleton.frame=Be.render.frame),!E.frustumCulled||Q.intersectsObject(E))){N&&Y.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const we=et.update(E),be=E.material;if(Array.isArray(be)){const Ce=we.groups;for(let ze=0,Re=Ce.length;ze<Re;ze++){const Ie=Ce[ze],it=be[Ie.materialIndex];it&&it.visible&&d.push(E,we,it,j,Y.z,Ie)}}else be.visible&&d.push(E,we,be,j,Y.z,null)}}const xe=E.children;for(let we=0,be=xe.length;we<be;we++)ht(xe[we],O,j,N)}function Tt(E,O,j,N){const X=E.opaque,xe=E.transmissive,we=E.transparent;f.setupLightsView(j),R===!0&&w.setGlobalState(h.clippingPlanes,j),xe.length>0&&Bi(X,O,j),N&&ce.viewport(A.copy(N)),X.length>0&&qe(X,O,j),xe.length>0&&qe(xe,O,j),we.length>0&&qe(we,O,j),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Bi(E,O,j){const N=me.isWebGL2;G===null&&(G=new gr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?xo:pr,minFilter:vo,samples:N&&s===!0?4:0})),h.getDrawingBufferSize(z),N?G.setSize(z.x,z.y):G.setSize(Rc(z.x),Rc(z.y));const X=h.getRenderTarget();h.setRenderTarget(G),h.clear();const xe=h.toneMapping;h.toneMapping=ri,qe(E,O,j),h.toneMapping=xe,Se.updateMultisampleRenderTarget(G),Se.updateRenderTargetMipmap(G),h.setRenderTarget(X)}function qe(E,O,j){const N=O.isScene===!0?O.overrideMaterial:null;for(let X=0,xe=E.length;X<xe;X++){const we=E[X],be=we.object,Ce=we.geometry,ze=N===null?we.material:N,Re=we.group;be.layers.test(j.layers)&&jn(be,O,j,Ce,ze,Re)}}function jn(E,O,j,N,X,xe){E.onBeforeRender(h,O,j,N,X,xe),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(h,O,j,N,E,xe),X.transparent===!0&&X.side===Vn&&X.forceSinglePass===!1?(X.side=on,X.needsUpdate=!0,h.renderBufferDirect(j,O,N,X,E,xe),X.side=ki,X.needsUpdate=!0,h.renderBufferDirect(j,O,N,X,E,xe),X.side=Vn):h.renderBufferDirect(j,O,N,X,E,xe),E.onAfterRender(h,O,j,N,X,xe)}function dn(E,O,j){O.isScene!==!0&&(O=ne);const N=Ee.get(E),X=f.state.lights,xe=f.state.shadowsArray,we=X.state.version,be=Oe.getParameters(E,X.state,xe,O,j),Ce=Oe.getProgramCacheKey(be);let ze=N.programs;N.environment=E.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(E.isMeshStandardMaterial?Et:dt).get(E.envMap||N.environment),ze===void 0&&(E.addEventListener("dispose",De),ze=new Map,N.programs=ze);let Re=ze.get(Ce);if(Re!==void 0){if(N.currentProgram===Re&&N.lightsStateVersion===we)return Ff(E,be),Re}else be.uniforms=Oe.getUniforms(E),E.onBuild(j,be,h),E.onBeforeCompile(be,h),Re=Oe.acquireProgram(be,Ce),ze.set(Ce,Re),N.uniforms=be.uniforms;const Ie=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=w.uniform),Ff(E,be),N.needsLights=Kg(E),N.lightsStateVersion=we,N.needsLights&&(Ie.ambientLightColor.value=X.state.ambient,Ie.lightProbe.value=X.state.probe,Ie.directionalLights.value=X.state.directional,Ie.directionalLightShadows.value=X.state.directionalShadow,Ie.spotLights.value=X.state.spot,Ie.spotLightShadows.value=X.state.spotShadow,Ie.rectAreaLights.value=X.state.rectArea,Ie.ltc_1.value=X.state.rectAreaLTC1,Ie.ltc_2.value=X.state.rectAreaLTC2,Ie.pointLights.value=X.state.point,Ie.pointLightShadows.value=X.state.pointShadow,Ie.hemisphereLights.value=X.state.hemi,Ie.directionalShadowMap.value=X.state.directionalShadowMap,Ie.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ie.spotShadowMap.value=X.state.spotShadowMap,Ie.spotLightMatrix.value=X.state.spotLightMatrix,Ie.spotLightMap.value=X.state.spotLightMap,Ie.pointShadowMap.value=X.state.pointShadowMap,Ie.pointShadowMatrix.value=X.state.pointShadowMatrix);const it=Re.getUniforms(),Zt=Aa.seqWithValue(it.seq,Ie);return N.currentProgram=Re,N.uniformsList=Zt,Re}function Ff(E,O){const j=Ee.get(E);j.outputEncoding=O.outputEncoding,j.instancing=O.instancing,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function $g(E,O,j,N,X){O.isScene!==!0&&(O=ne),Se.resetTextureUnits();const xe=O.fog,we=N.isMeshStandardMaterial?O.environment:null,be=v===null?h.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:mr,Ce=(N.isMeshStandardMaterial?Et:dt).get(N.envMap||we),ze=N.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Re=!!N.normalMap&&!!j.attributes.tangent,Ie=!!j.morphAttributes.position,it=!!j.morphAttributes.normal,Zt=!!j.morphAttributes.color,Xn=N.toneMapped?h.toneMapping:ri,Vi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,rt=Vi!==void 0?Vi.length:0,Ne=Ee.get(N),yl=f.state.lights;if(R===!0&&(V===!0||E!==S)){const Kt=E===S&&N.id===M;w.setState(N,E,Kt)}let pt=!1;N.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==yl.state.version||Ne.outputEncoding!==be||X.isInstancedMesh&&Ne.instancing===!1||!X.isInstancedMesh&&Ne.instancing===!0||X.isSkinnedMesh&&Ne.skinning===!1||!X.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Ce||N.fog===!0&&Ne.fog!==xe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==w.numPlanes||Ne.numIntersection!==w.numIntersection)||Ne.vertexAlphas!==ze||Ne.vertexTangents!==Re||Ne.morphTargets!==Ie||Ne.morphNormals!==it||Ne.morphColors!==Zt||Ne.toneMapping!==Xn||me.isWebGL2===!0&&Ne.morphTargetsCount!==rt)&&(pt=!0):(pt=!0,Ne.__version=N.version);let Gi=Ne.currentProgram;pt===!0&&(Gi=dn(N,O,X));let zf=!1,ws=!1,Sl=!1;const Rt=Gi.getUniforms(),Hi=Ne.uniforms;if(ce.useProgram(Gi.program)&&(zf=!0,ws=!0,Sl=!0),N.id!==M&&(M=N.id,ws=!0),zf||S!==E){if(Rt.setValue(U,"projectionMatrix",E.projectionMatrix),me.logarithmicDepthBuffer&&Rt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,ws=!0,Sl=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Kt=Rt.map.cameraPosition;Kt!==void 0&&Kt.setValue(U,Y.setFromMatrixPosition(E.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Rt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||X.isSkinnedMesh)&&Rt.setValue(U,"viewMatrix",E.matrixWorldInverse)}if(X.isSkinnedMesh){Rt.setOptional(U,X,"bindMatrix"),Rt.setOptional(U,X,"bindMatrixInverse");const Kt=X.skeleton;Kt&&(me.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Rt.setValue(U,"boneTexture",Kt.boneTexture,Se),Rt.setValue(U,"boneTextureSize",Kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ml=j.morphAttributes;if((Ml.position!==void 0||Ml.normal!==void 0||Ml.color!==void 0&&me.isWebGL2===!0)&&ie.update(X,j,N,Gi),(ws||Ne.receiveShadow!==X.receiveShadow)&&(Ne.receiveShadow=X.receiveShadow,Rt.setValue(U,"receiveShadow",X.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Hi.envMap.value=Ce,Hi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),ws&&(Rt.setValue(U,"toneMappingExposure",h.toneMappingExposure),Ne.needsLights&&Zg(Hi,Sl),xe&&N.fog===!0&&fn.refreshFogUniforms(Hi,xe),fn.refreshMaterialUniforms(Hi,N,$,P,G),Aa.upload(U,Ne.uniformsList,Hi,Se)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Aa.upload(U,Ne.uniformsList,Hi,Se),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Rt.setValue(U,"center",X.center),Rt.setValue(U,"modelViewMatrix",X.modelViewMatrix),Rt.setValue(U,"normalMatrix",X.normalMatrix),Rt.setValue(U,"modelMatrix",X.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Kt=N.uniformsGroups;for(let wl=0,Qg=Kt.length;wl<Qg;wl++)if(me.isWebGL2){const Of=Kt[wl];ue.update(Of,Gi),ue.bind(Of,Gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gi}function Zg(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Kg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,O,j){Ee.get(E.texture).__webglTexture=O,Ee.get(E.depthTexture).__webglTexture=j;const N=Ee.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=j===void 0,N.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const j=Ee.get(E);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,j=0){v=E,g=O,_=j;let N=!0,X=null,xe=!1,we=!1;if(E){const Ce=Ee.get(E);Ce.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),N=!1):Ce.__webglFramebuffer===void 0?Se.setupRenderTarget(E):Ce.__hasExternalTextures&&Se.rebindTextures(E,Ee.get(E.texture).__webglTexture,Ee.get(E.depthTexture).__webglTexture);const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(we=!0);const Re=Ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(X=Re[O],xe=!0):me.isWebGL2&&E.samples>0&&Se.useMultisampledRTT(E)===!1?X=Ee.get(E).__webglMultisampledFramebuffer:X=Re,A.copy(E.viewport),L.copy(E.scissor),y=E.scissorTest}else A.copy(k).multiplyScalar($).floor(),L.copy(q).multiplyScalar($).floor(),y=K;if(ce.bindFramebuffer(36160,X)&&me.drawBuffers&&N&&ce.drawBuffers(E,X),ce.viewport(A),ce.scissor(L),ce.setScissorTest(y),xe){const Ce=Ee.get(E.texture);U.framebufferTexture2D(36160,36064,34069+O,Ce.__webglTexture,j)}else if(we){const Ce=Ee.get(E.texture),ze=O||0;U.framebufferTextureLayer(36160,36064,Ce.__webglTexture,j||0,ze)}M=-1},this.readRenderTargetPixels=function(E,O,j,N,X,xe,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(be=be[we]),be){ce.bindFramebuffer(36160,be);try{const Ce=E.texture,ze=Ce.format,Re=Ce.type;if(ze!==Rn&&C.convert(ze)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Re===xo&&(_e.has("EXT_color_buffer_half_float")||me.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Re!==pr&&C.convert(Re)!==U.getParameter(35738)&&!(Re===ir&&(me.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-N&&j>=0&&j<=E.height-X&&U.readPixels(O,j,N,X,C.convert(ze),C.convert(Re),xe)}finally{const Ce=v!==null?Ee.get(v).__webglFramebuffer:null;ce.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(E,O,j=0){const N=Math.pow(2,-j),X=Math.floor(O.image.width*N),xe=Math.floor(O.image.height*N);Se.setTexture2D(O,0),U.copyTexSubImage2D(3553,j,0,0,E.x,E.y,X,xe),ce.unbindTexture()},this.copyTextureToTexture=function(E,O,j,N=0){const X=O.image.width,xe=O.image.height,we=C.convert(j.format),be=C.convert(j.type);Se.setTexture2D(j,0),U.pixelStorei(37440,j.flipY),U.pixelStorei(37441,j.premultiplyAlpha),U.pixelStorei(3317,j.unpackAlignment),O.isDataTexture?U.texSubImage2D(3553,N,E.x,E.y,X,xe,we,be,O.image.data):O.isCompressedTexture?U.compressedTexSubImage2D(3553,N,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):U.texSubImage2D(3553,N,E.x,E.y,we,be,O.image),N===0&&j.generateMipmaps&&U.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(E,O,j,N,X=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=E.max.x-E.min.x+1,we=E.max.y-E.min.y+1,be=E.max.z-E.min.z+1,Ce=C.convert(N.format),ze=C.convert(N.type);let Re;if(N.isData3DTexture)Se.setTexture3D(N,0),Re=32879;else if(N.isDataArrayTexture)Se.setTexture2DArray(N,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,N.flipY),U.pixelStorei(37441,N.premultiplyAlpha),U.pixelStorei(3317,N.unpackAlignment);const Ie=U.getParameter(3314),it=U.getParameter(32878),Zt=U.getParameter(3316),Xn=U.getParameter(3315),Vi=U.getParameter(32877),rt=j.isCompressedTexture?j.mipmaps[0]:j.image;U.pixelStorei(3314,rt.width),U.pixelStorei(32878,rt.height),U.pixelStorei(3316,E.min.x),U.pixelStorei(3315,E.min.y),U.pixelStorei(32877,E.min.z),j.isDataTexture||j.isData3DTexture?U.texSubImage3D(Re,X,O.x,O.y,O.z,xe,we,be,Ce,ze,rt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Re,X,O.x,O.y,O.z,xe,we,be,Ce,rt.data)):U.texSubImage3D(Re,X,O.x,O.y,O.z,xe,we,be,Ce,ze,rt),U.pixelStorei(3314,Ie),U.pixelStorei(32878,it),U.pixelStorei(3316,Zt),U.pixelStorei(3315,Xn),U.pixelStorei(32877,Vi),X===0&&N.generateMipmaps&&U.generateMipmap(Re),ce.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Se.setTextureCube(E,0):E.isData3DTexture?Se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Se.setTexture2DArray(E,0):Se.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){g=0,_=0,v=null,ce.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class bw extends Xg{}bw.prototype.isWebGL1Renderer=!0;class Cw extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const ap={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Aw{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const m=u[d],x=u[d+1];if(m.global&&(m.lastIndex=0),m.test(c))return x}return null}}}const Lw=new Aw;class qg{constructor(e){this.manager=e!==void 0?e:Lw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Pw extends qg{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ap.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=So("img");function l(){c(),ap.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Dw extends qg{constructor(e){super(e)}load(e,n,i,r){const s=new $t,o=new Pw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Rw{constructor(e,n,i=0,r=1/0){this.ray=new Ng(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new If,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Nc(e,this,i,n),i.sort(lp),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Nc(e[r],this,i,n);return i.sort(lp),i}}function lp(t,e){return t.distance-e.distance}function Nc(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Nc(r[s],e,n,!0)}}class up{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Wt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Df}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Df);const cp={type:"change"},Lu={type:"start"},fp={type:"end"};class Iw extends yr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Er.ROTATE,MIDDLE:Er.DOLLY,RIGHT:Er.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Bt),this._domElementKeyEvents=C},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(cp),i.update(),s=r.NONE},this.update=function(){const C=new B,I=new _r().setFromUnitVectors(e.up,new B(0,1,0)),ue=I.clone().invert(),he=new B,le=new _r,ge=2*Math.PI;return function(){const Pe=i.object.position;C.copy(Pe).sub(i.target),C.applyQuaternion(I),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&b(L()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let De=i.minAzimuthAngle,Ge=i.maxAzimuthAngle;return isFinite(De)&&isFinite(Ge)&&(De<-Math.PI?De+=ge:De>Math.PI&&(De-=ge),Ge<-Math.PI?Ge+=ge:Ge>Math.PI&&(Ge-=ge),De<=Ge?a.theta=Math.max(De,Math.min(Ge,a.theta)):a.theta=a.theta>(De+Ge)/2?Math.max(De,a.theta):Math.min(Ge,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),C.setFromSpherical(a),C.applyQuaternion(ue),Pe.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||he.distanceToSquared(i.object.position)>o||8*(1-le.dot(i.object.quaternion))>o?(i.dispatchEvent(cp),he.copy(i.object.position),le.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",H),i.domElement.removeEventListener("pointerdown",dt),i.domElement.removeEventListener("pointercancel",Dt),i.domElement.removeEventListener("wheel",fn),i.domElement.removeEventListener("pointermove",Et),i.domElement.removeEventListener("pointerup",nt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Bt)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new up,l=new up;let u=1;const c=new B;let d=!1;const f=new Ae,m=new Ae,x=new Ae,h=new Ae,p=new Ae,g=new Ae,_=new Ae,v=new Ae,M=new Ae,S=[],A={};function L(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function b(C){l.theta-=C}function P(C){l.phi-=C}const $=function(){const C=new B;return function(ue,he){C.setFromMatrixColumn(he,0),C.multiplyScalar(-ue),c.add(C)}}(),Z=function(){const C=new B;return function(ue,he){i.screenSpacePanning===!0?C.setFromMatrixColumn(he,1):(C.setFromMatrixColumn(he,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(ue),c.add(C)}}(),F=function(){const C=new B;return function(ue,he){const le=i.domElement;if(i.object.isPerspectiveCamera){const ge=i.object.position;C.copy(ge).sub(i.target);let pe=C.length();pe*=Math.tan(i.object.fov/2*Math.PI/180),$(2*ue*pe/le.clientHeight,i.object.matrix),Z(2*he*pe/le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?($(ue*(i.object.right-i.object.left)/i.object.zoom/le.clientWidth,i.object.matrix),Z(he*(i.object.top-i.object.bottom)/i.object.zoom/le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(C){i.object.isPerspectiveCamera?u/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(C){i.object.isPerspectiveCamera?u*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(C){f.set(C.clientX,C.clientY)}function Q(C){_.set(C.clientX,C.clientY)}function R(C){h.set(C.clientX,C.clientY)}function V(C){m.set(C.clientX,C.clientY),x.subVectors(m,f).multiplyScalar(i.rotateSpeed);const I=i.domElement;b(2*Math.PI*x.x/I.clientHeight),P(2*Math.PI*x.y/I.clientHeight),f.copy(m),i.update()}function G(C){v.set(C.clientX,C.clientY),M.subVectors(v,_),M.y>0?k(y()):M.y<0&&q(y()),_.copy(v),i.update()}function re(C){p.set(C.clientX,C.clientY),g.subVectors(p,h).multiplyScalar(i.panSpeed),F(g.x,g.y),h.copy(p),i.update()}function z(C){C.deltaY<0?q(y()):C.deltaY>0&&k(y()),i.update()}function Y(C){let I=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?P(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,i.keyPanSpeed),I=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?P(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(0,-i.keyPanSpeed),I=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?b(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(i.keyPanSpeed,0),I=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?b(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):F(-i.keyPanSpeed,0),I=!0;break}I&&(C.preventDefault(),i.update())}function ne(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),I=.5*(S[0].pageY+S[1].pageY);f.set(C,I)}}function se(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),I=.5*(S[0].pageY+S[1].pageY);h.set(C,I)}}function U(){const C=S[0].pageX-S[1].pageX,I=S[0].pageY-S[1].pageY,ue=Math.sqrt(C*C+I*I);_.set(0,ue)}function ye(){i.enableZoom&&U(),i.enablePan&&se()}function _e(){i.enableZoom&&U(),i.enableRotate&&ne()}function me(C){if(S.length==1)m.set(C.pageX,C.pageY);else{const ue=Me(C),he=.5*(C.pageX+ue.x),le=.5*(C.pageY+ue.y);m.set(he,le)}x.subVectors(m,f).multiplyScalar(i.rotateSpeed);const I=i.domElement;b(2*Math.PI*x.x/I.clientHeight),P(2*Math.PI*x.y/I.clientHeight),f.copy(m)}function ce(C){if(S.length===1)p.set(C.pageX,C.pageY);else{const I=Me(C),ue=.5*(C.pageX+I.x),he=.5*(C.pageY+I.y);p.set(ue,he)}g.subVectors(p,h).multiplyScalar(i.panSpeed),F(g.x,g.y),h.copy(p)}function Be(C){const I=Me(C),ue=C.pageX-I.x,he=C.pageY-I.y,le=Math.sqrt(ue*ue+he*he);v.set(0,le),M.set(0,Math.pow(v.y/_.y,i.zoomSpeed)),k(M.y),_.copy(v)}function Ee(C){i.enableZoom&&Be(C),i.enablePan&&ce(C)}function Se(C){i.enableZoom&&Be(C),i.enableRotate&&me(C)}function dt(C){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",Et),i.domElement.addEventListener("pointerup",nt)),te(C),C.pointerType==="touch"?T(C):et(C))}function Et(C){i.enabled!==!1&&(C.pointerType==="touch"?w(C):Oe(C))}function nt(C){ie(C),S.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",Et),i.domElement.removeEventListener("pointerup",nt)),i.dispatchEvent(fp),s=r.NONE}function Dt(C){ie(C)}function et(C){let I;switch(C.button){case 0:I=i.mouseButtons.LEFT;break;case 1:I=i.mouseButtons.MIDDLE;break;case 2:I=i.mouseButtons.RIGHT;break;default:I=-1}switch(I){case Er.DOLLY:if(i.enableZoom===!1)return;Q(C),s=r.DOLLY;break;case Er.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;R(C),s=r.PAN}else{if(i.enableRotate===!1)return;K(C),s=r.ROTATE}break;case Er.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;K(C),s=r.ROTATE}else{if(i.enablePan===!1)return;R(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Lu)}function Oe(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;V(C);break;case r.DOLLY:if(i.enableZoom===!1)return;G(C);break;case r.PAN:if(i.enablePan===!1)return;re(C);break}}function fn(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Lu),z(C),i.dispatchEvent(fp))}function Bt(C){i.enabled===!1||i.enablePan===!1||Y(C)}function T(C){switch(ae(C),S.length){case 1:switch(i.touches.ONE){case Tr.ROTATE:if(i.enableRotate===!1)return;ne(),s=r.TOUCH_ROTATE;break;case Tr.PAN:if(i.enablePan===!1)return;se(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Tr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ye(),s=r.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;_e(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Lu)}function w(C){switch(ae(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;me(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ce(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ee(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Se(C),i.update();break;default:s=r.NONE}}function H(C){i.enabled!==!1&&C.preventDefault()}function te(C){S.push(C)}function ie(C){delete A[C.pointerId];for(let I=0;I<S.length;I++)if(S[I].pointerId==C.pointerId){S.splice(I,1);return}}function ae(C){let I=A[C.pointerId];I===void 0&&(I=new Ae,A[C.pointerId]=I),I.set(C.pageX,C.pageY)}function Me(C){const I=C.pointerId===S[0].pointerId?S[1]:S[0];return A[I.pointerId]}i.domElement.addEventListener("contextmenu",H),i.domElement.addEventListener("pointerdown",dt),i.domElement.addEventListener("pointercancel",Dt),i.domElement.addEventListener("wheel",fn,{passive:!1}),this.update()}}class Nw extends xn{constructor(e=1,n=16,i=new $e("grey"),r=2e3){const s=new Do(2,2,1,1),o=new Fi({side:Vn,uniforms:{uSize1:{value:e},uSize2:{value:n},uColor:{value:i},uDistance:{value:r}},transparent:!0,alphaTest:.5,vertexShader:`
            
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
            
            `,extensions:{derivatives:!0}});super(s,o),this.frustumCulled=!1}}let Mi,_i,Cn;function kw(){Mi=new Cw,_i=new _n(60,window.innerWidth*.86/window.innerHeight,.1,1e3),_i.position.set(0,3,8),_i.rotation.order="YXZ",Cn=new Xg,Cn.setSize(window.innerWidth*.86,window.innerHeight),Cn.toneMappingExposure=1,Cn.shadowMap.enabled=!0,Cn.shadowMap.type=wg,document.body.appendChild(Cn.domElement);const t=new Nw;t.position.set(8.5,-.5,8.5),Mi.add(t);const e=new xn(new Do(1e5,1e5),new Po({color:16776960,side:Vn,visible:!1}));e.rotation.set(Math.PI/2,0,0),e.position.set(0,-.5,0),e.name="helpPlane",Mi.add(e),n();function n(){requestAnimationFrame(n),Cn.render(Mi,_i)}window.addEventListener("resize",i),document.oncontextmenu=document.body.oncontextmenu=function(){return!1},window.addEventListener("beforeunload",function(r){return r.stopPropagation(),r.preventDefault(),!1},!0);function i(){const r=Cn.domElement.getBoundingClientRect();document.getElementById("canvas"),Cn.setSize(window.innerWidth-r.left,window.innerHeight),_i.aspect=(window.innerWidth-r.left)/window.innerHeight,_i.updateProjectionMatrix()}}let Nt;const Fw=new Dw;let dp=!0,Qi;Yg("https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/deepslate_diamond_ore.png");async function Yg(t){Fw.load(t,e=>{e&&(Qi=e,Qi&&(Qi.minFilter=xt,Qi.magFilter=xt,Gt.material.map=Qi,Gt.material.opacity=.5,Gt.material.transparent=!0,Gt.material.wireframe=!1,Gt.material.needsUpdate=!0),dp&&(zw(),kc(0,0,0),dp=!1))})}function kc(t,e,n){let i=new xn(new Mr(1,1,1),new Po({map:Qi}));i.name="block",Mi.add(i),i.position.set(t,e,n)}let Mo=!1,Gt=new xn(new Mr(1,1,1),new Po({color:"white",wireframe:!0}));Gt.name="hoverBlock";function zw(){Nt=new Iw(_i,Cn.domElement),Nt.target.set(0,0,0),Nt.update(),Nt.autoRotate=!1,Nt.autoRotateSpeed=1,Nt.enableDamping=!0,Nt.dampingFactor=.05,Nt.enablePan=!0,document.addEventListener("keydown",t=>{t.keyCode===16&&(Mo=!0,Nt.mouseButtons={LEFT:2,MIDDLE:1,RIGHT:0})}),document.addEventListener("keyup",t=>{t.keyCode===16&&(Mo=!1,Nt.mouseButtons={LEFT:void 0,MIDDLE:1,RIGHT:void 0})}),Nt.mouseButtons={LEFT:void 0,MIDDLE:1,RIGHT:void 0},Nt.touches={ONE:void 0,TWO:void 0},Nt.screenSpacePanning=!1,Nt.minDistance=1,Nt.maxDistance=200,document.querySelector("canvas")?.addEventListener("mousemove",Bw),Mi.add(Gt),document.querySelector("canvas")?.addEventListener("click",Ow),document.querySelector("canvas")?.addEventListener("contextmenu",Uw)}const hp=new Rw,Pu=new Ae;function kf(t,e){const n=Cn.domElement.getBoundingClientRect();Pu.x=(t.clientX-n.left)/document.querySelector("canvas")?.width*2-1,Pu.y=-((t.clientY-n.top)/window.innerHeight)*2+1,hp.setFromCamera(Pu,_i);let i=hp.intersectObjects(Mi.children);return i=i.filter(r=>r.object.name!=="hoverBlock"),i[0]}function Ow(t){if(!Mo){let e=kf(t);e&&(e.object.name=="helpPlane"?kc(Math.round(e.point.x),Math.abs(Math.round(e.point.y+.001)),Math.round(e.point.z)):e.face&&kc(Math.round(e.object.position.x+e.face.normal.x),Math.abs(Math.round(e.object.position.y+.001+e.face.normal.y)),Math.round(e.object.position.z+e.face.normal.z)))}}function Uw(t){if(!Mo){let e=kf(t);e&&e.object.name!=="helpPlane"&&e.object.name!=="hoverBlock"&&Mi.remove(e.object)}}function Bw(t){if(!Mo){let e=kf(t);e&&(e.object.name=="helpPlane"?Gt.position.set(Math.round(e.point.x),Math.abs(Math.round(e.point.y+.001)),Math.round(e.point.z)):(Gt.material.map=Qi,Gt.material.opacity=.5,Gt.material.transparent=!0,Gt.material.wireframe=!1,Gt.material.needsUpdate=!0,e.face&&Gt.position.set(Math.round(e.object.position.x+e.face.normal.x),Math.abs(Math.round(e.object.position.y+.001+e.face.normal.y)),Math.round(e.object.position.z+e.face.normal.z))))}}const Vw=()=>{const[t,e]=Ri.useState([]);return Ri.useEffect(()=>{(async()=>{const r=(await Pv(()=>import("./textures-5599cd7a.js"),[])).default;e(r)})()},[]),ke("div",{className:"grid grid-cols-4",children:t.map(n=>Vt("div",{onClick:Gw,className:"relative basis-1/3 flex flex-wrap justify-center",children:[ke("img",{src:n.download_url,alt:"block",className:"textures w-3/4 h-auto aspect-square select-none pointer-events-none"}),ke("label",{className:"break-words text-sm select-none",children:n.name.slice(0,n.name.length-4).replaceAll("_"," ")})]},n.name))})};function Gw(t){Yg(t.currentTarget.querySelector("img").getAttribute("src"))}function Hw(){const[t,e]=Ri.useState(""),n=i=>{e(i.target.value)};return t||e("My first build"),ke("div",{className:"App h-full w-full",children:Vt("div",{className:"threeSceneInterface h-full w-full overflow-hidden pointer-events-none grid grid-rows-[52px_1fr]",children:[Vt("div",{className:"bg-neutral-400 z-30 grid grid-cols-[14%_25%_1fr_34%] text-black",children:[Vt("div",{className:"flex items-center",children:[ke("img",{className:"ml-5 aspect-square h-9 w-auto",src:"src/assets/img/logo.svg",alt:""}),ke("label",{className:"text-xl ml-4 font-medium",children:"Builder 3D"})]}),Vt("div",{className:"flex items-center",children:[ke("button",{className:"h-full w-24 ",children:"Undo"}),ke("button",{className:"h-full w-24",children:"Redo"}),ke("button",{className:" h-full w-24 ",children:"Create"})]}),Vt("div",{className:"flex items-center justify-center",children:[ke("button",{className:"outline-none",children:"Droxus228"}),ke("label",{className:" mx-2",children:"/"}),ke("input",{className:" bg-transparent outline-none",type:"text",value:t,onChange:n})]}),Vt("div",{className:"flex items-center justify-end",children:[ke("button",{className:"h-full w-24 ",children:"Save"}),ke("button",{className:"h-full w-24",children:"Scene"}),ke("button",{className:" h-full w-24 ",children:"Import"}),ke("button",{className:"h-full w-24",children:"Export"}),ke("button",{className:" h-full w-24 ",children:"Share"})]})]}),Vt("div",{className:"leftBlock absolute grid grid-rows-[200px_1fr_200px] h-full w-14% bg-neutral-300",children:[Vt("div",{className:"pt-20 relative z-10",children:[Vt("div",{className:"grid grid-cols-[1fr_40px] border-neutral-500 border-b-2",children:[ke("input",{className:"bg-transparent px-2 h-10 outline-none text-center text-lg",type:"text",placeholder:"Find Block"}),ke("button",{className:"flex place-content-center items-center",children:ke("img",{className:"h-6 w-auto",src:"src/assets/img/search.svg",alt:""})})]}),Vt("div",{className:"mt-2 flex",children:[ke("button",{className:"flex-1",children:"Blocks"}),ke("button",{className:"flex-1",children:"Slabs"}),ke("button",{className:"flex-1",children:"Stairs"})]}),ke("div",{className:"h-28 bg-gradient-to-b from-neutral-300 to-transparent"})]}),ke("div",{className:"texturePickBlock relative h-texturePick overflow-scroll overflow-x-hidden z-1 -mt-8 py-16",children:ke(Vw,{})}),Vt("div",{className:"z-20 -mt-8",children:[ke("div",{className:"h-28 bg-gradient-to-t from-neutral-300 to-transparent"}),Vt("div",{className:"pt-4",children:[ke("label",{className:" text-lg",children:"Mods"}),Vt("div",{className:"flex mt-2",children:[ke("button",{className:"flex-1",children:"Build"}),ke("button",{className:"flex-1",children:"Inspect"}),ke("button",{className:"flex-1",children:"Remove"})]})]})]})]})]})})}kw();Du.createRoot(document.getElementById("root")).render(ke(_0.StrictMode,{children:ke(Hw,{})}));
