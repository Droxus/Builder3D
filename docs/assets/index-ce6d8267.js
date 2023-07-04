function eb(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function tb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lu={},nb={get exports(){return Lu},set exports(t){Lu=t}},Sd={},de={},ib={get exports(){return de},set exports(t){de=t}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ic=Symbol.for("react.element"),rb=Symbol.for("react.portal"),sb=Symbol.for("react.fragment"),ob=Symbol.for("react.strict_mode"),ab=Symbol.for("react.profiler"),lb=Symbol.for("react.provider"),cb=Symbol.for("react.context"),ub=Symbol.for("react.forward_ref"),db=Symbol.for("react.suspense"),hb=Symbol.for("react.memo"),fb=Symbol.for("react.lazy"),N0=Symbol.iterator;function pb(t){return t===null||typeof t!="object"?null:(t=N0&&t[N0]||t["@@iterator"],typeof t=="function"?t:null)}var wx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sx=Object.assign,Mx={};function ga(t,e,n){this.props=t,this.context=e,this.refs=Mx,this.updater=n||wx}ga.prototype.isReactComponent={};ga.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ga.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ex(){}Ex.prototype=ga.prototype;function Dm(t,e,n){this.props=t,this.context=e,this.refs=Mx,this.updater=n||wx}var km=Dm.prototype=new Ex;km.constructor=Dm;Sx(km,ga.prototype);km.isPureReactComponent=!0;var O0=Array.isArray,bx=Object.prototype.hasOwnProperty,Nm={current:null},Tx={key:!0,ref:!0,__self:!0,__source:!0};function Cx(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bx.call(e,i)&&!Tx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ic,type:t,key:s,ref:o,props:r,_owner:Nm.current}}function mb(t,e){return{$$typeof:ic,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Om(t){return typeof t=="object"&&t!==null&&t.$$typeof===ic}function gb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var F0=/\/+/g;function gh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gb(""+t.key):e.toString(36)}function fu(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ic:case rb:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+gh(o,0):i,O0(r)?(n="",t!=null&&(n=t.replace(F0,"$&/")+"/"),fu(r,e,n,"",function(c){return c})):r!=null&&(Om(r)&&(r=mb(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(F0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",O0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+gh(s,a);o+=fu(s,e,n,l,r)}else if(l=pb(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+gh(s,a++),o+=fu(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Tc(t,e,n){if(t==null)return t;var i=[],r=0;return fu(t,i,"","",function(s){return e.call(n,s,r++)}),i}function vb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Sn={current:null},pu={transition:null},_b={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:pu,ReactCurrentOwner:Nm};Be.Children={map:Tc,forEach:function(t,e,n){Tc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Tc(t,function(){e++}),e},toArray:function(t){return Tc(t,function(e){return e})||[]},only:function(t){if(!Om(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=ga;Be.Fragment=sb;Be.Profiler=ab;Be.PureComponent=Dm;Be.StrictMode=ob;Be.Suspense=db;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_b;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Sx({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nm.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)bx.call(e,l)&&!Tx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ic,type:t.type,key:r,ref:s,props:i,_owner:o}};Be.createContext=function(t){return t={$$typeof:cb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lb,_context:t},t.Consumer=t};Be.createElement=Cx;Be.createFactory=function(t){var e=Cx.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:ub,render:t}};Be.isValidElement=Om;Be.lazy=function(t){return{$$typeof:fb,_payload:{_status:-1,_result:t},_init:vb}};Be.memo=function(t,e){return{$$typeof:hb,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=pu.transition;pu.transition={};try{t()}finally{pu.transition=e}};Be.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Be.useCallback=function(t,e){return Sn.current.useCallback(t,e)};Be.useContext=function(t){return Sn.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return Sn.current.useDeferredValue(t)};Be.useEffect=function(t,e){return Sn.current.useEffect(t,e)};Be.useId=function(){return Sn.current.useId()};Be.useImperativeHandle=function(t,e,n){return Sn.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return Sn.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return Sn.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return Sn.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return Sn.current.useReducer(t,e,n)};Be.useRef=function(t){return Sn.current.useRef(t)};Be.useState=function(t){return Sn.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return Sn.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return Sn.current.useTransition()};Be.version="18.2.0";(function(t){t.exports=Be})(ib);const Fm=tb(de),Kf=eb({__proto__:null,default:Fm},[de]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yb=de,xb=Symbol.for("react.element"),wb=Symbol.for("react.fragment"),Sb=Object.prototype.hasOwnProperty,Mb=yb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Eb={key:!0,ref:!0,__self:!0,__source:!0};function Ax(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Sb.call(e,i)&&!Eb.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:xb,type:t,key:s,ref:o,props:r,_owner:Mb.current}}Sd.Fragment=wb;Sd.jsx=Ax;Sd.jsxs=Ax;(function(t){t.exports=Sd})(nb);const I=Lu.jsx,fe=Lu.jsxs;var Yf={},Zf={},bb={get exports(){return Zf},set exports(t){Zf=t}},Xn={},Jf={},Tb={get exports(){return Jf},set exports(t){Jf=t}},Ix={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,H){var W=k.length;k.push(H);e:for(;0<W;){var oe=W-1>>>1,z=k[oe];if(0<r(z,H))k[oe]=H,k[W]=z,W=oe;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var H=k[0],W=k.pop();if(W!==H){k[0]=W;e:for(var oe=0,z=k.length,Z=z>>>1;oe<Z;){var re=2*(oe+1)-1,le=k[re],L=re+1,we=k[L];if(0>r(le,W))L<z&&0>r(we,le)?(k[oe]=we,k[L]=W,oe=L):(k[oe]=le,k[re]=W,oe=re);else if(L<z&&0>r(we,W))k[oe]=we,k[L]=W,oe=L;else break e}}return H}function r(k,H){var W=k.sortIndex-H.sortIndex;return W!==0?W:k.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,m=!1,y=!1,f=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(k){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=k)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function S(k){if(f=!1,_(k),!y)if(n(l)!==null)y=!0,J(x);else{var H=n(c);H!==null&&ee(S,H.startTime-k)}}function x(k,H){y=!1,f&&(f=!1,g(w),w=-1),m=!0;var W=h;try{for(_(H),d=n(l);d!==null&&(!(d.expirationTime>H)||k&&!Y());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,h=d.priorityLevel;var z=oe(d.expirationTime<=H);H=t.unstable_now(),typeof z=="function"?d.callback=z:d===n(l)&&i(l),_(H)}else i(l);d=n(l)}if(d!==null)var Z=!0;else{var re=n(c);re!==null&&ee(S,re.startTime-H),Z=!1}return Z}finally{d=null,h=W,m=!1}}var C=!1,P=null,w=-1,T=5,R=-1;function Y(){return!(t.unstable_now()-R<T)}function Q(){if(P!==null){var k=t.unstable_now();R=k;var H=!0;try{H=P(!0,k)}finally{H?U():(C=!1,P=null)}}else C=!1}var U;if(typeof v=="function")U=function(){v(Q)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,X=O.port2;O.port1.onmessage=Q,U=function(){X.postMessage(null)}}else U=function(){p(Q,0)};function J(k){P=k,C||(C=!0,U())}function ee(k,H){w=p(function(){k(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,J(x))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var W=h;h=H;try{return k()}finally{h=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,H){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var W=h;h=k;try{return H()}finally{h=W}},t.unstable_scheduleCallback=function(k,H,W){var oe=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?oe+W:oe):W=oe,k){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=W+z,k={id:u++,callback:H,priorityLevel:k,startTime:W,expirationTime:z,sortIndex:-1},W>oe?(k.sortIndex=W,e(c,k),n(l)===null&&k===n(c)&&(f?(g(w),w=-1):f=!0,ee(S,W-oe))):(k.sortIndex=z,e(l,k),y||m||(y=!0,J(x))),k},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(k){var H=h;return function(){var W=h;h=H;try{return k.apply(this,arguments)}finally{h=W}}}})(Ix);(function(t){t.exports=Ix})(Tb);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Px=de,qn=Jf;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rx=new Set,_l={};function eo(t,e){ia(t,e),ia(t+"Capture",e)}function ia(t,e){for(_l[t]=e,t=0;t<e.length;t++)Rx.add(e[t])}var fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qf=Object.prototype.hasOwnProperty,Cb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,U0={},z0={};function Ab(t){return Qf.call(z0,t)?!0:Qf.call(U0,t)?!1:Cb.test(t)?z0[t]=!0:(U0[t]=!0,!1)}function Ib(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Pb(t,e,n,i){if(e===null||typeof e>"u"||Ib(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new Mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new Mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new Mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new Mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new Mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new Mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new Mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new Mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new Mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Um=/[\-:]([a-z])/g;function zm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Um,zm);Jt[e]=new Mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Um,zm);Jt[e]=new Mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Um,zm);Jt[e]=new Mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new Mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new Mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bm(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Pb(e,n,r,i)&&(n=null),i||r===null?Ab(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var yr=Px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cc=Symbol.for("react.element"),Co=Symbol.for("react.portal"),Ao=Symbol.for("react.fragment"),Vm=Symbol.for("react.strict_mode"),ep=Symbol.for("react.profiler"),Lx=Symbol.for("react.provider"),Dx=Symbol.for("react.context"),Hm=Symbol.for("react.forward_ref"),tp=Symbol.for("react.suspense"),np=Symbol.for("react.suspense_list"),Gm=Symbol.for("react.memo"),Tr=Symbol.for("react.lazy"),kx=Symbol.for("react.offscreen"),B0=Symbol.iterator;function Ra(t){return t===null||typeof t!="object"?null:(t=B0&&t[B0]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,vh;function Xa(t){if(vh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vh=e&&e[1]||""}return`
`+vh+t}var _h=!1;function yh(t,e){if(!t||_h)return"";_h=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_h=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xa(t):""}function Rb(t){switch(t.tag){case 5:return Xa(t.type);case 16:return Xa("Lazy");case 13:return Xa("Suspense");case 19:return Xa("SuspenseList");case 0:case 2:case 15:return t=yh(t.type,!1),t;case 11:return t=yh(t.type.render,!1),t;case 1:return t=yh(t.type,!0),t;default:return""}}function ip(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ao:return"Fragment";case Co:return"Portal";case ep:return"Profiler";case Vm:return"StrictMode";case tp:return"Suspense";case np:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dx:return(t.displayName||"Context")+".Consumer";case Lx:return(t._context.displayName||"Context")+".Provider";case Hm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gm:return e=t.displayName||null,e!==null?e:ip(t.type)||"Memo";case Tr:e=t._payload,t=t._init;try{return ip(t(e))}catch{}}return null}function Lb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ip(e);case 8:return e===Vm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Db(t){var e=Nx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ac(t){t._valueTracker||(t._valueTracker=Db(t))}function Ox(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Nx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Du(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rp(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function V0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fx(t,e){e=e.checked,e!=null&&Bm(t,"checked",e,!1)}function sp(t,e){Fx(t,e);var n=Jr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?op(t,e.type,n):e.hasOwnProperty("defaultValue")&&op(t,e.type,Jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function H0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function op(t,e,n){(e!=="number"||Du(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ka=Array.isArray;function Go(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Jr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ap(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function G0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Ka(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jr(n)}}function Ux(t,e){var n=Jr(e.value),i=Jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function W0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ic,Bx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ic=Ic||document.createElement("div"),Ic.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ic.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kb=["Webkit","ms","Moz","O"];Object.keys(sl).forEach(function(t){kb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),sl[e]=sl[t]})});function Vx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||sl.hasOwnProperty(t)&&sl[t]?(""+e).trim():e+"px"}function Hx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Vx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Nb=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cp(t,e){if(e){if(Nb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function up(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dp=null;function Wm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hp=null,Wo=null,jo=null;function j0(t){if(t=oc(t)){if(typeof hp!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Cd(e),hp(t.stateNode,t.type,e))}}function Gx(t){Wo?jo?jo.push(t):jo=[t]:Wo=t}function Wx(){if(Wo){var t=Wo,e=jo;if(jo=Wo=null,j0(t),e)for(t=0;t<e.length;t++)j0(e[t])}}function jx(t,e){return t(e)}function $x(){}var xh=!1;function qx(t,e,n){if(xh)return t(e,n);xh=!0;try{return jx(t,e,n)}finally{xh=!1,(Wo!==null||jo!==null)&&($x(),Wx())}}function xl(t,e){var n=t.stateNode;if(n===null)return null;var i=Cd(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var fp=!1;if(fr)try{var La={};Object.defineProperty(La,"passive",{get:function(){fp=!0}}),window.addEventListener("test",La,La),window.removeEventListener("test",La,La)}catch{fp=!1}function Ob(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ol=!1,ku=null,Nu=!1,pp=null,Fb={onError:function(t){ol=!0,ku=t}};function Ub(t,e,n,i,r,s,o,a,l){ol=!1,ku=null,Ob.apply(Fb,arguments)}function zb(t,e,n,i,r,s,o,a,l){if(Ub.apply(this,arguments),ol){if(ol){var c=ku;ol=!1,ku=null}else throw Error(te(198));Nu||(Nu=!0,pp=c)}}function to(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Xx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $0(t){if(to(t)!==t)throw Error(te(188))}function Bb(t){var e=t.alternate;if(!e){if(e=to(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return $0(r),t;if(s===i)return $0(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Kx(t){return t=Bb(t),t!==null?Yx(t):null}function Yx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yx(t);if(e!==null)return e;t=t.sibling}return null}var Zx=qn.unstable_scheduleCallback,q0=qn.unstable_cancelCallback,Vb=qn.unstable_shouldYield,Hb=qn.unstable_requestPaint,vt=qn.unstable_now,Gb=qn.unstable_getCurrentPriorityLevel,jm=qn.unstable_ImmediatePriority,Jx=qn.unstable_UserBlockingPriority,Ou=qn.unstable_NormalPriority,Wb=qn.unstable_LowPriority,Qx=qn.unstable_IdlePriority,Md=null,Ui=null;function jb(t){if(Ui&&typeof Ui.onCommitFiberRoot=="function")try{Ui.onCommitFiberRoot(Md,t,void 0,(t.current.flags&128)===128)}catch{}}var wi=Math.clz32?Math.clz32:Xb,$b=Math.log,qb=Math.LN2;function Xb(t){return t>>>=0,t===0?32:31-($b(t)/qb|0)|0}var Pc=64,Rc=4194304;function Ya(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ya(a):(s&=o,s!==0&&(i=Ya(s)))}else o=n&~r,o!==0?i=Ya(o):s!==0&&(i=Ya(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-wi(e),r=1<<n,i|=t[n],e&=~r;return i}function Kb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yb(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Kb(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function mp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ew(){var t=Pc;return Pc<<=1,!(Pc&4194240)&&(Pc=64),t}function wh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function rc(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wi(e),t[e]=n}function Zb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-wi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function $m(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-wi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function tw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var nw,qm,iw,rw,sw,gp=!1,Lc=[],Fr=null,Ur=null,zr=null,wl=new Map,Sl=new Map,Ar=[],Jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function X0(t,e){switch(t){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":wl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(e.pointerId)}}function Da(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=oc(e),e!==null&&qm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Qb(t,e,n,i,r){switch(e){case"focusin":return Fr=Da(Fr,t,e,n,i,r),!0;case"dragenter":return Ur=Da(Ur,t,e,n,i,r),!0;case"mouseover":return zr=Da(zr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return wl.set(s,Da(wl.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Sl.set(s,Da(Sl.get(s)||null,t,e,n,i,r)),!0}return!1}function ow(t){var e=Es(t.target);if(e!==null){var n=to(e);if(n!==null){if(e=n.tag,e===13){if(e=Xx(n),e!==null){t.blockedOn=e,sw(t.priority,function(){iw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);dp=i,n.target.dispatchEvent(i),dp=null}else return e=oc(n),e!==null&&qm(e),t.blockedOn=n,!1;e.shift()}return!0}function K0(t,e,n){mu(t)&&n.delete(e)}function eT(){gp=!1,Fr!==null&&mu(Fr)&&(Fr=null),Ur!==null&&mu(Ur)&&(Ur=null),zr!==null&&mu(zr)&&(zr=null),wl.forEach(K0),Sl.forEach(K0)}function ka(t,e){t.blockedOn===e&&(t.blockedOn=null,gp||(gp=!0,qn.unstable_scheduleCallback(qn.unstable_NormalPriority,eT)))}function Ml(t){function e(r){return ka(r,t)}if(0<Lc.length){ka(Lc[0],t);for(var n=1;n<Lc.length;n++){var i=Lc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fr!==null&&ka(Fr,t),Ur!==null&&ka(Ur,t),zr!==null&&ka(zr,t),wl.forEach(e),Sl.forEach(e),n=0;n<Ar.length;n++)i=Ar[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ar.length&&(n=Ar[0],n.blockedOn===null);)ow(n),n.blockedOn===null&&Ar.shift()}var $o=yr.ReactCurrentBatchConfig,Uu=!0;function tT(t,e,n,i){var r=Qe,s=$o.transition;$o.transition=null;try{Qe=1,Xm(t,e,n,i)}finally{Qe=r,$o.transition=s}}function nT(t,e,n,i){var r=Qe,s=$o.transition;$o.transition=null;try{Qe=4,Xm(t,e,n,i)}finally{Qe=r,$o.transition=s}}function Xm(t,e,n,i){if(Uu){var r=vp(t,e,n,i);if(r===null)Rh(t,e,i,zu,n),X0(t,i);else if(Qb(r,t,e,n,i))i.stopPropagation();else if(X0(t,i),e&4&&-1<Jb.indexOf(t)){for(;r!==null;){var s=oc(r);if(s!==null&&nw(s),s=vp(t,e,n,i),s===null&&Rh(t,e,i,zu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Rh(t,e,i,null,n)}}var zu=null;function vp(t,e,n,i){if(zu=null,t=Wm(i),t=Es(t),t!==null)if(e=to(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Xx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zu=t,null}function aw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gb()){case jm:return 1;case Jx:return 4;case Ou:case Wb:return 16;case Qx:return 536870912;default:return 16}default:return 16}}var kr=null,Km=null,gu=null;function lw(){if(gu)return gu;var t,e=Km,n=e.length,i,r="value"in kr?kr.value:kr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return gu=r.slice(t,1<i?1-i:void 0)}function vu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Dc(){return!0}function Y0(){return!1}function Kn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Dc:Y0,this.isPropagationStopped=Y0,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dc)},persist:function(){},isPersistent:Dc}),e}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ym=Kn(va),sc=ft({},va,{view:0,detail:0}),iT=Kn(sc),Sh,Mh,Na,Ed=ft({},sc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Na&&(Na&&t.type==="mousemove"?(Sh=t.screenX-Na.screenX,Mh=t.screenY-Na.screenY):Mh=Sh=0,Na=t),Sh)},movementY:function(t){return"movementY"in t?t.movementY:Mh}}),Z0=Kn(Ed),rT=ft({},Ed,{dataTransfer:0}),sT=Kn(rT),oT=ft({},sc,{relatedTarget:0}),Eh=Kn(oT),aT=ft({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),lT=Kn(aT),cT=ft({},va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uT=Kn(cT),dT=ft({},va,{data:0}),J0=Kn(dT),hT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pT[t])?!!e[t]:!1}function Zm(){return mT}var gT=ft({},sc,{key:function(t){if(t.key){var e=hT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zm,charCode:function(t){return t.type==="keypress"?vu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vT=Kn(gT),_T=ft({},Ed,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Q0=Kn(_T),yT=ft({},sc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zm}),xT=Kn(yT),wT=ft({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),ST=Kn(wT),MT=ft({},Ed,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ET=Kn(MT),bT=[9,13,27,32],Jm=fr&&"CompositionEvent"in window,al=null;fr&&"documentMode"in document&&(al=document.documentMode);var TT=fr&&"TextEvent"in window&&!al,cw=fr&&(!Jm||al&&8<al&&11>=al),ev=String.fromCharCode(32),tv=!1;function uw(t,e){switch(t){case"keyup":return bT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Io=!1;function CT(t,e){switch(t){case"compositionend":return dw(e);case"keypress":return e.which!==32?null:(tv=!0,ev);case"textInput":return t=e.data,t===ev&&tv?null:t;default:return null}}function AT(t,e){if(Io)return t==="compositionend"||!Jm&&uw(t,e)?(t=lw(),gu=Km=kr=null,Io=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cw&&e.locale!=="ko"?null:e.data;default:return null}}var IT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!IT[t.type]:e==="textarea"}function hw(t,e,n,i){Gx(i),e=Bu(e,"onChange"),0<e.length&&(n=new Ym("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ll=null,El=null;function PT(t){Mw(t,0)}function bd(t){var e=Lo(t);if(Ox(e))return t}function RT(t,e){if(t==="change")return e}var fw=!1;if(fr){var bh;if(fr){var Th="oninput"in document;if(!Th){var iv=document.createElement("div");iv.setAttribute("oninput","return;"),Th=typeof iv.oninput=="function"}bh=Th}else bh=!1;fw=bh&&(!document.documentMode||9<document.documentMode)}function rv(){ll&&(ll.detachEvent("onpropertychange",pw),El=ll=null)}function pw(t){if(t.propertyName==="value"&&bd(El)){var e=[];hw(e,El,t,Wm(t)),qx(PT,e)}}function LT(t,e,n){t==="focusin"?(rv(),ll=e,El=n,ll.attachEvent("onpropertychange",pw)):t==="focusout"&&rv()}function DT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bd(El)}function kT(t,e){if(t==="click")return bd(e)}function NT(t,e){if(t==="input"||t==="change")return bd(e)}function OT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mi=typeof Object.is=="function"?Object.is:OT;function bl(t,e){if(Mi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Qf.call(e,r)||!Mi(t[r],e[r]))return!1}return!0}function sv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ov(t,e){var n=sv(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sv(n)}}function mw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gw(){for(var t=window,e=Du();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Du(t.document)}return e}function Qm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FT(t){var e=gw(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&mw(n.ownerDocument.documentElement,n)){if(i!==null&&Qm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ov(n,s);var o=ov(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var UT=fr&&"documentMode"in document&&11>=document.documentMode,Po=null,_p=null,cl=null,yp=!1;function av(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yp||Po==null||Po!==Du(i)||(i=Po,"selectionStart"in i&&Qm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),cl&&bl(cl,i)||(cl=i,i=Bu(_p,"onSelect"),0<i.length&&(e=new Ym("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Po)))}function kc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ro={animationend:kc("Animation","AnimationEnd"),animationiteration:kc("Animation","AnimationIteration"),animationstart:kc("Animation","AnimationStart"),transitionend:kc("Transition","TransitionEnd")},Ch={},vw={};fr&&(vw=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);function Td(t){if(Ch[t])return Ch[t];if(!Ro[t])return t;var e=Ro[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vw)return Ch[t]=e[n];return t}var _w=Td("animationend"),yw=Td("animationiteration"),xw=Td("animationstart"),ww=Td("transitionend"),Sw=new Map,lv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function is(t,e){Sw.set(t,e),eo(e,[t])}for(var Ah=0;Ah<lv.length;Ah++){var Ih=lv[Ah],zT=Ih.toLowerCase(),BT=Ih[0].toUpperCase()+Ih.slice(1);is(zT,"on"+BT)}is(_w,"onAnimationEnd");is(yw,"onAnimationIteration");is(xw,"onAnimationStart");is("dblclick","onDoubleClick");is("focusin","onFocus");is("focusout","onBlur");is(ww,"onTransitionEnd");ia("onMouseEnter",["mouseout","mouseover"]);ia("onMouseLeave",["mouseout","mouseover"]);ia("onPointerEnter",["pointerout","pointerover"]);ia("onPointerLeave",["pointerout","pointerover"]);eo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));eo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));eo("onBeforeInput",["compositionend","keypress","textInput","paste"]);eo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));eo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));eo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Za));function cv(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,zb(i,e,void 0,t),t.currentTarget=null}function Mw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;cv(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;cv(r,a,c),s=l}}}if(Nu)throw t=pp,Nu=!1,pp=null,t}function it(t,e){var n=e[Ep];n===void 0&&(n=e[Ep]=new Set);var i=t+"__bubble";n.has(i)||(Ew(e,t,2,!1),n.add(i))}function Ph(t,e,n){var i=0;e&&(i|=4),Ew(n,t,i,e)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function Tl(t){if(!t[Nc]){t[Nc]=!0,Rx.forEach(function(n){n!=="selectionchange"&&(VT.has(n)||Ph(n,!1,t),Ph(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nc]||(e[Nc]=!0,Ph("selectionchange",!1,e))}}function Ew(t,e,n,i){switch(aw(e)){case 1:var r=tT;break;case 4:r=nT;break;default:r=Xm}n=r.bind(null,e,n,t),r=void 0,!fp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Rh(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Es(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}qx(function(){var c=s,u=Wm(n),d=[];e:{var h=Sw.get(t);if(h!==void 0){var m=Ym,y=t;switch(t){case"keypress":if(vu(n)===0)break e;case"keydown":case"keyup":m=vT;break;case"focusin":y="focus",m=Eh;break;case"focusout":y="blur",m=Eh;break;case"beforeblur":case"afterblur":m=Eh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Z0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=sT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=xT;break;case _w:case yw:case xw:m=lT;break;case ww:m=ST;break;case"scroll":m=iT;break;case"wheel":m=ET;break;case"copy":case"cut":case"paste":m=uT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Q0}var f=(e&4)!==0,p=!f&&t==="scroll",g=f?h!==null?h+"Capture":null:h;f=[];for(var v=c,_;v!==null;){_=v;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,g!==null&&(S=xl(v,g),S!=null&&f.push(Cl(v,S,_)))),p)break;v=v.return}0<f.length&&(h=new m(h,y,null,n,u),d.push({event:h,listeners:f}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==dp&&(y=n.relatedTarget||n.fromElement)&&(Es(y)||y[pr]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?Es(y):null,y!==null&&(p=to(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(f=Z0,S="onMouseLeave",g="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(f=Q0,S="onPointerLeave",g="onPointerEnter",v="pointer"),p=m==null?h:Lo(m),_=y==null?h:Lo(y),h=new f(S,v+"leave",m,n,u),h.target=p,h.relatedTarget=_,S=null,Es(u)===c&&(f=new f(g,v+"enter",y,n,u),f.target=_,f.relatedTarget=p,S=f),p=S,m&&y)t:{for(f=m,g=y,v=0,_=f;_;_=oo(_))v++;for(_=0,S=g;S;S=oo(S))_++;for(;0<v-_;)f=oo(f),v--;for(;0<_-v;)g=oo(g),_--;for(;v--;){if(f===g||g!==null&&f===g.alternate)break t;f=oo(f),g=oo(g)}f=null}else f=null;m!==null&&uv(d,h,m,f,!1),y!==null&&p!==null&&uv(d,p,y,f,!0)}}e:{if(h=c?Lo(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var x=RT;else if(nv(h))if(fw)x=NT;else{x=DT;var C=LT}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=kT);if(x&&(x=x(t,c))){hw(d,x,n,u);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&op(h,"number",h.value)}switch(C=c?Lo(c):window,t){case"focusin":(nv(C)||C.contentEditable==="true")&&(Po=C,_p=c,cl=null);break;case"focusout":cl=_p=Po=null;break;case"mousedown":yp=!0;break;case"contextmenu":case"mouseup":case"dragend":yp=!1,av(d,n,u);break;case"selectionchange":if(UT)break;case"keydown":case"keyup":av(d,n,u)}var P;if(Jm)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Io?uw(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(cw&&n.locale!=="ko"&&(Io||w!=="onCompositionStart"?w==="onCompositionEnd"&&Io&&(P=lw()):(kr=u,Km="value"in kr?kr.value:kr.textContent,Io=!0)),C=Bu(c,w),0<C.length&&(w=new J0(w,t,null,n,u),d.push({event:w,listeners:C}),P?w.data=P:(P=dw(n),P!==null&&(w.data=P)))),(P=TT?CT(t,n):AT(t,n))&&(c=Bu(c,"onBeforeInput"),0<c.length&&(u=new J0("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=P))}Mw(d,e)})}function Cl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=xl(t,n),s!=null&&i.unshift(Cl(t,s,r)),s=xl(t,e),s!=null&&i.push(Cl(t,s,r))),t=t.return}return i}function oo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function uv(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=xl(n,s),l!=null&&o.unshift(Cl(n,l,a))):r||(l=xl(n,s),l!=null&&o.push(Cl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var HT=/\r\n?/g,GT=/\u0000|\uFFFD/g;function dv(t){return(typeof t=="string"?t:""+t).replace(HT,`
`).replace(GT,"")}function Oc(t,e,n){if(e=dv(e),dv(t)!==e&&n)throw Error(te(425))}function Vu(){}var xp=null,wp=null;function Sp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mp=typeof setTimeout=="function"?setTimeout:void 0,WT=typeof clearTimeout=="function"?clearTimeout:void 0,hv=typeof Promise=="function"?Promise:void 0,jT=typeof queueMicrotask=="function"?queueMicrotask:typeof hv<"u"?function(t){return hv.resolve(null).then(t).catch($T)}:Mp;function $T(t){setTimeout(function(){throw t})}function Lh(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ml(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ml(e)}function Br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _a=Math.random().toString(36).slice(2),Li="__reactFiber$"+_a,Al="__reactProps$"+_a,pr="__reactContainer$"+_a,Ep="__reactEvents$"+_a,qT="__reactListeners$"+_a,XT="__reactHandles$"+_a;function Es(t){var e=t[Li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pr]||n[Li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fv(t);t!==null;){if(n=t[Li])return n;t=fv(t)}return e}t=n,n=t.parentNode}return null}function oc(t){return t=t[Li]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Lo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Cd(t){return t[Al]||null}var bp=[],Do=-1;function rs(t){return{current:t}}function lt(t){0>Do||(t.current=bp[Do],bp[Do]=null,Do--)}function nt(t,e){Do++,bp[Do]=t.current,t.current=e}var Qr={},hn=rs(Qr),In=rs(!1),zs=Qr;function ra(t,e){var n=t.type.contextTypes;if(!n)return Qr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Pn(t){return t=t.childContextTypes,t!=null}function Hu(){lt(In),lt(hn)}function pv(t,e,n){if(hn.current!==Qr)throw Error(te(168));nt(hn,e),nt(In,n)}function bw(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Lb(t)||"Unknown",r));return ft({},n,i)}function Gu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qr,zs=hn.current,nt(hn,t),nt(In,In.current),!0}function mv(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=bw(t,e,zs),i.__reactInternalMemoizedMergedChildContext=t,lt(In),lt(hn),nt(hn,t)):lt(In),nt(In,n)}var tr=null,Ad=!1,Dh=!1;function Tw(t){tr===null?tr=[t]:tr.push(t)}function KT(t){Ad=!0,Tw(t)}function ss(){if(!Dh&&tr!==null){Dh=!0;var t=0,e=Qe;try{var n=tr;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}tr=null,Ad=!1}catch(r){throw tr!==null&&(tr=tr.slice(t+1)),Zx(jm,ss),r}finally{Qe=e,Dh=!1}}return null}var ko=[],No=0,Wu=null,ju=0,ei=[],ti=0,Bs=null,rr=1,sr="";function gs(t,e){ko[No++]=ju,ko[No++]=Wu,Wu=t,ju=e}function Cw(t,e,n){ei[ti++]=rr,ei[ti++]=sr,ei[ti++]=Bs,Bs=t;var i=rr;t=sr;var r=32-wi(i)-1;i&=~(1<<r),n+=1;var s=32-wi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,rr=1<<32-wi(e)+r|n<<r|i,sr=s+t}else rr=1<<s|n<<r|i,sr=t}function eg(t){t.return!==null&&(gs(t,1),Cw(t,1,0))}function tg(t){for(;t===Wu;)Wu=ko[--No],ko[No]=null,ju=ko[--No],ko[No]=null;for(;t===Bs;)Bs=ei[--ti],ei[ti]=null,sr=ei[--ti],ei[ti]=null,rr=ei[--ti],ei[ti]=null}var Gn=null,Bn=null,ut=!1,yi=null;function Aw(t,e){var n=oi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gn=t,Bn=Br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gn=t,Bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Bs!==null?{id:rr,overflow:sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=oi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gn=t,Bn=null,!0):!1;default:return!1}}function Tp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cp(t){if(ut){var e=Bn;if(e){var n=e;if(!gv(t,e)){if(Tp(t))throw Error(te(418));e=Br(n.nextSibling);var i=Gn;e&&gv(t,e)?Aw(i,n):(t.flags=t.flags&-4097|2,ut=!1,Gn=t)}}else{if(Tp(t))throw Error(te(418));t.flags=t.flags&-4097|2,ut=!1,Gn=t}}}function vv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gn=t}function Fc(t){if(t!==Gn)return!1;if(!ut)return vv(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sp(t.type,t.memoizedProps)),e&&(e=Bn)){if(Tp(t))throw Iw(),Error(te(418));for(;e;)Aw(t,e),e=Br(e.nextSibling)}if(vv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bn=Br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bn=null}}else Bn=Gn?Br(t.stateNode.nextSibling):null;return!0}function Iw(){for(var t=Bn;t;)t=Br(t.nextSibling)}function sa(){Bn=Gn=null,ut=!1}function ng(t){yi===null?yi=[t]:yi.push(t)}var YT=yr.ReactCurrentBatchConfig;function vi(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $u=rs(null),qu=null,Oo=null,ig=null;function rg(){ig=Oo=qu=null}function sg(t){var e=$u.current;lt($u),t._currentValue=e}function Ap(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function qo(t,e){qu=t,ig=Oo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(An=!0),t.firstContext=null)}function ci(t){var e=t._currentValue;if(ig!==t)if(t={context:t,memoizedValue:e,next:null},Oo===null){if(qu===null)throw Error(te(308));Oo=t,qu.dependencies={lanes:0,firstContext:t}}else Oo=Oo.next=t;return e}var bs=null;function og(t){bs===null?bs=[t]:bs.push(t)}function Pw(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,og(e)):(n.next=r.next,r.next=n),e.interleaved=n,mr(t,i)}function mr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cr=!1;function ag(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ur(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mr(t,n)}return r=i.interleaved,r===null?(e.next=e,og(i)):(e.next=r.next,r.next=e),i.interleaved=e,mr(t,n)}function _u(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$m(t,n)}}function _v(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xu(t,e,n,i){var r=t.updateQueue;Cr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,f=a;switch(h=e,m=n,f.tag){case 1:if(y=f.payload,typeof y=="function"){d=y.call(m,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=f.payload,h=typeof y=="function"?y.call(m,d,h):y,h==null)break e;d=ft({},d,h);break e;case 2:Cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=d):u=u.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Hs|=o,t.lanes=o,t.memoizedState=d}}function yv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Lw=new Px.Component().refs;function Ip(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Id={isMounted:function(t){return(t=t._reactInternals)?to(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=wn(),r=Gr(t),s=ur(i,r);s.payload=e,n!=null&&(s.callback=n),e=Vr(t,s,r),e!==null&&(Si(e,t,r,i),_u(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=wn(),r=Gr(t),s=ur(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vr(t,s,r),e!==null&&(Si(e,t,r,i),_u(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wn(),i=Gr(t),r=ur(n,i);r.tag=2,e!=null&&(r.callback=e),e=Vr(t,r,i),e!==null&&(Si(e,t,i,n),_u(e,t,i))}};function xv(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!bl(n,i)||!bl(r,s):!0}function Dw(t,e,n){var i=!1,r=Qr,s=e.contextType;return typeof s=="object"&&s!==null?s=ci(s):(r=Pn(e)?zs:hn.current,i=e.contextTypes,s=(i=i!=null)?ra(t,r):Qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Id,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function wv(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Id.enqueueReplaceState(e,e.state,null)}function Pp(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Lw,ag(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ci(s):(s=Pn(e)?zs:hn.current,r.context=ra(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ip(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Id.enqueueReplaceState(r,r.state,null),Xu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Lw&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Uc(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sv(t){var e=t._init;return e(t._payload)}function kw(t){function e(g,v){if(t){var _=g.deletions;_===null?(g.deletions=[v],g.flags|=16):_.push(v)}}function n(g,v){if(!t)return null;for(;v!==null;)e(g,v),v=v.sibling;return null}function i(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function r(g,v){return g=Wr(g,v),g.index=0,g.sibling=null,g}function s(g,v,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<v?(g.flags|=2,v):_):(g.flags|=2,v)):(g.flags|=1048576,v)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,v,_,S){return v===null||v.tag!==6?(v=Bh(_,g.mode,S),v.return=g,v):(v=r(v,_),v.return=g,v)}function l(g,v,_,S){var x=_.type;return x===Ao?u(g,v,_.props.children,S,_.key):v!==null&&(v.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Tr&&Sv(x)===v.type)?(S=r(v,_.props),S.ref=Oa(g,v,_),S.return=g,S):(S=Eu(_.type,_.key,_.props,null,g.mode,S),S.ref=Oa(g,v,_),S.return=g,S)}function c(g,v,_,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Vh(_,g.mode,S),v.return=g,v):(v=r(v,_.children||[]),v.return=g,v)}function u(g,v,_,S,x){return v===null||v.tag!==7?(v=Ds(_,g.mode,S,x),v.return=g,v):(v=r(v,_),v.return=g,v)}function d(g,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Bh(""+v,g.mode,_),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Cc:return _=Eu(v.type,v.key,v.props,null,g.mode,_),_.ref=Oa(g,null,v),_.return=g,_;case Co:return v=Vh(v,g.mode,_),v.return=g,v;case Tr:var S=v._init;return d(g,S(v._payload),_)}if(Ka(v)||Ra(v))return v=Ds(v,g.mode,_,null),v.return=g,v;Uc(g,v)}return null}function h(g,v,_,S){var x=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return x!==null?null:a(g,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Cc:return _.key===x?l(g,v,_,S):null;case Co:return _.key===x?c(g,v,_,S):null;case Tr:return x=_._init,h(g,v,x(_._payload),S)}if(Ka(_)||Ra(_))return x!==null?null:u(g,v,_,S,null);Uc(g,_)}return null}function m(g,v,_,S,x){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(_)||null,a(v,g,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Cc:return g=g.get(S.key===null?_:S.key)||null,l(v,g,S,x);case Co:return g=g.get(S.key===null?_:S.key)||null,c(v,g,S,x);case Tr:var C=S._init;return m(g,v,_,C(S._payload),x)}if(Ka(S)||Ra(S))return g=g.get(_)||null,u(v,g,S,x,null);Uc(v,S)}return null}function y(g,v,_,S){for(var x=null,C=null,P=v,w=v=0,T=null;P!==null&&w<_.length;w++){P.index>w?(T=P,P=null):T=P.sibling;var R=h(g,P,_[w],S);if(R===null){P===null&&(P=T);break}t&&P&&R.alternate===null&&e(g,P),v=s(R,v,w),C===null?x=R:C.sibling=R,C=R,P=T}if(w===_.length)return n(g,P),ut&&gs(g,w),x;if(P===null){for(;w<_.length;w++)P=d(g,_[w],S),P!==null&&(v=s(P,v,w),C===null?x=P:C.sibling=P,C=P);return ut&&gs(g,w),x}for(P=i(g,P);w<_.length;w++)T=m(P,g,w,_[w],S),T!==null&&(t&&T.alternate!==null&&P.delete(T.key===null?w:T.key),v=s(T,v,w),C===null?x=T:C.sibling=T,C=T);return t&&P.forEach(function(Y){return e(g,Y)}),ut&&gs(g,w),x}function f(g,v,_,S){var x=Ra(_);if(typeof x!="function")throw Error(te(150));if(_=x.call(_),_==null)throw Error(te(151));for(var C=x=null,P=v,w=v=0,T=null,R=_.next();P!==null&&!R.done;w++,R=_.next()){P.index>w?(T=P,P=null):T=P.sibling;var Y=h(g,P,R.value,S);if(Y===null){P===null&&(P=T);break}t&&P&&Y.alternate===null&&e(g,P),v=s(Y,v,w),C===null?x=Y:C.sibling=Y,C=Y,P=T}if(R.done)return n(g,P),ut&&gs(g,w),x;if(P===null){for(;!R.done;w++,R=_.next())R=d(g,R.value,S),R!==null&&(v=s(R,v,w),C===null?x=R:C.sibling=R,C=R);return ut&&gs(g,w),x}for(P=i(g,P);!R.done;w++,R=_.next())R=m(P,g,w,R.value,S),R!==null&&(t&&R.alternate!==null&&P.delete(R.key===null?w:R.key),v=s(R,v,w),C===null?x=R:C.sibling=R,C=R);return t&&P.forEach(function(Q){return e(g,Q)}),ut&&gs(g,w),x}function p(g,v,_,S){if(typeof _=="object"&&_!==null&&_.type===Ao&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Cc:e:{for(var x=_.key,C=v;C!==null;){if(C.key===x){if(x=_.type,x===Ao){if(C.tag===7){n(g,C.sibling),v=r(C,_.props.children),v.return=g,g=v;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Tr&&Sv(x)===C.type){n(g,C.sibling),v=r(C,_.props),v.ref=Oa(g,C,_),v.return=g,g=v;break e}n(g,C);break}else e(g,C);C=C.sibling}_.type===Ao?(v=Ds(_.props.children,g.mode,S,_.key),v.return=g,g=v):(S=Eu(_.type,_.key,_.props,null,g.mode,S),S.ref=Oa(g,v,_),S.return=g,g=S)}return o(g);case Co:e:{for(C=_.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(g,v.sibling),v=r(v,_.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else e(g,v);v=v.sibling}v=Vh(_,g.mode,S),v.return=g,g=v}return o(g);case Tr:return C=_._init,p(g,v,C(_._payload),S)}if(Ka(_))return y(g,v,_,S);if(Ra(_))return f(g,v,_,S);Uc(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(g,v.sibling),v=r(v,_),v.return=g,g=v):(n(g,v),v=Bh(_,g.mode,S),v.return=g,g=v),o(g)):n(g,v)}return p}var oa=kw(!0),Nw=kw(!1),ac={},zi=rs(ac),Il=rs(ac),Pl=rs(ac);function Ts(t){if(t===ac)throw Error(te(174));return t}function lg(t,e){switch(nt(Pl,e),nt(Il,t),nt(zi,ac),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lp(e,t)}lt(zi),nt(zi,e)}function aa(){lt(zi),lt(Il),lt(Pl)}function Ow(t){Ts(Pl.current);var e=Ts(zi.current),n=lp(e,t.type);e!==n&&(nt(Il,t),nt(zi,n))}function cg(t){Il.current===t&&(lt(zi),lt(Il))}var dt=rs(0);function Ku(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kh=[];function ug(){for(var t=0;t<kh.length;t++)kh[t]._workInProgressVersionPrimary=null;kh.length=0}var yu=yr.ReactCurrentDispatcher,Nh=yr.ReactCurrentBatchConfig,Vs=0,ht=null,Ct=null,Ft=null,Yu=!1,ul=!1,Rl=0,ZT=0;function tn(){throw Error(te(321))}function dg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mi(t[n],e[n]))return!1;return!0}function hg(t,e,n,i,r,s){if(Vs=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yu.current=t===null||t.memoizedState===null?t2:n2,t=n(i,r),ul){s=0;do{if(ul=!1,Rl=0,25<=s)throw Error(te(301));s+=1,Ft=Ct=null,e.updateQueue=null,yu.current=i2,t=n(i,r)}while(ul)}if(yu.current=Zu,e=Ct!==null&&Ct.next!==null,Vs=0,Ft=Ct=ht=null,Yu=!1,e)throw Error(te(300));return t}function fg(){var t=Rl!==0;return Rl=0,t}function Ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?ht.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function ui(){if(Ct===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Ft===null?ht.memoizedState:Ft.next;if(e!==null)Ft=e,Ct=t;else{if(t===null)throw Error(te(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ft===null?ht.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Ll(t,e){return typeof e=="function"?e(t):e}function Oh(t){var e=ui(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Vs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ht.lanes|=u,Hs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Mi(i,e.memoizedState)||(An=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Hs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fh(t){var e=ui(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Mi(s,e.memoizedState)||(An=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Fw(){}function Uw(t,e){var n=ht,i=ui(),r=e(),s=!Mi(i.memoizedState,r);if(s&&(i.memoizedState=r,An=!0),i=i.queue,pg(Vw.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,Dl(9,Bw.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(te(349));Vs&30||zw(n,e,r)}return r}function zw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bw(t,e,n,i){e.value=n,e.getSnapshot=i,Hw(e)&&Gw(t)}function Vw(t,e,n){return n(function(){Hw(e)&&Gw(t)})}function Hw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mi(t,n)}catch{return!0}}function Gw(t){var e=mr(t,1);e!==null&&Si(e,t,1,-1)}function Mv(t){var e=Ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ll,lastRenderedState:t},e.queue=t,t=t.dispatch=e2.bind(null,ht,t),[e.memoizedState,t]}function Dl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ww(){return ui().memoizedState}function xu(t,e,n,i){var r=Ii();ht.flags|=t,r.memoizedState=Dl(1|e,n,void 0,i===void 0?null:i)}function Pd(t,e,n,i){var r=ui();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&dg(i,o.deps)){r.memoizedState=Dl(e,n,s,i);return}}ht.flags|=t,r.memoizedState=Dl(1|e,n,s,i)}function Ev(t,e){return xu(8390656,8,t,e)}function pg(t,e){return Pd(2048,8,t,e)}function jw(t,e){return Pd(4,2,t,e)}function $w(t,e){return Pd(4,4,t,e)}function qw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xw(t,e,n){return n=n!=null?n.concat([t]):null,Pd(4,4,qw.bind(null,e,t),n)}function mg(){}function Kw(t,e){var n=ui();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&dg(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Yw(t,e){var n=ui();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&dg(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Zw(t,e,n){return Vs&21?(Mi(n,e)||(n=ew(),ht.lanes|=n,Hs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=n)}function JT(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=Nh.transition;Nh.transition={};try{t(!1),e()}finally{Qe=n,Nh.transition=i}}function Jw(){return ui().memoizedState}function QT(t,e,n){var i=Gr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Qw(t))e1(e,n);else if(n=Pw(t,e,n,i),n!==null){var r=wn();Si(n,t,i,r),t1(n,e,i)}}function e2(t,e,n){var i=Gr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qw(t))e1(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Mi(a,o)){var l=e.interleaved;l===null?(r.next=r,og(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Pw(t,e,r,i),n!==null&&(r=wn(),Si(n,t,i,r),t1(n,e,i))}}function Qw(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function e1(t,e){ul=Yu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function t1(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$m(t,n)}}var Zu={readContext:ci,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},t2={readContext:ci,useCallback:function(t,e){return Ii().memoizedState=[t,e===void 0?null:e],t},useContext:ci,useEffect:Ev,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xu(4194308,4,qw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xu(4194308,4,t,e)},useInsertionEffect:function(t,e){return xu(4,2,t,e)},useMemo:function(t,e){var n=Ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=QT.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=Ii();return t={current:t},e.memoizedState=t},useState:Mv,useDebugValue:mg,useDeferredValue:function(t){return Ii().memoizedState=t},useTransition:function(){var t=Mv(!1),e=t[0];return t=JT.bind(null,t[1]),Ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=Ii();if(ut){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Bt===null)throw Error(te(349));Vs&30||zw(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ev(Vw.bind(null,i,s,t),[t]),i.flags|=2048,Dl(9,Bw.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ii(),e=Bt.identifierPrefix;if(ut){var n=sr,i=rr;n=(i&~(1<<32-wi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Rl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ZT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},n2={readContext:ci,useCallback:Kw,useContext:ci,useEffect:pg,useImperativeHandle:Xw,useInsertionEffect:jw,useLayoutEffect:$w,useMemo:Yw,useReducer:Oh,useRef:Ww,useState:function(){return Oh(Ll)},useDebugValue:mg,useDeferredValue:function(t){var e=ui();return Zw(e,Ct.memoizedState,t)},useTransition:function(){var t=Oh(Ll)[0],e=ui().memoizedState;return[t,e]},useMutableSource:Fw,useSyncExternalStore:Uw,useId:Jw,unstable_isNewReconciler:!1},i2={readContext:ci,useCallback:Kw,useContext:ci,useEffect:pg,useImperativeHandle:Xw,useInsertionEffect:jw,useLayoutEffect:$w,useMemo:Yw,useReducer:Fh,useRef:Ww,useState:function(){return Fh(Ll)},useDebugValue:mg,useDeferredValue:function(t){var e=ui();return Ct===null?e.memoizedState=t:Zw(e,Ct.memoizedState,t)},useTransition:function(){var t=Fh(Ll)[0],e=ui().memoizedState;return[t,e]},useMutableSource:Fw,useSyncExternalStore:Uw,useId:Jw,unstable_isNewReconciler:!1};function la(t,e){try{var n="",i=e;do n+=Rb(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Uh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var r2=typeof WeakMap=="function"?WeakMap:Map;function n1(t,e,n){n=ur(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qu||(Qu=!0,Vp=i),Rp(t,e)},n}function i1(t,e,n){n=ur(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Rp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rp(t,e),typeof i!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function bv(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new r2;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=_2.bind(null,t,e,n),e.then(t,t))}function Tv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cv(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ur(-1,1),e.tag=2,Vr(n,e,1))),n.lanes|=1),t)}var s2=yr.ReactCurrentOwner,An=!1;function _n(t,e,n,i){e.child=t===null?Nw(e,null,n,i):oa(e,t.child,n,i)}function Av(t,e,n,i,r){n=n.render;var s=e.ref;return qo(e,r),i=hg(t,e,n,i,s,r),n=fg(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gr(t,e,r)):(ut&&n&&eg(e),e.flags|=1,_n(t,e,i,r),e.child)}function Iv(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Mg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,r1(t,e,s,i,r)):(t=Eu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:bl,n(o,i)&&t.ref===e.ref)return gr(t,e,r)}return e.flags|=1,t=Wr(s,i),t.ref=e.ref,t.return=e,e.child=t}function r1(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(bl(s,i)&&t.ref===e.ref)if(An=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(An=!0);else return e.lanes=t.lanes,gr(t,e,r)}return Lp(t,e,n,i,r)}function s1(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Uo,zn),zn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(Uo,zn),zn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(Uo,zn),zn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(Uo,zn),zn|=i;return _n(t,e,r,n),e.child}function o1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lp(t,e,n,i,r){var s=Pn(n)?zs:hn.current;return s=ra(e,s),qo(e,r),n=hg(t,e,n,i,s,r),i=fg(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gr(t,e,r)):(ut&&i&&eg(e),e.flags|=1,_n(t,e,n,r),e.child)}function Pv(t,e,n,i,r){if(Pn(n)){var s=!0;Gu(e)}else s=!1;if(qo(e,r),e.stateNode===null)wu(t,e),Dw(e,n,i),Pp(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ci(c):(c=Pn(n)?zs:hn.current,c=ra(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&wv(e,o,i,c),Cr=!1;var h=e.memoizedState;o.state=h,Xu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||In.current||Cr?(typeof u=="function"&&(Ip(e,n,u,i),l=e.memoizedState),(a=Cr||xv(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Rw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:vi(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ci(l):(l=Pn(n)?zs:hn.current,l=ra(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&wv(e,o,i,l),Cr=!1,h=e.memoizedState,o.state=h,Xu(e,i,o,r);var y=e.memoizedState;a!==d||h!==y||In.current||Cr?(typeof m=="function"&&(Ip(e,n,m,i),y=e.memoizedState),(c=Cr||xv(e,n,c,i,h,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Dp(t,e,n,i,s,r)}function Dp(t,e,n,i,r,s){o1(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&mv(e,n,!1),gr(t,e,s);i=e.stateNode,s2.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=oa(e,t.child,null,s),e.child=oa(e,null,a,s)):_n(t,e,a,s),e.memoizedState=i.state,r&&mv(e,n,!0),e.child}function a1(t){var e=t.stateNode;e.pendingContext?pv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pv(t,e.context,!1),lg(t,e.containerInfo)}function Rv(t,e,n,i,r){return sa(),ng(r),e.flags|=256,_n(t,e,n,i),e.child}var kp={dehydrated:null,treeContext:null,retryLane:0};function Np(t){return{baseLanes:t,cachePool:null,transitions:null}}function l1(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(dt,r&1),t===null)return Cp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dd(o,i,0,null),t=Ds(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Np(n),e.memoizedState=kp,t):gg(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return o2(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Wr(a,s):(s=Ds(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Np(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kp,i}return s=t.child,t=s.sibling,i=Wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function gg(t,e){return e=Dd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function zc(t,e,n,i){return i!==null&&ng(i),oa(e,t.child,null,n),t=gg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function o2(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Uh(Error(te(422))),zc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Dd({mode:"visible",children:i.children},r,0,null),s=Ds(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&oa(e,t.child,null,o),e.child.memoizedState=Np(o),e.memoizedState=kp,s);if(!(e.mode&1))return zc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Uh(s,i,void 0),zc(t,e,o,i)}if(a=(o&t.childLanes)!==0,An||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mr(t,r),Si(i,t,r,-1))}return Sg(),i=Uh(Error(te(421))),zc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=y2.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Bn=Br(r.nextSibling),Gn=e,ut=!0,yi=null,t!==null&&(ei[ti++]=rr,ei[ti++]=sr,ei[ti++]=Bs,rr=t.id,sr=t.overflow,Bs=e),e=gg(e,i.children),e.flags|=4096,e)}function Lv(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ap(t.return,e,n)}function zh(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function c1(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(_n(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lv(t,n,e);else if(t.tag===19)Lv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ku(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),zh(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ku(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}zh(e,!0,n,null,s);break;case"together":zh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function a2(t,e,n){switch(e.tag){case 3:a1(e),sa();break;case 5:Ow(e);break;case 1:Pn(e.type)&&Gu(e);break;case 4:lg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt($u,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?l1(t,e,n):(nt(dt,dt.current&1),t=gr(t,e,n),t!==null?t.sibling:null);nt(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return c1(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,s1(t,e,n)}return gr(t,e,n)}var u1,Op,d1,h1;u1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Op=function(){};d1=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ts(zi.current);var s=null;switch(n){case"input":r=rp(t,r),i=rp(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=ap(t,r),i=ap(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Vu)}cp(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_l.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_l.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};h1=function(t,e,n,i){n!==i&&(e.flags|=4)};function Fa(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function nn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function l2(t,e,n){var i=e.pendingProps;switch(tg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return Pn(e.type)&&Hu(),nn(e),null;case 3:return i=e.stateNode,aa(),lt(In),lt(hn),ug(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Fc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yi!==null&&(Wp(yi),yi=null))),Op(t,e),nn(e),null;case 5:cg(e);var r=Ts(Pl.current);if(n=e.type,t!==null&&e.stateNode!=null)d1(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return nn(e),null}if(t=Ts(zi.current),Fc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Li]=e,i[Al]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Za.length;r++)it(Za[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":V0(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":G0(i,s),it("invalid",i)}cp(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Oc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Oc(i.textContent,a,t),r=["children",""+a]):_l.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":Ac(i),H0(i,s,!0);break;case"textarea":Ac(i),W0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Vu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Li]=e,t[Al]=i,u1(t,e,!1,!1),e.stateNode=t;e:{switch(o=up(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Za.length;r++)it(Za[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":V0(t,i),r=rp(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),it("invalid",t);break;case"textarea":G0(t,i),r=ap(t,i),it("invalid",t);break;default:r=i}cp(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Hx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yl(t,l):typeof l=="number"&&yl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_l.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&Bm(t,s,l,o))}switch(n){case"input":Ac(t),H0(t,i,!1);break;case"textarea":Ac(t),W0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Jr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Go(t,!!i.multiple,s,!1):i.defaultValue!=null&&Go(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Vu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(t&&e.stateNode!=null)h1(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Ts(Pl.current),Ts(zi.current),Fc(e)){if(i=e.stateNode,n=e.memoizedProps,i[Li]=e,(s=i.nodeValue!==n)&&(t=Gn,t!==null))switch(t.tag){case 3:Oc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Oc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Li]=e,e.stateNode=i}return nn(e),null;case 13:if(lt(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&Bn!==null&&e.mode&1&&!(e.flags&128))Iw(),sa(),e.flags|=98560,s=!1;else if(s=Fc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Li]=e}else sa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else yi!==null&&(Wp(yi),yi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?It===0&&(It=3):Sg())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return aa(),Op(t,e),t===null&&Tl(e.stateNode.containerInfo),nn(e),null;case 10:return sg(e.type._context),nn(e),null;case 17:return Pn(e.type)&&Hu(),nn(e),null;case 19:if(lt(dt),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Fa(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ku(t),o!==null){for(e.flags|=128,Fa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>ca&&(e.flags|=128,i=!0,Fa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ku(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return nn(e),null}else 2*vt()-s.renderingStartTime>ca&&n!==1073741824&&(e.flags|=128,i=!0,Fa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=dt.current,nt(dt,i?n&1|2:n&1),e):(nn(e),null);case 22:case 23:return wg(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?zn&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function c2(t,e){switch(tg(e),e.tag){case 1:return Pn(e.type)&&Hu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return aa(),lt(In),lt(hn),ug(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cg(e),null;case 13:if(lt(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));sa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(dt),null;case 4:return aa(),null;case 10:return sg(e.type._context),null;case 22:case 23:return wg(),null;case 24:return null;default:return null}}var Bc=!1,on=!1,u2=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Fo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){pt(t,e,i)}else n.current=null}function Fp(t,e,n){try{n()}catch(i){pt(t,e,i)}}var Dv=!1;function d2(t,e){if(xp=Uu,t=gw(),Qm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wp={focusedElem:t,selectionRange:n},Uu=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var f=y.memoizedProps,p=y.memoizedState,g=e.stateNode,v=g.getSnapshotBeforeUpdate(e.elementType===e.type?f:vi(e.type,f),p);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){pt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return y=Dv,Dv=!1,y}function dl(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Fp(e,n,s)}r=r.next}while(r!==i)}}function Rd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Up(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function f1(t){var e=t.alternate;e!==null&&(t.alternate=null,f1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Li],delete e[Al],delete e[Ep],delete e[qT],delete e[XT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p1(t){return t.tag===5||t.tag===3||t.tag===4}function kv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vu));else if(i!==4&&(t=t.child,t!==null))for(zp(t,e,n),t=t.sibling;t!==null;)zp(t,e,n),t=t.sibling}function Bp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bp(t,e,n),t=t.sibling;t!==null;)Bp(t,e,n),t=t.sibling}var Wt=null,_i=!1;function xr(t,e,n){for(n=n.child;n!==null;)m1(t,e,n),n=n.sibling}function m1(t,e,n){if(Ui&&typeof Ui.onCommitFiberUnmount=="function")try{Ui.onCommitFiberUnmount(Md,n)}catch{}switch(n.tag){case 5:on||Fo(n,e);case 6:var i=Wt,r=_i;Wt=null,xr(t,e,n),Wt=i,_i=r,Wt!==null&&(_i?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(_i?(t=Wt,n=n.stateNode,t.nodeType===8?Lh(t.parentNode,n):t.nodeType===1&&Lh(t,n),Ml(t)):Lh(Wt,n.stateNode));break;case 4:i=Wt,r=_i,Wt=n.stateNode.containerInfo,_i=!0,xr(t,e,n),Wt=i,_i=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fp(n,e,o),r=r.next}while(r!==i)}xr(t,e,n);break;case 1:if(!on&&(Fo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){pt(n,e,a)}xr(t,e,n);break;case 21:xr(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,xr(t,e,n),on=i):xr(t,e,n);break;default:xr(t,e,n)}}function Nv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new u2),e.forEach(function(i){var r=x2.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function hi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Wt=a.stateNode,_i=!1;break e;case 3:Wt=a.stateNode.containerInfo,_i=!0;break e;case 4:Wt=a.stateNode.containerInfo,_i=!0;break e}a=a.return}if(Wt===null)throw Error(te(160));m1(s,o,r),Wt=null,_i=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g1(e,t),e=e.sibling}function g1(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hi(e,t),Ci(t),i&4){try{dl(3,t,t.return),Rd(3,t)}catch(f){pt(t,t.return,f)}try{dl(5,t,t.return)}catch(f){pt(t,t.return,f)}}break;case 1:hi(e,t),Ci(t),i&512&&n!==null&&Fo(n,n.return);break;case 5:if(hi(e,t),Ci(t),i&512&&n!==null&&Fo(n,n.return),t.flags&32){var r=t.stateNode;try{yl(r,"")}catch(f){pt(t,t.return,f)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Fx(r,s),up(a,o);var c=up(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Hx(r,d):u==="dangerouslySetInnerHTML"?Bx(r,d):u==="children"?yl(r,d):Bm(r,u,d,c)}switch(a){case"input":sp(r,s);break;case"textarea":Ux(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Go(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Go(r,!!s.multiple,s.defaultValue,!0):Go(r,!!s.multiple,s.multiple?[]:"",!1))}r[Al]=s}catch(f){pt(t,t.return,f)}}break;case 6:if(hi(e,t),Ci(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(f){pt(t,t.return,f)}}break;case 3:if(hi(e,t),Ci(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ml(e.containerInfo)}catch(f){pt(t,t.return,f)}break;case 4:hi(e,t),Ci(t);break;case 13:hi(e,t),Ci(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(yg=vt())),i&4&&Nv(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(on=(c=on)||u,hi(e,t),on=c):hi(e,t),Ci(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(xe=t,u=t.child;u!==null;){for(d=xe=u;xe!==null;){switch(h=xe,m=h.child,h.tag){case 0:case 11:case 14:case 15:dl(4,h,h.return);break;case 1:Fo(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(f){pt(i,n,f)}}break;case 5:Fo(h,h.return);break;case 22:if(h.memoizedState!==null){Fv(d);continue}}m!==null?(m.return=h,xe=m):Fv(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vx("display",o))}catch(f){pt(t,t.return,f)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(f){pt(t,t.return,f)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:hi(e,t),Ci(t),i&4&&Nv(t);break;case 21:break;default:hi(e,t),Ci(t)}}function Ci(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p1(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(yl(r,""),i.flags&=-33);var s=kv(t);Bp(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=kv(t);zp(t,a,o);break;default:throw Error(te(161))}}catch(l){pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function h2(t,e,n){xe=t,v1(t)}function v1(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Bc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=Bc;var c=on;if(Bc=o,(on=l)&&!c)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?Uv(r):l!==null?(l.return=o,xe=l):Uv(r);for(;s!==null;)xe=s,v1(s),s=s.sibling;xe=r,Bc=a,on=c}Ov(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):Ov(t)}}function Ov(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||Rd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:vi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yv(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ml(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}on||e.flags&512&&Up(e)}catch(h){pt(e,e.return,h)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Fv(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Uv(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rd(4,e)}catch(l){pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{Up(e)}catch(l){pt(e,s,l)}break;case 5:var o=e.return;try{Up(e)}catch(l){pt(e,o,l)}}}catch(l){pt(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var f2=Math.ceil,Ju=yr.ReactCurrentDispatcher,vg=yr.ReactCurrentOwner,ai=yr.ReactCurrentBatchConfig,Xe=0,Bt=null,Mt=null,Kt=0,zn=0,Uo=rs(0),It=0,kl=null,Hs=0,Ld=0,_g=0,hl=null,Tn=null,yg=0,ca=1/0,er=null,Qu=!1,Vp=null,Hr=null,Vc=!1,Nr=null,ed=0,fl=0,Hp=null,Su=-1,Mu=0;function wn(){return Xe&6?vt():Su!==-1?Su:Su=vt()}function Gr(t){return t.mode&1?Xe&2&&Kt!==0?Kt&-Kt:YT.transition!==null?(Mu===0&&(Mu=ew()),Mu):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:aw(t.type)),t):1}function Si(t,e,n,i){if(50<fl)throw fl=0,Hp=null,Error(te(185));rc(t,n,i),(!(Xe&2)||t!==Bt)&&(t===Bt&&(!(Xe&2)&&(Ld|=n),It===4&&Ir(t,Kt)),Rn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(ca=vt()+500,Ad&&ss()))}function Rn(t,e){var n=t.callbackNode;Yb(t,e);var i=Fu(t,t===Bt?Kt:0);if(i===0)n!==null&&q0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&q0(n),e===1)t.tag===0?KT(zv.bind(null,t)):Tw(zv.bind(null,t)),jT(function(){!(Xe&6)&&ss()}),n=null;else{switch(tw(i)){case 1:n=jm;break;case 4:n=Jx;break;case 16:n=Ou;break;case 536870912:n=Qx;break;default:n=Ou}n=b1(n,_1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _1(t,e){if(Su=-1,Mu=0,Xe&6)throw Error(te(327));var n=t.callbackNode;if(Xo()&&t.callbackNode!==n)return null;var i=Fu(t,t===Bt?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=td(t,i);else{e=i;var r=Xe;Xe|=2;var s=x1();(Bt!==t||Kt!==e)&&(er=null,ca=vt()+500,Ls(t,e));do try{g2();break}catch(a){y1(t,a)}while(1);rg(),Ju.current=s,Xe=r,Mt!==null?e=0:(Bt=null,Kt=0,e=It)}if(e!==0){if(e===2&&(r=mp(t),r!==0&&(i=r,e=Gp(t,r))),e===1)throw n=kl,Ls(t,0),Ir(t,i),Rn(t,vt()),n;if(e===6)Ir(t,i);else{if(r=t.current.alternate,!(i&30)&&!p2(r)&&(e=td(t,i),e===2&&(s=mp(t),s!==0&&(i=s,e=Gp(t,s))),e===1))throw n=kl,Ls(t,0),Ir(t,i),Rn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:vs(t,Tn,er);break;case 3:if(Ir(t,i),(i&130023424)===i&&(e=yg+500-vt(),10<e)){if(Fu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){wn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Mp(vs.bind(null,t,Tn,er),e);break}vs(t,Tn,er);break;case 4:if(Ir(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-wi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*f2(i/1960))-i,10<i){t.timeoutHandle=Mp(vs.bind(null,t,Tn,er),i);break}vs(t,Tn,er);break;case 5:vs(t,Tn,er);break;default:throw Error(te(329))}}}return Rn(t,vt()),t.callbackNode===n?_1.bind(null,t):null}function Gp(t,e){var n=hl;return t.current.memoizedState.isDehydrated&&(Ls(t,e).flags|=256),t=td(t,e),t!==2&&(e=Tn,Tn=n,e!==null&&Wp(e)),t}function Wp(t){Tn===null?Tn=t:Tn.push.apply(Tn,t)}function p2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Mi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ir(t,e){for(e&=~_g,e&=~Ld,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wi(e),i=1<<n;t[n]=-1,e&=~i}}function zv(t){if(Xe&6)throw Error(te(327));Xo();var e=Fu(t,0);if(!(e&1))return Rn(t,vt()),null;var n=td(t,e);if(t.tag!==0&&n===2){var i=mp(t);i!==0&&(e=i,n=Gp(t,i))}if(n===1)throw n=kl,Ls(t,0),Ir(t,e),Rn(t,vt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vs(t,Tn,er),Rn(t,vt()),null}function xg(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(ca=vt()+500,Ad&&ss())}}function Gs(t){Nr!==null&&Nr.tag===0&&!(Xe&6)&&Xo();var e=Xe;Xe|=1;var n=ai.transition,i=Qe;try{if(ai.transition=null,Qe=1,t)return t()}finally{Qe=i,ai.transition=n,Xe=e,!(Xe&6)&&ss()}}function wg(){zn=Uo.current,lt(Uo)}function Ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,WT(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(tg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hu();break;case 3:aa(),lt(In),lt(hn),ug();break;case 5:cg(i);break;case 4:aa();break;case 13:lt(dt);break;case 19:lt(dt);break;case 10:sg(i.type._context);break;case 22:case 23:wg()}n=n.return}if(Bt=t,Mt=t=Wr(t.current,null),Kt=zn=e,It=0,kl=null,_g=Ld=Hs=0,Tn=hl=null,bs!==null){for(e=0;e<bs.length;e++)if(n=bs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}bs=null}return t}function y1(t,e){do{var n=Mt;try{if(rg(),yu.current=Zu,Yu){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Yu=!1}if(Vs=0,Ft=Ct=ht=null,ul=!1,Rl=0,vg.current=null,n===null||n.return===null){It=1,kl=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Tv(o);if(m!==null){m.flags&=-257,Cv(m,o,a,s,e),m.mode&1&&bv(s,c,e),e=m,l=c;var y=e.updateQueue;if(y===null){var f=new Set;f.add(l),e.updateQueue=f}else y.add(l);break e}else{if(!(e&1)){bv(s,c,e),Sg();break e}l=Error(te(426))}}else if(ut&&a.mode&1){var p=Tv(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Cv(p,o,a,s,e),ng(la(l,a));break e}}s=l=la(l,a),It!==4&&(It=2),hl===null?hl=[s]:hl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=n1(s,l,e);_v(s,g);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Hr===null||!Hr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=i1(s,a,e);_v(s,S);break e}}s=s.return}while(s!==null)}S1(n)}catch(x){e=x,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(1)}function x1(){var t=Ju.current;return Ju.current=Zu,t===null?Zu:t}function Sg(){(It===0||It===3||It===2)&&(It=4),Bt===null||!(Hs&268435455)&&!(Ld&268435455)||Ir(Bt,Kt)}function td(t,e){var n=Xe;Xe|=2;var i=x1();(Bt!==t||Kt!==e)&&(er=null,Ls(t,e));do try{m2();break}catch(r){y1(t,r)}while(1);if(rg(),Xe=n,Ju.current=i,Mt!==null)throw Error(te(261));return Bt=null,Kt=0,It}function m2(){for(;Mt!==null;)w1(Mt)}function g2(){for(;Mt!==null&&!Vb();)w1(Mt)}function w1(t){var e=E1(t.alternate,t,zn);t.memoizedProps=t.pendingProps,e===null?S1(t):Mt=e,vg.current=null}function S1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=c2(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Mt=null;return}}else if(n=l2(n,e,zn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);It===0&&(It=5)}function vs(t,e,n){var i=Qe,r=ai.transition;try{ai.transition=null,Qe=1,v2(t,e,n,i)}finally{ai.transition=r,Qe=i}return null}function v2(t,e,n,i){do Xo();while(Nr!==null);if(Xe&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Zb(t,s),t===Bt&&(Mt=Bt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vc||(Vc=!0,b1(Ou,function(){return Xo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ai.transition,ai.transition=null;var o=Qe;Qe=1;var a=Xe;Xe|=4,vg.current=null,d2(t,n),g1(n,t),FT(wp),Uu=!!xp,wp=xp=null,t.current=n,h2(n),Hb(),Xe=a,Qe=o,ai.transition=s}else t.current=n;if(Vc&&(Vc=!1,Nr=t,ed=r),s=t.pendingLanes,s===0&&(Hr=null),jb(n.stateNode),Rn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qu)throw Qu=!1,t=Vp,Vp=null,t;return ed&1&&t.tag!==0&&Xo(),s=t.pendingLanes,s&1?t===Hp?fl++:(fl=0,Hp=t):fl=0,ss(),null}function Xo(){if(Nr!==null){var t=tw(ed),e=ai.transition,n=Qe;try{if(ai.transition=null,Qe=16>t?16:t,Nr===null)var i=!1;else{if(t=Nr,Nr=null,ed=0,Xe&6)throw Error(te(331));var r=Xe;for(Xe|=4,xe=t.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(xe=c;xe!==null;){var u=xe;switch(u.tag){case 0:case 11:case 15:dl(8,u,s)}var d=u.child;if(d!==null)d.return=u,xe=d;else for(;xe!==null;){u=xe;var h=u.sibling,m=u.return;if(f1(u),u===c){xe=null;break}if(h!==null){h.return=m,xe=h;break}xe=m}}}var y=s.alternate;if(y!==null){var f=y.child;if(f!==null){y.child=null;do{var p=f.sibling;f.sibling=null,f=p}while(f!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:dl(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,xe=g;break e}xe=s.return}}var v=t.current;for(xe=v;xe!==null;){o=xe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,xe=_;else e:for(o=v;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rd(9,a)}}catch(x){pt(a,a.return,x)}if(a===o){xe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,xe=S;break e}xe=a.return}}if(Xe=r,ss(),Ui&&typeof Ui.onPostCommitFiberRoot=="function")try{Ui.onPostCommitFiberRoot(Md,t)}catch{}i=!0}return i}finally{Qe=n,ai.transition=e}}return!1}function Bv(t,e,n){e=la(n,e),e=n1(t,e,1),t=Vr(t,e,1),e=wn(),t!==null&&(rc(t,1,e),Rn(t,e))}function pt(t,e,n){if(t.tag===3)Bv(t,t,n);else for(;e!==null;){if(e.tag===3){Bv(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hr===null||!Hr.has(i))){t=la(n,t),t=i1(e,t,1),e=Vr(e,t,1),t=wn(),e!==null&&(rc(e,1,t),Rn(e,t));break}}e=e.return}}function _2(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=wn(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Kt&n)===n&&(It===4||It===3&&(Kt&130023424)===Kt&&500>vt()-yg?Ls(t,0):_g|=n),Rn(t,e)}function M1(t,e){e===0&&(t.mode&1?(e=Rc,Rc<<=1,!(Rc&130023424)&&(Rc=4194304)):e=1);var n=wn();t=mr(t,e),t!==null&&(rc(t,e,n),Rn(t,n))}function y2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),M1(t,n)}function x2(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),M1(t,n)}var E1;E1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||In.current)An=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return An=!1,a2(t,e,n);An=!!(t.flags&131072)}else An=!1,ut&&e.flags&1048576&&Cw(e,ju,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;wu(t,e),t=e.pendingProps;var r=ra(e,hn.current);qo(e,n),r=hg(null,e,i,t,r,n);var s=fg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pn(i)?(s=!0,Gu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ag(e),r.updater=Id,e.stateNode=r,r._reactInternals=e,Pp(e,i,t,n),e=Dp(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&eg(e),_n(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(wu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=S2(i),t=vi(i,t),r){case 0:e=Lp(null,e,i,t,n);break e;case 1:e=Pv(null,e,i,t,n);break e;case 11:e=Av(null,e,i,t,n);break e;case 14:e=Iv(null,e,i,vi(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),Lp(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),Pv(t,e,i,r,n);case 3:e:{if(a1(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Rw(t,e),Xu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=la(Error(te(423)),e),e=Rv(t,e,i,n,r);break e}else if(i!==r){r=la(Error(te(424)),e),e=Rv(t,e,i,n,r);break e}else for(Bn=Br(e.stateNode.containerInfo.firstChild),Gn=e,ut=!0,yi=null,n=Nw(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sa(),i===r){e=gr(t,e,n);break e}_n(t,e,i,n)}e=e.child}return e;case 5:return Ow(e),t===null&&Cp(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Sp(i,r)?o=null:s!==null&&Sp(i,s)&&(e.flags|=32),o1(t,e),_n(t,e,o,n),e.child;case 6:return t===null&&Cp(e),null;case 13:return l1(t,e,n);case 4:return lg(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=oa(e,null,i,n):_n(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),Av(t,e,i,r,n);case 7:return _n(t,e,e.pendingProps,n),e.child;case 8:return _n(t,e,e.pendingProps.children,n),e.child;case 12:return _n(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt($u,i._currentValue),i._currentValue=o,s!==null)if(Mi(s.value,o)){if(s.children===r.children&&!In.current){e=gr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ur(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ap(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ap(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_n(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,qo(e,n),r=ci(r),i=i(r),e.flags|=1,_n(t,e,i,n),e.child;case 14:return i=e.type,r=vi(i,e.pendingProps),r=vi(i.type,r),Iv(t,e,i,r,n);case 15:return r1(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vi(i,r),wu(t,e),e.tag=1,Pn(i)?(t=!0,Gu(e)):t=!1,qo(e,n),Dw(e,i,r),Pp(e,i,r,n),Dp(null,e,i,!0,t,n);case 19:return c1(t,e,n);case 22:return s1(t,e,n)}throw Error(te(156,e.tag))};function b1(t,e){return Zx(t,e)}function w2(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(t,e,n,i){return new w2(t,e,n,i)}function Mg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function S2(t){if(typeof t=="function")return Mg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hm)return 11;if(t===Gm)return 14}return 2}function Wr(t,e){var n=t.alternate;return n===null?(n=oi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Eu(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Mg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ao:return Ds(n.children,r,s,e);case Vm:o=8,r|=8;break;case ep:return t=oi(12,n,e,r|2),t.elementType=ep,t.lanes=s,t;case tp:return t=oi(13,n,e,r),t.elementType=tp,t.lanes=s,t;case np:return t=oi(19,n,e,r),t.elementType=np,t.lanes=s,t;case kx:return Dd(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lx:o=10;break e;case Dx:o=9;break e;case Hm:o=11;break e;case Gm:o=14;break e;case Tr:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=oi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ds(t,e,n,i){return t=oi(7,t,i,e),t.lanes=n,t}function Dd(t,e,n,i){return t=oi(22,t,i,e),t.elementType=kx,t.lanes=n,t.stateNode={isHidden:!1},t}function Bh(t,e,n){return t=oi(6,t,null,e),t.lanes=n,t}function Vh(t,e,n){return e=oi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function M2(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wh(0),this.expirationTimes=wh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Eg(t,e,n,i,r,s,o,a,l){return t=new M2(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=oi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ag(s),t}function E2(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Co,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function T1(t){if(!t)return Qr;t=t._reactInternals;e:{if(to(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(Pn(n))return bw(t,n,e)}return e}function C1(t,e,n,i,r,s,o,a,l){return t=Eg(n,i,!0,t,r,s,o,a,l),t.context=T1(null),n=t.current,i=wn(),r=Gr(n),s=ur(i,r),s.callback=e??null,Vr(n,s,r),t.current.lanes=r,rc(t,r,i),Rn(t,i),t}function kd(t,e,n,i){var r=e.current,s=wn(),o=Gr(r);return n=T1(n),e.context===null?e.context=n:e.pendingContext=n,e=ur(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Vr(r,e,o),t!==null&&(Si(t,r,o,s),_u(t,r,o)),o}function nd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bg(t,e){Vv(t,e),(t=t.alternate)&&Vv(t,e)}function b2(){return null}var A1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tg(t){this._internalRoot=t}Nd.prototype.render=Tg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));kd(t,e,null,null)};Nd.prototype.unmount=Tg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gs(function(){kd(null,t,null,null)}),e[pr]=null}};function Nd(t){this._internalRoot=t}Nd.prototype.unstable_scheduleHydration=function(t){if(t){var e=rw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ar.length&&e!==0&&e<Ar[n].priority;n++);Ar.splice(n,0,t),n===0&&ow(t)}};function Cg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Od(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hv(){}function T2(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=nd(o);s.call(c)}}var o=C1(e,i,t,0,null,!1,!1,"",Hv);return t._reactRootContainer=o,t[pr]=o.current,Tl(t.nodeType===8?t.parentNode:t),Gs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=nd(l);a.call(c)}}var l=Eg(t,0,!1,null,null,!1,!1,"",Hv);return t._reactRootContainer=l,t[pr]=l.current,Tl(t.nodeType===8?t.parentNode:t),Gs(function(){kd(e,l,n,i)}),l}function Fd(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nd(o);a.call(l)}}kd(e,o,t,r)}else o=T2(n,e,t,r,i);return nd(o)}nw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ya(e.pendingLanes);n!==0&&($m(e,n|1),Rn(e,vt()),!(Xe&6)&&(ca=vt()+500,ss()))}break;case 13:Gs(function(){var i=mr(t,1);if(i!==null){var r=wn();Si(i,t,1,r)}}),bg(t,1)}};qm=function(t){if(t.tag===13){var e=mr(t,134217728);if(e!==null){var n=wn();Si(e,t,134217728,n)}bg(t,134217728)}};iw=function(t){if(t.tag===13){var e=Gr(t),n=mr(t,e);if(n!==null){var i=wn();Si(n,t,e,i)}bg(t,e)}};rw=function(){return Qe};sw=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};hp=function(t,e,n){switch(e){case"input":if(sp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cd(i);if(!r)throw Error(te(90));Ox(i),sp(i,r)}}}break;case"textarea":Ux(t,n);break;case"select":e=n.value,e!=null&&Go(t,!!n.multiple,e,!1)}};jx=xg;$x=Gs;var C2={usingClientEntryPoint:!1,Events:[oc,Lo,Cd,Gx,Wx,xg]},Ua={findFiberByHostInstance:Es,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},A2={bundleType:Ua.bundleType,version:Ua.version,rendererPackageName:Ua.rendererPackageName,rendererConfig:Ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Kx(t),t===null?null:t.stateNode},findFiberByHostInstance:Ua.findFiberByHostInstance||b2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hc.isDisabled&&Hc.supportsFiber)try{Md=Hc.inject(A2),Ui=Hc}catch{}}Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C2;Xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cg(e))throw Error(te(200));return E2(t,e,null,n)};Xn.createRoot=function(t,e){if(!Cg(t))throw Error(te(299));var n=!1,i="",r=A1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Eg(t,1,!1,null,null,n,!1,i,r),t[pr]=e.current,Tl(t.nodeType===8?t.parentNode:t),new Tg(e)};Xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Kx(e),t=t===null?null:t.stateNode,t};Xn.flushSync=function(t){return Gs(t)};Xn.hydrate=function(t,e,n){if(!Od(e))throw Error(te(200));return Fd(null,t,e,!0,n)};Xn.hydrateRoot=function(t,e,n){if(!Cg(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=A1;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=C1(e,null,t,1,n??null,r,!1,s,o),t[pr]=e.current,Tl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Nd(e)};Xn.render=function(t,e,n){if(!Od(e))throw Error(te(200));return Fd(null,t,e,!1,n)};Xn.unmountComponentAtNode=function(t){if(!Od(t))throw Error(te(40));return t._reactRootContainer?(Gs(function(){Fd(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1};Xn.unstable_batchedUpdates=xg;Xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Od(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Fd(t,e,n,!1,i)};Xn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Xn})(bb);var Gv=Zf;Yf.createRoot=Gv.createRoot,Yf.hydrateRoot=Gv.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nl(){return Nl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Nl.apply(this,arguments)}var Or;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Or||(Or={}));const Wv="popstate";function I2(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return jp("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:id(r)}return R2(e,n,null,t)}function Pt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ag(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function P2(){return Math.random().toString(36).substr(2,8)}function jv(t,e){return{usr:t.state,key:t.key,idx:e}}function jp(t,e,n,i){return n===void 0&&(n=null),Nl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ya(e):e,{state:n,key:e&&e.key||i||P2()})}function id(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ya(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function R2(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Or.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Nl({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=Or.Pop;let p=u(),g=p==null?null:p-c;c=p,l&&l({action:a,location:f.location,delta:g})}function h(p,g){a=Or.Push;let v=jp(f.location,p,g);n&&n(v,p),c=u()+1;let _=jv(v,c),S=f.createHref(v);try{o.pushState(_,"",S)}catch{r.location.assign(S)}s&&l&&l({action:a,location:f.location,delta:1})}function m(p,g){a=Or.Replace;let v=jp(f.location,p,g);n&&n(v,p),c=u();let _=jv(v,c),S=f.createHref(v);o.replaceState(_,"",S),s&&l&&l({action:a,location:f.location,delta:0})}function y(p){let g=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:id(p);return Pt(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let f={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Wv,d),l=p,()=>{r.removeEventListener(Wv,d),l=null}},createHref(p){return e(r,p)},createURL:y,encodeLocation(p){let g=y(p);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:m,go(p){return o.go(p)}};return f}var $v;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($v||($v={}));function L2(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?ya(e):e,r=Ig(i.pathname||"/",n);if(r==null)return null;let s=I1(t);D2(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=H2(s[a],j2(r));return o}function I1(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Pt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=jr([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Pt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),I1(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:B2(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of P1(s.path))r(s,o,l)}),e}function P1(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=P1(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function D2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:V2(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const k2=/^:\w+$/,N2=3,O2=2,F2=1,U2=10,z2=-2,qv=t=>t==="*";function B2(t,e){let n=t.split("/"),i=n.length;return n.some(qv)&&(i+=z2),e&&(i+=O2),n.filter(r=>!qv(r)).reduce((r,s)=>r+(k2.test(s)?N2:s===""?F2:U2),i)}function V2(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function H2(t,e){let{routesMeta:n}=t,i={},r="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=r==="/"?e:e.slice(r.length)||"/",u=G2({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(i,u.params);let d=a.route;s.push({params:i,pathname:jr([r,u.pathname]),pathnameBase:K2(jr([r,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(r=jr([r,u.pathnameBase]))}return s}function G2(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=W2(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,d)=>{if(u==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return c[u]=$2(a[d]||"",u),c},{}),pathname:s,pathnameBase:o,pattern:t}}function W2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ag(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(i.push(a),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function j2(t){try{return decodeURI(t)}catch(e){return Ag(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function $2(t,e){try{return decodeURIComponent(t)}catch(n){return Ag(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ig(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function q2(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ya(t):t;return{pathname:n?n.startsWith("/")?n:X2(n,e):e,search:Y2(i),hash:Z2(r)}}function X2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Hh(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function R1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function L1(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ya(t):(r=Nl({},t),Pt(!r.pathname||!r.pathname.includes("?"),Hh("?","pathname","search",r)),Pt(!r.pathname||!r.pathname.includes("#"),Hh("#","pathname","hash",r)),Pt(!r.search||!r.search.includes("#"),Hh("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(i||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=q2(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const jr=t=>t.join("/").replace(/\/\/+/g,"/"),K2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Y2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Z2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function J2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Q2=["post","put","patch","delete"];[...Q2];/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const tC=typeof Object.is=="function"?Object.is:eC,{useState:nC,useEffect:iC,useLayoutEffect:rC,useDebugValue:sC}=Kf;function oC(t,e,n){const i=e(),[{inst:r},s]=nC({inst:{value:i,getSnapshot:e}});return rC(()=>{r.value=i,r.getSnapshot=e,Gh(r)&&s({inst:r})},[t,i,e]),iC(()=>(Gh(r)&&s({inst:r}),t(()=>{Gh(r)&&s({inst:r})})),[t]),sC(i),i}function Gh(t){const e=t.getSnapshot,n=t.value;try{const i=e();return!tC(n,i)}catch{return!0}}function aC(t,e,n){return e()}const lC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cC=!lC,uC=cC?aC:oC;"useSyncExternalStore"in Kf&&(t=>t.useSyncExternalStore)(Kf);const D1=de.createContext(null),k1=de.createContext(null),lc=de.createContext(null),Ud=de.createContext(null),xa=de.createContext({outlet:null,matches:[]}),N1=de.createContext(null);function $p(){return $p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$p.apply(this,arguments)}function dC(t,e){let{relative:n}=e===void 0?{}:e;cc()||Pt(!1);let{basename:i,navigator:r}=de.useContext(lc),{hash:s,pathname:o,search:a}=O1(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:jr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function cc(){return de.useContext(Ud)!=null}function zd(){return cc()||Pt(!1),de.useContext(Ud).location}function hC(){cc()||Pt(!1);let{basename:t,navigator:e}=de.useContext(lc),{matches:n}=de.useContext(xa),{pathname:i}=zd(),r=JSON.stringify(R1(n).map(a=>a.pathnameBase)),s=de.useRef(!1);return de.useEffect(()=>{s.current=!0}),de.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let c=L1(a,JSON.parse(r),i,l.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:jr([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state,l)},[t,e,r,i])}function O1(t,e){let{relative:n}=e===void 0?{}:e,{matches:i}=de.useContext(xa),{pathname:r}=zd(),s=JSON.stringify(R1(i).map(o=>o.pathnameBase));return de.useMemo(()=>L1(t,JSON.parse(s),r,n==="path"),[t,s,r,n])}function fC(t,e){cc()||Pt(!1);let{navigator:n}=de.useContext(lc),i=de.useContext(k1),{matches:r}=de.useContext(xa),s=r[r.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=zd(),c;if(e){var u;let f=typeof e=="string"?ya(e):e;a==="/"||(u=f.pathname)!=null&&u.startsWith(a)||Pt(!1),c=f}else c=l;let d=c.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",m=L2(t,{pathname:h}),y=vC(m&&m.map(f=>Object.assign({},f,{params:Object.assign({},o,f.params),pathname:jr([a,n.encodeLocation?n.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?a:jr([a,n.encodeLocation?n.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),r,i||void 0);return e&&y?de.createElement(Ud.Provider,{value:{location:$p({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Or.Pop}},y):y}function pC(){let t=wC(),e=J2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),n?de.createElement("pre",{style:r},n):null,s)}class mC extends de.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?de.createElement(xa.Provider,{value:this.props.routeContext},de.createElement(N1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function gC(t){let{routeContext:e,match:n,children:i}=t,r=de.useContext(D1);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),de.createElement(xa.Provider,{value:e},i)}function vC(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let i=t,r=n?.errors;if(r!=null){let s=i.findIndex(o=>o.route.id&&r?.[o.route.id]);s>=0||Pt(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,o,a)=>{let l=o.route.id?r?.[o.route.id]:null,c=null;n&&(o.route.ErrorBoundary?c=de.createElement(o.route.ErrorBoundary,null):o.route.errorElement?c=o.route.errorElement:c=de.createElement(pC,null));let u=e.concat(i.slice(0,a+1)),d=()=>{let h=s;return l?h=c:o.route.Component?h=de.createElement(o.route.Component,null):o.route.element&&(h=o.route.element),de.createElement(gC,{match:o,routeContext:{outlet:s,matches:u},children:h})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?de.createElement(mC,{location:n.location,component:c,error:l,children:d(),routeContext:{outlet:null,matches:u}}):d()},null)}var Xv;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Xv||(Xv={}));var rd;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(rd||(rd={}));function _C(t){let e=de.useContext(k1);return e||Pt(!1),e}function yC(t){let e=de.useContext(xa);return e||Pt(!1),e}function xC(t){let e=yC(),n=e.matches[e.matches.length-1];return n.route.id||Pt(!1),n.route.id}function wC(){var t;let e=de.useContext(N1),n=_C(rd.UseRouteError),i=xC(rd.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function bo(t){Pt(!1)}function SC(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Or.Pop,navigator:s,static:o=!1}=t;cc()&&Pt(!1);let a=e.replace(/^\/*/,"/"),l=de.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof i=="string"&&(i=ya(i));let{pathname:c="/",search:u="",hash:d="",state:h=null,key:m="default"}=i,y=de.useMemo(()=>{let f=Ig(c,a);return f==null?null:{location:{pathname:f,search:u,hash:d,state:h,key:m},navigationType:r}},[a,c,u,d,h,m,r]);return y==null?null:de.createElement(lc.Provider,{value:l},de.createElement(Ud.Provider,{children:n,value:y}))}function MC(t){let{children:e,location:n}=t,i=de.useContext(D1),r=i&&!e?i.router.routes:qp(e);return fC(r,n)}var Kv;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Kv||(Kv={}));new Promise(()=>{});function qp(t,e){e===void 0&&(e=[]);let n=[];return de.Children.forEach(t,(i,r)=>{if(!de.isValidElement(i))return;if(i.type===de.Fragment){n.push.apply(n,qp(i.props.children,e));return}i.type!==bo&&Pt(!1),!i.props.index||!i.props.children||Pt(!1);let s=[...e,r],o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=qp(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xp(){return Xp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Xp.apply(this,arguments)}function EC(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function bC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function TC(t,e){return t.button===0&&(!e||e==="_self")&&!bC(t)}const CC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function AC(t){let{basename:e,children:n,window:i}=t,r=de.useRef();r.current==null&&(r.current=I2({window:i,v5Compat:!0}));let s=r.current,[o,a]=de.useState({action:s.action,location:s.location});return de.useLayoutEffect(()=>s.listen(a),[s]),de.createElement(SC,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const IC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",PC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ja=de.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u}=e,d=EC(e,CC),{basename:h}=de.useContext(lc),m,y=!1;if(typeof c=="string"&&PC.test(c)&&(m=c,IC)){let v=new URL(window.location.href),_=c.startsWith("//")?new URL(v.protocol+c):new URL(c),S=Ig(_.pathname,h);_.origin===v.origin&&S!=null?c=S+_.search+_.hash:y=!0}let f=dC(c,{relative:r}),p=RC(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:r});function g(v){i&&i(v),v.defaultPrevented||p(v)}return de.createElement("a",Xp({},d,{href:m||f,onClick:y||s?i:g,ref:n,target:l}))});var Yv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Yv||(Yv={}));var Zv;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Zv||(Zv={}));function RC(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=hC(),l=zd(),c=O1(t,{relative:o});return de.useCallback(u=>{if(TC(u,n)){u.preventDefault();let d=i!==void 0?i:id(l)===id(c);a(t,{replace:d,state:r,preventScrollReset:s,relative:o})}},[l,a,c,i,r,n,t,s,o])}const LC="modulepreload",DC=function(t){return"/Builder3D/"+t},Jv={},Qv=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=DC(s),s in Jv)return;Jv[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const d=r[u];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":LC,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pg="149",ao={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kC=0,e_=1,NC=2,F1=1,U1=2,Qa=3,es=0,Wn=1,$t=2,$r=0,Ko=1,t_=2,n_=3,i_=4,OC=5,To=100,FC=101,UC=102,r_=103,s_=104,zC=200,BC=201,VC=202,HC=203,z1=204,B1=205,GC=206,WC=207,jC=208,$C=209,qC=210,XC=0,KC=1,YC=2,Kp=3,ZC=4,JC=5,QC=6,eA=7,V1=0,tA=1,nA=2,dr=0,iA=1,rA=2,sA=3,oA=4,aA=5,H1=300,ua=301,da=302,Yp=303,Zp=304,Bd=306,Ni=1e3,xi=1001,Jp=1002,At=1003,o_=1004,Wh=1005,ni=1006,lA=1007,Ol=1008,Ws=1009,cA=1010,uA=1011,G1=1012,dA=1013,Cs=1014,As=1015,Fl=1016,hA=1017,fA=1018,Yo=1020,pA=1021,ri=1023,mA=1024,gA=1025,ks=1026,ha=1027,vA=1028,_A=1029,yA=1030,xA=1031,wA=1033,jh=33776,$h=33777,qh=33778,Xh=33779,a_=35840,l_=35841,c_=35842,u_=35843,SA=36196,d_=37492,h_=37496,f_=37808,p_=37809,m_=37810,g_=37811,v_=37812,__=37813,y_=37814,x_=37815,w_=37816,S_=37817,M_=37818,E_=37819,b_=37820,T_=37821,Kh=36492,MA=36283,C_=36284,A_=36285,I_=36286,js=3e3,rt=3001,EA=3200,bA=3201,TA=0,CA=1,Pi="srgb",Ul="srgb-linear",Yh=7680,AA=519,P_=35044,R_="300 es",Qp=1035;class no{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zh=Math.PI/180,L_=180/Math.PI;function uc(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[t&255]+rn[t>>8&255]+rn[t>>16&255]+rn[t>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[n&63|128]+rn[n>>8&255]+"-"+rn[n>>16&255]+rn[n>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function Cn(t,e,n){return Math.max(e,Math.min(n,t))}function IA(t,e){return(t%e+e)%e}function Jh(t,e,n){return(1-n)*t+n*e}function D_(t){return(t&t-1)===0&&t!==0}function em(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Gc(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function On(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,n=0){ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vn{constructor(){Vn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],y=i[8],f=r[0],p=r[3],g=r[6],v=r[1],_=r[4],S=r[7],x=r[2],C=r[5],P=r[8];return s[0]=o*f+a*v+l*x,s[3]=o*p+a*_+l*C,s[6]=o*g+a*S+l*P,s[1]=c*f+u*v+d*x,s[4]=c*p+u*_+d*C,s[7]=c*g+u*S+d*P,s[2]=h*f+m*v+y*x,s[5]=h*p+m*_+y*C,s[8]=h*g+m*S+y*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,m=c*s-o*l,y=n*d+i*h+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/y;return e[0]=d*f,e[1]=(r*c-u*i)*f,e[2]=(a*i-r*o)*f,e[3]=h*f,e[4]=(u*n-r*l)*f,e[5]=(r*s-a*n)*f,e[6]=m*f,e[7]=(i*l-c*n)*f,e[8]=(o*n-i*s)*f,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Qh.makeScale(e,n)),this}rotate(e){return this.premultiply(Qh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qh.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qh=new Vn;function W1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ns(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const ef={[Pi]:{[Ul]:Ns},[Ul]:{[Pi]:bu}},gn={legacyMode:!0,get workingColorSpace(){return Ul},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(ef[e]&&ef[e][n]!==void 0){const i=ef[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},j1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Et={r:0,g:0,b:0},fi={h:0,s:0,l:0},Wc={h:0,s:0,l:0};function tf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function jc(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=gn.workingColorSpace){return this.r=e,this.g=n,this.b=i,gn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=gn.workingColorSpace){if(e=IA(e,1),n=Cn(n,0,1),i=Cn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=tf(o,s,e+1/3),this.g=tf(o,s,e),this.b=tf(o,s,e-1/3)}return gn.toWorkingColorSpace(this,r),this}setStyle(e,n=Pi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,gn.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,gn.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,gn.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,gn.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=Pi){const i=j1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=bu(e.r),this.g=bu(e.g),this.b=bu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pi){return gn.fromWorkingColorSpace(jc(this,Et),e),Cn(Et.r*255,0,255)<<16^Cn(Et.g*255,0,255)<<8^Cn(Et.b*255,0,255)<<0}getHexString(e=Pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gn.workingColorSpace){gn.fromWorkingColorSpace(jc(this,Et),n);const i=Et.r,r=Et.g,s=Et.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=gn.workingColorSpace){return gn.fromWorkingColorSpace(jc(this,Et),n),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Pi){return gn.fromWorkingColorSpace(jc(this,Et),e),e!==Pi?`color(${e} ${Et.r} ${Et.g} ${Et.b})`:`rgb(${Et.r*255|0},${Et.g*255|0},${Et.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(fi),fi.h+=e,fi.s+=n,fi.l+=i,this.setHSL(fi.h,fi.s,fi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(fi),e.getHSL(Wc);const i=Jh(fi.h,Wc.h,n),r=Jh(fi.s,Wc.s,n),s=Jh(fi.l,Wc.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ot.NAMES=j1;let co;class $1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{co===void 0&&(co=zl("canvas")),co.width=e.width,co.height=e.height;const i=co.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=co}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ns(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ns(n[i]/255)*255):n[i]=Ns(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class q1{constructor(e=null){this.isSource=!0,this.uuid=uc(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nf(r[o].image)):s.push(nf(r[o]))}else s=nf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PA=0;class Ln extends no{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,i=xi,r=xi,s=ni,o=Ol,a=ri,l=Ws,c=Ln.DEFAULT_ANISOTROPY,u=js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PA++}),this.uuid=uc(),this.name="",this.source=new q1(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==H1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Jp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Jp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=H1;Ln.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,i=0,r=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],y=l[9],f=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-f)<.01&&Math.abs(y-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+f)<.1&&Math.abs(y+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(m+1)/2,x=(g+1)/2,C=(u+h)/4,P=(d+f)/4,w=(y+p)/4;return _>S&&_>x?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=P/i):S>x?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=w/r):x<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),i=P/s,r=w/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-y)*(p-y)+(d-f)*(d-f)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-y)/v,this.y=(d-f)/v,this.z=(h-u)/v,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $s extends no{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new Ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ni,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new q1(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class X1 extends Ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class RA extends Ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],y=s[o+2],f=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=y,e[n+3]=f;return}if(d!==f||l!==h||c!==m||u!==y){let p=1-a;const g=l*h+c*m+u*y+d*f,v=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const x=Math.sqrt(_),C=Math.atan2(x,g*v);p=Math.sin(p*C)/x,a=Math.sin(a*C)/x}const S=a*v;if(l=l*p+h*S,c=c*p+m*S,u=u*p+y*S,d=d*p+f*S,p===1-a){const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],m=s[o+2],y=s[o+3];return e[n]=a*y+u*d+l*m-c*h,e[n+1]=l*y+u*h+c*d-a*m,e[n+2]=c*y+u*m+a*h-l*d,e[n+3]=u*y-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*m*y,this._y=c*m*d-h*u*y,this._z=c*u*y+h*m*d,this._w=c*u*d-h*m*y;break;case"YXZ":this._x=h*u*d+c*m*y,this._y=c*m*d-h*u*y,this._z=c*u*y-h*m*d,this._w=c*u*d+h*m*y;break;case"ZXY":this._x=h*u*d-c*m*y,this._y=c*m*d+h*u*y,this._z=c*u*y+h*m*d,this._w=c*u*d-h*m*y;break;case"ZYX":this._x=h*u*d-c*m*y,this._y=c*m*d+h*u*y,this._z=c*u*y-h*m*d,this._w=c*u*d+h*m*y;break;case"YZX":this._x=h*u*d+c*m*y,this._y=c*m*d+h*u*y,this._z=c*u*y-h*m*d,this._w=c*u*d-h*m*y;break;case"XZY":this._x=h*u*d-c*m*y,this._y=c*m*d-h*u*y,this._z=c*u*y+h*m*d,this._w=c*u*d+h*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(k_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(k_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,u=l*i+a*n-s*r,d=l*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=c*l+h*-s+u*-a-d*-o,this.y=u*l+h*-o+d*-s-c*-a,this.z=d*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rf.copy(this).projectOnVector(e),this.sub(rf)}reflect(e){return this.sub(rf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rf=new V,k_=new qs;class dc{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],h=e[l+2];u<n&&(n=u),d<i&&(i=d),h<r&&(r=h),u>s&&(s=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<n&&(n=u),d<i&&(i=d),h<r&&(r=h),u>s&&(s=u),d>o&&(o=d),h>a&&(a=h)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=hs.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)hs.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(hs)}else i.boundingBox===null&&i.computeBoundingBox(),sf.copy(i.boundingBox),sf.applyMatrix4(e.matrixWorld),this.union(sf);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hs),hs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),$c.subVectors(this.max,za),uo.subVectors(e.a,za),ho.subVectors(e.b,za),fo.subVectors(e.c,za),wr.subVectors(ho,uo),Sr.subVectors(fo,ho),fs.subVectors(uo,fo);let n=[0,-wr.z,wr.y,0,-Sr.z,Sr.y,0,-fs.z,fs.y,wr.z,0,-wr.x,Sr.z,0,-Sr.x,fs.z,0,-fs.x,-wr.y,wr.x,0,-Sr.y,Sr.x,0,-fs.y,fs.x,0];return!of(n,uo,ho,fo,$c)||(n=[1,0,0,0,1,0,0,0,1],!of(n,uo,ho,fo,$c))?!1:(qc.crossVectors(wr,Sr),n=[qc.x,qc.y,qc.z],of(n,uo,ho,fo,$c))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return hs.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(hs).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new V,new V,new V,new V,new V,new V,new V,new V],hs=new V,sf=new dc,uo=new V,ho=new V,fo=new V,wr=new V,Sr=new V,fs=new V,za=new V,$c=new V,qc=new V,ps=new V;function of(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ps.fromArray(t,s);const a=r.x*Math.abs(ps.x)+r.y*Math.abs(ps.y)+r.z*Math.abs(ps.z),l=e.dot(ps),c=n.dot(ps),u=i.dot(ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const LA=new dc,Ba=new V,af=new V;class Rg{constructor(e=new V,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):LA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);const n=Ba.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ba,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(af)),this.expandByPoint(Ba.copy(e.center).sub(af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new V,lf=new V,Xc=new V,Mr=new V,cf=new V,Kc=new V,uf=new V;class K1{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ki.copy(this.direction).multiplyScalar(n).add(this.origin),Ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lf.copy(e).add(n).multiplyScalar(.5),Xc.copy(n).sub(e).normalize(),Mr.copy(this.origin).sub(lf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Xc),a=Mr.dot(this.direction),l=-Mr.dot(Xc),c=Mr.lengthSq(),u=Math.abs(1-o*o);let d,h,m,y;if(u>0)if(d=o*l-a,h=o*a-l,y=s*u,d>=0)if(h>=-y)if(h<=y){const f=1/u;d*=f,h*=f,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-y?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=y?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(Xc).multiplyScalar(h).add(lf),m}intersectSphere(e,n){Ki.subVectors(e.center,this.origin);const i=Ki.dot(this.direction),r=Ki.dot(Ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,n,i,r,s){cf.subVectors(n,e),Kc.subVectors(i,e),uf.crossVectors(cf,Kc);let o=this.direction.dot(uf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mr.subVectors(this.origin,e);const l=a*this.direction.dot(Kc.crossVectors(Mr,Kc));if(l<0)return null;const c=a*this.direction.dot(cf.cross(Mr));if(c<0||l+c>o)return null;const u=-a*Mr.dot(uf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,c,u,d,h,m,y,f,p){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=m,g[7]=y,g[11]=f,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/po.setFromMatrixColumn(e,0).length(),s=1/po.setFromMatrixColumn(e,1).length(),o=1/po.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*d,y=a*u,f=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=m+y*c,n[5]=h-f*c,n[9]=-a*l,n[2]=f-h*c,n[6]=y+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,y=c*u,f=c*d;n[0]=h+f*a,n[4]=y*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=m*a-y,n[6]=f+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,y=c*u,f=c*d;n[0]=h-f*a,n[4]=-o*d,n[8]=y+m*a,n[1]=m+y*a,n[5]=o*u,n[9]=f-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*d,y=a*u,f=a*d;n[0]=l*u,n[4]=y*c-m,n[8]=h*c+f,n[1]=l*d,n[5]=f*c+h,n[9]=m*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,y=a*l,f=a*c;n[0]=l*u,n[4]=f-h*d,n[8]=y*d+m,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*d+y,n[10]=h-f*d}else if(e.order==="XZY"){const h=o*l,m=o*c,y=a*l,f=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+f,n[5]=o*u,n[9]=m*d-y,n[2]=y*d-m,n[6]=a*u,n[10]=f*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DA,e,kA)}lookAt(e,n,i){const r=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Er.crossVectors(i,Fn),Er.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Er.crossVectors(i,Fn)),Er.normalize(),Yc.crossVectors(Fn,Er),r[0]=Er.x,r[4]=Yc.x,r[8]=Fn.x,r[1]=Er.y,r[5]=Yc.y,r[9]=Fn.y,r[2]=Er.z,r[6]=Yc.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],y=i[2],f=i[6],p=i[10],g=i[14],v=i[3],_=i[7],S=i[11],x=i[15],C=r[0],P=r[4],w=r[8],T=r[12],R=r[1],Y=r[5],Q=r[9],U=r[13],O=r[2],X=r[6],J=r[10],ee=r[14],k=r[3],H=r[7],W=r[11],oe=r[15];return s[0]=o*C+a*R+l*O+c*k,s[4]=o*P+a*Y+l*X+c*H,s[8]=o*w+a*Q+l*J+c*W,s[12]=o*T+a*U+l*ee+c*oe,s[1]=u*C+d*R+h*O+m*k,s[5]=u*P+d*Y+h*X+m*H,s[9]=u*w+d*Q+h*J+m*W,s[13]=u*T+d*U+h*ee+m*oe,s[2]=y*C+f*R+p*O+g*k,s[6]=y*P+f*Y+p*X+g*H,s[10]=y*w+f*Q+p*J+g*W,s[14]=y*T+f*U+p*ee+g*oe,s[3]=v*C+_*R+S*O+x*k,s[7]=v*P+_*Y+S*X+x*H,s[11]=v*w+_*Q+S*J+x*W,s[15]=v*T+_*U+S*ee+x*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],y=e[3],f=e[7],p=e[11],g=e[15];return y*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*m-i*l*m)+f*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+n*c*d-n*a*m-s*o*d+i*o*m+s*a*u-i*c*u)+g*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],y=e[12],f=e[13],p=e[14],g=e[15],v=d*p*c-f*h*c+f*l*m-a*p*m-d*l*g+a*h*g,_=y*h*c-u*p*c-y*l*m+o*p*m+u*l*g-o*h*g,S=u*f*c-y*d*c+y*a*m-o*f*m-u*a*g+o*d*g,x=y*d*l-u*f*l-y*a*h+o*f*h+u*a*p-o*d*p,C=n*v+i*_+r*S+s*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=v*P,e[1]=(f*h*s-d*p*s-f*r*m+i*p*m+d*r*g-i*h*g)*P,e[2]=(a*p*s-f*l*s+f*r*c-i*p*c-a*r*g+i*l*g)*P,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*m-i*l*m)*P,e[4]=_*P,e[5]=(u*p*s-y*h*s+y*r*m-n*p*m-u*r*g+n*h*g)*P,e[6]=(y*l*s-o*p*s-y*r*c+n*p*c+o*r*g-n*l*g)*P,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*m+n*l*m)*P,e[8]=S*P,e[9]=(y*d*s-u*f*s-y*i*m+n*f*m+u*i*g-n*d*g)*P,e[10]=(o*f*s-y*a*s+y*i*c-n*f*c-o*i*g+n*a*g)*P,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*m-n*a*m)*P,e[12]=x*P,e[13]=(u*f*r-y*d*r+y*i*h-n*f*h-u*i*p+n*d*p)*P,e[14]=(y*a*r-o*f*r-y*i*l+n*f*l+o*i*p-n*a*p)*P,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,m=s*u,y=s*d,f=o*u,p=o*d,g=a*d,v=l*c,_=l*u,S=l*d,x=i.x,C=i.y,P=i.z;return r[0]=(1-(f+g))*x,r[1]=(m+S)*x,r[2]=(y-_)*x,r[3]=0,r[4]=(m-S)*C,r[5]=(1-(h+g))*C,r[6]=(p+v)*C,r[7]=0,r[8]=(y+_)*P,r[9]=(p-v)*P,r[10]=(1-(h+f))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=po.set(r[0],r[1],r[2]).length();const o=po.set(r[4],r[5],r[6]).length(),a=po.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pi.copy(this);const c=1/s,u=1/o,d=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=d,pi.elements[9]*=d,pi.elements[10]*=d,n.setFromRotationMatrix(pi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),c=2*s/(i-r),u=(n+e)/(n-e),d=(i+r)/(i-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),c=1/(i-r),u=1/(o-s),d=(n+e)*l,h=(i+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const po=new V,pi=new Yt,DA=new V(0,0,0),kA=new V(1,1,1),Er=new V,Yc=new V,Fn=new V,N_=new Yt,O_=new qs;class Vd{constructor(e=0,n=0,i=0,r=Vd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return N_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return O_.setFromEuler(this),this.setFromQuaternion(O_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vd.DEFAULT_ORDER="XYZ";class Lg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NA=0;const F_=new V,mo=new qs,Yi=new Yt,Zc=new V,Va=new V,OA=new V,FA=new qs,U_=new V(1,0,0),z_=new V(0,1,0),B_=new V(0,0,1),UA={type:"added"},V_={type:"removed"};class jn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NA++}),this.uuid=uc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new V,n=new Vd,i=new qs,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Vn}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Lg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return mo.setFromAxisAngle(e,n),this.quaternion.multiply(mo),this}rotateOnWorldAxis(e,n){return mo.setFromAxisAngle(e,n),this.quaternion.premultiply(mo),this}rotateX(e){return this.rotateOnAxis(U_,e)}rotateY(e){return this.rotateOnAxis(z_,e)}rotateZ(e){return this.rotateOnAxis(B_,e)}translateOnAxis(e,n){return F_.copy(e).applyQuaternion(this.quaternion),this.position.add(F_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(U_,e)}translateY(e){return this.translateOnAxis(z_,e)}translateZ(e){return this.translateOnAxis(B_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Zc.copy(e):Zc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Va,Zc,this.up):Yi.lookAt(Zc,Va,this.up),this.quaternion.setFromRotationMatrix(Yi),r&&(Yi.extractRotation(r.matrixWorld),mo.setFromRotationMatrix(Yi),this.quaternion.premultiply(mo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(UA)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(V_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(V_)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,OA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,FA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jn.DEFAULT_UP=new V(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new V,Zi=new V,df=new V,Ji=new V,go=new V,vo=new V,H_=new V,hf=new V,ff=new V,pf=new V;class nr{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),mi.subVectors(e,n),r.cross(mi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){mi.subVectors(r,n),Zi.subVectors(i,n),df.subVectors(e,n);const o=mi.dot(mi),a=mi.dot(Zi),l=mi.dot(df),c=Zi.dot(Zi),u=Zi.dot(df),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,m=(c*l-a*u)*h,y=(o*u-a*l)*h;return s.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ji),Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ji),l.set(0,0),l.addScaledVector(s,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l}static isFrontFacing(e,n,i,r){return mi.subVectors(i,n),Zi.subVectors(e,n),mi.cross(Zi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),mi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return nr.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return nr.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return nr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;go.subVectors(r,i),vo.subVectors(s,i),hf.subVectors(e,i);const l=go.dot(hf),c=vo.dot(hf);if(l<=0&&c<=0)return n.copy(i);ff.subVectors(e,r);const u=go.dot(ff),d=vo.dot(ff);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(go,o);pf.subVectors(e,s);const m=go.dot(pf),y=vo.dot(pf);if(y>=0&&m<=y)return n.copy(s);const f=m*c-l*y;if(f<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(vo,a);const p=u*y-m*d;if(p<=0&&d-u>=0&&m-y>=0)return H_.subVectors(s,r),a=(d-u)/(d-u+(m-y)),n.copy(r).addScaledVector(H_,a);const g=1/(p+f+h);return o=f*g,a=h*g,n.copy(i).addScaledVector(go,o).addScaledVector(vo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let zA=0;class Hd extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zA++}),this.uuid=uc(),this.name="",this.type="Material",this.blending=Ko,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=z1,this.blendDst=B1,this.blendEquation=To,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Kp,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yh,this.stencilZFail=Yh,this.stencilZPass=Yh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ko&&(i.blending=this.blending),this.side!==es&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mt extends Hd{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=V1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new V,Jc=new ze;class Bi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=P_,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jc.fromBufferAttribute(this,n),Jc.applyMatrix3(e),this.setXY(n,Jc.x,Jc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gc(n,this.array)),n}setX(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gc(n,this.array)),n}setY(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gc(n,this.array)),n}setZ(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gc(n,this.array)),n}setW(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),i=On(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),i=On(i,this.array),r=On(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),i=On(i,this.array),r=On(r,this.array),s=On(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==P_&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Y1 extends Bi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Z1 extends Bi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Os extends Bi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let BA=0;const Jn=new Yt,mf=new jn,_o=new V,Un=new dc,Ha=new dc,Ot=new V;class io extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=uc(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W1(e)?Z1:Y1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Vn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,i){return Jn.makeTranslation(e,n,i),this.applyMatrix4(Jn),this}scale(e,n,i){return Jn.makeScale(e,n,i),this.applyMatrix4(Jn),this}lookAt(e){return mf.lookAt(e),mf.updateMatrix(),this.applyMatrix4(mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Os(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rg);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ha.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(Un.min,Ha.min),Un.expandByPoint(Ot),Ot.addVectors(Un.max,Ha.max),Un.expandByPoint(Ot)):(Un.expandByPoint(Ha.min),Un.expandByPoint(Ha.max))}Un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(_o.fromBufferAttribute(e,c),Ot.add(_o)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new V,u[R]=new V;const d=new V,h=new V,m=new V,y=new ze,f=new ze,p=new ze,g=new V,v=new V;function _(R,Y,Q){d.fromArray(r,R*3),h.fromArray(r,Y*3),m.fromArray(r,Q*3),y.fromArray(o,R*2),f.fromArray(o,Y*2),p.fromArray(o,Q*2),h.sub(d),m.sub(d),f.sub(y),p.sub(y);const U=1/(f.x*p.y-p.x*f.y);isFinite(U)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(U),v.copy(m).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(U),c[R].add(g),c[Y].add(g),c[Q].add(g),u[R].add(v),u[Y].add(v),u[Q].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let R=0,Y=S.length;R<Y;++R){const Q=S[R],U=Q.start,O=Q.count;for(let X=U,J=U+O;X<J;X+=3)_(i[X+0],i[X+1],i[X+2])}const x=new V,C=new V,P=new V,w=new V;function T(R){P.fromArray(s,R*3),w.copy(P);const Y=c[R];x.copy(Y),x.sub(P.multiplyScalar(P.dot(Y))).normalize(),C.crossVectors(w,Y);const U=C.dot(u[R])<0?-1:1;l[R*4]=x.x,l[R*4+1]=x.y,l[R*4+2]=x.z,l[R*4+3]=U}for(let R=0,Y=S.length;R<Y;++R){const Q=S[R],U=Q.start,O=Q.count;for(let X=U,J=U+O;X<J;X+=3)T(i[X+0]),T(i[X+1]),T(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,d=new V;if(e)for(let h=0,m=e.count;h<m;h+=3){const y=e.getX(h+0),f=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,f),o.fromBufferAttribute(n,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,f),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(f,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,y=0;for(let f=0,p=l.length;f<p;f++){a.isInterleavedBufferAttribute?m=l[f]*a.data.stride+a.offset:m=l[f]*u;for(let g=0;g<u;g++)h[y++]=c[m++]}return new Bi(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new io,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const G_=new Yt,yo=new K1,gf=new Rg,Ga=new V,Wa=new V,ja=new V,vf=new V,Qc=new V,eu=new ze,tu=new ze,nu=new ze,_f=new V,iu=new V;class st extends jn{constructor(e=new io,n=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(vf.fromBufferAttribute(d,e),o?Qc.addScaledVector(vf,u):Qc.addScaledVector(vf.sub(n),u))}n.add(Qc)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),gf.copy(i.boundingSphere),gf.applyMatrix4(s),e.ray.intersectsSphere(gf)===!1)||(G_.copy(s).invert(),yo.copy(e.ray).applyMatrix4(G_),i.boundingBox!==null&&yo.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,d=i.groups,h=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,y=d.length;m<y;m++){const f=d[m],p=r[f.materialIndex],g=Math.max(f.start,h.start),v=Math.min(a.count,Math.min(f.start+f.count,h.start+h.count));for(let _=g,S=v;_<S;_+=3){const x=a.getX(_),C=a.getX(_+1),P=a.getX(_+2);o=ru(this,p,e,yo,c,u,x,C,P),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=f.materialIndex,n.push(o))}}else{const m=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let f=m,p=y;f<p;f+=3){const g=a.getX(f),v=a.getX(f+1),_=a.getX(f+2);o=ru(this,r,e,yo,c,u,g,v,_),o&&(o.faceIndex=Math.floor(f/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,y=d.length;m<y;m++){const f=d[m],p=r[f.materialIndex],g=Math.max(f.start,h.start),v=Math.min(l.count,Math.min(f.start+f.count,h.start+h.count));for(let _=g,S=v;_<S;_+=3){const x=_,C=_+1,P=_+2;o=ru(this,p,e,yo,c,u,x,C,P),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=f.materialIndex,n.push(o))}}else{const m=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let f=m,p=y;f<p;f+=3){const g=f,v=f+1,_=f+2;o=ru(this,r,e,yo,c,u,g,v,_),o&&(o.faceIndex=Math.floor(f/3),n.push(o))}}}}function VA(t,e,n,i,r,s,o,a){let l;if(e.side===Wn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===es,a),l===null)return null;iu.copy(a),iu.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(iu);return c<n.near||c>n.far?null:{distance:c,point:iu.clone(),object:t}}function ru(t,e,n,i,r,s,o,a,l){t.getVertexPosition(o,Ga),t.getVertexPosition(a,Wa),t.getVertexPosition(l,ja);const c=VA(t,e,n,i,Ga,Wa,ja,_f);if(c){r&&(eu.fromBufferAttribute(r,o),tu.fromBufferAttribute(r,a),nu.fromBufferAttribute(r,l),c.uv=nr.getUV(_f,Ga,Wa,ja,eu,tu,nu,new ze)),s&&(eu.fromBufferAttribute(s,o),tu.fromBufferAttribute(s,a),nu.fromBufferAttribute(s,l),c.uv2=nr.getUV(_f,Ga,Wa,ja,eu,tu,nu,new ze));const u={a:o,b:a,c:l,normal:new V,materialIndex:0};nr.getNormal(Ga,Wa,ja,u.normal),c.face=u}return c}class Ut extends io{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,m=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Os(c,3)),this.setAttribute("normal",new Os(u,3)),this.setAttribute("uv",new Os(d,2));function y(f,p,g,v,_,S,x,C,P,w,T){const R=S/P,Y=x/w,Q=S/2,U=x/2,O=C/2,X=P+1,J=w+1;let ee=0,k=0;const H=new V;for(let W=0;W<J;W++){const oe=W*Y-U;for(let z=0;z<X;z++){const Z=z*R-Q;H[f]=Z*v,H[p]=oe*_,H[g]=O,c.push(H.x,H.y,H.z),H[f]=0,H[p]=0,H[g]=C>0?1:-1,u.push(H.x,H.y,H.z),d.push(z/P),d.push(1-W/w),ee+=1}}for(let W=0;W<w;W++)for(let oe=0;oe<P;oe++){const z=h+oe+X*W,Z=h+oe+X*(W+1),re=h+(oe+1)+X*(W+1),le=h+(oe+1)+X*W;l.push(z,Z,le),l.push(Z,re,le),k+=6}a.addGroup(m,k,T),m+=k,h+=ee}}static fromJSON(e){return new Ut(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function vn(t){const e={};for(let n=0;n<t.length;n++){const i=fa(t[n]);for(const r in i)e[r]=i[r]}return e}function HA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function J1(t){return t.getRenderTarget()===null&&t.outputEncoding===rt?Pi:Ul}const GA={clone:fa,merge:vn};var WA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends Hd{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WA,this.fragmentShader=jA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=HA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Q1 extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ii extends Q1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=L_*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return L_*2*Math.atan(Math.tan(Zh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zh*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xo=-90,wo=1;class $A extends jn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new ii(xo,wo,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new ii(xo,wo,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new ii(xo,wo,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new ii(xo,wo,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new ii(xo,wo,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new ii(xo,wo,e,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=dr,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class eS extends Ln{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ua,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qA extends $s{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new eS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ni}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ut(5,5,5),s=new ts({name:"CubemapFromEquirect",uniforms:fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wn,blending:$r});s.uniforms.tEquirect.value=n;const o=new st(r,s),a=n.minFilter;return n.minFilter===Ol&&(n.minFilter=ni),new $A(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const yf=new V,XA=new V,KA=new Vn;class _s{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=yf.subVectors(i,n).cross(XA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(yf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||KA.getNormalMatrix(e),r=this.coplanarPoint(yf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const So=new Rg,su=new V;class tS{constructor(e=new _s,n=new _s,i=new _s,r=new _s,s=new _s,o=new _s){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],d=i[7],h=i[8],m=i[9],y=i[10],f=i[11],p=i[12],g=i[13],v=i[14],_=i[15];return n[0].setComponents(a-r,d-l,f-h,_-p).normalize(),n[1].setComponents(a+r,d+l,f+h,_+p).normalize(),n[2].setComponents(a+s,d+c,f+m,_+g).normalize(),n[3].setComponents(a-s,d-c,f-m,_-g).normalize(),n[4].setComponents(a-o,d-u,f-y,_-v).normalize(),n[5].setComponents(a+o,d+u,f+y,_+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(So)}intersectsSprite(e){return So.center.set(0,0,0),So.radius=.7071067811865476,So.applyMatrix4(e.matrixWorld),this.intersectsSphere(So)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(su.x=r.normal.x>0?e.max.x:e.min.x,su.y=r.normal.y>0?e.max.y:e.min.y,su.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(su)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function YA(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,m=t.createBuffer();t.bindBuffer(u,m),t.bufferData(u,d,h),c.onUploadCallback();let y;if(d instanceof Float32Array)y=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(d instanceof Int16Array)y=5122;else if(d instanceof Uint32Array)y=5125;else if(d instanceof Int32Array)y=5124;else if(d instanceof Int8Array)y=5120;else if(d instanceof Uint8Array)y=5121;else if(d instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,m=u.updateRange;t.bindBuffer(d,c),m.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class ns extends io{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,m=[],y=[],f=[],p=[];for(let g=0;g<u;g++){const v=g*h-o;for(let _=0;_<c;_++){const S=_*d-s;y.push(S,-v,0),f.push(0,0,1),p.push(_/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const _=v+c*g,S=v+c*(g+1),x=v+1+c*(g+1),C=v+1+c*g;m.push(_,S,C),m.push(S,x,C)}this.setIndex(m),this.setAttribute("position",new Os(y,3)),this.setAttribute("normal",new Os(f,3)),this.setAttribute("uv",new Os(p,2))}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,JA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QA=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eI=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tI=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nI=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iI="vec3 transformed = vec3( position );",rI=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sI=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,oI=`#ifdef USE_IRIDESCENCE
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
#endif`,aI=`#ifdef USE_BUMPMAP
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
#endif`,lI=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uI=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dI=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hI=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pI=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mI=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gI=`#define PI 3.141592653589793
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
}`,vI=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_I=`vec3 transformedNormal = objectNormal;
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
#endif`,yI=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xI=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,wI=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SI=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MI="gl_FragColor = linearToOutputTexel( gl_FragColor );",EI=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bI=`#ifdef USE_ENVMAP
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
#endif`,TI=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CI=`#ifdef USE_ENVMAP
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
#endif`,AI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,II=`#ifdef USE_ENVMAP
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
#endif`,PI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kI=`#ifdef USE_GRADIENTMAP
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
}`,NI=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,OI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zI=`uniform bool receiveShadow;
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
#endif`,BI=`#if defined( USE_ENVMAP )
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
#endif`,VI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jI=`PhysicalMaterial material;
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
#endif`,$I=`struct PhysicalMaterial {
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
}`,qI=`
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
#endif`,XI=`#if defined( RE_IndirectDiffuse )
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
#endif`,KI=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,YI=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZI=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JI=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,QI=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,e3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,i3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o3=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a3=`#ifdef USE_MORPHNORMALS
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
#endif`,l3=`#ifdef USE_MORPHTARGETS
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
#endif`,c3=`#ifdef USE_MORPHTARGETS
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
#endif`,u3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,d3=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,h3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m3=`#ifdef USE_NORMALMAP
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
#endif`,g3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,v3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,_3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,y3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R3=`float getShadowMask() {
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
}`,L3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D3=`#ifdef USE_SKINNING
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
#endif`,k3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N3=`#ifdef USE_SKINNING
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
#endif`,O3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B3=`#ifdef USE_TRANSMISSION
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
#endif`,V3=`#ifdef USE_TRANSMISSION
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
#endif`,H3=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,G3=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,W3=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,j3=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,$3=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,q3=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,X3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const K3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y3=`uniform sampler2D t2D;
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
}`,Z3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tP=`#include <common>
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
}`,nP=`#if DEPTH_PACKING == 3200
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
}`,iP=`#define DISTANCE
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
}`,rP=`#define DISTANCE
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
}`,sP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,aP=`uniform float scale;
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
}`,lP=`uniform vec3 diffuse;
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
}`,cP=`#include <common>
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
}`,uP=`uniform vec3 diffuse;
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
}`,dP=`#define LAMBERT
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
}`,hP=`#define LAMBERT
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
}`,fP=`#define MATCAP
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
}`,pP=`#define MATCAP
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
}`,mP=`#define NORMAL
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
}`,gP=`#define NORMAL
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
}`,vP=`#define PHONG
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
}`,_P=`#define PHONG
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
}`,yP=`#define STANDARD
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
}`,xP=`#define STANDARD
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
}`,wP=`#define TOON
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
}`,SP=`#define TOON
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
}`,MP=`uniform float size;
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
}`,EP=`uniform vec3 diffuse;
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
}`,bP=`#include <common>
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
}`,TP=`uniform vec3 color;
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
}`,CP=`uniform float rotation;
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
}`,AP=`uniform vec3 diffuse;
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
}`,Ne={alphamap_fragment:ZA,alphamap_pars_fragment:JA,alphatest_fragment:QA,alphatest_pars_fragment:eI,aomap_fragment:tI,aomap_pars_fragment:nI,begin_vertex:iI,beginnormal_vertex:rI,bsdfs:sI,iridescence_fragment:oI,bumpmap_pars_fragment:aI,clipping_planes_fragment:lI,clipping_planes_pars_fragment:cI,clipping_planes_pars_vertex:uI,clipping_planes_vertex:dI,color_fragment:hI,color_pars_fragment:fI,color_pars_vertex:pI,color_vertex:mI,common:gI,cube_uv_reflection_fragment:vI,defaultnormal_vertex:_I,displacementmap_pars_vertex:yI,displacementmap_vertex:xI,emissivemap_fragment:wI,emissivemap_pars_fragment:SI,encodings_fragment:MI,encodings_pars_fragment:EI,envmap_fragment:bI,envmap_common_pars_fragment:TI,envmap_pars_fragment:CI,envmap_pars_vertex:AI,envmap_physical_pars_fragment:BI,envmap_vertex:II,fog_vertex:PI,fog_pars_vertex:RI,fog_fragment:LI,fog_pars_fragment:DI,gradientmap_pars_fragment:kI,lightmap_fragment:NI,lightmap_pars_fragment:OI,lights_lambert_fragment:FI,lights_lambert_pars_fragment:UI,lights_pars_begin:zI,lights_toon_fragment:VI,lights_toon_pars_fragment:HI,lights_phong_fragment:GI,lights_phong_pars_fragment:WI,lights_physical_fragment:jI,lights_physical_pars_fragment:$I,lights_fragment_begin:qI,lights_fragment_maps:XI,lights_fragment_end:KI,logdepthbuf_fragment:YI,logdepthbuf_pars_fragment:ZI,logdepthbuf_pars_vertex:JI,logdepthbuf_vertex:QI,map_fragment:e3,map_pars_fragment:t3,map_particle_fragment:n3,map_particle_pars_fragment:i3,metalnessmap_fragment:r3,metalnessmap_pars_fragment:s3,morphcolor_vertex:o3,morphnormal_vertex:a3,morphtarget_pars_vertex:l3,morphtarget_vertex:c3,normal_fragment_begin:u3,normal_fragment_maps:d3,normal_pars_fragment:h3,normal_pars_vertex:f3,normal_vertex:p3,normalmap_pars_fragment:m3,clearcoat_normal_fragment_begin:g3,clearcoat_normal_fragment_maps:v3,clearcoat_pars_fragment:_3,iridescence_pars_fragment:y3,output_fragment:x3,packing:w3,premultiplied_alpha_fragment:S3,project_vertex:M3,dithering_fragment:E3,dithering_pars_fragment:b3,roughnessmap_fragment:T3,roughnessmap_pars_fragment:C3,shadowmap_pars_fragment:A3,shadowmap_pars_vertex:I3,shadowmap_vertex:P3,shadowmask_pars_fragment:R3,skinbase_vertex:L3,skinning_pars_vertex:D3,skinning_vertex:k3,skinnormal_vertex:N3,specularmap_fragment:O3,specularmap_pars_fragment:F3,tonemapping_fragment:U3,tonemapping_pars_fragment:z3,transmission_fragment:B3,transmission_pars_fragment:V3,uv_pars_fragment:H3,uv_pars_vertex:G3,uv_vertex:W3,uv2_pars_fragment:j3,uv2_pars_vertex:$3,uv2_vertex:q3,worldpos_vertex:X3,background_vert:K3,background_frag:Y3,backgroundCube_vert:Z3,backgroundCube_frag:J3,cube_vert:Q3,cube_frag:eP,depth_vert:tP,depth_frag:nP,distanceRGBA_vert:iP,distanceRGBA_frag:rP,equirect_vert:sP,equirect_frag:oP,linedashed_vert:aP,linedashed_frag:lP,meshbasic_vert:cP,meshbasic_frag:uP,meshlambert_vert:dP,meshlambert_frag:hP,meshmatcap_vert:fP,meshmatcap_frag:pP,meshnormal_vert:mP,meshnormal_frag:gP,meshphong_vert:vP,meshphong_frag:_P,meshphysical_vert:yP,meshphysical_frag:xP,meshtoon_vert:wP,meshtoon_frag:SP,points_vert:MP,points_frag:EP,shadow_vert:bP,shadow_frag:TP,sprite_vert:CP,sprite_frag:AP},ue={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Vn},uv2Transform:{value:new Vn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vn}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vn}}},Ri={basic:{uniforms:vn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:vn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:vn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:vn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:vn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ot(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:vn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:vn([ue.points,ue.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:vn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:vn([ue.common,ue.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:vn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:vn([ue.sprite,ue.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Vn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:vn([ue.common,ue.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:vn([ue.lights,ue.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Ri.physical={uniforms:vn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const ou={r:0,b:0,g:0};function IP(t,e,n,i,r,s,o){const a=new ot(0);let l=s===!0?0:1,c,u,d=null,h=0,m=null;function y(p,g){let v=!1,_=g.isScene===!0?g.background:null;_&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_));const S=t.xr,x=S.getSession&&S.getSession();x&&x.environmentBlendMode==="additive"&&(_=null),_===null?f(a,l):_&&_.isColor&&(f(_,1),v=!0),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Bd)?(u===void 0&&(u=new st(new Ut(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:fa(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=_.encoding!==rt,(d!==_||h!==_.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=_,h=_.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new st(new ns(2,2),new ts({name:"BackgroundMaterial",uniforms:fa(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=_.encoding!==rt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=_,h=_.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,g){p.getRGB(ou,J1(t)),i.buffers.color.setClear(ou.r,ou.g,ou.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(a,l)},render:y}}function PP(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function d(O,X,J,ee,k){let H=!1;if(o){const W=f(ee,J,X);c!==W&&(c=W,m(c.object)),H=g(O,ee,J,k),H&&v(O,ee,J,k)}else{const W=X.wireframe===!0;(c.geometry!==ee.id||c.program!==J.id||c.wireframe!==W)&&(c.geometry=ee.id,c.program=J.id,c.wireframe=W,H=!0)}k!==null&&n.update(k,34963),(H||u)&&(u=!1,w(O,X,J,ee),k!==null&&t.bindBuffer(34963,n.get(k).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(O){return i.isWebGL2?t.bindVertexArray(O):s.bindVertexArrayOES(O)}function y(O){return i.isWebGL2?t.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function f(O,X,J){const ee=J.wireframe===!0;let k=a[O.id];k===void 0&&(k={},a[O.id]=k);let H=k[X.id];H===void 0&&(H={},k[X.id]=H);let W=H[ee];return W===void 0&&(W=p(h()),H[ee]=W),W}function p(O){const X=[],J=[],ee=[];for(let k=0;k<r;k++)X[k]=0,J[k]=0,ee[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:J,attributeDivisors:ee,object:O,attributes:{},index:null}}function g(O,X,J,ee){const k=c.attributes,H=X.attributes;let W=0;const oe=J.getAttributes();for(const z in oe)if(oe[z].location>=0){const re=k[z];let le=H[z];if(le===void 0&&(z==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),z==="instanceColor"&&O.instanceColor&&(le=O.instanceColor)),re===void 0||re.attribute!==le||le&&re.data!==le.data)return!0;W++}return c.attributesNum!==W||c.index!==ee}function v(O,X,J,ee){const k={},H=X.attributes;let W=0;const oe=J.getAttributes();for(const z in oe)if(oe[z].location>=0){let re=H[z];re===void 0&&(z==="instanceMatrix"&&O.instanceMatrix&&(re=O.instanceMatrix),z==="instanceColor"&&O.instanceColor&&(re=O.instanceColor));const le={};le.attribute=re,re&&re.data&&(le.data=re.data),k[z]=le,W++}c.attributes=k,c.attributesNum=W,c.index=ee}function _(){const O=c.newAttributes;for(let X=0,J=O.length;X<J;X++)O[X]=0}function S(O){x(O,0)}function x(O,X){const J=c.newAttributes,ee=c.enabledAttributes,k=c.attributeDivisors;J[O]=1,ee[O]===0&&(t.enableVertexAttribArray(O),ee[O]=1),k[O]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,X),k[O]=X)}function C(){const O=c.newAttributes,X=c.enabledAttributes;for(let J=0,ee=X.length;J<ee;J++)X[J]!==O[J]&&(t.disableVertexAttribArray(J),X[J]=0)}function P(O,X,J,ee,k,H){i.isWebGL2===!0&&(J===5124||J===5125)?t.vertexAttribIPointer(O,X,J,k,H):t.vertexAttribPointer(O,X,J,ee,k,H)}function w(O,X,J,ee){if(i.isWebGL2===!1&&(O.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const k=ee.attributes,H=J.getAttributes(),W=X.defaultAttributeValues;for(const oe in H){const z=H[oe];if(z.location>=0){let Z=k[oe];if(Z===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(Z=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(Z=O.instanceColor)),Z!==void 0){const re=Z.normalized,le=Z.itemSize,L=n.get(Z);if(L===void 0)continue;const we=L.buffer,me=L.type,ae=L.bytesPerElement;if(Z.isInterleavedBufferAttribute){const se=Z.data,Fe=se.stride,ke=Z.offset;if(se.isInstancedInterleavedBuffer){for(let Ae=0;Ae<z.locationSize;Ae++)x(z.location+Ae,se.meshPerAttribute);O.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ae=0;Ae<z.locationSize;Ae++)S(z.location+Ae);t.bindBuffer(34962,we);for(let Ae=0;Ae<z.locationSize;Ae++)P(z.location+Ae,le/z.locationSize,me,re,Fe*ae,(ke+le/z.locationSize*Ae)*ae)}else{if(Z.isInstancedBufferAttribute){for(let se=0;se<z.locationSize;se++)x(z.location+se,Z.meshPerAttribute);O.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let se=0;se<z.locationSize;se++)S(z.location+se);t.bindBuffer(34962,we);for(let se=0;se<z.locationSize;se++)P(z.location+se,le/z.locationSize,me,re,le*ae,le/z.locationSize*se*ae)}}else if(W!==void 0){const re=W[oe];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(z.location,re);break;case 3:t.vertexAttrib3fv(z.location,re);break;case 4:t.vertexAttrib4fv(z.location,re);break;default:t.vertexAttrib1fv(z.location,re)}}}}C()}function T(){Q();for(const O in a){const X=a[O];for(const J in X){const ee=X[J];for(const k in ee)y(ee[k].object),delete ee[k];delete X[J]}delete a[O]}}function R(O){if(a[O.id]===void 0)return;const X=a[O.id];for(const J in X){const ee=X[J];for(const k in ee)y(ee[k].object),delete ee[k];delete X[J]}delete a[O.id]}function Y(O){for(const X in a){const J=a[X];if(J[O.id]===void 0)continue;const ee=J[O.id];for(const k in ee)y(ee[k].object),delete ee[k];delete J[O.id]}}function Q(){U(),u=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:Y,initAttributes:_,enableAttribute:S,disableUnusedAttributes:C}}function RP(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,m;if(r)h=t,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,d),n.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function LP(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),h=t.getParameter(35660),m=t.getParameter(3379),y=t.getParameter(34076),f=t.getParameter(34921),p=t.getParameter(36347),g=t.getParameter(36348),v=t.getParameter(36349),_=h>0,S=o||e.has("OES_texture_float"),x=_&&S,C=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:y,maxAttributes:f,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:x,maxSamples:C}}function DP(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new _s,a=new Vn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,m){const y=d.clippingPlanes,f=d.clipIntersection,p=d.clipShadows,g=t.get(d);if(!r||y===null||y.length===0||s&&!p)s?u(null):c();else{const v=s?0:i,_=v*4;let S=g.clippingState||null;l.value=S,S=u(y,h,_,m);for(let x=0;x!==_;++x)S[x]=n[x];g.clippingState=S,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,y){const f=d!==null?d.length:0;let p=null;if(f!==0){if(p=l.value,y!==!0||p===null){const g=m+f*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let _=0,S=m;_!==f;++_,S+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,p}}function kP(t){let e=new WeakMap;function n(o,a){return a===Yp?o.mapping=ua:a===Zp&&(o.mapping=da),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Yp||a===Zp)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qA(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class NP extends Q1{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zo=4,W_=[.125,.215,.35,.446,.526,.582],Ss=20,xf=new NP,j_=new ot;let wf=null;const ys=(1+Math.sqrt(5))/2,Mo=1/ys,$_=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,ys,Mo),new V(0,ys,-Mo),new V(Mo,0,ys),new V(-Mo,0,ys),new V(ys,Mo,0),new V(-ys,Mo,0)];class q_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){wf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wf),e.scissorTest=!1,au(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ua||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wf=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Fl,format:ri,encoding:js,depthBuffer:!1},r=X_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=X_(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OP(s)),this._blurMaterial=FP(s,e,n)}return r}_compileMaterial(e){const n=new st(this._lodPlanes[0],e);this._renderer.compile(n,xf)}_sceneToCubeUV(e,n,i,r){const a=new ii(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(j_),u.toneMapping=dr,u.autoClear=!1;const m=new mt({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),y=new st(new Ut,m);let f=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,f=!0):(m.color.copy(j_),f=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):v===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const _=this._cubeSize;au(r,v*_,g>2?_:0,_,_),u.setRenderTarget(r),f&&u.render(y,a),u.render(e,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ua||e.mapping===da;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;au(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,xf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$_[(r-1)%$_.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new st(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ss-1),f=s/y,p=isFinite(s)?1+Math.floor(u*f):Ss;p>Ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ss}`);const g=[];let v=0;for(let P=0;P<Ss;++P){const w=P/f,T=Math.exp(-w*w/2);g.push(T),P===0?v+=T:P<p&&(v+=2*T)}for(let P=0;P<g.length;P++)g[P]=g[P]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=y,h.mipInt.value=_-i;const S=this._sizeLods[r],x=3*S*(r>_-zo?r-_+zo:0),C=4*(this._cubeSize-S);au(n,x,C,3*S,2*S),l.setRenderTarget(n),l.render(d,xf)}}function OP(t){const e=[],n=[],i=[];let r=t;const s=t-zo+1+W_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-zo?l=W_[o-t+zo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,y=6,f=3,p=2,g=1,v=new Float32Array(f*y*m),_=new Float32Array(p*y*m),S=new Float32Array(g*y*m);for(let C=0;C<m;C++){const P=C%3*2/3-1,w=C>2?0:-1,T=[P,w,0,P+2/3,w,0,P+2/3,w+1,0,P,w,0,P+2/3,w+1,0,P,w+1,0];v.set(T,f*y*C),_.set(h,p*y*C);const R=[C,C,C,C,C,C];S.set(R,g*y*C)}const x=new io;x.setAttribute("position",new Bi(v,f)),x.setAttribute("uv",new Bi(_,p)),x.setAttribute("faceIndex",new Bi(S,g)),e.push(x),r>zo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function X_(t,e,n){const i=new $s(t,e,n);return i.texture.mapping=Bd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function au(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function FP(t,e,n){const i=new Float32Array(Ss),r=new V(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dg(),fragmentShader:`

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
		`,blending:$r,depthTest:!1,depthWrite:!1})}function K_(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dg(),fragmentShader:`

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
		`,blending:$r,depthTest:!1,depthWrite:!1})}function Y_(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$r,depthTest:!1,depthWrite:!1})}function Dg(){return`

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
	`}function UP(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yp||l===Zp,u=l===ua||l===da;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new q_(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new q_(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function zP(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function BP(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)e.update(h[y],34962);const m=d.morphAttributes;for(const y in m){const f=m[y];for(let p=0,g=f.length;p<g;p++)e.update(f[p],34962)}}function c(d){const h=[],m=d.index,y=d.attributes.position;let f=0;if(m!==null){const v=m.array;f=m.version;for(let _=0,S=v.length;_<S;_+=3){const x=v[_+0],C=v[_+1],P=v[_+2];h.push(x,C,C,P,P,x)}}else{const v=y.array;f=y.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const x=_+0,C=_+1,P=_+2;h.push(x,C,C,P,P,x)}}const p=new(W1(h)?Z1:Y1)(h,1);p.version=f;const g=s.get(d);g&&e.remove(g),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function VP(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){t.drawElements(s,m,a,h*l),n.update(m,s,1)}function d(h,m,y){if(y===0)return;let f,p;if(r)f=t,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,m,a,h*l,y),n.update(m,s,y)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function HP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function GP(t,e){return t[0]-e[0]}function WP(t,e){return Math.abs(e[1])-Math.abs(t[1])}function jP(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Xt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=f!==void 0?f.length:0;let g=s.get(u);if(g===void 0||g.count!==p){let J=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",J)};var y=J;g!==void 0&&g.texture.dispose();const S=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let R=0;S===!0&&(R=1),x===!0&&(R=2),C===!0&&(R=3);let Y=u.attributes.position.count*R,Q=1;Y>e.maxTextureSize&&(Q=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const U=new Float32Array(Y*Q*4*p),O=new X1(U,Y,Q,p);O.type=As,O.needsUpdate=!0;const X=R*4;for(let ee=0;ee<p;ee++){const k=P[ee],H=w[ee],W=T[ee],oe=Y*Q*4*ee;for(let z=0;z<k.count;z++){const Z=z*X;S===!0&&(o.fromBufferAttribute(k,z),U[oe+Z+0]=o.x,U[oe+Z+1]=o.y,U[oe+Z+2]=o.z,U[oe+Z+3]=0),x===!0&&(o.fromBufferAttribute(H,z),U[oe+Z+4]=o.x,U[oe+Z+5]=o.y,U[oe+Z+6]=o.z,U[oe+Z+7]=0),C===!0&&(o.fromBufferAttribute(W,z),U[oe+Z+8]=o.x,U[oe+Z+9]=o.y,U[oe+Z+10]=o.z,U[oe+Z+11]=W.itemSize===4?o.w:1)}}g={count:p,texture:O,size:new ze(Y,Q)},s.set(u,g),u.addEventListener("dispose",J)}let v=0;for(let S=0;S<m.length;S++)v+=m[S];const _=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",m),h.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const f=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==f){p=[];for(let x=0;x<f;x++)p[x]=[x,0];i[u.id]=p}for(let x=0;x<f;x++){const C=p[x];C[0]=x,C[1]=m[x]}p.sort(WP);for(let x=0;x<8;x++)x<f&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(GP);const g=u.morphAttributes.position,v=u.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const C=a[x],P=C[0],w=C[1];P!==Number.MAX_SAFE_INTEGER&&w?(g&&u.getAttribute("morphTarget"+x)!==g[P]&&u.setAttribute("morphTarget"+x,g[P]),v&&u.getAttribute("morphNormal"+x)!==v[P]&&u.setAttribute("morphNormal"+x,v[P]),r[x]=w,_+=w):(g&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),v&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const S=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(t,"morphTargetBaseInfluence",S),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function $P(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const iS=new Ln,rS=new X1,sS=new RA,oS=new eS,Z_=[],J_=[],Q_=new Float32Array(16),ey=new Float32Array(9),ty=new Float32Array(4);function wa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Z_[r];if(s===void 0&&(s=new Float32Array(r),Z_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gd(t,e){let n=J_[e];n===void 0&&(n=new Int32Array(e),J_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function XP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function KP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function YP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function ZP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Rt(n,i))return;ty.set(i),t.uniformMatrix2fv(this.addr,!1,ty),Lt(n,i)}}function JP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Rt(n,i))return;ey.set(i),t.uniformMatrix3fv(this.addr,!1,ey),Lt(n,i)}}function QP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Rt(n,i))return;Q_.set(i),t.uniformMatrix4fv(this.addr,!1,Q_),Lt(n,i)}}function eR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function tR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function iR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function rR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function oR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function aR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function lR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||iS,r)}function cR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||sS,r)}function uR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||oS,r)}function dR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||rS,r)}function hR(t){switch(t){case 5126:return qP;case 35664:return XP;case 35665:return KP;case 35666:return YP;case 35674:return ZP;case 35675:return JP;case 35676:return QP;case 5124:case 35670:return eR;case 35667:case 35671:return tR;case 35668:case 35672:return nR;case 35669:case 35673:return iR;case 5125:return rR;case 36294:return sR;case 36295:return oR;case 36296:return aR;case 35678:case 36198:case 36298:case 36306:case 35682:return lR;case 35679:case 36299:case 36307:return cR;case 35680:case 36300:case 36308:case 36293:return uR;case 36289:case 36303:case 36311:case 36292:return dR}}function fR(t,e){t.uniform1fv(this.addr,e)}function pR(t,e){const n=wa(e,this.size,2);t.uniform2fv(this.addr,n)}function mR(t,e){const n=wa(e,this.size,3);t.uniform3fv(this.addr,n)}function gR(t,e){const n=wa(e,this.size,4);t.uniform4fv(this.addr,n)}function vR(t,e){const n=wa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _R(t,e){const n=wa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yR(t,e){const n=wa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function xR(t,e){t.uniform1iv(this.addr,e)}function wR(t,e){t.uniform2iv(this.addr,e)}function SR(t,e){t.uniform3iv(this.addr,e)}function MR(t,e){t.uniform4iv(this.addr,e)}function ER(t,e){t.uniform1uiv(this.addr,e)}function bR(t,e){t.uniform2uiv(this.addr,e)}function TR(t,e){t.uniform3uiv(this.addr,e)}function CR(t,e){t.uniform4uiv(this.addr,e)}function AR(t,e,n){const i=this.cache,r=e.length,s=Gd(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||iS,s[o])}function IR(t,e,n){const i=this.cache,r=e.length,s=Gd(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||sS,s[o])}function PR(t,e,n){const i=this.cache,r=e.length,s=Gd(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||oS,s[o])}function RR(t,e,n){const i=this.cache,r=e.length,s=Gd(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||rS,s[o])}function LR(t){switch(t){case 5126:return fR;case 35664:return pR;case 35665:return mR;case 35666:return gR;case 35674:return vR;case 35675:return _R;case 35676:return yR;case 5124:case 35670:return xR;case 35667:case 35671:return wR;case 35668:case 35672:return SR;case 35669:case 35673:return MR;case 5125:return ER;case 36294:return bR;case 36295:return TR;case 36296:return CR;case 35678:case 36198:case 36298:case 36306:case 35682:return AR;case 35679:case 36299:case 36307:return IR;case 35680:case 36300:case 36308:case 36293:return PR;case 36289:case 36303:case 36311:case 36292:return RR}}class DR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=hR(n.type)}}class kR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=LR(n.type)}}class NR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Sf=/(\w+)(\])?(\[|\.)?/g;function ny(t,e){t.seq.push(e),t.map[e.id]=e}function OR(t,e,n){const i=t.name,r=i.length;for(Sf.lastIndex=0;;){const s=Sf.exec(i),o=Sf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ny(n,c===void 0?new DR(a,t,e):new kR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new NR(a),ny(n,d)),n=d}}}class Tu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);OR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function iy(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let FR=0;function UR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function zR(t){switch(t){case js:return["Linear","( value )"];case rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function ry(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+UR(t.getShaderSource(e),o)}else return r}function BR(t,e){const n=zR(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function VR(t,e){let n;switch(e){case iA:n="Linear";break;case rA:n="Reinhard";break;case sA:n="OptimizedCineon";break;case oA:n="ACESFilmic";break;case aA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function HR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(el).join(`
`)}function GR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function WR(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function el(t){return t!==""}function sy(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oy(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jR=/^[ \t]*#include +<([\w\d./]+)>/gm;function tm(t){return t.replace(jR,$R)}function $R(t,e){const n=Ne[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return tm(n)}const qR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ay(t){return t.replace(qR,XR)}function XR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ly(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===F1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===U1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qa&&(e="SHADOWMAP_TYPE_VSM"),e}function YR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ua:case da:e="ENVMAP_TYPE_CUBE";break;case Bd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case da:e="ENVMAP_MODE_REFRACTION";break}return e}function JR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case V1:e="ENVMAP_BLENDING_MULTIPLY";break;case tA:e="ENVMAP_BLENDING_MIX";break;case nA:e="ENVMAP_BLENDING_ADD";break}return e}function QR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function eL(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=KR(n),c=YR(n),u=ZR(n),d=JR(n),h=QR(n),m=n.isWebGL2?"":HR(n),y=GR(s),f=r.createProgram();let p,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[y].filter(el).join(`
`),p.length>0&&(p+=`
`),g=[m,y].filter(el).join(`
`),g.length>0&&(g+=`
`)):(p=[ly(n),"#define SHADER_NAME "+n.shaderName,y,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),g=[m,ly(n),"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==dr?"#define TONE_MAPPING":"",n.toneMapping!==dr?Ne.tonemapping_pars_fragment:"",n.toneMapping!==dr?VR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,BR("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(el).join(`
`)),o=tm(o),o=sy(o,n),o=oy(o,n),a=tm(a),a=sy(a,n),a=oy(a,n),o=ay(o),a=ay(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",n.glslVersion===R_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===R_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=v+p+o,S=v+g+a,x=iy(r,35633,_),C=iy(r,35632,S);if(r.attachShader(f,x),r.attachShader(f,C),n.index0AttributeName!==void 0?r.bindAttribLocation(f,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f),t.debug.checkShaderErrors){const T=r.getProgramInfoLog(f).trim(),R=r.getShaderInfoLog(x).trim(),Y=r.getShaderInfoLog(C).trim();let Q=!0,U=!0;if(r.getProgramParameter(f,35714)===!1){Q=!1;const O=ry(r,x,"vertex"),X=ry(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,35715)+`

Program Info Log: `+T+`
`+O+`
`+X)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||Y==="")&&(U=!1);U&&(this.diagnostics={runnable:Q,programLog:T,vertexShader:{log:R,prefix:p},fragmentShader:{log:Y,prefix:g}})}r.deleteShader(x),r.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new Tu(r,f)),P};let w;return this.getAttributes=function(){return w===void 0&&(w=WR(r,f)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.name=n.shaderName,this.id=FR++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=x,this.fragmentShader=C,this}let tL=0;class nL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new iL(e),n.set(e,i)),i}}class iL{constructor(e){this.id=tL++,this.code=e,this.usedTimes=0}}function rL(t,e,n,i,r,s,o){const a=new Lg,l=new nL,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(w,T,R,Y,Q){const U=Y.fog,O=Q.geometry,X=w.isMeshStandardMaterial?Y.environment:null,J=(w.isMeshStandardMaterial?n:e).get(w.envMap||X),ee=J&&J.mapping===Bd?J.image.height:null,k=y[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const H=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,W=H!==void 0?H.length:0;let oe=0;O.morphAttributes.position!==void 0&&(oe=1),O.morphAttributes.normal!==void 0&&(oe=2),O.morphAttributes.color!==void 0&&(oe=3);let z,Z,re,le;if(k){const Fe=Ri[k];z=Fe.vertexShader,Z=Fe.fragmentShader}else z=w.vertexShader,Z=w.fragmentShader,l.update(w),re=l.getVertexShaderID(w),le=l.getFragmentShaderID(w);const L=t.getRenderTarget(),we=w.alphaTest>0,me=w.clearcoat>0,ae=w.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:w.type,vertexShader:z,fragmentShader:Z,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:le,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,instancing:Q.isInstancedMesh===!0,instancingColor:Q.isInstancedMesh===!0&&Q.instanceColor!==null,supportsVertexTextures:h,outputEncoding:L===null?t.outputEncoding:L.isXRRenderTarget===!0?L.texture.encoding:js,map:!!w.map,matcap:!!w.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:ee,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===CA,tangentSpaceNormalMap:w.normalMapType===TA,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===rt,clearcoat:me,clearcoatMap:me&&!!w.clearcoatMap,clearcoatRoughnessMap:me&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!w.clearcoatNormalMap,iridescence:ae,iridescenceMap:ae&&!!w.iridescenceMap,iridescenceThicknessMap:ae&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===Ko,alphaMap:!!w.alphaMap,alphaTest:we,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!O.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!U,useFog:w.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:w.toneMapped?t.toneMapping:dr,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===$t,flipSided:w.side===Wn,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)T.push(R),T.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(g(T,w),v(T,w),T.push(t.outputEncoding)),T.push(w.customProgramCacheKey),T.join()}function g(w,T){w.push(T.precision),w.push(T.outputEncoding),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.combine),w.push(T.vertexUvs),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function v(w,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),w.push(a.mask)}function _(w){const T=y[w.type];let R;if(T){const Y=Ri[T];R=GA.clone(Y.uniforms)}else R=w.uniforms;return R}function S(w,T){let R;for(let Y=0,Q=c.length;Y<Q;Y++){const U=c[Y];if(U.cacheKey===T){R=U,++R.usedTimes;break}}return R===void 0&&(R=new eL(t,T,w,s),c.push(R)),R}function x(w){if(--w.usedTimes===0){const T=c.indexOf(w);c[T]=c[c.length-1],c.pop(),w.destroy()}}function C(w){l.remove(w)}function P(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:x,releaseShaderCache:C,programs:c,dispose:P}}function sL(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function oL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function cy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function uy(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,y,f,p){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:h,material:m,groupOrder:y,renderOrder:d.renderOrder,z:f,group:p},t[e]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=m,g.groupOrder=y,g.renderOrder=d.renderOrder,g.z=f,g.group=p),e++,g}function a(d,h,m,y,f,p){const g=o(d,h,m,y,f,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):n.push(g)}function l(d,h,m,y,f,p){const g=o(d,h,m,y,f,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):n.unshift(g)}function c(d,h){n.length>1&&n.sort(d||oL),i.length>1&&i.sort(h||cy),r.length>1&&r.sort(h||cy)}function u(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function aL(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new uy,t.set(i,[o])):r>=s.length?(o=new uy,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function lL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new ot};break;case"SpotLight":n={position:new V,direction:new V,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function cL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let uL=0;function dL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function hL(t,e){const n=new lL,i=cL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new V);const s=new V,o=new Yt,a=new Yt;function l(u,d){let h=0,m=0,y=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let f=0,p=0,g=0,v=0,_=0,S=0,x=0,C=0,P=0,w=0;u.sort(dL);const T=d!==!0?Math.PI:1;for(let Y=0,Q=u.length;Y<Q;Y++){const U=u[Y],O=U.color,X=U.intensity,J=U.distance,ee=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=O.r*X*T,m+=O.g*X*T,y+=O.b*X*T;else if(U.isLightProbe)for(let k=0;k<9;k++)r.probe[k].addScaledVector(U.sh.coefficients[k],X);else if(U.isDirectionalLight){const k=n.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const H=U.shadow,W=i.get(U);W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,r.directionalShadow[f]=W,r.directionalShadowMap[f]=ee,r.directionalShadowMatrix[f]=U.shadow.matrix,S++}r.directional[f]=k,f++}else if(U.isSpotLight){const k=n.get(U);k.position.setFromMatrixPosition(U.matrixWorld),k.color.copy(O).multiplyScalar(X*T),k.distance=J,k.coneCos=Math.cos(U.angle),k.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),k.decay=U.decay,r.spot[g]=k;const H=U.shadow;if(U.map&&(r.spotLightMap[P]=U.map,P++,H.updateMatrices(U),U.castShadow&&w++),r.spotLightMatrix[g]=H.matrix,U.castShadow){const W=i.get(U);W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,r.spotShadow[g]=W,r.spotShadowMap[g]=ee,C++}g++}else if(U.isRectAreaLight){const k=n.get(U);k.color.copy(O).multiplyScalar(X),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),r.rectArea[v]=k,v++}else if(U.isPointLight){const k=n.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*T),k.distance=U.distance,k.decay=U.decay,U.castShadow){const H=U.shadow,W=i.get(U);W.shadowBias=H.bias,W.shadowNormalBias=H.normalBias,W.shadowRadius=H.radius,W.shadowMapSize=H.mapSize,W.shadowCameraNear=H.camera.near,W.shadowCameraFar=H.camera.far,r.pointShadow[p]=W,r.pointShadowMap[p]=ee,r.pointShadowMatrix[p]=U.shadow.matrix,x++}r.point[p]=k,p++}else if(U.isHemisphereLight){const k=n.get(U);k.skyColor.copy(U.color).multiplyScalar(X*T),k.groundColor.copy(U.groundColor).multiplyScalar(X*T),r.hemi[_]=k,_++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=y;const R=r.hash;(R.directionalLength!==f||R.pointLength!==p||R.spotLength!==g||R.rectAreaLength!==v||R.hemiLength!==_||R.numDirectionalShadows!==S||R.numPointShadows!==x||R.numSpotShadows!==C||R.numSpotMaps!==P)&&(r.directional.length=f,r.spot.length=g,r.rectArea.length=v,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=C+P-w,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=w,R.directionalLength=f,R.pointLength=p,R.spotLength=g,R.rectAreaLength=v,R.hemiLength=_,R.numDirectionalShadows=S,R.numPointShadows=x,R.numSpotShadows=C,R.numSpotMaps=P,r.version=uL++)}function c(u,d){let h=0,m=0,y=0,f=0,p=0;const g=d.matrixWorldInverse;for(let v=0,_=u.length;v<_;v++){const S=u[v];if(S.isDirectionalLight){const x=r.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(S.isSpotLight){const x=r.spot[y];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),y++}else if(S.isRectAreaLight){const x=r.rectArea[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),f++}else if(S.isPointLight){const x=r.point[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),m++}else if(S.isHemisphereLight){const x=r.hemi[p];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:r}}function dy(t,e){const n=new hL(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function fL(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new dy(t,e),n.set(s,[l])):o>=a.length?(l=new dy(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class pL extends Hd{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=EA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mL extends Hd{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vL=`uniform sampler2D shadow_pass;
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
}`;function _L(t,e,n){let i=new tS;const r=new ze,s=new ze,o=new Xt,a=new pL({depthPacking:bA}),l=new mL,c={},u=n.maxTextureSize,d={[es]:Wn,[Wn]:es,[$t]:$t},h=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:gL,fragmentShader:vL}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const y=new io;y.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new st(y,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=F1,this.render=function(S,x,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const P=t.getRenderTarget(),w=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),R=t.state;R.setBlending($r),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let Y=0,Q=S.length;Y<Q;Y++){const U=S[Y],O=U.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const X=O.getFrameExtents();if(r.multiply(X),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,O.mapSize.y=s.y)),O.map===null){const ee=this.type!==Qa?{minFilter:At,magFilter:At}:{};O.map=new $s(r.x,r.y,ee),O.map.texture.name=U.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const J=O.getViewportCount();for(let ee=0;ee<J;ee++){const k=O.getViewport(ee);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),R.viewport(o),O.updateMatrices(U,ee),i=O.getFrustum(),_(x,C,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===Qa&&g(O,C),O.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(P,w,T)};function g(S,x){const C=e.update(f);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new $s(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(x,null,C,h,f,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(x,null,C,m,f,null)}function v(S,x,C,P,w,T){let R=null;const Y=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(Y!==void 0)R=Y;else if(R=C.isPointLight===!0?l:a,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const Q=R.uuid,U=x.uuid;let O=c[Q];O===void 0&&(O={},c[Q]=O);let X=O[U];X===void 0&&(X=R.clone(),O[U]=X),R=X}return R.visible=x.visible,R.wireframe=x.wireframe,T===Qa?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:d[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=P,R.farDistance=w),R}function _(S,x,C,P,w){if(S.visible===!1)return;if(S.layers.test(x.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Qa)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const Y=e.update(S),Q=S.material;if(Array.isArray(Q)){const U=Y.groups;for(let O=0,X=U.length;O<X;O++){const J=U[O],ee=Q[J.materialIndex];if(ee&&ee.visible){const k=v(S,ee,P,C.near,C.far,w);t.renderBufferDirect(C,null,Y,k,S,J)}}}else if(Q.visible){const U=v(S,Q,P,C.near,C.far,w);t.renderBufferDirect(C,null,Y,U,S,null)}}const R=S.children;for(let Y=0,Q=R.length;Y<Q;Y++)_(R[Y],x,C,P,w)}}function yL(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const $=new Xt;let ne=null;const ye=new Xt(0,0,0,0);return{setMask:function(Te){ne!==Te&&!D&&(t.colorMask(Te,Te,Te,Te),ne=Te)},setLocked:function(Te){D=Te},setClear:function(Te,Ze,kt,en,ls){ls===!0&&(Te*=en,Ze*=en,kt*=en),$.set(Te,Ze,kt,en),ye.equals($)===!1&&(t.clearColor(Te,Ze,kt,en),ye.copy($))},reset:function(){D=!1,ne=null,ye.set(-1,0,0,0)}}}function s(){let D=!1,$=null,ne=null,ye=null;return{setTest:function(Te){Te?we(2929):me(2929)},setMask:function(Te){$!==Te&&!D&&(t.depthMask(Te),$=Te)},setFunc:function(Te){if(ne!==Te){switch(Te){case XC:t.depthFunc(512);break;case KC:t.depthFunc(519);break;case YC:t.depthFunc(513);break;case Kp:t.depthFunc(515);break;case ZC:t.depthFunc(514);break;case JC:t.depthFunc(518);break;case QC:t.depthFunc(516);break;case eA:t.depthFunc(517);break;default:t.depthFunc(515)}ne=Te}},setLocked:function(Te){D=Te},setClear:function(Te){ye!==Te&&(t.clearDepth(Te),ye=Te)},reset:function(){D=!1,$=null,ne=null,ye=null}}}function o(){let D=!1,$=null,ne=null,ye=null,Te=null,Ze=null,kt=null,en=null,ls=null;return{setTest:function(ct){D||(ct?we(2960):me(2960))},setMask:function(ct){$!==ct&&!D&&(t.stencilMask(ct),$=ct)},setFunc:function(ct,$i,Zn){(ne!==ct||ye!==$i||Te!==Zn)&&(t.stencilFunc(ct,$i,Zn),ne=ct,ye=$i,Te=Zn)},setOp:function(ct,$i,Zn){(Ze!==ct||kt!==$i||en!==Zn)&&(t.stencilOp(ct,$i,Zn),Ze=ct,kt=$i,en=Zn)},setLocked:function(ct){D=ct},setClear:function(ct){ls!==ct&&(t.clearStencil(ct),ls=ct)},reset:function(){D=!1,$=null,ne=null,ye=null,Te=null,Ze=null,kt=null,en=null,ls=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let h={},m={},y=new WeakMap,f=[],p=null,g=!1,v=null,_=null,S=null,x=null,C=null,P=null,w=null,T=!1,R=null,Y=null,Q=null,U=null,O=null;const X=t.getParameter(35661);let J=!1,ee=0;const k=t.getParameter(7938);k.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(k)[1]),J=ee>=1):k.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),J=ee>=2);let H=null,W={};const oe=t.getParameter(3088),z=t.getParameter(2978),Z=new Xt().fromArray(oe),re=new Xt().fromArray(z);function le(D,$,ne){const ye=new Uint8Array(4),Te=t.createTexture();t.bindTexture(D,Te),t.texParameteri(D,10241,9728),t.texParameteri(D,10240,9728);for(let Ze=0;Ze<ne;Ze++)t.texImage2D($+Ze,0,6408,1,1,0,6408,5121,ye);return Te}const L={};L[3553]=le(3553,3553,1),L[34067]=le(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),we(2929),l.setFunc(Kp),yt(!1),pn(e_),we(2884),Dt($r);function we(D){h[D]!==!0&&(t.enable(D),h[D]=!0)}function me(D){h[D]!==!1&&(t.disable(D),h[D]=!1)}function ae(D,$){return m[D]!==$?(t.bindFramebuffer(D,$),m[D]=$,i&&(D===36009&&(m[36160]=$),D===36160&&(m[36009]=$)),!0):!1}function se(D,$){let ne=f,ye=!1;if(D)if(ne=y.get($),ne===void 0&&(ne=[],y.set($,ne)),D.isWebGLMultipleRenderTargets){const Te=D.texture;if(ne.length!==Te.length||ne[0]!==36064){for(let Ze=0,kt=Te.length;Ze<kt;Ze++)ne[Ze]=36064+Ze;ne.length=Te.length,ye=!0}}else ne[0]!==36064&&(ne[0]=36064,ye=!0);else ne[0]!==1029&&(ne[0]=1029,ye=!0);ye&&(n.isWebGL2?t.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Fe(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const ke={[To]:32774,[FC]:32778,[UC]:32779};if(i)ke[r_]=32775,ke[s_]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(ke[r_]=D.MIN_EXT,ke[s_]=D.MAX_EXT)}const Ae={[zC]:0,[BC]:1,[VC]:768,[z1]:770,[qC]:776,[jC]:774,[GC]:772,[HC]:769,[B1]:771,[$C]:775,[WC]:773};function Dt(D,$,ne,ye,Te,Ze,kt,en){if(D===$r){g===!0&&(me(3042),g=!1);return}if(g===!1&&(we(3042),g=!0),D!==OC){if(D!==v||en!==T){if((_!==To||C!==To)&&(t.blendEquation(32774),_=To,C=To),en)switch(D){case Ko:t.blendFuncSeparate(1,771,1,771);break;case t_:t.blendFunc(1,1);break;case n_:t.blendFuncSeparate(0,769,0,1);break;case i_:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ko:t.blendFuncSeparate(770,771,1,771);break;case t_:t.blendFunc(770,1);break;case n_:t.blendFuncSeparate(0,769,0,1);break;case i_:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,x=null,P=null,w=null,v=D,T=en}return}Te=Te||$,Ze=Ze||ne,kt=kt||ye,($!==_||Te!==C)&&(t.blendEquationSeparate(ke[$],ke[Te]),_=$,C=Te),(ne!==S||ye!==x||Ze!==P||kt!==w)&&(t.blendFuncSeparate(Ae[ne],Ae[ye],Ae[Ze],Ae[kt]),S=ne,x=ye,P=Ze,w=kt),v=D,T=!1}function Qt(D,$){D.side===$t?me(2884):we(2884);let ne=D.side===Wn;$&&(ne=!ne),yt(ne),D.blending===Ko&&D.transparent===!1?Dt($r):Dt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ye=D.stencilWrite;c.setTest(ye),ye&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ye(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?we(32926):me(32926)}function yt(D){R!==D&&(D?t.frontFace(2304):t.frontFace(2305),R=D)}function pn(D){D!==kC?(we(2884),D!==Y&&(D===e_?t.cullFace(1029):D===NC?t.cullFace(1028):t.cullFace(1032))):me(2884),Y=D}function gt(D){D!==Q&&(J&&t.lineWidth(D),Q=D)}function Ye(D,$,ne){D?(we(32823),(U!==$||O!==ne)&&(t.polygonOffset($,ne),U=$,O=ne)):me(32823)}function Yn(D){D?we(3089):me(3089)}function En(D){D===void 0&&(D=33984+X-1),H!==D&&(t.activeTexture(D),H=D)}function b(D,$,ne){ne===void 0&&(H===null?ne=33984+X-1:ne=H);let ye=W[ne];ye===void 0&&(ye={type:void 0,texture:void 0},W[ne]=ye),(ye.type!==D||ye.texture!==$)&&(H!==ne&&(t.activeTexture(ne),H=ne),t.bindTexture(D,$||L[D]),ye.type=D,ye.texture=$)}function M(){const D=W[H];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function A(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function N(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(D){Z.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Z.copy(D))}function Me(D){re.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),re.copy(D))}function Ve(D,$){let ne=d.get($);ne===void 0&&(ne=new WeakMap,d.set($,ne));let ye=ne.get(D);ye===void 0&&(ye=t.getUniformBlockIndex($,D.name),ne.set(D,ye))}function He(D,$){const ye=d.get($).get(D);u.get($)!==ye&&(t.uniformBlockBinding($,ye,D.__bindingPointIndex),u.set($,ye))}function tt(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},H=null,W={},m={},y=new WeakMap,f=[],p=null,g=!1,v=null,_=null,S=null,x=null,C=null,P=null,w=null,T=!1,R=null,Y=null,Q=null,U=null,O=null,Z.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:we,disable:me,bindFramebuffer:ae,drawBuffers:se,useProgram:Fe,setBlending:Dt,setMaterial:Qt,setFlipSided:yt,setCullFace:pn,setLineWidth:gt,setPolygonOffset:Ye,setScissorTest:Yn,activeTexture:En,bindTexture:b,unbindTexture:M,compressedTexImage2D:j,compressedTexImage3D:ie,texImage2D:Se,texImage3D:ge,updateUBOMapping:Ve,uniformBlockBinding:He,texStorage2D:N,texStorage3D:ve,texSubImage2D:ce,texSubImage3D:pe,compressedTexSubImage2D:Pe,compressedTexSubImage3D:A,scissor:be,viewport:Me,reset:tt}}function xL(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,M){return g?new OffscreenCanvas(b,M):zl("canvas")}function _(b,M,j,ie){let ce=1;if((b.width>ie||b.height>ie)&&(ce=ie/Math.max(b.width,b.height)),ce<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const pe=M?em:Math.floor,Pe=pe(ce*b.width),A=pe(ce*b.height);f===void 0&&(f=v(Pe,A));const N=j?v(Pe,A):f;return N.width=Pe,N.height=A,N.getContext("2d").drawImage(b,0,0,Pe,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Pe+"x"+A+")."),N}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function S(b){return D_(b.width)&&D_(b.height)}function x(b){return a?!1:b.wrapS!==xi||b.wrapT!==xi||b.minFilter!==At&&b.minFilter!==ni}function C(b,M){return b.generateMipmaps&&M&&b.minFilter!==At&&b.minFilter!==ni}function P(b){t.generateMipmap(b)}function w(b,M,j,ie,ce=!1){if(a===!1)return M;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let pe=M;return M===6403&&(j===5126&&(pe=33326),j===5131&&(pe=33325),j===5121&&(pe=33321)),M===33319&&(j===5126&&(pe=33328),j===5131&&(pe=33327),j===5121&&(pe=33323)),M===6408&&(j===5126&&(pe=34836),j===5131&&(pe=34842),j===5121&&(pe=ie===rt&&ce===!1?35907:32856),j===32819&&(pe=32854),j===32820&&(pe=32855)),(pe===33325||pe===33326||pe===33327||pe===33328||pe===34842||pe===34836)&&e.get("EXT_color_buffer_float"),pe}function T(b,M,j){return C(b,j)===!0||b.isFramebufferTexture&&b.minFilter!==At&&b.minFilter!==ni?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function R(b){return b===At||b===o_||b===Wh?9728:9729}function Y(b){const M=b.target;M.removeEventListener("dispose",Y),U(M),M.isVideoTexture&&y.delete(M)}function Q(b){const M=b.target;M.removeEventListener("dispose",Q),X(M)}function U(b){const M=i.get(b);if(M.__webglInit===void 0)return;const j=b.source,ie=p.get(j);if(ie){const ce=ie[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&O(b),Object.keys(ie).length===0&&p.delete(j)}i.remove(b)}function O(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const j=b.source,ie=p.get(j);delete ie[M.__cacheKey],o.memory.textures--}function X(b){const M=b.texture,j=i.get(b),ie=i.get(M);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++)t.deleteFramebuffer(j.__webglFramebuffer[ce]),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer[ce]);else{if(t.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&t.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ce=0;ce<j.__webglColorRenderbuffer.length;ce++)j.__webglColorRenderbuffer[ce]&&t.deleteRenderbuffer(j.__webglColorRenderbuffer[ce]);j.__webglDepthRenderbuffer&&t.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ce=0,pe=M.length;ce<pe;ce++){const Pe=i.get(M[ce]);Pe.__webglTexture&&(t.deleteTexture(Pe.__webglTexture),o.memory.textures--),i.remove(M[ce])}i.remove(M),i.remove(b)}let J=0;function ee(){J=0}function k(){const b=J;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),J+=1,b}function H(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.encoding),M.join()}function W(b,M){const j=i.get(b);if(b.isVideoTexture&&Yn(b),b.isRenderTargetTexture===!1&&b.version>0&&j.__version!==b.version){const ie=b.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(j,b,M);return}}n.bindTexture(3553,j.__webglTexture,33984+M)}function oe(b,M){const j=i.get(b);if(b.version>0&&j.__version!==b.version){me(j,b,M);return}n.bindTexture(35866,j.__webglTexture,33984+M)}function z(b,M){const j=i.get(b);if(b.version>0&&j.__version!==b.version){me(j,b,M);return}n.bindTexture(32879,j.__webglTexture,33984+M)}function Z(b,M){const j=i.get(b);if(b.version>0&&j.__version!==b.version){ae(j,b,M);return}n.bindTexture(34067,j.__webglTexture,33984+M)}const re={[Ni]:10497,[xi]:33071,[Jp]:33648},le={[At]:9728,[o_]:9984,[Wh]:9986,[ni]:9729,[lA]:9985,[Ol]:9987};function L(b,M,j){if(j?(t.texParameteri(b,10242,re[M.wrapS]),t.texParameteri(b,10243,re[M.wrapT]),(b===32879||b===35866)&&t.texParameteri(b,32882,re[M.wrapR]),t.texParameteri(b,10240,le[M.magFilter]),t.texParameteri(b,10241,le[M.minFilter])):(t.texParameteri(b,10242,33071),t.texParameteri(b,10243,33071),(b===32879||b===35866)&&t.texParameteri(b,32882,33071),(M.wrapS!==xi||M.wrapT!==xi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,10240,R(M.magFilter)),t.texParameteri(b,10241,R(M.minFilter)),M.minFilter!==At&&M.minFilter!==ni&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===At||M.minFilter!==Wh&&M.minFilter!==Ol||M.type===As&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Fl&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(b,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function we(b,M){let j=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",Y));const ie=M.source;let ce=p.get(ie);ce===void 0&&(ce={},p.set(ie,ce));const pe=H(M);if(pe!==b.__cacheKey){ce[pe]===void 0&&(ce[pe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ce[pe].usedTimes++;const Pe=ce[b.__cacheKey];Pe!==void 0&&(ce[b.__cacheKey].usedTimes--,Pe.usedTimes===0&&O(M)),b.__cacheKey=pe,b.__webglTexture=ce[pe].texture}return j}function me(b,M,j){let ie=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=35866),M.isData3DTexture&&(ie=32879);const ce=we(b,M),pe=M.source;n.bindTexture(ie,b.__webglTexture,33984+j);const Pe=i.get(pe);if(pe.version!==Pe.__version||ce===!0){n.activeTexture(33984+j),t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const A=x(M)&&S(M.image)===!1;let N=_(M.image,A,!1,u);N=En(M,N);const ve=S(N)||a,Se=s.convert(M.format,M.encoding);let ge=s.convert(M.type),be=w(M.internalFormat,Se,ge,M.encoding,M.isVideoTexture);L(ie,M,ve);let Me;const Ve=M.mipmaps,He=a&&M.isVideoTexture!==!0,tt=Pe.__version===void 0||ce===!0,D=T(M,N,ve);if(M.isDepthTexture)be=6402,a?M.type===As?be=36012:M.type===Cs?be=33190:M.type===Yo?be=35056:be=33189:M.type===As&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ks&&be===6402&&M.type!==G1&&M.type!==Cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Cs,ge=s.convert(M.type)),M.format===ha&&be===6402&&(be=34041,M.type!==Yo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Yo,ge=s.convert(M.type))),tt&&(He?n.texStorage2D(3553,1,be,N.width,N.height):n.texImage2D(3553,0,be,N.width,N.height,0,Se,ge,null));else if(M.isDataTexture)if(Ve.length>0&&ve){He&&tt&&n.texStorage2D(3553,D,be,Ve[0].width,Ve[0].height);for(let $=0,ne=Ve.length;$<ne;$++)Me=Ve[$],He?n.texSubImage2D(3553,$,0,0,Me.width,Me.height,Se,ge,Me.data):n.texImage2D(3553,$,be,Me.width,Me.height,0,Se,ge,Me.data);M.generateMipmaps=!1}else He?(tt&&n.texStorage2D(3553,D,be,N.width,N.height),n.texSubImage2D(3553,0,0,0,N.width,N.height,Se,ge,N.data)):n.texImage2D(3553,0,be,N.width,N.height,0,Se,ge,N.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){He&&tt&&n.texStorage3D(35866,D,be,Ve[0].width,Ve[0].height,N.depth);for(let $=0,ne=Ve.length;$<ne;$++)Me=Ve[$],M.format!==ri?Se!==null?He?n.compressedTexSubImage3D(35866,$,0,0,0,Me.width,Me.height,N.depth,Se,Me.data,0,0):n.compressedTexImage3D(35866,$,be,Me.width,Me.height,N.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?n.texSubImage3D(35866,$,0,0,0,Me.width,Me.height,N.depth,Se,ge,Me.data):n.texImage3D(35866,$,be,Me.width,Me.height,N.depth,0,Se,ge,Me.data)}else{He&&tt&&n.texStorage2D(3553,D,be,Ve[0].width,Ve[0].height);for(let $=0,ne=Ve.length;$<ne;$++)Me=Ve[$],M.format!==ri?Se!==null?He?n.compressedTexSubImage2D(3553,$,0,0,Me.width,Me.height,Se,Me.data):n.compressedTexImage2D(3553,$,be,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?n.texSubImage2D(3553,$,0,0,Me.width,Me.height,Se,ge,Me.data):n.texImage2D(3553,$,be,Me.width,Me.height,0,Se,ge,Me.data)}else if(M.isDataArrayTexture)He?(tt&&n.texStorage3D(35866,D,be,N.width,N.height,N.depth),n.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,Se,ge,N.data)):n.texImage3D(35866,0,be,N.width,N.height,N.depth,0,Se,ge,N.data);else if(M.isData3DTexture)He?(tt&&n.texStorage3D(32879,D,be,N.width,N.height,N.depth),n.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,Se,ge,N.data)):n.texImage3D(32879,0,be,N.width,N.height,N.depth,0,Se,ge,N.data);else if(M.isFramebufferTexture){if(tt)if(He)n.texStorage2D(3553,D,be,N.width,N.height);else{let $=N.width,ne=N.height;for(let ye=0;ye<D;ye++)n.texImage2D(3553,ye,be,$,ne,0,Se,ge,null),$>>=1,ne>>=1}}else if(Ve.length>0&&ve){He&&tt&&n.texStorage2D(3553,D,be,Ve[0].width,Ve[0].height);for(let $=0,ne=Ve.length;$<ne;$++)Me=Ve[$],He?n.texSubImage2D(3553,$,0,0,Se,ge,Me):n.texImage2D(3553,$,be,Se,ge,Me);M.generateMipmaps=!1}else He?(tt&&n.texStorage2D(3553,D,be,N.width,N.height),n.texSubImage2D(3553,0,0,0,Se,ge,N)):n.texImage2D(3553,0,be,Se,ge,N);C(M,ve)&&P(ie),Pe.__version=pe.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ae(b,M,j){if(M.image.length!==6)return;const ie=we(b,M),ce=M.source;n.bindTexture(34067,b.__webglTexture,33984+j);const pe=i.get(ce);if(ce.version!==pe.__version||ie===!0){n.activeTexture(33984+j),t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const Pe=M.isCompressedTexture||M.image[0].isCompressedTexture,A=M.image[0]&&M.image[0].isDataTexture,N=[];for(let $=0;$<6;$++)!Pe&&!A?N[$]=_(M.image[$],!1,!0,c):N[$]=A?M.image[$].image:M.image[$],N[$]=En(M,N[$]);const ve=N[0],Se=S(ve)||a,ge=s.convert(M.format,M.encoding),be=s.convert(M.type),Me=w(M.internalFormat,ge,be,M.encoding),Ve=a&&M.isVideoTexture!==!0,He=pe.__version===void 0||ie===!0;let tt=T(M,ve,Se);L(34067,M,Se);let D;if(Pe){Ve&&He&&n.texStorage2D(34067,tt,Me,ve.width,ve.height);for(let $=0;$<6;$++){D=N[$].mipmaps;for(let ne=0;ne<D.length;ne++){const ye=D[ne];M.format!==ri?ge!==null?Ve?n.compressedTexSubImage2D(34069+$,ne,0,0,ye.width,ye.height,ge,ye.data):n.compressedTexImage2D(34069+$,ne,Me,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?n.texSubImage2D(34069+$,ne,0,0,ye.width,ye.height,ge,be,ye.data):n.texImage2D(34069+$,ne,Me,ye.width,ye.height,0,ge,be,ye.data)}}}else{D=M.mipmaps,Ve&&He&&(D.length>0&&tt++,n.texStorage2D(34067,tt,Me,N[0].width,N[0].height));for(let $=0;$<6;$++)if(A){Ve?n.texSubImage2D(34069+$,0,0,0,N[$].width,N[$].height,ge,be,N[$].data):n.texImage2D(34069+$,0,Me,N[$].width,N[$].height,0,ge,be,N[$].data);for(let ne=0;ne<D.length;ne++){const Te=D[ne].image[$].image;Ve?n.texSubImage2D(34069+$,ne+1,0,0,Te.width,Te.height,ge,be,Te.data):n.texImage2D(34069+$,ne+1,Me,Te.width,Te.height,0,ge,be,Te.data)}}else{Ve?n.texSubImage2D(34069+$,0,0,0,ge,be,N[$]):n.texImage2D(34069+$,0,Me,ge,be,N[$]);for(let ne=0;ne<D.length;ne++){const ye=D[ne];Ve?n.texSubImage2D(34069+$,ne+1,0,0,ge,be,ye.image[$]):n.texImage2D(34069+$,ne+1,Me,ge,be,ye.image[$])}}}C(M,Se)&&P(34067),pe.__version=ce.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function se(b,M,j,ie,ce){const pe=s.convert(j.format,j.encoding),Pe=s.convert(j.type),A=w(j.internalFormat,pe,Pe,j.encoding);i.get(M).__hasExternalTextures||(ce===32879||ce===35866?n.texImage3D(ce,0,A,M.width,M.height,M.depth,0,pe,Pe,null):n.texImage2D(ce,0,A,M.width,M.height,0,pe,Pe,null)),n.bindFramebuffer(36160,b),Ye(M)?h.framebufferTexture2DMultisampleEXT(36160,ie,ce,i.get(j).__webglTexture,0,gt(M)):(ce===3553||ce>=34069&&ce<=34074)&&t.framebufferTexture2D(36160,ie,ce,i.get(j).__webglTexture,0),n.bindFramebuffer(36160,null)}function Fe(b,M,j){if(t.bindRenderbuffer(36161,b),M.depthBuffer&&!M.stencilBuffer){let ie=33189;if(j||Ye(M)){const ce=M.depthTexture;ce&&ce.isDepthTexture&&(ce.type===As?ie=36012:ce.type===Cs&&(ie=33190));const pe=gt(M);Ye(M)?h.renderbufferStorageMultisampleEXT(36161,pe,ie,M.width,M.height):t.renderbufferStorageMultisample(36161,pe,ie,M.width,M.height)}else t.renderbufferStorage(36161,ie,M.width,M.height);t.framebufferRenderbuffer(36160,36096,36161,b)}else if(M.depthBuffer&&M.stencilBuffer){const ie=gt(M);j&&Ye(M)===!1?t.renderbufferStorageMultisample(36161,ie,35056,M.width,M.height):Ye(M)?h.renderbufferStorageMultisampleEXT(36161,ie,35056,M.width,M.height):t.renderbufferStorage(36161,34041,M.width,M.height),t.framebufferRenderbuffer(36160,33306,36161,b)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ce=0;ce<ie.length;ce++){const pe=ie[ce],Pe=s.convert(pe.format,pe.encoding),A=s.convert(pe.type),N=w(pe.internalFormat,Pe,A,pe.encoding),ve=gt(M);j&&Ye(M)===!1?t.renderbufferStorageMultisample(36161,ve,N,M.width,M.height):Ye(M)?h.renderbufferStorageMultisampleEXT(36161,ve,N,M.width,M.height):t.renderbufferStorage(36161,N,M.width,M.height)}}t.bindRenderbuffer(36161,null)}function ke(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const ie=i.get(M.depthTexture).__webglTexture,ce=gt(M);if(M.depthTexture.format===ks)Ye(M)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,ce):t.framebufferTexture2D(36160,36096,3553,ie,0);else if(M.depthTexture.format===ha)Ye(M)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,ce):t.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function Ae(b){const M=i.get(b),j=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ke(M.__webglFramebuffer,b)}else if(j){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(36160,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=t.createRenderbuffer(),Fe(M.__webglDepthbuffer[ie],b,!1)}else n.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Fe(M.__webglDepthbuffer,b,!1);n.bindFramebuffer(36160,null)}function Dt(b,M,j){const ie=i.get(b);M!==void 0&&se(ie.__webglFramebuffer,b,b.texture,36064,3553),j!==void 0&&Ae(b)}function Qt(b){const M=b.texture,j=i.get(b),ie=i.get(M);b.addEventListener("dispose",Q),b.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=M.version,o.memory.textures++);const ce=b.isWebGLCubeRenderTarget===!0,pe=b.isWebGLMultipleRenderTargets===!0,Pe=S(b)||a;if(ce){j.__webglFramebuffer=[];for(let A=0;A<6;A++)j.__webglFramebuffer[A]=t.createFramebuffer()}else{if(j.__webglFramebuffer=t.createFramebuffer(),pe)if(r.drawBuffers){const A=b.texture;for(let N=0,ve=A.length;N<ve;N++){const Se=i.get(A[N]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Ye(b)===!1){const A=pe?M:[M];j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let N=0;N<A.length;N++){const ve=A[N];j.__webglColorRenderbuffer[N]=t.createRenderbuffer(),t.bindRenderbuffer(36161,j.__webglColorRenderbuffer[N]);const Se=s.convert(ve.format,ve.encoding),ge=s.convert(ve.type),be=w(ve.internalFormat,Se,ge,ve.encoding,b.isXRRenderTarget===!0),Me=gt(b);t.renderbufferStorageMultisample(36161,Me,be,b.width,b.height),t.framebufferRenderbuffer(36160,36064+N,36161,j.__webglColorRenderbuffer[N])}t.bindRenderbuffer(36161,null),b.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),Fe(j.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(36160,null)}}if(ce){n.bindTexture(34067,ie.__webglTexture),L(34067,M,Pe);for(let A=0;A<6;A++)se(j.__webglFramebuffer[A],b,M,36064,34069+A);C(M,Pe)&&P(34067),n.unbindTexture()}else if(pe){const A=b.texture;for(let N=0,ve=A.length;N<ve;N++){const Se=A[N],ge=i.get(Se);n.bindTexture(3553,ge.__webglTexture),L(3553,Se,Pe),se(j.__webglFramebuffer,b,Se,36064+N,3553),C(Se,Pe)&&P(3553)}n.unbindTexture()}else{let A=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?A=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(A,ie.__webglTexture),L(A,M,Pe),se(j.__webglFramebuffer,b,M,36064,A),C(M,Pe)&&P(A),n.unbindTexture()}b.depthBuffer&&Ae(b)}function yt(b){const M=S(b)||a,j=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ie=0,ce=j.length;ie<ce;ie++){const pe=j[ie];if(C(pe,M)){const Pe=b.isWebGLCubeRenderTarget?34067:3553,A=i.get(pe).__webglTexture;n.bindTexture(Pe,A),P(Pe),n.unbindTexture()}}}function pn(b){if(a&&b.samples>0&&Ye(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],j=b.width,ie=b.height;let ce=16384;const pe=[],Pe=b.stencilBuffer?33306:36096,A=i.get(b),N=b.isWebGLMultipleRenderTargets===!0;if(N)for(let ve=0;ve<M.length;ve++)n.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ve,36161,null),n.bindFramebuffer(36160,A.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ve,3553,null,0);n.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,A.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){pe.push(36064+ve),b.depthBuffer&&pe.push(Pe);const Se=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(Se===!1&&(b.depthBuffer&&(ce|=256),b.stencilBuffer&&(ce|=1024)),N&&t.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[ve]),Se===!0&&(t.invalidateFramebuffer(36008,[Pe]),t.invalidateFramebuffer(36009,[Pe])),N){const ge=i.get(M[ve]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,ge,0)}t.blitFramebuffer(0,0,j,ie,0,0,j,ie,ce,9728),m&&t.invalidateFramebuffer(36008,pe)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),N)for(let ve=0;ve<M.length;ve++){n.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ve,36161,A.__webglColorRenderbuffer[ve]);const Se=i.get(M[ve]).__webglTexture;n.bindFramebuffer(36160,A.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ve,3553,Se,0)}n.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function gt(b){return Math.min(d,b.samples)}function Ye(b){const M=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Yn(b){const M=o.render.frame;y.get(b)!==M&&(y.set(b,M),b.update())}function En(b,M){const j=b.encoding,ie=b.format,ce=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Qp||j!==js&&(j===rt?a===!1?e.has("EXT_sRGB")===!0&&ie===ri?(b.format=Qp,b.minFilter=ni,b.generateMipmaps=!1):M=$1.sRGBToLinear(M):(ie!==ri||ce!==Ws)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),M}this.allocateTextureUnit=k,this.resetTextureUnits=ee,this.setTexture2D=W,this.setTexture2DArray=oe,this.setTexture3D=z,this.setTextureCube=Z,this.rebindTextures=Dt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Ye}function wL(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===Ws)return 5121;if(s===hA)return 32819;if(s===fA)return 32820;if(s===cA)return 5120;if(s===uA)return 5122;if(s===G1)return 5123;if(s===dA)return 5124;if(s===Cs)return 5125;if(s===As)return 5126;if(s===Fl)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===pA)return 6406;if(s===ri)return 6408;if(s===mA)return 6409;if(s===gA)return 6410;if(s===ks)return 6402;if(s===ha)return 34041;if(s===Qp)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===vA)return 6403;if(s===_A)return 36244;if(s===yA)return 33319;if(s===xA)return 33320;if(s===wA)return 36249;if(s===jh||s===$h||s===qh||s===Xh)if(o===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===jh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$h)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===jh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$h)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===a_||s===l_||s===c_||s===u_)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===a_)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===l_)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===c_)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===u_)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===SA)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===d_||s===h_)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===d_)return o===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===h_)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===f_||s===p_||s===m_||s===g_||s===v_||s===__||s===y_||s===x_||s===w_||s===S_||s===M_||s===E_||s===b_||s===T_)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===f_)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===p_)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===m_)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===g_)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===v_)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===__)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===y_)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===x_)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===w_)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===S_)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===M_)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===E_)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===b_)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===T_)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Kh)return o===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===MA||s===C_||s===A_||s===I_)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Kh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===C_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===A_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===I_)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yo?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class SL extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class or extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ML={type:"move"};class Mf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const f of e.hand.values()){const p=n.getJointPose(f,i),g=this._getHandJoint(c,f);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,y=.005;c.inputState.pinching&&h>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ML)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new or;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class EL extends Ln{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:ks,u!==ks&&u!==ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ks&&(i=Cs),i===void 0&&u===ha&&(i=Yo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1}}class bL extends no{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,y=null;const f=n.getContextAttributes();let p=null,g=null;const v=[],_=[],S=new Set,x=new Map,C=new ii;C.layers.enable(1),C.viewport=new Xt;const P=new ii;P.layers.enable(2),P.viewport=new Xt;const w=[C,P],T=new SL;T.layers.enable(1),T.layers.enable(2);let R=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Z=v[z];return Z===void 0&&(Z=new Mf,v[z]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(z){let Z=v[z];return Z===void 0&&(Z=new Mf,v[z]=Z),Z.getGripSpace()},this.getHand=function(z){let Z=v[z];return Z===void 0&&(Z=new Mf,v[z]=Z),Z.getHandSpace()};function Q(z){const Z=_.indexOf(z.inputSource);if(Z===-1)return;const re=v[Z];re!==void 0&&re.dispatchEvent({type:z.type,data:z.inputSource})}function U(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",O);for(let z=0;z<v.length;z++){const Z=_[z];Z!==null&&(_[z]=null,v[z].disconnect(Z))}R=null,Y=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,g=null,oe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",U),r.addEventListener("inputsourceschange",O),f.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:m}),g=new $s(m.framebufferWidth,m.framebufferHeight,{format:ri,type:Ws,encoding:e.outputEncoding,stencilBuffer:f.stencil})}else{let Z=null,re=null,le=null;f.depth&&(le=f.stencil?35056:33190,Z=f.stencil?ha:ks,re=f.stencil?Yo:Cs);const L={colorFormat:32856,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(L),r.updateRenderState({layers:[h]}),g=new $s(h.textureWidth,h.textureHeight,{format:ri,type:Ws,depthTexture:new EL(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});const we=e.properties.get(g);we.__ignoreDepthValues=h.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function O(z){for(let Z=0;Z<z.removed.length;Z++){const re=z.removed[Z],le=_.indexOf(re);le>=0&&(_[le]=null,v[le].disconnect(re))}for(let Z=0;Z<z.added.length;Z++){const re=z.added[Z];let le=_.indexOf(re);if(le===-1){for(let we=0;we<v.length;we++)if(we>=_.length){_.push(re),le=we;break}else if(_[we]===null){_[we]=re,le=we;break}if(le===-1)break}const L=v[le];L&&L.connect(re)}}const X=new V,J=new V;function ee(z,Z,re){X.setFromMatrixPosition(Z.matrixWorld),J.setFromMatrixPosition(re.matrixWorld);const le=X.distanceTo(J),L=Z.projectionMatrix.elements,we=re.projectionMatrix.elements,me=L[14]/(L[10]-1),ae=L[14]/(L[10]+1),se=(L[9]+1)/L[5],Fe=(L[9]-1)/L[5],ke=(L[8]-1)/L[0],Ae=(we[8]+1)/we[0],Dt=me*ke,Qt=me*Ae,yt=le/(-ke+Ae),pn=yt*-ke;Z.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(pn),z.translateZ(yt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const gt=me+yt,Ye=ae+yt,Yn=Dt-pn,En=Qt+(le-pn),b=se*ae/Ye*gt,M=Fe*ae/Ye*gt;z.projectionMatrix.makePerspective(Yn,En,b,M,gt,Ye)}function k(z,Z){Z===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Z.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;T.near=P.near=C.near=z.near,T.far=P.far=C.far=z.far,(R!==T.near||Y!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,Y=T.far);const Z=z.parent,re=T.cameras;k(T,Z);for(let L=0;L<re.length;L++)k(re[L],Z);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),z.matrix.copy(T.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const le=z.children;for(let L=0,we=le.length;L<we;L++)le[L].updateMatrixWorld(!0);re.length===2?ee(T,C,P):T.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.getPlanes=function(){return S};let H=null;function W(z,Z){if(u=Z.getViewerPose(c||o),y=Z,u!==null){const re=u.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let le=!1;re.length!==T.cameras.length&&(T.cameras.length=0,le=!0);for(let L=0;L<re.length;L++){const we=re[L];let me=null;if(m!==null)me=m.getViewport(we);else{const se=d.getViewSubImage(h,we);me=se.viewport,L===0&&(e.setRenderTargetTextures(g,se.colorTexture,h.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(g))}let ae=w[L];ae===void 0&&(ae=new ii,ae.layers.enable(L),ae.viewport=new Xt,w[L]=ae),ae.matrix.fromArray(we.transform.matrix),ae.projectionMatrix.fromArray(we.projectionMatrix),ae.viewport.set(me.x,me.y,me.width,me.height),L===0&&T.matrix.copy(ae.matrix),le===!0&&T.cameras.push(ae)}}for(let re=0;re<v.length;re++){const le=_[re],L=v[re];le!==null&&L!==void 0&&L.update(le,Z,c||o)}if(H&&H(z,Z),Z.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let re=null;for(const le of S)Z.detectedPlanes.has(le)||(re===null&&(re=[]),re.push(le));if(re!==null)for(const le of re)S.delete(le),x.delete(le),i.dispatchEvent({type:"planeremoved",data:le});for(const le of Z.detectedPlanes)if(!S.has(le))S.add(le),x.set(le,Z.lastChangedTime),i.dispatchEvent({type:"planeadded",data:le});else{const L=x.get(le);le.lastChangedTime>L&&(x.set(le,le.lastChangedTime),i.dispatchEvent({type:"planechanged",data:le}))}}y=null}const oe=new nS;oe.setAnimationLoop(W),this.setAnimationLoop=function(z){H=z},this.dispose=function(){}}}function TL(t,e){function n(f,p){p.color.getRGB(f.fogColor.value,J1(t)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,g,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),u(f,p)):p.isMeshPhongMaterial?(r(f,p),c(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&h(f,p,_)):p.isMeshMatcapMaterial?(r(f,p),m(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),y(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?a(f,p,g,v):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===Wn&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===Wn&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(f.envMap.value=g,f.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const S=t.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uv2Transform.value.copy(_.matrix))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function a(f,p,g,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*g,f.scale.value=v*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),f.uvTransform.value.copy(g.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function h(f,p,g){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Wn&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function y(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function CL(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,_){const S=_.program;i.uniformBlockBinding(v,S)}function c(v,_){let S=r[v.id];S===void 0&&(y(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",p));const x=_.program;i.updateUBOMapping(v,x);const C=e.render.frame;s[v.id]!==C&&(h(v),s[v.id]=C)}function u(v){const _=d();v.__bindingPointIndex=_;const S=t.createBuffer(),x=v.__size,C=v.usage;return t.bindBuffer(35345,S),t.bufferData(35345,x,C),t.bindBuffer(35345,null),t.bindBufferBase(35345,_,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],S=v.uniforms,x=v.__cache;t.bindBuffer(35345,_);for(let C=0,P=S.length;C<P;C++){const w=S[C];if(m(w,C,x)===!0){const T=w.__offset,R=Array.isArray(w.value)?w.value:[w.value];let Y=0;for(let Q=0;Q<R.length;Q++){const U=R[Q],O=f(U);typeof U=="number"?(w.__data[0]=U,t.bufferSubData(35345,T+Y,w.__data)):U.isMatrix3?(w.__data[0]=U.elements[0],w.__data[1]=U.elements[1],w.__data[2]=U.elements[2],w.__data[3]=U.elements[0],w.__data[4]=U.elements[3],w.__data[5]=U.elements[4],w.__data[6]=U.elements[5],w.__data[7]=U.elements[0],w.__data[8]=U.elements[6],w.__data[9]=U.elements[7],w.__data[10]=U.elements[8],w.__data[11]=U.elements[0]):(U.toArray(w.__data,Y),Y+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,T,w.__data)}}t.bindBuffer(35345,null)}function m(v,_,S){const x=v.value;if(S[_]===void 0){if(typeof x=="number")S[_]=x;else{const C=Array.isArray(x)?x:[x],P=[];for(let w=0;w<C.length;w++)P.push(C[w].clone());S[_]=P}return!0}else if(typeof x=="number"){if(S[_]!==x)return S[_]=x,!0}else{const C=Array.isArray(S[_])?S[_]:[S[_]],P=Array.isArray(x)?x:[x];for(let w=0;w<C.length;w++){const T=C[w];if(T.equals(P[w])===!1)return T.copy(P[w]),!0}}return!1}function y(v){const _=v.uniforms;let S=0;const x=16;let C=0;for(let P=0,w=_.length;P<w;P++){const T=_[P],R={boundary:0,storage:0},Y=Array.isArray(T.value)?T.value:[T.value];for(let Q=0,U=Y.length;Q<U;Q++){const O=Y[Q],X=f(O);R.boundary+=X.boundary,R.storage+=X.storage}if(T.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=S,P>0){C=S%x;const Q=x-C;C!==0&&Q-R.boundary<0&&(S+=x-C,T.__offset=S)}S+=R.storage}return C=S%x,C>0&&(S+=x-C),v.__size=S,v.__cache={},this}function f(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){const _=v.target;_.removeEventListener("dispose",p);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function g(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}function AL(){const t=zl("canvas");return t.style.display="block",t}function aS(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:AL(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",c=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let u;n!==null?u=n.getContextAttributes().alpha:u=t.alpha!==void 0?t.alpha:!1;let d=null,h=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=js,this.physicallyCorrectLights=!1,this.toneMapping=dr,this.toneMappingExposure=1;const f=this;let p=!1,g=0,v=0,_=null,S=-1,x=null;const C=new Xt,P=new Xt;let w=null,T=e.width,R=e.height,Y=1,Q=null,U=null;const O=new Xt(0,0,T,R),X=new Xt(0,0,T,R);let J=!1;const ee=new tS;let k=!1,H=!1,W=null;const oe=new Yt,z=new ze,Z=new V,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return _===null?Y:1}let L=n;function we(E,B){for(let q=0;q<E.length;q++){const F=E[q],K=e.getContext(F,B);if(K!==null)return K}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pg}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Ve,!1),L===null){const B=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&B.shift(),L=we(B,E),L===null)throw we(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let me,ae,se,Fe,ke,Ae,Dt,Qt,yt,pn,gt,Ye,Yn,En,b,M,j,ie,ce,pe,Pe,A,N,ve;function Se(){me=new zP(L),ae=new LP(L,me,t),me.init(ae),A=new wL(L,me,ae),se=new yL(L,me,ae),Fe=new HP,ke=new sL,Ae=new xL(L,me,se,ke,ae,A,Fe),Dt=new kP(f),Qt=new UP(f),yt=new YA(L,ae),N=new PP(L,me,yt,ae),pn=new BP(L,yt,Fe,N),gt=new $P(L,pn,yt,Fe),ce=new jP(L,ae,Ae),M=new DP(ke),Ye=new rL(f,Dt,Qt,me,ae,N,M),Yn=new TL(f,ke),En=new aL,b=new fL(me,ae),ie=new IP(f,Dt,Qt,se,gt,u,o),j=new _L(f,gt,ae),ve=new CL(L,Fe,ae,se),pe=new RP(L,me,Fe,ae),Pe=new VP(L,me,Fe,ae),Fe.programs=Ye.programs,f.capabilities=ae,f.extensions=me,f.properties=ke,f.renderLists=En,f.shadowMap=j,f.state=se,f.info=Fe}Se();const ge=new bL(f,L);this.xr=ge,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=me.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=me.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(T,R,!1))},this.getSize=function(E){return E.set(T,R)},this.setSize=function(E,B,q){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,R=B,e.width=Math.floor(E*Y),e.height=Math.floor(B*Y),q!==!1&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(T*Y,R*Y).floor()},this.setDrawingBufferSize=function(E,B,q){T=E,R=B,Y=q,e.width=Math.floor(E*q),e.height=Math.floor(B*q),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(O)},this.setViewport=function(E,B,q,F){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,B,q,F),se.viewport(C.copy(O).multiplyScalar(Y).floor())},this.getScissor=function(E){return E.copy(X)},this.setScissor=function(E,B,q,F){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,B,q,F),se.scissor(P.copy(X).multiplyScalar(Y).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(E){se.setScissorTest(J=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){U=E},this.getClearColor=function(E){return E.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(E=!0,B=!0,q=!0){let F=0;E&&(F|=16384),B&&(F|=256),q&&(F|=1024),L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Ve,!1),En.dispose(),b.dispose(),ke.dispose(),Dt.dispose(),Qt.dispose(),gt.dispose(),N.dispose(),ve.dispose(),Ye.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",ye),ge.removeEventListener("sessionend",Te),W&&(W.dispose(),W=null),Ze.stop()};function be(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Fe.autoReset,B=j.enabled,q=j.autoUpdate,F=j.needsUpdate,K=j.type;Se(),Fe.autoReset=E,j.enabled=B,j.autoUpdate=q,j.needsUpdate=F,j.type=K}function Ve(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function He(E){const B=E.target;B.removeEventListener("dispose",He),tt(B)}function tt(E){D(E),ke.remove(E)}function D(E){const B=ke.get(E).programs;B!==void 0&&(B.forEach(function(q){Ye.releaseProgram(q)}),E.isShaderMaterial&&Ye.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,q,F,K,Ce){B===null&&(B=re);const De=K.isMesh&&K.matrixWorld.determinant()<0,Oe=YE(E,B,q,F,K);se.setMaterial(F,De);let Ue=q.index,Ke=1;F.wireframe===!0&&(Ue=pn.getWireframeAttribute(q),Ke=2);const Ge=q.drawRange,We=q.attributes.position;let xt=Ge.start*Ke,kn=(Ge.start+Ge.count)*Ke;Ce!==null&&(xt=Math.max(xt,Ce.start*Ke),kn=Math.min(kn,(Ce.start+Ce.count)*Ke)),Ue!==null?(xt=Math.max(xt,0),kn=Math.min(kn,Ue.count)):We!=null&&(xt=Math.max(xt,0),kn=Math.min(kn,We.count));const qi=kn-xt;if(qi<0||qi===1/0)return;N.setup(K,F,Oe,q,Ue);let cs,wt=pe;if(Ue!==null&&(cs=yt.get(Ue),wt=Pe,wt.setIndex(cs)),K.isMesh)F.wireframe===!0?(se.setLineWidth(F.wireframeLinewidth*le()),wt.setMode(1)):wt.setMode(4);else if(K.isLine){let je=F.linewidth;je===void 0&&(je=1),se.setLineWidth(je*le()),K.isLineSegments?wt.setMode(1):K.isLineLoop?wt.setMode(2):wt.setMode(3)}else K.isPoints?wt.setMode(0):K.isSprite&&wt.setMode(4);if(K.isInstancedMesh)wt.renderInstances(xt,qi,K.count);else if(q.isInstancedBufferGeometry){const je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,hh=Math.min(q.instanceCount,je);wt.renderInstances(xt,qi,hh)}else wt.render(xt,qi)},this.compile=function(E,B){function q(F,K,Ce){F.transparent===!0&&F.side===$t&&F.forceSinglePass===!1?(F.side=Wn,F.needsUpdate=!0,Zn(F,K,Ce),F.side=es,F.needsUpdate=!0,Zn(F,K,Ce),F.side=$t):Zn(F,K,Ce)}h=b.get(E),h.init(),y.push(h),E.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights(f.physicallyCorrectLights),E.traverse(function(F){const K=F.material;if(K)if(Array.isArray(K))for(let Ce=0;Ce<K.length;Ce++){const De=K[Ce];q(De,E,F)}else q(K,E,F)}),y.pop(),h=null};let $=null;function ne(E){$&&$(E)}function ye(){Ze.stop()}function Te(){Ze.start()}const Ze=new nS;Ze.setAnimationLoop(ne),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(E){$=E,ge.setAnimationLoop(E),E===null?Ze.stop():Ze.start()},ge.addEventListener("sessionstart",ye),ge.addEventListener("sessionend",Te),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(B),B=ge.getCamera()),E.isScene===!0&&E.onBeforeRender(f,E,B,_),h=b.get(E,y.length),h.init(),y.push(h),oe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ee.setFromProjectionMatrix(oe),H=this.localClippingEnabled,k=M.init(this.clippingPlanes,H),d=En.get(E,m.length),d.init(),m.push(d),kt(E,B,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(Q,U),k===!0&&M.beginShadows();const q=h.state.shadowsArray;if(j.render(q,E,B),k===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(d,E),h.setupLights(f.physicallyCorrectLights),B.isArrayCamera){const F=B.cameras;for(let K=0,Ce=F.length;K<Ce;K++){const De=F[K];en(d,E,De,De.viewport)}}else en(d,E,B);_!==null&&(Ae.updateMultisampleRenderTarget(_),Ae.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(f,E,B),N.resetDefaultState(),S=-1,x=null,y.pop(),y.length>0?h=y[y.length-1]:h=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function kt(E,B,q,F){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ee.intersectsSprite(E)){F&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(oe);const De=gt.update(E),Oe=E.material;Oe.visible&&d.push(E,De,Oe,q,Z.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Fe.render.frame&&(E.skeleton.update(),E.skeleton.frame=Fe.render.frame),!E.frustumCulled||ee.intersectsObject(E))){F&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(oe);const De=gt.update(E),Oe=E.material;if(Array.isArray(Oe)){const Ue=De.groups;for(let Ke=0,Ge=Ue.length;Ke<Ge;Ke++){const We=Ue[Ke],xt=Oe[We.materialIndex];xt&&xt.visible&&d.push(E,De,xt,q,Z.z,We)}}else Oe.visible&&d.push(E,De,Oe,q,Z.z,null)}}const Ce=E.children;for(let De=0,Oe=Ce.length;De<Oe;De++)kt(Ce[De],B,q,F)}function en(E,B,q,F){const K=E.opaque,Ce=E.transmissive,De=E.transparent;h.setupLightsView(q),k===!0&&M.setGlobalState(f.clippingPlanes,q),Ce.length>0&&ls(K,B,q),F&&se.viewport(C.copy(F)),K.length>0&&ct(K,B,q),Ce.length>0&&ct(Ce,B,q),De.length>0&&ct(De,B,q),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function ls(E,B,q){const F=ae.isWebGL2;W===null&&(W=new $s(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Fl:Ws,minFilter:Ol,samples:F&&s===!0?4:0})),f.getDrawingBufferSize(z),F?W.setSize(z.x,z.y):W.setSize(em(z.x),em(z.y));const K=f.getRenderTarget();f.setRenderTarget(W),f.clear();const Ce=f.toneMapping;f.toneMapping=dr,ct(E,B,q),f.toneMapping=Ce,Ae.updateMultisampleRenderTarget(W),Ae.updateRenderTargetMipmap(W),f.setRenderTarget(K)}function ct(E,B,q){const F=B.isScene===!0?B.overrideMaterial:null;for(let K=0,Ce=E.length;K<Ce;K++){const De=E[K],Oe=De.object,Ue=De.geometry,Ke=F===null?De.material:F,Ge=De.group;Oe.layers.test(q.layers)&&$i(Oe,B,q,Ue,Ke,Ge)}}function $i(E,B,q,F,K,Ce){E.onBeforeRender(f,B,q,F,K,Ce),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(f,B,q,F,E,Ce),K.transparent===!0&&K.side===$t&&K.forceSinglePass===!1?(K.side=Wn,K.needsUpdate=!0,f.renderBufferDirect(q,B,F,K,E,Ce),K.side=es,K.needsUpdate=!0,f.renderBufferDirect(q,B,F,K,E,Ce),K.side=$t):f.renderBufferDirect(q,B,F,K,E,Ce),E.onAfterRender(f,B,q,F,K,Ce)}function Zn(E,B,q){B.isScene!==!0&&(B=re);const F=ke.get(E),K=h.state.lights,Ce=h.state.shadowsArray,De=K.state.version,Oe=Ye.getParameters(E,K.state,Ce,B,q),Ue=Ye.getProgramCacheKey(Oe);let Ke=F.programs;F.environment=E.isMeshStandardMaterial?B.environment:null,F.fog=B.fog,F.envMap=(E.isMeshStandardMaterial?Qt:Dt).get(E.envMap||F.environment),Ke===void 0&&(E.addEventListener("dispose",He),Ke=new Map,F.programs=Ke);let Ge=Ke.get(Ue);if(Ge!==void 0){if(F.currentProgram===Ge&&F.lightsStateVersion===De)return L0(E,Oe),Ge}else Oe.uniforms=Ye.getUniforms(E),E.onBuild(q,Oe,f),E.onBeforeCompile(Oe,f),Ge=Ye.acquireProgram(Oe,Ue),Ke.set(Ue,Ge),F.uniforms=Oe.uniforms;const We=F.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=M.uniform),L0(E,Oe),F.needsLights=JE(E),F.lightsStateVersion=De,F.needsLights&&(We.ambientLightColor.value=K.state.ambient,We.lightProbe.value=K.state.probe,We.directionalLights.value=K.state.directional,We.directionalLightShadows.value=K.state.directionalShadow,We.spotLights.value=K.state.spot,We.spotLightShadows.value=K.state.spotShadow,We.rectAreaLights.value=K.state.rectArea,We.ltc_1.value=K.state.rectAreaLTC1,We.ltc_2.value=K.state.rectAreaLTC2,We.pointLights.value=K.state.point,We.pointLightShadows.value=K.state.pointShadow,We.hemisphereLights.value=K.state.hemi,We.directionalShadowMap.value=K.state.directionalShadowMap,We.directionalShadowMatrix.value=K.state.directionalShadowMatrix,We.spotShadowMap.value=K.state.spotShadowMap,We.spotLightMatrix.value=K.state.spotLightMatrix,We.spotLightMap.value=K.state.spotLightMap,We.pointShadowMap.value=K.state.pointShadowMap,We.pointShadowMatrix.value=K.state.pointShadowMatrix);const xt=Ge.getUniforms(),kn=Tu.seqWithValue(xt.seq,We);return F.currentProgram=Ge,F.uniformsList=kn,Ge}function L0(E,B){const q=ke.get(E);q.outputEncoding=B.outputEncoding,q.instancing=B.instancing,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function YE(E,B,q,F,K){B.isScene!==!0&&(B=re),Ae.resetTextureUnits();const Ce=B.fog,De=F.isMeshStandardMaterial?B.environment:null,Oe=_===null?f.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:js,Ue=(F.isMeshStandardMaterial?Qt:Dt).get(F.envMap||De),Ke=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!F.normalMap&&!!q.attributes.tangent,We=!!q.morphAttributes.position,xt=!!q.morphAttributes.normal,kn=!!q.morphAttributes.color,qi=F.toneMapped?f.toneMapping:dr,cs=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,wt=cs!==void 0?cs.length:0,je=ke.get(F),hh=h.state.lights;if(k===!0&&(H===!0||E!==x)){const Nn=E===x&&F.id===S;M.setState(F,E,Nn)}let Nt=!1;F.version===je.__version?(je.needsLights&&je.lightsStateVersion!==hh.state.version||je.outputEncoding!==Oe||K.isInstancedMesh&&je.instancing===!1||!K.isInstancedMesh&&je.instancing===!0||K.isSkinnedMesh&&je.skinning===!1||!K.isSkinnedMesh&&je.skinning===!0||je.envMap!==Ue||F.fog===!0&&je.fog!==Ce||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==M.numPlanes||je.numIntersection!==M.numIntersection)||je.vertexAlphas!==Ke||je.vertexTangents!==Ge||je.morphTargets!==We||je.morphNormals!==xt||je.morphColors!==kn||je.toneMapping!==qi||ae.isWebGL2===!0&&je.morphTargetsCount!==wt)&&(Nt=!0):(Nt=!0,je.__version=F.version);let us=je.currentProgram;Nt===!0&&(us=Zn(F,B,K));let D0=!1,Pa=!1,fh=!1;const mn=us.getUniforms(),ds=je.uniforms;if(se.useProgram(us.program)&&(D0=!0,Pa=!0,fh=!0),F.id!==S&&(S=F.id,Pa=!0),D0||x!==E){if(mn.setValue(L,"projectionMatrix",E.projectionMatrix),ae.logarithmicDepthBuffer&&mn.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),x!==E&&(x=E,Pa=!0,fh=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Nn=mn.map.cameraPosition;Nn!==void 0&&Nn.setValue(L,Z.setFromMatrixPosition(E.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&mn.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||K.isSkinnedMesh)&&mn.setValue(L,"viewMatrix",E.matrixWorldInverse)}if(K.isSkinnedMesh){mn.setOptional(L,K,"bindMatrix"),mn.setOptional(L,K,"bindMatrixInverse");const Nn=K.skeleton;Nn&&(ae.floatVertexTextures?(Nn.boneTexture===null&&Nn.computeBoneTexture(),mn.setValue(L,"boneTexture",Nn.boneTexture,Ae),mn.setValue(L,"boneTextureSize",Nn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ph=q.morphAttributes;if((ph.position!==void 0||ph.normal!==void 0||ph.color!==void 0&&ae.isWebGL2===!0)&&ce.update(K,q,F,us),(Pa||je.receiveShadow!==K.receiveShadow)&&(je.receiveShadow=K.receiveShadow,mn.setValue(L,"receiveShadow",K.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ds.envMap.value=Ue,ds.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Pa&&(mn.setValue(L,"toneMappingExposure",f.toneMappingExposure),je.needsLights&&ZE(ds,fh),Ce&&F.fog===!0&&Yn.refreshFogUniforms(ds,Ce),Yn.refreshMaterialUniforms(ds,F,Y,R,W),Tu.upload(L,je.uniformsList,ds,Ae)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Tu.upload(L,je.uniformsList,ds,Ae),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&mn.setValue(L,"center",K.center),mn.setValue(L,"modelViewMatrix",K.modelViewMatrix),mn.setValue(L,"normalMatrix",K.normalMatrix),mn.setValue(L,"modelMatrix",K.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Nn=F.uniformsGroups;for(let mh=0,QE=Nn.length;mh<QE;mh++)if(ae.isWebGL2){const k0=Nn[mh];ve.update(k0,us),ve.bind(k0,us)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return us}function ZE(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function JE(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,B,q){ke.get(E.texture).__webglTexture=B,ke.get(E.depthTexture).__webglTexture=q;const F=ke.get(E);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){const q=ke.get(E);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,q=0){_=E,g=B,v=q;let F=!0,K=null,Ce=!1,De=!1;if(E){const Ue=ke.get(E);Ue.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(36160,null),F=!1):Ue.__webglFramebuffer===void 0?Ae.setupRenderTarget(E):Ue.__hasExternalTextures&&Ae.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);const Ke=E.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(De=!0);const Ge=ke.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(K=Ge[B],Ce=!0):ae.isWebGL2&&E.samples>0&&Ae.useMultisampledRTT(E)===!1?K=ke.get(E).__webglMultisampledFramebuffer:K=Ge,C.copy(E.viewport),P.copy(E.scissor),w=E.scissorTest}else C.copy(O).multiplyScalar(Y).floor(),P.copy(X).multiplyScalar(Y).floor(),w=J;if(se.bindFramebuffer(36160,K)&&ae.drawBuffers&&F&&se.drawBuffers(E,K),se.viewport(C),se.scissor(P),se.setScissorTest(w),Ce){const Ue=ke.get(E.texture);L.framebufferTexture2D(36160,36064,34069+B,Ue.__webglTexture,q)}else if(De){const Ue=ke.get(E.texture),Ke=B||0;L.framebufferTextureLayer(36160,36064,Ue.__webglTexture,q||0,Ke)}S=-1},this.readRenderTargetPixels=function(E,B,q,F,K,Ce,De){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){se.bindFramebuffer(36160,Oe);try{const Ue=E.texture,Ke=Ue.format,Ge=Ue.type;if(Ke!==ri&&A.convert(Ke)!==L.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ge===Fl&&(me.has("EXT_color_buffer_half_float")||ae.isWebGL2&&me.has("EXT_color_buffer_float"));if(Ge!==Ws&&A.convert(Ge)!==L.getParameter(35738)&&!(Ge===As&&(ae.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-F&&q>=0&&q<=E.height-K&&L.readPixels(B,q,F,K,A.convert(Ke),A.convert(Ge),Ce)}finally{const Ue=_!==null?ke.get(_).__webglFramebuffer:null;se.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(E,B,q=0){const F=Math.pow(2,-q),K=Math.floor(B.image.width*F),Ce=Math.floor(B.image.height*F);Ae.setTexture2D(B,0),L.copyTexSubImage2D(3553,q,0,0,E.x,E.y,K,Ce),se.unbindTexture()},this.copyTextureToTexture=function(E,B,q,F=0){const K=B.image.width,Ce=B.image.height,De=A.convert(q.format),Oe=A.convert(q.type);Ae.setTexture2D(q,0),L.pixelStorei(37440,q.flipY),L.pixelStorei(37441,q.premultiplyAlpha),L.pixelStorei(3317,q.unpackAlignment),B.isDataTexture?L.texSubImage2D(3553,F,E.x,E.y,K,Ce,De,Oe,B.image.data):B.isCompressedTexture?L.compressedTexSubImage2D(3553,F,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,De,B.mipmaps[0].data):L.texSubImage2D(3553,F,E.x,E.y,De,Oe,B.image),F===0&&q.generateMipmaps&&L.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(E,B,q,F,K=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=E.max.x-E.min.x+1,De=E.max.y-E.min.y+1,Oe=E.max.z-E.min.z+1,Ue=A.convert(F.format),Ke=A.convert(F.type);let Ge;if(F.isData3DTexture)Ae.setTexture3D(F,0),Ge=32879;else if(F.isDataArrayTexture)Ae.setTexture2DArray(F,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(37440,F.flipY),L.pixelStorei(37441,F.premultiplyAlpha),L.pixelStorei(3317,F.unpackAlignment);const We=L.getParameter(3314),xt=L.getParameter(32878),kn=L.getParameter(3316),qi=L.getParameter(3315),cs=L.getParameter(32877),wt=q.isCompressedTexture?q.mipmaps[0]:q.image;L.pixelStorei(3314,wt.width),L.pixelStorei(32878,wt.height),L.pixelStorei(3316,E.min.x),L.pixelStorei(3315,E.min.y),L.pixelStorei(32877,E.min.z),q.isDataTexture||q.isData3DTexture?L.texSubImage3D(Ge,K,B.x,B.y,B.z,Ce,De,Oe,Ue,Ke,wt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ge,K,B.x,B.y,B.z,Ce,De,Oe,Ue,wt.data)):L.texSubImage3D(Ge,K,B.x,B.y,B.z,Ce,De,Oe,Ue,Ke,wt),L.pixelStorei(3314,We),L.pixelStorei(32878,xt),L.pixelStorei(3316,kn),L.pixelStorei(3315,qi),L.pixelStorei(32877,cs),K===0&&F.generateMipmaps&&L.generateMipmap(Ge),se.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ae.setTextureCube(E,0):E.isData3DTexture?Ae.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ae.setTexture2DArray(E,0):Ae.setTexture2D(E,0),se.unbindTexture()},this.resetState=function(){g=0,v=0,_=null,se.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class IL extends aS{}IL.prototype.isWebGL1Renderer=!0;let PL=class extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};const hy={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class RL{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],y=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return y}return null}}}const LL=new RL;class lS{constructor(e){this.manager=e!==void 0?e:LL,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class DL extends lS{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=hy.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=zl("img");function l(){u(),hy.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class kL extends lS{constructor(e){super(e)}load(e,n,i,r){const s=new Ln,o=new DL(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class NL{constructor(e,n,i=0,r=1/0){this.ray=new K1(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Lg,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return nm(e,this,i,n),i.sort(fy),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)nm(e[r],this,i,n);return i.sort(fy),i}}function fy(t,e){return t.distance-e.distance}function nm(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)nm(r[s],e,n,!0)}}class im{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Cn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pg);const py={type:"change"},Ef={type:"start"},my={type:"end"};class OL extends no{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.touches={ONE:lo.ROTATE,TWO:lo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",En),this._domElementKeyEvents=A},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(py),i.update(),s=r.NONE},this.update=function(){const A=new V,N=new qs().setFromUnitVectors(e.up,new V(0,1,0)),ve=N.clone().invert(),Se=new V,ge=new qs,be=2*Math.PI;return function(){const Ve=i.object.position;A.copy(Ve).sub(i.target),A.applyQuaternion(N),a.setFromVector3(A),i.autoRotate&&s===r.NONE&&T(P()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let He=i.minAzimuthAngle,tt=i.maxAzimuthAngle;return isFinite(He)&&isFinite(tt)&&(He<-Math.PI?He+=be:He>Math.PI&&(He-=be),tt<-Math.PI?tt+=be:tt>Math.PI&&(tt-=be),He<=tt?a.theta=Math.max(He,Math.min(tt,a.theta)):a.theta=a.theta>(He+tt)/2?Math.max(He,a.theta):Math.min(tt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),A.setFromSpherical(a),A.applyQuaternion(ve),Ve.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||Se.distanceToSquared(i.object.position)>o||8*(1-ge.dot(i.object.quaternion))>o?(i.dispatchEvent(py),Se.copy(i.object.position),ge.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",j),i.domElement.removeEventListener("pointerdown",Dt),i.domElement.removeEventListener("pointercancel",pn),i.domElement.removeEventListener("wheel",Yn),i.domElement.removeEventListener("pointermove",Qt),i.domElement.removeEventListener("pointerup",yt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",En)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new im,l=new im;let c=1;const u=new V;let d=!1;const h=new ze,m=new ze,y=new ze,f=new ze,p=new ze,g=new ze,v=new ze,_=new ze,S=new ze,x=[],C={};function P(){return 2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function T(A){l.theta-=A}function R(A){l.phi-=A}const Y=function(){const A=new V;return function(ve,Se){A.setFromMatrixColumn(Se,0),A.multiplyScalar(-ve),u.add(A)}}(),Q=function(){const A=new V;return function(ve,Se){i.screenSpacePanning===!0?A.setFromMatrixColumn(Se,1):(A.setFromMatrixColumn(Se,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(ve),u.add(A)}}(),U=function(){const A=new V;return function(ve,Se){const ge=i.domElement;if(i.object.isPerspectiveCamera){const be=i.object.position;A.copy(be).sub(i.target);let Me=A.length();Me*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*ve*Me/ge.clientHeight,i.object.matrix),Q(2*Se*Me/ge.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(ve*(i.object.right-i.object.left)/i.object.zoom/ge.clientWidth,i.object.matrix),Q(Se*(i.object.top-i.object.bottom)/i.object.zoom/ge.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function O(A){i.object.isPerspectiveCamera?c/=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*A)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(A){i.object.isPerspectiveCamera?c*=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/A)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(A){h.set(A.clientX,A.clientY)}function ee(A){v.set(A.clientX,A.clientY)}function k(A){f.set(A.clientX,A.clientY)}function H(A){m.set(A.clientX,A.clientY),y.subVectors(m,h).multiplyScalar(i.rotateSpeed);const N=i.domElement;T(2*Math.PI*y.x/N.clientHeight),R(2*Math.PI*y.y/N.clientHeight),h.copy(m),i.update()}function W(A){_.set(A.clientX,A.clientY),S.subVectors(_,v),S.y>0?O(w()):S.y<0&&X(w()),v.copy(_),i.update()}function oe(A){p.set(A.clientX,A.clientY),g.subVectors(p,f).multiplyScalar(i.panSpeed),U(g.x,g.y),f.copy(p),i.update()}function z(A){A.deltaY<0?X(w()):A.deltaY>0&&O(w()),i.update()}function Z(A){let N=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),N=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),N=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),N=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),N=!0;break}N&&(A.preventDefault(),i.update())}function re(){if(x.length===1)h.set(x[0].pageX,x[0].pageY);else{const A=.5*(x[0].pageX+x[1].pageX),N=.5*(x[0].pageY+x[1].pageY);h.set(A,N)}}function le(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const A=.5*(x[0].pageX+x[1].pageX),N=.5*(x[0].pageY+x[1].pageY);f.set(A,N)}}function L(){const A=x[0].pageX-x[1].pageX,N=x[0].pageY-x[1].pageY,ve=Math.sqrt(A*A+N*N);v.set(0,ve)}function we(){i.enableZoom&&L(),i.enablePan&&le()}function me(){i.enableZoom&&L(),i.enableRotate&&re()}function ae(A){if(x.length==1)m.set(A.pageX,A.pageY);else{const ve=Pe(A),Se=.5*(A.pageX+ve.x),ge=.5*(A.pageY+ve.y);m.set(Se,ge)}y.subVectors(m,h).multiplyScalar(i.rotateSpeed);const N=i.domElement;T(2*Math.PI*y.x/N.clientHeight),R(2*Math.PI*y.y/N.clientHeight),h.copy(m)}function se(A){if(x.length===1)p.set(A.pageX,A.pageY);else{const N=Pe(A),ve=.5*(A.pageX+N.x),Se=.5*(A.pageY+N.y);p.set(ve,Se)}g.subVectors(p,f).multiplyScalar(i.panSpeed),U(g.x,g.y),f.copy(p)}function Fe(A){const N=Pe(A),ve=A.pageX-N.x,Se=A.pageY-N.y,ge=Math.sqrt(ve*ve+Se*Se);_.set(0,ge),S.set(0,Math.pow(_.y/v.y,i.zoomSpeed)),O(S.y),v.copy(_)}function ke(A){i.enableZoom&&Fe(A),i.enablePan&&se(A)}function Ae(A){i.enableZoom&&Fe(A),i.enableRotate&&ae(A)}function Dt(A){i.enabled!==!1&&(x.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",Qt),i.domElement.addEventListener("pointerup",yt)),ie(A),A.pointerType==="touch"?b(A):gt(A))}function Qt(A){i.enabled!==!1&&(A.pointerType==="touch"?M(A):Ye(A))}function yt(A){ce(A),x.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",Qt),i.domElement.removeEventListener("pointerup",yt)),i.dispatchEvent(my),s=r.NONE}function pn(A){ce(A)}function gt(A){let N;switch(A.button){case 0:N=i.mouseButtons.LEFT;break;case 1:N=i.mouseButtons.MIDDLE;break;case 2:N=i.mouseButtons.RIGHT;break;default:N=-1}switch(N){case ao.DOLLY:if(i.enableZoom===!1)return;ee(A),s=r.DOLLY;break;case ao.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;k(A),s=r.PAN}else{if(i.enableRotate===!1)return;J(A),s=r.ROTATE}break;case ao.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;J(A),s=r.ROTATE}else{if(i.enablePan===!1)return;k(A),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ef)}function Ye(A){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;H(A);break;case r.DOLLY:if(i.enableZoom===!1)return;W(A);break;case r.PAN:if(i.enablePan===!1)return;oe(A);break}}function Yn(A){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(A.preventDefault(),i.dispatchEvent(Ef),z(A),i.dispatchEvent(my))}function En(A){i.enabled===!1||i.enablePan===!1||Z(A)}function b(A){switch(pe(A),x.length){case 1:switch(i.touches.ONE){case lo.ROTATE:if(i.enableRotate===!1)return;re(),s=r.TOUCH_ROTATE;break;case lo.PAN:if(i.enablePan===!1)return;le(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case lo.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;we(),s=r.TOUCH_DOLLY_PAN;break;case lo.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;me(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ef)}function M(A){switch(pe(A),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ae(A),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;se(A),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ke(A),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ae(A),i.update();break;default:s=r.NONE}}function j(A){i.enabled!==!1&&A.preventDefault()}function ie(A){x.push(A)}function ce(A){delete C[A.pointerId];for(let N=0;N<x.length;N++)if(x[N].pointerId==A.pointerId){x.splice(N,1);return}}function pe(A){let N=C[A.pointerId];N===void 0&&(N=new ze,C[A.pointerId]=N),N.set(A.pageX,A.pageY)}function Pe(A){const N=A.pointerId===x[0].pointerId?x[1]:x[0];return C[N.pointerId]}i.domElement.addEventListener("contextmenu",j),i.domElement.addEventListener("pointerdown",Dt),i.domElement.addEventListener("pointercancel",pn),i.domElement.addEventListener("wheel",Yn,{passive:!1}),this.update()}}class FL extends st{constructor(e=1,n=16,i=new ot("#727272"),r=2e3){const s=new ns(2,2,1,1),o=new ts({side:$t,uniforms:{uSize1:{value:e},uSize2:{value:n},uColor:{value:i},uDistance:{value:r}},transparent:!0,alphaTest:.5,vertexShader:`
            
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
            
            `,extensions:{derivatives:!0}});super(s,o),this.frustumCulled=!1}}let cn,zt,bn,qt,Ms;function cS(){uS(),cn=new PL,cn.background=new ot("#C6C6C6"),zt=new ii(60,(window.innerWidth-300)/window.innerHeight,.1,1e3),zt.position.set(0,3,8),zt.rotation.order="YXZ",bn=new aS({antialias:!0}),bn.setSize(window.innerWidth-300,window.innerHeight),bn.setPixelRatio((window.innerWidth-300)/window.innerHeight),bn.toneMappingExposure=1,bn.shadowMap.enabled=!0,bn.shadowMap.type=U1,document.body.appendChild(bn.domElement);const t=new FL;t.position.set(8.5,-.5,8.5),cn.add(t);const e=new st(new Ut(1e5,1e5,1e-5),new mt({color:16776960,visible:!1}));e.rotation.set(Math.PI/2,0,0),e.position.set(0,-.5,0),e.name="helpPlane",cn.add(e),BL([]),UL(!0),dS("debug.png"),Cu=!0,hr(),window.addEventListener("resize",n),document.oncontextmenu=document.body.oncontextmenu=function(){return!1},window.addEventListener("beforeunload",function(i){return i.stopPropagation(),i.preventDefault(),!1},!0);function n(){zt&&bn&&(bn.setSize(window.innerWidth-300,window.innerHeight),bn.setPixelRatio((window.innerWidth-300)/window.innerHeight),zt.aspect=(window.innerWidth-300)/window.innerHeight,zt.updateProjectionMatrix())}Ms="0000",qt=JSON.parse(String(localStorage.getItem(Ms))),qt||(qt={id:Ms,name:"Test Build",author:"Droxus228",rate:4,contains:[]}),SS(qt.name),localStorage.setItem(Ms,JSON.stringify(qt)),console.log(JSON.parse(String(localStorage.getItem(Ms))))}let Cu=!0;function hr(){Cu&&(Cu=!1,requestAnimationFrame(()=>{cn&&zt&&bn?.render(cn,zt),Cu=!0}))}function uS(){bn?.dispose();const t=e=>{e.dispose();for(const n of Object.keys(e)){const i=e[n];i&&typeof i=="object"&&"minFilter"in i&&i.dispose()}};cn?.traverse(e=>{if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)t(e.material);else for(const n of e.material)t(n)}),document.querySelector("canvas")&&document.querySelector("canvas")?.remove(),zt=null,bn=null,zL(null)}let Ee;const gi=new kL;let rm=!0,Ie,bt,Tt,Di=[],Zo=[];function UL(t){rm=t}function zL(t){Ee=t}function BL(t){Di=t}async function dS(t){return Bl(t)}async function Bl(t){return new Promise(e=>{let n=t;n&&n.slice(0,t.length-4),t.slice(-4)!==".png"&&(t=t.replaceAll(" ","_").concat(".png")),Tt=void 0,bt=void 0,Ie=void 0,t.includes("side")?Promise.all([new Promise(r=>{gi.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${t}`,s=>{Ie=s,r(s)},()=>{},()=>{r(void 0)})}),new Promise(r=>{gi.load(Qn.filter(s=>s.name.includes(t.slice(0,t.length-8).replaceAll(" ","_")+"bottom"))[0]?.download_url,s=>{Tt=s,r(s)},()=>{},()=>{r(void 0)})}),new Promise(r=>{gi.load(Qn.filter(s=>s.name.includes(t.slice(0,t.length-8).replaceAll(" ","_")+"top"))[0]?.download_url,s=>{bt=s,r(s)},()=>{},()=>{r(void 0)})})]).then(r=>i(r[0],r[1],r[2])):t.includes("log")?Promise.all([new Promise(r=>{gi.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${t}`,s=>{Ie=s,r(s)},()=>{},()=>{r(void 0)})}),new Promise(r=>{gi.load(Qn.filter(s=>s.name.includes(n.slice(0,t.length-4).replaceAll(" ","_")+"_bottom"))[0]?.download_url,s=>{Tt=s,r(s)},()=>{},()=>{r(void 0)})}),new Promise(r=>{gi.load(Qn.filter(s=>s.name.includes(n.slice(0,t.length-4).replaceAll(" ","_")+"_top"))[0]?.download_url,s=>{bt=s,r(s)},()=>{},()=>{r(void 0)})})]).then(r=>i(r[0],r[1],r[2])):Qn.filter(r=>r.name.includes(n.replaceAll(" ","_")+"_top"))?Promise.all([new Promise(r=>{gi.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${t}`,s=>{Ie=s,r(s)},()=>{},()=>{r(void 0)})}),new Promise(r=>{gi.load(bt=Qn.filter(s=>s.name.includes(n.replaceAll(" ","_")+"_top"))[0]?.download_url,s=>{bt=s,r(s)},()=>{},()=>{r(void 0)})})]).then(r=>i(r[0],void 0,r[1])):Qn.filter(r=>r.name.includes(n.replaceAll(" ","_")+"_bottom"))?Promise.all([new Promise(r=>{gi.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${t}`,s=>{Ie=s,r(s)},()=>{},()=>{r(void 0)})}),new Promise(r=>{gi.load(Tt=Qn.filter(s=>s.name.includes(n.replaceAll(" ","_")+"_bottom"))[0]?.download_url,s=>{Tt=s,r(s)},()=>{},()=>{r(void 0)})})]).then(r=>i(r[0],r[1],void 0)):new Promise(r=>{gi.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${t}`,s=>{Ie=s,r(s)},()=>{},()=>{r(void 0)})}).then(r=>i(r,void 0,void 0));function i(r,s,o){Ie=r,Tt=s,bt=o,Ie.format=ri,Ie.minFilter=At,Ie.magFilter=At,Ie.wrapS=Ni,Ie.wrapT=Ni;const a=16,l=16,c=Ie.image.width,u=Ie.image.height,d=c/u,h=a/l;d>h?Ie.repeat.set(a/c,1):Ie.repeat.set(1,l/u),Tt||(Tt=bt||Ie),bt||(bt=Tt||Ie),[Tt,bt,Ie].forEach(y=>{y&&(y.minFilter=At,y.magFilter=At,y.wrapS=Ni,y.wrapT=Ni)}),pa(),rm&&(rm=!1,qt.contains.length<1?(ir(0,0,0),xS()):HL()),e([Ie,bt,Tt])}})}function Wd(){let t=!0;return vS.forEach(e=>{if(yn.includes(e)&&!yn.includes("block"))return t=!1}),t}function pa(){if(!Xs&&Ie){if(Wd()){let t=[new mt({map:Tt||bt||Ie,transparent:!0,opacity:.5,wireframe:!1,depthWrite:!1,alphaTest:0}),new mt({map:bt||Tt||Ie,transparent:!0,opacity:.5,wireframe:!1,depthWrite:!1,alphaTest:0}),new mt({map:Ie,transparent:!0,opacity:.5,wireframe:!1,depthWrite:!1,alphaTest:0})];_e.children.forEach(e=>e.material=t),_e.visible=!0,qe.visible=!1,_e.position.set(qe.position.x,qe.position.y,qe.position.z)}else _e.visible=!1,qe.visible=!0,qe.position.set(_e.position.x,_e.position.y,_e.position.z),qe.children.forEach(t=>{t.material=new mt({wireframe:!1,opacity:.5,transparent:!0,map:Ie,depthWrite:!1,side:$t,alphaTest:.5})}),qe.children[2].material=new mt({wireframe:!1,opacity:0,transparent:!0,map:Ie,depthWrite:!1});Vt=="Remove"?(_e.children.forEach(t=>t.material.forEach(e=>e.map=null)),_e.children.forEach(t=>t.material.forEach(e=>e.opacity=1)),_e.children.forEach(t=>t.material.forEach(e=>e.transparent=!0)),_e.children.forEach(t=>t.material.forEach(e=>e.wireframe=!0)),_e.children.forEach(t=>t.material.forEach(e=>e.needsUpdate=!0)),_e.children.forEach(t=>t.material.forEach(e=>e.visible=!0)),Jo.visible=!0,Xr.visible=!1,qr.visible=!1,_e.visible=!0):Vt=="Inspect"&&(_e.visible=!1,qe.visible=!1)}else _e.position.set(Math.round(G.point.x),Math.abs(Math.round(G.point.y+.001)),Math.round(G.point.z)),qe.position.set(Math.round(G.point.x),Math.abs(Math.round(G.point.y+.001)),Math.round(G.point.z))}function ir(t,e,n,i,r,s,o,a){if(!Di.find(l=>l.position.x==t&&l.position.y==e&&l.position.z==n)){let l,c;if(r!==void 0&&QL(r),i!==void 0&&tD(i),Wd()){Ie&&(Ie.wrapS=Ie.wrapT=Ni,Ie.repeat.set(16/Ie.image.width,16/Ie.image.height)),bt&&(bt.wrapS=bt.wrapT=Ni,bt.repeat.set(16/Ie.image.width,16/Ie.image.height)),Tt&&(Tt.wrapS=Tt.wrapT=Ni,Tt.repeat.set(16/Ie.image.width,16/Ie.image.height));let u,d,h;h=new mt({map:Tt||bt||Ie,transparent:!0,side:$t}),d=new mt({map:bt||Tt||Ie,transparent:!0,side:$t}),u=new mt({map:Ie,transparent:!0,side:$t});let m;if(Vl=="Slabs"){m=new Ut(1,.5,1,1,1,1);let y=new st(new Ut(1,1,1,1,1,1),new mt({map:Ie,opacity:0,transparent:!0,depthWrite:!1})),f=new st(m,[d,u,h]);m.groups.forEach((p,g)=>{g===2?p.materialIndex=0:g===0||g===1||g===4||g===5?p.materialIndex=1:p.materialIndex=2}),f.position.set(0,-.25,0),f.name="slabs",y.name="slabsHelped",l=new or,l.add(f),l.add(y),l.name="slabs"}else if(Vl=="Stairs"){m=new Ut(1,.5,1,1,1,1);let y=new st(new Ut(1,1,1,1,1,1),new mt({map:Ie,opacity:0,transparent:!0,depthWrite:!1})),f=new st(m,u);m=new Ut(.5,.5,1,1,1,1);let p=new st(m,[d,u,h]);m.groups.forEach((g,v)=>{v===2?g.materialIndex=0:v===0||v===1||v===4||v===5?g.materialIndex=1:g.materialIndex=2}),f.position.set(0,-.25,0),p.position.set(.25,.25,0),f.name="stairs",p.name="stairs",y.name="stairsHelped",l=new or,l.add(f),l.add(p),l.add(y),l.name="stairs"}else m=new Ut(1,1,1,1,1,1),m.groups.forEach((y,f)=>{f===2?y.materialIndex=0:f===0||f===1||f===4||f===5?y.materialIndex=1:y.materialIndex=2}),l=new st(m,[d,u,h]),l.name="block";cn?.add(l),hr(),l.rotation.set(_e.rotation.x,_e.rotation.y,_e.rotation.z)}else{let u=new st(new ns(1,1),new mt({map:Ie,transparent:!0,side:$t,depthWrite:!1})),d=new st(new ns(1,1),new mt({map:Ie,transparent:!0,side:$t,depthWrite:!1}));c=new st(new Ut(1,1,1),new mt({map:Ie,opacity:0,transparent:!0,depthWrite:!1})),d.rotation.set(0,Math.PI/2,0),l=new or,l.add(u),l.add(d),l.add(c),c.textureName=yn,l.rotation.set(qe.rotation.x,qe.rotation.y,qe.rotation.z),l.name="block"}l.textureName=yn,cn?.add(l),hr(),l.position.set(t,e,n),s!==void 0&&o!==void 0&&a!==void 0&&l.rotation.set(s,o,a),Di.push({position:{x:l.position.x,y:l.position.y,z:l.position.z},textureName:yn,blockType:l.name?l.name[0].toUpperCase().concat("",l.name.slice(1)):"Block",rotation:{_x:l.rotation.x,_y:l.rotation.y,_z:l.rotation.z}}),Zo.push({action:"create",blockInfo:Di[Di.length-1]}),qt.contains=Di,localStorage.setItem(Ms,JSON.stringify(qt))}}let Xs=!1,kg=[new mt({color:"white",wireframe:!0}),new mt({color:"white",wireframe:!0}),new mt({color:"white",wireframe:!0})],_e=new or,Jo=new st(new Ut(1,1,1),kg),qr=new st(new Ut(1,.5,1),kg),Xr=new st(new Ut(.5,.5,1),kg);_e.add(Jo);_e.add(qr);_e.add(Xr);qr.position.set(0,-.25,0);Xr.position.set(.25,.25,0);Xr.visible=!1;qr.visible=!1;_e.children.forEach(t=>t.geometry.groups.forEach((e,n)=>{n===2?e.materialIndex=1:n===0||n===1||n===4||n===5?e.materialIndex=2:e.materialIndex=0}));let qe=new or,hS=new st(new ns(1,1),new mt({transparent:!0,side:$t,depthWrite:!1})),Ng=new st(new ns(1,1),new mt({transparent:!0,side:$t,depthWrite:!1})),fS=new st(new Ut(1,1,1),new mt({opacity:0,transparent:!0,depthWrite:!1}));hS.name="hoverBlock";Ng.name="hoverBlock";fS.name="hoverBlock";Ng.rotation.set(0,Math.PI/2,0);qe.add(hS);qe.add(Ng);qe.add(fS);qe.name="hoverBlock";Jo.name="hoverBlock";_e.name="hoverBlock";qr.name="hoverBlock";Xr.name="hoverBlock";function VL(){zt&&(Ee=new OL(zt,bn?.domElement)),Ee.target.set(0,0,0),Ee.autoRotate=!1,Ee.autoRotateSpeed=1,Ee.enableDamping=!0,Ee.dampingFactor=.05,Ee.enablePan=!0,Ee.enableZoom=!1,document.addEventListener("keydown",i=>{i.keyCode===16&&(i.preventDefault(),Xs=!0,_e.visible=!1,qe.visible=!1,Vt!=="Inspect"&&(Ee.mouseButtons={LEFT:2,MIDDLE:1,RIGHT:0},Ee.enableZoom=!0))}),document.addEventListener("keyup",i=>{i.keyCode===16&&(Xs=!1,_e.visible=!0,qe.visible=!0,Vt=="Inspect"&&(_e.visible=!1,qe.visible=!1),Vt!=="Inspect"&&(Ee.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},pa(),Ee.enableZoom=!1))}),Ee.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},Ee.touches={ONE:void 0,TWO:void 0},Ee.screenSpacePanning=!1,Ee.minDistance=1,Ee.maxDistance=200,Ee.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},Ee.listenToKeyEvents(window),Ee.keyPanSpeed=50,Ee.addEventListener("change",hr);function t(i,r,s){if(zt){const o=new im().setFromVector3(zt.position.clone().sub(Ee.target));o.theta+=i,o.phi+=r,o.radius+=s;const a=1e-6;o.phi=Math.max(a,Math.min(Math.PI-a,o.phi)),zt.position.setFromSpherical(o).add(Ee.target),zt.lookAt(Ee.target)}}const e=.1,n=1;document.addEventListener("keydown",i=>{switch(i.code){case"ArrowLeft":t(-e,0,0);break;case"ArrowUp":t(0,-e,0);break;case"ArrowRight":t(e,0,0);break;case"ArrowDown":t(0,e,0);break;case"KeyO":t(0,0,-n);break;case"KeyP":t(0,0,n);break}hr()}),Ee.rotateCamera=!0,document.querySelector("#root").style.pointerEvents="none",document.querySelector("canvas").style.pointerEvents="all",document.querySelector("canvas")?.addEventListener("mousemove",$L),cn?.add(_e),cn?.add(qe),Ee.addEventListener("change",()=>{wS()}),document.querySelector("canvas")?.addEventListener("mousedown",i=>{(i.button==1||i.buttons==4)&&qL(i)}),document.querySelector("canvas")?.addEventListener("wheel",jL),document.querySelector("canvas")?.addEventListener("mousedown",GL),document.querySelector("canvas")?.addEventListener("mouseup",WL),Zo=[],hr()}function HL(){let t=qt.contains.length,e=qt.contains.length;qt.contains.length>0&&qt.contains.forEach(async n=>{Bl(n.textureName).then(()=>{ir(n.position.x,n.position.y,n.position.z,n.textureName,n.blockType,n.rotation._x,n.rotation._y,n.rotation._z),--t,iD((e-t)/e*100),t<1&&xS()})})}let Bo={leftBtn:!1,rightBtn:!1},sm,om,pS,mS;function GL(t){if(Vt!=="Inspect"){let e=Vt=="Build"?0:2,n=Vt=="Build"?2:0;switch(t.button){case e:Bo.leftBtn=!0,gy(t),pS=setTimeout(()=>{sm=setInterval(()=>{Bo.leftBtn?gy(lm):clearInterval(sm)},125)},200);break;case n:Bo.rightBtn=!0,vy(t),mS=setTimeout(()=>{om=setInterval(()=>{Bo.rightBtn?vy(lm):clearInterval(om)},125)},200);break}}}function WL(t){let e=Vt=="Build"?0:2,n=Vt=="Build"?2:0;switch(t.button){case e:Bo.leftBtn=!1,clearTimeout(pS),clearInterval(sm);break;case n:Bo.rightBtn=!1,clearTimeout(mS),clearInterval(om);break}}const ms=new NL,bf=new ze;function jd(t){if(bf.x=(t.clientX-300)/(window.innerWidth-300)*2-1,bf.y=-(t.clientY/window.innerHeight)*2+1,zt&&cn){ms.setFromCamera(bf,zt);let e=ms.intersectObjects(cn.children);if(e=e.filter(n=>n.object.name!=="hoverBlock"&&n.object.parent?.name!=="hoverBlock"),e=e.filter(n=>n.object.geometry instanceof Ut&&n.object.name!=="helpedCube"&&n.object.name!=="slabsHelped"),e.length>0){let n;if(e[0].object.name!=="helpPlane")if(e[0].object.name!=="slabs"&&e[0].object.name!=="stairs")n={x:e[0].object.rotation.x,y:e[0].object.rotation.y,z:e[0].object.rotation.z},e[0].object.rotation.set(0,0,0),e[0].object.updateMatrixWorld(!0),e=ms.intersectObjects([e[0].object]),n.x!==void 0&&n.y!==void 0&&n.z!==void 0&&e[0].object.rotation.set(n.x,n.y,n.z);else if(e[0].object.name=="slabs"){if(n={x:e[0].object.parent?.rotation.x,y:e[0].object.parent?.rotation.y,z:e[0].object.parent?.rotation.z},e[0].object.parent?.rotation.set(0,0,0),e[0].object.parent?.updateMatrixWorld(!0),e[0].object.parent?.children[1]){let i;ms.intersectObjects([e[0].object])[0]!==void 0&&(i=ms.intersectObjects([e[0].object])[0].face),i&&e[0].face?e[0].face=i:e[0].face=ms.intersectObjects([e[0].object.parent?.children[1]])[0].face,n.x!==void 0&&n.y!==void 0&&n.z!==void 0&&e[0].object.parent?.rotation.set(n.x,n.y,n.z)}}else n={x:e[0].object.parent?.rotation.x,y:e[0].object.parent?.rotation.y,z:e[0].object.parent?.rotation.z},e[0].object.parent?.rotation.set(0,0,0),e[0].object.parent?.updateMatrixWorld(!0),e[0].object.parent?.children[2]&&(e[0].face=ms.intersectObjects([e[0].object.parent?.children[2]])[0].face,n.x!==void 0&&n.y!==void 0&&n.z!==void 0&&e[0].object.parent?.rotation.set(n.x,n.y,n.z))}return e[0]}}function gy(t){!Xs&&Vt!=="Inspect"&&(G=jd(t),G&&(G.object.name=="helpPlane"?ir(Math.round(G.point.x),Math.abs(Math.round(G.point.y+.001)),Math.round(G.point.z)):(Vt=="Build",G.face&&(G.object.parent&&(G.object.parent.children.length==3||G.object.name=="slabs")?ir(Math.round(G.object.parent.position.x+G.face.normal.x),Math.abs(Math.round(G.object.parent.position.y+.001+G.face.normal.y)),Math.round(G.object.parent.position.z+G.face.normal.z)):ir(Math.round(G.object.position.x+G.face.normal.x),Math.abs(Math.round(G.object.position.y+.001+G.face.normal.y)),Math.round(G.object.position.z+G.face.normal.z))))))}function am(t){if(t){let e=Di.filter(n=>n.position.x==t.position.x&&n.position.y==t.position.y&&n.position.z==t.position.z);e[0]&&Zo.push({action:"remove",blockInfo:e[0]}),Di=Di.filter(n=>n.position.x!==t.position.x||n.position.y!==t.position.y||n.position.z!==t.position.z),cn?.remove(t),qt.contains=Di,localStorage.setItem(Ms,JSON.stringify(qt)),hr()}}function vy(t){if(!Xs&&Vt!=="Inspect"&&(G=jd(t),G&&G.object.name!=="helpPlane"&&G.object.name!=="hoverBlock")){let e=G.object;G.object.parent&&(G.object.parent.children.length==3||G.object.name=="slabs")&&(e=G.object.parent),am(e)}}function jL(t){let e=t.deltaY/Math.abs(t.deltaY);Xs||(e==1?_e.rotation.z<Math.PI*2?_e.rotation.set(_e.rotation.x,_e.rotation.y,_e.rotation.z+Math.PI*.5):_e.rotation.y<Math.PI*2?_e.rotation.set(_e.rotation.x,_e.rotation.y+Math.PI*.5,0):_e.rotation.x<Math.PI*2?_e.rotation.set(_e.rotation.x+Math.PI*.5,0,0):_e.rotation.set(0,0,0):_e.rotation.z>-Math.PI*2?_e.rotation.set(_e.rotation.x,_e.rotation.y,_e.rotation.z-Math.PI*.5):_e.rotation.y>-Math.PI*2?_e.rotation.set(_e.rotation.x,_e.rotation.y-Math.PI*.5,0):_e.rotation.x>-Math.PI*2?_e.rotation.set(_e.rotation.x-Math.PI*.5,0,0):_e.rotation.set(0,0,0),qe.rotation.set(_e.rotation.x,_e.rotation.y,_e.rotation.z)),hr()}let Qi,G,lm;function $L(t){lm=t,Wd()?(Qi=_e,qe.visible=!1):(Qi=qe,_e.visible=!1),Vt=="Remove"&&(Qi=_e,qe.visible=!1,_e.visible=!0),Vt!=="Inspect"&&(Qi.children.length>0&&Qi.children&&(Qi.visible=!0),G=jd(t),G&&(G.object.name=="helpPlane"?(_e.position.set(Math.round(G.point.x),Math.abs(Math.round(G.point.y+.001)),Math.round(G.point.z)),qe.position.set(Math.round(G.point.x),Math.abs(Math.round(G.point.y+.001)),Math.round(G.point.z))):Vt=="Build"?G.face&&(G.object.parent&&(G.object.parent.children.length==3||G.object.name=="slabs")?(_e.position.set(Math.round(G.object.parent.position.x+G.face.normal.x),Math.abs(Math.round(G.object.parent.position.y+.001+G.face.normal.y)),Math.round(G.object.parent.position.z+G.face.normal.z)),qe.position.set(Math.round(G.object.parent.position.x+G.face.normal.x),Math.abs(Math.round(G.object.parent.position.y+.001+G.face.normal.y)),Math.round(G.object.parent.position.z+G.face.normal.z))):G.object.parent&&(G.object.parent.children.length==3||G.object.name=="slabs")?(_e.position.set(Math.round(G.object.position.x+G.face.normal.x),Math.abs(Math.round(G.object.position.y+.001+G.face.normal.y)),Math.round(G.object.position.z+G.face.normal.z)),qe.position.set(Math.round(G.object.position.x+G.face.normal.x),Math.abs(Math.round(G.object.position.y+.001+G.face.normal.y)),Math.round(G.object.position.z+G.face.normal.z))):(Qi.position.set(Math.round(G.object.position.x+G.face.normal.x),Math.abs(Math.round(G.object.position.y+.001+G.face.normal.y)),Math.round(G.object.position.z+G.face.normal.z)),qe.position.set(Math.round(G.object.position.x+G.face.normal.x),Math.abs(Math.round(G.object.position.y+.001+G.face.normal.y)),Math.round(G.object.position.z+G.face.normal.z)))):G.object.parent&&(G.object.parent.children.length==3||G.object.name=="slabs")?Qi.position.set(Math.round(G.object.parent.position.x),Math.abs(Math.round(G.object.parent.position.y+.001)),Math.round(G.object.parent.position.z)):Qi.position.set(Math.round(G.object.position.x),Math.abs(Math.round(G.object.position.y+.001)),Math.round(G.object.position.z)))),Xs&&(qe.visible=!1,_e.visible=!1),hr()}function qL(t){if(G=jd(t),G&&(eD(G.object.name),G.object.name!=="helpPlane"&&G.object.name!=="hoverBlock")){let e=G.object;G.object.name=="stairs"||G.object.name=="stairsHelped"||G.object.name=="slabs"?e=G.object.parent:e=G.object;let n=e,r=n.material;Array.isArray(r)?Ie=r[1].map:G.object.parent.name=="stairs"?Ie=G.object.parent.children[2].material.map:G.object.parent.name=="slabs"?Ie=n.children[1].material.map:Ie=r.map,JL(e.textureName),Bl(yn),Wd()?(_e.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),qe.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z)):(_e.rotation.set(e.parent.rotation.x,e.parent.rotation.y,e.parent.rotation.z),qe.rotation.set(e.parent.rotation.x,e.parent.rotation.y,e.parent.rotation.z)),pa()}}function XL(){switch(Vt){case"Build":Ee.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},pa(),gS(),Ee.enableZoom=!1;break;case"Inspect":_e.visible=!1,qe.visible=!1,Ee.mouseButtons={LEFT:0,MIDDLE:1,RIGHT:2},Ee.enableZoom=!0;break;case"Remove":Ee.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},pa(),Ee.enableZoom=!1;break}}function gS(){switch(Vl){case"Blocks":pa(),Jo.visible=!0,Xr.visible=!1,qr.visible=!1;break;case"Slabs":Jo.visible=!1,Xr.visible=!1,qr.visible=!0;break;case"Stairs":Jo.visible=!1,Xr.visible=!0,qr.visible=!0;break}}let yn="debug.png",vS=[],Qn=[],_S=!1,yS=!1,Tf=0,Cf=[],Ai=[],xs;function KL(){Tf++,Tf>xs.length-2&&(Tf=0,_S?document.getElementsByTagName("canvas").length<1&&cS():yS=!0)}const YL=({items:t,texturePick:e})=>I("div",{className:"grid grid-cols-4 w-full allBlocksDiv",children:t.map(n=>fe("div",{onClick:e,className:"relative basis-1/3 flex flex-wrap justify-center cursor-pointer blocks border-thirdcolor hover:border-2 ",children:[I("div",{className:"w-full h-14 flex justify-center",children:I("img",{src:n.download_url,id:n.name,alt:"block",onLoad:KL,className:"textures object-cover w-14 h-14 aspect-square select-none pointer-events-none"})}),I("label",{id:n.name.slice(0,n.name.length-4).replaceAll("_"," "),className:"break-words text-sm select-none",children:n.name.slice(0,n.name.length-4).replaceAll("_"," ").replaceAll("side","").replaceAll("log","").replaceAll("front","").replaceAll("end","")})]},n.name))}),ZL=({items:t,texturePick:e})=>(t=Ai,fe("div",{children:[I("div",{hidden:t.length<1,className:"grid grid-cols-4 w-full",children:t.map(n=>fe("div",{onClick:e,className:"relative basis-1/3 flex flex-wrap justify-center cursor-pointer blocks border-thirdcolor hover:border-2",children:[I("div",{className:"w-full h-14 flex justify-center",children:I("img",{src:n.download_url,id:n.name,alt:"block",className:"textures object-cover w-14 h-14 aspect-square select-none pointer-events-none"})}),I("label",{id:n.name.slice(0,n.name.length-4).replaceAll("_"," "),className:"break-words text-sm select-none",children:n.name.slice(0,n.name.length-4).replaceAll("_"," ").replaceAll("side","").replaceAll("log","").replaceAll("front","").replaceAll("end","")})]},n.name))}),I("h1",{hidden:t.length>0,className:"opacity-60",children:"No blocks here"})]}));function JL(t){yn=t;let e=yn;e.slice(-4)!==".png"&&(e=yn.replaceAll(" ","_").concat(".png"));let n;document.querySelectorAll(".blocks").forEach(i=>{if(i.querySelectorAll("label")[0].id==yn)return n=i,i}),document.querySelectorAll(".blocks").forEach(i=>i.classList.remove("opacity-40")),n&&(n.classList.add("opacity-40"),n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}))}function QL(t){Vl=t}function eD(t){switch(t){case"slabs":document.querySelector(".slabsType").click();break;case"stairs":document.querySelector(".stairsType").click();break;case"block":document.querySelector(".blocksType").click();break}}function tD(t){yn=t}function xS(t){um.current&&(um.current.style.display="none"),VL()}let Vt="Build",wS,Vl="Blocks";function nD(){document.querySelector("#root").style.pointerEvents="all",document.removeEventListener("keydown",MS)}function iD(t){cm.current&&(cm.current.value=t)}const cm=de.createRef(),um=de.createRef();class rD extends Fm.Component{render(){return I("div",{ref:um,className:"sceneLoader h-full w-full overflow-hidden absolute top-0 left-0 z-200 bg-white grid pointer-events-none",id:"sceneLoader",children:fe("div",{className:" h-full w-96 place-self-center grid grid-rows-[40%_20%_5%_20%_20%]",children:[I("div",{}),I("img",{src:"https://raw.githubusercontent.com/Droxus/Builder3D/7ba1d995d58b0d5b5e68383ba3713c489af0311e/src/assets/img/loaderScene.svg",className:"eager img-importance-high w-32 flex justify-self-center "}),I("label",{className:" text-xl text-fourthcolor",children:"Scene Loading"}),I("progress",{ref:cm,max:"100",value:0,id:"sceneProgressBar",className:" superProgress w-60 flex justify-self-center appearance-none h-5"}),fe("div",{className:"flex items-center justify-center",children:[I("img",{className:"eager img-importance-high aspect-square h-12 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/9ff281164d1c9ed9c617cf49285f033e79674502/src/assets/img/logo.svg"}),I("label",{className:"text-xl ml-4 font-medium text-fourthcolor",children:"Builder 3D"})]})]})})}}function sD(){uS(),nD()}const pl=de.createRef(),dm=de.createRef();function SS(t){pl.current&&(pl.current.value=t),dm.current&&(dm.current.value=t)}function MS(t){let e=[],n;if(t.ctrlKey)switch(t.preventDefault(),t.which){case 90:document.querySelector(".undobtn").click();break;case 88:document.querySelector(".redobtn").click();break;case 89:document.querySelector(".redobtn").click();break;case 70:document.querySelector(".findblockinp").focus();break;case 83:document.querySelector(".savebtn").click();break;case 81:e=Array.from(document.querySelectorAll(".modeswitchbtns")),n=e.findIndex(i=>i.classList.contains("opacity-100"))-1,n<0&&(n=2),e[n].click();break;case 69:e=Array.from(document.querySelectorAll(".modeswitchbtns")),n=e.findIndex(i=>i.classList.contains("opacity-100"))+1,n>2&&(n=0),e[n].click();break;case 65:e=Array.from(document.querySelectorAll(".blocktypeswitchbtns")),n=e.findIndex(i=>i.classList.contains("opacity-100"))-1,n<0&&(n=2),e[n].click();break;case 68:e=Array.from(document.querySelectorAll(".blocktypeswitchbtns")),n=e.findIndex(i=>i.classList.contains("opacity-100"))+1,n>2&&(n=0),e[n].click();break}}function oD(){document.addEventListener("keydown",MS);const t=L=>{SS(L.target.value),qt.name=String(L.target.value),localStorage.setItem(qt.id,JSON.stringify(qt))};pl.current&&(pl.current.value||(yS?document.getElementsByTagName("canvas").length<1&&cS():_S=!0));const[e,n]=de.useState(""),i=L=>{n(String(Math.max(Math.min(Number(L.target.value),Ee.maxDistance),Ee.minDistance))),zt?.position.setLength(Number(Math.max(Math.min(Ee.maxDistance-Number(L.target.value)+.5,Ee.maxDistance),Ee.minDistance)))};wS=function(){n(String(Math.round(Ee.maxDistance-Ee.getDistance()+.5))),s(String(Math.round(Ee.target.x))),a(String(Math.round(Ee.target.y))),c(String(Math.round(Ee.target.z)))},e||n("192");const[r,s]=de.useState(""),[o,a]=de.useState(""),[l,c]=de.useState(""),u=L=>{s(String(Math.max(Math.min(Number(L.target.value),1e4),-1e4))),Ee.target.set(Number(Math.max(Math.min(Number(L.target.value),1e4),-1e4)),Ee.target.y,Ee.target.z),Ee.update()},d=L=>{a(String(Math.max(Math.min(Number(L.target.value),1e4),-1e4))),Ee.target.set(Ee.target.x,Number(Math.max(Math.min(Number(L.target.value),1e4),-1e4)),Ee.target.z),Ee.update()},h=L=>{c(String(Math.max(Math.min(Number(L.target.value),1e4),-1e4))),Ee.target.set(Ee.target.x,Ee.target.y,Number(Math.max(Math.min(Number(L.target.value),1e4),-1e4))),Ee.update()};r||s("0"),o||a("0"),l||c("0");const[m,y]=de.useState("");m||y("Build");function f(L){y(L.currentTarget.querySelector("label").innerText),Vt=L.currentTarget.querySelector("label").innerText,XL()}const[p,g]=de.useState("");p||g("Blocks");function v(L){g(L.target.innerText),Vl=L.target.innerText,gS()}function _(L){P(L.target.value)}function S(){Ee.keys={LEFT:null,UP:null,RIGHT:null,BOTTOM:null}}function x(){Ee.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"}}const[C,P]=de.useState(""),[w,T]=de.useState([]);de.useEffect(()=>{const L=async()=>{let me=(await Qv(()=>import("./textures-5599cd7a.js"),[])).default;me=me.filter(se=>se.name.slice(-7)!==".mcmeta"),Qn=me,me=me.filter(se=>!se.name.includes("top")&&!se.name.includes("bottom")&&!se.name.includes("anvil")&&!se.name.includes("bell")&&!se.name.includes("candle")&&!se.name.includes("redstone_dust")&&!se.name.includes("bamboo_singleleaf")&&!se.name.includes("big_dripleaf_side")&&!se.name.includes("chain")&&!se.name.includes("lightning_rod")&&!se.name.includes("grindstone")&&!se.name.includes("small_dripleaf")),vS=(await Qv(()=>import("./noCubeBlocks-30ca2709.js"),[])).default,Cf=me,xs=me,T(xs)};Qn.length<1?L():(C!==void 0||C!==null)&&(C==""?xs=Cf:xs=Cf.filter(we=>String(we.name).toLowerCase().includes(String(C).toLowerCase())),xs.length>0&&T(xs))},[C]);const[R,Y]=de.useState("");function Q(){Y(""),P("")}function U(L){Y(L.target.value)}const[O,X]=de.useState([]);de.useEffect(()=>{X(Ai)},[]);function J(L){dS(L.currentTarget.querySelector("img").getAttribute("id")),yn=L.currentTarget.querySelector("label").getAttribute("id"),yn.slice(-4)!==".png"?Ai.push(Qn.filter(we=>we.name==yn.replaceAll(" ","_").concat(".png"))[0]):Ai.push(Qn.filter(we=>we.name==yn)[0]),Ai=Array.from(new Set(Ai)),Ai=Ai.slice(-8),X(Ai),document.querySelectorAll(".blocks").forEach(we=>we.classList.remove("opacity-40")),L.currentTarget.classList.add("opacity-40")}let ee=[];function k(L){const we=Zo.pop();if(we){ee.push(we);const{action:me,blockInfo:ae}=we;if(me=="remove")Bl(ae.textureName).then(()=>{ir(ae.position.x,ae.position.y,ae.position.z,ae.textureName,ae.blockType,ae.rotation._x,ae.rotation._y,ae.rotation._z),Zo.pop()});else if(me=="create"){let se=cn?.children.filter(Fe=>Fe.position.x==ae.position.x&&Fe.position.y==ae.position.y&&Fe.position.z==ae.position.z)[0];am(se),Zo.pop()}}L.target.blur()}function H(L){const we=ee.pop();if(we){const{action:me,blockInfo:ae}=we;if(me=="create")Bl(ae.textureName).then(()=>{ir(ae.position.x,ae.position.y,ae.position.z,ae.textureName,ae.blockType,ae.rotation._x,ae.rotation._y,ae.rotation._z)});else if(me=="remove"){let se=cn?.children.filter(Fe=>Fe.position.x==ae.position.x&&Fe.position.y==ae.position.y&&Fe.position.z==ae.position.z)[0];am(se)}}L.target.blur()}function W(L){document.querySelector(".unavailableSceneBlock").style.display="grid",L.target.blur()}function oe(L){document.querySelector(".saveSceneBlock").style.display="grid",L.target.blur()}function z(L){document.querySelector(".settingSceneBlock").style.display="grid",L.target.blur()}function Z(L){document.querySelector(".unavailableSceneBlock").style.display="grid",L.target.blur()}function re(L){document.querySelector(".unavailableSceneBlock").style.display="grid",L.target.blur()}function le(L){document.querySelector(".shareSceneBlock").style.display="grid",L.target.blur()}return fe("div",{className:"threeSceneInterface h-full w-full overflow-hidden pointer-events-none grid grid-rows-[52px_1fr] z-100",children:[I(rD,{}),fe("div",{className:" sceneHeader bg-fourthcolor z-60 grid grid-cols-[300px_25%_1fr_35%] text-secondcolor",onFocus:S,onBlur:x,children:[fe(Ja,{to:"/",className:"flex items-center cursor-pointer",onClick:sD,children:[I("img",{className:"ml-8 aspect-square h-9 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/f4f29d3e38a622e9a547d37c766d7a7308ba2dbc/src/assets/img/whiteLogo.svg"}),I("label",{className:"text-xl ml-4 font-medium text-firstcolor cursor-pointer",children:"Builder 3D"})]}),fe("div",{className:"flex items-center shadow-forTopBlock",children:[I("button",{onClick:k,className:" undobtn h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Undo"}),I("button",{onClick:H,className:" redobtn h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Redo"}),I("button",{onClick:W,className:" h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Create"})]}),fe("div",{className:"flex items-center justify-center text-firstcolor shadow-forTopBlock",children:[I("button",{className:"outline-none",children:"Droxus228"}),I("label",{className:" mx-2",children:"/"}),I("input",{className:"sceneName bg-transparent outline-none",type:"text",ref:pl,onChange:t})]}),fe("div",{className:"flex items-center justify-end shadow-forTopBlock",children:[I("button",{onClick:oe,className:" savebtn h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Save"}),I("button",{onClick:z,className:"h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Scene"}),I("button",{onClick:Z,className:" h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Import"}),I("button",{onClick:re,className:"h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Export"}),I("button",{onClick:le,className:" h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Share"})]})]}),fe("div",{className:"leftBlock absolute grid grid-rows-[185px_1fr_135px] h-full w-300  bg-firstcolor text-fourthcolor",onFocus:S,onBlur:x,children:[fe("div",{className:"pt-20 relative z-30 shadow-forLeftBlockTwo bg-firstcolor",children:[fe("div",{className:"grid grid-cols-[40px_1fr_40px] ",children:[I("button",{className:"flex place-content-center items-center focus:outline-none hover:border-0 transition-none",children:I("img",{className:"h-5 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/f4f29d3e38a622e9a547d37c766d7a7308ba2dbc/src/assets/img/crossBlocks.svg",onClick:()=>{Q()}})}),I("input",{className:" findblockinp bg-transparent px-2 h-10 outline-none text-center text-lg border-fourthcolor border-b-2 bg-firstcolor focus:outline-none hover:border-b-2 transition-none",type:"text",placeholder:"Find Block",value:R,onChange:U,onInput:_}),I("button",{className:"flex place-content-center items-center focus:outline-none hover:border-0 transition-none",children:I("img",{className:"h-6 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/f4f29d3e38a622e9a547d37c766d7a7308ba2dbc/src/assets/img/searchBlocks.svg"})})]}),fe("div",{className:"mt-2 flex",children:[I("button",{className:` blocktypeswitchbtns flex-1 focus:outline-none hover:border-0 transition-none blocksType ${p=="Blocks"?" opacity-100":"opacity-40"}`,onClick:v,children:"Blocks"}),I("button",{className:` blocktypeswitchbtns flex-1 focus:outline-none hover:border-0 transition-none slabsType ${p=="Slabs"?" opacity-100":"opacity-40"}`,onClick:v,children:"Slabs"}),I("button",{className:` blocktypeswitchbtns flex-1 focus:outline-none hover:border-0 transition-none stairsType ${p=="Stairs"?" opacity-100":"opacity-40"}`,onClick:v,children:"Stairs"})]})]}),fe("div",{className:"texturePickBlock relative h-full overflow-scroll overflow-x-hidden z-10 mt-0 py-24 shadow-forLeftBlockThree",children:[fe("div",{className:" grid grid-cols-[180px_1fr] items-center",children:[I("label",{className:" font-semibold",children:"Recently Used Blocks"}),I("hr",{className:" h-0.5 mr-2  bg-fourthcolor my-10"})]}),I(ZL,{texturePick:J,items:Ai}),fe("div",{className:" grid grid-cols-[100px_1fr] items-center",children:[I("label",{className:" font-semibold",children:"All Blocks"}),I("hr",{className:" h-0.5 mr-2  bg-fourthcolor my-10"})]}),I(YL,{texturePick:J,items:w})]}),I("div",{className:"z-30 -mt-0 bg-firstcolor shadow-forLeftBlockTwo",children:fe("div",{className:" pt-4 h-21",children:[I("label",{className:" text-lg font-medium",children:"Mods"}),fe("div",{className:"flex mt-2 h-full",children:[fe("button",{className:` modeswitchbtns flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${m=="Build"?" opacity-100":"opacity-40"}`,onClick:f,children:[I("div",{className:"w-full flex justify-center",children:I("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/build.svg"})}),I("label",{children:"Build"})]}),fe("button",{className:` modeswitchbtns flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${m=="Inspect"?" opacity-100":"opacity-40"}`,onClick:f,children:[I("div",{className:"w-full flex justify-center",children:I("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/inspect.svg"})}),I("label",{children:"Inspect"})]}),fe("button",{className:` modeswitchbtns flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${m=="Remove"?" opacity-100":"opacity-40"}`,onClick:f,children:[I("div",{className:"w-full flex justify-center",children:I("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/remove.svg"})}),I("label",{children:"Remove"})]})]})]})})]}),fe("div",{className:" absolute top-full left-full -translate-x-120 -translate-y-14 w-120 h-10 flex items-center backdrop-blur-sm bg-black/1 text-fourthcolor font-normal",children:[fe("div",{className:" h-8 w-40 flex items-center ",children:[I("label",{className:" w-12",children:"Scale"}),I("input",{id:"scaleInput",className:" w-14 bg-transparent text-right",type:"number",value:e,onChange:i}),I("label",{children:"%"})]}),fe("div",{className:" h-8 w-80 flex items-center",children:[I("label",{className:" w-24",children:"Position"}),I("label",{children:"x:"}),I("input",{className:"modsButton w-16 bg-transparent text-center",type:"number",value:r,onChange:u}),I("label",{children:"y:"}),I("input",{className:" w-16 bg-transparent text-center",type:"number",value:o,onChange:d}),I("label",{children:"z:"}),I("input",{className:" w-16 bg-transparent text-center",type:"number",value:l,onChange:h})]})]}),I("div",{className:"saveSceneBlock hidden w-screen h-screen absolute top-0 left-0 z-200 backdrop-blur-sm backdrop-brightness-50 items-center justify-center",onFocus:S,onBlur:x,children:fe("div",{className:" bg-white w-600 h-500 grid items-center content-between border-4 rounded-none border-fourthcolor",children:[I("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Are you sure you want to save the scene?"}),fe("div",{className:" grid grid-cols-[1fr_3fr] grid-rows-2 gap-y-8 px-10 items-center justify-items-center text-lg",children:[I("label",{className:" text-fourthcolor",children:"Scene name"}),I("label",{className:" bg-thirdcolor text-firstcolor  w-64 h-10 flex justify-center items-center",children:"First Home"}),I("label",{className:" text-fourthcolor",children:"Author name"}),I("label",{className:" bg-thirdcolor text-firstcolor w-64 h-10 flex justify-center items-center",children:"Droxus"})]}),I("label",{className:" px-12 text-thirdcolor text-base flex justify-start items-start",children:"* The scene will be shown from the camera view and camera position when saving"}),fe("div",{className:" flex justify-around py-8",children:[I("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",children:"Yes, I am sure"}),I("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:()=>{document.querySelector(".saveSceneBlock").style.display="none"},children:"No, I am not"})]})]})}),I("div",{className:"settingSceneBlock hidden w-screen h-screen absolute top-0 left-0 z-200 backdrop-blur-sm backdrop-brightness-50 items-center justify-center",onFocus:S,onBlur:x,children:fe("div",{className:" bg-white w-600 h-800 grid items-center content-between border-4 rounded-none border-fourthcolor text-lg",children:[I("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Scene"}),fe("div",{className:" grid grid-cols-[1fr_3fr] gap-y-8 px-10 items-center justify-items-center text-lg",children:[I("label",{className:" text-fourthcolor",children:"Scene name"}),I("input",{className:" sceneName bg-firstcolor text-fourthcolor border-2 rounded-none outline-none border-fourthcolor text-center w-64 h-10 flex justify-center items-center",ref:dm,onChange:t,placeholder:"Name"})]}),I("label",{className:" px-8 text-fourthcolor text-xl flex justify-center items-start",children:"Hot Keys"}),fe("div",{className:" grid grid-cols-[1fr_2fr] px-12",children:[I("label",{className:" text-left",children:"Undo"}),fe("label",{className:" text-left",children:[I("kbd",{children:"Ctrl"})," + ",I("kbd",{children:"Z"})]})]}),fe("div",{className:" grid grid-cols-[1fr_2fr] px-12",children:[I("label",{className:" text-left",children:"Redo"}),fe("label",{className:" text-left",children:[I("kbd",{children:"Ctrl"})," + ",I("kbd",{children:"X"})," or ",I("kbd",{children:"Ctrl"})," + ",I("kbd",{children:"Y"})]})]}),fe("div",{className:" grid grid-cols-[1fr_2fr] px-12",children:[I("label",{className:" text-left",children:"Find Block"}),fe("label",{className:" text-left",children:[I("kbd",{children:"Ctrl"})," + ",I("kbd",{children:"F"})]})]}),fe("div",{className:" grid grid-cols-[1fr_2fr] px-12",children:[I("label",{className:" text-left",children:"Save Scene"}),fe("label",{className:" text-left",children:[I("kbd",{children:"Ctrl"})," + ",I("kbd",{children:"S"})]})]}),fe("div",{className:" grid grid-cols-[1fr_2fr] px-12",children:[I("label",{className:" text-left",children:"Switch Mode"}),fe("label",{className:" text-left",children:[I("kbd",{children:"Ctrl"})," + ",I("kbd",{children:"Q"})," and ",I("kbd",{children:"Ctrl"})," + ",I("kbd",{children:"E"})]})]}),fe("div",{className:" grid grid-cols-[1fr_2fr] px-12",children:[I("label",{className:" text-left",children:"Switch Block Type"}),fe("label",{className:" text-left",children:[I("kbd",{children:"Ctrl"})," + ",I("kbd",{children:"A"})," and ",I("kbd",{children:"Ctrl"})," + ",I("kbd",{children:"D"})]})]}),fe("div",{className:" flex justify-around py-8",children:[I("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",children:"Apply and Save"}),I("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:()=>{document.querySelector(".settingSceneBlock").style.display="none"},children:"Cancel"})]})]})}),I("div",{className:"shareSceneBlock hidden w-screen h-screen absolute top-0 left-0 z-200 backdrop-blur-sm backdrop-brightness-50 items-center justify-center",onFocus:S,onBlur:x,children:fe("div",{className:" bg-white w-600 h-800 grid items-center content-between border-4 rounded-none border-fourthcolor",children:[I("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Share"}),fe("div",{className:" grid grid-cols-[1fr_3fr] grid-rows-2 gap-y-8 px-10 items-center justify-items-center text-lg",children:[I("label",{className:" text-fourthcolor",children:"Scene name"}),I("label",{className:" bg-thirdcolor text-firstcolor  w-64 h-10 flex justify-center items-center",children:"First Home"}),I("label",{className:" text-fourthcolor",children:"Author name"}),I("label",{className:" bg-thirdcolor text-firstcolor w-64 h-10 flex justify-center items-center",children:"Droxus"})]}),I("label",{className:" px-8 text-fourthcolor text-xl flex justify-center items-start",children:"Warning"}),I("label",{className:" px-12 text-thirdcolor text-base flex justify-start items-start",children:"* The scene will be shown from the camera view and camera position when saving"}),I("label",{className:" px-12 text-thirdcolor text-base flex justify-start items-start",children:"* The scene will be published and link to the scene will be copied"}),I("label",{className:" px-12 text-thirdcolor text-base flex justify-start items-start",children:"* Everyone will be able to see your scene and everyone will be able to rate your scene"}),fe("div",{className:" flex justify-around py-8",children:[I("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",children:"Public"}),I("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:()=>{document.querySelector(".shareSceneBlock").style.display="none"},children:"Cancel"})]})]})}),I("div",{className:"unavailableSceneBlock hidden w-screen h-screen absolute top-0 left-0 z-200 backdrop-blur-sm backdrop-brightness-50 items-center justify-center",onFocus:S,onBlur:x,children:fe("div",{className:" bg-white w-600 h-400 grid items-center content-between border-4 rounded-none border-fourthcolor",children:[I("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Create/Import/Export"}),I("label",{className:" px-12 text-thirdcolor text-base flex justify-center items-center",children:"Sorry but this feature is not available yet"}),I("div",{className:" flex justify-around py-8",children:I("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:()=>{document.querySelector(".unavailableSceneBlock").style.display="none"},children:"Okay"})})]})}),I("div",{className:"opa hidden w-screen h-screen absolute top-0 left-0 z-200 backdrop-blur-sm backdrop-brightness-50 items-center justify-center",onFocus:S,onBlur:x,children:fe("div",{className:" bg-white w-600 h-400 grid items-center content-between border-4 rounded-none border-fourthcolor",children:[I("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Save"}),I("label",{className:" px-12 text-thirdcolor text-base flex justify-center items-center",children:"Scene was successfully saved"}),I("div",{className:" flex justify-around py-8",children:I("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:()=>{document.querySelector(".unavailableSceneBlock").style.display="none"},children:"Okay"})})]})}),I("div",{className:"opa hidden w-screen h-screen absolute top-0 left-0 z-200 backdrop-blur-sm backdrop-brightness-50 items-center justify-center",onFocus:S,onBlur:x,children:fe("div",{className:" bg-white w-600 h-400 grid items-center content-between border-4 rounded-none border-fourthcolor",children:[I("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Share"}),I("label",{className:" px-12 text-thirdcolor text-base flex justify-center items-center",children:"Scene was successfully published"}),I("label",{className:" px-12 text-thirdcolor text-base flex justify-center items-center",children:"Link to the scene was copied"}),I("div",{className:" flex justify-around py-8",children:I("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:()=>{document.querySelector(".unavailableSceneBlock").style.display="none"},children:"Okay"})})]})}),I("div",{className:"opa hidden w-screen h-screen absolute top-0 left-0 z-200 backdrop-blur-sm backdrop-brightness-50 items-center justify-center",onFocus:S,onBlur:x,children:fe("div",{className:" bg-white w-600 h-400 grid items-center content-between border-4 rounded-none border-fourthcolor",children:[I("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Loading"}),I("label",{className:" px-12 text-thirdcolor text-base flex justify-center items-center",children:"Please wait, it will take some time"}),I("div",{className:" flex justify-around py-8",children:I("button",{className:" w-64 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:()=>{document.querySelector(".unavailableSceneBlock").style.display="none"},children:"Click to load faster  =❩"})})]})})]})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},aD=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),i.push(n[u],n[d],n[h],n[m])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ES(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw new lD;const h=s<<2|a>>4;if(i.push(h),c!==64){const m=a<<4&240|c>>2;if(i.push(m),d!==64){const y=c<<6&192|d;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cD=function(t){const e=ES(t);return bS.encodeByteArray(e,!0)},sd=function(t){return cD(t).replace(/\./g,"")},TS=function(t){try{return bS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD=()=>uD().__FIREBASE_DEFAULTS__,hD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&TS(t[1]);return e&&JSON.parse(e)},Og=()=>{try{return dD()||hD()||fD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},CS=t=>{var e,n;return(n=(e=Og())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pD=t=>{const e=CS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},AS=()=>{var t;return(t=Og())===null||t===void 0?void 0:t.config},IS=t=>{var e;return(e=Og())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[sd(JSON.stringify(n)),sd(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function PS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _D(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yD(){const t=fn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RS(){try{return typeof indexedDB=="object"}catch{return!1}}function LS(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function xD(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD="FirebaseError";class Ti extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=wD,Object.setPrototypeOf(this,Ti.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ro.prototype.create)}}class ro{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?SD(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ti(r,a,i)}}function SD(t,e){return t.replace(MD,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const MD=/\{\$([^}]+)}/g;function ED(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hl(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(_y(s)&&_y(o)){if(!Hl(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function _y(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function tl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function nl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bD(t,e){const n=new TD(t,e);return n.subscribe.bind(n)}class TD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");CD(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Af),r.error===void 0&&(r.error=Af),r.complete===void 0&&(r.complete=Af);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Af(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=1e3,ID=2,PD=4*60*60*1e3,RD=.5;function yy(t,e=AD,n=ID){const i=e*Math.pow(n,t),r=Math.round(RD*i*(Math.random()-.5)*2);return Math.min(PD,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){return t&&t._delegate?t._delegate:t}class Ei{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new mD;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e?.identifier),r=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kD(e))try{this.getOrInitializeService({instanceIdentifier:ws})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ws){return this.instances.has(e)}getOptions(e=ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:DD(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ws){return this.component?this.component.multipleInstances?e:ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DD(t){return t===ws?void 0:t}function kD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new LD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Je||(Je={}));const OD={debug:Je.DEBUG,verbose:Je.VERBOSE,info:Je.INFO,warn:Je.WARN,error:Je.ERROR,silent:Je.SILENT},FD=Je.INFO,UD={[Je.DEBUG]:"log",[Je.VERBOSE]:"log",[Je.INFO]:"info",[Je.WARN]:"warn",[Je.ERROR]:"error"},zD=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=UD[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $d{constructor(e){this.name=e,this._logLevel=FD,this._logHandler=zD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Je.DEBUG,...e),this._logHandler(this,Je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Je.VERBOSE,...e),this._logHandler(this,Je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Je.INFO,...e),this._logHandler(this,Je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Je.WARN,...e),this._logHandler(this,Je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Je.ERROR,...e),this._logHandler(this,Je.ERROR,...e)}}const BD=(t,e)=>e.some(n=>t instanceof n);let xy,wy;function VD(){return xy||(xy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HD(){return wy||(wy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const DS=new WeakMap,hm=new WeakMap,kS=new WeakMap,If=new WeakMap,Fg=new WeakMap;function GD(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Kr(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&DS.set(n,t)}).catch(()=>{}),Fg.set(e,t),e}function WD(t){if(hm.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hm.set(t,e)}let fm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jD(t){fm=t(fm)}function $D(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Pf(this),e,...n);return kS.set(i,e.sort?e.sort():[e]),Kr(i)}:HD().includes(t)?function(...e){return t.apply(Pf(this),e),Kr(DS.get(this))}:function(...e){return Kr(t.apply(Pf(this),e))}}function qD(t){return typeof t=="function"?$D(t):(t instanceof IDBTransaction&&WD(t),BD(t,VD())?new Proxy(t,fm):t)}function Kr(t){if(t instanceof IDBRequest)return GD(t);if(If.has(t))return If.get(t);const e=qD(t);return e!==t&&(If.set(t,e),Fg.set(e,t)),e}const Pf=t=>Fg.get(t);function XD(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Kr(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Kr(o.result),l.oldVersion,l.newVersion,Kr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const KD=["get","getKey","getAll","getAllKeys","count"],YD=["put","add","delete","clear"],Rf=new Map;function Sy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rf.get(e))return Rf.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=YD.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||KD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Rf.set(e,s),s}jD(t=>({...t,get:(e,n,i)=>Sy(e,n)||t.get(e,n,i),has:(e,n)=>!!Sy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JD(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function JD(t){const e=t.getComponent();return e?.type==="VERSION"}const pm="@firebase/app",My="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new $d("@firebase/app"),QD="@firebase/app-compat",ek="@firebase/analytics-compat",tk="@firebase/analytics",nk="@firebase/app-check-compat",ik="@firebase/app-check",rk="@firebase/auth",sk="@firebase/auth-compat",ok="@firebase/database",ak="@firebase/database-compat",lk="@firebase/functions",ck="@firebase/functions-compat",uk="@firebase/installations",dk="@firebase/installations-compat",hk="@firebase/messaging",fk="@firebase/messaging-compat",pk="@firebase/performance",mk="@firebase/performance-compat",gk="@firebase/remote-config",vk="@firebase/remote-config-compat",_k="@firebase/storage",yk="@firebase/storage-compat",xk="@firebase/firestore",wk="@firebase/firestore-compat",Sk="firebase",Mk="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="[DEFAULT]",Ek={[pm]:"fire-core",[QD]:"fire-core-compat",[tk]:"fire-analytics",[ek]:"fire-analytics-compat",[ik]:"fire-app-check",[nk]:"fire-app-check-compat",[rk]:"fire-auth",[sk]:"fire-auth-compat",[ok]:"fire-rtdb",[ak]:"fire-rtdb-compat",[lk]:"fire-fn",[ck]:"fire-fn-compat",[uk]:"fire-iid",[dk]:"fire-iid-compat",[hk]:"fire-fcm",[fk]:"fire-fcm-compat",[pk]:"fire-perf",[mk]:"fire-perf-compat",[gk]:"fire-rc",[vk]:"fire-rc-compat",[_k]:"fire-gcs",[yk]:"fire-gcs-compat",[xk]:"fire-fst",[wk]:"fire-fst-compat","fire-js":"fire-js",[Sk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new Map,gm=new Map;function bk(t,e){try{t.container.addComponent(e)}catch(n){Ks.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gi(t){const e=t.name;if(gm.has(e))return Ks.debug(`There were multiple attempts to register component ${e}.`),!1;gm.set(e,t);for(const n of od.values())bk(n,t);return!0}function so(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Yr=new ro("app","Firebase",Tk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=Mk;function NS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:mm,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Yr.create("bad-app-name",{appName:String(r)});if(n||(n=AS()),!n)throw Yr.create("no-options");const s=od.get(r);if(s){if(Hl(n,s.options)&&Hl(i,s.config))return s;throw Yr.create("duplicate-app",{appName:r})}const o=new ND(r);for(const l of gm.values())o.addComponent(l);const a=new Ck(n,i,o);return od.set(r,a),a}function Ug(t=mm){const e=od.get(t);if(!e&&t===mm&&AS())return NS();if(!e)throw Yr.create("no-app",{appName:t});return e}function li(t,e,n){var i;let r=(i=Ek[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ks.warn(a.join(" "));return}Gi(new Ei(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak="firebase-heartbeat-database",Ik=1,Gl="firebase-heartbeat-store";let Lf=null;function OS(){return Lf||(Lf=XD(Ak,Ik,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gl)}}}).catch(t=>{throw Yr.create("idb-open",{originalErrorMessage:t.message})})),Lf}async function Pk(t){try{return await(await OS()).transaction(Gl).objectStore(Gl).get(FS(t))}catch(e){if(e instanceof Ti)Ks.warn(e.message);else{const n=Yr.create("idb-get",{originalErrorMessage:e?.message});Ks.warn(n.message)}}}async function Ey(t,e){try{const i=(await OS()).transaction(Gl,"readwrite");await i.objectStore(Gl).put(e,FS(t)),await i.done}catch(n){if(n instanceof Ti)Ks.warn(n.message);else{const i=Yr.create("idb-set",{originalErrorMessage:n?.message});Ks.warn(i.message)}}}function FS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=1024,Lk=30*24*60*60*1e3;class Dk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nk(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=by();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Lk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=by(),{heartbeatsToSend:n,unsentEntries:i}=kk(this._heartbeatsCache.heartbeats),r=sd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function by(){return new Date().toISOString().substring(0,10)}function kk(t,e=Rk){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Ty(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ty(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Nk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RS()?LS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Pk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ey(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ey(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ty(t){return sd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t){Gi(new Ei("platform-logger",e=>new ZD(e),"PRIVATE")),Gi(new Ei("heartbeat",e=>new Dk(e),"PRIVATE")),li(pm,My,t),li(pm,My,"esm2017"),li("fire-js","")}Ok("");var Fk="firebase",Uk="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */li(Fk,Uk,"app");const zk=(t,e)=>e.some(n=>t instanceof n);let Cy,Ay;function Bk(){return Cy||(Cy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vk(){return Ay||(Ay=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const US=new WeakMap,vm=new WeakMap,zS=new WeakMap,Df=new WeakMap,zg=new WeakMap;function Hk(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Zr(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&US.set(n,t)}).catch(()=>{}),zg.set(e,t),e}function Gk(t){if(vm.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});vm.set(t,e)}let _m={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wk(t){_m=t(_m)}function jk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(kf(this),e,...n);return zS.set(i,e.sort?e.sort():[e]),Zr(i)}:Vk().includes(t)?function(...e){return t.apply(kf(this),e),Zr(US.get(this))}:function(...e){return Zr(t.apply(kf(this),e))}}function $k(t){return typeof t=="function"?jk(t):(t instanceof IDBTransaction&&Gk(t),zk(t,Bk())?new Proxy(t,_m):t)}function Zr(t){if(t instanceof IDBRequest)return Hk(t);if(Df.has(t))return Df.get(t);const e=$k(t);return e!==t&&(Df.set(t,e),zg.set(e,t)),e}const kf=t=>zg.get(t);function qk(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Zr(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Zr(o.result),l.oldVersion,l.newVersion,Zr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Xk=["get","getKey","getAll","getAllKeys","count"],Kk=["put","add","delete","clear"],Nf=new Map;function Iy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nf.get(e))return Nf.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Kk.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Xk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Nf.set(e,s),s}Wk(t=>({...t,get:(e,n,i)=>Iy(e,n)||t.get(e,n,i),has:(e,n)=>!!Iy(e,n)||t.has(e,n)}));const BS="@firebase/installations",Bg="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=1e4,HS=`w:${Bg}`,GS="FIS_v2",Yk="https://firebaseinstallations.googleapis.com/v1",Zk=60*60*1e3,Jk="installations",Qk="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ys=new ro(Jk,Qk,eN);function WS(t){return t instanceof Ti&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS({projectId:t}){return`${Yk}/projects/${t}/installations`}function $S(t){return{token:t.token,requestStatus:2,expiresIn:nN(t.expiresIn),creationTime:Date.now()}}async function qS(t,e){const i=(await e.json()).error;return Ys.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function XS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tN(t,{refreshToken:e}){const n=XS(t);return n.append("Authorization",iN(e)),n}async function KS(t){const e=await t();return e.status>=500&&e.status<600?t():e}function nN(t){return Number(t.replace("s","000"))}function iN(t){return`${GS} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=jS(t),r=XS(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:n,authVersion:GS,appId:t.appId,sdkVersion:HS},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await KS(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:$S(c.authToken)}}else throw await qS("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=/^[cdef][\w-]{21}$/,ym="";function aN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=lN(t);return oN.test(n)?n:ym}catch{return ym}}function lN(t){return sN(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=new Map;function JS(t,e){const n=qd(t);QS(n,e),cN(n,e)}function QS(t,e){const n=ZS.get(t);if(n)for(const i of n)i(e)}function cN(t,e){const n=uN();n&&n.postMessage({key:t,fid:e}),dN()}let Is=null;function uN(){return!Is&&"BroadcastChannel"in self&&(Is=new BroadcastChannel("[Firebase] FID Change"),Is.onmessage=t=>{QS(t.data.key,t.data.fid)}),Is}function dN(){ZS.size===0&&Is&&(Is.close(),Is=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN="firebase-installations-database",fN=1,Zs="firebase-installations-store";let Of=null;function Vg(){return Of||(Of=qk(hN,fN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zs)}}})),Of}async function ad(t,e){const n=qd(t),r=(await Vg()).transaction(Zs,"readwrite"),s=r.objectStore(Zs),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&JS(t,e.fid),e}async function eM(t){const e=qd(t),i=(await Vg()).transaction(Zs,"readwrite");await i.objectStore(Zs).delete(e),await i.done}async function Xd(t,e){const n=qd(t),r=(await Vg()).transaction(Zs,"readwrite"),s=r.objectStore(Zs),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&JS(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hg(t){let e;const n=await Xd(t.appConfig,i=>{const r=pN(i),s=mN(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===ym?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pN(t){const e=t||{fid:aN(),registrationStatus:0};return tM(e)}function mN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Ys.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=gN(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vN(t)}:{installationEntry:e}}async function gN(t,e){try{const n=await rN(t,e);return ad(t.appConfig,n)}catch(n){throw WS(n)&&n.customData.serverCode===409?await eM(t.appConfig):await ad(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function vN(t){let e=await Py(t.appConfig);for(;e.registrationStatus===1;)await YS(100),e=await Py(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Hg(t);return i||n}return e}function Py(t){return Xd(t,e=>{if(!e)throw Ys.create("installation-not-found");return tM(e)})}function tM(t){return _N(t)?{fid:t.fid,registrationStatus:0}:t}function _N(t){return t.registrationStatus===1&&t.registrationTime+VS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN({appConfig:t,heartbeatServiceProvider:e},n){const i=xN(t,n),r=tN(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:HS,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await KS(()=>fetch(i,a));if(l.ok){const c=await l.json();return $S(c)}else throw await qS("Generate Auth Token",l)}function xN(t,{fid:e}){return`${jS(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gg(t,e=!1){let n;const i=await Xd(t.appConfig,s=>{if(!nM(s))throw Ys.create("not-registered");const o=s.authToken;if(!e&&MN(o))return s;if(o.requestStatus===1)return n=wN(t,e),s;{if(!navigator.onLine)throw Ys.create("app-offline");const a=bN(s);return n=SN(t,a),a}});return n?await n:i.authToken}async function wN(t,e){let n=await Ry(t.appConfig);for(;n.authToken.requestStatus===1;)await YS(100),n=await Ry(t.appConfig);const i=n.authToken;return i.requestStatus===0?Gg(t,e):i}function Ry(t){return Xd(t,e=>{if(!nM(e))throw Ys.create("not-registered");const n=e.authToken;return TN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function SN(t,e){try{const n=await yN(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await ad(t.appConfig,i),n}catch(n){if(WS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await eM(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ad(t.appConfig,i)}throw n}}function nM(t){return t!==void 0&&t.registrationStatus===2}function MN(t){return t.requestStatus===2&&!EN(t)}function EN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Zk}function bN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function TN(t){return t.requestStatus===1&&t.requestTime+VS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CN(t){const e=t,{installationEntry:n,registrationPromise:i}=await Hg(e);return i?i.catch(console.error):Gg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AN(t,e=!1){const n=t;return await IN(n),(await Gg(n,e)).token}async function IN(t){const{registrationPromise:e}=await Hg(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t){if(!t||!t.options)throw Ff("App Configuration");if(!t.name)throw Ff("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ff(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ff(t){return Ys.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM="installations",RN="installations-internal",LN=t=>{const e=t.getProvider("app").getImmediate(),n=PN(e),i=so(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},DN=t=>{const e=t.getProvider("app").getImmediate(),n=so(e,iM).getImmediate();return{getId:()=>CN(n),getToken:r=>AN(n,r)}};function kN(){Gi(new Ei(iM,LN,"PUBLIC")),Gi(new Ei(RN,DN,"PRIVATE"))}kN();li(BS,Bg);li(BS,Bg,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="analytics",NN="firebase_id",ON="origin",FN=60*1e3,UN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new $d("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$n=new ro("analytics","Analytics",zN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t){if(!t.startsWith(Wg)){const e=$n.create("invalid-gtag-resource",{gtagURL:t});return Dn.warn(e.message),""}return t}function rM(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function VN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function HN(t,e){const n=VN("firebase-js-sdk-policy",{createScriptURL:BN}),i=document.createElement("script"),r=`${Wg}?l=${t}&id=${e}`;i.src=n?n?.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function GN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function WN(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const l=(await rM(n)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(a){Dn.error(a)}t("config",r,s)}async function jN(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await rM(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(s){Dn.error(s)}}function $N(t,e,n,i){async function r(s,...o){try{if(s==="event"){const[a,l]=o;await jN(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await WN(t,e,n,i,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Dn.error(a)}}return r}function qN(t,e,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=$N(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}function XN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Wg)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=30,YN=1e3;class ZN{constructor(e={},n=YN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const sM=new ZN;function JN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function QN(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:JN(i)},s=UN.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw $n.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function eO(t,e=sM,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw $n.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw $n.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new iO;return setTimeout(async()=>{a.abort()},n!==void 0?n:FN),oM({appId:i,apiKey:r,measurementId:s},o,a,e)}async function oM(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=sM){var s;const{appId:o,measurementId:a}=t;try{await tO(i,e)}catch(l){if(a)return Dn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:o,measurementId:a};throw l}try{const l=await QN(t);return r.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!nO(c)){if(r.deleteThrottleMetadata(o),a)return Dn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:o,measurementId:a};throw l}const u=Number((s=c?.customData)===null||s===void 0?void 0:s.httpStatus)===503?yy(n,r.intervalMillis,KN):yy(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,d),Dn.debug(`Calling attemptFetch again in ${u} millis`),oM(t,d,i,r)}}function tO(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(s),i($n.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nO(t){if(!(t instanceof Ti)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class iO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function rO(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sO(){if(RS())try{await LS()}catch(t){return Dn.warn($n.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return Dn.warn($n.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oO(t,e,n,i,r,s,o){var a;const l=eO(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Dn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Dn.error(m)),e.push(l);const c=sO().then(m=>{if(m)return i.getId()}),[u,d]=await Promise.all([l,c]);XN(s)||HN(s,u.measurementId),r("js",new Date);const h=(a=o?.config)!==null&&a!==void 0?a:{};return h[ON]="firebase",h.update=!0,d!=null&&(h[NN]=d),r("config",u.measurementId,h),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.app=e}_delete(){return delete ml[this.app.options.appId],Promise.resolve()}}let ml={},Ly=[];const Dy={};let Uf="dataLayer",lO="gtag",ky,aM,Ny=!1;function cO(){const t=[];if(PS()&&t.push("This is a browser extension environment."),xD()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=$n.create("invalid-analytics-context",{errorInfo:e});Dn.warn(n.message)}}function uO(t,e,n){cO();const i=t.options.appId;if(!i)throw $n.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Dn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $n.create("no-api-key");if(ml[i]!=null)throw $n.create("already-exists",{id:i});if(!Ny){GN(Uf);const{wrappedGtag:s,gtagCore:o}=qN(ml,Ly,Dy,Uf,lO);aM=s,ky=o,Ny=!0}return ml[i]=oO(t,Ly,Dy,e,ky,Uf,n),new aO(t)}function dO(t=Ug()){t=ji(t);const e=so(t,ld);return e.isInitialized()?e.getImmediate():hO(t)}function hO(t,e={}){const n=so(t,ld);if(n.isInitialized()){const r=n.getImmediate();if(Hl(e,n.getOptions()))return r;throw $n.create("already-initialized")}return n.initialize({options:e})}function fO(t,e,n,i){t=ji(t),rO(aM,ml[t.app.options.appId],e,n,i).catch(r=>Dn.error(r))}const Oy="@firebase/analytics",Fy="0.10.0";function pO(){Gi(new Ei(ld,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return uO(i,r,n)},"PUBLIC")),Gi(new Ei("analytics-internal",t,"PRIVATE")),li(Oy,Fy),li(Oy,Fy,"esm2017");function t(e){try{const n=e.getProvider(ld).getImmediate();return{logEvent:(i,r,s)=>fO(n,i,r,s)}}catch(n){throw $n.create("interop-component-reg-failed",{reason:n})}}}pO();var mO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},he,jg=jg||{},Le=mO||self;function Kd(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gO(t){return Object.prototype.hasOwnProperty.call(t,zf)&&t[zf]||(t[zf]=++vO)}var zf="closure_uid_"+(1e9*Math.random()>>>0),vO=0;function _O(t,e,n){return t.call.apply(t.bind,arguments)}function yO(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function un(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?un=_O:un=yO,un.apply(null,arguments)}function lu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Gt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function os(){this.s=this.s,this.o=this.o}var xO=0;os.prototype.s=!1;os.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),xO!=0)&&gO(this)};os.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lM=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $g(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Uy(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Kd(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function dn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dn.prototype.h=function(){this.defaultPrevented=!0};var wO=function(){if(!Le.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Le.addEventListener("test",()=>{},e),Le.removeEventListener("test",()=>{},e)}catch{}return t}();function Wl(t){return/^[\s\xa0]*$/.test(t)}function Yd(){var t=Le.navigator;return t&&(t=t.userAgent)?t:""}function ki(t){return Yd().indexOf(t)!=-1}function qg(t){return qg[" "](t),t}qg[" "]=function(){};function SO(t,e){var n=m4;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var MO=ki("Opera"),jl=ki("Trident")||ki("MSIE"),cM=ki("Edge"),xm=cM||jl,uM=ki("Gecko")&&!(Yd().toLowerCase().indexOf("webkit")!=-1&&!ki("Edge"))&&!(ki("Trident")||ki("MSIE"))&&!ki("Edge"),EO=Yd().toLowerCase().indexOf("webkit")!=-1&&!ki("Edge");function dM(){var t=Le.document;return t?t.documentMode:void 0}e:{var zy="",Bf=function(){var t=Yd();if(uM)return/rv:([^\);]+)(\)|;)/.exec(t);if(cM)return/Edge\/([\d\.]+)/.exec(t);if(jl)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(EO)return/WebKit\/(\S+)/.exec(t);if(MO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bf&&(zy=Bf?Bf[1]:""),jl){var By=dM();if(By!=null&&By>parseFloat(zy))break e}}Le.document&&jl&&dM();function $l(t,e){if(dn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(uM){e:{try{qg(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:bO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$l.$.h.call(this)}}Gt($l,dn);var bO={2:"touch",3:"pen",4:"mouse"};$l.prototype.h=function(){$l.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var pc="closure_listenable_"+(1e6*Math.random()|0),TO=0;function CO(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++TO,this.fa=this.ia=!1}function Zd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Xg(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function AO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function hM(t){const e={};for(const n in t)e[n]=t[n];return e}const Vy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fM(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Vy.length;s++)n=Vy[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Jd(t){this.src=t,this.g={},this.h=0}Jd.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Sm(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new CO(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};function wm(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=lM(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Zd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Sm(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}var Kg="closure_lm_"+(1e6*Math.random()|0),Vf={};function pM(t,e,n,i,r){if(i&&i.once)return gM(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)pM(t,e[s],n,i,r);return null}return n=Jg(n),t&&t[pc]?t.O(e,n,fc(i)?!!i.capture:!!i,r):mM(t,e,n,!1,i,r)}function mM(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=fc(r)?!!r.capture:!!r,a=Zg(t);if(a||(t[Kg]=a=new Jd(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=IO(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)wO||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(_M(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function IO(){function t(n){return e.call(t.src,t.listener,n)}const e=PO;return t}function gM(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)gM(t,e[s],n,i,r);return null}return n=Jg(n),t&&t[pc]?t.P(e,n,fc(i)?!!i.capture:!!i,r):mM(t,e,n,!0,i,r)}function vM(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)vM(t,e[s],n,i,r);else i=fc(i)?!!i.capture:!!i,n=Jg(n),t&&t[pc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Sm(s,n,i,r),-1<n&&(Zd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Zg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Sm(e,n,i,r)),(n=-1<t?e[t]:null)&&Yg(n))}function Yg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[pc])wm(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(_M(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Zg(e))?(wm(n,t),n.h==0&&(n.src=null,e[Kg]=null)):Zd(t)}}}function _M(t){return t in Vf?Vf[t]:Vf[t]="on"+t}function PO(t,e){if(t.fa)t=!0;else{e=new $l(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Yg(t),t=n.call(i,e)}return t}function Zg(t){return t=t[Kg],t instanceof Jd?t:null}var Hf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jg(t){return typeof t=="function"?t:(t[Hf]||(t[Hf]=function(e){return t.handleEvent(e)}),t[Hf])}function Ht(){os.call(this),this.i=new Jd(this),this.S=this,this.J=null}Gt(Ht,os);Ht.prototype[pc]=!0;Ht.prototype.removeEventListener=function(t,e,n,i){vM(this,t,e,n,i)};function Zt(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new dn(e,t);else if(e instanceof dn)e.target=e.target||t;else{var r=e;e=new dn(i,t),fM(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=cu(o,i,!0,e)&&r}if(o=e.g=t,r=cu(o,i,!0,e)&&r,r=cu(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=cu(o,i,!1,e)&&r}Ht.prototype.N=function(){if(Ht.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Zd(n[i]);delete t.g[e],t.h--}}this.J=null};Ht.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ht.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function cu(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&wm(t.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var Qg=Le.JSON.stringify;class RO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function LO(){var t=e0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class DO{constructor(){this.h=this.g=null}add(e,n){const i=yM.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var yM=new RO(()=>new kO,t=>t.reset());class kO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function NO(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function OO(t){Le.setTimeout(()=>{throw t},0)}let ql,Xl=!1,e0=new DO,xM=()=>{const t=Le.Promise.resolve(void 0);ql=()=>{t.then(FO)}};var FO=()=>{for(var t;t=LO();){try{t.h.call(t.g)}catch(n){OO(n)}var e=yM;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xl=!1};function Qd(t,e){Ht.call(this),this.h=t||1,this.g=e||Le,this.j=un(this.qb,this),this.l=Date.now()}Gt(Qd,Ht);he=Qd.prototype;he.ga=!1;he.T=null;he.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Zt(this,"tick"),this.ga&&(t0(this),this.start()))}};he.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function t0(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}he.N=function(){Qd.$.N.call(this),t0(this),delete this.g};function n0(t,e,n){if(typeof t=="function")n&&(t=un(t,n));else if(t&&typeof t.handleEvent=="function")t=un(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Le.setTimeout(t,e||0)}function wM(t){t.g=n0(()=>{t.g=null,t.i&&(t.i=!1,wM(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class UO extends os{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:wM(this)}N(){super.N(),this.g&&(Le.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kl(t){os.call(this),this.h=t,this.g={}}Gt(Kl,os);var Hy=[];function SM(t,e,n,i){Array.isArray(n)||(n&&(Hy[0]=n.toString()),n=Hy);for(var r=0;r<n.length;r++){var s=pM(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function MM(t){Xg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Yg(e)},t),t.g={}}Kl.prototype.N=function(){Kl.$.N.call(this),MM(this)};Kl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function eh(){this.g=!0}eh.prototype.Ea=function(){this.g=!1};function zO(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function BO(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function Vo(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+HO(t,n)+(i?" "+i:"")})}function VO(t,e){t.info(function(){return"TIMEOUT: "+e})}eh.prototype.info=function(){};function HO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Qg(n)}catch{return e}}var Ma={},Gy=null;function i0(){return Gy=Gy||new Ht}Ma.Ta="serverreachability";function EM(t){dn.call(this,Ma.Ta,t)}Gt(EM,dn);function Yl(t){const e=i0();Zt(e,new EM(e))}Ma.STAT_EVENT="statevent";function bM(t,e){dn.call(this,Ma.STAT_EVENT,t),this.stat=e}Gt(bM,dn);function xn(t){const e=i0();Zt(e,new bM(e,t))}Ma.Ua="timingevent";function TM(t,e){dn.call(this,Ma.Ua,t),this.size=e}Gt(TM,dn);function mc(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Le.setTimeout(function(){t()},e)}var r0={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},GO={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function s0(){}s0.prototype.h=null;function Wy(t){return t.h||(t.h=t.i())}function WO(){}var gc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function o0(){dn.call(this,"d")}Gt(o0,dn);function a0(){dn.call(this,"c")}Gt(a0,dn);var Mm;function th(){}Gt(th,s0);th.prototype.g=function(){return new XMLHttpRequest};th.prototype.i=function(){return{}};Mm=new th;function vc(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Kl(this),this.P=jO,t=xm?125:void 0,this.V=new Qd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new CM}function CM(){this.i=null,this.g="",this.h=!1}var jO=45e3,Em={},cd={};he=vc.prototype;he.setTimeout=function(t){this.P=t};function bm(t,e,n){t.L=1,t.v=ih(vr(e)),t.s=n,t.S=!0,AM(t,null)}function AM(t,e){t.G=Date.now(),_c(t),t.A=vr(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),OM(n.i,"t",i),t.C=0,n=t.l.J,t.h=new CM,t.g=iE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new UO(un(t.Pa,t,t.g),t.O)),SM(t.U,t.g,"readystatechange",t.nb),e=t.I?hM(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Yl(),zO(t.j,t.u,t.A,t.m,t.W,t.s)}he.nb=function(t){t=t.target;const e=this.M;e&&Oi(t)==3?e.l():this.Pa(t)};he.Pa=function(t){try{if(t==this.g)e:{const u=Oi(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||xm||this.g&&(this.h.h||this.g.ja()||Xy(this.g)))){this.J||u!=4||e==7||(e==8||0>=d?Yl(3):Yl(2)),nh(this);var n=this.g.da();this.ca=n;t:if(IM(this)){var i=Xy(this.g);t="";var r=i.length,s=Oi(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ps(this),gl(this);var o="";break t}this.h.i=new Le.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,BO(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wl(a)){var c=a;break t}}c=null}if(n=c)Vo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tm(this,n);else{this.i=!1,this.o=3,xn(12),Ps(this),gl(this);break e}}this.S?(PM(this,u,o),xm&&this.i&&u==3&&(SM(this.U,this.V,"tick",this.mb),this.V.start())):(Vo(this.j,this.m,o,null),Tm(this,o)),u==4&&Ps(this),this.i&&!this.J&&(u==4?QM(this.l,this):(this.i=!1,_c(this)))}else h4(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,xn(12)):(this.o=0,xn(13)),Ps(this),gl(this)}}}catch{}finally{}};function IM(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function PM(t,e,n){let i=!0,r;for(;!t.J&&t.C<n.length;)if(r=$O(t,n),r==cd){e==4&&(t.o=4,xn(14),i=!1),Vo(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Em){t.o=4,xn(15),Vo(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Vo(t.j,t.m,r,null),Tm(t,r);IM(t)&&r!=cd&&r!=Em&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,xn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),f0(e),e.M=!0,xn(11))):(Vo(t.j,t.m,n,"[Invalid Chunked Response]"),Ps(t),gl(t))}he.mb=function(){if(this.g){var t=Oi(this.g),e=this.g.ja();this.C<e.length&&(nh(this),PM(this,t,e),this.i&&t!=4&&_c(this))}};function $O(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?cd:(n=Number(e.substring(n,i)),isNaN(n)?Em:(i+=1,i+n>e.length?cd:(e=e.slice(i,i+n),t.C=i+n,e)))}he.cancel=function(){this.J=!0,Ps(this)};function _c(t){t.Y=Date.now()+t.P,RM(t,t.P)}function RM(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=mc(un(t.lb,t),e)}function nh(t){t.B&&(Le.clearTimeout(t.B),t.B=null)}he.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(VO(this.j,this.A),this.L!=2&&(Yl(),xn(17)),Ps(this),this.o=2,gl(this)):RM(this,this.Y-t)};function gl(t){t.l.H==0||t.J||QM(t.l,t)}function Ps(t){nh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,t0(t.V),MM(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Tm(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Cm(n.i,t))){if(!t.K&&Cm(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)hd(n),ah(n);else break e;h0(n),xn(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=mc(un(n.ib,n),6e3));if(1>=zM(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Rs(n,11)}else if((t.K||n.g==t)&&hd(n),!Wl(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const d=c[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=c[5];h!=null&&typeof h=="number"&&0<h&&(i=1.5*h,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=i.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(l0(s,s.h),s.h=null))}if(i.F){const f=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(i.Da=f,at(i.I,i.F,f))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=nE(i,i.J?i.pa:null,i.Y),o.K){BM(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(nh(a),_c(a)),i.g=o}else ZM(i);0<n.j.length&&lh(n)}else c[0]!="stop"&&c[0]!="close"||Rs(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Rs(n,7):d0(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Yl(4)}catch{}}function qO(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Kd(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function XO(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Kd(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function LM(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Kd(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=XO(t),i=qO(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var DM=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Fs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fs){this.h=t.h,ud(this,t.j),this.s=t.s,this.g=t.g,dd(this,t.m),this.l=t.l;var e=t.i,n=new Zl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),jy(this,n),this.o=t.o}else t&&(e=String(t).match(DM))?(this.h=!1,ud(this,e[1]||"",!0),this.s=il(e[2]||""),this.g=il(e[3]||"",!0),dd(this,e[4]),this.l=il(e[5]||"",!0),jy(this,e[6]||"",!0),this.o=il(e[7]||"")):(this.h=!1,this.i=new Zl(null,this.h))}Fs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(rl(e,$y,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(rl(e,$y,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(rl(n,n.charAt(0)=="/"?JO:ZO,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",rl(n,e4)),t.join("")};function vr(t){return new Fs(t)}function ud(t,e,n){t.j=n?il(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function dd(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function jy(t,e,n){e instanceof Zl?(t.i=e,t4(t.i,t.h)):(n||(e=rl(e,QO)),t.i=new Zl(e,t.h))}function at(t,e,n){t.i.set(e,n)}function ih(t){return at(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function il(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function rl(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,YO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function YO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var $y=/[#\/\?@]/g,ZO=/[#\?:]/g,JO=/[#\?]/g,QO=/[#\?@]/g,e4=/#/g;function Zl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function as(t){t.g||(t.g=new Map,t.h=0,t.i&&KO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}he=Zl.prototype;he.add=function(t,e){as(this),this.i=null,t=Ea(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function kM(t,e){as(t),e=Ea(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function NM(t,e){return as(t),e=Ea(t,e),t.g.has(e)}he.forEach=function(t,e){as(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};he.ta=function(){as(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};he.Z=function(t){as(this);let e=[];if(typeof t=="string")NM(this,t)&&(e=e.concat(this.g.get(Ea(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};he.set=function(t,e){return as(this),this.i=null,t=Ea(this,t),NM(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};he.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function OM(t,e,n){kM(t,e),0<n.length&&(t.i=null,t.g.set(Ea(t,e),$g(n)),t.h+=n.length)}he.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function Ea(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function t4(t,e){e&&!t.j&&(as(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(kM(this,i),OM(this,r,n))},t)),t.j=e}var n4=class{constructor(t,e){this.g=t,this.map=e}};function FM(t){this.l=t||i4,Le.PerformanceNavigationTiming?(t=Le.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Le.g&&Le.g.Ka&&Le.g.Ka()&&Le.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var i4=10;function UM(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zM(t){return t.h?1:t.g?t.g.size:0}function Cm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function l0(t,e){t.g?t.g.add(e):t.h=e}function BM(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}FM.prototype.cancel=function(){if(this.i=VM(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function VM(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $g(t.i)}var r4=class{stringify(t){return Le.JSON.stringify(t,void 0)}parse(t){return Le.JSON.parse(t,void 0)}};function s4(){this.g=new r4}function o4(t,e,n){const i=n||"";try{LM(t,function(r,s){let o=r;fc(r)&&(o=Qg(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function a4(t,e){const n=new eh;if(Le.Image){const i=new Image;i.onload=lu(uu,n,i,"TestLoadImage: loaded",!0,e),i.onerror=lu(uu,n,i,"TestLoadImage: error",!1,e),i.onabort=lu(uu,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=lu(uu,n,i,"TestLoadImage: timeout",!1,e),Le.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function uu(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function rh(t){this.l=t.fc||null,this.j=t.ob||!1}Gt(rh,s0);rh.prototype.g=function(){return new sh(this.l,this.j)};rh.prototype.i=function(t){return function(){return t}}({});function sh(t,e){Ht.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=c0,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Gt(sh,Ht);var c0=0;he=sh.prototype;he.open=function(t,e){if(this.readyState!=c0)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Jl(this)};he.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Le).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};he.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yc(this)),this.readyState=c0};he.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Jl(this)),this.g&&(this.readyState=3,Jl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Le.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;HM(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function HM(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}he.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yc(this):Jl(this),this.readyState==3&&HM(this)}};he.Za=function(t){this.g&&(this.response=this.responseText=t,yc(this))};he.Ya=function(t){this.g&&(this.response=t,yc(this))};he.ka=function(){this.g&&yc(this)};function yc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Jl(t)}he.setRequestHeader=function(t,e){this.v.append(t,e)};he.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};he.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Jl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(sh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var l4=Le.JSON.parse;function _t(t){Ht.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=GM,this.L=this.M=!1}Gt(_t,Ht);var GM="",c4=/^https?$/i,u4=["POST","PUT"];he=_t.prototype;he.Oa=function(t){this.M=t};he.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Mm.g(),this.C=this.u?Wy(this.u):Wy(Mm),this.g.onreadystatechange=un(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){qy(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=Le.FormData&&t instanceof Le.FormData,!(0<=lM(u4,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{$M(this),0<this.B&&((this.L=d4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=un(this.ua,this)):this.A=n0(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){qy(this,s)}};function d4(t){return jl&&typeof t.timeout=="number"&&t.ontimeout!==void 0}he.ua=function(){typeof jg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Zt(this,"timeout"),this.abort(8))};function qy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,WM(t),oh(t)}function WM(t){t.F||(t.F=!0,Zt(t,"complete"),Zt(t,"error"))}he.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Zt(this,"complete"),Zt(this,"abort"),oh(this))};he.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),oh(this,!0)),_t.$.N.call(this)};he.La=function(){this.s||(this.G||this.v||this.l?jM(this):this.kb())};he.kb=function(){jM(this)};function jM(t){if(t.h&&typeof jg<"u"&&(!t.C[1]||Oi(t)!=4||t.da()!=2)){if(t.v&&Oi(t)==4)n0(t.La,0,t);else if(Zt(t,"readystatechange"),Oi(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var r=String(t.I).match(DM)[1]||null;!r&&Le.self&&Le.self.location&&(r=Le.self.location.protocol.slice(0,-1)),i=!c4.test(r?r.toLowerCase():"")}n=i}if(n)Zt(t,"complete"),Zt(t,"success");else{t.m=6;try{var s=2<Oi(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",WM(t)}}finally{oh(t)}}}}function oh(t,e){if(t.g){$M(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Zt(t,"ready");try{n.onreadystatechange=i}catch{}}}function $M(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Le.clearTimeout(t.A),t.A=null)}he.isActive=function(){return!!this.g};function Oi(t){return t.g?t.g.readyState:0}he.da=function(){try{return 2<Oi(this)?this.g.status:-1}catch{return-1}};he.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};he.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),l4(e)}};function Xy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case GM:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function h4(t){const e={};t=(t.g&&2<=Oi(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(Wl(t[i]))continue;var n=NO(t[i]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}AO(e,function(i){return i.join(", ")})}he.Ia=function(){return this.m};he.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qM(t){let e="";return Xg(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function u0(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=qM(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):at(t,e,n))}function $a(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function XM(t){this.Ga=0,this.j=[],this.l=new eh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$a("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$a("baseRetryDelayMs",5e3,t),this.hb=$a("retryDelaySeedMs",1e4,t),this.eb=$a("forwardChannelMaxRetries",2,t),this.xa=$a("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new FM(t&&t.concurrentRequestLimit),this.Ja=new s4,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}he=XM.prototype;he.ra=8;he.H=1;function d0(t){if(KM(t),t.H==3){var e=t.W++,n=vr(t.I);if(at(n,"SID",t.K),at(n,"RID",e),at(n,"TYPE","terminate"),xc(t,n),e=new vc(t,t.l,e),e.L=2,e.v=ih(vr(n)),n=!1,Le.navigator&&Le.navigator.sendBeacon)try{n=Le.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Le.Image&&(new Image().src=e.v,n=!0),n||(e.g=iE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),_c(e)}tE(t)}function ah(t){t.g&&(f0(t),t.g.cancel(),t.g=null)}function KM(t){ah(t),t.u&&(Le.clearTimeout(t.u),t.u=null),hd(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Le.clearTimeout(t.m),t.m=null)}function lh(t){if(!UM(t.i)&&!t.m){t.m=!0;var e=t.Na;ql||xM(),Xl||(ql(),Xl=!0),e0.add(e,t),t.C=0}}function f4(t,e){return zM(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=mc(un(t.Na,t,e),eE(t,t.C)),t.C++,!0)}he.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new vc(this,this.l,t);let s=this.s;if(this.U&&(s?(s=hM(s),fM(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=YM(this,r,e),n=vr(this.I),at(n,"RID",t),at(n,"CVER",22),this.F&&at(n,"X-HTTP-Session-Id",this.F),xc(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(qM(s)))+"&"+e:this.o&&u0(n,this.o,s)),l0(this.i,r),this.bb&&at(n,"TYPE","init"),this.P?(at(n,"$req",e),at(n,"SID","null"),r.aa=!0,bm(r,n,null)):bm(r,n,e),this.H=2}}else this.H==3&&(t?Ky(this,t):this.j.length==0||UM(this.i)||Ky(this))};function Ky(t,e){var n;e?n=e.m:n=t.W++;const i=vr(t.I);at(i,"SID",t.K),at(i,"RID",n),at(i,"AID",t.V),xc(t,i),t.o&&t.s&&u0(i,t.o,t.s),n=new vc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=YM(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),l0(t.i,n),bm(n,i,e)}function xc(t,e){t.na&&Xg(t.na,function(n,i){at(e,i,n)}),t.h&&LM({},function(n,i){at(e,i,n)})}function YM(t,e,n){n=Math.min(t.j.length,n);var i=t.h?un(t.h.Va,t.h,t):null;e:{var r=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=r[l].g;const u=r[l].map;if(c-=s,0>c)s=Math.max(0,r[l].g-100),a=!1;else try{o4(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function ZM(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ql||xM(),Xl||(ql(),Xl=!0),e0.add(e,t),t.A=0}}function h0(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=mc(un(t.Ma,t),eE(t,t.A)),t.A++,!0)}he.Ma=function(){if(this.u=null,JM(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=mc(un(this.jb,this),t)}};he.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,xn(10),ah(this),JM(this))};function f0(t){t.B!=null&&(Le.clearTimeout(t.B),t.B=null)}function JM(t){t.g=new vc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=vr(t.wa);at(e,"RID","rpc"),at(e,"SID",t.K),at(e,"AID",t.V),at(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&at(e,"TO",t.qa),at(e,"TYPE","xmlhttp"),xc(t,e),t.o&&t.s&&u0(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ih(vr(e)),n.s=null,n.S=!0,AM(n,t)}he.ib=function(){this.v!=null&&(this.v=null,ah(this),h0(this),xn(19))};function hd(t){t.v!=null&&(Le.clearTimeout(t.v),t.v=null)}function QM(t,e){var n=null;if(t.g==e){hd(t),f0(t),t.g=null;var i=2}else if(Cm(t.i,e))n=e.F,BM(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;i=i0(),Zt(i,new TM(i,n)),lh(t)}else ZM(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(i==1&&f4(t,e)||i==2&&h0(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Rs(t,5);break;case 4:Rs(t,10);break;case 3:Rs(t,6);break;default:Rs(t,2)}}}function eE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Rs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=un(t.pb,t);n||(n=new Fs("//www.google.com/images/cleardot.gif"),Le.location&&Le.location.protocol=="http"||ud(n,"https"),ih(n)),a4(n.toString(),i)}else xn(2);t.H=0,t.h&&t.h.za(e),tE(t),KM(t)}he.pb=function(t){t?(this.l.info("Successfully pinged google.com"),xn(2)):(this.l.info("Failed to ping google.com"),xn(1))};function tE(t){if(t.H=0,t.ma=[],t.h){const e=VM(t.i);(e.length!=0||t.j.length!=0)&&(Uy(t.ma,e),Uy(t.ma,t.j),t.i.i.length=0,$g(t.j),t.j.length=0),t.h.ya()}}function nE(t,e,n){var i=n instanceof Fs?vr(n):new Fs(n);if(i.g!="")e&&(i.g=e+"."+i.g),dd(i,i.m);else{var r=Le.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Fs(null);i&&ud(s,i),e&&(s.g=e),r&&dd(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&at(i,n,e),at(i,"VER",t.ra),xc(t,i),i}function iE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new _t(new rh({ob:!0})):new _t(t.va),e.Oa(t.J),e}he.isActive=function(){return!!this.h&&this.h.isActive(this)};function rE(){}he=rE.prototype;he.Ba=function(){};he.Aa=function(){};he.za=function(){};he.ya=function(){};he.isActive=function(){return!0};he.Va=function(){};function di(t,e){Ht.call(this),this.g=new XM(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Wl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Wl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ba(this)}Gt(di,Ht);di.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;xn(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=nE(t,null,t.Y),lh(t)};di.prototype.close=function(){d0(this.g)};di.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qg(t),t=n);e.j.push(new n4(e.fb++,t)),e.H==3&&lh(e)};di.prototype.N=function(){this.g.h=null,delete this.j,d0(this.g),delete this.g,di.$.N.call(this)};function sE(t){o0.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Gt(sE,o0);function oE(){a0.call(this),this.status=1}Gt(oE,a0);function ba(t){this.g=t}Gt(ba,rE);ba.prototype.Ba=function(){Zt(this.g,"a")};ba.prototype.Aa=function(t){Zt(this.g,new sE(t))};ba.prototype.za=function(t){Zt(this.g,new oE)};ba.prototype.ya=function(){Zt(this.g,"b")};function p4(){this.blockSize=-1}function Wi(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Gt(Wi,p4);Wi.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Gf(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}Wi.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=n;)Gf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){Gf(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){Gf(this,i),r=0;break}}this.h=r,this.i+=e};Wi.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function et(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=t[r]|0;i&&s==e||(n[r]=s,i=!1)}this.g=n}var m4={};function p0(t){return-128<=t&&128>t?SO(t,function(e){return new et([e|0],0>e?-1:0)}):new et([t|0],0>t?-1:0)}function Fi(t){if(isNaN(t)||!isFinite(t))return Qo;if(0>t)return jt(Fi(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Am;return new et(e,0)}function aE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return jt(aE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Fi(Math.pow(e,8)),i=Qo,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=Fi(Math.pow(e,s)),i=i.R(s).add(Fi(o))):(i=i.R(n),i=i.add(Fi(o)))}return i}var Am=4294967296,Qo=p0(0),Im=p0(1),Yy=p0(16777216);he=et.prototype;he.ea=function(){if(si(this))return-jt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Am+i)*e,e*=Am}return t};he.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ar(this))return"0";if(si(this))return"-"+jt(this).toString(t);for(var e=Fi(Math.pow(t,6)),n=this,i="";;){var r=pd(n,e).g;n=fd(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,ar(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};he.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ar(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function si(t){return t.h==-1}he.X=function(t){return t=fd(this,t),si(t)?-1:ar(t)?0:1};function jt(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new et(n,~t.h).add(Im)}he.abs=function(){return si(this)?jt(this):this};he.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(t.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new et(n,n[n.length-1]&-2147483648?-1:0)};function fd(t,e){return t.add(jt(e))}he.R=function(t){if(ar(this)||ar(t))return Qo;if(si(this))return si(t)?jt(this).R(jt(t)):jt(jt(this).R(t));if(si(t))return jt(this.R(jt(t)));if(0>this.X(Yy)&&0>t.X(Yy))return Fi(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(r)>>>16,l=t.D(r)&65535;n[2*i+2*r]+=o*l,du(n,2*i+2*r),n[2*i+2*r+1]+=s*l,du(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,du(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,du(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new et(n,0)};function du(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function qa(t,e){this.g=t,this.h=e}function pd(t,e){if(ar(e))throw Error("division by zero");if(ar(t))return new qa(Qo,Qo);if(si(t))return e=pd(jt(t),e),new qa(jt(e.g),jt(e.h));if(si(e))return e=pd(t,jt(e)),new qa(jt(e.g),e.h);if(30<t.g.length){if(si(t)||si(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Im,i=e;0>=i.X(t);)n=Zy(n),i=Zy(i);var r=Eo(n,1),s=Eo(i,1);for(i=Eo(i,2),n=Eo(n,2);!ar(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=Eo(i,1),n=Eo(n,1)}return e=fd(t,r.R(e)),new qa(r,e)}for(r=Qo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=Fi(n),o=s.R(e);si(o)||0<o.X(t);)n-=i,s=Fi(n),o=s.R(e);ar(s)&&(s=Im),r=r.add(s),t=fd(t,o)}return new qa(r,t)}he.gb=function(t){return pd(this,t).h};he.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new et(n,this.h&t.h)};he.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new et(n,this.h|t.h)};he.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new et(n,this.h^t.h)};function Zy(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new et(n,t.h)}function Eo(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new et(r,t.h)}di.prototype.send=di.prototype.u;di.prototype.open=di.prototype.m;di.prototype.close=di.prototype.close;r0.NO_ERROR=0;r0.TIMEOUT=8;r0.HTTP_ERROR=6;GO.COMPLETE="complete";WO.EventType=gc;gc.OPEN="a";gc.CLOSE="b";gc.ERROR="c";gc.MESSAGE="d";Ht.prototype.listen=Ht.prototype.O;_t.prototype.listenOnce=_t.prototype.P;_t.prototype.getLastError=_t.prototype.Sa;_t.prototype.getLastErrorCode=_t.prototype.Ia;_t.prototype.getStatus=_t.prototype.da;_t.prototype.getResponseJson=_t.prototype.Wa;_t.prototype.getResponseText=_t.prototype.ja;_t.prototype.send=_t.prototype.ha;_t.prototype.setWithCredentials=_t.prototype.Oa;Wi.prototype.digest=Wi.prototype.l;Wi.prototype.reset=Wi.prototype.reset;Wi.prototype.update=Wi.prototype.j;et.prototype.add=et.prototype.add;et.prototype.multiply=et.prototype.R;et.prototype.modulo=et.prototype.gb;et.prototype.compare=et.prototype.X;et.prototype.toNumber=et.prototype.ea;et.prototype.toString=et.prototype.toString;et.prototype.getBits=et.prototype.D;et.fromNumber=Fi;et.fromString=aE;var g4=et;const Jy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}sn.UNAUTHENTICATED=new sn(null),sn.GOOGLE_CREDENTIALS=new sn("google-credentials-uid"),sn.FIRST_PARTY=new sn("first-party-uid"),sn.MOCK_USER=new sn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wc="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new $d("@firebase/firestore");function Hn(t,...e){if(ma.logLevel<=Je.DEBUG){const n=e.map(g0);ma.debug(`Firestore (${wc}): ${t}`,...n)}}function m0(t,...e){if(ma.logLevel<=Je.ERROR){const n=e.map(g0);ma.error(`Firestore (${wc}): ${t}`,...n)}}function v4(t,...e){if(ma.logLevel<=Je.WARN){const n=e.map(g0);ma.warn(`Firestore (${wc}): ${t}`,...n)}}function g0(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t="Unexpected state"){const e=`FIRESTORE (${wc}) INTERNAL ASSERTION FAILED: `+t;throw m0(e),new Error(e)}function Pm(t,e){t||v0()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ln extends Ti{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(sn.UNAUTHENTICATED))}shutdown(){}}class y4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class x4{constructor(e){this.t=e,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new ea;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ea,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{Hn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Hn("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ea)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Hn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Pm(typeof i.accessToken=="string"),new lE(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pm(e===null||typeof e=="string"),new sn(e)}}class w4{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class S4{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new w4(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(sn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class M4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class E4{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=s=>{s.error!=null&&Hn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,Hn("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{Hn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):Hn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pm(typeof n.token=="string"),this.T=n.token,new M4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=b4(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function cE(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e,n,i,r,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class md{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new md("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof md&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qy,$e;($e=Qy||(Qy={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new g4([4294967295,4294967295],0);function Wf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e,n,i=1e3,r=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=i,this.bo=r,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-i);r>0&&Hn("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new ea,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new _0(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ln(an.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function I4(t,e){if(m0("AsyncQueue",`${e}: ${t}`),cE(t))return new ln(an.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=sn.UNAUTHENTICATED,this.clientId=T4.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{Hn("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(Hn("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ln(an.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ea;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=I4(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex=new Map;function R4(t,e,n,i){if(e===!0&&i===!0)throw new ln(an.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function L4(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":v0()}function D4(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ln(an.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=L4(t);throw new ln(an.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ln(an.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ln(an.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}R4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ln(an.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ln(an.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ln(an.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,i}}class dE{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tx({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ln(an.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ln(an.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tx(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _4;switch(n.type){case"firstParty":return new S4(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ln(an.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ex.get(e);n&&(Hn("ComponentProvider","Removing Datastore"),ex.delete(e),n.terminate())}(this),Promise.resolve()}}function k4(t,e,n,i={}){var r;const s=(t=D4(t,dE))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&v4("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=sn.MOCK_USER;else{a=gD(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new ln(an.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new sn(c)}t._authCredentials=new y4(new lE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new A4(this,"async_queue_retry"),this.Xc=()=>{const n=Wf();n&&Hn("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Wf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Wf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new ea;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!cE(e))throw e;Hn("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw m0("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(e,n,i){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=_0.createAndSchedule(this,e,n,i,s=>this.na(s));return this.zc.push(r),r}Zc(){this.Wc&&v0()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class O4 extends dE{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new N4,this._persistenceKey=r?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||U4(this),this._firestoreClient.terminate()}}function F4(t,e){const n=typeof t=="object"?t:Ug(),i=typeof t=="string"?t:e||"(default)",r=so(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=pD("firestore");s&&k4(r,...s)}return r}function U4(t){var e,n,i;const r=t._freezeSettings(),s=function(o,a,l,c){return new C4(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,uE(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new P4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}(function(t,e=!0){(function(n){wc=n})(Sa),Gi(new Ei("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new O4(new x4(n.getProvider("auth-internal")),new E4(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new ln(an.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new md(a.options.projectId,l)}(s,i),s);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),li(Jy,"3.13.0",t),li(Jy,"3.13.0","esm2017")})();function y0(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function hE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const z4=hE,fE=new ro("auth","Firebase",hE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=new $d("@firebase/auth");function B4(t,...e){gd.logLevel<=Je.WARN&&gd.warn(`Auth (${Sa}): ${t}`,...e)}function Au(t,...e){gd.logLevel<=Je.ERROR&&gd.error(`Auth (${Sa}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t,...e){throw x0(t,...e)}function Vi(t,...e){return x0(t,...e)}function V4(t,e,n){const i=Object.assign(Object.assign({},z4()),{[e]:n});return new ro("auth","Firebase",i).create(e,{appName:t.name})}function x0(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return fE.create(t,...e)}function Re(t,e,...n){if(!t)throw x0(e,...n)}function lr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Au(e),new Error(e)}function _r(t,e){t||lr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function H4(){return nx()==="http:"||nx()==="https:"}function nx(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(H4()||PS()||"connection"in navigator)?navigator.onLine:!0}function W4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n){this.shortDelay=e,this.longDelay=n,_r(n>e,"Short delay should be less than long delay!"),this.isMobile=vD()||_D()}get(){return G4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t,e){_r(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $4=new Sc(3e4,6e4);function Ta(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ca(t,e,n,i,r={}){return mE(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=hc(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),pE.fetch()(gE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function mE(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},j4),e);try{const r=new q4(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw hu(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw V4(t,u,c);bi(t,u)}}catch(r){if(r instanceof Ti)throw r;bi(t,"network-request-failed",{message:String(r)})}}async function Mc(t,e,n,i,r={}){const s=await Ca(t,e,n,i,r);return"mfaPendingCredential"in s&&bi(t,"multi-factor-auth-required",{_serverResponse:s}),s}function gE(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?w0(t.config,r):`${t.config.apiScheme}://${r}`}class q4{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Vi(this.auth,"network-request-failed")),$4.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hu(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Vi(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X4(t,e){return Ca(t,"POST","/v1/accounts:delete",e)}async function K4(t,e){return Ca(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Y4(t,e=!1){const n=ji(t),i=await n.getIdToken(e),r=S0(i);Re(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s?.sign_in_provider;return{claims:r,token:i,authTime:vl(jf(r.auth_time)),issuedAtTime:vl(jf(r.iat)),expirationTime:vl(jf(r.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function jf(t){return Number(t)*1e3}function S0(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Au("JWT malformed, contained fewer than 3 sections"),null;try{const r=TS(n);return r?JSON.parse(r):(Au("Failed to decode base64 JWT payload"),null)}catch(r){return Au("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Z4(t){const e=S0(t);return Re(e,"internal-error"),Re(typeof e.exp<"u","internal-error"),Re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ql(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ti&&J4(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function J4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vl(this.lastLoginAt),this.creationTime=vl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vd(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Ql(t,K4(n,{idToken:i}));Re(r?.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?nF(s.providerUserInfo):[],a=tF(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!a?.length,u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vE(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function eF(t){const e=ji(t);await vd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tF(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function nF(t){return t.map(e=>{var{providerId:n}=e,i=y0(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iF(t,e){const n=await mE(t,{},async()=>{const i=hc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=gE(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pE.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Re(e.idToken,"internal-error"),Re(typeof e.idToken<"u","internal-error"),Re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Z4(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await iF(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new ec;return i&&(Re(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(Re(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(Re(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ec,this.toJSON())}_performRefresh(){return lr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){Re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Us{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=y0(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ql(this,this.stsTokenManager.getToken(this.auth,e));return Re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Y4(this,e)}reload(){return eF(this)}_assign(e){this!==e&&(Re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Us(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await vd(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ql(this,X4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,f=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:S,isAnonymous:x,providerData:C,stsTokenManager:P}=n;Re(_&&P,e,"internal-error");const w=ec.fromJSON(this.name,P);Re(typeof _=="string",e,"internal-error"),br(d,e.name),br(h,e.name),Re(typeof S=="boolean",e,"internal-error"),Re(typeof x=="boolean",e,"internal-error"),br(m,e.name),br(y,e.name),br(f,e.name),br(p,e.name),br(g,e.name),br(v,e.name);const T=new Us({uid:_,auth:e,email:h,emailVerified:S,displayName:d,isAnonymous:x,photoURL:y,phoneNumber:m,tenantId:f,stsTokenManager:w,createdAt:g,lastLoginAt:v});return C&&Array.isArray(C)&&(T.providerData=C.map(R=>Object.assign({},R))),p&&(T._redirectEventId=p),T}static async _fromIdTokenResponse(e,n,i=!1){const r=new ec;r.updateFromServerResponse(n);const s=new Us({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await vd(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=new Map;function cr(t){_r(t instanceof Function,"Expected a class definition");let e=ix.get(t);return e?(_r(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ix.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_E.type="NONE";const rx=_E;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t,e,n){return`firebase:${t}:${e}:${n}`}class ta{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Iu(this.userKey,r.apiKey,s),this.fullPersistenceKey=Iu("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Us._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ta(cr(rx),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||cr(rx);const o=Iu(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Us._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ta(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ta(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ME(e))return"Blackberry";if(EE(e))return"Webos";if(M0(e))return"Safari";if((e.includes("chrome/")||xE(e))&&!e.includes("edge/"))return"Chrome";if(SE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if(i?.length===2)return i[1]}return"Other"}function yE(t=fn()){return/firefox\//i.test(t)}function M0(t=fn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xE(t=fn()){return/crios\//i.test(t)}function wE(t=fn()){return/iemobile/i.test(t)}function SE(t=fn()){return/android/i.test(t)}function ME(t=fn()){return/blackberry/i.test(t)}function EE(t=fn()){return/webos/i.test(t)}function ch(t=fn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rF(t=fn()){var e;return ch(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sF(){return yD()&&document.documentMode===10}function bE(t=fn()){return ch(t)||SE(t)||EE(t)||ME(t)||/windows phone/i.test(t)||wE(t)}function oF(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(t,e=[]){let n;switch(t){case"Browser":n=sx(fn());break;case"Worker":n=`${sx(fn())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sa}/${i}`}async function CE(t,e){return Ca(t,"GET","/v2/recaptchaConfig",Ta(t,e))}function ox(t){return t!==void 0&&t.enterprise!==void 0}class AE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aF(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function IE(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Vi("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",aF().appendChild(i)})}function lF(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cF="https://www.google.com/recaptcha/enterprise.js?render=",uF="recaptcha-enterprise",dF="NO_RECAPTCHA";class PE{constructor(e){this.type=uF,this.auth=Aa(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{CE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new AE(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;ox(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(dF)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&ox(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}IE(cF+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function _d(t,e,n,i=!1){const r=new PE(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ax(this),this.idTokenSubscription=new ax(this),this.beforeStateQueue=new hF(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cr(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await ta.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vd(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=W4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ji(e):null;return n&&Re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cr(e))})}async initializeRecaptchaConfig(){const e=await CE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new AE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new PE(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ro("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cr(e)||this._popupRedirectResolver;Re(n,this,"argument-error"),this.redirectPersistenceManager=await ta.create(this,[cr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Re(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=TE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&B4(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Aa(t){return ji(t)}class ax{constructor(e){this.auth=e,this.observer=null,this.addObserver=bD(n=>this.observer=n)}get next(){return Re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pF(t,e){const n=so(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Hl(s,e??{}))return r;bi(r,"already-initialized")}return n.initialize({options:e})}function mF(t,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(cr);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function gF(t,e,n){const i=Aa(t);Re(i._canInitEmulator,i,"emulator-config-failed"),Re(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!n?.disableWarnings,s=RE(e),{host:o,port:a}=vF(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||_F()}function RE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vF(t){const e=RE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:lx(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:lx(o)}}}function lx(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _F(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lr("not implemented")}_getIdTokenResponse(e){return lr("not implemented")}_linkToIdToken(e,n){return lr("not implemented")}_getReauthenticationResolver(e){return lr("not implemented")}}async function yF(t,e){return Ca(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $f(t,e){return Mc(t,"POST","/v1/accounts:signInWithPassword",Ta(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xF(t,e){return Mc(t,"POST","/v1/accounts:signInWithEmailLink",Ta(t,e))}async function wF(t,e){return Mc(t,"POST","/v1/accounts:signInWithEmailLink",Ta(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends E0{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new tc(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new tc(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await _d(e,i,"signInWithPassword");return $f(e,r)}else return $f(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await _d(e,i,"signInWithPassword");return $f(e,s)}else return Promise.reject(r)});case"emailLink":return xF(e,{email:this._email,oobCode:this._password});default:bi(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return yF(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wF(e,{idToken:n,email:this._email,oobCode:this._password});default:bi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(t,e){return Mc(t,"POST","/v1/accounts:signInWithIdp",Ta(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SF="http://localhost";class Js extends E0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Js(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=y0(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Js(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return na(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,na(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,na(e,n)}buildRequest(){const e={requestUri:SF,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hc(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MF(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function EF(t){const e=tl(nl(t)).link,n=e?tl(nl(e)).deep_link_id:null,i=tl(nl(t)).deep_link_id;return(i?tl(nl(i)).link:null)||i||n||e||t}class b0{constructor(e){var n,i,r,s,o,a;const l=tl(nl(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=MF((r=l.mode)!==null&&r!==void 0?r:null);Re(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=EF(e);try{return new b0(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(){this.providerId=Ia.PROVIDER_ID}static credential(e,n){return tc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=b0.parseLink(n);return Re(i,"argument-error"),tc._fromEmailAndCode(e,i.code,i.tenantId)}}Ia.PROVIDER_ID="password";Ia.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ia.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends LE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Ec{constructor(){super("facebook.com")}static credential(e){return Js._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Ec{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Js._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Rr.credential(n,i)}catch{return null}}}Rr.GOOGLE_SIGN_IN_METHOD="google.com";Rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Ec{constructor(){super("github.com")}static credential(e){return Js._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lr.credential(e.oauthAccessToken)}catch{return null}}}Lr.GITHUB_SIGN_IN_METHOD="github.com";Lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Ec{constructor(){super("twitter.com")}static credential(e,n){return Js._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Dr.credential(n,i)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qf(t,e){return Mc(t,"POST","/v1/accounts:signUp",Ta(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Us._fromIdTokenResponse(e,i,r),o=cx(i);return new Qs({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=cx(i);return new Qs({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function cx(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd extends Ti{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,yd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new yd(e,n,i,r)}}function DE(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?yd._fromErrorAndOperation(t,s,e,i):s})}async function bF(t,e,n=!1){const i=await Ql(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qs._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TF(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Ql(t,DE(i,r,e,t),n);Re(s.idToken,i,"internal-error");const o=S0(s.idToken);Re(o,i,"internal-error");const{sub:a}=o;return Re(t.uid===a,i,"user-mismatch"),Qs._forOperation(t,r,s)}catch(s){throw s?.code==="auth/user-not-found"&&bi(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(t,e,n=!1){const i="signIn",r=await DE(t,i,e),s=await Qs._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function CF(t,e){return kE(Aa(t),e)}async function AF(t,e,n){var i;const r=Aa(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await _d(r,s,"signUpPassword");o=qf(r,c)}else o=qf(r,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await _d(r,s,"signUpPassword");return qf(r,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await Qs._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function IF(t,e,n){return CF(ji(t),Ia.credential(e,n))}function PF(t,e,n,i){return ji(t).onIdTokenChanged(e,n,i)}function RF(t,e,n){return ji(t).beforeAuthStateChanged(e,n)}function LF(t,e,n,i){return ji(t).onAuthStateChanged(e,n,i)}const xd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xd,"1"),this.storage.removeItem(xd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DF(){const t=fn();return M0(t)||ch(t)}const kF=1e3,NF=10;class OE extends NE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DF()&&oF(),this.fallbackToPolling=bE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);sF()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,NF):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},kF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}OE.type="LOCAL";const OF=OE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE extends NE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}FE.type="SESSION";const UE=FE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FF(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new uh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await FF(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UF{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=T0("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(){return window}function zF(t){Hi().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(){return typeof Hi().WorkerGlobalScope<"u"&&typeof Hi().importScripts=="function"}async function BF(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VF(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function HF(){return zE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="firebaseLocalStorageDb",GF=1,wd="firebaseLocalStorage",VE="fbase_key";class bc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dh(t,e){return t.transaction([wd],e?"readwrite":"readonly").objectStore(wd)}function WF(){const t=indexedDB.deleteDatabase(BE);return new bc(t).toPromise()}function Lm(){const t=indexedDB.open(BE,GF);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(wd,{keyPath:VE})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(wd)?e(i):(i.close(),await WF(),e(await Lm()))})})}async function ux(t,e,n){const i=dh(t,!0).put({[VE]:e,value:n});return new bc(i).toPromise()}async function jF(t,e){const n=dh(t,!1).get(e),i=await new bc(n).toPromise();return i===void 0?null:i.value}function dx(t,e){const n=dh(t,!0).delete(e);return new bc(n).toPromise()}const $F=800,qF=3;class HE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>qF)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uh._getInstance(HF()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BF(),!this.activeServiceWorker)return;this.sender=new UF(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VF()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lm();return await ux(e,xd,"1"),await dx(e,xd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ux(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>jF(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dx(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=dh(r,!1).getAll();return new bc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$F)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HE.type="LOCAL";const XF=HE;new Sc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KF(t,e){return e?cr(e):(Re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0 extends E0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return na(e,this._buildIdpRequest())}_linkToIdToken(e,n){return na(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return na(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YF(t){return kE(t.auth,new C0(t),t.bypassAuthState)}function ZF(t){const{auth:e,user:n}=t;return Re(n,e,"internal-error"),TF(n,new C0(t),t.bypassAuthState)}async function JF(t){const{auth:e,user:n}=t;return Re(n,e,"internal-error"),bF(n,new C0(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YF;case"linkViaPopup":case"linkViaRedirect":return JF;case"reauthViaPopup":case"reauthViaRedirect":return ZF;default:bi(this.auth,"internal-error")}}resolve(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QF=new Sc(2e3,1e4);class Ho extends GE{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Ho.currentPopupAction&&Ho.currentPopupAction.cancel(),Ho.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Re(e,this.auth,"internal-error"),e}async onExecution(){_r(this.filter.length===1,"Popup operations only handle one event");const e=T0();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ho.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QF.get())};e()}}Ho.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eU="pendingRedirect",Pu=new Map;class tU extends GE{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Pu.get(this.auth._key());if(!e){try{const i=await nU(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Pu.set(this.auth._key(),e)}return this.bypassAuthState||Pu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nU(t,e){const n=sU(e),i=rU(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function iU(t,e){Pu.set(t._key(),e)}function rU(t){return cr(t._redirectPersistence)}function sU(t){return Iu(eU,t.config.apiKey,t.name)}async function oU(t,e,n=!1){const i=Aa(t),r=KF(i,e),o=await new tU(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aU=10*60*1e3;class lU{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cU(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!WE(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Vi(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aU&&this.cachedEventUids.clear(),this.cachedEventUids.has(hx(e))}saveEventToCache(e){this.cachedEventUids.add(hx(e)),this.lastProcessedEventTime=Date.now()}}function hx(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function WE({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function cU(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uU(t,e={}){return Ca(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dU=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hU=/^https?/;async function fU(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uU(t);for(const n of e)try{if(pU(n))return}catch{}bi(t,"unauthorized-domain")}function pU(t){const e=Rm(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!hU.test(n))return!1;if(dU.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mU=new Sc(3e4,6e4);function fx(){const t=Hi().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gU(t){return new Promise((e,n)=>{var i,r,s;function o(){fx(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fx(),n(Vi(t,"network-request-failed"))},timeout:mU.get()})}if(!((r=(i=Hi().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Hi().gapi)===null||s===void 0)&&s.load)o();else{const a=lF("iframefcb");return Hi()[a]=()=>{gapi.load?o():n(Vi(t,"network-request-failed"))},IE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ru=null,e})}let Ru=null;function vU(t){return Ru=Ru||gU(t),Ru}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _U=new Sc(5e3,15e3),yU="__/auth/iframe",xU="emulator/auth/iframe",wU={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SU=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MU(t){const e=t.config;Re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?w0(e,xU):`https://${t.config.authDomain}/${yU}`,i={apiKey:e.apiKey,appName:t.name,v:Sa},r=SU.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${hc(i).slice(1)}`}async function EU(t){const e=await vU(t),n=Hi().gapi;return Re(n,t,"internal-error"),e.open({where:document.body,url:MU(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wU,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Vi(t,"network-request-failed"),a=Hi().setTimeout(()=>{s(o)},_U.get());function l(){Hi().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bU={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TU=500,CU=600,AU="_blank",IU="http://localhost";class px{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PU(t,e,n,i=TU,r=CU){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bU),{width:i.toString(),height:r.toString(),top:s,left:o}),c=fn().toLowerCase();n&&(a=xE(c)?AU:n),yE(c)&&(e=e||IU,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,y])=>`${h}${m}=${y},`,"");if(rF(c)&&a!=="_self")return RU(e||"",a),new px(null);const d=window.open(e||"",a,u);Re(d,t,"popup-blocked");try{d.focus()}catch{}return new px(d)}function RU(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LU="__/auth/handler",DU="emulator/auth/handler",kU=encodeURIComponent("fac");async function mx(t,e,n,i,r,s){Re(t.config.authDomain,t,"auth-domain-config-required"),Re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Sa,eventId:r};if(e instanceof LE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ED(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof Ec){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${kU}=${encodeURIComponent(l)}`:"";return`${NU(t)}?${hc(a).slice(1)}${c}`}function NU({config:t}){return t.emulator?w0(t,DU):`https://${t.authDomain}/${LU}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="webStorageSupport";class OU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=UE,this._completeRedirectFn=oU,this._overrideRedirectResult=iU}async _openPopup(e,n,i,r){var s;_r((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mx(e,n,i,Rm(),r);return PU(e,o,T0())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await mx(e,n,i,Rm(),r);return zF(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(_r(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await EU(e),i=new lU(e);return n.register("authEvent",r=>(Re(r?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xf,{type:Xf},r=>{var s;const o=(s=r?.[0])===null||s===void 0?void 0:s[Xf];o!==void 0&&n(!!o),bi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fU(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bE()||M0()||ch()}}const FU=OU;var gx="@firebase/auth",vx="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zU(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function BU(t){Gi(new Ei("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;Re(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TE(t)},c=new fF(i,r,s,l);return mF(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Gi(new Ei("auth-internal",e=>{const n=Aa(e.getProvider("auth").getImmediate());return(i=>new UU(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),li(gx,vx,zU(t)),li(gx,vx,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VU=5*60,HU=IS("authIdTokenMaxAge")||VU;let _x=null;const GU=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>HU)return;const r=n?.token;_x!==r&&(_x=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function WU(t=Ug()){const e=so(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pF(t,{popupRedirectResolver:FU,persistence:[XF,OF,UE]}),i=IS("authTokenSyncURL");if(i){const s=GU(i);RF(n,s,()=>s(n.currentUser)),PF(n,o=>s(o))}const r=CS("auth");return r&&gF(n,`http://${r}`),n}BU("Browser");const jU={apiKey:"AIzaSyCfmgQo7ftZ_ScvGCWecO57GFNLZtRwA3c",authDomain:"builder-3d.firebaseapp.com",projectId:"builder-3d",storageBucket:"builder-3d.appspot.com",messagingSenderId:"1073318516303",appId:"1:1073318516303:web:8a3768749bd8c199177c3a",measurementId:"G-W0DF5TN6QP"},A0=NS(jU);dO(A0);F4(A0);const I0=WU(A0);async function $U(t,e){return new Promise(n=>{AF(I0,t,e).then(i=>{const r=i.user;console.log("Signed in"),R0(!0),localStorage.setItem("isLogined","true"),n(r)}).catch(i=>{i.code;const r=i.message;console.log(r),n(r)})})}async function qU(t,e){return new Promise(n=>{IF(I0,t,e).then(i=>{const r=i.user;console.log("Signed in"),R0(!0),localStorage.setItem("isLogined","true"),n(r)}).catch(i=>{i.code;const r=i.message;console.log(r),n(r)})})}async function XU(){LF(I0,t=>{t?(t.uid,R0(!0),localStorage.setItem("isLogined","true"),console.log("Signed in")):console.log("Signed out")})}const P0=()=>I("header",{className:" h-16 w-full bg-fourthcolor fixed",children:fe("div",{className:" h-full w-full grid grid-cols-3 gap-8 text-firstcolor",children:[I("div",{children:fe(Ja,{className:"h-full flex justify-center items-center mr-12 cursor-pointer",to:"/",children:[I("img",{src:"https://raw.githubusercontent.com/Droxus/Builder3D/adf3374aa802ac59bf64cb0dbfbbd51f2dce38a0/src/assets/img/whiteLogo.svg",className:" w-12"}),I("label",{className:" w-36 text-2xl font-medium cursor-pointer",children:"Builder 3D"})]})}),I("div",{className:" flex items-center justify-evenly px-12",children:fe("div",{className:" flex h-10 w-full border-firstcolor rounded-none border-2",children:[I("button",{children:I("img",{className:" w-7",src:"https://raw.githubusercontent.com/Droxus/Builder3D/adf3374aa802ac59bf64cb0dbfbbd51f2dce38a0/src/assets/img/crossScenes.svg"})}),I("input",{className:" w-full bg-transparent text-center outline-none",placeholder:"Find Scene",type:"text"}),I("button",{children:I("img",{className:" w-7",src:"https://raw.githubusercontent.com/Droxus/Builder3D/adf3374aa802ac59bf64cb0dbfbbd51f2dce38a0/src/assets/img/searchScenes.svg"})})]})}),fe("div",{className:" flex items-center justify-evenly",children:[I("button",{className:" w-16 h-10 border-firstcolor rounded-none border-2",children:I(Ja,{className:" flex w-16 h-10 items-center justify-center text-xl font-normal",to:"/Builder3D/help",children:"?"})}),nc?I("button",{className:" w-40 h-10 border-firstcolor rounded-none border-2",children:I(Ja,{className:" flex w-40 h-10 items-center justify-center text-lg font-normal",to:"/Builder3D/scene",children:"Create Scene"})}):I("button",{className:" w-40 h-10 border-firstcolor rounded-none border-2",onClick:()=>{document.querySelector(".regBlock")?.classList.remove("hidden"),document.querySelector(".regBlock")?.classList.add("grid")},children:I("label",{className:" flex w-40 h-10 items-center justify-center text-lg font-normal",children:"Create Scene"})}),nc?I("button",{className:" w-40 h-10 border-firstcolor rounded-none border-2",children:I(Ja,{className:" flex w-40 h-10 items-center justify-center text-lg font-normal",to:"/Builder3D/profile",children:"Your Profile"})}):I("button",{className:" w-40 h-10 border-firstcolor rounded-none border-2",onClick:()=>{document.querySelector(".regBlock")?.classList.remove("hidden"),document.querySelector(".regBlock")?.classList.add("grid")},children:I("label",{className:" flex w-40 h-10 items-center justify-center text-lg font-normal",children:"Your Profile"})})]})]})});function yx(){const t=document.querySelector(".signInBlock"),e=document.querySelector(".signUpBlock");e?.classList.contains("hidden")?(t?.classList.add("hidden"),e?.classList.remove("hidden"),t?.classList.remove("grid"),e?.classList.add("grid")):(e?.classList.add("hidden"),t?.classList.remove("hidden"),t?.classList.add("grid"),e?.classList.remove("grid"))}function KU(){const t=document.querySelector(".signInLogin").value+"@example.com",e=document.querySelector(".signInPassword").value;qU(t,e).then(n=>{console.log(n),nc?(document.querySelector(".regBlock")?.classList.remove("grid"),document.querySelector(".regBlock")?.classList.add("hidden"),location.reload()):jE(String(n))})}function YU(){const t=document.querySelector(".signUpLogin").value+"@example.com",e=document.querySelector(".signUpPassword").value;$U(t,e).then(n=>{console.log(n),nc?(document.querySelector(".regBlock")?.classList.remove("grid"),document.querySelector(".regBlock")?.classList.add("hidden"),location.reload()):jE(String(n))})}function jE(t){const e=Array.from(document.querySelectorAll(".errorLabels")),n=t.indexOf("/"),i=t.lastIndexOf(")"),r=t.slice(n+1,i);e.forEach(s=>{s.textContent=r})}const ZU=()=>I("div",{className:" regBlock absolute top-0 left-0 z-200 w-full h-full place-content-center bg-firstcolor hidden",children:fe("div",{className:" w-500 h-600 border-4 border-fourthcolor",children:[fe("div",{className:" signInBlock w-full h-full grid px-20 ",children:[I("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Sign In"}),I("div",{className:" absolute w-80 h-10 ml-20 px-3 py-2 mt-16 text-red-400",children:I("label",{className:" errorLabels w-full h-full"})}),I("label",{className:" px-12 text-thirdcolor text-base flex justify-center items-center",children:"Login"}),I("input",{type:"text",className:" signInLogin border-2 border-fourthcolor h-10"}),I("label",{className:" px-12 text-thirdcolor text-base flex justify-center items-center",children:"Password"}),I("input",{type:"password",className:" signInPassword border-2 border-fourthcolor h-10"}),fe("div",{className:" flex justify-between py-8",children:[I("button",{className:" w-36 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:yx,children:"Sign Up"}),I("button",{className:" w-36 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:KU,children:"Sign In"})]})]}),fe("div",{className:" signUpBlock w-full h-full px-20 hidden",children:[I("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Sign Up"}),I("div",{className:" absolute w-80 h-10 ml-20 px-3 py-2 mt-16 text-red-400",children:I("label",{className:" errorLabels w-full h-full"})}),I("label",{className:" px-12 text-thirdcolor text-base flex justify-center items-center",children:"Login"}),I("input",{type:"text",className:" signUpLogin border-2 border-fourthcolor h-10"}),I("label",{className:" px-12 text-thirdcolor text-base flex justify-center items-center",children:"Password"}),I("input",{type:"password",className:" signUpPassword border-2 border-fourthcolor h-10"}),fe("div",{className:" flex justify-between py-8",children:[I("button",{className:" w-36 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:yx,children:"Sign In"}),I("button",{className:" w-36 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:YU,children:"Sign Up"})]})]})]})}),$E=[{id:2130,name:"asdsa",rating:3.4,author:"asd"},{id:7655,name:"opa",rating:4.2,author:"asd"}];function qE(t){console.log("oap")}function XE(t){console.log("oap")}const KE=({scenes:t,scenePick:e,profilePick:n})=>I("main",{className:" max-h-max w-full grid grid-cols-3 gap-8 grid-flow-row text-firstcolor py-24 px-8",children:t.map(i=>fe("div",{className:" border-fourthcolor rounded-none border-2 aspect-video grid",children:[I("div",{className:" h-full aspect-video bg-secondcolor cursor-pointer",onClick:e}),fe("div",{className:" w-full h-11 bg-fourthcolor flex text-lg",children:[I("label",{className:" h-full w-1/2 flex items-center justify-center text-firstcolor",children:i.name}),I("label",{className:" h-full w-1/3 flex items-center justify-center text-thirdcolor cursor-pointer",onClick:n,children:i.author}),I("label",{className:" h-full w-1/6 flex items-center justify-center text-red-300",children:i.rating})]})]},i.id))});function xx(){return fe("div",{className:" w-screen h-screen overflow-hidden overflow-y-scroll ",children:[I(P0,{}),I(ZU,{}),I(KE,{scenePick:qE,profilePick:XE,scenes:$E})]})}const JU=()=>fe("div",{className:" px-8 pt-24 max-h-max w-full grid grid-cols-3 gap-8",children:[I("div",{className:"grid items-center justify-center",children:fe("div",{className:" w-64 h-64 border-2 border-fourthcolor flex flex-col items-center",children:[I("img",{src:"",alt:"",className:" w-64 h-64 text-center"}),I("p",{className:" text-center h-64",children:"User Photo"})]})}),I("div",{className:"grid items-center justify-center text-lg font-medium",children:fe("div",{className:" w-72 h-4/5 grid grid-cols-2 items-center content-evenly",children:[I("label",{className:" flex justify-start",children:"Nickname:"}),I("label",{className:" flex justify-start",children:"Droxus228"}),I("label",{className:" flex justify-start",children:"Scene created:"}),I("label",{className:" flex justify-start",children:"9"}),I("label",{className:" flex justify-start",children:"Average rating:"}),I("label",{className:" flex justify-start",children:"4.2"})]})}),I("div",{className:" border-fourthcolor rounded-none border-2 aspect-video"})]});function QU(){return fe("div",{onMouseDown:t=>{t.shiftKey&&t.preventDefault()},className:"App h-full w-full z-60",children:[I(P0,{}),I(JU,{}),I(KE,{scenePick:qE,profilePick:XE,scenes:$E})]})}function ez(){return fe("div",{onMouseDown:t=>{t.shiftKey&&t.preventDefault()},className:"App h-full w-full z-60",children:[I(P0,{}),fe("div",{className:"pt-24 max-h-max w-full grid justify-items-center gap-8",children:[fe("div",{className:" bg-fourthcolor w-full h-20 max-w-4xl flex items-center",children:[I("label",{className:" flex-1 text-2xl text-firstcolor",children:"Instruction"}),I("label",{className:" flex-1 text-base text-secondcolor",children:"This page contains information you may need"})]}),fe("div",{className:" bg-fourthcolor w-full max-h-max max-w-4xl",children:[I("label",{className:" flex-1 flex h-14 items-center justify-center text-xl text-firstcolor",children:"Choose Block"}),I("div",{className:" bg-transparent w-full aspect-video px-1",children:I("div",{className:" bg-thirdcolor w-full h-full"})}),I("label",{className:" flex-1 flex px-12 py-6 text-base text-secondcolor",children:"This page contains information you may need"})]})]})]})}let nc=Boolean(localStorage.getItem("isLogined"));function R0(t){nc=t}function tz(){return I("div",{onMouseDown:t=>{t.shiftKey&&t.preventDefault()},className:"App h-full w-full z-60",children:fe(MC,{children:[I(bo,{path:"/Builder3D/",element:I(xx,{})}),I(bo,{path:"/Builder3D/scene",element:I(oD,{})}),I(bo,{path:"/Builder3D/profile",element:I(QU,{})}),I(bo,{path:"/Builder3D/help",element:I(ez,{})}),I(bo,{path:"*",element:I(xx,{})})]})})}Yf.createRoot(document.getElementById("root")).render(I(Fm.StrictMode,{children:I(AC,{children:I(tz,{})})}));XU();
