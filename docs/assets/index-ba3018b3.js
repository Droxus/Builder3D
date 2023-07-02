function Bv(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Vv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hl={},Gv={get exports(){return hl},set exports(t){hl=t}},Bl={},de={},Hv={get exports(){return de},set exports(t){de=t}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),Wv=Symbol.for("react.portal"),jv=Symbol.for("react.fragment"),Xv=Symbol.for("react.strict_mode"),qv=Symbol.for("react.profiler"),$v=Symbol.for("react.provider"),Yv=Symbol.for("react.context"),Kv=Symbol.for("react.forward_ref"),Zv=Symbol.for("react.suspense"),Qv=Symbol.for("react.memo"),Jv=Symbol.for("react.lazy"),Yf=Symbol.iterator;function e_(t){return t===null||typeof t!="object"?null:(t=Yf&&t[Yf]||t["@@iterator"],typeof t=="function"?t:null)}var Nm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Im=Object.assign,km={};function Qo(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Nm}Qo.prototype.isReactComponent={};Qo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zm(){}zm.prototype=Qo.prototype;function Vd(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Nm}var Gd=Vd.prototype=new zm;Gd.constructor=Vd;Im(Gd,Qo.prototype);Gd.isPureReactComponent=!0;var Kf=Array.isArray,Fm=Object.prototype.hasOwnProperty,Hd={current:null},Om={key:!0,ref:!0,__self:!0,__source:!0};function Um(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Fm.call(e,i)&&!Om.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:aa,type:t,key:o,ref:s,props:r,_owner:Hd.current}}function t_(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function n_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zf=/\/+/g;function pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?n_(""+t.key):e.toString(36)}function Qa(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case aa:case Wv:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+pc(s,0):i,Kf(r)?(n="",t!=null&&(n=t.replace(Zf,"$&/")+"/"),Qa(r,e,n,"",function(c){return c})):r!=null&&(Wd(r)&&(r=t_(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Zf,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Kf(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+pc(o,a);s+=Qa(o,e,n,l,r)}else if(l=e_(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+pc(o,a++),s+=Qa(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ga(t,e,n){if(t==null)return t;var i=[],r=0;return Qa(t,i,"","",function(o){return e.call(n,o,r++)}),i}function i_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},Ja={transition:null},r_={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:Ja,ReactCurrentOwner:Hd};Fe.Children={map:ga,forEach:function(t,e,n){ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ga(t,function(){e++}),e},toArray:function(t){return ga(t,function(e){return e})||[]},only:function(t){if(!Wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Fe.Component=Qo;Fe.Fragment=jv;Fe.Profiler=qv;Fe.PureComponent=Vd;Fe.StrictMode=Xv;Fe.Suspense=Zv;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r_;Fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Im({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Hd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Fm.call(e,l)&&!Om.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:aa,type:t.type,key:r,ref:o,props:i,_owner:s}};Fe.createContext=function(t){return t={$$typeof:Yv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$v,_context:t},t.Consumer=t};Fe.createElement=Um;Fe.createFactory=function(t){var e=Um.bind(null,t);return e.type=t,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(t){return{$$typeof:Kv,render:t}};Fe.isValidElement=Wd;Fe.lazy=function(t){return{$$typeof:Jv,_payload:{_status:-1,_result:t},_init:i_}};Fe.memo=function(t,e){return{$$typeof:Qv,type:t,compare:e===void 0?null:e}};Fe.startTransition=function(t){var e=Ja.transition;Ja.transition={};try{t()}finally{Ja.transition=e}};Fe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Fe.useCallback=function(t,e){return nn.current.useCallback(t,e)};Fe.useContext=function(t){return nn.current.useContext(t)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};Fe.useEffect=function(t,e){return nn.current.useEffect(t,e)};Fe.useId=function(){return nn.current.useId()};Fe.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};Fe.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};Fe.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};Fe.useMemo=function(t,e){return nn.current.useMemo(t,e)};Fe.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};Fe.useRef=function(t){return nn.current.useRef(t)};Fe.useState=function(t){return nn.current.useState(t)};Fe.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};Fe.useTransition=function(){return nn.current.useTransition()};Fe.version="18.2.0";(function(t){t.exports=Fe})(Hv);const jd=Vv(de),Eu=Bv({__proto__:null,default:jd},[de]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_=de,s_=Symbol.for("react.element"),a_=Symbol.for("react.fragment"),l_=Object.prototype.hasOwnProperty,c_=o_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u_={key:!0,ref:!0,__self:!0,__source:!0};function Bm(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)l_.call(e,i)&&!u_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:s_,type:t,key:o,ref:s,props:r,_owner:c_.current}}Bl.Fragment=a_;Bl.jsx=Bm;Bl.jsxs=Bm;(function(t){t.exports=Bl})(Gv);const L=hl.jsx,_e=hl.jsxs;var Tu={},Cu={},d_={get exports(){return Cu},set exports(t){Cu=t}},Tn={},Au={},f_={get exports(){return Au},set exports(t){Au=t}},Vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,G){var W=I.length;I.push(G);e:for(;0<W;){var se=W-1>>>1,U=I[se];if(0<r(U,G))I[se]=G,I[W]=U,W=se;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var G=I[0],W=I.pop();if(W!==G){I[0]=W;e:for(var se=0,U=I.length,Z=U>>>1;se<Z;){var re=2*(se+1)-1,le=I[re],D=re+1,ye=I[D];if(0>r(le,W))D<U&&0>r(ye,le)?(I[se]=ye,I[D]=W,se=D):(I[se]=le,I[re]=W,se=re);else if(D<U&&0>r(ye,W))I[se]=ye,I[D]=W,se=D;else break e}}return G}function r(I,G){var W=I.sortIndex-G.sortIndex;return W!==0?W:I.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,f=null,d=3,m=!1,x=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=I)i(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function M(I){if(h=!1,_(I),!x)if(n(l)!==null)x=!0,Q(S);else{var G=n(c);G!==null&&ee(M,G.startTime-I)}}function S(I,G){x=!1,h&&(h=!1,g(y),y=-1),m=!0;var W=d;try{for(_(G),f=n(l);f!==null&&(!(f.expirationTime>G)||I&&!K());){var se=f.callback;if(typeof se=="function"){f.callback=null,d=f.priorityLevel;var U=se(f.expirationTime<=G);G=t.unstable_now(),typeof U=="function"?f.callback=U:f===n(l)&&i(l),_(G)}else i(l);f=n(l)}if(f!==null)var Z=!0;else{var re=n(c);re!==null&&ee(M,re.startTime-G),Z=!1}return Z}finally{f=null,d=W,m=!1}}var C=!1,P=null,y=-1,T=5,R=-1;function K(){return!(t.unstable_now()-R<T)}function J(){if(P!==null){var I=t.unstable_now();R=I;var G=!0;try{G=P(!0,I)}finally{G?O():(C=!1,P=null)}}else C=!1}var O;if(typeof v=="function")O=function(){v(J)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,$=z.port2;z.port1.onmessage=J,O=function(){$.postMessage(null)}}else O=function(){p(J,0)};function Q(I){P=I,C||(C=!0,O())}function ee(I,G){y=p(function(){I(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,Q(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var W=d;d=G;try{return I()}finally{d=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=d;d=I;try{return G()}finally{d=W}},t.unstable_scheduleCallback=function(I,G,W){var se=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?se+W:se):W=se,I){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=W+U,I={id:u++,callback:G,priorityLevel:I,startTime:W,expirationTime:U,sortIndex:-1},W>se?(I.sortIndex=W,e(c,I),n(l)===null&&I===n(c)&&(h?(g(y),y=-1):h=!0,ee(M,W-se))):(I.sortIndex=U,e(l,I),x||m||(x=!0,Q(S))),I},t.unstable_shouldYield=K,t.unstable_wrapCallback=function(I){var G=d;return function(){var W=d;d=G;try{return I.apply(this,arguments)}finally{d=W}}}})(Vm);(function(t){t.exports=Vm})(f_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm=de,En=Au;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hm=new Set,Fs={};function Xr(t,e){Bo(t,e),Bo(t+"Capture",e)}function Bo(t,e){for(Fs[t]=e,t=0;t<e.length;t++)Hm.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=Object.prototype.hasOwnProperty,h_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qf={},Jf={};function p_(t){return Pu.call(Jf,t)?!0:Pu.call(Qf,t)?!1:h_.test(t)?Jf[t]=!0:(Qf[t]=!0,!1)}function m_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function g_(t,e,n,i){if(e===null||typeof e>"u"||m_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function qd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xd,qd);Bt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xd,qd);Bt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xd,qd);Bt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function $d(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(g_(e,n,r,i)&&(n=null),i||r===null?p_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ri=Gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),go=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),Lu=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),jm=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),Du=Symbol.for("react.suspense"),Ru=Symbol.for("react.suspense_list"),Zd=Symbol.for("react.memo"),Oi=Symbol.for("react.lazy"),Xm=Symbol.for("react.offscreen"),eh=Symbol.iterator;function os(t){return t===null||typeof t!="object"?null:(t=eh&&t[eh]||t["@@iterator"],typeof t=="function"?t:null)}var st=Object.assign,mc;function ys(t){if(mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mc=e&&e[1]||""}return`
`+mc+t}var gc=!1;function vc(t,e){if(!t||gc)return"";gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ys(t):""}function v_(t){switch(t.tag){case 5:return ys(t.type);case 16:return ys("Lazy");case 13:return ys("Suspense");case 19:return ys("SuspenseList");case 0:case 2:case 15:return t=vc(t.type,!1),t;case 11:return t=vc(t.type.render,!1),t;case 1:return t=vc(t.type,!0),t;default:return""}}function Nu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vo:return"Fragment";case go:return"Portal";case Lu:return"Profiler";case Yd:return"StrictMode";case Du:return"Suspense";case Ru:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jm:return(t.displayName||"Context")+".Consumer";case Wm:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zd:return e=t.displayName||null,e!==null?e:Nu(t.type)||"Memo";case Oi:e=t._payload,t=t._init;try{return Nu(t(e))}catch{}}return null}function __(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nu(e);case 8:return e===Yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function x_(t){var e=qm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _a(t){t._valueTracker||(t._valueTracker=x_(t))}function $m(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=qm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Iu(t,e){var n=e.checked;return st({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function th(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ym(t,e){e=e.checked,e!=null&&$d(t,"checked",e,!1)}function ku(t,e){Ym(t,e);var n=ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&zu(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zu(t,e,n){(e!=="number"||pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ss=Array.isArray;function Lo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Fu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return st({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ih(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Ss(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function Km(t,e){var n=ir(e.value),i=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function rh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ou(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,Qm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Os(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y_=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(t){y_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Cs[e]=Cs[t]})});function Jm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Cs.hasOwnProperty(t)&&Cs[t]?(""+e).trim():e+"px"}function eg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Jm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var S_=st({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uu(t,e){if(e){if(S_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vu=null;function Qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gu=null,Do=null,Ro=null;function oh(t){if(t=ua(t)){if(typeof Gu!="function")throw Error(te(280));var e=t.stateNode;e&&(e=jl(e),Gu(t.stateNode,t.type,e))}}function tg(t){Do?Ro?Ro.push(t):Ro=[t]:Do=t}function ng(){if(Do){var t=Do,e=Ro;if(Ro=Do=null,oh(t),e)for(t=0;t<e.length;t++)oh(e[t])}}function ig(t,e){return t(e)}function rg(){}var _c=!1;function og(t,e,n){if(_c)return t(e,n);_c=!0;try{return ig(t,e,n)}finally{_c=!1,(Do!==null||Ro!==null)&&(rg(),ng())}}function Us(t,e){var n=t.stateNode;if(n===null)return null;var i=jl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Hu=!1;if(Ai)try{var ss={};Object.defineProperty(ss,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",ss,ss),window.removeEventListener("test",ss,ss)}catch{Hu=!1}function M_(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var As=!1,ml=null,gl=!1,Wu=null,w_={onError:function(t){As=!0,ml=t}};function b_(t,e,n,i,r,o,s,a,l){As=!1,ml=null,M_.apply(w_,arguments)}function E_(t,e,n,i,r,o,s,a,l){if(b_.apply(this,arguments),As){if(As){var c=ml;As=!1,ml=null}else throw Error(te(198));gl||(gl=!0,Wu=c)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sh(t){if(qr(t)!==t)throw Error(te(188))}function T_(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return sh(r),t;if(o===i)return sh(r),e;o=o.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function ag(t){return t=T_(t),t!==null?lg(t):null}function lg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lg(t);if(e!==null)return e;t=t.sibling}return null}var cg=En.unstable_scheduleCallback,ah=En.unstable_cancelCallback,C_=En.unstable_shouldYield,A_=En.unstable_requestPaint,ut=En.unstable_now,P_=En.unstable_getCurrentPriorityLevel,Jd=En.unstable_ImmediatePriority,ug=En.unstable_UserBlockingPriority,vl=En.unstable_NormalPriority,L_=En.unstable_LowPriority,dg=En.unstable_IdlePriority,Vl=null,ai=null;function D_(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:I_,R_=Math.log,N_=Math.LN2;function I_(t){return t>>>=0,t===0?32:31-(R_(t)/N_|0)|0}var ya=64,Sa=4194304;function Ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _l(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Ms(a):(o&=s,o!==0&&(i=Ms(o)))}else s=n&~r,s!==0?i=Ms(s):o!==0&&(i=Ms(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kn(e),r=1<<n,i|=t[n],e&=~r;return i}function k_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function z_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Kn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=k_(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fg(){var t=ya;return ya<<=1,!(ya&4194240)&&(ya=64),t}function xc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function F_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var $e=0;function hg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pg,tf,mg,gg,vg,Xu=!1,Ma=[],ji=null,Xi=null,qi=null,Bs=new Map,Vs=new Map,Bi=[],O_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lh(t,e){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Bs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vs.delete(e.pointerId)}}function as(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=ua(e),e!==null&&tf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function U_(t,e,n,i,r){switch(e){case"focusin":return ji=as(ji,t,e,n,i,r),!0;case"dragenter":return Xi=as(Xi,t,e,n,i,r),!0;case"mouseover":return qi=as(qi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Bs.set(o,as(Bs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Vs.set(o,as(Vs.get(o)||null,t,e,n,i,r)),!0}return!1}function _g(t){var e=Tr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=sg(n),e!==null){t.blockedOn=e,vg(t.priority,function(){mg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function el(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Vu=i,n.target.dispatchEvent(i),Vu=null}else return e=ua(n),e!==null&&tf(e),t.blockedOn=n,!1;e.shift()}return!0}function ch(t,e,n){el(t)&&n.delete(e)}function B_(){Xu=!1,ji!==null&&el(ji)&&(ji=null),Xi!==null&&el(Xi)&&(Xi=null),qi!==null&&el(qi)&&(qi=null),Bs.forEach(ch),Vs.forEach(ch)}function ls(t,e){t.blockedOn===e&&(t.blockedOn=null,Xu||(Xu=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,B_)))}function Gs(t){function e(r){return ls(r,t)}if(0<Ma.length){ls(Ma[0],t);for(var n=1;n<Ma.length;n++){var i=Ma[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ji!==null&&ls(ji,t),Xi!==null&&ls(Xi,t),qi!==null&&ls(qi,t),Bs.forEach(e),Vs.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)_g(n),n.blockedOn===null&&Bi.shift()}var No=Ri.ReactCurrentBatchConfig,xl=!0;function V_(t,e,n,i){var r=$e,o=No.transition;No.transition=null;try{$e=1,nf(t,e,n,i)}finally{$e=r,No.transition=o}}function G_(t,e,n,i){var r=$e,o=No.transition;No.transition=null;try{$e=4,nf(t,e,n,i)}finally{$e=r,No.transition=o}}function nf(t,e,n,i){if(xl){var r=qu(t,e,n,i);if(r===null)Pc(t,e,i,yl,n),lh(t,i);else if(U_(r,t,e,n,i))i.stopPropagation();else if(lh(t,i),e&4&&-1<O_.indexOf(t)){for(;r!==null;){var o=ua(r);if(o!==null&&pg(o),o=qu(t,e,n,i),o===null&&Pc(t,e,i,yl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Pc(t,e,i,null,n)}}var yl=null;function qu(t,e,n,i){if(yl=null,t=Qd(i),t=Tr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yl=t,null}function xg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P_()){case Jd:return 1;case ug:return 4;case vl:case L_:return 16;case dg:return 536870912;default:return 16}default:return 16}}var Gi=null,rf=null,tl=null;function yg(){if(tl)return tl;var t,e=rf,n=e.length,i,r="value"in Gi?Gi.value:Gi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return tl=r.slice(t,1<i?1-i:void 0)}function nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function uh(){return!1}function Cn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wa:uh,this.isPropagationStopped=uh,this}return st(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var Jo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},of=Cn(Jo),ca=st({},Jo,{view:0,detail:0}),H_=Cn(ca),yc,Sc,cs,Gl=st({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cs&&(cs&&t.type==="mousemove"?(yc=t.screenX-cs.screenX,Sc=t.screenY-cs.screenY):Sc=yc=0,cs=t),yc)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),dh=Cn(Gl),W_=st({},Gl,{dataTransfer:0}),j_=Cn(W_),X_=st({},ca,{relatedTarget:0}),Mc=Cn(X_),q_=st({},Jo,{animationName:0,elapsedTime:0,pseudoElement:0}),$_=Cn(q_),Y_=st({},Jo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),K_=Cn(Y_),Z_=st({},Jo,{data:0}),fh=Cn(Z_),Q_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ex[t])?!!e[t]:!1}function sf(){return tx}var nx=st({},ca,{key:function(t){if(t.key){var e=Q_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?J_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ix=Cn(nx),rx=st({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hh=Cn(rx),ox=st({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),sx=Cn(ox),ax=st({},Jo,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Cn(ax),cx=st({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=Cn(cx),dx=[9,13,27,32],af=Ai&&"CompositionEvent"in window,Ps=null;Ai&&"documentMode"in document&&(Ps=document.documentMode);var fx=Ai&&"TextEvent"in window&&!Ps,Sg=Ai&&(!af||Ps&&8<Ps&&11>=Ps),ph=String.fromCharCode(32),mh=!1;function Mg(t,e){switch(t){case"keyup":return dx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _o=!1;function hx(t,e){switch(t){case"compositionend":return wg(e);case"keypress":return e.which!==32?null:(mh=!0,ph);case"textInput":return t=e.data,t===ph&&mh?null:t;default:return null}}function px(t,e){if(_o)return t==="compositionend"||!af&&Mg(t,e)?(t=yg(),tl=rf=Gi=null,_o=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sg&&e.locale!=="ko"?null:e.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mx[t.type]:e==="textarea"}function bg(t,e,n,i){tg(i),e=Sl(e,"onChange"),0<e.length&&(n=new of("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ls=null,Hs=null;function gx(t){kg(t,0)}function Hl(t){var e=So(t);if($m(e))return t}function vx(t,e){if(t==="change")return e}var Eg=!1;if(Ai){var wc;if(Ai){var bc="oninput"in document;if(!bc){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),bc=typeof vh.oninput=="function"}wc=bc}else wc=!1;Eg=wc&&(!document.documentMode||9<document.documentMode)}function _h(){Ls&&(Ls.detachEvent("onpropertychange",Tg),Hs=Ls=null)}function Tg(t){if(t.propertyName==="value"&&Hl(Hs)){var e=[];bg(e,Hs,t,Qd(t)),og(gx,e)}}function _x(t,e,n){t==="focusin"?(_h(),Ls=e,Hs=n,Ls.attachEvent("onpropertychange",Tg)):t==="focusout"&&_h()}function xx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Hs)}function yx(t,e){if(t==="click")return Hl(e)}function Sx(t,e){if(t==="input"||t==="change")return Hl(e)}function Mx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:Mx;function Ws(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Pu.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function xh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yh(t,e){var n=xh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xh(n)}}function Cg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ag(){for(var t=window,e=pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pl(t.document)}return e}function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wx(t){var e=Ag(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cg(n.ownerDocument.documentElement,n)){if(i!==null&&lf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=yh(n,o);var s=yh(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bx=Ai&&"documentMode"in document&&11>=document.documentMode,xo=null,$u=null,Ds=null,Yu=!1;function Sh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yu||xo==null||xo!==pl(i)||(i=xo,"selectionStart"in i&&lf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ds&&Ws(Ds,i)||(Ds=i,i=Sl($u,"onSelect"),0<i.length&&(e=new of("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=xo)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yo={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Ec={},Pg={};Ai&&(Pg=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function Wl(t){if(Ec[t])return Ec[t];if(!yo[t])return t;var e=yo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Pg)return Ec[t]=e[n];return t}var Lg=Wl("animationend"),Dg=Wl("animationiteration"),Rg=Wl("animationstart"),Ng=Wl("transitionend"),Ig=new Map,Mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){Ig.set(t,e),Xr(e,[t])}for(var Tc=0;Tc<Mh.length;Tc++){var Cc=Mh[Tc],Ex=Cc.toLowerCase(),Tx=Cc[0].toUpperCase()+Cc.slice(1);lr(Ex,"on"+Tx)}lr(Lg,"onAnimationEnd");lr(Dg,"onAnimationIteration");lr(Rg,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(Ng,"onTransitionEnd");Bo("onMouseEnter",["mouseout","mouseover"]);Bo("onMouseLeave",["mouseout","mouseover"]);Bo("onPointerEnter",["pointerout","pointerover"]);Bo("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));function wh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,E_(i,e,void 0,t),t.currentTarget=null}function kg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;wh(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;wh(r,a,c),o=l}}}if(gl)throw t=Wu,gl=!1,Wu=null,t}function Ze(t,e){var n=e[ed];n===void 0&&(n=e[ed]=new Set);var i=t+"__bubble";n.has(i)||(zg(e,t,2,!1),n.add(i))}function Ac(t,e,n){var i=0;e&&(i|=4),zg(n,t,i,e)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function js(t){if(!t[Ea]){t[Ea]=!0,Hm.forEach(function(n){n!=="selectionchange"&&(Cx.has(n)||Ac(n,!1,t),Ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ea]||(e[Ea]=!0,Ac("selectionchange",!1,e))}}function zg(t,e,n,i){switch(xg(e)){case 1:var r=V_;break;case 4:r=G_;break;default:r=nf}n=r.bind(null,e,n,t),r=void 0,!Hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Pc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Tr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}og(function(){var c=o,u=Qd(n),f=[];e:{var d=Ig.get(t);if(d!==void 0){var m=of,x=t;switch(t){case"keypress":if(nl(n)===0)break e;case"keydown":case"keyup":m=ix;break;case"focusin":x="focus",m=Mc;break;case"focusout":x="blur",m=Mc;break;case"beforeblur":case"afterblur":m=Mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=j_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=sx;break;case Lg:case Dg:case Rg:m=$_;break;case Ng:m=lx;break;case"scroll":m=H_;break;case"wheel":m=ux;break;case"copy":case"cut":case"paste":m=K_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=hh}var h=(e&4)!==0,p=!h&&t==="scroll",g=h?d!==null?d+"Capture":null:d;h=[];for(var v=c,_;v!==null;){_=v;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,g!==null&&(M=Us(v,g),M!=null&&h.push(Xs(v,M,_)))),p)break;v=v.return}0<h.length&&(d=new m(d,x,null,n,u),f.push({event:d,listeners:h}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Vu&&(x=n.relatedTarget||n.fromElement)&&(Tr(x)||x[Pi]))break e;if((m||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?Tr(x):null,x!==null&&(p=qr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(h=dh,M="onMouseLeave",g="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(h=hh,M="onPointerLeave",g="onPointerEnter",v="pointer"),p=m==null?d:So(m),_=x==null?d:So(x),d=new h(M,v+"leave",m,n,u),d.target=p,d.relatedTarget=_,M=null,Tr(u)===c&&(h=new h(g,v+"enter",x,n,u),h.target=_,h.relatedTarget=p,M=h),p=M,m&&x)t:{for(h=m,g=x,v=0,_=h;_;_=Kr(_))v++;for(_=0,M=g;M;M=Kr(M))_++;for(;0<v-_;)h=Kr(h),v--;for(;0<_-v;)g=Kr(g),_--;for(;v--;){if(h===g||g!==null&&h===g.alternate)break t;h=Kr(h),g=Kr(g)}h=null}else h=null;m!==null&&bh(f,d,m,h,!1),x!==null&&p!==null&&bh(f,p,x,h,!0)}}e:{if(d=c?So(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var S=vx;else if(gh(d))if(Eg)S=Sx;else{S=xx;var C=_x}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=yx);if(S&&(S=S(t,c))){bg(f,S,n,u);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&zu(d,"number",d.value)}switch(C=c?So(c):window,t){case"focusin":(gh(C)||C.contentEditable==="true")&&(xo=C,$u=c,Ds=null);break;case"focusout":Ds=$u=xo=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,Sh(f,n,u);break;case"selectionchange":if(bx)break;case"keydown":case"keyup":Sh(f,n,u)}var P;if(af)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else _o?Mg(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Sg&&n.locale!=="ko"&&(_o||y!=="onCompositionStart"?y==="onCompositionEnd"&&_o&&(P=yg()):(Gi=u,rf="value"in Gi?Gi.value:Gi.textContent,_o=!0)),C=Sl(c,y),0<C.length&&(y=new fh(y,t,null,n,u),f.push({event:y,listeners:C}),P?y.data=P:(P=wg(n),P!==null&&(y.data=P)))),(P=fx?hx(t,n):px(t,n))&&(c=Sl(c,"onBeforeInput"),0<c.length&&(u=new fh("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=P))}kg(f,e)})}function Xs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Us(t,n),o!=null&&i.unshift(Xs(t,o,r)),o=Us(t,e),o!=null&&i.push(Xs(t,o,r))),t=t.return}return i}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bh(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Us(n,o),l!=null&&s.unshift(Xs(n,l,a))):r||(l=Us(n,o),l!=null&&s.push(Xs(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Ax=/\r\n?/g,Px=/\u0000|\uFFFD/g;function Eh(t){return(typeof t=="string"?t:""+t).replace(Ax,`
`).replace(Px,"")}function Ta(t,e,n){if(e=Eh(e),Eh(t)!==e&&n)throw Error(te(425))}function Ml(){}var Ku=null,Zu=null;function Qu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ju=typeof setTimeout=="function"?setTimeout:void 0,Lx=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,Dx=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(t){return Th.resolve(null).then(t).catch(Rx)}:Ju;function Rx(t){setTimeout(function(){throw t})}function Lc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Gs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Gs(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ch(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var es=Math.random().toString(36).slice(2),ri="__reactFiber$"+es,qs="__reactProps$"+es,Pi="__reactContainer$"+es,ed="__reactEvents$"+es,Nx="__reactListeners$"+es,Ix="__reactHandles$"+es;function Tr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pi]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ch(t);t!==null;){if(n=t[ri])return n;t=Ch(t)}return e}t=n,n=t.parentNode}return null}function ua(t){return t=t[ri]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function So(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function jl(t){return t[qs]||null}var td=[],Mo=-1;function cr(t){return{current:t}}function tt(t){0>Mo||(t.current=td[Mo],td[Mo]=null,Mo--)}function Ke(t,e){Mo++,td[Mo]=t.current,t.current=e}var rr={},$t=cr(rr),un=cr(!1),zr=rr;function Vo(t,e){var n=t.type.contextTypes;if(!n)return rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function wl(){tt(un),tt($t)}function Ah(t,e,n){if($t.current!==rr)throw Error(te(168));Ke($t,e),Ke(un,n)}function Fg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,__(t)||"Unknown",r));return st({},n,i)}function bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,zr=$t.current,Ke($t,t),Ke(un,un.current),!0}function Ph(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=Fg(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,tt(un),tt($t),Ke($t,t)):tt(un),Ke(un,n)}var xi=null,Xl=!1,Dc=!1;function Og(t){xi===null?xi=[t]:xi.push(t)}function kx(t){Xl=!0,Og(t)}function ur(){if(!Dc&&xi!==null){Dc=!0;var t=0,e=$e;try{var n=xi;for($e=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,Xl=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),cg(Jd,ur),r}finally{$e=e,Dc=!1}}return null}var wo=[],bo=0,El=null,Tl=0,Rn=[],Nn=0,Fr=null,Mi=1,wi="";function xr(t,e){wo[bo++]=Tl,wo[bo++]=El,El=t,Tl=e}function Ug(t,e,n){Rn[Nn++]=Mi,Rn[Nn++]=wi,Rn[Nn++]=Fr,Fr=t;var i=Mi;t=wi;var r=32-Kn(i)-1;i&=~(1<<r),n+=1;var o=32-Kn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Mi=1<<32-Kn(e)+r|n<<r|i,wi=o+t}else Mi=1<<o|n<<r|i,wi=t}function cf(t){t.return!==null&&(xr(t,1),Ug(t,1,0))}function uf(t){for(;t===El;)El=wo[--bo],wo[bo]=null,Tl=wo[--bo],wo[bo]=null;for(;t===Fr;)Fr=Rn[--Nn],Rn[Nn]=null,wi=Rn[--Nn],Rn[Nn]=null,Mi=Rn[--Nn],Rn[Nn]=null}var Mn=null,yn=null,it=!1,$n=null;function Bg(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,yn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:Mi,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,yn=null,!0):!1;default:return!1}}function nd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function id(t){if(it){var e=yn;if(e){var n=e;if(!Lh(t,e)){if(nd(t))throw Error(te(418));e=$i(n.nextSibling);var i=Mn;e&&Lh(t,e)?Bg(i,n):(t.flags=t.flags&-4097|2,it=!1,Mn=t)}}else{if(nd(t))throw Error(te(418));t.flags=t.flags&-4097|2,it=!1,Mn=t}}}function Dh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function Ca(t){if(t!==Mn)return!1;if(!it)return Dh(t),it=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qu(t.type,t.memoizedProps)),e&&(e=yn)){if(nd(t))throw Vg(),Error(te(418));for(;e;)Bg(t,e),e=$i(e.nextSibling)}if(Dh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Mn?$i(t.stateNode.nextSibling):null;return!0}function Vg(){for(var t=yn;t;)t=$i(t.nextSibling)}function Go(){yn=Mn=null,it=!1}function df(t){$n===null?$n=[t]:$n.push(t)}var zx=Ri.ReactCurrentBatchConfig;function Xn(t,e){if(t&&t.defaultProps){e=st({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Cl=cr(null),Al=null,Eo=null,ff=null;function hf(){ff=Eo=Al=null}function pf(t){var e=Cl.current;tt(Cl),t._currentValue=e}function rd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Io(t,e){Al=t,ff=Eo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},Eo===null){if(Al===null)throw Error(te(308));Eo=t,Al.dependencies={lanes:0,firstContext:t}}else Eo=Eo.next=t;return e}var Cr=null;function mf(t){Cr===null?Cr=[t]:Cr.push(t)}function Gg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,mf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ui=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,mf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ef(t,n)}}function Rh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,i){var r=t.updateQueue;Ui=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,u=c=l=null,a=o;do{var d=a.lane,m=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,h=a;switch(d=e,m=n,h.tag){case 1:if(x=h.payload,typeof x=="function"){f=x.call(m,f,d);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,d=typeof x=="function"?x.call(m,f,d):x,d==null)break e;f=st({},f,d);break e;case 2:Ui=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,s|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Ur|=s,t.lanes=s,t.memoizedState=f}}function Nh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Wg=new Gm.Component().refs;function od(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:st({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ql={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=Zi(t),o=Ei(i,r);o.payload=e,n!=null&&(o.callback=n),e=Yi(t,o,r),e!==null&&(Zn(e,t,r,i),il(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=Zi(t),o=Ei(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Yi(t,o,r),e!==null&&(Zn(e,t,r,i),il(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=Zi(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=Yi(t,r,i),e!==null&&(Zn(e,t,i,n),il(e,t,i))}};function Ih(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ws(n,i)||!Ws(r,o):!0}function jg(t,e,n){var i=!1,r=rr,o=e.contextType;return typeof o=="object"&&o!==null?o=Un(o):(r=dn(e)?zr:$t.current,i=e.contextTypes,o=(i=i!=null)?Vo(t,r):rr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ql,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function kh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ql.enqueueReplaceState(e,e.state,null)}function sd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Wg,gf(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Un(o):(o=dn(e)?zr:$t.current,r.context=Vo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(od(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ql.enqueueReplaceState(r,r.state,null),Pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function us(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===Wg&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Aa(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zh(t){var e=t._init;return e(t._payload)}function Xg(t){function e(g,v){if(t){var _=g.deletions;_===null?(g.deletions=[v],g.flags|=16):_.push(v)}}function n(g,v){if(!t)return null;for(;v!==null;)e(g,v),v=v.sibling;return null}function i(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function r(g,v){return g=Qi(g,v),g.index=0,g.sibling=null,g}function o(g,v,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<v?(g.flags|=2,v):_):(g.flags|=2,v)):(g.flags|=1048576,v)}function s(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,v,_,M){return v===null||v.tag!==6?(v=Oc(_,g.mode,M),v.return=g,v):(v=r(v,_),v.return=g,v)}function l(g,v,_,M){var S=_.type;return S===vo?u(g,v,_.props.children,M,_.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Oi&&zh(S)===v.type)?(M=r(v,_.props),M.ref=us(g,v,_),M.return=g,M):(M=cl(_.type,_.key,_.props,null,g.mode,M),M.ref=us(g,v,_),M.return=g,M)}function c(g,v,_,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Uc(_,g.mode,M),v.return=g,v):(v=r(v,_.children||[]),v.return=g,v)}function u(g,v,_,M,S){return v===null||v.tag!==7?(v=Rr(_,g.mode,M,S),v.return=g,v):(v=r(v,_),v.return=g,v)}function f(g,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Oc(""+v,g.mode,_),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case va:return _=cl(v.type,v.key,v.props,null,g.mode,_),_.ref=us(g,null,v),_.return=g,_;case go:return v=Uc(v,g.mode,_),v.return=g,v;case Oi:var M=v._init;return f(g,M(v._payload),_)}if(Ss(v)||os(v))return v=Rr(v,g.mode,_,null),v.return=g,v;Aa(g,v)}return null}function d(g,v,_,M){var S=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:a(g,v,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case va:return _.key===S?l(g,v,_,M):null;case go:return _.key===S?c(g,v,_,M):null;case Oi:return S=_._init,d(g,v,S(_._payload),M)}if(Ss(_)||os(_))return S!==null?null:u(g,v,_,M,null);Aa(g,_)}return null}function m(g,v,_,M,S){if(typeof M=="string"&&M!==""||typeof M=="number")return g=g.get(_)||null,a(v,g,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case va:return g=g.get(M.key===null?_:M.key)||null,l(v,g,M,S);case go:return g=g.get(M.key===null?_:M.key)||null,c(v,g,M,S);case Oi:var C=M._init;return m(g,v,_,C(M._payload),S)}if(Ss(M)||os(M))return g=g.get(_)||null,u(v,g,M,S,null);Aa(v,M)}return null}function x(g,v,_,M){for(var S=null,C=null,P=v,y=v=0,T=null;P!==null&&y<_.length;y++){P.index>y?(T=P,P=null):T=P.sibling;var R=d(g,P,_[y],M);if(R===null){P===null&&(P=T);break}t&&P&&R.alternate===null&&e(g,P),v=o(R,v,y),C===null?S=R:C.sibling=R,C=R,P=T}if(y===_.length)return n(g,P),it&&xr(g,y),S;if(P===null){for(;y<_.length;y++)P=f(g,_[y],M),P!==null&&(v=o(P,v,y),C===null?S=P:C.sibling=P,C=P);return it&&xr(g,y),S}for(P=i(g,P);y<_.length;y++)T=m(P,g,y,_[y],M),T!==null&&(t&&T.alternate!==null&&P.delete(T.key===null?y:T.key),v=o(T,v,y),C===null?S=T:C.sibling=T,C=T);return t&&P.forEach(function(K){return e(g,K)}),it&&xr(g,y),S}function h(g,v,_,M){var S=os(_);if(typeof S!="function")throw Error(te(150));if(_=S.call(_),_==null)throw Error(te(151));for(var C=S=null,P=v,y=v=0,T=null,R=_.next();P!==null&&!R.done;y++,R=_.next()){P.index>y?(T=P,P=null):T=P.sibling;var K=d(g,P,R.value,M);if(K===null){P===null&&(P=T);break}t&&P&&K.alternate===null&&e(g,P),v=o(K,v,y),C===null?S=K:C.sibling=K,C=K,P=T}if(R.done)return n(g,P),it&&xr(g,y),S;if(P===null){for(;!R.done;y++,R=_.next())R=f(g,R.value,M),R!==null&&(v=o(R,v,y),C===null?S=R:C.sibling=R,C=R);return it&&xr(g,y),S}for(P=i(g,P);!R.done;y++,R=_.next())R=m(P,g,y,R.value,M),R!==null&&(t&&R.alternate!==null&&P.delete(R.key===null?y:R.key),v=o(R,v,y),C===null?S=R:C.sibling=R,C=R);return t&&P.forEach(function(J){return e(g,J)}),it&&xr(g,y),S}function p(g,v,_,M){if(typeof _=="object"&&_!==null&&_.type===vo&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case va:e:{for(var S=_.key,C=v;C!==null;){if(C.key===S){if(S=_.type,S===vo){if(C.tag===7){n(g,C.sibling),v=r(C,_.props.children),v.return=g,g=v;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Oi&&zh(S)===C.type){n(g,C.sibling),v=r(C,_.props),v.ref=us(g,C,_),v.return=g,g=v;break e}n(g,C);break}else e(g,C);C=C.sibling}_.type===vo?(v=Rr(_.props.children,g.mode,M,_.key),v.return=g,g=v):(M=cl(_.type,_.key,_.props,null,g.mode,M),M.ref=us(g,v,_),M.return=g,g=M)}return s(g);case go:e:{for(C=_.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(g,v.sibling),v=r(v,_.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else e(g,v);v=v.sibling}v=Uc(_,g.mode,M),v.return=g,g=v}return s(g);case Oi:return C=_._init,p(g,v,C(_._payload),M)}if(Ss(_))return x(g,v,_,M);if(os(_))return h(g,v,_,M);Aa(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(g,v.sibling),v=r(v,_),v.return=g,g=v):(n(g,v),v=Oc(_,g.mode,M),v.return=g,g=v),s(g)):n(g,v)}return p}var Ho=Xg(!0),qg=Xg(!1),da={},li=cr(da),$s=cr(da),Ys=cr(da);function Ar(t){if(t===da)throw Error(te(174));return t}function vf(t,e){switch(Ke(Ys,e),Ke($s,t),Ke(li,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ou(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ou(e,t)}tt(li),Ke(li,e)}function Wo(){tt(li),tt($s),tt(Ys)}function $g(t){Ar(Ys.current);var e=Ar(li.current),n=Ou(e,t.type);e!==n&&(Ke($s,t),Ke(li,n))}function _f(t){$s.current===t&&(tt(li),tt($s))}var rt=cr(0);function Ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rc=[];function xf(){for(var t=0;t<Rc.length;t++)Rc[t]._workInProgressVersionPrimary=null;Rc.length=0}var rl=Ri.ReactCurrentDispatcher,Nc=Ri.ReactCurrentBatchConfig,Or=0,ot=null,xt=null,Pt=null,Dl=!1,Rs=!1,Ks=0,Fx=0;function Ht(){throw Error(te(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function Sf(t,e,n,i,r,o){if(Or=o,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rl.current=t===null||t.memoizedState===null?Vx:Gx,t=n(i,r),Rs){o=0;do{if(Rs=!1,Ks=0,25<=o)throw Error(te(301));o+=1,Pt=xt=null,e.updateQueue=null,rl.current=Hx,t=n(i,r)}while(Rs)}if(rl.current=Rl,e=xt!==null&&xt.next!==null,Or=0,Pt=xt=ot=null,Dl=!1,e)throw Error(te(300));return t}function Mf(){var t=Ks!==0;return Ks=0,t}function ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ot.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Bn(){if(xt===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var e=Pt===null?ot.memoizedState:Pt.next;if(e!==null)Pt=e,xt=t;else{if(t===null)throw Error(te(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},Pt===null?ot.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Zs(t,e){return typeof e=="function"?e(t):e}function Ic(t){var e=Bn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=xt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((Or&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,ot.lanes|=u,Ur|=u}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,Qn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,ot.lanes|=o,Ur|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Qn(o,e.memoizedState)||(cn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function Yg(){}function Kg(t,e){var n=ot,i=Bn(),r=e(),o=!Qn(i.memoizedState,r);if(o&&(i.memoizedState=r,cn=!0),i=i.queue,wf(Jg.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Qs(9,Qg.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(te(349));Or&30||Zg(n,e,r)}return r}function Zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qg(t,e,n,i){e.value=n,e.getSnapshot=i,e0(e)&&t0(t)}function Jg(t,e,n){return n(function(){e0(e)&&t0(t)})}function e0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function t0(t){var e=Li(t,1);e!==null&&Zn(e,t,1,-1)}function Fh(t){var e=ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zs,lastRenderedState:t},e.queue=t,t=t.dispatch=Bx.bind(null,ot,t),[e.memoizedState,t]}function Qs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ot.updateQueue,e===null?(e={lastEffect:null,stores:null},ot.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function n0(){return Bn().memoizedState}function ol(t,e,n,i){var r=ti();ot.flags|=t,r.memoizedState=Qs(1|e,n,void 0,i===void 0?null:i)}function $l(t,e,n,i){var r=Bn();i=i===void 0?null:i;var o=void 0;if(xt!==null){var s=xt.memoizedState;if(o=s.destroy,i!==null&&yf(i,s.deps)){r.memoizedState=Qs(e,n,o,i);return}}ot.flags|=t,r.memoizedState=Qs(1|e,n,o,i)}function Oh(t,e){return ol(8390656,8,t,e)}function wf(t,e){return $l(2048,8,t,e)}function i0(t,e){return $l(4,2,t,e)}function r0(t,e){return $l(4,4,t,e)}function o0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function s0(t,e,n){return n=n!=null?n.concat([t]):null,$l(4,4,o0.bind(null,e,t),n)}function bf(){}function a0(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function l0(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function c0(t,e,n){return Or&21?(Qn(n,e)||(n=fg(),ot.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function Ox(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var i=Nc.transition;Nc.transition={};try{t(!1),e()}finally{$e=n,Nc.transition=i}}function u0(){return Bn().memoizedState}function Ux(t,e,n){var i=Zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},d0(t))f0(e,n);else if(n=Gg(t,e,n,i),n!==null){var r=tn();Zn(n,t,i,r),h0(n,e,i)}}function Bx(t,e,n){var i=Zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(d0(t))f0(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Qn(a,s)){var l=e.interleaved;l===null?(r.next=r,mf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Gg(t,e,r,i),n!==null&&(r=tn(),Zn(n,t,i,r),h0(n,e,i))}}function d0(t){var e=t.alternate;return t===ot||e!==null&&e===ot}function f0(t,e){Rs=Dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function h0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ef(t,n)}}var Rl={readContext:Un,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},Vx={readContext:Un,useCallback:function(t,e){return ti().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:Oh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,o0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ux.bind(null,ot,t),[i.memoizedState,t]},useRef:function(t){var e=ti();return t={current:t},e.memoizedState=t},useState:Fh,useDebugValue:bf,useDeferredValue:function(t){return ti().memoizedState=t},useTransition:function(){var t=Fh(!1),e=t[0];return t=Ox.bind(null,t[1]),ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ot,r=ti();if(it){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Rt===null)throw Error(te(349));Or&30||Zg(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Oh(Jg.bind(null,i,o,t),[t]),i.flags|=2048,Qs(9,Qg.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ti(),e=Rt.identifierPrefix;if(it){var n=wi,i=Mi;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ks++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Fx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gx={readContext:Un,useCallback:a0,useContext:Un,useEffect:wf,useImperativeHandle:s0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:Ic,useRef:n0,useState:function(){return Ic(Zs)},useDebugValue:bf,useDeferredValue:function(t){var e=Bn();return c0(e,xt.memoizedState,t)},useTransition:function(){var t=Ic(Zs)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Yg,useSyncExternalStore:Kg,useId:u0,unstable_isNewReconciler:!1},Hx={readContext:Un,useCallback:a0,useContext:Un,useEffect:wf,useImperativeHandle:s0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:kc,useRef:n0,useState:function(){return kc(Zs)},useDebugValue:bf,useDeferredValue:function(t){var e=Bn();return xt===null?e.memoizedState=t:c0(e,xt.memoizedState,t)},useTransition:function(){var t=kc(Zs)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:Yg,useSyncExternalStore:Kg,useId:u0,unstable_isNewReconciler:!1};function jo(t,e){try{var n="",i=e;do n+=v_(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ad(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Wx=typeof WeakMap=="function"?WeakMap:Map;function p0(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Il||(Il=!0,vd=i),ad(t,e)},n}function m0(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ad(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ad(t,e),typeof i!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Uh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Wx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ry.bind(null,t,e,n),e.then(t,t))}function Bh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var jx=Ri.ReactCurrentOwner,cn=!1;function Jt(t,e,n,i){e.child=t===null?qg(e,null,n,i):Ho(e,t.child,n,i)}function Gh(t,e,n,i,r){n=n.render;var o=e.ref;return Io(e,r),i=Sf(t,e,n,i,o,r),n=Mf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(it&&n&&cf(e),e.flags|=1,Jt(t,e,i,r),e.child)}function Hh(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Rf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,g0(t,e,o,i,r)):(t=cl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ws,n(s,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=Qi(o,i),t.ref=e.ref,t.return=e,e.child=t}function g0(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Ws(o,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Di(t,e,r)}return ld(t,e,n,i,r)}function v0(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Co,xn),xn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ke(Co,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Ke(Co,xn),xn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Ke(Co,xn),xn|=i;return Jt(t,e,r,n),e.child}function _0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ld(t,e,n,i,r){var o=dn(n)?zr:$t.current;return o=Vo(e,o),Io(e,r),n=Sf(t,e,n,i,o,r),i=Mf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(it&&i&&cf(e),e.flags|=1,Jt(t,e,n,r),e.child)}function Wh(t,e,n,i,r){if(dn(n)){var o=!0;bl(e)}else o=!1;if(Io(e,r),e.stateNode===null)sl(t,e),jg(e,n,i),sd(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=dn(n)?zr:$t.current,c=Vo(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&kh(e,s,i,c),Ui=!1;var d=e.memoizedState;s.state=d,Pl(e,i,s,r),l=e.memoizedState,a!==i||d!==l||un.current||Ui?(typeof u=="function"&&(od(e,n,u,i),l=e.memoizedState),(a=Ui||Ih(e,n,a,i,d,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,Hg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Xn(e.type,a),s.props=c,f=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=dn(n)?zr:$t.current,l=Vo(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&kh(e,s,i,l),Ui=!1,d=e.memoizedState,s.state=d,Pl(e,i,s,r);var x=e.memoizedState;a!==f||d!==x||un.current||Ui?(typeof m=="function"&&(od(e,n,m,i),x=e.memoizedState),(c=Ui||Ih(e,n,c,i,d,x,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),s.props=i,s.state=x,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return cd(t,e,n,i,o,r)}function cd(t,e,n,i,r,o){_0(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Ph(e,n,!1),Di(t,e,o);i=e.stateNode,jx.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Ho(e,t.child,null,o),e.child=Ho(e,null,a,o)):Jt(t,e,a,o),e.memoizedState=i.state,r&&Ph(e,n,!0),e.child}function x0(t){var e=t.stateNode;e.pendingContext?Ah(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ah(t,e.context,!1),vf(t,e.containerInfo)}function jh(t,e,n,i,r){return Go(),df(r),e.flags|=256,Jt(t,e,n,i),e.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function y0(t,e,n){var i=e.pendingProps,r=rt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ke(rt,r&1),t===null)return id(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Zl(s,i,0,null),t=Rr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=dd(n),e.memoizedState=ud,t):Ef(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Xx(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Qi(a,o):(o=Rr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?dd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=ud,i}return o=t.child,t=o.sibling,i=Qi(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ef(t,e){return e=Zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pa(t,e,n,i){return i!==null&&df(i),Ho(e,t.child,null,n),t=Ef(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xx(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=zc(Error(te(422))),Pa(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Zl({mode:"visible",children:i.children},r,0,null),o=Rr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Ho(e,t.child,null,s),e.child.memoizedState=dd(s),e.memoizedState=ud,o);if(!(e.mode&1))return Pa(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(te(419)),i=zc(o,i,void 0),Pa(t,e,s,i)}if(a=(s&t.childLanes)!==0,cn||a){if(i=Rt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Li(t,r),Zn(i,t,r,-1))}return Df(),i=zc(Error(te(421))),Pa(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oy.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,yn=$i(r.nextSibling),Mn=e,it=!0,$n=null,t!==null&&(Rn[Nn++]=Mi,Rn[Nn++]=wi,Rn[Nn++]=Fr,Mi=t.id,wi=t.overflow,Fr=e),e=Ef(e,i.children),e.flags|=4096,e)}function Xh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),rd(t.return,e,n)}function Fc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function S0(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Jt(t,e,i.children,n),i=rt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xh(t,n,e);else if(t.tag===19)Xh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ke(rt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ll(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Fc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ll(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Fc(e,!0,n,null,o);break;case"together":Fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qx(t,e,n){switch(e.tag){case 3:x0(e),Go();break;case 5:$g(e);break;case 1:dn(e.type)&&bl(e);break;case 4:vf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ke(Cl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ke(rt,rt.current&1),e.flags|=128,null):n&e.child.childLanes?y0(t,e,n):(Ke(rt,rt.current&1),t=Di(t,e,n),t!==null?t.sibling:null);Ke(rt,rt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return S0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ke(rt,rt.current),i)break;return null;case 22:case 23:return e.lanes=0,v0(t,e,n)}return Di(t,e,n)}var M0,fd,w0,b0;M0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fd=function(){};w0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ar(li.current);var o=null;switch(n){case"input":r=Iu(t,r),i=Iu(t,i),o=[];break;case"select":r=st({},r,{value:void 0}),i=st({},i,{value:void 0}),o=[];break;case"textarea":r=Fu(t,r),i=Fu(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ml)}Uu(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fs.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ze("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};b0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ds(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $x(t,e,n){var i=e.pendingProps;switch(uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return dn(e.type)&&wl(),Wt(e),null;case 3:return i=e.stateNode,Wo(),tt(un),tt($t),xf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(yd($n),$n=null))),fd(t,e),Wt(e),null;case 5:_f(e);var r=Ar(Ys.current);if(n=e.type,t!==null&&e.stateNode!=null)w0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Wt(e),null}if(t=Ar(li.current),Ca(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ri]=e,i[qs]=o,t=(e.mode&1)!==0,n){case"dialog":Ze("cancel",i),Ze("close",i);break;case"iframe":case"object":case"embed":Ze("load",i);break;case"video":case"audio":for(r=0;r<ws.length;r++)Ze(ws[r],i);break;case"source":Ze("error",i);break;case"img":case"image":case"link":Ze("error",i),Ze("load",i);break;case"details":Ze("toggle",i);break;case"input":th(i,o),Ze("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Ze("invalid",i);break;case"textarea":ih(i,o),Ze("invalid",i)}Uu(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ta(i.textContent,a,t),r=["children",""+a]):Fs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Ze("scroll",i)}switch(n){case"input":_a(i),nh(i,o,!0);break;case"textarea":_a(i),rh(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ri]=e,t[qs]=i,M0(t,e,!1,!1),e.stateNode=t;e:{switch(s=Bu(n,i),n){case"dialog":Ze("cancel",t),Ze("close",t),r=i;break;case"iframe":case"object":case"embed":Ze("load",t),r=i;break;case"video":case"audio":for(r=0;r<ws.length;r++)Ze(ws[r],t);r=i;break;case"source":Ze("error",t),r=i;break;case"img":case"image":case"link":Ze("error",t),Ze("load",t),r=i;break;case"details":Ze("toggle",t),r=i;break;case"input":th(t,i),r=Iu(t,i),Ze("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=st({},i,{value:void 0}),Ze("invalid",t);break;case"textarea":ih(t,i),r=Fu(t,i),Ze("invalid",t);break;default:r=i}Uu(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?eg(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qm(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Os(t,l):typeof l=="number"&&Os(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Ze("scroll",t):l!=null&&$d(t,o,l,s))}switch(n){case"input":_a(t),nh(t,i,!1);break;case"textarea":_a(t),rh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ir(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Lo(t,!!i.multiple,o,!1):i.defaultValue!=null&&Lo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)b0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Ar(Ys.current),Ar(li.current),Ca(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(o=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:Ta(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ta(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Wt(e),null;case 13:if(tt(rt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(it&&yn!==null&&e.mode&1&&!(e.flags&128))Vg(),Go(),e.flags|=98560,o=!1;else if(o=Ca(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(te(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(te(317));o[ri]=e}else Go(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),o=!1}else $n!==null&&(yd($n),$n=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||rt.current&1?St===0&&(St=3):Df())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return Wo(),fd(t,e),t===null&&js(e.stateNode.containerInfo),Wt(e),null;case 10:return pf(e.type._context),Wt(e),null;case 17:return dn(e.type)&&wl(),Wt(e),null;case 19:if(tt(rt),o=e.memoizedState,o===null)return Wt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)ds(o,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ll(t),s!==null){for(e.flags|=128,ds(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ke(rt,rt.current&1|2),e.child}t=t.sibling}o.tail!==null&&ut()>Xo&&(e.flags|=128,i=!0,ds(o,!1),e.lanes=4194304)}else{if(!i)if(t=Ll(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ds(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!it)return Wt(e),null}else 2*ut()-o.renderingStartTime>Xo&&n!==1073741824&&(e.flags|=128,i=!0,ds(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ut(),e.sibling=null,n=rt.current,Ke(rt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return Lf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Yx(t,e){switch(uf(e),e.tag){case 1:return dn(e.type)&&wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wo(),tt(un),tt($t),xf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(tt(rt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Go()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(rt),null;case 4:return Wo(),null;case 10:return pf(e.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var La=!1,Xt=!1,Kx=typeof WeakSet=="function"?WeakSet:Set,xe=null;function To(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){at(t,e,i)}else n.current=null}function hd(t,e,n){try{n()}catch(i){at(t,e,i)}}var qh=!1;function Zx(t,e){if(Ku=xl,t=Ag(),lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=s),d===o&&++u===i&&(l=s),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zu={focusedElem:t,selectionRange:n},xl=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,p=x.memoizedState,g=e.stateNode,v=g.getSnapshotBeforeUpdate(e.elementType===e.type?h:Xn(e.type,h),p);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(M){at(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return x=qh,qh=!1,x}function Ns(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&hd(e,n,o)}r=r.next}while(r!==i)}}function Yl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function E0(t){var e=t.alternate;e!==null&&(t.alternate=null,E0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[qs],delete e[ed],delete e[Nx],delete e[Ix])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T0(t){return t.tag===5||t.tag===3||t.tag===4}function $h(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ml));else if(i!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}function gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}var It=null,qn=!1;function Ni(t,e,n){for(n=n.child;n!==null;)C0(t,e,n),n=n.sibling}function C0(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(Vl,n)}catch{}switch(n.tag){case 5:Xt||To(n,e);case 6:var i=It,r=qn;It=null,Ni(t,e,n),It=i,qn=r,It!==null&&(qn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(qn?(t=It,n=n.stateNode,t.nodeType===8?Lc(t.parentNode,n):t.nodeType===1&&Lc(t,n),Gs(t)):Lc(It,n.stateNode));break;case 4:i=It,r=qn,It=n.stateNode.containerInfo,qn=!0,Ni(t,e,n),It=i,qn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&hd(n,e,s),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!Xt&&(To(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){at(n,e,a)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Ni(t,e,n),Xt=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function Yh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Kx),e.forEach(function(i){var r=sy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,qn=!1;break e;case 3:It=a.stateNode.containerInfo,qn=!0;break e;case 4:It=a.stateNode.containerInfo,qn=!0;break e}a=a.return}if(It===null)throw Error(te(160));C0(o,s,r),It=null,qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){at(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)A0(e,t),e=e.sibling}function A0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),Jn(t),i&4){try{Ns(3,t,t.return),Yl(3,t)}catch(h){at(t,t.return,h)}try{Ns(5,t,t.return)}catch(h){at(t,t.return,h)}}break;case 1:Vn(e,t),Jn(t),i&512&&n!==null&&To(n,n.return);break;case 5:if(Vn(e,t),Jn(t),i&512&&n!==null&&To(n,n.return),t.flags&32){var r=t.stateNode;try{Os(r,"")}catch(h){at(t,t.return,h)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Ym(r,o),Bu(a,s);var c=Bu(a,o);for(s=0;s<l.length;s+=2){var u=l[s],f=l[s+1];u==="style"?eg(r,f):u==="dangerouslySetInnerHTML"?Qm(r,f):u==="children"?Os(r,f):$d(r,u,f,c)}switch(a){case"input":ku(r,o);break;case"textarea":Km(r,o);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Lo(r,!!o.multiple,m,!1):d!==!!o.multiple&&(o.defaultValue!=null?Lo(r,!!o.multiple,o.defaultValue,!0):Lo(r,!!o.multiple,o.multiple?[]:"",!1))}r[qs]=o}catch(h){at(t,t.return,h)}}break;case 6:if(Vn(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(h){at(t,t.return,h)}}break;case 3:if(Vn(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Gs(e.containerInfo)}catch(h){at(t,t.return,h)}break;case 4:Vn(e,t),Jn(t);break;case 13:Vn(e,t),Jn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Af=ut())),i&4&&Yh(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||u,Vn(e,t),Xt=c):Vn(e,t),Jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(xe=t,u=t.child;u!==null;){for(f=xe=u;xe!==null;){switch(d=xe,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ns(4,d,d.return);break;case 1:To(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(h){at(i,n,h)}}break;case 5:To(d,d.return);break;case 22:if(d.memoizedState!==null){Zh(f);continue}}m!==null?(m.return=d,xe=m):Zh(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jm("display",s))}catch(h){at(t,t.return,h)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(h){at(t,t.return,h)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Vn(e,t),Jn(t),i&4&&Yh(t);break;case 21:break;default:Vn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T0(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Os(r,""),i.flags&=-33);var o=$h(t);gd(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=$h(t);md(t,a,s);break;default:throw Error(te(161))}}catch(l){at(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qx(t,e,n){xe=t,P0(t)}function P0(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||La;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=La;var c=Xt;if(La=s,(Xt=l)&&!c)for(xe=r;xe!==null;)s=xe,l=s.child,s.tag===22&&s.memoizedState!==null?Qh(r):l!==null?(l.return=s,xe=l):Qh(r);for(;o!==null;)xe=o,P0(o),o=o.sibling;xe=r,La=a,Xt=c}Kh(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,xe=o):Kh(t)}}function Kh(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Yl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Nh(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nh(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Gs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Xt||e.flags&512&&pd(e)}catch(d){at(e,e.return,d)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Zh(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Qh(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yl(4,e)}catch(l){at(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){at(e,r,l)}}var o=e.return;try{pd(e)}catch(l){at(e,o,l)}break;case 5:var s=e.return;try{pd(e)}catch(l){at(e,s,l)}}}catch(l){at(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var Jx=Math.ceil,Nl=Ri.ReactCurrentDispatcher,Tf=Ri.ReactCurrentOwner,On=Ri.ReactCurrentBatchConfig,We=0,Rt=null,mt=null,Ot=0,xn=0,Co=cr(0),St=0,Js=null,Ur=0,Kl=0,Cf=0,Is=null,an=null,Af=0,Xo=1/0,_i=null,Il=!1,vd=null,Ki=null,Da=!1,Hi=null,kl=0,ks=0,_d=null,al=-1,ll=0;function tn(){return We&6?ut():al!==-1?al:al=ut()}function Zi(t){return t.mode&1?We&2&&Ot!==0?Ot&-Ot:zx.transition!==null?(ll===0&&(ll=fg()),ll):(t=$e,t!==0||(t=window.event,t=t===void 0?16:xg(t.type)),t):1}function Zn(t,e,n,i){if(50<ks)throw ks=0,_d=null,Error(te(185));la(t,n,i),(!(We&2)||t!==Rt)&&(t===Rt&&(!(We&2)&&(Kl|=n),St===4&&Vi(t,Ot)),fn(t,i),n===1&&We===0&&!(e.mode&1)&&(Xo=ut()+500,Xl&&ur()))}function fn(t,e){var n=t.callbackNode;z_(t,e);var i=_l(t,t===Rt?Ot:0);if(i===0)n!==null&&ah(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ah(n),e===1)t.tag===0?kx(Jh.bind(null,t)):Og(Jh.bind(null,t)),Dx(function(){!(We&6)&&ur()}),n=null;else{switch(hg(i)){case 1:n=Jd;break;case 4:n=ug;break;case 16:n=vl;break;case 536870912:n=dg;break;default:n=vl}n=F0(n,L0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function L0(t,e){if(al=-1,ll=0,We&6)throw Error(te(327));var n=t.callbackNode;if(ko()&&t.callbackNode!==n)return null;var i=_l(t,t===Rt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=zl(t,i);else{e=i;var r=We;We|=2;var o=R0();(Rt!==t||Ot!==e)&&(_i=null,Xo=ut()+500,Dr(t,e));do try{ny();break}catch(a){D0(t,a)}while(1);hf(),Nl.current=o,We=r,mt!==null?e=0:(Rt=null,Ot=0,e=St)}if(e!==0){if(e===2&&(r=ju(t),r!==0&&(i=r,e=xd(t,r))),e===1)throw n=Js,Dr(t,0),Vi(t,i),fn(t,ut()),n;if(e===6)Vi(t,i);else{if(r=t.current.alternate,!(i&30)&&!ey(r)&&(e=zl(t,i),e===2&&(o=ju(t),o!==0&&(i=o,e=xd(t,o))),e===1))throw n=Js,Dr(t,0),Vi(t,i),fn(t,ut()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:yr(t,an,_i);break;case 3:if(Vi(t,i),(i&130023424)===i&&(e=Af+500-ut(),10<e)){if(_l(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ju(yr.bind(null,t,an,_i),e);break}yr(t,an,_i);break;case 4:if(Vi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Kn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Jx(i/1960))-i,10<i){t.timeoutHandle=Ju(yr.bind(null,t,an,_i),i);break}yr(t,an,_i);break;case 5:yr(t,an,_i);break;default:throw Error(te(329))}}}return fn(t,ut()),t.callbackNode===n?L0.bind(null,t):null}function xd(t,e){var n=Is;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=zl(t,e),t!==2&&(e=an,an=n,e!==null&&yd(e)),t}function yd(t){an===null?an=t:an.push.apply(an,t)}function ey(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Qn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vi(t,e){for(e&=~Cf,e&=~Kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),i=1<<n;t[n]=-1,e&=~i}}function Jh(t){if(We&6)throw Error(te(327));ko();var e=_l(t,0);if(!(e&1))return fn(t,ut()),null;var n=zl(t,e);if(t.tag!==0&&n===2){var i=ju(t);i!==0&&(e=i,n=xd(t,i))}if(n===1)throw n=Js,Dr(t,0),Vi(t,e),fn(t,ut()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,an,_i),fn(t,ut()),null}function Pf(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Xo=ut()+500,Xl&&ur())}}function Br(t){Hi!==null&&Hi.tag===0&&!(We&6)&&ko();var e=We;We|=1;var n=On.transition,i=$e;try{if(On.transition=null,$e=1,t)return t()}finally{$e=i,On.transition=n,We=e,!(We&6)&&ur()}}function Lf(){xn=Co.current,tt(Co)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Lx(n)),mt!==null)for(n=mt.return;n!==null;){var i=n;switch(uf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&wl();break;case 3:Wo(),tt(un),tt($t),xf();break;case 5:_f(i);break;case 4:Wo();break;case 13:tt(rt);break;case 19:tt(rt);break;case 10:pf(i.type._context);break;case 22:case 23:Lf()}n=n.return}if(Rt=t,mt=t=Qi(t.current,null),Ot=xn=e,St=0,Js=null,Cf=Kl=Ur=0,an=Is=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Cr=null}return t}function D0(t,e){do{var n=mt;try{if(hf(),rl.current=Rl,Dl){for(var i=ot.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Dl=!1}if(Or=0,Pt=xt=ot=null,Rs=!1,Ks=0,Tf.current=null,n===null||n.return===null){St=1,Js=e,mt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Bh(s);if(m!==null){m.flags&=-257,Vh(m,s,a,o,e),m.mode&1&&Uh(o,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var h=new Set;h.add(l),e.updateQueue=h}else x.add(l);break e}else{if(!(e&1)){Uh(o,c,e),Df();break e}l=Error(te(426))}}else if(it&&a.mode&1){var p=Bh(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Vh(p,s,a,o,e),df(jo(l,a));break e}}o=l=jo(l,a),St!==4&&(St=2),Is===null?Is=[o]:Is.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var g=p0(o,l,e);Rh(o,g);break e;case 1:a=l;var v=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ki===null||!Ki.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var M=m0(o,a,e);Rh(o,M);break e}}o=o.return}while(o!==null)}I0(n)}catch(S){e=S,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(1)}function R0(){var t=Nl.current;return Nl.current=Rl,t===null?Rl:t}function Df(){(St===0||St===3||St===2)&&(St=4),Rt===null||!(Ur&268435455)&&!(Kl&268435455)||Vi(Rt,Ot)}function zl(t,e){var n=We;We|=2;var i=R0();(Rt!==t||Ot!==e)&&(_i=null,Dr(t,e));do try{ty();break}catch(r){D0(t,r)}while(1);if(hf(),We=n,Nl.current=i,mt!==null)throw Error(te(261));return Rt=null,Ot=0,St}function ty(){for(;mt!==null;)N0(mt)}function ny(){for(;mt!==null&&!C_();)N0(mt)}function N0(t){var e=z0(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?I0(t):mt=e,Tf.current=null}function I0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yx(n,e),n!==null){n.flags&=32767,mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,mt=null;return}}else if(n=$x(n,e,xn),n!==null){mt=n;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=t}while(e!==null);St===0&&(St=5)}function yr(t,e,n){var i=$e,r=On.transition;try{On.transition=null,$e=1,iy(t,e,n,i)}finally{On.transition=r,$e=i}return null}function iy(t,e,n,i){do ko();while(Hi!==null);if(We&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(F_(t,o),t===Rt&&(mt=Rt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Da||(Da=!0,F0(vl,function(){return ko(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=On.transition,On.transition=null;var s=$e;$e=1;var a=We;We|=4,Tf.current=null,Zx(t,n),A0(n,t),wx(Zu),xl=!!Ku,Zu=Ku=null,t.current=n,Qx(n),A_(),We=a,$e=s,On.transition=o}else t.current=n;if(Da&&(Da=!1,Hi=t,kl=r),o=t.pendingLanes,o===0&&(Ki=null),D_(n.stateNode),fn(t,ut()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Il)throw Il=!1,t=vd,vd=null,t;return kl&1&&t.tag!==0&&ko(),o=t.pendingLanes,o&1?t===_d?ks++:(ks=0,_d=t):ks=0,ur(),null}function ko(){if(Hi!==null){var t=hg(kl),e=On.transition,n=$e;try{if(On.transition=null,$e=16>t?16:t,Hi===null)var i=!1;else{if(t=Hi,Hi=null,kl=0,We&6)throw Error(te(331));var r=We;for(We|=4,xe=t.current;xe!==null;){var o=xe,s=o.child;if(xe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(xe=c;xe!==null;){var u=xe;switch(u.tag){case 0:case 11:case 15:Ns(8,u,o)}var f=u.child;if(f!==null)f.return=u,xe=f;else for(;xe!==null;){u=xe;var d=u.sibling,m=u.return;if(E0(u),u===c){xe=null;break}if(d!==null){d.return=m,xe=d;break}xe=m}}}var x=o.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}xe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,xe=s;else e:for(;xe!==null;){if(o=xe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ns(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,xe=g;break e}xe=o.return}}var v=t.current;for(xe=v;xe!==null;){s=xe;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,xe=_;else e:for(s=v;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yl(9,a)}}catch(S){at(a,a.return,S)}if(a===s){xe=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,xe=M;break e}xe=a.return}}if(We=r,ur(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(Vl,t)}catch{}i=!0}return i}finally{$e=n,On.transition=e}}return!1}function ep(t,e,n){e=jo(n,e),e=p0(t,e,1),t=Yi(t,e,1),e=tn(),t!==null&&(la(t,1,e),fn(t,e))}function at(t,e,n){if(t.tag===3)ep(t,t,n);else for(;e!==null;){if(e.tag===3){ep(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ki===null||!Ki.has(i))){t=jo(n,t),t=m0(e,t,1),e=Yi(e,t,1),t=tn(),e!==null&&(la(e,1,t),fn(e,t));break}}e=e.return}}function ry(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Ot&n)===n&&(St===4||St===3&&(Ot&130023424)===Ot&&500>ut()-Af?Dr(t,0):Cf|=n),fn(t,e)}function k0(t,e){e===0&&(t.mode&1?(e=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):e=1);var n=tn();t=Li(t,e),t!==null&&(la(t,e,n),fn(t,n))}function oy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),k0(t,n)}function sy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),k0(t,n)}var z0;z0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,qx(t,e,n);cn=!!(t.flags&131072)}else cn=!1,it&&e.flags&1048576&&Ug(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sl(t,e),t=e.pendingProps;var r=Vo(e,$t.current);Io(e,n),r=Sf(null,e,i,t,r,n);var o=Mf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(o=!0,bl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gf(e),r.updater=ql,e.stateNode=r,r._reactInternals=e,sd(e,i,t,n),e=cd(null,e,i,!0,o,n)):(e.tag=0,it&&o&&cf(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(sl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ly(i),t=Xn(i,t),r){case 0:e=ld(null,e,i,t,n);break e;case 1:e=Wh(null,e,i,t,n);break e;case 11:e=Gh(null,e,i,t,n);break e;case 14:e=Hh(null,e,i,Xn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),ld(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Wh(t,e,i,r,n);case 3:e:{if(x0(e),t===null)throw Error(te(387));i=e.pendingProps,o=e.memoizedState,r=o.element,Hg(t,e),Pl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=jo(Error(te(423)),e),e=jh(t,e,i,n,r);break e}else if(i!==r){r=jo(Error(te(424)),e),e=jh(t,e,i,n,r);break e}else for(yn=$i(e.stateNode.containerInfo.firstChild),Mn=e,it=!0,$n=null,n=qg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Go(),i===r){e=Di(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return $g(e),t===null&&id(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Qu(i,r)?s=null:o!==null&&Qu(i,o)&&(e.flags|=32),_0(t,e),Jt(t,e,s,n),e.child;case 6:return t===null&&id(e),null;case 13:return y0(t,e,n);case 4:return vf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ho(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Gh(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,Ke(Cl,i._currentValue),i._currentValue=s,o!==null)if(Qn(o.value,s)){if(o.children===r.children&&!un.current){e=Di(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ei(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),rd(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(te(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),rd(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Io(e,n),r=Un(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),Hh(t,e,i,r,n);case 15:return g0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),sl(t,e),e.tag=1,dn(i)?(t=!0,bl(e)):t=!1,Io(e,n),jg(e,i,r),sd(e,i,r,n),cd(null,e,i,!0,t,n);case 19:return S0(t,e,n);case 22:return v0(t,e,n)}throw Error(te(156,e.tag))};function F0(t,e){return cg(t,e)}function ay(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new ay(t,e,n,i)}function Rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ly(t){if(typeof t=="function")return Rf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Zd)return 14}return 2}function Qi(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Rf(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case vo:return Rr(n.children,r,o,e);case Yd:s=8,r|=8;break;case Lu:return t=Fn(12,n,e,r|2),t.elementType=Lu,t.lanes=o,t;case Du:return t=Fn(13,n,e,r),t.elementType=Du,t.lanes=o,t;case Ru:return t=Fn(19,n,e,r),t.elementType=Ru,t.lanes=o,t;case Xm:return Zl(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wm:s=10;break e;case jm:s=9;break e;case Kd:s=11;break e;case Zd:s=14;break e;case Oi:s=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Fn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Rr(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function Zl(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=Xm,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function Uc(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,i,r,o,s,a,l){return t=new cy(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Fn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(o),t}function uy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:go,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function O0(t){if(!t)return rr;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(dn(n))return Fg(t,n,e)}return e}function U0(t,e,n,i,r,o,s,a,l){return t=Nf(n,i,!0,t,r,o,s,a,l),t.context=O0(null),n=t.current,i=tn(),r=Zi(n),o=Ei(i,r),o.callback=e??null,Yi(n,o,r),t.current.lanes=r,la(t,r,i),fn(t,i),t}function Ql(t,e,n,i){var r=e.current,o=tn(),s=Zi(r);return n=O0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Yi(r,e,s),t!==null&&(Zn(t,r,s,o),il(t,r,s)),s}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function If(t,e){tp(t,e),(t=t.alternate)&&tp(t,e)}function dy(){return null}var B0=typeof reportError=="function"?reportError:function(t){console.error(t)};function kf(t){this._internalRoot=t}Jl.prototype.render=kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Ql(t,e,null,null)};Jl.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){Ql(null,t,null,null)}),e[Pi]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=gg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&_g(t)}};function zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function np(){}function fy(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=Fl(s);o.call(c)}}var s=U0(e,i,t,0,null,!1,!1,"",np);return t._reactRootContainer=s,t[Pi]=s.current,js(t.nodeType===8?t.parentNode:t),Br(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Fl(l);a.call(c)}}var l=Nf(t,0,!1,null,null,!1,!1,"",np);return t._reactRootContainer=l,t[Pi]=l.current,js(t.nodeType===8?t.parentNode:t),Br(function(){Ql(e,l,n,i)}),l}function tc(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Fl(s);a.call(l)}}Ql(e,s,t,r)}else s=fy(n,e,t,r,i);return Fl(s)}pg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ms(e.pendingLanes);n!==0&&(ef(e,n|1),fn(e,ut()),!(We&6)&&(Xo=ut()+500,ur()))}break;case 13:Br(function(){var i=Li(t,1);if(i!==null){var r=tn();Zn(i,t,1,r)}}),If(t,1)}};tf=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=tn();Zn(e,t,134217728,n)}If(t,134217728)}};mg=function(t){if(t.tag===13){var e=Zi(t),n=Li(t,e);if(n!==null){var i=tn();Zn(n,t,e,i)}If(t,e)}};gg=function(){return $e};vg=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};Gu=function(t,e,n){switch(e){case"input":if(ku(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=jl(i);if(!r)throw Error(te(90));$m(i),ku(i,r)}}}break;case"textarea":Km(t,n);break;case"select":e=n.value,e!=null&&Lo(t,!!n.multiple,e,!1)}};ig=Pf;rg=Br;var hy={usingClientEntryPoint:!1,Events:[ua,So,jl,tg,ng,Pf]},fs={findFiberByHostInstance:Tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},py={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ag(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||dy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{Vl=Ra.inject(py),ai=Ra}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hy;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(e))throw Error(te(200));return uy(t,e,null,n)};Tn.createRoot=function(t,e){if(!zf(t))throw Error(te(299));var n=!1,i="",r=B0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,i,r),t[Pi]=e.current,js(t.nodeType===8?t.parentNode:t),new kf(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=ag(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Br(t)};Tn.hydrate=function(t,e,n){if(!ec(e))throw Error(te(200));return tc(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!zf(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=B0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=U0(e,null,t,1,n??null,r,!1,o,s),t[Pi]=e.current,js(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Jl(e)};Tn.render=function(t,e,n){if(!ec(e))throw Error(te(200));return tc(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!ec(t))throw Error(te(40));return t._reactRootContainer?(Br(function(){tc(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1};Tn.unstable_batchedUpdates=Pf;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ec(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return tc(t,e,n,!1,i)};Tn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Tn})(d_);var ip=Cu;Tu.createRoot=ip.createRoot,Tu.hydrateRoot=ip.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ea.apply(this,arguments)}var Wi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Wi||(Wi={}));const rp="popstate";function my(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return Sd("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Ol(r)}return vy(e,n,null,t)}function Mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ff(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gy(){return Math.random().toString(36).substr(2,8)}function op(t,e){return{usr:t.state,key:t.key,idx:e}}function Sd(t,e,n,i){return n===void 0&&(n=null),ea({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ts(e):e,{state:n,key:e&&e.key||i||gy()})}function Ol(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ts(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function vy(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=Wi.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(ea({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function f(){a=Wi.Pop;let p=u(),g=p==null?null:p-c;c=p,l&&l({action:a,location:h.location,delta:g})}function d(p,g){a=Wi.Push;let v=Sd(h.location,p,g);n&&n(v,p),c=u()+1;let _=op(v,c),M=h.createHref(v);try{s.pushState(_,"",M)}catch{r.location.assign(M)}o&&l&&l({action:a,location:h.location,delta:1})}function m(p,g){a=Wi.Replace;let v=Sd(h.location,p,g);n&&n(v,p),c=u();let _=op(v,c),M=h.createHref(v);s.replaceState(_,"",M),o&&l&&l({action:a,location:h.location,delta:0})}function x(p){let g=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:Ol(p);return Mt(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let h={get action(){return a},get location(){return t(r,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(rp,f),l=p,()=>{r.removeEventListener(rp,f),l=null}},createHref(p){return e(r,p)},createURL:x,encodeLocation(p){let g=x(p);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:m,go(p){return s.go(p)}};return h}var sp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(sp||(sp={}));function _y(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?ts(e):e,r=Of(i.pathname||"/",n);if(r==null)return null;let o=V0(t);xy(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Ay(o[a],Dy(r));return s}function V0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Mt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Ji([i,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(Mt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),V0(o.children,e,u,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:Ty(c,o.index),routesMeta:u})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of G0(o.path))r(o,s,l)}),e}function G0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=G0(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function xy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Cy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const yy=/^:\w+$/,Sy=3,My=2,wy=1,by=10,Ey=-2,ap=t=>t==="*";function Ty(t,e){let n=t.split("/"),i=n.length;return n.some(ap)&&(i+=Ey),e&&(i+=My),n.filter(r=>!ap(r)).reduce((r,o)=>r+(yy.test(o)?Sy:o===""?wy:by),i)}function Cy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function Ay(t,e){let{routesMeta:n}=t,i={},r="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,c=r==="/"?e:e.slice(r.length)||"/",u=Py({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(i,u.params);let f=a.route;o.push({params:i,pathname:Ji([r,u.pathname]),pathnameBase:ky(Ji([r,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(r=Ji([r,u.pathnameBase]))}return o}function Py(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Ly(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,f)=>{if(u==="*"){let d=a[f]||"";s=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return c[u]=Ry(a[f]||"",u),c},{}),pathname:o,pathnameBase:s,pattern:t}}function Ly(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ff(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(i.push(a),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function Dy(t){try{return decodeURI(t)}catch(e){return Ff(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ry(t,e){try{return decodeURIComponent(t)}catch(n){return Ff(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Of(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function Ny(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ts(t):t;return{pathname:n?n.startsWith("/")?n:Iy(n,e):e,search:zy(i),hash:Fy(r)}}function Iy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Bc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function H0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function W0(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ts(t):(r=ea({},t),Mt(!r.pathname||!r.pathname.includes("?"),Bc("?","pathname","search",r)),Mt(!r.pathname||!r.pathname.includes("#"),Bc("#","pathname","hash",r)),Mt(!r.search||!r.search.includes("#"),Bc("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(i||s==null)a=n;else{let f=e.length-1;if(s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=Ny(r,a),c=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Ji=t=>t.join("/").replace(/\/\/+/g,"/"),ky=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),zy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Fy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Oy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Uy=["post","put","patch","delete"];[...Uy];/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function By(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const Vy=typeof Object.is=="function"?Object.is:By,{useState:Gy,useEffect:Hy,useLayoutEffect:Wy,useDebugValue:jy}=Eu;function Xy(t,e,n){const i=e(),[{inst:r},o]=Gy({inst:{value:i,getSnapshot:e}});return Wy(()=>{r.value=i,r.getSnapshot=e,Vc(r)&&o({inst:r})},[t,i,e]),Hy(()=>(Vc(r)&&o({inst:r}),t(()=>{Vc(r)&&o({inst:r})})),[t]),jy(i),i}function Vc(t){const e=t.getSnapshot,n=t.value;try{const i=e();return!Vy(n,i)}catch{return!0}}function qy(t,e,n){return e()}const $y=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yy=!$y,Ky=Yy?qy:Xy;"useSyncExternalStore"in Eu&&(t=>t.useSyncExternalStore)(Eu);const j0=de.createContext(null),X0=de.createContext(null),fa=de.createContext(null),nc=de.createContext(null),ns=de.createContext({outlet:null,matches:[]}),q0=de.createContext(null);function Md(){return Md=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Md.apply(this,arguments)}function Zy(t,e){let{relative:n}=e===void 0?{}:e;ha()||Mt(!1);let{basename:i,navigator:r}=de.useContext(fa),{hash:o,pathname:s,search:a}=$0(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:Ji([i,s])),r.createHref({pathname:l,search:a,hash:o})}function ha(){return de.useContext(nc)!=null}function ic(){return ha()||Mt(!1),de.useContext(nc).location}function Qy(){ha()||Mt(!1);let{basename:t,navigator:e}=de.useContext(fa),{matches:n}=de.useContext(ns),{pathname:i}=ic(),r=JSON.stringify(H0(n).map(a=>a.pathnameBase)),o=de.useRef(!1);return de.useEffect(()=>{o.current=!0}),de.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){e.go(a);return}let c=W0(a,JSON.parse(r),i,l.relative==="path");t!=="/"&&(c.pathname=c.pathname==="/"?t:Ji([t,c.pathname])),(l.replace?e.replace:e.push)(c,l.state,l)},[t,e,r,i])}function $0(t,e){let{relative:n}=e===void 0?{}:e,{matches:i}=de.useContext(ns),{pathname:r}=ic(),o=JSON.stringify(H0(i).map(s=>s.pathnameBase));return de.useMemo(()=>W0(t,JSON.parse(o),r,n==="path"),[t,o,r,n])}function Jy(t,e){ha()||Mt(!1);let{navigator:n}=de.useContext(fa),i=de.useContext(X0),{matches:r}=de.useContext(ns),o=r[r.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=ic(),c;if(e){var u;let h=typeof e=="string"?ts(e):e;a==="/"||(u=h.pathname)!=null&&u.startsWith(a)||Mt(!1),c=h}else c=l;let f=c.pathname||"/",d=a==="/"?f:f.slice(a.length)||"/",m=_y(t,{pathname:d}),x=iS(m&&m.map(h=>Object.assign({},h,{params:Object.assign({},s,h.params),pathname:Ji([a,n.encodeLocation?n.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?a:Ji([a,n.encodeLocation?n.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),r,i||void 0);return e&&x?de.createElement(nc.Provider,{value:{location:Md({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Wi.Pop}},x):x}function eS(){let t=aS(),e=Oy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),n?de.createElement("pre",{style:r},n):null,o)}class tS extends de.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?de.createElement(ns.Provider,{value:this.props.routeContext},de.createElement(q0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nS(t){let{routeContext:e,match:n,children:i}=t,r=de.useContext(j0);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),de.createElement(ns.Provider,{value:e},i)}function iS(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let i=t,r=n?.errors;if(r!=null){let o=i.findIndex(s=>s.route.id&&r?.[s.route.id]);o>=0||Mt(!1),i=i.slice(0,Math.min(i.length,o+1))}return i.reduceRight((o,s,a)=>{let l=s.route.id?r?.[s.route.id]:null,c=null;n&&(s.route.ErrorBoundary?c=de.createElement(s.route.ErrorBoundary,null):s.route.errorElement?c=s.route.errorElement:c=de.createElement(eS,null));let u=e.concat(i.slice(0,a+1)),f=()=>{let d=o;return l?d=c:s.route.Component?d=de.createElement(s.route.Component,null):s.route.element&&(d=s.route.element),de.createElement(nS,{match:s,routeContext:{outlet:o,matches:u},children:d})};return n&&(s.route.ErrorBoundary||s.route.errorElement||a===0)?de.createElement(tS,{location:n.location,component:c,error:l,children:f(),routeContext:{outlet:null,matches:u}}):f()},null)}var lp;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(lp||(lp={}));var Ul;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Ul||(Ul={}));function rS(t){let e=de.useContext(X0);return e||Mt(!1),e}function oS(t){let e=de.useContext(ns);return e||Mt(!1),e}function sS(t){let e=oS(),n=e.matches[e.matches.length-1];return n.route.id||Mt(!1),n.route.id}function aS(){var t;let e=de.useContext(q0),n=rS(Ul.UseRouteError),i=sS(Ul.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function po(t){Mt(!1)}function lS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Wi.Pop,navigator:o,static:s=!1}=t;ha()&&Mt(!1);let a=e.replace(/^\/*/,"/"),l=de.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof i=="string"&&(i=ts(i));let{pathname:c="/",search:u="",hash:f="",state:d=null,key:m="default"}=i,x=de.useMemo(()=>{let h=Of(c,a);return h==null?null:{location:{pathname:h,search:u,hash:f,state:d,key:m},navigationType:r}},[a,c,u,f,d,m,r]);return x==null?null:de.createElement(fa.Provider,{value:l},de.createElement(nc.Provider,{children:n,value:x}))}function cS(t){let{children:e,location:n}=t,i=de.useContext(j0),r=i&&!e?i.router.routes:wd(e);return Jy(r,n)}var cp;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(cp||(cp={}));new Promise(()=>{});function wd(t,e){e===void 0&&(e=[]);let n=[];return de.Children.forEach(t,(i,r)=>{if(!de.isValidElement(i))return;if(i.type===de.Fragment){n.push.apply(n,wd(i.props.children,e));return}i.type!==po&&Mt(!1),!i.props.index||!i.props.children||Mt(!1);let o=[...e,r],s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=wd(i.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bd(){return bd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},bd.apply(this,arguments)}function uS(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function dS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function fS(t,e){return t.button===0&&(!e||e==="_self")&&!dS(t)}const hS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function pS(t){let{basename:e,children:n,window:i}=t,r=de.useRef();r.current==null&&(r.current=my({window:i,v5Compat:!0}));let o=r.current,[s,a]=de.useState({action:o.action,location:o.location});return de.useLayoutEffect(()=>o.listen(a),[o]),de.createElement(lS,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:o})}const mS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bs=de.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:u}=e,f=uS(e,hS),{basename:d}=de.useContext(fa),m,x=!1;if(typeof c=="string"&&gS.test(c)&&(m=c,mS)){let v=new URL(window.location.href),_=c.startsWith("//")?new URL(v.protocol+c):new URL(c),M=Of(_.pathname,d);_.origin===v.origin&&M!=null?c=M+_.search+_.hash:x=!0}let h=Zy(c,{relative:r}),p=vS(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:r});function g(v){i&&i(v),v.defaultPrevented||p(v)}return de.createElement("a",bd({},f,{href:m||h,onClick:x||o?i:g,ref:n,target:l}))});var up;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(up||(up={}));var dp;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(dp||(dp={}));function vS(t,e){let{target:n,replace:i,state:r,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=Qy(),l=ic(),c=$0(t,{relative:s});return de.useCallback(u=>{if(fS(u,n)){u.preventDefault();let f=i!==void 0?i:Ol(l)===Ol(c);a(t,{replace:f,state:r,preventScrollReset:o,relative:s})}},[l,a,c,i,r,n,t,o,s])}const _S="modulepreload",xS=function(t){return"/Builder3D/"+t},fp={},hp=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=xS(o),o in fp)return;fp[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const f=r[u];if(f.href===o&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":_S,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="149",Zr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yS=0,pp=1,SS=2,Y0=1,K0=2,Es=3,or=0,wn=1,kt=2,er=0,zo=1,mp=2,gp=3,vp=4,MS=5,mo=100,wS=101,bS=102,_p=103,xp=104,ES=200,TS=201,CS=202,AS=203,Z0=204,Q0=205,PS=206,LS=207,DS=208,RS=209,NS=210,IS=0,kS=1,zS=2,Ed=3,FS=4,OS=5,US=6,BS=7,J0=0,VS=1,GS=2,Ti=0,HS=1,WS=2,jS=3,XS=4,qS=5,ev=300,qo=301,$o=302,Td=303,Cd=304,rc=306,si=1e3,Yn=1001,Ad=1002,yt=1003,yp=1004,Gc=1005,In=1006,$S=1007,ta=1008,Vr=1009,YS=1010,KS=1011,tv=1012,ZS=1013,Pr=1014,Lr=1015,na=1016,QS=1017,JS=1018,Fo=1020,e1=1021,zn=1023,t1=1024,n1=1025,Nr=1026,Yo=1027,i1=1028,r1=1029,o1=1030,s1=1031,a1=1033,Hc=33776,Wc=33777,jc=33778,Xc=33779,Sp=35840,Mp=35841,wp=35842,bp=35843,l1=36196,Ep=37492,Tp=37496,Cp=37808,Ap=37809,Pp=37810,Lp=37811,Dp=37812,Rp=37813,Np=37814,Ip=37815,kp=37816,zp=37817,Fp=37818,Op=37819,Up=37820,Bp=37821,qc=36492,c1=36283,Vp=36284,Gp=36285,Hp=36286,Gr=3e3,Qe=3001,u1=3200,d1=3201,f1=0,h1=1,ni="srgb",ia="srgb-linear",$c=7680,p1=519,Wp=35044,jp="300 es",Pd=1035;class $r{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,Xp=180/Math.PI;function pa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function ln(t,e,n){return Math.max(e,Math.min(n,t))}function m1(t,e){return(t%e+e)%e}function Kc(t,e,n){return(1-n)*t+n*e}function qp(t){return(t&t-1)===0&&t!==0}function Ld(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Na(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,n=0){ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Sn{constructor(){Sn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=o,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],x=i[8],h=r[0],p=r[3],g=r[6],v=r[1],_=r[4],M=r[7],S=r[2],C=r[5],P=r[8];return o[0]=s*h+a*v+l*S,o[3]=s*p+a*_+l*C,o[6]=s*g+a*M+l*P,o[1]=c*h+u*v+f*S,o[4]=c*p+u*_+f*C,o[7]=c*g+u*M+f*P,o[2]=d*h+m*v+x*S,o[5]=d*p+m*_+x*C,o[8]=d*g+m*M+x*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*a*c-i*o*u+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*s-a*c,d=a*l-u*o,m=c*o-s*l,x=n*f+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/x;return e[0]=f*h,e[1]=(r*c-u*i)*h,e[2]=(a*i-r*s)*h,e[3]=d*h,e[4]=(u*n-r*l)*h,e[5]=(r*o-a*n)*h,e[6]=m*h,e[7]=(i*l-c*n)*h,e[8]=(s*n-i*o)*h,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Zc.makeScale(e,n)),this}rotate(e){return this.premultiply(Zc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Zc.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zc=new Sn;function nv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ra(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ir(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ul(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Qc={[ni]:{[ia]:Ir},[ia]:{[ni]:ul}},Zt={legacyMode:!0,get workingColorSpace(){return ia},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(Qc[e]&&Qc[e][n]!==void 0){const i=Qc[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},iv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gt={r:0,g:0,b:0},Gn={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function Jc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function ka(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Zt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Zt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Zt.workingColorSpace){if(e=m1(e,1),n=ln(n,0,1),i=ln(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Jc(s,o,e+1/3),this.g=Jc(s,o,e),this.b=Jc(s,o,e-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(e,n=ni){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,Zt.toWorkingColorSpace(this,n),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,Zt.toWorkingColorSpace(this,n),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(o[1])/360,c=parseFloat(o[2])/100,u=parseFloat(o[3])/100;return i(o[4]),this.setHSL(l,c,u,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,Zt.toWorkingColorSpace(this,n),this;if(s===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,Zt.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=ni){const i=iv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=ul(e.r),this.g=ul(e.g),this.b=ul(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Zt.fromWorkingColorSpace(ka(this,gt),e),ln(gt.r*255,0,255)<<16^ln(gt.g*255,0,255)<<8^ln(gt.b*255,0,255)<<0}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Zt.workingColorSpace){Zt.fromWorkingColorSpace(ka(this,gt),n);const i=gt.r,r=gt.g,o=gt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const f=s-a;switch(c=u<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(ka(this,gt),n),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=ni){return Zt.fromWorkingColorSpace(ka(this,gt),e),e!==ni?`color(${e} ${gt.r} ${gt.g} ${gt.b})`:`rgb(${gt.r*255|0},${gt.g*255|0},${gt.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(Gn),Gn.h+=e,Gn.s+=n,Gn.l+=i,this.setHSL(Gn.h,Gn.s,Gn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Gn),e.getHSL(Ia);const i=Kc(Gn.h,Ia.h,n),r=Kc(Gn.s,Ia.s,n),o=Kc(Gn.l,Ia.l,n);return this.setHSL(i,r,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}et.NAMES=iv;let Jr;class rv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jr===void 0&&(Jr=ra("canvas")),Jr.width=e.width,Jr.height=e.height;const i=Jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Jr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ra("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ir(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ir(n[i]/255)*255):n[i]=Ir(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ov{constructor(e=null){this.isSource=!0,this.uuid=pa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(eu(r[s].image)):o.push(eu(r[s]))}else o=eu(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function eu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?rv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let g1=0;class hn extends $r{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Yn,r=Yn,o=In,s=ta,a=zn,l=Vr,c=hn.DEFAULT_ANISOTROPY,u=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=pa(),this.name="",this.source=new ov(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Sn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ev)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case si:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case si:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=ev;hn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],x=l[9],h=l[2],p=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-h)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+h)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(m+1)/2,S=(g+1)/2,C=(u+d)/4,P=(f+h)/4,y=(x+p)/4;return _>M&&_>S?_<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(_),r=C/i,o=P/i):M>S?M<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(M),i=C/r,o=y/r):S<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(S),i=P/o,r=y/o),this.set(i,r,o,n),this}let v=Math.sqrt((p-x)*(p-x)+(f-h)*(f-h)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(f-h)/v,this.z=(d-u)/v,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hr extends $r{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:In,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ov(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sv extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class v1 extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=yt,this.minFilter=yt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=o[s+0],m=o[s+1],x=o[s+2],h=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=x,e[n+3]=h;return}if(f!==h||l!==d||c!==m||u!==x){let p=1-a;const g=l*d+c*m+u*x+f*h,v=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const S=Math.sqrt(_),C=Math.atan2(S,g*v);p=Math.sin(p*C)/S,a=Math.sin(a*C)/S}const M=a*v;if(l=l*p+d*M,c=c*p+m*M,u=u*p+x*M,f=f*p+h*M,p===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=o[s],d=o[s+1],m=o[s+2],x=o[s+3];return e[n]=a*x+u*f+l*m-c*d,e[n+1]=l*x+u*d+c*f-a*m,e[n+2]=c*x+u*m+a*d-l*f,e[n+3]=u*x-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(o/2),d=l(i/2),m=l(r/2),x=l(o/2);switch(s){case"XYZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"YXZ":this._x=d*u*f+c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"ZXY":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f-d*m*x;break;case"ZYX":this._x=d*u*f-c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f+d*m*x;break;case"YZX":this._x=d*u*f+c*m*x,this._y=c*m*f+d*u*x,this._z=c*u*x-d*m*f,this._w=c*u*f-d*m*x;break;case"XZY":this._x=d*u*f-c*m*x,this._y=c*m*f-d*u*x,this._z=c*u*x+d*m*f,this._w=c*u*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-i*c,this._z=o*u+s*c+i*l-r*a,this._w=s*u-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=s*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=l*n+s*r-a*i,u=l*i+a*n-o*r,f=l*r+o*i-s*n,d=-o*n-s*i-a*r;return this.x=c*l+d*-o+u*-a-f*-s,this.y=u*l+d*-s+f*-o-c*-a,this.z=f*l+d*-a+c*-s-u*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tu=new V,$p=new Wr;class ma{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<n&&(n=u),f<i&&(i=f),d<r&&(r=d),u>o&&(o=u),f>s&&(s=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(o,s,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<n&&(n=u),f<i&&(i=f),d<r&&(r=d),u>o&&(o=u),f>s&&(s=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(o,s,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=mr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const o=i.attributes.position;for(let s=0,a=o.count;s<a;s++)mr.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(mr)}else i.boundingBox===null&&i.computeBoundingBox(),nu.copy(i.boundingBox),nu.applyMatrix4(e.matrixWorld),this.union(nu);const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mr),mr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),za.subVectors(this.max,hs),eo.subVectors(e.a,hs),to.subVectors(e.b,hs),no.subVectors(e.c,hs),Ii.subVectors(to,eo),ki.subVectors(no,to),gr.subVectors(eo,no);let n=[0,-Ii.z,Ii.y,0,-ki.z,ki.y,0,-gr.z,gr.y,Ii.z,0,-Ii.x,ki.z,0,-ki.x,gr.z,0,-gr.x,-Ii.y,Ii.x,0,-ki.y,ki.x,0,-gr.y,gr.x,0];return!iu(n,eo,to,no,za)||(n=[1,0,0,0,1,0,0,0,1],!iu(n,eo,to,no,za))?!1:(Fa.crossVectors(Ii,ki),n=[Fa.x,Fa.y,Fa.z],iu(n,eo,to,no,za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return mr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(mr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new V,new V,new V,new V,new V,new V,new V,new V],mr=new V,nu=new ma,eo=new V,to=new V,no=new V,Ii=new V,ki=new V,gr=new V,hs=new V,za=new V,Fa=new V,vr=new V;function iu(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){vr.fromArray(t,o);const a=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=n.dot(vr),u=i.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const _1=new ma,ps=new V,ru=new V;class Bf{constructor(e=new V,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_1.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const n=ps.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ps,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(ru)),this.expandByPoint(ps.copy(e.center).sub(ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new V,ou=new V,Oa=new V,zi=new V,su=new V,Ua=new V,au=new V;class av{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.direction).multiplyScalar(n).add(this.origin),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ou.copy(e).add(n).multiplyScalar(.5),Oa.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(ou);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Oa),a=zi.dot(this.direction),l=-zi.dot(Oa),c=zi.lengthSq(),u=Math.abs(1-s*s);let f,d,m,x;if(u>0)if(f=s*l-a,d=s*a-l,x=o*u,f>=0)if(d>=-x)if(d<=x){const h=1/u;f*=h,d*=h,m=f*(f+s*d+2*a)+d*(s*f+d+2*l)+c}else d=o,f=Math.max(0,-(s*d+a)),m=-f*f+d*(d+2*l)+c;else d=-o,f=Math.max(0,-(s*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-s*o+a)),d=f>0?-o:Math.min(Math.max(-o,-l),o),m=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-o,-l),o),m=d*(d+2*l)+c):(f=Math.max(0,-(s*o+a)),d=f>0?o:Math.min(Math.max(-o,-l),o),m=-f*f+d*(d+2*l)+c);else d=s>0?-o:o,f=Math.max(0,-(s*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Oa).multiplyScalar(d).add(ou),m}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,o){su.subVectors(n,e),Ua.subVectors(i,e),au.crossVectors(su,Ua);let s=this.direction.dot(au),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(Ua.crossVectors(zi,Ua));if(l<0)return null;const c=a*this.direction.dot(su.cross(zi));if(c<0||l+c>s)return null;const u=-a*zi.dot(au);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,o,s,a,l,c,u,f,d,m,x,h,p){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=o,g[5]=s,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=d,g[3]=m,g[7]=x,g[11]=h,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/io.setFromMatrixColumn(e,0).length(),o=1/io.setFromMatrixColumn(e,1).length(),s=1/io.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const d=s*u,m=s*f,x=a*u,h=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+x*c,n[5]=d-h*c,n[9]=-a*l,n[2]=h-d*c,n[6]=x+m*c,n[10]=s*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,x=c*u,h=c*f;n[0]=d+h*a,n[4]=x*a-m,n[8]=s*c,n[1]=s*f,n[5]=s*u,n[9]=-a,n[2]=m*a-x,n[6]=h+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,x=c*u,h=c*f;n[0]=d-h*a,n[4]=-s*f,n[8]=x+m*a,n[1]=m+x*a,n[5]=s*u,n[9]=h-d*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*u,m=s*f,x=a*u,h=a*f;n[0]=l*u,n[4]=x*c-m,n[8]=d*c+h,n[1]=l*f,n[5]=h*c+d,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,m=s*c,x=a*l,h=a*c;n[0]=l*u,n[4]=h-d*f,n[8]=x*f+m,n[1]=f,n[5]=s*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*f+x,n[10]=d-h*f}else if(e.order==="XZY"){const d=s*l,m=s*c,x=a*l,h=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+h,n[5]=s*u,n[9]=m*f-x,n[2]=x*f-m,n[6]=a*u,n[10]=h*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(x1,e,y1)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Fi.crossVectors(i,vn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Fi.crossVectors(i,vn)),Fi.normalize(),Ba.crossVectors(vn,Fi),r[0]=Fi.x,r[4]=Ba.x,r[8]=vn.x,r[1]=Fi.y,r[5]=Ba.y,r[9]=vn.y,r[2]=Fi.z,r[6]=Ba.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],x=i[2],h=i[6],p=i[10],g=i[14],v=i[3],_=i[7],M=i[11],S=i[15],C=r[0],P=r[4],y=r[8],T=r[12],R=r[1],K=r[5],J=r[9],O=r[13],z=r[2],$=r[6],Q=r[10],ee=r[14],I=r[3],G=r[7],W=r[11],se=r[15];return o[0]=s*C+a*R+l*z+c*I,o[4]=s*P+a*K+l*$+c*G,o[8]=s*y+a*J+l*Q+c*W,o[12]=s*T+a*O+l*ee+c*se,o[1]=u*C+f*R+d*z+m*I,o[5]=u*P+f*K+d*$+m*G,o[9]=u*y+f*J+d*Q+m*W,o[13]=u*T+f*O+d*ee+m*se,o[2]=x*C+h*R+p*z+g*I,o[6]=x*P+h*K+p*$+g*G,o[10]=x*y+h*J+p*Q+g*W,o[14]=x*T+h*O+p*ee+g*se,o[3]=v*C+_*R+M*z+S*I,o[7]=v*P+_*K+M*$+S*G,o[11]=v*y+_*J+M*Q+S*W,o[15]=v*T+_*O+M*ee+S*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],x=e[3],h=e[7],p=e[11],g=e[15];return x*(+o*l*f-r*c*f-o*a*d+i*c*d+r*a*m-i*l*m)+h*(+n*l*m-n*c*d+o*s*d-r*s*m+r*c*u-o*l*u)+p*(+n*c*f-n*a*m-o*s*f+i*s*m+o*a*u-i*c*u)+g*(-r*a*u-n*l*f+n*a*d+r*s*f-i*s*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],x=e[12],h=e[13],p=e[14],g=e[15],v=f*p*c-h*d*c+h*l*m-a*p*m-f*l*g+a*d*g,_=x*d*c-u*p*c-x*l*m+s*p*m+u*l*g-s*d*g,M=u*h*c-x*f*c+x*a*m-s*h*m-u*a*g+s*f*g,S=x*f*l-u*h*l-x*a*d+s*h*d+u*a*p-s*f*p,C=n*v+i*_+r*M+o*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=v*P,e[1]=(h*d*o-f*p*o-h*r*m+i*p*m+f*r*g-i*d*g)*P,e[2]=(a*p*o-h*l*o+h*r*c-i*p*c-a*r*g+i*l*g)*P,e[3]=(f*l*o-a*d*o-f*r*c+i*d*c+a*r*m-i*l*m)*P,e[4]=_*P,e[5]=(u*p*o-x*d*o+x*r*m-n*p*m-u*r*g+n*d*g)*P,e[6]=(x*l*o-s*p*o-x*r*c+n*p*c+s*r*g-n*l*g)*P,e[7]=(s*d*o-u*l*o+u*r*c-n*d*c-s*r*m+n*l*m)*P,e[8]=M*P,e[9]=(x*f*o-u*h*o-x*i*m+n*h*m+u*i*g-n*f*g)*P,e[10]=(s*h*o-x*a*o+x*i*c-n*h*c-s*i*g+n*a*g)*P,e[11]=(u*a*o-s*f*o-u*i*c+n*f*c+s*i*m-n*a*m)*P,e[12]=S*P,e[13]=(u*h*r-x*f*r+x*i*d-n*h*d-u*i*p+n*f*p)*P,e[14]=(x*a*r-s*h*r-x*i*l+n*h*l+s*i*p-n*a*p)*P,e[15]=(s*f*r-u*a*r+u*i*l-n*f*l-s*i*d+n*a*d)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,u=s+s,f=a+a,d=o*c,m=o*u,x=o*f,h=s*u,p=s*f,g=a*f,v=l*c,_=l*u,M=l*f,S=i.x,C=i.y,P=i.z;return r[0]=(1-(h+g))*S,r[1]=(m+M)*S,r[2]=(x-_)*S,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(d+g))*C,r[6]=(p+v)*C,r[7]=0,r[8]=(x+_)*P,r[9]=(p-v)*P,r[10]=(1-(d+h))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=io.set(r[0],r[1],r[2]).length();const s=io.set(r[4],r[5],r[6]).length(),a=io.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const c=1/o,u=1/s,f=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,n.setFromRotationMatrix(Hn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s){const a=this.elements,l=2*o/(n-e),c=2*o/(i-r),u=(n+e)/(n-e),f=(i+r)/(i-r),d=-(s+o)/(s-o),m=-2*s*o/(s-o);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,o,s){const a=this.elements,l=1/(n-e),c=1/(i-r),u=1/(s-o),f=(n+e)*l,d=(i+r)*c,m=(s+o)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const io=new V,Hn=new Ut,x1=new V(0,0,0),y1=new V(1,1,1),Fi=new V,Ba=new V,vn=new V,Yp=new Ut,Kp=new Wr;class oc{constructor(e=0,n=0,i=0,r=oc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ln(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oc.DEFAULT_ORDER="XYZ";class Vf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let S1=0;const Zp=new V,ro=new Wr,pi=new Ut,Va=new V,ms=new V,M1=new V,w1=new Wr,Qp=new V(1,0,0),Jp=new V(0,1,0),em=new V(0,0,1),b1={type:"added"},tm={type:"removed"};class bn extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new V,n=new oc,i=new Wr,r=new V(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Sn}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Vf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ro.setFromAxisAngle(e,n),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,n){return ro.setFromAxisAngle(e,n),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,n){return Zp.copy(e).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Va.copy(e):Va.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(ms,Va,this.up):pi.lookAt(Va,ms,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),ro.setFromRotationMatrix(pi),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(b1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(tm)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,M1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,w1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),d=s(e.skeletons),m=s(e.animations),x=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bn.DEFAULT_UP=new V(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new V,mi=new V,lu=new V,gi=new V,oo=new V,so=new V,nm=new V,cu=new V,uu=new V,du=new V;class yi{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Wn.subVectors(r,n),mi.subVectors(i,n),lu.subVectors(e,n);const s=Wn.dot(Wn),a=Wn.dot(mi),l=Wn.dot(lu),c=mi.dot(mi),u=mi.dot(lu),f=s*c-a*a;if(f===0)return o.set(-2,-1,-1);const d=1/f,m=(c*l-a*u)*d,x=(s*u-a*l)*d;return o.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi),gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,gi),l.set(0,0),l.addScaledVector(o,gi.x),l.addScaledVector(s,gi.y),l.addScaledVector(a,gi.z),l}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),mi.subVectors(e,n),Wn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Wn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return yi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return yi.getUV(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;oo.subVectors(r,i),so.subVectors(o,i),cu.subVectors(e,i);const l=oo.dot(cu),c=so.dot(cu);if(l<=0&&c<=0)return n.copy(i);uu.subVectors(e,r);const u=oo.dot(uu),f=so.dot(uu);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(oo,s);du.subVectors(e,o);const m=oo.dot(du),x=so.dot(du);if(x>=0&&m<=x)return n.copy(o);const h=m*c-l*x;if(h<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(so,a);const p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return nm.subVectors(o,r),a=(f-u)/(f-u+(m-x)),n.copy(r).addScaledVector(nm,a);const g=1/(p+h+d);return s=h*g,a=d*g,n.copy(i).addScaledVector(oo,s).addScaledVector(so,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let E1=0;class sc extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=pa(),this.name="",this.type="Material",this.blending=zo,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Z0,this.blendDst=Q0,this.blendEquation=mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ed,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$c,this.stencilZFail=$c,this.stencilZPass=$c,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(i.blending=this.blending),this.side!==or&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lt extends sc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=J0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new V,Ga=new ze;class ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ga.fromBufferAttribute(this,n),Ga.applyMatrix3(e),this.setXY(n,Ga.x,Ga.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix3(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix4(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyNormalMatrix(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.transformDirection(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Na(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Na(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Na(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Na(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),o=gn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class lv extends ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class cv extends ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kr extends ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let T1=0;const Ln=new Ut,fu=new bn,ao=new V,_n=new ma,gs=new ma,At=new V;class Yr extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nv(e)?cv:lv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Sn().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return fu.lookAt(e),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new kr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];_n.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(_n.min,gs.min),_n.expandByPoint(At),At.addVectors(_n.max,gs.max),_n.expandByPoint(At)):(_n.expandByPoint(gs.min),_n.expandByPoint(gs.max))}_n.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)At.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(At));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(ao.fromBufferAttribute(e,c),At.add(ao)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new V,u[R]=new V;const f=new V,d=new V,m=new V,x=new ze,h=new ze,p=new ze,g=new V,v=new V;function _(R,K,J){f.fromArray(r,R*3),d.fromArray(r,K*3),m.fromArray(r,J*3),x.fromArray(s,R*2),h.fromArray(s,K*2),p.fromArray(s,J*2),d.sub(f),m.sub(f),h.sub(x),p.sub(x);const O=1/(h.x*p.y-p.x*h.y);isFinite(O)&&(g.copy(d).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(O),v.copy(m).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(O),c[R].add(g),c[K].add(g),c[J].add(g),u[R].add(v),u[K].add(v),u[J].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let R=0,K=M.length;R<K;++R){const J=M[R],O=J.start,z=J.count;for(let $=O,Q=O+z;$<Q;$+=3)_(i[$+0],i[$+1],i[$+2])}const S=new V,C=new V,P=new V,y=new V;function T(R){P.fromArray(o,R*3),y.copy(P);const K=c[R];S.copy(K),S.sub(P.multiplyScalar(P.dot(K))).normalize(),C.crossVectors(y,K);const O=C.dot(u[R])<0?-1:1;l[R*4]=S.x,l[R*4+1]=S.y,l[R*4+2]=S.z,l[R*4+3]=O}for(let R=0,K=M.length;R<K;++R){const J=M[R],O=J.start,z=J.count;for(let $=O,Q=O+z;$<Q;$+=3)T(i[$+0]),T(i[$+1]),T(i[$+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new V,o=new V,s=new V,a=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),h=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,h),s.fromBufferAttribute(n,p),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,h),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)At.fromBufferAttribute(e,n),At.normalize(),e.setXYZ(n,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,x=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*u;for(let g=0;g<u;g++)d[x++]=c[m++]}return new ci(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],f=o[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new Ut,lo=new av,hu=new Bf,vs=new V,_s=new V,xs=new V,pu=new V,Ha=new V,Wa=new ze,ja=new ze,Xa=new ze,mu=new V,qa=new V;class Je extends bn{constructor(e=new Yr,n=new lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Ha.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],f=o[l];u!==0&&(pu.fromBufferAttribute(f,e),s?Ha.addScaledVector(pu,u):Ha.addScaledVector(pu.sub(n),u))}n.add(Ha)}return this.isSkinnedMesh&&this.boneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),hu.copy(i.boundingSphere),hu.applyMatrix4(o),e.ray.intersectsSphere(hu)===!1)||(im.copy(o).invert(),lo.copy(e.ray).applyMatrix4(im),i.boundingBox!==null&&lo.intersectsBox(i.boundingBox)===!1))return;let s;const a=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,d=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const h=f[m],p=r[h.materialIndex],g=Math.max(h.start,d.start),v=Math.min(a.count,Math.min(h.start+h.count,d.start+d.count));for(let _=g,M=v;_<M;_+=3){const S=a.getX(_),C=a.getX(_+1),P=a.getX(_+2);s=$a(this,p,e,lo,c,u,S,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=h.materialIndex,n.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let h=m,p=x;h<p;h+=3){const g=a.getX(h),v=a.getX(h+1),_=a.getX(h+2);s=$a(this,r,e,lo,c,u,g,v,_),s&&(s.faceIndex=Math.floor(h/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const h=f[m],p=r[h.materialIndex],g=Math.max(h.start,d.start),v=Math.min(l.count,Math.min(h.start+h.count,d.start+d.count));for(let _=g,M=v;_<M;_+=3){const S=_,C=_+1,P=_+2;s=$a(this,p,e,lo,c,u,S,C,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=h.materialIndex,n.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let h=m,p=x;h<p;h+=3){const g=h,v=h+1,_=h+2;s=$a(this,r,e,lo,c,u,g,v,_),s&&(s.faceIndex=Math.floor(h/3),n.push(s))}}}}function C1(t,e,n,i,r,o,s,a){let l;if(e.side===wn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===or,a),l===null)return null;qa.copy(a),qa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(qa);return c<n.near||c>n.far?null:{distance:c,point:qa.clone(),object:t}}function $a(t,e,n,i,r,o,s,a,l){t.getVertexPosition(s,vs),t.getVertexPosition(a,_s),t.getVertexPosition(l,xs);const c=C1(t,e,n,i,vs,_s,xs,mu);if(c){r&&(Wa.fromBufferAttribute(r,s),ja.fromBufferAttribute(r,a),Xa.fromBufferAttribute(r,l),c.uv=yi.getUV(mu,vs,_s,xs,Wa,ja,Xa,new ze)),o&&(Wa.fromBufferAttribute(o,s),ja.fromBufferAttribute(o,a),Xa.fromBufferAttribute(o,l),c.uv2=yi.getUV(mu,vs,_s,xs,Wa,ja,Xa,new ze));const u={a:s,b:a,c:l,normal:new V,materialIndex:0};yi.getNormal(vs,_s,xs,u.normal),c.face=u}return c}class Lt extends Yr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],f=[];let d=0,m=0;x("z","y","x",-1,-1,i,n,e,s,o,0),x("z","y","x",1,-1,i,n,-e,s,o,1),x("x","z","y",1,1,e,i,n,r,s,2),x("x","z","y",1,-1,e,i,-n,r,s,3),x("x","y","z",1,-1,e,n,i,r,o,4),x("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new kr(c,3)),this.setAttribute("normal",new kr(u,3)),this.setAttribute("uv",new kr(f,2));function x(h,p,g,v,_,M,S,C,P,y,T){const R=M/P,K=S/y,J=M/2,O=S/2,z=C/2,$=P+1,Q=y+1;let ee=0,I=0;const G=new V;for(let W=0;W<Q;W++){const se=W*K-O;for(let U=0;U<$;U++){const Z=U*R-J;G[h]=Z*v,G[p]=se*_,G[g]=z,c.push(G.x,G.y,G.z),G[h]=0,G[p]=0,G[g]=C>0?1:-1,u.push(G.x,G.y,G.z),f.push(U/P),f.push(1-W/y),ee+=1}}for(let W=0;W<y;W++)for(let se=0;se<P;se++){const U=d+se+$*W,Z=d+se+$*(W+1),re=d+(se+1)+$*(W+1),le=d+(se+1)+$*W;l.push(U,Z,le),l.push(Z,re,le),I+=6}a.addGroup(m,I,T),m+=I,d+=ee}}static fromJSON(e){return new Lt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ko(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Ko(t[n]);for(const r in i)e[r]=i[r]}return e}function A1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function uv(t){return t.getRenderTarget()===null&&t.outputEncoding===Qe?ni:ia}const P1={clone:Ko,merge:Qt};var L1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends sc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L1,this.fragmentShader=D1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ko(e.uniforms),this.uniformsGroups=A1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class dv extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kn extends dv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xp*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Yc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const co=-90,uo=1;class R1 extends bn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new kn(co,uo,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new kn(co,uo,e,n);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const s=new kn(co,uo,e,n);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new kn(co,uo,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new kn(co,uo,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new kn(co,uo,e,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,s,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Ti,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,s),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class fv extends hn{constructor(e,n,i,r,o,s,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:qo,super(e,n,i,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class N1 extends Hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:In}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lt(5,5,5),o=new sr({name:"CubemapFromEquirect",uniforms:Ko(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:er});o.uniforms.tEquirect.value=n;const s=new Je(r,o),a=n.minFilter;return n.minFilter===ta&&(n.minFilter=In),new R1(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const gu=new V,I1=new V,k1=new Sn;class Sr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=gu.subVectors(i,n).cross(I1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(gu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(i).multiplyScalar(o).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||k1.getNormalMatrix(e),r=this.coplanarPoint(gu).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fo=new Bf,Ya=new V;class hv{constructor(e=new Sr,n=new Sr,i=new Sr,r=new Sr,o=new Sr,s=new Sr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],o=i[1],s=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],d=i[8],m=i[9],x=i[10],h=i[11],p=i[12],g=i[13],v=i[14],_=i[15];return n[0].setComponents(a-r,f-l,h-d,_-p).normalize(),n[1].setComponents(a+r,f+l,h+d,_+p).normalize(),n[2].setComponents(a+o,f+c,h+m,_+g).normalize(),n[3].setComponents(a-o,f-c,h-m,_-g).normalize(),n[4].setComponents(a-s,f-u,h-x,_-v).normalize(),n[5].setComponents(a+s,f+u,h+x,_+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(fo)}intersectsSprite(e){return fo.center.set(0,0,0),fo.radius=.7071067811865476,fo.applyMatrix4(e.matrixWorld),this.intersectsSphere(fo)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ya.x=r.normal.x>0?e.max.x:e.min.x,Ya.y=r.normal.y>0?e.max.y:e.min.y,Ya.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pv(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function z1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=t.createBuffer();t.bindBuffer(u,m),t.bufferData(u,f,d),c.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function o(c,u,f){const d=u.array,m=u.updateRange;t.bindBuffer(f,c),m.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(o(f.buffer,c,u),f.version=c.version)}return{get:s,remove:a,update:l}}class ar extends Yr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,m=[],x=[],h=[],p=[];for(let g=0;g<u;g++){const v=g*d-s;for(let _=0;_<c;_++){const M=_*f-o;x.push(M,-v,0),h.push(0,0,1),p.push(_/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const _=v+c*g,M=v+c*(g+1),S=v+1+c*(g+1),C=v+1+c*g;m.push(_,M,C),m.push(M,S,C)}this.setIndex(m),this.setAttribute("position",new kr(x,3)),this.setAttribute("normal",new kr(h,3)),this.setAttribute("uv",new kr(p,2))}static fromJSON(e){return new ar(e.width,e.height,e.widthSegments,e.heightSegments)}}var F1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,O1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,B1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,G1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H1="vec3 transformed = vec3( position );",W1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j1=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,X1=`#ifdef USE_IRIDESCENCE
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
#endif`,q1=`#ifdef USE_BUMPMAP
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
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nM=`#define PI 3.141592653589793
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
}`,iM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rM=`vec3 transformedNormal = objectNormal;
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
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cM="gl_FragColor = linearToOutputTexel( gl_FragColor );",uM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yM=`#ifdef USE_GRADIENTMAP
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
}`,SM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,MM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EM=`uniform bool receiveShadow;
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
#endif`,TM=`#if defined( USE_ENVMAP )
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
#endif`,CM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DM=`PhysicalMaterial material;
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
#endif`,RM=`struct PhysicalMaterial {
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
}`,NM=`
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
#endif`,IM=`#if defined( RE_IndirectDiffuse )
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
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,zM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,UM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,BM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qM=`#ifdef USE_MORPHNORMALS
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
#endif`,$M=`#ifdef USE_MORPHTARGETS
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
#endif`,YM=`#ifdef USE_MORPHTARGETS
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
#endif`,KM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,ZM=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ew=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tw=`#ifdef USE_NORMALMAP
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
#endif`,nw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,iw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,rw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ow=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vw=`float getShadowMask() {
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
}`,_w=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xw=`#ifdef USE_SKINNING
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
#endif`,yw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sw=`#ifdef USE_SKINNING
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
#endif`,Mw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ww=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ew=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tw=`#ifdef USE_TRANSMISSION
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
#endif`,Cw=`#ifdef USE_TRANSMISSION
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
#endif`,Aw=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Pw=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Lw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Dw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Rw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Nw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Iw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zw=`uniform sampler2D t2D;
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
}`,Fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ow=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vw=`#include <common>
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
}`,Gw=`#if DEPTH_PACKING == 3200
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
}`,Hw=`#define DISTANCE
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
}`,Ww=`#define DISTANCE
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
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qw=`uniform float scale;
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
}`,$w=`uniform vec3 diffuse;
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
}`,Yw=`#include <common>
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
}`,Kw=`uniform vec3 diffuse;
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
}`,Zw=`#define LAMBERT
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
}`,Qw=`#define LAMBERT
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
}`,Jw=`#define MATCAP
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
}`,eb=`#define MATCAP
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
}`,tb=`#define NORMAL
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
}`,nb=`#define NORMAL
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
}`,ib=`#define PHONG
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
}`,rb=`#define PHONG
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
}`,ob=`#define STANDARD
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
}`,sb=`#define STANDARD
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
}`,ab=`#define TOON
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
}`,lb=`#define TOON
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
}`,cb=`uniform float size;
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
}`,ub=`uniform vec3 diffuse;
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
}`,db=`#include <common>
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
}`,fb=`uniform vec3 color;
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
}`,hb=`uniform float rotation;
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
}`,pb=`uniform vec3 diffuse;
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
}`,Re={alphamap_fragment:F1,alphamap_pars_fragment:O1,alphatest_fragment:U1,alphatest_pars_fragment:B1,aomap_fragment:V1,aomap_pars_fragment:G1,begin_vertex:H1,beginnormal_vertex:W1,bsdfs:j1,iridescence_fragment:X1,bumpmap_pars_fragment:q1,clipping_planes_fragment:$1,clipping_planes_pars_fragment:Y1,clipping_planes_pars_vertex:K1,clipping_planes_vertex:Z1,color_fragment:Q1,color_pars_fragment:J1,color_pars_vertex:eM,color_vertex:tM,common:nM,cube_uv_reflection_fragment:iM,defaultnormal_vertex:rM,displacementmap_pars_vertex:oM,displacementmap_vertex:sM,emissivemap_fragment:aM,emissivemap_pars_fragment:lM,encodings_fragment:cM,encodings_pars_fragment:uM,envmap_fragment:dM,envmap_common_pars_fragment:fM,envmap_pars_fragment:hM,envmap_pars_vertex:pM,envmap_physical_pars_fragment:TM,envmap_vertex:mM,fog_vertex:gM,fog_pars_vertex:vM,fog_fragment:_M,fog_pars_fragment:xM,gradientmap_pars_fragment:yM,lightmap_fragment:SM,lightmap_pars_fragment:MM,lights_lambert_fragment:wM,lights_lambert_pars_fragment:bM,lights_pars_begin:EM,lights_toon_fragment:CM,lights_toon_pars_fragment:AM,lights_phong_fragment:PM,lights_phong_pars_fragment:LM,lights_physical_fragment:DM,lights_physical_pars_fragment:RM,lights_fragment_begin:NM,lights_fragment_maps:IM,lights_fragment_end:kM,logdepthbuf_fragment:zM,logdepthbuf_pars_fragment:FM,logdepthbuf_pars_vertex:OM,logdepthbuf_vertex:UM,map_fragment:BM,map_pars_fragment:VM,map_particle_fragment:GM,map_particle_pars_fragment:HM,metalnessmap_fragment:WM,metalnessmap_pars_fragment:jM,morphcolor_vertex:XM,morphnormal_vertex:qM,morphtarget_pars_vertex:$M,morphtarget_vertex:YM,normal_fragment_begin:KM,normal_fragment_maps:ZM,normal_pars_fragment:QM,normal_pars_vertex:JM,normal_vertex:ew,normalmap_pars_fragment:tw,clearcoat_normal_fragment_begin:nw,clearcoat_normal_fragment_maps:iw,clearcoat_pars_fragment:rw,iridescence_pars_fragment:ow,output_fragment:sw,packing:aw,premultiplied_alpha_fragment:lw,project_vertex:cw,dithering_fragment:uw,dithering_pars_fragment:dw,roughnessmap_fragment:fw,roughnessmap_pars_fragment:hw,shadowmap_pars_fragment:pw,shadowmap_pars_vertex:mw,shadowmap_vertex:gw,shadowmask_pars_fragment:vw,skinbase_vertex:_w,skinning_pars_vertex:xw,skinning_vertex:yw,skinnormal_vertex:Sw,specularmap_fragment:Mw,specularmap_pars_fragment:ww,tonemapping_fragment:bw,tonemapping_pars_fragment:Ew,transmission_fragment:Tw,transmission_pars_fragment:Cw,uv_pars_fragment:Aw,uv_pars_vertex:Pw,uv_vertex:Lw,uv2_pars_fragment:Dw,uv2_pars_vertex:Rw,uv2_vertex:Nw,worldpos_vertex:Iw,background_vert:kw,background_frag:zw,backgroundCube_vert:Fw,backgroundCube_frag:Ow,cube_vert:Uw,cube_frag:Bw,depth_vert:Vw,depth_frag:Gw,distanceRGBA_vert:Hw,distanceRGBA_frag:Ww,equirect_vert:jw,equirect_frag:Xw,linedashed_vert:qw,linedashed_frag:$w,meshbasic_vert:Yw,meshbasic_frag:Kw,meshlambert_vert:Zw,meshlambert_frag:Qw,meshmatcap_vert:Jw,meshmatcap_frag:eb,meshnormal_vert:tb,meshnormal_frag:nb,meshphong_vert:ib,meshphong_frag:rb,meshphysical_vert:ob,meshphysical_frag:sb,meshtoon_vert:ab,meshtoon_frag:lb,points_vert:cb,points_frag:ub,shadow_vert:db,shadow_frag:fb,sprite_vert:hb,sprite_frag:pb},ue={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Sn},uv2Transform:{value:new Sn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Sn}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Sn}}},ii={basic:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Qt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Qt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Qt([ue.points,ue.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Qt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Qt([ue.common,ue.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Qt([ue.sprite,ue.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Sn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Qt([ue.common,ue.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Qt([ue.lights,ue.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};ii.physical={uniforms:Qt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const Ka={r:0,b:0,g:0};function mb(t,e,n,i,r,o,s){const a=new et(0);let l=o===!0?0:1,c,u,f=null,d=0,m=null;function x(p,g){let v=!1,_=g.isScene===!0?g.background:null;_&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_));const M=t.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(_=null),_===null?h(a,l):_&&_.isColor&&(h(_,1),v=!0),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===rc)?(u===void 0&&(u=new Je(new Lt(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Ko(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=_.encoding!==Qe,(f!==_||d!==_.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Je(new ar(2,2),new sr({name:"BackgroundMaterial",uniforms:Ko(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=_.encoding!==Qe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function h(p,g){p.getRGB(Ka,uv(t)),i.buffers.color.setClear(Ka.r,Ka.g,Ka.b,g,s)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:x}}function gb(t,e,n,i){const r=t.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=p(null);let c=l,u=!1;function f(z,$,Q,ee,I){let G=!1;if(s){const W=h(ee,Q,$);c!==W&&(c=W,m(c.object)),G=g(z,ee,Q,I),G&&v(z,ee,Q,I)}else{const W=$.wireframe===!0;(c.geometry!==ee.id||c.program!==Q.id||c.wireframe!==W)&&(c.geometry=ee.id,c.program=Q.id,c.wireframe=W,G=!0)}I!==null&&n.update(I,34963),(G||u)&&(u=!1,y(z,$,Q,ee),I!==null&&t.bindBuffer(34963,n.get(I).buffer))}function d(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function m(z){return i.isWebGL2?t.bindVertexArray(z):o.bindVertexArrayOES(z)}function x(z){return i.isWebGL2?t.deleteVertexArray(z):o.deleteVertexArrayOES(z)}function h(z,$,Q){const ee=Q.wireframe===!0;let I=a[z.id];I===void 0&&(I={},a[z.id]=I);let G=I[$.id];G===void 0&&(G={},I[$.id]=G);let W=G[ee];return W===void 0&&(W=p(d()),G[ee]=W),W}function p(z){const $=[],Q=[],ee=[];for(let I=0;I<r;I++)$[I]=0,Q[I]=0,ee[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Q,attributeDivisors:ee,object:z,attributes:{},index:null}}function g(z,$,Q,ee){const I=c.attributes,G=$.attributes;let W=0;const se=Q.getAttributes();for(const U in se)if(se[U].location>=0){const re=I[U];let le=G[U];if(le===void 0&&(U==="instanceMatrix"&&z.instanceMatrix&&(le=z.instanceMatrix),U==="instanceColor"&&z.instanceColor&&(le=z.instanceColor)),re===void 0||re.attribute!==le||le&&re.data!==le.data)return!0;W++}return c.attributesNum!==W||c.index!==ee}function v(z,$,Q,ee){const I={},G=$.attributes;let W=0;const se=Q.getAttributes();for(const U in se)if(se[U].location>=0){let re=G[U];re===void 0&&(U==="instanceMatrix"&&z.instanceMatrix&&(re=z.instanceMatrix),U==="instanceColor"&&z.instanceColor&&(re=z.instanceColor));const le={};le.attribute=re,re&&re.data&&(le.data=re.data),I[U]=le,W++}c.attributes=I,c.attributesNum=W,c.index=ee}function _(){const z=c.newAttributes;for(let $=0,Q=z.length;$<Q;$++)z[$]=0}function M(z){S(z,0)}function S(z,$){const Q=c.newAttributes,ee=c.enabledAttributes,I=c.attributeDivisors;Q[z]=1,ee[z]===0&&(t.enableVertexAttribArray(z),ee[z]=1),I[z]!==$&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,$),I[z]=$)}function C(){const z=c.newAttributes,$=c.enabledAttributes;for(let Q=0,ee=$.length;Q<ee;Q++)$[Q]!==z[Q]&&(t.disableVertexAttribArray(Q),$[Q]=0)}function P(z,$,Q,ee,I,G){i.isWebGL2===!0&&(Q===5124||Q===5125)?t.vertexAttribIPointer(z,$,Q,I,G):t.vertexAttribPointer(z,$,Q,ee,I,G)}function y(z,$,Q,ee){if(i.isWebGL2===!1&&(z.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const I=ee.attributes,G=Q.getAttributes(),W=$.defaultAttributeValues;for(const se in G){const U=G[se];if(U.location>=0){let Z=I[se];if(Z===void 0&&(se==="instanceMatrix"&&z.instanceMatrix&&(Z=z.instanceMatrix),se==="instanceColor"&&z.instanceColor&&(Z=z.instanceColor)),Z!==void 0){const re=Z.normalized,le=Z.itemSize,D=n.get(Z);if(D===void 0)continue;const ye=D.buffer,he=D.type,ae=D.bytesPerElement;if(Z.isInterleavedBufferAttribute){const oe=Z.data,Ie=oe.stride,De=Z.offset;if(oe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<U.locationSize;Ce++)S(U.location+Ce,oe.meshPerAttribute);z.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ce=0;Ce<U.locationSize;Ce++)M(U.location+Ce);t.bindBuffer(34962,ye);for(let Ce=0;Ce<U.locationSize;Ce++)P(U.location+Ce,le/U.locationSize,he,re,Ie*ae,(De+le/U.locationSize*Ce)*ae)}else{if(Z.isInstancedBufferAttribute){for(let oe=0;oe<U.locationSize;oe++)S(U.location+oe,Z.meshPerAttribute);z.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let oe=0;oe<U.locationSize;oe++)M(U.location+oe);t.bindBuffer(34962,ye);for(let oe=0;oe<U.locationSize;oe++)P(U.location+oe,le/U.locationSize,he,re,le*ae,le/U.locationSize*oe*ae)}}else if(W!==void 0){const re=W[se];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(U.location,re);break;case 3:t.vertexAttrib3fv(U.location,re);break;case 4:t.vertexAttrib4fv(U.location,re);break;default:t.vertexAttrib1fv(U.location,re)}}}}C()}function T(){J();for(const z in a){const $=a[z];for(const Q in $){const ee=$[Q];for(const I in ee)x(ee[I].object),delete ee[I];delete $[Q]}delete a[z]}}function R(z){if(a[z.id]===void 0)return;const $=a[z.id];for(const Q in $){const ee=$[Q];for(const I in ee)x(ee[I].object),delete ee[I];delete $[Q]}delete a[z.id]}function K(z){for(const $ in a){const Q=a[$];if(Q[z.id]===void 0)continue;const ee=Q[z.id];for(const I in ee)x(ee[I].object),delete ee[I];delete Q[z.id]}}function J(){O(),u=!0,c!==l&&(c=l,m(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:J,resetDefaultState:O,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:K,initAttributes:_,enableAttribute:M,disableUnusedAttributes:C}}function vb(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,u){t.drawArrays(o,c,u),n.update(u,o,1)}function l(c,u,f){if(f===0)return;let d,m;if(r)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](o,c,u,f),n.update(u,o,f)}this.setMode=s,this.render=a,this.renderInstances=l}function _b(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){if(P==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),d=t.getParameter(35660),m=t.getParameter(3379),x=t.getParameter(34076),h=t.getParameter(34921),p=t.getParameter(36347),g=t.getParameter(36348),v=t.getParameter(36349),_=d>0,M=s||e.has("OES_texture_float"),S=_&&M,C=s?t.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:C}}function xb(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Sr,a=new Sn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,m){const x=f.clippingPlanes,h=f.clipIntersection,p=f.clipShadows,g=t.get(f);if(!r||x===null||x.length===0||o&&!p)o?u(null):c();else{const v=o?0:i,_=v*4;let M=g.clippingState||null;l.value=M,M=u(x,d,_,m);for(let S=0;S!==_;++S)M[S]=n[S];g.clippingState=M,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,x){const h=f!==null?f.length:0;let p=null;if(h!==0){if(p=l.value,x!==!0||p===null){const g=m+h*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let _=0,M=m;_!==h;++_,M+=4)s.copy(f[_]).applyMatrix4(v,a),s.normal.toArray(p,M),p[M+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function yb(t){let e=new WeakMap;function n(s,a){return a===Td?s.mapping=qo:a===Cd&&(s.mapping=$o),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Td||a===Cd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new N1(l.height/2);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Sb extends dv{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ao=4,rm=[.125,.215,.35,.446,.526,.582],br=20,vu=new Sb,om=new et;let _u=null;const Mr=(1+Math.sqrt(5))/2,ho=1/Mr,sm=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Mr,ho),new V(0,Mr,-ho),new V(ho,0,Mr),new V(-ho,0,Mr),new V(Mr,ho,0),new V(-Mr,ho,0)];class am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){_u=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_u),e.scissorTest=!1,Za(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qo||e.mapping===$o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_u=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:na,format:zn,encoding:Gr,depthBuffer:!1},r=lm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mb(o)),this._blurMaterial=wb(o,e,n)}return r}_compileMaterial(e){const n=new Je(this._lodPlanes[0],e);this._renderer.compile(n,vu)}_sceneToCubeUV(e,n,i,r){const a=new kn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(om),u.toneMapping=Ti,u.autoClear=!1;const m=new lt({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),x=new Je(new Lt,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(om),h=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):v===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const _=this._cubeSize;Za(r,v*_,g>2?_:0,_,_),u.setRenderTarget(r),h&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===qo||e.mapping===$o;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Je(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Za(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,vu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=sm[(r-1)%sm.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Je(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*br-1),h=o/x,p=isFinite(o)?1+Math.floor(u*h):br;p>br&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${br}`);const g=[];let v=0;for(let P=0;P<br;++P){const y=P/h,T=Math.exp(-y*y/2);g.push(T),P===0?v+=T:P<p&&(v+=2*T)}for(let P=0;P<g.length;P++)g[P]=g[P]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-i;const M=this._sizeLods[r],S=3*M*(r>_-Ao?r-_+Ao:0),C=4*(this._cubeSize-M);Za(n,S,C,3*M,2*M),l.setRenderTarget(n),l.render(f,vu)}}function Mb(t){const e=[],n=[],i=[];let r=t;const o=t-Ao+1+rm.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Ao?l=rm[s-t+Ao-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,h=3,p=2,g=1,v=new Float32Array(h*x*m),_=new Float32Array(p*x*m),M=new Float32Array(g*x*m);for(let C=0;C<m;C++){const P=C%3*2/3-1,y=C>2?0:-1,T=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];v.set(T,h*x*C),_.set(d,p*x*C);const R=[C,C,C,C,C,C];M.set(R,g*x*C)}const S=new Yr;S.setAttribute("position",new ci(v,h)),S.setAttribute("uv",new ci(_,p)),S.setAttribute("faceIndex",new ci(M,g)),e.push(S),r>Ao&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function lm(t,e,n){const i=new Hr(t,e,n);return i.texture.mapping=rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Za(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function wb(t,e,n){const i=new Float32Array(br),r=new V(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gf(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function cm(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gf(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function um(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Gf(){return`

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
	`}function bb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Td||l===Cd,u=l===qo||l===$o;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new am(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new am(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",o),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function Eb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Tb(t,e,n,i){const r={},o=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",s),delete r[d.id];const m=o.get(d);m&&(e.remove(m),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],34962);const m=f.morphAttributes;for(const x in m){const h=m[x];for(let p=0,g=h.length;p<g;p++)e.update(h[p],34962)}}function c(f){const d=[],m=f.index,x=f.attributes.position;let h=0;if(m!==null){const v=m.array;h=m.version;for(let _=0,M=v.length;_<M;_+=3){const S=v[_+0],C=v[_+1],P=v[_+2];d.push(S,C,C,P,P,S)}}else{const v=x.array;h=x.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const S=_+0,C=_+1,P=_+2;d.push(S,C,C,P,P,S)}}const p=new(nv(d)?cv:lv)(d,1);p.version=h;const g=o.get(f);g&&e.remove(g),o.set(f,p)}function u(f){const d=o.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Cb(t,e,n,i){const r=i.isWebGL2;let o;function s(d){o=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,m){t.drawElements(o,m,a,d*l),n.update(m,o,1)}function f(d,m,x){if(x===0)return;let h,p;if(r)h=t,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](o,m,a,d*l,x),n.update(m,o,x)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=f}function Ab(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case 4:n.triangles+=a*(o/3);break;case 1:n.lines+=a*(o/2);break;case 3:n.lines+=a*(o-1);break;case 2:n.lines+=a*o;break;case 0:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Pb(t,e){return t[0]-e[0]}function Lb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Db(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Ft,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=h!==void 0?h.length:0;let g=o.get(u);if(g===void 0||g.count!==p){let Q=function(){z.dispose(),o.delete(u),u.removeEventListener("dispose",Q)};var x=Q;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let R=0;M===!0&&(R=1),S===!0&&(R=2),C===!0&&(R=3);let K=u.attributes.position.count*R,J=1;K>e.maxTextureSize&&(J=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const O=new Float32Array(K*J*4*p),z=new sv(O,K,J,p);z.type=Lr,z.needsUpdate=!0;const $=R*4;for(let ee=0;ee<p;ee++){const I=P[ee],G=y[ee],W=T[ee],se=K*J*4*ee;for(let U=0;U<I.count;U++){const Z=U*$;M===!0&&(s.fromBufferAttribute(I,U),O[se+Z+0]=s.x,O[se+Z+1]=s.y,O[se+Z+2]=s.z,O[se+Z+3]=0),S===!0&&(s.fromBufferAttribute(G,U),O[se+Z+4]=s.x,O[se+Z+5]=s.y,O[se+Z+6]=s.z,O[se+Z+7]=0),C===!0&&(s.fromBufferAttribute(W,U),O[se+Z+8]=s.x,O[se+Z+9]=s.y,O[se+Z+10]=s.z,O[se+Z+11]=W.itemSize===4?s.w:1)}}g={count:p,texture:z,size:new ze(K,J)},o.set(u,g),u.addEventListener("dispose",Q)}let v=0;for(let M=0;M<m.length;M++)v+=m[M];const _=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",m),d.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const h=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==h){p=[];for(let S=0;S<h;S++)p[S]=[S,0];i[u.id]=p}for(let S=0;S<h;S++){const C=p[S];C[0]=S,C[1]=m[S]}p.sort(Lb);for(let S=0;S<8;S++)S<h&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Pb);const g=u.morphAttributes.position,v=u.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const C=a[S],P=C[0],y=C[1];P!==Number.MAX_SAFE_INTEGER&&y?(g&&u.getAttribute("morphTarget"+S)!==g[P]&&u.setAttribute("morphTarget"+S,g[P]),v&&u.getAttribute("morphNormal"+S)!==v[P]&&u.setAttribute("morphNormal"+S,v[P]),r[S]=y,_+=y):(g&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),v&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const M=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",M),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Rb(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),f}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}const mv=new hn,gv=new sv,vv=new v1,_v=new fv,dm=[],fm=[],hm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=dm[r];if(o===void 0&&(o=new Float32Array(r),dm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ac(t,e){let n=fm[e];n===void 0&&(n=new Int32Array(e),fm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Nb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function Fb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(wt(n,i))return;mm.set(i),t.uniformMatrix2fv(this.addr,!1,mm),bt(n,i)}}function Ob(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(wt(n,i))return;pm.set(i),t.uniformMatrix3fv(this.addr,!1,pm),bt(n,i)}}function Ub(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(wt(n,i))return;hm.set(i),t.uniformMatrix4fv(this.addr,!1,hm),bt(n,i)}}function Bb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function Gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function Hb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function Wb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function jb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function Xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function $b(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||mv,r)}function Yb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||vv,r)}function Kb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||_v,r)}function Zb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||gv,r)}function Qb(t){switch(t){case 5126:return Nb;case 35664:return Ib;case 35665:return kb;case 35666:return zb;case 35674:return Fb;case 35675:return Ob;case 35676:return Ub;case 5124:case 35670:return Bb;case 35667:case 35671:return Vb;case 35668:case 35672:return Gb;case 35669:case 35673:return Hb;case 5125:return Wb;case 36294:return jb;case 36295:return Xb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return Kb;case 36289:case 36303:case 36311:case 36292:return Zb}}function Jb(t,e){t.uniform1fv(this.addr,e)}function eE(t,e){const n=is(e,this.size,2);t.uniform2fv(this.addr,n)}function tE(t,e){const n=is(e,this.size,3);t.uniform3fv(this.addr,n)}function nE(t,e){const n=is(e,this.size,4);t.uniform4fv(this.addr,n)}function iE(t,e){const n=is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rE(t,e){const n=is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function oE(t,e){const n=is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sE(t,e){t.uniform1iv(this.addr,e)}function aE(t,e){t.uniform2iv(this.addr,e)}function lE(t,e){t.uniform3iv(this.addr,e)}function cE(t,e){t.uniform4iv(this.addr,e)}function uE(t,e){t.uniform1uiv(this.addr,e)}function dE(t,e){t.uniform2uiv(this.addr,e)}function fE(t,e){t.uniform3uiv(this.addr,e)}function hE(t,e){t.uniform4uiv(this.addr,e)}function pE(t,e,n){const i=this.cache,r=e.length,o=ac(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),bt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||mv,o[s])}function mE(t,e,n){const i=this.cache,r=e.length,o=ac(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),bt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||vv,o[s])}function gE(t,e,n){const i=this.cache,r=e.length,o=ac(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),bt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||_v,o[s])}function vE(t,e,n){const i=this.cache,r=e.length,o=ac(n,r);wt(i,o)||(t.uniform1iv(this.addr,o),bt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||gv,o[s])}function _E(t){switch(t){case 5126:return Jb;case 35664:return eE;case 35665:return tE;case 35666:return nE;case 35674:return iE;case 35675:return rE;case 35676:return oE;case 5124:case 35670:return sE;case 35667:case 35671:return aE;case 35668:case 35672:return lE;case 35669:case 35673:return cE;case 5125:return uE;case 36294:return dE;case 36295:return fE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return gE;case 36289:case 36303:case 36311:case 36292:return vE}}class xE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Qb(n.type)}}class yE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=_E(n.type)}}class SE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const xu=/(\w+)(\])?(\[|\.)?/g;function gm(t,e){t.seq.push(e),t.map[e.id]=e}function ME(t,e,n){const i=t.name,r=i.length;for(xu.lastIndex=0;;){const o=xu.exec(i),s=xu.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){gm(n,c===void 0?new xE(a,t,e):new yE(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new SE(a),gm(n,f)),n=f}}}class dl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);ME(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function vm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let wE=0;function bE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function EE(t){switch(t){case Gr:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function _m(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+bE(t.getShaderSource(e),s)}else return r}function TE(t,e){const n=EE(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function CE(t,e){let n;switch(e){case HS:n="Linear";break;case WS:n="Reinhard";break;case jS:n="OptimizedCineon";break;case XS:n="ACESFilmic";break;case qS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function AE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function PE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function LE(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===35674&&(a=2),o.type===35675&&(a=3),o.type===35676&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ts(t){return t!==""}function xm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ym(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(t){return t.replace(DE,RE)}function RE(t,e){const n=Re[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Dd(n)}const NE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(t){return t.replace(NE,IE)}function IE(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Mm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Y0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===K0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Es&&(e="SHADOWMAP_TYPE_VSM"),e}function zE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case qo:case $o:e="ENVMAP_TYPE_CUBE";break;case rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $o:e="ENVMAP_MODE_REFRACTION";break}return e}function OE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case J0:e="ENVMAP_BLENDING_MULTIPLY";break;case VS:e="ENVMAP_BLENDING_MIX";break;case GS:e="ENVMAP_BLENDING_ADD";break}return e}function UE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function BE(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=kE(n),c=zE(n),u=FE(n),f=OE(n),d=UE(n),m=n.isWebGL2?"":AE(n),x=PE(o),h=r.createProgram();let p,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[x].filter(Ts).join(`
`),p.length>0&&(p+=`
`),g=[m,x].filter(Ts).join(`
`),g.length>0&&(g+=`
`)):(p=[Mm(n),"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),g=[m,Mm(n),"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ti?"#define TONE_MAPPING":"",n.toneMapping!==Ti?Re.tonemapping_pars_fragment:"",n.toneMapping!==Ti?CE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,TE("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ts).join(`
`)),s=Dd(s),s=xm(s,n),s=ym(s,n),a=Dd(a),a=xm(a,n),a=ym(a,n),s=Sm(s),a=Sm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",n.glslVersion===jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=v+p+s,M=v+g+a,S=vm(r,35633,_),C=vm(r,35632,M);if(r.attachShader(h,S),r.attachShader(h,C),n.index0AttributeName!==void 0?r.bindAttribLocation(h,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),t.debug.checkShaderErrors){const T=r.getProgramInfoLog(h).trim(),R=r.getShaderInfoLog(S).trim(),K=r.getShaderInfoLog(C).trim();let J=!0,O=!0;if(r.getProgramParameter(h,35714)===!1){J=!1;const z=_m(r,S,"vertex"),$=_m(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+T+`
`+z+`
`+$)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||K==="")&&(O=!1);O&&(this.diagnostics={runnable:J,programLog:T,vertexShader:{log:R,prefix:p},fragmentShader:{log:K,prefix:g}})}r.deleteShader(S),r.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new dl(r,h)),P};let y;return this.getAttributes=function(){return y===void 0&&(y=LE(r,h)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=n.shaderName,this.id=wE++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=C,this}let VE=0;class GE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new HE(e),n.set(e,i)),i}}class HE{constructor(e){this.id=VE++,this.code=e,this.usedTimes=0}}function WE(t,e,n,i,r,o,s){const a=new Vf,l=new GE,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,T,R,K,J){const O=K.fog,z=J.geometry,$=y.isMeshStandardMaterial?K.environment:null,Q=(y.isMeshStandardMaterial?n:e).get(y.envMap||$),ee=Q&&Q.mapping===rc?Q.image.height:null,I=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const G=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,W=G!==void 0?G.length:0;let se=0;z.morphAttributes.position!==void 0&&(se=1),z.morphAttributes.normal!==void 0&&(se=2),z.morphAttributes.color!==void 0&&(se=3);let U,Z,re,le;if(I){const Ie=ii[I];U=Ie.vertexShader,Z=Ie.fragmentShader}else U=y.vertexShader,Z=y.fragmentShader,l.update(y),re=l.getVertexShaderID(y),le=l.getFragmentShaderID(y);const D=t.getRenderTarget(),ye=y.alphaTest>0,he=y.clearcoat>0,ae=y.iridescence>0;return{isWebGL2:u,shaderID:I,shaderName:y.type,vertexShader:U,fragmentShader:Z,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:d,outputEncoding:D===null?t.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:Gr,map:!!y.map,matcap:!!y.matcap,envMap:!!Q,envMapMode:Q&&Q.mapping,envMapCubeUVHeight:ee,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===h1,tangentSpaceNormalMap:y.normalMapType===f1,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Qe,clearcoat:he,clearcoatMap:he&&!!y.clearcoatMap,clearcoatRoughnessMap:he&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!y.clearcoatNormalMap,iridescence:ae,iridescenceMap:ae&&!!y.iridescenceMap,iridescenceThicknessMap:ae&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===zo,alphaMap:!!y.alphaMap,alphaTest:ye,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!z.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!O,useFog:y.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:J.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:Ti,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===kt,flipSided:y.side===wn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(g(T,y),v(T,y),T.push(t.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),y.push(a.mask)}function _(y){const T=x[y.type];let R;if(T){const K=ii[T];R=P1.clone(K.uniforms)}else R=y.uniforms;return R}function M(y,T){let R;for(let K=0,J=c.length;K<J;K++){const O=c[K];if(O.cacheKey===T){R=O,++R.usedTimes;break}}return R===void 0&&(R=new BE(t,T,y,o),c.push(R)),R}function S(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function P(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:_,acquireProgram:M,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:P}}function jE(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function XE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function wm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bm(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,d,m,x,h,p){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:h,group:p},t[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=m,g.groupOrder=x,g.renderOrder=f.renderOrder,g.z=h,g.group=p),e++,g}function a(f,d,m,x,h,p){const g=s(f,d,m,x,h,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):n.push(g)}function l(f,d,m,x,h,p){const g=s(f,d,m,x,h,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):n.unshift(g)}function c(f,d){n.length>1&&n.sort(f||XE),i.length>1&&i.sort(d||wm),r.length>1&&r.sort(d||wm)}function u(){for(let f=e,d=t.length;f<d;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function qE(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new bm,t.set(i,[s])):r>=o.length?(s=new bm,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function $E(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new et};break;case"SpotLight":n={position:new V,direction:new V,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function YE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let KE=0;function ZE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function QE(t,e){const n=new $E,i=YE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new V);const o=new V,s=new Ut,a=new Ut;function l(u,f){let d=0,m=0,x=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let h=0,p=0,g=0,v=0,_=0,M=0,S=0,C=0,P=0,y=0;u.sort(ZE);const T=f!==!0?Math.PI:1;for(let K=0,J=u.length;K<J;K++){const O=u[K],z=O.color,$=O.intensity,Q=O.distance,ee=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=z.r*$*T,m+=z.g*$*T,x+=z.b*$*T;else if(O.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(O.sh.coefficients[I],$);else if(O.isDirectionalLight){const I=n.get(O);if(I.color.copy(O.color).multiplyScalar(O.intensity*T),O.castShadow){const G=O.shadow,W=i.get(O);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,r.directionalShadow[h]=W,r.directionalShadowMap[h]=ee,r.directionalShadowMatrix[h]=O.shadow.matrix,M++}r.directional[h]=I,h++}else if(O.isSpotLight){const I=n.get(O);I.position.setFromMatrixPosition(O.matrixWorld),I.color.copy(z).multiplyScalar($*T),I.distance=Q,I.coneCos=Math.cos(O.angle),I.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),I.decay=O.decay,r.spot[g]=I;const G=O.shadow;if(O.map&&(r.spotLightMap[P]=O.map,P++,G.updateMatrices(O),O.castShadow&&y++),r.spotLightMatrix[g]=G.matrix,O.castShadow){const W=i.get(O);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,r.spotShadow[g]=W,r.spotShadowMap[g]=ee,C++}g++}else if(O.isRectAreaLight){const I=n.get(O);I.color.copy(z).multiplyScalar($),I.halfWidth.set(O.width*.5,0,0),I.halfHeight.set(0,O.height*.5,0),r.rectArea[v]=I,v++}else if(O.isPointLight){const I=n.get(O);if(I.color.copy(O.color).multiplyScalar(O.intensity*T),I.distance=O.distance,I.decay=O.decay,O.castShadow){const G=O.shadow,W=i.get(O);W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,W.shadowCameraNear=G.camera.near,W.shadowCameraFar=G.camera.far,r.pointShadow[p]=W,r.pointShadowMap[p]=ee,r.pointShadowMatrix[p]=O.shadow.matrix,S++}r.point[p]=I,p++}else if(O.isHemisphereLight){const I=n.get(O);I.skyColor.copy(O.color).multiplyScalar($*T),I.groundColor.copy(O.groundColor).multiplyScalar($*T),r.hemi[_]=I,_++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=x;const R=r.hash;(R.directionalLength!==h||R.pointLength!==p||R.spotLength!==g||R.rectAreaLength!==v||R.hemiLength!==_||R.numDirectionalShadows!==M||R.numPointShadows!==S||R.numSpotShadows!==C||R.numSpotMaps!==P)&&(r.directional.length=h,r.spot.length=g,r.rectArea.length=v,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=C+P-y,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=y,R.directionalLength=h,R.pointLength=p,R.spotLength=g,R.rectAreaLength=v,R.hemiLength=_,R.numDirectionalShadows=M,R.numPointShadows=S,R.numSpotShadows=C,R.numSpotMaps=P,r.version=KE++)}function c(u,f){let d=0,m=0,x=0,h=0,p=0;const g=f.matrixWorldInverse;for(let v=0,_=u.length;v<_;v++){const M=u[v];if(M.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(g),d++}else if(M.isSpotLight){const S=r.spot[x];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(g),x++}else if(M.isRectAreaLight){const S=r.rectArea[h];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(M.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),h++}else if(M.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),m++}else if(M.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:r}}function Em(t,e){const n=new QE(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function JE(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new Em(t,e),n.set(o,[l])):s>=a.length?(l=new Em(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class e2 extends sc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t2 extends sc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const n2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i2=`uniform sampler2D shadow_pass;
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
}`;function r2(t,e,n){let i=new hv;const r=new ze,o=new ze,s=new Ft,a=new e2({depthPacking:d1}),l=new t2,c={},u=n.maxTextureSize,f={[or]:wn,[wn]:or,[kt]:kt},d=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:n2,fragmentShader:i2}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new Yr;x.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Je(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y0,this.render=function(M,S,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const P=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),R=t.state;R.setBlending(er),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let K=0,J=M.length;K<J;K++){const O=M[K],z=O.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const $=z.getFrameExtents();if(r.multiply($),o.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/$.x),r.x=o.x*$.x,z.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/$.y),r.y=o.y*$.y,z.mapSize.y=o.y)),z.map===null){const ee=this.type!==Es?{minFilter:yt,magFilter:yt}:{};z.map=new Hr(r.x,r.y,ee),z.map.texture.name=O.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const Q=z.getViewportCount();for(let ee=0;ee<Q;ee++){const I=z.getViewport(ee);s.set(o.x*I.x,o.y*I.y,o.x*I.z,o.y*I.w),R.viewport(s),z.updateMatrices(O,ee),i=z.getFrustum(),_(S,C,z.camera,O,this.type)}z.isPointLightShadow!==!0&&this.type===Es&&g(z,C),z.needsUpdate=!1}p.needsUpdate=!1,t.setRenderTarget(P,y,T)};function g(M,S){const C=e.update(h);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Hr(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(S,null,C,d,h,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(S,null,C,m,h,null)}function v(M,S,C,P,y,T){let R=null;const K=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(K!==void 0)R=K;else if(R=C.isPointLight===!0?l:a,t.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const J=R.uuid,O=S.uuid;let z=c[J];z===void 0&&(z={},c[J]=z);let $=z[O];$===void 0&&($=R.clone(),z[O]=$),R=$}return R.visible=S.visible,R.wireframe=S.wireframe,T===Es?R.side=S.shadowSide!==null?S.shadowSide:S.side:R.side=S.shadowSide!==null?S.shadowSide:f[S.side],R.alphaMap=S.alphaMap,R.alphaTest=S.alphaTest,R.map=S.map,R.clipShadows=S.clipShadows,R.clippingPlanes=S.clippingPlanes,R.clipIntersection=S.clipIntersection,R.displacementMap=S.displacementMap,R.displacementScale=S.displacementScale,R.displacementBias=S.displacementBias,R.wireframeLinewidth=S.wireframeLinewidth,R.linewidth=S.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=P,R.farDistance=y),R}function _(M,S,C,P,y){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===Es)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const K=e.update(M),J=M.material;if(Array.isArray(J)){const O=K.groups;for(let z=0,$=O.length;z<$;z++){const Q=O[z],ee=J[Q.materialIndex];if(ee&&ee.visible){const I=v(M,ee,P,C.near,C.far,y);t.renderBufferDirect(C,null,K,I,M,Q)}}}else if(J.visible){const O=v(M,J,P,C.near,C.far,y);t.renderBufferDirect(C,null,K,O,M,null)}}const R=M.children;for(let K=0,J=R.length;K<J;K++)_(R[K],S,C,P,y)}}function o2(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const X=new Ft;let ne=null;const ve=new Ft(0,0,0,0);return{setMask:function(Ee){ne!==Ee&&!N&&(t.colorMask(Ee,Ee,Ee,Ee),ne=Ee)},setLocked:function(Ee){N=Ee},setClear:function(Ee,qe,Tt,Gt,dr){dr===!0&&(Ee*=Gt,qe*=Gt,Tt*=Gt),X.set(Ee,qe,Tt,Gt),ve.equals(X)===!1&&(t.clearColor(Ee,qe,Tt,Gt),ve.copy(X))},reset:function(){N=!1,ne=null,ve.set(-1,0,0,0)}}}function o(){let N=!1,X=null,ne=null,ve=null;return{setTest:function(Ee){Ee?ye(2929):he(2929)},setMask:function(Ee){X!==Ee&&!N&&(t.depthMask(Ee),X=Ee)},setFunc:function(Ee){if(ne!==Ee){switch(Ee){case IS:t.depthFunc(512);break;case kS:t.depthFunc(519);break;case zS:t.depthFunc(513);break;case Ed:t.depthFunc(515);break;case FS:t.depthFunc(514);break;case OS:t.depthFunc(518);break;case US:t.depthFunc(516);break;case BS:t.depthFunc(517);break;default:t.depthFunc(515)}ne=Ee}},setLocked:function(Ee){N=Ee},setClear:function(Ee){ve!==Ee&&(t.clearDepth(Ee),ve=Ee)},reset:function(){N=!1,X=null,ne=null,ve=null}}}function s(){let N=!1,X=null,ne=null,ve=null,Ee=null,qe=null,Tt=null,Gt=null,dr=null;return{setTest:function(nt){N||(nt?ye(2960):he(2960))},setMask:function(nt){X!==nt&&!N&&(t.stencilMask(nt),X=nt)},setFunc:function(nt,ui,Pn){(ne!==nt||ve!==ui||Ee!==Pn)&&(t.stencilFunc(nt,ui,Pn),ne=nt,ve=ui,Ee=Pn)},setOp:function(nt,ui,Pn){(qe!==nt||Tt!==ui||Gt!==Pn)&&(t.stencilOp(nt,ui,Pn),qe=nt,Tt=ui,Gt=Pn)},setLocked:function(nt){N=nt},setClear:function(nt){dr!==nt&&(t.clearStencil(nt),dr=nt)},reset:function(){N=!1,X=null,ne=null,ve=null,Ee=null,qe=null,Tt=null,Gt=null,dr=null}}}const a=new r,l=new o,c=new s,u=new WeakMap,f=new WeakMap;let d={},m={},x=new WeakMap,h=[],p=null,g=!1,v=null,_=null,M=null,S=null,C=null,P=null,y=null,T=!1,R=null,K=null,J=null,O=null,z=null;const $=t.getParameter(35661);let Q=!1,ee=0;const I=t.getParameter(7938);I.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(I)[1]),Q=ee>=1):I.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),Q=ee>=2);let G=null,W={};const se=t.getParameter(3088),U=t.getParameter(2978),Z=new Ft().fromArray(se),re=new Ft().fromArray(U);function le(N,X,ne){const ve=new Uint8Array(4),Ee=t.createTexture();t.bindTexture(N,Ee),t.texParameteri(N,10241,9728),t.texParameteri(N,10240,9728);for(let qe=0;qe<ne;qe++)t.texImage2D(X+qe,0,6408,1,1,0,6408,5121,ve);return Ee}const D={};D[3553]=le(3553,3553,1),D[34067]=le(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ye(2929),l.setFunc(Ed),dt(!1),Yt(pp),ye(2884),Et(er);function ye(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function he(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function ae(N,X){return m[N]!==X?(t.bindFramebuffer(N,X),m[N]=X,i&&(N===36009&&(m[36160]=X),N===36160&&(m[36009]=X)),!0):!1}function oe(N,X){let ne=h,ve=!1;if(N)if(ne=x.get(X),ne===void 0&&(ne=[],x.set(X,ne)),N.isWebGLMultipleRenderTargets){const Ee=N.texture;if(ne.length!==Ee.length||ne[0]!==36064){for(let qe=0,Tt=Ee.length;qe<Tt;qe++)ne[qe]=36064+qe;ne.length=Ee.length,ve=!0}}else ne[0]!==36064&&(ne[0]=36064,ve=!0);else ne[0]!==1029&&(ne[0]=1029,ve=!0);ve&&(n.isWebGL2?t.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Ie(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const De={[mo]:32774,[wS]:32778,[bS]:32779};if(i)De[_p]=32775,De[xp]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(De[_p]=N.MIN_EXT,De[xp]=N.MAX_EXT)}const Ce={[ES]:0,[TS]:1,[CS]:768,[Z0]:770,[NS]:776,[DS]:774,[PS]:772,[AS]:769,[Q0]:771,[RS]:775,[LS]:773};function Et(N,X,ne,ve,Ee,qe,Tt,Gt){if(N===er){g===!0&&(he(3042),g=!1);return}if(g===!1&&(ye(3042),g=!0),N!==MS){if(N!==v||Gt!==T){if((_!==mo||C!==mo)&&(t.blendEquation(32774),_=mo,C=mo),Gt)switch(N){case zo:t.blendFuncSeparate(1,771,1,771);break;case mp:t.blendFunc(1,1);break;case gp:t.blendFuncSeparate(0,769,0,1);break;case vp:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case zo:t.blendFuncSeparate(770,771,1,771);break;case mp:t.blendFunc(770,1);break;case gp:t.blendFuncSeparate(0,769,0,1);break;case vp:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,S=null,P=null,y=null,v=N,T=Gt}return}Ee=Ee||X,qe=qe||ne,Tt=Tt||ve,(X!==_||Ee!==C)&&(t.blendEquationSeparate(De[X],De[Ee]),_=X,C=Ee),(ne!==M||ve!==S||qe!==P||Tt!==y)&&(t.blendFuncSeparate(Ce[ne],Ce[ve],Ce[qe],Ce[Tt]),M=ne,S=ve,P=qe,y=Tt),v=N,T=!1}function Vt(N,X){N.side===kt?he(2884):ye(2884);let ne=N.side===wn;X&&(ne=!ne),dt(ne),N.blending===zo&&N.transparent===!1?Et(er):Et(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const ve=N.stencilWrite;c.setTest(ve),ve&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Xe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ye(32926):he(32926)}function dt(N){R!==N&&(N?t.frontFace(2304):t.frontFace(2305),R=N)}function Yt(N){N!==yS?(ye(2884),N!==K&&(N===pp?t.cullFace(1029):N===SS?t.cullFace(1028):t.cullFace(1032))):he(2884),K=N}function ct(N){N!==J&&(Q&&t.lineWidth(N),J=N)}function Xe(N,X,ne){N?(ye(32823),(O!==X||z!==ne)&&(t.polygonOffset(X,ne),O=X,z=ne)):he(32823)}function An(N){N?ye(3089):he(3089)}function on(N){N===void 0&&(N=33984+$-1),G!==N&&(t.activeTexture(N),G=N)}function E(N,X,ne){ne===void 0&&(G===null?ne=33984+$-1:ne=G);let ve=W[ne];ve===void 0&&(ve={type:void 0,texture:void 0},W[ne]=ve),(ve.type!==N||ve.texture!==X)&&(G!==ne&&(t.activeTexture(ne),G=ne),t.bindTexture(N,X||D[N]),ve.type=N,ve.texture=X)}function w(){const N=W[G];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function A(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(N){Z.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Z.copy(N))}function Me(N){re.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),re.copy(N))}function Oe(N,X){let ne=f.get(X);ne===void 0&&(ne=new WeakMap,f.set(X,ne));let ve=ne.get(N);ve===void 0&&(ve=t.getUniformBlockIndex(X,N.name),ne.set(N,ve))}function Ue(N,X){const ve=f.get(X).get(N);u.get(X)!==ve&&(t.uniformBlockBinding(X,ve,N.__bindingPointIndex),u.set(X,ve))}function Ye(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},G=null,W={},m={},x=new WeakMap,h=[],p=null,g=!1,v=null,_=null,M=null,S=null,C=null,P=null,y=null,T=!1,R=null,K=null,J=null,O=null,z=null,Z.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ye,disable:he,bindFramebuffer:ae,drawBuffers:oe,useProgram:Ie,setBlending:Et,setMaterial:Vt,setFlipSided:dt,setCullFace:Yt,setLineWidth:ct,setPolygonOffset:Xe,setScissorTest:An,activeTexture:on,bindTexture:E,unbindTexture:w,compressedTexImage2D:j,compressedTexImage3D:ie,texImage2D:Se,texImage3D:pe,updateUBOMapping:Oe,uniformBlockBinding:Ue,texStorage2D:k,texStorage3D:me,texSubImage2D:ce,texSubImage3D:fe,compressedTexSubImage2D:Pe,compressedTexSubImage3D:A,scissor:be,viewport:Me,reset:Ye}}function s2(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,w){return g?new OffscreenCanvas(E,w):ra("canvas")}function _(E,w,j,ie){let ce=1;if((E.width>ie||E.height>ie)&&(ce=ie/Math.max(E.width,E.height)),ce<1||w===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const fe=w?Ld:Math.floor,Pe=fe(ce*E.width),A=fe(ce*E.height);h===void 0&&(h=v(Pe,A));const k=j?v(Pe,A):h;return k.width=Pe,k.height=A,k.getContext("2d").drawImage(E,0,0,Pe,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Pe+"x"+A+")."),k}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function M(E){return qp(E.width)&&qp(E.height)}function S(E){return a?!1:E.wrapS!==Yn||E.wrapT!==Yn||E.minFilter!==yt&&E.minFilter!==In}function C(E,w){return E.generateMipmaps&&w&&E.minFilter!==yt&&E.minFilter!==In}function P(E){t.generateMipmap(E)}function y(E,w,j,ie,ce=!1){if(a===!1)return w;if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let fe=w;return w===6403&&(j===5126&&(fe=33326),j===5131&&(fe=33325),j===5121&&(fe=33321)),w===33319&&(j===5126&&(fe=33328),j===5131&&(fe=33327),j===5121&&(fe=33323)),w===6408&&(j===5126&&(fe=34836),j===5131&&(fe=34842),j===5121&&(fe=ie===Qe&&ce===!1?35907:32856),j===32819&&(fe=32854),j===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function T(E,w,j){return C(E,j)===!0||E.isFramebufferTexture&&E.minFilter!==yt&&E.minFilter!==In?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}function R(E){return E===yt||E===yp||E===Gc?9728:9729}function K(E){const w=E.target;w.removeEventListener("dispose",K),O(w),w.isVideoTexture&&x.delete(w)}function J(E){const w=E.target;w.removeEventListener("dispose",J),$(w)}function O(E){const w=i.get(E);if(w.__webglInit===void 0)return;const j=E.source,ie=p.get(j);if(ie){const ce=ie[w.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&z(E),Object.keys(ie).length===0&&p.delete(j)}i.remove(E)}function z(E){const w=i.get(E);t.deleteTexture(w.__webglTexture);const j=E.source,ie=p.get(j);delete ie[w.__cacheKey],s.memory.textures--}function $(E){const w=E.texture,j=i.get(E),ie=i.get(w);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),s.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++)t.deleteFramebuffer(j.__webglFramebuffer[ce]),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer[ce]);else{if(t.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&t.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ce=0;ce<j.__webglColorRenderbuffer.length;ce++)j.__webglColorRenderbuffer[ce]&&t.deleteRenderbuffer(j.__webglColorRenderbuffer[ce]);j.__webglDepthRenderbuffer&&t.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ce=0,fe=w.length;ce<fe;ce++){const Pe=i.get(w[ce]);Pe.__webglTexture&&(t.deleteTexture(Pe.__webglTexture),s.memory.textures--),i.remove(w[ce])}i.remove(w),i.remove(E)}let Q=0;function ee(){Q=0}function I(){const E=Q;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),Q+=1,E}function G(E){const w=[];return w.push(E.wrapS),w.push(E.wrapT),w.push(E.wrapR||0),w.push(E.magFilter),w.push(E.minFilter),w.push(E.anisotropy),w.push(E.internalFormat),w.push(E.format),w.push(E.type),w.push(E.generateMipmaps),w.push(E.premultiplyAlpha),w.push(E.flipY),w.push(E.unpackAlignment),w.push(E.encoding),w.join()}function W(E,w){const j=i.get(E);if(E.isVideoTexture&&An(E),E.isRenderTargetTexture===!1&&E.version>0&&j.__version!==E.version){const ie=E.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(j,E,w);return}}n.bindTexture(3553,j.__webglTexture,33984+w)}function se(E,w){const j=i.get(E);if(E.version>0&&j.__version!==E.version){he(j,E,w);return}n.bindTexture(35866,j.__webglTexture,33984+w)}function U(E,w){const j=i.get(E);if(E.version>0&&j.__version!==E.version){he(j,E,w);return}n.bindTexture(32879,j.__webglTexture,33984+w)}function Z(E,w){const j=i.get(E);if(E.version>0&&j.__version!==E.version){ae(j,E,w);return}n.bindTexture(34067,j.__webglTexture,33984+w)}const re={[si]:10497,[Yn]:33071,[Ad]:33648},le={[yt]:9728,[yp]:9984,[Gc]:9986,[In]:9729,[$S]:9985,[ta]:9987};function D(E,w,j){if(j?(t.texParameteri(E,10242,re[w.wrapS]),t.texParameteri(E,10243,re[w.wrapT]),(E===32879||E===35866)&&t.texParameteri(E,32882,re[w.wrapR]),t.texParameteri(E,10240,le[w.magFilter]),t.texParameteri(E,10241,le[w.minFilter])):(t.texParameteri(E,10242,33071),t.texParameteri(E,10243,33071),(E===32879||E===35866)&&t.texParameteri(E,32882,33071),(w.wrapS!==Yn||w.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(E,10240,R(w.magFilter)),t.texParameteri(E,10241,R(w.minFilter)),w.minFilter!==yt&&w.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===yt||w.minFilter!==Gc&&w.minFilter!==ta||w.type===Lr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===na&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(E,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ye(E,w){let j=!1;E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",K));const ie=w.source;let ce=p.get(ie);ce===void 0&&(ce={},p.set(ie,ce));const fe=G(w);if(fe!==E.__cacheKey){ce[fe]===void 0&&(ce[fe]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,j=!0),ce[fe].usedTimes++;const Pe=ce[E.__cacheKey];Pe!==void 0&&(ce[E.__cacheKey].usedTimes--,Pe.usedTimes===0&&z(w)),E.__cacheKey=fe,E.__webglTexture=ce[fe].texture}return j}function he(E,w,j){let ie=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=35866),w.isData3DTexture&&(ie=32879);const ce=ye(E,w),fe=w.source;n.bindTexture(ie,E.__webglTexture,33984+j);const Pe=i.get(fe);if(fe.version!==Pe.__version||ce===!0){n.activeTexture(33984+j),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const A=S(w)&&M(w.image)===!1;let k=_(w.image,A,!1,u);k=on(w,k);const me=M(k)||a,Se=o.convert(w.format,w.encoding);let pe=o.convert(w.type),be=y(w.internalFormat,Se,pe,w.encoding,w.isVideoTexture);D(ie,w,me);let Me;const Oe=w.mipmaps,Ue=a&&w.isVideoTexture!==!0,Ye=Pe.__version===void 0||ce===!0,N=T(w,k,me);if(w.isDepthTexture)be=6402,a?w.type===Lr?be=36012:w.type===Pr?be=33190:w.type===Fo?be=35056:be=33189:w.type===Lr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Nr&&be===6402&&w.type!==tv&&w.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Pr,pe=o.convert(w.type)),w.format===Yo&&be===6402&&(be=34041,w.type!==Fo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Fo,pe=o.convert(w.type))),Ye&&(Ue?n.texStorage2D(3553,1,be,k.width,k.height):n.texImage2D(3553,0,be,k.width,k.height,0,Se,pe,null));else if(w.isDataTexture)if(Oe.length>0&&me){Ue&&Ye&&n.texStorage2D(3553,N,be,Oe[0].width,Oe[0].height);for(let X=0,ne=Oe.length;X<ne;X++)Me=Oe[X],Ue?n.texSubImage2D(3553,X,0,0,Me.width,Me.height,Se,pe,Me.data):n.texImage2D(3553,X,be,Me.width,Me.height,0,Se,pe,Me.data);w.generateMipmaps=!1}else Ue?(Ye&&n.texStorage2D(3553,N,be,k.width,k.height),n.texSubImage2D(3553,0,0,0,k.width,k.height,Se,pe,k.data)):n.texImage2D(3553,0,be,k.width,k.height,0,Se,pe,k.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ue&&Ye&&n.texStorage3D(35866,N,be,Oe[0].width,Oe[0].height,k.depth);for(let X=0,ne=Oe.length;X<ne;X++)Me=Oe[X],w.format!==zn?Se!==null?Ue?n.compressedTexSubImage3D(35866,X,0,0,0,Me.width,Me.height,k.depth,Se,Me.data,0,0):n.compressedTexImage3D(35866,X,be,Me.width,Me.height,k.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?n.texSubImage3D(35866,X,0,0,0,Me.width,Me.height,k.depth,Se,pe,Me.data):n.texImage3D(35866,X,be,Me.width,Me.height,k.depth,0,Se,pe,Me.data)}else{Ue&&Ye&&n.texStorage2D(3553,N,be,Oe[0].width,Oe[0].height);for(let X=0,ne=Oe.length;X<ne;X++)Me=Oe[X],w.format!==zn?Se!==null?Ue?n.compressedTexSubImage2D(3553,X,0,0,Me.width,Me.height,Se,Me.data):n.compressedTexImage2D(3553,X,be,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?n.texSubImage2D(3553,X,0,0,Me.width,Me.height,Se,pe,Me.data):n.texImage2D(3553,X,be,Me.width,Me.height,0,Se,pe,Me.data)}else if(w.isDataArrayTexture)Ue?(Ye&&n.texStorage3D(35866,N,be,k.width,k.height,k.depth),n.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,Se,pe,k.data)):n.texImage3D(35866,0,be,k.width,k.height,k.depth,0,Se,pe,k.data);else if(w.isData3DTexture)Ue?(Ye&&n.texStorage3D(32879,N,be,k.width,k.height,k.depth),n.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,Se,pe,k.data)):n.texImage3D(32879,0,be,k.width,k.height,k.depth,0,Se,pe,k.data);else if(w.isFramebufferTexture){if(Ye)if(Ue)n.texStorage2D(3553,N,be,k.width,k.height);else{let X=k.width,ne=k.height;for(let ve=0;ve<N;ve++)n.texImage2D(3553,ve,be,X,ne,0,Se,pe,null),X>>=1,ne>>=1}}else if(Oe.length>0&&me){Ue&&Ye&&n.texStorage2D(3553,N,be,Oe[0].width,Oe[0].height);for(let X=0,ne=Oe.length;X<ne;X++)Me=Oe[X],Ue?n.texSubImage2D(3553,X,0,0,Se,pe,Me):n.texImage2D(3553,X,be,Se,pe,Me);w.generateMipmaps=!1}else Ue?(Ye&&n.texStorage2D(3553,N,be,k.width,k.height),n.texSubImage2D(3553,0,0,0,Se,pe,k)):n.texImage2D(3553,0,be,Se,pe,k);C(w,me)&&P(ie),Pe.__version=fe.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function ae(E,w,j){if(w.image.length!==6)return;const ie=ye(E,w),ce=w.source;n.bindTexture(34067,E.__webglTexture,33984+j);const fe=i.get(ce);if(ce.version!==fe.__version||ie===!0){n.activeTexture(33984+j),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const Pe=w.isCompressedTexture||w.image[0].isCompressedTexture,A=w.image[0]&&w.image[0].isDataTexture,k=[];for(let X=0;X<6;X++)!Pe&&!A?k[X]=_(w.image[X],!1,!0,c):k[X]=A?w.image[X].image:w.image[X],k[X]=on(w,k[X]);const me=k[0],Se=M(me)||a,pe=o.convert(w.format,w.encoding),be=o.convert(w.type),Me=y(w.internalFormat,pe,be,w.encoding),Oe=a&&w.isVideoTexture!==!0,Ue=fe.__version===void 0||ie===!0;let Ye=T(w,me,Se);D(34067,w,Se);let N;if(Pe){Oe&&Ue&&n.texStorage2D(34067,Ye,Me,me.width,me.height);for(let X=0;X<6;X++){N=k[X].mipmaps;for(let ne=0;ne<N.length;ne++){const ve=N[ne];w.format!==zn?pe!==null?Oe?n.compressedTexSubImage2D(34069+X,ne,0,0,ve.width,ve.height,pe,ve.data):n.compressedTexImage2D(34069+X,ne,Me,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?n.texSubImage2D(34069+X,ne,0,0,ve.width,ve.height,pe,be,ve.data):n.texImage2D(34069+X,ne,Me,ve.width,ve.height,0,pe,be,ve.data)}}}else{N=w.mipmaps,Oe&&Ue&&(N.length>0&&Ye++,n.texStorage2D(34067,Ye,Me,k[0].width,k[0].height));for(let X=0;X<6;X++)if(A){Oe?n.texSubImage2D(34069+X,0,0,0,k[X].width,k[X].height,pe,be,k[X].data):n.texImage2D(34069+X,0,Me,k[X].width,k[X].height,0,pe,be,k[X].data);for(let ne=0;ne<N.length;ne++){const Ee=N[ne].image[X].image;Oe?n.texSubImage2D(34069+X,ne+1,0,0,Ee.width,Ee.height,pe,be,Ee.data):n.texImage2D(34069+X,ne+1,Me,Ee.width,Ee.height,0,pe,be,Ee.data)}}else{Oe?n.texSubImage2D(34069+X,0,0,0,pe,be,k[X]):n.texImage2D(34069+X,0,Me,pe,be,k[X]);for(let ne=0;ne<N.length;ne++){const ve=N[ne];Oe?n.texSubImage2D(34069+X,ne+1,0,0,pe,be,ve.image[X]):n.texImage2D(34069+X,ne+1,Me,pe,be,ve.image[X])}}}C(w,Se)&&P(34067),fe.__version=ce.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function oe(E,w,j,ie,ce){const fe=o.convert(j.format,j.encoding),Pe=o.convert(j.type),A=y(j.internalFormat,fe,Pe,j.encoding);i.get(w).__hasExternalTextures||(ce===32879||ce===35866?n.texImage3D(ce,0,A,w.width,w.height,w.depth,0,fe,Pe,null):n.texImage2D(ce,0,A,w.width,w.height,0,fe,Pe,null)),n.bindFramebuffer(36160,E),Xe(w)?d.framebufferTexture2DMultisampleEXT(36160,ie,ce,i.get(j).__webglTexture,0,ct(w)):(ce===3553||ce>=34069&&ce<=34074)&&t.framebufferTexture2D(36160,ie,ce,i.get(j).__webglTexture,0),n.bindFramebuffer(36160,null)}function Ie(E,w,j){if(t.bindRenderbuffer(36161,E),w.depthBuffer&&!w.stencilBuffer){let ie=33189;if(j||Xe(w)){const ce=w.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Lr?ie=36012:ce.type===Pr&&(ie=33190));const fe=ct(w);Xe(w)?d.renderbufferStorageMultisampleEXT(36161,fe,ie,w.width,w.height):t.renderbufferStorageMultisample(36161,fe,ie,w.width,w.height)}else t.renderbufferStorage(36161,ie,w.width,w.height);t.framebufferRenderbuffer(36160,36096,36161,E)}else if(w.depthBuffer&&w.stencilBuffer){const ie=ct(w);j&&Xe(w)===!1?t.renderbufferStorageMultisample(36161,ie,35056,w.width,w.height):Xe(w)?d.renderbufferStorageMultisampleEXT(36161,ie,35056,w.width,w.height):t.renderbufferStorage(36161,34041,w.width,w.height),t.framebufferRenderbuffer(36160,33306,36161,E)}else{const ie=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ce=0;ce<ie.length;ce++){const fe=ie[ce],Pe=o.convert(fe.format,fe.encoding),A=o.convert(fe.type),k=y(fe.internalFormat,Pe,A,fe.encoding),me=ct(w);j&&Xe(w)===!1?t.renderbufferStorageMultisample(36161,me,k,w.width,w.height):Xe(w)?d.renderbufferStorageMultisampleEXT(36161,me,k,w.width,w.height):t.renderbufferStorage(36161,k,w.width,w.height)}}t.bindRenderbuffer(36161,null)}function De(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const ie=i.get(w.depthTexture).__webglTexture,ce=ct(w);if(w.depthTexture.format===Nr)Xe(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,ce):t.framebufferTexture2D(36160,36096,3553,ie,0);else if(w.depthTexture.format===Yo)Xe(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,ce):t.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function Ce(E){const w=i.get(E),j=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");De(w.__webglFramebuffer,E)}else if(j){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(36160,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]=t.createRenderbuffer(),Ie(w.__webglDepthbuffer[ie],E,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),Ie(w.__webglDepthbuffer,E,!1);n.bindFramebuffer(36160,null)}function Et(E,w,j){const ie=i.get(E);w!==void 0&&oe(ie.__webglFramebuffer,E,E.texture,36064,3553),j!==void 0&&Ce(E)}function Vt(E){const w=E.texture,j=i.get(E),ie=i.get(w);E.addEventListener("dispose",J),E.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=w.version,s.memory.textures++);const ce=E.isWebGLCubeRenderTarget===!0,fe=E.isWebGLMultipleRenderTargets===!0,Pe=M(E)||a;if(ce){j.__webglFramebuffer=[];for(let A=0;A<6;A++)j.__webglFramebuffer[A]=t.createFramebuffer()}else{if(j.__webglFramebuffer=t.createFramebuffer(),fe)if(r.drawBuffers){const A=E.texture;for(let k=0,me=A.length;k<me;k++){const Se=i.get(A[k]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Xe(E)===!1){const A=fe?w:[w];j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let k=0;k<A.length;k++){const me=A[k];j.__webglColorRenderbuffer[k]=t.createRenderbuffer(),t.bindRenderbuffer(36161,j.__webglColorRenderbuffer[k]);const Se=o.convert(me.format,me.encoding),pe=o.convert(me.type),be=y(me.internalFormat,Se,pe,me.encoding,E.isXRRenderTarget===!0),Me=ct(E);t.renderbufferStorageMultisample(36161,Me,be,E.width,E.height),t.framebufferRenderbuffer(36160,36064+k,36161,j.__webglColorRenderbuffer[k])}t.bindRenderbuffer(36161,null),E.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(j.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(36160,null)}}if(ce){n.bindTexture(34067,ie.__webglTexture),D(34067,w,Pe);for(let A=0;A<6;A++)oe(j.__webglFramebuffer[A],E,w,36064,34069+A);C(w,Pe)&&P(34067),n.unbindTexture()}else if(fe){const A=E.texture;for(let k=0,me=A.length;k<me;k++){const Se=A[k],pe=i.get(Se);n.bindTexture(3553,pe.__webglTexture),D(3553,Se,Pe),oe(j.__webglFramebuffer,E,Se,36064+k,3553),C(Se,Pe)&&P(3553)}n.unbindTexture()}else{let A=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?A=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(A,ie.__webglTexture),D(A,w,Pe),oe(j.__webglFramebuffer,E,w,36064,A),C(w,Pe)&&P(A),n.unbindTexture()}E.depthBuffer&&Ce(E)}function dt(E){const w=M(E)||a,j=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0,ce=j.length;ie<ce;ie++){const fe=j[ie];if(C(fe,w)){const Pe=E.isWebGLCubeRenderTarget?34067:3553,A=i.get(fe).__webglTexture;n.bindTexture(Pe,A),P(Pe),n.unbindTexture()}}}function Yt(E){if(a&&E.samples>0&&Xe(E)===!1){const w=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],j=E.width,ie=E.height;let ce=16384;const fe=[],Pe=E.stencilBuffer?33306:36096,A=i.get(E),k=E.isWebGLMultipleRenderTargets===!0;if(k)for(let me=0;me<w.length;me++)n.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+me,36161,null),n.bindFramebuffer(36160,A.__webglFramebuffer),t.framebufferTexture2D(36009,36064+me,3553,null,0);n.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,A.__webglFramebuffer);for(let me=0;me<w.length;me++){fe.push(36064+me),E.depthBuffer&&fe.push(Pe);const Se=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(Se===!1&&(E.depthBuffer&&(ce|=256),E.stencilBuffer&&(ce|=1024)),k&&t.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[me]),Se===!0&&(t.invalidateFramebuffer(36008,[Pe]),t.invalidateFramebuffer(36009,[Pe])),k){const pe=i.get(w[me]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,pe,0)}t.blitFramebuffer(0,0,j,ie,0,0,j,ie,ce,9728),m&&t.invalidateFramebuffer(36008,fe)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),k)for(let me=0;me<w.length;me++){n.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+me,36161,A.__webglColorRenderbuffer[me]);const Se=i.get(w[me]).__webglTexture;n.bindFramebuffer(36160,A.__webglFramebuffer),t.framebufferTexture2D(36009,36064+me,3553,Se,0)}n.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function ct(E){return Math.min(f,E.samples)}function Xe(E){const w=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function An(E){const w=s.render.frame;x.get(E)!==w&&(x.set(E,w),E.update())}function on(E,w){const j=E.encoding,ie=E.format,ce=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Pd||j!==Gr&&(j===Qe?a===!1?e.has("EXT_sRGB")===!0&&ie===zn?(E.format=Pd,E.minFilter=In,E.generateMipmaps=!1):w=rv.sRGBToLinear(w):(ie!==zn||ce!==Vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),w}this.allocateTextureUnit=I,this.resetTextureUnits=ee,this.setTexture2D=W,this.setTexture2DArray=se,this.setTexture3D=U,this.setTextureCube=Z,this.rebindTextures=Et,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Xe}function a2(t,e,n){const i=n.isWebGL2;function r(o,s=null){let a;if(o===Vr)return 5121;if(o===QS)return 32819;if(o===JS)return 32820;if(o===YS)return 5120;if(o===KS)return 5122;if(o===tv)return 5123;if(o===ZS)return 5124;if(o===Pr)return 5125;if(o===Lr)return 5126;if(o===na)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===e1)return 6406;if(o===zn)return 6408;if(o===t1)return 6409;if(o===n1)return 6410;if(o===Nr)return 6402;if(o===Yo)return 34041;if(o===Pd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===i1)return 6403;if(o===r1)return 36244;if(o===o1)return 33319;if(o===s1)return 33320;if(o===a1)return 36249;if(o===Hc||o===Wc||o===jc||o===Xc)if(s===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Hc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Hc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Wc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===jc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Xc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Sp||o===Mp||o===wp||o===bp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Sp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Mp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===wp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===bp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===l1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Ep||o===Tp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Ep)return s===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Tp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Cp||o===Ap||o===Pp||o===Lp||o===Dp||o===Rp||o===Np||o===Ip||o===kp||o===zp||o===Fp||o===Op||o===Up||o===Bp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Cp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Ap)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Pp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Lp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Dp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Rp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Np)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Ip)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===kp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===zp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Fp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Op)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Up)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Bp)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===qc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===qc)return s===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===c1||o===Vp||o===Gp||o===Hp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===qc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Vp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Gp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Hp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Fo?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class l2 extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bi extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c2={type:"move"};class yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const h of e.hand.values()){const p=n.getJointPose(h,i),g=this._getHandJoint(c,h);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new bi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class u2 extends hn{constructor(e,n,i,r,o,s,a,l,c,u){if(u=u!==void 0?u:Nr,u!==Nr&&u!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Nr&&(i=Pr),i===void 0&&u===Yo&&(i=Fo),super(null,r,o,s,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1}}class d2 extends $r{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,x=null;const h=n.getContextAttributes();let p=null,g=null;const v=[],_=[],M=new Set,S=new Map,C=new kn;C.layers.enable(1),C.viewport=new Ft;const P=new kn;P.layers.enable(2),P.viewport=new Ft;const y=[C,P],T=new l2;T.layers.enable(1),T.layers.enable(2);let R=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Z=v[U];return Z===void 0&&(Z=new yu,v[U]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(U){let Z=v[U];return Z===void 0&&(Z=new yu,v[U]=Z),Z.getGripSpace()},this.getHand=function(U){let Z=v[U];return Z===void 0&&(Z=new yu,v[U]=Z),Z.getHandSpace()};function J(U){const Z=_.indexOf(U.inputSource);if(Z===-1)return;const re=v[Z];re!==void 0&&re.dispatchEvent({type:U.type,data:U.inputSource})}function O(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",z);for(let U=0;U<v.length;U++){const Z=_[U];Z!==null&&(_[U]=null,v[U].disconnect(Z))}R=null,K=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,g=null,se.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){o=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",O),r.addEventListener("inputsourceschange",z),h.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:m}),g=new Hr(m.framebufferWidth,m.framebufferHeight,{format:zn,type:Vr,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let Z=null,re=null,le=null;h.depth&&(le=h.stencil?35056:33190,Z=h.stencil?Yo:Nr,re=h.stencil?Fo:Pr);const D={colorFormat:32856,depthFormat:le,scaleFactor:o};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(D),r.updateRenderState({layers:[d]}),g=new Hr(d.textureWidth,d.textureHeight,{format:zn,type:Vr,depthTexture:new u2(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const ye=e.properties.get(g);ye.__ignoreDepthValues=d.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function z(U){for(let Z=0;Z<U.removed.length;Z++){const re=U.removed[Z],le=_.indexOf(re);le>=0&&(_[le]=null,v[le].disconnect(re))}for(let Z=0;Z<U.added.length;Z++){const re=U.added[Z];let le=_.indexOf(re);if(le===-1){for(let ye=0;ye<v.length;ye++)if(ye>=_.length){_.push(re),le=ye;break}else if(_[ye]===null){_[ye]=re,le=ye;break}if(le===-1)break}const D=v[le];D&&D.connect(re)}}const $=new V,Q=new V;function ee(U,Z,re){$.setFromMatrixPosition(Z.matrixWorld),Q.setFromMatrixPosition(re.matrixWorld);const le=$.distanceTo(Q),D=Z.projectionMatrix.elements,ye=re.projectionMatrix.elements,he=D[14]/(D[10]-1),ae=D[14]/(D[10]+1),oe=(D[9]+1)/D[5],Ie=(D[9]-1)/D[5],De=(D[8]-1)/D[0],Ce=(ye[8]+1)/ye[0],Et=he*De,Vt=he*Ce,dt=le/(-De+Ce),Yt=dt*-De;Z.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Yt),U.translateZ(dt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const ct=he+dt,Xe=ae+dt,An=Et-Yt,on=Vt+(le-Yt),E=oe*ae/Xe*ct,w=Ie*ae/Xe*ct;U.projectionMatrix.makePerspective(An,on,E,w,ct,Xe)}function I(U,Z){Z===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Z.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;T.near=P.near=C.near=U.near,T.far=P.far=C.far=U.far,(R!==T.near||K!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,K=T.far);const Z=U.parent,re=T.cameras;I(T,Z);for(let D=0;D<re.length;D++)I(re[D],Z);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),U.matrix.copy(T.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const le=U.children;for(let D=0,ye=le.length;D<ye;D++)le[D].updateMatrixWorld(!0);re.length===2?ee(T,C,P):T.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)},this.getPlanes=function(){return M};let G=null;function W(U,Z){if(u=Z.getViewerPose(c||s),x=Z,u!==null){const re=u.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let le=!1;re.length!==T.cameras.length&&(T.cameras.length=0,le=!0);for(let D=0;D<re.length;D++){const ye=re[D];let he=null;if(m!==null)he=m.getViewport(ye);else{const oe=f.getViewSubImage(d,ye);he=oe.viewport,D===0&&(e.setRenderTargetTextures(g,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(g))}let ae=y[D];ae===void 0&&(ae=new kn,ae.layers.enable(D),ae.viewport=new Ft,y[D]=ae),ae.matrix.fromArray(ye.transform.matrix),ae.projectionMatrix.fromArray(ye.projectionMatrix),ae.viewport.set(he.x,he.y,he.width,he.height),D===0&&T.matrix.copy(ae.matrix),le===!0&&T.cameras.push(ae)}}for(let re=0;re<v.length;re++){const le=_[re],D=v[re];le!==null&&D!==void 0&&D.update(le,Z,c||s)}if(G&&G(U,Z),Z.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let re=null;for(const le of M)Z.detectedPlanes.has(le)||(re===null&&(re=[]),re.push(le));if(re!==null)for(const le of re)M.delete(le),S.delete(le),i.dispatchEvent({type:"planeremoved",data:le});for(const le of Z.detectedPlanes)if(!M.has(le))M.add(le),S.set(le,Z.lastChangedTime),i.dispatchEvent({type:"planeadded",data:le});else{const D=S.get(le);le.lastChangedTime>D&&(S.set(le,le.lastChangedTime),i.dispatchEvent({type:"planechanged",data:le}))}}x=null}const se=new pv;se.setAnimationLoop(W),this.setAnimationLoop=function(U){G=U},this.dispose=function(){}}}function f2(t,e){function n(h,p){p.color.getRGB(h.fogColor.value,uv(t)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,g,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),u(h,p)):p.isMeshPhongMaterial?(r(h,p),c(h,p)):p.isMeshStandardMaterial?(r(h,p),f(h,p),p.isMeshPhysicalMaterial&&d(h,p,_)):p.isMeshMatcapMaterial?(r(h,p),m(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),x(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(o(h,p),p.isLineDashedMaterial&&s(h,p)):p.isPointsMaterial?a(h,p,g,v):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===wn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===wn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const M=t.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uv2Transform.value.copy(_.matrix))}function o(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function s(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,g,v){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*g,h.scale.value=v*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function c(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function d(h,p,g){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===wn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function x(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function h2(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,_){const M=_.program;i.uniformBlockBinding(v,M)}function c(v,_){let M=r[v.id];M===void 0&&(x(v),M=u(v),r[v.id]=M,v.addEventListener("dispose",p));const S=_.program;i.updateUBOMapping(v,S);const C=e.render.frame;o[v.id]!==C&&(d(v),o[v.id]=C)}function u(v){const _=f();v.__bindingPointIndex=_;const M=t.createBuffer(),S=v.__size,C=v.usage;return t.bindBuffer(35345,M),t.bufferData(35345,S,C),t.bindBuffer(35345,null),t.bindBufferBase(35345,_,M),M}function f(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],M=v.uniforms,S=v.__cache;t.bindBuffer(35345,_);for(let C=0,P=M.length;C<P;C++){const y=M[C];if(m(y,C,S)===!0){const T=y.__offset,R=Array.isArray(y.value)?y.value:[y.value];let K=0;for(let J=0;J<R.length;J++){const O=R[J],z=h(O);typeof O=="number"?(y.__data[0]=O,t.bufferSubData(35345,T+K,y.__data)):O.isMatrix3?(y.__data[0]=O.elements[0],y.__data[1]=O.elements[1],y.__data[2]=O.elements[2],y.__data[3]=O.elements[0],y.__data[4]=O.elements[3],y.__data[5]=O.elements[4],y.__data[6]=O.elements[5],y.__data[7]=O.elements[0],y.__data[8]=O.elements[6],y.__data[9]=O.elements[7],y.__data[10]=O.elements[8],y.__data[11]=O.elements[0]):(O.toArray(y.__data,K),K+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,T,y.__data)}}t.bindBuffer(35345,null)}function m(v,_,M){const S=v.value;if(M[_]===void 0){if(typeof S=="number")M[_]=S;else{const C=Array.isArray(S)?S:[S],P=[];for(let y=0;y<C.length;y++)P.push(C[y].clone());M[_]=P}return!0}else if(typeof S=="number"){if(M[_]!==S)return M[_]=S,!0}else{const C=Array.isArray(M[_])?M[_]:[M[_]],P=Array.isArray(S)?S:[S];for(let y=0;y<C.length;y++){const T=C[y];if(T.equals(P[y])===!1)return T.copy(P[y]),!0}}return!1}function x(v){const _=v.uniforms;let M=0;const S=16;let C=0;for(let P=0,y=_.length;P<y;P++){const T=_[P],R={boundary:0,storage:0},K=Array.isArray(T.value)?T.value:[T.value];for(let J=0,O=K.length;J<O;J++){const z=K[J],$=h(z);R.boundary+=$.boundary,R.storage+=$.storage}if(T.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,P>0){C=M%S;const J=S-C;C!==0&&J-R.boundary<0&&(M+=S-C,T.__offset=M)}M+=R.storage}return C=M%S,C>0&&(M+=S-C),v.__size=M,v.__cache={},this}function h(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){const _=v.target;_.removeEventListener("dispose",p);const M=s.indexOf(_.__bindingPointIndex);s.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete o[_.id]}function g(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:c,dispose:g}}function p2(){const t=ra("canvas");return t.style.display="block",t}function xv(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:p2(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,o=t.antialias!==void 0?t.antialias:!1,s=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",c=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let u;n!==null?u=n.getContextAttributes().alpha:u=t.alpha!==void 0?t.alpha:!1;let f=null,d=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Gr,this.physicallyCorrectLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;const h=this;let p=!1,g=0,v=0,_=null,M=-1,S=null;const C=new Ft,P=new Ft;let y=null,T=e.width,R=e.height,K=1,J=null,O=null;const z=new Ft(0,0,T,R),$=new Ft(0,0,T,R);let Q=!1;const ee=new hv;let I=!1,G=!1,W=null;const se=new Ut,U=new ze,Z=new V,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function le(){return _===null?K:1}let D=n;function ye(b,B){for(let q=0;q<b.length;q++){const F=b[q],Y=e.getContext(F,B);if(Y!==null)return Y}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uf}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Oe,!1),D===null){const B=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&B.shift(),D=ye(B,b),D===null)throw ye(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let he,ae,oe,Ie,De,Ce,Et,Vt,dt,Yt,ct,Xe,An,on,E,w,j,ie,ce,fe,Pe,A,k,me;function Se(){he=new Eb(D),ae=new _b(D,he,t),he.init(ae),A=new a2(D,he,ae),oe=new o2(D,he,ae),Ie=new Ab,De=new jE,Ce=new s2(D,he,oe,De,ae,A,Ie),Et=new yb(h),Vt=new bb(h),dt=new z1(D,ae),k=new gb(D,he,dt,ae),Yt=new Tb(D,dt,Ie,k),ct=new Rb(D,Yt,dt,Ie),ce=new Db(D,ae,Ce),w=new xb(De),Xe=new WE(h,Et,Vt,he,ae,k,w),An=new f2(h,De),on=new qE,E=new JE(he,ae),ie=new mb(h,Et,Vt,oe,ct,u,s),j=new r2(h,ct,ae),me=new h2(D,Ie,ae,oe),fe=new vb(D,he,Ie,ae),Pe=new Cb(D,he,Ie,ae),Ie.programs=Xe.programs,h.capabilities=ae,h.extensions=he,h.properties=De,h.renderLists=on,h.shadowMap=j,h.state=oe,h.info=Ie}Se();const pe=new d2(h,D);this.xr=pe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=he.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=he.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(T,R,!1))},this.getSize=function(b){return b.set(T,R)},this.setSize=function(b,B,q){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=b,R=B,e.width=Math.floor(b*K),e.height=Math.floor(B*K),q!==!1&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(T*K,R*K).floor()},this.setDrawingBufferSize=function(b,B,q){T=b,R=B,K=q,e.width=Math.floor(b*q),e.height=Math.floor(B*q),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(z)},this.setViewport=function(b,B,q,F){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,B,q,F),oe.viewport(C.copy(z).multiplyScalar(K).floor())},this.getScissor=function(b){return b.copy($)},this.setScissor=function(b,B,q,F){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,B,q,F),oe.scissor(P.copy($).multiplyScalar(K).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(b){oe.setScissorTest(Q=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){O=b},this.getClearColor=function(b){return b.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(b=!0,B=!0,q=!0){let F=0;b&&(F|=16384),B&&(F|=256),q&&(F|=1024),D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Oe,!1),on.dispose(),E.dispose(),De.dispose(),Et.dispose(),Vt.dispose(),ct.dispose(),k.dispose(),me.dispose(),Xe.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ve),pe.removeEventListener("sessionend",Ee),W&&(W.dispose(),W=null),qe.stop()};function be(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const b=Ie.autoReset,B=j.enabled,q=j.autoUpdate,F=j.needsUpdate,Y=j.type;Se(),Ie.autoReset=b,j.enabled=B,j.autoUpdate=q,j.needsUpdate=F,j.type=Y}function Oe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ue(b){const B=b.target;B.removeEventListener("dispose",Ue),Ye(B)}function Ye(b){N(b),De.remove(b)}function N(b){const B=De.get(b).programs;B!==void 0&&(B.forEach(function(q){Xe.releaseProgram(q)}),b.isShaderMaterial&&Xe.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,q,F,Y,Te){B===null&&(B=re);const Le=Y.isMesh&&Y.matrixWorld.determinant()<0,Ne=zv(b,B,q,F,Y);oe.setMaterial(F,Le);let ke=q.index,je=1;F.wireframe===!0&&(ke=Yt.getWireframeAttribute(q),je=2);const Be=q.drawRange,Ve=q.attributes.position;let ft=Be.start*je,pn=(Be.start+Be.count)*je;Te!==null&&(ft=Math.max(ft,Te.start*je),pn=Math.min(pn,(Te.start+Te.count)*je)),ke!==null?(ft=Math.max(ft,0),pn=Math.min(pn,ke.count)):Ve!=null&&(ft=Math.max(ft,0),pn=Math.min(pn,Ve.count));const di=pn-ft;if(di<0||di===1/0)return;k.setup(Y,F,Ne,q,ke);let fr,ht=fe;if(ke!==null&&(fr=dt.get(ke),ht=Pe,ht.setIndex(fr)),Y.isMesh)F.wireframe===!0?(oe.setLineWidth(F.wireframeLinewidth*le()),ht.setMode(1)):ht.setMode(4);else if(Y.isLine){let Ge=F.linewidth;Ge===void 0&&(Ge=1),oe.setLineWidth(Ge*le()),Y.isLineSegments?ht.setMode(1):Y.isLineLoop?ht.setMode(2):ht.setMode(3)}else Y.isPoints?ht.setMode(0):Y.isSprite&&ht.setMode(4);if(Y.isInstancedMesh)ht.renderInstances(ft,di,Y.count);else if(q.isInstancedBufferGeometry){const Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,uc=Math.min(q.instanceCount,Ge);ht.renderInstances(ft,di,uc)}else ht.render(ft,di)},this.compile=function(b,B){function q(F,Y,Te){F.transparent===!0&&F.side===kt&&F.forceSinglePass===!1?(F.side=wn,F.needsUpdate=!0,Pn(F,Y,Te),F.side=or,F.needsUpdate=!0,Pn(F,Y,Te),F.side=kt):Pn(F,Y,Te)}d=E.get(b),d.init(),x.push(d),b.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights(h.physicallyCorrectLights),b.traverse(function(F){const Y=F.material;if(Y)if(Array.isArray(Y))for(let Te=0;Te<Y.length;Te++){const Le=Y[Te];q(Le,b,F)}else q(Y,b,F)}),x.pop(),d=null};let X=null;function ne(b){X&&X(b)}function ve(){qe.stop()}function Ee(){qe.start()}const qe=new pv;qe.setAnimationLoop(ne),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(b){X=b,pe.setAnimationLoop(b),b===null?qe.stop():qe.start()},pe.addEventListener("sessionstart",ve),pe.addEventListener("sessionend",Ee),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(B),B=pe.getCamera()),b.isScene===!0&&b.onBeforeRender(h,b,B,_),d=E.get(b,x.length),d.init(),x.push(d),se.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ee.setFromProjectionMatrix(se),G=this.localClippingEnabled,I=w.init(this.clippingPlanes,G),f=on.get(b,m.length),f.init(),m.push(f),Tt(b,B,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(J,O),I===!0&&w.beginShadows();const q=d.state.shadowsArray;if(j.render(q,b,B),I===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(f,b),d.setupLights(h.physicallyCorrectLights),B.isArrayCamera){const F=B.cameras;for(let Y=0,Te=F.length;Y<Te;Y++){const Le=F[Y];Gt(f,b,Le,Le.viewport)}}else Gt(f,b,B);_!==null&&(Ce.updateMultisampleRenderTarget(_),Ce.updateRenderTargetMipmap(_)),b.isScene===!0&&b.onAfterRender(h,b,B),k.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Tt(b,B,q,F){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ee.intersectsSprite(b)){F&&Z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(se);const Le=ct.update(b),Ne=b.material;Ne.visible&&f.push(b,Le,Ne,q,Z.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Ie.render.frame&&(b.skeleton.update(),b.skeleton.frame=Ie.render.frame),!b.frustumCulled||ee.intersectsObject(b))){F&&Z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(se);const Le=ct.update(b),Ne=b.material;if(Array.isArray(Ne)){const ke=Le.groups;for(let je=0,Be=ke.length;je<Be;je++){const Ve=ke[je],ft=Ne[Ve.materialIndex];ft&&ft.visible&&f.push(b,Le,ft,q,Z.z,Ve)}}else Ne.visible&&f.push(b,Le,Ne,q,Z.z,null)}}const Te=b.children;for(let Le=0,Ne=Te.length;Le<Ne;Le++)Tt(Te[Le],B,q,F)}function Gt(b,B,q,F){const Y=b.opaque,Te=b.transmissive,Le=b.transparent;d.setupLightsView(q),I===!0&&w.setGlobalState(h.clippingPlanes,q),Te.length>0&&dr(Y,B,q),F&&oe.viewport(C.copy(F)),Y.length>0&&nt(Y,B,q),Te.length>0&&nt(Te,B,q),Le.length>0&&nt(Le,B,q),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function dr(b,B,q){const F=ae.isWebGL2;W===null&&(W=new Hr(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?na:Vr,minFilter:ta,samples:F&&o===!0?4:0})),h.getDrawingBufferSize(U),F?W.setSize(U.x,U.y):W.setSize(Ld(U.x),Ld(U.y));const Y=h.getRenderTarget();h.setRenderTarget(W),h.clear();const Te=h.toneMapping;h.toneMapping=Ti,nt(b,B,q),h.toneMapping=Te,Ce.updateMultisampleRenderTarget(W),Ce.updateRenderTargetMipmap(W),h.setRenderTarget(Y)}function nt(b,B,q){const F=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,Te=b.length;Y<Te;Y++){const Le=b[Y],Ne=Le.object,ke=Le.geometry,je=F===null?Le.material:F,Be=Le.group;Ne.layers.test(q.layers)&&ui(Ne,B,q,ke,je,Be)}}function ui(b,B,q,F,Y,Te){b.onBeforeRender(h,B,q,F,Y,Te),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(h,B,q,F,b,Te),Y.transparent===!0&&Y.side===kt&&Y.forceSinglePass===!1?(Y.side=wn,Y.needsUpdate=!0,h.renderBufferDirect(q,B,F,Y,b,Te),Y.side=or,Y.needsUpdate=!0,h.renderBufferDirect(q,B,F,Y,b,Te),Y.side=kt):h.renderBufferDirect(q,B,F,Y,b,Te),b.onAfterRender(h,B,q,F,Y,Te)}function Pn(b,B,q){B.isScene!==!0&&(B=re);const F=De.get(b),Y=d.state.lights,Te=d.state.shadowsArray,Le=Y.state.version,Ne=Xe.getParameters(b,Y.state,Te,B,q),ke=Xe.getProgramCacheKey(Ne);let je=F.programs;F.environment=b.isMeshStandardMaterial?B.environment:null,F.fog=B.fog,F.envMap=(b.isMeshStandardMaterial?Vt:Et).get(b.envMap||F.environment),je===void 0&&(b.addEventListener("dispose",Ue),je=new Map,F.programs=je);let Be=je.get(ke);if(Be!==void 0){if(F.currentProgram===Be&&F.lightsStateVersion===Le)return Xf(b,Ne),Be}else Ne.uniforms=Xe.getUniforms(b),b.onBuild(q,Ne,h),b.onBeforeCompile(Ne,h),Be=Xe.acquireProgram(Ne,ke),je.set(ke,Be),F.uniforms=Ne.uniforms;const Ve=F.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ve.clippingPlanes=w.uniform),Xf(b,Ne),F.needsLights=Ov(b),F.lightsStateVersion=Le,F.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.directionalShadowMap.value=Y.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotShadowMap.value=Y.state.spotShadowMap,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMap.value=Y.state.pointShadowMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix);const ft=Be.getUniforms(),pn=dl.seqWithValue(ft.seq,Ve);return F.currentProgram=Be,F.uniformsList=pn,Be}function Xf(b,B){const q=De.get(b);q.outputEncoding=B.outputEncoding,q.instancing=B.instancing,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function zv(b,B,q,F,Y){B.isScene!==!0&&(B=re),Ce.resetTextureUnits();const Te=B.fog,Le=F.isMeshStandardMaterial?B.environment:null,Ne=_===null?h.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Gr,ke=(F.isMeshStandardMaterial?Vt:Et).get(F.envMap||Le),je=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Be=!!F.normalMap&&!!q.attributes.tangent,Ve=!!q.morphAttributes.position,ft=!!q.morphAttributes.normal,pn=!!q.morphAttributes.color,di=F.toneMapped?h.toneMapping:Ti,fr=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ht=fr!==void 0?fr.length:0,Ge=De.get(F),uc=d.state.lights;if(I===!0&&(G===!0||b!==S)){const mn=b===S&&F.id===M;w.setState(F,b,mn)}let Ct=!1;F.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==uc.state.version||Ge.outputEncoding!==Ne||Y.isInstancedMesh&&Ge.instancing===!1||!Y.isInstancedMesh&&Ge.instancing===!0||Y.isSkinnedMesh&&Ge.skinning===!1||!Y.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==ke||F.fog===!0&&Ge.fog!==Te||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==w.numPlanes||Ge.numIntersection!==w.numIntersection)||Ge.vertexAlphas!==je||Ge.vertexTangents!==Be||Ge.morphTargets!==Ve||Ge.morphNormals!==ft||Ge.morphColors!==pn||Ge.toneMapping!==di||ae.isWebGL2===!0&&Ge.morphTargetsCount!==ht)&&(Ct=!0):(Ct=!0,Ge.__version=F.version);let hr=Ge.currentProgram;Ct===!0&&(hr=Pn(F,B,Y));let qf=!1,rs=!1,dc=!1;const Kt=hr.getUniforms(),pr=Ge.uniforms;if(oe.useProgram(hr.program)&&(qf=!0,rs=!0,dc=!0),F.id!==M&&(M=F.id,rs=!0),qf||S!==b){if(Kt.setValue(D,"projectionMatrix",b.projectionMatrix),ae.logarithmicDepthBuffer&&Kt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),S!==b&&(S=b,rs=!0,dc=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const mn=Kt.map.cameraPosition;mn!==void 0&&mn.setValue(D,Z.setFromMatrixPosition(b.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Kt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||Y.isSkinnedMesh)&&Kt.setValue(D,"viewMatrix",b.matrixWorldInverse)}if(Y.isSkinnedMesh){Kt.setOptional(D,Y,"bindMatrix"),Kt.setOptional(D,Y,"bindMatrixInverse");const mn=Y.skeleton;mn&&(ae.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),Kt.setValue(D,"boneTexture",mn.boneTexture,Ce),Kt.setValue(D,"boneTextureSize",mn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fc=q.morphAttributes;if((fc.position!==void 0||fc.normal!==void 0||fc.color!==void 0&&ae.isWebGL2===!0)&&ce.update(Y,q,F,hr),(rs||Ge.receiveShadow!==Y.receiveShadow)&&(Ge.receiveShadow=Y.receiveShadow,Kt.setValue(D,"receiveShadow",Y.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(pr.envMap.value=ke,pr.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),rs&&(Kt.setValue(D,"toneMappingExposure",h.toneMappingExposure),Ge.needsLights&&Fv(pr,dc),Te&&F.fog===!0&&An.refreshFogUniforms(pr,Te),An.refreshMaterialUniforms(pr,F,K,R,W),dl.upload(D,Ge.uniformsList,pr,Ce)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(dl.upload(D,Ge.uniformsList,pr,Ce),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Kt.setValue(D,"center",Y.center),Kt.setValue(D,"modelViewMatrix",Y.modelViewMatrix),Kt.setValue(D,"normalMatrix",Y.normalMatrix),Kt.setValue(D,"modelMatrix",Y.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const mn=F.uniformsGroups;for(let hc=0,Uv=mn.length;hc<Uv;hc++)if(ae.isWebGL2){const $f=mn[hc];me.update($f,hr),me.bind($f,hr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hr}function Fv(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Ov(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(b,B,q){De.get(b.texture).__webglTexture=B,De.get(b.depthTexture).__webglTexture=q;const F=De.get(b);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,B){const q=De.get(b);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,q=0){_=b,g=B,v=q;let F=!0,Y=null,Te=!1,Le=!1;if(b){const ke=De.get(b);ke.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(36160,null),F=!1):ke.__webglFramebuffer===void 0?Ce.setupRenderTarget(b):ke.__hasExternalTextures&&Ce.rebindTextures(b,De.get(b.texture).__webglTexture,De.get(b.depthTexture).__webglTexture);const je=b.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Le=!0);const Be=De.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Y=Be[B],Te=!0):ae.isWebGL2&&b.samples>0&&Ce.useMultisampledRTT(b)===!1?Y=De.get(b).__webglMultisampledFramebuffer:Y=Be,C.copy(b.viewport),P.copy(b.scissor),y=b.scissorTest}else C.copy(z).multiplyScalar(K).floor(),P.copy($).multiplyScalar(K).floor(),y=Q;if(oe.bindFramebuffer(36160,Y)&&ae.drawBuffers&&F&&oe.drawBuffers(b,Y),oe.viewport(C),oe.scissor(P),oe.setScissorTest(y),Te){const ke=De.get(b.texture);D.framebufferTexture2D(36160,36064,34069+B,ke.__webglTexture,q)}else if(Le){const ke=De.get(b.texture),je=B||0;D.framebufferTextureLayer(36160,36064,ke.__webglTexture,q||0,je)}M=-1},this.readRenderTargetPixels=function(b,B,q,F,Y,Te,Le){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=De.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){oe.bindFramebuffer(36160,Ne);try{const ke=b.texture,je=ke.format,Be=ke.type;if(je!==zn&&A.convert(je)!==D.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Be===na&&(he.has("EXT_color_buffer_half_float")||ae.isWebGL2&&he.has("EXT_color_buffer_float"));if(Be!==Vr&&A.convert(Be)!==D.getParameter(35738)&&!(Be===Lr&&(ae.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-F&&q>=0&&q<=b.height-Y&&D.readPixels(B,q,F,Y,A.convert(je),A.convert(Be),Te)}finally{const ke=_!==null?De.get(_).__webglFramebuffer:null;oe.bindFramebuffer(36160,ke)}}},this.copyFramebufferToTexture=function(b,B,q=0){const F=Math.pow(2,-q),Y=Math.floor(B.image.width*F),Te=Math.floor(B.image.height*F);Ce.setTexture2D(B,0),D.copyTexSubImage2D(3553,q,0,0,b.x,b.y,Y,Te),oe.unbindTexture()},this.copyTextureToTexture=function(b,B,q,F=0){const Y=B.image.width,Te=B.image.height,Le=A.convert(q.format),Ne=A.convert(q.type);Ce.setTexture2D(q,0),D.pixelStorei(37440,q.flipY),D.pixelStorei(37441,q.premultiplyAlpha),D.pixelStorei(3317,q.unpackAlignment),B.isDataTexture?D.texSubImage2D(3553,F,b.x,b.y,Y,Te,Le,Ne,B.image.data):B.isCompressedTexture?D.compressedTexSubImage2D(3553,F,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,Le,B.mipmaps[0].data):D.texSubImage2D(3553,F,b.x,b.y,Le,Ne,B.image),F===0&&q.generateMipmaps&&D.generateMipmap(3553),oe.unbindTexture()},this.copyTextureToTexture3D=function(b,B,q,F,Y=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=b.max.x-b.min.x+1,Le=b.max.y-b.min.y+1,Ne=b.max.z-b.min.z+1,ke=A.convert(F.format),je=A.convert(F.type);let Be;if(F.isData3DTexture)Ce.setTexture3D(F,0),Be=32879;else if(F.isDataArrayTexture)Ce.setTexture2DArray(F,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(37440,F.flipY),D.pixelStorei(37441,F.premultiplyAlpha),D.pixelStorei(3317,F.unpackAlignment);const Ve=D.getParameter(3314),ft=D.getParameter(32878),pn=D.getParameter(3316),di=D.getParameter(3315),fr=D.getParameter(32877),ht=q.isCompressedTexture?q.mipmaps[0]:q.image;D.pixelStorei(3314,ht.width),D.pixelStorei(32878,ht.height),D.pixelStorei(3316,b.min.x),D.pixelStorei(3315,b.min.y),D.pixelStorei(32877,b.min.z),q.isDataTexture||q.isData3DTexture?D.texSubImage3D(Be,Y,B.x,B.y,B.z,Te,Le,Ne,ke,je,ht.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Be,Y,B.x,B.y,B.z,Te,Le,Ne,ke,ht.data)):D.texSubImage3D(Be,Y,B.x,B.y,B.z,Te,Le,Ne,ke,je,ht),D.pixelStorei(3314,Ve),D.pixelStorei(32878,ft),D.pixelStorei(3316,pn),D.pixelStorei(3315,di),D.pixelStorei(32877,fr),Y===0&&F.generateMipmaps&&D.generateMipmap(Be),oe.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Ce.setTextureCube(b,0):b.isData3DTexture?Ce.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ce.setTexture2DArray(b,0):Ce.setTexture2D(b,0),oe.unbindTexture()},this.resetState=function(){g=0,v=0,_=null,oe.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class m2 extends xv{}m2.prototype.isWebGL1Renderer=!0;let g2=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};const Tm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class v2{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const _2=new v2;class yv{constructor(e){this.manager=e!==void 0?e:_2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class x2 extends yv{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Tm.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=ra("img");function l(){u(),Tm.add(e,this),n&&n(this),o.manager.itemEnd(e)}function c(f){u(),r&&r(f),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class y2 extends yv{constructor(e){super(e)}load(e,n,i,r){const o=new hn,s=new x2(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class S2{constructor(e,n,i=0,r=1/0){this.ray=new av(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Vf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Rd(e,this,i,n),i.sort(Cm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,o=e.length;r<o;r++)Rd(e[r],this,i,n);return i.sort(Cm),i}}function Cm(t,e){return t.distance-e.distance}function Rd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let o=0,s=r.length;o<s;o++)Rd(r[o],e,n,!0)}}class Nd{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ln(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);const Am={type:"change"},Su={type:"start"},Pm={type:"end"};class M2 extends $r{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zr.ROTATE,MIDDLE:Zr.DOLLY,RIGHT:Zr.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",on),this._domElementKeyEvents=A},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Am),i.update(),o=r.NONE},this.update=function(){const A=new V,k=new Wr().setFromUnitVectors(e.up,new V(0,1,0)),me=k.clone().invert(),Se=new V,pe=new Wr,be=2*Math.PI;return function(){const Oe=i.object.position;A.copy(Oe).sub(i.target),A.applyQuaternion(k),a.setFromVector3(A),i.autoRotate&&o===r.NONE&&T(P()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ue=i.minAzimuthAngle,Ye=i.maxAzimuthAngle;return isFinite(Ue)&&isFinite(Ye)&&(Ue<-Math.PI?Ue+=be:Ue>Math.PI&&(Ue-=be),Ye<-Math.PI?Ye+=be:Ye>Math.PI&&(Ye-=be),Ue<=Ye?a.theta=Math.max(Ue,Math.min(Ye,a.theta)):a.theta=a.theta>(Ue+Ye)/2?Math.max(Ue,a.theta):Math.min(Ye,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),A.setFromSpherical(a),A.applyQuaternion(me),Oe.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||Se.distanceToSquared(i.object.position)>s||8*(1-pe.dot(i.object.quaternion))>s?(i.dispatchEvent(Am),Se.copy(i.object.position),pe.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",j),i.domElement.removeEventListener("pointerdown",Et),i.domElement.removeEventListener("pointercancel",Yt),i.domElement.removeEventListener("wheel",An),i.domElement.removeEventListener("pointermove",Vt),i.domElement.removeEventListener("pointerup",dt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",on)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new Nd,l=new Nd;let c=1;const u=new V;let f=!1;const d=new ze,m=new ze,x=new ze,h=new ze,p=new ze,g=new ze,v=new ze,_=new ze,M=new ze,S=[],C={};function P(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function T(A){l.theta-=A}function R(A){l.phi-=A}const K=function(){const A=new V;return function(me,Se){A.setFromMatrixColumn(Se,0),A.multiplyScalar(-me),u.add(A)}}(),J=function(){const A=new V;return function(me,Se){i.screenSpacePanning===!0?A.setFromMatrixColumn(Se,1):(A.setFromMatrixColumn(Se,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(me),u.add(A)}}(),O=function(){const A=new V;return function(me,Se){const pe=i.domElement;if(i.object.isPerspectiveCamera){const be=i.object.position;A.copy(be).sub(i.target);let Me=A.length();Me*=Math.tan(i.object.fov/2*Math.PI/180),K(2*me*Me/pe.clientHeight,i.object.matrix),J(2*Se*Me/pe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(K(me*(i.object.right-i.object.left)/i.object.zoom/pe.clientWidth,i.object.matrix),J(Se*(i.object.top-i.object.bottom)/i.object.zoom/pe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function z(A){i.object.isPerspectiveCamera?c/=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*A)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(A){i.object.isPerspectiveCamera?c*=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/A)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(A){d.set(A.clientX,A.clientY)}function ee(A){v.set(A.clientX,A.clientY)}function I(A){h.set(A.clientX,A.clientY)}function G(A){m.set(A.clientX,A.clientY),x.subVectors(m,d).multiplyScalar(i.rotateSpeed);const k=i.domElement;T(2*Math.PI*x.x/k.clientHeight),R(2*Math.PI*x.y/k.clientHeight),d.copy(m),i.update()}function W(A){_.set(A.clientX,A.clientY),M.subVectors(_,v),M.y>0?z(y()):M.y<0&&$(y()),v.copy(_),i.update()}function se(A){p.set(A.clientX,A.clientY),g.subVectors(p,h).multiplyScalar(i.panSpeed),O(g.x,g.y),h.copy(p),i.update()}function U(A){A.deltaY<0?$(y()):A.deltaY>0&&z(y()),i.update()}function Z(A){let k=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),k=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),k=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),k=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),k=!0;break}k&&(A.preventDefault(),i.update())}function re(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const A=.5*(S[0].pageX+S[1].pageX),k=.5*(S[0].pageY+S[1].pageY);d.set(A,k)}}function le(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const A=.5*(S[0].pageX+S[1].pageX),k=.5*(S[0].pageY+S[1].pageY);h.set(A,k)}}function D(){const A=S[0].pageX-S[1].pageX,k=S[0].pageY-S[1].pageY,me=Math.sqrt(A*A+k*k);v.set(0,me)}function ye(){i.enableZoom&&D(),i.enablePan&&le()}function he(){i.enableZoom&&D(),i.enableRotate&&re()}function ae(A){if(S.length==1)m.set(A.pageX,A.pageY);else{const me=Pe(A),Se=.5*(A.pageX+me.x),pe=.5*(A.pageY+me.y);m.set(Se,pe)}x.subVectors(m,d).multiplyScalar(i.rotateSpeed);const k=i.domElement;T(2*Math.PI*x.x/k.clientHeight),R(2*Math.PI*x.y/k.clientHeight),d.copy(m)}function oe(A){if(S.length===1)p.set(A.pageX,A.pageY);else{const k=Pe(A),me=.5*(A.pageX+k.x),Se=.5*(A.pageY+k.y);p.set(me,Se)}g.subVectors(p,h).multiplyScalar(i.panSpeed),O(g.x,g.y),h.copy(p)}function Ie(A){const k=Pe(A),me=A.pageX-k.x,Se=A.pageY-k.y,pe=Math.sqrt(me*me+Se*Se);_.set(0,pe),M.set(0,Math.pow(_.y/v.y,i.zoomSpeed)),z(M.y),v.copy(_)}function De(A){i.enableZoom&&Ie(A),i.enablePan&&oe(A)}function Ce(A){i.enableZoom&&Ie(A),i.enableRotate&&ae(A)}function Et(A){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",Vt),i.domElement.addEventListener("pointerup",dt)),ie(A),A.pointerType==="touch"?E(A):ct(A))}function Vt(A){i.enabled!==!1&&(A.pointerType==="touch"?w(A):Xe(A))}function dt(A){ce(A),S.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",Vt),i.domElement.removeEventListener("pointerup",dt)),i.dispatchEvent(Pm),o=r.NONE}function Yt(A){ce(A)}function ct(A){let k;switch(A.button){case 0:k=i.mouseButtons.LEFT;break;case 1:k=i.mouseButtons.MIDDLE;break;case 2:k=i.mouseButtons.RIGHT;break;default:k=-1}switch(k){case Zr.DOLLY:if(i.enableZoom===!1)return;ee(A),o=r.DOLLY;break;case Zr.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;I(A),o=r.PAN}else{if(i.enableRotate===!1)return;Q(A),o=r.ROTATE}break;case Zr.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;Q(A),o=r.ROTATE}else{if(i.enablePan===!1)return;I(A),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Su)}function Xe(A){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;G(A);break;case r.DOLLY:if(i.enableZoom===!1)return;W(A);break;case r.PAN:if(i.enablePan===!1)return;se(A);break}}function An(A){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(A.preventDefault(),i.dispatchEvent(Su),U(A),i.dispatchEvent(Pm))}function on(A){i.enabled===!1||i.enablePan===!1||Z(A)}function E(A){switch(fe(A),S.length){case 1:switch(i.touches.ONE){case Qr.ROTATE:if(i.enableRotate===!1)return;re(),o=r.TOUCH_ROTATE;break;case Qr.PAN:if(i.enablePan===!1)return;le(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Qr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ye(),o=r.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;he(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Su)}function w(A){switch(fe(A),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ae(A),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;oe(A),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;De(A),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ce(A),i.update();break;default:o=r.NONE}}function j(A){i.enabled!==!1&&A.preventDefault()}function ie(A){S.push(A)}function ce(A){delete C[A.pointerId];for(let k=0;k<S.length;k++)if(S[k].pointerId==A.pointerId){S.splice(k,1);return}}function fe(A){let k=C[A.pointerId];k===void 0&&(k=new ze,C[A.pointerId]=k),k.set(A.pageX,A.pageY)}function Pe(A){const k=A.pointerId===S[0].pointerId?S[1]:S[0];return C[k.pointerId]}i.domElement.addEventListener("contextmenu",j),i.domElement.addEventListener("pointerdown",Et),i.domElement.addEventListener("pointercancel",Yt),i.domElement.addEventListener("wheel",An,{passive:!1}),this.update()}}class w2 extends Je{constructor(e=1,n=16,i=new et("#727272"),r=2e3){const o=new ar(2,2,1,1),s=new sr({side:kt,uniforms:{uSize1:{value:e},uSize2:{value:n},uColor:{value:i},uDistance:{value:r}},transparent:!0,alphaTest:.5,vertexShader:`
            
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
            
            `,extensions:{derivatives:!0}});super(o,s),this.frustumCulled=!1}}let qt,Dt,sn,zt,Er;function Sv(){Mv(),qt=new g2,qt.background=new et("#C6C6C6"),Dt=new kn(60,(window.innerWidth-300)/window.innerHeight,.1,1e3),Dt.position.set(0,3,8),Dt.rotation.order="YXZ",sn=new xv({antialias:!0}),sn.setSize(window.innerWidth-300,window.innerHeight),sn.setPixelRatio((window.innerWidth-300)/window.innerHeight),sn.toneMappingExposure=1,sn.shadowMap.enabled=!0,sn.shadowMap.type=K0,document.body.appendChild(sn.domElement);const t=new w2;t.position.set(8.5,-.5,8.5),qt.add(t);const e=new Je(new Lt(1e5,1e5,1e-5),new lt({color:16776960,visible:!1}));e.rotation.set(Math.PI/2,0,0),e.position.set(0,-.5,0),e.name="helpPlane",qt.add(e),T2([]),b2(!0),wv("debug.png"),fl=!0,Ci(),window.addEventListener("resize",n),document.oncontextmenu=document.body.oncontextmenu=function(){return!1},window.addEventListener("beforeunload",function(i){return i.stopPropagation(),i.preventDefault(),!1},!0);function n(){Dt&&sn&&(sn.setSize(window.innerWidth-300,window.innerHeight),sn.setPixelRatio((window.innerWidth-300)/window.innerHeight),Dt.aspect=(window.innerWidth-300)/window.innerHeight,Dt.updateProjectionMatrix())}Er="0000",zt=JSON.parse(String(localStorage.getItem(Er))),zt||(zt={id:Er,name:"Test Build",author:"Droxus228",rate:4,contains:[]}),Iv(zt.name),localStorage.setItem(Er,JSON.stringify(zt)),console.log(JSON.parse(String(localStorage.getItem(Er))))}let fl=!0;function Ci(){fl&&(fl=!1,requestAnimationFrame(()=>{qt&&Dt&&sn?.render(qt,Dt),fl=!0}))}function Mv(){sn?.dispose();const t=e=>{e.dispose();for(const n of Object.keys(e)){const i=e[n];i&&typeof i=="object"&&"minFilter"in i&&i.dispose()}};qt?.traverse(e=>{if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)t(e.material);else for(const n of e.material)t(n)}),document.querySelector("canvas")&&document.querySelector("canvas")?.remove(),Dt=null,sn=null,E2(null)}let we;const jn=new y2;let Id=!0,Ae,vt,_t,oi=[],Oo=[];function b2(t){Id=t}function E2(t){we=t}function T2(t){oi=t}async function wv(t){return oa(t)}async function oa(t){return new Promise(e=>{let n=t;n&&n.slice(0,t.length-4),t.slice(-4)!==".png"&&(t=t.replaceAll(" ","_").concat(".png")),_t=void 0,vt=void 0,Ae=void 0,t.includes("side")?Promise.all([new Promise(r=>{jn.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${t}`,o=>{Ae=o,r(o)},()=>{},()=>{r(void 0)})}),new Promise(r=>{jn.load(Dn.filter(o=>o.name.includes(t.slice(0,t.length-8).replaceAll(" ","_")+"bottom"))[0]?.download_url,o=>{_t=o,r(o)},()=>{},()=>{r(void 0)})}),new Promise(r=>{jn.load(Dn.filter(o=>o.name.includes(t.slice(0,t.length-8).replaceAll(" ","_")+"top"))[0]?.download_url,o=>{vt=o,r(o)},()=>{},()=>{r(void 0)})})]).then(r=>i(r[0],r[1],r[2])):t.includes("log")?Promise.all([new Promise(r=>{jn.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${t}`,o=>{Ae=o,r(o)},()=>{},()=>{r(void 0)})}),new Promise(r=>{jn.load(Dn.filter(o=>o.name.includes(n.slice(0,t.length-4).replaceAll(" ","_")+"_bottom"))[0]?.download_url,o=>{_t=o,r(o)},()=>{},()=>{r(void 0)})}),new Promise(r=>{jn.load(Dn.filter(o=>o.name.includes(n.slice(0,t.length-4).replaceAll(" ","_")+"_top"))[0]?.download_url,o=>{vt=o,r(o)},()=>{},()=>{r(void 0)})})]).then(r=>i(r[0],r[1],r[2])):Dn.filter(r=>r.name.includes(n.replaceAll(" ","_")+"_top"))?Promise.all([new Promise(r=>{jn.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${t}`,o=>{Ae=o,r(o)},()=>{},()=>{r(void 0)})}),new Promise(r=>{jn.load(vt=Dn.filter(o=>o.name.includes(n.replaceAll(" ","_")+"_top"))[0]?.download_url,o=>{vt=o,r(o)},()=>{},()=>{r(void 0)})})]).then(r=>i(r[0],void 0,r[1])):Dn.filter(r=>r.name.includes(n.replaceAll(" ","_")+"_bottom"))?Promise.all([new Promise(r=>{jn.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${t}`,o=>{Ae=o,r(o)},()=>{},()=>{r(void 0)})}),new Promise(r=>{jn.load(_t=Dn.filter(o=>o.name.includes(n.replaceAll(" ","_")+"_bottom"))[0]?.download_url,o=>{_t=o,r(o)},()=>{},()=>{r(void 0)})})]).then(r=>i(r[0],r[1],void 0)):new Promise(r=>{jn.load(`https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/${t}`,o=>{Ae=o,r(o)},()=>{},()=>{r(void 0)})}).then(r=>i(r,void 0,void 0));function i(r,o,s){Ae=r,_t=o,vt=s,Ae.format=zn,Ae.minFilter=yt,Ae.magFilter=yt,Ae.wrapS=si,Ae.wrapT=si;const a=16,l=16,c=Ae.image.width,u=Ae.image.height,f=c/u,d=a/l;f>d?Ae.repeat.set(a/c,1):Ae.repeat.set(1,l/u),_t||(_t=vt||Ae),vt||(vt=_t||Ae),[_t,vt,Ae].forEach(x=>{x&&(x.minFilter=yt,x.magFilter=yt,x.wrapS=si,x.wrapT=si)}),Zo(),Id&&(Id=!1,zt.contains.length<1?(Si(0,0,0),Rv()):A2()),e([Ae,vt,_t])}})}function lc(){let t=!0;return Pv.forEach(e=>{if(en.includes(e)&&!en.includes("block"))return t=!1}),t}function Zo(){if(!jr&&Ae){if(lc()){let t=[new lt({map:_t||vt||Ae,transparent:!0,opacity:.5,wireframe:!1,depthWrite:!1,alphaTest:0}),new lt({map:vt||_t||Ae,transparent:!0,opacity:.5,wireframe:!1,depthWrite:!1,alphaTest:0}),new lt({map:Ae,transparent:!0,opacity:.5,wireframe:!1,depthWrite:!1,alphaTest:0})];ge.children.forEach(e=>e.material=t),ge.visible=!0,He.visible=!1,ge.position.set(He.position.x,He.position.y,He.position.z)}else ge.visible=!1,He.visible=!0,He.position.set(ge.position.x,ge.position.y,ge.position.z),He.children.forEach(t=>{t.material=new lt({wireframe:!1,opacity:.5,transparent:!0,map:Ae,depthWrite:!1,side:kt,alphaTest:.5})}),He.children[2].material=new lt({wireframe:!1,opacity:0,transparent:!0,map:Ae,depthWrite:!1});Nt=="Remove"?(ge.children.forEach(t=>t.material.forEach(e=>e.map=null)),ge.children.forEach(t=>t.material.forEach(e=>e.opacity=1)),ge.children.forEach(t=>t.material.forEach(e=>e.transparent=!0)),ge.children.forEach(t=>t.material.forEach(e=>e.wireframe=!0)),ge.children.forEach(t=>t.material.forEach(e=>e.needsUpdate=!0)),ge.children.forEach(t=>t.material.forEach(e=>e.visible=!0)),Uo.visible=!0,nr.visible=!1,tr.visible=!1,ge.visible=!0):Nt=="Inspect"&&(ge.visible=!1,He.visible=!1)}else ge.position.set(Math.round(H.point.x),Math.abs(Math.round(H.point.y+.001)),Math.round(H.point.z)),He.position.set(Math.round(H.point.x),Math.abs(Math.round(H.point.y+.001)),Math.round(H.point.z))}function Si(t,e,n,i,r,o,s,a){if(!oi.find(l=>l.position.x==t&&l.position.y==e&&l.position.z==n)){let l,c;if(r!==void 0&&U2(r),i!==void 0&&V2(i),lc()){Ae&&(Ae.wrapS=Ae.wrapT=si,Ae.repeat.set(16/Ae.image.width,16/Ae.image.height)),vt&&(vt.wrapS=vt.wrapT=si,vt.repeat.set(16/Ae.image.width,16/Ae.image.height)),_t&&(_t.wrapS=_t.wrapT=si,_t.repeat.set(16/Ae.image.width,16/Ae.image.height));let u,f,d;d=new lt({map:_t||vt||Ae,transparent:!0,side:kt}),f=new lt({map:vt||_t||Ae,transparent:!0,side:kt}),u=new lt({map:Ae,transparent:!0,side:kt});let m;if(sa=="Slabs"){m=new Lt(1,.5,1,1,1,1);let x=new Je(new Lt(1,1,1,1,1,1),new lt({map:Ae,opacity:0,transparent:!0,depthWrite:!1})),h=new Je(m,[f,u,d]);m.groups.forEach((p,g)=>{g===2?p.materialIndex=0:g===0||g===1||g===4||g===5?p.materialIndex=1:p.materialIndex=2}),h.position.set(0,-.25,0),h.name="slabs",x.name="slabsHelped",l=new bi,l.add(h),l.add(x),l.name="slabs"}else if(sa=="Stairs"){m=new Lt(1,.5,1,1,1,1);let x=new Je(new Lt(1,1,1,1,1,1),new lt({map:Ae,opacity:0,transparent:!0,depthWrite:!1})),h=new Je(m,u);m=new Lt(.5,.5,1,1,1,1);let p=new Je(m,[f,u,d]);m.groups.forEach((g,v)=>{v===2?g.materialIndex=0:v===0||v===1||v===4||v===5?g.materialIndex=1:g.materialIndex=2}),h.position.set(0,-.25,0),p.position.set(.25,.25,0),h.name="stairs",p.name="stairs",x.name="stairsHelped",l=new bi,l.add(h),l.add(p),l.add(x),l.name="stairs"}else m=new Lt(1,1,1,1,1,1),m.groups.forEach((x,h)=>{h===2?x.materialIndex=0:h===0||h===1||h===4||h===5?x.materialIndex=1:x.materialIndex=2}),l=new Je(m,[f,u,d]),l.name="block";qt?.add(l),Ci(),l.rotation.set(ge.rotation.x,ge.rotation.y,ge.rotation.z)}else{let u=new Je(new ar(1,1),new lt({map:Ae,transparent:!0,side:kt,depthWrite:!1})),f=new Je(new ar(1,1),new lt({map:Ae,transparent:!0,side:kt,depthWrite:!1}));c=new Je(new Lt(1,1,1),new lt({map:Ae,opacity:0,transparent:!0,depthWrite:!1})),f.rotation.set(0,Math.PI/2,0),l=new bi,l.add(u),l.add(f),l.add(c),c.textureName=en,l.rotation.set(He.rotation.x,He.rotation.y,He.rotation.z),l.name="block"}l.textureName=en,qt?.add(l),Ci(),l.position.set(t,e,n),o!==void 0&&s!==void 0&&a!==void 0&&l.rotation.set(o,s,a),oi.push({position:{x:l.position.x,y:l.position.y,z:l.position.z},textureName:en,blockType:l.name?l.name[0].toUpperCase().concat("",l.name.slice(1)):"Block",rotation:{_x:l.rotation.x,_y:l.rotation.y,_z:l.rotation.z}}),Oo.push({action:"create",blockInfo:oi[oi.length-1]}),zt.contains=oi,localStorage.setItem(Er,JSON.stringify(zt))}}let jr=!1,Hf=[new lt({color:"white",wireframe:!0}),new lt({color:"white",wireframe:!0}),new lt({color:"white",wireframe:!0})],ge=new bi,Uo=new Je(new Lt(1,1,1),Hf),tr=new Je(new Lt(1,.5,1),Hf),nr=new Je(new Lt(.5,.5,1),Hf);ge.add(Uo);ge.add(tr);ge.add(nr);tr.position.set(0,-.25,0);nr.position.set(.25,.25,0);nr.visible=!1;tr.visible=!1;ge.children.forEach(t=>t.geometry.groups.forEach((e,n)=>{n===2?e.materialIndex=1:n===0||n===1||n===4||n===5?e.materialIndex=2:e.materialIndex=0}));let He=new bi,bv=new Je(new ar(1,1),new lt({transparent:!0,side:kt,depthWrite:!1})),Wf=new Je(new ar(1,1),new lt({transparent:!0,side:kt,depthWrite:!1})),Ev=new Je(new Lt(1,1,1),new lt({opacity:0,transparent:!0,depthWrite:!1}));bv.name="hoverBlock";Wf.name="hoverBlock";Ev.name="hoverBlock";Wf.rotation.set(0,Math.PI/2,0);He.add(bv);He.add(Wf);He.add(Ev);He.name="hoverBlock";Uo.name="hoverBlock";ge.name="hoverBlock";tr.name="hoverBlock";nr.name="hoverBlock";function C2(){Dt&&(we=new M2(Dt,sn?.domElement)),we.target.set(0,0,0),we.autoRotate=!1,we.autoRotateSpeed=1,we.enableDamping=!0,we.dampingFactor=.05,we.enablePan=!0,we.enableZoom=!1,document.addEventListener("keydown",i=>{i.keyCode===16&&(i.preventDefault(),jr=!0,ge.visible=!1,He.visible=!1,Nt!=="Inspect"&&(we.mouseButtons={LEFT:2,MIDDLE:1,RIGHT:0},we.enableZoom=!0))}),document.addEventListener("keyup",i=>{i.keyCode===16&&(jr=!1,ge.visible=!0,He.visible=!0,Nt=="Inspect"&&(ge.visible=!1,He.visible=!1),Nt!=="Inspect"&&(we.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},Zo(),we.enableZoom=!1))}),we.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},we.touches={ONE:void 0,TWO:void 0},we.screenSpacePanning=!1,we.minDistance=1,we.maxDistance=200,we.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},we.listenToKeyEvents(window),we.keyPanSpeed=50,we.addEventListener("change",Ci);function t(i,r,o){if(Dt){const s=new Nd().setFromVector3(Dt.position.clone().sub(we.target));s.theta+=i,s.phi+=r,s.radius+=o;const a=1e-6;s.phi=Math.max(a,Math.min(Math.PI-a,s.phi)),Dt.position.setFromSpherical(s).add(we.target),Dt.lookAt(we.target)}}const e=.1,n=1;document.addEventListener("keydown",i=>{switch(i.code){case"ArrowLeft":t(-e,0,0);break;case"ArrowUp":t(0,-e,0);break;case"ArrowRight":t(e,0,0);break;case"ArrowDown":t(0,e,0);break;case"KeyO":t(0,0,-n);break;case"KeyP":t(0,0,n);break}Ci()}),we.rotateCamera=!0,document.querySelector("#root").style.pointerEvents="none",document.querySelector("canvas").style.pointerEvents="all",document.querySelector("canvas")?.addEventListener("mousemove",R2),qt?.add(ge),qt?.add(He),we.addEventListener("change",()=>{Nv()}),document.querySelector("canvas")?.addEventListener("mousedown",i=>{(i.button==1||i.buttons==4)&&N2(i)}),document.querySelector("canvas")?.addEventListener("wheel",D2),document.querySelector("canvas")?.addEventListener("mousedown",P2),document.querySelector("canvas")?.addEventListener("mouseup",L2),Oo=[],Ci()}function A2(){let t=zt.contains.length,e=zt.contains.length;zt.contains.length>0&&zt.contains.forEach(async n=>{oa(n.textureName).then(()=>{Si(n.position.x,n.position.y,n.position.z,n.textureName,n.blockType,n.rotation._x,n.rotation._y,n.rotation._z),--t,H2((e-t)/e*100),t<1&&Rv()})})}let Po={leftBtn:!1,rightBtn:!1},kd,zd,Tv,Cv;function P2(t){if(Nt!=="Inspect"){let e=Nt=="Build"?0:2,n=Nt=="Build"?2:0;switch(t.button){case e:Po.leftBtn=!0,Lm(t),Tv=setTimeout(()=>{kd=setInterval(()=>{Po.leftBtn?Lm(Od):clearInterval(kd)},125)},200);break;case n:Po.rightBtn=!0,Dm(t),Cv=setTimeout(()=>{zd=setInterval(()=>{Po.rightBtn?Dm(Od):clearInterval(zd)},125)},200);break}}}function L2(t){let e=Nt=="Build"?0:2,n=Nt=="Build"?2:0;switch(t.button){case e:Po.leftBtn=!1,clearTimeout(Tv),clearInterval(kd);break;case n:Po.rightBtn=!1,clearTimeout(Cv),clearInterval(zd);break}}const _r=new S2,Mu=new ze;function cc(t){if(Mu.x=(t.clientX-300)/(window.innerWidth-300)*2-1,Mu.y=-(t.clientY/window.innerHeight)*2+1,Dt&&qt){_r.setFromCamera(Mu,Dt);let e=_r.intersectObjects(qt.children);if(e=e.filter(n=>n.object.name!=="hoverBlock"&&n.object.parent?.name!=="hoverBlock"),e=e.filter(n=>n.object.geometry instanceof Lt&&n.object.name!=="helpedCube"&&n.object.name!=="slabsHelped"),e.length>0){let n;if(e[0].object.name!=="helpPlane")if(e[0].object.name!=="slabs"&&e[0].object.name!=="stairs")n={x:e[0].object.rotation.x,y:e[0].object.rotation.y,z:e[0].object.rotation.z},e[0].object.rotation.set(0,0,0),e[0].object.updateMatrixWorld(!0),e=_r.intersectObjects([e[0].object]),n.x!==void 0&&n.y!==void 0&&n.z!==void 0&&e[0].object.rotation.set(n.x,n.y,n.z);else if(e[0].object.name=="slabs"){if(n={x:e[0].object.parent?.rotation.x,y:e[0].object.parent?.rotation.y,z:e[0].object.parent?.rotation.z},e[0].object.parent?.rotation.set(0,0,0),e[0].object.parent?.updateMatrixWorld(!0),e[0].object.parent?.children[1]){let i;_r.intersectObjects([e[0].object])[0]!==void 0&&(i=_r.intersectObjects([e[0].object])[0].face),i&&e[0].face?e[0].face=i:e[0].face=_r.intersectObjects([e[0].object.parent?.children[1]])[0].face,n.x!==void 0&&n.y!==void 0&&n.z!==void 0&&e[0].object.parent?.rotation.set(n.x,n.y,n.z)}}else n={x:e[0].object.parent?.rotation.x,y:e[0].object.parent?.rotation.y,z:e[0].object.parent?.rotation.z},e[0].object.parent?.rotation.set(0,0,0),e[0].object.parent?.updateMatrixWorld(!0),e[0].object.parent?.children[2]&&(e[0].face=_r.intersectObjects([e[0].object.parent?.children[2]])[0].face,n.x!==void 0&&n.y!==void 0&&n.z!==void 0&&e[0].object.parent?.rotation.set(n.x,n.y,n.z))}return e[0]}}function Lm(t){!jr&&Nt!=="Inspect"&&(H=cc(t),H&&(H.object.name=="helpPlane"?Si(Math.round(H.point.x),Math.abs(Math.round(H.point.y+.001)),Math.round(H.point.z)):(Nt=="Build",H.face&&(H.object.parent&&(H.object.parent.children.length==3||H.object.name=="slabs")?Si(Math.round(H.object.parent.position.x+H.face.normal.x),Math.abs(Math.round(H.object.parent.position.y+.001+H.face.normal.y)),Math.round(H.object.parent.position.z+H.face.normal.z)):Si(Math.round(H.object.position.x+H.face.normal.x),Math.abs(Math.round(H.object.position.y+.001+H.face.normal.y)),Math.round(H.object.position.z+H.face.normal.z))))))}function Fd(t){if(t){let e=oi.filter(n=>n.position.x==t.position.x&&n.position.y==t.position.y&&n.position.z==t.position.z);e[0]&&Oo.push({action:"remove",blockInfo:e[0]}),oi=oi.filter(n=>n.position.x!==t.position.x||n.position.y!==t.position.y||n.position.z!==t.position.z),qt?.remove(t),zt.contains=oi,localStorage.setItem(Er,JSON.stringify(zt)),Ci()}}function Dm(t){if(!jr&&Nt!=="Inspect"&&(H=cc(t),H&&H.object.name!=="helpPlane"&&H.object.name!=="hoverBlock")){let e=H.object;H.object.parent&&(H.object.parent.children.length==3||H.object.name=="slabs")&&(e=H.object.parent),Fd(e)}}function D2(t){let e=t.deltaY/Math.abs(t.deltaY);jr||(e==1?ge.rotation.z<Math.PI*2?ge.rotation.set(ge.rotation.x,ge.rotation.y,ge.rotation.z+Math.PI*.5):ge.rotation.y<Math.PI*2?ge.rotation.set(ge.rotation.x,ge.rotation.y+Math.PI*.5,0):ge.rotation.x<Math.PI*2?ge.rotation.set(ge.rotation.x+Math.PI*.5,0,0):ge.rotation.set(0,0,0):ge.rotation.z>-Math.PI*2?ge.rotation.set(ge.rotation.x,ge.rotation.y,ge.rotation.z-Math.PI*.5):ge.rotation.y>-Math.PI*2?ge.rotation.set(ge.rotation.x,ge.rotation.y-Math.PI*.5,0):ge.rotation.x>-Math.PI*2?ge.rotation.set(ge.rotation.x-Math.PI*.5,0,0):ge.rotation.set(0,0,0),He.rotation.set(ge.rotation.x,ge.rotation.y,ge.rotation.z)),Ci()}let vi,H,Od;function R2(t){Od=t,lc()?(vi=ge,He.visible=!1):(vi=He,ge.visible=!1),Nt=="Remove"&&(vi=ge,He.visible=!1,ge.visible=!0),Nt!=="Inspect"&&(vi.children.length>0&&vi.children&&(vi.visible=!0),H=cc(t),H&&(H.object.name=="helpPlane"?(ge.position.set(Math.round(H.point.x),Math.abs(Math.round(H.point.y+.001)),Math.round(H.point.z)),He.position.set(Math.round(H.point.x),Math.abs(Math.round(H.point.y+.001)),Math.round(H.point.z))):Nt=="Build"?H.face&&(H.object.parent&&(H.object.parent.children.length==3||H.object.name=="slabs")?(ge.position.set(Math.round(H.object.parent.position.x+H.face.normal.x),Math.abs(Math.round(H.object.parent.position.y+.001+H.face.normal.y)),Math.round(H.object.parent.position.z+H.face.normal.z)),He.position.set(Math.round(H.object.parent.position.x+H.face.normal.x),Math.abs(Math.round(H.object.parent.position.y+.001+H.face.normal.y)),Math.round(H.object.parent.position.z+H.face.normal.z))):H.object.parent&&(H.object.parent.children.length==3||H.object.name=="slabs")?(ge.position.set(Math.round(H.object.position.x+H.face.normal.x),Math.abs(Math.round(H.object.position.y+.001+H.face.normal.y)),Math.round(H.object.position.z+H.face.normal.z)),He.position.set(Math.round(H.object.position.x+H.face.normal.x),Math.abs(Math.round(H.object.position.y+.001+H.face.normal.y)),Math.round(H.object.position.z+H.face.normal.z))):(vi.position.set(Math.round(H.object.position.x+H.face.normal.x),Math.abs(Math.round(H.object.position.y+.001+H.face.normal.y)),Math.round(H.object.position.z+H.face.normal.z)),He.position.set(Math.round(H.object.position.x+H.face.normal.x),Math.abs(Math.round(H.object.position.y+.001+H.face.normal.y)),Math.round(H.object.position.z+H.face.normal.z)))):H.object.parent&&(H.object.parent.children.length==3||H.object.name=="slabs")?vi.position.set(Math.round(H.object.parent.position.x),Math.abs(Math.round(H.object.parent.position.y+.001)),Math.round(H.object.parent.position.z)):vi.position.set(Math.round(H.object.position.x),Math.abs(Math.round(H.object.position.y+.001)),Math.round(H.object.position.z)))),jr&&(He.visible=!1,ge.visible=!1),Ci()}function N2(t){if(H=cc(t),H&&(B2(H.object.name),H.object.name!=="helpPlane"&&H.object.name!=="hoverBlock")){let e=H.object;H.object.name=="stairs"||H.object.name=="stairsHelped"||H.object.name=="slabs"?e=H.object.parent:e=H.object;let n=e,r=n.material;Array.isArray(r)?Ae=r[1].map:H.object.parent.name=="stairs"?Ae=H.object.parent.children[2].material.map:H.object.parent.name=="slabs"?Ae=n.children[1].material.map:Ae=r.map,O2(e.textureName),oa(en),lc()?(ge.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),He.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z)):(ge.rotation.set(e.parent.rotation.x,e.parent.rotation.y,e.parent.rotation.z),He.rotation.set(e.parent.rotation.x,e.parent.rotation.y,e.parent.rotation.z)),Zo()}}function I2(){switch(Nt){case"Build":we.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},Zo(),Av(),we.enableZoom=!1;break;case"Inspect":ge.visible=!1,He.visible=!1,we.mouseButtons={LEFT:0,MIDDLE:1,RIGHT:2},we.enableZoom=!0;break;case"Remove":we.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},Zo(),we.enableZoom=!1;break}}function Av(){switch(sa){case"Blocks":Zo(),Uo.visible=!0,nr.visible=!1,tr.visible=!1;break;case"Slabs":Uo.visible=!1,nr.visible=!1,tr.visible=!0;break;case"Stairs":Uo.visible=!1,nr.visible=!0,tr.visible=!0;break}}let en="debug.png",Pv=[],Dn=[],Lv=!1,Dv=!1,wu=0,bu=[],ei=[],wr;function k2(){wu++,wu>wr.length-2&&(wu=0,Lv?Sv():Dv=!0)}const z2=({items:t,texturePick:e})=>L("div",{className:"grid grid-cols-4 w-full allBlocksDiv",children:t.map(n=>_e("div",{onClick:e,className:"relative basis-1/3 flex flex-wrap justify-center cursor-pointer blocks border-thirdcolor hover:border-2 ",children:[L("div",{className:"w-full h-14 flex justify-center",children:L("img",{src:n.download_url,id:n.name,alt:"block",onLoad:k2,className:"textures object-cover w-14 h-14 aspect-square select-none pointer-events-none"})}),L("label",{id:n.name.slice(0,n.name.length-4).replaceAll("_"," "),className:"break-words text-sm select-none",children:n.name.slice(0,n.name.length-4).replaceAll("_"," ").replaceAll("side","").replaceAll("log","").replaceAll("front","").replaceAll("end","")})]},n.name))}),F2=({items:t,texturePick:e})=>(t=ei,_e("div",{children:[L("div",{hidden:t.length<1,className:"grid grid-cols-4 w-full",children:t.map(n=>_e("div",{onClick:e,className:"relative basis-1/3 flex flex-wrap justify-center cursor-pointer blocks border-thirdcolor hover:border-2",children:[L("div",{className:"w-full h-14 flex justify-center",children:L("img",{src:n.download_url,id:n.name,alt:"block",className:"textures object-cover w-14 h-14 aspect-square select-none pointer-events-none"})}),L("label",{id:n.name.slice(0,n.name.length-4).replaceAll("_"," "),className:"break-words text-sm select-none",children:n.name.slice(0,n.name.length-4).replaceAll("_"," ").replaceAll("side","").replaceAll("log","").replaceAll("front","").replaceAll("end","")})]},n.name))}),L("h1",{hidden:t.length>0,className:"opacity-60",children:"No blocks here"})]}));function O2(t){en=t;let e=en;e.slice(-4)!==".png"&&(e=en.replaceAll(" ","_").concat(".png"));let n;document.querySelectorAll(".blocks").forEach(i=>{if(i.querySelectorAll("label")[0].id==en)return n=i,i}),document.querySelectorAll(".blocks").forEach(i=>i.classList.remove("opacity-40")),n&&(n.classList.add("opacity-40"),n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}))}function U2(t){sa=t}function B2(t){switch(t){case"slabs":document.querySelector(".slabsType").click();break;case"stairs":document.querySelector(".stairsType").click();break;case"block":document.querySelector(".blocksType").click();break}}function V2(t){en=t}function Rv(t){Bd.current&&(Bd.current.style.display="none"),C2()}let Nt="Build",Nv,sa="Blocks";function G2(){document.querySelector("#root").style.pointerEvents="all"}function H2(t){Ud.current&&(Ud.current.value=t)}const Ud=de.createRef(),Bd=de.createRef();class W2 extends jd.Component{render(){return L("div",{ref:Bd,className:"sceneLoader h-full w-full overflow-hidden absolute top-0 left-0 z-200 bg-white grid pointer-events-none",id:"sceneLoader",children:_e("div",{className:" h-full w-96 place-self-center grid grid-rows-[40%_20%_5%_20%_20%]",children:[L("div",{}),L("img",{src:"https://raw.githubusercontent.com/Droxus/Builder3D/7ba1d995d58b0d5b5e68383ba3713c489af0311e/src/assets/img/loaderScene.svg",className:"eager img-importance-high w-32 flex justify-self-center "}),L("label",{className:" text-xl text-fourthcolor",children:"Scene Loading"}),L("progress",{ref:Ud,max:"100",value:0,id:"sceneProgressBar",className:" superProgress w-60 flex justify-self-center appearance-none h-5"}),_e("div",{className:"flex items-center justify-center",children:[L("img",{className:"eager img-importance-high aspect-square h-12 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/9ff281164d1c9ed9c617cf49285f033e79674502/src/assets/img/logo.svg"}),L("label",{className:"text-xl ml-4 font-medium text-fourthcolor",children:"Builder 3D"})]})]})})}}function j2(){Mv(),G2()}const zs=de.createRef();function Iv(t){zs.current&&(zs.current.value=t)}function X2(){const t=D=>{Iv(D.target.value),zt.name=String(D.target.value),localStorage.setItem(zt.id,JSON.stringify(zt))};zs.current&&(zs.current.value||(Dv?Sv():Lv=!0));const[e,n]=de.useState(""),i=D=>{n(String(Math.max(Math.min(Number(D.target.value),we.maxDistance),we.minDistance))),Dt?.position.setLength(Number(Math.max(Math.min(we.maxDistance-Number(D.target.value)+.5,we.maxDistance),we.minDistance)))};Nv=function(){n(String(Math.round(we.maxDistance-we.getDistance()+.5))),o(String(Math.round(we.target.x))),a(String(Math.round(we.target.y))),c(String(Math.round(we.target.z)))},e||n("192");const[r,o]=de.useState(""),[s,a]=de.useState(""),[l,c]=de.useState(""),u=D=>{o(String(Math.max(Math.min(Number(D.target.value),1e4),-1e4))),we.target.set(Number(Math.max(Math.min(Number(D.target.value),1e4),-1e4)),we.target.y,we.target.z),we.update()},f=D=>{a(String(Math.max(Math.min(Number(D.target.value),1e4),-1e4))),we.target.set(we.target.x,Number(Math.max(Math.min(Number(D.target.value),1e4),-1e4)),we.target.z),we.update()},d=D=>{c(String(Math.max(Math.min(Number(D.target.value),1e4),-1e4))),we.target.set(we.target.x,we.target.y,Number(Math.max(Math.min(Number(D.target.value),1e4),-1e4))),we.update()};r||o("0"),s||a("0"),l||c("0");const[m,x]=de.useState("");m||x("Build");function h(D){x(D.currentTarget.querySelector("label").innerText),Nt=D.currentTarget.querySelector("label").innerText,I2()}const[p,g]=de.useState("");p||g("Blocks");function v(D){g(D.target.innerText),sa=D.target.innerText,Av()}function _(D){P(D.target.value)}function M(){we.keys={LEFT:null,UP:null,RIGHT:null,BOTTOM:null}}function S(){we.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"}}const[C,P]=de.useState(""),[y,T]=de.useState([]);de.useEffect(()=>{const D=async()=>{let he=(await hp(()=>import("./textures-5599cd7a.js"),[])).default;he=he.filter(oe=>oe.name.slice(-7)!==".mcmeta"),Dn=he,he=he.filter(oe=>!oe.name.includes("top")&&!oe.name.includes("bottom")&&!oe.name.includes("anvil")&&!oe.name.includes("bell")&&!oe.name.includes("candle")&&!oe.name.includes("redstone_dust")&&!oe.name.includes("bamboo_singleleaf")&&!oe.name.includes("big_dripleaf_side")&&!oe.name.includes("chain")&&!oe.name.includes("lightning_rod")&&!oe.name.includes("grindstone")&&!oe.name.includes("small_dripleaf")),Pv=(await hp(()=>import("./noCubeBlocks-30ca2709.js"),[])).default,bu=he,wr=he,T(wr)};Dn.length<1?D():(C!==void 0||C!==null)&&(C==""?wr=bu:wr=bu.filter(ye=>String(ye.name).toLowerCase().includes(String(C).toLowerCase())),wr.length>0&&T(wr))},[C]);const[R,K]=de.useState("");function J(){K(""),P("")}function O(D){K(D.target.value)}const[z,$]=de.useState([]);de.useEffect(()=>{$(ei)},[]);function Q(D){wv(D.currentTarget.querySelector("img").getAttribute("id")),en=D.currentTarget.querySelector("label").getAttribute("id"),en.slice(-4)!==".png"?ei.push(Dn.filter(ye=>ye.name==en.replaceAll(" ","_").concat(".png"))[0]):ei.push(Dn.filter(ye=>ye.name==en)[0]),ei=Array.from(new Set(ei)),ei=ei.slice(-8),$(ei),document.querySelectorAll(".blocks").forEach(ye=>ye.classList.remove("opacity-40")),D.currentTarget.classList.add("opacity-40")}let ee=[];function I(D){const ye=Oo.pop();if(ye){ee.push(ye);const{action:he,blockInfo:ae}=ye;if(he=="remove")oa(ae.textureName).then(()=>{Si(ae.position.x,ae.position.y,ae.position.z,ae.textureName,ae.blockType,ae.rotation._x,ae.rotation._y,ae.rotation._z),Oo.pop()});else if(he=="create"){let oe=qt?.children.filter(Ie=>Ie.position.x==ae.position.x&&Ie.position.y==ae.position.y&&Ie.position.z==ae.position.z)[0];Fd(oe),Oo.pop()}}D.target.blur()}function G(D){const ye=ee.pop();if(ye){const{action:he,blockInfo:ae}=ye;if(he=="create")oa(ae.textureName).then(()=>{Si(ae.position.x,ae.position.y,ae.position.z,ae.textureName,ae.blockType,ae.rotation._x,ae.rotation._y,ae.rotation._z)});else if(he=="remove"){let oe=qt?.children.filter(Ie=>Ie.position.x==ae.position.x&&Ie.position.y==ae.position.y&&Ie.position.z==ae.position.z)[0];Fd(oe)}}D.target.blur()}function W(D){document.querySelector(".unavailableSceneBlock").style.display="grid",D.target.blur()}function se(D){document.querySelector(".saveSceneBlock").style.display="grid",D.target.blur()}function U(D){document.querySelector(".settingSceneBlock").style.display="grid",D.target.blur()}function Z(D){document.querySelector(".unavailableSceneBlock").style.display="grid",D.target.blur()}function re(D){document.querySelector(".unavailableSceneBlock").style.display="grid",D.target.blur()}function le(D){document.querySelector(".shareSceneBlock").style.display="grid",D.target.blur()}return _e("div",{className:"threeSceneInterface h-full w-full overflow-hidden pointer-events-none grid grid-rows-[52px_1fr] z-100",children:[L(W2,{}),_e("div",{className:" sceneHeader bg-fourthcolor z-60 grid grid-cols-[300px_25%_1fr_35%] text-secondcolor",onFocus:M,onBlur:S,children:[_e(bs,{to:"/",className:"flex items-center cursor-pointer",onClick:j2,children:[L("img",{className:"ml-8 aspect-square h-9 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/f4f29d3e38a622e9a547d37c766d7a7308ba2dbc/src/assets/img/whiteLogo.svg"}),L("label",{className:"text-xl ml-4 font-medium text-firstcolor cursor-pointer",children:"Builder 3D"})]}),_e("div",{className:"flex items-center shadow-forTopBlock",children:[L("button",{onClick:I,className:"h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Undo"}),L("button",{onClick:G,className:"h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Redo"}),L("button",{onClick:W,className:" h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Create"})]}),_e("div",{className:"flex items-center justify-center text-firstcolor shadow-forTopBlock",children:[L("button",{className:"outline-none",children:"Droxus228"}),L("label",{className:" mx-2",children:"/"}),L("input",{className:"sceneName bg-transparent outline-none",type:"text",ref:zs,onChange:t})]}),_e("div",{className:"flex items-center justify-end shadow-forTopBlock",children:[L("button",{onClick:se,className:"h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Save"}),L("button",{onClick:U,className:"h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Scene"}),L("button",{onClick:Z,className:" h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Import"}),L("button",{onClick:re,className:"h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Export"}),L("button",{onClick:le,className:" h-full w-24 focus:outline-none hover:border-0 transition-none",children:"Share"})]})]}),_e("div",{className:"leftBlock absolute grid grid-rows-[185px_1fr_135px] h-full w-300  bg-firstcolor text-fourthcolor",onFocus:M,onBlur:S,children:[_e("div",{className:"pt-20 relative z-30 shadow-forLeftBlockTwo bg-firstcolor",children:[_e("div",{className:"grid grid-cols-[40px_1fr_40px] ",children:[L("button",{className:"flex place-content-center items-center focus:outline-none hover:border-0 transition-none",children:L("img",{className:"h-5 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/f4f29d3e38a622e9a547d37c766d7a7308ba2dbc/src/assets/img/crossBlocks.svg",onClick:()=>{J()}})}),L("input",{className:"bg-transparent px-2 h-10 outline-none text-center text-lg border-fourthcolor border-b-2 bg-firstcolor focus:outline-none hover:border-b-2 transition-none",type:"text",placeholder:"Find Block",value:R,onChange:O,onInput:_}),L("button",{className:"flex place-content-center items-center focus:outline-none hover:border-0 transition-none",children:L("img",{className:"h-6 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/f4f29d3e38a622e9a547d37c766d7a7308ba2dbc/src/assets/img/searchBlocks.svg"})})]}),_e("div",{className:"mt-2 flex",children:[L("button",{className:` flex-1 focus:outline-none hover:border-0 transition-none blocksType ${p=="Blocks"?" opacity-100":"opacity-40"}`,onClick:v,children:"Blocks"}),L("button",{className:` flex-1 focus:outline-none hover:border-0 transition-none slabsType ${p=="Slabs"?" opacity-100":"opacity-40"}`,onClick:v,children:"Slabs"}),L("button",{className:` flex-1 focus:outline-none hover:border-0 transition-none stairsType ${p=="Stairs"?" opacity-100":"opacity-40"}`,onClick:v,children:"Stairs"})]})]}),_e("div",{className:"texturePickBlock relative h-full overflow-scroll overflow-x-hidden z-10 mt-0 py-24 shadow-forLeftBlockThree",children:[_e("div",{className:" grid grid-cols-[180px_1fr] items-center",children:[L("label",{className:" font-semibold",children:"Recently Used Blocks"}),L("hr",{className:" h-0.5 mr-2  bg-fourthcolor my-10"})]}),L(F2,{texturePick:Q,items:ei}),_e("div",{className:" grid grid-cols-[100px_1fr] items-center",children:[L("label",{className:" font-semibold",children:"All Blocks"}),L("hr",{className:" h-0.5 mr-2  bg-fourthcolor my-10"})]}),L(z2,{texturePick:Q,items:y})]}),L("div",{className:"z-30 -mt-0 bg-firstcolor shadow-forLeftBlockTwo",children:_e("div",{className:" pt-4 h-21",children:[L("label",{className:" text-lg font-medium",children:"Mods"}),_e("div",{className:"flex mt-2 h-full",children:[_e("button",{className:` flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${m=="Build"?" opacity-100":"opacity-40"}`,onClick:h,children:[L("div",{className:"w-full flex justify-center",children:L("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/build.svg"})}),L("label",{children:"Build"})]}),_e("button",{className:` flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${m=="Inspect"?" opacity-100":"opacity-40"}`,onClick:h,children:[L("div",{className:"w-full flex justify-center",children:L("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/inspect.svg"})}),L("label",{children:"Inspect"})]}),_e("button",{className:` flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${m=="Remove"?" opacity-100":"opacity-40"}`,onClick:h,children:[L("div",{className:"w-full flex justify-center",children:L("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/remove.svg"})}),L("label",{children:"Remove"})]})]})]})})]}),_e("div",{className:" absolute top-full left-full -translate-x-120 -translate-y-14 w-120 h-10 flex items-center backdrop-blur-sm bg-black/1 text-fourthcolor font-normal",children:[_e("div",{className:" h-8 w-40 flex items-center ",children:[L("label",{className:" w-12",children:"Scale"}),L("input",{id:"scaleInput",className:" w-14 bg-transparent text-right",type:"number",value:e,onChange:i}),L("label",{children:"%"})]}),_e("div",{className:" h-8 w-80 flex items-center",children:[L("label",{className:" w-24",children:"Position"}),L("label",{children:"x:"}),L("input",{className:"modsButton w-16 bg-transparent text-center",type:"number",value:r,onChange:u}),L("label",{children:"y:"}),L("input",{className:" w-16 bg-transparent text-center",type:"number",value:s,onChange:f}),L("label",{children:"z:"}),L("input",{className:" w-16 bg-transparent text-center",type:"number",value:l,onChange:d})]})]}),L("div",{className:"saveSceneBlock hidden w-screen h-screen absolute top-0 left-0 z-200 backdrop-blur-sm backdrop-brightness-50 items-center justify-center",children:_e("div",{className:" bg-white w-600 h-500 grid items-center content-between border-4 rounded-none border-fourthcolor",children:[L("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Are you sure you want to save the scene?"}),_e("div",{className:" grid grid-cols-[1fr_3fr] grid-rows-2 gap-y-8 px-10 items-center justify-items-center text-lg",children:[L("label",{className:" text-fourthcolor",children:"Scene name"}),L("label",{className:" bg-thirdcolor text-firstcolor  w-64 h-10 flex justify-center items-center",children:"First Home"}),L("label",{className:" text-fourthcolor",children:"Author name"}),L("label",{className:" bg-thirdcolor text-firstcolor w-64 h-10 flex justify-center items-center",children:"Droxus"})]}),L("label",{className:" px-12 text-thirdcolor text-base flex justify-start items-start",children:"* The scene will be shown from the camera view and camera position when saving"}),_e("div",{className:" flex justify-around py-8",children:[L("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",children:"Yes, I am sure"}),L("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:()=>{document.querySelector(".saveSceneBlock").style.display="none"},children:"No, I am not"})]})]})}),L("div",{className:"settingSceneBlock hidden w-screen h-screen absolute top-0 left-0 z-200 backdrop-blur-sm backdrop-brightness-50 items-center justify-center",children:_e("div",{className:" bg-white w-600 h-800 grid items-center content-between border-4 rounded-none border-fourthcolor text-lg",children:[L("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Scene"}),_e("div",{className:" grid grid-cols-[1fr_3fr] gap-y-8 px-10 items-center justify-items-center text-lg",children:[L("label",{className:" text-fourthcolor",children:"Scene name"}),L("input",{className:" bg-firstcolor text-fourthcolor border-2 rounded-none outline-none border-fourthcolor text-center w-64 h-10 flex justify-center items-center",placeholder:"Name"})]}),L("label",{className:" px-8 text-fourthcolor text-xl flex justify-center items-start",children:"Hot Keys"}),_e("div",{className:" grid grid-cols-[1fr_2fr] px-12",children:[L("label",{className:" text-left",children:"Undo"}),_e("label",{className:" text-left",children:[L("kbd",{children:"Ctrl"})," + ",L("kbd",{children:"Z"})]})]}),_e("div",{className:" grid grid-cols-[1fr_2fr] px-12",children:[L("label",{className:" text-left",children:"Redo"}),_e("label",{className:" text-left",children:[L("kbd",{children:"Ctrl"})," + ",L("kbd",{children:"X"})," or ",L("kbd",{children:"Ctrl"})," + ",L("kbd",{children:"Y"})]})]}),_e("div",{className:" grid grid-cols-[1fr_2fr] px-12",children:[L("label",{className:" text-left",children:"Find Block"}),_e("label",{className:" text-left",children:[L("kbd",{children:"Ctrl"})," + ",L("kbd",{children:"F"})]})]}),_e("div",{className:" grid grid-cols-[1fr_2fr] px-12",children:[L("label",{className:" text-left",children:"Save Scene"}),_e("label",{className:" text-left",children:[L("kbd",{children:"Ctrl"})," + ",L("kbd",{children:"S"})]})]}),_e("div",{className:" grid grid-cols-[1fr_2fr] px-12",children:[L("label",{className:" text-left",children:"Switch Mode"}),_e("label",{className:" text-left",children:[L("kbd",{children:"Ctrl"})," + ",L("kbd",{children:"Q"})," and ",L("kbd",{children:"Ctrl"})," + ",L("kbd",{children:"E"})]})]}),_e("div",{className:" grid grid-cols-[1fr_2fr] px-12",children:[L("label",{className:" text-left",children:"Switch Block Type"}),_e("label",{className:" text-left",children:[L("kbd",{children:"Ctrl"})," + ",L("kbd",{children:"A"})," and ",L("kbd",{children:"Ctrl"})," + ",L("kbd",{children:"D"})]})]}),_e("div",{className:" flex justify-around py-8",children:[L("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",children:"Apply and Save"}),L("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:()=>{document.querySelector(".settingSceneBlock").style.display="none"},children:"Cancel"})]})]})}),L("div",{className:"shareSceneBlock hidden w-screen h-screen absolute top-0 left-0 z-200 backdrop-blur-sm backdrop-brightness-50 items-center justify-center",children:_e("div",{className:" bg-white w-600 h-800 grid items-center content-between border-4 rounded-none border-fourthcolor",children:[L("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Share"}),_e("div",{className:" grid grid-cols-[1fr_3fr] grid-rows-2 gap-y-8 px-10 items-center justify-items-center text-lg",children:[L("label",{className:" text-fourthcolor",children:"Scene name"}),L("label",{className:" bg-thirdcolor text-firstcolor  w-64 h-10 flex justify-center items-center",children:"First Home"}),L("label",{className:" text-fourthcolor",children:"Author name"}),L("label",{className:" bg-thirdcolor text-firstcolor w-64 h-10 flex justify-center items-center",children:"Droxus"})]}),L("label",{className:" px-8 text-fourthcolor text-xl flex justify-center items-start",children:"Warning"}),L("label",{className:" px-12 text-thirdcolor text-base flex justify-start items-start",children:"* The scene will be shown from the camera view and camera position when saving"}),L("label",{className:" px-12 text-thirdcolor text-base flex justify-start items-start",children:"* The scene will be published and link to the scene will be copied"}),L("label",{className:" px-12 text-thirdcolor text-base flex justify-start items-start",children:"* Everyone will be able to see your scene and everyone will be able to rate your scene"}),_e("div",{className:" flex justify-around py-8",children:[L("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",children:"Public"}),L("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:()=>{document.querySelector(".shareSceneBlock").style.display="none"},children:"Cancel"})]})]})}),L("div",{className:"unavailableSceneBlock hidden w-screen h-screen absolute top-0 left-0 z-200 backdrop-blur-sm backdrop-brightness-50 items-center justify-center",children:_e("div",{className:" bg-white w-600 h-400 grid items-center content-between border-4 rounded-none border-fourthcolor",children:[L("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Create/Import/Export"}),L("label",{className:" px-12 text-thirdcolor text-base flex justify-center items-center",children:"Sorry but this feature is not available yet"}),L("div",{className:" flex justify-around py-8",children:L("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:()=>{document.querySelector(".unavailableSceneBlock").style.display="none"},children:"Okay"})})]})}),L("div",{className:"opa hidden w-screen h-screen absolute top-0 left-0 z-200 backdrop-blur-sm backdrop-brightness-50 items-center justify-center",children:_e("div",{className:" bg-white w-600 h-400 grid items-center content-between border-4 rounded-none border-fourthcolor",children:[L("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Save"}),L("label",{className:" px-12 text-thirdcolor text-base flex justify-center items-center",children:"Scene was successfully saved"}),L("div",{className:" flex justify-around py-8",children:L("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:()=>{document.querySelector(".unavailableSceneBlock").style.display="none"},children:"Okay"})})]})}),L("div",{className:"opa hidden w-screen h-screen absolute top-0 left-0 z-200 backdrop-blur-sm backdrop-brightness-50 items-center justify-center",children:_e("div",{className:" bg-white w-600 h-400 grid items-center content-between border-4 rounded-none border-fourthcolor",children:[L("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Share"}),L("label",{className:" px-12 text-thirdcolor text-base flex justify-center items-center",children:"Scene was successfully published"}),L("label",{className:" px-12 text-thirdcolor text-base flex justify-center items-center",children:"Link to the scene was copied"}),L("div",{className:" flex justify-around py-8",children:L("button",{className:" w-48 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:()=>{document.querySelector(".unavailableSceneBlock").style.display="none"},children:"Okay"})})]})}),L("div",{className:"opa hidden w-screen h-screen absolute top-0 left-0 z-200 backdrop-blur-sm backdrop-brightness-50 items-center justify-center",children:_e("div",{className:" bg-white w-600 h-400 grid items-center content-between border-4 rounded-none border-fourthcolor",children:[L("label",{className:" h-16 text-center flex justify-center items-center text-fourthcolor text-2xl",children:"Loading"}),L("label",{className:" px-12 text-thirdcolor text-base flex justify-center items-center",children:"Please wait, it will take some time"}),L("div",{className:" flex justify-around py-8",children:L("button",{className:" w-64 h-10 outline-none rounded-none bg-fourthcolor text-firstcolor text-lg flex justify-center items-center",onClick:()=>{document.querySelector(".unavailableSceneBlock").style.display="none"},children:"Click to load faster  =❩"})})]})})]})}const jf=()=>L("header",{className:" h-16 w-full bg-fourthcolor fixed",children:_e("div",{className:" h-full w-full grid grid-cols-3 gap-8 text-firstcolor",children:[L("div",{children:_e(bs,{className:"h-full flex justify-center items-center mr-12 cursor-pointer",to:"/",children:[L("img",{src:"https://raw.githubusercontent.com/Droxus/Builder3D/adf3374aa802ac59bf64cb0dbfbbd51f2dce38a0/src/assets/img/whiteLogo.svg",className:" w-12"}),L("label",{className:" w-36 text-2xl font-medium cursor-pointer",children:"Builder 3D"})]})}),L("div",{className:" flex items-center justify-evenly px-12",children:_e("div",{className:" flex h-10 w-full border-firstcolor rounded-none border-2",children:[L("button",{children:L("img",{className:" w-7",src:"https://raw.githubusercontent.com/Droxus/Builder3D/adf3374aa802ac59bf64cb0dbfbbd51f2dce38a0/src/assets/img/crossScenes.svg"})}),L("input",{className:" w-full bg-transparent text-center outline-none",placeholder:"Find Scene",type:"text"}),L("button",{children:L("img",{className:" w-7",src:"https://raw.githubusercontent.com/Droxus/Builder3D/adf3374aa802ac59bf64cb0dbfbbd51f2dce38a0/src/assets/img/searchScenes.svg"})})]})}),_e("div",{className:" flex items-center justify-evenly",children:[L("button",{className:" w-16 h-10 border-firstcolor rounded-none border-2",children:L(bs,{className:" flex w-16 h-10 items-center justify-center text-xl font-normal",to:"/Builder3D/help",children:"?"})}),L("button",{className:" w-40 h-10 border-firstcolor rounded-none border-2",children:L(bs,{className:" flex w-40 h-10 items-center justify-center text-lg font-normal",to:"/Builder3D/scene",children:"Create Scene"})}),L("button",{className:" w-40 h-10 border-firstcolor rounded-none border-2",children:L(bs,{className:" flex w-40 h-10 items-center justify-center text-lg font-normal",to:"/Builder3D/profile",children:"Your Profile"})})]})]})}),kv=()=>_e("main",{className:" max-h-max w-full grid grid-cols-3 gap-8 grid-flow-row text-firstcolor py-24 px-8",children:[L("div",{className:" border-fourthcolor rounded-none border-2 aspect-video"}),L("div",{className:" border-fourthcolor rounded-none border-2 aspect-video"}),L("div",{className:" border-fourthcolor rounded-none border-2 aspect-video"}),L("div",{className:" border-fourthcolor rounded-none border-2 aspect-video"}),L("div",{className:" border-fourthcolor rounded-none border-2 aspect-video"}),L("div",{className:" border-fourthcolor rounded-none border-2 aspect-video"}),L("div",{className:" border-fourthcolor rounded-none border-2 aspect-video"}),L("div",{className:" border-fourthcolor rounded-none border-2 aspect-video"}),L("div",{className:" border-fourthcolor rounded-none border-2 aspect-video"}),L("div",{className:" border-fourthcolor rounded-none border-2 aspect-video"}),L("div",{className:" border-fourthcolor rounded-none border-2 aspect-video"}),L("div",{className:" border-fourthcolor rounded-none border-2 aspect-video"})]});function Rm(){return _e("div",{className:" w-screen h-screen overflow-hidden overflow-y-scroll ",children:[L(jf,{}),L(kv,{})]})}const q2=()=>_e("div",{className:" px-8 pt-24 max-h-max w-full grid grid-cols-3 gap-8",children:[L("div",{className:"grid items-center justify-center",children:_e("div",{className:" w-64 h-64 border-2 border-fourthcolor flex flex-col items-center",children:[L("img",{src:"",alt:"",className:" w-64 h-64 text-center"}),L("p",{className:" text-center h-64",children:"User Photo"})]})}),L("div",{className:"grid items-center justify-center text-lg font-medium",children:_e("div",{className:" w-72 h-4/5 grid grid-cols-2 items-center content-evenly",children:[L("label",{className:" flex justify-start",children:"Nickname:"}),L("label",{className:" flex justify-start",children:"Droxus228"}),L("label",{className:" flex justify-start",children:"Scene created:"}),L("label",{className:" flex justify-start",children:"9"}),L("label",{className:" flex justify-start",children:"Average rating:"}),L("label",{className:" flex justify-start",children:"4.2"})]})}),L("div",{className:" border-fourthcolor rounded-none border-2 aspect-video"})]});function $2(){return _e("div",{onMouseDown:t=>{t.shiftKey&&t.preventDefault()},className:"App h-full w-full z-60",children:[L(jf,{}),L(q2,{}),L(kv,{})]})}function Y2(){return _e("div",{onMouseDown:t=>{t.shiftKey&&t.preventDefault()},className:"App h-full w-full z-60",children:[L(jf,{}),_e("div",{className:"pt-24 max-h-max w-full grid justify-items-center gap-8",children:[_e("div",{className:" bg-fourthcolor w-full h-20 max-w-4xl flex items-center",children:[L("label",{className:" flex-1 text-2xl text-firstcolor",children:"Instruction"}),L("label",{className:" flex-1 text-base text-secondcolor",children:"This page contains information you may need"})]}),_e("div",{className:" bg-fourthcolor w-full max-h-max max-w-4xl",children:[L("label",{className:" flex-1 flex h-14 items-center justify-center text-xl text-firstcolor",children:"Choose Block"}),L("div",{className:" bg-transparent w-full aspect-video px-1",children:L("div",{className:" bg-thirdcolor w-full h-full"})}),L("label",{className:" flex-1 flex px-12 py-6 text-base text-secondcolor",children:"This page contains information you may need"})]})]})]})}function K2(){return L("div",{onMouseDown:t=>{t.shiftKey&&t.preventDefault()},className:"App h-full w-full z-60",children:_e(cS,{children:[L(po,{path:"/Builder3D/",element:L(Rm,{})}),L(po,{path:"/Builder3D/scene",element:L(X2,{})}),L(po,{path:"/Builder3D/profile",element:L($2,{})}),L(po,{path:"/Builder3D/help",element:L(Y2,{})}),L(po,{path:"*",element:L(Rm,{})})]})})}Tu.createRoot(document.getElementById("root")).render(L(jd.StrictMode,{children:L(pS,{children:L(K2,{})})}));
