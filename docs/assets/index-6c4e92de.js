function Iv(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Nv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cl={},kv={get exports(){return cl},set exports(t){cl=t}},Fl={},ue={},zv={get exports(){return ue},set exports(t){ue=t}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),Fv=Symbol.for("react.portal"),Ov=Symbol.for("react.fragment"),Uv=Symbol.for("react.strict_mode"),Bv=Symbol.for("react.profiler"),Vv=Symbol.for("react.provider"),Gv=Symbol.for("react.context"),Hv=Symbol.for("react.forward_ref"),Wv=Symbol.for("react.suspense"),jv=Symbol.for("react.memo"),Xv=Symbol.for("react.lazy"),Hd=Symbol.iterator;function qv(t){return t===null||typeof t!="object"?null:(t=Hd&&t[Hd]||t["@@iterator"],typeof t=="function"?t:null)}var Dm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rm=Object.assign,Im={};function Zo(t,e,n){this.props=t,this.context=e,this.refs=Im,this.updater=n||Dm}Zo.prototype.isReactComponent={};Zo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Nm(){}Nm.prototype=Zo.prototype;function Ff(t,e,n){this.props=t,this.context=e,this.refs=Im,this.updater=n||Dm}var Of=Ff.prototype=new Nm;Of.constructor=Ff;Rm(Of,Zo.prototype);Of.isPureReactComponent=!0;var Wd=Array.isArray,km=Object.prototype.hasOwnProperty,Uf={current:null},zm={key:!0,ref:!0,__self:!0,__source:!0};function Fm(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)km.call(e,i)&&!zm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ra,type:t,key:o,ref:s,props:r,_owner:Uf.current}}function $v(t,e){return{$$typeof:ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ra}function Yv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jd=/\/+/g;function fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Yv(""+t.key):e.toString(36)}function Ya(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ra:case Fv:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+fu(s,0):i,Wd(r)?(n="",t!=null&&(n=t.replace(jd,"$&/")+"/"),Ya(r,e,n,"",function(u){return u})):r!=null&&(Bf(r)&&(r=$v(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(jd,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Wd(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+fu(o,a);s+=Ya(o,e,n,l,r)}else if(l=qv(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+fu(o,a++),s+=Ya(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ha(t,e,n){if(t==null)return t;var i=[],r=0;return Ya(t,i,"","",function(o){return e.call(n,o,r++)}),i}function Kv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},Ka={transition:null},Zv={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:Uf};ke.Children={map:ha,forEach:function(t,e,n){ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ha(t,function(){e++}),e},toArray:function(t){return ha(t,function(e){return e})||[]},only:function(t){if(!Bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Zo;ke.Fragment=Ov;ke.Profiler=Bv;ke.PureComponent=Ff;ke.StrictMode=Uv;ke.Suspense=Wv;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zv;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Rm({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Uf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)km.call(e,l)&&!zm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ra,type:t.type,key:r,ref:o,props:i,_owner:s}};ke.createContext=function(t){return t={$$typeof:Gv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vv,_context:t},t.Consumer=t};ke.createElement=Fm;ke.createFactory=function(t){var e=Fm.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:Hv,render:t}};ke.isValidElement=Bf;ke.lazy=function(t){return{$$typeof:Xv,_payload:{_status:-1,_result:t},_init:Kv}};ke.memo=function(t,e){return{$$typeof:jv,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};ke.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ke.useCallback=function(t,e){return nn.current.useCallback(t,e)};ke.useContext=function(t){return nn.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};ke.useEffect=function(t,e){return nn.current.useEffect(t,e)};ke.useId=function(){return nn.current.useId()};ke.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return nn.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};ke.useRef=function(t){return nn.current.useRef(t)};ke.useState=function(t){return nn.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return nn.current.useTransition()};ke.version="18.2.0";(function(t){t.exports=ke})(zv);const Vf=Nv(ue),Mc=Iv({__proto__:null,default:Vf},[ue]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv=ue,Jv=Symbol.for("react.element"),e_=Symbol.for("react.fragment"),t_=Object.prototype.hasOwnProperty,n_=Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i_={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)t_.call(e,i)&&!i_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Jv,type:t,key:o,ref:s,props:r,_owner:n_.current}}Fl.Fragment=e_;Fl.jsx=Om;Fl.jsxs=Om;(function(t){t.exports=Fl})(kv);const le=cl.jsx,Ye=cl.jsxs;var wc={},Ec={},r_={get exports(){return Ec},set exports(t){Ec=t}},Cn={},bc={},o_={get exports(){return bc},set exports(t){bc=t}},Um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,G){var W=R.length;R.push(G);e:for(;0<W;){var oe=W-1>>>1,L=R[oe];if(0<r(L,G))R[oe]=G,R[W]=L,W=oe;else break e}}function n(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var G=R[0],W=R.pop();if(W!==G){R[0]=W;e:for(var oe=0,L=R.length,H=L>>>1;oe<H;){var Q=2*(oe+1)-1,Z=R[Q],N=Q+1,ve=R[N];if(0>r(Z,W))N<L&&0>r(ve,Z)?(R[oe]=ve,R[N]=W,oe=N):(R[oe]=Z,R[Q]=W,oe=Q);else if(N<L&&0>r(ve,W))R[oe]=ve,R[N]=W,oe=N;else break e}}return G}function r(R,G){var W=R.sortIndex-G.sortIndex;return W!==0?W:R.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,x=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(R){for(var G=n(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=R)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function M(R){if(h=!1,_(R),!x)if(n(l)!==null)x=!0,te(S);else{var G=n(u);G!==null&&ee(M,G.startTime-R)}}function S(R,G){x=!1,h&&(h=!1,m(y),y=-1),g=!0;var W=f;try{for(_(G),d=n(l);d!==null&&(!(d.expirationTime>G)||R&&!K());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,f=d.priorityLevel;var L=oe(d.expirationTime<=G);G=t.unstable_now(),typeof L=="function"?d.callback=L:d===n(l)&&i(l),_(G)}else i(l);d=n(l)}if(d!==null)var H=!0;else{var Q=n(u);Q!==null&&ee(M,Q.startTime-G),H=!1}return H}finally{d=null,f=W,g=!1}}var C=!1,P=null,y=-1,T=5,D=-1;function K(){return!(t.unstable_now()-D<T)}function J(){if(P!==null){var R=t.unstable_now();D=R;var G=!0;try{G=P(!0,R)}finally{G?O():(C=!1,P=null)}}else C=!1}var O;if(typeof v=="function")O=function(){v(J)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Y=k.port2;k.port1.onmessage=J,O=function(){Y.postMessage(null)}}else O=function(){p(J,0)};function te(R){P=R,C||(C=!0,O())}function ee(R,G){y=p(function(){R(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,te(S))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var W=f;f=G;try{return R()}finally{f=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,G){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=f;f=R;try{return G()}finally{f=W}},t.unstable_scheduleCallback=function(R,G,W){var oe=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?oe+W:oe):W=oe,R){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=W+L,R={id:c++,callback:G,priorityLevel:R,startTime:W,expirationTime:L,sortIndex:-1},W>oe?(R.sortIndex=W,e(u,R),n(l)===null&&R===n(u)&&(h?(m(y),y=-1):h=!0,ee(M,W-oe))):(R.sortIndex=L,e(l,R),x||g||(x=!0,te(S))),R},t.unstable_shouldYield=K,t.unstable_wrapCallback=function(R){var G=f;return function(){var W=f;f=G;try{return R.apply(this,arguments)}finally{f=W}}}})(Um);(function(t){t.exports=Um})(o_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm=ue,Tn=bc;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vm=new Set,Ns={};function Xr(t,e){Uo(t,e),Uo(t+"Capture",e)}function Uo(t,e){for(Ns[t]=e,t=0;t<e.length;t++)Vm.add(e[t])}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tc=Object.prototype.hasOwnProperty,s_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xd={},qd={};function a_(t){return Tc.call(qd,t)?!0:Tc.call(Xd,t)?!1:s_.test(t)?qd[t]=!0:(Xd[t]=!0,!1)}function l_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function u_(t,e,n,i){if(e===null||typeof e>"u"||l_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gf=/[\-:]([a-z])/g;function Hf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gf,Hf);Vt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gf,Hf);Vt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gf,Hf);Vt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wf(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(u_(e,n,r,i)&&(n=null),i||r===null?a_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=Bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pa=Symbol.for("react.element"),go=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),jf=Symbol.for("react.strict_mode"),Cc=Symbol.for("react.profiler"),Gm=Symbol.for("react.provider"),Hm=Symbol.for("react.context"),Xf=Symbol.for("react.forward_ref"),Ac=Symbol.for("react.suspense"),Pc=Symbol.for("react.suspense_list"),qf=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),Wm=Symbol.for("react.offscreen"),$d=Symbol.iterator;function rs(t){return t===null||typeof t!="object"?null:(t=$d&&t[$d]||t["@@iterator"],typeof t=="function"?t:null)}var at=Object.assign,du;function xs(t){if(du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);du=e&&e[1]||""}return`
`+du+t}var hu=!1;function pu(t,e){if(!t||hu)return"";hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xs(t):""}function c_(t){switch(t.tag){case 5:return xs(t.type);case 16:return xs("Lazy");case 13:return xs("Suspense");case 19:return xs("SuspenseList");case 0:case 2:case 15:return t=pu(t.type,!1),t;case 11:return t=pu(t.type.render,!1),t;case 1:return t=pu(t.type,!0),t;default:return""}}function Lc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vo:return"Fragment";case go:return"Portal";case Cc:return"Profiler";case jf:return"StrictMode";case Ac:return"Suspense";case Pc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hm:return(t.displayName||"Context")+".Consumer";case Gm:return(t._context.displayName||"Context")+".Provider";case Xf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qf:return e=t.displayName||null,e!==null?e:Lc(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return Lc(t(e))}catch{}}return null}function f_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lc(e);case 8:return e===jf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d_(t){var e=jm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ma(t){t._valueTracker||(t._valueTracker=d_(t))}function Xm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=jm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dc(t,e){var n=e.checked;return at({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qm(t,e){e=e.checked,e!=null&&Wf(t,"checked",e,!1)}function Rc(t,e){qm(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ic(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ic(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ic(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ys=Array.isArray;function Lo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Nc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return at({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ys(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function $m(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ym(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ym(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ga,Km=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ga=ga||document.createElement("div"),ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h_=["Webkit","ms","Moz","O"];Object.keys(bs).forEach(function(t){h_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bs[e]=bs[t]})});function Zm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bs.hasOwnProperty(t)&&bs[t]?(""+e).trim():e+"px"}function Qm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Zm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var p_=at({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zc(t,e){if(e){if(p_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Fc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oc=null;function $f(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uc=null,Do=null,Ro=null;function Jd(t){if(t=aa(t)){if(typeof Uc!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Gl(e),Uc(t.stateNode,t.type,e))}}function Jm(t){Do?Ro?Ro.push(t):Ro=[t]:Do=t}function eg(){if(Do){var t=Do,e=Ro;if(Ro=Do=null,Jd(t),e)for(t=0;t<e.length;t++)Jd(e[t])}}function tg(t,e){return t(e)}function ng(){}var mu=!1;function ig(t,e,n){if(mu)return t(e,n);mu=!0;try{return tg(t,e,n)}finally{mu=!1,(Do!==null||Ro!==null)&&(ng(),eg())}}function zs(t,e){var n=t.stateNode;if(n===null)return null;var i=Gl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Bc=!1;if(Li)try{var os={};Object.defineProperty(os,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{Bc=!1}function m_(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ts=!1,dl=null,hl=!1,Vc=null,g_={onError:function(t){Ts=!0,dl=t}};function v_(t,e,n,i,r,o,s,a,l){Ts=!1,dl=null,m_.apply(g_,arguments)}function __(t,e,n,i,r,o,s,a,l){if(v_.apply(this,arguments),Ts){if(Ts){var u=dl;Ts=!1,dl=null}else throw Error(ne(198));hl||(hl=!0,Vc=u)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function eh(t){if(qr(t)!==t)throw Error(ne(188))}function x_(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return eh(r),t;if(o===i)return eh(r),e;o=o.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function og(t){return t=x_(t),t!==null?sg(t):null}function sg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sg(t);if(e!==null)return e;t=t.sibling}return null}var ag=Tn.unstable_scheduleCallback,th=Tn.unstable_cancelCallback,y_=Tn.unstable_shouldYield,S_=Tn.unstable_requestPaint,ft=Tn.unstable_now,M_=Tn.unstable_getCurrentPriorityLevel,Yf=Tn.unstable_ImmediatePriority,lg=Tn.unstable_UserBlockingPriority,pl=Tn.unstable_NormalPriority,w_=Tn.unstable_LowPriority,ug=Tn.unstable_IdlePriority,Ol=null,li=null;function E_(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(Ol,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:C_,b_=Math.log,T_=Math.LN2;function C_(t){return t>>>=0,t===0?32:31-(b_(t)/T_|0)|0}var va=64,_a=4194304;function Ss(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Ss(a):(o&=s,o!==0&&(i=Ss(o)))}else s=n&~r,s!==0?i=Ss(s):o!==0&&(i=Ss(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function A_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Zn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=A_(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Gc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cg(){var t=va;return va<<=1,!(va&4194240)&&(va=64),t}function gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function L_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Kf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var qe=0;function fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dg,Zf,hg,pg,mg,Hc=!1,xa=[],qi=null,$i=null,Yi=null,Fs=new Map,Os=new Map,Gi=[],D_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nh(t,e){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Fs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(e.pointerId)}}function ss(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=aa(e),e!==null&&Zf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function R_(t,e,n,i,r){switch(e){case"focusin":return qi=ss(qi,t,e,n,i,r),!0;case"dragenter":return $i=ss($i,t,e,n,i,r),!0;case"mouseover":return Yi=ss(Yi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Fs.set(o,ss(Fs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Os.set(o,ss(Os.get(o)||null,t,e,n,i,r)),!0}return!1}function gg(t){var e=Tr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=rg(n),e!==null){t.blockedOn=e,mg(t.priority,function(){hg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Oc=i,n.target.dispatchEvent(i),Oc=null}else return e=aa(n),e!==null&&Zf(e),t.blockedOn=n,!1;e.shift()}return!0}function ih(t,e,n){Za(t)&&n.delete(e)}function I_(){Hc=!1,qi!==null&&Za(qi)&&(qi=null),$i!==null&&Za($i)&&($i=null),Yi!==null&&Za(Yi)&&(Yi=null),Fs.forEach(ih),Os.forEach(ih)}function as(t,e){t.blockedOn===e&&(t.blockedOn=null,Hc||(Hc=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,I_)))}function Us(t){function e(r){return as(r,t)}if(0<xa.length){as(xa[0],t);for(var n=1;n<xa.length;n++){var i=xa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(qi!==null&&as(qi,t),$i!==null&&as($i,t),Yi!==null&&as(Yi,t),Fs.forEach(e),Os.forEach(e),n=0;n<Gi.length;n++)i=Gi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gi.length&&(n=Gi[0],n.blockedOn===null);)gg(n),n.blockedOn===null&&Gi.shift()}var Io=Ni.ReactCurrentBatchConfig,gl=!0;function N_(t,e,n,i){var r=qe,o=Io.transition;Io.transition=null;try{qe=1,Qf(t,e,n,i)}finally{qe=r,Io.transition=o}}function k_(t,e,n,i){var r=qe,o=Io.transition;Io.transition=null;try{qe=4,Qf(t,e,n,i)}finally{qe=r,Io.transition=o}}function Qf(t,e,n,i){if(gl){var r=Wc(t,e,n,i);if(r===null)Tu(t,e,i,vl,n),nh(t,i);else if(R_(r,t,e,n,i))i.stopPropagation();else if(nh(t,i),e&4&&-1<D_.indexOf(t)){for(;r!==null;){var o=aa(r);if(o!==null&&dg(o),o=Wc(t,e,n,i),o===null&&Tu(t,e,i,vl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Tu(t,e,i,null,n)}}var vl=null;function Wc(t,e,n,i){if(vl=null,t=$f(i),t=Tr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function vg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(M_()){case Yf:return 1;case lg:return 4;case pl:case w_:return 16;case ug:return 536870912;default:return 16}default:return 16}}var Wi=null,Jf=null,Qa=null;function _g(){if(Qa)return Qa;var t,e=Jf,n=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Qa=r.slice(t,1<i?1-i:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ya(){return!0}function rh(){return!1}function An(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ya:rh,this.isPropagationStopped=rh,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),e}var Qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ed=An(Qo),sa=at({},Qo,{view:0,detail:0}),z_=An(sa),vu,_u,ls,Ul=at({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:td,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ls&&(ls&&t.type==="mousemove"?(vu=t.screenX-ls.screenX,_u=t.screenY-ls.screenY):_u=vu=0,ls=t),vu)},movementY:function(t){return"movementY"in t?t.movementY:_u}}),oh=An(Ul),F_=at({},Ul,{dataTransfer:0}),O_=An(F_),U_=at({},sa,{relatedTarget:0}),xu=An(U_),B_=at({},Qo,{animationName:0,elapsedTime:0,pseudoElement:0}),V_=An(B_),G_=at({},Qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H_=An(G_),W_=at({},Qo,{data:0}),sh=An(W_),j_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=q_[t])?!!e[t]:!1}function td(){return $_}var Y_=at({},sa,{key:function(t){if(t.key){var e=j_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?X_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:td,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K_=An(Y_),Z_=at({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=An(Z_),Q_=at({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:td}),J_=An(Q_),ex=at({},Qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),tx=An(ex),nx=at({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ix=An(nx),rx=[9,13,27,32],nd=Li&&"CompositionEvent"in window,Cs=null;Li&&"documentMode"in document&&(Cs=document.documentMode);var ox=Li&&"TextEvent"in window&&!Cs,xg=Li&&(!nd||Cs&&8<Cs&&11>=Cs),lh=String.fromCharCode(32),uh=!1;function yg(t,e){switch(t){case"keyup":return rx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _o=!1;function sx(t,e){switch(t){case"compositionend":return Sg(e);case"keypress":return e.which!==32?null:(uh=!0,lh);case"textInput":return t=e.data,t===lh&&uh?null:t;default:return null}}function ax(t,e){if(_o)return t==="compositionend"||!nd&&yg(t,e)?(t=_g(),Qa=Jf=Wi=null,_o=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xg&&e.locale!=="ko"?null:e.data;default:return null}}var lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lx[t.type]:e==="textarea"}function Mg(t,e,n,i){Jm(i),e=_l(e,"onChange"),0<e.length&&(n=new ed("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var As=null,Bs=null;function ux(t){Ig(t,0)}function Bl(t){var e=So(t);if(Xm(e))return t}function cx(t,e){if(t==="change")return e}var wg=!1;if(Li){var yu;if(Li){var Su="oninput"in document;if(!Su){var fh=document.createElement("div");fh.setAttribute("oninput","return;"),Su=typeof fh.oninput=="function"}yu=Su}else yu=!1;wg=yu&&(!document.documentMode||9<document.documentMode)}function dh(){As&&(As.detachEvent("onpropertychange",Eg),Bs=As=null)}function Eg(t){if(t.propertyName==="value"&&Bl(Bs)){var e=[];Mg(e,Bs,t,$f(t)),ig(ux,e)}}function fx(t,e,n){t==="focusin"?(dh(),As=e,Bs=n,As.attachEvent("onpropertychange",Eg)):t==="focusout"&&dh()}function dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bl(Bs)}function hx(t,e){if(t==="click")return Bl(e)}function px(t,e){if(t==="input"||t==="change")return Bl(e)}function mx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:mx;function Vs(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Tc.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function hh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ph(t,e){var n=hh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hh(n)}}function bg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tg(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gx(t){var e=Tg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bg(n.ownerDocument.documentElement,n)){if(i!==null&&id(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=ph(n,o);var s=ph(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vx=Li&&"documentMode"in document&&11>=document.documentMode,xo=null,jc=null,Ps=null,Xc=!1;function mh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xc||xo==null||xo!==fl(i)||(i=xo,"selectionStart"in i&&id(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ps&&Vs(Ps,i)||(Ps=i,i=_l(jc,"onSelect"),0<i.length&&(e=new ed("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=xo)))}function Sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yo={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Mu={},Cg={};Li&&(Cg=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function Vl(t){if(Mu[t])return Mu[t];if(!yo[t])return t;var e=yo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cg)return Mu[t]=e[n];return t}var Ag=Vl("animationend"),Pg=Vl("animationiteration"),Lg=Vl("animationstart"),Dg=Vl("transitionend"),Rg=new Map,gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){Rg.set(t,e),Xr(e,[t])}for(var wu=0;wu<gh.length;wu++){var Eu=gh[wu],_x=Eu.toLowerCase(),xx=Eu[0].toUpperCase()+Eu.slice(1);cr(_x,"on"+xx)}cr(Ag,"onAnimationEnd");cr(Pg,"onAnimationIteration");cr(Lg,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(Dg,"onTransitionEnd");Uo("onMouseEnter",["mouseout","mouseover"]);Uo("onMouseLeave",["mouseout","mouseover"]);Uo("onPointerEnter",["pointerout","pointerover"]);Uo("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ms));function vh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,__(i,e,void 0,t),t.currentTarget=null}function Ig(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;vh(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;vh(r,a,u),o=l}}}if(hl)throw t=Vc,hl=!1,Vc=null,t}function Ze(t,e){var n=e[Zc];n===void 0&&(n=e[Zc]=new Set);var i=t+"__bubble";n.has(i)||(Ng(e,t,2,!1),n.add(i))}function bu(t,e,n){var i=0;e&&(i|=4),Ng(n,t,i,e)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function Gs(t){if(!t[Ma]){t[Ma]=!0,Vm.forEach(function(n){n!=="selectionchange"&&(yx.has(n)||bu(n,!1,t),bu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ma]||(e[Ma]=!0,bu("selectionchange",!1,e))}}function Ng(t,e,n,i){switch(vg(e)){case 1:var r=N_;break;case 4:r=k_;break;default:r=Qf}n=r.bind(null,e,n,t),r=void 0,!Bc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Tr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}ig(function(){var u=o,c=$f(n),d=[];e:{var f=Rg.get(t);if(f!==void 0){var g=ed,x=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":g=K_;break;case"focusin":x="focus",g=xu;break;case"focusout":x="blur",g=xu;break;case"beforeblur":case"afterblur":g=xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=O_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=J_;break;case Ag:case Pg:case Lg:g=V_;break;case Dg:g=tx;break;case"scroll":g=z_;break;case"wheel":g=ix;break;case"copy":case"cut":case"paste":g=H_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ah}var h=(e&4)!==0,p=!h&&t==="scroll",m=h?f!==null?f+"Capture":null:f;h=[];for(var v=u,_;v!==null;){_=v;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,m!==null&&(M=zs(v,m),M!=null&&h.push(Hs(v,M,_)))),p)break;v=v.return}0<h.length&&(f=new g(f,x,null,n,c),d.push({event:f,listeners:h}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Oc&&(x=n.relatedTarget||n.fromElement)&&(Tr(x)||x[Di]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?Tr(x):null,x!==null&&(p=qr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(h=oh,M="onMouseLeave",m="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(h=ah,M="onPointerLeave",m="onPointerEnter",v="pointer"),p=g==null?f:So(g),_=x==null?f:So(x),f=new h(M,v+"leave",g,n,c),f.target=p,f.relatedTarget=_,M=null,Tr(c)===u&&(h=new h(m,v+"enter",x,n,c),h.target=_,h.relatedTarget=p,M=h),p=M,g&&x)t:{for(h=g,m=x,v=0,_=h;_;_=Kr(_))v++;for(_=0,M=m;M;M=Kr(M))_++;for(;0<v-_;)h=Kr(h),v--;for(;0<_-v;)m=Kr(m),_--;for(;v--;){if(h===m||m!==null&&h===m.alternate)break t;h=Kr(h),m=Kr(m)}h=null}else h=null;g!==null&&_h(d,f,g,h,!1),x!==null&&p!==null&&_h(d,p,x,h,!0)}}e:{if(f=u?So(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=cx;else if(ch(f))if(wg)S=px;else{S=dx;var C=fx}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=hx);if(S&&(S=S(t,u))){Mg(d,S,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Ic(f,"number",f.value)}switch(C=u?So(u):window,t){case"focusin":(ch(C)||C.contentEditable==="true")&&(xo=C,jc=u,Ps=null);break;case"focusout":Ps=jc=xo=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,mh(d,n,c);break;case"selectionchange":if(vx)break;case"keydown":case"keyup":mh(d,n,c)}var P;if(nd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else _o?yg(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(xg&&n.locale!=="ko"&&(_o||y!=="onCompositionStart"?y==="onCompositionEnd"&&_o&&(P=_g()):(Wi=c,Jf="value"in Wi?Wi.value:Wi.textContent,_o=!0)),C=_l(u,y),0<C.length&&(y=new sh(y,t,null,n,c),d.push({event:y,listeners:C}),P?y.data=P:(P=Sg(n),P!==null&&(y.data=P)))),(P=ox?sx(t,n):ax(t,n))&&(u=_l(u,"onBeforeInput"),0<u.length&&(c=new sh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}Ig(d,e)})}function Hs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=zs(t,n),o!=null&&i.unshift(Hs(t,o,r)),o=zs(t,e),o!=null&&i.push(Hs(t,o,r))),t=t.return}return i}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _h(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=zs(n,o),l!=null&&s.unshift(Hs(n,l,a))):r||(l=zs(n,o),l!=null&&s.push(Hs(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Sx=/\r\n?/g,Mx=/\u0000|\uFFFD/g;function xh(t){return(typeof t=="string"?t:""+t).replace(Sx,`
`).replace(Mx,"")}function wa(t,e,n){if(e=xh(e),xh(t)!==e&&n)throw Error(ne(425))}function xl(){}var qc=null,$c=null;function Yc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,wx=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,Ex=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(t){return yh.resolve(null).then(t).catch(bx)}:Kc;function bx(t){setTimeout(function(){throw t})}function Cu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Us(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Us(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),si="__reactFiber$"+Jo,Ws="__reactProps$"+Jo,Di="__reactContainer$"+Jo,Zc="__reactEvents$"+Jo,Tx="__reactListeners$"+Jo,Cx="__reactHandles$"+Jo;function Tr(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Di]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sh(t);t!==null;){if(n=t[si])return n;t=Sh(t)}return e}t=n,n=t.parentNode}return null}function aa(t){return t=t[si]||t[Di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function So(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Gl(t){return t[Ws]||null}var Qc=[],Mo=-1;function fr(t){return{current:t}}function nt(t){0>Mo||(t.current=Qc[Mo],Qc[Mo]=null,Mo--)}function Ke(t,e){Mo++,Qc[Mo]=t.current,t.current=e}var sr={},Yt=fr(sr),cn=fr(!1),zr=sr;function Bo(t,e){var n=t.type.contextTypes;if(!n)return sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function yl(){nt(cn),nt(Yt)}function Mh(t,e,n){if(Yt.current!==sr)throw Error(ne(168));Ke(Yt,e),Ke(cn,n)}function kg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,f_(t)||"Unknown",r));return at({},n,i)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,zr=Yt.current,Ke(Yt,t),Ke(cn,cn.current),!0}function wh(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=kg(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,nt(cn),nt(Yt),Ke(Yt,t)):nt(cn),Ke(cn,n)}var yi=null,Hl=!1,Au=!1;function zg(t){yi===null?yi=[t]:yi.push(t)}function Ax(t){Hl=!0,zg(t)}function dr(){if(!Au&&yi!==null){Au=!0;var t=0,e=qe;try{var n=yi;for(qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,Hl=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),ag(Yf,dr),r}finally{qe=e,Au=!1}}return null}var wo=[],Eo=0,Ml=null,wl=0,In=[],Nn=0,Fr=null,bi=1,Ti="";function Sr(t,e){wo[Eo++]=wl,wo[Eo++]=Ml,Ml=t,wl=e}function Fg(t,e,n){In[Nn++]=bi,In[Nn++]=Ti,In[Nn++]=Fr,Fr=t;var i=bi;t=Ti;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var o=32-Zn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,bi=1<<32-Zn(e)+r|n<<r|i,Ti=o+t}else bi=1<<o|n<<r|i,Ti=t}function rd(t){t.return!==null&&(Sr(t,1),Fg(t,1,0))}function od(t){for(;t===Ml;)Ml=wo[--Eo],wo[Eo]=null,wl=wo[--Eo],wo[Eo]=null;for(;t===Fr;)Fr=In[--Nn],In[Nn]=null,Ti=In[--Nn],In[Nn]=null,bi=In[--Nn],In[Nn]=null}var wn=null,Sn=null,rt=!1,Yn=null;function Og(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,Sn=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:bi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,Sn=null,!0):!1;default:return!1}}function Jc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ef(t){if(rt){var e=Sn;if(e){var n=e;if(!Eh(t,e)){if(Jc(t))throw Error(ne(418));e=Ki(n.nextSibling);var i=wn;e&&Eh(t,e)?Og(i,n):(t.flags=t.flags&-4097|2,rt=!1,wn=t)}}else{if(Jc(t))throw Error(ne(418));t.flags=t.flags&-4097|2,rt=!1,wn=t}}}function bh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function Ea(t){if(t!==wn)return!1;if(!rt)return bh(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yc(t.type,t.memoizedProps)),e&&(e=Sn)){if(Jc(t))throw Ug(),Error(ne(418));for(;e;)Og(t,e),e=Ki(e.nextSibling)}if(bh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=wn?Ki(t.stateNode.nextSibling):null;return!0}function Ug(){for(var t=Sn;t;)t=Ki(t.nextSibling)}function Vo(){Sn=wn=null,rt=!1}function sd(t){Yn===null?Yn=[t]:Yn.push(t)}var Px=Ni.ReactCurrentBatchConfig;function qn(t,e){if(t&&t.defaultProps){e=at({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var El=fr(null),bl=null,bo=null,ad=null;function ld(){ad=bo=bl=null}function ud(t){var e=El.current;nt(El),t._currentValue=e}function tf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function No(t,e){bl=t,ad=bo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(ad!==t)if(t={context:t,memoizedValue:e,next:null},bo===null){if(bl===null)throw Error(ne(308));bo=t,bl.dependencies={lanes:0,firstContext:t}}else bo=bo.next=t;return e}var Cr=null;function cd(t){Cr===null?Cr=[t]:Cr.push(t)}function Bg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,cd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ri(t,i)}function Ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vi=!1;function fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ri(t,n)}return r=i.interleaved,r===null?(e.next=e,cd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ri(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kf(t,n)}}function Th(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tl(t,e,n,i){var r=t.updateQueue;Vi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,c=u=l=null,a=o;do{var f=a.lane,g=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,h=a;switch(f=e,g=n,h.tag){case 1:if(x=h.payload,typeof x=="function"){d=x.call(g,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,f=typeof x=="function"?x.call(g,d,f):x,f==null)break e;d=at({},d,f);break e;case 2:Vi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,s|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Ur|=s,t.lanes=s,t.memoizedState=d}}function Ch(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Gg=new Bm.Component().refs;function nf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:at({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wl={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=Ji(t),o=Ai(i,r);o.payload=e,n!=null&&(o.callback=n),e=Zi(t,o,r),e!==null&&(Qn(e,t,r,i),el(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=Ji(t),o=Ai(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Zi(t,o,r),e!==null&&(Qn(e,t,r,i),el(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=Ji(t),r=Ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=Zi(t,r,i),e!==null&&(Qn(e,t,i,n),el(e,t,i))}};function Ah(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Vs(n,i)||!Vs(r,o):!0}function Hg(t,e,n){var i=!1,r=sr,o=e.contextType;return typeof o=="object"&&o!==null?o=Bn(o):(r=fn(e)?zr:Yt.current,i=e.contextTypes,o=(i=i!=null)?Bo(t,r):sr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Ph(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Wl.enqueueReplaceState(e,e.state,null)}function rf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Gg,fd(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Bn(o):(o=fn(e)?zr:Yt.current,r.context=Bo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(nf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Wl.enqueueReplaceState(r,r.state,null),Tl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function us(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===Gg&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function ba(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lh(t){var e=t._init;return e(t._payload)}function Wg(t){function e(m,v){if(t){var _=m.deletions;_===null?(m.deletions=[v],m.flags|=16):_.push(v)}}function n(m,v){if(!t)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=er(m,v),m.index=0,m.sibling=null,m}function o(m,v,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<v?(m.flags|=2,v):_):(m.flags|=2,v)):(m.flags|=1048576,v)}function s(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,v,_,M){return v===null||v.tag!==6?(v=ku(_,m.mode,M),v.return=m,v):(v=r(v,_),v.return=m,v)}function l(m,v,_,M){var S=_.type;return S===vo?c(m,v,_.props.children,M,_.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Bi&&Lh(S)===v.type)?(M=r(v,_.props),M.ref=us(m,v,_),M.return=m,M):(M=sl(_.type,_.key,_.props,null,m.mode,M),M.ref=us(m,v,_),M.return=m,M)}function u(m,v,_,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=zu(_,m.mode,M),v.return=m,v):(v=r(v,_.children||[]),v.return=m,v)}function c(m,v,_,M,S){return v===null||v.tag!==7?(v=Rr(_,m.mode,M,S),v.return=m,v):(v=r(v,_),v.return=m,v)}function d(m,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ku(""+v,m.mode,_),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pa:return _=sl(v.type,v.key,v.props,null,m.mode,_),_.ref=us(m,null,v),_.return=m,_;case go:return v=zu(v,m.mode,_),v.return=m,v;case Bi:var M=v._init;return d(m,M(v._payload),_)}if(ys(v)||rs(v))return v=Rr(v,m.mode,_,null),v.return=m,v;ba(m,v)}return null}function f(m,v,_,M){var S=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:a(m,v,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case pa:return _.key===S?l(m,v,_,M):null;case go:return _.key===S?u(m,v,_,M):null;case Bi:return S=_._init,f(m,v,S(_._payload),M)}if(ys(_)||rs(_))return S!==null?null:c(m,v,_,M,null);ba(m,_)}return null}function g(m,v,_,M,S){if(typeof M=="string"&&M!==""||typeof M=="number")return m=m.get(_)||null,a(v,m,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case pa:return m=m.get(M.key===null?_:M.key)||null,l(v,m,M,S);case go:return m=m.get(M.key===null?_:M.key)||null,u(v,m,M,S);case Bi:var C=M._init;return g(m,v,_,C(M._payload),S)}if(ys(M)||rs(M))return m=m.get(_)||null,c(v,m,M,S,null);ba(v,M)}return null}function x(m,v,_,M){for(var S=null,C=null,P=v,y=v=0,T=null;P!==null&&y<_.length;y++){P.index>y?(T=P,P=null):T=P.sibling;var D=f(m,P,_[y],M);if(D===null){P===null&&(P=T);break}t&&P&&D.alternate===null&&e(m,P),v=o(D,v,y),C===null?S=D:C.sibling=D,C=D,P=T}if(y===_.length)return n(m,P),rt&&Sr(m,y),S;if(P===null){for(;y<_.length;y++)P=d(m,_[y],M),P!==null&&(v=o(P,v,y),C===null?S=P:C.sibling=P,C=P);return rt&&Sr(m,y),S}for(P=i(m,P);y<_.length;y++)T=g(P,m,y,_[y],M),T!==null&&(t&&T.alternate!==null&&P.delete(T.key===null?y:T.key),v=o(T,v,y),C===null?S=T:C.sibling=T,C=T);return t&&P.forEach(function(K){return e(m,K)}),rt&&Sr(m,y),S}function h(m,v,_,M){var S=rs(_);if(typeof S!="function")throw Error(ne(150));if(_=S.call(_),_==null)throw Error(ne(151));for(var C=S=null,P=v,y=v=0,T=null,D=_.next();P!==null&&!D.done;y++,D=_.next()){P.index>y?(T=P,P=null):T=P.sibling;var K=f(m,P,D.value,M);if(K===null){P===null&&(P=T);break}t&&P&&K.alternate===null&&e(m,P),v=o(K,v,y),C===null?S=K:C.sibling=K,C=K,P=T}if(D.done)return n(m,P),rt&&Sr(m,y),S;if(P===null){for(;!D.done;y++,D=_.next())D=d(m,D.value,M),D!==null&&(v=o(D,v,y),C===null?S=D:C.sibling=D,C=D);return rt&&Sr(m,y),S}for(P=i(m,P);!D.done;y++,D=_.next())D=g(P,m,y,D.value,M),D!==null&&(t&&D.alternate!==null&&P.delete(D.key===null?y:D.key),v=o(D,v,y),C===null?S=D:C.sibling=D,C=D);return t&&P.forEach(function(J){return e(m,J)}),rt&&Sr(m,y),S}function p(m,v,_,M){if(typeof _=="object"&&_!==null&&_.type===vo&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case pa:e:{for(var S=_.key,C=v;C!==null;){if(C.key===S){if(S=_.type,S===vo){if(C.tag===7){n(m,C.sibling),v=r(C,_.props.children),v.return=m,m=v;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Bi&&Lh(S)===C.type){n(m,C.sibling),v=r(C,_.props),v.ref=us(m,C,_),v.return=m,m=v;break e}n(m,C);break}else e(m,C);C=C.sibling}_.type===vo?(v=Rr(_.props.children,m.mode,M,_.key),v.return=m,m=v):(M=sl(_.type,_.key,_.props,null,m.mode,M),M.ref=us(m,v,_),M.return=m,m=M)}return s(m);case go:e:{for(C=_.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(m,v.sibling),v=r(v,_.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else e(m,v);v=v.sibling}v=zu(_,m.mode,M),v.return=m,m=v}return s(m);case Bi:return C=_._init,p(m,v,C(_._payload),M)}if(ys(_))return x(m,v,_,M);if(rs(_))return h(m,v,_,M);ba(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(m,v.sibling),v=r(v,_),v.return=m,m=v):(n(m,v),v=ku(_,m.mode,M),v.return=m,m=v),s(m)):n(m,v)}return p}var Go=Wg(!0),jg=Wg(!1),la={},ui=fr(la),js=fr(la),Xs=fr(la);function Ar(t){if(t===la)throw Error(ne(174));return t}function dd(t,e){switch(Ke(Xs,e),Ke(js,t),Ke(ui,la),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kc(e,t)}nt(ui),Ke(ui,e)}function Ho(){nt(ui),nt(js),nt(Xs)}function Xg(t){Ar(Xs.current);var e=Ar(ui.current),n=kc(e,t.type);e!==n&&(Ke(js,t),Ke(ui,n))}function hd(t){js.current===t&&(nt(ui),nt(js))}var ot=fr(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pu=[];function pd(){for(var t=0;t<Pu.length;t++)Pu[t]._workInProgressVersionPrimary=null;Pu.length=0}var tl=Ni.ReactCurrentDispatcher,Lu=Ni.ReactCurrentBatchConfig,Or=0,st=null,yt=null,Dt=null,Al=!1,Ls=!1,qs=0,Lx=0;function Wt(){throw Error(ne(321))}function md(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function gd(t,e,n,i,r,o){if(Or=o,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?Nx:kx,t=n(i,r),Ls){o=0;do{if(Ls=!1,qs=0,25<=o)throw Error(ne(301));o+=1,Dt=yt=null,e.updateQueue=null,tl.current=zx,t=n(i,r)}while(Ls)}if(tl.current=Pl,e=yt!==null&&yt.next!==null,Or=0,Dt=yt=st=null,Al=!1,e)throw Error(ne(300));return t}function vd(){var t=qs!==0;return qs=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?st.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Vn(){if(yt===null){var t=st.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=Dt===null?st.memoizedState:Dt.next;if(e!==null)Dt=e,yt=t;else{if(t===null)throw Error(ne(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Dt===null?st.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function $s(t,e){return typeof e=="function"?e(t):e}function Du(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=yt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Or&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,st.lanes|=c,Ur|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,ei(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,st.lanes|=o,Ur|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ru(t){var e=Vn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);ei(o,e.memoizedState)||(un=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function qg(){}function $g(t,e){var n=st,i=Vn(),r=e(),o=!ei(i.memoizedState,r);if(o&&(i.memoizedState=r,un=!0),i=i.queue,_d(Zg.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Ys(9,Kg.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(ne(349));Or&30||Yg(n,e,r)}return r}function Yg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kg(t,e,n,i){e.value=n,e.getSnapshot=i,Qg(e)&&Jg(t)}function Zg(t,e,n){return n(function(){Qg(e)&&Jg(t)})}function Qg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function Jg(t){var e=Ri(t,1);e!==null&&Qn(e,t,1,-1)}function Dh(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:t},e.queue=t,t=t.dispatch=Ix.bind(null,st,t),[e.memoizedState,t]}function Ys(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function e0(){return Vn().memoizedState}function nl(t,e,n,i){var r=ii();st.flags|=t,r.memoizedState=Ys(1|e,n,void 0,i===void 0?null:i)}function jl(t,e,n,i){var r=Vn();i=i===void 0?null:i;var o=void 0;if(yt!==null){var s=yt.memoizedState;if(o=s.destroy,i!==null&&md(i,s.deps)){r.memoizedState=Ys(e,n,o,i);return}}st.flags|=t,r.memoizedState=Ys(1|e,n,o,i)}function Rh(t,e){return nl(8390656,8,t,e)}function _d(t,e){return jl(2048,8,t,e)}function t0(t,e){return jl(4,2,t,e)}function n0(t,e){return jl(4,4,t,e)}function i0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r0(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,i0.bind(null,e,t),n)}function xd(){}function o0(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&md(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function s0(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&md(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function a0(t,e,n){return Or&21?(ei(n,e)||(n=cg(),st.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function Dx(t,e){var n=qe;qe=n!==0&&4>n?n:4,t(!0);var i=Lu.transition;Lu.transition={};try{t(!1),e()}finally{qe=n,Lu.transition=i}}function l0(){return Vn().memoizedState}function Rx(t,e,n){var i=Ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},u0(t))c0(e,n);else if(n=Bg(t,e,n,i),n!==null){var r=tn();Qn(n,t,i,r),f0(n,e,i)}}function Ix(t,e,n){var i=Ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(u0(t))c0(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,ei(a,s)){var l=e.interleaved;l===null?(r.next=r,cd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Bg(t,e,r,i),n!==null&&(r=tn(),Qn(n,t,i,r),f0(n,e,i))}}function u0(t){var e=t.alternate;return t===st||e!==null&&e===st}function c0(t,e){Ls=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function f0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kf(t,n)}}var Pl={readContext:Bn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},Nx={readContext:Bn,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:Rh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,i0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Rx.bind(null,st,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:Dh,useDebugValue:xd,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=Dh(!1),e=t[0];return t=Dx.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=st,r=ii();if(rt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Nt===null)throw Error(ne(349));Or&30||Yg(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Rh(Zg.bind(null,i,o,t),[t]),i.flags|=2048,Ys(9,Kg.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ii(),e=Nt.identifierPrefix;if(rt){var n=Ti,i=bi;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=qs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Lx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kx={readContext:Bn,useCallback:o0,useContext:Bn,useEffect:_d,useImperativeHandle:r0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:s0,useReducer:Du,useRef:e0,useState:function(){return Du($s)},useDebugValue:xd,useDeferredValue:function(t){var e=Vn();return a0(e,yt.memoizedState,t)},useTransition:function(){var t=Du($s)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:qg,useSyncExternalStore:$g,useId:l0,unstable_isNewReconciler:!1},zx={readContext:Bn,useCallback:o0,useContext:Bn,useEffect:_d,useImperativeHandle:r0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:s0,useReducer:Ru,useRef:e0,useState:function(){return Ru($s)},useDebugValue:xd,useDeferredValue:function(t){var e=Vn();return yt===null?e.memoizedState=t:a0(e,yt.memoizedState,t)},useTransition:function(){var t=Ru($s)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:qg,useSyncExternalStore:$g,useId:l0,unstable_isNewReconciler:!1};function Wo(t,e){try{var n="",i=e;do n+=c_(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Iu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function of(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Fx=typeof WeakMap=="function"?WeakMap:Map;function d0(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Dl||(Dl=!0,mf=i),of(t,e)},n}function h0(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){of(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){of(t,e),typeof i!="function"&&(Qi===null?Qi=new Set([this]):Qi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Ih(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Fx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Zx.bind(null,t,e,n),e.then(t,t))}function Nh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,Zi(n,e,1))),n.lanes|=1),t)}var Ox=Ni.ReactCurrentOwner,un=!1;function en(t,e,n,i){e.child=t===null?jg(e,null,n,i):Go(e,t.child,n,i)}function zh(t,e,n,i,r){n=n.render;var o=e.ref;return No(e,r),i=gd(t,e,n,i,o,r),n=vd(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(rt&&n&&rd(e),e.flags|=1,en(t,e,i,r),e.child)}function Fh(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Cd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,p0(t,e,o,i,r)):(t=sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vs,n(s,i)&&t.ref===e.ref)return Ii(t,e,r)}return e.flags|=1,t=er(o,i),t.ref=e.ref,t.return=e,e.child=t}function p0(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Vs(o,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Ii(t,e,r)}return sf(t,e,n,i,r)}function m0(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Co,xn),xn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ke(Co,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Ke(Co,xn),xn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Ke(Co,xn),xn|=i;return en(t,e,r,n),e.child}function g0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sf(t,e,n,i,r){var o=fn(n)?zr:Yt.current;return o=Bo(e,o),No(e,r),n=gd(t,e,n,i,o,r),i=vd(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(rt&&i&&rd(e),e.flags|=1,en(t,e,n,r),e.child)}function Oh(t,e,n,i,r){if(fn(n)){var o=!0;Sl(e)}else o=!1;if(No(e,r),e.stateNode===null)il(t,e),Hg(e,n,i),rf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bn(u):(u=fn(n)?zr:Yt.current,u=Bo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Ph(e,s,i,u),Vi=!1;var f=e.memoizedState;s.state=f,Tl(e,i,s,r),l=e.memoizedState,a!==i||f!==l||cn.current||Vi?(typeof c=="function"&&(nf(e,n,c,i),l=e.memoizedState),(a=Vi||Ah(e,n,a,i,f,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Vg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:qn(e.type,a),s.props=u,d=e.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=fn(n)?zr:Yt.current,l=Bo(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Ph(e,s,i,l),Vi=!1,f=e.memoizedState,s.state=f,Tl(e,i,s,r);var x=e.memoizedState;a!==d||f!==x||cn.current||Vi?(typeof g=="function"&&(nf(e,n,g,i),x=e.memoizedState),(u=Vi||Ah(e,n,u,i,f,x,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),s.props=i,s.state=x,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return af(t,e,n,i,o,r)}function af(t,e,n,i,r,o){g0(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&wh(e,n,!1),Ii(t,e,o);i=e.stateNode,Ox.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Go(e,t.child,null,o),e.child=Go(e,null,a,o)):en(t,e,a,o),e.memoizedState=i.state,r&&wh(e,n,!0),e.child}function v0(t){var e=t.stateNode;e.pendingContext?Mh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mh(t,e.context,!1),dd(t,e.containerInfo)}function Uh(t,e,n,i,r){return Vo(),sd(r),e.flags|=256,en(t,e,n,i),e.child}var lf={dehydrated:null,treeContext:null,retryLane:0};function uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function _0(t,e,n){var i=e.pendingProps,r=ot.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ke(ot,r&1),t===null)return ef(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=$l(s,i,0,null),t=Rr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=uf(n),e.memoizedState=lf,t):yd(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ux(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=er(a,o):(o=Rr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?uf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=lf,i}return o=t.child,t=o.sibling,i=er(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function yd(t,e){return e=$l({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ta(t,e,n,i){return i!==null&&sd(i),Go(e,t.child,null,n),t=yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ux(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Iu(Error(ne(422))),Ta(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=$l({mode:"visible",children:i.children},r,0,null),o=Rr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Go(e,t.child,null,s),e.child.memoizedState=uf(s),e.memoizedState=lf,o);if(!(e.mode&1))return Ta(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ne(419)),i=Iu(o,i,void 0),Ta(t,e,s,i)}if(a=(s&t.childLanes)!==0,un||a){if(i=Nt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ri(t,r),Qn(i,t,r,-1))}return Td(),i=Iu(Error(ne(421))),Ta(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Qx.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Sn=Ki(r.nextSibling),wn=e,rt=!0,Yn=null,t!==null&&(In[Nn++]=bi,In[Nn++]=Ti,In[Nn++]=Fr,bi=t.id,Ti=t.overflow,Fr=e),e=yd(e,i.children),e.flags|=4096,e)}function Bh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),tf(t.return,e,n)}function Nu(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function x0(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(en(t,e,i.children,n),i=ot.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bh(t,n,e);else if(t.tag===19)Bh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ke(ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Nu(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Nu(e,!0,n,null,o);break;case"together":Nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ii(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Bx(t,e,n){switch(e.tag){case 3:v0(e),Vo();break;case 5:Xg(e);break;case 1:fn(e.type)&&Sl(e);break;case 4:dd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ke(El,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ke(ot,ot.current&1),e.flags|=128,null):n&e.child.childLanes?_0(t,e,n):(Ke(ot,ot.current&1),t=Ii(t,e,n),t!==null?t.sibling:null);Ke(ot,ot.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return x0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ke(ot,ot.current),i)break;return null;case 22:case 23:return e.lanes=0,m0(t,e,n)}return Ii(t,e,n)}var y0,cf,S0,M0;y0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cf=function(){};S0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ar(ui.current);var o=null;switch(n){case"input":r=Dc(t,r),i=Dc(t,i),o=[];break;case"select":r=at({},r,{value:void 0}),i=at({},i,{value:void 0}),o=[];break;case"textarea":r=Nc(t,r),i=Nc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xl)}zc(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ns.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r?.[u],i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ns.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ze("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};M0=function(t,e,n,i){n!==i&&(e.flags|=4)};function cs(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Vx(t,e,n){var i=e.pendingProps;switch(od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return fn(e.type)&&yl(),jt(e),null;case 3:return i=e.stateNode,Ho(),nt(cn),nt(Yt),pd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ea(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(_f(Yn),Yn=null))),cf(t,e),jt(e),null;case 5:hd(e);var r=Ar(Xs.current);if(n=e.type,t!==null&&e.stateNode!=null)S0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return jt(e),null}if(t=Ar(ui.current),Ea(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[si]=e,i[Ws]=o,t=(e.mode&1)!==0,n){case"dialog":Ze("cancel",i),Ze("close",i);break;case"iframe":case"object":case"embed":Ze("load",i);break;case"video":case"audio":for(r=0;r<Ms.length;r++)Ze(Ms[r],i);break;case"source":Ze("error",i);break;case"img":case"image":case"link":Ze("error",i),Ze("load",i);break;case"details":Ze("toggle",i);break;case"input":Yd(i,o),Ze("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Ze("invalid",i);break;case"textarea":Zd(i,o),Ze("invalid",i)}zc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&wa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&wa(i.textContent,a,t),r=["children",""+a]):Ns.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Ze("scroll",i)}switch(n){case"input":ma(i),Kd(i,o,!0);break;case"textarea":ma(i),Qd(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ym(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[si]=e,t[Ws]=i,y0(t,e,!1,!1),e.stateNode=t;e:{switch(s=Fc(n,i),n){case"dialog":Ze("cancel",t),Ze("close",t),r=i;break;case"iframe":case"object":case"embed":Ze("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ms.length;r++)Ze(Ms[r],t);r=i;break;case"source":Ze("error",t),r=i;break;case"img":case"image":case"link":Ze("error",t),Ze("load",t),r=i;break;case"details":Ze("toggle",t),r=i;break;case"input":Yd(t,i),r=Dc(t,i),Ze("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=at({},i,{value:void 0}),Ze("invalid",t);break;case"textarea":Zd(t,i),r=Nc(t,i),Ze("invalid",t);break;default:r=i}zc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Qm(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Km(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ks(t,l):typeof l=="number"&&ks(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ns.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Ze("scroll",t):l!=null&&Wf(t,o,l,s))}switch(n){case"input":ma(t),Kd(t,i,!1);break;case"textarea":ma(t),Qd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Lo(t,!!i.multiple,o,!1):i.defaultValue!=null&&Lo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)M0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Ar(Xs.current),Ar(ui.current),Ea(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(o=i.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:wa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wa(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return jt(e),null;case 13:if(nt(ot),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&Sn!==null&&e.mode&1&&!(e.flags&128))Ug(),Vo(),e.flags|=98560,o=!1;else if(o=Ea(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ne(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ne(317));o[si]=e}else Vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),o=!1}else Yn!==null&&(_f(Yn),Yn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ot.current&1?Mt===0&&(Mt=3):Td())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Ho(),cf(t,e),t===null&&Gs(e.stateNode.containerInfo),jt(e),null;case 10:return ud(e.type._context),jt(e),null;case 17:return fn(e.type)&&yl(),jt(e),null;case 19:if(nt(ot),o=e.memoizedState,o===null)return jt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)cs(o,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Cl(t),s!==null){for(e.flags|=128,cs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ke(ot,ot.current&1|2),e.child}t=t.sibling}o.tail!==null&&ft()>jo&&(e.flags|=128,i=!0,cs(o,!1),e.lanes=4194304)}else{if(!i)if(t=Cl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),cs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!rt)return jt(e),null}else 2*ft()-o.renderingStartTime>jo&&n!==1073741824&&(e.flags|=128,i=!0,cs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ft(),e.sibling=null,n=ot.current,Ke(ot,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return bd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function Gx(t,e){switch(od(e),e.tag){case 1:return fn(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ho(),nt(cn),nt(Yt),pd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hd(e),null;case 13:if(nt(ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(ot),null;case 4:return Ho(),null;case 10:return ud(e.type._context),null;case 22:case 23:return bd(),null;case 24:return null;default:return null}}var Ca=!1,qt=!1,Hx=typeof WeakSet=="function"?WeakSet:Set,ge=null;function To(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){lt(t,e,i)}else n.current=null}function ff(t,e,n){try{n()}catch(i){lt(t,e,i)}}var Vh=!1;function Wx(t,e){if(qc=gl,t=Tg(),id(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=s),f===o&&++c===i&&(l=s),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($c={focusedElem:t,selectionRange:n},gl=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,p=x.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?h:qn(e.type,h),p);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){lt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return x=Vh,Vh=!1,x}function Ds(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&ff(e,n,o)}r=r.next}while(r!==i)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function df(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w0(t){var e=t.alternate;e!==null&&(t.alternate=null,w0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[Ws],delete e[Zc],delete e[Tx],delete e[Cx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function E0(t){return t.tag===5||t.tag===3||t.tag===4}function Gh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xl));else if(i!==4&&(t=t.child,t!==null))for(hf(t,e,n),t=t.sibling;t!==null;)hf(t,e,n),t=t.sibling}function pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(pf(t,e,n),t=t.sibling;t!==null;)pf(t,e,n),t=t.sibling}var zt=null,$n=!1;function ki(t,e,n){for(n=n.child;n!==null;)b0(t,e,n),n=n.sibling}function b0(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(Ol,n)}catch{}switch(n.tag){case 5:qt||To(n,e);case 6:var i=zt,r=$n;zt=null,ki(t,e,n),zt=i,$n=r,zt!==null&&($n?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&($n?(t=zt,n=n.stateNode,t.nodeType===8?Cu(t.parentNode,n):t.nodeType===1&&Cu(t,n),Us(t)):Cu(zt,n.stateNode));break;case 4:i=zt,r=$n,zt=n.stateNode.containerInfo,$n=!0,ki(t,e,n),zt=i,$n=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ff(n,e,s),r=r.next}while(r!==i)}ki(t,e,n);break;case 1:if(!qt&&(To(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){lt(n,e,a)}ki(t,e,n);break;case 21:ki(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,ki(t,e,n),qt=i):ki(t,e,n);break;default:ki(t,e,n)}}function Hh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Hx),e.forEach(function(i){var r=Jx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,$n=!1;break e;case 3:zt=a.stateNode.containerInfo,$n=!0;break e;case 4:zt=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(zt===null)throw Error(ne(160));b0(o,s,r),zt=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){lt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)T0(e,t),e=e.sibling}function T0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),ti(t),i&4){try{Ds(3,t,t.return),Xl(3,t)}catch(h){lt(t,t.return,h)}try{Ds(5,t,t.return)}catch(h){lt(t,t.return,h)}}break;case 1:Gn(e,t),ti(t),i&512&&n!==null&&To(n,n.return);break;case 5:if(Gn(e,t),ti(t),i&512&&n!==null&&To(n,n.return),t.flags&32){var r=t.stateNode;try{ks(r,"")}catch(h){lt(t,t.return,h)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&qm(r,o),Fc(a,s);var u=Fc(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?Qm(r,d):c==="dangerouslySetInnerHTML"?Km(r,d):c==="children"?ks(r,d):Wf(r,c,d,u)}switch(a){case"input":Rc(r,o);break;case"textarea":$m(r,o);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Lo(r,!!o.multiple,g,!1):f!==!!o.multiple&&(o.defaultValue!=null?Lo(r,!!o.multiple,o.defaultValue,!0):Lo(r,!!o.multiple,o.multiple?[]:"",!1))}r[Ws]=o}catch(h){lt(t,t.return,h)}}break;case 6:if(Gn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(h){lt(t,t.return,h)}}break;case 3:if(Gn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Us(e.containerInfo)}catch(h){lt(t,t.return,h)}break;case 4:Gn(e,t),ti(t);break;case 13:Gn(e,t),ti(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(wd=ft())),i&4&&Hh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(u=qt)||c,Gn(e,t),qt=u):Gn(e,t),ti(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ge=t,c=t.child;c!==null;){for(d=ge=c;ge!==null;){switch(f=ge,g=f.child,f.tag){case 0:case 11:case 14:case 15:Ds(4,f,f.return);break;case 1:To(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(h){lt(i,n,h)}}break;case 5:To(f,f.return);break;case 22:if(f.memoizedState!==null){jh(d);continue}}g!==null?(g.return=f,ge=g):jh(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zm("display",s))}catch(h){lt(t,t.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){lt(t,t.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Gn(e,t),ti(t),i&4&&Hh(t);break;case 21:break;default:Gn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(E0(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ks(r,""),i.flags&=-33);var o=Gh(t);pf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Gh(t);hf(t,a,s);break;default:throw Error(ne(161))}}catch(l){lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jx(t,e,n){ge=t,C0(t)}function C0(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Ca;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=Ca;var u=qt;if(Ca=s,(qt=l)&&!u)for(ge=r;ge!==null;)s=ge,l=s.child,s.tag===22&&s.memoizedState!==null?Xh(r):l!==null?(l.return=s,ge=l):Xh(r);for(;o!==null;)ge=o,C0(o),o=o.sibling;ge=r,Ca=a,qt=u}Wh(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,ge=o):Wh(t)}}function Wh(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||Xl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Ch(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ch(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Us(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}qt||e.flags&512&&df(e)}catch(f){lt(e,e.return,f)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function jh(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Xh(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(l){lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){lt(e,r,l)}}var o=e.return;try{df(e)}catch(l){lt(e,o,l)}break;case 5:var s=e.return;try{df(e)}catch(l){lt(e,s,l)}}}catch(l){lt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var Xx=Math.ceil,Ll=Ni.ReactCurrentDispatcher,Sd=Ni.ReactCurrentOwner,Un=Ni.ReactCurrentBatchConfig,Ge=0,Nt=null,gt=null,Ut=0,xn=0,Co=fr(0),Mt=0,Ks=null,Ur=0,ql=0,Md=0,Rs=null,an=null,wd=0,jo=1/0,xi=null,Dl=!1,mf=null,Qi=null,Aa=!1,ji=null,Rl=0,Is=0,gf=null,rl=-1,ol=0;function tn(){return Ge&6?ft():rl!==-1?rl:rl=ft()}function Ji(t){return t.mode&1?Ge&2&&Ut!==0?Ut&-Ut:Px.transition!==null?(ol===0&&(ol=cg()),ol):(t=qe,t!==0||(t=window.event,t=t===void 0?16:vg(t.type)),t):1}function Qn(t,e,n,i){if(50<Is)throw Is=0,gf=null,Error(ne(185));oa(t,n,i),(!(Ge&2)||t!==Nt)&&(t===Nt&&(!(Ge&2)&&(ql|=n),Mt===4&&Hi(t,Ut)),dn(t,i),n===1&&Ge===0&&!(e.mode&1)&&(jo=ft()+500,Hl&&dr()))}function dn(t,e){var n=t.callbackNode;P_(t,e);var i=ml(t,t===Nt?Ut:0);if(i===0)n!==null&&th(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&th(n),e===1)t.tag===0?Ax(qh.bind(null,t)):zg(qh.bind(null,t)),Ex(function(){!(Ge&6)&&dr()}),n=null;else{switch(fg(i)){case 1:n=Yf;break;case 4:n=lg;break;case 16:n=pl;break;case 536870912:n=ug;break;default:n=pl}n=k0(n,A0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function A0(t,e){if(rl=-1,ol=0,Ge&6)throw Error(ne(327));var n=t.callbackNode;if(ko()&&t.callbackNode!==n)return null;var i=ml(t,t===Nt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Il(t,i);else{e=i;var r=Ge;Ge|=2;var o=L0();(Nt!==t||Ut!==e)&&(xi=null,jo=ft()+500,Dr(t,e));do try{Yx();break}catch(a){P0(t,a)}while(1);ld(),Ll.current=o,Ge=r,gt!==null?e=0:(Nt=null,Ut=0,e=Mt)}if(e!==0){if(e===2&&(r=Gc(t),r!==0&&(i=r,e=vf(t,r))),e===1)throw n=Ks,Dr(t,0),Hi(t,i),dn(t,ft()),n;if(e===6)Hi(t,i);else{if(r=t.current.alternate,!(i&30)&&!qx(r)&&(e=Il(t,i),e===2&&(o=Gc(t),o!==0&&(i=o,e=vf(t,o))),e===1))throw n=Ks,Dr(t,0),Hi(t,i),dn(t,ft()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Mr(t,an,xi);break;case 3:if(Hi(t,i),(i&130023424)===i&&(e=wd+500-ft(),10<e)){if(ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Kc(Mr.bind(null,t,an,xi),e);break}Mr(t,an,xi);break;case 4:if(Hi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Zn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Xx(i/1960))-i,10<i){t.timeoutHandle=Kc(Mr.bind(null,t,an,xi),i);break}Mr(t,an,xi);break;case 5:Mr(t,an,xi);break;default:throw Error(ne(329))}}}return dn(t,ft()),t.callbackNode===n?A0.bind(null,t):null}function vf(t,e){var n=Rs;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Il(t,e),t!==2&&(e=an,an=n,e!==null&&_f(e)),t}function _f(t){an===null?an=t:an.push.apply(an,t)}function qx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ei(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(t,e){for(e&=~Md,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function qh(t){if(Ge&6)throw Error(ne(327));ko();var e=ml(t,0);if(!(e&1))return dn(t,ft()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var i=Gc(t);i!==0&&(e=i,n=vf(t,i))}if(n===1)throw n=Ks,Dr(t,0),Hi(t,e),dn(t,ft()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,an,xi),dn(t,ft()),null}function Ed(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(jo=ft()+500,Hl&&dr())}}function Br(t){ji!==null&&ji.tag===0&&!(Ge&6)&&ko();var e=Ge;Ge|=1;var n=Un.transition,i=qe;try{if(Un.transition=null,qe=1,t)return t()}finally{qe=i,Un.transition=n,Ge=e,!(Ge&6)&&dr()}}function bd(){xn=Co.current,nt(Co)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wx(n)),gt!==null)for(n=gt.return;n!==null;){var i=n;switch(od(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yl();break;case 3:Ho(),nt(cn),nt(Yt),pd();break;case 5:hd(i);break;case 4:Ho();break;case 13:nt(ot);break;case 19:nt(ot);break;case 10:ud(i.type._context);break;case 22:case 23:bd()}n=n.return}if(Nt=t,gt=t=er(t.current,null),Ut=xn=e,Mt=0,Ks=null,Md=ql=Ur=0,an=Rs=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Cr=null}return t}function P0(t,e){do{var n=gt;try{if(ld(),tl.current=Pl,Al){for(var i=st.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Al=!1}if(Or=0,Dt=yt=st=null,Ls=!1,qs=0,Sd.current=null,n===null||n.return===null){Mt=1,Ks=e,gt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Nh(s);if(g!==null){g.flags&=-257,kh(g,s,a,o,e),g.mode&1&&Ih(o,u,e),e=g,l=u;var x=e.updateQueue;if(x===null){var h=new Set;h.add(l),e.updateQueue=h}else x.add(l);break e}else{if(!(e&1)){Ih(o,u,e),Td();break e}l=Error(ne(426))}}else if(rt&&a.mode&1){var p=Nh(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),kh(p,s,a,o,e),sd(Wo(l,a));break e}}o=l=Wo(l,a),Mt!==4&&(Mt=2),Rs===null?Rs=[o]:Rs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var m=d0(o,l,e);Th(o,m);break e;case 1:a=l;var v=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Qi===null||!Qi.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var M=h0(o,a,e);Th(o,M);break e}}o=o.return}while(o!==null)}R0(n)}catch(S){e=S,gt===n&&n!==null&&(gt=n=n.return);continue}break}while(1)}function L0(){var t=Ll.current;return Ll.current=Pl,t===null?Pl:t}function Td(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Nt===null||!(Ur&268435455)&&!(ql&268435455)||Hi(Nt,Ut)}function Il(t,e){var n=Ge;Ge|=2;var i=L0();(Nt!==t||Ut!==e)&&(xi=null,Dr(t,e));do try{$x();break}catch(r){P0(t,r)}while(1);if(ld(),Ge=n,Ll.current=i,gt!==null)throw Error(ne(261));return Nt=null,Ut=0,Mt}function $x(){for(;gt!==null;)D0(gt)}function Yx(){for(;gt!==null&&!y_();)D0(gt)}function D0(t){var e=N0(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?R0(t):gt=e,Sd.current=null}function R0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Gx(n,e),n!==null){n.flags&=32767,gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,gt=null;return}}else if(n=Vx(n,e,xn),n!==null){gt=n;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=t}while(e!==null);Mt===0&&(Mt=5)}function Mr(t,e,n){var i=qe,r=Un.transition;try{Un.transition=null,qe=1,Kx(t,e,n,i)}finally{Un.transition=r,qe=i}return null}function Kx(t,e,n,i){do ko();while(ji!==null);if(Ge&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(L_(t,o),t===Nt&&(gt=Nt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Aa||(Aa=!0,k0(pl,function(){return ko(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Un.transition,Un.transition=null;var s=qe;qe=1;var a=Ge;Ge|=4,Sd.current=null,Wx(t,n),T0(n,t),gx($c),gl=!!qc,$c=qc=null,t.current=n,jx(n),S_(),Ge=a,qe=s,Un.transition=o}else t.current=n;if(Aa&&(Aa=!1,ji=t,Rl=r),o=t.pendingLanes,o===0&&(Qi=null),E_(n.stateNode),dn(t,ft()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dl)throw Dl=!1,t=mf,mf=null,t;return Rl&1&&t.tag!==0&&ko(),o=t.pendingLanes,o&1?t===gf?Is++:(Is=0,gf=t):Is=0,dr(),null}function ko(){if(ji!==null){var t=fg(Rl),e=Un.transition,n=qe;try{if(Un.transition=null,qe=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,Rl=0,Ge&6)throw Error(ne(331));var r=Ge;for(Ge|=4,ge=t.current;ge!==null;){var o=ge,s=o.child;if(ge.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ge=u;ge!==null;){var c=ge;switch(c.tag){case 0:case 11:case 15:Ds(8,c,o)}var d=c.child;if(d!==null)d.return=c,ge=d;else for(;ge!==null;){c=ge;var f=c.sibling,g=c.return;if(w0(c),c===u){ge=null;break}if(f!==null){f.return=g,ge=f;break}ge=g}}}var x=o.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}ge=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ge=s;else e:for(;ge!==null;){if(o=ge,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ds(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,ge=m;break e}ge=o.return}}var v=t.current;for(ge=v;ge!==null;){s=ge;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,ge=_;else e:for(s=v;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xl(9,a)}}catch(S){lt(a,a.return,S)}if(a===s){ge=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ge=M;break e}ge=a.return}}if(Ge=r,dr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(Ol,t)}catch{}i=!0}return i}finally{qe=n,Un.transition=e}}return!1}function $h(t,e,n){e=Wo(n,e),e=d0(t,e,1),t=Zi(t,e,1),e=tn(),t!==null&&(oa(t,1,e),dn(t,e))}function lt(t,e,n){if(t.tag===3)$h(t,t,n);else for(;e!==null;){if(e.tag===3){$h(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qi===null||!Qi.has(i))){t=Wo(n,t),t=h0(e,t,1),e=Zi(e,t,1),t=tn(),e!==null&&(oa(e,1,t),dn(e,t));break}}e=e.return}}function Zx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ut&n)===n&&(Mt===4||Mt===3&&(Ut&130023424)===Ut&&500>ft()-wd?Dr(t,0):Md|=n),dn(t,e)}function I0(t,e){e===0&&(t.mode&1?(e=_a,_a<<=1,!(_a&130023424)&&(_a=4194304)):e=1);var n=tn();t=Ri(t,e),t!==null&&(oa(t,e,n),dn(t,n))}function Qx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),I0(t,n)}function Jx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),I0(t,n)}var N0;N0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,Bx(t,e,n);un=!!(t.flags&131072)}else un=!1,rt&&e.flags&1048576&&Fg(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;il(t,e),t=e.pendingProps;var r=Bo(e,Yt.current);No(e,n),r=gd(null,e,i,t,r,n);var o=vd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(o=!0,Sl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,fd(e),r.updater=Wl,e.stateNode=r,r._reactInternals=e,rf(e,i,t,n),e=af(null,e,i,!0,o,n)):(e.tag=0,rt&&o&&rd(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ty(i),t=qn(i,t),r){case 0:e=sf(null,e,i,t,n);break e;case 1:e=Oh(null,e,i,t,n);break e;case 11:e=zh(null,e,i,t,n);break e;case 14:e=Fh(null,e,i,qn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),sf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Oh(t,e,i,r,n);case 3:e:{if(v0(e),t===null)throw Error(ne(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Vg(t,e),Tl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Wo(Error(ne(423)),e),e=Uh(t,e,i,n,r);break e}else if(i!==r){r=Wo(Error(ne(424)),e),e=Uh(t,e,i,n,r);break e}else for(Sn=Ki(e.stateNode.containerInfo.firstChild),wn=e,rt=!0,Yn=null,n=jg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vo(),i===r){e=Ii(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return Xg(e),t===null&&ef(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Yc(i,r)?s=null:o!==null&&Yc(i,o)&&(e.flags|=32),g0(t,e),en(t,e,s,n),e.child;case 6:return t===null&&ef(e),null;case 13:return _0(t,e,n);case 4:return dd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Go(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),zh(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,Ke(El,i._currentValue),i._currentValue=s,o!==null)if(ei(o.value,s)){if(o.children===r.children&&!cn.current){e=Ii(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ai(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),tf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ne(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),tf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,No(e,n),r=Bn(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),Fh(t,e,i,r,n);case 15:return p0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),il(t,e),e.tag=1,fn(i)?(t=!0,Sl(e)):t=!1,No(e,n),Hg(e,i,r),rf(e,i,r,n),af(null,e,i,!0,t,n);case 19:return x0(t,e,n);case 22:return m0(t,e,n)}throw Error(ne(156,e.tag))};function k0(t,e){return ag(t,e)}function ey(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new ey(t,e,n,i)}function Cd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ty(t){if(typeof t=="function")return Cd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xf)return 11;if(t===qf)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Cd(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case vo:return Rr(n.children,r,o,e);case jf:s=8,r|=8;break;case Cc:return t=On(12,n,e,r|2),t.elementType=Cc,t.lanes=o,t;case Ac:return t=On(13,n,e,r),t.elementType=Ac,t.lanes=o,t;case Pc:return t=On(19,n,e,r),t.elementType=Pc,t.lanes=o,t;case Wm:return $l(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gm:s=10;break e;case Hm:s=9;break e;case Xf:s=11;break e;case qf:s=14;break e;case Bi:s=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=On(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Rr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function $l(t,e,n,i){return t=On(22,t,i,e),t.elementType=Wm,t.lanes=n,t.stateNode={isHidden:!1},t}function ku(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function zu(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ny(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ad(t,e,n,i,r,o,s,a,l){return t=new ny(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=On(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(o),t}function iy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:go,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function z0(t){if(!t)return sr;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(fn(n))return kg(t,n,e)}return e}function F0(t,e,n,i,r,o,s,a,l){return t=Ad(n,i,!0,t,r,o,s,a,l),t.context=z0(null),n=t.current,i=tn(),r=Ji(n),o=Ai(i,r),o.callback=e??null,Zi(n,o,r),t.current.lanes=r,oa(t,r,i),dn(t,i),t}function Yl(t,e,n,i){var r=e.current,o=tn(),s=Ji(r);return n=z0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Zi(r,e,s),t!==null&&(Qn(t,r,s,o),el(t,r,s)),s}function Nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pd(t,e){Yh(t,e),(t=t.alternate)&&Yh(t,e)}function ry(){return null}var O0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ld(t){this._internalRoot=t}Kl.prototype.render=Ld.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Yl(t,e,null,null)};Kl.prototype.unmount=Ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){Yl(null,t,null,null)}),e[Di]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gi.length&&e!==0&&e<Gi[n].priority;n++);Gi.splice(n,0,t),n===0&&gg(t)}};function Dd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kh(){}function oy(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=Nl(s);o.call(u)}}var s=F0(e,i,t,0,null,!1,!1,"",Kh);return t._reactRootContainer=s,t[Di]=s.current,Gs(t.nodeType===8?t.parentNode:t),Br(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Nl(l);a.call(u)}}var l=Ad(t,0,!1,null,null,!1,!1,"",Kh);return t._reactRootContainer=l,t[Di]=l.current,Gs(t.nodeType===8?t.parentNode:t),Br(function(){Yl(e,l,n,i)}),l}function Ql(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Nl(s);a.call(l)}}Yl(e,s,t,r)}else s=oy(n,e,t,r,i);return Nl(s)}dg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ss(e.pendingLanes);n!==0&&(Kf(e,n|1),dn(e,ft()),!(Ge&6)&&(jo=ft()+500,dr()))}break;case 13:Br(function(){var i=Ri(t,1);if(i!==null){var r=tn();Qn(i,t,1,r)}}),Pd(t,1)}};Zf=function(t){if(t.tag===13){var e=Ri(t,134217728);if(e!==null){var n=tn();Qn(e,t,134217728,n)}Pd(t,134217728)}};hg=function(t){if(t.tag===13){var e=Ji(t),n=Ri(t,e);if(n!==null){var i=tn();Qn(n,t,e,i)}Pd(t,e)}};pg=function(){return qe};mg=function(t,e){var n=qe;try{return qe=t,e()}finally{qe=n}};Uc=function(t,e,n){switch(e){case"input":if(Rc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Gl(i);if(!r)throw Error(ne(90));Xm(i),Rc(i,r)}}}break;case"textarea":$m(t,n);break;case"select":e=n.value,e!=null&&Lo(t,!!n.multiple,e,!1)}};tg=Ed;ng=Br;var sy={usingClientEntryPoint:!1,Events:[aa,So,Gl,Jm,eg,Ed]},fs={findFiberByHostInstance:Tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ay={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=og(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||ry,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{Ol=Pa.inject(ay),li=Pa}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sy;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dd(e))throw Error(ne(200));return iy(t,e,null,n)};Cn.createRoot=function(t,e){if(!Dd(t))throw Error(ne(299));var n=!1,i="",r=O0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ad(t,1,!1,null,null,n,!1,i,r),t[Di]=e.current,Gs(t.nodeType===8?t.parentNode:t),new Ld(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=og(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return Br(t)};Cn.hydrate=function(t,e,n){if(!Zl(e))throw Error(ne(200));return Ql(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Dd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=O0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=F0(e,null,t,1,n??null,r,!1,o,s),t[Di]=e.current,Gs(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Kl(e)};Cn.render=function(t,e,n){if(!Zl(e))throw Error(ne(200));return Ql(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(ne(40));return t._reactRootContainer?(Br(function(){Ql(null,null,t,!1,function(){t._reactRootContainer=null,t[Di]=null})}),!0):!1};Cn.unstable_batchedUpdates=Ed;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Zl(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Ql(t,e,n,!1,i)};Cn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Cn})(r_);var Zh=Ec;wc.createRoot=Zh.createRoot,wc.hydrateRoot=Zh.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zs(){return Zs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Zs.apply(this,arguments)}var Xi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xi||(Xi={}));const Qh="popstate";function ly(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return xf("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:kl(r)}return cy(e,n,null,t)}function Et(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Rd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function uy(){return Math.random().toString(36).substr(2,8)}function Jh(t,e){return{usr:t.state,key:t.key,idx:e}}function xf(t,e,n,i){return n===void 0&&(n=null),Zs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?es(e):e,{state:n,key:e&&e.key||i||uy()})}function kl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function es(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function cy(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=Xi.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(Zs({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=Xi.Pop;let p=c(),m=p==null?null:p-u;u=p,l&&l({action:a,location:h.location,delta:m})}function f(p,m){a=Xi.Push;let v=xf(h.location,p,m);n&&n(v,p),u=c()+1;let _=Jh(v,u),M=h.createHref(v);try{s.pushState(_,"",M)}catch{r.location.assign(M)}o&&l&&l({action:a,location:h.location,delta:1})}function g(p,m){a=Xi.Replace;let v=xf(h.location,p,m);n&&n(v,p),u=c();let _=Jh(v,u),M=h.createHref(v);s.replaceState(_,"",M),o&&l&&l({action:a,location:h.location,delta:0})}function x(p){let m=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:kl(p);return Et(m,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,m)}let h={get action(){return a},get location(){return t(r,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Qh,d),l=p,()=>{r.removeEventListener(Qh,d),l=null}},createHref(p){return e(r,p)},createURL:x,encodeLocation(p){let m=x(p);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:g,go(p){return s.go(p)}};return h}var ep;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ep||(ep={}));function fy(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?es(e):e,r=Id(i.pathname||"/",n);if(r==null)return null;let o=U0(t);dy(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Sy(o[a],Ey(r));return s}function U0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Et(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=tr([i,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Et(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),U0(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:xy(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of B0(o.path))r(o,s,l)}),e}function B0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=B0(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function dy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const hy=/^:\w+$/,py=3,my=2,gy=1,vy=10,_y=-2,tp=t=>t==="*";function xy(t,e){let n=t.split("/"),i=n.length;return n.some(tp)&&(i+=_y),e&&(i+=my),n.filter(r=>!tp(r)).reduce((r,o)=>r+(hy.test(o)?py:o===""?gy:vy),i)}function yy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Sy(t,e){let{routesMeta:n}=t,i={},r="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",c=My({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(i,c.params);let d=a.route;o.push({params:i,pathname:tr([r,c.pathname]),pathnameBase:Ay(tr([r,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(r=tr([r,c.pathnameBase]))}return o}function My(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=wy(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";s=o.slice(0,o.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=by(a[d]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:t}}function wy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Rd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(i.push(a),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Ey(t){try{return decodeURI(t)}catch(e){return Rd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function by(t,e){try{return decodeURIComponent(t)}catch(n){return Rd(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Id(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function Ty(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?es(t):t;return{pathname:n?n.startsWith("/")?n:Cy(n,e):e,search:Py(i),hash:Ly(r)}}function Cy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Fu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function V0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function G0(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=es(t):(r=Zs({},t),Et(!r.pathname||!r.pathname.includes("?"),Fu("?","pathname","search",r)),Et(!r.pathname||!r.pathname.includes("#"),Fu("#","pathname","hash",r)),Et(!r.search||!r.search.includes("#"),Fu("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(i||s==null)a=n;else{let d=e.length-1;if(s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=Ty(r,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const tr=t=>t.join("/").replace(/\/\/+/g,"/"),Ay=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Py=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ly=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Dy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ry=["post","put","patch","delete"];[...Ry];/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Iy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const Ny=typeof Object.is=="function"?Object.is:Iy,{useState:ky,useEffect:zy,useLayoutEffect:Fy,useDebugValue:Oy}=Mc;function Uy(t,e,n){const i=e(),[{inst:r},o]=ky({inst:{value:i,getSnapshot:e}});return Fy(()=>{r.value=i,r.getSnapshot=e,Ou(r)&&o({inst:r})},[t,i,e]),zy(()=>(Ou(r)&&o({inst:r}),t(()=>{Ou(r)&&o({inst:r})})),[t]),Oy(i),i}function Ou(t){const e=t.getSnapshot,n=t.value;try{const i=e();return!Ny(n,i)}catch{return!0}}function By(t,e,n){return e()}const Vy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gy=!Vy,Hy=Gy?By:Uy;"useSyncExternalStore"in Mc&&(t=>t.useSyncExternalStore)(Mc);const H0=ue.createContext(null),W0=ue.createContext(null),ua=ue.createContext(null),Jl=ue.createContext(null),ts=ue.createContext({outlet:null,matches:[]}),j0=ue.createContext(null);function yf(){return yf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},yf.apply(this,arguments)}function Wy(t,e){let{relative:n}=e===void 0?{}:e;ca()||Et(!1);let{basename:i,navigator:r}=ue.useContext(ua),{hash:o,pathname:s,search:a}=X0(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:tr([i,s])),r.createHref({pathname:l,search:a,hash:o})}function ca(){return ue.useContext(Jl)!=null}function eu(){return ca()||Et(!1),ue.useContext(Jl).location}function jy(){ca()||Et(!1);let{basename:t,navigator:e}=ue.useContext(ua),{matches:n}=ue.useContext(ts),{pathname:i}=eu(),r=JSON.stringify(V0(n).map(a=>a.pathnameBase)),o=ue.useRef(!1);return ue.useEffect(()=>{o.current=!0}),ue.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){e.go(a);return}let u=G0(a,JSON.parse(r),i,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:tr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,r,i])}function X0(t,e){let{relative:n}=e===void 0?{}:e,{matches:i}=ue.useContext(ts),{pathname:r}=eu(),o=JSON.stringify(V0(i).map(s=>s.pathnameBase));return ue.useMemo(()=>G0(t,JSON.parse(o),r,n==="path"),[t,o,r,n])}function Xy(t,e){ca()||Et(!1);let{navigator:n}=ue.useContext(ua),i=ue.useContext(W0),{matches:r}=ue.useContext(ts),o=r[r.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=eu(),u;if(e){var c;let h=typeof e=="string"?es(e):e;a==="/"||(c=h.pathname)!=null&&c.startsWith(a)||Et(!1),u=h}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",g=fy(t,{pathname:f}),x=Ky(g&&g.map(h=>Object.assign({},h,{params:Object.assign({},s,h.params),pathname:tr([a,n.encodeLocation?n.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?a:tr([a,n.encodeLocation?n.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),r,i||void 0);return e&&x?ue.createElement(Jl.Provider,{value:{location:yf({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Xi.Pop}},x):x}function qy(){let t=eS(),e=Dy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return ue.createElement(ue.Fragment,null,ue.createElement("h2",null,"Unexpected Application Error!"),ue.createElement("h3",{style:{fontStyle:"italic"}},e),n?ue.createElement("pre",{style:r},n):null,o)}class $y extends ue.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?ue.createElement(ts.Provider,{value:this.props.routeContext},ue.createElement(j0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yy(t){let{routeContext:e,match:n,children:i}=t,r=ue.useContext(H0);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ue.createElement(ts.Provider,{value:e},i)}function Ky(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let i=t,r=n?.errors;if(r!=null){let o=i.findIndex(s=>s.route.id&&r?.[s.route.id]);o>=0||Et(!1),i=i.slice(0,Math.min(i.length,o+1))}return i.reduceRight((o,s,a)=>{let l=s.route.id?r?.[s.route.id]:null,u=null;n&&(s.route.ErrorBoundary?u=ue.createElement(s.route.ErrorBoundary,null):s.route.errorElement?u=s.route.errorElement:u=ue.createElement(qy,null));let c=e.concat(i.slice(0,a+1)),d=()=>{let f=o;return l?f=u:s.route.Component?f=ue.createElement(s.route.Component,null):s.route.element&&(f=s.route.element),ue.createElement(Yy,{match:s,routeContext:{outlet:o,matches:c},children:f})};return n&&(s.route.ErrorBoundary||s.route.errorElement||a===0)?ue.createElement($y,{location:n.location,component:u,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var np;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(np||(np={}));var zl;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(zl||(zl={}));function Zy(t){let e=ue.useContext(W0);return e||Et(!1),e}function Qy(t){let e=ue.useContext(ts);return e||Et(!1),e}function Jy(t){let e=Qy(),n=e.matches[e.matches.length-1];return n.route.id||Et(!1),n.route.id}function eS(){var t;let e=ue.useContext(j0),n=Zy(zl.UseRouteError),i=Jy(zl.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function al(t){Et(!1)}function tS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Xi.Pop,navigator:o,static:s=!1}=t;ca()&&Et(!1);let a=e.replace(/^\/*/,"/"),l=ue.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof i=="string"&&(i=es(i));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=i,x=ue.useMemo(()=>{let h=Id(u,a);return h==null?null:{location:{pathname:h,search:c,hash:d,state:f,key:g},navigationType:r}},[a,u,c,d,f,g,r]);return x==null?null:ue.createElement(ua.Provider,{value:l},ue.createElement(Jl.Provider,{children:n,value:x}))}function nS(t){let{children:e,location:n}=t,i=ue.useContext(H0),r=i&&!e?i.router.routes:Sf(e);return Xy(r,n)}var ip;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(ip||(ip={}));new Promise(()=>{});function Sf(t,e){e===void 0&&(e=[]);let n=[];return ue.Children.forEach(t,(i,r)=>{if(!ue.isValidElement(i))return;if(i.type===ue.Fragment){n.push.apply(n,Sf(i.props.children,e));return}i.type!==al&&Et(!1),!i.props.index||!i.props.children||Et(!1);let o=[...e,r],s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Sf(i.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mf(){return Mf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Mf.apply(this,arguments)}function iS(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function rS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function oS(t,e){return t.button===0&&(!e||e==="_self")&&!rS(t)}const sS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function aS(t){let{basename:e,children:n,window:i}=t,r=ue.useRef();r.current==null&&(r.current=ly({window:i,v5Compat:!0}));let o=r.current,[s,a]=ue.useState({action:o.action,location:o.location});return ue.useLayoutEffect(()=>o.listen(a),[o]),ue.createElement(tS,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:o})}const lS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,q0=ue.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=e,d=iS(e,sS),{basename:f}=ue.useContext(ua),g,x=!1;if(typeof u=="string"&&uS.test(u)&&(g=u,lS)){let v=new URL(window.location.href),_=u.startsWith("//")?new URL(v.protocol+u):new URL(u),M=Id(_.pathname,f);_.origin===v.origin&&M!=null?u=M+_.search+_.hash:x=!0}let h=Wy(u,{relative:r}),p=cS(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:r});function m(v){i&&i(v),v.defaultPrevented||p(v)}return ue.createElement("a",Mf({},d,{href:g||h,onClick:x||o?i:m,ref:n,target:l}))});var rp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(rp||(rp={}));var op;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(op||(op={}));function cS(t,e){let{target:n,replace:i,state:r,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=jy(),l=eu(),u=X0(t,{relative:s});return ue.useCallback(c=>{if(oS(c,n)){c.preventDefault();let d=i!==void 0?i:kl(l)===kl(u);a(t,{replace:d,state:r,preventScrollReset:o,relative:s})}},[l,a,u,i,r,n,t,o,s])}const fS="modulepreload",dS=function(t){return"/Builder3D/"+t},sp={},ap=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=dS(o),o in sp)return;sp[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!i)for(let c=r.length-1;c>=0;c--){const d=r[c];if(d.href===o&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":fS,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nd="149",Zr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hS=0,lp=1,pS=2,$0=1,Y0=2,ws=3,ar=0,En=1,Ft=2,nr=0,zo=1,up=2,cp=3,fp=4,mS=5,mo=100,gS=101,vS=102,dp=103,hp=104,_S=200,xS=201,yS=202,SS=203,K0=204,Z0=205,MS=206,wS=207,ES=208,bS=209,TS=210,CS=0,AS=1,PS=2,wf=3,LS=4,DS=5,RS=6,IS=7,Q0=0,NS=1,kS=2,Pi=0,zS=1,FS=2,OS=3,US=4,BS=5,J0=300,Xo=301,qo=302,Ef=303,bf=304,tu=306,ai=1e3,Kn=1001,Tf=1002,St=1003,pp=1004,Uu=1005,kn=1006,VS=1007,Qs=1008,Vr=1009,GS=1010,HS=1011,ev=1012,WS=1013,Pr=1014,Lr=1015,Js=1016,jS=1017,XS=1018,Fo=1020,qS=1021,Fn=1023,$S=1024,YS=1025,Ir=1026,$o=1027,KS=1028,ZS=1029,QS=1030,JS=1031,e1=1033,Bu=33776,Vu=33777,Gu=33778,Hu=33779,mp=35840,gp=35841,vp=35842,_p=35843,t1=36196,xp=37492,yp=37496,Sp=37808,Mp=37809,wp=37810,Ep=37811,bp=37812,Tp=37813,Cp=37814,Ap=37815,Pp=37816,Lp=37817,Dp=37818,Rp=37819,Ip=37820,Np=37821,Wu=36492,n1=36283,kp=36284,zp=36285,Fp=36286,Gr=3e3,Qe=3001,i1=3200,r1=3201,o1=0,s1=1,ri="srgb",ea="srgb-linear",ju=7680,a1=519,Op=35044,Up="300 es",Cf=1035;class $r{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xu=Math.PI/180,Bp=180/Math.PI;function fa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function ln(t,e,n){return Math.max(e,Math.min(n,t))}function l1(t,e){return(t%e+e)%e}function qu(t,e,n){return(1-n)*t+n*e}function Vp(t){return(t&t-1)===0&&t!==0}function Af(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function La(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mn{constructor(){Mn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],g=i[5],x=i[8],h=r[0],p=r[3],m=r[6],v=r[1],_=r[4],M=r[7],S=r[2],C=r[5],P=r[8];return o[0]=s*h+a*v+l*S,o[3]=s*p+a*_+l*C,o[6]=s*m+a*M+l*P,o[1]=u*h+c*v+d*S,o[4]=u*p+c*_+d*C,o[7]=u*m+c*M+d*P,o[2]=f*h+g*v+x*S,o[5]=f*p+g*_+x*C,o[8]=f*m+g*M+x*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*s-a*u,f=a*l-c*o,g=u*o-s*l,x=n*d+i*f+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/x;return e[0]=d*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*s)*h,e[3]=f*h,e[4]=(c*n-r*l)*h,e[5]=(r*o-a*n)*h,e[6]=g*h,e[7]=(i*l-u*n)*h,e[8]=(s*n-i*o)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply($u.makeScale(e,n)),this}rotate(e){return this.premultiply($u.makeRotation(-e)),this}translate(e,n){return this.premultiply($u.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $u=new Mn;function tv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ta(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Nr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ll(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Yu={[ri]:{[ea]:Nr},[ea]:{[ri]:ll}},Qt={legacyMode:!0,get workingColorSpace(){return ea},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(Yu[e]&&Yu[e][n]!==void 0){const i=Yu[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vt={r:0,g:0,b:0},Hn={h:0,s:0,l:0},Da={h:0,s:0,l:0};function Ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Ra(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qt.workingColorSpace){if(e=l1(e,1),n=ln(n,0,1),i=ln(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Ku(s,o,e+1/3),this.g=Ku(s,o,e),this.b=Ku(s,o,e-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(e,n=ri){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,Qt.toWorkingColorSpace(this,n),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,Qt.toWorkingColorSpace(this,n),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(o[1])/360,u=parseFloat(o[2])/100,c=parseFloat(o[3])/100;return i(o[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,Qt.toWorkingColorSpace(this,n),this;if(s===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,Qt.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=ri){const i=nv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}copyLinearToSRGB(e){return this.r=ll(e.r),this.g=ll(e.g),this.b=ll(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Qt.fromWorkingColorSpace(Ra(this,vt),e),ln(vt.r*255,0,255)<<16^ln(vt.g*255,0,255)<<8^ln(vt.b*255,0,255)<<0}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ra(this,vt),n);const i=vt.r,r=vt.g,o=vt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=c<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ra(this,vt),n),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=ri){return Qt.fromWorkingColorSpace(Ra(this,vt),e),e!==ri?`color(${e} ${vt.r} ${vt.g} ${vt.b})`:`rgb(${vt.r*255|0},${vt.g*255|0},${vt.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(Hn),Hn.h+=e,Hn.s+=n,Hn.l+=i,this.setHSL(Hn.h,Hn.s,Hn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hn),e.getHSL(Da);const i=qu(Hn.h,Da.h,n),r=qu(Hn.s,Da.s,n),o=qu(Hn.l,Da.l,n);return this.setHSL(i,r,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}tt.NAMES=nv;let Jr;class iv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jr===void 0&&(Jr=ta("canvas")),Jr.width=e.width,Jr.height=e.height;const i=Jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Jr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ta("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Nr(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Nr(n[i]/255)*255):n[i]=Nr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class rv{constructor(e=null){this.isSource=!0,this.uuid=fa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Zu(r[s].image)):o.push(Zu(r[s]))}else o=Zu(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Zu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?iv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let u1=0;class hn extends $r{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Kn,r=Kn,o=kn,s=Qs,a=Fn,l=Vr,u=hn.DEFAULT_ANISOTROPY,c=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=fa(),this.name="",this.source=new rv(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==J0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ai:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ai:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=J0;hn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],g=l[5],x=l[9],h=l[2],p=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-h)<.01&&Math.abs(x-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+h)<.1&&Math.abs(x+p)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,M=(g+1)/2,S=(m+1)/2,C=(c+f)/4,P=(d+h)/4,y=(x+p)/4;return _>M&&_>S?_<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(_),r=C/i,o=P/i):M>S?M<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(M),i=C/r,o=y/r):S<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(S),i=P/o,r=y/o),this.set(i,r,o,n),this}let v=Math.sqrt((p-x)*(p-x)+(d-h)*(d-h)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(d-h)/v,this.z=(f-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hr extends $r{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:kn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new rv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ov extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class c1 extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=o[s+0],g=o[s+1],x=o[s+2],h=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=x,e[n+3]=h;return}if(d!==h||l!==f||u!==g||c!==x){let p=1-a;const m=l*f+u*g+c*x+d*h,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const S=Math.sqrt(_),C=Math.atan2(S,m*v);p=Math.sin(p*C)/S,a=Math.sin(a*C)/S}const M=a*v;if(l=l*p+f*M,u=u*p+g*M,c=c*p+x*M,d=d*p+h*M,p===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=o[s],f=o[s+1],g=o[s+2],x=o[s+3];return e[n]=a*x+c*d+l*g-u*f,e[n+1]=l*x+c*f+u*d-a*g,e[n+2]=u*x+c*g+a*f-l*d,e[n+3]=c*x-a*d-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(o/2),f=l(i/2),g=l(r/2),x=l(o/2);switch(s){case"XYZ":this._x=f*c*d+u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d-f*g*x;break;case"YXZ":this._x=f*c*d+u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d+f*g*x;break;case"ZXY":this._x=f*c*d-u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d-f*g*x;break;case"ZYX":this._x=f*c*d-u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d+f*g*x;break;case"YZX":this._x=f*c*d+u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d-f*g*x;break;case"XZY":this._x=f*c*d-u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d+f*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(c-l)*g,this._y=(o-u)*g,this._z=(s-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(c-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(o+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(o-u)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(s-r)/g,this._x=(o+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*s+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Gp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Gp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=l*n+s*r-a*i,c=l*i+a*n-o*r,d=l*r+o*i-s*n,f=-o*n-s*i-a*r;return this.x=u*l+f*-o+c*-a-d*-s,this.y=c*l+f*-s+d*-o-u*-a,this.z=d*l+f*-a+u*-s-c*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qu.copy(this).projectOnVector(e),this.sub(Qu)}reflect(e){return this.sub(Qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qu=new B,Gp=new Wr;class da{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>o&&(o=c),d>s&&(s=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(o,s,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>o&&(o=c),d>s&&(s=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(o,s,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=vr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const o=i.attributes.position;for(let s=0,a=o.count;s<a;s++)vr.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(vr)}else i.boundingBox===null&&i.computeBoundingBox(),Ju.copy(i.boundingBox),Ju.applyMatrix4(e.matrixWorld),this.union(Ju);const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vr),vr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),Ia.subVectors(this.max,ds),eo.subVectors(e.a,ds),to.subVectors(e.b,ds),no.subVectors(e.c,ds),zi.subVectors(to,eo),Fi.subVectors(no,to),_r.subVectors(eo,no);let n=[0,-zi.z,zi.y,0,-Fi.z,Fi.y,0,-_r.z,_r.y,zi.z,0,-zi.x,Fi.z,0,-Fi.x,_r.z,0,-_r.x,-zi.y,zi.x,0,-Fi.y,Fi.x,0,-_r.y,_r.x,0];return!ec(n,eo,to,no,Ia)||(n=[1,0,0,0,1,0,0,0,1],!ec(n,eo,to,no,Ia))?!1:(Na.crossVectors(zi,Fi),n=[Na.x,Na.y,Na.z],ec(n,eo,to,no,Ia))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return vr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(vr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new B,new B,new B,new B,new B,new B,new B,new B],vr=new B,Ju=new da,eo=new B,to=new B,no=new B,zi=new B,Fi=new B,_r=new B,ds=new B,Ia=new B,Na=new B,xr=new B;function ec(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){xr.fromArray(t,o);const a=r.x*Math.abs(xr.x)+r.y*Math.abs(xr.y)+r.z*Math.abs(xr.z),l=e.dot(xr),u=n.dot(xr),c=i.dot(xr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const f1=new da,hs=new B,tc=new B;class kd{constructor(e=new B,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):f1.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const n=hs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(tc)),this.expandByPoint(hs.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new B,nc=new B,ka=new B,Oi=new B,ic=new B,za=new B,rc=new B;class sv{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.direction).multiplyScalar(n).add(this.origin),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){nc.copy(e).add(n).multiplyScalar(.5),ka.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(nc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(ka),a=Oi.dot(this.direction),l=-Oi.dot(ka),u=Oi.lengthSq(),c=Math.abs(1-s*s);let d,f,g,x;if(c>0)if(d=s*l-a,f=s*a-l,x=o*c,d>=0)if(f>=-x)if(f<=x){const h=1/c;d*=h,f*=h,g=d*(d+s*f+2*a)+f*(s*d+f+2*l)+u}else f=o,d=Math.max(0,-(s*f+a)),g=-d*d+f*(f+2*l)+u;else f=-o,d=Math.max(0,-(s*f+a)),g=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),g=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-o,-l),o),g=f*(f+2*l)+u):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),g=-d*d+f*(f+2*l)+u);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),g=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(ka).multiplyScalar(f).add(nc),g}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(o=(e.min.y-f.y)*c,s=(e.max.y-f.y)*c):(o=(e.max.y-f.y)*c,s=(e.min.y-f.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,o){ic.subVectors(n,e),za.subVectors(i,e),rc.crossVectors(ic,za);let s=this.direction.dot(rc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(za.crossVectors(Oi,za));if(l<0)return null;const u=a*this.direction.dot(ic.cross(Oi));if(u<0||l+u>s)return null;const c=-a*Oi.dot(rc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,o,s,a,l,u,c,d,f,g,x,h,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=o,m[5]=s,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=d,m[14]=f,m[3]=g,m[7]=x,m[11]=h,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/io.setFromMatrixColumn(e,0).length(),o=1/io.setFromMatrixColumn(e,1).length(),s=1/io.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*c,g=s*d,x=a*c,h=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=g+x*u,n[5]=f-h*u,n[9]=-a*l,n[2]=h-f*u,n[6]=x+g*u,n[10]=s*l}else if(e.order==="YXZ"){const f=l*c,g=l*d,x=u*c,h=u*d;n[0]=f+h*a,n[4]=x*a-g,n[8]=s*u,n[1]=s*d,n[5]=s*c,n[9]=-a,n[2]=g*a-x,n[6]=h+f*a,n[10]=s*l}else if(e.order==="ZXY"){const f=l*c,g=l*d,x=u*c,h=u*d;n[0]=f-h*a,n[4]=-s*d,n[8]=x+g*a,n[1]=g+x*a,n[5]=s*c,n[9]=h-f*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const f=s*c,g=s*d,x=a*c,h=a*d;n[0]=l*c,n[4]=x*u-g,n[8]=f*u+h,n[1]=l*d,n[5]=h*u+f,n[9]=g*u-x,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,g=s*u,x=a*l,h=a*u;n[0]=l*c,n[4]=h-f*d,n[8]=x*d+g,n[1]=d,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=g*d+x,n[10]=f-h*d}else if(e.order==="XZY"){const f=s*l,g=s*u,x=a*l,h=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+h,n[5]=s*c,n[9]=g*d-x,n[2]=x*d-g,n[6]=a*c,n[10]=h*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d1,e,h1)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ui.crossVectors(i,vn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ui.crossVectors(i,vn)),Ui.normalize(),Fa.crossVectors(vn,Ui),r[0]=Ui.x,r[4]=Fa.x,r[8]=vn.x,r[1]=Ui.y,r[5]=Fa.y,r[9]=vn.y,r[2]=Ui.z,r[6]=Fa.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],g=i[13],x=i[2],h=i[6],p=i[10],m=i[14],v=i[3],_=i[7],M=i[11],S=i[15],C=r[0],P=r[4],y=r[8],T=r[12],D=r[1],K=r[5],J=r[9],O=r[13],k=r[2],Y=r[6],te=r[10],ee=r[14],R=r[3],G=r[7],W=r[11],oe=r[15];return o[0]=s*C+a*D+l*k+u*R,o[4]=s*P+a*K+l*Y+u*G,o[8]=s*y+a*J+l*te+u*W,o[12]=s*T+a*O+l*ee+u*oe,o[1]=c*C+d*D+f*k+g*R,o[5]=c*P+d*K+f*Y+g*G,o[9]=c*y+d*J+f*te+g*W,o[13]=c*T+d*O+f*ee+g*oe,o[2]=x*C+h*D+p*k+m*R,o[6]=x*P+h*K+p*Y+m*G,o[10]=x*y+h*J+p*te+m*W,o[14]=x*T+h*O+p*ee+m*oe,o[3]=v*C+_*D+M*k+S*R,o[7]=v*P+_*K+M*Y+S*G,o[11]=v*y+_*J+M*te+S*W,o[15]=v*T+_*O+M*ee+S*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],g=e[14],x=e[3],h=e[7],p=e[11],m=e[15];return x*(+o*l*d-r*u*d-o*a*f+i*u*f+r*a*g-i*l*g)+h*(+n*l*g-n*u*f+o*s*f-r*s*g+r*u*c-o*l*c)+p*(+n*u*d-n*a*g-o*s*d+i*s*g+o*a*c-i*u*c)+m*(-r*a*c-n*l*d+n*a*f+r*s*d-i*s*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],g=e[11],x=e[12],h=e[13],p=e[14],m=e[15],v=d*p*u-h*f*u+h*l*g-a*p*g-d*l*m+a*f*m,_=x*f*u-c*p*u-x*l*g+s*p*g+c*l*m-s*f*m,M=c*h*u-x*d*u+x*a*g-s*h*g-c*a*m+s*d*m,S=x*d*l-c*h*l-x*a*f+s*h*f+c*a*p-s*d*p,C=n*v+i*_+r*M+o*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=v*P,e[1]=(h*f*o-d*p*o-h*r*g+i*p*g+d*r*m-i*f*m)*P,e[2]=(a*p*o-h*l*o+h*r*u-i*p*u-a*r*m+i*l*m)*P,e[3]=(d*l*o-a*f*o-d*r*u+i*f*u+a*r*g-i*l*g)*P,e[4]=_*P,e[5]=(c*p*o-x*f*o+x*r*g-n*p*g-c*r*m+n*f*m)*P,e[6]=(x*l*o-s*p*o-x*r*u+n*p*u+s*r*m-n*l*m)*P,e[7]=(s*f*o-c*l*o+c*r*u-n*f*u-s*r*g+n*l*g)*P,e[8]=M*P,e[9]=(x*d*o-c*h*o-x*i*g+n*h*g+c*i*m-n*d*m)*P,e[10]=(s*h*o-x*a*o+x*i*u-n*h*u-s*i*m+n*a*m)*P,e[11]=(c*a*o-s*d*o-c*i*u+n*d*u+s*i*g-n*a*g)*P,e[12]=S*P,e[13]=(c*h*r-x*d*r+x*i*f-n*h*f-c*i*p+n*d*p)*P,e[14]=(x*a*r-s*h*r-x*i*l+n*h*l+s*i*p-n*a*p)*P,e[15]=(s*d*r-c*a*r+c*i*l-n*d*l-s*i*f+n*a*f)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,d=a+a,f=o*u,g=o*c,x=o*d,h=s*c,p=s*d,m=a*d,v=l*u,_=l*c,M=l*d,S=i.x,C=i.y,P=i.z;return r[0]=(1-(h+m))*S,r[1]=(g+M)*S,r[2]=(x-_)*S,r[3]=0,r[4]=(g-M)*C,r[5]=(1-(f+m))*C,r[6]=(p+v)*C,r[7]=0,r[8]=(x+_)*P,r[9]=(p-v)*P,r[10]=(1-(f+h))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=io.set(r[0],r[1],r[2]).length();const s=io.set(r[4],r[5],r[6]).length(),a=io.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const u=1/o,c=1/s,d=1/a;return Wn.elements[0]*=u,Wn.elements[1]*=u,Wn.elements[2]*=u,Wn.elements[4]*=c,Wn.elements[5]*=c,Wn.elements[6]*=c,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,n.setFromRotationMatrix(Wn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s){const a=this.elements,l=2*o/(n-e),u=2*o/(i-r),c=(n+e)/(n-e),d=(i+r)/(i-r),f=-(s+o)/(s-o),g=-2*s*o/(s-o);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,o,s){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(s-o),d=(n+e)*l,f=(i+r)*u,g=(s+o)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const io=new B,Wn=new Bt,d1=new B(0,0,0),h1=new B(1,1,1),Ui=new B,Fa=new B,vn=new B,Hp=new Bt,Wp=new Wr;class nu{constructor(e=0,n=0,i=0,r=nu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(ln(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-ln(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nu.DEFAULT_ORDER="XYZ";class zd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p1=0;const jp=new B,ro=new Wr,mi=new Bt,Oa=new B,ps=new B,m1=new B,g1=new Wr,Xp=new B(1,0,0),qp=new B(0,1,0),$p=new B(0,0,1),v1={type:"added"},Yp={type:"removed"};class bn extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new B,n=new nu,i=new Wr,r=new B(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Mn}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ro.setFromAxisAngle(e,n),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,n){return ro.setFromAxisAngle(e,n),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(qp,e)}rotateZ(e){return this.rotateOnAxis($p,e)}translateOnAxis(e,n){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(qp,e)}translateZ(e){return this.translateOnAxis($p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Oa.copy(e):Oa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(ps,Oa,this.up):mi.lookAt(Oa,ps,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),ro.setFromRotationMatrix(mi),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(v1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Yp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Yp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,m1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,g1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),d=s(e.shapes),f=s(e.skeletons),g=s(e.animations),x=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bn.DEFAULT_UP=new B(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new B,gi=new B,oc=new B,vi=new B,oo=new B,so=new B,Kp=new B,sc=new B,ac=new B,lc=new B;class Si{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){jn.subVectors(r,n),gi.subVectors(i,n),oc.subVectors(e,n);const s=jn.dot(jn),a=jn.dot(gi),l=jn.dot(oc),u=gi.dot(gi),c=gi.dot(oc),d=s*u-a*a;if(d===0)return o.set(-2,-1,-1);const f=1/d,g=(u*l-a*c)*f,x=(s*c-a*l)*f;return o.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi),vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,vi),l.set(0,0),l.addScaledVector(o,vi.x),l.addScaledVector(s,vi.y),l.addScaledVector(a,vi.z),l}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),gi.subVectors(e,n),jn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),jn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Si.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return Si.getUV(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;oo.subVectors(r,i),so.subVectors(o,i),sc.subVectors(e,i);const l=oo.dot(sc),u=so.dot(sc);if(l<=0&&u<=0)return n.copy(i);ac.subVectors(e,r);const c=oo.dot(ac),d=so.dot(ac);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(oo,s);lc.subVectors(e,o);const g=oo.dot(lc),x=so.dot(lc);if(x>=0&&g<=x)return n.copy(o);const h=g*u-l*x;if(h<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(so,a);const p=c*x-g*d;if(p<=0&&d-c>=0&&g-x>=0)return Kp.subVectors(o,r),a=(d-c)/(d-c+(g-x)),n.copy(r).addScaledVector(Kp,a);const m=1/(p+h+f);return s=h*m,a=f*m,n.copy(i).addScaledVector(oo,s).addScaledVector(so,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let _1=0;class iu extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=fa(),this.name="",this.type="Material",this.blending=zo,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=K0,this.blendDst=Z0,this.blendEquation=mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ju,this.stencilZFail=ju,this.stencilZPass=ju,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ut extends iu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new B,Ua=new Ne;class ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Op,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ua.fromBufferAttribute(this,n),Ua.applyMatrix3(e),this.setXY(n,Ua.x,Ua.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix3(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix4(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyNormalMatrix(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.transformDirection(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=La(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=La(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=La(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=La(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),o=gn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Op&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class av extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class lv extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kr extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let x1=0;const Dn=new Bt,uc=new bn,ao=new B,_n=new da,ms=new da,Lt=new B;class Yr extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=fa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tv(e)?lv:av)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Mn().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new kr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];_n.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(_n.min,ms.min),_n.expandByPoint(Lt),Lt.addVectors(_n.max,ms.max),_n.expandByPoint(Lt)):(_n.expandByPoint(ms.min),_n.expandByPoint(ms.max))}_n.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Lt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Lt.fromBufferAttribute(a,u),l&&(ao.fromBufferAttribute(e,u),Lt.add(ao)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let D=0;D<a;D++)u[D]=new B,c[D]=new B;const d=new B,f=new B,g=new B,x=new Ne,h=new Ne,p=new Ne,m=new B,v=new B;function _(D,K,J){d.fromArray(r,D*3),f.fromArray(r,K*3),g.fromArray(r,J*3),x.fromArray(s,D*2),h.fromArray(s,K*2),p.fromArray(s,J*2),f.sub(d),g.sub(d),h.sub(x),p.sub(x);const O=1/(h.x*p.y-p.x*h.y);isFinite(O)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(g,-h.y).multiplyScalar(O),v.copy(g).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(O),u[D].add(m),u[K].add(m),u[J].add(m),c[D].add(v),c[K].add(v),c[J].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let D=0,K=M.length;D<K;++D){const J=M[D],O=J.start,k=J.count;for(let Y=O,te=O+k;Y<te;Y+=3)_(i[Y+0],i[Y+1],i[Y+2])}const S=new B,C=new B,P=new B,y=new B;function T(D){P.fromArray(o,D*3),y.copy(P);const K=u[D];S.copy(K),S.sub(P.multiplyScalar(P.dot(K))).normalize(),C.crossVectors(y,K);const O=C.dot(c[D])<0?-1:1;l[D*4]=S.x,l[D*4+1]=S.y,l[D*4+2]=S.z,l[D*4+3]=O}for(let D=0,K=M.length;D<K;++D){const J=M[D],O=J.start,k=J.count;for(let Y=O,te=O+k;Y<te;Y+=3)T(i[Y+0]),T(i[Y+1]),T(i[Y+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new B,o=new B,s=new B,a=new B,l=new B,u=new B,c=new B,d=new B;if(e)for(let f=0,g=e.count;f<g;f+=3){const x=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,h),s.fromBufferAttribute(n,p),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let g=0,x=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?g=l[h]*a.data.stride+a.offset:g=l[h]*c;for(let m=0;m<c;m++)f[x++]=u[g++]}return new ci(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],d=o[u];for(let f=0,g=d.length;f<g;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zp=new Bt,lo=new sv,cc=new kd,gs=new B,vs=new B,_s=new B,fc=new B,Ba=new B,Va=new Ne,Ga=new Ne,Ha=new Ne,dc=new B,Wa=new B;class et extends bn{constructor(e=new Yr,n=new ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Ba.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],d=o[l];c!==0&&(fc.fromBufferAttribute(d,e),s?Ba.addScaledVector(fc,c):Ba.addScaledVector(fc.sub(n),c))}n.add(Ba)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(o),e.ray.intersectsSphere(cc)===!1)||(Zp.copy(o).invert(),lo.copy(e.ray).applyMatrix4(Zp),i.boundingBox!==null&&lo.intersectsBox(i.boundingBox)===!1))return;let s;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const h=d[g],p=r[h.materialIndex],m=Math.max(h.start,f.start),v=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let _=m,M=v;_<M;_+=3){const S=a.getX(_),C=a.getX(_+1),P=a.getX(_+2);s=ja(this,p,e,lo,u,c,S,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=h.materialIndex,n.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let h=g,p=x;h<p;h+=3){const m=a.getX(h),v=a.getX(h+1),_=a.getX(h+2);s=ja(this,r,e,lo,u,c,m,v,_),s&&(s.faceIndex=Math.floor(h/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const h=d[g],p=r[h.materialIndex],m=Math.max(h.start,f.start),v=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let _=m,M=v;_<M;_+=3){const S=_,C=_+1,P=_+2;s=ja(this,p,e,lo,u,c,S,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=h.materialIndex,n.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let h=g,p=x;h<p;h+=3){const m=h,v=h+1,_=h+2;s=ja(this,r,e,lo,u,c,m,v,_),s&&(s.faceIndex=Math.floor(h/3),n.push(s))}}}}function y1(t,e,n,i,r,o,s,a){let l;if(e.side===En?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===ar,a),l===null)return null;Wa.copy(a),Wa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Wa);return u<n.near||u>n.far?null:{distance:u,point:Wa.clone(),object:t}}function ja(t,e,n,i,r,o,s,a,l){t.getVertexPosition(s,gs),t.getVertexPosition(a,vs),t.getVertexPosition(l,_s);const u=y1(t,e,n,i,gs,vs,_s,dc);if(u){r&&(Va.fromBufferAttribute(r,s),Ga.fromBufferAttribute(r,a),Ha.fromBufferAttribute(r,l),u.uv=Si.getUV(dc,gs,vs,_s,Va,Ga,Ha,new Ne)),o&&(Va.fromBufferAttribute(o,s),Ga.fromBufferAttribute(o,a),Ha.fromBufferAttribute(o,l),u.uv2=Si.getUV(dc,gs,vs,_s,Va,Ga,Ha,new Ne));const c={a:s,b:a,c:l,normal:new B,materialIndex:0};Si.getNormal(gs,vs,_s,c.normal),u.face=c}return u}class Rt extends Yr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],d=[];let f=0,g=0;x("z","y","x",-1,-1,i,n,e,s,o,0),x("z","y","x",1,-1,i,n,-e,s,o,1),x("x","z","y",1,1,e,i,n,r,s,2),x("x","z","y",1,-1,e,i,-n,r,s,3),x("x","y","z",1,-1,e,n,i,r,o,4),x("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new kr(u,3)),this.setAttribute("normal",new kr(c,3)),this.setAttribute("uv",new kr(d,2));function x(h,p,m,v,_,M,S,C,P,y,T){const D=M/P,K=S/y,J=M/2,O=S/2,k=C/2,Y=P+1,te=y+1;let ee=0,R=0;const G=new B;for(let W=0;W<te;W++){const oe=W*K-O;for(let L=0;L<Y;L++){const H=L*D-J;G[h]=H*v,G[p]=oe*_,G[m]=k,u.push(G.x,G.y,G.z),G[h]=0,G[p]=0,G[m]=C>0?1:-1,c.push(G.x,G.y,G.z),d.push(L/P),d.push(1-W/y),ee+=1}}for(let W=0;W<y;W++)for(let oe=0;oe<P;oe++){const L=f+oe+Y*W,H=f+oe+Y*(W+1),Q=f+(oe+1)+Y*(W+1),Z=f+(oe+1)+Y*W;l.push(L,H,Z),l.push(H,Q,Z),R+=6}a.addGroup(g,R,T),g+=R,f+=ee}}static fromJSON(e){return new Rt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=Yo(t[n]);for(const r in i)e[r]=i[r]}return e}function S1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function uv(t){return t.getRenderTarget()===null&&t.outputEncoding===Qe?ri:ea}const M1={clone:Yo,merge:Jt};var w1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends iu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w1,this.fragmentShader=E1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=S1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class cv extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zn extends cv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bp*2*Math.atan(Math.tan(Xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const uo=-90,co=1;class b1 extends bn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new zn(uo,co,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new zn(uo,co,e,n);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const s=new zn(uo,co,e,n);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new zn(uo,co,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new zn(uo,co,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new zn(uo,co,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,s,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Pi,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,s),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class fv extends hn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Xo,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class T1 extends Hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rt(5,5,5),o=new lr({name:"CubemapFromEquirect",uniforms:Yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:nr});o.uniforms.tEquirect.value=n;const s=new et(r,o),a=n.minFilter;return n.minFilter===Qs&&(n.minFilter=kn),new b1(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const hc=new B,C1=new B,A1=new Mn;class wr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=hc.subVectors(i,n).cross(C1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(hc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(i).multiplyScalar(o).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||A1.getNormalMatrix(e),r=this.coplanarPoint(hc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fo=new kd,Xa=new B;class dv{constructor(e=new wr,n=new wr,i=new wr,r=new wr,o=new wr,s=new wr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],o=i[1],s=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],x=i[10],h=i[11],p=i[12],m=i[13],v=i[14],_=i[15];return n[0].setComponents(a-r,d-l,h-f,_-p).normalize(),n[1].setComponents(a+r,d+l,h+f,_+p).normalize(),n[2].setComponents(a+o,d+u,h+g,_+m).normalize(),n[3].setComponents(a-o,d-u,h-g,_-m).normalize(),n[4].setComponents(a-s,d-c,h-x,_-v).normalize(),n[5].setComponents(a+s,d+c,h+x,_+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fo)}intersectsSprite(e){return fo.center.set(0,0,0),fo.radius=.7071067811865476,fo.applyMatrix4(e.matrixWorld),this.intersectsSphere(fo)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xa.x=r.normal.x>0?e.max.x:e.min.x,Xa.y=r.normal.y>0?e.max.y:e.min.y,Xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hv(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function P1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,d,f),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function o(u,c,d){const f=c.array,g=c.updateRange;t.bindBuffer(d,u),g.count===-1?t.bufferSubData(d,0,f):(n?t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(o(d.buffer,u,c),d.version=u.version)}return{get:s,remove:a,update:l}}class ur extends Yr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,g=[],x=[],h=[],p=[];for(let m=0;m<c;m++){const v=m*f-s;for(let _=0;_<u;_++){const M=_*d-o;x.push(M,-v,0),h.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const _=v+u*m,M=v+u*(m+1),S=v+1+u*(m+1),C=v+1+u*m;g.push(_,M,C),g.push(M,S,C)}this.setIndex(g),this.setAttribute("position",new kr(x,3)),this.setAttribute("normal",new kr(h,3)),this.setAttribute("uv",new kr(p,2))}static fromJSON(e){return new ur(e.width,e.height,e.widthSegments,e.heightSegments)}}var L1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,D1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,I1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,k1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z1="vec3 transformed = vec3( position );",F1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O1=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,U1=`#ifdef USE_IRIDESCENCE
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
#endif`,B1=`#ifdef USE_BUMPMAP
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
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Y1=`#define PI 3.141592653589793
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
}`,K1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z1=`vec3 transformedNormal = objectNormal;
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
#endif`,Q1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nM="gl_FragColor = linearToOutputTexel( gl_FragColor );",iM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,aM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
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
#endif`,uM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hM=`#ifdef USE_GRADIENTMAP
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
}`,pM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_M=`uniform bool receiveShadow;
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
#endif`,xM=`#if defined( USE_ENVMAP )
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
#endif`,yM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EM=`PhysicalMaterial material;
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
#endif`,bM=`struct PhysicalMaterial {
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
}`,TM=`
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
#endif`,CM=`#if defined( RE_IndirectDiffuse )
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
#endif`,AM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,PM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,RM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,IM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BM=`#ifdef USE_MORPHNORMALS
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
#endif`,VM=`#ifdef USE_MORPHTARGETS
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
#endif`,GM=`#ifdef USE_MORPHTARGETS
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
#endif`,HM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,WM=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$M=`#ifdef USE_NORMALMAP
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
#endif`,YM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,KM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ZM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,QM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ew=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ow=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cw=`float getShadowMask() {
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
}`,fw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dw=`#ifdef USE_SKINNING
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
#endif`,hw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pw=`#ifdef USE_SKINNING
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
#endif`,mw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_w=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xw=`#ifdef USE_TRANSMISSION
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
#endif`,yw=`#ifdef USE_TRANSMISSION
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
#endif`,Sw=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Mw=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ww=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ew=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,bw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Tw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Aw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pw=`uniform sampler2D t2D;
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
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nw=`#include <common>
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
}`,kw=`#if DEPTH_PACKING == 3200
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
}`,zw=`#define DISTANCE
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
}`,Fw=`#define DISTANCE
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
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bw=`uniform float scale;
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
}`,Vw=`uniform vec3 diffuse;
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
}`,Gw=`#include <common>
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
}`,Hw=`uniform vec3 diffuse;
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
}`,Ww=`#define LAMBERT
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
}`,jw=`#define LAMBERT
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
}`,Xw=`#define MATCAP
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
}`,qw=`#define MATCAP
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
}`,$w=`#define NORMAL
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
}`,Yw=`#define NORMAL
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
}`,Kw=`#define PHONG
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
}`,Zw=`#define PHONG
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
}`,Qw=`#define STANDARD
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
}`,Jw=`#define STANDARD
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
}`,eE=`#define TOON
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
}`,tE=`#define TOON
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
}`,nE=`uniform float size;
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
}`,iE=`uniform vec3 diffuse;
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
}`,rE=`#include <common>
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
}`,oE=`uniform vec3 color;
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
}`,sE=`uniform float rotation;
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
}`,aE=`uniform vec3 diffuse;
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
}`,De={alphamap_fragment:L1,alphamap_pars_fragment:D1,alphatest_fragment:R1,alphatest_pars_fragment:I1,aomap_fragment:N1,aomap_pars_fragment:k1,begin_vertex:z1,beginnormal_vertex:F1,bsdfs:O1,iridescence_fragment:U1,bumpmap_pars_fragment:B1,clipping_planes_fragment:V1,clipping_planes_pars_fragment:G1,clipping_planes_pars_vertex:H1,clipping_planes_vertex:W1,color_fragment:j1,color_pars_fragment:X1,color_pars_vertex:q1,color_vertex:$1,common:Y1,cube_uv_reflection_fragment:K1,defaultnormal_vertex:Z1,displacementmap_pars_vertex:Q1,displacementmap_vertex:J1,emissivemap_fragment:eM,emissivemap_pars_fragment:tM,encodings_fragment:nM,encodings_pars_fragment:iM,envmap_fragment:rM,envmap_common_pars_fragment:oM,envmap_pars_fragment:sM,envmap_pars_vertex:aM,envmap_physical_pars_fragment:xM,envmap_vertex:lM,fog_vertex:uM,fog_pars_vertex:cM,fog_fragment:fM,fog_pars_fragment:dM,gradientmap_pars_fragment:hM,lightmap_fragment:pM,lightmap_pars_fragment:mM,lights_lambert_fragment:gM,lights_lambert_pars_fragment:vM,lights_pars_begin:_M,lights_toon_fragment:yM,lights_toon_pars_fragment:SM,lights_phong_fragment:MM,lights_phong_pars_fragment:wM,lights_physical_fragment:EM,lights_physical_pars_fragment:bM,lights_fragment_begin:TM,lights_fragment_maps:CM,lights_fragment_end:AM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:LM,logdepthbuf_pars_vertex:DM,logdepthbuf_vertex:RM,map_fragment:IM,map_pars_fragment:NM,map_particle_fragment:kM,map_particle_pars_fragment:zM,metalnessmap_fragment:FM,metalnessmap_pars_fragment:OM,morphcolor_vertex:UM,morphnormal_vertex:BM,morphtarget_pars_vertex:VM,morphtarget_vertex:GM,normal_fragment_begin:HM,normal_fragment_maps:WM,normal_pars_fragment:jM,normal_pars_vertex:XM,normal_vertex:qM,normalmap_pars_fragment:$M,clearcoat_normal_fragment_begin:YM,clearcoat_normal_fragment_maps:KM,clearcoat_pars_fragment:ZM,iridescence_pars_fragment:QM,output_fragment:JM,packing:ew,premultiplied_alpha_fragment:tw,project_vertex:nw,dithering_fragment:iw,dithering_pars_fragment:rw,roughnessmap_fragment:ow,roughnessmap_pars_fragment:sw,shadowmap_pars_fragment:aw,shadowmap_pars_vertex:lw,shadowmap_vertex:uw,shadowmask_pars_fragment:cw,skinbase_vertex:fw,skinning_pars_vertex:dw,skinning_vertex:hw,skinnormal_vertex:pw,specularmap_fragment:mw,specularmap_pars_fragment:gw,tonemapping_fragment:vw,tonemapping_pars_fragment:_w,transmission_fragment:xw,transmission_pars_fragment:yw,uv_pars_fragment:Sw,uv_pars_vertex:Mw,uv_vertex:ww,uv2_pars_fragment:Ew,uv2_pars_vertex:bw,uv2_vertex:Tw,worldpos_vertex:Cw,background_vert:Aw,background_frag:Pw,backgroundCube_vert:Lw,backgroundCube_frag:Dw,cube_vert:Rw,cube_frag:Iw,depth_vert:Nw,depth_frag:kw,distanceRGBA_vert:zw,distanceRGBA_frag:Fw,equirect_vert:Ow,equirect_frag:Uw,linedashed_vert:Bw,linedashed_frag:Vw,meshbasic_vert:Gw,meshbasic_frag:Hw,meshlambert_vert:Ww,meshlambert_frag:jw,meshmatcap_vert:Xw,meshmatcap_frag:qw,meshnormal_vert:$w,meshnormal_frag:Yw,meshphong_vert:Kw,meshphong_frag:Zw,meshphysical_vert:Qw,meshphysical_frag:Jw,meshtoon_vert:eE,meshtoon_frag:tE,points_vert:nE,points_frag:iE,shadow_vert:rE,shadow_frag:oE,sprite_vert:sE,sprite_frag:aE},ae={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Mn},uv2Transform:{value:new Mn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Mn}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Mn}}},oi={basic:{uniforms:Jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Jt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Jt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Jt([ae.points,ae.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Jt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Jt([ae.common,ae.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Jt([ae.sprite,ae.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Mn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Jt([ae.common,ae.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Jt([ae.lights,ae.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};oi.physical={uniforms:Jt([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const qa={r:0,b:0,g:0};function lE(t,e,n,i,r,o,s){const a=new tt(0);let l=o===!0?0:1,u,c,d=null,f=0,g=null;function x(p,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:e).get(_));const M=t.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(_=null),_===null?h(a,l):_&&_.isColor&&(h(_,1),v=!0),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===tu)?(c===void 0&&(c=new et(new Rt(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Yo(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,P,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=_.encoding!==Qe,(d!==_||f!==_.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new et(new ur(2,2),new lr({name:"BackgroundMaterial",uniforms:Yo(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_.encoding!==Qe,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,g=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function h(p,m){p.getRGB(qa,uv(t)),i.buffers.color.setClear(qa.r,qa.g,qa.b,m,s)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:x}}function uE(t,e,n,i){const r=t.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=p(null);let u=l,c=!1;function d(k,Y,te,ee,R){let G=!1;if(s){const W=h(ee,te,Y);u!==W&&(u=W,g(u.object)),G=m(k,ee,te,R),G&&v(k,ee,te,R)}else{const W=Y.wireframe===!0;(u.geometry!==ee.id||u.program!==te.id||u.wireframe!==W)&&(u.geometry=ee.id,u.program=te.id,u.wireframe=W,G=!0)}R!==null&&n.update(R,34963),(G||c)&&(c=!1,y(k,Y,te,ee),R!==null&&t.bindBuffer(34963,n.get(R).buffer))}function f(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function g(k){return i.isWebGL2?t.bindVertexArray(k):o.bindVertexArrayOES(k)}function x(k){return i.isWebGL2?t.deleteVertexArray(k):o.deleteVertexArrayOES(k)}function h(k,Y,te){const ee=te.wireframe===!0;let R=a[k.id];R===void 0&&(R={},a[k.id]=R);let G=R[Y.id];G===void 0&&(G={},R[Y.id]=G);let W=G[ee];return W===void 0&&(W=p(f()),G[ee]=W),W}function p(k){const Y=[],te=[],ee=[];for(let R=0;R<r;R++)Y[R]=0,te[R]=0,ee[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:te,attributeDivisors:ee,object:k,attributes:{},index:null}}function m(k,Y,te,ee){const R=u.attributes,G=Y.attributes;let W=0;const oe=te.getAttributes();for(const L in oe)if(oe[L].location>=0){const Q=R[L];let Z=G[L];if(Z===void 0&&(L==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),L==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor)),Q===void 0||Q.attribute!==Z||Z&&Q.data!==Z.data)return!0;W++}return u.attributesNum!==W||u.index!==ee}function v(k,Y,te,ee){const R={},G=Y.attributes;let W=0;const oe=te.getAttributes();for(const L in oe)if(oe[L].location>=0){let Q=G[L];Q===void 0&&(L==="instanceMatrix"&&k.instanceMatrix&&(Q=k.instanceMatrix),L==="instanceColor"&&k.instanceColor&&(Q=k.instanceColor));const Z={};Z.attribute=Q,Q&&Q.data&&(Z.data=Q.data),R[L]=Z,W++}u.attributes=R,u.attributesNum=W,u.index=ee}function _(){const k=u.newAttributes;for(let Y=0,te=k.length;Y<te;Y++)k[Y]=0}function M(k){S(k,0)}function S(k,Y){const te=u.newAttributes,ee=u.enabledAttributes,R=u.attributeDivisors;te[k]=1,ee[k]===0&&(t.enableVertexAttribArray(k),ee[k]=1),R[k]!==Y&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,Y),R[k]=Y)}function C(){const k=u.newAttributes,Y=u.enabledAttributes;for(let te=0,ee=Y.length;te<ee;te++)Y[te]!==k[te]&&(t.disableVertexAttribArray(te),Y[te]=0)}function P(k,Y,te,ee,R,G){i.isWebGL2===!0&&(te===5124||te===5125)?t.vertexAttribIPointer(k,Y,te,R,G):t.vertexAttribPointer(k,Y,te,ee,R,G)}function y(k,Y,te,ee){if(i.isWebGL2===!1&&(k.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const R=ee.attributes,G=te.getAttributes(),W=Y.defaultAttributeValues;for(const oe in G){const L=G[oe];if(L.location>=0){let H=R[oe];if(H===void 0&&(oe==="instanceMatrix"&&k.instanceMatrix&&(H=k.instanceMatrix),oe==="instanceColor"&&k.instanceColor&&(H=k.instanceColor)),H!==void 0){const Q=H.normalized,Z=H.itemSize,N=n.get(H);if(N===void 0)continue;const ve=N.buffer,we=N.type,Se=N.bytesPerElement;if(H.isInterleavedBufferAttribute){const pe=H.data,Xe=pe.stride,Le=H.offset;if(pe.isInstancedInterleavedBuffer){for(let Te=0;Te<L.locationSize;Te++)S(L.location+Te,pe.meshPerAttribute);k.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Te=0;Te<L.locationSize;Te++)M(L.location+Te);t.bindBuffer(34962,ve);for(let Te=0;Te<L.locationSize;Te++)P(L.location+Te,Z/L.locationSize,we,Q,Xe*Se,(Le+Z/L.locationSize*Te)*Se)}else{if(H.isInstancedBufferAttribute){for(let pe=0;pe<L.locationSize;pe++)S(L.location+pe,H.meshPerAttribute);k.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let pe=0;pe<L.locationSize;pe++)M(L.location+pe);t.bindBuffer(34962,ve);for(let pe=0;pe<L.locationSize;pe++)P(L.location+pe,Z/L.locationSize,we,Q,Z*Se,Z/L.locationSize*pe*Se)}}else if(W!==void 0){const Q=W[oe];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(L.location,Q);break;case 3:t.vertexAttrib3fv(L.location,Q);break;case 4:t.vertexAttrib4fv(L.location,Q);break;default:t.vertexAttrib1fv(L.location,Q)}}}}C()}function T(){J();for(const k in a){const Y=a[k];for(const te in Y){const ee=Y[te];for(const R in ee)x(ee[R].object),delete ee[R];delete Y[te]}delete a[k]}}function D(k){if(a[k.id]===void 0)return;const Y=a[k.id];for(const te in Y){const ee=Y[te];for(const R in ee)x(ee[R].object),delete ee[R];delete Y[te]}delete a[k.id]}function K(k){for(const Y in a){const te=a[Y];if(te[k.id]===void 0)continue;const ee=te[k.id];for(const R in ee)x(ee[R].object),delete ee[R];delete te[k.id]}}function J(){O(),c=!0,u!==l&&(u=l,g(u.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:O,dispose:T,releaseStatesOfGeometry:D,releaseStatesOfProgram:K,initAttributes:_,enableAttribute:M,disableUnusedAttributes:C}}function cE(t,e,n,i){const r=i.isWebGL2;let o;function s(u){o=u}function a(u,c){t.drawArrays(o,u,c),n.update(c,o,1)}function l(u,c,d){if(d===0)return;let f,g;if(r)f=t,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](o,u,c,d),n.update(c,o,d)}this.setMode=s,this.render=a,this.renderInstances=l}function fE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){if(P==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),f=t.getParameter(35660),g=t.getParameter(3379),x=t.getParameter(34076),h=t.getParameter(34921),p=t.getParameter(36347),m=t.getParameter(36348),v=t.getParameter(36349),_=f>0,M=s||e.has("OES_texture_float"),S=_&&M,C=s?t.getParameter(36183):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:C}}function dE(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new wr,a=new Mn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||i!==0||r;return r=f,i=d.length,g},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,g){const x=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,m=t.get(d);if(!r||x===null||x.length===0||o&&!p)o?c(null):u();else{const v=o?0:i,_=v*4;let M=m.clippingState||null;l.value=M,M=c(x,f,_,g);for(let S=0;S!==_;++S)M[S]=n[S];m.clippingState=M,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,g,x){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,x!==!0||p===null){const m=g+h*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,M=g;_!==h;++_,M+=4)s.copy(d[_]).applyMatrix4(v,a),s.normal.toArray(p,M),p[M+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function hE(t){let e=new WeakMap;function n(s,a){return a===Ef?s.mapping=Xo:a===bf&&(s.mapping=qo),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Ef||a===bf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new T1(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class pE extends cv{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ao=4,Qp=[.125,.215,.35,.446,.526,.582],br=20,pc=new pE,Jp=new tt;let mc=null;const Er=(1+Math.sqrt(5))/2,ho=1/Er,em=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Er,ho),new B(0,Er,-ho),new B(ho,0,Er),new B(-ho,0,Er),new B(Er,ho,0),new B(-Er,ho,0)];class tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){mc=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mc),e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xo||e.mapping===qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Js,format:Fn,encoding:Gr,depthBuffer:!1},r=nm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mE(o)),this._blurMaterial=gE(o,e,n)}return r}_compileMaterial(e){const n=new et(this._lodPlanes[0],e);this._renderer.compile(n,pc)}_sceneToCubeUV(e,n,i,r){const a=new zn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Jp),c.toneMapping=Pi,c.autoClear=!1;const g=new ut({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),x=new et(new Rt,g);let h=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,h=!0):(g.color.copy(Jp),h=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const _=this._cubeSize;$a(r,v*_,m>2?_:0,_,_),c.setRenderTarget(r),h&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xo||e.mapping===qo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=im());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new et(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;$a(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,pc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=em[(r-1)%em.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new et(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*br-1),h=o/x,p=isFinite(o)?1+Math.floor(c*h):br;p>br&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${br}`);const m=[];let v=0;for(let P=0;P<br;++P){const y=P/h,T=Math.exp(-y*y/2);m.push(T),P===0?v+=T:P<p&&(v+=2*T)}for(let P=0;P<m.length;P++)m[P]=m[P]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-i;const M=this._sizeLods[r],S=3*M*(r>_-Ao?r-_+Ao:0),C=4*(this._cubeSize-M);$a(n,S,C,3*M,2*M),l.setRenderTarget(n),l.render(d,pc)}}function mE(t){const e=[],n=[],i=[];let r=t;const o=t-Ao+1+Qp.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Ao?l=Qp[s-t+Ao-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,x=6,h=3,p=2,m=1,v=new Float32Array(h*x*g),_=new Float32Array(p*x*g),M=new Float32Array(m*x*g);for(let C=0;C<g;C++){const P=C%3*2/3-1,y=C>2?0:-1,T=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];v.set(T,h*x*C),_.set(f,p*x*C);const D=[C,C,C,C,C,C];M.set(D,m*x*C)}const S=new Yr;S.setAttribute("position",new ci(v,h)),S.setAttribute("uv",new ci(_,p)),S.setAttribute("faceIndex",new ci(M,m)),e.push(S),r>Ao&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function nm(t,e,n){const i=new Hr(t,e,n);return i.texture.mapping=tu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $a(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function gE(t,e,n){const i=new Float32Array(br),r=new B(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function im(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function rm(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Fd(){return`

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
	`}function vE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ef||l===bf,c=l===Xo||l===qo;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new tm(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new tm(t));const f=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",o),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function _E(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function xE(t,e,n,i){const r={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",s),delete r[f.id];const g=o.get(f);g&&(e.remove(g),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const g=d.morphAttributes;for(const x in g){const h=g[x];for(let p=0,m=h.length;p<m;p++)e.update(h[p],34962)}}function u(d){const f=[],g=d.index,x=d.attributes.position;let h=0;if(g!==null){const v=g.array;h=g.version;for(let _=0,M=v.length;_<M;_+=3){const S=v[_+0],C=v[_+1],P=v[_+2];f.push(S,C,C,P,P,S)}}else{const v=x.array;h=x.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const S=_+0,C=_+1,P=_+2;f.push(S,C,C,P,P,S)}}const p=new(tv(f)?lv:av)(f,1);p.version=h;const m=o.get(d);m&&e.remove(m),o.set(d,p)}function c(d){const f=o.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function yE(t,e,n,i){const r=i.isWebGL2;let o;function s(f){o=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,g){t.drawElements(o,g,a,f*l),n.update(g,o,1)}function d(f,g,x){if(x===0)return;let h,p;if(r)h=t,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](o,g,a,f*l,x),n.update(g,o,x)}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=d}function SE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case 4:n.triangles+=a*(o/3);break;case 1:n.lines+=a*(o/2);break;case 3:n.lines+=a*(o-1);break;case 2:n.lines+=a*o;break;case 0:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ME(t,e){return t[0]-e[0]}function wE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function EE(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Ot,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0;let m=o.get(c);if(m===void 0||m.count!==p){let te=function(){k.dispose(),o.delete(c),c.removeEventListener("dispose",te)};var x=te;m!==void 0&&m.texture.dispose();const M=c.morphAttributes.position!==void 0,S=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,P=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let D=0;M===!0&&(D=1),S===!0&&(D=2),C===!0&&(D=3);let K=c.attributes.position.count*D,J=1;K>e.maxTextureSize&&(J=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const O=new Float32Array(K*J*4*p),k=new ov(O,K,J,p);k.type=Lr,k.needsUpdate=!0;const Y=D*4;for(let ee=0;ee<p;ee++){const R=P[ee],G=y[ee],W=T[ee],oe=K*J*4*ee;for(let L=0;L<R.count;L++){const H=L*Y;M===!0&&(s.fromBufferAttribute(R,L),O[oe+H+0]=s.x,O[oe+H+1]=s.y,O[oe+H+2]=s.z,O[oe+H+3]=0),S===!0&&(s.fromBufferAttribute(G,L),O[oe+H+4]=s.x,O[oe+H+5]=s.y,O[oe+H+6]=s.z,O[oe+H+7]=0),C===!0&&(s.fromBufferAttribute(W,L),O[oe+H+8]=s.x,O[oe+H+9]=s.y,O[oe+H+10]=s.z,O[oe+H+11]=W.itemSize===4?s.w:1)}}m={count:p,texture:k,size:new Ne(K,J)},o.set(c,m),c.addEventListener("dispose",te)}let v=0;for(let M=0;M<g.length;M++)v+=g[M];const _=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",g),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const h=g===void 0?0:g.length;let p=i[c.id];if(p===void 0||p.length!==h){p=[];for(let S=0;S<h;S++)p[S]=[S,0];i[c.id]=p}for(let S=0;S<h;S++){const C=p[S];C[0]=S,C[1]=g[S]}p.sort(wE);for(let S=0;S<8;S++)S<h&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(ME);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const C=a[S],P=C[0],y=C[1];P!==Number.MAX_SAFE_INTEGER&&y?(m&&c.getAttribute("morphTarget"+S)!==m[P]&&c.setAttribute("morphTarget"+S,m[P]),v&&c.getAttribute("morphNormal"+S)!==v[P]&&c.setAttribute("morphNormal"+S,v[P]),r[S]=y,_+=y):(m&&c.hasAttribute("morphTarget"+S)===!0&&c.deleteAttribute("morphTarget"+S),v&&c.hasAttribute("morphNormal"+S)===!0&&c.deleteAttribute("morphNormal"+S),r[S]=0)}const M=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(t,"morphTargetBaseInfluence",M),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function bE(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}const pv=new hn,mv=new ov,gv=new c1,vv=new fv,om=[],sm=[],am=new Float32Array(16),lm=new Float32Array(9),um=new Float32Array(4);function ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=om[r];if(o===void 0&&(o=new Float32Array(r),om[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ru(t,e){let n=sm[e];n===void 0&&(n=new Int32Array(e),sm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function TE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function PE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function LE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(bt(n,i))return;um.set(i),t.uniformMatrix2fv(this.addr,!1,um),Tt(n,i)}}function DE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(bt(n,i))return;lm.set(i),t.uniformMatrix3fv(this.addr,!1,lm),Tt(n,i)}}function RE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(bt(n,i))return;am.set(i),t.uniformMatrix4fv(this.addr,!1,am),Tt(n,i)}}function IE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function NE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function FE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function VE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||pv,r)}function GE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||gv,r)}function HE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||vv,r)}function WE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||mv,r)}function jE(t){switch(t){case 5126:return TE;case 35664:return CE;case 35665:return AE;case 35666:return PE;case 35674:return LE;case 35675:return DE;case 35676:return RE;case 5124:case 35670:return IE;case 35667:case 35671:return NE;case 35668:case 35672:return kE;case 35669:case 35673:return zE;case 5125:return FE;case 36294:return OE;case 36295:return UE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return HE;case 36289:case 36303:case 36311:case 36292:return WE}}function XE(t,e){t.uniform1fv(this.addr,e)}function qE(t,e){const n=ns(e,this.size,2);t.uniform2fv(this.addr,n)}function $E(t,e){const n=ns(e,this.size,3);t.uniform3fv(this.addr,n)}function YE(t,e){const n=ns(e,this.size,4);t.uniform4fv(this.addr,n)}function KE(t,e){const n=ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ZE(t,e){const n=ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function QE(t,e){const n=ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function JE(t,e){t.uniform1iv(this.addr,e)}function eb(t,e){t.uniform2iv(this.addr,e)}function tb(t,e){t.uniform3iv(this.addr,e)}function nb(t,e){t.uniform4iv(this.addr,e)}function ib(t,e){t.uniform1uiv(this.addr,e)}function rb(t,e){t.uniform2uiv(this.addr,e)}function ob(t,e){t.uniform3uiv(this.addr,e)}function sb(t,e){t.uniform4uiv(this.addr,e)}function ab(t,e,n){const i=this.cache,r=e.length,o=ru(n,r);bt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||pv,o[s])}function lb(t,e,n){const i=this.cache,r=e.length,o=ru(n,r);bt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||gv,o[s])}function ub(t,e,n){const i=this.cache,r=e.length,o=ru(n,r);bt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||vv,o[s])}function cb(t,e,n){const i=this.cache,r=e.length,o=ru(n,r);bt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||mv,o[s])}function fb(t){switch(t){case 5126:return XE;case 35664:return qE;case 35665:return $E;case 35666:return YE;case 35674:return KE;case 35675:return ZE;case 35676:return QE;case 5124:case 35670:return JE;case 35667:case 35671:return eb;case 35668:case 35672:return tb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return rb;case 36295:return ob;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return cb}}class db{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=jE(n.type)}}class hb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=fb(n.type)}}class pb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const gc=/(\w+)(\])?(\[|\.)?/g;function cm(t,e){t.seq.push(e),t.map[e.id]=e}function mb(t,e,n){const i=t.name,r=i.length;for(gc.lastIndex=0;;){const o=gc.exec(i),s=gc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){cm(n,u===void 0?new db(a,t,e):new hb(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new pb(a),cm(n,d)),n=d}}}class ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);mb(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function fm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let gb=0;function vb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function _b(t){switch(t){case Gr:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function dm(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+vb(t.getShaderSource(e),s)}else return r}function xb(t,e){const n=_b(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function yb(t,e){let n;switch(e){case zS:n="Linear";break;case FS:n="Reinhard";break;case OS:n="OptimizedCineon";break;case US:n="ACESFilmic";break;case BS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Sb(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Es).join(`
`)}function Mb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function wb(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===35674&&(a=2),o.type===35675&&(a=3),o.type===35676&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Es(t){return t!==""}function hm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(t){return t.replace(Eb,bb)}function bb(t,e){const n=De[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Pf(n)}const Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(t){return t.replace(Tb,Cb)}function Cb(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function gm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ab(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===$0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Y0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ws&&(e="SHADOWMAP_TYPE_VSM"),e}function Pb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xo:case qo:e="ENVMAP_TYPE_CUBE";break;case tu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qo:e="ENVMAP_MODE_REFRACTION";break}return e}function Db(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Q0:e="ENVMAP_BLENDING_MULTIPLY";break;case NS:e="ENVMAP_BLENDING_MIX";break;case kS:e="ENVMAP_BLENDING_ADD";break}return e}function Rb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Ib(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=Ab(n),u=Pb(n),c=Lb(n),d=Db(n),f=Rb(n),g=n.isWebGL2?"":Sb(n),x=Mb(o),h=r.createProgram();let p,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[x].filter(Es).join(`
`),p.length>0&&(p+=`
`),m=[g,x].filter(Es).join(`
`),m.length>0&&(m+=`
`)):(p=[gm(n),"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),m=[g,gm(n),"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?De.tonemapping_pars_fragment:"",n.toneMapping!==Pi?yb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,xb("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Es).join(`
`)),s=Pf(s),s=hm(s,n),s=pm(s,n),a=Pf(a),a=hm(a,n),a=pm(a,n),s=mm(s),a=mm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===Up?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+p+s,M=v+m+a,S=fm(r,35633,_),C=fm(r,35632,M);if(r.attachShader(h,S),r.attachShader(h,C),n.index0AttributeName!==void 0?r.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),t.debug.checkShaderErrors){const T=r.getProgramInfoLog(h).trim(),D=r.getShaderInfoLog(S).trim(),K=r.getShaderInfoLog(C).trim();let J=!0,O=!0;if(r.getProgramParameter(h,35714)===!1){J=!1;const k=dm(r,S,"vertex"),Y=dm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+T+`
`+k+`
`+Y)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(D===""||K==="")&&(O=!1);O&&(this.diagnostics={runnable:J,programLog:T,vertexShader:{log:D,prefix:p},fragmentShader:{log:K,prefix:m}})}r.deleteShader(S),r.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new ul(r,h)),P};let y;return this.getAttributes=function(){return y===void 0&&(y=wb(r,h)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=gb++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=C,this}let Nb=0;class kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new zb(e),n.set(e,i)),i}}class zb{constructor(e){this.id=Nb++,this.code=e,this.usedTimes=0}}function Fb(t,e,n,i,r,o,s){const a=new zd,l=new kb,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,T,D,K,J){const O=K.fog,k=J.geometry,Y=y.isMeshStandardMaterial?K.environment:null,te=(y.isMeshStandardMaterial?n:e).get(y.envMap||Y),ee=te&&te.mapping===tu?te.image.height:null,R=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const G=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,W=G!==void 0?G.length:0;let oe=0;k.morphAttributes.position!==void 0&&(oe=1),k.morphAttributes.normal!==void 0&&(oe=2),k.morphAttributes.color!==void 0&&(oe=3);let L,H,Q,Z;if(R){const Xe=oi[R];L=Xe.vertexShader,H=Xe.fragmentShader}else L=y.vertexShader,H=y.fragmentShader,l.update(y),Q=l.getVertexShaderID(y),Z=l.getFragmentShaderID(y);const N=t.getRenderTarget(),ve=y.alphaTest>0,we=y.clearcoat>0,Se=y.iridescence>0;return{isWebGL2:c,shaderID:R,shaderName:y.type,vertexShader:L,fragmentShader:H,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:f,outputEncoding:N===null?t.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:Gr,map:!!y.map,matcap:!!y.matcap,envMap:!!te,envMapMode:te&&te.mapping,envMapCubeUVHeight:ee,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===s1,tangentSpaceNormalMap:y.normalMapType===o1,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Qe,clearcoat:we,clearcoatMap:we&&!!y.clearcoatMap,clearcoatRoughnessMap:we&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!y.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!y.iridescenceMap,iridescenceThicknessMap:Se&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===zo,alphaMap:!!y.alphaMap,alphaTest:ve,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!k.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!O,useFog:y.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:Pi,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ft,flipSided:y.side===En,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)T.push(D),T.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(m(T,y),v(T,y),T.push(t.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function m(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),y.push(a.mask)}function _(y){const T=x[y.type];let D;if(T){const K=oi[T];D=M1.clone(K.uniforms)}else D=y.uniforms;return D}function M(y,T){let D;for(let K=0,J=u.length;K<J;K++){const O=u[K];if(O.cacheKey===T){D=O,++D.usedTimes;break}}return D===void 0&&(D=new Ib(t,T,y,o),u.push(D)),D}function S(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function P(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:_,acquireProgram:M,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:P}}function Ob(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Ub(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function vm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _m(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,f,g,x,h,p){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:g,groupOrder:x,renderOrder:d.renderOrder,z:h,group:p},t[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=g,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=h,m.group=p),e++,m}function a(d,f,g,x,h,p){const m=s(d,f,g,x,h,p);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):n.push(m)}function l(d,f,g,x,h,p){const m=s(d,f,g,x,h,p);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):n.unshift(m)}function u(d,f){n.length>1&&n.sort(d||Ub),i.length>1&&i.sort(f||vm),r.length>1&&r.sort(f||vm)}function c(){for(let d=e,f=t.length;d<f;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function Bb(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new _m,t.set(i,[s])):r>=o.length?(s=new _m,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function Vb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new tt};break;case"SpotLight":n={position:new B,direction:new B,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function Gb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Hb=0;function Wb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jb(t,e){const n=new Vb,i=Gb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new B);const o=new B,s=new Bt,a=new Bt;function l(c,d){let f=0,g=0,x=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let h=0,p=0,m=0,v=0,_=0,M=0,S=0,C=0,P=0,y=0;c.sort(Wb);const T=d!==!0?Math.PI:1;for(let K=0,J=c.length;K<J;K++){const O=c[K],k=O.color,Y=O.intensity,te=O.distance,ee=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=k.r*Y*T,g+=k.g*Y*T,x+=k.b*Y*T;else if(O.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(O.sh.coefficients[R],Y);else if(O.isDirectionalLight){const R=n.get(O);if(R.color.copy(O.color).multiplyScalar(O.intensity*T),O.castShadow){const G=O.shadow,W=i.get(O);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,r.directionalShadow[h]=W,r.directionalShadowMap[h]=ee,r.directionalShadowMatrix[h]=O.shadow.matrix,M++}r.directional[h]=R,h++}else if(O.isSpotLight){const R=n.get(O);R.position.setFromMatrixPosition(O.matrixWorld),R.color.copy(k).multiplyScalar(Y*T),R.distance=te,R.coneCos=Math.cos(O.angle),R.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),R.decay=O.decay,r.spot[m]=R;const G=O.shadow;if(O.map&&(r.spotLightMap[P]=O.map,P++,G.updateMatrices(O),O.castShadow&&y++),r.spotLightMatrix[m]=G.matrix,O.castShadow){const W=i.get(O);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,r.spotShadow[m]=W,r.spotShadowMap[m]=ee,C++}m++}else if(O.isRectAreaLight){const R=n.get(O);R.color.copy(k).multiplyScalar(Y),R.halfWidth.set(O.width*.5,0,0),R.halfHeight.set(0,O.height*.5,0),r.rectArea[v]=R,v++}else if(O.isPointLight){const R=n.get(O);if(R.color.copy(O.color).multiplyScalar(O.intensity*T),R.distance=O.distance,R.decay=O.decay,O.castShadow){const G=O.shadow,W=i.get(O);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,W.shadowCameraNear=G.camera.near,W.shadowCameraFar=G.camera.far,r.pointShadow[p]=W,r.pointShadowMap[p]=ee,r.pointShadowMatrix[p]=O.shadow.matrix,S++}r.point[p]=R,p++}else if(O.isHemisphereLight){const R=n.get(O);R.skyColor.copy(O.color).multiplyScalar(Y*T),R.groundColor.copy(O.groundColor).multiplyScalar(Y*T),r.hemi[_]=R,_++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=x;const D=r.hash;(D.directionalLength!==h||D.pointLength!==p||D.spotLength!==m||D.rectAreaLength!==v||D.hemiLength!==_||D.numDirectionalShadows!==M||D.numPointShadows!==S||D.numSpotShadows!==C||D.numSpotMaps!==P)&&(r.directional.length=h,r.spot.length=m,r.rectArea.length=v,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=C+P-y,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=y,D.directionalLength=h,D.pointLength=p,D.spotLength=m,D.rectAreaLength=v,D.hemiLength=_,D.numDirectionalShadows=M,D.numPointShadows=S,D.numSpotShadows=C,D.numSpotMaps=P,r.version=Hb++)}function u(c,d){let f=0,g=0,x=0,h=0,p=0;const m=d.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){const M=c[v];if(M.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(m),f++}else if(M.isSpotLight){const S=r.spot[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(m),x++}else if(M.isRectAreaLight){const S=r.rectArea[h];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),h++}else if(M.isPointLight){const S=r.point[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),g++}else if(M.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:l,setupView:u,state:r}}function xm(t,e){const n=new jb(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function Xb(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new xm(t,e),n.set(o,[l])):s>=a.length?(l=new xm(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class qb extends iu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $b extends iu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kb=`uniform sampler2D shadow_pass;
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
}`;function Zb(t,e,n){let i=new dv;const r=new Ne,o=new Ne,s=new Ot,a=new qb({depthPacking:r1}),l=new $b,u={},c=n.maxTextureSize,d={[ar]:En,[En]:ar,[Ft]:Ft},f=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Yb,fragmentShader:Kb}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const x=new Yr;x.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new et(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$0,this.render=function(M,S,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const P=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),D=t.state;D.setBlending(nr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let K=0,J=M.length;K<J;K++){const O=M[K],k=O.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const Y=k.getFrameExtents();if(r.multiply(Y),o.copy(k.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/Y.x),r.x=o.x*Y.x,k.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/Y.y),r.y=o.y*Y.y,k.mapSize.y=o.y)),k.map===null){const ee=this.type!==ws?{minFilter:St,magFilter:St}:{};k.map=new Hr(r.x,r.y,ee),k.map.texture.name=O.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const te=k.getViewportCount();for(let ee=0;ee<te;ee++){const R=k.getViewport(ee);s.set(o.x*R.x,o.y*R.y,o.x*R.z,o.y*R.w),D.viewport(s),k.updateMatrices(O,ee),i=k.getFrustum(),_(S,C,k.camera,O,this.type)}k.isPointLightShadow!==!0&&this.type===ws&&m(k,C),k.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(P,y,T)};function m(M,S){const C=e.update(h);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Hr(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(S,null,C,f,h,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(S,null,C,g,h,null)}function v(M,S,C,P,y,T){let D=null;const K=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(K!==void 0)D=K;else if(D=C.isPointLight===!0?l:a,t.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const J=D.uuid,O=S.uuid;let k=u[J];k===void 0&&(k={},u[J]=k);let Y=k[O];Y===void 0&&(Y=D.clone(),k[O]=Y),D=Y}return D.visible=S.visible,D.wireframe=S.wireframe,T===ws?D.side=S.shadowSide!==null?S.shadowSide:S.side:D.side=S.shadowSide!==null?S.shadowSide:d[S.side],D.alphaMap=S.alphaMap,D.alphaTest=S.alphaTest,D.map=S.map,D.clipShadows=S.clipShadows,D.clippingPlanes=S.clippingPlanes,D.clipIntersection=S.clipIntersection,D.displacementMap=S.displacementMap,D.displacementScale=S.displacementScale,D.displacementBias=S.displacementBias,D.wireframeLinewidth=S.wireframeLinewidth,D.linewidth=S.linewidth,C.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(C.matrixWorld),D.nearDistance=P,D.farDistance=y),D}function _(M,S,C,P,y){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===ws)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const K=e.update(M),J=M.material;if(Array.isArray(J)){const O=K.groups;for(let k=0,Y=O.length;k<Y;k++){const te=O[k],ee=J[te.materialIndex];if(ee&&ee.visible){const R=v(M,ee,P,C.near,C.far,y);t.renderBufferDirect(C,null,K,R,M,te)}}}else if(J.visible){const O=v(M,J,P,C.near,C.far,y);t.renderBufferDirect(C,null,K,O,M,null)}}const D=M.children;for(let K=0,J=D.length;K<J;K++)_(D[K],S,C,P,y)}}function Qb(t,e,n){const i=n.isWebGL2;function r(){let I=!1;const X=new Ot;let ie=null;const me=new Ot(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!I&&(t.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){I=Ee},setClear:function(Ee,je,At,Ht,hr){hr===!0&&(Ee*=Ht,je*=Ht,At*=Ht),X.set(Ee,je,At,Ht),me.equals(X)===!1&&(t.clearColor(Ee,je,At,Ht),me.copy(X))},reset:function(){I=!1,ie=null,me.set(-1,0,0,0)}}}function o(){let I=!1,X=null,ie=null,me=null;return{setTest:function(Ee){Ee?ve(2929):we(2929)},setMask:function(Ee){X!==Ee&&!I&&(t.depthMask(Ee),X=Ee)},setFunc:function(Ee){if(ie!==Ee){switch(Ee){case CS:t.depthFunc(512);break;case AS:t.depthFunc(519);break;case PS:t.depthFunc(513);break;case wf:t.depthFunc(515);break;case LS:t.depthFunc(514);break;case DS:t.depthFunc(518);break;case RS:t.depthFunc(516);break;case IS:t.depthFunc(517);break;default:t.depthFunc(515)}ie=Ee}},setLocked:function(Ee){I=Ee},setClear:function(Ee){me!==Ee&&(t.clearDepth(Ee),me=Ee)},reset:function(){I=!1,X=null,ie=null,me=null}}}function s(){let I=!1,X=null,ie=null,me=null,Ee=null,je=null,At=null,Ht=null,hr=null;return{setTest:function(it){I||(it?ve(2960):we(2960))},setMask:function(it){X!==it&&!I&&(t.stencilMask(it),X=it)},setFunc:function(it,fi,Ln){(ie!==it||me!==fi||Ee!==Ln)&&(t.stencilFunc(it,fi,Ln),ie=it,me=fi,Ee=Ln)},setOp:function(it,fi,Ln){(je!==it||At!==fi||Ht!==Ln)&&(t.stencilOp(it,fi,Ln),je=it,At=fi,Ht=Ln)},setLocked:function(it){I=it},setClear:function(it){hr!==it&&(t.clearStencil(it),hr=it)},reset:function(){I=!1,X=null,ie=null,me=null,Ee=null,je=null,At=null,Ht=null,hr=null}}}const a=new r,l=new o,u=new s,c=new WeakMap,d=new WeakMap;let f={},g={},x=new WeakMap,h=[],p=null,m=!1,v=null,_=null,M=null,S=null,C=null,P=null,y=null,T=!1,D=null,K=null,J=null,O=null,k=null;const Y=t.getParameter(35661);let te=!1,ee=0;const R=t.getParameter(7938);R.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(R)[1]),te=ee>=1):R.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),te=ee>=2);let G=null,W={};const oe=t.getParameter(3088),L=t.getParameter(2978),H=new Ot().fromArray(oe),Q=new Ot().fromArray(L);function Z(I,X,ie){const me=new Uint8Array(4),Ee=t.createTexture();t.bindTexture(I,Ee),t.texParameteri(I,10241,9728),t.texParameteri(I,10240,9728);for(let je=0;je<ie;je++)t.texImage2D(X+je,0,6408,1,1,0,6408,5121,me);return Ee}const N={};N[3553]=Z(3553,3553,1),N[34067]=Z(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ve(2929),l.setFunc(wf),dt(!1),Kt(lp),ve(2884),Ct(nr);function ve(I){f[I]!==!0&&(t.enable(I),f[I]=!0)}function we(I){f[I]!==!1&&(t.disable(I),f[I]=!1)}function Se(I,X){return g[I]!==X?(t.bindFramebuffer(I,X),g[I]=X,i&&(I===36009&&(g[36160]=X),I===36160&&(g[36009]=X)),!0):!1}function pe(I,X){let ie=h,me=!1;if(I)if(ie=x.get(X),ie===void 0&&(ie=[],x.set(X,ie)),I.isWebGLMultipleRenderTargets){const Ee=I.texture;if(ie.length!==Ee.length||ie[0]!==36064){for(let je=0,At=Ee.length;je<At;je++)ie[je]=36064+je;ie.length=Ee.length,me=!0}}else ie[0]!==36064&&(ie[0]=36064,me=!0);else ie[0]!==1029&&(ie[0]=1029,me=!0);me&&(n.isWebGL2?t.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Xe(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const Le={[mo]:32774,[gS]:32778,[vS]:32779};if(i)Le[dp]=32775,Le[hp]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(Le[dp]=I.MIN_EXT,Le[hp]=I.MAX_EXT)}const Te={[_S]:0,[xS]:1,[yS]:768,[K0]:770,[TS]:776,[ES]:774,[MS]:772,[SS]:769,[Z0]:771,[bS]:775,[wS]:773};function Ct(I,X,ie,me,Ee,je,At,Ht){if(I===nr){m===!0&&(we(3042),m=!1);return}if(m===!1&&(ve(3042),m=!0),I!==mS){if(I!==v||Ht!==T){if((_!==mo||C!==mo)&&(t.blendEquation(32774),_=mo,C=mo),Ht)switch(I){case zo:t.blendFuncSeparate(1,771,1,771);break;case up:t.blendFunc(1,1);break;case cp:t.blendFuncSeparate(0,769,0,1);break;case fp:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case zo:t.blendFuncSeparate(770,771,1,771);break;case up:t.blendFunc(770,1);break;case cp:t.blendFuncSeparate(0,769,0,1);break;case fp:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,S=null,P=null,y=null,v=I,T=Ht}return}Ee=Ee||X,je=je||ie,At=At||me,(X!==_||Ee!==C)&&(t.blendEquationSeparate(Le[X],Le[Ee]),_=X,C=Ee),(ie!==M||me!==S||je!==P||At!==y)&&(t.blendFuncSeparate(Te[ie],Te[me],Te[je],Te[At]),M=ie,S=me,P=je,y=At),v=I,T=!1}function Gt(I,X){I.side===Ft?we(2884):ve(2884);let ie=I.side===En;X&&(ie=!ie),dt(ie),I.blending===zo&&I.transparent===!1?Ct(nr):Ct(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const me=I.stencilWrite;u.setTest(me),me&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),We(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ve(32926):we(32926)}function dt(I){D!==I&&(I?t.frontFace(2304):t.frontFace(2305),D=I)}function Kt(I){I!==hS?(ve(2884),I!==K&&(I===lp?t.cullFace(1029):I===pS?t.cullFace(1028):t.cullFace(1032))):we(2884),K=I}function ct(I){I!==J&&(te&&t.lineWidth(I),J=I)}function We(I,X,ie){I?(ve(32823),(O!==X||k!==ie)&&(t.polygonOffset(X,ie),O=X,k=ie)):we(32823)}function Pn(I){I?ve(3089):we(3089)}function on(I){I===void 0&&(I=33984+Y-1),G!==I&&(t.activeTexture(I),G=I)}function b(I,X,ie){ie===void 0&&(G===null?ie=33984+Y-1:ie=G);let me=W[ie];me===void 0&&(me={type:void 0,texture:void 0},W[ie]=me),(me.type!==I||me.texture!==X)&&(G!==ie&&(t.activeTexture(ie),G=ie),t.bindTexture(I,X||N[I]),me.type=I,me.texture=X)}function w(){const I=W[G];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function A(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(I){H.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),H.copy(I))}function xe(I){Q.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Q.copy(I))}function ze(I,X){let ie=d.get(X);ie===void 0&&(ie=new WeakMap,d.set(X,ie));let me=ie.get(I);me===void 0&&(me=t.getUniformBlockIndex(X,I.name),ie.set(I,me))}function Fe(I,X){const me=d.get(X).get(I);c.get(X)!==me&&(t.uniformBlockBinding(X,me,I.__bindingPointIndex),c.set(X,me))}function $e(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},G=null,W={},g={},x=new WeakMap,h=[],p=null,m=!1,v=null,_=null,M=null,S=null,C=null,P=null,y=null,T=!1,D=null,K=null,J=null,O=null,k=null,H.set(0,0,t.canvas.width,t.canvas.height),Q.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ve,disable:we,bindFramebuffer:Se,drawBuffers:pe,useProgram:Xe,setBlending:Ct,setMaterial:Gt,setFlipSided:dt,setCullFace:Kt,setLineWidth:ct,setPolygonOffset:We,setScissorTest:Pn,activeTexture:on,bindTexture:b,unbindTexture:w,compressedTexImage2D:j,compressedTexImage3D:re,texImage2D:_e,texImage3D:fe,updateUBOMapping:ze,uniformBlockBinding:Fe,texStorage2D:z,texStorage3D:de,texSubImage2D:se,texSubImage3D:ce,compressedTexSubImage2D:Ae,compressedTexSubImage3D:A,scissor:Me,viewport:xe,reset:$e}}function Jb(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,w){return m?new OffscreenCanvas(b,w):ta("canvas")}function _(b,w,j,re){let se=1;if((b.width>re||b.height>re)&&(se=re/Math.max(b.width,b.height)),se<1||w===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ce=w?Af:Math.floor,Ae=ce(se*b.width),A=ce(se*b.height);h===void 0&&(h=v(Ae,A));const z=j?v(Ae,A):h;return z.width=Ae,z.height=A,z.getContext("2d").drawImage(b,0,0,Ae,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Ae+"x"+A+")."),z}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function M(b){return Vp(b.width)&&Vp(b.height)}function S(b){return a?!1:b.wrapS!==Kn||b.wrapT!==Kn||b.minFilter!==St&&b.minFilter!==kn}function C(b,w){return b.generateMipmaps&&w&&b.minFilter!==St&&b.minFilter!==kn}function P(b){t.generateMipmap(b)}function y(b,w,j,re,se=!1){if(a===!1)return w;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=w;return w===6403&&(j===5126&&(ce=33326),j===5131&&(ce=33325),j===5121&&(ce=33321)),w===33319&&(j===5126&&(ce=33328),j===5131&&(ce=33327),j===5121&&(ce=33323)),w===6408&&(j===5126&&(ce=34836),j===5131&&(ce=34842),j===5121&&(ce=re===Qe&&se===!1?35907:32856),j===32819&&(ce=32854),j===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function T(b,w,j){return C(b,j)===!0||b.isFramebufferTexture&&b.minFilter!==St&&b.minFilter!==kn?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function D(b){return b===St||b===pp||b===Uu?9728:9729}function K(b){const w=b.target;w.removeEventListener("dispose",K),O(w),w.isVideoTexture&&x.delete(w)}function J(b){const w=b.target;w.removeEventListener("dispose",J),Y(w)}function O(b){const w=i.get(b);if(w.__webglInit===void 0)return;const j=b.source,re=p.get(j);if(re){const se=re[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&k(b),Object.keys(re).length===0&&p.delete(j)}i.remove(b)}function k(b){const w=i.get(b);t.deleteTexture(w.__webglTexture);const j=b.source,re=p.get(j);delete re[w.__cacheKey],s.memory.textures--}function Y(b){const w=b.texture,j=i.get(b),re=i.get(w);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),s.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)t.deleteFramebuffer(j.__webglFramebuffer[se]),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer[se]);else{if(t.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&t.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let se=0;se<j.__webglColorRenderbuffer.length;se++)j.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(j.__webglColorRenderbuffer[se]);j.__webglDepthRenderbuffer&&t.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let se=0,ce=w.length;se<ce;se++){const Ae=i.get(w[se]);Ae.__webglTexture&&(t.deleteTexture(Ae.__webglTexture),s.memory.textures--),i.remove(w[se])}i.remove(w),i.remove(b)}let te=0;function ee(){te=0}function R(){const b=te;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),te+=1,b}function G(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.encoding),w.join()}function W(b,w){const j=i.get(b);if(b.isVideoTexture&&Pn(b),b.isRenderTargetTexture===!1&&b.version>0&&j.__version!==b.version){const re=b.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(j,b,w);return}}n.bindTexture(3553,j.__webglTexture,33984+w)}function oe(b,w){const j=i.get(b);if(b.version>0&&j.__version!==b.version){we(j,b,w);return}n.bindTexture(35866,j.__webglTexture,33984+w)}function L(b,w){const j=i.get(b);if(b.version>0&&j.__version!==b.version){we(j,b,w);return}n.bindTexture(32879,j.__webglTexture,33984+w)}function H(b,w){const j=i.get(b);if(b.version>0&&j.__version!==b.version){Se(j,b,w);return}n.bindTexture(34067,j.__webglTexture,33984+w)}const Q={[ai]:10497,[Kn]:33071,[Tf]:33648},Z={[St]:9728,[pp]:9984,[Uu]:9986,[kn]:9729,[VS]:9985,[Qs]:9987};function N(b,w,j){if(j?(t.texParameteri(b,10242,Q[w.wrapS]),t.texParameteri(b,10243,Q[w.wrapT]),(b===32879||b===35866)&&t.texParameteri(b,32882,Q[w.wrapR]),t.texParameteri(b,10240,Z[w.magFilter]),t.texParameteri(b,10241,Z[w.minFilter])):(t.texParameteri(b,10242,33071),t.texParameteri(b,10243,33071),(b===32879||b===35866)&&t.texParameteri(b,32882,33071),(w.wrapS!==Kn||w.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,10240,D(w.magFilter)),t.texParameteri(b,10241,D(w.minFilter)),w.minFilter!==St&&w.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===St||w.minFilter!==Uu&&w.minFilter!==Qs||w.type===Lr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Js&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(b,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ve(b,w){let j=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",K));const re=w.source;let se=p.get(re);se===void 0&&(se={},p.set(re,se));const ce=G(w);if(ce!==b.__cacheKey){se[ce]===void 0&&(se[ce]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,j=!0),se[ce].usedTimes++;const Ae=se[b.__cacheKey];Ae!==void 0&&(se[b.__cacheKey].usedTimes--,Ae.usedTimes===0&&k(w)),b.__cacheKey=ce,b.__webglTexture=se[ce].texture}return j}function we(b,w,j){let re=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=35866),w.isData3DTexture&&(re=32879);const se=ve(b,w),ce=w.source;n.bindTexture(re,b.__webglTexture,33984+j);const Ae=i.get(ce);if(ce.version!==Ae.__version||se===!0){n.activeTexture(33984+j),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const A=S(w)&&M(w.image)===!1;let z=_(w.image,A,!1,c);z=on(w,z);const de=M(z)||a,_e=o.convert(w.format,w.encoding);let fe=o.convert(w.type),Me=y(w.internalFormat,_e,fe,w.encoding,w.isVideoTexture);N(re,w,de);let xe;const ze=w.mipmaps,Fe=a&&w.isVideoTexture!==!0,$e=Ae.__version===void 0||se===!0,I=T(w,z,de);if(w.isDepthTexture)Me=6402,a?w.type===Lr?Me=36012:w.type===Pr?Me=33190:w.type===Fo?Me=35056:Me=33189:w.type===Lr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ir&&Me===6402&&w.type!==ev&&w.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Pr,fe=o.convert(w.type)),w.format===$o&&Me===6402&&(Me=34041,w.type!==Fo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Fo,fe=o.convert(w.type))),$e&&(Fe?n.texStorage2D(3553,1,Me,z.width,z.height):n.texImage2D(3553,0,Me,z.width,z.height,0,_e,fe,null));else if(w.isDataTexture)if(ze.length>0&&de){Fe&&$e&&n.texStorage2D(3553,I,Me,ze[0].width,ze[0].height);for(let X=0,ie=ze.length;X<ie;X++)xe=ze[X],Fe?n.texSubImage2D(3553,X,0,0,xe.width,xe.height,_e,fe,xe.data):n.texImage2D(3553,X,Me,xe.width,xe.height,0,_e,fe,xe.data);w.generateMipmaps=!1}else Fe?($e&&n.texStorage2D(3553,I,Me,z.width,z.height),n.texSubImage2D(3553,0,0,0,z.width,z.height,_e,fe,z.data)):n.texImage2D(3553,0,Me,z.width,z.height,0,_e,fe,z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Fe&&$e&&n.texStorage3D(35866,I,Me,ze[0].width,ze[0].height,z.depth);for(let X=0,ie=ze.length;X<ie;X++)xe=ze[X],w.format!==Fn?_e!==null?Fe?n.compressedTexSubImage3D(35866,X,0,0,0,xe.width,xe.height,z.depth,_e,xe.data,0,0):n.compressedTexImage3D(35866,X,Me,xe.width,xe.height,z.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?n.texSubImage3D(35866,X,0,0,0,xe.width,xe.height,z.depth,_e,fe,xe.data):n.texImage3D(35866,X,Me,xe.width,xe.height,z.depth,0,_e,fe,xe.data)}else{Fe&&$e&&n.texStorage2D(3553,I,Me,ze[0].width,ze[0].height);for(let X=0,ie=ze.length;X<ie;X++)xe=ze[X],w.format!==Fn?_e!==null?Fe?n.compressedTexSubImage2D(3553,X,0,0,xe.width,xe.height,_e,xe.data):n.compressedTexImage2D(3553,X,Me,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?n.texSubImage2D(3553,X,0,0,xe.width,xe.height,_e,fe,xe.data):n.texImage2D(3553,X,Me,xe.width,xe.height,0,_e,fe,xe.data)}else if(w.isDataArrayTexture)Fe?($e&&n.texStorage3D(35866,I,Me,z.width,z.height,z.depth),n.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,_e,fe,z.data)):n.texImage3D(35866,0,Me,z.width,z.height,z.depth,0,_e,fe,z.data);else if(w.isData3DTexture)Fe?($e&&n.texStorage3D(32879,I,Me,z.width,z.height,z.depth),n.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,_e,fe,z.data)):n.texImage3D(32879,0,Me,z.width,z.height,z.depth,0,_e,fe,z.data);else if(w.isFramebufferTexture){if($e)if(Fe)n.texStorage2D(3553,I,Me,z.width,z.height);else{let X=z.width,ie=z.height;for(let me=0;me<I;me++)n.texImage2D(3553,me,Me,X,ie,0,_e,fe,null),X>>=1,ie>>=1}}else if(ze.length>0&&de){Fe&&$e&&n.texStorage2D(3553,I,Me,ze[0].width,ze[0].height);for(let X=0,ie=ze.length;X<ie;X++)xe=ze[X],Fe?n.texSubImage2D(3553,X,0,0,_e,fe,xe):n.texImage2D(3553,X,Me,_e,fe,xe);w.generateMipmaps=!1}else Fe?($e&&n.texStorage2D(3553,I,Me,z.width,z.height),n.texSubImage2D(3553,0,0,0,_e,fe,z)):n.texImage2D(3553,0,Me,_e,fe,z);C(w,de)&&P(re),Ae.__version=ce.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Se(b,w,j){if(w.image.length!==6)return;const re=ve(b,w),se=w.source;n.bindTexture(34067,b.__webglTexture,33984+j);const ce=i.get(se);if(se.version!==ce.__version||re===!0){n.activeTexture(33984+j),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,A=w.image[0]&&w.image[0].isDataTexture,z=[];for(let X=0;X<6;X++)!Ae&&!A?z[X]=_(w.image[X],!1,!0,u):z[X]=A?w.image[X].image:w.image[X],z[X]=on(w,z[X]);const de=z[0],_e=M(de)||a,fe=o.convert(w.format,w.encoding),Me=o.convert(w.type),xe=y(w.internalFormat,fe,Me,w.encoding),ze=a&&w.isVideoTexture!==!0,Fe=ce.__version===void 0||re===!0;let $e=T(w,de,_e);N(34067,w,_e);let I;if(Ae){ze&&Fe&&n.texStorage2D(34067,$e,xe,de.width,de.height);for(let X=0;X<6;X++){I=z[X].mipmaps;for(let ie=0;ie<I.length;ie++){const me=I[ie];w.format!==Fn?fe!==null?ze?n.compressedTexSubImage2D(34069+X,ie,0,0,me.width,me.height,fe,me.data):n.compressedTexImage2D(34069+X,ie,xe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?n.texSubImage2D(34069+X,ie,0,0,me.width,me.height,fe,Me,me.data):n.texImage2D(34069+X,ie,xe,me.width,me.height,0,fe,Me,me.data)}}}else{I=w.mipmaps,ze&&Fe&&(I.length>0&&$e++,n.texStorage2D(34067,$e,xe,z[0].width,z[0].height));for(let X=0;X<6;X++)if(A){ze?n.texSubImage2D(34069+X,0,0,0,z[X].width,z[X].height,fe,Me,z[X].data):n.texImage2D(34069+X,0,xe,z[X].width,z[X].height,0,fe,Me,z[X].data);for(let ie=0;ie<I.length;ie++){const Ee=I[ie].image[X].image;ze?n.texSubImage2D(34069+X,ie+1,0,0,Ee.width,Ee.height,fe,Me,Ee.data):n.texImage2D(34069+X,ie+1,xe,Ee.width,Ee.height,0,fe,Me,Ee.data)}}else{ze?n.texSubImage2D(34069+X,0,0,0,fe,Me,z[X]):n.texImage2D(34069+X,0,xe,fe,Me,z[X]);for(let ie=0;ie<I.length;ie++){const me=I[ie];ze?n.texSubImage2D(34069+X,ie+1,0,0,fe,Me,me.image[X]):n.texImage2D(34069+X,ie+1,xe,fe,Me,me.image[X])}}}C(w,_e)&&P(34067),ce.__version=se.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function pe(b,w,j,re,se){const ce=o.convert(j.format,j.encoding),Ae=o.convert(j.type),A=y(j.internalFormat,ce,Ae,j.encoding);i.get(w).__hasExternalTextures||(se===32879||se===35866?n.texImage3D(se,0,A,w.width,w.height,w.depth,0,ce,Ae,null):n.texImage2D(se,0,A,w.width,w.height,0,ce,Ae,null)),n.bindFramebuffer(36160,b),We(w)?f.framebufferTexture2DMultisampleEXT(36160,re,se,i.get(j).__webglTexture,0,ct(w)):(se===3553||se>=34069&&se<=34074)&&t.framebufferTexture2D(36160,re,se,i.get(j).__webglTexture,0),n.bindFramebuffer(36160,null)}function Xe(b,w,j){if(t.bindRenderbuffer(36161,b),w.depthBuffer&&!w.stencilBuffer){let re=33189;if(j||We(w)){const se=w.depthTexture;se&&se.isDepthTexture&&(se.type===Lr?re=36012:se.type===Pr&&(re=33190));const ce=ct(w);We(w)?f.renderbufferStorageMultisampleEXT(36161,ce,re,w.width,w.height):t.renderbufferStorageMultisample(36161,ce,re,w.width,w.height)}else t.renderbufferStorage(36161,re,w.width,w.height);t.framebufferRenderbuffer(36160,36096,36161,b)}else if(w.depthBuffer&&w.stencilBuffer){const re=ct(w);j&&We(w)===!1?t.renderbufferStorageMultisample(36161,re,35056,w.width,w.height):We(w)?f.renderbufferStorageMultisampleEXT(36161,re,35056,w.width,w.height):t.renderbufferStorage(36161,34041,w.width,w.height),t.framebufferRenderbuffer(36160,33306,36161,b)}else{const re=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0;se<re.length;se++){const ce=re[se],Ae=o.convert(ce.format,ce.encoding),A=o.convert(ce.type),z=y(ce.internalFormat,Ae,A,ce.encoding),de=ct(w);j&&We(w)===!1?t.renderbufferStorageMultisample(36161,de,z,w.width,w.height):We(w)?f.renderbufferStorageMultisampleEXT(36161,de,z,w.width,w.height):t.renderbufferStorage(36161,z,w.width,w.height)}}t.bindRenderbuffer(36161,null)}function Le(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const re=i.get(w.depthTexture).__webglTexture,se=ct(w);if(w.depthTexture.format===Ir)We(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,re,0,se):t.framebufferTexture2D(36160,36096,3553,re,0);else if(w.depthTexture.format===$o)We(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,re,0,se):t.framebufferTexture2D(36160,33306,3553,re,0);else throw new Error("Unknown depthTexture format")}function Te(b){const w=i.get(b),j=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Le(w.__webglFramebuffer,b)}else if(j){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(36160,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]=t.createRenderbuffer(),Xe(w.__webglDepthbuffer[re],b,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),Xe(w.__webglDepthbuffer,b,!1);n.bindFramebuffer(36160,null)}function Ct(b,w,j){const re=i.get(b);w!==void 0&&pe(re.__webglFramebuffer,b,b.texture,36064,3553),j!==void 0&&Te(b)}function Gt(b){const w=b.texture,j=i.get(b),re=i.get(w);b.addEventListener("dispose",J),b.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=w.version,s.memory.textures++);const se=b.isWebGLCubeRenderTarget===!0,ce=b.isWebGLMultipleRenderTargets===!0,Ae=M(b)||a;if(se){j.__webglFramebuffer=[];for(let A=0;A<6;A++)j.__webglFramebuffer[A]=t.createFramebuffer()}else{if(j.__webglFramebuffer=t.createFramebuffer(),ce)if(r.drawBuffers){const A=b.texture;for(let z=0,de=A.length;z<de;z++){const _e=i.get(A[z]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&We(b)===!1){const A=ce?w:[w];j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let z=0;z<A.length;z++){const de=A[z];j.__webglColorRenderbuffer[z]=t.createRenderbuffer(),t.bindRenderbuffer(36161,j.__webglColorRenderbuffer[z]);const _e=o.convert(de.format,de.encoding),fe=o.convert(de.type),Me=y(de.internalFormat,_e,fe,de.encoding,b.isXRRenderTarget===!0),xe=ct(b);t.renderbufferStorageMultisample(36161,xe,Me,b.width,b.height),t.framebufferRenderbuffer(36160,36064+z,36161,j.__webglColorRenderbuffer[z])}t.bindRenderbuffer(36161,null),b.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),Xe(j.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(36160,null)}}if(se){n.bindTexture(34067,re.__webglTexture),N(34067,w,Ae);for(let A=0;A<6;A++)pe(j.__webglFramebuffer[A],b,w,36064,34069+A);C(w,Ae)&&P(34067),n.unbindTexture()}else if(ce){const A=b.texture;for(let z=0,de=A.length;z<de;z++){const _e=A[z],fe=i.get(_e);n.bindTexture(3553,fe.__webglTexture),N(3553,_e,Ae),pe(j.__webglFramebuffer,b,_e,36064+z,3553),C(_e,Ae)&&P(3553)}n.unbindTexture()}else{let A=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?A=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(A,re.__webglTexture),N(A,w,Ae),pe(j.__webglFramebuffer,b,w,36064,A),C(w,Ae)&&P(A),n.unbindTexture()}b.depthBuffer&&Te(b)}function dt(b){const w=M(b)||a,j=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let re=0,se=j.length;re<se;re++){const ce=j[re];if(C(ce,w)){const Ae=b.isWebGLCubeRenderTarget?34067:3553,A=i.get(ce).__webglTexture;n.bindTexture(Ae,A),P(Ae),n.unbindTexture()}}}function Kt(b){if(a&&b.samples>0&&We(b)===!1){const w=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],j=b.width,re=b.height;let se=16384;const ce=[],Ae=b.stencilBuffer?33306:36096,A=i.get(b),z=b.isWebGLMultipleRenderTargets===!0;if(z)for(let de=0;de<w.length;de++)n.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+de,36161,null),n.bindFramebuffer(36160,A.__webglFramebuffer),t.framebufferTexture2D(36009,36064+de,3553,null,0);n.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,A.__webglFramebuffer);for(let de=0;de<w.length;de++){ce.push(36064+de),b.depthBuffer&&ce.push(Ae);const _e=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(_e===!1&&(b.depthBuffer&&(se|=256),b.stencilBuffer&&(se|=1024)),z&&t.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[de]),_e===!0&&(t.invalidateFramebuffer(36008,[Ae]),t.invalidateFramebuffer(36009,[Ae])),z){const fe=i.get(w[de]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,fe,0)}t.blitFramebuffer(0,0,j,re,0,0,j,re,se,9728),g&&t.invalidateFramebuffer(36008,ce)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),z)for(let de=0;de<w.length;de++){n.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+de,36161,A.__webglColorRenderbuffer[de]);const _e=i.get(w[de]).__webglTexture;n.bindFramebuffer(36160,A.__webglFramebuffer),t.framebufferTexture2D(36009,36064+de,3553,_e,0)}n.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function ct(b){return Math.min(d,b.samples)}function We(b){const w=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pn(b){const w=s.render.frame;x.get(b)!==w&&(x.set(b,w),b.update())}function on(b,w){const j=b.encoding,re=b.format,se=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Cf||j!==Gr&&(j===Qe?a===!1?e.has("EXT_sRGB")===!0&&re===Fn?(b.format=Cf,b.minFilter=kn,b.generateMipmaps=!1):w=iv.sRGBToLinear(w):(re!==Fn||se!==Vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),w}this.allocateTextureUnit=R,this.resetTextureUnits=ee,this.setTexture2D=W,this.setTexture2DArray=oe,this.setTexture3D=L,this.setTextureCube=H,this.rebindTextures=Ct,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=We}function eT(t,e,n){const i=n.isWebGL2;function r(o,s=null){let a;if(o===Vr)return 5121;if(o===jS)return 32819;if(o===XS)return 32820;if(o===GS)return 5120;if(o===HS)return 5122;if(o===ev)return 5123;if(o===WS)return 5124;if(o===Pr)return 5125;if(o===Lr)return 5126;if(o===Js)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===qS)return 6406;if(o===Fn)return 6408;if(o===$S)return 6409;if(o===YS)return 6410;if(o===Ir)return 6402;if(o===$o)return 34041;if(o===Cf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===KS)return 6403;if(o===ZS)return 36244;if(o===QS)return 33319;if(o===JS)return 33320;if(o===e1)return 36249;if(o===Bu||o===Vu||o===Gu||o===Hu)if(s===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Bu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Bu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Vu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Gu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Hu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===mp||o===gp||o===vp||o===_p)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===mp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===gp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===vp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===_p)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===t1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===xp||o===yp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===xp)return s===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===yp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Sp||o===Mp||o===wp||o===Ep||o===bp||o===Tp||o===Cp||o===Ap||o===Pp||o===Lp||o===Dp||o===Rp||o===Ip||o===Np)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Sp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Mp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===wp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Ep)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===bp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Tp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Cp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Ap)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Pp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Lp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Dp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Rp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Ip)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Np)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Wu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Wu)return s===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===n1||o===kp||o===zp||o===Fp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Wu)return a.COMPRESSED_RED_RGTC1_EXT;if(o===kp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===zp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Fp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Fo?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class tT extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ci extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nT={type:"move"};class vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const h of e.hand.values()){const p=n.getJointPose(h,i),m=this._getHandJoint(u,h);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=p.radius),m.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),g=.02,x=.005;u.inputState.pinching&&f>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ci;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class iT extends hn{constructor(e,n,i,r,o,s,a,l,u,c){if(c=c!==void 0?c:Ir,c!==Ir&&c!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ir&&(i=Pr),i===void 0&&c===$o&&(i=Fo),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1}}class rT extends $r{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,g=null,x=null;const h=n.getContextAttributes();let p=null,m=null;const v=[],_=[],M=new Set,S=new Map,C=new zn;C.layers.enable(1),C.viewport=new Ot;const P=new zn;P.layers.enable(2),P.viewport=new Ot;const y=[C,P],T=new tT;T.layers.enable(1),T.layers.enable(2);let D=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let H=v[L];return H===void 0&&(H=new vc,v[L]=H),H.getTargetRaySpace()},this.getControllerGrip=function(L){let H=v[L];return H===void 0&&(H=new vc,v[L]=H),H.getGripSpace()},this.getHand=function(L){let H=v[L];return H===void 0&&(H=new vc,v[L]=H),H.getHandSpace()};function J(L){const H=_.indexOf(L.inputSource);if(H===-1)return;const Q=v[H];Q!==void 0&&Q.dispatchEvent({type:L.type,data:L.inputSource})}function O(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",k);for(let L=0;L<v.length;L++){const H=_[L];H!==null&&(_[L]=null,v[L].disconnect(H))}D=null,K=null,e.setRenderTarget(p),g=null,f=null,d=null,r=null,m=null,oe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){o=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(L){u=L},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",O),r.addEventListener("inputsourceschange",k),h.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:o};g=new XRWebGLLayer(r,n,H),r.updateRenderState({baseLayer:g}),m=new Hr(g.framebufferWidth,g.framebufferHeight,{format:Fn,type:Vr,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let H=null,Q=null,Z=null;h.depth&&(Z=h.stencil?35056:33190,H=h.stencil?$o:Ir,Q=h.stencil?Fo:Pr);const N={colorFormat:32856,depthFormat:Z,scaleFactor:o};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(N),r.updateRenderState({layers:[f]}),m=new Hr(f.textureWidth,f.textureHeight,{format:Fn,type:Vr,depthTexture:new iT(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const ve=e.properties.get(m);ve.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function k(L){for(let H=0;H<L.removed.length;H++){const Q=L.removed[H],Z=_.indexOf(Q);Z>=0&&(_[Z]=null,v[Z].disconnect(Q))}for(let H=0;H<L.added.length;H++){const Q=L.added[H];let Z=_.indexOf(Q);if(Z===-1){for(let ve=0;ve<v.length;ve++)if(ve>=_.length){_.push(Q),Z=ve;break}else if(_[ve]===null){_[ve]=Q,Z=ve;break}if(Z===-1)break}const N=v[Z];N&&N.connect(Q)}}const Y=new B,te=new B;function ee(L,H,Q){Y.setFromMatrixPosition(H.matrixWorld),te.setFromMatrixPosition(Q.matrixWorld);const Z=Y.distanceTo(te),N=H.projectionMatrix.elements,ve=Q.projectionMatrix.elements,we=N[14]/(N[10]-1),Se=N[14]/(N[10]+1),pe=(N[9]+1)/N[5],Xe=(N[9]-1)/N[5],Le=(N[8]-1)/N[0],Te=(ve[8]+1)/ve[0],Ct=we*Le,Gt=we*Te,dt=Z/(-Le+Te),Kt=dt*-Le;H.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Kt),L.translateZ(dt),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const ct=we+dt,We=Se+dt,Pn=Ct-Kt,on=Gt+(Z-Kt),b=pe*Se/We*ct,w=Xe*Se/We*ct;L.projectionMatrix.makePerspective(Pn,on,b,w,ct,We)}function R(L,H){H===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(H.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;T.near=P.near=C.near=L.near,T.far=P.far=C.far=L.far,(D!==T.near||K!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,K=T.far);const H=L.parent,Q=T.cameras;R(T,H);for(let N=0;N<Q.length;N++)R(Q[N],H);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),L.matrix.copy(T.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);const Z=L.children;for(let N=0,ve=Z.length;N<ve;N++)Z[N].updateMatrixWorld(!0);Q.length===2?ee(T,C,P):T.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(L){l=L,f!==null&&(f.fixedFoveation=L),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=L)},this.getPlanes=function(){return M};let G=null;function W(L,H){if(c=H.getViewerPose(u||s),x=H,c!==null){const Q=c.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let Z=!1;Q.length!==T.cameras.length&&(T.cameras.length=0,Z=!0);for(let N=0;N<Q.length;N++){const ve=Q[N];let we=null;if(g!==null)we=g.getViewport(ve);else{const pe=d.getViewSubImage(f,ve);we=pe.viewport,N===0&&(e.setRenderTargetTextures(m,pe.colorTexture,f.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(m))}let Se=y[N];Se===void 0&&(Se=new zn,Se.layers.enable(N),Se.viewport=new Ot,y[N]=Se),Se.matrix.fromArray(ve.transform.matrix),Se.projectionMatrix.fromArray(ve.projectionMatrix),Se.viewport.set(we.x,we.y,we.width,we.height),N===0&&T.matrix.copy(Se.matrix),Z===!0&&T.cameras.push(Se)}}for(let Q=0;Q<v.length;Q++){const Z=_[Q],N=v[Q];Z!==null&&N!==void 0&&N.update(Z,H,u||s)}if(G&&G(L,H),H.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:H.detectedPlanes});let Q=null;for(const Z of M)H.detectedPlanes.has(Z)||(Q===null&&(Q=[]),Q.push(Z));if(Q!==null)for(const Z of Q)M.delete(Z),S.delete(Z),i.dispatchEvent({type:"planeremoved",data:Z});for(const Z of H.detectedPlanes)if(!M.has(Z))M.add(Z),S.set(Z,H.lastChangedTime),i.dispatchEvent({type:"planeadded",data:Z});else{const N=S.get(Z);Z.lastChangedTime>N&&(S.set(Z,Z.lastChangedTime),i.dispatchEvent({type:"planechanged",data:Z}))}}x=null}const oe=new hv;oe.setAnimationLoop(W),this.setAnimationLoop=function(L){G=L},this.dispose=function(){}}}function oT(t,e){function n(h,p){p.color.getRGB(h.fogColor.value,uv(t)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,m,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,_)):p.isMeshMatcapMaterial?(r(h,p),g(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),x(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(o(h,p),p.isLineDashedMaterial&&s(h,p)):p.isPointsMaterial?a(h,p,m,v):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===En&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===En&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const m=e.get(p).envMap;if(m&&(h.envMap.value=m,h.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const M=t.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uv2Transform.value.copy(_.matrix))}function o(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function s(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,m,v){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*m,h.scale.value=v*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let m;p.map?m=p.map:p.alphaMap&&(m=p.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),h.uvTransform.value.copy(m.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,m){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===En&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=m.texture,h.transmissionSamplerSize.value.set(m.width,m.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function g(h,p){p.matcap&&(h.matcap.value=p.matcap)}function x(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sT(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,_){const M=_.program;i.uniformBlockBinding(v,M)}function u(v,_){let M=r[v.id];M===void 0&&(x(v),M=c(v),r[v.id]=M,v.addEventListener("dispose",p));const S=_.program;i.updateUBOMapping(v,S);const C=e.render.frame;o[v.id]!==C&&(f(v),o[v.id]=C)}function c(v){const _=d();v.__bindingPointIndex=_;const M=t.createBuffer(),S=v.__size,C=v.usage;return t.bindBuffer(35345,M),t.bufferData(35345,S,C),t.bindBuffer(35345,null),t.bindBufferBase(35345,_,M),M}function d(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=r[v.id],M=v.uniforms,S=v.__cache;t.bindBuffer(35345,_);for(let C=0,P=M.length;C<P;C++){const y=M[C];if(g(y,C,S)===!0){const T=y.__offset,D=Array.isArray(y.value)?y.value:[y.value];let K=0;for(let J=0;J<D.length;J++){const O=D[J],k=h(O);typeof O=="number"?(y.__data[0]=O,t.bufferSubData(35345,T+K,y.__data)):O.isMatrix3?(y.__data[0]=O.elements[0],y.__data[1]=O.elements[1],y.__data[2]=O.elements[2],y.__data[3]=O.elements[0],y.__data[4]=O.elements[3],y.__data[5]=O.elements[4],y.__data[6]=O.elements[5],y.__data[7]=O.elements[0],y.__data[8]=O.elements[6],y.__data[9]=O.elements[7],y.__data[10]=O.elements[8],y.__data[11]=O.elements[0]):(O.toArray(y.__data,K),K+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,T,y.__data)}}t.bindBuffer(35345,null)}function g(v,_,M){const S=v.value;if(M[_]===void 0){if(typeof S=="number")M[_]=S;else{const C=Array.isArray(S)?S:[S],P=[];for(let y=0;y<C.length;y++)P.push(C[y].clone());M[_]=P}return!0}else if(typeof S=="number"){if(M[_]!==S)return M[_]=S,!0}else{const C=Array.isArray(M[_])?M[_]:[M[_]],P=Array.isArray(S)?S:[S];for(let y=0;y<C.length;y++){const T=C[y];if(T.equals(P[y])===!1)return T.copy(P[y]),!0}}return!1}function x(v){const _=v.uniforms;let M=0;const S=16;let C=0;for(let P=0,y=_.length;P<y;P++){const T=_[P],D={boundary:0,storage:0},K=Array.isArray(T.value)?T.value:[T.value];for(let J=0,O=K.length;J<O;J++){const k=K[J],Y=h(k);D.boundary+=Y.boundary,D.storage+=Y.storage}if(T.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,P>0){C=M%S;const J=S-C;C!==0&&J-D.boundary<0&&(M+=S-C,T.__offset=M)}M+=D.storage}return C=M%S,C>0&&(M+=S-C),v.__size=M,v.__cache={},this}function h(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){const _=v.target;_.removeEventListener("dispose",p);const M=s.indexOf(_.__bindingPointIndex);s.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete o[_.id]}function m(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:u,dispose:m}}function aT(){const t=ta("canvas");return t.style.display="block",t}function _v(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:aT(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,o=t.antialias!==void 0?t.antialias:!1,s=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let d=null,f=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Gr,this.physicallyCorrectLights=!1,this.toneMapping=Pi,this.toneMappingExposure=1;const h=this;let p=!1,m=0,v=0,_=null,M=-1,S=null;const C=new Ot,P=new Ot;let y=null,T=e.width,D=e.height,K=1,J=null,O=null;const k=new Ot(0,0,T,D),Y=new Ot(0,0,T,D);let te=!1;const ee=new dv;let R=!1,G=!1,W=null;const oe=new Bt,L=new Ne,H=new B,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Z(){return _===null?K:1}let N=n;function ve(E,U){for(let q=0;q<E.length;q++){const F=E[q],$=e.getContext(F,U);if($!==null)return $}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nd}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",ze,!1),N===null){const U=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&U.shift(),N=ve(U,E),N===null)throw ve(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let we,Se,pe,Xe,Le,Te,Ct,Gt,dt,Kt,ct,We,Pn,on,b,w,j,re,se,ce,Ae,A,z,de;function _e(){we=new _E(N),Se=new fE(N,we,t),we.init(Se),A=new eT(N,we,Se),pe=new Qb(N,we,Se),Xe=new SE,Le=new Ob,Te=new Jb(N,we,pe,Le,Se,A,Xe),Ct=new hE(h),Gt=new vE(h),dt=new P1(N,Se),z=new uE(N,we,dt,Se),Kt=new xE(N,dt,Xe,z),ct=new bE(N,Kt,dt,Xe),se=new EE(N,Se,Te),w=new dE(Le),We=new Fb(h,Ct,Gt,we,Se,z,w),Pn=new oT(h,Le),on=new Bb,b=new Xb(we,Se),re=new lE(h,Ct,Gt,pe,ct,c,s),j=new Zb(h,ct,Se),de=new sT(N,Xe,Se,pe),ce=new cE(N,we,Xe,Se),Ae=new yE(N,we,Xe,Se),Xe.programs=We.programs,h.capabilities=Se,h.extensions=we,h.properties=Le,h.renderLists=on,h.shadowMap=j,h.state=pe,h.info=Xe}_e();const fe=new rT(h,N);this.xr=fe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=we.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=we.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(T,D,!1))},this.getSize=function(E){return E.set(T,D)},this.setSize=function(E,U,q){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,D=U,e.width=Math.floor(E*K),e.height=Math.floor(U*K),q!==!1&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(T*K,D*K).floor()},this.setDrawingBufferSize=function(E,U,q){T=E,D=U,K=q,e.width=Math.floor(E*q),e.height=Math.floor(U*q),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(k)},this.setViewport=function(E,U,q,F){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,U,q,F),pe.viewport(C.copy(k).multiplyScalar(K).floor())},this.getScissor=function(E){return E.copy(Y)},this.setScissor=function(E,U,q,F){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,U,q,F),pe.scissor(P.copy(Y).multiplyScalar(K).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(E){pe.setScissorTest(te=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){O=E},this.getClearColor=function(E){return E.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(E=!0,U=!0,q=!0){let F=0;E&&(F|=16384),U&&(F|=256),q&&(F|=1024),N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",ze,!1),on.dispose(),b.dispose(),Le.dispose(),Ct.dispose(),Gt.dispose(),ct.dispose(),z.dispose(),de.dispose(),We.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",me),fe.removeEventListener("sessionend",Ee),W&&(W.dispose(),W=null),je.stop()};function Me(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Xe.autoReset,U=j.enabled,q=j.autoUpdate,F=j.needsUpdate,$=j.type;_e(),Xe.autoReset=E,j.enabled=U,j.autoUpdate=q,j.needsUpdate=F,j.type=$}function ze(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Fe(E){const U=E.target;U.removeEventListener("dispose",Fe),$e(U)}function $e(E){I(E),Le.remove(E)}function I(E){const U=Le.get(E).programs;U!==void 0&&(U.forEach(function(q){We.releaseProgram(q)}),E.isShaderMaterial&&We.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,q,F,$,be){U===null&&(U=Q);const Pe=$.isMesh&&$.matrixWorld.determinant()<0,Re=Pv(E,U,q,F,$);pe.setMaterial(F,Pe);let Ie=q.index,He=1;F.wireframe===!0&&(Ie=Kt.getWireframeAttribute(q),He=2);const Oe=q.drawRange,Ue=q.attributes.position;let ht=Oe.start*He,pn=(Oe.start+Oe.count)*He;be!==null&&(ht=Math.max(ht,be.start*He),pn=Math.min(pn,(be.start+be.count)*He)),Ie!==null?(ht=Math.max(ht,0),pn=Math.min(pn,Ie.count)):Ue!=null&&(ht=Math.max(ht,0),pn=Math.min(pn,Ue.count));const di=pn-ht;if(di<0||di===1/0)return;z.setup($,F,Re,q,Ie);let pr,pt=ce;if(Ie!==null&&(pr=dt.get(Ie),pt=Ae,pt.setIndex(pr)),$.isMesh)F.wireframe===!0?(pe.setLineWidth(F.wireframeLinewidth*Z()),pt.setMode(1)):pt.setMode(4);else if($.isLine){let Be=F.linewidth;Be===void 0&&(Be=1),pe.setLineWidth(Be*Z()),$.isLineSegments?pt.setMode(1):$.isLineLoop?pt.setMode(2):pt.setMode(3)}else $.isPoints?pt.setMode(0):$.isSprite&&pt.setMode(4);if($.isInstancedMesh)pt.renderInstances(ht,di,$.count);else if(q.isInstancedBufferGeometry){const Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,au=Math.min(q.instanceCount,Be);pt.renderInstances(ht,di,au)}else pt.render(ht,di)},this.compile=function(E,U){function q(F,$,be){F.transparent===!0&&F.side===Ft&&F.forceSinglePass===!1?(F.side=En,F.needsUpdate=!0,Ln(F,$,be),F.side=ar,F.needsUpdate=!0,Ln(F,$,be),F.side=Ft):Ln(F,$,be)}f=b.get(E),f.init(),x.push(f),E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(h.physicallyCorrectLights),E.traverse(function(F){const $=F.material;if($)if(Array.isArray($))for(let be=0;be<$.length;be++){const Pe=$[be];q(Pe,E,F)}else q($,E,F)}),x.pop(),f=null};let X=null;function ie(E){X&&X(E)}function me(){je.stop()}function Ee(){je.start()}const je=new hv;je.setAnimationLoop(ie),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(E){X=E,fe.setAnimationLoop(E),E===null?je.stop():je.start()},fe.addEventListener("sessionstart",me),fe.addEventListener("sessionend",Ee),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(U),U=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,U,_),f=b.get(E,x.length),f.init(),x.push(f),oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(oe),G=this.localClippingEnabled,R=w.init(this.clippingPlanes,G),d=on.get(E,g.length),d.init(),g.push(d),At(E,U,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(J,O),R===!0&&w.beginShadows();const q=f.state.shadowsArray;if(j.render(q,E,U),R===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(d,E),f.setupLights(h.physicallyCorrectLights),U.isArrayCamera){const F=U.cameras;for(let $=0,be=F.length;$<be;$++){const Pe=F[$];Ht(d,E,Pe,Pe.viewport)}}else Ht(d,E,U);_!==null&&(Te.updateMultisampleRenderTarget(_),Te.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(h,E,U),z.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function At(E,U,q,F){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ee.intersectsSprite(E)){F&&H.setFromMatrixPosition(E.matrixWorld).applyMatrix4(oe);const Pe=ct.update(E),Re=E.material;Re.visible&&d.push(E,Pe,Re,q,H.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Xe.render.frame&&(E.skeleton.update(),E.skeleton.frame=Xe.render.frame),!E.frustumCulled||ee.intersectsObject(E))){F&&H.setFromMatrixPosition(E.matrixWorld).applyMatrix4(oe);const Pe=ct.update(E),Re=E.material;if(Array.isArray(Re)){const Ie=Pe.groups;for(let He=0,Oe=Ie.length;He<Oe;He++){const Ue=Ie[He],ht=Re[Ue.materialIndex];ht&&ht.visible&&d.push(E,Pe,ht,q,H.z,Ue)}}else Re.visible&&d.push(E,Pe,Re,q,H.z,null)}}const be=E.children;for(let Pe=0,Re=be.length;Pe<Re;Pe++)At(be[Pe],U,q,F)}function Ht(E,U,q,F){const $=E.opaque,be=E.transmissive,Pe=E.transparent;f.setupLightsView(q),R===!0&&w.setGlobalState(h.clippingPlanes,q),be.length>0&&hr($,U,q),F&&pe.viewport(C.copy(F)),$.length>0&&it($,U,q),be.length>0&&it(be,U,q),Pe.length>0&&it(Pe,U,q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function hr(E,U,q){const F=Se.isWebGL2;W===null&&(W=new Hr(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?Js:Vr,minFilter:Qs,samples:F&&o===!0?4:0})),h.getDrawingBufferSize(L),F?W.setSize(L.x,L.y):W.setSize(Af(L.x),Af(L.y));const $=h.getRenderTarget();h.setRenderTarget(W),h.clear();const be=h.toneMapping;h.toneMapping=Pi,it(E,U,q),h.toneMapping=be,Te.updateMultisampleRenderTarget(W),Te.updateRenderTargetMipmap(W),h.setRenderTarget($)}function it(E,U,q){const F=U.isScene===!0?U.overrideMaterial:null;for(let $=0,be=E.length;$<be;$++){const Pe=E[$],Re=Pe.object,Ie=Pe.geometry,He=F===null?Pe.material:F,Oe=Pe.group;Re.layers.test(q.layers)&&fi(Re,U,q,Ie,He,Oe)}}function fi(E,U,q,F,$,be){E.onBeforeRender(h,U,q,F,$,be),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(h,U,q,F,E,be),$.transparent===!0&&$.side===Ft&&$.forceSinglePass===!1?($.side=En,$.needsUpdate=!0,h.renderBufferDirect(q,U,F,$,E,be),$.side=ar,$.needsUpdate=!0,h.renderBufferDirect(q,U,F,$,E,be),$.side=Ft):h.renderBufferDirect(q,U,F,$,E,be),E.onAfterRender(h,U,q,F,$,be)}function Ln(E,U,q){U.isScene!==!0&&(U=Q);const F=Le.get(E),$=f.state.lights,be=f.state.shadowsArray,Pe=$.state.version,Re=We.getParameters(E,$.state,be,U,q),Ie=We.getProgramCacheKey(Re);let He=F.programs;F.environment=E.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(E.isMeshStandardMaterial?Gt:Ct).get(E.envMap||F.environment),He===void 0&&(E.addEventListener("dispose",Fe),He=new Map,F.programs=He);let Oe=He.get(Ie);if(Oe!==void 0){if(F.currentProgram===Oe&&F.lightsStateVersion===Pe)return Bd(E,Re),Oe}else Re.uniforms=We.getUniforms(E),E.onBuild(q,Re,h),E.onBeforeCompile(Re,h),Oe=We.acquireProgram(Re,Ie),He.set(Ie,Oe),F.uniforms=Re.uniforms;const Ue=F.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=w.uniform),Bd(E,Re),F.needsLights=Dv(E),F.lightsStateVersion=Pe,F.needsLights&&(Ue.ambientLightColor.value=$.state.ambient,Ue.lightProbe.value=$.state.probe,Ue.directionalLights.value=$.state.directional,Ue.directionalLightShadows.value=$.state.directionalShadow,Ue.spotLights.value=$.state.spot,Ue.spotLightShadows.value=$.state.spotShadow,Ue.rectAreaLights.value=$.state.rectArea,Ue.ltc_1.value=$.state.rectAreaLTC1,Ue.ltc_2.value=$.state.rectAreaLTC2,Ue.pointLights.value=$.state.point,Ue.pointLightShadows.value=$.state.pointShadow,Ue.hemisphereLights.value=$.state.hemi,Ue.directionalShadowMap.value=$.state.directionalShadowMap,Ue.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ue.spotShadowMap.value=$.state.spotShadowMap,Ue.spotLightMatrix.value=$.state.spotLightMatrix,Ue.spotLightMap.value=$.state.spotLightMap,Ue.pointShadowMap.value=$.state.pointShadowMap,Ue.pointShadowMatrix.value=$.state.pointShadowMatrix);const ht=Oe.getUniforms(),pn=ul.seqWithValue(ht.seq,Ue);return F.currentProgram=Oe,F.uniformsList=pn,Oe}function Bd(E,U){const q=Le.get(E);q.outputEncoding=U.outputEncoding,q.instancing=U.instancing,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Pv(E,U,q,F,$){U.isScene!==!0&&(U=Q),Te.resetTextureUnits();const be=U.fog,Pe=F.isMeshStandardMaterial?U.environment:null,Re=_===null?h.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Gr,Ie=(F.isMeshStandardMaterial?Gt:Ct).get(F.envMap||Pe),He=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Oe=!!F.normalMap&&!!q.attributes.tangent,Ue=!!q.morphAttributes.position,ht=!!q.morphAttributes.normal,pn=!!q.morphAttributes.color,di=F.toneMapped?h.toneMapping:Pi,pr=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pt=pr!==void 0?pr.length:0,Be=Le.get(F),au=f.state.lights;if(R===!0&&(G===!0||E!==S)){const mn=E===S&&F.id===M;w.setState(F,E,mn)}let Pt=!1;F.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==au.state.version||Be.outputEncoding!==Re||$.isInstancedMesh&&Be.instancing===!1||!$.isInstancedMesh&&Be.instancing===!0||$.isSkinnedMesh&&Be.skinning===!1||!$.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Ie||F.fog===!0&&Be.fog!==be||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==w.numPlanes||Be.numIntersection!==w.numIntersection)||Be.vertexAlphas!==He||Be.vertexTangents!==Oe||Be.morphTargets!==Ue||Be.morphNormals!==ht||Be.morphColors!==pn||Be.toneMapping!==di||Se.isWebGL2===!0&&Be.morphTargetsCount!==pt)&&(Pt=!0):(Pt=!0,Be.__version=F.version);let mr=Be.currentProgram;Pt===!0&&(mr=Ln(F,U,$));let Vd=!1,is=!1,lu=!1;const Zt=mr.getUniforms(),gr=Be.uniforms;if(pe.useProgram(mr.program)&&(Vd=!0,is=!0,lu=!0),F.id!==M&&(M=F.id,is=!0),Vd||S!==E){if(Zt.setValue(N,"projectionMatrix",E.projectionMatrix),Se.logarithmicDepthBuffer&&Zt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,is=!0,lu=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const mn=Zt.map.cameraPosition;mn!==void 0&&mn.setValue(N,H.setFromMatrixPosition(E.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Zt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||$.isSkinnedMesh)&&Zt.setValue(N,"viewMatrix",E.matrixWorldInverse)}if($.isSkinnedMesh){Zt.setOptional(N,$,"bindMatrix"),Zt.setOptional(N,$,"bindMatrixInverse");const mn=$.skeleton;mn&&(Se.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),Zt.setValue(N,"boneTexture",mn.boneTexture,Te),Zt.setValue(N,"boneTextureSize",mn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const uu=q.morphAttributes;if((uu.position!==void 0||uu.normal!==void 0||uu.color!==void 0&&Se.isWebGL2===!0)&&se.update($,q,F,mr),(is||Be.receiveShadow!==$.receiveShadow)&&(Be.receiveShadow=$.receiveShadow,Zt.setValue(N,"receiveShadow",$.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(gr.envMap.value=Ie,gr.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),is&&(Zt.setValue(N,"toneMappingExposure",h.toneMappingExposure),Be.needsLights&&Lv(gr,lu),be&&F.fog===!0&&Pn.refreshFogUniforms(gr,be),Pn.refreshMaterialUniforms(gr,F,K,D,W),ul.upload(N,Be.uniformsList,gr,Te)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ul.upload(N,Be.uniformsList,gr,Te),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Zt.setValue(N,"center",$.center),Zt.setValue(N,"modelViewMatrix",$.modelViewMatrix),Zt.setValue(N,"normalMatrix",$.normalMatrix),Zt.setValue(N,"modelMatrix",$.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const mn=F.uniformsGroups;for(let cu=0,Rv=mn.length;cu<Rv;cu++)if(Se.isWebGL2){const Gd=mn[cu];de.update(Gd,mr),de.bind(Gd,mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mr}function Lv(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Dv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,U,q){Le.get(E.texture).__webglTexture=U,Le.get(E.depthTexture).__webglTexture=q;const F=Le.get(E);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const q=Le.get(E);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,q=0){_=E,m=U,v=q;let F=!0,$=null,be=!1,Pe=!1;if(E){const Ie=Le.get(E);Ie.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),F=!1):Ie.__webglFramebuffer===void 0?Te.setupRenderTarget(E):Ie.__hasExternalTextures&&Te.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Pe=!0);const Oe=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=Oe[U],be=!0):Se.isWebGL2&&E.samples>0&&Te.useMultisampledRTT(E)===!1?$=Le.get(E).__webglMultisampledFramebuffer:$=Oe,C.copy(E.viewport),P.copy(E.scissor),y=E.scissorTest}else C.copy(k).multiplyScalar(K).floor(),P.copy(Y).multiplyScalar(K).floor(),y=te;if(pe.bindFramebuffer(36160,$)&&Se.drawBuffers&&F&&pe.drawBuffers(E,$),pe.viewport(C),pe.scissor(P),pe.setScissorTest(y),be){const Ie=Le.get(E.texture);N.framebufferTexture2D(36160,36064,34069+U,Ie.__webglTexture,q)}else if(Pe){const Ie=Le.get(E.texture),He=U||0;N.framebufferTextureLayer(36160,36064,Ie.__webglTexture,q||0,He)}M=-1},this.readRenderTargetPixels=function(E,U,q,F,$,be,Pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Re=Re[Pe]),Re){pe.bindFramebuffer(36160,Re);try{const Ie=E.texture,He=Ie.format,Oe=Ie.type;if(He!==Fn&&A.convert(He)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Oe===Js&&(we.has("EXT_color_buffer_half_float")||Se.isWebGL2&&we.has("EXT_color_buffer_float"));if(Oe!==Vr&&A.convert(Oe)!==N.getParameter(35738)&&!(Oe===Lr&&(Se.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-F&&q>=0&&q<=E.height-$&&N.readPixels(U,q,F,$,A.convert(He),A.convert(Oe),be)}finally{const Ie=_!==null?Le.get(_).__webglFramebuffer:null;pe.bindFramebuffer(36160,Ie)}}},this.copyFramebufferToTexture=function(E,U,q=0){const F=Math.pow(2,-q),$=Math.floor(U.image.width*F),be=Math.floor(U.image.height*F);Te.setTexture2D(U,0),N.copyTexSubImage2D(3553,q,0,0,E.x,E.y,$,be),pe.unbindTexture()},this.copyTextureToTexture=function(E,U,q,F=0){const $=U.image.width,be=U.image.height,Pe=A.convert(q.format),Re=A.convert(q.type);Te.setTexture2D(q,0),N.pixelStorei(37440,q.flipY),N.pixelStorei(37441,q.premultiplyAlpha),N.pixelStorei(3317,q.unpackAlignment),U.isDataTexture?N.texSubImage2D(3553,F,E.x,E.y,$,be,Pe,Re,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(3553,F,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Pe,U.mipmaps[0].data):N.texSubImage2D(3553,F,E.x,E.y,Pe,Re,U.image),F===0&&q.generateMipmaps&&N.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(E,U,q,F,$=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=E.max.x-E.min.x+1,Pe=E.max.y-E.min.y+1,Re=E.max.z-E.min.z+1,Ie=A.convert(F.format),He=A.convert(F.type);let Oe;if(F.isData3DTexture)Te.setTexture3D(F,0),Oe=32879;else if(F.isDataArrayTexture)Te.setTexture2DArray(F,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,F.flipY),N.pixelStorei(37441,F.premultiplyAlpha),N.pixelStorei(3317,F.unpackAlignment);const Ue=N.getParameter(3314),ht=N.getParameter(32878),pn=N.getParameter(3316),di=N.getParameter(3315),pr=N.getParameter(32877),pt=q.isCompressedTexture?q.mipmaps[0]:q.image;N.pixelStorei(3314,pt.width),N.pixelStorei(32878,pt.height),N.pixelStorei(3316,E.min.x),N.pixelStorei(3315,E.min.y),N.pixelStorei(32877,E.min.z),q.isDataTexture||q.isData3DTexture?N.texSubImage3D(Oe,$,U.x,U.y,U.z,be,Pe,Re,Ie,He,pt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Oe,$,U.x,U.y,U.z,be,Pe,Re,Ie,pt.data)):N.texSubImage3D(Oe,$,U.x,U.y,U.z,be,Pe,Re,Ie,He,pt),N.pixelStorei(3314,Ue),N.pixelStorei(32878,ht),N.pixelStorei(3316,pn),N.pixelStorei(3315,di),N.pixelStorei(32877,pr),$===0&&F.generateMipmaps&&N.generateMipmap(Oe),pe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Te.setTextureCube(E,0):E.isData3DTexture?Te.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Te.setTexture2DArray(E,0):Te.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){m=0,v=0,_=null,pe.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class lT extends _v{}lT.prototype.isWebGL1Renderer=!0;let uT=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};const ym={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class cT{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,o===!1&&r.onStart!==void 0&&r.onStart(c,s,a),o=!0},this.itemEnd=function(c){s++,r.onProgress!==void 0&&r.onProgress(c,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const g=u[d],x=u[d+1];if(g.global&&(g.lastIndex=0),g.test(c))return x}return null}}}const fT=new cT;class xv{constructor(e){this.manager=e!==void 0?e:fT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class dT extends xv{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=ym.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=ta("img");function l(){c(),ym.add(e,this),n&&n(this),o.manager.itemEnd(e)}function u(d){c(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class hT extends xv{constructor(e){super(e)}load(e,n,i,r){const o=new hn,s=new dT(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class pT{constructor(e,n,i=0,r=1/0){this.ray=new sv(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new zd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Lf(e,this,i,n),i.sort(Sm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,o=e.length;r<o;r++)Lf(e[r],this,i,n);return i.sort(Sm),i}}function Sm(t,e){return t.distance-e.distance}function Lf(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let o=0,s=r.length;o<s;o++)Lf(r[o],e,n,!0)}}class Df{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ln(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);const Mm={type:"change"},_c={type:"start"},wm={type:"end"};class mT extends $r{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zr.ROTATE,MIDDLE:Zr.DOLLY,RIGHT:Zr.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",on),this._domElementKeyEvents=A},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Mm),i.update(),o=r.NONE},this.update=function(){const A=new B,z=new Wr().setFromUnitVectors(e.up,new B(0,1,0)),de=z.clone().invert(),_e=new B,fe=new Wr,Me=2*Math.PI;return function(){const ze=i.object.position;A.copy(ze).sub(i.target),A.applyQuaternion(z),a.setFromVector3(A),i.autoRotate&&o===r.NONE&&T(P()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Fe=i.minAzimuthAngle,$e=i.maxAzimuthAngle;return isFinite(Fe)&&isFinite($e)&&(Fe<-Math.PI?Fe+=Me:Fe>Math.PI&&(Fe-=Me),$e<-Math.PI?$e+=Me:$e>Math.PI&&($e-=Me),Fe<=$e?a.theta=Math.max(Fe,Math.min($e,a.theta)):a.theta=a.theta>(Fe+$e)/2?Math.max(Fe,a.theta):Math.min($e,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),A.setFromSpherical(a),A.applyQuaternion(de),ze.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||_e.distanceToSquared(i.object.position)>s||8*(1-fe.dot(i.object.quaternion))>s?(i.dispatchEvent(Mm),_e.copy(i.object.position),fe.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",j),i.domElement.removeEventListener("pointerdown",Ct),i.domElement.removeEventListener("pointercancel",Kt),i.domElement.removeEventListener("wheel",Pn),i.domElement.removeEventListener("pointermove",Gt),i.domElement.removeEventListener("pointerup",dt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",on)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new Df,l=new Df;let u=1;const c=new B;let d=!1;const f=new Ne,g=new Ne,x=new Ne,h=new Ne,p=new Ne,m=new Ne,v=new Ne,_=new Ne,M=new Ne,S=[],C={};function P(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function T(A){l.theta-=A}function D(A){l.phi-=A}const K=function(){const A=new B;return function(de,_e){A.setFromMatrixColumn(_e,0),A.multiplyScalar(-de),c.add(A)}}(),J=function(){const A=new B;return function(de,_e){i.screenSpacePanning===!0?A.setFromMatrixColumn(_e,1):(A.setFromMatrixColumn(_e,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(de),c.add(A)}}(),O=function(){const A=new B;return function(de,_e){const fe=i.domElement;if(i.object.isPerspectiveCamera){const Me=i.object.position;A.copy(Me).sub(i.target);let xe=A.length();xe*=Math.tan(i.object.fov/2*Math.PI/180),K(2*de*xe/fe.clientHeight,i.object.matrix),J(2*_e*xe/fe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(K(de*(i.object.right-i.object.left)/i.object.zoom/fe.clientWidth,i.object.matrix),J(_e*(i.object.top-i.object.bottom)/i.object.zoom/fe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(A){i.object.isPerspectiveCamera?u/=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*A)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(A){i.object.isPerspectiveCamera?u*=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/A)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(A){f.set(A.clientX,A.clientY)}function ee(A){v.set(A.clientX,A.clientY)}function R(A){h.set(A.clientX,A.clientY)}function G(A){g.set(A.clientX,A.clientY),x.subVectors(g,f).multiplyScalar(i.rotateSpeed);const z=i.domElement;T(2*Math.PI*x.x/z.clientHeight),D(2*Math.PI*x.y/z.clientHeight),f.copy(g),i.update()}function W(A){_.set(A.clientX,A.clientY),M.subVectors(_,v),M.y>0?k(y()):M.y<0&&Y(y()),v.copy(_),i.update()}function oe(A){p.set(A.clientX,A.clientY),m.subVectors(p,h).multiplyScalar(i.panSpeed),O(m.x,m.y),h.copy(p),i.update()}function L(A){A.deltaY<0?Y(y()):A.deltaY>0&&k(y()),i.update()}function H(A){let z=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),z=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),z=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),z=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),z=!0;break}z&&(A.preventDefault(),i.update())}function Q(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const A=.5*(S[0].pageX+S[1].pageX),z=.5*(S[0].pageY+S[1].pageY);f.set(A,z)}}function Z(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const A=.5*(S[0].pageX+S[1].pageX),z=.5*(S[0].pageY+S[1].pageY);h.set(A,z)}}function N(){const A=S[0].pageX-S[1].pageX,z=S[0].pageY-S[1].pageY,de=Math.sqrt(A*A+z*z);v.set(0,de)}function ve(){i.enableZoom&&N(),i.enablePan&&Z()}function we(){i.enableZoom&&N(),i.enableRotate&&Q()}function Se(A){if(S.length==1)g.set(A.pageX,A.pageY);else{const de=Ae(A),_e=.5*(A.pageX+de.x),fe=.5*(A.pageY+de.y);g.set(_e,fe)}x.subVectors(g,f).multiplyScalar(i.rotateSpeed);const z=i.domElement;T(2*Math.PI*x.x/z.clientHeight),D(2*Math.PI*x.y/z.clientHeight),f.copy(g)}function pe(A){if(S.length===1)p.set(A.pageX,A.pageY);else{const z=Ae(A),de=.5*(A.pageX+z.x),_e=.5*(A.pageY+z.y);p.set(de,_e)}m.subVectors(p,h).multiplyScalar(i.panSpeed),O(m.x,m.y),h.copy(p)}function Xe(A){const z=Ae(A),de=A.pageX-z.x,_e=A.pageY-z.y,fe=Math.sqrt(de*de+_e*_e);_.set(0,fe),M.set(0,Math.pow(_.y/v.y,i.zoomSpeed)),k(M.y),v.copy(_)}function Le(A){i.enableZoom&&Xe(A),i.enablePan&&pe(A)}function Te(A){i.enableZoom&&Xe(A),i.enableRotate&&Se(A)}function Ct(A){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",Gt),i.domElement.addEventListener("pointerup",dt)),re(A),A.pointerType==="touch"?b(A):ct(A))}function Gt(A){i.enabled!==!1&&(A.pointerType==="touch"?w(A):We(A))}function dt(A){se(A),S.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",Gt),i.domElement.removeEventListener("pointerup",dt)),i.dispatchEvent(wm),o=r.NONE}function Kt(A){se(A)}function ct(A){let z;switch(A.button){case 0:z=i.mouseButtons.LEFT;break;case 1:z=i.mouseButtons.MIDDLE;break;case 2:z=i.mouseButtons.RIGHT;break;default:z=-1}switch(z){case Zr.DOLLY:if(i.enableZoom===!1)return;ee(A),o=r.DOLLY;break;case Zr.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;R(A),o=r.PAN}else{if(i.enableRotate===!1)return;te(A),o=r.ROTATE}break;case Zr.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;te(A),o=r.ROTATE}else{if(i.enablePan===!1)return;R(A),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(_c)}function We(A){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;G(A);break;case r.DOLLY:if(i.enableZoom===!1)return;W(A);break;case r.PAN:if(i.enablePan===!1)return;oe(A);break}}function Pn(A){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(A.preventDefault(),i.dispatchEvent(_c),L(A),i.dispatchEvent(wm))}function on(A){i.enabled===!1||i.enablePan===!1||H(A)}function b(A){switch(ce(A),S.length){case 1:switch(i.touches.ONE){case Qr.ROTATE:if(i.enableRotate===!1)return;Q(),o=r.TOUCH_ROTATE;break;case Qr.PAN:if(i.enablePan===!1)return;Z(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Qr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ve(),o=r.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;we(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(_c)}function w(A){switch(ce(A),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Se(A),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;pe(A),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(A),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Te(A),i.update();break;default:o=r.NONE}}function j(A){i.enabled!==!1&&A.preventDefault()}function re(A){S.push(A)}function se(A){delete C[A.pointerId];for(let z=0;z<S.length;z++)if(S[z].pointerId==A.pointerId){S.splice(z,1);return}}function ce(A){let z=C[A.pointerId];z===void 0&&(z=new Ne,C[A.pointerId]=z),z.set(A.pageX,A.pageY)}function Ae(A){const z=A.pointerId===S[0].pointerId?S[1]:S[0];return C[z.pointerId]}i.domElement.addEventListener("contextmenu",j),i.domElement.addEventListener("pointerdown",Ct),i.domElement.addEventListener("pointercancel",Kt),i.domElement.addEventListener("wheel",Pn,{passive:!1}),this.update()}}class gT extends et{constructor(e=1,n=16,i=new tt("#727272"),r=2e3){const o=new ur(2,2,1,1),s=new lr({side:Ft,uniforms:{uSize1:{value:e},uSize2:{value:n},uColor:{value:i},uDistance:{value:r}},transparent:!0,alphaTest:.5,vertexShader:`
            
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
            
            `,extensions:{derivatives:!0}});super(o,s),this.frustumCulled=!1}}let wt,It,sn,Je,Mi;function vT(){yv(),wt=new uT,wt.background=new tt("#C6C6C6"),It=new zn(60,(window.innerWidth-300)/window.innerHeight,.1,1e3),It.position.set(0,3,8),It.rotation.order="YXZ",sn=new _v({antialias:!0}),sn.setSize(window.innerWidth-300,window.innerHeight),sn.setPixelRatio((window.innerWidth-300)/window.innerHeight),sn.toneMappingExposure=1,sn.shadowMap.enabled=!0,sn.shadowMap.type=Y0,document.body.appendChild(sn.domElement);const t=new gT;t.position.set(8.5,-.5,8.5),wt.add(t);const e=new et(new Rt(1e5,1e5,1e-5),new ut({color:16776960,visible:!1}));e.rotation.set(Math.PI/2,0,0),e.position.set(0,-.5,0),e.name="helpPlane",wt.add(e),Jn(),window.addEventListener("resize",n),document.oncontextmenu=document.body.oncontextmenu=function(){return!1},window.addEventListener("beforeunload",function(i){return i.stopPropagation(),i.preventDefault(),!1},!0);function n(){It&&sn&&(sn.setSize(window.innerWidth-300,window.innerHeight),sn.setPixelRatio((window.innerWidth-300)/window.innerHeight),It.aspect=(window.innerWidth-300)/window.innerHeight,It.updateProjectionMatrix())}Mi="0000",Je=JSON.parse(String(localStorage.getItem(Mi))),Je||(Je={id:Mi,name:"Test Build",author:"Droxus228",rate:4,contains:[]}),localStorage.setItem(Mi,JSON.stringify(Je)),console.log(JSON.parse(String(localStorage.getItem(Mi))))}let xc=!0;function Jn(){xc&&(xc=!1,requestAnimationFrame(()=>{wt&&It&&sn?.render(wt,It),xc=!0}))}function yv(){sn?.dispose();const t=e=>{e.dispose();for(const n of Object.keys(e)){const i=e[n];i&&typeof i=="object"&&"minFilter"in i&&i.dispose()}};wt?.traverse(e=>{if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)t(e.material);else for(const n of e.material)t(n)}),document.querySelector("canvas")&&document.querySelector("canvas")?.remove(),It=null,sn=null,_T(null)}let ye;const Xn=new hT;let Em=!0,Ce,_t,xt,yn=[],wi=[];function _T(t){ye=t}function bm(t){yn=t}async function Tm(t){return na(t)}async function na(t){return new Promise(e=>{let n=t;n&&n.slice(0,t.length-4),t.slice(-4)!==".png"&&(t=t.replaceAll(" ","_").concat(".png")),xt=void 0,_t=void 0,Ce=void 0,t.includes("side")?Promise.all([new Promise(r=>{Xn.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${t}`,o=>{Ce=o,r(o)},()=>{},()=>{r(void 0)})}),new Promise(r=>{Xn.load(Rn.filter(o=>o.name.includes(t.slice(0,t.length-8).replaceAll(" ","_")+"bottom"))[0]?.download_url,o=>{xt=o,r(o)},()=>{},()=>{r(void 0)})}),new Promise(r=>{Xn.load(Rn.filter(o=>o.name.includes(t.slice(0,t.length-8).replaceAll(" ","_")+"top"))[0]?.download_url,o=>{_t=o,r(o)},()=>{},()=>{r(void 0)})})]).then(r=>i(r[0],r[1],r[2])):t.includes("log")?Promise.all([new Promise(r=>{Xn.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${t}`,o=>{Ce=o,r(o)},()=>{},()=>{r(void 0)})}),new Promise(r=>{Xn.load(Rn.filter(o=>o.name.includes(n.slice(0,t.length-4).replaceAll(" ","_")+"_bottom"))[0]?.download_url,o=>{xt=o,r(o)},()=>{},()=>{r(void 0)})}),new Promise(r=>{Xn.load(Rn.filter(o=>o.name.includes(n.slice(0,t.length-4).replaceAll(" ","_")+"_top"))[0]?.download_url,o=>{_t=o,r(o)},()=>{},()=>{r(void 0)})})]).then(r=>i(r[0],r[1],r[2])):Rn.filter(r=>r.name.includes(n.replaceAll(" ","_")+"_top"))?Promise.all([new Promise(r=>{Xn.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${t}`,o=>{Ce=o,r(o)},()=>{},()=>{r(void 0)})}),new Promise(r=>{Xn.load(_t=Rn.filter(o=>o.name.includes(n.replaceAll(" ","_")+"_top"))[0]?.download_url,o=>{_t=o,r(o)},()=>{},()=>{r(void 0)})})]).then(r=>i(r[0],void 0,r[1])):Rn.filter(r=>r.name.includes(n.replaceAll(" ","_")+"_bottom"))?Promise.all([new Promise(r=>{Xn.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${t}`,o=>{Ce=o,r(o)},()=>{},()=>{r(void 0)})}),new Promise(r=>{Xn.load(xt=Rn.filter(o=>o.name.includes(n.replaceAll(" ","_")+"_bottom"))[0]?.download_url,o=>{xt=o,r(o)},()=>{},()=>{r(void 0)})})]).then(r=>i(r[0],r[1],void 0)):new Promise(r=>{Xn.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${t}`,o=>{Ce=o,r(o)},()=>{},()=>{r(void 0)})}).then(r=>i(r,void 0,void 0));function i(r,o,s){Ce=r,xt=o,_t=s,Ce.format=Fn,Ce.minFilter=St,Ce.magFilter=St,Ce.wrapS=ai,Ce.wrapT=ai;const a=16,l=16,u=Ce.image.width,c=Ce.image.height,d=u/c,f=a/l;d>f?Ce.repeat.set(a/u,1):Ce.repeat.set(1,l/c),xt||(xt=_t||Ce),_t||(_t=xt||Ce),[xt,_t,Ce].forEach(x=>{x&&(x.minFilter=St,x.magFilter=St,x.wrapS=ai,x.wrapT=ai)}),Ko(),Em&&(Em=!1,Je.contains.length<1?(Ei(0,0,0),Cv()):yT()),e([Ce,_t,xt])}})}function ou(){let t=!0;return Tv.forEach(e=>{if($t.includes(e)&&!$t.includes("block"))return t=!1}),t}function Ko(){if(!jr&&Ce){if(ou()){let t=[new ut({map:xt||_t||Ce,transparent:!0,opacity:.5,wireframe:!1,depthWrite:!1,alphaTest:0}),new ut({map:_t||xt||Ce,transparent:!0,opacity:.5,wireframe:!1,depthWrite:!1,alphaTest:0}),new ut({map:Ce,transparent:!0,opacity:.5,wireframe:!1,depthWrite:!1,alphaTest:0})];he.children.forEach(e=>e.material=t),he.visible=!0,Ve.visible=!1,he.position.set(Ve.position.x,Ve.position.y,Ve.position.z)}else he.visible=!1,Ve.visible=!0,Ve.position.set(he.position.x,he.position.y,he.position.z),Ve.children.forEach(t=>{t.material=new ut({wireframe:!1,opacity:.5,transparent:!0,map:Ce,depthWrite:!1,side:Ft,alphaTest:.5})}),Ve.children[2].material=new ut({wireframe:!1,opacity:0,transparent:!0,map:Ce,depthWrite:!1});kt=="Remove"?(he.children.forEach(t=>t.material.forEach(e=>e.map=null)),he.children.forEach(t=>t.material.forEach(e=>e.opacity=1)),he.children.forEach(t=>t.material.forEach(e=>e.transparent=!0)),he.children.forEach(t=>t.material.forEach(e=>e.wireframe=!0)),he.children.forEach(t=>t.material.forEach(e=>e.needsUpdate=!0)),he.children.forEach(t=>t.material.forEach(e=>e.visible=!0)),Oo.visible=!0,rr.visible=!1,ir.visible=!1,he.visible=!0):kt=="Inspect"&&(he.visible=!1,Ve.visible=!1)}else he.position.set(Math.round(V.point.x),Math.abs(Math.round(V.point.y+.001)),Math.round(V.point.z)),Ve.position.set(Math.round(V.point.x),Math.abs(Math.round(V.point.y+.001)),Math.round(V.point.z))}function Ei(t,e,n,i,r,o,s,a){if(!yn.find(l=>l.position.x==t&&l.position.y==e&&l.position.z==n)){let l,u;if(r!==void 0&&LT(r),i!==void 0&&RT(i),ou()){Ce&&(Ce.wrapS=Ce.wrapT=ai,Ce.repeat.set(16/Ce.image.width,16/Ce.image.height)),_t&&(_t.wrapS=_t.wrapT=ai,_t.repeat.set(16/Ce.image.width,16/Ce.image.height)),xt&&(xt.wrapS=xt.wrapT=ai,xt.repeat.set(16/Ce.image.width,16/Ce.image.height));let c,d,f;f=new ut({map:xt||_t||Ce,transparent:!0,side:Ft}),d=new ut({map:_t||xt||Ce,transparent:!0,side:Ft}),c=new ut({map:Ce,transparent:!0,side:Ft});let g;if(ia=="Slabs"){g=new Rt(1,.5,1,1,1,1);let x=new et(new Rt(1,1,1,1,1,1),new ut({map:Ce,opacity:0,transparent:!0,depthWrite:!1})),h=new et(g,[d,c,f]);g.groups.forEach((p,m)=>{m===2?p.materialIndex=0:m===0||m===1||m===4||m===5?p.materialIndex=1:p.materialIndex=2}),h.position.set(0,-.25,0),h.name="slabs",x.name="slabsHelped",l=new Ci,l.add(h),l.add(x),l.name="slabs"}else if(ia=="Stairs"){g=new Rt(1,.5,1,1,1,1);let x=new et(new Rt(1,1,1,1,1,1),new ut({map:Ce,opacity:0,transparent:!0,depthWrite:!1})),h=new et(g,c);g=new Rt(.5,.5,1,1,1,1);let p=new et(g,[d,c,f]);g.groups.forEach((m,v)=>{v===2?m.materialIndex=0:v===0||v===1||v===4||v===5?m.materialIndex=1:m.materialIndex=2}),h.position.set(0,-.25,0),p.position.set(.25,.25,0),h.name="stairs",p.name="stairs",x.name="stairsHelped",l=new Ci,l.add(h),l.add(p),l.add(x),l.name="stairs"}else g=new Rt(1,1,1,1,1,1),g.groups.forEach((x,h)=>{h===2?x.materialIndex=0:h===0||h===1||h===4||h===5?x.materialIndex=1:x.materialIndex=2}),l=new et(g,[d,c,f]),l.name="block";wt?.add(l),Jn(),l.rotation.set(he.rotation.x,he.rotation.y,he.rotation.z)}else{let c=new et(new ur(1,1),new ut({map:Ce,transparent:!0,side:Ft,depthWrite:!1})),d=new et(new ur(1,1),new ut({map:Ce,transparent:!0,side:Ft,depthWrite:!1}));u=new et(new Rt(1,1,1),new ut({map:Ce,opacity:0,transparent:!0,depthWrite:!1})),d.rotation.set(0,Math.PI/2,0),l=new Ci,l.add(c),l.add(d),l.add(u),u.textureName=$t,l.rotation.set(Ve.rotation.x,Ve.rotation.y,Ve.rotation.z),l.name="block"}l.textureName=$t,wt?.add(l),Jn(),l.position.set(t,e,n),o!==void 0&&s!==void 0&&a!==void 0&&l.rotation.set(o,s,a),yn.push({position:{x:l.position.x,y:l.position.y,z:l.position.z},textureName:$t,blockType:l.name?l.name[0].toUpperCase().concat("",l.name.slice(1)):"Block",rotation:{_x:l.rotation.x,_y:l.rotation.y,_z:l.rotation.z}}),wi.push({action:"create",blockInfo:yn[yn.length-1]}),Je.contains=yn,localStorage.setItem(Mi,JSON.stringify(Je))}}let jr=!1,Od=[new ut({color:"white",wireframe:!0}),new ut({color:"white",wireframe:!0}),new ut({color:"white",wireframe:!0})],he=new Ci,Oo=new et(new Rt(1,1,1),Od),ir=new et(new Rt(1,.5,1),Od),rr=new et(new Rt(.5,.5,1),Od);he.add(Oo);he.add(ir);he.add(rr);ir.position.set(0,-.25,0);rr.position.set(.25,.25,0);rr.visible=!1;ir.visible=!1;he.children.forEach(t=>t.geometry.groups.forEach((e,n)=>{n===2?e.materialIndex=1:n===0||n===1||n===4||n===5?e.materialIndex=2:e.materialIndex=0}));let Ve=new Ci,Sv=new et(new ur(1,1),new ut({transparent:!0,side:Ft,depthWrite:!1})),Ud=new et(new ur(1,1),new ut({transparent:!0,side:Ft,depthWrite:!1})),Mv=new et(new Rt(1,1,1),new ut({opacity:0,transparent:!0,depthWrite:!1}));Sv.name="hoverBlock";Ud.name="hoverBlock";Mv.name="hoverBlock";Ud.rotation.set(0,Math.PI/2,0);Ve.add(Sv);Ve.add(Ud);Ve.add(Mv);Ve.name="hoverBlock";Oo.name="hoverBlock";he.name="hoverBlock";ir.name="hoverBlock";rr.name="hoverBlock";function xT(){It&&(ye=new mT(It,sn?.domElement)),ye.target.set(0,0,0),ye.autoRotate=!1,ye.autoRotateSpeed=1,ye.enableDamping=!0,ye.dampingFactor=.05,ye.enablePan=!0,ye.enableZoom=!1,document.addEventListener("keydown",i=>{i.keyCode===16&&(i.preventDefault(),jr=!0,he.visible=!1,Ve.visible=!1,kt!=="Inspect"&&(ye.mouseButtons={LEFT:2,MIDDLE:1,RIGHT:0},ye.enableZoom=!0))}),document.addEventListener("keyup",i=>{i.keyCode===16&&(jr=!1,he.visible=!0,Ve.visible=!0,kt=="Inspect"&&(he.visible=!1,Ve.visible=!1),kt!=="Inspect"&&(ye.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},Ko(),ye.enableZoom=!1))}),ye.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},ye.touches={ONE:void 0,TWO:void 0},ye.screenSpacePanning=!1,ye.minDistance=1,ye.maxDistance=200,ye.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},ye.listenToKeyEvents(window),ye.keyPanSpeed=50,ye.addEventListener("change",Jn);function t(i,r,o){if(It){const s=new Df().setFromVector3(It.position.clone().sub(ye.target));s.theta+=i,s.phi+=r,s.radius+=o;const a=1e-6;s.phi=Math.max(a,Math.min(Math.PI-a,s.phi)),It.position.setFromSpherical(s).add(ye.target),It.lookAt(ye.target)}}const e=.1,n=1;document.addEventListener("keydown",i=>{switch(i.code){case"ArrowLeft":t(-e,0,0);break;case"ArrowUp":t(0,-e,0);break;case"ArrowRight":t(e,0,0);break;case"ArrowDown":t(0,e,0);break;case"KeyO":t(0,0,-n);break;case"KeyP":t(0,0,n);break}Jn()}),ye.rotateCamera=!0,document.querySelector("#root").style.pointerEvents="none",document.querySelector("canvas").style.pointerEvents="all",document.querySelector("canvas")?.addEventListener("mousemove",ET),wt?.add(he),wt?.add(Ve),ye.addEventListener("change",()=>{Av()}),document.querySelector("canvas")?.addEventListener("mousedown",i=>{(i.button==1||i.buttons==4)&&bT(i)}),document.querySelector("canvas")?.addEventListener("wheel",wT),document.querySelector("canvas")?.addEventListener("mousedown",ST),document.querySelector("canvas")?.addEventListener("mouseup",MT),wi=[],Jn()}function yT(){let t=Je.contains.length,e=Je.contains.length;Je.contains.length>0&&Je.contains.forEach(async n=>{na(n.textureName).then(()=>{Ei(n.position.x,n.position.y,n.position.z,n.textureName,n.blockType,n.rotation._x,n.rotation._y,n.rotation._z),--t,NT((e-t)/e*100),t<1&&Cv()})})}let Po={leftBtn:!1,rightBtn:!1},Rf,If,wv,Ev;function ST(t){if(kt!=="Inspect"){let e=kt=="Build"?0:2,n=kt=="Build"?2:0;switch(t.button){case e:Po.leftBtn=!0,Cm(t),wv=setTimeout(()=>{Rf=setInterval(()=>{Po.leftBtn?Cm(Nf):clearInterval(Rf)},125)},200);break;case n:Po.rightBtn=!0,Am(t),Ev=setTimeout(()=>{If=setInterval(()=>{Po.rightBtn?Am(Nf):clearInterval(If)},125)},200);break}}}function MT(t){let e=kt=="Build"?0:2,n=kt=="Build"?2:0;switch(t.button){case e:Po.leftBtn=!1,clearTimeout(wv),clearInterval(Rf);break;case n:Po.rightBtn=!1,clearTimeout(Ev),clearInterval(If);break}}const yr=new pT,yc=new Ne;function su(t){if(yc.x=(t.clientX-300)/(window.innerWidth-300)*2-1,yc.y=-(t.clientY/window.innerHeight)*2+1,It&&wt){yr.setFromCamera(yc,It);let e=yr.intersectObjects(wt.children);if(e=e.filter(n=>n.object.name!=="hoverBlock"&&n.object.parent?.name!=="hoverBlock"),e=e.filter(n=>n.object.geometry instanceof Rt&&n.object.name!=="helpedCube"&&n.object.name!=="slabsHelped"),e.length>0){let n;if(e[0].object.name!=="helpPlane")if(e[0].object.name!=="slabs"&&e[0].object.name!=="stairs")n={x:e[0].object.rotation.x,y:e[0].object.rotation.y,z:e[0].object.rotation.z},e[0].object.rotation.set(0,0,0),e[0].object.updateMatrixWorld(!0),e=yr.intersectObjects([e[0].object]),n.x!==void 0&&n.y!==void 0&&n.z!==void 0&&e[0].object.rotation.set(n.x,n.y,n.z);else if(e[0].object.name=="slabs"){if(n={x:e[0].object.parent?.rotation.x,y:e[0].object.parent?.rotation.y,z:e[0].object.parent?.rotation.z},e[0].object.parent?.rotation.set(0,0,0),e[0].object.parent?.updateMatrixWorld(!0),e[0].object.parent?.children[1]){let i;yr.intersectObjects([e[0].object])[0]!==void 0&&(i=yr.intersectObjects([e[0].object])[0].face),i&&e[0].face?e[0].face=i:e[0].face=yr.intersectObjects([e[0].object.parent?.children[1]])[0].face,n.x!==void 0&&n.y!==void 0&&n.z!==void 0&&e[0].object.parent?.rotation.set(n.x,n.y,n.z)}}else n={x:e[0].object.parent?.rotation.x,y:e[0].object.parent?.rotation.y,z:e[0].object.parent?.rotation.z},e[0].object.parent?.rotation.set(0,0,0),e[0].object.parent?.updateMatrixWorld(!0),e[0].object.parent?.children[2]&&(e[0].face=yr.intersectObjects([e[0].object.parent?.children[2]])[0].face,n.x!==void 0&&n.y!==void 0&&n.z!==void 0&&e[0].object.parent?.rotation.set(n.x,n.y,n.z))}return e[0]}}function Cm(t){!jr&&kt!=="Inspect"&&(V=su(t),V&&(V.object.name=="helpPlane"?Ei(Math.round(V.point.x),Math.abs(Math.round(V.point.y+.001)),Math.round(V.point.z)):(kt=="Build",V.face&&(V.object.parent&&(V.object.parent.children.length==3||V.object.name=="slabs")?Ei(Math.round(V.object.parent.position.x+V.face.normal.x),Math.abs(Math.round(V.object.parent.position.y+.001+V.face.normal.y)),Math.round(V.object.parent.position.z+V.face.normal.z)):Ei(Math.round(V.object.position.x+V.face.normal.x),Math.abs(Math.round(V.object.position.y+.001+V.face.normal.y)),Math.round(V.object.position.z+V.face.normal.z))))))}function Am(t){if(!jr&&kt!=="Inspect"&&(V=su(t),V&&V.object.name!=="helpPlane"&&V.object.name!=="hoverBlock")){if(V.object.parent&&(V.object.parent.children.length==3||V.object.name=="slabs")){let e=yn.filter(n=>n.position.x==V.object.parent.position.x&&n.position.y==V.object.parent.position.y&&n.position.z==V.object.parent.position.z);e[0]&&wi.push({action:"remove",blockInfo:e[0]}),yn=yn.filter(n=>n.position.x!==V.object.parent.position.x||n.position.y!==V.object.parent.position.y||n.position.z!==V.object.parent.position.z),wt?.remove(V.object.parent)}else{let e=yn.filter(n=>n.position.x==V.object.position.x&&n.position.y==V.object.position.y&&n.position.z==V.object.position.z);e[0]&&wi.push({action:"remove",blockInfo:e[0]}),yn=yn.filter(n=>n.position.x!==V.object.position.x||n.position.y!==V.object.position.y||n.position.z!==V.object.position.z),wt?.remove(V.object)}Je.contains=yn,localStorage.setItem(Mi,JSON.stringify(Je))}Jn()}function wT(t){let e=t.deltaY/Math.abs(t.deltaY);jr||(e==1?he.rotation.z<Math.PI*2?he.rotation.set(he.rotation.x,he.rotation.y,he.rotation.z+Math.PI*.5):he.rotation.y<Math.PI*2?he.rotation.set(he.rotation.x,he.rotation.y+Math.PI*.5,0):he.rotation.x<Math.PI*2?he.rotation.set(he.rotation.x+Math.PI*.5,0,0):he.rotation.set(0,0,0):he.rotation.z>-Math.PI*2?he.rotation.set(he.rotation.x,he.rotation.y,he.rotation.z-Math.PI*.5):he.rotation.y>-Math.PI*2?he.rotation.set(he.rotation.x,he.rotation.y-Math.PI*.5,0):he.rotation.x>-Math.PI*2?he.rotation.set(he.rotation.x-Math.PI*.5,0,0):he.rotation.set(0,0,0),Ve.rotation.set(he.rotation.x,he.rotation.y,he.rotation.z)),Jn()}let _i,V,Nf;function ET(t){Nf=t,ou()?(_i=he,Ve.visible=!1):(_i=Ve,he.visible=!1),kt=="Remove"&&(_i=he,Ve.visible=!1,he.visible=!0),kt!=="Inspect"&&(_i.children.length>0&&_i.children&&(_i.visible=!0),V=su(t),V&&(V.object.name=="helpPlane"?(he.position.set(Math.round(V.point.x),Math.abs(Math.round(V.point.y+.001)),Math.round(V.point.z)),Ve.position.set(Math.round(V.point.x),Math.abs(Math.round(V.point.y+.001)),Math.round(V.point.z))):kt=="Build"?V.face&&(V.object.parent&&(V.object.parent.children.length==3||V.object.name=="slabs")?(he.position.set(Math.round(V.object.parent.position.x+V.face.normal.x),Math.abs(Math.round(V.object.parent.position.y+.001+V.face.normal.y)),Math.round(V.object.parent.position.z+V.face.normal.z)),Ve.position.set(Math.round(V.object.parent.position.x+V.face.normal.x),Math.abs(Math.round(V.object.parent.position.y+.001+V.face.normal.y)),Math.round(V.object.parent.position.z+V.face.normal.z))):V.object.parent&&(V.object.parent.children.length==3||V.object.name=="slabs")?(he.position.set(Math.round(V.object.position.x+V.face.normal.x),Math.abs(Math.round(V.object.position.y+.001+V.face.normal.y)),Math.round(V.object.position.z+V.face.normal.z)),Ve.position.set(Math.round(V.object.position.x+V.face.normal.x),Math.abs(Math.round(V.object.position.y+.001+V.face.normal.y)),Math.round(V.object.position.z+V.face.normal.z))):(_i.position.set(Math.round(V.object.position.x+V.face.normal.x),Math.abs(Math.round(V.object.position.y+.001+V.face.normal.y)),Math.round(V.object.position.z+V.face.normal.z)),Ve.position.set(Math.round(V.object.position.x+V.face.normal.x),Math.abs(Math.round(V.object.position.y+.001+V.face.normal.y)),Math.round(V.object.position.z+V.face.normal.z)))):V.object.parent&&(V.object.parent.children.length==3||V.object.name=="slabs")?_i.position.set(Math.round(V.object.parent.position.x),Math.abs(Math.round(V.object.parent.position.y+.001)),Math.round(V.object.parent.position.z)):_i.position.set(Math.round(V.object.position.x),Math.abs(Math.round(V.object.position.y+.001)),Math.round(V.object.position.z)))),jr&&(Ve.visible=!1,he.visible=!1),Jn()}function bT(t){if(V=su(t),V&&(DT(V.object.name),V.object.name!=="helpPlane"&&V.object.name!=="hoverBlock")){let e=V.object;V.object.name=="stairs"||V.object.name=="stairsHelped"||V.object.name=="slabs"?e=V.object.parent:e=V.object;let n=e,r=n.material;Array.isArray(r)?Ce=r[1].map:V.object.parent.name=="stairs"?Ce=V.object.parent.children[2].material.map:V.object.parent.name=="slabs"?Ce=n.children[1].material.map:Ce=r.map,PT(e.textureName),na($t),ou()?(he.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),Ve.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z)):(he.rotation.set(e.parent.rotation.x,e.parent.rotation.y,e.parent.rotation.z),Ve.rotation.set(e.parent.rotation.x,e.parent.rotation.y,e.parent.rotation.z)),Ko()}}function TT(){switch(kt){case"Build":ye.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},Ko(),bv(),ye.enableZoom=!1;break;case"Inspect":he.visible=!1,Ve.visible=!1,ye.mouseButtons={LEFT:0,MIDDLE:1,RIGHT:2},ye.enableZoom=!0;break;case"Remove":ye.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},Ko(),ye.enableZoom=!1;break}}function bv(){switch(ia){case"Blocks":Ko(),Oo.visible=!0,rr.visible=!1,ir.visible=!1;break;case"Slabs":Oo.visible=!1,rr.visible=!1,ir.visible=!0;break;case"Stairs":Oo.visible=!1,rr.visible=!0,ir.visible=!0;break}}let $t="debug.png",Tv=[],Rn=[],Sc=[],ni=[],Pm=!0,po;const CT=({items:t,texturePick:e})=>le("div",{className:"grid grid-cols-4 w-full allBlocksDiv",children:t.map(n=>Ye("div",{onClick:e,className:"relative basis-1/3 flex flex-wrap justify-center cursor-pointer blocks border-thirdcolor hover:border-2 ",children:[le("div",{className:"w-full h-14 flex justify-center",children:le("img",{src:n.download_url,id:n.name,alt:"block",className:"textures object-cover w-14 h-14 aspect-square select-none pointer-events-none"})}),le("label",{id:n.name.slice(0,n.name.length-4).replaceAll("_"," "),className:"break-words text-sm select-none",children:n.name.slice(0,n.name.length-4).replaceAll("_"," ").replaceAll("side","").replaceAll("log","").replaceAll("front","").replaceAll("end","")})]},n.name))}),AT=({items:t,texturePick:e})=>(t=ni,Ye("div",{children:[le("div",{hidden:t.length<1,className:"grid grid-cols-4 w-full",children:t.map(n=>Ye("div",{onClick:e,className:"relative basis-1/3 flex flex-wrap justify-center cursor-pointer blocks border-thirdcolor hover:border-2",children:[le("div",{className:"w-full h-14 flex justify-center",children:le("img",{src:n.download_url,id:n.name,alt:"block",className:"textures object-cover w-14 h-14 aspect-square select-none pointer-events-none"})}),le("label",{id:n.name.slice(0,n.name.length-4).replaceAll("_"," "),className:"break-words text-sm select-none",children:n.name.slice(0,n.name.length-4).replaceAll("_"," ").replaceAll("side","").replaceAll("log","").replaceAll("front","").replaceAll("end","")})]},n.name))}),le("h1",{hidden:t.length>0,className:"opacity-60",children:"No blocks here"})]}));function PT(t){$t=t;let e=$t;e.slice(-4)!==".png"&&(e=$t.replaceAll(" ","_").concat(".png"));let n;document.querySelectorAll(".blocks").forEach(i=>{if(i.querySelectorAll("label")[0].id==$t)return n=i,i}),document.querySelectorAll(".blocks").forEach(i=>i.classList.remove("opacity-40")),n&&(n.classList.add("opacity-40"),n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}))}function LT(t){ia=t}function DT(t){switch(t){case"slabs":document.querySelector(".slabsType").click();break;case"stairs":document.querySelector(".stairsType").click();break;case"block":document.querySelector(".blocksType").click();break}}function RT(t){$t=t}function Cv(t){zf.current&&(zf.current.style.display="none"),xT()}let kt="Build",Av,ia="Blocks";function IT(){document.querySelector("#root").style.pointerEvents="all",console.log("Exit")}function NT(t){kf.current&&(kf.current.value=t)}const kf=ue.createRef(),zf=ue.createRef();class kT extends Vf.Component{render(){return le("div",{ref:zf,className:"sceneLoader h-full w-full overflow-hidden absolute top-0 left-0 z-200 bg-white grid pointer-events-none",id:"sceneLoader",children:Ye("div",{className:" h-full w-96 place-self-center grid grid-rows-[40%_20%_5%_20%_20%]",children:[le("div",{}),le("img",{src:"https://raw.githubusercontent.com/Droxus/Builder3D/7ba1d995d58b0d5b5e68383ba3713c489af0311e/src/assets/img/loaderScene.svg",className:" w-32 flex justify-self-center "}),le("label",{className:" text-xl text-fourthcolor",children:"Scene Loading"}),le("progress",{ref:kf,max:"100",value:0,id:"sceneProgressBar",className:" superProgress w-60 flex justify-self-center appearance-none h-5"}),Ye("div",{className:"flex items-center justify-center",children:[le("img",{className:"aspect-square h-12 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/9ff281164d1c9ed9c617cf49285f033e79674502/src/assets/img/logo.svg"}),le("label",{className:"text-xl ml-4 font-medium text-fourthcolor",children:"Builder 3D"})]})]})})}}function zT(){yv(),IT()}function FT(){const[t,e]=ue.useState(""),n=L=>{e(L.target.value),Je.name=String(L.target.value),localStorage.setItem(Je.id,JSON.stringify(Je))};if(!t){vT();const L=Je.name||"Scene Name";e(L)}const[i,r]=ue.useState(""),o=L=>{r(String(Math.max(Math.min(Number(L.target.value),ye.maxDistance),ye.minDistance))),It?.position.setLength(Number(Math.max(Math.min(ye.maxDistance-Number(L.target.value)+.5,ye.maxDistance),ye.minDistance)))};Av=function(){r(String(Math.round(ye.maxDistance-ye.getDistance()+.5))),a(String(Math.round(ye.target.x))),u(String(Math.round(ye.target.y))),d(String(Math.round(ye.target.z)))},i||r("192");const[s,a]=ue.useState(""),[l,u]=ue.useState(""),[c,d]=ue.useState(""),f=L=>{a(String(Math.max(Math.min(Number(L.target.value),1e4),-1e4))),ye.target.set(Number(Math.max(Math.min(Number(L.target.value),1e4),-1e4)),ye.target.y,ye.target.z),ye.update()},g=L=>{u(String(Math.max(Math.min(Number(L.target.value),1e4),-1e4))),ye.target.set(ye.target.x,Number(Math.max(Math.min(Number(L.target.value),1e4),-1e4)),ye.target.z),ye.update()},x=L=>{d(String(Math.max(Math.min(Number(L.target.value),1e4),-1e4))),ye.target.set(ye.target.x,ye.target.y,Number(Math.max(Math.min(Number(L.target.value),1e4),-1e4))),ye.update()};s||a("0"),l||u("0"),c||d("0");const[h,p]=ue.useState("");h||p("Build");function m(L){p(L.currentTarget.querySelector("label").innerText),kt=L.currentTarget.querySelector("label").innerText,TT()}const[v,_]=ue.useState("");v||_("Blocks");function M(L){_(L.target.innerText),ia=L.target.innerText,bv()}function S(L){T(L.target.value)}function C(){ye.keys={LEFT:null,UP:null,RIGHT:null,BOTTOM:null}}function P(){ye.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"}}const[y,T]=ue.useState(""),[D,K]=ue.useState([]);ue.useEffect(()=>{const L=async()=>{let Q=(await ap(()=>import("./textures-5599cd7a.js"),[])).default;Q=Q.filter(N=>N.name.slice(-7)!==".mcmeta"),Rn=Q,Q=Q.filter(N=>!N.name.includes("top")&&!N.name.includes("bottom")&&!N.name.includes("anvil")&&!N.name.includes("bell")&&!N.name.includes("candle")&&!N.name.includes("redstone_dust")&&!N.name.includes("bamboo_singleleaf")&&!N.name.includes("big_dripleaf_side")&&!N.name.includes("chain")&&!N.name.includes("lightning_rod")&&!N.name.includes("grindstone")&&!N.name.includes("small_dripleaf")),Tv=(await ap(()=>import("./noCubeBlocks-30ca2709.js"),[])).default,Sc=Q,po=Q,K(po),Pm&&(Tm($t),Pm=!1)};Rn.length<1?L():(y!==void 0||y!==null)&&(y==""?po=Sc:po=Sc.filter(H=>String(H.name).toLowerCase().includes(String(y).toLowerCase())),po.length>0&&K(po))},[y]);const[J,O]=ue.useState("");function k(){O(""),T("")}function Y(L){O(L.target.value)}const[te,ee]=ue.useState([]);ue.useEffect(()=>{ee(ni)},[]);function R(L){Tm(L.currentTarget.querySelector("img").getAttribute("id")),$t=L.currentTarget.querySelector("label").getAttribute("id"),$t.slice(-4)!==".png"?ni.push(Rn.filter(H=>H.name==$t.replaceAll(" ","_").concat(".png"))[0]):ni.push(Rn.filter(H=>H.name==$t)[0]),ni=Array.from(new Set(ni)),ni=ni.slice(-8),ee(ni),document.querySelectorAll(".blocks").forEach(H=>H.classList.remove("opacity-40")),L.currentTarget.classList.add("opacity-40")}let G=[];function W(L){if(wi.length>0){const H=wi.pop();if(G.push(H),H){const{action:Q,blockInfo:Z}=H;if(Q=="remove")na(Z.textureName).then(()=>{Ei(Z.position.x,Z.position.y,Z.position.z,Z.textureName,Z.blockType,Z.rotation._x,Z.rotation._y,Z.rotation._z),wi.pop()});else if(Q=="create"){let N=wt?.children.filter(ve=>ve.position.x==Z.position.x&&ve.position.y==Z.position.y&&ve.position.z==Z.position.z)[0];N&&(Je.contains=Je.contains.filter(ve=>ve.position.x!==Z.position.x||ve.position.y!==Z.position.y||ve.position.z!==Z.position.z),bm(Je.contains),localStorage.setItem(Mi,JSON.stringify(Je)),wt?.remove(N),Jn())}}}L.target.blur()}function oe(L){if(G.length>0){const H=G.pop();if(wi.push(H),H){const{action:Q,blockInfo:Z}=H;if(Q=="create")na(Z.textureName).then(()=>{Ei(Z.position.x,Z.position.y,Z.position.z,Z.textureName,Z.blockType,Z.rotation._x,Z.rotation._y,Z.rotation._z)});else if(Q=="remove"){let N=wt?.children.filter(ve=>ve.position.x==Z.position.x&&ve.position.y==Z.position.y&&ve.position.z==Z.position.z)[0];N&&(Je.contains=Je.contains.filter(ve=>ve.position.x!==Z.position.x||ve.position.y!==Z.position.y||ve.position.z!==Z.position.z),bm(Je.contains),localStorage.setItem(Mi,JSON.stringify(Je)),wt?.remove(N),Jn())}wi.pop()}}L.target.blur()}return Ye("div",{className:"threeSceneInterface h-full w-full overflow-hidden pointer-events-none grid grid-rows-[52px_1fr] z-100",children:[le(kT,{}),Ye("div",{className:" bg-fourthcolor z-60 grid grid-cols-[300px_25%_1fr_35%] text-secondcolor",onFocus:C,onBlur:P,children:[Ye(q0,{to:"/",className:"flex items-center cursor-pointer",onClick:zT,children:[le("img",{className:"ml-8 aspect-square h-9 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/f4f29d3e38a622e9a547d37c766d7a7308ba2dbc/src/assets/img/whiteLogo.svg"}),le("label",{className:"text-xl ml-4 font-medium text-firstcolor cursor-pointer",children:"Builder 3D"})]}),Ye("div",{className:"flex items-center shadow-forTopBlock",children:[le("button",{onClick:W,className:"h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Undo"}),le("button",{onClick:oe,className:"h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Redo"}),le("button",{className:" h-full w-24",children:"Create"})]}),Ye("div",{className:"flex items-center justify-center text-firstcolor shadow-forTopBlock",children:[le("button",{className:"outline-none",children:"Droxus228"}),le("label",{className:" mx-2",children:"/"}),le("input",{className:" bg-transparent outline-none",type:"text",value:t,onChange:n})]}),Ye("div",{className:"flex items-center justify-end shadow-forTopBlock",children:[le("button",{className:"h-full w-24 ",children:"Save"}),le("button",{className:"h-full w-24",children:"Scene"}),le("button",{className:" h-full w-24 ",children:"Import"}),le("button",{className:"h-full w-24",children:"Export"}),le("button",{className:" h-full w-24 ",children:"Share"})]})]}),Ye("div",{className:"leftBlock absolute grid grid-rows-[185px_1fr_135px] h-full w-300  bg-firstcolor text-fourthcolor",onFocus:C,onBlur:P,children:[Ye("div",{className:"pt-20 relative z-30 shadow-forLeftBlockTwo bg-firstcolor",children:[Ye("div",{className:"grid grid-cols-[40px_1fr_40px] ",children:[le("button",{className:"flex place-content-center items-center focus:outline-none hover:border-0 transition-none",children:le("img",{className:"h-5 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/f4f29d3e38a622e9a547d37c766d7a7308ba2dbc/src/assets/img/crossBlocks.svg",onClick:()=>{k()}})}),le("input",{className:"bg-transparent px-2 h-10 outline-none text-center text-lg border-fourthcolor border-b-2 bg-firstcolor focus:outline-none hover:border-b-2 transition-none",type:"text",placeholder:"Find Block",value:J,onChange:Y,onInput:S}),le("button",{className:"flex place-content-center items-center focus:outline-none hover:border-0 transition-none",children:le("img",{className:"h-6 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/f4f29d3e38a622e9a547d37c766d7a7308ba2dbc/src/assets/img/searchBlocks.svg"})})]}),Ye("div",{className:"mt-2 flex",children:[le("button",{className:` flex-1 focus:outline-none hover:border-0 transition-none blocksType ${v=="Blocks"?" opacity-100":"opacity-40"}`,onClick:M,children:"Blocks"}),le("button",{className:` flex-1 focus:outline-none hover:border-0 transition-none slabsType ${v=="Slabs"?" opacity-100":"opacity-40"}`,onClick:M,children:"Slabs"}),le("button",{className:` flex-1 focus:outline-none hover:border-0 transition-none stairsType ${v=="Stairs"?" opacity-100":"opacity-40"}`,onClick:M,children:"Stairs"})]})]}),Ye("div",{className:"texturePickBlock relative h-full overflow-scroll overflow-x-hidden z-10 mt-0 py-24 shadow-forLeftBlockThree",children:[Ye("div",{className:" grid grid-cols-[180px_1fr] items-center",children:[le("label",{className:" font-semibold",children:"Recently Used Blocks"}),le("hr",{className:" h-0.5 mr-2  bg-fourthcolor my-10"})]}),le(AT,{texturePick:R,items:ni}),Ye("div",{className:" grid grid-cols-[100px_1fr] items-center",children:[le("label",{className:" font-semibold",children:"All Blocks"}),le("hr",{className:" h-0.5 mr-2  bg-fourthcolor my-10"})]}),le(CT,{texturePick:R,items:D})]}),le("div",{className:"z-30 -mt-0 bg-firstcolor shadow-forLeftBlockTwo",children:Ye("div",{className:" pt-4 h-21",children:[le("label",{className:" text-lg font-medium",children:"Mods"}),Ye("div",{className:"flex mt-2 h-full",children:[Ye("button",{className:` flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${h=="Build"?" opacity-100":"opacity-40"}`,onClick:m,children:[le("div",{className:"w-full flex justify-center",children:le("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/build.svg"})}),le("label",{children:"Build"})]}),Ye("button",{className:` flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${h=="Inspect"?" opacity-100":"opacity-40"}`,onClick:m,children:[le("div",{className:"w-full flex justify-center",children:le("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/inspect.svg"})}),le("label",{children:"Inspect"})]}),Ye("button",{className:` flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${h=="Remove"?" opacity-100":"opacity-40"}`,onClick:m,children:[le("div",{className:"w-full flex justify-center",children:le("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/remove.svg"})}),le("label",{children:"Remove"})]})]})]})})]}),Ye("div",{className:" absolute top-full left-full -translate-x-120 -translate-y-14 w-120 h-10 flex items-center backdrop-blur-sm bg-black/1 text-fourthcolor font-normal",children:[Ye("div",{className:" h-8 w-40 flex items-center ",children:[le("label",{className:" w-12",children:"Scale"}),le("input",{id:"scaleInput",className:" w-14 bg-transparent text-right",type:"number",value:i,onChange:o}),le("label",{children:"%"})]}),Ye("div",{className:" h-8 w-80 flex items-center",children:[le("label",{className:" w-24",children:"Position"}),le("label",{children:"x:"}),le("input",{className:"modsButton w-16 bg-transparent text-center",type:"number",value:s,onChange:f}),le("label",{children:"y:"}),le("input",{className:" w-16 bg-transparent text-center",type:"number",value:l,onChange:g}),le("label",{children:"z:"}),le("input",{className:" w-16 bg-transparent text-center",type:"number",value:c,onChange:x})]})]})]})}function Lm(){return Ye("div",{className:" w-screen h-screen",children:[le(q0,{to:"/Builder3D/scene",children:"Create Scene"}),le("label",{className:" text-5xl flex",children:"Hello Home"})]})}function OT(){return le("div",{onMouseDown:t=>{t.shiftKey&&t.preventDefault()},className:"App h-full w-full z-60",children:Ye(nS,{children:[le(al,{path:"/Builder3D/",element:le(Lm,{})}),le(al,{path:"/Builder3D/scene",element:le(FT,{})}),le(al,{path:"*",element:le(Lm,{})})]})})}wc.createRoot(document.getElementById("root")).render(le(Vf.StrictMode,{children:le(aS,{children:le(OT,{})})}));
