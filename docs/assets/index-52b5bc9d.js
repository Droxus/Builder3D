(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function y0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xa={},S0={get exports(){return Xa},set exports(t){Xa=t}},vl={},Jt={},M0={get exports(){return Jt},set exports(t){Jt=t}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),w0=Symbol.for("react.portal"),E0=Symbol.for("react.fragment"),b0=Symbol.for("react.strict_mode"),T0=Symbol.for("react.profiler"),C0=Symbol.for("react.provider"),A0=Symbol.for("react.context"),L0=Symbol.for("react.forward_ref"),P0=Symbol.for("react.suspense"),D0=Symbol.for("react.memo"),R0=Symbol.for("react.lazy"),id=Symbol.iterator;function I0(t){return t===null||typeof t!="object"?null:(t=id&&t[id]||t["@@iterator"],typeof t=="function"?t:null)}var Pp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dp=Object.assign,Rp={};function zs(t,e,n){this.props=t,this.context=e,this.refs=Rp,this.updater=n||Pp}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ip(){}Ip.prototype=zs.prototype;function Jc(t,e,n){this.props=t,this.context=e,this.refs=Rp,this.updater=n||Pp}var ef=Jc.prototype=new Ip;ef.constructor=Jc;Dp(ef,zs.prototype);ef.isPureReactComponent=!0;var rd=Array.isArray,Np=Object.prototype.hasOwnProperty,tf={current:null},kp={key:!0,ref:!0,__self:!0,__source:!0};function zp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Np.call(e,i)&&!kp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Vo,type:t,key:s,ref:o,props:r,_owner:tf.current}}function N0(t,e){return{$$typeof:Vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vo}function k0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sd=/\/+/g;function Vl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?k0(""+t.key):e.toString(36)}function Da(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vo:case w0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Vl(o,0):i,rd(r)?(n="",t!=null&&(n=t.replace(sd,"$&/")+"/"),Da(r,e,n,"",function(u){return u})):r!=null&&(nf(r)&&(r=N0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(sd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",rd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Vl(s,a);o+=Da(s,e,n,l,r)}else if(l=I0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Vl(s,a++),o+=Da(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yo(t,e,n){if(t==null)return t;var i=[],r=0;return Da(t,i,"","",function(s){return e.call(n,s,r++)}),i}function z0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Ra={transition:null},F0={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Ra,ReactCurrentOwner:tf};Ie.Children={map:Yo,forEach:function(t,e,n){Yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yo(t,function(){e++}),e},toArray:function(t){return Yo(t,function(e){return e})||[]},only:function(t){if(!nf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ie.Component=zs;Ie.Fragment=E0;Ie.Profiler=T0;Ie.PureComponent=Jc;Ie.StrictMode=b0;Ie.Suspense=P0;Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F0;Ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Dp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Np.call(e,l)&&!kp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Vo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ie.createContext=function(t){return t={$$typeof:A0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:C0,_context:t},t.Consumer=t};Ie.createElement=zp;Ie.createFactory=function(t){var e=zp.bind(null,t);return e.type=t,e};Ie.createRef=function(){return{current:null}};Ie.forwardRef=function(t){return{$$typeof:L0,render:t}};Ie.isValidElement=nf;Ie.lazy=function(t){return{$$typeof:R0,_payload:{_status:-1,_result:t},_init:z0}};Ie.memo=function(t,e){return{$$typeof:D0,type:t,compare:e===void 0?null:e}};Ie.startTransition=function(t){var e=Ra.transition;Ra.transition={};try{t()}finally{Ra.transition=e}};Ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ie.useCallback=function(t,e){return Zt.current.useCallback(t,e)};Ie.useContext=function(t){return Zt.current.useContext(t)};Ie.useDebugValue=function(){};Ie.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};Ie.useEffect=function(t,e){return Zt.current.useEffect(t,e)};Ie.useId=function(){return Zt.current.useId()};Ie.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};Ie.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};Ie.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};Ie.useMemo=function(t,e){return Zt.current.useMemo(t,e)};Ie.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};Ie.useRef=function(t){return Zt.current.useRef(t)};Ie.useState=function(t){return Zt.current.useState(t)};Ie.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};Ie.useTransition=function(){return Zt.current.useTransition()};Ie.version="18.2.0";(function(t){t.exports=Ie})(M0);const O0=y0(Jt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0=Jt,B0=Symbol.for("react.element"),V0=Symbol.for("react.fragment"),G0=Object.prototype.hasOwnProperty,H0=U0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W0={key:!0,ref:!0,__self:!0,__source:!0};function Fp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)G0.call(e,i)&&!W0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:B0,type:t,key:s,ref:o,props:r,_owner:H0.current}}vl.Fragment=V0;vl.jsx=Fp;vl.jsxs=Fp;(function(t){t.exports=vl})(S0);const we=Xa.jsx,mt=Xa.jsxs;var $u={},Zu={},j0={get exports(){return Zu},set exports(t){Zu=t}},Mn={},Ku={},X0={get exports(){return Ku},set exports(t){Ku=t}},Op={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,V){var G=R.length;R.push(V);e:for(;0<G;){var se=G-1>>>1,F=R[se];if(0<r(F,V))R[se]=V,R[G]=F,G=se;else break e}}function n(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var V=R[0],G=R.pop();if(G!==V){R[0]=G;e:for(var se=0,F=R.length,$=F>>>1;se<$;){var ie=2*(se+1)-1,oe=R[ie],U=ie+1,Ee=R[U];if(0>r(oe,G))U<F&&0>r(Ee,oe)?(R[se]=Ee,R[U]=G,se=U):(R[se]=oe,R[ie]=G,se=ie);else if(U<F&&0>r(Ee,G))R[se]=Ee,R[U]=G,se=U;else break e}}return V}function r(R,V){var G=R.sortIndex-V.sortIndex;return G!==0?G:R.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,y=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(R){for(var V=n(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=R)i(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function M(R){if(h=!1,_(R),!y)if(n(l)!==null)y=!0,Q(x);else{var V=n(u);V!==null&&J(M,V.startTime-R)}}function x(R,V){y=!1,h&&(h=!1,m(S),S=-1),g=!0;var G=f;try{for(_(V),d=n(l);d!==null&&(!(d.expirationTime>V)||R&&!Z());){var se=d.callback;if(typeof se=="function"){d.callback=null,f=d.priorityLevel;var F=se(d.expirationTime<=V);V=t.unstable_now(),typeof F=="function"?d.callback=F:d===n(l)&&i(l),_(V)}else i(l);d=n(l)}if(d!==null)var $=!0;else{var ie=n(u);ie!==null&&J(M,ie.startTime-V),$=!1}return $}finally{d=null,f=G,g=!1}}var A=!1,L=null,S=-1,T=5,P=-1;function Z(){return!(t.unstable_now()-P<T)}function K(){if(L!==null){var R=t.unstable_now();P=R;var V=!0;try{V=L(!0,R)}finally{V?z():(A=!1,L=null)}}else A=!1}var z;if(typeof v=="function")z=function(){v(K)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Y=k.port2;k.port1.onmessage=K,z=function(){Y.postMessage(null)}}else z=function(){p(K,0)};function Q(R){L=R,A||(A=!0,z())}function J(R,V){S=p(function(){R(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Q(x))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var G=f;f=V;try{return R()}finally{f=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,V){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var G=f;f=R;try{return V()}finally{f=G}},t.unstable_scheduleCallback=function(R,V,G){var se=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?se+G:se):G=se,R){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=G+F,R={id:c++,callback:V,priorityLevel:R,startTime:G,expirationTime:F,sortIndex:-1},G>se?(R.sortIndex=G,e(u,R),n(l)===null&&R===n(u)&&(h?(m(S),S=-1):h=!0,J(M,G-se))):(R.sortIndex=F,e(l,R),y||g||(y=!0,Q(x))),R},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(R){var V=f;return function(){var G=f;f=V;try{return R.apply(this,arguments)}finally{f=G}}}})(Op);(function(t){t.exports=Op})(X0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up=Jt,Sn=Ku;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bp=new Set,_o={};function kr(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(_o[t]=e,t=0;t<e.length;t++)Bp.add(e[t])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=Object.prototype.hasOwnProperty,q0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,od={},ad={};function Y0(t){return Qu.call(ad,t)?!0:Qu.call(od,t)?!1:q0.test(t)?ad[t]=!0:(od[t]=!0,!1)}function $0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Z0(t,e,n,i){if(e===null||typeof e>"u"||$0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var rf=/[\-:]([a-z])/g;function sf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rf,sf);kt[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rf,sf);kt[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rf,sf);kt[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function of(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Z0(e,n,r,i)&&(n=null),i||r===null?Y0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var wi=Up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$o=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),af=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),Vp=Symbol.for("react.provider"),Gp=Symbol.for("react.context"),lf=Symbol.for("react.forward_ref"),ec=Symbol.for("react.suspense"),tc=Symbol.for("react.suspense_list"),uf=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),Hp=Symbol.for("react.offscreen"),ld=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=ld&&t[ld]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Object.assign,Gl;function no(t){if(Gl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gl=e&&e[1]||""}return`
`+Gl+t}var Hl=!1;function Wl(t,e){if(!t||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?no(t):""}function K0(t){switch(t.tag){case 5:return no(t.type);case 16:return no("Lazy");case 13:return no("Suspense");case 19:return no("SuspenseList");case 0:case 2:case 15:return t=Wl(t.type,!1),t;case 11:return t=Wl(t.type.render,!1),t;case 1:return t=Wl(t.type,!0),t;default:return""}}function nc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case Ju:return"Profiler";case af:return"StrictMode";case ec:return"Suspense";case tc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gp:return(t.displayName||"Context")+".Consumer";case Vp:return(t._context.displayName||"Context")+".Provider";case lf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uf:return e=t.displayName||null,e!==null?e:nc(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return nc(t(e))}catch{}}return null}function Q0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nc(e);case 8:return e===af?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J0(t){var e=Wp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zo(t){t._valueTracker||(t._valueTracker=J0(t))}function jp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Wp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function qa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ic(t,e){var n=e.checked;return rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ud(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xp(t,e){e=e.checked,e!=null&&of(t,"checked",e,!1)}function rc(t,e){Xp(t,e);var n=ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sc(t,e.type,n):e.hasOwnProperty("defaultValue")&&sc(t,e.type,ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sc(t,e,n){(e!=="number"||qa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var io=Array.isArray;function vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function oc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(io(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ji(n)}}function qp(t,e){var n=ji(e.value),i=ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function dd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Yp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ac(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Yp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ko,$p=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ko=Ko||document.createElement("div"),Ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ev=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(t){ev.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),lo[e]=lo[t]})});function Zp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||lo.hasOwnProperty(t)&&lo[t]?(""+e).trim():e+"px"}function Kp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Zp(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var tv=rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lc(t,e){if(e){if(tv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function uc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cc=null;function cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fc=null,_s=null,xs=null;function hd(t){if(t=Wo(t)){if(typeof fc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Ml(e),fc(t.stateNode,t.type,e))}}function Qp(t){_s?xs?xs.push(t):xs=[t]:_s=t}function Jp(){if(_s){var t=_s,e=xs;if(xs=_s=null,hd(t),e)for(t=0;t<e.length;t++)hd(e[t])}}function em(t,e){return t(e)}function tm(){}var jl=!1;function nm(t,e,n){if(jl)return t(e,n);jl=!0;try{return em(t,e,n)}finally{jl=!1,(_s!==null||xs!==null)&&(tm(),Jp())}}function yo(t,e){var n=t.stateNode;if(n===null)return null;var i=Ml(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var dc=!1;if(xi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){dc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{dc=!1}function nv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var uo=!1,Ya=null,$a=!1,hc=null,iv={onError:function(t){uo=!0,Ya=t}};function rv(t,e,n,i,r,s,o,a,l){uo=!1,Ya=null,nv.apply(iv,arguments)}function sv(t,e,n,i,r,s,o,a,l){if(rv.apply(this,arguments),uo){if(uo){var u=Ya;uo=!1,Ya=null}else throw Error(ee(198));$a||($a=!0,hc=u)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function im(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pd(t){if(zr(t)!==t)throw Error(ee(188))}function ov(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return pd(r),t;if(s===i)return pd(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function rm(t){return t=ov(t),t!==null?sm(t):null}function sm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sm(t);if(e!==null)return e;t=t.sibling}return null}var om=Sn.unstable_scheduleCallback,md=Sn.unstable_cancelCallback,av=Sn.unstable_shouldYield,lv=Sn.unstable_requestPaint,at=Sn.unstable_now,uv=Sn.unstable_getCurrentPriorityLevel,ff=Sn.unstable_ImmediatePriority,am=Sn.unstable_UserBlockingPriority,Za=Sn.unstable_NormalPriority,cv=Sn.unstable_LowPriority,lm=Sn.unstable_IdlePriority,_l=null,ti=null;function fv(t){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(_l,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:pv,dv=Math.log,hv=Math.LN2;function pv(t){return t>>>=0,t===0?32:31-(dv(t)/hv|0)|0}var Qo=64,Jo=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ka(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ro(a):(s&=o,s!==0&&(i=ro(s)))}else o=n&~r,o!==0?i=ro(o):s!==0&&(i=ro(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function mv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=mv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function pc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function um(){var t=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),t}function Xl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function vv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function df(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Xe=0;function cm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fm,hf,dm,hm,pm,mc=!1,ea=[],ki=null,zi=null,Fi=null,So=new Map,Mo=new Map,Di=[],_v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gd(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":So.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function Hs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wo(e),e!==null&&hf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function xv(t,e,n,i,r){switch(e){case"focusin":return ki=Hs(ki,t,e,n,i,r),!0;case"dragenter":return zi=Hs(zi,t,e,n,i,r),!0;case"mouseover":return Fi=Hs(Fi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return So.set(s,Hs(So.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Mo.set(s,Hs(Mo.get(s)||null,t,e,n,i,r)),!0}return!1}function mm(t){var e=mr(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=im(n),e!==null){t.blockedOn=e,pm(t.priority,function(){dm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ia(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);cc=i,n.target.dispatchEvent(i),cc=null}else return e=Wo(n),e!==null&&hf(e),t.blockedOn=n,!1;e.shift()}return!0}function vd(t,e,n){Ia(t)&&n.delete(e)}function yv(){mc=!1,ki!==null&&Ia(ki)&&(ki=null),zi!==null&&Ia(zi)&&(zi=null),Fi!==null&&Ia(Fi)&&(Fi=null),So.forEach(vd),Mo.forEach(vd)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,mc||(mc=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,yv)))}function wo(t){function e(r){return Ws(r,t)}if(0<ea.length){Ws(ea[0],t);for(var n=1;n<ea.length;n++){var i=ea[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ki!==null&&Ws(ki,t),zi!==null&&Ws(zi,t),Fi!==null&&Ws(Fi,t),So.forEach(e),Mo.forEach(e),n=0;n<Di.length;n++)i=Di[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Di.length&&(n=Di[0],n.blockedOn===null);)mm(n),n.blockedOn===null&&Di.shift()}var ys=wi.ReactCurrentBatchConfig,Qa=!0;function Sv(t,e,n,i){var r=Xe,s=ys.transition;ys.transition=null;try{Xe=1,pf(t,e,n,i)}finally{Xe=r,ys.transition=s}}function Mv(t,e,n,i){var r=Xe,s=ys.transition;ys.transition=null;try{Xe=4,pf(t,e,n,i)}finally{Xe=r,ys.transition=s}}function pf(t,e,n,i){if(Qa){var r=gc(t,e,n,i);if(r===null)nu(t,e,i,Ja,n),gd(t,i);else if(xv(r,t,e,n,i))i.stopPropagation();else if(gd(t,i),e&4&&-1<_v.indexOf(t)){for(;r!==null;){var s=Wo(r);if(s!==null&&fm(s),s=gc(t,e,n,i),s===null&&nu(t,e,i,Ja,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else nu(t,e,i,null,n)}}var Ja=null;function gc(t,e,n,i){if(Ja=null,t=cf(i),t=mr(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=im(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ja=t,null}function gm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uv()){case ff:return 1;case am:return 4;case Za:case cv:return 16;case lm:return 536870912;default:return 16}default:return 16}}var Ii=null,mf=null,Na=null;function vm(){if(Na)return Na;var t,e=mf,n=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Na=r.slice(t,1<i?1-i:void 0)}function ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ta(){return!0}function _d(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ta:_d,this.isPropagationStopped=_d,this}return rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),e}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gf=wn(Fs),Ho=rt({},Fs,{view:0,detail:0}),wv=wn(Ho),ql,Yl,js,xl=rt({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(ql=t.screenX-js.screenX,Yl=t.screenY-js.screenY):Yl=ql=0,js=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:Yl}}),xd=wn(xl),Ev=rt({},xl,{dataTransfer:0}),bv=wn(Ev),Tv=rt({},Ho,{relatedTarget:0}),$l=wn(Tv),Cv=rt({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=wn(Cv),Lv=rt({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pv=wn(Lv),Dv=rt({},Fs,{data:0}),yd=wn(Dv),Rv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Nv[t])?!!e[t]:!1}function vf(){return kv}var zv=rt({},Ho,{key:function(t){if(t.key){var e=Rv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Iv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vf,charCode:function(t){return t.type==="keypress"?ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fv=wn(zv),Ov=rt({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=wn(Ov),Uv=rt({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vf}),Bv=wn(Uv),Vv=rt({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=wn(Vv),Hv=rt({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=wn(Hv),jv=[9,13,27,32],_f=xi&&"CompositionEvent"in window,co=null;xi&&"documentMode"in document&&(co=document.documentMode);var Xv=xi&&"TextEvent"in window&&!co,_m=xi&&(!_f||co&&8<co&&11>=co),Md=String.fromCharCode(32),wd=!1;function xm(t,e){switch(t){case"keyup":return jv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ym(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function qv(t,e){switch(t){case"compositionend":return ym(e);case"keypress":return e.which!==32?null:(wd=!0,Md);case"textInput":return t=e.data,t===Md&&wd?null:t;default:return null}}function Yv(t,e){if(os)return t==="compositionend"||!_f&&xm(t,e)?(t=vm(),Na=mf=Ii=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _m&&e.locale!=="ko"?null:e.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$v[t.type]:e==="textarea"}function Sm(t,e,n,i){Qp(i),e=el(e,"onChange"),0<e.length&&(n=new gf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fo=null,Eo=null;function Zv(t){Rm(t,0)}function yl(t){var e=us(t);if(jp(e))return t}function Kv(t,e){if(t==="change")return e}var Mm=!1;if(xi){var Zl;if(xi){var Kl="oninput"in document;if(!Kl){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),Kl=typeof bd.oninput=="function"}Zl=Kl}else Zl=!1;Mm=Zl&&(!document.documentMode||9<document.documentMode)}function Td(){fo&&(fo.detachEvent("onpropertychange",wm),Eo=fo=null)}function wm(t){if(t.propertyName==="value"&&yl(Eo)){var e=[];Sm(e,Eo,t,cf(t)),nm(Zv,e)}}function Qv(t,e,n){t==="focusin"?(Td(),fo=e,Eo=n,fo.attachEvent("onpropertychange",wm)):t==="focusout"&&Td()}function Jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(Eo)}function e_(t,e){if(t==="click")return yl(e)}function t_(t,e){if(t==="input"||t==="change")return yl(e)}function n_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:n_;function bo(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Qu.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Cd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ad(t,e){var n=Cd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cd(n)}}function Em(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Em(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bm(){for(var t=window,e=qa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qa(t.document)}return e}function xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function i_(t){var e=bm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Em(n.ownerDocument.documentElement,n)){if(i!==null&&xf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ad(n,s);var o=Ad(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var r_=xi&&"documentMode"in document&&11>=document.documentMode,as=null,vc=null,ho=null,_c=!1;function Ld(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_c||as==null||as!==qa(i)||(i=as,"selectionStart"in i&&xf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ho&&bo(ho,i)||(ho=i,i=el(vc,"onSelect"),0<i.length&&(e=new gf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=as)))}function na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},Ql={},Tm={};xi&&(Tm=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Sl(t){if(Ql[t])return Ql[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Tm)return Ql[t]=e[n];return t}var Cm=Sl("animationend"),Am=Sl("animationiteration"),Lm=Sl("animationstart"),Pm=Sl("transitionend"),Dm=new Map,Pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){Dm.set(t,e),kr(e,[t])}for(var Jl=0;Jl<Pd.length;Jl++){var eu=Pd[Jl],s_=eu.toLowerCase(),o_=eu[0].toUpperCase()+eu.slice(1);Ki(s_,"on"+o_)}Ki(Cm,"onAnimationEnd");Ki(Am,"onAnimationIteration");Ki(Lm,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(Pm,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a_=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Dd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sv(i,e,void 0,t),t.currentTarget=null}function Rm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Dd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Dd(r,a,u),s=l}}}if($a)throw t=hc,$a=!1,hc=null,t}function $e(t,e){var n=e[wc];n===void 0&&(n=e[wc]=new Set);var i=t+"__bubble";n.has(i)||(Im(e,t,2,!1),n.add(i))}function tu(t,e,n){var i=0;e&&(i|=4),Im(n,t,i,e)}var ia="_reactListening"+Math.random().toString(36).slice(2);function To(t){if(!t[ia]){t[ia]=!0,Bp.forEach(function(n){n!=="selectionchange"&&(a_.has(n)||tu(n,!1,t),tu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ia]||(e[ia]=!0,tu("selectionchange",!1,e))}}function Im(t,e,n,i){switch(gm(e)){case 1:var r=Sv;break;case 4:r=Mv;break;default:r=pf}n=r.bind(null,e,n,t),r=void 0,!dc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function nu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=mr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}nm(function(){var u=s,c=cf(n),d=[];e:{var f=Dm.get(t);if(f!==void 0){var g=gf,y=t;switch(t){case"keypress":if(ka(n)===0)break e;case"keydown":case"keyup":g=Fv;break;case"focusin":y="focus",g=$l;break;case"focusout":y="blur",g=$l;break;case"beforeblur":case"afterblur":g=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Bv;break;case Cm:case Am:case Lm:g=Av;break;case Pm:g=Gv;break;case"scroll":g=wv;break;case"wheel":g=Wv;break;case"copy":case"cut":case"paste":g=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Sd}var h=(e&4)!==0,p=!h&&t==="scroll",m=h?f!==null?f+"Capture":null:f;h=[];for(var v=u,_;v!==null;){_=v;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,m!==null&&(M=yo(v,m),M!=null&&h.push(Co(v,M,_)))),p)break;v=v.return}0<h.length&&(f=new g(f,y,null,n,c),d.push({event:f,listeners:h}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==cc&&(y=n.relatedTarget||n.fromElement)&&(mr(y)||y[yi]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?mr(y):null,y!==null&&(p=zr(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(h=xd,M="onMouseLeave",m="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(h=Sd,M="onPointerLeave",m="onPointerEnter",v="pointer"),p=g==null?f:us(g),_=y==null?f:us(y),f=new h(M,v+"leave",g,n,c),f.target=p,f.relatedTarget=_,M=null,mr(c)===u&&(h=new h(m,v+"enter",y,n,c),h.target=_,h.relatedTarget=p,M=h),p=M,g&&y)t:{for(h=g,m=y,v=0,_=h;_;_=Ur(_))v++;for(_=0,M=m;M;M=Ur(M))_++;for(;0<v-_;)h=Ur(h),v--;for(;0<_-v;)m=Ur(m),_--;for(;v--;){if(h===m||m!==null&&h===m.alternate)break t;h=Ur(h),m=Ur(m)}h=null}else h=null;g!==null&&Rd(d,f,g,h,!1),y!==null&&p!==null&&Rd(d,p,y,h,!0)}}e:{if(f=u?us(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var x=Kv;else if(Ed(f))if(Mm)x=t_;else{x=Jv;var A=Qv}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=e_);if(x&&(x=x(t,u))){Sm(d,x,n,c);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&sc(f,"number",f.value)}switch(A=u?us(u):window,t){case"focusin":(Ed(A)||A.contentEditable==="true")&&(as=A,vc=u,ho=null);break;case"focusout":ho=vc=as=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,Ld(d,n,c);break;case"selectionchange":if(r_)break;case"keydown":case"keyup":Ld(d,n,c)}var L;if(_f)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else os?xm(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(_m&&n.locale!=="ko"&&(os||S!=="onCompositionStart"?S==="onCompositionEnd"&&os&&(L=vm()):(Ii=c,mf="value"in Ii?Ii.value:Ii.textContent,os=!0)),A=el(u,S),0<A.length&&(S=new yd(S,t,null,n,c),d.push({event:S,listeners:A}),L?S.data=L:(L=ym(n),L!==null&&(S.data=L)))),(L=Xv?qv(t,n):Yv(t,n))&&(u=el(u,"onBeforeInput"),0<u.length&&(c=new yd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=L))}Rm(d,e)})}function Co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function el(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=yo(t,n),s!=null&&i.unshift(Co(t,s,r)),s=yo(t,e),s!=null&&i.push(Co(t,s,r))),t=t.return}return i}function Ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=yo(n,s),l!=null&&o.unshift(Co(n,l,a))):r||(l=yo(n,s),l!=null&&o.push(Co(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var l_=/\r\n?/g,u_=/\u0000|\uFFFD/g;function Id(t){return(typeof t=="string"?t:""+t).replace(l_,`
`).replace(u_,"")}function ra(t,e,n){if(e=Id(e),Id(t)!==e&&n)throw Error(ee(425))}function tl(){}var xc=null,yc=null;function Sc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,c_=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,f_=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(t){return Nd.resolve(null).then(t).catch(d_)}:Mc;function d_(t){setTimeout(function(){throw t})}function iu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wo(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),ei="__reactFiber$"+Os,Ao="__reactProps$"+Os,yi="__reactContainer$"+Os,wc="__reactEvents$"+Os,h_="__reactListeners$"+Os,p_="__reactHandles$"+Os;function mr(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yi]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kd(t);t!==null;){if(n=t[ei])return n;t=kd(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[ei]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Ml(t){return t[Ao]||null}var Ec=[],cs=-1;function Qi(t){return{current:t}}function Qe(t){0>cs||(t.current=Ec[cs],Ec[cs]=null,cs--)}function Ye(t,e){cs++,Ec[cs]=t.current,t.current=e}var Xi={},Ht=Qi(Xi),rn=Qi(!1),Tr=Xi;function Ts(t,e){var n=t.type.contextTypes;if(!n)return Xi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function nl(){Qe(rn),Qe(Ht)}function zd(t,e,n){if(Ht.current!==Xi)throw Error(ee(168));Ye(Ht,e),Ye(rn,n)}function Nm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,Q0(t)||"Unknown",r));return rt({},n,i)}function il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xi,Tr=Ht.current,Ye(Ht,t),Ye(rn,rn.current),!0}function Fd(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=Nm(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,Qe(rn),Qe(Ht),Ye(Ht,t)):Qe(rn),Ye(rn,n)}var hi=null,wl=!1,ru=!1;function km(t){hi===null?hi=[t]:hi.push(t)}function m_(t){wl=!0,km(t)}function Ji(){if(!ru&&hi!==null){ru=!0;var t=0,e=Xe;try{var n=hi;for(Xe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,wl=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),om(ff,Ji),r}finally{Xe=e,ru=!1}}return null}var fs=[],ds=0,rl=null,sl=0,An=[],Ln=0,Cr=null,mi=1,gi="";function ar(t,e){fs[ds++]=sl,fs[ds++]=rl,rl=t,sl=e}function zm(t,e,n){An[Ln++]=mi,An[Ln++]=gi,An[Ln++]=Cr,Cr=t;var i=mi;t=gi;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,mi=1<<32-qn(e)+r|n<<r|i,gi=s+t}else mi=1<<s|n<<r|i,gi=t}function yf(t){t.return!==null&&(ar(t,1),zm(t,1,0))}function Sf(t){for(;t===rl;)rl=fs[--ds],fs[ds]=null,sl=fs[--ds],fs[ds]=null;for(;t===Cr;)Cr=An[--Ln],An[Ln]=null,gi=An[--Ln],An[Ln]=null,mi=An[--Ln],An[Ln]=null}var vn=null,pn=null,tt=!1,jn=null;function Fm(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Od(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,pn=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:mi,overflow:gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,pn=null,!0):!1;default:return!1}}function bc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tc(t){if(tt){var e=pn;if(e){var n=e;if(!Od(t,e)){if(bc(t))throw Error(ee(418));e=Oi(n.nextSibling);var i=vn;e&&Od(t,e)?Fm(i,n):(t.flags=t.flags&-4097|2,tt=!1,vn=t)}}else{if(bc(t))throw Error(ee(418));t.flags=t.flags&-4097|2,tt=!1,vn=t}}}function Ud(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function sa(t){if(t!==vn)return!1;if(!tt)return Ud(t),tt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sc(t.type,t.memoizedProps)),e&&(e=pn)){if(bc(t))throw Om(),Error(ee(418));for(;e;)Fm(t,e),e=Oi(e.nextSibling)}if(Ud(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=vn?Oi(t.stateNode.nextSibling):null;return!0}function Om(){for(var t=pn;t;)t=Oi(t.nextSibling)}function Cs(){pn=vn=null,tt=!1}function Mf(t){jn===null?jn=[t]:jn.push(t)}var g_=wi.ReactCurrentBatchConfig;function Hn(t,e){if(t&&t.defaultProps){e=rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ol=Qi(null),al=null,hs=null,wf=null;function Ef(){wf=hs=al=null}function bf(t){var e=ol.current;Qe(ol),t._currentValue=e}function Cc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){al=t,wf=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(wf!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(al===null)throw Error(ee(308));hs=t,al.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var gr=null;function Tf(t){gr===null?gr=[t]:gr.push(t)}function Um(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Tf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Si(t,i)}function Si(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pi=!1;function Cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ui(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Be&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Si(t,n)}return r=i.interleaved,r===null?(e.next=e,Tf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Si(t,n)}function za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,df(t,n)}}function Bd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ll(t,e,n,i){var r=t.updateQueue;Pi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,h=a;switch(f=e,g=n,h.tag){case 1:if(y=h.payload,typeof y=="function"){d=y.call(g,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=h.payload,f=typeof y=="function"?y.call(g,d,f):y,f==null)break e;d=rt({},d,f);break e;case 2:Pi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=d}}function Vd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Vm=new Up.Component().refs;function Ac(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var El={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Vi(t),s=vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Yn(e,t,r,i),za(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Vi(t),s=vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ui(t,s,r),e!==null&&(Yn(e,t,r,i),za(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=Vi(t),r=vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ui(t,r,i),e!==null&&(Yn(e,t,i,n),za(e,t,i))}};function Gd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!bo(n,i)||!bo(r,s):!0}function Gm(t,e,n){var i=!1,r=Xi,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=sn(e)?Tr:Ht.current,i=e.contextTypes,s=(i=i!=null)?Ts(t,r):Xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=El,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&El.enqueueReplaceState(e,e.state,null)}function Lc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Vm,Cf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=sn(e)?Tr:Ht.current,r.context=Ts(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ac(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&El.enqueueReplaceState(r,r.state,null),ll(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Vm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function oa(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wd(t){var e=t._init;return e(t._payload)}function Hm(t){function e(m,v){if(t){var _=m.deletions;_===null?(m.deletions=[v],m.flags|=16):_.push(v)}}function n(m,v){if(!t)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Gi(m,v),m.index=0,m.sibling=null,m}function s(m,v,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<v?(m.flags|=2,v):_):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,v,_,M){return v===null||v.tag!==6?(v=fu(_,m.mode,M),v.return=m,v):(v=r(v,_),v.return=m,v)}function l(m,v,_,M){var x=_.type;return x===ss?c(m,v,_.props.children,M,_.key):v!==null&&(v.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Li&&Wd(x)===v.type)?(M=r(v,_.props),M.ref=Xs(m,v,_),M.return=m,M):(M=Ga(_.type,_.key,_.props,null,m.mode,M),M.ref=Xs(m,v,_),M.return=m,M)}function u(m,v,_,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=du(_,m.mode,M),v.return=m,v):(v=r(v,_.children||[]),v.return=m,v)}function c(m,v,_,M,x){return v===null||v.tag!==7?(v=Mr(_,m.mode,M,x),v.return=m,v):(v=r(v,_),v.return=m,v)}function d(m,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=fu(""+v,m.mode,_),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $o:return _=Ga(v.type,v.key,v.props,null,m.mode,_),_.ref=Xs(m,null,v),_.return=m,_;case rs:return v=du(v,m.mode,_),v.return=m,v;case Li:var M=v._init;return d(m,M(v._payload),_)}if(io(v)||Vs(v))return v=Mr(v,m.mode,_,null),v.return=m,v;oa(m,v)}return null}function f(m,v,_,M){var x=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return x!==null?null:a(m,v,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $o:return _.key===x?l(m,v,_,M):null;case rs:return _.key===x?u(m,v,_,M):null;case Li:return x=_._init,f(m,v,x(_._payload),M)}if(io(_)||Vs(_))return x!==null?null:c(m,v,_,M,null);oa(m,_)}return null}function g(m,v,_,M,x){if(typeof M=="string"&&M!==""||typeof M=="number")return m=m.get(_)||null,a(v,m,""+M,x);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case $o:return m=m.get(M.key===null?_:M.key)||null,l(v,m,M,x);case rs:return m=m.get(M.key===null?_:M.key)||null,u(v,m,M,x);case Li:var A=M._init;return g(m,v,_,A(M._payload),x)}if(io(M)||Vs(M))return m=m.get(_)||null,c(v,m,M,x,null);oa(v,M)}return null}function y(m,v,_,M){for(var x=null,A=null,L=v,S=v=0,T=null;L!==null&&S<_.length;S++){L.index>S?(T=L,L=null):T=L.sibling;var P=f(m,L,_[S],M);if(P===null){L===null&&(L=T);break}t&&L&&P.alternate===null&&e(m,L),v=s(P,v,S),A===null?x=P:A.sibling=P,A=P,L=T}if(S===_.length)return n(m,L),tt&&ar(m,S),x;if(L===null){for(;S<_.length;S++)L=d(m,_[S],M),L!==null&&(v=s(L,v,S),A===null?x=L:A.sibling=L,A=L);return tt&&ar(m,S),x}for(L=i(m,L);S<_.length;S++)T=g(L,m,S,_[S],M),T!==null&&(t&&T.alternate!==null&&L.delete(T.key===null?S:T.key),v=s(T,v,S),A===null?x=T:A.sibling=T,A=T);return t&&L.forEach(function(Z){return e(m,Z)}),tt&&ar(m,S),x}function h(m,v,_,M){var x=Vs(_);if(typeof x!="function")throw Error(ee(150));if(_=x.call(_),_==null)throw Error(ee(151));for(var A=x=null,L=v,S=v=0,T=null,P=_.next();L!==null&&!P.done;S++,P=_.next()){L.index>S?(T=L,L=null):T=L.sibling;var Z=f(m,L,P.value,M);if(Z===null){L===null&&(L=T);break}t&&L&&Z.alternate===null&&e(m,L),v=s(Z,v,S),A===null?x=Z:A.sibling=Z,A=Z,L=T}if(P.done)return n(m,L),tt&&ar(m,S),x;if(L===null){for(;!P.done;S++,P=_.next())P=d(m,P.value,M),P!==null&&(v=s(P,v,S),A===null?x=P:A.sibling=P,A=P);return tt&&ar(m,S),x}for(L=i(m,L);!P.done;S++,P=_.next())P=g(L,m,S,P.value,M),P!==null&&(t&&P.alternate!==null&&L.delete(P.key===null?S:P.key),v=s(P,v,S),A===null?x=P:A.sibling=P,A=P);return t&&L.forEach(function(K){return e(m,K)}),tt&&ar(m,S),x}function p(m,v,_,M){if(typeof _=="object"&&_!==null&&_.type===ss&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case $o:e:{for(var x=_.key,A=v;A!==null;){if(A.key===x){if(x=_.type,x===ss){if(A.tag===7){n(m,A.sibling),v=r(A,_.props.children),v.return=m,m=v;break e}}else if(A.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Li&&Wd(x)===A.type){n(m,A.sibling),v=r(A,_.props),v.ref=Xs(m,A,_),v.return=m,m=v;break e}n(m,A);break}else e(m,A);A=A.sibling}_.type===ss?(v=Mr(_.props.children,m.mode,M,_.key),v.return=m,m=v):(M=Ga(_.type,_.key,_.props,null,m.mode,M),M.ref=Xs(m,v,_),M.return=m,m=M)}return o(m);case rs:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(m,v.sibling),v=r(v,_.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else e(m,v);v=v.sibling}v=du(_,m.mode,M),v.return=m,m=v}return o(m);case Li:return A=_._init,p(m,v,A(_._payload),M)}if(io(_))return y(m,v,_,M);if(Vs(_))return h(m,v,_,M);oa(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(m,v.sibling),v=r(v,_),v.return=m,m=v):(n(m,v),v=fu(_,m.mode,M),v.return=m,m=v),o(m)):n(m,v)}return p}var As=Hm(!0),Wm=Hm(!1),jo={},ni=Qi(jo),Lo=Qi(jo),Po=Qi(jo);function vr(t){if(t===jo)throw Error(ee(174));return t}function Af(t,e){switch(Ye(Po,e),Ye(Lo,t),Ye(ni,jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ac(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ac(e,t)}Qe(ni),Ye(ni,e)}function Ls(){Qe(ni),Qe(Lo),Qe(Po)}function jm(t){vr(Po.current);var e=vr(ni.current),n=ac(e,t.type);e!==n&&(Ye(Lo,t),Ye(ni,n))}function Lf(t){Lo.current===t&&(Qe(ni),Qe(Lo))}var nt=Qi(0);function ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var su=[];function Pf(){for(var t=0;t<su.length;t++)su[t]._workInProgressVersionPrimary=null;su.length=0}var Fa=wi.ReactCurrentDispatcher,ou=wi.ReactCurrentBatchConfig,Ar=0,it=null,gt=null,bt=null,cl=!1,po=!1,Do=0,v_=0;function Ot(){throw Error(ee(321))}function Df(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function Rf(t,e,n,i,r,s){if(Ar=s,it=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fa.current=t===null||t.memoizedState===null?S_:M_,t=n(i,r),po){s=0;do{if(po=!1,Do=0,25<=s)throw Error(ee(301));s+=1,bt=gt=null,e.updateQueue=null,Fa.current=w_,t=n(i,r)}while(po)}if(Fa.current=fl,e=gt!==null&&gt.next!==null,Ar=0,bt=gt=it=null,cl=!1,e)throw Error(ee(300));return t}function If(){var t=Do!==0;return Do=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?it.memoizedState=bt=t:bt=bt.next=t,bt}function On(){if(gt===null){var t=it.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=bt===null?it.memoizedState:bt.next;if(e!==null)bt=e,gt=t;else{if(t===null)throw Error(ee(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},bt===null?it.memoizedState=bt=t:bt=bt.next=t}return bt}function Ro(t,e){return typeof e=="function"?e(t):e}function au(t){var e=On(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=gt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ar&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,it.lanes|=c,Lr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,it.lanes|=s,Lr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lu(t){var e=On(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Xm(){}function qm(t,e){var n=it,i=On(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,Nf(Zm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Io(9,$m.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(ee(349));Ar&30||Ym(n,e,r)}return r}function Ym(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $m(t,e,n,i){e.value=n,e.getSnapshot=i,Km(e)&&Qm(t)}function Zm(t,e,n){return n(function(){Km(e)&&Qm(t)})}function Km(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function Qm(t){var e=Si(t,1);e!==null&&Yn(e,t,1,-1)}function jd(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},e.queue=t,t=t.dispatch=y_.bind(null,it,t),[e.memoizedState,t]}function Io(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Jm(){return On().memoizedState}function Oa(t,e,n,i){var r=Kn();it.flags|=t,r.memoizedState=Io(1|e,n,void 0,i===void 0?null:i)}function bl(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,i!==null&&Df(i,o.deps)){r.memoizedState=Io(e,n,s,i);return}}it.flags|=t,r.memoizedState=Io(1|e,n,s,i)}function Xd(t,e){return Oa(8390656,8,t,e)}function Nf(t,e){return bl(2048,8,t,e)}function eg(t,e){return bl(4,2,t,e)}function tg(t,e){return bl(4,4,t,e)}function ng(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ig(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,ng.bind(null,e,t),n)}function kf(){}function rg(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function sg(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function og(t,e,n){return Ar&21?($n(n,e)||(n=um(),it.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function __(t,e){var n=Xe;Xe=n!==0&&4>n?n:4,t(!0);var i=ou.transition;ou.transition={};try{t(!1),e()}finally{Xe=n,ou.transition=i}}function ag(){return On().memoizedState}function x_(t,e,n){var i=Vi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},lg(t))ug(e,n);else if(n=Um(t,e,n,i),n!==null){var r=$t();Yn(n,t,i,r),cg(n,e,i)}}function y_(t,e,n){var i=Vi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(lg(t))ug(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,Tf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Um(t,e,r,i),n!==null&&(r=$t(),Yn(n,t,i,r),cg(n,e,i))}}function lg(t){var e=t.alternate;return t===it||e!==null&&e===it}function ug(t,e){po=cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,df(t,n)}}var fl={readContext:Fn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},S_={readContext:Fn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:Xd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oa(4194308,4,ng.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oa(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=x_.bind(null,it,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:jd,useDebugValue:kf,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=jd(!1),e=t[0];return t=__.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=it,r=Kn();if(tt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Ct===null)throw Error(ee(349));Ar&30||Ym(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Xd(Zm.bind(null,i,s,t),[t]),i.flags|=2048,Io(9,$m.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=Ct.identifierPrefix;if(tt){var n=gi,i=mi;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Do++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=v_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},M_={readContext:Fn,useCallback:rg,useContext:Fn,useEffect:Nf,useImperativeHandle:ig,useInsertionEffect:eg,useLayoutEffect:tg,useMemo:sg,useReducer:au,useRef:Jm,useState:function(){return au(Ro)},useDebugValue:kf,useDeferredValue:function(t){var e=On();return og(e,gt.memoizedState,t)},useTransition:function(){var t=au(Ro)[0],e=On().memoizedState;return[t,e]},useMutableSource:Xm,useSyncExternalStore:qm,useId:ag,unstable_isNewReconciler:!1},w_={readContext:Fn,useCallback:rg,useContext:Fn,useEffect:Nf,useImperativeHandle:ig,useInsertionEffect:eg,useLayoutEffect:tg,useMemo:sg,useReducer:lu,useRef:Jm,useState:function(){return lu(Ro)},useDebugValue:kf,useDeferredValue:function(t){var e=On();return gt===null?e.memoizedState=t:og(e,gt.memoizedState,t)},useTransition:function(){var t=lu(Ro)[0],e=On().memoizedState;return[t,e]},useMutableSource:Xm,useSyncExternalStore:qm,useId:ag,unstable_isNewReconciler:!1};function Ps(t,e){try{var n="",i=e;do n+=K0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function uu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var E_=typeof WeakMap=="function"?WeakMap:Map;function fg(t,e,n){n=vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){hl||(hl=!0,Bc=i),Pc(t,e)},n}function dg(t,e,n){n=vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Pc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pc(t,e),typeof i!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new E_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=O_.bind(null,t,e,n),e.then(t,t))}function Yd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $d(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vi(-1,1),e.tag=2,Ui(n,e,1))),n.lanes|=1),t)}var b_=wi.ReactCurrentOwner,nn=!1;function Yt(t,e,n,i){e.child=t===null?Wm(e,null,n,i):As(e,t.child,n,i)}function Zd(t,e,n,i,r){n=n.render;var s=e.ref;return Ss(e,r),i=Rf(t,e,n,i,s,r),n=If(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(tt&&n&&yf(e),e.flags|=1,Yt(t,e,i,r),e.child)}function Kd(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hg(t,e,s,i,r)):(t=Ga(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:bo,n(o,i)&&t.ref===e.ref)return Mi(t,e,r)}return e.flags|=1,t=Gi(s,i),t.ref=e.ref,t.return=e,e.child=t}function hg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(bo(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Mi(t,e,r)}return Dc(t,e,n,i,r)}function pg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(ms,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ye(ms,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ye(ms,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ye(ms,hn),hn|=i;return Yt(t,e,r,n),e.child}function mg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Dc(t,e,n,i,r){var s=sn(n)?Tr:Ht.current;return s=Ts(e,s),Ss(e,r),n=Rf(t,e,n,i,s,r),i=If(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Mi(t,e,r)):(tt&&i&&yf(e),e.flags|=1,Yt(t,e,n,r),e.child)}function Qd(t,e,n,i,r){if(sn(n)){var s=!0;il(e)}else s=!1;if(Ss(e,r),e.stateNode===null)Ua(t,e),Gm(e,n,i),Lc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Fn(u):(u=sn(n)?Tr:Ht.current,u=Ts(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Hd(e,o,i,u),Pi=!1;var f=e.memoizedState;o.state=f,ll(e,i,o,r),l=e.memoizedState,a!==i||f!==l||rn.current||Pi?(typeof c=="function"&&(Ac(e,n,c,i),l=e.memoizedState),(a=Pi||Gd(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Bm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Hn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=sn(n)?Tr:Ht.current,l=Ts(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Hd(e,o,i,l),Pi=!1,f=e.memoizedState,o.state=f,ll(e,i,o,r);var y=e.memoizedState;a!==d||f!==y||rn.current||Pi?(typeof g=="function"&&(Ac(e,n,g,i),y=e.memoizedState),(u=Pi||Gd(e,n,u,i,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Rc(t,e,n,i,s,r)}function Rc(t,e,n,i,r,s){mg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Fd(e,n,!1),Mi(t,e,s);i=e.stateNode,b_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=As(e,t.child,null,s),e.child=As(e,null,a,s)):Yt(t,e,a,s),e.memoizedState=i.state,r&&Fd(e,n,!0),e.child}function gg(t){var e=t.stateNode;e.pendingContext?zd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zd(t,e.context,!1),Af(t,e.containerInfo)}function Jd(t,e,n,i,r){return Cs(),Mf(r),e.flags|=256,Yt(t,e,n,i),e.child}var Ic={dehydrated:null,treeContext:null,retryLane:0};function Nc(t){return{baseLanes:t,cachePool:null,transitions:null}}function vg(t,e,n){var i=e.pendingProps,r=nt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ye(nt,r&1),t===null)return Tc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Al(o,i,0,null),t=Mr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nc(n),e.memoizedState=Ic,t):zf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return T_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Gi(a,s):(s=Mr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Nc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ic,i}return s=t.child,t=s.sibling,i=Gi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function zf(t,e){return e=Al({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function aa(t,e,n,i){return i!==null&&Mf(i),As(e,t.child,null,n),t=zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function T_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=uu(Error(ee(422))),aa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Al({mode:"visible",children:i.children},r,0,null),s=Mr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&As(e,t.child,null,o),e.child.memoizedState=Nc(o),e.memoizedState=Ic,s);if(!(e.mode&1))return aa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=uu(s,i,void 0),aa(t,e,o,i)}if(a=(o&t.childLanes)!==0,nn||a){if(i=Ct,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Si(t,r),Yn(i,t,r,-1))}return Gf(),i=uu(Error(ee(421))),aa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=U_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Oi(r.nextSibling),vn=e,tt=!0,jn=null,t!==null&&(An[Ln++]=mi,An[Ln++]=gi,An[Ln++]=Cr,mi=t.id,gi=t.overflow,Cr=e),e=zf(e,i.children),e.flags|=4096,e)}function eh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Cc(t.return,e,n)}function cu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function _g(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=nt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eh(t,n,e);else if(t.tag===19)eh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ye(nt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ul(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),cu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ul(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}cu(e,!0,n,null,s);break;case"together":cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ua(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function C_(t,e,n){switch(e.tag){case 3:gg(e),Cs();break;case 5:jm(e);break;case 1:sn(e.type)&&il(e);break;case 4:Af(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ye(ol,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ye(nt,nt.current&1),e.flags|=128,null):n&e.child.childLanes?vg(t,e,n):(Ye(nt,nt.current&1),t=Mi(t,e,n),t!==null?t.sibling:null);Ye(nt,nt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return _g(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ye(nt,nt.current),i)break;return null;case 22:case 23:return e.lanes=0,pg(t,e,n)}return Mi(t,e,n)}var xg,kc,yg,Sg;xg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kc=function(){};yg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,vr(ni.current);var s=null;switch(n){case"input":r=ic(t,r),i=ic(t,i),s=[];break;case"select":r=rt({},r,{value:void 0}),i=rt({},i,{value:void 0}),s=[];break;case"textarea":r=oc(t,r),i=oc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=tl)}lc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_o.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r?.[u],i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_o.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Sg=function(t,e,n,i){n!==i&&(e.flags|=4)};function qs(t,e){if(!tt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function A_(t,e,n){var i=e.pendingProps;switch(Sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return sn(e.type)&&nl(),Ut(e),null;case 3:return i=e.stateNode,Ls(),Qe(rn),Qe(Ht),Pf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(Hc(jn),jn=null))),kc(t,e),Ut(e),null;case 5:Lf(e);var r=vr(Po.current);if(n=e.type,t!==null&&e.stateNode!=null)yg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Ut(e),null}if(t=vr(ni.current),sa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[Ao]=s,t=(e.mode&1)!==0,n){case"dialog":$e("cancel",i),$e("close",i);break;case"iframe":case"object":case"embed":$e("load",i);break;case"video":case"audio":for(r=0;r<so.length;r++)$e(so[r],i);break;case"source":$e("error",i);break;case"img":case"image":case"link":$e("error",i),$e("load",i);break;case"details":$e("toggle",i);break;case"input":ud(i,s),$e("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},$e("invalid",i);break;case"textarea":fd(i,s),$e("invalid",i)}lc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ra(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ra(i.textContent,a,t),r=["children",""+a]):_o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$e("scroll",i)}switch(n){case"input":Zo(i),cd(i,s,!0);break;case"textarea":Zo(i),dd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=tl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Yp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ei]=e,t[Ao]=i,xg(t,e,!1,!1),e.stateNode=t;e:{switch(o=uc(n,i),n){case"dialog":$e("cancel",t),$e("close",t),r=i;break;case"iframe":case"object":case"embed":$e("load",t),r=i;break;case"video":case"audio":for(r=0;r<so.length;r++)$e(so[r],t);r=i;break;case"source":$e("error",t),r=i;break;case"img":case"image":case"link":$e("error",t),$e("load",t),r=i;break;case"details":$e("toggle",t),r=i;break;case"input":ud(t,i),r=ic(t,i),$e("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=rt({},i,{value:void 0}),$e("invalid",t);break;case"textarea":fd(t,i),r=oc(t,i),$e("invalid",t);break;default:r=i}lc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Kp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$p(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xo(t,l):typeof l=="number"&&xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$e("scroll",t):l!=null&&of(t,s,l,o))}switch(n){case"input":Zo(t),cd(t,i,!1);break;case"textarea":Zo(t),dd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)Sg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=vr(Po.current),vr(ni.current),sa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:ra(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ra(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Ut(e),null;case 13:if(Qe(nt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(tt&&pn!==null&&e.mode&1&&!(e.flags&128))Om(),Cs(),e.flags|=98560,s=!1;else if(s=sa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[ei]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),s=!1}else jn!==null&&(Hc(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||nt.current&1?vt===0&&(vt=3):Gf())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return Ls(),kc(t,e),t===null&&To(e.stateNode.containerInfo),Ut(e),null;case 10:return bf(e.type._context),Ut(e),null;case 17:return sn(e.type)&&nl(),Ut(e),null;case 19:if(Qe(nt),s=e.memoizedState,s===null)return Ut(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)qs(s,!1);else{if(vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ul(t),o!==null){for(e.flags|=128,qs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ye(nt,nt.current&1|2),e.child}t=t.sibling}s.tail!==null&&at()>Ds&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=ul(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!tt)return Ut(e),null}else 2*at()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=at(),e.sibling=null,n=nt.current,Ye(nt,i?n&1|2:n&1),e):(Ut(e),null);case 22:case 23:return Vf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function L_(t,e){switch(Sf(e),e.tag){case 1:return sn(e.type)&&nl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),Qe(rn),Qe(Ht),Pf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lf(e),null;case 13:if(Qe(nt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Qe(nt),null;case 4:return Ls(),null;case 10:return bf(e.type._context),null;case 22:case 23:return Vf(),null;case 24:return null;default:return null}}var la=!1,Gt=!1,P_=typeof WeakSet=="function"?WeakSet:Set,he=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){st(t,e,i)}else n.current=null}function zc(t,e,n){try{n()}catch(i){st(t,e,i)}}var th=!1;function D_(t,e){if(xc=Qa,t=bm(),xf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yc={focusedElem:t,selectionRange:n},Qa=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var h=y.memoizedProps,p=y.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?h:Hn(e.type,h),p);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(M){st(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return y=th,th=!1,y}function mo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zc(e,n,s)}r=r.next}while(r!==i)}}function Tl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Fc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mg(t){var e=t.alternate;e!==null&&(t.alternate=null,Mg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[Ao],delete e[wc],delete e[h_],delete e[p_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wg(t){return t.tag===5||t.tag===3||t.tag===4}function nh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Oc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tl));else if(i!==4&&(t=t.child,t!==null))for(Oc(t,e,n),t=t.sibling;t!==null;)Oc(t,e,n),t=t.sibling}function Uc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Uc(t,e,n),t=t.sibling;t!==null;)Uc(t,e,n),t=t.sibling}var At=null,Wn=!1;function Ei(t,e,n){for(n=n.child;n!==null;)Eg(t,e,n),n=n.sibling}function Eg(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 5:Gt||ps(n,e);case 6:var i=At,r=Wn;At=null,Ei(t,e,n),At=i,Wn=r,At!==null&&(Wn?(t=At,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):At.removeChild(n.stateNode));break;case 18:At!==null&&(Wn?(t=At,n=n.stateNode,t.nodeType===8?iu(t.parentNode,n):t.nodeType===1&&iu(t,n),wo(t)):iu(At,n.stateNode));break;case 4:i=At,r=Wn,At=n.stateNode.containerInfo,Wn=!0,Ei(t,e,n),At=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zc(n,e,o),r=r.next}while(r!==i)}Ei(t,e,n);break;case 1:if(!Gt&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){st(n,e,a)}Ei(t,e,n);break;case 21:Ei(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Ei(t,e,n),Gt=i):Ei(t,e,n);break;default:Ei(t,e,n)}}function ih(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new P_),e.forEach(function(i){var r=B_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:At=a.stateNode,Wn=!1;break e;case 3:At=a.stateNode.containerInfo,Wn=!0;break e;case 4:At=a.stateNode.containerInfo,Wn=!0;break e}a=a.return}if(At===null)throw Error(ee(160));Eg(s,o,r),At=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){st(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bg(e,t),e=e.sibling}function bg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),Zn(t),i&4){try{mo(3,t,t.return),Tl(3,t)}catch(h){st(t,t.return,h)}try{mo(5,t,t.return)}catch(h){st(t,t.return,h)}}break;case 1:Un(e,t),Zn(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(Un(e,t),Zn(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{xo(r,"")}catch(h){st(t,t.return,h)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Xp(r,s),uc(a,o);var u=uc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Kp(r,d):c==="dangerouslySetInnerHTML"?$p(r,d):c==="children"?xo(r,d):of(r,c,d,u)}switch(a){case"input":rc(r,s);break;case"textarea":qp(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?vs(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?vs(r,!!s.multiple,s.defaultValue,!0):vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ao]=s}catch(h){st(t,t.return,h)}}break;case 6:if(Un(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(h){st(t,t.return,h)}}break;case 3:if(Un(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(h){st(t,t.return,h)}break;case 4:Un(e,t),Zn(t);break;case 13:Un(e,t),Zn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Uf=at())),i&4&&ih(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||c,Un(e,t),Gt=u):Un(e,t),Zn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(he=t,c=t.child;c!==null;){for(d=he=c;he!==null;){switch(f=he,g=f.child,f.tag){case 0:case 11:case 14:case 15:mo(4,f,f.return);break;case 1:ps(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(h){st(i,n,h)}}break;case 5:ps(f,f.return);break;case 22:if(f.memoizedState!==null){sh(d);continue}}g!==null?(g.return=f,he=g):sh(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zp("display",o))}catch(h){st(t,t.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){st(t,t.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Un(e,t),Zn(t),i&4&&ih(t);break;case 21:break;default:Un(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wg(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xo(r,""),i.flags&=-33);var s=nh(t);Uc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=nh(t);Oc(t,a,o);break;default:throw Error(ee(161))}}catch(l){st(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function R_(t,e,n){he=t,Tg(t)}function Tg(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||la;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=la;var u=Gt;if(la=o,(Gt=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?oh(r):l!==null?(l.return=o,he=l):oh(r);for(;s!==null;)he=s,Tg(s),s=s.sibling;he=r,la=a,Gt=u}rh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):rh(t)}}function rh(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||Tl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&wo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Gt||e.flags&512&&Fc(e)}catch(f){st(e,e.return,f)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function sh(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function oh(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tl(4,e)}catch(l){st(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){st(e,r,l)}}var s=e.return;try{Fc(e)}catch(l){st(e,s,l)}break;case 5:var o=e.return;try{Fc(e)}catch(l){st(e,o,l)}}}catch(l){st(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var I_=Math.ceil,dl=wi.ReactCurrentDispatcher,Ff=wi.ReactCurrentOwner,zn=wi.ReactCurrentBatchConfig,Be=0,Ct=null,ht=null,It=0,hn=0,ms=Qi(0),vt=0,No=null,Lr=0,Cl=0,Of=0,go=null,en=null,Uf=0,Ds=1/0,di=null,hl=!1,Bc=null,Bi=null,ua=!1,Ni=null,pl=0,vo=0,Vc=null,Ba=-1,Va=0;function $t(){return Be&6?at():Ba!==-1?Ba:Ba=at()}function Vi(t){return t.mode&1?Be&2&&It!==0?It&-It:g_.transition!==null?(Va===0&&(Va=um()),Va):(t=Xe,t!==0||(t=window.event,t=t===void 0?16:gm(t.type)),t):1}function Yn(t,e,n,i){if(50<vo)throw vo=0,Vc=null,Error(ee(185));Go(t,n,i),(!(Be&2)||t!==Ct)&&(t===Ct&&(!(Be&2)&&(Cl|=n),vt===4&&Ri(t,It)),on(t,i),n===1&&Be===0&&!(e.mode&1)&&(Ds=at()+500,wl&&Ji()))}function on(t,e){var n=t.callbackNode;gv(t,e);var i=Ka(t,t===Ct?It:0);if(i===0)n!==null&&md(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&md(n),e===1)t.tag===0?m_(ah.bind(null,t)):km(ah.bind(null,t)),f_(function(){!(Be&6)&&Ji()}),n=null;else{switch(cm(i)){case 1:n=ff;break;case 4:n=am;break;case 16:n=Za;break;case 536870912:n=lm;break;default:n=Za}n=Ng(n,Cg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cg(t,e){if(Ba=-1,Va=0,Be&6)throw Error(ee(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var i=Ka(t,t===Ct?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ml(t,i);else{e=i;var r=Be;Be|=2;var s=Lg();(Ct!==t||It!==e)&&(di=null,Ds=at()+500,Sr(t,e));do try{z_();break}catch(a){Ag(t,a)}while(1);Ef(),dl.current=s,Be=r,ht!==null?e=0:(Ct=null,It=0,e=vt)}if(e!==0){if(e===2&&(r=pc(t),r!==0&&(i=r,e=Gc(t,r))),e===1)throw n=No,Sr(t,0),Ri(t,i),on(t,at()),n;if(e===6)Ri(t,i);else{if(r=t.current.alternate,!(i&30)&&!N_(r)&&(e=ml(t,i),e===2&&(s=pc(t),s!==0&&(i=s,e=Gc(t,s))),e===1))throw n=No,Sr(t,0),Ri(t,i),on(t,at()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:lr(t,en,di);break;case 3:if(Ri(t,i),(i&130023424)===i&&(e=Uf+500-at(),10<e)){if(Ka(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Mc(lr.bind(null,t,en,di),e);break}lr(t,en,di);break;case 4:if(Ri(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=at()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*I_(i/1960))-i,10<i){t.timeoutHandle=Mc(lr.bind(null,t,en,di),i);break}lr(t,en,di);break;case 5:lr(t,en,di);break;default:throw Error(ee(329))}}}return on(t,at()),t.callbackNode===n?Cg.bind(null,t):null}function Gc(t,e){var n=go;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=ml(t,e),t!==2&&(e=en,en=n,e!==null&&Hc(e)),t}function Hc(t){en===null?en=t:en.push.apply(en,t)}function N_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ri(t,e){for(e&=~Of,e&=~Cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function ah(t){if(Be&6)throw Error(ee(327));Ms();var e=Ka(t,0);if(!(e&1))return on(t,at()),null;var n=ml(t,e);if(t.tag!==0&&n===2){var i=pc(t);i!==0&&(e=i,n=Gc(t,i))}if(n===1)throw n=No,Sr(t,0),Ri(t,e),on(t,at()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,en,di),on(t,at()),null}function Bf(t,e){var n=Be;Be|=1;try{return t(e)}finally{Be=n,Be===0&&(Ds=at()+500,wl&&Ji())}}function Pr(t){Ni!==null&&Ni.tag===0&&!(Be&6)&&Ms();var e=Be;Be|=1;var n=zn.transition,i=Xe;try{if(zn.transition=null,Xe=1,t)return t()}finally{Xe=i,zn.transition=n,Be=e,!(Be&6)&&Ji()}}function Vf(){hn=ms.current,Qe(ms)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,c_(n)),ht!==null)for(n=ht.return;n!==null;){var i=n;switch(Sf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nl();break;case 3:Ls(),Qe(rn),Qe(Ht),Pf();break;case 5:Lf(i);break;case 4:Ls();break;case 13:Qe(nt);break;case 19:Qe(nt);break;case 10:bf(i.type._context);break;case 22:case 23:Vf()}n=n.return}if(Ct=t,ht=t=Gi(t.current,null),It=hn=e,vt=0,No=null,Of=Cl=Lr=0,en=go=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}gr=null}return t}function Ag(t,e){do{var n=ht;try{if(Ef(),Fa.current=fl,cl){for(var i=it.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}cl=!1}if(Ar=0,bt=gt=it=null,po=!1,Do=0,Ff.current=null,n===null||n.return===null){vt=1,No=e,ht=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Yd(o);if(g!==null){g.flags&=-257,$d(g,o,a,s,e),g.mode&1&&qd(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var h=new Set;h.add(l),e.updateQueue=h}else y.add(l);break e}else{if(!(e&1)){qd(s,u,e),Gf();break e}l=Error(ee(426))}}else if(tt&&a.mode&1){var p=Yd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),$d(p,o,a,s,e),Mf(Ps(l,a));break e}}s=l=Ps(l,a),vt!==4&&(vt=2),go===null?go=[s]:go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=fg(s,l,e);Bd(s,m);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Bi===null||!Bi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=dg(s,a,e);Bd(s,M);break e}}s=s.return}while(s!==null)}Dg(n)}catch(x){e=x,ht===n&&n!==null&&(ht=n=n.return);continue}break}while(1)}function Lg(){var t=dl.current;return dl.current=fl,t===null?fl:t}function Gf(){(vt===0||vt===3||vt===2)&&(vt=4),Ct===null||!(Lr&268435455)&&!(Cl&268435455)||Ri(Ct,It)}function ml(t,e){var n=Be;Be|=2;var i=Lg();(Ct!==t||It!==e)&&(di=null,Sr(t,e));do try{k_();break}catch(r){Ag(t,r)}while(1);if(Ef(),Be=n,dl.current=i,ht!==null)throw Error(ee(261));return Ct=null,It=0,vt}function k_(){for(;ht!==null;)Pg(ht)}function z_(){for(;ht!==null&&!av();)Pg(ht)}function Pg(t){var e=Ig(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?Dg(t):ht=e,Ff.current=null}function Dg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=L_(n,e),n!==null){n.flags&=32767,ht=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vt=6,ht=null;return}}else if(n=A_(n,e,hn),n!==null){ht=n;return}if(e=e.sibling,e!==null){ht=e;return}ht=e=t}while(e!==null);vt===0&&(vt=5)}function lr(t,e,n){var i=Xe,r=zn.transition;try{zn.transition=null,Xe=1,F_(t,e,n,i)}finally{zn.transition=r,Xe=i}return null}function F_(t,e,n,i){do Ms();while(Ni!==null);if(Be&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vv(t,s),t===Ct&&(ht=Ct=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ua||(ua=!0,Ng(Za,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var o=Xe;Xe=1;var a=Be;Be|=4,Ff.current=null,D_(t,n),bg(n,t),i_(yc),Qa=!!xc,yc=xc=null,t.current=n,R_(n),lv(),Be=a,Xe=o,zn.transition=s}else t.current=n;if(ua&&(ua=!1,Ni=t,pl=r),s=t.pendingLanes,s===0&&(Bi=null),fv(n.stateNode),on(t,at()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(hl)throw hl=!1,t=Bc,Bc=null,t;return pl&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===Vc?vo++:(vo=0,Vc=t):vo=0,Ji(),null}function Ms(){if(Ni!==null){var t=cm(pl),e=zn.transition,n=Xe;try{if(zn.transition=null,Xe=16>t?16:t,Ni===null)var i=!1;else{if(t=Ni,Ni=null,pl=0,Be&6)throw Error(ee(331));var r=Be;for(Be|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var c=he;switch(c.tag){case 0:case 11:case 15:mo(8,c,s)}var d=c.child;if(d!==null)d.return=c,he=d;else for(;he!==null;){c=he;var f=c.sibling,g=c.return;if(Mg(c),c===u){he=null;break}if(f!==null){f.return=g,he=f;break}he=g}}}var y=s.alternate;if(y!==null){var h=y.child;if(h!==null){y.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:mo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,he=m;break e}he=s.return}}var v=t.current;for(he=v;he!==null;){o=he;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,he=_;else e:for(o=v;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tl(9,a)}}catch(x){st(a,a.return,x)}if(a===o){he=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,he=M;break e}he=a.return}}if(Be=r,Ji(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(_l,t)}catch{}i=!0}return i}finally{Xe=n,zn.transition=e}}return!1}function lh(t,e,n){e=Ps(n,e),e=fg(t,e,1),t=Ui(t,e,1),e=$t(),t!==null&&(Go(t,1,e),on(t,e))}function st(t,e,n){if(t.tag===3)lh(t,t,n);else for(;e!==null;){if(e.tag===3){lh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bi===null||!Bi.has(i))){t=Ps(n,t),t=dg(e,t,1),e=Ui(e,t,1),t=$t(),e!==null&&(Go(e,1,t),on(e,t));break}}e=e.return}}function O_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(It&n)===n&&(vt===4||vt===3&&(It&130023424)===It&&500>at()-Uf?Sr(t,0):Of|=n),on(t,e)}function Rg(t,e){e===0&&(t.mode&1?(e=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):e=1);var n=$t();t=Si(t,e),t!==null&&(Go(t,e,n),on(t,n))}function U_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rg(t,n)}function B_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Rg(t,n)}var Ig;Ig=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,C_(t,e,n);nn=!!(t.flags&131072)}else nn=!1,tt&&e.flags&1048576&&zm(e,sl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ua(t,e),t=e.pendingProps;var r=Ts(e,Ht.current);Ss(e,n),r=Rf(null,e,i,t,r,n);var s=If();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,il(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Cf(e),r.updater=El,e.stateNode=r,r._reactInternals=e,Lc(e,i,t,n),e=Rc(null,e,i,!0,s,n)):(e.tag=0,tt&&s&&yf(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ua(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=G_(i),t=Hn(i,t),r){case 0:e=Dc(null,e,i,t,n);break e;case 1:e=Qd(null,e,i,t,n);break e;case 11:e=Zd(null,e,i,t,n);break e;case 14:e=Kd(null,e,i,Hn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Dc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Qd(t,e,i,r,n);case 3:e:{if(gg(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Bm(t,e),ll(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ps(Error(ee(423)),e),e=Jd(t,e,i,n,r);break e}else if(i!==r){r=Ps(Error(ee(424)),e),e=Jd(t,e,i,n,r);break e}else for(pn=Oi(e.stateNode.containerInfo.firstChild),vn=e,tt=!0,jn=null,n=Wm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),i===r){e=Mi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return jm(e),t===null&&Tc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Sc(i,r)?o=null:s!==null&&Sc(i,s)&&(e.flags|=32),mg(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&Tc(e),null;case 13:return vg(t,e,n);case 4:return Af(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Zd(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ye(ol,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!rn.current){e=Mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=vi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Cc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Cc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ss(e,n),r=Fn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),Kd(t,e,i,r,n);case 15:return hg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Ua(t,e),e.tag=1,sn(i)?(t=!0,il(e)):t=!1,Ss(e,n),Gm(e,i,r),Lc(e,i,r,n),Rc(null,e,i,!0,t,n);case 19:return _g(t,e,n);case 22:return pg(t,e,n)}throw Error(ee(156,e.tag))};function Ng(t,e){return om(t,e)}function V_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new V_(t,e,n,i)}function Hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function G_(t){if(typeof t=="function")return Hf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lf)return 11;if(t===uf)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ga(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Hf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ss:return Mr(n.children,r,s,e);case af:o=8,r|=8;break;case Ju:return t=kn(12,n,e,r|2),t.elementType=Ju,t.lanes=s,t;case ec:return t=kn(13,n,e,r),t.elementType=ec,t.lanes=s,t;case tc:return t=kn(19,n,e,r),t.elementType=tc,t.lanes=s,t;case Hp:return Al(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vp:o=10;break e;case Gp:o=9;break e;case lf:o=11;break e;case uf:o=14;break e;case Li:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=kn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Mr(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function Al(t,e,n,i){return t=kn(22,t,i,e),t.elementType=Hp,t.lanes=n,t.stateNode={isHidden:!1},t}function fu(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function du(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function H_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wf(t,e,n,i,r,s,o,a,l){return t=new H_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cf(s),t}function W_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function kg(t){if(!t)return Xi;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(sn(n))return Nm(t,n,e)}return e}function zg(t,e,n,i,r,s,o,a,l){return t=Wf(n,i,!0,t,r,s,o,a,l),t.context=kg(null),n=t.current,i=$t(),r=Vi(n),s=vi(i,r),s.callback=e??null,Ui(n,s,r),t.current.lanes=r,Go(t,r,i),on(t,i),t}function Ll(t,e,n,i){var r=e.current,s=$t(),o=Vi(r);return n=kg(n),e.context===null?e.context=n:e.pendingContext=n,e=vi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ui(r,e,o),t!==null&&(Yn(t,r,o,s),za(t,r,o)),o}function gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function uh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jf(t,e){uh(t,e),(t=t.alternate)&&uh(t,e)}function j_(){return null}var Fg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xf(t){this._internalRoot=t}Pl.prototype.render=Xf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Ll(t,e,null,null)};Pl.prototype.unmount=Xf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){Ll(null,t,null,null)}),e[yi]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=hm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Di.length&&e!==0&&e<Di[n].priority;n++);Di.splice(n,0,t),n===0&&mm(t)}};function qf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ch(){}function X_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=gl(o);s.call(u)}}var o=zg(e,i,t,0,null,!1,!1,"",ch);return t._reactRootContainer=o,t[yi]=o.current,To(t.nodeType===8?t.parentNode:t),Pr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=gl(l);a.call(u)}}var l=Wf(t,0,!1,null,null,!1,!1,"",ch);return t._reactRootContainer=l,t[yi]=l.current,To(t.nodeType===8?t.parentNode:t),Pr(function(){Ll(e,l,n,i)}),l}function Rl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=gl(o);a.call(l)}}Ll(e,o,t,r)}else o=X_(n,e,t,r,i);return gl(o)}fm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(df(e,n|1),on(e,at()),!(Be&6)&&(Ds=at()+500,Ji()))}break;case 13:Pr(function(){var i=Si(t,1);if(i!==null){var r=$t();Yn(i,t,1,r)}}),jf(t,1)}};hf=function(t){if(t.tag===13){var e=Si(t,134217728);if(e!==null){var n=$t();Yn(e,t,134217728,n)}jf(t,134217728)}};dm=function(t){if(t.tag===13){var e=Vi(t),n=Si(t,e);if(n!==null){var i=$t();Yn(n,t,e,i)}jf(t,e)}};hm=function(){return Xe};pm=function(t,e){var n=Xe;try{return Xe=t,e()}finally{Xe=n}};fc=function(t,e,n){switch(e){case"input":if(rc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ml(i);if(!r)throw Error(ee(90));jp(i),rc(i,r)}}}break;case"textarea":qp(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};em=Bf;tm=Pr;var q_={usingClientEntryPoint:!1,Events:[Wo,us,Ml,Qp,Jp,Bf]},Ys={findFiberByHostInstance:mr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Y_={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||j_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ca.isDisabled&&ca.supportsFiber)try{_l=ca.inject(Y_),ti=ca}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q_;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qf(e))throw Error(ee(200));return W_(t,e,null,n)};Mn.createRoot=function(t,e){if(!qf(t))throw Error(ee(299));var n=!1,i="",r=Fg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Wf(t,1,!1,null,null,n,!1,i,r),t[yi]=e.current,To(t.nodeType===8?t.parentNode:t),new Xf(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=rm(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Pr(t)};Mn.hydrate=function(t,e,n){if(!Dl(e))throw Error(ee(200));return Rl(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!qf(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Fg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zg(e,null,t,1,n??null,r,!1,s,o),t[yi]=e.current,To(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Pl(e)};Mn.render=function(t,e,n){if(!Dl(e))throw Error(ee(200));return Rl(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!Dl(t))throw Error(ee(40));return t._reactRootContainer?(Pr(function(){Rl(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1};Mn.unstable_batchedUpdates=Bf;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Dl(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Rl(t,e,n,!1,i)};Mn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Mn})(j0);var fh=Zu;$u.createRoot=fh.createRoot,$u.hydrateRoot=fh.hydrateRoot;const $_="modulepreload",Z_=function(t){return"/Builder3D/"+t},dh={},hh=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Z_(s),s in dh)return;dh[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let c=r.length-1;c>=0;c--){const d=r[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":$_,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yf="149",Br={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},K_=0,ph=1,Q_=2,Og=1,Ug=2,oo=3,qi=0,_n=1,Tt=2,Hi=0,ws=1,mh=2,gh=3,vh=4,J_=5,ns=100,ex=101,tx=102,_h=103,xh=104,nx=200,ix=201,rx=202,sx=203,Bg=204,Vg=205,ox=206,ax=207,lx=208,ux=209,cx=210,fx=0,dx=1,hx=2,Wc=3,px=4,mx=5,gx=6,vx=7,Gg=0,_x=1,xx=2,_i=0,yx=1,Sx=2,Mx=3,wx=4,Ex=5,Hg=300,Rs=301,Is=302,jc=303,Xc=304,Il=306,Wi=1e3,Xn=1001,qc=1002,Dt=1003,yh=1004,hu=1005,Pn=1006,bx=1007,ko=1008,Dr=1009,Tx=1010,Cx=1011,Wg=1012,Ax=1013,_r=1014,xr=1015,zo=1016,Lx=1017,Px=1018,Es=1020,Dx=1021,In=1023,Rx=1024,Ix=1025,wr=1026,Ns=1027,Nx=1028,kx=1029,zx=1030,Fx=1031,Ox=1033,pu=33776,mu=33777,gu=33778,vu=33779,Sh=35840,Mh=35841,wh=35842,Eh=35843,Ux=36196,bh=37492,Th=37496,Ch=37808,Ah=37809,Lh=37810,Ph=37811,Dh=37812,Rh=37813,Ih=37814,Nh=37815,kh=37816,zh=37817,Fh=37818,Oh=37819,Uh=37820,Bh=37821,_u=36492,Bx=36283,Vh=36284,Gh=36285,Hh=36286,Rr=3e3,Ze=3001,Vx=3200,Gx=3201,Hx=0,Wx=1,Qn="srgb",Fo="srgb-linear",xu=7680,jx=519,Wh=35044,jh="300 es",Yc=1035;class Fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=Math.PI/180,Xh=180/Math.PI;function Xo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function Xx(t,e){return(t%e+e)%e}function Su(t,e,n){return(1-n)*t+n*e}function qh(t){return(t&t-1)===0&&t!==0}function $c(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function fa(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Re{constructor(e=0,n=0){Re.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mn{constructor(){mn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],g=i[5],y=i[8],h=r[0],p=r[3],m=r[6],v=r[1],_=r[4],M=r[7],x=r[2],A=r[5],L=r[8];return s[0]=o*h+a*v+l*x,s[3]=o*p+a*_+l*A,s[6]=o*m+a*M+l*L,s[1]=u*h+c*v+d*x,s[4]=u*p+c*_+d*A,s[7]=u*m+c*M+d*L,s[2]=f*h+g*v+y*x,s[5]=f*p+g*_+y*A,s[8]=f*m+g*M+y*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,g=u*s-o*l,y=n*d+i*f+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/y;return e[0]=d*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=f*h,e[4]=(c*n-r*l)*h,e[5]=(r*s-a*n)*h,e[6]=g*h,e[7]=(i*l-u*n)*h,e[8]=(o*n-i*s)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Mu.makeScale(e,n)),this}rotate(e){return this.premultiply(Mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mu.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mu=new mn;function jg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Oo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Er(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ha(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const wu={[Qn]:{[Fo]:Er},[Fo]:{[Qn]:Ha}},Xt={legacyMode:!0,get workingColorSpace(){return Fo},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(wu[e]&&wu[e][n]!==void 0){const i=wu[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},Xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pt={r:0,g:0,b:0},Bn={h:0,s:0,l:0},da={h:0,s:0,l:0};function Eu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function ha(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Xt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Xt.workingColorSpace){if(e=Xx(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Eu(o,s,e+1/3),this.g=Eu(o,s,e),this.b=Eu(o,s,e-1/3)}return Xt.toWorkingColorSpace(this,r),this}setStyle(e,n=Qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Xt.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Xt.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Xt.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Xt.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=Qn){const i=Xg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Xt.fromWorkingColorSpace(ha(this,pt),e),tn(pt.r*255,0,255)<<16^tn(pt.g*255,0,255)<<8^tn(pt.b*255,0,255)<<0}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xt.workingColorSpace){Xt.fromWorkingColorSpace(ha(this,pt),n);const i=pt.r,r=pt.g,s=pt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(ha(this,pt),n),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=Qn){return Xt.fromWorkingColorSpace(ha(this,pt),e),e!==Qn?`color(${e} ${pt.r} ${pt.g} ${pt.b})`:`rgb(${pt.r*255|0},${pt.g*255|0},${pt.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(Bn),Bn.h+=e,Bn.s+=n,Bn.l+=i,this.setHSL(Bn.h,Bn.s,Bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bn),e.getHSL(da);const i=Su(Bn.h,da.h,n),r=Su(Bn.s,da.s,n),s=Su(Bn.l,da.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ke.NAMES=Xg;let Gr;class qg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gr===void 0&&(Gr=Oo("canvas")),Gr.width=e.width,Gr.height=e.height;const i=Gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Gr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Oo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Er(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Er(n[i]/255)*255):n[i]=Er(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Yg{constructor(e=null){this.isSource=!0,this.uuid=Xo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bu(r[o].image)):s.push(bu(r[o]))}else s=bu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function bu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?qg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qx=0;class an extends Fr{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=Xn,r=Xn,s=Pn,o=ko,a=In,l=Dr,u=an.DEFAULT_ANISOTROPY,c=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=Xo(),this.name="",this.source=new Yg(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wi:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case qc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wi:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case qc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Hg;an.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],g=l[5],y=l[9],h=l[2],p=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-h)<.01&&Math.abs(y-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+h)<.1&&Math.abs(y+p)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,M=(g+1)/2,x=(m+1)/2,A=(c+f)/4,L=(d+h)/4,S=(y+p)/4;return _>M&&_>x?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=L/i):M>x?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=S/r):x<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),i=L/s,r=S/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-y)*(p-y)+(d-h)*(d-h)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(p-y)/v,this.y=(d-h)/v,this.z=(f-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ir extends Fr{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Pn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Yg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $g extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yx extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],y=s[o+2],h=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=y,e[n+3]=h;return}if(d!==h||l!==f||u!==g||c!==y){let p=1-a;const m=l*f+u*g+c*y+d*h,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const x=Math.sqrt(_),A=Math.atan2(x,m*v);p=Math.sin(p*A)/x,a=Math.sin(a*A)/x}const M=a*v;if(l=l*p+f*M,u=u*p+g*M,c=c*p+y*M,d=d*p+h*M,p===1-a){const x=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=x,u*=x,c*=x,d*=x}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],g=s[o+2],y=s[o+3];return e[n]=a*y+c*d+l*g-u*f,e[n+1]=l*y+c*f+u*d-a*g,e[n+2]=u*y+c*g+a*f-l*d,e[n+3]=c*y-a*d-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),g=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*g*y,this._y=u*g*d-f*c*y,this._z=u*c*y+f*g*d,this._w=u*c*d-f*g*y;break;case"YXZ":this._x=f*c*d+u*g*y,this._y=u*g*d-f*c*y,this._z=u*c*y-f*g*d,this._w=u*c*d+f*g*y;break;case"ZXY":this._x=f*c*d-u*g*y,this._y=u*g*d+f*c*y,this._z=u*c*y+f*g*d,this._w=u*c*d-f*g*y;break;case"ZYX":this._x=f*c*d-u*g*y,this._y=u*g*d+f*c*y,this._z=u*c*y-f*g*d,this._w=u*c*d+f*g*y;break;case"YZX":this._x=f*c*d+u*g*y,this._y=u*g*d+f*c*y,this._z=u*c*y-f*g*d,this._w=u*c*d-f*g*y;break;case"XZY":this._x=f*c*d-u*g*y,this._y=u*g*d-f*c*y,this._z=u*c*y+f*g*d,this._w=u*c*d+f*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,d=l*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tu.copy(this).projectOnVector(e),this.sub(Tu)}reflect(e){return this.sub(Tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tu=new B,Yh=new Nr;class qo{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=rr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)rr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(rr)}else i.boundingBox===null&&i.computeBoundingBox(),Cu.copy(i.boundingBox),Cu.applyMatrix4(e.matrixWorld),this.union(Cu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),pa.subVectors(this.max,$s),Hr.subVectors(e.a,$s),Wr.subVectors(e.b,$s),jr.subVectors(e.c,$s),bi.subVectors(Wr,Hr),Ti.subVectors(jr,Wr),sr.subVectors(Hr,jr);let n=[0,-bi.z,bi.y,0,-Ti.z,Ti.y,0,-sr.z,sr.y,bi.z,0,-bi.x,Ti.z,0,-Ti.x,sr.z,0,-sr.x,-bi.y,bi.x,0,-Ti.y,Ti.x,0,-sr.y,sr.x,0];return!Au(n,Hr,Wr,jr,pa)||(n=[1,0,0,0,1,0,0,0,1],!Au(n,Hr,Wr,jr,pa))?!1:(ma.crossVectors(bi,Ti),n=[ma.x,ma.y,ma.z],Au(n,Hr,Wr,jr,pa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return rr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new B,new B,new B,new B,new B,new B,new B,new B],rr=new B,Cu=new qo,Hr=new B,Wr=new B,jr=new B,bi=new B,Ti=new B,sr=new B,$s=new B,pa=new B,ma=new B,or=new B;function Au(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){or.fromArray(t,s);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),u=n.dot(or),c=i.dot(or);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const $x=new qo,Zs=new B,Lu=new B;class $f{constructor(e=new B,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):$x.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const n=Zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Lu)),this.expandByPoint(Zs.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new B,Pu=new B,ga=new B,Ci=new B,Du=new B,va=new B,Ru=new B;class Zg{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ai.copy(this.direction).multiplyScalar(n).add(this.origin),ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Pu.copy(e).add(n).multiplyScalar(.5),ga.copy(n).sub(e).normalize(),Ci.copy(this.origin).sub(Pu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ga),a=Ci.dot(this.direction),l=-Ci.dot(ga),u=Ci.lengthSq(),c=Math.abs(1-o*o);let d,f,g,y;if(c>0)if(d=o*l-a,f=o*a-l,y=s*c,d>=0)if(f>=-y)if(f<=y){const h=1/c;d*=h,f*=h,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f<=-y?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u):f<=y?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(ga).multiplyScalar(f).add(Pu),g}intersectSphere(e,n){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,n,i,r,s){Du.subVectors(n,e),va.subVectors(i,e),Ru.crossVectors(Du,va);let o=this.direction.dot(Ru),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(va.crossVectors(Ci,va));if(l<0)return null;const u=a*this.direction.dot(Du.cross(Ci));if(u<0||l+u>o)return null;const c=-a*Ci.dot(Ru);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,u,c,d,f,g,y,h,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=d,m[14]=f,m[3]=g,m[7]=y,m[11]=h,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,g=o*d,y=a*c,h=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=g+y*u,n[5]=f-h*u,n[9]=-a*l,n[2]=h-f*u,n[6]=y+g*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,g=l*d,y=u*c,h=u*d;n[0]=f+h*a,n[4]=y*a-g,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=g*a-y,n[6]=h+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,g=l*d,y=u*c,h=u*d;n[0]=f-h*a,n[4]=-o*d,n[8]=y+g*a,n[1]=g+y*a,n[5]=o*c,n[9]=h-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,g=o*d,y=a*c,h=a*d;n[0]=l*c,n[4]=y*u-g,n[8]=f*u+h,n[1]=l*d,n[5]=h*u+f,n[9]=g*u-y,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*u,y=a*l,h=a*u;n[0]=l*c,n[4]=h-f*d,n[8]=y*d+g,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=g*d+y,n[10]=f-h*d}else if(e.order==="XZY"){const f=o*l,g=o*u,y=a*l,h=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+h,n[5]=o*c,n[9]=g*d-y,n[2]=y*d-g,n[6]=a*c,n[10]=h*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zx,e,Kx)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ai.crossVectors(i,fn),Ai.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ai.crossVectors(i,fn)),Ai.normalize(),_a.crossVectors(fn,Ai),r[0]=Ai.x,r[4]=_a.x,r[8]=fn.x,r[1]=Ai.y,r[5]=_a.y,r[9]=fn.y,r[2]=Ai.z,r[6]=_a.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],g=i[13],y=i[2],h=i[6],p=i[10],m=i[14],v=i[3],_=i[7],M=i[11],x=i[15],A=r[0],L=r[4],S=r[8],T=r[12],P=r[1],Z=r[5],K=r[9],z=r[13],k=r[2],Y=r[6],Q=r[10],J=r[14],R=r[3],V=r[7],G=r[11],se=r[15];return s[0]=o*A+a*P+l*k+u*R,s[4]=o*L+a*Z+l*Y+u*V,s[8]=o*S+a*K+l*Q+u*G,s[12]=o*T+a*z+l*J+u*se,s[1]=c*A+d*P+f*k+g*R,s[5]=c*L+d*Z+f*Y+g*V,s[9]=c*S+d*K+f*Q+g*G,s[13]=c*T+d*z+f*J+g*se,s[2]=y*A+h*P+p*k+m*R,s[6]=y*L+h*Z+p*Y+m*V,s[10]=y*S+h*K+p*Q+m*G,s[14]=y*T+h*z+p*J+m*se,s[3]=v*A+_*P+M*k+x*R,s[7]=v*L+_*Z+M*Y+x*V,s[11]=v*S+_*K+M*Q+x*G,s[15]=v*T+_*z+M*J+x*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],g=e[14],y=e[3],h=e[7],p=e[11],m=e[15];return y*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*g-i*l*g)+h*(+n*l*g-n*u*f+s*o*f-r*o*g+r*u*c-s*l*c)+p*(+n*u*d-n*a*g-s*o*d+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-n*l*d+n*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],g=e[11],y=e[12],h=e[13],p=e[14],m=e[15],v=d*p*u-h*f*u+h*l*g-a*p*g-d*l*m+a*f*m,_=y*f*u-c*p*u-y*l*g+o*p*g+c*l*m-o*f*m,M=c*h*u-y*d*u+y*a*g-o*h*g-c*a*m+o*d*m,x=y*d*l-c*h*l-y*a*f+o*h*f+c*a*p-o*d*p,A=n*v+i*_+r*M+s*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=v*L,e[1]=(h*f*s-d*p*s-h*r*g+i*p*g+d*r*m-i*f*m)*L,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*m+i*l*m)*L,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*g-i*l*g)*L,e[4]=_*L,e[5]=(c*p*s-y*f*s+y*r*g-n*p*g-c*r*m+n*f*m)*L,e[6]=(y*l*s-o*p*s-y*r*u+n*p*u+o*r*m-n*l*m)*L,e[7]=(o*f*s-c*l*s+c*r*u-n*f*u-o*r*g+n*l*g)*L,e[8]=M*L,e[9]=(y*d*s-c*h*s-y*i*g+n*h*g+c*i*m-n*d*m)*L,e[10]=(o*h*s-y*a*s+y*i*u-n*h*u-o*i*m+n*a*m)*L,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*g-n*a*g)*L,e[12]=x*L,e[13]=(c*h*r-y*d*r+y*i*f-n*h*f-c*i*p+n*d*p)*L,e[14]=(y*a*r-o*h*r-y*i*l+n*h*l+o*i*p-n*a*p)*L,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*f+n*a*f)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,f=s*u,g=s*c,y=s*d,h=o*c,p=o*d,m=a*d,v=l*u,_=l*c,M=l*d,x=i.x,A=i.y,L=i.z;return r[0]=(1-(h+m))*x,r[1]=(g+M)*x,r[2]=(y-_)*x,r[3]=0,r[4]=(g-M)*A,r[5]=(1-(f+m))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(y+_)*L,r[9]=(p-v)*L,r[10]=(1-(f+h))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),a=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const u=1/s,c=1/o,d=1/a;return Vn.elements[0]*=u,Vn.elements[1]*=u,Vn.elements[2]*=u,Vn.elements[4]*=c,Vn.elements[5]*=c,Vn.elements[6]*=c,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,n.setFromRotationMatrix(Vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),d=(n+e)*l,f=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new B,Vn=new Nt,Zx=new B(0,0,0),Kx=new B(1,1,1),Ai=new B,_a=new B,fn=new B,$h=new Nt,Zh=new Nr;class Nl{constructor(e=0,n=0,i=0,r=Nl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $h.makeRotationFromQuaternion(e),this.setFromRotationMatrix($h,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nl.DEFAULT_ORDER="XYZ";class Zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qx=0;const Kh=new B,qr=new Nr,li=new Nt,xa=new B,Ks=new B,Jx=new B,ey=new Nr,Qh=new B(1,0,0),Jh=new B(0,1,0),ep=new B(0,0,1),ty={type:"added"},tp={type:"removed"};class xn extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new B,n=new Nl,i=new Nr,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new mn}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,n){return qr.setFromAxisAngle(e,n),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Qh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(ep,e)}translateOnAxis(e,n){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xa.copy(e):xa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Ks,xa,this.up):li.lookAt(xa,Ks,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(li),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ty)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(tp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,Jx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,ey,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xn.DEFAULT_UP=new B(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new B,ui=new B,Iu=new B,ci=new B,Yr=new B,$r=new B,np=new B,Nu=new B,ku=new B,zu=new B;class pi{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gn.subVectors(r,n),ui.subVectors(i,n),Iu.subVectors(e,n);const o=Gn.dot(Gn),a=Gn.dot(ui),l=Gn.dot(Iu),u=ui.dot(ui),c=ui.dot(Iu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(u*l-a*c)*f,y=(o*c-a*l)*f;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci),ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ci),l.set(0,0),l.addScaledVector(s,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),ui.subVectors(e,n),Gn.cross(ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Gn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return pi.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Yr.subVectors(r,i),$r.subVectors(s,i),Nu.subVectors(e,i);const l=Yr.dot(Nu),u=$r.dot(Nu);if(l<=0&&u<=0)return n.copy(i);ku.subVectors(e,r);const c=Yr.dot(ku),d=$r.dot(ku);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Yr,o);zu.subVectors(e,s);const g=Yr.dot(zu),y=$r.dot(zu);if(y>=0&&g<=y)return n.copy(s);const h=g*u-l*y;if(h<=0&&u>=0&&y<=0)return a=u/(u-y),n.copy(i).addScaledVector($r,a);const p=c*y-g*d;if(p<=0&&d-c>=0&&g-y>=0)return np.subVectors(s,r),a=(d-c)/(d-c+(g-y)),n.copy(r).addScaledVector(np,a);const m=1/(p+h+f);return o=h*m,a=f*m,n.copy(i).addScaledVector(Yr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ny=0;class kl extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=ws,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Bg,this.blendDst=Vg,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Wc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xu,this.stencilZFail=xu,this.stencilZPass=xu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class et extends kl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new B,ya=new Re;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ya.fromBufferAttribute(this,n),ya.applyMatrix3(e),this.setXY(n,ya.x,ya.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyMatrix3(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyMatrix4(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyNormalMatrix(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.transformDirection(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fa(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fa(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fa(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Kg extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Qg extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class br extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let iy=0;const Tn=new Nt,Fu=new xn,Zr=new B,dn=new qo,Qs=new qo,wt=new B;class Or extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jg(e)?Qg:Kg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new mn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new br(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $f);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(dn.min,Qs.min),dn.expandByPoint(wt),wt.addVectors(dn.max,Qs.max),dn.expandByPoint(wt)):(dn.expandByPoint(Qs.min),dn.expandByPoint(Qs.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)wt.fromBufferAttribute(a,u),l&&(Zr.fromBufferAttribute(e,u),wt.add(Zr)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let P=0;P<a;P++)u[P]=new B,c[P]=new B;const d=new B,f=new B,g=new B,y=new Re,h=new Re,p=new Re,m=new B,v=new B;function _(P,Z,K){d.fromArray(r,P*3),f.fromArray(r,Z*3),g.fromArray(r,K*3),y.fromArray(o,P*2),h.fromArray(o,Z*2),p.fromArray(o,K*2),f.sub(d),g.sub(d),h.sub(y),p.sub(y);const z=1/(h.x*p.y-p.x*h.y);isFinite(z)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(g,-h.y).multiplyScalar(z),v.copy(g).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(z),u[P].add(m),u[Z].add(m),u[K].add(m),c[P].add(v),c[Z].add(v),c[K].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let P=0,Z=M.length;P<Z;++P){const K=M[P],z=K.start,k=K.count;for(let Y=z,Q=z+k;Y<Q;Y+=3)_(i[Y+0],i[Y+1],i[Y+2])}const x=new B,A=new B,L=new B,S=new B;function T(P){L.fromArray(s,P*3),S.copy(L);const Z=u[P];x.copy(Z),x.sub(L.multiplyScalar(L.dot(Z))).normalize(),A.crossVectors(S,Z);const z=A.dot(c[P])<0?-1:1;l[P*4]=x.x,l[P*4+1]=x.y,l[P*4+2]=x.z,l[P*4+3]=z}for(let P=0,Z=M.length;P<Z;++P){const K=M[P],z=K.start,k=K.count;for(let Y=z,Q=z+k;Y<Q;Y+=3)T(i[Y+0]),T(i[Y+1]),T(i[Y+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,c=new B,d=new B;if(e)for(let f=0,g=e.count;f<g;f+=3){const y=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,h),o.fromBufferAttribute(n,p),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)wt.fromBufferAttribute(e,n),wt.normalize(),e.setXYZ(n,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let g=0,y=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?g=l[h]*a.data.stride+a.offset:g=l[h]*c;for(let m=0;m<c;m++)f[y++]=u[g++]}return new ii(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Or,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,g=d.length;f<g;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ip=new Nt,Kr=new Zg,Ou=new $f,Js=new B,eo=new B,to=new B,Uu=new B,Sa=new B,Ma=new Re,wa=new Re,Ea=new Re,Bu=new B,ba=new B;class dt extends xn{constructor(e=new Or,n=new et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Sa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Uu.fromBufferAttribute(d,e),o?Sa.addScaledVector(Uu,c):Sa.addScaledVector(Uu.sub(n),c))}n.add(Sa)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ou.copy(i.boundingSphere),Ou.applyMatrix4(s),e.ray.intersectsSphere(Ou)===!1)||(ip.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(ip),i.boundingBox!==null&&Kr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,y=d.length;g<y;g++){const h=d[g],p=r[h.materialIndex],m=Math.max(h.start,f.start),v=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let _=m,M=v;_<M;_+=3){const x=a.getX(_),A=a.getX(_+1),L=a.getX(_+2);o=Ta(this,p,e,Kr,u,c,x,A,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let h=g,p=y;h<p;h+=3){const m=a.getX(h),v=a.getX(h+1),_=a.getX(h+2);o=Ta(this,r,e,Kr,u,c,m,v,_),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,y=d.length;g<y;g++){const h=d[g],p=r[h.materialIndex],m=Math.max(h.start,f.start),v=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let _=m,M=v;_<M;_+=3){const x=_,A=_+1,L=_+2;o=Ta(this,p,e,Kr,u,c,x,A,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,n.push(o))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let h=g,p=y;h<p;h+=3){const m=h,v=h+1,_=h+2;o=Ta(this,r,e,Kr,u,c,m,v,_),o&&(o.faceIndex=Math.floor(h/3),n.push(o))}}}}function ry(t,e,n,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===qi,a),l===null)return null;ba.copy(a),ba.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ba);return u<n.near||u>n.far?null:{distance:u,point:ba.clone(),object:t}}function Ta(t,e,n,i,r,s,o,a,l){t.getVertexPosition(o,Js),t.getVertexPosition(a,eo),t.getVertexPosition(l,to);const u=ry(t,e,n,i,Js,eo,to,Bu);if(u){r&&(Ma.fromBufferAttribute(r,o),wa.fromBufferAttribute(r,a),Ea.fromBufferAttribute(r,l),u.uv=pi.getUV(Bu,Js,eo,to,Ma,wa,Ea,new Re)),s&&(Ma.fromBufferAttribute(s,o),wa.fromBufferAttribute(s,a),Ea.fromBufferAttribute(s,l),u.uv2=pi.getUV(Bu,Js,eo,to,Ma,wa,Ea,new Re));const c={a:o,b:a,c:l,normal:new B,materialIndex:0};pi.getNormal(Js,eo,to,c.normal),u.face=c}return u}class gn extends Or{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,g=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new br(u,3)),this.setAttribute("normal",new br(c,3)),this.setAttribute("uv",new br(d,2));function y(h,p,m,v,_,M,x,A,L,S,T){const P=M/L,Z=x/S,K=M/2,z=x/2,k=A/2,Y=L+1,Q=S+1;let J=0,R=0;const V=new B;for(let G=0;G<Q;G++){const se=G*Z-z;for(let F=0;F<Y;F++){const $=F*P-K;V[h]=$*v,V[p]=se*_,V[m]=k,u.push(V.x,V.y,V.z),V[h]=0,V[p]=0,V[m]=A>0?1:-1,c.push(V.x,V.y,V.z),d.push(F/L),d.push(1-G/S),J+=1}}for(let G=0;G<S;G++)for(let se=0;se<L;se++){const F=f+se+Y*G,$=f+se+Y*(G+1),ie=f+(se+1)+Y*(G+1),oe=f+(se+1)+Y*G;l.push(F,$,oe),l.push($,ie,oe),R+=6}a.addGroup(g,R,T),g+=R,f+=J}}static fromJSON(e){return new gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=ks(t[n]);for(const r in i)e[r]=i[r]}return e}function sy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Jg(t){return t.getRenderTarget()===null&&t.outputEncoding===Ze?Qn:Fo}const oy={clone:ks,merge:qt};var ay=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ly=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends kl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ay,this.fragmentShader=ly,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class e0 extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dn extends e0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(yu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qr=-90,Jr=1;class uy extends xn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Dn(Qr,Jr,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Dn(Qr,Jr,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Dn(Qr,Jr,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Dn(Qr,Jr,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Dn(Qr,Jr,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new Dn(Qr,Jr,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=_i,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class t0 extends an{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Rs,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cy extends Ir{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new t0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gn(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Hi});s.uniforms.tEquirect.value=n;const o=new dt(r,s),a=n.minFilter;return n.minFilter===ko&&(n.minFilter=Pn),new uy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Vu=new B,fy=new B,dy=new mn;class ur{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Vu.subVectors(i,n).cross(fy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(Vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||dy.getNormalMatrix(e),r=this.coplanarPoint(Vu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new $f,Ca=new B;class n0{constructor(e=new ur,n=new ur,i=new ur,r=new ur,s=new ur,o=new ur){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],y=i[10],h=i[11],p=i[12],m=i[13],v=i[14],_=i[15];return n[0].setComponents(a-r,d-l,h-f,_-p).normalize(),n[1].setComponents(a+r,d+l,h+f,_+p).normalize(),n[2].setComponents(a+s,d+u,h+g,_+m).normalize(),n[3].setComponents(a-s,d-u,h-g,_-m).normalize(),n[4].setComponents(a-o,d-c,h-y,_-v).normalize(),n[5].setComponents(a+o,d+c,h+y,_+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ca.x=r.normal.x>0?e.max.x:e.min.x,Ca.y=r.normal.y>0?e.max.y:e.min.y,Ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function i0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function hy(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,d,f),u.onUploadCallback();let y;if(d instanceof Float32Array)y=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(d instanceof Int16Array)y=5122;else if(d instanceof Uint32Array)y=5125;else if(d instanceof Int32Array)y=5124;else if(d instanceof Int8Array)y=5120;else if(d instanceof Uint8Array)y=5121;else if(d instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,g=c.updateRange;t.bindBuffer(d,u),g.count===-1?t.bufferSubData(d,0,f):(n?t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class $i extends Or{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,g=[],y=[],h=[],p=[];for(let m=0;m<c;m++){const v=m*f-o;for(let _=0;_<u;_++){const M=_*d-s;y.push(M,-v,0),h.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const _=v+u*m,M=v+u*(m+1),x=v+1+u*(m+1),A=v+1+u*m;g.push(_,M,A),g.push(M,x,A)}this.setIndex(g),this.setAttribute("position",new br(y,3)),this.setAttribute("normal",new br(h,3)),this.setAttribute("uv",new br(p,2))}static fromJSON(e){return new $i(e.width,e.height,e.widthSegments,e.heightSegments)}}var py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,my=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_y=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yy="vec3 transformed = vec3( position );",Sy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,My=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,wy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ey=`#ifdef USE_BUMPMAP
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
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Iy=`#define PI 3.141592653589793
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
}`,Ny=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ky=`vec3 transformedNormal = objectNormal;
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
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,By="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wy=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
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
#endif`,qy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$y=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ky=`#ifdef USE_GRADIENTMAP
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
}`,Qy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nS=`uniform bool receiveShadow;
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
#endif`,iS=`#if defined( USE_ENVMAP )
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
#endif`,rS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lS=`PhysicalMaterial material;
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
#endif`,uS=`struct PhysicalMaterial {
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
}`,cS=`
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
#endif`,fS=`#if defined( RE_IndirectDiffuse )
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
#endif`,dS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,hS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_S=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ES=`#ifdef USE_MORPHNORMALS
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
#endif`,bS=`#ifdef USE_MORPHTARGETS
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
#endif`,TS=`#ifdef USE_MORPHTARGETS
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
#endif`,CS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,AS=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,LS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RS=`#ifdef USE_NORMALMAP
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
#endif`,IS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,NS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,kS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,zS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,US=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,YS=`float getShadowMask() {
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
}`,$S=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZS=`#ifdef USE_SKINNING
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
#endif`,KS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QS=`#ifdef USE_SKINNING
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
#endif`,JS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#ifdef USE_TRANSMISSION
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
#endif`,s1=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,o1=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,a1=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,l1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,u1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,c1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,f1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h1=`uniform sampler2D t2D;
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_1=`#include <common>
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
}`,x1=`#if DEPTH_PACKING == 3200
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
}`,y1=`#define DISTANCE
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
}`,S1=`#define DISTANCE
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,E1=`uniform float scale;
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
}`,b1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,C1=`uniform vec3 diffuse;
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
}`,A1=`#define LAMBERT
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
}`,L1=`#define LAMBERT
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
}`,P1=`#define MATCAP
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
}`,D1=`#define MATCAP
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
}`,R1=`#define NORMAL
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
}`,I1=`#define NORMAL
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
}`,N1=`#define PHONG
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
}`,k1=`#define PHONG
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
}`,z1=`#define STANDARD
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
}`,F1=`#define STANDARD
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
}`,O1=`#define TOON
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
}`,U1=`#define TOON
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
}`,B1=`uniform float size;
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
}`,V1=`uniform vec3 diffuse;
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
}`,G1=`#include <common>
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
}`,H1=`uniform vec3 color;
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
}`,W1=`uniform float rotation;
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
}`,j1=`uniform vec3 diffuse;
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
}`,Le={alphamap_fragment:py,alphamap_pars_fragment:my,alphatest_fragment:gy,alphatest_pars_fragment:vy,aomap_fragment:_y,aomap_pars_fragment:xy,begin_vertex:yy,beginnormal_vertex:Sy,bsdfs:My,iridescence_fragment:wy,bumpmap_pars_fragment:Ey,clipping_planes_fragment:by,clipping_planes_pars_fragment:Ty,clipping_planes_pars_vertex:Cy,clipping_planes_vertex:Ay,color_fragment:Ly,color_pars_fragment:Py,color_pars_vertex:Dy,color_vertex:Ry,common:Iy,cube_uv_reflection_fragment:Ny,defaultnormal_vertex:ky,displacementmap_pars_vertex:zy,displacementmap_vertex:Fy,emissivemap_fragment:Oy,emissivemap_pars_fragment:Uy,encodings_fragment:By,encodings_pars_fragment:Vy,envmap_fragment:Gy,envmap_common_pars_fragment:Hy,envmap_pars_fragment:Wy,envmap_pars_vertex:jy,envmap_physical_pars_fragment:iS,envmap_vertex:Xy,fog_vertex:qy,fog_pars_vertex:Yy,fog_fragment:$y,fog_pars_fragment:Zy,gradientmap_pars_fragment:Ky,lightmap_fragment:Qy,lightmap_pars_fragment:Jy,lights_lambert_fragment:eS,lights_lambert_pars_fragment:tS,lights_pars_begin:nS,lights_toon_fragment:rS,lights_toon_pars_fragment:sS,lights_phong_fragment:oS,lights_phong_pars_fragment:aS,lights_physical_fragment:lS,lights_physical_pars_fragment:uS,lights_fragment_begin:cS,lights_fragment_maps:fS,lights_fragment_end:dS,logdepthbuf_fragment:hS,logdepthbuf_pars_fragment:pS,logdepthbuf_pars_vertex:mS,logdepthbuf_vertex:gS,map_fragment:vS,map_pars_fragment:_S,map_particle_fragment:xS,map_particle_pars_fragment:yS,metalnessmap_fragment:SS,metalnessmap_pars_fragment:MS,morphcolor_vertex:wS,morphnormal_vertex:ES,morphtarget_pars_vertex:bS,morphtarget_vertex:TS,normal_fragment_begin:CS,normal_fragment_maps:AS,normal_pars_fragment:LS,normal_pars_vertex:PS,normal_vertex:DS,normalmap_pars_fragment:RS,clearcoat_normal_fragment_begin:IS,clearcoat_normal_fragment_maps:NS,clearcoat_pars_fragment:kS,iridescence_pars_fragment:zS,output_fragment:FS,packing:OS,premultiplied_alpha_fragment:US,project_vertex:BS,dithering_fragment:VS,dithering_pars_fragment:GS,roughnessmap_fragment:HS,roughnessmap_pars_fragment:WS,shadowmap_pars_fragment:jS,shadowmap_pars_vertex:XS,shadowmap_vertex:qS,shadowmask_pars_fragment:YS,skinbase_vertex:$S,skinning_pars_vertex:ZS,skinning_vertex:KS,skinnormal_vertex:QS,specularmap_fragment:JS,specularmap_pars_fragment:e1,tonemapping_fragment:t1,tonemapping_pars_fragment:n1,transmission_fragment:i1,transmission_pars_fragment:r1,uv_pars_fragment:s1,uv_pars_vertex:o1,uv_vertex:a1,uv2_pars_fragment:l1,uv2_pars_vertex:u1,uv2_vertex:c1,worldpos_vertex:f1,background_vert:d1,background_frag:h1,backgroundCube_vert:p1,backgroundCube_frag:m1,cube_vert:g1,cube_frag:v1,depth_vert:_1,depth_frag:x1,distanceRGBA_vert:y1,distanceRGBA_frag:S1,equirect_vert:M1,equirect_frag:w1,linedashed_vert:E1,linedashed_frag:b1,meshbasic_vert:T1,meshbasic_frag:C1,meshlambert_vert:A1,meshlambert_frag:L1,meshmatcap_vert:P1,meshmatcap_frag:D1,meshnormal_vert:R1,meshnormal_frag:I1,meshphong_vert:N1,meshphong_frag:k1,meshphysical_vert:z1,meshphysical_frag:F1,meshtoon_vert:O1,meshtoon_frag:U1,points_vert:B1,points_frag:V1,shadow_vert:G1,shadow_frag:H1,sprite_vert:W1,sprite_frag:j1},ae={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new mn},uv2Transform:{value:new mn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mn}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mn}}},Jn={basic:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:qt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:qt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:qt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:qt([ae.points,ae.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:qt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:qt([ae.common,ae.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:qt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:qt([ae.sprite,ae.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new mn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:qt([ae.common,ae.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:qt([ae.lights,ae.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Jn.physical={uniforms:qt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Re(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Aa={r:0,b:0,g:0};function X1(t,e,n,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,u,c,d=null,f=0,g=null;function y(p,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:e).get(_));const M=t.xr,x=M.getSession&&M.getSession();x&&x.environmentBlendMode==="additive"&&(_=null),_===null?h(a,l):_&&_.isColor&&(h(_,1),v=!0),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Il)?(c===void 0&&(c=new dt(new gn(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:ks(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,L,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=_.encoding!==Ze,(d!==_||f!==_.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new dt(new $i(2,2),new Yi({name:"BackgroundMaterial",uniforms:ks(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_.encoding!==Ze,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,g=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function h(p,m){p.getRGB(Aa,Jg(t)),i.buffers.color.setClear(Aa.r,Aa.g,Aa.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:y}}function q1(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function d(k,Y,Q,J,R){let V=!1;if(o){const G=h(J,Q,Y);u!==G&&(u=G,g(u.object)),V=m(k,J,Q,R),V&&v(k,J,Q,R)}else{const G=Y.wireframe===!0;(u.geometry!==J.id||u.program!==Q.id||u.wireframe!==G)&&(u.geometry=J.id,u.program=Q.id,u.wireframe=G,V=!0)}R!==null&&n.update(R,34963),(V||c)&&(c=!1,S(k,Y,Q,J),R!==null&&t.bindBuffer(34963,n.get(R).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(k){return i.isWebGL2?t.bindVertexArray(k):s.bindVertexArrayOES(k)}function y(k){return i.isWebGL2?t.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function h(k,Y,Q){const J=Q.wireframe===!0;let R=a[k.id];R===void 0&&(R={},a[k.id]=R);let V=R[Y.id];V===void 0&&(V={},R[Y.id]=V);let G=V[J];return G===void 0&&(G=p(f()),V[J]=G),G}function p(k){const Y=[],Q=[],J=[];for(let R=0;R<r;R++)Y[R]=0,Q[R]=0,J[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:Q,attributeDivisors:J,object:k,attributes:{},index:null}}function m(k,Y,Q,J){const R=u.attributes,V=Y.attributes;let G=0;const se=Q.getAttributes();for(const F in se)if(se[F].location>=0){const ie=R[F];let oe=V[F];if(oe===void 0&&(F==="instanceMatrix"&&k.instanceMatrix&&(oe=k.instanceMatrix),F==="instanceColor"&&k.instanceColor&&(oe=k.instanceColor)),ie===void 0||ie.attribute!==oe||oe&&ie.data!==oe.data)return!0;G++}return u.attributesNum!==G||u.index!==J}function v(k,Y,Q,J){const R={},V=Y.attributes;let G=0;const se=Q.getAttributes();for(const F in se)if(se[F].location>=0){let ie=V[F];ie===void 0&&(F==="instanceMatrix"&&k.instanceMatrix&&(ie=k.instanceMatrix),F==="instanceColor"&&k.instanceColor&&(ie=k.instanceColor));const oe={};oe.attribute=ie,ie&&ie.data&&(oe.data=ie.data),R[F]=oe,G++}u.attributes=R,u.attributesNum=G,u.index=J}function _(){const k=u.newAttributes;for(let Y=0,Q=k.length;Y<Q;Y++)k[Y]=0}function M(k){x(k,0)}function x(k,Y){const Q=u.newAttributes,J=u.enabledAttributes,R=u.attributeDivisors;Q[k]=1,J[k]===0&&(t.enableVertexAttribArray(k),J[k]=1),R[k]!==Y&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,Y),R[k]=Y)}function A(){const k=u.newAttributes,Y=u.enabledAttributes;for(let Q=0,J=Y.length;Q<J;Q++)Y[Q]!==k[Q]&&(t.disableVertexAttribArray(Q),Y[Q]=0)}function L(k,Y,Q,J,R,V){i.isWebGL2===!0&&(Q===5124||Q===5125)?t.vertexAttribIPointer(k,Y,Q,R,V):t.vertexAttribPointer(k,Y,Q,J,R,V)}function S(k,Y,Q,J){if(i.isWebGL2===!1&&(k.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const R=J.attributes,V=Q.getAttributes(),G=Y.defaultAttributeValues;for(const se in V){const F=V[se];if(F.location>=0){let $=R[se];if($===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&($=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&($=k.instanceColor)),$!==void 0){const ie=$.normalized,oe=$.itemSize,U=n.get($);if(U===void 0)continue;const Ee=U.buffer,xe=U.type,ve=U.bytesPerElement;if($.isInterleavedBufferAttribute){const fe=$.data,je=fe.stride,Ae=$.offset;if(fe.isInstancedInterleavedBuffer){for(let be=0;be<F.locationSize;be++)x(F.location+be,fe.meshPerAttribute);k.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let be=0;be<F.locationSize;be++)M(F.location+be);t.bindBuffer(34962,Ee);for(let be=0;be<F.locationSize;be++)L(F.location+be,oe/F.locationSize,xe,ie,je*ve,(Ae+oe/F.locationSize*be)*ve)}else{if($.isInstancedBufferAttribute){for(let fe=0;fe<F.locationSize;fe++)x(F.location+fe,$.meshPerAttribute);k.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let fe=0;fe<F.locationSize;fe++)M(F.location+fe);t.bindBuffer(34962,Ee);for(let fe=0;fe<F.locationSize;fe++)L(F.location+fe,oe/F.locationSize,xe,ie,oe*ve,oe/F.locationSize*fe*ve)}}else if(G!==void 0){const ie=G[se];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(F.location,ie);break;case 3:t.vertexAttrib3fv(F.location,ie);break;case 4:t.vertexAttrib4fv(F.location,ie);break;default:t.vertexAttrib1fv(F.location,ie)}}}}A()}function T(){K();for(const k in a){const Y=a[k];for(const Q in Y){const J=Y[Q];for(const R in J)y(J[R].object),delete J[R];delete Y[Q]}delete a[k]}}function P(k){if(a[k.id]===void 0)return;const Y=a[k.id];for(const Q in Y){const J=Y[Q];for(const R in J)y(J[R].object),delete J[R];delete Y[Q]}delete a[k.id]}function Z(k){for(const Y in a){const Q=a[Y];if(Q[k.id]===void 0)continue;const J=Q[k.id];for(const R in J)y(J[R].object),delete J[R];delete Q[k.id]}}function K(){z(),c=!0,u!==l&&(u=l,g(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:Z,initAttributes:_,enableAttribute:M,disableUnusedAttributes:A}}function Y1(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,g;if(r)f=t,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,c,d),n.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function $1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),f=t.getParameter(35660),g=t.getParameter(3379),y=t.getParameter(34076),h=t.getParameter(34921),p=t.getParameter(36347),m=t.getParameter(36348),v=t.getParameter(36349),_=f>0,M=o||e.has("OES_texture_float"),x=_&&M,A=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:y,maxAttributes:h,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:x,maxSamples:A}}function Z1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ur,a=new mn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||i!==0||r;return r=f,i=d.length,g},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,g){const y=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,m=t.get(d);if(!r||y===null||y.length===0||s&&!p)s?c(null):u();else{const v=s?0:i,_=v*4;let M=m.clippingState||null;l.value=M,M=c(y,f,_,g);for(let x=0;x!==_;++x)M[x]=n[x];m.clippingState=M,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,g,y){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,y!==!0||p===null){const m=g+h*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,M=g;_!==h;++_,M+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function K1(t){let e=new WeakMap;function n(o,a){return a===jc?o.mapping=Rs:a===Xc&&(o.mapping=Is),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===jc||a===Xc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new cy(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Q1 extends e0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const gs=4,rp=[.125,.215,.35,.446,.526,.582],pr=20,Gu=new Q1,sp=new Ke;let Hu=null;const cr=(1+Math.sqrt(5))/2,ts=1/cr,op=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,cr,ts),new B(0,cr,-ts),new B(ts,0,cr),new B(-ts,0,cr),new B(cr,ts,0),new B(-cr,ts,0)];class ap{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Hu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hu),e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Rs||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:zo,format:In,encoding:Rr,depthBuffer:!1},r=lp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J1(s)),this._blurMaterial=eM(s,e,n)}return r}_compileMaterial(e){const n=new dt(this._lodPlanes[0],e);this._renderer.compile(n,Gu)}_sceneToCubeUV(e,n,i,r){const a=new Dn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(sp),c.toneMapping=_i,c.autoClear=!1;const g=new et({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),y=new dt(new gn,g);let h=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,h=!0):(g.color.copy(sp),h=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const _=this._cubeSize;La(r,v*_,m>2?_:0,_,_),c.setRenderTarget(r),h&&c.render(y,a),c.render(e,a)}y.geometry.dispose(),y.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Rs||e.mapping===Is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=up());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;La(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Gu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=op[(r-1)%op.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new dt(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*pr-1),h=s/y,p=isFinite(s)?1+Math.floor(c*h):pr;p>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pr}`);const m=[];let v=0;for(let L=0;L<pr;++L){const S=L/h,T=Math.exp(-S*S/2);m.push(T),L===0?v+=T:L<p&&(v+=2*T)}for(let L=0;L<m.length;L++)m[L]=m[L]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=y,f.mipInt.value=_-i;const M=this._sizeLods[r],x=3*M*(r>_-gs?r-_+gs:0),A=4*(this._cubeSize-M);La(n,x,A,3*M,2*M),l.setRenderTarget(n),l.render(d,Gu)}}function J1(t){const e=[],n=[],i=[];let r=t;const s=t-gs+1+rp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-gs?l=rp[o-t+gs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,y=6,h=3,p=2,m=1,v=new Float32Array(h*y*g),_=new Float32Array(p*y*g),M=new Float32Array(m*y*g);for(let A=0;A<g;A++){const L=A%3*2/3-1,S=A>2?0:-1,T=[L,S,0,L+2/3,S,0,L+2/3,S+1,0,L,S,0,L+2/3,S+1,0,L,S+1,0];v.set(T,h*y*A),_.set(f,p*y*A);const P=[A,A,A,A,A,A];M.set(P,m*y*A)}const x=new Or;x.setAttribute("position",new ii(v,h)),x.setAttribute("uv",new ii(_,p)),x.setAttribute("faceIndex",new ii(M,m)),e.push(x),r>gs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function lp(t,e,n){const i=new Ir(t,e,n);return i.texture.mapping=Il,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function La(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function eM(t,e,n){const i=new Float32Array(pr),r=new B(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kf(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function up(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kf(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function cp(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Kf(){return`

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
	`}function tM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===jc||l===Xc,c=l===Rs||l===Is;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new ap(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new ap(t));const f=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function nM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iM(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const y in f)e.update(f[y],34962);const g=d.morphAttributes;for(const y in g){const h=g[y];for(let p=0,m=h.length;p<m;p++)e.update(h[p],34962)}}function u(d){const f=[],g=d.index,y=d.attributes.position;let h=0;if(g!==null){const v=g.array;h=g.version;for(let _=0,M=v.length;_<M;_+=3){const x=v[_+0],A=v[_+1],L=v[_+2];f.push(x,A,A,L,L,x)}}else{const v=y.array;h=y.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const x=_+0,A=_+1,L=_+2;f.push(x,A,A,L,L,x)}}const p=new(jg(f)?Qg:Kg)(f,1);p.version=h;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function c(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function rM(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,g){t.drawElements(s,g,a,f*l),n.update(g,s,1)}function d(f,g,y){if(y===0)return;let h,p;if(r)h=t,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,g,a,f*l,y),n.update(g,s,y)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function sM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function oM(t,e){return t[0]-e[0]}function aM(t,e){return Math.abs(e[1])-Math.abs(t[1])}function lM(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Rt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0;let m=s.get(c);if(m===void 0||m.count!==p){let Q=function(){k.dispose(),s.delete(c),c.removeEventListener("dispose",Q)};var y=Q;m!==void 0&&m.texture.dispose();const M=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let P=0;M===!0&&(P=1),x===!0&&(P=2),A===!0&&(P=3);let Z=c.attributes.position.count*P,K=1;Z>e.maxTextureSize&&(K=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const z=new Float32Array(Z*K*4*p),k=new $g(z,Z,K,p);k.type=xr,k.needsUpdate=!0;const Y=P*4;for(let J=0;J<p;J++){const R=L[J],V=S[J],G=T[J],se=Z*K*4*J;for(let F=0;F<R.count;F++){const $=F*Y;M===!0&&(o.fromBufferAttribute(R,F),z[se+$+0]=o.x,z[se+$+1]=o.y,z[se+$+2]=o.z,z[se+$+3]=0),x===!0&&(o.fromBufferAttribute(V,F),z[se+$+4]=o.x,z[se+$+5]=o.y,z[se+$+6]=o.z,z[se+$+7]=0),A===!0&&(o.fromBufferAttribute(G,F),z[se+$+8]=o.x,z[se+$+9]=o.y,z[se+$+10]=o.z,z[se+$+11]=G.itemSize===4?o.w:1)}}m={count:p,texture:k,size:new Re(Z,K)},s.set(c,m),c.addEventListener("dispose",Q)}let v=0;for(let M=0;M<g.length;M++)v+=g[M];const _=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",g),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const h=g===void 0?0:g.length;let p=i[c.id];if(p===void 0||p.length!==h){p=[];for(let x=0;x<h;x++)p[x]=[x,0];i[c.id]=p}for(let x=0;x<h;x++){const A=p[x];A[0]=x,A[1]=g[x]}p.sort(aM);for(let x=0;x<8;x++)x<h&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(oM);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const A=a[x],L=A[0],S=A[1];L!==Number.MAX_SAFE_INTEGER&&S?(m&&c.getAttribute("morphTarget"+x)!==m[L]&&c.setAttribute("morphTarget"+x,m[L]),v&&c.getAttribute("morphNormal"+x)!==v[L]&&c.setAttribute("morphNormal"+x,v[L]),r[x]=S,_+=S):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),v&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const M=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(t,"morphTargetBaseInfluence",M),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function uM(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const r0=new an,s0=new $g,o0=new Yx,a0=new t0,fp=[],dp=[],hp=new Float32Array(16),pp=new Float32Array(9),mp=new Float32Array(4);function Us(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=fp[r];if(s===void 0&&(s=new Float32Array(r),fp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function _t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function zl(t,e){let n=dp[e];n===void 0&&(n=new Int32Array(e),dp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function cM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function fM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2fv(this.addr,e),xt(n,e)}}function dM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_t(n,e))return;t.uniform3fv(this.addr,e),xt(n,e)}}function hM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4fv(this.addr,e),xt(n,e)}}function pM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),xt(n,e)}else{if(_t(n,i))return;mp.set(i),t.uniformMatrix2fv(this.addr,!1,mp),xt(n,i)}}function mM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),xt(n,e)}else{if(_t(n,i))return;pp.set(i),t.uniformMatrix3fv(this.addr,!1,pp),xt(n,i)}}function gM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(_t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),xt(n,e)}else{if(_t(n,i))return;hp.set(i),t.uniformMatrix4fv(this.addr,!1,hp),xt(n,i)}}function vM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _M(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2iv(this.addr,e),xt(n,e)}}function xM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_t(n,e))return;t.uniform3iv(this.addr,e),xt(n,e)}}function yM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4iv(this.addr,e),xt(n,e)}}function SM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function MM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_t(n,e))return;t.uniform2uiv(this.addr,e),xt(n,e)}}function wM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_t(n,e))return;t.uniform3uiv(this.addr,e),xt(n,e)}}function EM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_t(n,e))return;t.uniform4uiv(this.addr,e),xt(n,e)}}function bM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||r0,r)}function TM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||o0,r)}function CM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||a0,r)}function AM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||s0,r)}function LM(t){switch(t){case 5126:return cM;case 35664:return fM;case 35665:return dM;case 35666:return hM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return vM;case 35667:case 35671:return _M;case 35668:case 35672:return xM;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return wM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return AM}}function PM(t,e){t.uniform1fv(this.addr,e)}function DM(t,e){const n=Us(e,this.size,2);t.uniform2fv(this.addr,n)}function RM(t,e){const n=Us(e,this.size,3);t.uniform3fv(this.addr,n)}function IM(t,e){const n=Us(e,this.size,4);t.uniform4fv(this.addr,n)}function NM(t,e){const n=Us(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kM(t,e){const n=Us(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function zM(t,e){const n=Us(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function FM(t,e){t.uniform1iv(this.addr,e)}function OM(t,e){t.uniform2iv(this.addr,e)}function UM(t,e){t.uniform3iv(this.addr,e)}function BM(t,e){t.uniform4iv(this.addr,e)}function VM(t,e){t.uniform1uiv(this.addr,e)}function GM(t,e){t.uniform2uiv(this.addr,e)}function HM(t,e){t.uniform3uiv(this.addr,e)}function WM(t,e){t.uniform4uiv(this.addr,e)}function jM(t,e,n){const i=this.cache,r=e.length,s=zl(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||r0,s[o])}function XM(t,e,n){const i=this.cache,r=e.length,s=zl(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||o0,s[o])}function qM(t,e,n){const i=this.cache,r=e.length,s=zl(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a0,s[o])}function YM(t,e,n){const i=this.cache,r=e.length,s=zl(n,r);_t(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||s0,s[o])}function $M(t){switch(t){case 5126:return PM;case 35664:return DM;case 35665:return RM;case 35666:return IM;case 35674:return NM;case 35675:return kM;case 35676:return zM;case 5124:case 35670:return FM;case 35667:case 35671:return OM;case 35668:case 35672:return UM;case 35669:case 35673:return BM;case 5125:return VM;case 36294:return GM;case 36295:return HM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}class ZM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=LM(n.type)}}class KM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=$M(n.type)}}class QM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Wu=/(\w+)(\])?(\[|\.)?/g;function gp(t,e){t.seq.push(e),t.map[e.id]=e}function JM(t,e,n){const i=t.name,r=i.length;for(Wu.lastIndex=0;;){const s=Wu.exec(i),o=Wu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){gp(n,u===void 0?new ZM(a,t,e):new KM(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new QM(a),gp(n,d)),n=d}}}class Wa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);JM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function vp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let ew=0;function tw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function nw(t){switch(t){case Rr:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function _p(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+tw(t.getShaderSource(e),o)}else return r}function iw(t,e){const n=nw(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function rw(t,e){let n;switch(e){case yx:n="Linear";break;case Sx:n="Reinhard";break;case Mx:n="OptimizedCineon";break;case wx:n="ACESFilmic";break;case Ex:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function sw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ao).join(`
`)}function ow(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function aw(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ao(t){return t!==""}function xp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(t){return t.replace(lw,uw)}function uw(t,e){const n=Le[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Zc(n)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(t){return t.replace(cw,fw)}function fw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Og?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ug?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===oo&&(e="SHADOWMAP_TYPE_VSM"),e}function hw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Rs:case Is:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function mw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Gg:e="ENVMAP_BLENDING_MULTIPLY";break;case _x:e="ENVMAP_BLENDING_MIX";break;case xx:e="ENVMAP_BLENDING_ADD";break}return e}function gw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=dw(n),u=hw(n),c=pw(n),d=mw(n),f=gw(n),g=n.isWebGL2?"":sw(n),y=ow(s),h=r.createProgram();let p,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[y].filter(ao).join(`
`),p.length>0&&(p+=`
`),m=[g,y].filter(ao).join(`
`),m.length>0&&(m+=`
`)):(p=[Mp(n),"#define SHADER_NAME "+n.shaderName,y,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),m=[g,Mp(n),"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_i?"#define TONE_MAPPING":"",n.toneMapping!==_i?Le.tonemapping_pars_fragment:"",n.toneMapping!==_i?rw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,iw("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ao).join(`
`)),o=Zc(o),o=xp(o,n),o=yp(o,n),a=Zc(a),a=xp(a,n),a=yp(a,n),o=Sp(o),a=Sp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+p+o,M=v+m+a,x=vp(r,35633,_),A=vp(r,35632,M);if(r.attachShader(h,x),r.attachShader(h,A),n.index0AttributeName!==void 0?r.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),t.debug.checkShaderErrors){const T=r.getProgramInfoLog(h).trim(),P=r.getShaderInfoLog(x).trim(),Z=r.getShaderInfoLog(A).trim();let K=!0,z=!0;if(r.getProgramParameter(h,35714)===!1){K=!1;const k=_p(r,x,"vertex"),Y=_p(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+T+`
`+k+`
`+Y)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||Z==="")&&(z=!1);z&&(this.diagnostics={runnable:K,programLog:T,vertexShader:{log:P,prefix:p},fragmentShader:{log:Z,prefix:m}})}r.deleteShader(x),r.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new Wa(r,h)),L};let S;return this.getAttributes=function(){return S===void 0&&(S=aw(r,h)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=ew++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=A,this}let _w=0;class xw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yw(e),n.set(e,i)),i}}class yw{constructor(e){this.id=_w++,this.code=e,this.usedTimes=0}}function Sw(t,e,n,i,r,s,o){const a=new Zf,l=new xw,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(S,T,P,Z,K){const z=Z.fog,k=K.geometry,Y=S.isMeshStandardMaterial?Z.environment:null,Q=(S.isMeshStandardMaterial?n:e).get(S.envMap||Y),J=Q&&Q.mapping===Il?Q.image.height:null,R=y[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const V=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,G=V!==void 0?V.length:0;let se=0;k.morphAttributes.position!==void 0&&(se=1),k.morphAttributes.normal!==void 0&&(se=2),k.morphAttributes.color!==void 0&&(se=3);let F,$,ie,oe;if(R){const je=Jn[R];F=je.vertexShader,$=je.fragmentShader}else F=S.vertexShader,$=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),oe=l.getFragmentShaderID(S);const U=t.getRenderTarget(),Ee=S.alphaTest>0,xe=S.clearcoat>0,ve=S.iridescence>0;return{isWebGL2:c,shaderID:R,shaderName:S.type,vertexShader:F,fragmentShader:$,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:f,outputEncoding:U===null?t.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:Rr,map:!!S.map,matcap:!!S.matcap,envMap:!!Q,envMapMode:Q&&Q.mapping,envMapCubeUVHeight:J,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===Wx,tangentSpaceNormalMap:S.normalMapType===Hx,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Ze,clearcoat:xe,clearcoatMap:xe&&!!S.clearcoatMap,clearcoatRoughnessMap:xe&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!S.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!S.iridescenceMap,iridescenceThicknessMap:ve&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===ws,alphaMap:!!S.alphaMap,alphaTest:Ee,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!k.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!z,useFog:S.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:_i,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Tt,flipSided:S.side===_n,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)T.push(P),T.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(m(T,S),v(T,S),T.push(t.outputEncoding)),T.push(S.customProgramCacheKey),T.join()}function m(S,T){S.push(T.precision),S.push(T.outputEncoding),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.combine),S.push(T.vertexUvs),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),S.push(a.mask)}function _(S){const T=y[S.type];let P;if(T){const Z=Jn[T];P=oy.clone(Z.uniforms)}else P=S.uniforms;return P}function M(S,T){let P;for(let Z=0,K=u.length;Z<K;Z++){const z=u[Z];if(z.cacheKey===T){P=z,++P.usedTimes;break}}return P===void 0&&(P=new vw(t,T,S,s),u.push(P)),P}function x(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function L(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:_,acquireProgram:M,releaseProgram:x,releaseShaderCache:A,programs:u,dispose:L}}function Mw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ww(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function wp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ep(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,g,y,h,p){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:g,groupOrder:y,renderOrder:d.renderOrder,z:h,group:p},t[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=g,m.groupOrder=y,m.renderOrder=d.renderOrder,m.z=h,m.group=p),e++,m}function a(d,f,g,y,h,p){const m=o(d,f,g,y,h,p);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function l(d,f,g,y,h,p){const m=o(d,f,g,y,h,p);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(d,f){n.length>1&&n.sort(d||ww),i.length>1&&i.sort(f||wp),r.length>1&&r.sort(f||wp)}function c(){for(let d=e,f=t.length;d<f;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function Ew(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ep,t.set(i,[o])):r>=s.length?(o=new Ep,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function bw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Ke};break;case"SpotLight":n={position:new B,direction:new B,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function Tw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Cw=0;function Aw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Lw(t,e){const n=new bw,i=Tw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new B);const s=new B,o=new Nt,a=new Nt;function l(c,d){let f=0,g=0,y=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let h=0,p=0,m=0,v=0,_=0,M=0,x=0,A=0,L=0,S=0;c.sort(Aw);const T=d!==!0?Math.PI:1;for(let Z=0,K=c.length;Z<K;Z++){const z=c[Z],k=z.color,Y=z.intensity,Q=z.distance,J=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=k.r*Y*T,g+=k.g*Y*T,y+=k.b*Y*T;else if(z.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(z.sh.coefficients[R],Y);else if(z.isDirectionalLight){const R=n.get(z);if(R.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const V=z.shadow,G=i.get(z);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,r.directionalShadow[h]=G,r.directionalShadowMap[h]=J,r.directionalShadowMatrix[h]=z.shadow.matrix,M++}r.directional[h]=R,h++}else if(z.isSpotLight){const R=n.get(z);R.position.setFromMatrixPosition(z.matrixWorld),R.color.copy(k).multiplyScalar(Y*T),R.distance=Q,R.coneCos=Math.cos(z.angle),R.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),R.decay=z.decay,r.spot[m]=R;const V=z.shadow;if(z.map&&(r.spotLightMap[L]=z.map,L++,V.updateMatrices(z),z.castShadow&&S++),r.spotLightMatrix[m]=V.matrix,z.castShadow){const G=i.get(z);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,r.spotShadow[m]=G,r.spotShadowMap[m]=J,A++}m++}else if(z.isRectAreaLight){const R=n.get(z);R.color.copy(k).multiplyScalar(Y),R.halfWidth.set(z.width*.5,0,0),R.halfHeight.set(0,z.height*.5,0),r.rectArea[v]=R,v++}else if(z.isPointLight){const R=n.get(z);if(R.color.copy(z.color).multiplyScalar(z.intensity*T),R.distance=z.distance,R.decay=z.decay,z.castShadow){const V=z.shadow,G=i.get(z);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,r.pointShadow[p]=G,r.pointShadowMap[p]=J,r.pointShadowMatrix[p]=z.shadow.matrix,x++}r.point[p]=R,p++}else if(z.isHemisphereLight){const R=n.get(z);R.skyColor.copy(z.color).multiplyScalar(Y*T),R.groundColor.copy(z.groundColor).multiplyScalar(Y*T),r.hemi[_]=R,_++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=y;const P=r.hash;(P.directionalLength!==h||P.pointLength!==p||P.spotLength!==m||P.rectAreaLength!==v||P.hemiLength!==_||P.numDirectionalShadows!==M||P.numPointShadows!==x||P.numSpotShadows!==A||P.numSpotMaps!==L)&&(r.directional.length=h,r.spot.length=m,r.rectArea.length=v,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=A+L-S,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=S,P.directionalLength=h,P.pointLength=p,P.spotLength=m,P.rectAreaLength=v,P.hemiLength=_,P.numDirectionalShadows=M,P.numPointShadows=x,P.numSpotShadows=A,P.numSpotMaps=L,r.version=Cw++)}function u(c,d){let f=0,g=0,y=0,h=0,p=0;const m=d.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){const M=c[v];if(M.isDirectionalLight){const x=r.directional[f];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isSpotLight){const x=r.spot[y];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),y++}else if(M.isRectAreaLight){const x=r.rectArea[h];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),h++}else if(M.isPointLight){const x=r.point[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),g++}else if(M.isHemisphereLight){const x=r.hemi[p];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),p++}}}return{setup:l,setupView:u,state:r}}function bp(t,e){const n=new Lw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Pw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new bp(t,e),n.set(s,[l])):o>=a.length?(l=new bp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Dw extends kl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rw extends kl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nw=`uniform sampler2D shadow_pass;
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
}`;function kw(t,e,n){let i=new n0;const r=new Re,s=new Re,o=new Rt,a=new Dw({depthPacking:Gx}),l=new Rw,u={},c=n.maxTextureSize,d={[qi]:_n,[_n]:qi,[Tt]:Tt},f=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Iw,fragmentShader:Nw}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const y=new Or;y.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new dt(y,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Og,this.render=function(M,x,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const L=t.getRenderTarget(),S=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),P=t.state;P.setBlending(Hi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let Z=0,K=M.length;Z<K;Z++){const z=M[Z],k=z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const Y=k.getFrameExtents();if(r.multiply(Y),s.copy(k.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Y.x),r.x=s.x*Y.x,k.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Y.y),r.y=s.y*Y.y,k.mapSize.y=s.y)),k.map===null){const J=this.type!==oo?{minFilter:Dt,magFilter:Dt}:{};k.map=new Ir(r.x,r.y,J),k.map.texture.name=z.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const Q=k.getViewportCount();for(let J=0;J<Q;J++){const R=k.getViewport(J);o.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),P.viewport(o),k.updateMatrices(z,J),i=k.getFrustum(),_(x,A,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===oo&&m(k,A),k.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(L,S,T)};function m(M,x){const A=e.update(h);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ir(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(x,null,A,f,h,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(x,null,A,g,h,null)}function v(M,x,A,L,S,T){let P=null;const Z=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(Z!==void 0)P=Z;else if(P=A.isPointLight===!0?l:a,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const K=P.uuid,z=x.uuid;let k=u[K];k===void 0&&(k={},u[K]=k);let Y=k[z];Y===void 0&&(Y=P.clone(),k[z]=Y),P=Y}return P.visible=x.visible,P.wireframe=x.wireframe,T===oo?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:d[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(A.matrixWorld),P.nearDistance=L,P.farDistance=S),P}function _(M,x,A,L,S){if(M.visible===!1)return;if(M.layers.test(x.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===oo)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const Z=e.update(M),K=M.material;if(Array.isArray(K)){const z=Z.groups;for(let k=0,Y=z.length;k<Y;k++){const Q=z[k],J=K[Q.materialIndex];if(J&&J.visible){const R=v(M,J,L,A.near,A.far,S);t.renderBufferDirect(A,null,Z,R,M,Q)}}}else if(K.visible){const z=v(M,K,L,A.near,A.far,S);t.renderBufferDirect(A,null,Z,z,M,null)}}const P=M.children;for(let Z=0,K=P.length;Z<K;Z++)_(P[Z],x,A,L,S)}}function zw(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const j=new Rt;let te=null;const de=new Rt(0,0,0,0);return{setMask:function(ye){te!==ye&&!D&&(t.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){D=ye},setClear:function(ye,We,St,Ft,er){er===!0&&(ye*=Ft,We*=Ft,St*=Ft),j.set(ye,We,St,Ft),de.equals(j)===!1&&(t.clearColor(ye,We,St,Ft),de.copy(j))},reset:function(){D=!1,te=null,de.set(-1,0,0,0)}}}function s(){let D=!1,j=null,te=null,de=null;return{setTest:function(ye){ye?Ee(2929):xe(2929)},setMask:function(ye){j!==ye&&!D&&(t.depthMask(ye),j=ye)},setFunc:function(ye){if(te!==ye){switch(ye){case fx:t.depthFunc(512);break;case dx:t.depthFunc(519);break;case hx:t.depthFunc(513);break;case Wc:t.depthFunc(515);break;case px:t.depthFunc(514);break;case mx:t.depthFunc(518);break;case gx:t.depthFunc(516);break;case vx:t.depthFunc(517);break;default:t.depthFunc(515)}te=ye}},setLocked:function(ye){D=ye},setClear:function(ye){de!==ye&&(t.clearDepth(ye),de=ye)},reset:function(){D=!1,j=null,te=null,de=null}}}function o(){let D=!1,j=null,te=null,de=null,ye=null,We=null,St=null,Ft=null,er=null;return{setTest:function(Je){D||(Je?Ee(2960):xe(2960))},setMask:function(Je){j!==Je&&!D&&(t.stencilMask(Je),j=Je)},setFunc:function(Je,ri,bn){(te!==Je||de!==ri||ye!==bn)&&(t.stencilFunc(Je,ri,bn),te=Je,de=ri,ye=bn)},setOp:function(Je,ri,bn){(We!==Je||St!==ri||Ft!==bn)&&(t.stencilOp(Je,ri,bn),We=Je,St=ri,Ft=bn)},setLocked:function(Je){D=Je},setClear:function(Je){er!==Je&&(t.clearStencil(Je),er=Je)},reset:function(){D=!1,j=null,te=null,de=null,ye=null,We=null,St=null,Ft=null,er=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},g={},y=new WeakMap,h=[],p=null,m=!1,v=null,_=null,M=null,x=null,A=null,L=null,S=null,T=!1,P=null,Z=null,K=null,z=null,k=null;const Y=t.getParameter(35661);let Q=!1,J=0;const R=t.getParameter(7938);R.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(R)[1]),Q=J>=1):R.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),Q=J>=2);let V=null,G={};const se=t.getParameter(3088),F=t.getParameter(2978),$=new Rt().fromArray(se),ie=new Rt().fromArray(F);function oe(D,j,te){const de=new Uint8Array(4),ye=t.createTexture();t.bindTexture(D,ye),t.texParameteri(D,10241,9728),t.texParameteri(D,10240,9728);for(let We=0;We<te;We++)t.texImage2D(j+We,0,6408,1,1,0,6408,5121,de);return ye}const U={};U[3553]=oe(3553,3553,1),U[34067]=oe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ee(2929),l.setFunc(Wc),lt(!1),Wt(ph),Ee(2884),yt(Hi);function Ee(D){f[D]!==!0&&(t.enable(D),f[D]=!0)}function xe(D){f[D]!==!1&&(t.disable(D),f[D]=!1)}function ve(D,j){return g[D]!==j?(t.bindFramebuffer(D,j),g[D]=j,i&&(D===36009&&(g[36160]=j),D===36160&&(g[36009]=j)),!0):!1}function fe(D,j){let te=h,de=!1;if(D)if(te=y.get(j),te===void 0&&(te=[],y.set(j,te)),D.isWebGLMultipleRenderTargets){const ye=D.texture;if(te.length!==ye.length||te[0]!==36064){for(let We=0,St=ye.length;We<St;We++)te[We]=36064+We;te.length=ye.length,de=!0}}else te[0]!==36064&&(te[0]=36064,de=!0);else te[0]!==1029&&(te[0]=1029,de=!0);de&&(n.isWebGL2?t.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function je(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const Ae={[ns]:32774,[ex]:32778,[tx]:32779};if(i)Ae[_h]=32775,Ae[xh]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ae[_h]=D.MIN_EXT,Ae[xh]=D.MAX_EXT)}const be={[nx]:0,[ix]:1,[rx]:768,[Bg]:770,[cx]:776,[lx]:774,[ox]:772,[sx]:769,[Vg]:771,[ux]:775,[ax]:773};function yt(D,j,te,de,ye,We,St,Ft){if(D===Hi){m===!0&&(xe(3042),m=!1);return}if(m===!1&&(Ee(3042),m=!0),D!==J_){if(D!==v||Ft!==T){if((_!==ns||A!==ns)&&(t.blendEquation(32774),_=ns,A=ns),Ft)switch(D){case ws:t.blendFuncSeparate(1,771,1,771);break;case mh:t.blendFunc(1,1);break;case gh:t.blendFuncSeparate(0,769,0,1);break;case vh:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ws:t.blendFuncSeparate(770,771,1,771);break;case mh:t.blendFunc(770,1);break;case gh:t.blendFuncSeparate(0,769,0,1);break;case vh:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,x=null,L=null,S=null,v=D,T=Ft}return}ye=ye||j,We=We||te,St=St||de,(j!==_||ye!==A)&&(t.blendEquationSeparate(Ae[j],Ae[ye]),_=j,A=ye),(te!==M||de!==x||We!==L||St!==S)&&(t.blendFuncSeparate(be[te],be[de],be[We],be[St]),M=te,x=de,L=We,S=St),v=D,T=!1}function zt(D,j){D.side===Tt?xe(2884):Ee(2884);let te=D.side===_n;j&&(te=!te),lt(te),D.blending===ws&&D.transparent===!1?yt(Hi):yt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const de=D.stencilWrite;u.setTest(de),de&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ee(32926):xe(32926)}function lt(D){P!==D&&(D?t.frontFace(2304):t.frontFace(2305),P=D)}function Wt(D){D!==K_?(Ee(2884),D!==Z&&(D===ph?t.cullFace(1029):D===Q_?t.cullFace(1028):t.cullFace(1032))):xe(2884),Z=D}function ot(D){D!==K&&(Q&&t.lineWidth(D),K=D)}function Ge(D,j,te){D?(Ee(32823),(z!==j||k!==te)&&(t.polygonOffset(j,te),z=j,k=te)):xe(32823)}function En(D){D?Ee(3089):xe(3089)}function Qt(D){D===void 0&&(D=33984+Y-1),V!==D&&(t.activeTexture(D),V=D)}function b(D,j,te){te===void 0&&(V===null?te=33984+Y-1:te=V);let de=G[te];de===void 0&&(de={type:void 0,texture:void 0},G[te]=de),(de.type!==D||de.texture!==j)&&(V!==te&&(t.activeTexture(te),V=te),t.bindTexture(D,j||U[D]),de.type=D,de.texture=j)}function w(){const D=G[V];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function H(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function I(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(D){$.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),$.copy(D))}function ge(D){ie.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ie.copy(D))}function Ne(D,j){let te=d.get(j);te===void 0&&(te=new WeakMap,d.set(j,te));let de=te.get(D);de===void 0&&(de=t.getUniformBlockIndex(j,D.name),te.set(D,de))}function ze(D,j){const de=d.get(j).get(D);c.get(j)!==de&&(t.uniformBlockBinding(j,de,D.__bindingPointIndex),c.set(j,de))}function qe(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},V=null,G={},g={},y=new WeakMap,h=[],p=null,m=!1,v=null,_=null,M=null,x=null,A=null,L=null,S=null,T=!1,P=null,Z=null,K=null,z=null,k=null,$.set(0,0,t.canvas.width,t.canvas.height),ie.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ee,disable:xe,bindFramebuffer:ve,drawBuffers:fe,useProgram:je,setBlending:yt,setMaterial:zt,setFlipSided:lt,setCullFace:Wt,setLineWidth:ot,setPolygonOffset:Ge,setScissorTest:En,activeTexture:Qt,bindTexture:b,unbindTexture:w,compressedTexImage2D:H,compressedTexImage3D:ne,texImage2D:pe,texImage3D:ue,updateUBOMapping:Ne,uniformBlockBinding:ze,texStorage2D:I,texStorage3D:ce,texSubImage2D:re,texSubImage3D:le,compressedTexSubImage2D:Te,compressedTexSubImage3D:C,scissor:_e,viewport:ge,reset:qe}}function Fw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,w){return m?new OffscreenCanvas(b,w):Oo("canvas")}function _(b,w,H,ne){let re=1;if((b.width>ne||b.height>ne)&&(re=ne/Math.max(b.width,b.height)),re<1||w===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const le=w?$c:Math.floor,Te=le(re*b.width),C=le(re*b.height);h===void 0&&(h=v(Te,C));const I=H?v(Te,C):h;return I.width=Te,I.height=C,I.getContext("2d").drawImage(b,0,0,Te,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Te+"x"+C+")."),I}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function M(b){return qh(b.width)&&qh(b.height)}function x(b){return a?!1:b.wrapS!==Xn||b.wrapT!==Xn||b.minFilter!==Dt&&b.minFilter!==Pn}function A(b,w){return b.generateMipmaps&&w&&b.minFilter!==Dt&&b.minFilter!==Pn}function L(b){t.generateMipmap(b)}function S(b,w,H,ne,re=!1){if(a===!1)return w;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let le=w;return w===6403&&(H===5126&&(le=33326),H===5131&&(le=33325),H===5121&&(le=33321)),w===33319&&(H===5126&&(le=33328),H===5131&&(le=33327),H===5121&&(le=33323)),w===6408&&(H===5126&&(le=34836),H===5131&&(le=34842),H===5121&&(le=ne===Ze&&re===!1?35907:32856),H===32819&&(le=32854),H===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function T(b,w,H){return A(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==Dt&&b.minFilter!==Pn?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function P(b){return b===Dt||b===yh||b===hu?9728:9729}function Z(b){const w=b.target;w.removeEventListener("dispose",Z),z(w),w.isVideoTexture&&y.delete(w)}function K(b){const w=b.target;w.removeEventListener("dispose",K),Y(w)}function z(b){const w=i.get(b);if(w.__webglInit===void 0)return;const H=b.source,ne=p.get(H);if(ne){const re=ne[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&k(b),Object.keys(ne).length===0&&p.delete(H)}i.remove(b)}function k(b){const w=i.get(b);t.deleteTexture(w.__webglTexture);const H=b.source,ne=p.get(H);delete ne[w.__cacheKey],o.memory.textures--}function Y(b){const w=b.texture,H=i.get(b),ne=i.get(w);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)t.deleteFramebuffer(H.__webglFramebuffer[re]),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[re]);else{if(t.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let re=0;re<H.__webglColorRenderbuffer.length;re++)H.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[re]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let re=0,le=w.length;re<le;re++){const Te=i.get(w[re]);Te.__webglTexture&&(t.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(w[re])}i.remove(w),i.remove(b)}let Q=0;function J(){Q=0}function R(){const b=Q;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),Q+=1,b}function V(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.encoding),w.join()}function G(b,w){const H=i.get(b);if(b.isVideoTexture&&En(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(H,b,w);return}}n.bindTexture(3553,H.__webglTexture,33984+w)}function se(b,w){const H=i.get(b);if(b.version>0&&H.__version!==b.version){xe(H,b,w);return}n.bindTexture(35866,H.__webglTexture,33984+w)}function F(b,w){const H=i.get(b);if(b.version>0&&H.__version!==b.version){xe(H,b,w);return}n.bindTexture(32879,H.__webglTexture,33984+w)}function $(b,w){const H=i.get(b);if(b.version>0&&H.__version!==b.version){ve(H,b,w);return}n.bindTexture(34067,H.__webglTexture,33984+w)}const ie={[Wi]:10497,[Xn]:33071,[qc]:33648},oe={[Dt]:9728,[yh]:9984,[hu]:9986,[Pn]:9729,[bx]:9985,[ko]:9987};function U(b,w,H){if(H?(t.texParameteri(b,10242,ie[w.wrapS]),t.texParameteri(b,10243,ie[w.wrapT]),(b===32879||b===35866)&&t.texParameteri(b,32882,ie[w.wrapR]),t.texParameteri(b,10240,oe[w.magFilter]),t.texParameteri(b,10241,oe[w.minFilter])):(t.texParameteri(b,10242,33071),t.texParameteri(b,10243,33071),(b===32879||b===35866)&&t.texParameteri(b,32882,33071),(w.wrapS!==Xn||w.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,10240,P(w.magFilter)),t.texParameteri(b,10241,P(w.minFilter)),w.minFilter!==Dt&&w.minFilter!==Pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Dt||w.minFilter!==hu&&w.minFilter!==ko||w.type===xr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===zo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Ee(b,w){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",Z));const ne=w.source;let re=p.get(ne);re===void 0&&(re={},p.set(ne,re));const le=V(w);if(le!==b.__cacheKey){re[le]===void 0&&(re[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),re[le].usedTimes++;const Te=re[b.__cacheKey];Te!==void 0&&(re[b.__cacheKey].usedTimes--,Te.usedTimes===0&&k(w)),b.__cacheKey=le,b.__webglTexture=re[le].texture}return H}function xe(b,w,H){let ne=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=35866),w.isData3DTexture&&(ne=32879);const re=Ee(b,w),le=w.source;n.bindTexture(ne,b.__webglTexture,33984+H);const Te=i.get(le);if(le.version!==Te.__version||re===!0){n.activeTexture(33984+H),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const C=x(w)&&M(w.image)===!1;let I=_(w.image,C,!1,c);I=Qt(w,I);const ce=M(I)||a,pe=s.convert(w.format,w.encoding);let ue=s.convert(w.type),_e=S(w.internalFormat,pe,ue,w.encoding,w.isVideoTexture);U(ne,w,ce);let ge;const Ne=w.mipmaps,ze=a&&w.isVideoTexture!==!0,qe=Te.__version===void 0||re===!0,D=T(w,I,ce);if(w.isDepthTexture)_e=6402,a?w.type===xr?_e=36012:w.type===_r?_e=33190:w.type===Es?_e=35056:_e=33189:w.type===xr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===wr&&_e===6402&&w.type!==Wg&&w.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=_r,ue=s.convert(w.type)),w.format===Ns&&_e===6402&&(_e=34041,w.type!==Es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Es,ue=s.convert(w.type))),qe&&(ze?n.texStorage2D(3553,1,_e,I.width,I.height):n.texImage2D(3553,0,_e,I.width,I.height,0,pe,ue,null));else if(w.isDataTexture)if(Ne.length>0&&ce){ze&&qe&&n.texStorage2D(3553,D,_e,Ne[0].width,Ne[0].height);for(let j=0,te=Ne.length;j<te;j++)ge=Ne[j],ze?n.texSubImage2D(3553,j,0,0,ge.width,ge.height,pe,ue,ge.data):n.texImage2D(3553,j,_e,ge.width,ge.height,0,pe,ue,ge.data);w.generateMipmaps=!1}else ze?(qe&&n.texStorage2D(3553,D,_e,I.width,I.height),n.texSubImage2D(3553,0,0,0,I.width,I.height,pe,ue,I.data)):n.texImage2D(3553,0,_e,I.width,I.height,0,pe,ue,I.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ze&&qe&&n.texStorage3D(35866,D,_e,Ne[0].width,Ne[0].height,I.depth);for(let j=0,te=Ne.length;j<te;j++)ge=Ne[j],w.format!==In?pe!==null?ze?n.compressedTexSubImage3D(35866,j,0,0,0,ge.width,ge.height,I.depth,pe,ge.data,0,0):n.compressedTexImage3D(35866,j,_e,ge.width,ge.height,I.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?n.texSubImage3D(35866,j,0,0,0,ge.width,ge.height,I.depth,pe,ue,ge.data):n.texImage3D(35866,j,_e,ge.width,ge.height,I.depth,0,pe,ue,ge.data)}else{ze&&qe&&n.texStorage2D(3553,D,_e,Ne[0].width,Ne[0].height);for(let j=0,te=Ne.length;j<te;j++)ge=Ne[j],w.format!==In?pe!==null?ze?n.compressedTexSubImage2D(3553,j,0,0,ge.width,ge.height,pe,ge.data):n.compressedTexImage2D(3553,j,_e,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?n.texSubImage2D(3553,j,0,0,ge.width,ge.height,pe,ue,ge.data):n.texImage2D(3553,j,_e,ge.width,ge.height,0,pe,ue,ge.data)}else if(w.isDataArrayTexture)ze?(qe&&n.texStorage3D(35866,D,_e,I.width,I.height,I.depth),n.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,pe,ue,I.data)):n.texImage3D(35866,0,_e,I.width,I.height,I.depth,0,pe,ue,I.data);else if(w.isData3DTexture)ze?(qe&&n.texStorage3D(32879,D,_e,I.width,I.height,I.depth),n.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,pe,ue,I.data)):n.texImage3D(32879,0,_e,I.width,I.height,I.depth,0,pe,ue,I.data);else if(w.isFramebufferTexture){if(qe)if(ze)n.texStorage2D(3553,D,_e,I.width,I.height);else{let j=I.width,te=I.height;for(let de=0;de<D;de++)n.texImage2D(3553,de,_e,j,te,0,pe,ue,null),j>>=1,te>>=1}}else if(Ne.length>0&&ce){ze&&qe&&n.texStorage2D(3553,D,_e,Ne[0].width,Ne[0].height);for(let j=0,te=Ne.length;j<te;j++)ge=Ne[j],ze?n.texSubImage2D(3553,j,0,0,pe,ue,ge):n.texImage2D(3553,j,_e,pe,ue,ge);w.generateMipmaps=!1}else ze?(qe&&n.texStorage2D(3553,D,_e,I.width,I.height),n.texSubImage2D(3553,0,0,0,pe,ue,I)):n.texImage2D(3553,0,_e,pe,ue,I);A(w,ce)&&L(ne),Te.__version=le.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function ve(b,w,H){if(w.image.length!==6)return;const ne=Ee(b,w),re=w.source;n.bindTexture(34067,b.__webglTexture,33984+H);const le=i.get(re);if(re.version!==le.__version||ne===!0){n.activeTexture(33984+H),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const Te=w.isCompressedTexture||w.image[0].isCompressedTexture,C=w.image[0]&&w.image[0].isDataTexture,I=[];for(let j=0;j<6;j++)!Te&&!C?I[j]=_(w.image[j],!1,!0,u):I[j]=C?w.image[j].image:w.image[j],I[j]=Qt(w,I[j]);const ce=I[0],pe=M(ce)||a,ue=s.convert(w.format,w.encoding),_e=s.convert(w.type),ge=S(w.internalFormat,ue,_e,w.encoding),Ne=a&&w.isVideoTexture!==!0,ze=le.__version===void 0||ne===!0;let qe=T(w,ce,pe);U(34067,w,pe);let D;if(Te){Ne&&ze&&n.texStorage2D(34067,qe,ge,ce.width,ce.height);for(let j=0;j<6;j++){D=I[j].mipmaps;for(let te=0;te<D.length;te++){const de=D[te];w.format!==In?ue!==null?Ne?n.compressedTexSubImage2D(34069+j,te,0,0,de.width,de.height,ue,de.data):n.compressedTexImage2D(34069+j,te,ge,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?n.texSubImage2D(34069+j,te,0,0,de.width,de.height,ue,_e,de.data):n.texImage2D(34069+j,te,ge,de.width,de.height,0,ue,_e,de.data)}}}else{D=w.mipmaps,Ne&&ze&&(D.length>0&&qe++,n.texStorage2D(34067,qe,ge,I[0].width,I[0].height));for(let j=0;j<6;j++)if(C){Ne?n.texSubImage2D(34069+j,0,0,0,I[j].width,I[j].height,ue,_e,I[j].data):n.texImage2D(34069+j,0,ge,I[j].width,I[j].height,0,ue,_e,I[j].data);for(let te=0;te<D.length;te++){const ye=D[te].image[j].image;Ne?n.texSubImage2D(34069+j,te+1,0,0,ye.width,ye.height,ue,_e,ye.data):n.texImage2D(34069+j,te+1,ge,ye.width,ye.height,0,ue,_e,ye.data)}}else{Ne?n.texSubImage2D(34069+j,0,0,0,ue,_e,I[j]):n.texImage2D(34069+j,0,ge,ue,_e,I[j]);for(let te=0;te<D.length;te++){const de=D[te];Ne?n.texSubImage2D(34069+j,te+1,0,0,ue,_e,de.image[j]):n.texImage2D(34069+j,te+1,ge,ue,_e,de.image[j])}}}A(w,pe)&&L(34067),le.__version=re.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function fe(b,w,H,ne,re){const le=s.convert(H.format,H.encoding),Te=s.convert(H.type),C=S(H.internalFormat,le,Te,H.encoding);i.get(w).__hasExternalTextures||(re===32879||re===35866?n.texImage3D(re,0,C,w.width,w.height,w.depth,0,le,Te,null):n.texImage2D(re,0,C,w.width,w.height,0,le,Te,null)),n.bindFramebuffer(36160,b),Ge(w)?f.framebufferTexture2DMultisampleEXT(36160,ne,re,i.get(H).__webglTexture,0,ot(w)):(re===3553||re>=34069&&re<=34074)&&t.framebufferTexture2D(36160,ne,re,i.get(H).__webglTexture,0),n.bindFramebuffer(36160,null)}function je(b,w,H){if(t.bindRenderbuffer(36161,b),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(H||Ge(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===xr?ne=36012:re.type===_r&&(ne=33190));const le=ot(w);Ge(w)?f.renderbufferStorageMultisampleEXT(36161,le,ne,w.width,w.height):t.renderbufferStorageMultisample(36161,le,ne,w.width,w.height)}else t.renderbufferStorage(36161,ne,w.width,w.height);t.framebufferRenderbuffer(36160,36096,36161,b)}else if(w.depthBuffer&&w.stencilBuffer){const ne=ot(w);H&&Ge(w)===!1?t.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):Ge(w)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):t.renderbufferStorage(36161,34041,w.width,w.height),t.framebufferRenderbuffer(36160,33306,36161,b)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<ne.length;re++){const le=ne[re],Te=s.convert(le.format,le.encoding),C=s.convert(le.type),I=S(le.internalFormat,Te,C,le.encoding),ce=ot(w);H&&Ge(w)===!1?t.renderbufferStorageMultisample(36161,ce,I,w.width,w.height):Ge(w)?f.renderbufferStorageMultisampleEXT(36161,ce,I,w.width,w.height):t.renderbufferStorage(36161,I,w.width,w.height)}}t.bindRenderbuffer(36161,null)}function Ae(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const ne=i.get(w.depthTexture).__webglTexture,re=ot(w);if(w.depthTexture.format===wr)Ge(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,re):t.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===Ns)Ge(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,re):t.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function be(b){const w=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,b)}else if(H){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=t.createRenderbuffer(),je(w.__webglDepthbuffer[ne],b,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),je(w.__webglDepthbuffer,b,!1);n.bindFramebuffer(36160,null)}function yt(b,w,H){const ne=i.get(b);w!==void 0&&fe(ne.__webglFramebuffer,b,b.texture,36064,3553),H!==void 0&&be(b)}function zt(b){const w=b.texture,H=i.get(b),ne=i.get(w);b.addEventListener("dispose",K),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=w.version,o.memory.textures++);const re=b.isWebGLCubeRenderTarget===!0,le=b.isWebGLMultipleRenderTargets===!0,Te=M(b)||a;if(re){H.__webglFramebuffer=[];for(let C=0;C<6;C++)H.__webglFramebuffer[C]=t.createFramebuffer()}else{if(H.__webglFramebuffer=t.createFramebuffer(),le)if(r.drawBuffers){const C=b.texture;for(let I=0,ce=C.length;I<ce;I++){const pe=i.get(C[I]);pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Ge(b)===!1){const C=le?w:[w];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let I=0;I<C.length;I++){const ce=C[I];H.__webglColorRenderbuffer[I]=t.createRenderbuffer(),t.bindRenderbuffer(36161,H.__webglColorRenderbuffer[I]);const pe=s.convert(ce.format,ce.encoding),ue=s.convert(ce.type),_e=S(ce.internalFormat,pe,ue,ce.encoding,b.isXRRenderTarget===!0),ge=ot(b);t.renderbufferStorageMultisample(36161,ge,_e,b.width,b.height),t.framebufferRenderbuffer(36160,36064+I,36161,H.__webglColorRenderbuffer[I])}t.bindRenderbuffer(36161,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),je(H.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(36160,null)}}if(re){n.bindTexture(34067,ne.__webglTexture),U(34067,w,Te);for(let C=0;C<6;C++)fe(H.__webglFramebuffer[C],b,w,36064,34069+C);A(w,Te)&&L(34067),n.unbindTexture()}else if(le){const C=b.texture;for(let I=0,ce=C.length;I<ce;I++){const pe=C[I],ue=i.get(pe);n.bindTexture(3553,ue.__webglTexture),U(3553,pe,Te),fe(H.__webglFramebuffer,b,pe,36064+I,3553),A(pe,Te)&&L(3553)}n.unbindTexture()}else{let C=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?C=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(C,ne.__webglTexture),U(C,w,Te),fe(H.__webglFramebuffer,b,w,36064,C),A(w,Te)&&L(C),n.unbindTexture()}b.depthBuffer&&be(b)}function lt(b){const w=M(b)||a,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,re=H.length;ne<re;ne++){const le=H[ne];if(A(le,w)){const Te=b.isWebGLCubeRenderTarget?34067:3553,C=i.get(le).__webglTexture;n.bindTexture(Te,C),L(Te),n.unbindTexture()}}}function Wt(b){if(a&&b.samples>0&&Ge(b)===!1){const w=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],H=b.width,ne=b.height;let re=16384;const le=[],Te=b.stencilBuffer?33306:36096,C=i.get(b),I=b.isWebGLMultipleRenderTargets===!0;if(I)for(let ce=0;ce<w.length;ce++)n.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ce,36161,null),n.bindFramebuffer(36160,C.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ce,3553,null,0);n.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,C.__webglFramebuffer);for(let ce=0;ce<w.length;ce++){le.push(36064+ce),b.depthBuffer&&le.push(Te);const pe=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(pe===!1&&(b.depthBuffer&&(re|=256),b.stencilBuffer&&(re|=1024)),I&&t.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[ce]),pe===!0&&(t.invalidateFramebuffer(36008,[Te]),t.invalidateFramebuffer(36009,[Te])),I){const ue=i.get(w[ce]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,ue,0)}t.blitFramebuffer(0,0,H,ne,0,0,H,ne,re,9728),g&&t.invalidateFramebuffer(36008,le)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),I)for(let ce=0;ce<w.length;ce++){n.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ce,36161,C.__webglColorRenderbuffer[ce]);const pe=i.get(w[ce]).__webglTexture;n.bindFramebuffer(36160,C.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ce,3553,pe,0)}n.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function ot(b){return Math.min(d,b.samples)}function Ge(b){const w=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function En(b){const w=o.render.frame;y.get(b)!==w&&(y.set(b,w),b.update())}function Qt(b,w){const H=b.encoding,ne=b.format,re=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Yc||H!==Rr&&(H===Ze?a===!1?e.has("EXT_sRGB")===!0&&ne===In?(b.format=Yc,b.minFilter=Pn,b.generateMipmaps=!1):w=qg.sRGBToLinear(w):(ne!==In||re!==Dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),w}this.allocateTextureUnit=R,this.resetTextureUnits=J,this.setTexture2D=G,this.setTexture2DArray=se,this.setTexture3D=F,this.setTextureCube=$,this.rebindTextures=yt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ge}function Ow(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===Dr)return 5121;if(s===Lx)return 32819;if(s===Px)return 32820;if(s===Tx)return 5120;if(s===Cx)return 5122;if(s===Wg)return 5123;if(s===Ax)return 5124;if(s===_r)return 5125;if(s===xr)return 5126;if(s===zo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Dx)return 6406;if(s===In)return 6408;if(s===Rx)return 6409;if(s===Ix)return 6410;if(s===wr)return 6402;if(s===Ns)return 34041;if(s===Yc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Nx)return 6403;if(s===kx)return 36244;if(s===zx)return 33319;if(s===Fx)return 33320;if(s===Ox)return 36249;if(s===pu||s===mu||s===gu||s===vu)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===pu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===pu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sh||s===Mh||s===wh||s===Eh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Sh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Eh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ux)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===bh||s===Th)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===bh)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Th)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ch||s===Ah||s===Lh||s===Ph||s===Dh||s===Rh||s===Ih||s===Nh||s===kh||s===zh||s===Fh||s===Oh||s===Uh||s===Bh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ch)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ah)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ph)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ih)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Nh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===kh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Oh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Uh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_u)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===_u)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Bx||s===Vh||s===Gh||s===Hh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===_u)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Vh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Es?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Uw extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yr extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bw={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=n.getJointPose(h,i),m=this._getHandJoint(u,h);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=p.radius),m.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),g=.02,y=.005;u.inputState.pinching&&f>g+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new yr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Vw extends an{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:wr,c!==wr&&c!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===wr&&(i=_r),i===void 0&&c===Ns&&(i=Es),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1}}class Gw extends Fr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,g=null,y=null;const h=n.getContextAttributes();let p=null,m=null;const v=[],_=[],M=new Set,x=new Map,A=new Dn;A.layers.enable(1),A.viewport=new Rt;const L=new Dn;L.layers.enable(2),L.viewport=new Rt;const S=[A,L],T=new Uw;T.layers.enable(1),T.layers.enable(2);let P=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let $=v[F];return $===void 0&&($=new ju,v[F]=$),$.getTargetRaySpace()},this.getControllerGrip=function(F){let $=v[F];return $===void 0&&($=new ju,v[F]=$),$.getGripSpace()},this.getHand=function(F){let $=v[F];return $===void 0&&($=new ju,v[F]=$),$.getHandSpace()};function K(F){const $=_.indexOf(F.inputSource);if($===-1)return;const ie=v[$];ie!==void 0&&ie.dispatchEvent({type:F.type,data:F.inputSource})}function z(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",k);for(let F=0;F<v.length;F++){const $=_[F];$!==null&&(_[F]=null,v[F].disconnect($))}P=null,Z=null,e.setRenderTarget(p),g=null,f=null,d=null,r=null,m=null,se.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(F){u=F},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",z),r.addEventListener("inputsourceschange",k),h.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,$),r.updateRenderState({baseLayer:g}),m=new Ir(g.framebufferWidth,g.framebufferHeight,{format:In,type:Dr,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let $=null,ie=null,oe=null;h.depth&&(oe=h.stencil?35056:33190,$=h.stencil?Ns:wr,ie=h.stencil?Es:_r);const U={colorFormat:32856,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(U),r.updateRenderState({layers:[f]}),m=new Ir(f.textureWidth,f.textureHeight,{format:In,type:Dr,depthTexture:new Vw(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const Ee=e.properties.get(m);Ee.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function k(F){for(let $=0;$<F.removed.length;$++){const ie=F.removed[$],oe=_.indexOf(ie);oe>=0&&(_[oe]=null,v[oe].disconnect(ie))}for(let $=0;$<F.added.length;$++){const ie=F.added[$];let oe=_.indexOf(ie);if(oe===-1){for(let Ee=0;Ee<v.length;Ee++)if(Ee>=_.length){_.push(ie),oe=Ee;break}else if(_[Ee]===null){_[Ee]=ie,oe=Ee;break}if(oe===-1)break}const U=v[oe];U&&U.connect(ie)}}const Y=new B,Q=new B;function J(F,$,ie){Y.setFromMatrixPosition($.matrixWorld),Q.setFromMatrixPosition(ie.matrixWorld);const oe=Y.distanceTo(Q),U=$.projectionMatrix.elements,Ee=ie.projectionMatrix.elements,xe=U[14]/(U[10]-1),ve=U[14]/(U[10]+1),fe=(U[9]+1)/U[5],je=(U[9]-1)/U[5],Ae=(U[8]-1)/U[0],be=(Ee[8]+1)/Ee[0],yt=xe*Ae,zt=xe*be,lt=oe/(-Ae+be),Wt=lt*-Ae;$.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Wt),F.translateZ(lt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const ot=xe+lt,Ge=ve+lt,En=yt-Wt,Qt=zt+(oe-Wt),b=fe*ve/Ge*ot,w=je*ve/Ge*ot;F.projectionMatrix.makePerspective(En,Qt,b,w,ot,Ge)}function R(F,$){$===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices($.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;T.near=L.near=A.near=F.near,T.far=L.far=A.far=F.far,(P!==T.near||Z!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,Z=T.far);const $=F.parent,ie=T.cameras;R(T,$);for(let U=0;U<ie.length;U++)R(ie[U],$);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),F.matrix.copy(T.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const oe=F.children;for(let U=0,Ee=oe.length;U<Ee;U++)oe[U].updateMatrixWorld(!0);ie.length===2?J(T,A,L):T.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=F)},this.getPlanes=function(){return M};let V=null;function G(F,$){if(c=$.getViewerPose(u||o),y=$,c!==null){const ie=c.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let oe=!1;ie.length!==T.cameras.length&&(T.cameras.length=0,oe=!0);for(let U=0;U<ie.length;U++){const Ee=ie[U];let xe=null;if(g!==null)xe=g.getViewport(Ee);else{const fe=d.getViewSubImage(f,Ee);xe=fe.viewport,U===0&&(e.setRenderTargetTextures(m,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(m))}let ve=S[U];ve===void 0&&(ve=new Dn,ve.layers.enable(U),ve.viewport=new Rt,S[U]=ve),ve.matrix.fromArray(Ee.transform.matrix),ve.projectionMatrix.fromArray(Ee.projectionMatrix),ve.viewport.set(xe.x,xe.y,xe.width,xe.height),U===0&&T.matrix.copy(ve.matrix),oe===!0&&T.cameras.push(ve)}}for(let ie=0;ie<v.length;ie++){const oe=_[ie],U=v[ie];oe!==null&&U!==void 0&&U.update(oe,$,u||o)}if(V&&V(F,$),$.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let ie=null;for(const oe of M)$.detectedPlanes.has(oe)||(ie===null&&(ie=[]),ie.push(oe));if(ie!==null)for(const oe of ie)M.delete(oe),x.delete(oe),i.dispatchEvent({type:"planeremoved",data:oe});for(const oe of $.detectedPlanes)if(!M.has(oe))M.add(oe),x.set(oe,$.lastChangedTime),i.dispatchEvent({type:"planeadded",data:oe});else{const U=x.get(oe);oe.lastChangedTime>U&&(x.set(oe,oe.lastChangedTime),i.dispatchEvent({type:"planechanged",data:oe}))}}y=null}const se=new i0;se.setAnimationLoop(G),this.setAnimationLoop=function(F){V=F},this.dispose=function(){}}}function Hw(t,e){function n(h,p){p.color.getRGB(h.fogColor.value,Jg(t)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,m,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,_)):p.isMeshMatcapMaterial?(r(h,p),g(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),y(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,m,v):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===_n&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===_n&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const m=e.get(p).envMap;if(m&&(h.envMap.value=m,h.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const M=t.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uv2Transform.value.copy(_.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,m,v){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*m,h.scale.value=v*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let m;p.map?m=p.map:p.alphaMap&&(m=p.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),h.uvTransform.value.copy(m.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,m){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===_n&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=m.texture,h.transmissionSamplerSize.value.set(m.width,m.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function g(h,p){p.matcap&&(h.matcap.value=p.matcap)}function y(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ww(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,_){const M=_.program;i.uniformBlockBinding(v,M)}function u(v,_){let M=r[v.id];M===void 0&&(y(v),M=c(v),r[v.id]=M,v.addEventListener("dispose",p));const x=_.program;i.updateUBOMapping(v,x);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function c(v){const _=d();v.__bindingPointIndex=_;const M=t.createBuffer(),x=v.__size,A=v.usage;return t.bindBuffer(35345,M),t.bufferData(35345,x,A),t.bindBuffer(35345,null),t.bindBufferBase(35345,_,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=r[v.id],M=v.uniforms,x=v.__cache;t.bindBuffer(35345,_);for(let A=0,L=M.length;A<L;A++){const S=M[A];if(g(S,A,x)===!0){const T=S.__offset,P=Array.isArray(S.value)?S.value:[S.value];let Z=0;for(let K=0;K<P.length;K++){const z=P[K],k=h(z);typeof z=="number"?(S.__data[0]=z,t.bufferSubData(35345,T+Z,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=z.elements[0],S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=z.elements[0],S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=z.elements[0]):(z.toArray(S.__data,Z),Z+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,T,S.__data)}}t.bindBuffer(35345,null)}function g(v,_,M){const x=v.value;if(M[_]===void 0){if(typeof x=="number")M[_]=x;else{const A=Array.isArray(x)?x:[x],L=[];for(let S=0;S<A.length;S++)L.push(A[S].clone());M[_]=L}return!0}else if(typeof x=="number"){if(M[_]!==x)return M[_]=x,!0}else{const A=Array.isArray(M[_])?M[_]:[M[_]],L=Array.isArray(x)?x:[x];for(let S=0;S<A.length;S++){const T=A[S];if(T.equals(L[S])===!1)return T.copy(L[S]),!0}}return!1}function y(v){const _=v.uniforms;let M=0;const x=16;let A=0;for(let L=0,S=_.length;L<S;L++){const T=_[L],P={boundary:0,storage:0},Z=Array.isArray(T.value)?T.value:[T.value];for(let K=0,z=Z.length;K<z;K++){const k=Z[K],Y=h(k);P.boundary+=Y.boundary,P.storage+=Y.storage}if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,L>0){A=M%x;const K=x-A;A!==0&&K-P.boundary<0&&(M+=x-A,T.__offset=M)}M+=P.storage}return A=M%x,A>0&&(M+=x-A),v.__size=M,v.__cache={},this}function h(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){const _=v.target;_.removeEventListener("dispose",p);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}function jw(){const t=Oo("canvas");return t.style.display="block",t}function l0(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:jw(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let d=null,f=null;const g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Rr,this.physicallyCorrectLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;const h=this;let p=!1,m=0,v=0,_=null,M=-1,x=null;const A=new Rt,L=new Rt;let S=null,T=e.width,P=e.height,Z=1,K=null,z=null;const k=new Rt(0,0,T,P),Y=new Rt(0,0,T,P);let Q=!1;const J=new n0;let R=!1,V=!1,G=null;const se=new Nt,F=new Re,$=new B,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return _===null?Z:1}let U=n;function Ee(E,O){for(let X=0;X<E.length;X++){const N=E[X],q=e.getContext(N,O);if(q!==null)return q}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yf}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),U===null){const O=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&O.shift(),U=Ee(O,E),U===null)throw Ee(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xe,ve,fe,je,Ae,be,yt,zt,lt,Wt,ot,Ge,En,Qt,b,w,H,ne,re,le,Te,C,I,ce;function pe(){xe=new nM(U),ve=new $1(U,xe,t),xe.init(ve),C=new Ow(U,xe,ve),fe=new zw(U,xe,ve),je=new sM,Ae=new Mw,be=new Fw(U,xe,fe,Ae,ve,C,je),yt=new K1(h),zt=new tM(h),lt=new hy(U,ve),I=new q1(U,xe,lt,ve),Wt=new iM(U,lt,je,I),ot=new uM(U,Wt,lt,je),re=new lM(U,ve,be),w=new Z1(Ae),Ge=new Sw(h,yt,zt,xe,ve,I,w),En=new Hw(h,Ae),Qt=new Ew,b=new Pw(xe,ve),ne=new X1(h,yt,zt,fe,ot,c,o),H=new kw(h,ot,ve),ce=new Ww(U,je,ve,fe),le=new Y1(U,xe,je,ve),Te=new rM(U,xe,je,ve),je.programs=Ge.programs,h.capabilities=ve,h.extensions=xe,h.properties=Ae,h.renderLists=Qt,h.shadowMap=H,h.state=fe,h.info=je}pe();const ue=new Gw(h,U);this.xr=ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(T,P,!1))},this.getSize=function(E){return E.set(T,P)},this.setSize=function(E,O,X){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,P=O,e.width=Math.floor(E*Z),e.height=Math.floor(O*Z),X!==!1&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(T*Z,P*Z).floor()},this.setDrawingBufferSize=function(E,O,X){T=E,P=O,Z=X,e.width=Math.floor(E*X),e.height=Math.floor(O*X),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(k)},this.setViewport=function(E,O,X,N){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,O,X,N),fe.viewport(A.copy(k).multiplyScalar(Z).floor())},this.getScissor=function(E){return E.copy(Y)},this.setScissor=function(E,O,X,N){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,O,X,N),fe.scissor(L.copy(Y).multiplyScalar(Z).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(E){fe.setScissorTest(Q=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(E=!0,O=!0,X=!0){let N=0;E&&(N|=16384),O&&(N|=256),X&&(N|=1024),U.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),Qt.dispose(),b.dispose(),Ae.dispose(),yt.dispose(),zt.dispose(),ot.dispose(),I.dispose(),ce.dispose(),Ge.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",de),ue.removeEventListener("sessionend",ye),G&&(G.dispose(),G=null),We.stop()};function _e(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=je.autoReset,O=H.enabled,X=H.autoUpdate,N=H.needsUpdate,q=H.type;pe(),je.autoReset=E,H.enabled=O,H.autoUpdate=X,H.needsUpdate=N,H.type=q}function Ne(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ze(E){const O=E.target;O.removeEventListener("dispose",ze),qe(O)}function qe(E){D(E),Ae.remove(E)}function D(E){const O=Ae.get(E).programs;O!==void 0&&(O.forEach(function(X){Ge.releaseProgram(X)}),E.isShaderMaterial&&Ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,X,N,q,Me){O===null&&(O=ie);const Ce=q.isMesh&&q.matrixWorld.determinant()<0,Pe=g0(E,O,X,N,q);fe.setMaterial(N,Ce);let De=X.index,Ve=1;N.wireframe===!0&&(De=Wt.getWireframeAttribute(X),Ve=2);const Fe=X.drawRange,Oe=X.attributes.position;let ut=Fe.start*Ve,ln=(Fe.start+Fe.count)*Ve;Me!==null&&(ut=Math.max(ut,Me.start*Ve),ln=Math.min(ln,(Me.start+Me.count)*Ve)),De!==null?(ut=Math.max(ut,0),ln=Math.min(ln,De.count)):Oe!=null&&(ut=Math.max(ut,0),ln=Math.min(ln,Oe.count));const si=ln-ut;if(si<0||si===1/0)return;I.setup(q,N,Pe,X,De);let tr,ct=le;if(De!==null&&(tr=lt.get(De),ct=Te,ct.setIndex(tr)),q.isMesh)N.wireframe===!0?(fe.setLineWidth(N.wireframeLinewidth*oe()),ct.setMode(1)):ct.setMode(4);else if(q.isLine){let Ue=N.linewidth;Ue===void 0&&(Ue=1),fe.setLineWidth(Ue*oe()),q.isLineSegments?ct.setMode(1):q.isLineLoop?ct.setMode(2):ct.setMode(3)}else q.isPoints?ct.setMode(0):q.isSprite&&ct.setMode(4);if(q.isInstancedMesh)ct.renderInstances(ut,si,q.count);else if(X.isInstancedBufferGeometry){const Ue=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Fl=Math.min(X.instanceCount,Ue);ct.renderInstances(ut,si,Fl)}else ct.render(ut,si)},this.compile=function(E,O){function X(N,q,Me){N.transparent===!0&&N.side===Tt&&N.forceSinglePass===!1?(N.side=_n,N.needsUpdate=!0,bn(N,q,Me),N.side=qi,N.needsUpdate=!0,bn(N,q,Me),N.side=Tt):bn(N,q,Me)}f=b.get(E),f.init(),y.push(f),E.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(h.physicallyCorrectLights),E.traverse(function(N){const q=N.material;if(q)if(Array.isArray(q))for(let Me=0;Me<q.length;Me++){const Ce=q[Me];X(Ce,E,N)}else X(q,E,N)}),y.pop(),f=null};let j=null;function te(E){j&&j(E)}function de(){We.stop()}function ye(){We.start()}const We=new i0;We.setAnimationLoop(te),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(E){j=E,ue.setAnimationLoop(E),E===null?We.stop():We.start()},ue.addEventListener("sessionstart",de),ue.addEventListener("sessionend",ye),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,O,_),f=b.get(E,y.length),f.init(),y.push(f),se.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J.setFromProjectionMatrix(se),V=this.localClippingEnabled,R=w.init(this.clippingPlanes,V),d=Qt.get(E,g.length),d.init(),g.push(d),St(E,O,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(K,z),R===!0&&w.beginShadows();const X=f.state.shadowsArray;if(H.render(X,E,O),R===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(d,E),f.setupLights(h.physicallyCorrectLights),O.isArrayCamera){const N=O.cameras;for(let q=0,Me=N.length;q<Me;q++){const Ce=N[q];Ft(d,E,Ce,Ce.viewport)}}else Ft(d,E,O);_!==null&&(be.updateMultisampleRenderTarget(_),be.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(h,E,O),I.resetDefaultState(),M=-1,x=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function St(E,O,X,N){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){N&&$.setFromMatrixPosition(E.matrixWorld).applyMatrix4(se);const Ce=ot.update(E),Pe=E.material;Pe.visible&&d.push(E,Ce,Pe,X,$.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==je.render.frame&&(E.skeleton.update(),E.skeleton.frame=je.render.frame),!E.frustumCulled||J.intersectsObject(E))){N&&$.setFromMatrixPosition(E.matrixWorld).applyMatrix4(se);const Ce=ot.update(E),Pe=E.material;if(Array.isArray(Pe)){const De=Ce.groups;for(let Ve=0,Fe=De.length;Ve<Fe;Ve++){const Oe=De[Ve],ut=Pe[Oe.materialIndex];ut&&ut.visible&&d.push(E,Ce,ut,X,$.z,Oe)}}else Pe.visible&&d.push(E,Ce,Pe,X,$.z,null)}}const Me=E.children;for(let Ce=0,Pe=Me.length;Ce<Pe;Ce++)St(Me[Ce],O,X,N)}function Ft(E,O,X,N){const q=E.opaque,Me=E.transmissive,Ce=E.transparent;f.setupLightsView(X),R===!0&&w.setGlobalState(h.clippingPlanes,X),Me.length>0&&er(q,O,X),N&&fe.viewport(A.copy(N)),q.length>0&&Je(q,O,X),Me.length>0&&Je(Me,O,X),Ce.length>0&&Je(Ce,O,X),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function er(E,O,X){const N=ve.isWebGL2;G===null&&(G=new Ir(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?zo:Dr,minFilter:ko,samples:N&&s===!0?4:0})),h.getDrawingBufferSize(F),N?G.setSize(F.x,F.y):G.setSize($c(F.x),$c(F.y));const q=h.getRenderTarget();h.setRenderTarget(G),h.clear();const Me=h.toneMapping;h.toneMapping=_i,Je(E,O,X),h.toneMapping=Me,be.updateMultisampleRenderTarget(G),be.updateRenderTargetMipmap(G),h.setRenderTarget(q)}function Je(E,O,X){const N=O.isScene===!0?O.overrideMaterial:null;for(let q=0,Me=E.length;q<Me;q++){const Ce=E[q],Pe=Ce.object,De=Ce.geometry,Ve=N===null?Ce.material:N,Fe=Ce.group;Pe.layers.test(X.layers)&&ri(Pe,O,X,De,Ve,Fe)}}function ri(E,O,X,N,q,Me){E.onBeforeRender(h,O,X,N,q,Me),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(h,O,X,N,E,Me),q.transparent===!0&&q.side===Tt&&q.forceSinglePass===!1?(q.side=_n,q.needsUpdate=!0,h.renderBufferDirect(X,O,N,q,E,Me),q.side=qi,q.needsUpdate=!0,h.renderBufferDirect(X,O,N,q,E,Me),q.side=Tt):h.renderBufferDirect(X,O,N,q,E,Me),E.onAfterRender(h,O,X,N,q,Me)}function bn(E,O,X){O.isScene!==!0&&(O=ie);const N=Ae.get(E),q=f.state.lights,Me=f.state.shadowsArray,Ce=q.state.version,Pe=Ge.getParameters(E,q.state,Me,O,X),De=Ge.getProgramCacheKey(Pe);let Ve=N.programs;N.environment=E.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(E.isMeshStandardMaterial?zt:yt).get(E.envMap||N.environment),Ve===void 0&&(E.addEventListener("dispose",ze),Ve=new Map,N.programs=Ve);let Fe=Ve.get(De);if(Fe!==void 0){if(N.currentProgram===Fe&&N.lightsStateVersion===Ce)return ed(E,Pe),Fe}else Pe.uniforms=Ge.getUniforms(E),E.onBuild(X,Pe,h),E.onBeforeCompile(Pe,h),Fe=Ge.acquireProgram(Pe,De),Ve.set(De,Fe),N.uniforms=Pe.uniforms;const Oe=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=w.uniform),ed(E,Pe),N.needsLights=_0(E),N.lightsStateVersion=Ce,N.needsLights&&(Oe.ambientLightColor.value=q.state.ambient,Oe.lightProbe.value=q.state.probe,Oe.directionalLights.value=q.state.directional,Oe.directionalLightShadows.value=q.state.directionalShadow,Oe.spotLights.value=q.state.spot,Oe.spotLightShadows.value=q.state.spotShadow,Oe.rectAreaLights.value=q.state.rectArea,Oe.ltc_1.value=q.state.rectAreaLTC1,Oe.ltc_2.value=q.state.rectAreaLTC2,Oe.pointLights.value=q.state.point,Oe.pointLightShadows.value=q.state.pointShadow,Oe.hemisphereLights.value=q.state.hemi,Oe.directionalShadowMap.value=q.state.directionalShadowMap,Oe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Oe.spotShadowMap.value=q.state.spotShadowMap,Oe.spotLightMatrix.value=q.state.spotLightMatrix,Oe.spotLightMap.value=q.state.spotLightMap,Oe.pointShadowMap.value=q.state.pointShadowMap,Oe.pointShadowMatrix.value=q.state.pointShadowMatrix);const ut=Fe.getUniforms(),ln=Wa.seqWithValue(ut.seq,Oe);return N.currentProgram=Fe,N.uniformsList=ln,Fe}function ed(E,O){const X=Ae.get(E);X.outputEncoding=O.outputEncoding,X.instancing=O.instancing,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function g0(E,O,X,N,q){O.isScene!==!0&&(O=ie),be.resetTextureUnits();const Me=O.fog,Ce=N.isMeshStandardMaterial?O.environment:null,Pe=_===null?h.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Rr,De=(N.isMeshStandardMaterial?zt:yt).get(N.envMap||Ce),Ve=N.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!N.normalMap&&!!X.attributes.tangent,Oe=!!X.morphAttributes.position,ut=!!X.morphAttributes.normal,ln=!!X.morphAttributes.color,si=N.toneMapped?h.toneMapping:_i,tr=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ct=tr!==void 0?tr.length:0,Ue=Ae.get(N),Fl=f.state.lights;if(R===!0&&(V===!0||E!==x)){const un=E===x&&N.id===M;w.setState(N,E,un)}let Mt=!1;N.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Fl.state.version||Ue.outputEncoding!==Pe||q.isInstancedMesh&&Ue.instancing===!1||!q.isInstancedMesh&&Ue.instancing===!0||q.isSkinnedMesh&&Ue.skinning===!1||!q.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==De||N.fog===!0&&Ue.fog!==Me||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==w.numPlanes||Ue.numIntersection!==w.numIntersection)||Ue.vertexAlphas!==Ve||Ue.vertexTangents!==Fe||Ue.morphTargets!==Oe||Ue.morphNormals!==ut||Ue.morphColors!==ln||Ue.toneMapping!==si||ve.isWebGL2===!0&&Ue.morphTargetsCount!==ct)&&(Mt=!0):(Mt=!0,Ue.__version=N.version);let nr=Ue.currentProgram;Mt===!0&&(nr=bn(N,O,q));let td=!1,Bs=!1,Ol=!1;const jt=nr.getUniforms(),ir=Ue.uniforms;if(fe.useProgram(nr.program)&&(td=!0,Bs=!0,Ol=!0),N.id!==M&&(M=N.id,Bs=!0),td||x!==E){if(jt.setValue(U,"projectionMatrix",E.projectionMatrix),ve.logarithmicDepthBuffer&&jt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),x!==E&&(x=E,Bs=!0,Ol=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const un=jt.map.cameraPosition;un!==void 0&&un.setValue(U,$.setFromMatrixPosition(E.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&jt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||q.isSkinnedMesh)&&jt.setValue(U,"viewMatrix",E.matrixWorldInverse)}if(q.isSkinnedMesh){jt.setOptional(U,q,"bindMatrix"),jt.setOptional(U,q,"bindMatrixInverse");const un=q.skeleton;un&&(ve.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),jt.setValue(U,"boneTexture",un.boneTexture,be),jt.setValue(U,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ul=X.morphAttributes;if((Ul.position!==void 0||Ul.normal!==void 0||Ul.color!==void 0&&ve.isWebGL2===!0)&&re.update(q,X,N,nr),(Bs||Ue.receiveShadow!==q.receiveShadow)&&(Ue.receiveShadow=q.receiveShadow,jt.setValue(U,"receiveShadow",q.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(ir.envMap.value=De,ir.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Bs&&(jt.setValue(U,"toneMappingExposure",h.toneMappingExposure),Ue.needsLights&&v0(ir,Ol),Me&&N.fog===!0&&En.refreshFogUniforms(ir,Me),En.refreshMaterialUniforms(ir,N,Z,P,G),Wa.upload(U,Ue.uniformsList,ir,be)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Wa.upload(U,Ue.uniformsList,ir,be),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&jt.setValue(U,"center",q.center),jt.setValue(U,"modelViewMatrix",q.modelViewMatrix),jt.setValue(U,"normalMatrix",q.normalMatrix),jt.setValue(U,"modelMatrix",q.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const un=N.uniformsGroups;for(let Bl=0,x0=un.length;Bl<x0;Bl++)if(ve.isWebGL2){const nd=un[Bl];ce.update(nd,nr),ce.bind(nd,nr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nr}function v0(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function _0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,O,X){Ae.get(E.texture).__webglTexture=O,Ae.get(E.depthTexture).__webglTexture=X;const N=Ae.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=X===void 0,N.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const X=Ae.get(E);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,X=0){_=E,m=O,v=X;let N=!0,q=null,Me=!1,Ce=!1;if(E){const De=Ae.get(E);De.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),N=!1):De.__webglFramebuffer===void 0?be.setupRenderTarget(E):De.__hasExternalTextures&&be.rebindTextures(E,Ae.get(E.texture).__webglTexture,Ae.get(E.depthTexture).__webglTexture);const Ve=E.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const Fe=Ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(q=Fe[O],Me=!0):ve.isWebGL2&&E.samples>0&&be.useMultisampledRTT(E)===!1?q=Ae.get(E).__webglMultisampledFramebuffer:q=Fe,A.copy(E.viewport),L.copy(E.scissor),S=E.scissorTest}else A.copy(k).multiplyScalar(Z).floor(),L.copy(Y).multiplyScalar(Z).floor(),S=Q;if(fe.bindFramebuffer(36160,q)&&ve.drawBuffers&&N&&fe.drawBuffers(E,q),fe.viewport(A),fe.scissor(L),fe.setScissorTest(S),Me){const De=Ae.get(E.texture);U.framebufferTexture2D(36160,36064,34069+O,De.__webglTexture,X)}else if(Ce){const De=Ae.get(E.texture),Ve=O||0;U.framebufferTextureLayer(36160,36064,De.__webglTexture,X||0,Ve)}M=-1},this.readRenderTargetPixels=function(E,O,X,N,q,Me,Ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){fe.bindFramebuffer(36160,Pe);try{const De=E.texture,Ve=De.format,Fe=De.type;if(Ve!==In&&C.convert(Ve)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Fe===zo&&(xe.has("EXT_color_buffer_half_float")||ve.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Fe!==Dr&&C.convert(Fe)!==U.getParameter(35738)&&!(Fe===xr&&(ve.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-N&&X>=0&&X<=E.height-q&&U.readPixels(O,X,N,q,C.convert(Ve),C.convert(Fe),Me)}finally{const De=_!==null?Ae.get(_).__webglFramebuffer:null;fe.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(E,O,X=0){const N=Math.pow(2,-X),q=Math.floor(O.image.width*N),Me=Math.floor(O.image.height*N);be.setTexture2D(O,0),U.copyTexSubImage2D(3553,X,0,0,E.x,E.y,q,Me),fe.unbindTexture()},this.copyTextureToTexture=function(E,O,X,N=0){const q=O.image.width,Me=O.image.height,Ce=C.convert(X.format),Pe=C.convert(X.type);be.setTexture2D(X,0),U.pixelStorei(37440,X.flipY),U.pixelStorei(37441,X.premultiplyAlpha),U.pixelStorei(3317,X.unpackAlignment),O.isDataTexture?U.texSubImage2D(3553,N,E.x,E.y,q,Me,Ce,Pe,O.image.data):O.isCompressedTexture?U.compressedTexSubImage2D(3553,N,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,Ce,O.mipmaps[0].data):U.texSubImage2D(3553,N,E.x,E.y,Ce,Pe,O.image),N===0&&X.generateMipmaps&&U.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(E,O,X,N,q=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=E.max.x-E.min.x+1,Ce=E.max.y-E.min.y+1,Pe=E.max.z-E.min.z+1,De=C.convert(N.format),Ve=C.convert(N.type);let Fe;if(N.isData3DTexture)be.setTexture3D(N,0),Fe=32879;else if(N.isDataArrayTexture)be.setTexture2DArray(N,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,N.flipY),U.pixelStorei(37441,N.premultiplyAlpha),U.pixelStorei(3317,N.unpackAlignment);const Oe=U.getParameter(3314),ut=U.getParameter(32878),ln=U.getParameter(3316),si=U.getParameter(3315),tr=U.getParameter(32877),ct=X.isCompressedTexture?X.mipmaps[0]:X.image;U.pixelStorei(3314,ct.width),U.pixelStorei(32878,ct.height),U.pixelStorei(3316,E.min.x),U.pixelStorei(3315,E.min.y),U.pixelStorei(32877,E.min.z),X.isDataTexture||X.isData3DTexture?U.texSubImage3D(Fe,q,O.x,O.y,O.z,Me,Ce,Pe,De,Ve,ct.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Fe,q,O.x,O.y,O.z,Me,Ce,Pe,De,ct.data)):U.texSubImage3D(Fe,q,O.x,O.y,O.z,Me,Ce,Pe,De,Ve,ct),U.pixelStorei(3314,Oe),U.pixelStorei(32878,ut),U.pixelStorei(3316,ln),U.pixelStorei(3315,si),U.pixelStorei(32877,tr),q===0&&N.generateMipmaps&&U.generateMipmap(Fe),fe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?be.setTextureCube(E,0):E.isData3DTexture?be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?be.setTexture2DArray(E,0):be.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){m=0,v=0,_=null,fe.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Xw extends l0{}Xw.prototype.isWebGL1Renderer=!0;class qw extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const Tp={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Yw{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const g=u[d],y=u[d+1];if(g.global&&(g.lastIndex=0),g.test(c))return y}return null}}}const $w=new Yw;class u0{constructor(e){this.manager=e!==void 0?e:$w,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Zw extends u0{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Tp.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Oo("img");function l(){c(),Tp.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Kw extends u0{constructor(e){super(e)}load(e,n,i,r){const s=new an,o=new Zw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Qw{constructor(e,n,i=0,r=1/0){this.ray=new Zg(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Zf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Kc(e,this,i,n),i.sort(Cp),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Kc(e[r],this,i,n);return i.sort(Cp),i}}function Cp(t,e){return t.distance-e.distance}function Kc(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Kc(r[s],e,n,!0)}}class Qc{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yf);const Ap={type:"change"},Xu={type:"start"},Lp={type:"end"};class Jw extends Fr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:Vr.ROTATE,TWO:Vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Qt),this._domElementKeyEvents=C},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ap),i.update(),s=r.NONE},this.update=function(){const C=new B,I=new Nr().setFromUnitVectors(e.up,new B(0,1,0)),ce=I.clone().invert(),pe=new B,ue=new Nr,_e=2*Math.PI;return function(){const Ne=i.object.position;C.copy(Ne).sub(i.target),C.applyQuaternion(I),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&T(L()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ze=i.minAzimuthAngle,qe=i.maxAzimuthAngle;return isFinite(ze)&&isFinite(qe)&&(ze<-Math.PI?ze+=_e:ze>Math.PI&&(ze-=_e),qe<-Math.PI?qe+=_e:qe>Math.PI&&(qe-=_e),ze<=qe?a.theta=Math.max(ze,Math.min(qe,a.theta)):a.theta=a.theta>(ze+qe)/2?Math.max(ze,a.theta):Math.min(qe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),C.setFromSpherical(a),C.applyQuaternion(ce),Ne.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||pe.distanceToSquared(i.object.position)>o||8*(1-ue.dot(i.object.quaternion))>o?(i.dispatchEvent(Ap),pe.copy(i.object.position),ue.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",H),i.domElement.removeEventListener("pointerdown",yt),i.domElement.removeEventListener("pointercancel",Wt),i.domElement.removeEventListener("wheel",En),i.domElement.removeEventListener("pointermove",zt),i.domElement.removeEventListener("pointerup",lt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Qt)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Qc,l=new Qc;let u=1;const c=new B;let d=!1;const f=new Re,g=new Re,y=new Re,h=new Re,p=new Re,m=new Re,v=new Re,_=new Re,M=new Re,x=[],A={};function L(){return 2*Math.PI/60/60*i.autoRotateSpeed}function S(){return Math.pow(.95,i.zoomSpeed)}function T(C){l.theta-=C}function P(C){l.phi-=C}const Z=function(){const C=new B;return function(ce,pe){C.setFromMatrixColumn(pe,0),C.multiplyScalar(-ce),c.add(C)}}(),K=function(){const C=new B;return function(ce,pe){i.screenSpacePanning===!0?C.setFromMatrixColumn(pe,1):(C.setFromMatrixColumn(pe,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(ce),c.add(C)}}(),z=function(){const C=new B;return function(ce,pe){const ue=i.domElement;if(i.object.isPerspectiveCamera){const _e=i.object.position;C.copy(_e).sub(i.target);let ge=C.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),Z(2*ce*ge/ue.clientHeight,i.object.matrix),K(2*pe*ge/ue.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Z(ce*(i.object.right-i.object.left)/i.object.zoom/ue.clientWidth,i.object.matrix),K(pe*(i.object.top-i.object.bottom)/i.object.zoom/ue.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(C){i.object.isPerspectiveCamera?u/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(C){i.object.isPerspectiveCamera?u*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(C){f.set(C.clientX,C.clientY)}function J(C){v.set(C.clientX,C.clientY)}function R(C){h.set(C.clientX,C.clientY)}function V(C){g.set(C.clientX,C.clientY),y.subVectors(g,f).multiplyScalar(i.rotateSpeed);const I=i.domElement;T(2*Math.PI*y.x/I.clientHeight),P(2*Math.PI*y.y/I.clientHeight),f.copy(g),i.update()}function G(C){_.set(C.clientX,C.clientY),M.subVectors(_,v),M.y>0?k(S()):M.y<0&&Y(S()),v.copy(_),i.update()}function se(C){p.set(C.clientX,C.clientY),m.subVectors(p,h).multiplyScalar(i.panSpeed),z(m.x,m.y),h.copy(p),i.update()}function F(C){C.deltaY<0?Y(S()):C.deltaY>0&&k(S()),i.update()}function $(C){let I=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?P(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),I=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?P(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),I=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),I=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),I=!0;break}I&&(C.preventDefault(),i.update())}function ie(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const C=.5*(x[0].pageX+x[1].pageX),I=.5*(x[0].pageY+x[1].pageY);f.set(C,I)}}function oe(){if(x.length===1)h.set(x[0].pageX,x[0].pageY);else{const C=.5*(x[0].pageX+x[1].pageX),I=.5*(x[0].pageY+x[1].pageY);h.set(C,I)}}function U(){const C=x[0].pageX-x[1].pageX,I=x[0].pageY-x[1].pageY,ce=Math.sqrt(C*C+I*I);v.set(0,ce)}function Ee(){i.enableZoom&&U(),i.enablePan&&oe()}function xe(){i.enableZoom&&U(),i.enableRotate&&ie()}function ve(C){if(x.length==1)g.set(C.pageX,C.pageY);else{const ce=Te(C),pe=.5*(C.pageX+ce.x),ue=.5*(C.pageY+ce.y);g.set(pe,ue)}y.subVectors(g,f).multiplyScalar(i.rotateSpeed);const I=i.domElement;T(2*Math.PI*y.x/I.clientHeight),P(2*Math.PI*y.y/I.clientHeight),f.copy(g)}function fe(C){if(x.length===1)p.set(C.pageX,C.pageY);else{const I=Te(C),ce=.5*(C.pageX+I.x),pe=.5*(C.pageY+I.y);p.set(ce,pe)}m.subVectors(p,h).multiplyScalar(i.panSpeed),z(m.x,m.y),h.copy(p)}function je(C){const I=Te(C),ce=C.pageX-I.x,pe=C.pageY-I.y,ue=Math.sqrt(ce*ce+pe*pe);_.set(0,ue),M.set(0,Math.pow(_.y/v.y,i.zoomSpeed)),k(M.y),v.copy(_)}function Ae(C){i.enableZoom&&je(C),i.enablePan&&fe(C)}function be(C){i.enableZoom&&je(C),i.enableRotate&&ve(C)}function yt(C){i.enabled!==!1&&(x.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",zt),i.domElement.addEventListener("pointerup",lt)),ne(C),C.pointerType==="touch"?b(C):ot(C))}function zt(C){i.enabled!==!1&&(C.pointerType==="touch"?w(C):Ge(C))}function lt(C){re(C),x.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",zt),i.domElement.removeEventListener("pointerup",lt)),i.dispatchEvent(Lp),s=r.NONE}function Wt(C){re(C)}function ot(C){let I;switch(C.button){case 0:I=i.mouseButtons.LEFT;break;case 1:I=i.mouseButtons.MIDDLE;break;case 2:I=i.mouseButtons.RIGHT;break;default:I=-1}switch(I){case Br.DOLLY:if(i.enableZoom===!1)return;J(C),s=r.DOLLY;break;case Br.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;R(C),s=r.PAN}else{if(i.enableRotate===!1)return;Q(C),s=r.ROTATE}break;case Br.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;Q(C),s=r.ROTATE}else{if(i.enablePan===!1)return;R(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Xu)}function Ge(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;V(C);break;case r.DOLLY:if(i.enableZoom===!1)return;G(C);break;case r.PAN:if(i.enablePan===!1)return;se(C);break}}function En(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Xu),F(C),i.dispatchEvent(Lp))}function Qt(C){i.enabled===!1||i.enablePan===!1||$(C)}function b(C){switch(le(C),x.length){case 1:switch(i.touches.ONE){case Vr.ROTATE:if(i.enableRotate===!1)return;ie(),s=r.TOUCH_ROTATE;break;case Vr.PAN:if(i.enablePan===!1)return;oe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Vr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ee(),s=r.TOUCH_DOLLY_PAN;break;case Vr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Xu)}function w(C){switch(le(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ve(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;fe(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ae(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;be(C),i.update();break;default:s=r.NONE}}function H(C){i.enabled!==!1&&C.preventDefault()}function ne(C){x.push(C)}function re(C){delete A[C.pointerId];for(let I=0;I<x.length;I++)if(x[I].pointerId==C.pointerId){x.splice(I,1);return}}function le(C){let I=A[C.pointerId];I===void 0&&(I=new Re,A[C.pointerId]=I),I.set(C.pageX,C.pageY)}function Te(C){const I=C.pointerId===x[0].pointerId?x[1]:x[0];return A[I.pointerId]}i.domElement.addEventListener("contextmenu",H),i.domElement.addEventListener("pointerdown",yt),i.domElement.addEventListener("pointercancel",Wt),i.domElement.addEventListener("wheel",En,{passive:!1}),this.update()}}class eE extends dt{constructor(e=1,n=16,i=new Ke("#727272"),r=2e3){const s=new $i(2,2,1,1),o=new Yi({side:Tt,uniforms:{uSize1:{value:e},uSize2:{value:n},uColor:{value:i},uDistance:{value:r}},transparent:!0,alphaTest:.5,vertexShader:`
            
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
            
            `,extensions:{derivatives:!0}});super(s,o),this.frustumCulled=!1}}let Nn,Rn,Cn;function tE(){Nn=new qw,Nn.background=new Ke("#C6C6C6"),Rn=new Dn(60,(window.innerWidth-300)/window.innerHeight,.1,1e3),Rn.position.set(0,3,8),Rn.rotation.order="YXZ",Cn=new l0({antialias:!0}),Cn.setSize(window.innerWidth-300,window.innerHeight),Cn.setPixelRatio((window.innerWidth-300)/window.innerHeight),Cn.toneMappingExposure=1,Cn.shadowMap.enabled=!0,Cn.shadowMap.type=Ug,document.body.appendChild(Cn.domElement);const t=new eE;t.position.set(8.5,-.5,8.5),Nn.add(t);const e=new dt(new gn(1e5,1e5,1e-5),new et({color:16776960,visible:!1}));e.rotation.set(Math.PI/2,0,0),e.position.set(0,-.5,0),e.name="helpPlane",Nn.add(e),n();function n(){requestAnimationFrame(n),Se&&Se.update(),Cn.render(Nn,Rn)}window.addEventListener("resize",i),document.oncontextmenu=document.body.oncontextmenu=function(){return!1},window.addEventListener("beforeunload",function(r){return r.stopPropagation(),r.preventDefault(),!1},!0);function i(){Cn.domElement.getBoundingClientRect(),Cn.setSize(window.innerWidth-300,window.innerHeight),Cn.setPixelRatio((window.innerWidth-300)/window.innerHeight),Rn.aspect=(window.innerWidth-300)/window.innerHeight,Rn.updateProjectionMatrix()}}let Se;const fr=new Kw;let qu=!0,ke,Lt,Pt;c0("https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/deepslate_diamond_ore.png");async function c0(t){fr.load(t,e=>{e&&f0(e)})}function f0(t){Pt=void 0,Lt=void 0;let e=0;Et.includes("side")?(fr.load(fi.filter(i=>i.name.includes(Et.slice(0,Et.length-4).replaceAll(" ","_")+"bottom"))[0]?.download_url,i=>{Pt=i,e++,n()},()=>{},()=>{e++,n()}),fr.load(fi.filter(i=>i.name.includes(Et.slice(0,Et.length-4).replaceAll(" ","_")+"top"))[0]?.download_url,i=>{Lt=i,e++,n()},()=>{},()=>{e++,n()})):Et.includes("log")?(fr.load(fi.filter(i=>i.name.includes(Et.replaceAll(" ","_")+"_bottom"))[0]?.download_url,i=>{Pt=i,e++,n()},()=>{},()=>{e++,n()}),fr.load(fi.filter(i=>i.name.includes(Et.replaceAll(" ","_")+"_top"))[0]?.download_url,i=>{Lt=i,e++,n()},()=>{},()=>{e++,n()})):fi.filter(i=>i.name.includes(Et.replaceAll(" ","_")+"_top"))?fr.load(Lt=fi.filter(i=>i.name.includes(Et.replaceAll(" ","_")+"_top"))[0]?.download_url,i=>{Lt=i,e+=2,n()},()=>{},()=>{e+=2,n()}):fi.filter(i=>i.name.includes(Et.replaceAll(" ","_")+"_bottom"))&&fr.load(Pt=fi.filter(i=>i.name.includes(Et.replaceAll(" ","_")+"_bottom"))[0]?.download_url,i=>{Pt=i,e+=2,n()},()=>{},()=>{e+=2,n()}),n();function n(){if(e>1||qu){ke=t,Pt||(Pt=Lt||ke),Lt||(Lt=Pt||ke);let i=[Pt,Lt,ke];t.format=In,i.forEach(c=>{c&&(c.minFilter=Dt,c.magFilter=Dt,c.wrapS=Wi,c.wrapT=Wi)});const r=16,s=16,o=ke.image.width,a=ke.image.height,l=o/a,u=r/s;l>u?ke.repeat.set(r/o,1):ke.repeat.set(1,s/a),Uo(),qu&&(iE(),is(0,0,0),qu=!1)}}}function Qf(){let t=!0;return p0.forEach(e=>{if(Et.includes(e)&&!Et.includes("block"))return t=!1}),t}function Uo(){if(Zi)me.position.set(Math.round(W.point.x),Math.abs(Math.round(W.point.y+.001)),Math.round(W.point.z)),He.position.set(Math.round(W.point.x),Math.abs(Math.round(W.point.y+.001)),Math.round(W.point.z));else{if(Qf()){let t=[new et({map:Pt||Lt||ke,transparent:!0,opacity:.5,wireframe:!1,depthWrite:!1,alphaTest:.5}),new et({map:Lt||Pt||ke,transparent:!0,opacity:.5,wireframe:!1,depthWrite:!1,alphaTest:.5}),new et({map:ke,transparent:!0,opacity:.5,wireframe:!1,depthWrite:!1,alphaTest:.5})];me.material=t,me.visible=!0,He.visible=!1,me.position.set(He.position.x,He.position.y,He.position.z)}else me.visible=!1,He.visible=!0,He.position.set(me.position.x,me.position.y,me.position.z),He.children.forEach(t=>{t.material=new et({wireframe:!1,opacity:.5,transparent:!0,map:ke,depthWrite:!1,side:Tt,alphaTest:.5})}),He.children[2].material=new et({wireframe:!1,opacity:0,transparent:!0,map:ke,depthWrite:!1});yn=="Remove"?(me.material.forEach(t=>t.map=null),me.material.forEach(t=>t.opacity=1),me.material.forEach(t=>t.transparent=!0),me.material.forEach(t=>t.wireframe=!0),me.material.forEach(t=>t.needsUpdate=!0),me.visible=!0,me.material.forEach(t=>t.visible=!0)):yn=="Inspect"&&(me.visible=!1,He.visible=!1)}}function is(t,e,n){let i,r;if(Qf()){console.log(ja),ke&&(ke.wrapS=ke.wrapT=Wi,ke.repeat.set(16/ke.image.width,16/ke.image.height)),Lt&&(Lt.wrapS=Lt.wrapT=Wi,Lt.repeat.set(16/ke.image.width,16/ke.image.height)),Pt&&(Pt.wrapS=Pt.wrapT=Wi,Pt.repeat.set(16/ke.image.width,16/ke.image.height));let s,o,a;a=new et({map:Pt||Lt||ke,transparent:!0,side:Tt}),o=new et({map:Lt||Pt||ke,transparent:!0,side:Tt}),s=new et({map:ke,transparent:!0,side:Tt});let l;if(ja=="Slabs"){l=new gn(1,.5,1,1,1,1);let u=new dt(new gn(1,1,1,1,1,1),new et({map:ke,opacity:0,transparent:!0,depthWrite:!1})),c=new dt(l,s);c.position.set(0,-.25,0),c.name="slabs",u.name="slabsHelped",i=new yr,i.add(c),i.add(u)}else ja=="Stairs"||(l=new gn(1,1,1,1,1,1),l.groups.forEach((u,c)=>{c===2?u.materialIndex=0:c===0||c===1||c===4||c===5?u.materialIndex=1:u.materialIndex=2}),i=new dt(l,[o,s,a]));Nn.add(i),i.rotation.set(me.rotation.x,me.rotation.y,me.rotation.z)}else{let s=new dt(new $i(1,1),new et({map:ke,transparent:!0,side:Tt,depthWrite:!1})),o=new dt(new $i(1,1),new et({map:ke,transparent:!0,side:Tt,depthWrite:!1}));r=new dt(new gn(1,1,1),new et({map:ke,opacity:0,transparent:!0,depthWrite:!1})),o.rotation.set(0,Math.PI/2,0),i=new yr,i.add(s),i.add(o),i.add(r),r.textureName=Et,i.rotation.set(He.rotation.x,He.rotation.y,He.rotation.z)}i.textureName=Et,Nn.add(i),i.position.set(t,e,n)}let Zi=!1,nE=[new et({color:"white",wireframe:!0}),new et({color:"white",wireframe:!0}),new et({color:"white",wireframe:!0})],me=new dt(new gn(1,1,1),nE);me.geometry.groups.forEach((t,e)=>{e===2?t.materialIndex=1:e===0||e===1||e===4||e===5?t.materialIndex=2:t.materialIndex=0});let He=new yr,d0=new dt(new $i(1,1),new et({transparent:!0,side:Tt,depthWrite:!1})),Jf=new dt(new $i(1,1),new et({transparent:!0,side:Tt,depthWrite:!1})),h0=new dt(new gn(1,1,1),new et({opacity:0,transparent:!0,depthWrite:!1}));d0.name="hoverBlock";Jf.name="hoverBlock";h0.name="hoverBlock";Jf.rotation.set(0,Math.PI/2,0);He.add(d0);He.add(Jf);He.add(h0);He.name="hoverBlock";me.name="hoverBlock";function iE(){Se=new Jw(Rn,Cn.domElement),Se.target.set(0,0,0),Se.autoRotate=!1,Se.autoRotateSpeed=1,Se.enableDamping=!0,Se.dampingFactor=.05,Se.enablePan=!0,Se.enableZoom=!1,document.addEventListener("keydown",i=>{i.keyCode===16&&(Zi=!0,me.visible=!1,He.visible=!1,yn!=="Inspect"&&(Se.mouseButtons={LEFT:2,MIDDLE:1,RIGHT:0},Se.enableZoom=!0))}),document.addEventListener("keyup",i=>{i.keyCode===16&&(Zi=!1,me.visible=!0,He.visible=!0,yn=="Inspect"&&(me.visible=!1,He.visible=!1),yn!=="Inspect"&&(Se.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},Uo(),Se.enableZoom=!1))}),Se.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},Se.touches={ONE:void 0,TWO:void 0},Se.screenSpacePanning=!1,Se.minDistance=1,Se.maxDistance=200,Se.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},Se.listenToKeyEvents(window),Se.keyPanSpeed=50;function t(i,r,s){const o=new Qc().setFromVector3(Rn.position.clone().sub(Se.target));o.theta+=i,o.phi+=r,o.radius+=s;const a=1e-6;o.phi=Math.max(a,Math.min(Math.PI-a,o.phi)),Rn.position.setFromSpherical(o).add(Se.target),Rn.lookAt(Se.target)}const e=.1,n=1;document.addEventListener("keydown",i=>{switch(i.code){case"ArrowLeft":t(-e,0,0);break;case"ArrowUp":t(0,-e,0);break;case"ArrowRight":t(e,0,0);break;case"ArrowDown":t(0,e,0);break;case"KeyO":t(0,0,-n);break;case"KeyP":t(0,0,n);break}}),Se.rotateCamera=!0,document.querySelector("canvas")?.addEventListener("mousemove",sE),Nn.add(me),Nn.add(He),Se.addEventListener("change",()=>{m0()}),document.querySelector("canvas")?.addEventListener("mousedown",i=>{(i.button==1||i.buttons==4)&&oE(i)}),document.querySelector("canvas")?.addEventListener("wheel",rE),document.querySelector("canvas")?.addEventListener("click",dr),document.querySelector("canvas")?.addEventListener("contextmenu",hr)}const Pa=new Qw,Yu=new Re;function Bo(t){Yu.x=(t.clientX-300)/(window.innerWidth-300)*2-1,Yu.y=-(t.clientY/window.innerHeight)*2+1,Pa.setFromCamera(Yu,Rn);let e=Pa.intersectObjects(Nn.children);if(e=e.filter(n=>n.object.name!=="hoverBlock"),e=e.filter(n=>n.object.geometry instanceof gn&&n.object.name!=="helpedCube"&&n.object.name!=="slabsHelped"),e.length>0){let n;if(e[0].object.name!=="helpPlane"){if(e[0].object.name!=="slabs")n={x:e[0].object.rotation.x,y:e[0].object.rotation.y,z:e[0].object.rotation.z},e[0].object.rotation.set(0,0,0),e[0].object.updateMatrixWorld(!0),e=Pa.intersectObjects([e[0].object]),n.x&&n.y&&n.z&&e[0].object.rotation.set(n.x,n.y,n.z);else if(n={x:e[0].object.parent?.rotation.x,y:e[0].object.parent?.rotation.y,z:e[0].object.parent?.rotation.z},e[0].object.parent?.rotation.set(0,0,0),e[0].object.parent?.updateMatrixWorld(!0),e[0].object.parent?.children[1]?(e=Pa.intersectObjects([e[0].object.parent?.children[1]]),n.x!==void 0&&n.y!==void 0&&n.z!==void 0&&e[0].object.parent?.rotation.set(n.x,n.y,n.z)):n.x&&n.y&&n.z&&e[0].object.parent?.rotation.set(n.x,n.y,n.z),e[0].object.parent&&(console.log(e[0].object),e[0].object.parent&&(console.log(e[0].object.parent.position),console.log(e[0].face?.normal))),e[0].object.parent)return{face:{normal:e[0].face?.normal},object:{name:"slabs",parent:{position:e[0].object.parent.position,children:{length:2}}}}}}return e[0]}function dr(t){!Zi&&yn!=="Inspect"&&(W=Bo(t),console.log(W),W&&(W.object.name=="helpPlane"?is(Math.round(W.point.x),Math.abs(Math.round(W.point.y+.001)),Math.round(W.point.z)):(yn=="Build",W.face&&(W.object.parent&&(W.object.parent.children.length==3||W.object.name=="slabs")?is(Math.round(W.object.parent.position.x+W.face.normal.x),Math.abs(Math.round(W.object.parent.position.y+.001+W.face.normal.y)),Math.round(W.object.parent.position.z+W.face.normal.z)):is(Math.round(W.object.position.x+W.face.normal.x),Math.abs(Math.round(W.object.position.y+.001+W.face.normal.y)),Math.round(W.object.position.z+W.face.normal.z))))))}function hr(t){!Zi&&yn!=="Inspect"&&(W=Bo(t),W&&W.object.name!=="helpPlane"&&W.object.name!=="hoverBlock"&&(W.object.parent&&(W.object.parent.children.length==3||W.object.name=="slabs")?Nn.remove(W.object.parent):Nn.remove(W.object)))}function rE(t){let e=t.deltaY/Math.abs(t.deltaY);Zi||(e==1?me.rotation.z<Math.PI*2?me.rotation.set(me.rotation.x,me.rotation.y,me.rotation.z+Math.PI*.5):me.rotation.y<Math.PI*2?me.rotation.set(me.rotation.x,me.rotation.y+Math.PI*.5,0):me.rotation.x<Math.PI*2?me.rotation.set(me.rotation.x+Math.PI*.5,0,0):me.rotation.set(0,0,0):me.rotation.z>-Math.PI*2?me.rotation.set(me.rotation.x,me.rotation.y,me.rotation.z-Math.PI*.5):me.rotation.y>-Math.PI*2?me.rotation.set(me.rotation.x,me.rotation.y-Math.PI*.5,0):me.rotation.x>-Math.PI*2?me.rotation.set(me.rotation.x-Math.PI*.5,0,0):me.rotation.set(0,0,0),He.rotation.set(me.rotation.x,me.rotation.y,me.rotation.z))}let Vt,W;function sE(t){if(Zi)W=Bo(t);else if(Qf()?(Vt=me,He.visible=!1):(Vt=He,me.visible=!1),yn=="Remove"&&(Vt=me,He.visible=!1,me.visible=!0),!Zi&&yn!=="Inspect"&&(Vt.children.length>0&&Vt.children&&(Vt.visible=!0),W=Bo(t),W))if(W.object.name=="helpPlane")me.position.set(Math.round(W.point.x),Math.abs(Math.round(W.point.y+.001)),Math.round(W.point.z)),He.position.set(Math.round(W.point.x),Math.abs(Math.round(W.point.y+.001)),Math.round(W.point.z));else if(yn=="Build"){let e=new et({wireframe:!1,opacity:.5,transparent:!0,map:ke,depthWrite:!1,side:Tt});Vt.children.length>0?(Vt.children.forEach(n=>n.material=e),Vt.children[2].material=new et({wireframe:!1,opacity:0,transparent:!0,map:ke,depthWrite:!1})):Vt.material.forEach(n=>e),W.face&&(W.object.parent&&(W.object.parent.children.length==3||W.object.name=="slabs")?(me.position.set(Math.round(W.object.parent.position.x+W.face.normal.x),Math.abs(Math.round(W.object.parent.position.y+.001+W.face.normal.y)),Math.round(W.object.parent.position.z+W.face.normal.z)),He.position.set(Math.round(W.object.parent.position.x+W.face.normal.x),Math.abs(Math.round(W.object.parent.position.y+.001+W.face.normal.y)),Math.round(W.object.parent.position.z+W.face.normal.z))):W.object.parent&&(W.object.parent.children.length==3||W.object.name=="slabs")?(me.position.set(Math.round(W.object.position.x+W.face.normal.x),Math.abs(Math.round(W.object.position.y+.001+W.face.normal.y)),Math.round(W.object.position.z+W.face.normal.z)),He.position.set(Math.round(W.object.position.x+W.face.normal.x),Math.abs(Math.round(W.object.position.y+.001+W.face.normal.y)),Math.round(W.object.position.z+W.face.normal.z))):(Vt.position.set(Math.round(W.object.position.x+W.face.normal.x),Math.abs(Math.round(W.object.position.y+.001+W.face.normal.y)),Math.round(W.object.position.z+W.face.normal.z)),He.position.set(Math.round(W.object.position.x+W.face.normal.x),Math.abs(Math.round(W.object.position.y+.001+W.face.normal.y)),Math.round(W.object.position.z+W.face.normal.z))))}else{let e=new et({wireframe:!0,opacity:1,transparent:!0,map:null});Vt.children.length>0?Vt.children.forEach(n=>n.material.forEach(i=>e)):Vt.material.forEach(n=>e),W.object.parent&&(W.object.parent.children.length==3||W.object.name=="slabs")?Vt.position.set(Math.round(W.object.parent.position.x),Math.abs(Math.round(W.object.parent.position.y+.001)),Math.round(W.object.parent.position.z)):Vt.position.set(Math.round(W.object.position.x),Math.abs(Math.round(W.object.position.y+.001)),Math.round(W.object.position.z))}}function oE(t){if(W=Bo(t),W&&W.object.name!=="helpPlane"&&W.object.name!=="hoverBlock"){const e=W.object,r=e.material;Array.isArray(r)?ke=r[1].map:ke=r.map,lE(W.object.textureName),f0(ke),me.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),He.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),Uo()}}function aE(){switch(yn){case"Build":Se.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},document.querySelector("canvas")?.removeEventListener("click",dr),document.querySelector("canvas")?.removeEventListener("contextmenu",hr),document.querySelector("canvas")?.removeEventListener("click",hr),document.querySelector("canvas")?.removeEventListener("contextmenu",dr),document.querySelector("canvas")?.addEventListener("click",dr),document.querySelector("canvas")?.addEventListener("contextmenu",hr),Uo(),Se.enableZoom=!1;break;case"Inspect":me.visible=!1,He.visible=!1,Se.mouseButtons={LEFT:0,MIDDLE:1,RIGHT:2},Se.enableZoom=!0;break;case"Remove":Se.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},document.querySelector("canvas")?.removeEventListener("click",dr),document.querySelector("canvas")?.removeEventListener("contextmenu",hr),document.querySelector("canvas")?.removeEventListener("click",hr),document.querySelector("canvas")?.removeEventListener("contextmenu",dr),document.querySelector("canvas")?.addEventListener("click",hr),document.querySelector("canvas")?.addEventListener("contextmenu",dr),Uo(),Se.enableZoom=!1;break}}let Et="deepslate_diamond_ore.png",p0=[],fi=[];function lE(t){Et=t}const uE=()=>{const[t,e]=Jt.useState([]);return Jt.useEffect(()=>{(async()=>{let r=(await hh(()=>import("./textures-5599cd7a.js"),[])).default;r=r.filter(o=>o.name.slice(-7)!==".mcmeta"),fi=r,r=r.filter(o=>!o.name.includes("top")&&!o.name.includes("bottom")&&!o.name.includes("anvil")&&!o.name.includes("bell")&&!o.name.includes("candle")&&!o.name.includes("redstone_dust")),p0=(await hh(()=>import("./noCubeBlocks-30ca2709.js"),[])).default,e(r)})()},[]),we("div",{className:"grid grid-cols-4 w-full",children:t.map(n=>mt("div",{onClick:cE,className:"relative basis-1/3 flex flex-wrap justify-center cursor-pointer",children:[we("div",{className:"w-full h-14 flex justify-center",children:we("img",{src:n.download_url,alt:"block",className:"textures object-cover w-14 h-14 aspect-square select-none pointer-events-none"})}),we("label",{id:n.name.slice(0,n.name.length-4).replaceAll("_"," "),className:"break-words text-sm select-none",children:n.name.slice(0,n.name.length-4).replaceAll("_"," ").replaceAll("side","").replaceAll("log","").replaceAll("front","").replaceAll("end","")})]},n.name))})};function cE(t){c0(t.currentTarget.querySelector("img").getAttribute("src")),Et=t.currentTarget.querySelector("label").getAttribute("id")}let yn="Build",m0,ja="Blocks";function fE(){const[t,e]=Jt.useState(""),n=x=>{e(x.target.value)};t||e("My first build");const[i,r]=Jt.useState(""),s=x=>{r(String(Math.max(Math.min(Number(x.target.value),Se.maxDistance),Se.minDistance))),Rn.position.setLength(Number(Math.max(Math.min(Se.maxDistance-Number(x.target.value)+.5,Se.maxDistance),Se.minDistance)))};m0=function(){r(String(Math.round(Se.maxDistance-Se.getDistance()+.5))),a(String(Math.round(Se.target.x))),u(String(Math.round(Se.target.y))),d(String(Math.round(Se.target.z)))},i||r("192");const[o,a]=Jt.useState(""),[l,u]=Jt.useState(""),[c,d]=Jt.useState(""),f=x=>{a(String(Math.max(Math.min(Number(x.target.value),1e4),-1e4))),Se.target.set(Number(Math.max(Math.min(Number(x.target.value),1e4),-1e4)),Se.target.y,Se.target.z),Se.update()},g=x=>{u(String(Math.max(Math.min(Number(x.target.value),1e4),-1e4))),Se.target.set(Se.target.x,Number(Math.max(Math.min(Number(x.target.value),1e4),-1e4)),Se.target.z),Se.update()},y=x=>{d(String(Math.max(Math.min(Number(x.target.value),1e4),-1e4))),Se.target.set(Se.target.x,Se.target.y,Number(Math.max(Math.min(Number(x.target.value),1e4),-1e4))),Se.update()};o||a("0"),l||u("0"),c||d("0");const[h,p]=Jt.useState("");h||p("Build");function m(x){p(x.currentTarget.querySelector("label").innerText),yn=x.currentTarget.querySelector("label").innerText,aE()}const[v,_]=Jt.useState("");v||_("Blocks");function M(x){_(x.target.innerText),ja=x.target.innerText}return we("div",{className:"App h-full w-full",children:mt("div",{className:"threeSceneInterface h-full w-full overflow-hidden pointer-events-none grid grid-rows-[52px_1fr]",children:[mt("div",{className:" bg-fourthcolor z-50 grid grid-cols-[300px_25%_1fr_34%] text-secondcolor",children:[mt("div",{className:"flex items-center",children:[we("img",{className:"ml-5 aspect-square h-9 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/whiteLogo.svg",alt:""}),we("label",{className:"text-xl ml-4 font-medium text-firstcolor",children:"Builder 3D"})]}),mt("div",{className:"flex items-center shadow-forTopBlock",children:[we("button",{className:"h-full w-24",children:"Undo"}),we("button",{className:"h-full w-24",children:"Redo"}),we("button",{className:" h-full w-24",children:"Create"})]}),mt("div",{className:"flex items-center justify-center text-firstcolor shadow-forTopBlock",children:[we("button",{className:"outline-none",children:"Droxus228"}),we("label",{className:" mx-2",children:"/"}),we("input",{className:" bg-transparent outline-none",type:"text",value:t,onChange:n})]}),mt("div",{className:"flex items-center justify-end shadow-forTopBlock",children:[we("button",{className:"h-full w-24 ",children:"Save"}),we("button",{className:"h-full w-24",children:"Scene"}),we("button",{className:" h-full w-24 ",children:"Import"}),we("button",{className:"h-full w-24",children:"Export"}),we("button",{className:" h-full w-24 ",children:"Share"})]})]}),mt("div",{className:"leftBlock absolute grid grid-rows-[185px_1fr_135px] h-full w-300  bg-firstcolor text-fourthcolor",children:[mt("div",{className:"pt-20 relative z-30 shadow-forLeftBlockTwo bg-firstcolor",children:[mt("div",{className:"grid grid-cols-[40px_1fr_40px] ",children:[we("button",{className:"flex place-content-center items-center",children:we("img",{className:"h-6 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/fd5e56d6a00e6a668b7cf59840205b0e2f85e098/src/assets/img/crossBlocks.svg",alt:""})}),we("input",{className:"bg-transparent px-2 h-10 outline-none text-center text-lg border-fourthcolor border-b-2 bg-firstcolor",type:"text",placeholder:"Find Block"}),we("button",{className:"flex place-content-center items-center",children:we("img",{className:"h-6 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/fd5e56d6a00e6a668b7cf59840205b0e2f85e098/src/assets/img/searchBlocks.svg",alt:""})})]}),mt("div",{className:"mt-2 flex",children:[we("button",{className:` flex-1 focus:outline-none hover:border-0 transition-none ${v=="Blocks"?" opacity-100":"opacity-40"}`,onClick:M,children:"Blocks"}),we("button",{className:` flex-1 focus:outline-none hover:border-0 transition-none ${v=="Slabs"?" opacity-100":"opacity-40"}`,onClick:M,children:"Slabs"}),we("button",{className:` flex-1 focus:outline-none hover:border-0 transition-none ${v=="Stairs"?" opacity-100":"opacity-40"}`,onClick:M,children:"Stairs"})]})]}),we("div",{className:"texturePickBlock relative h-full overflow-scroll overflow-x-hidden z-10 mt-0 py-24 shadow-forLeftBlockThree",children:we(uE,{})}),we("div",{className:"z-30 -mt-0 bg-firstcolor shadow-forLeftBlockTwo",children:mt("div",{className:" pt-4 h-21",children:[we("label",{className:" text-lg font-medium",children:"Mods"}),mt("div",{className:"flex mt-2 h-full",children:[mt("button",{className:` flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${h=="Build"?" opacity-100":"opacity-40"}`,onClick:m,children:[we("div",{className:"w-full flex justify-center",children:we("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/build.svg",alt:""})}),we("label",{children:"Build"})]}),mt("button",{className:` flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${h=="Inspect"?" opacity-100":"opacity-40"}`,onClick:m,children:[we("div",{className:"w-full flex justify-center",children:we("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/inspect.svg",alt:""})}),we("label",{children:"Inspect"})]}),mt("button",{className:` flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${h=="Remove"?" opacity-100":"opacity-40"}`,onClick:m,children:[we("div",{className:"w-full flex justify-center",children:we("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/remove.svg",alt:""})}),we("label",{children:"Remove"})]})]})]})})]}),mt("div",{className:" absolute top-full left-full -translate-x-120 -translate-y-14 w-120 h-10 flex items-center backdrop-blur-sm bg-black/1 text-fourthcolor font-normal",children:[mt("div",{className:" h-8 w-40 flex items-center ",children:[we("label",{className:" w-12",children:"Scale"}),we("input",{id:"scaleInput",className:" w-14 bg-transparent text-right",type:"number",value:i,onChange:s}),we("label",{children:"%"})]}),mt("div",{className:" h-8 w-80 flex items-center",children:[we("label",{className:" w-24",children:"Position"}),we("label",{children:"x:"}),we("input",{className:"modsButton w-16 bg-transparent text-center",type:"number",value:o,onChange:f}),we("label",{children:"y:"}),we("input",{className:" w-16 bg-transparent text-center",type:"number",value:l,onChange:g}),we("label",{children:"z:"}),we("input",{className:" w-16 bg-transparent text-center",type:"number",value:c,onChange:y})]})]})]})})}tE();$u.createRoot(document.getElementById("root")).render(we(O0.StrictMode,{children:we(fE,{})}));
