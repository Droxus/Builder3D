(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function b0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ya={},T0={get exports(){return Ya},set exports(n){Ya=n}},yl={},en={},C0={get exports(){return en},set exports(n){en=n}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),A0=Symbol.for("react.portal"),L0=Symbol.for("react.fragment"),P0=Symbol.for("react.strict_mode"),D0=Symbol.for("react.profiler"),R0=Symbol.for("react.provider"),I0=Symbol.for("react.context"),N0=Symbol.for("react.forward_ref"),k0=Symbol.for("react.suspense"),z0=Symbol.for("react.memo"),F0=Symbol.for("react.lazy"),ad=Symbol.iterator;function O0(n){return n===null||typeof n!="object"?null:(n=ad&&n[ad]||n["@@iterator"],typeof n=="function"?n:null)}var Np={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kp=Object.assign,zp={};function Vs(n,e,t){this.props=n,this.context=e,this.refs=zp,this.updater=t||Np}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Vs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Fp(){}Fp.prototype=Vs.prototype;function nf(n,e,t){this.props=n,this.context=e,this.refs=zp,this.updater=t||Np}var rf=nf.prototype=new Fp;rf.constructor=nf;kp(rf,Vs.prototype);rf.isPureReactComponent=!0;var ld=Array.isArray,Op=Object.prototype.hasOwnProperty,sf={current:null},Up={key:!0,ref:!0,__self:!0,__source:!0};function Bp(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Op.call(e,i)&&!Up.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:jo,type:n,key:s,ref:o,props:r,_owner:sf.current}}function U0(n,e){return{$$typeof:jo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function of(n){return typeof n=="object"&&n!==null&&n.$$typeof===jo}function B0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var ud=/\/+/g;function Wl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?B0(""+n.key):e.toString(36)}function Na(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case jo:case A0:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Wl(o,0):i,ld(r)?(t="",n!=null&&(t=n.replace(ud,"$&/")+"/"),Na(r,e,t,"",function(u){return u})):r!=null&&(of(r)&&(r=U0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ud,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ld(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Wl(s,a);o+=Na(s,e,t,l,r)}else if(l=O0(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Wl(s,a++),o+=Na(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qo(n,e,t){if(n==null)return n;var i=[],r=0;return Na(n,i,"","",function(s){return e.call(t,s,r++)}),i}function V0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Kt={current:null},ka={transition:null},G0={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:ka,ReactCurrentOwner:sf};Ne.Children={map:Qo,forEach:function(n,e,t){Qo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Qo(n,function(){e++}),e},toArray:function(n){return Qo(n,function(e){return e})||[]},only:function(n){if(!of(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ne.Component=Vs;Ne.Fragment=L0;Ne.Profiler=D0;Ne.PureComponent=nf;Ne.StrictMode=P0;Ne.Suspense=k0;Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G0;Ne.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=kp({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Op.call(e,l)&&!Up.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:jo,type:n.type,key:r,ref:s,props:i,_owner:o}};Ne.createContext=function(n){return n={$$typeof:I0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:R0,_context:n},n.Consumer=n};Ne.createElement=Bp;Ne.createFactory=function(n){var e=Bp.bind(null,n);return e.type=n,e};Ne.createRef=function(){return{current:null}};Ne.forwardRef=function(n){return{$$typeof:N0,render:n}};Ne.isValidElement=of;Ne.lazy=function(n){return{$$typeof:F0,_payload:{_status:-1,_result:n},_init:V0}};Ne.memo=function(n,e){return{$$typeof:z0,type:n,compare:e===void 0?null:e}};Ne.startTransition=function(n){var e=ka.transition;ka.transition={};try{n()}finally{ka.transition=e}};Ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ne.useCallback=function(n,e){return Kt.current.useCallback(n,e)};Ne.useContext=function(n){return Kt.current.useContext(n)};Ne.useDebugValue=function(){};Ne.useDeferredValue=function(n){return Kt.current.useDeferredValue(n)};Ne.useEffect=function(n,e){return Kt.current.useEffect(n,e)};Ne.useId=function(){return Kt.current.useId()};Ne.useImperativeHandle=function(n,e,t){return Kt.current.useImperativeHandle(n,e,t)};Ne.useInsertionEffect=function(n,e){return Kt.current.useInsertionEffect(n,e)};Ne.useLayoutEffect=function(n,e){return Kt.current.useLayoutEffect(n,e)};Ne.useMemo=function(n,e){return Kt.current.useMemo(n,e)};Ne.useReducer=function(n,e,t){return Kt.current.useReducer(n,e,t)};Ne.useRef=function(n){return Kt.current.useRef(n)};Ne.useState=function(n){return Kt.current.useState(n)};Ne.useSyncExternalStore=function(n,e,t){return Kt.current.useSyncExternalStore(n,e,t)};Ne.useTransition=function(){return Kt.current.useTransition()};Ne.version="18.2.0";(function(n){n.exports=Ne})(C0);const H0=b0(en);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0=en,j0=Symbol.for("react.element"),X0=Symbol.for("react.fragment"),q0=Object.prototype.hasOwnProperty,Y0=W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$0={key:!0,ref:!0,__self:!0,__source:!0};function Vp(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)q0.call(e,i)&&!$0.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:j0,type:n,key:s,ref:o,props:r,_owner:Y0.current}}yl.Fragment=X0;yl.jsx=Vp;yl.jsxs=Vp;(function(n){n.exports=yl})(T0);const we=Ya.jsx,gt=Ya.jsxs;var Qu={},Ju={},Z0={get exports(){return Ju},set exports(n){Ju=n}},Mn={},ec={},K0={get exports(){return ec},set exports(n){ec=n}},Gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(R,G){var H=R.length;R.push(G);e:for(;0<H;){var se=H-1>>>1,F=R[se];if(0<r(F,G))R[se]=G,R[H]=F,H=se;else break e}}function t(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var G=R[0],H=R.pop();if(H!==G){R[0]=H;e:for(var se=0,F=R.length,$=F>>>1;se<$;){var ie=2*(se+1)-1,oe=R[ie],U=ie+1,Ee=R[U];if(0>r(oe,H))U<F&&0>r(Ee,oe)?(R[se]=Ee,R[U]=H,se=U):(R[se]=oe,R[ie]=H,se=ie);else if(U<F&&0>r(Ee,H))R[se]=Ee,R[U]=H,se=U;else break e}}return G}function r(R,G){var H=R.sortIndex-G.sortIndex;return H!==0?H:R.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,y=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(R){for(var G=t(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=R)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=t(u)}}function M(R){if(h=!1,_(R),!y)if(t(l)!==null)y=!0,Q(x);else{var G=t(u);G!==null&&J(M,G.startTime-R)}}function x(R,G){y=!1,h&&(h=!1,m(S),S=-1),g=!0;var H=f;try{for(_(G),d=t(l);d!==null&&(!(d.expirationTime>G)||R&&!Z());){var se=d.callback;if(typeof se=="function"){d.callback=null,f=d.priorityLevel;var F=se(d.expirationTime<=G);G=n.unstable_now(),typeof F=="function"?d.callback=F:d===t(l)&&i(l),_(G)}else i(l);d=t(l)}if(d!==null)var $=!0;else{var ie=t(u);ie!==null&&J(M,ie.startTime-G),$=!1}return $}finally{d=null,f=H,g=!1}}var A=!1,L=null,S=-1,T=5,P=-1;function Z(){return!(n.unstable_now()-P<T)}function K(){if(L!==null){var R=n.unstable_now();P=R;var G=!0;try{G=L(!0,R)}finally{G?z():(A=!1,L=null)}}else A=!1}var z;if(typeof v=="function")z=function(){v(K)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,Y=k.port2;k.port1.onmessage=K,z=function(){Y.postMessage(null)}}else z=function(){p(K,0)};function Q(R){L=R,A||(A=!0,z())}function J(R,G){S=p(function(){R(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_continueExecution=function(){y||g||(y=!0,Q(x))},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(R){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var H=f;f=G;try{return R()}finally{f=H}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(R,G){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var H=f;f=R;try{return G()}finally{f=H}},n.unstable_scheduleCallback=function(R,G,H){var se=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?se+H:se):H=se,R){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=H+F,R={id:c++,callback:G,priorityLevel:R,startTime:H,expirationTime:F,sortIndex:-1},H>se?(R.sortIndex=H,e(u,R),t(l)===null&&R===t(u)&&(h?(m(S),S=-1):h=!0,J(M,H-se))):(R.sortIndex=F,e(l,R),y||g||(y=!0,Q(x))),R},n.unstable_shouldYield=Z,n.unstable_wrapCallback=function(R){var G=f;return function(){var H=f;f=G;try{return R.apply(this,arguments)}finally{f=H}}}})(Gp);(function(n){n.exports=Gp})(K0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp=en,Sn=ec;function ee(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wp=new Set,wo={};function Or(n,e){Ls(n,e),Ls(n+"Capture",e)}function Ls(n,e){for(wo[n]=e,n=0;n<e.length;n++)Wp.add(e[n])}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tc=Object.prototype.hasOwnProperty,Q0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cd={},fd={};function J0(n){return tc.call(fd,n)?!0:tc.call(cd,n)?!1:Q0.test(n)?fd[n]=!0:(cd[n]=!0,!1)}function ev(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function tv(n,e,t,i){if(e===null||typeof e>"u"||ev(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Ft[n]=new Qt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Ft[e]=new Qt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Ft[n]=new Qt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Ft[n]=new Qt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Ft[n]=new Qt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Ft[n]=new Qt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Ft[n]=new Qt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Ft[n]=new Qt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Ft[n]=new Qt(n,5,!1,n.toLowerCase(),null,!1,!1)});var af=/[\-:]([a-z])/g;function lf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(af,lf);Ft[e]=new Qt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(af,lf);Ft[e]=new Qt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(af,lf);Ft[e]=new Qt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Ft[n]=new Qt(n,1,!1,n.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Ft[n]=new Qt(n,1,!1,n.toLowerCase(),null,!0,!0)});function uf(n,e,t,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tv(e,t,r,i)&&(t=null),i||r===null?J0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ei=Hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),as=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),nc=Symbol.for("react.profiler"),jp=Symbol.for("react.provider"),Xp=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),ic=Symbol.for("react.suspense"),rc=Symbol.for("react.suspense_list"),df=Symbol.for("react.memo"),Pi=Symbol.for("react.lazy"),qp=Symbol.for("react.offscreen"),dd=Symbol.iterator;function Xs(n){return n===null||typeof n!="object"?null:(n=dd&&n[dd]||n["@@iterator"],typeof n=="function"?n:null)}var st=Object.assign,jl;function ao(n){if(jl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);jl=e&&e[1]||""}return`
`+jl+n}var Xl=!1;function ql(n,e){if(!n||Xl)return"";Xl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ao(n):""}function nv(n){switch(n.tag){case 5:return ao(n.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return n=ql(n.type,!1),n;case 11:return n=ql(n.type.render,!1),n;case 1:return n=ql(n.type,!0),n;default:return""}}function sc(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ls:return"Fragment";case as:return"Portal";case nc:return"Profiler";case cf:return"StrictMode";case ic:return"Suspense";case rc:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Xp:return(n.displayName||"Context")+".Consumer";case jp:return(n._context.displayName||"Context")+".Provider";case ff:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case df:return e=n.displayName||null,e!==null?e:sc(n.type)||"Memo";case Pi:e=n._payload,n=n._init;try{return sc(n(e))}catch{}}return null}function iv(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sc(e);case 8:return e===cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Yp(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rv(n){var e=Yp(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ea(n){n._valueTracker||(n._valueTracker=rv(n))}function $p(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Yp(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function $a(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function oc(n,e){var t=e.checked;return st({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function hd(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Yi(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zp(n,e){e=e.checked,e!=null&&uf(n,"checked",e,!1)}function ac(n,e){Zp(n,e);var t=Yi(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?lc(n,e.type,t):e.hasOwnProperty("defaultValue")&&lc(n,e.type,Yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function pd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function lc(n,e,t){(e!=="number"||$a(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var lo=Array.isArray;function ys(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Yi(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function uc(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return st({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function md(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ee(92));if(lo(t)){if(1<t.length)throw Error(ee(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Yi(t)}}function Kp(n,e){var t=Yi(e.value),i=Yi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function gd(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Qp(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Qp(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ta,Jp=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ta.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Eo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sv=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(n){sv.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),po[e]=po[n]})});function em(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||po.hasOwnProperty(n)&&po[n]?(""+e).trim():e+"px"}function tm(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=em(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var ov=st({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fc(n,e){if(e){if(ov[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function dc(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hc=null;function hf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pc=null,Ss=null,Ms=null;function vd(n){if(n=Yo(n)){if(typeof pc!="function")throw Error(ee(280));var e=n.stateNode;e&&(e=bl(e),pc(n.stateNode,n.type,e))}}function nm(n){Ss?Ms?Ms.push(n):Ms=[n]:Ss=n}function im(){if(Ss){var n=Ss,e=Ms;if(Ms=Ss=null,vd(n),e)for(n=0;n<e.length;n++)vd(e[n])}}function rm(n,e){return n(e)}function sm(){}var Yl=!1;function om(n,e,t){if(Yl)return n(e,t);Yl=!0;try{return rm(n,e,t)}finally{Yl=!1,(Ss!==null||Ms!==null)&&(sm(),im())}}function bo(n,e){var t=n.stateNode;if(t===null)return null;var i=bl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ee(231,e,typeof t));return t}var mc=!1;if(yi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){mc=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{mc=!1}function av(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var mo=!1,Za=null,Ka=!1,gc=null,lv={onError:function(n){mo=!0,Za=n}};function uv(n,e,t,i,r,s,o,a,l){mo=!1,Za=null,av.apply(lv,arguments)}function cv(n,e,t,i,r,s,o,a,l){if(uv.apply(this,arguments),mo){if(mo){var u=Za;mo=!1,Za=null}else throw Error(ee(198));Ka||(Ka=!0,gc=u)}}function Ur(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function am(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function _d(n){if(Ur(n)!==n)throw Error(ee(188))}function fv(n){var e=n.alternate;if(!e){if(e=Ur(n),e===null)throw Error(ee(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return _d(r),n;if(s===i)return _d(r),e;s=s.sibling}throw Error(ee(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(t.alternate!==i)throw Error(ee(190))}if(t.tag!==3)throw Error(ee(188));return t.stateNode.current===t?n:e}function lm(n){return n=fv(n),n!==null?um(n):null}function um(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=um(n);if(e!==null)return e;n=n.sibling}return null}var cm=Sn.unstable_scheduleCallback,xd=Sn.unstable_cancelCallback,dv=Sn.unstable_shouldYield,hv=Sn.unstable_requestPaint,lt=Sn.unstable_now,pv=Sn.unstable_getCurrentPriorityLevel,pf=Sn.unstable_ImmediatePriority,fm=Sn.unstable_UserBlockingPriority,Qa=Sn.unstable_NormalPriority,mv=Sn.unstable_LowPriority,dm=Sn.unstable_IdlePriority,Sl=null,ti=null;function gv(n){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(Sl,n,void 0,(n.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:xv,vv=Math.log,_v=Math.LN2;function xv(n){return n>>>=0,n===0?32:31-(vv(n)/_v|0)|0}var na=64,ia=4194304;function uo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ja(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=uo(a):(s&=o,s!==0&&(i=uo(s)))}else o=t&~r,o!==0?i=uo(o):s!==0&&(i=uo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-qn(e),r=1<<t,i|=n[t],e&=~r;return i}function yv(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sv(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=yv(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function vc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function hm(){var n=na;return na<<=1,!(na&4194240)&&(na=64),n}function $l(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Xo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-qn(e),n[e]=t}function Mv(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-qn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function mf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-qn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Xe=0;function pm(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var mm,gf,gm,vm,_m,_c=!1,ra=[],zi=null,Fi=null,Oi=null,To=new Map,Co=new Map,Ri=[],wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yd(n,e){switch(n){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":To.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(e.pointerId)}}function Ys(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Yo(e),e!==null&&gf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Ev(n,e,t,i,r){switch(e){case"focusin":return zi=Ys(zi,n,e,t,i,r),!0;case"dragenter":return Fi=Ys(Fi,n,e,t,i,r),!0;case"mouseover":return Oi=Ys(Oi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return To.set(s,Ys(To.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Co.set(s,Ys(Co.get(s)||null,n,e,t,i,r)),!0}return!1}function xm(n){var e=xr(n.target);if(e!==null){var t=Ur(e);if(t!==null){if(e=t.tag,e===13){if(e=am(t),e!==null){n.blockedOn=e,_m(n.priority,function(){gm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function za(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=xc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);hc=i,t.target.dispatchEvent(i),hc=null}else return e=Yo(t),e!==null&&gf(e),n.blockedOn=t,!1;e.shift()}return!0}function Sd(n,e,t){za(n)&&t.delete(e)}function bv(){_c=!1,zi!==null&&za(zi)&&(zi=null),Fi!==null&&za(Fi)&&(Fi=null),Oi!==null&&za(Oi)&&(Oi=null),To.forEach(Sd),Co.forEach(Sd)}function $s(n,e){n.blockedOn===e&&(n.blockedOn=null,_c||(_c=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,bv)))}function Ao(n){function e(r){return $s(r,n)}if(0<ra.length){$s(ra[0],n);for(var t=1;t<ra.length;t++){var i=ra[t];i.blockedOn===n&&(i.blockedOn=null)}}for(zi!==null&&$s(zi,n),Fi!==null&&$s(Fi,n),Oi!==null&&$s(Oi,n),To.forEach(e),Co.forEach(e),t=0;t<Ri.length;t++)i=Ri[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ri.length&&(t=Ri[0],t.blockedOn===null);)xm(t),t.blockedOn===null&&Ri.shift()}var ws=Ei.ReactCurrentBatchConfig,el=!0;function Tv(n,e,t,i){var r=Xe,s=ws.transition;ws.transition=null;try{Xe=1,vf(n,e,t,i)}finally{Xe=r,ws.transition=s}}function Cv(n,e,t,i){var r=Xe,s=ws.transition;ws.transition=null;try{Xe=4,vf(n,e,t,i)}finally{Xe=r,ws.transition=s}}function vf(n,e,t,i){if(el){var r=xc(n,e,t,i);if(r===null)su(n,e,i,tl,t),yd(n,i);else if(Ev(r,n,e,t,i))i.stopPropagation();else if(yd(n,i),e&4&&-1<wv.indexOf(n)){for(;r!==null;){var s=Yo(r);if(s!==null&&mm(s),s=xc(n,e,t,i),s===null&&su(n,e,i,tl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else su(n,e,i,null,t)}}var tl=null;function xc(n,e,t,i){if(tl=null,n=hf(i),n=xr(n),n!==null)if(e=Ur(n),e===null)n=null;else if(t=e.tag,t===13){if(n=am(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return tl=n,null}function ym(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pv()){case pf:return 1;case fm:return 4;case Qa:case mv:return 16;case dm:return 536870912;default:return 16}default:return 16}}var Ni=null,_f=null,Fa=null;function Sm(){if(Fa)return Fa;var n,e=_f,t=e.length,i,r="value"in Ni?Ni.value:Ni.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Fa=r.slice(n,1<i?1-i:void 0)}function Oa(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function sa(){return!0}function Md(){return!1}function wn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sa:Md,this.isPropagationStopped=Md,this}return st(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xf=wn(Gs),qo=st({},Gs,{view:0,detail:0}),Av=wn(qo),Zl,Kl,Zs,Ml=st({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Zs&&(Zs&&n.type==="mousemove"?(Zl=n.screenX-Zs.screenX,Kl=n.screenY-Zs.screenY):Kl=Zl=0,Zs=n),Zl)},movementY:function(n){return"movementY"in n?n.movementY:Kl}}),wd=wn(Ml),Lv=st({},Ml,{dataTransfer:0}),Pv=wn(Lv),Dv=st({},qo,{relatedTarget:0}),Ql=wn(Dv),Rv=st({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=wn(Rv),Nv=st({},Gs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),kv=wn(Nv),zv=st({},Gs,{data:0}),Ed=wn(zv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Uv[n])?!!e[n]:!1}function yf(){return Bv}var Vv=st({},qo,{key:function(n){if(n.key){var e=Fv[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Oa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ov[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yf,charCode:function(n){return n.type==="keypress"?Oa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Oa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Gv=wn(Vv),Hv=st({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=wn(Hv),Wv=st({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yf}),jv=wn(Wv),Xv=st({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),qv=wn(Xv),Yv=st({},Ml,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=wn(Yv),Zv=[9,13,27,32],Sf=yi&&"CompositionEvent"in window,go=null;yi&&"documentMode"in document&&(go=document.documentMode);var Kv=yi&&"TextEvent"in window&&!go,Mm=yi&&(!Sf||go&&8<go&&11>=go),Td=String.fromCharCode(32),Cd=!1;function wm(n,e){switch(n){case"keyup":return Zv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Em(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var us=!1;function Qv(n,e){switch(n){case"compositionend":return Em(e);case"keypress":return e.which!==32?null:(Cd=!0,Td);case"textInput":return n=e.data,n===Td&&Cd?null:n;default:return null}}function Jv(n,e){if(us)return n==="compositionend"||!Sf&&wm(n,e)?(n=Sm(),Fa=_f=Ni=null,us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mm&&e.locale!=="ko"?null:e.data;default:return null}}var e_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ad(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!e_[n.type]:e==="textarea"}function bm(n,e,t,i){nm(i),e=nl(e,"onChange"),0<e.length&&(t=new xf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var vo=null,Lo=null;function t_(n){zm(n,0)}function wl(n){var e=ds(n);if($p(e))return n}function n_(n,e){if(n==="change")return e}var Tm=!1;if(yi){var Jl;if(yi){var eu="oninput"in document;if(!eu){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),eu=typeof Ld.oninput=="function"}Jl=eu}else Jl=!1;Tm=Jl&&(!document.documentMode||9<document.documentMode)}function Pd(){vo&&(vo.detachEvent("onpropertychange",Cm),Lo=vo=null)}function Cm(n){if(n.propertyName==="value"&&wl(Lo)){var e=[];bm(e,Lo,n,hf(n)),om(t_,e)}}function i_(n,e,t){n==="focusin"?(Pd(),vo=e,Lo=t,vo.attachEvent("onpropertychange",Cm)):n==="focusout"&&Pd()}function r_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wl(Lo)}function s_(n,e){if(n==="click")return wl(e)}function o_(n,e){if(n==="input"||n==="change")return wl(e)}function a_(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var $n=typeof Object.is=="function"?Object.is:a_;function Po(n,e){if($n(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!tc.call(e,r)||!$n(n[r],e[r]))return!1}return!0}function Dd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Rd(n,e){var t=Dd(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Dd(t)}}function Am(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Am(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Lm(){for(var n=window,e=$a();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=$a(n.document)}return e}function Mf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function l_(n){var e=Lm(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Am(t.ownerDocument.documentElement,t)){if(i!==null&&Mf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Rd(t,s);var o=Rd(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var u_=yi&&"documentMode"in document&&11>=document.documentMode,cs=null,yc=null,_o=null,Sc=!1;function Id(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Sc||cs==null||cs!==$a(i)||(i=cs,"selectionStart"in i&&Mf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_o&&Po(_o,i)||(_o=i,i=nl(yc,"onSelect"),0<i.length&&(e=new xf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=cs)))}function oa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var fs={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},tu={},Pm={};yi&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function El(n){if(tu[n])return tu[n];if(!fs[n])return n;var e=fs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Pm)return tu[n]=e[t];return n}var Dm=El("animationend"),Rm=El("animationiteration"),Im=El("animationstart"),Nm=El("transitionend"),km=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(n,e){km.set(n,e),Or(e,[n])}for(var nu=0;nu<Nd.length;nu++){var iu=Nd[nu],c_=iu.toLowerCase(),f_=iu[0].toUpperCase()+iu.slice(1);er(c_,"on"+f_)}er(Dm,"onAnimationEnd");er(Rm,"onAnimationIteration");er(Im,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(Nm,"onTransitionEnd");Ls("onMouseEnter",["mouseout","mouseover"]);Ls("onMouseLeave",["mouseout","mouseover"]);Ls("onPointerEnter",["pointerout","pointerover"]);Ls("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d_=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function kd(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,cv(i,e,void 0,n),n.currentTarget=null}function zm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;kd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;kd(r,a,u),s=l}}}if(Ka)throw n=gc,Ka=!1,gc=null,n}function $e(n,e){var t=e[Tc];t===void 0&&(t=e[Tc]=new Set);var i=n+"__bubble";t.has(i)||(Fm(e,n,2,!1),t.add(i))}function ru(n,e,t){var i=0;e&&(i|=4),Fm(t,n,i,e)}var aa="_reactListening"+Math.random().toString(36).slice(2);function Do(n){if(!n[aa]){n[aa]=!0,Wp.forEach(function(t){t!=="selectionchange"&&(d_.has(t)||ru(t,!1,n),ru(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[aa]||(e[aa]=!0,ru("selectionchange",!1,e))}}function Fm(n,e,t,i){switch(ym(e)){case 1:var r=Tv;break;case 4:r=Cv;break;default:r=vf}t=r.bind(null,e,t,n),r=void 0,!mc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function su(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=xr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}om(function(){var u=s,c=hf(t),d=[];e:{var f=km.get(n);if(f!==void 0){var g=xf,y=n;switch(n){case"keypress":if(Oa(t)===0)break e;case"keydown":case"keyup":g=Gv;break;case"focusin":y="focus",g=Ql;break;case"focusout":y="blur",g=Ql;break;case"beforeblur":case"afterblur":g=Ql;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=jv;break;case Dm:case Rm:case Im:g=Iv;break;case Nm:g=qv;break;case"scroll":g=Av;break;case"wheel":g=$v;break;case"copy":case"cut":case"paste":g=kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=bd}var h=(e&4)!==0,p=!h&&n==="scroll",m=h?f!==null?f+"Capture":null:f;h=[];for(var v=u,_;v!==null;){_=v;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,m!==null&&(M=bo(v,m),M!=null&&h.push(Ro(v,M,_)))),p)break;v=v.return}0<h.length&&(f=new g(f,y,null,t,c),d.push({event:f,listeners:h}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",f&&t!==hc&&(y=t.relatedTarget||t.fromElement)&&(xr(y)||y[Si]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=t.relatedTarget||t.toElement,g=u,y=y?xr(y):null,y!==null&&(p=Ur(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(h=wd,M="onMouseLeave",m="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(h=bd,M="onPointerLeave",m="onPointerEnter",v="pointer"),p=g==null?f:ds(g),_=y==null?f:ds(y),f=new h(M,v+"leave",g,t,c),f.target=p,f.relatedTarget=_,M=null,xr(c)===u&&(h=new h(m,v+"enter",y,t,c),h.target=_,h.relatedTarget=p,M=h),p=M,g&&y)t:{for(h=g,m=y,v=0,_=h;_;_=Gr(_))v++;for(_=0,M=m;M;M=Gr(M))_++;for(;0<v-_;)h=Gr(h),v--;for(;0<_-v;)m=Gr(m),_--;for(;v--;){if(h===m||m!==null&&h===m.alternate)break t;h=Gr(h),m=Gr(m)}h=null}else h=null;g!==null&&zd(d,f,g,h,!1),y!==null&&p!==null&&zd(d,p,y,h,!0)}}e:{if(f=u?ds(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var x=n_;else if(Ad(f))if(Tm)x=o_;else{x=r_;var A=i_}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=s_);if(x&&(x=x(n,u))){bm(d,x,t,c);break e}A&&A(n,f,u),n==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&lc(f,"number",f.value)}switch(A=u?ds(u):window,n){case"focusin":(Ad(A)||A.contentEditable==="true")&&(cs=A,yc=u,_o=null);break;case"focusout":_o=yc=cs=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,Id(d,t,c);break;case"selectionchange":if(u_)break;case"keydown":case"keyup":Id(d,t,c)}var L;if(Sf)e:{switch(n){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else us?wm(n,t)&&(S="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(Mm&&t.locale!=="ko"&&(us||S!=="onCompositionStart"?S==="onCompositionEnd"&&us&&(L=Sm()):(Ni=c,_f="value"in Ni?Ni.value:Ni.textContent,us=!0)),A=nl(u,S),0<A.length&&(S=new Ed(S,n,null,t,c),d.push({event:S,listeners:A}),L?S.data=L:(L=Em(t),L!==null&&(S.data=L)))),(L=Kv?Qv(n,t):Jv(n,t))&&(u=nl(u,"onBeforeInput"),0<u.length&&(c=new Ed("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=L))}zm(d,e)})}function Ro(n,e,t){return{instance:n,listener:e,currentTarget:t}}function nl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=bo(n,t),s!=null&&i.unshift(Ro(n,s,r)),s=bo(n,e),s!=null&&i.push(Ro(n,s,r))),n=n.return}return i}function Gr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function zd(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=bo(t,s),l!=null&&o.unshift(Ro(t,l,a))):r||(l=bo(t,s),l!=null&&o.push(Ro(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var h_=/\r\n?/g,p_=/\u0000|\uFFFD/g;function Fd(n){return(typeof n=="string"?n:""+n).replace(h_,`
`).replace(p_,"")}function la(n,e,t){if(e=Fd(e),Fd(n)!==e&&t)throw Error(ee(425))}function il(){}var Mc=null,wc=null;function Ec(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,m_=typeof clearTimeout=="function"?clearTimeout:void 0,Od=typeof Promise=="function"?Promise:void 0,g_=typeof queueMicrotask=="function"?queueMicrotask:typeof Od<"u"?function(n){return Od.resolve(null).then(n).catch(v_)}:bc;function v_(n){setTimeout(function(){throw n})}function ou(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ao(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ao(e)}function Ui(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Ud(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),ei="__reactFiber$"+Hs,Io="__reactProps$"+Hs,Si="__reactContainer$"+Hs,Tc="__reactEvents$"+Hs,__="__reactListeners$"+Hs,x_="__reactHandles$"+Hs;function xr(n){var e=n[ei];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Si]||t[ei]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Ud(n);n!==null;){if(t=n[ei])return t;n=Ud(n)}return e}n=t,t=n.parentNode}return null}function Yo(n){return n=n[ei]||n[Si],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ee(33))}function bl(n){return n[Io]||null}var Cc=[],hs=-1;function tr(n){return{current:n}}function et(n){0>hs||(n.current=Cc[hs],Cc[hs]=null,hs--)}function Ye(n,e){hs++,Cc[hs]=n.current,n.current=e}var $i={},Wt=tr($i),sn=tr(!1),Lr=$i;function Ps(n,e){var t=n.type.contextTypes;if(!t)return $i;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function on(n){return n=n.childContextTypes,n!=null}function rl(){et(sn),et(Wt)}function Bd(n,e,t){if(Wt.current!==$i)throw Error(ee(168));Ye(Wt,e),Ye(sn,t)}function Om(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,iv(n)||"Unknown",r));return st({},t,i)}function sl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||$i,Lr=Wt.current,Ye(Wt,n),Ye(sn,sn.current),!0}function Vd(n,e,t){var i=n.stateNode;if(!i)throw Error(ee(169));t?(n=Om(n,e,Lr),i.__reactInternalMemoizedMergedChildContext=n,et(sn),et(Wt),Ye(Wt,n)):et(sn),Ye(sn,t)}var hi=null,Tl=!1,au=!1;function Um(n){hi===null?hi=[n]:hi.push(n)}function y_(n){Tl=!0,Um(n)}function nr(){if(!au&&hi!==null){au=!0;var n=0,e=Xe;try{var t=hi;for(Xe=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}hi=null,Tl=!1}catch(r){throw hi!==null&&(hi=hi.slice(n+1)),cm(pf,nr),r}finally{Xe=e,au=!1}}return null}var ps=[],ms=0,ol=null,al=0,An=[],Ln=0,Pr=null,mi=1,gi="";function fr(n,e){ps[ms++]=al,ps[ms++]=ol,ol=n,al=e}function Bm(n,e,t){An[Ln++]=mi,An[Ln++]=gi,An[Ln++]=Pr,Pr=n;var i=mi;n=gi;var r=32-qn(i)-1;i&=~(1<<r),t+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,mi=1<<32-qn(e)+r|t<<r|i,gi=s+n}else mi=1<<s|t<<r|i,gi=n}function wf(n){n.return!==null&&(fr(n,1),Bm(n,1,0))}function Ef(n){for(;n===ol;)ol=ps[--ms],ps[ms]=null,al=ps[--ms],ps[ms]=null;for(;n===Pr;)Pr=An[--Ln],An[Ln]=null,gi=An[--Ln],An[Ln]=null,mi=An[--Ln],An[Ln]=null}var vn=null,mn=null,nt=!1,jn=null;function Vm(n,e){var t=kn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Gd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,vn=n,mn=Ui(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,vn=n,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Pr!==null?{id:mi,overflow:gi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=kn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,vn=n,mn=null,!0):!1;default:return!1}}function Ac(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Lc(n){if(nt){var e=mn;if(e){var t=e;if(!Gd(n,e)){if(Ac(n))throw Error(ee(418));e=Ui(t.nextSibling);var i=vn;e&&Gd(n,e)?Vm(i,t):(n.flags=n.flags&-4097|2,nt=!1,vn=n)}}else{if(Ac(n))throw Error(ee(418));n.flags=n.flags&-4097|2,nt=!1,vn=n}}}function Hd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;vn=n}function ua(n){if(n!==vn)return!1;if(!nt)return Hd(n),nt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ec(n.type,n.memoizedProps)),e&&(e=mn)){if(Ac(n))throw Gm(),Error(ee(418));for(;e;)Vm(n,e),e=Ui(e.nextSibling)}if(Hd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ee(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){mn=Ui(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}mn=null}}else mn=vn?Ui(n.stateNode.nextSibling):null;return!0}function Gm(){for(var n=mn;n;)n=Ui(n.nextSibling)}function Ds(){mn=vn=null,nt=!1}function bf(n){jn===null?jn=[n]:jn.push(n)}var S_=Ei.ReactCurrentBatchConfig;function Hn(n,e){if(n&&n.defaultProps){e=st({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var ll=tr(null),ul=null,gs=null,Tf=null;function Cf(){Tf=gs=ul=null}function Af(n){var e=ll.current;et(ll),n._currentValue=e}function Pc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Es(n,e){ul=n,Tf=gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(rn=!0),n.firstContext=null)}function Fn(n){var e=n._currentValue;if(Tf!==n)if(n={context:n,memoizedValue:e,next:null},gs===null){if(ul===null)throw Error(ee(308));gs=n,ul.dependencies={lanes:0,firstContext:n}}else gs=gs.next=n;return e}var yr=null;function Lf(n){yr===null?yr=[n]:yr.push(n)}function Hm(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Lf(e)):(t.next=r.next,r.next=t),e.interleaved=t,Mi(n,i)}function Mi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Di=!1;function Pf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wm(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function _i(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Be&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Mi(n,t)}return r=i.interleaved,r===null?(e.next=e,Lf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Mi(n,t)}function Ua(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,mf(n,t)}}function Wd(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function cl(n,e,t,i){var r=n.updateQueue;Di=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=n,h=a;switch(f=e,g=t,h.tag){case 1:if(y=h.payload,typeof y=="function"){d=y.call(g,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=h.payload,f=typeof y=="function"?y.call(g,d,f):y,f==null)break e;d=st({},d,f);break e;case 2:Di=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Rr|=o,n.lanes=o,n.memoizedState=d}}function jd(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var jm=new Hp.Component().refs;function Dc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:st({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Cl={isMounted:function(n){return(n=n._reactInternals)?Ur(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Zt(),r=Gi(n),s=_i(i,r);s.payload=e,t!=null&&(s.callback=t),e=Bi(n,s,r),e!==null&&(Yn(e,n,r,i),Ua(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Zt(),r=Gi(n),s=_i(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Bi(n,s,r),e!==null&&(Yn(e,n,r,i),Ua(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Zt(),i=Gi(n),r=_i(t,i);r.tag=2,e!=null&&(r.callback=e),e=Bi(n,r,i),e!==null&&(Yn(e,n,i,t),Ua(e,n,i))}};function Xd(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Po(t,i)||!Po(r,s):!0}function Xm(n,e,t){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(r=on(e)?Lr:Wt.current,i=e.contextTypes,s=(i=i!=null)?Ps(n,r):$i),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function qd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Cl.enqueueReplaceState(e,e.state,null)}function Rc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=jm,Pf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Fn(s):(s=on(e)?Lr:Wt.current,r.context=Ps(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Dc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cl.enqueueReplaceState(r,r.state,null),cl(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ks(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ee(309));var i=t.stateNode}if(!i)throw Error(ee(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===jm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ee(284));if(!t._owner)throw Error(ee(290,n))}return n}function ca(n,e){throw n=Object.prototype.toString.call(e),Error(ee(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Yd(n){var e=n._init;return e(n._payload)}function qm(n){function e(m,v){if(n){var _=m.deletions;_===null?(m.deletions=[v],m.flags|=16):_.push(v)}}function t(m,v){if(!n)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Hi(m,v),m.index=0,m.sibling=null,m}function s(m,v,_){return m.index=_,n?(_=m.alternate,_!==null?(_=_.index,_<v?(m.flags|=2,v):_):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return n&&m.alternate===null&&(m.flags|=2),m}function a(m,v,_,M){return v===null||v.tag!==6?(v=pu(_,m.mode,M),v.return=m,v):(v=r(v,_),v.return=m,v)}function l(m,v,_,M){var x=_.type;return x===ls?c(m,v,_.props.children,M,_.key):v!==null&&(v.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Pi&&Yd(x)===v.type)?(M=r(v,_.props),M.ref=Ks(m,v,_),M.return=m,M):(M=ja(_.type,_.key,_.props,null,m.mode,M),M.ref=Ks(m,v,_),M.return=m,M)}function u(m,v,_,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=mu(_,m.mode,M),v.return=m,v):(v=r(v,_.children||[]),v.return=m,v)}function c(m,v,_,M,x){return v===null||v.tag!==7?(v=br(_,m.mode,M,x),v.return=m,v):(v=r(v,_),v.return=m,v)}function d(m,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=pu(""+v,m.mode,_),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Jo:return _=ja(v.type,v.key,v.props,null,m.mode,_),_.ref=Ks(m,null,v),_.return=m,_;case as:return v=mu(v,m.mode,_),v.return=m,v;case Pi:var M=v._init;return d(m,M(v._payload),_)}if(lo(v)||Xs(v))return v=br(v,m.mode,_,null),v.return=m,v;ca(m,v)}return null}function f(m,v,_,M){var x=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return x!==null?null:a(m,v,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Jo:return _.key===x?l(m,v,_,M):null;case as:return _.key===x?u(m,v,_,M):null;case Pi:return x=_._init,f(m,v,x(_._payload),M)}if(lo(_)||Xs(_))return x!==null?null:c(m,v,_,M,null);ca(m,_)}return null}function g(m,v,_,M,x){if(typeof M=="string"&&M!==""||typeof M=="number")return m=m.get(_)||null,a(v,m,""+M,x);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Jo:return m=m.get(M.key===null?_:M.key)||null,l(v,m,M,x);case as:return m=m.get(M.key===null?_:M.key)||null,u(v,m,M,x);case Pi:var A=M._init;return g(m,v,_,A(M._payload),x)}if(lo(M)||Xs(M))return m=m.get(_)||null,c(v,m,M,x,null);ca(v,M)}return null}function y(m,v,_,M){for(var x=null,A=null,L=v,S=v=0,T=null;L!==null&&S<_.length;S++){L.index>S?(T=L,L=null):T=L.sibling;var P=f(m,L,_[S],M);if(P===null){L===null&&(L=T);break}n&&L&&P.alternate===null&&e(m,L),v=s(P,v,S),A===null?x=P:A.sibling=P,A=P,L=T}if(S===_.length)return t(m,L),nt&&fr(m,S),x;if(L===null){for(;S<_.length;S++)L=d(m,_[S],M),L!==null&&(v=s(L,v,S),A===null?x=L:A.sibling=L,A=L);return nt&&fr(m,S),x}for(L=i(m,L);S<_.length;S++)T=g(L,m,S,_[S],M),T!==null&&(n&&T.alternate!==null&&L.delete(T.key===null?S:T.key),v=s(T,v,S),A===null?x=T:A.sibling=T,A=T);return n&&L.forEach(function(Z){return e(m,Z)}),nt&&fr(m,S),x}function h(m,v,_,M){var x=Xs(_);if(typeof x!="function")throw Error(ee(150));if(_=x.call(_),_==null)throw Error(ee(151));for(var A=x=null,L=v,S=v=0,T=null,P=_.next();L!==null&&!P.done;S++,P=_.next()){L.index>S?(T=L,L=null):T=L.sibling;var Z=f(m,L,P.value,M);if(Z===null){L===null&&(L=T);break}n&&L&&Z.alternate===null&&e(m,L),v=s(Z,v,S),A===null?x=Z:A.sibling=Z,A=Z,L=T}if(P.done)return t(m,L),nt&&fr(m,S),x;if(L===null){for(;!P.done;S++,P=_.next())P=d(m,P.value,M),P!==null&&(v=s(P,v,S),A===null?x=P:A.sibling=P,A=P);return nt&&fr(m,S),x}for(L=i(m,L);!P.done;S++,P=_.next())P=g(L,m,S,P.value,M),P!==null&&(n&&P.alternate!==null&&L.delete(P.key===null?S:P.key),v=s(P,v,S),A===null?x=P:A.sibling=P,A=P);return n&&L.forEach(function(K){return e(m,K)}),nt&&fr(m,S),x}function p(m,v,_,M){if(typeof _=="object"&&_!==null&&_.type===ls&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Jo:e:{for(var x=_.key,A=v;A!==null;){if(A.key===x){if(x=_.type,x===ls){if(A.tag===7){t(m,A.sibling),v=r(A,_.props.children),v.return=m,m=v;break e}}else if(A.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Pi&&Yd(x)===A.type){t(m,A.sibling),v=r(A,_.props),v.ref=Ks(m,A,_),v.return=m,m=v;break e}t(m,A);break}else e(m,A);A=A.sibling}_.type===ls?(v=br(_.props.children,m.mode,M,_.key),v.return=m,m=v):(M=ja(_.type,_.key,_.props,null,m.mode,M),M.ref=Ks(m,v,_),M.return=m,m=M)}return o(m);case as:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){t(m,v.sibling),v=r(v,_.children||[]),v.return=m,m=v;break e}else{t(m,v);break}else e(m,v);v=v.sibling}v=mu(_,m.mode,M),v.return=m,m=v}return o(m);case Pi:return A=_._init,p(m,v,A(_._payload),M)}if(lo(_))return y(m,v,_,M);if(Xs(_))return h(m,v,_,M);ca(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(t(m,v.sibling),v=r(v,_),v.return=m,m=v):(t(m,v),v=pu(_,m.mode,M),v.return=m,m=v),o(m)):t(m,v)}return p}var Rs=qm(!0),Ym=qm(!1),$o={},ni=tr($o),No=tr($o),ko=tr($o);function Sr(n){if(n===$o)throw Error(ee(174));return n}function Df(n,e){switch(Ye(ko,e),Ye(No,n),Ye(ni,$o),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=cc(e,n)}et(ni),Ye(ni,e)}function Is(){et(ni),et(No),et(ko)}function $m(n){Sr(ko.current);var e=Sr(ni.current),t=cc(e,n.type);e!==t&&(Ye(No,n),Ye(ni,t))}function Rf(n){No.current===n&&(et(ni),et(No))}var it=tr(0);function fl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lu=[];function If(){for(var n=0;n<lu.length;n++)lu[n]._workInProgressVersionPrimary=null;lu.length=0}var Ba=Ei.ReactCurrentDispatcher,uu=Ei.ReactCurrentBatchConfig,Dr=0,rt=null,vt=null,Tt=null,dl=!1,xo=!1,zo=0,M_=0;function Bt(){throw Error(ee(321))}function Nf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!$n(n[t],e[t]))return!1;return!0}function kf(n,e,t,i,r,s){if(Dr=s,rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ba.current=n===null||n.memoizedState===null?T_:C_,n=t(i,r),xo){s=0;do{if(xo=!1,zo=0,25<=s)throw Error(ee(301));s+=1,Tt=vt=null,e.updateQueue=null,Ba.current=A_,n=t(i,r)}while(xo)}if(Ba.current=hl,e=vt!==null&&vt.next!==null,Dr=0,Tt=vt=rt=null,dl=!1,e)throw Error(ee(300));return n}function zf(){var n=zo!==0;return zo=0,n}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?rt.memoizedState=Tt=n:Tt=Tt.next=n,Tt}function On(){if(vt===null){var n=rt.alternate;n=n!==null?n.memoizedState:null}else n=vt.next;var e=Tt===null?rt.memoizedState:Tt.next;if(e!==null)Tt=e,vt=n;else{if(n===null)throw Error(ee(310));vt=n,n={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Tt===null?rt.memoizedState=Tt=n:Tt=Tt.next=n}return Tt}function Fo(n,e){return typeof e=="function"?e(n):e}function cu(n){var e=On(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=vt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Dr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,rt.lanes|=c,Rr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,rt.lanes|=s,Rr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function fu(n){var e=On(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Zm(){}function Km(n,e){var t=rt,i=On(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,Ff(eg.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Tt!==null&&Tt.memoizedState.tag&1){if(t.flags|=2048,Oo(9,Jm.bind(null,t,i,r,e),void 0,null),Lt===null)throw Error(ee(349));Dr&30||Qm(t,e,r)}return r}function Qm(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Jm(n,e,t,i){e.value=t,e.getSnapshot=i,tg(e)&&ng(n)}function eg(n,e,t){return t(function(){tg(e)&&ng(n)})}function tg(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!$n(n,t)}catch{return!0}}function ng(n){var e=Mi(n,1);e!==null&&Yn(e,n,1,-1)}function $d(n){var e=Kn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},e.queue=n,n=n.dispatch=b_.bind(null,rt,n),[e.memoizedState,n]}function Oo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function ig(){return On().memoizedState}function Va(n,e,t,i){var r=Kn();rt.flags|=n,r.memoizedState=Oo(1|e,t,void 0,i===void 0?null:i)}function Al(n,e,t,i){var r=On();i=i===void 0?null:i;var s=void 0;if(vt!==null){var o=vt.memoizedState;if(s=o.destroy,i!==null&&Nf(i,o.deps)){r.memoizedState=Oo(e,t,s,i);return}}rt.flags|=n,r.memoizedState=Oo(1|e,t,s,i)}function Zd(n,e){return Va(8390656,8,n,e)}function Ff(n,e){return Al(2048,8,n,e)}function rg(n,e){return Al(4,2,n,e)}function sg(n,e){return Al(4,4,n,e)}function og(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function ag(n,e,t){return t=t!=null?t.concat([n]):null,Al(4,4,og.bind(null,e,n),t)}function Of(){}function lg(n,e){var t=On();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Nf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function ug(n,e){var t=On();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Nf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function cg(n,e,t){return Dr&21?($n(t,e)||(t=hm(),rt.lanes|=t,Rr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,rn=!0),n.memoizedState=t)}function w_(n,e){var t=Xe;Xe=t!==0&&4>t?t:4,n(!0);var i=uu.transition;uu.transition={};try{n(!1),e()}finally{Xe=t,uu.transition=i}}function fg(){return On().memoizedState}function E_(n,e,t){var i=Gi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},dg(n))hg(e,t);else if(t=Hm(n,e,t,i),t!==null){var r=Zt();Yn(t,n,i,r),pg(t,e,i)}}function b_(n,e,t){var i=Gi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(dg(n))hg(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,Lf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Hm(n,e,r,i),t!==null&&(r=Zt(),Yn(t,n,i,r),pg(t,e,i))}}function dg(n){var e=n.alternate;return n===rt||e!==null&&e===rt}function hg(n,e){xo=dl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function pg(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,mf(n,t)}}var hl={readContext:Fn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},T_={readContext:Fn,useCallback:function(n,e){return Kn().memoizedState=[n,e===void 0?null:e],n},useContext:Fn,useEffect:Zd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Va(4194308,4,og.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Va(4194308,4,n,e)},useInsertionEffect:function(n,e){return Va(4,2,n,e)},useMemo:function(n,e){var t=Kn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Kn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=E_.bind(null,rt,n),[i.memoizedState,n]},useRef:function(n){var e=Kn();return n={current:n},e.memoizedState=n},useState:$d,useDebugValue:Of,useDeferredValue:function(n){return Kn().memoizedState=n},useTransition:function(){var n=$d(!1),e=n[0];return n=w_.bind(null,n[1]),Kn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=rt,r=Kn();if(nt){if(t===void 0)throw Error(ee(407));t=t()}else{if(t=e(),Lt===null)throw Error(ee(349));Dr&30||Qm(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Zd(eg.bind(null,i,s,n),[n]),i.flags|=2048,Oo(9,Jm.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Kn(),e=Lt.identifierPrefix;if(nt){var t=gi,i=mi;t=(i&~(1<<32-qn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=zo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=M_++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},C_={readContext:Fn,useCallback:lg,useContext:Fn,useEffect:Ff,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:ug,useReducer:cu,useRef:ig,useState:function(){return cu(Fo)},useDebugValue:Of,useDeferredValue:function(n){var e=On();return cg(e,vt.memoizedState,n)},useTransition:function(){var n=cu(Fo)[0],e=On().memoizedState;return[n,e]},useMutableSource:Zm,useSyncExternalStore:Km,useId:fg,unstable_isNewReconciler:!1},A_={readContext:Fn,useCallback:lg,useContext:Fn,useEffect:Ff,useImperativeHandle:ag,useInsertionEffect:rg,useLayoutEffect:sg,useMemo:ug,useReducer:fu,useRef:ig,useState:function(){return fu(Fo)},useDebugValue:Of,useDeferredValue:function(n){var e=On();return vt===null?e.memoizedState=n:cg(e,vt.memoizedState,n)},useTransition:function(){var n=fu(Fo)[0],e=On().memoizedState;return[n,e]},useMutableSource:Zm,useSyncExternalStore:Km,useId:fg,unstable_isNewReconciler:!1};function Ns(n,e){try{var t="",i=e;do t+=nv(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function du(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ic(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var L_=typeof WeakMap=="function"?WeakMap:Map;function mg(n,e,t){t=_i(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ml||(ml=!0,Hc=i),Ic(n,e)},t}function gg(n,e,t){t=_i(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ic(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ic(n,e),typeof i!="function"&&(Vi===null?Vi=new Set([this]):Vi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Kd(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new L_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=H_.bind(null,n,e,t),e.then(n,n))}function Qd(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Jd(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=_i(-1,1),e.tag=2,Bi(t,e,1))),t.lanes|=1),n)}var P_=Ei.ReactCurrentOwner,rn=!1;function $t(n,e,t,i){e.child=n===null?Ym(e,null,t,i):Rs(e,n.child,t,i)}function eh(n,e,t,i,r){t=t.render;var s=e.ref;return Es(e,r),i=kf(n,e,t,i,s,r),t=zf(),n!==null&&!rn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,wi(n,e,r)):(nt&&t&&wf(e),e.flags|=1,$t(n,e,i,r),e.child)}function th(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Xf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,vg(n,e,s,i,r)):(n=ja(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Po,t(o,i)&&n.ref===e.ref)return wi(n,e,r)}return e.flags|=1,n=Hi(s,i),n.ref=e.ref,n.return=e,e.child=n}function vg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Po(s,i)&&n.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(rn=!0);else return e.lanes=n.lanes,wi(n,e,r)}return Nc(n,e,t,i,r)}function _g(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ye(_s,pn),pn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ye(_s,pn),pn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ye(_s,pn),pn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ye(_s,pn),pn|=i;return $t(n,e,r,t),e.child}function xg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Nc(n,e,t,i,r){var s=on(t)?Lr:Wt.current;return s=Ps(e,s),Es(e,r),t=kf(n,e,t,i,s,r),i=zf(),n!==null&&!rn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,wi(n,e,r)):(nt&&i&&wf(e),e.flags|=1,$t(n,e,t,r),e.child)}function nh(n,e,t,i,r){if(on(t)){var s=!0;sl(e)}else s=!1;if(Es(e,r),e.stateNode===null)Ga(n,e),Xm(e,t,i),Rc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Fn(u):(u=on(t)?Lr:Wt.current,u=Ps(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&qd(e,o,i,u),Di=!1;var f=e.memoizedState;o.state=f,cl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||sn.current||Di?(typeof c=="function"&&(Dc(e,t,c,i),l=e.memoizedState),(a=Di||Xd(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Wm(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Hn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=on(t)?Lr:Wt.current,l=Ps(e,l));var g=t.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&qd(e,o,i,l),Di=!1,f=e.memoizedState,o.state=f,cl(e,i,o,r);var y=e.memoizedState;a!==d||f!==y||sn.current||Di?(typeof g=="function"&&(Dc(e,t,g,i),y=e.memoizedState),(u=Di||Xd(e,t,u,i,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return kc(n,e,t,i,s,r)}function kc(n,e,t,i,r,s){xg(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Vd(e,t,!1),wi(n,e,s);i=e.stateNode,P_.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Rs(e,n.child,null,s),e.child=Rs(e,null,a,s)):$t(n,e,a,s),e.memoizedState=i.state,r&&Vd(e,t,!0),e.child}function yg(n){var e=n.stateNode;e.pendingContext?Bd(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Bd(n,e.context,!1),Df(n,e.containerInfo)}function ih(n,e,t,i,r){return Ds(),bf(r),e.flags|=256,$t(n,e,t,i),e.child}var zc={dehydrated:null,treeContext:null,retryLane:0};function Fc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Sg(n,e,t){var i=e.pendingProps,r=it.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ye(it,r&1),n===null)return Lc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dl(o,i,0,null),n=br(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Fc(t),e.memoizedState=zc,n):Uf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return D_(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Hi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Hi(a,s):(s=br(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Fc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=zc,i}return s=n.child,n=s.sibling,i=Hi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Uf(n,e){return e=Dl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function fa(n,e,t,i){return i!==null&&bf(i),Rs(e,n.child,null,t),n=Uf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function D_(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=du(Error(ee(422))),fa(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Dl({mode:"visible",children:i.children},r,0,null),s=br(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rs(e,n.child,null,o),e.child.memoizedState=Fc(o),e.memoizedState=zc,s);if(!(e.mode&1))return fa(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=du(s,i,void 0),fa(n,e,o,i)}if(a=(o&n.childLanes)!==0,rn||a){if(i=Lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Mi(n,r),Yn(i,n,r,-1))}return jf(),i=du(Error(ee(421))),fa(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=W_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,mn=Ui(r.nextSibling),vn=e,nt=!0,jn=null,n!==null&&(An[Ln++]=mi,An[Ln++]=gi,An[Ln++]=Pr,mi=n.id,gi=n.overflow,Pr=e),e=Uf(e,i.children),e.flags|=4096,e)}function rh(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Pc(n.return,e,t)}function hu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Mg(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(n,e,i.children,t),i=it.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&rh(n,t,e);else if(n.tag===19)rh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ye(it,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&fl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),hu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&fl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}hu(e,!0,t,null,s);break;case"together":hu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ga(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function wi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Rr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ee(153));if(e.child!==null){for(n=e.child,t=Hi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Hi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function R_(n,e,t){switch(e.tag){case 3:yg(e),Ds();break;case 5:$m(e);break;case 1:on(e.type)&&sl(e);break;case 4:Df(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ye(ll,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ye(it,it.current&1),e.flags|=128,null):t&e.child.childLanes?Sg(n,e,t):(Ye(it,it.current&1),n=wi(n,e,t),n!==null?n.sibling:null);Ye(it,it.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Mg(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ye(it,it.current),i)break;return null;case 22:case 23:return e.lanes=0,_g(n,e,t)}return wi(n,e,t)}var wg,Oc,Eg,bg;wg=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Oc=function(){};Eg=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Sr(ni.current);var s=null;switch(t){case"input":r=oc(n,r),i=oc(n,i),s=[];break;case"select":r=st({},r,{value:void 0}),i=st({},i,{value:void 0}),s=[];break;case"textarea":r=uc(n,r),i=uc(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=il)}fc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r?.[u],i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&$e("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};bg=function(n,e,t,i){t!==i&&(e.flags|=4)};function Qs(n,e){if(!nt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Vt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function I_(n,e,t){var i=e.pendingProps;switch(Ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return on(e.type)&&rl(),Vt(e),null;case 3:return i=e.stateNode,Is(),et(sn),et(Wt),If(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ua(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(Xc(jn),jn=null))),Oc(n,e),Vt(e),null;case 5:Rf(e);var r=Sr(ko.current);if(t=e.type,n!==null&&e.stateNode!=null)Eg(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Vt(e),null}if(n=Sr(ni.current),ua(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[Io]=s,n=(e.mode&1)!==0,t){case"dialog":$e("cancel",i),$e("close",i);break;case"iframe":case"object":case"embed":$e("load",i);break;case"video":case"audio":for(r=0;r<co.length;r++)$e(co[r],i);break;case"source":$e("error",i);break;case"img":case"image":case"link":$e("error",i),$e("load",i);break;case"details":$e("toggle",i);break;case"input":hd(i,s),$e("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},$e("invalid",i);break;case"textarea":md(i,s),$e("invalid",i)}fc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&la(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&la(i.textContent,a,n),r=["children",""+a]):wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$e("scroll",i)}switch(t){case"input":ea(i),pd(i,s,!0);break;case"textarea":ea(i),gd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=il)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Qp(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ei]=e,n[Io]=i,wg(n,e,!1,!1),e.stateNode=n;e:{switch(o=dc(t,i),t){case"dialog":$e("cancel",n),$e("close",n),r=i;break;case"iframe":case"object":case"embed":$e("load",n),r=i;break;case"video":case"audio":for(r=0;r<co.length;r++)$e(co[r],n);r=i;break;case"source":$e("error",n),r=i;break;case"img":case"image":case"link":$e("error",n),$e("load",n),r=i;break;case"details":$e("toggle",n),r=i;break;case"input":hd(n,i),r=oc(n,i),$e("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=st({},i,{value:void 0}),$e("invalid",n);break;case"textarea":md(n,i),r=uc(n,i),$e("invalid",n);break;default:r=i}fc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?tm(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jp(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Eo(n,l):typeof l=="number"&&Eo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$e("scroll",n):l!=null&&uf(n,s,l,o))}switch(t){case"input":ea(n),pd(n,i,!1);break;case"textarea":ea(n),gd(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Yi(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ys(n,!!i.multiple,s,!1):i.defaultValue!=null&&ys(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=il)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(n&&e.stateNode!=null)bg(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=Sr(ko.current),Sr(ni.current),ua(e)){if(i=e.stateNode,t=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==t)&&(n=vn,n!==null))switch(n.tag){case 3:la(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&la(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Vt(e),null;case 13:if(et(it),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(nt&&mn!==null&&e.mode&1&&!(e.flags&128))Gm(),Ds(),e.flags|=98560,s=!1;else if(s=ua(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[ei]=e}else Ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else jn!==null&&(Xc(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||it.current&1?_t===0&&(_t=3):jf())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Is(),Oc(n,e),n===null&&Do(e.stateNode.containerInfo),Vt(e),null;case 10:return Af(e.type._context),Vt(e),null;case 17:return on(e.type)&&rl(),Vt(e),null;case 19:if(et(it),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Qs(s,!1);else{if(_t!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=fl(n),o!==null){for(e.flags|=128,Qs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ye(it,it.current&1|2),e.child}n=n.sibling}s.tail!==null&&lt()>ks&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304)}else{if(!i)if(n=fl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!nt)return Vt(e),null}else 2*lt()-s.renderingStartTime>ks&&t!==1073741824&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=lt(),e.sibling=null,t=it.current,Ye(it,i?t&1|2:t&1),e):(Vt(e),null);case 22:case 23:return Wf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function N_(n,e){switch(Ef(e),e.tag){case 1:return on(e.type)&&rl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Is(),et(sn),et(Wt),If(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Rf(e),null;case 13:if(et(it),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ds()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return et(it),null;case 4:return Is(),null;case 10:return Af(e.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var da=!1,Ht=!1,k_=typeof WeakSet=="function"?WeakSet:Set,pe=null;function vs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){ot(n,e,i)}else t.current=null}function Uc(n,e,t){try{t()}catch(i){ot(n,e,i)}}var sh=!1;function z_(n,e){if(Mc=el,n=Lm(),Mf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var g;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(wc={focusedElem:n,selectionRange:t},el=!1,pe=e;pe!==null;)if(e=pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,pe=n;else for(;pe!==null;){e=pe;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var h=y.memoizedProps,p=y.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?h:Hn(e.type,h),p);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(M){ot(e,e.return,M)}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}return y=sh,sh=!1,y}function yo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Uc(e,t,s)}r=r.next}while(r!==i)}}function Ll(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Bc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Tg(n){var e=n.alternate;e!==null&&(n.alternate=null,Tg(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ei],delete e[Io],delete e[Tc],delete e[__],delete e[x_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Cg(n){return n.tag===5||n.tag===3||n.tag===4}function oh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=il));else if(i!==4&&(n=n.child,n!==null))for(Vc(n,e,t),n=n.sibling;n!==null;)Vc(n,e,t),n=n.sibling}function Gc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Gc(n,e,t),n=n.sibling;n!==null;)Gc(n,e,t),n=n.sibling}var Pt=null,Wn=!1;function bi(n,e,t){for(t=t.child;t!==null;)Ag(n,e,t),t=t.sibling}function Ag(n,e,t){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(Sl,t)}catch{}switch(t.tag){case 5:Ht||vs(t,e);case 6:var i=Pt,r=Wn;Pt=null,bi(n,e,t),Pt=i,Wn=r,Pt!==null&&(Wn?(n=Pt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Pt.removeChild(t.stateNode));break;case 18:Pt!==null&&(Wn?(n=Pt,t=t.stateNode,n.nodeType===8?ou(n.parentNode,t):n.nodeType===1&&ou(n,t),Ao(n)):ou(Pt,t.stateNode));break;case 4:i=Pt,r=Wn,Pt=t.stateNode.containerInfo,Wn=!0,bi(n,e,t),Pt=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uc(t,e,o),r=r.next}while(r!==i)}bi(n,e,t);break;case 1:if(!Ht&&(vs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){ot(t,e,a)}bi(n,e,t);break;case 21:bi(n,e,t);break;case 22:t.mode&1?(Ht=(i=Ht)||t.memoizedState!==null,bi(n,e,t),Ht=i):bi(n,e,t);break;default:bi(n,e,t)}}function ah(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new k_),e.forEach(function(i){var r=j_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Un(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,Wn=!1;break e;case 3:Pt=a.stateNode.containerInfo,Wn=!0;break e;case 4:Pt=a.stateNode.containerInfo,Wn=!0;break e}a=a.return}if(Pt===null)throw Error(ee(160));Ag(s,o,r),Pt=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ot(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lg(e,n),e=e.sibling}function Lg(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Un(e,n),Zn(n),i&4){try{yo(3,n,n.return),Ll(3,n)}catch(h){ot(n,n.return,h)}try{yo(5,n,n.return)}catch(h){ot(n,n.return,h)}}break;case 1:Un(e,n),Zn(n),i&512&&t!==null&&vs(t,t.return);break;case 5:if(Un(e,n),Zn(n),i&512&&t!==null&&vs(t,t.return),n.flags&32){var r=n.stateNode;try{Eo(r,"")}catch(h){ot(n,n.return,h)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zp(r,s),dc(a,o);var u=dc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?tm(r,d):c==="dangerouslySetInnerHTML"?Jp(r,d):c==="children"?Eo(r,d):uf(r,c,d,u)}switch(a){case"input":ac(r,s);break;case"textarea":Kp(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ys(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?ys(r,!!s.multiple,s.defaultValue,!0):ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[Io]=s}catch(h){ot(n,n.return,h)}}break;case 6:if(Un(e,n),Zn(n),i&4){if(n.stateNode===null)throw Error(ee(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(h){ot(n,n.return,h)}}break;case 3:if(Un(e,n),Zn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(h){ot(n,n.return,h)}break;case 4:Un(e,n),Zn(n);break;case 13:Un(e,n),Zn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Gf=lt())),i&4&&ah(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Ht=(u=Ht)||c,Un(e,n),Ht=u):Un(e,n),Zn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(pe=n,c=n.child;c!==null;){for(d=pe=c;pe!==null;){switch(f=pe,g=f.child,f.tag){case 0:case 11:case 14:case 15:yo(4,f,f.return);break;case 1:vs(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(h){ot(i,t,h)}}break;case 5:vs(f,f.return);break;case 22:if(f.memoizedState!==null){uh(d);continue}}g!==null?(g.return=f,pe=g):uh(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=em("display",o))}catch(h){ot(n,n.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){ot(n,n.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Un(e,n),Zn(n),i&4&&ah(n);break;case 21:break;default:Un(e,n),Zn(n)}}function Zn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Cg(t)){var i=t;break e}t=t.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Eo(r,""),i.flags&=-33);var s=oh(n);Gc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=oh(n);Vc(n,a,o);break;default:throw Error(ee(161))}}catch(l){ot(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function F_(n,e,t){pe=n,Pg(n)}function Pg(n,e,t){for(var i=(n.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||da;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=da;var u=Ht;if(da=o,(Ht=l)&&!u)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?ch(r):l!==null?(l.return=o,pe=l):ch(r);for(;s!==null;)pe=s,Pg(s),s=s.sibling;pe=r,da=a,Ht=u}lh(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):lh(n)}}function lh(n){for(;pe!==null;){var e=pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||Ll(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Hn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}jd(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ao(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Ht||e.flags&512&&Bc(e)}catch(f){ot(e,e.return,f)}}if(e===n){pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}}function uh(n){for(;pe!==null;){var e=pe;if(e===n){pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,pe=t;break}pe=e.return}}function ch(n){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ll(4,e)}catch(l){ot(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ot(e,r,l)}}var s=e.return;try{Bc(e)}catch(l){ot(e,s,l)}break;case 5:var o=e.return;try{Bc(e)}catch(l){ot(e,o,l)}}}catch(l){ot(e,e.return,l)}if(e===n){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var O_=Math.ceil,pl=Ei.ReactCurrentDispatcher,Bf=Ei.ReactCurrentOwner,zn=Ei.ReactCurrentBatchConfig,Be=0,Lt=null,pt=null,kt=0,pn=0,_s=tr(0),_t=0,Uo=null,Rr=0,Pl=0,Vf=0,So=null,tn=null,Gf=0,ks=1/0,di=null,ml=!1,Hc=null,Vi=null,ha=!1,ki=null,gl=0,Mo=0,Wc=null,Ha=-1,Wa=0;function Zt(){return Be&6?lt():Ha!==-1?Ha:Ha=lt()}function Gi(n){return n.mode&1?Be&2&&kt!==0?kt&-kt:S_.transition!==null?(Wa===0&&(Wa=hm()),Wa):(n=Xe,n!==0||(n=window.event,n=n===void 0?16:ym(n.type)),n):1}function Yn(n,e,t,i){if(50<Mo)throw Mo=0,Wc=null,Error(ee(185));Xo(n,t,i),(!(Be&2)||n!==Lt)&&(n===Lt&&(!(Be&2)&&(Pl|=t),_t===4&&Ii(n,kt)),an(n,i),t===1&&Be===0&&!(e.mode&1)&&(ks=lt()+500,Tl&&nr()))}function an(n,e){var t=n.callbackNode;Sv(n,e);var i=Ja(n,n===Lt?kt:0);if(i===0)t!==null&&xd(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&xd(t),e===1)n.tag===0?y_(fh.bind(null,n)):Um(fh.bind(null,n)),g_(function(){!(Be&6)&&nr()}),t=null;else{switch(pm(i)){case 1:t=pf;break;case 4:t=fm;break;case 16:t=Qa;break;case 536870912:t=dm;break;default:t=Qa}t=Og(t,Dg.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Dg(n,e){if(Ha=-1,Wa=0,Be&6)throw Error(ee(327));var t=n.callbackNode;if(bs()&&n.callbackNode!==t)return null;var i=Ja(n,n===Lt?kt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=vl(n,i);else{e=i;var r=Be;Be|=2;var s=Ig();(Lt!==n||kt!==e)&&(di=null,ks=lt()+500,Er(n,e));do try{V_();break}catch(a){Rg(n,a)}while(1);Cf(),pl.current=s,Be=r,pt!==null?e=0:(Lt=null,kt=0,e=_t)}if(e!==0){if(e===2&&(r=vc(n),r!==0&&(i=r,e=jc(n,r))),e===1)throw t=Uo,Er(n,0),Ii(n,i),an(n,lt()),t;if(e===6)Ii(n,i);else{if(r=n.current.alternate,!(i&30)&&!U_(r)&&(e=vl(n,i),e===2&&(s=vc(n),s!==0&&(i=s,e=jc(n,s))),e===1))throw t=Uo,Er(n,0),Ii(n,i),an(n,lt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:dr(n,tn,di);break;case 3:if(Ii(n,i),(i&130023424)===i&&(e=Gf+500-lt(),10<e)){if(Ja(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Zt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=bc(dr.bind(null,n,tn,di),e);break}dr(n,tn,di);break;case 4:if(Ii(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*O_(i/1960))-i,10<i){n.timeoutHandle=bc(dr.bind(null,n,tn,di),i);break}dr(n,tn,di);break;case 5:dr(n,tn,di);break;default:throw Error(ee(329))}}}return an(n,lt()),n.callbackNode===t?Dg.bind(null,n):null}function jc(n,e){var t=So;return n.current.memoizedState.isDehydrated&&(Er(n,e).flags|=256),n=vl(n,e),n!==2&&(e=tn,tn=t,e!==null&&Xc(e)),n}function Xc(n){tn===null?tn=n:tn.push.apply(tn,n)}function U_(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ii(n,e){for(e&=~Vf,e&=~Pl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-qn(e),i=1<<t;n[t]=-1,e&=~i}}function fh(n){if(Be&6)throw Error(ee(327));bs();var e=Ja(n,0);if(!(e&1))return an(n,lt()),null;var t=vl(n,e);if(n.tag!==0&&t===2){var i=vc(n);i!==0&&(e=i,t=jc(n,i))}if(t===1)throw t=Uo,Er(n,0),Ii(n,e),an(n,lt()),t;if(t===6)throw Error(ee(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,dr(n,tn,di),an(n,lt()),null}function Hf(n,e){var t=Be;Be|=1;try{return n(e)}finally{Be=t,Be===0&&(ks=lt()+500,Tl&&nr())}}function Ir(n){ki!==null&&ki.tag===0&&!(Be&6)&&bs();var e=Be;Be|=1;var t=zn.transition,i=Xe;try{if(zn.transition=null,Xe=1,n)return n()}finally{Xe=i,zn.transition=t,Be=e,!(Be&6)&&nr()}}function Wf(){pn=_s.current,et(_s)}function Er(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,m_(t)),pt!==null)for(t=pt.return;t!==null;){var i=t;switch(Ef(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&rl();break;case 3:Is(),et(sn),et(Wt),If();break;case 5:Rf(i);break;case 4:Is();break;case 13:et(it);break;case 19:et(it);break;case 10:Af(i.type._context);break;case 22:case 23:Wf()}t=t.return}if(Lt=n,pt=n=Hi(n.current,null),kt=pn=e,_t=0,Uo=null,Vf=Pl=Rr=0,tn=So=null,yr!==null){for(e=0;e<yr.length;e++)if(t=yr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}yr=null}return n}function Rg(n,e){do{var t=pt;try{if(Cf(),Ba.current=hl,dl){for(var i=rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dl=!1}if(Dr=0,Tt=vt=rt=null,xo=!1,zo=0,Bf.current=null,t===null||t.return===null){_t=1,Uo=e,pt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Qd(o);if(g!==null){g.flags&=-257,Jd(g,o,a,s,e),g.mode&1&&Kd(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var h=new Set;h.add(l),e.updateQueue=h}else y.add(l);break e}else{if(!(e&1)){Kd(s,u,e),jf();break e}l=Error(ee(426))}}else if(nt&&a.mode&1){var p=Qd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Jd(p,o,a,s,e),bf(Ns(l,a));break e}}s=l=Ns(l,a),_t!==4&&(_t=2),So===null?So=[s]:So.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=mg(s,l,e);Wd(s,m);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Vi===null||!Vi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=gg(s,a,e);Wd(s,M);break e}}s=s.return}while(s!==null)}kg(t)}catch(x){e=x,pt===t&&t!==null&&(pt=t=t.return);continue}break}while(1)}function Ig(){var n=pl.current;return pl.current=hl,n===null?hl:n}function jf(){(_t===0||_t===3||_t===2)&&(_t=4),Lt===null||!(Rr&268435455)&&!(Pl&268435455)||Ii(Lt,kt)}function vl(n,e){var t=Be;Be|=2;var i=Ig();(Lt!==n||kt!==e)&&(di=null,Er(n,e));do try{B_();break}catch(r){Rg(n,r)}while(1);if(Cf(),Be=t,pl.current=i,pt!==null)throw Error(ee(261));return Lt=null,kt=0,_t}function B_(){for(;pt!==null;)Ng(pt)}function V_(){for(;pt!==null&&!dv();)Ng(pt)}function Ng(n){var e=Fg(n.alternate,n,pn);n.memoizedProps=n.pendingProps,e===null?kg(n):pt=e,Bf.current=null}function kg(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=N_(t,e),t!==null){t.flags&=32767,pt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_t=6,pt=null;return}}else if(t=I_(t,e,pn),t!==null){pt=t;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=n}while(e!==null);_t===0&&(_t=5)}function dr(n,e,t){var i=Xe,r=zn.transition;try{zn.transition=null,Xe=1,G_(n,e,t,i)}finally{zn.transition=r,Xe=i}return null}function G_(n,e,t,i){do bs();while(ki!==null);if(Be&6)throw Error(ee(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ee(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Mv(n,s),n===Lt&&(pt=Lt=null,kt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ha||(ha=!0,Og(Qa,function(){return bs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var o=Xe;Xe=1;var a=Be;Be|=4,Bf.current=null,z_(n,t),Lg(t,n),l_(wc),el=!!Mc,wc=Mc=null,n.current=t,F_(t),hv(),Be=a,Xe=o,zn.transition=s}else n.current=t;if(ha&&(ha=!1,ki=n,gl=r),s=n.pendingLanes,s===0&&(Vi=null),gv(t.stateNode),an(n,lt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ml)throw ml=!1,n=Hc,Hc=null,n;return gl&1&&n.tag!==0&&bs(),s=n.pendingLanes,s&1?n===Wc?Mo++:(Mo=0,Wc=n):Mo=0,nr(),null}function bs(){if(ki!==null){var n=pm(gl),e=zn.transition,t=Xe;try{if(zn.transition=null,Xe=16>n?16:n,ki===null)var i=!1;else{if(n=ki,ki=null,gl=0,Be&6)throw Error(ee(331));var r=Be;for(Be|=4,pe=n.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var c=pe;switch(c.tag){case 0:case 11:case 15:yo(8,c,s)}var d=c.child;if(d!==null)d.return=c,pe=d;else for(;pe!==null;){c=pe;var f=c.sibling,g=c.return;if(Tg(c),c===u){pe=null;break}if(f!==null){f.return=g,pe=f;break}pe=g}}}var y=s.alternate;if(y!==null){var h=y.child;if(h!==null){y.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,pe=m;break e}pe=s.return}}var v=n.current;for(pe=v;pe!==null;){o=pe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,pe=_;else e:for(o=v;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ll(9,a)}}catch(x){ot(a,a.return,x)}if(a===o){pe=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,pe=M;break e}pe=a.return}}if(Be=r,nr(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(Sl,n)}catch{}i=!0}return i}finally{Xe=t,zn.transition=e}}return!1}function dh(n,e,t){e=Ns(t,e),e=mg(n,e,1),n=Bi(n,e,1),e=Zt(),n!==null&&(Xo(n,1,e),an(n,e))}function ot(n,e,t){if(n.tag===3)dh(n,n,t);else for(;e!==null;){if(e.tag===3){dh(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vi===null||!Vi.has(i))){n=Ns(t,n),n=gg(e,n,1),e=Bi(e,n,1),n=Zt(),e!==null&&(Xo(e,1,n),an(e,n));break}}e=e.return}}function H_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Zt(),n.pingedLanes|=n.suspendedLanes&t,Lt===n&&(kt&t)===t&&(_t===4||_t===3&&(kt&130023424)===kt&&500>lt()-Gf?Er(n,0):Vf|=t),an(n,e)}function zg(n,e){e===0&&(n.mode&1?(e=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):e=1);var t=Zt();n=Mi(n,e),n!==null&&(Xo(n,e,t),an(n,t))}function W_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),zg(n,t)}function j_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),zg(n,t)}var Fg;Fg=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return rn=!1,R_(n,e,t);rn=!!(n.flags&131072)}else rn=!1,nt&&e.flags&1048576&&Bm(e,al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ga(n,e),n=e.pendingProps;var r=Ps(e,Wt.current);Es(e,t),r=kf(null,e,i,n,r,t);var s=zf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pf(e),r.updater=Cl,e.stateNode=r,r._reactInternals=e,Rc(e,i,n,t),e=kc(null,e,i,!0,s,t)):(e.tag=0,nt&&s&&wf(e),$t(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Ga(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=q_(i),n=Hn(i,n),r){case 0:e=Nc(null,e,i,n,t);break e;case 1:e=nh(null,e,i,n,t);break e;case 11:e=eh(null,e,i,n,t);break e;case 14:e=th(null,e,i,Hn(i.type,n),t);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Nc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),nh(n,e,i,r,t);case 3:e:{if(yg(e),n===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Wm(n,e),cl(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ns(Error(ee(423)),e),e=ih(n,e,i,t,r);break e}else if(i!==r){r=Ns(Error(ee(424)),e),e=ih(n,e,i,t,r);break e}else for(mn=Ui(e.stateNode.containerInfo.firstChild),vn=e,nt=!0,jn=null,t=Ym(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ds(),i===r){e=wi(n,e,t);break e}$t(n,e,i,t)}e=e.child}return e;case 5:return $m(e),n===null&&Lc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Ec(i,r)?o=null:s!==null&&Ec(i,s)&&(e.flags|=32),xg(n,e),$t(n,e,o,t),e.child;case 6:return n===null&&Lc(e),null;case 13:return Sg(n,e,t);case 4:return Df(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Rs(e,null,i,t):$t(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),eh(n,e,i,r,t);case 7:return $t(n,e,e.pendingProps,t),e.child;case 8:return $t(n,e,e.pendingProps.children,t),e.child;case 12:return $t(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ye(ll,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!sn.current){e=wi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=_i(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Pc(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Pc(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Es(e,t),r=Fn(r),i=i(r),e.flags|=1,$t(n,e,i,t),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),th(n,e,i,r,t);case 15:return vg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Ga(n,e),e.tag=1,on(i)?(n=!0,sl(e)):n=!1,Es(e,t),Xm(e,i,r),Rc(e,i,r,t),kc(null,e,i,!0,n,t);case 19:return Mg(n,e,t);case 22:return _g(n,e,t)}throw Error(ee(156,e.tag))};function Og(n,e){return cm(n,e)}function X_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(n,e,t,i){return new X_(n,e,t,i)}function Xf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function q_(n){if(typeof n=="function")return Xf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ff)return 11;if(n===df)return 14}return 2}function Hi(n,e){var t=n.alternate;return t===null?(t=kn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ja(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Xf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ls:return br(t.children,r,s,e);case cf:o=8,r|=8;break;case nc:return n=kn(12,t,e,r|2),n.elementType=nc,n.lanes=s,n;case ic:return n=kn(13,t,e,r),n.elementType=ic,n.lanes=s,n;case rc:return n=kn(19,t,e,r),n.elementType=rc,n.lanes=s,n;case qp:return Dl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case jp:o=10;break e;case Xp:o=9;break e;case ff:o=11;break e;case df:o=14;break e;case Pi:o=16,i=null;break e}throw Error(ee(130,n==null?n:typeof n,""))}return e=kn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function br(n,e,t,i){return n=kn(7,n,i,e),n.lanes=t,n}function Dl(n,e,t,i){return n=kn(22,n,i,e),n.elementType=qp,n.lanes=t,n.stateNode={isHidden:!1},n}function pu(n,e,t){return n=kn(6,n,null,e),n.lanes=t,n}function mu(n,e,t){return e=kn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Y_(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function qf(n,e,t,i,r,s,o,a,l){return n=new Y_(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pf(s),n}function $_(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:as,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Ug(n){if(!n)return $i;n=n._reactInternals;e:{if(Ur(n)!==n||n.tag!==1)throw Error(ee(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(n.tag===1){var t=n.type;if(on(t))return Om(n,t,e)}return e}function Bg(n,e,t,i,r,s,o,a,l){return n=qf(t,i,!0,n,r,s,o,a,l),n.context=Ug(null),t=n.current,i=Zt(),r=Gi(t),s=_i(i,r),s.callback=e??null,Bi(t,s,r),n.current.lanes=r,Xo(n,r,i),an(n,i),n}function Rl(n,e,t,i){var r=e.current,s=Zt(),o=Gi(r);return t=Ug(t),e.context===null?e.context=t:e.pendingContext=t,e=_i(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Bi(r,e,o),n!==null&&(Yn(n,r,o,s),Ua(n,r,o)),o}function _l(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Yf(n,e){hh(n,e),(n=n.alternate)&&hh(n,e)}function Z_(){return null}var Vg=typeof reportError=="function"?reportError:function(n){console.error(n)};function $f(n){this._internalRoot=n}Il.prototype.render=$f.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ee(409));Rl(n,e,null,null)};Il.prototype.unmount=$f.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ir(function(){Rl(null,n,null,null)}),e[Si]=null}};function Il(n){this._internalRoot=n}Il.prototype.unstable_scheduleHydration=function(n){if(n){var e=vm();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ri.length&&e!==0&&e<Ri[t].priority;t++);Ri.splice(t,0,n),t===0&&xm(n)}};function Zf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Nl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ph(){}function K_(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=_l(o);s.call(u)}}var o=Bg(e,i,n,0,null,!1,!1,"",ph);return n._reactRootContainer=o,n[Si]=o.current,Do(n.nodeType===8?n.parentNode:n),Ir(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=_l(l);a.call(u)}}var l=qf(n,0,!1,null,null,!1,!1,"",ph);return n._reactRootContainer=l,n[Si]=l.current,Do(n.nodeType===8?n.parentNode:n),Ir(function(){Rl(e,l,t,i)}),l}function kl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=_l(o);a.call(l)}}Rl(e,o,n,r)}else o=K_(t,e,n,r,i);return _l(o)}mm=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=uo(e.pendingLanes);t!==0&&(mf(e,t|1),an(e,lt()),!(Be&6)&&(ks=lt()+500,nr()))}break;case 13:Ir(function(){var i=Mi(n,1);if(i!==null){var r=Zt();Yn(i,n,1,r)}}),Yf(n,1)}};gf=function(n){if(n.tag===13){var e=Mi(n,134217728);if(e!==null){var t=Zt();Yn(e,n,134217728,t)}Yf(n,134217728)}};gm=function(n){if(n.tag===13){var e=Gi(n),t=Mi(n,e);if(t!==null){var i=Zt();Yn(t,n,e,i)}Yf(n,e)}};vm=function(){return Xe};_m=function(n,e){var t=Xe;try{return Xe=n,e()}finally{Xe=t}};pc=function(n,e,t){switch(e){case"input":if(ac(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=bl(i);if(!r)throw Error(ee(90));$p(i),ac(i,r)}}}break;case"textarea":Kp(n,t);break;case"select":e=t.value,e!=null&&ys(n,!!t.multiple,e,!1)}};rm=Hf;sm=Ir;var Q_={usingClientEntryPoint:!1,Events:[Yo,ds,bl,nm,im,Hf]},Js={findFiberByHostInstance:xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},J_={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=lm(n),n===null?null:n.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||Z_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{Sl=pa.inject(J_),ti=pa}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q_;Mn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zf(e))throw Error(ee(200));return $_(n,e,null,t)};Mn.createRoot=function(n,e){if(!Zf(n))throw Error(ee(299));var t=!1,i="",r=Vg;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=qf(n,1,!1,null,null,t,!1,i,r),n[Si]=e.current,Do(n.nodeType===8?n.parentNode:n),new $f(e)};Mn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ee(188)):(n=Object.keys(n).join(","),Error(ee(268,n)));return n=lm(e),n=n===null?null:n.stateNode,n};Mn.flushSync=function(n){return Ir(n)};Mn.hydrate=function(n,e,t){if(!Nl(e))throw Error(ee(200));return kl(null,n,e,!0,t)};Mn.hydrateRoot=function(n,e,t){if(!Zf(n))throw Error(ee(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Vg;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Bg(e,null,n,1,t??null,r,!1,s,o),n[Si]=e.current,Do(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Il(e)};Mn.render=function(n,e,t){if(!Nl(e))throw Error(ee(200));return kl(null,n,e,!1,t)};Mn.unmountComponentAtNode=function(n){if(!Nl(n))throw Error(ee(40));return n._reactRootContainer?(Ir(function(){kl(null,null,n,!1,function(){n._reactRootContainer=null,n[Si]=null})}),!0):!1};Mn.unstable_batchedUpdates=Hf;Mn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Nl(t))throw Error(ee(200));if(n==null||n._reactInternals===void 0)throw Error(ee(38));return kl(n,e,t,!1,i)};Mn.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=Mn})(Z0);var mh=Ju;Qu.createRoot=mh.createRoot,Qu.hydrateRoot=mh.hydrateRoot;const ex="modulepreload",tx=function(n){return"/Builder3D/"+n},gh={},vh=function(e,t,i){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=tx(s),s in gh)return;gh[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let c=r.length-1;c>=0;c--){const d=r[c];if(d.href===s&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":ex,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,d)=>{u.addEventListener("load",c),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kf="149",Hr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nx=0,_h=1,ix=2,Gg=1,Hg=2,fo=3,Zi=0,_n=1,At=2,Wi=0,Ts=1,xh=2,yh=3,Sh=4,rx=5,ss=100,sx=101,ox=102,Mh=103,wh=104,ax=200,lx=201,ux=202,cx=203,Wg=204,jg=205,fx=206,dx=207,hx=208,px=209,mx=210,gx=0,vx=1,_x=2,qc=3,xx=4,yx=5,Sx=6,Mx=7,Xg=0,wx=1,Ex=2,xi=0,bx=1,Tx=2,Cx=3,Ax=4,Lx=5,qg=300,zs=301,Fs=302,Yc=303,$c=304,zl=306,ji=1e3,Xn=1001,Zc=1002,It=1003,Eh=1004,gu=1005,Pn=1006,Px=1007,Bo=1008,Nr=1009,Dx=1010,Rx=1011,Yg=1012,Ix=1013,Mr=1014,wr=1015,Vo=1016,Nx=1017,kx=1018,Cs=1020,zx=1021,In=1023,Fx=1024,Ox=1025,Tr=1026,Os=1027,Ux=1028,Bx=1029,Vx=1030,Gx=1031,Hx=1033,vu=33776,_u=33777,xu=33778,yu=33779,bh=35840,Th=35841,Ch=35842,Ah=35843,Wx=36196,Lh=37492,Ph=37496,Dh=37808,Rh=37809,Ih=37810,Nh=37811,kh=37812,zh=37813,Fh=37814,Oh=37815,Uh=37816,Bh=37817,Vh=37818,Gh=37819,Hh=37820,Wh=37821,Su=36492,jx=36283,jh=36284,Xh=36285,qh=36286,kr=3e3,Ze=3001,Xx=3200,qx=3201,Yx=0,$x=1,Qn="srgb",Go="srgb-linear",Mu=7680,Zx=519,Yh=35044,$h="300 es",Kc=1035;class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=Math.PI/180,Zh=180/Math.PI;function Zo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function nn(n,e,t){return Math.max(e,Math.min(t,n))}function Kx(n,e){return(n%e+e)%e}function Eu(n,e,t){return(1-t)*n+t*e}function Kh(n){return(n&n-1)===0&&n!==0}function Qc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ma(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gn{constructor(){gn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],g=i[5],y=i[8],h=r[0],p=r[3],m=r[6],v=r[1],_=r[4],M=r[7],x=r[2],A=r[5],L=r[8];return s[0]=o*h+a*v+l*x,s[3]=o*p+a*_+l*A,s[6]=o*m+a*M+l*L,s[1]=u*h+c*v+d*x,s[4]=u*p+c*_+d*A,s[7]=u*m+c*M+d*L,s[2]=f*h+g*v+y*x,s[5]=f*p+g*_+y*A,s[8]=f*m+g*M+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,g=u*s-o*l,y=t*d+i*f+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/y;return e[0]=d*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=f*h,e[4]=(c*t-r*l)*h,e[5]=(r*s-a*t)*h,e[6]=g*h,e[7]=(i*l-u*t)*h,e[8]=(o*t-i*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bu.makeScale(e,t)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,t){return this.premultiply(bu.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new gn;function $g(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ho(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Tu={[Qn]:{[Go]:Cr},[Go]:{[Qn]:Xa}},qt={legacyMode:!0,get workingColorSpace(){return Go},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Tu[e]&&Tu[e][t]!==void 0){const i=Tu[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mt={r:0,g:0,b:0},Bn={h:0,s:0,l:0},ga={h:0,s:0,l:0};function Cu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function va(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=qt.workingColorSpace){return this.r=e,this.g=t,this.b=i,qt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=qt.workingColorSpace){if(e=Kx(e,1),t=nn(t,0,1),i=nn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Cu(o,s,e+1/3),this.g=Cu(o,s,e),this.b=Cu(o,s,e-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(e,t=Qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,qt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,qt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,qt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,qt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Qn){const i=Zg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return qt.fromWorkingColorSpace(va(this,mt),e),nn(mt.r*255,0,255)<<16^nn(mt.g*255,0,255)<<8^nn(mt.b*255,0,255)<<0}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(va(this,mt),t);const i=mt.r,r=mt.g,s=mt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(va(this,mt),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=Qn){return qt.fromWorkingColorSpace(va(this,mt),e),e!==Qn?`color(${e} ${mt.r} ${mt.g} ${mt.b})`:`rgb(${mt.r*255|0},${mt.g*255|0},${mt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Bn),Bn.h+=e,Bn.s+=t,Bn.l+=i,this.setHSL(Bn.h,Bn.s,Bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(ga);const i=Eu(Bn.h,ga.h,t),r=Eu(Bn.s,ga.s,t),s=Eu(Bn.l,ga.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Je.NAMES=Zg;let jr;class Kg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jr===void 0&&(jr=Ho("canvas")),jr.width=e.width,jr.height=e.height;const i=jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ho("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cr(t[i]/255)*255):t[i]=Cr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Qg{constructor(e=null){this.isSource=!0,this.uuid=Zo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Au(r[o].image)):s.push(Au(r[o]))}else s=Au(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Au(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qx=0;class ln extends Br{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,i=Xn,r=Xn,s=Pn,o=Bo,a=In,l=Nr,u=ln.DEFAULT_ANISOTROPY,c=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Zo(),this.name="",this.source=new Qg(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ji:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ji:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=qg;ln.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],g=l[5],y=l[9],h=l[2],p=l[6],m=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-h)<.01&&Math.abs(y-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+h)<.1&&Math.abs(y+p)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,M=(g+1)/2,x=(m+1)/2,A=(c+f)/4,L=(d+h)/4,S=(y+p)/4;return _>M&&_>x?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=L/i):M>x?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=S/r):x<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),i=L/s,r=S/s),this.set(i,r,s,t),this}let v=Math.sqrt((p-y)*(p-y)+(d-h)*(d-h)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(p-y)/v,this.y=(d-h)/v,this.z=(f-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zr extends Br{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Pn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jg extends ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jx extends ln{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],y=s[o+2],h=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=g,e[t+2]=y,e[t+3]=h;return}if(d!==h||l!==f||u!==g||c!==y){let p=1-a;const m=l*f+u*g+c*y+d*h,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const x=Math.sqrt(_),A=Math.atan2(x,m*v);p=Math.sin(p*A)/x,a=Math.sin(a*A)/x}const M=a*v;if(l=l*p+f*M,u=u*p+g*M,c=c*p+y*M,d=d*p+h*M,p===1-a){const x=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=x,u*=x,c*=x,d*=x}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],g=s[o+2],y=s[o+3];return e[t]=a*y+c*d+l*g-u*f,e[t+1]=l*y+c*f+u*d-a*g,e[t+2]=u*y+c*g+a*f-l*d,e[t+3]=c*y-a*d-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),g=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*g*y,this._y=u*g*d-f*c*y,this._z=u*c*y+f*g*d,this._w=u*c*d-f*g*y;break;case"YXZ":this._x=f*c*d+u*g*y,this._y=u*g*d-f*c*y,this._z=u*c*y-f*g*d,this._w=u*c*d+f*g*y;break;case"ZXY":this._x=f*c*d-u*g*y,this._y=u*g*d+f*c*y,this._z=u*c*y+f*g*d,this._w=u*c*d-f*g*y;break;case"ZYX":this._x=f*c*d-u*g*y,this._y=u*g*d+f*c*y,this._z=u*c*y-f*g*d,this._w=u*c*d+f*g*y;break;case"YZX":this._x=f*c*d+u*g*y,this._y=u*g*d+f*c*y,this._z=u*c*y-f*g*d,this._w=u*c*d-f*g*y;break;case"XZY":this._x=f*c*d-u*g*y,this._y=u*g*d-f*c*y,this._z=u*c*y+f*g*d,this._w=u*c*d+f*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lu=new B,Qh=new Fr;class Ko{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)ar.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ar)}else i.boundingBox===null&&i.computeBoundingBox(),Pu.copy(i.boundingBox),Pu.applyMatrix4(e.matrixWorld),this.union(Pu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ar),ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),_a.subVectors(this.max,eo),Xr.subVectors(e.a,eo),qr.subVectors(e.b,eo),Yr.subVectors(e.c,eo),Ti.subVectors(qr,Xr),Ci.subVectors(Yr,qr),lr.subVectors(Xr,Yr);let t=[0,-Ti.z,Ti.y,0,-Ci.z,Ci.y,0,-lr.z,lr.y,Ti.z,0,-Ti.x,Ci.z,0,-Ci.x,lr.z,0,-lr.x,-Ti.y,Ti.x,0,-Ci.y,Ci.x,0,-lr.y,lr.x,0];return!Du(t,Xr,qr,Yr,_a)||(t=[1,0,0,0,1,0,0,0,1],!Du(t,Xr,qr,Yr,_a))?!1:(xa.crossVectors(Ti,Ci),t=[xa.x,xa.y,xa.z],Du(t,Xr,qr,Yr,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ar.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ar).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new B,new B,new B,new B,new B,new B,new B,new B],ar=new B,Pu=new Ko,Xr=new B,qr=new B,Yr=new B,Ti=new B,Ci=new B,lr=new B,eo=new B,_a=new B,xa=new B,ur=new B;function Du(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ur.fromArray(n,s);const a=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=e.dot(ur),u=t.dot(ur),c=i.dot(ur);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const ey=new Ko,to=new B,Ru=new B;class Qf{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ey.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(to,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Ru)),this.expandByPoint(to.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new B,Iu=new B,ya=new B,Ai=new B,Nu=new B,Sa=new B,ku=new B;class e0{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.direction).multiplyScalar(t).add(this.origin),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Iu.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Iu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ya),a=Ai.dot(this.direction),l=-Ai.dot(ya),u=Ai.lengthSq(),c=Math.abs(1-o*o);let d,f,g,y;if(c>0)if(d=o*l-a,f=o*a-l,y=s*c,d>=0)if(f>=-y)if(f<=y){const h=1/c;d*=h,f*=h,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f<=-y?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u):f<=y?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(ya).multiplyScalar(f).add(Iu),g}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,r,s){Nu.subVectors(t,e),Sa.subVectors(i,e),ku.crossVectors(Nu,Sa);let o=this.direction.dot(ku),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(Sa.crossVectors(Ai,Sa));if(l<0)return null;const u=a*this.direction.dot(Nu.cross(Ai));if(u<0||l+u>o)return null;const c=-a*Ai.dot(ku);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,d,f,g,y,h,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=d,m[14]=f,m[3]=g,m[7]=y,m[11]=h,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),o=1/$r.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,g=o*d,y=a*c,h=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=g+y*u,t[5]=f-h*u,t[9]=-a*l,t[2]=h-f*u,t[6]=y+g*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,g=l*d,y=u*c,h=u*d;t[0]=f+h*a,t[4]=y*a-g,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=g*a-y,t[6]=h+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,g=l*d,y=u*c,h=u*d;t[0]=f-h*a,t[4]=-o*d,t[8]=y+g*a,t[1]=g+y*a,t[5]=o*c,t[9]=h-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,g=o*d,y=a*c,h=a*d;t[0]=l*c,t[4]=y*u-g,t[8]=f*u+h,t[1]=l*d,t[5]=h*u+f,t[9]=g*u-y,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*u,y=a*l,h=a*u;t[0]=l*c,t[4]=h-f*d,t[8]=y*d+g,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=g*d+y,t[10]=f-h*d}else if(e.order==="XZY"){const f=o*l,g=o*u,y=a*l,h=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+h,t[5]=o*c,t[9]=g*d-y,t[2]=y*d-g,t[6]=a*c,t[10]=h*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ty,e,ny)}lookAt(e,t,i){const r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Li.crossVectors(i,dn),Li.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Li.crossVectors(i,dn)),Li.normalize(),Ma.crossVectors(dn,Li),r[0]=Li.x,r[4]=Ma.x,r[8]=dn.x,r[1]=Li.y,r[5]=Ma.y,r[9]=dn.y,r[2]=Li.z,r[6]=Ma.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],g=i[13],y=i[2],h=i[6],p=i[10],m=i[14],v=i[3],_=i[7],M=i[11],x=i[15],A=r[0],L=r[4],S=r[8],T=r[12],P=r[1],Z=r[5],K=r[9],z=r[13],k=r[2],Y=r[6],Q=r[10],J=r[14],R=r[3],G=r[7],H=r[11],se=r[15];return s[0]=o*A+a*P+l*k+u*R,s[4]=o*L+a*Z+l*Y+u*G,s[8]=o*S+a*K+l*Q+u*H,s[12]=o*T+a*z+l*J+u*se,s[1]=c*A+d*P+f*k+g*R,s[5]=c*L+d*Z+f*Y+g*G,s[9]=c*S+d*K+f*Q+g*H,s[13]=c*T+d*z+f*J+g*se,s[2]=y*A+h*P+p*k+m*R,s[6]=y*L+h*Z+p*Y+m*G,s[10]=y*S+h*K+p*Q+m*H,s[14]=y*T+h*z+p*J+m*se,s[3]=v*A+_*P+M*k+x*R,s[7]=v*L+_*Z+M*Y+x*G,s[11]=v*S+_*K+M*Q+x*H,s[15]=v*T+_*z+M*J+x*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],g=e[14],y=e[3],h=e[7],p=e[11],m=e[15];return y*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*g-i*l*g)+h*(+t*l*g-t*u*f+s*o*f-r*o*g+r*u*c-s*l*c)+p*(+t*u*d-t*a*g-s*o*d+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],g=e[11],y=e[12],h=e[13],p=e[14],m=e[15],v=d*p*u-h*f*u+h*l*g-a*p*g-d*l*m+a*f*m,_=y*f*u-c*p*u-y*l*g+o*p*g+c*l*m-o*f*m,M=c*h*u-y*d*u+y*a*g-o*h*g-c*a*m+o*d*m,x=y*d*l-c*h*l-y*a*f+o*h*f+c*a*p-o*d*p,A=t*v+i*_+r*M+s*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=v*L,e[1]=(h*f*s-d*p*s-h*r*g+i*p*g+d*r*m-i*f*m)*L,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*m+i*l*m)*L,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*g-i*l*g)*L,e[4]=_*L,e[5]=(c*p*s-y*f*s+y*r*g-t*p*g-c*r*m+t*f*m)*L,e[6]=(y*l*s-o*p*s-y*r*u+t*p*u+o*r*m-t*l*m)*L,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*g+t*l*g)*L,e[8]=M*L,e[9]=(y*d*s-c*h*s-y*i*g+t*h*g+c*i*m-t*d*m)*L,e[10]=(o*h*s-y*a*s+y*i*u-t*h*u-o*i*m+t*a*m)*L,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*g-t*a*g)*L,e[12]=x*L,e[13]=(c*h*r-y*d*r+y*i*f-t*h*f-c*i*p+t*d*p)*L,e[14]=(y*a*r-o*h*r-y*i*l+t*h*l+o*i*p-t*a*p)*L,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,g=s*c,y=s*d,h=o*c,p=o*d,m=a*d,v=l*u,_=l*c,M=l*d,x=i.x,A=i.y,L=i.z;return r[0]=(1-(h+m))*x,r[1]=(g+M)*x,r[2]=(y-_)*x,r[3]=0,r[4]=(g-M)*A,r[5]=(1-(f+m))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(y+_)*L,r[9]=(p-v)*L,r[10]=(1-(f+h))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=$r.set(r[0],r[1],r[2]).length();const o=$r.set(r[4],r[5],r[6]).length(),a=$r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const u=1/s,c=1/o,d=1/a;return Vn.elements[0]*=u,Vn.elements[1]*=u,Vn.elements[2]*=u,Vn.elements[4]*=c,Vn.elements[5]*=c,Vn.elements[6]*=c,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,t.setFromRotationMatrix(Vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),d=(t+e)*l,f=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $r=new B,Vn=new zt,ty=new B(0,0,0),ny=new B(1,1,1),Li=new B,Ma=new B,dn=new B,Jh=new zt,ep=new Fr;class Fl{constructor(e=0,t=0,i=0,r=Fl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ep.setFromEuler(this),this.setFromQuaternion(ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fl.DEFAULT_ORDER="XYZ";class Jf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iy=0;const tp=new B,Zr=new Fr,li=new zt,wa=new B,no=new B,ry=new B,sy=new Fr,np=new B(1,0,0),ip=new B(0,1,0),rp=new B(0,0,1),oy={type:"added"},sp={type:"removed"};class xn extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new B,t=new Fl,i=new Fr,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new gn}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(np,e)}rotateY(e){return this.rotateOnAxis(ip,e)}rotateZ(e){return this.rotateOnAxis(rp,e)}translateOnAxis(e,t){return tp.copy(e).applyQuaternion(this.quaternion),this.position.add(tp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(np,e)}translateY(e){return this.translateOnAxis(ip,e)}translateZ(e){return this.translateOnAxis(rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wa.copy(e):wa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(no,wa,this.up):li.lookAt(wa,no,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(li),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(oy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(sp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,ry),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xn.DEFAULT_UP=new B(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new B,ui=new B,zu=new B,ci=new B,Kr=new B,Qr=new B,op=new B,Fu=new B,Ou=new B,Uu=new B;class pi{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gn.subVectors(e,t),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Gn.subVectors(r,t),ui.subVectors(i,t),zu.subVectors(e,t);const o=Gn.dot(Gn),a=Gn.dot(ui),l=Gn.dot(zu),u=ui.dot(ui),c=ui.dot(zu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(u*l-a*c)*f,y=(o*c-a*l)*f;return s.set(1-g-y,y,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ci),ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ci),l.set(0,0),l.addScaledVector(s,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l}static isFrontFacing(e,t,i,r){return Gn.subVectors(i,t),ui.subVectors(e,t),Gn.cross(ui).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Gn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return pi.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Kr.subVectors(r,i),Qr.subVectors(s,i),Fu.subVectors(e,i);const l=Kr.dot(Fu),u=Qr.dot(Fu);if(l<=0&&u<=0)return t.copy(i);Ou.subVectors(e,r);const c=Kr.dot(Ou),d=Qr.dot(Ou);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Kr,o);Uu.subVectors(e,s);const g=Kr.dot(Uu),y=Qr.dot(Uu);if(y>=0&&g<=y)return t.copy(s);const h=g*u-l*y;if(h<=0&&u>=0&&y<=0)return a=u/(u-y),t.copy(i).addScaledVector(Qr,a);const p=c*y-g*d;if(p<=0&&d-c>=0&&g-y>=0)return op.subVectors(s,r),a=(d-c)/(d-c+(g-y)),t.copy(r).addScaledVector(op,a);const m=1/(p+h+f);return o=h*m,a=f*m,t.copy(i).addScaledVector(Kr,o).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ay=0;class Ol extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=Ts,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wg,this.blendDst=jg,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mu,this.stencilZFail=Mu,this.stencilZPass=Mu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qe extends Ol{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new B,Ea=new Ie;class ii{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ma(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ma(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ma(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ma(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class t0 extends ii{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class n0 extends ii{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ar extends ii{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ly=0;const Tn=new zt,Bu=new xn,Jr=new B,hn=new Ko,io=new Ko,Et=new B;class Vr extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($g(e)?n0:t0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new gn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ar(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];io.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(hn.min,io.min),hn.expandByPoint(Et),Et.addVectors(hn.max,io.max),hn.expandByPoint(Et)):(hn.expandByPoint(io.min),hn.expandByPoint(io.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Et.fromBufferAttribute(a,u),l&&(Jr.fromBufferAttribute(e,u),Et.add(Jr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let P=0;P<a;P++)u[P]=new B,c[P]=new B;const d=new B,f=new B,g=new B,y=new Ie,h=new Ie,p=new Ie,m=new B,v=new B;function _(P,Z,K){d.fromArray(r,P*3),f.fromArray(r,Z*3),g.fromArray(r,K*3),y.fromArray(o,P*2),h.fromArray(o,Z*2),p.fromArray(o,K*2),f.sub(d),g.sub(d),h.sub(y),p.sub(y);const z=1/(h.x*p.y-p.x*h.y);isFinite(z)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(g,-h.y).multiplyScalar(z),v.copy(g).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(z),u[P].add(m),u[Z].add(m),u[K].add(m),c[P].add(v),c[Z].add(v),c[K].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let P=0,Z=M.length;P<Z;++P){const K=M[P],z=K.start,k=K.count;for(let Y=z,Q=z+k;Y<Q;Y+=3)_(i[Y+0],i[Y+1],i[Y+2])}const x=new B,A=new B,L=new B,S=new B;function T(P){L.fromArray(s,P*3),S.copy(L);const Z=u[P];x.copy(Z),x.sub(L.multiplyScalar(L.dot(Z))).normalize(),A.crossVectors(S,Z);const z=A.dot(c[P])<0?-1:1;l[P*4]=x.x,l[P*4+1]=x.y,l[P*4+2]=x.z,l[P*4+3]=z}for(let P=0,Z=M.length;P<Z;++P){const K=M[P],z=K.start,k=K.count;for(let Y=z,Q=z+k;Y<Q;Y+=3)T(i[Y+0]),T(i[Y+1]),T(i[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,c=new B,d=new B;if(e)for(let f=0,g=e.count;f<g;f+=3){const y=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,p),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let g=0,y=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?g=l[h]*a.data.stride+a.offset:g=l[h]*c;for(let m=0;m<c;m++)f[y++]=u[g++]}return new ii(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],g=e(f,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,g=d.length;f<g;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ap=new zt,es=new e0,Vu=new Qf,ro=new B,so=new B,oo=new B,Gu=new B,ba=new B,Ta=new Ie,Ca=new Ie,Aa=new Ie,Hu=new B,La=new B;class Ke extends xn{constructor(e=new Vr,t=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ba.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Gu.fromBufferAttribute(d,e),o?ba.addScaledVector(Gu,c):ba.addScaledVector(Gu.sub(t),c))}t.add(ba)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Vu.copy(i.boundingSphere),Vu.applyMatrix4(s),e.ray.intersectsSphere(Vu)===!1)||(ap.copy(s).invert(),es.copy(e.ray).applyMatrix4(ap),i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,y=d.length;g<y;g++){const h=d[g],p=r[h.materialIndex],m=Math.max(h.start,f.start),v=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let _=m,M=v;_<M;_+=3){const x=a.getX(_),A=a.getX(_+1),L=a.getX(_+2);o=Pa(this,p,e,es,u,c,x,A,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let h=g,p=y;h<p;h+=3){const m=a.getX(h),v=a.getX(h+1),_=a.getX(h+2);o=Pa(this,r,e,es,u,c,m,v,_),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,y=d.length;g<y;g++){const h=d[g],p=r[h.materialIndex],m=Math.max(h.start,f.start),v=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let _=m,M=v;_<M;_+=3){const x=_,A=_+1,L=_+2;o=Pa(this,p,e,es,u,c,x,A,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let h=g,p=y;h<p;h+=3){const m=h,v=h+1,_=h+2;o=Pa(this,r,e,es,u,c,m,v,_),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}}}function uy(n,e,t,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Zi,a),l===null)return null;La.copy(a),La.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(La);return u<t.near||u>t.far?null:{distance:u,point:La.clone(),object:n}}function Pa(n,e,t,i,r,s,o,a,l){n.getVertexPosition(o,ro),n.getVertexPosition(a,so),n.getVertexPosition(l,oo);const u=uy(n,e,t,i,ro,so,oo,Hu);if(u){r&&(Ta.fromBufferAttribute(r,o),Ca.fromBufferAttribute(r,a),Aa.fromBufferAttribute(r,l),u.uv=pi.getUV(Hu,ro,so,oo,Ta,Ca,Aa,new Ie)),s&&(Ta.fromBufferAttribute(s,o),Ca.fromBufferAttribute(s,a),Aa.fromBufferAttribute(s,l),u.uv2=pi.getUV(Hu,ro,so,oo,Ta,Ca,Aa,new Ie));const c={a:o,b:a,c:l,normal:new B,materialIndex:0};pi.getNormal(ro,so,oo,c.normal),u.face=c}return u}class Ct extends Vr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,g=0;y("z","y","x",-1,-1,i,t,e,o,s,0),y("z","y","x",1,-1,i,t,-e,o,s,1),y("x","z","y",1,1,e,i,t,r,o,2),y("x","z","y",1,-1,e,i,-t,r,o,3),y("x","y","z",1,-1,e,t,i,r,s,4),y("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ar(u,3)),this.setAttribute("normal",new Ar(c,3)),this.setAttribute("uv",new Ar(d,2));function y(h,p,m,v,_,M,x,A,L,S,T){const P=M/L,Z=x/S,K=M/2,z=x/2,k=A/2,Y=L+1,Q=S+1;let J=0,R=0;const G=new B;for(let H=0;H<Q;H++){const se=H*Z-z;for(let F=0;F<Y;F++){const $=F*P-K;G[h]=$*v,G[p]=se*_,G[m]=k,u.push(G.x,G.y,G.z),G[h]=0,G[p]=0,G[m]=A>0?1:-1,c.push(G.x,G.y,G.z),d.push(F/L),d.push(1-H/S),J+=1}}for(let H=0;H<S;H++)for(let se=0;se<L;se++){const F=f+se+Y*H,$=f+se+Y*(H+1),ie=f+(se+1)+Y*(H+1),oe=f+(se+1)+Y*H;l.push(F,$,oe),l.push($,ie,oe),R+=6}a.addGroup(g,R,T),g+=R,f+=J}}static fromJSON(e){return new Ct(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=Us(n[t]);for(const r in i)e[r]=i[r]}return e}function cy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function i0(n){return n.getRenderTarget()===null&&n.outputEncoding===Ze?Qn:Go}const fy={clone:Us,merge:Yt};var dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Ol{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dy,this.fragmentShader=hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=cy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class r0 extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dn extends r0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zh*2*Math.atan(Math.tan(wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class py extends xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Dn(ts,ns,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Dn(ts,ns,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Dn(ts,ns,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Dn(ts,ns,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Dn(ts,ns,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new Dn(ts,ns,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=xi,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class s0 extends ln{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class my extends zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new s0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ct(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Wi});s.uniforms.tEquirect.value=t;const o=new Ke(r,s),a=t.minFilter;return t.minFilter===Bo&&(t.minFilter=Pn),new py(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Wu=new B,gy=new B,vy=new gn;class hr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wu.subVectors(i,t).cross(gy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vy.getNormalMatrix(e),r=this.coplanarPoint(Wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new Qf,Da=new B;class o0{constructor(e=new hr,t=new hr,i=new hr,r=new hr,s=new hr,o=new hr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],y=i[10],h=i[11],p=i[12],m=i[13],v=i[14],_=i[15];return t[0].setComponents(a-r,d-l,h-f,_-p).normalize(),t[1].setComponents(a+r,d+l,h+f,_+p).normalize(),t[2].setComponents(a+s,d+u,h+g,_+m).normalize(),t[3].setComponents(a-s,d-u,h-g,_-m).normalize(),t[4].setComponents(a-o,d-c,h-y,_-v).normalize(),t[5].setComponents(a+o,d+c,h+y,_+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Da.x=r.normal.x>0?e.max.x:e.min.x,Da.y=r.normal.y>0?e.max.y:e.min.y,Da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function a0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function _y(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,d,f),u.onUploadCallback();let y;if(d instanceof Float32Array)y=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(d instanceof Int16Array)y=5122;else if(d instanceof Uint32Array)y=5125;else if(d instanceof Int32Array)y=5124;else if(d instanceof Int8Array)y=5120;else if(d instanceof Uint8Array)y=5121;else if(d instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,g=c.updateRange;n.bindBuffer(d,u),g.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):n.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class Qi extends Vr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,g=[],y=[],h=[],p=[];for(let m=0;m<c;m++){const v=m*f-o;for(let _=0;_<u;_++){const M=_*d-s;y.push(M,-v,0),h.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const _=v+u*m,M=v+u*(m+1),x=v+1+u*(m+1),A=v+1+u*m;g.push(_,M,A),g.push(M,x,A)}this.setIndex(g),this.setAttribute("position",new Ar(y,3)),this.setAttribute("normal",new Ar(h,3)),this.setAttribute("uv",new Ar(p,2))}static fromJSON(e){return new Qi(e.width,e.height,e.widthSegments,e.heightSegments)}}var xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,My=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ey=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,by="vec3 transformed = vec3( position );",Ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cy=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Ay=`#ifdef USE_IRIDESCENCE
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
#endif`,Ly=`#ifdef USE_BUMPMAP
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Oy=`#define PI 3.141592653589793
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
}`,Uy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,By=`vec3 transformedNormal = objectNormal;
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
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,Zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
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
#endif`,Qy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nS=`#ifdef USE_GRADIENTMAP
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
}`,iS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aS=`uniform bool receiveShadow;
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
#endif`,lS=`#if defined( USE_ENVMAP )
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
#endif`,uS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hS=`PhysicalMaterial material;
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
#endif`,pS=`struct PhysicalMaterial {
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
}`,mS=`
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
#endif`,gS=`#if defined( RE_IndirectDiffuse )
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
#endif`,vS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,_S=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,SS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,MS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ES=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LS=`#ifdef USE_MORPHNORMALS
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
#endif`,PS=`#ifdef USE_MORPHTARGETS
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
#endif`,DS=`#ifdef USE_MORPHTARGETS
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
#endif`,RS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,IS=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,NS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FS=`#ifdef USE_NORMALMAP
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
#endif`,OS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,US=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,BS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,VS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$S=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JS=`float getShadowMask() {
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
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,n1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i1=`#ifdef USE_SKINNING
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
#endif`,r1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l1=`#ifdef USE_TRANSMISSION
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
#endif`,u1=`#ifdef USE_TRANSMISSION
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
#endif`,c1=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,f1=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,d1=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,h1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,p1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,m1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,g1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_1=`uniform sampler2D t2D;
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
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,w1=`#include <common>
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
}`,E1=`#if DEPTH_PACKING == 3200
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
}`,b1=`#define DISTANCE
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
}`,T1=`#define DISTANCE
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,L1=`uniform float scale;
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
}`,P1=`uniform vec3 diffuse;
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
}`,D1=`#include <common>
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
}`,R1=`uniform vec3 diffuse;
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
}`,I1=`#define LAMBERT
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
}`,N1=`#define LAMBERT
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
}`,k1=`#define MATCAP
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
}`,z1=`#define MATCAP
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
}`,F1=`#define NORMAL
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
}`,O1=`#define NORMAL
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
}`,U1=`#define PHONG
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
}`,B1=`#define PHONG
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
}`,V1=`#define STANDARD
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
}`,G1=`#define STANDARD
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
}`,H1=`#define TOON
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
}`,W1=`#define TOON
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
}`,j1=`uniform float size;
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
}`,X1=`uniform vec3 diffuse;
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
}`,q1=`#include <common>
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
}`,Y1=`uniform vec3 color;
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
}`,$1=`uniform float rotation;
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
}`,Z1=`uniform vec3 diffuse;
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
}`,Le={alphamap_fragment:xy,alphamap_pars_fragment:yy,alphatest_fragment:Sy,alphatest_pars_fragment:My,aomap_fragment:wy,aomap_pars_fragment:Ey,begin_vertex:by,beginnormal_vertex:Ty,bsdfs:Cy,iridescence_fragment:Ay,bumpmap_pars_fragment:Ly,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Dy,clipping_planes_pars_vertex:Ry,clipping_planes_vertex:Iy,color_fragment:Ny,color_pars_fragment:ky,color_pars_vertex:zy,color_vertex:Fy,common:Oy,cube_uv_reflection_fragment:Uy,defaultnormal_vertex:By,displacementmap_pars_vertex:Vy,displacementmap_vertex:Gy,emissivemap_fragment:Hy,emissivemap_pars_fragment:Wy,encodings_fragment:jy,encodings_pars_fragment:Xy,envmap_fragment:qy,envmap_common_pars_fragment:Yy,envmap_pars_fragment:$y,envmap_pars_vertex:Zy,envmap_physical_pars_fragment:lS,envmap_vertex:Ky,fog_vertex:Qy,fog_pars_vertex:Jy,fog_fragment:eS,fog_pars_fragment:tS,gradientmap_pars_fragment:nS,lightmap_fragment:iS,lightmap_pars_fragment:rS,lights_lambert_fragment:sS,lights_lambert_pars_fragment:oS,lights_pars_begin:aS,lights_toon_fragment:uS,lights_toon_pars_fragment:cS,lights_phong_fragment:fS,lights_phong_pars_fragment:dS,lights_physical_fragment:hS,lights_physical_pars_fragment:pS,lights_fragment_begin:mS,lights_fragment_maps:gS,lights_fragment_end:vS,logdepthbuf_fragment:_S,logdepthbuf_pars_fragment:xS,logdepthbuf_pars_vertex:yS,logdepthbuf_vertex:SS,map_fragment:MS,map_pars_fragment:wS,map_particle_fragment:ES,map_particle_pars_fragment:bS,metalnessmap_fragment:TS,metalnessmap_pars_fragment:CS,morphcolor_vertex:AS,morphnormal_vertex:LS,morphtarget_pars_vertex:PS,morphtarget_vertex:DS,normal_fragment_begin:RS,normal_fragment_maps:IS,normal_pars_fragment:NS,normal_pars_vertex:kS,normal_vertex:zS,normalmap_pars_fragment:FS,clearcoat_normal_fragment_begin:OS,clearcoat_normal_fragment_maps:US,clearcoat_pars_fragment:BS,iridescence_pars_fragment:VS,output_fragment:GS,packing:HS,premultiplied_alpha_fragment:WS,project_vertex:jS,dithering_fragment:XS,dithering_pars_fragment:qS,roughnessmap_fragment:YS,roughnessmap_pars_fragment:$S,shadowmap_pars_fragment:ZS,shadowmap_pars_vertex:KS,shadowmap_vertex:QS,shadowmask_pars_fragment:JS,skinbase_vertex:e1,skinning_pars_vertex:t1,skinning_vertex:n1,skinnormal_vertex:i1,specularmap_fragment:r1,specularmap_pars_fragment:s1,tonemapping_fragment:o1,tonemapping_pars_fragment:a1,transmission_fragment:l1,transmission_pars_fragment:u1,uv_pars_fragment:c1,uv_pars_vertex:f1,uv_vertex:d1,uv2_pars_fragment:h1,uv2_pars_vertex:p1,uv2_vertex:m1,worldpos_vertex:g1,background_vert:v1,background_frag:_1,backgroundCube_vert:x1,backgroundCube_frag:y1,cube_vert:S1,cube_frag:M1,depth_vert:w1,depth_frag:E1,distanceRGBA_vert:b1,distanceRGBA_frag:T1,equirect_vert:C1,equirect_frag:A1,linedashed_vert:L1,linedashed_frag:P1,meshbasic_vert:D1,meshbasic_frag:R1,meshlambert_vert:I1,meshlambert_frag:N1,meshmatcap_vert:k1,meshmatcap_frag:z1,meshnormal_vert:F1,meshnormal_frag:O1,meshphong_vert:U1,meshphong_frag:B1,meshphysical_vert:V1,meshphysical_frag:G1,meshtoon_vert:H1,meshtoon_frag:W1,points_vert:j1,points_frag:X1,shadow_vert:q1,shadow_frag:Y1,sprite_vert:$1,sprite_frag:Z1},ae={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new gn},uv2Transform:{value:new gn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gn}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gn}}},Jn={basic:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Yt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Yt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Yt([ae.points,ae.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Yt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Yt([ae.common,ae.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Yt([ae.sprite,ae.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new gn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Yt([ae.common,ae.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Yt([ae.lights,ae.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Jn.physical={uniforms:Yt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Ra={r:0,b:0,g:0};function K1(n,e,t,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,u,c,d=null,f=0,g=null;function y(p,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_));const M=n.xr,x=M.getSession&&M.getSession();x&&x.environmentBlendMode==="additive"&&(_=null),_===null?h(a,l):_&&_.isColor&&(h(_,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===zl)?(c===void 0&&(c=new Ke(new Ct(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Us(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,L,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=_.encoding!==Ze,(d!==_||f!==_.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,g=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Ke(new Qi(2,2),new Ki({name:"BackgroundMaterial",uniforms:Us(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_.encoding!==Ze,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,g=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function h(p,m){p.getRGB(Ra,i0(n)),i.buffers.color.setClear(Ra.r,Ra.g,Ra.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:y}}function Q1(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function d(k,Y,Q,J,R){let G=!1;if(o){const H=h(J,Q,Y);u!==H&&(u=H,g(u.object)),G=m(k,J,Q,R),G&&v(k,J,Q,R)}else{const H=Y.wireframe===!0;(u.geometry!==J.id||u.program!==Q.id||u.wireframe!==H)&&(u.geometry=J.id,u.program=Q.id,u.wireframe=H,G=!0)}R!==null&&t.update(R,34963),(G||c)&&(c=!1,S(k,Y,Q,J),R!==null&&n.bindBuffer(34963,t.get(R).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(k){return i.isWebGL2?n.bindVertexArray(k):s.bindVertexArrayOES(k)}function y(k){return i.isWebGL2?n.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function h(k,Y,Q){const J=Q.wireframe===!0;let R=a[k.id];R===void 0&&(R={},a[k.id]=R);let G=R[Y.id];G===void 0&&(G={},R[Y.id]=G);let H=G[J];return H===void 0&&(H=p(f()),G[J]=H),H}function p(k){const Y=[],Q=[],J=[];for(let R=0;R<r;R++)Y[R]=0,Q[R]=0,J[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:Q,attributeDivisors:J,object:k,attributes:{},index:null}}function m(k,Y,Q,J){const R=u.attributes,G=Y.attributes;let H=0;const se=Q.getAttributes();for(const F in se)if(se[F].location>=0){const ie=R[F];let oe=G[F];if(oe===void 0&&(F==="instanceMatrix"&&k.instanceMatrix&&(oe=k.instanceMatrix),F==="instanceColor"&&k.instanceColor&&(oe=k.instanceColor)),ie===void 0||ie.attribute!==oe||oe&&ie.data!==oe.data)return!0;H++}return u.attributesNum!==H||u.index!==J}function v(k,Y,Q,J){const R={},G=Y.attributes;let H=0;const se=Q.getAttributes();for(const F in se)if(se[F].location>=0){let ie=G[F];ie===void 0&&(F==="instanceMatrix"&&k.instanceMatrix&&(ie=k.instanceMatrix),F==="instanceColor"&&k.instanceColor&&(ie=k.instanceColor));const oe={};oe.attribute=ie,ie&&ie.data&&(oe.data=ie.data),R[F]=oe,H++}u.attributes=R,u.attributesNum=H,u.index=J}function _(){const k=u.newAttributes;for(let Y=0,Q=k.length;Y<Q;Y++)k[Y]=0}function M(k){x(k,0)}function x(k,Y){const Q=u.newAttributes,J=u.enabledAttributes,R=u.attributeDivisors;Q[k]=1,J[k]===0&&(n.enableVertexAttribArray(k),J[k]=1),R[k]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,Y),R[k]=Y)}function A(){const k=u.newAttributes,Y=u.enabledAttributes;for(let Q=0,J=Y.length;Q<J;Q++)Y[Q]!==k[Q]&&(n.disableVertexAttribArray(Q),Y[Q]=0)}function L(k,Y,Q,J,R,G){i.isWebGL2===!0&&(Q===5124||Q===5125)?n.vertexAttribIPointer(k,Y,Q,R,G):n.vertexAttribPointer(k,Y,Q,J,R,G)}function S(k,Y,Q,J){if(i.isWebGL2===!1&&(k.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const R=J.attributes,G=Q.getAttributes(),H=Y.defaultAttributeValues;for(const se in G){const F=G[se];if(F.location>=0){let $=R[se];if($===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&($=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&($=k.instanceColor)),$!==void 0){const ie=$.normalized,oe=$.itemSize,U=t.get($);if(U===void 0)continue;const Ee=U.buffer,xe=U.type,ve=U.bytesPerElement;if($.isInterleavedBufferAttribute){const fe=$.data,je=fe.stride,Ae=$.offset;if(fe.isInstancedInterleavedBuffer){for(let be=0;be<F.locationSize;be++)x(F.location+be,fe.meshPerAttribute);k.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let be=0;be<F.locationSize;be++)M(F.location+be);n.bindBuffer(34962,Ee);for(let be=0;be<F.locationSize;be++)L(F.location+be,oe/F.locationSize,xe,ie,je*ve,(Ae+oe/F.locationSize*be)*ve)}else{if($.isInstancedBufferAttribute){for(let fe=0;fe<F.locationSize;fe++)x(F.location+fe,$.meshPerAttribute);k.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let fe=0;fe<F.locationSize;fe++)M(F.location+fe);n.bindBuffer(34962,Ee);for(let fe=0;fe<F.locationSize;fe++)L(F.location+fe,oe/F.locationSize,xe,ie,oe*ve,oe/F.locationSize*fe*ve)}}else if(H!==void 0){const ie=H[se];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(F.location,ie);break;case 3:n.vertexAttrib3fv(F.location,ie);break;case 4:n.vertexAttrib4fv(F.location,ie);break;default:n.vertexAttrib1fv(F.location,ie)}}}}A()}function T(){K();for(const k in a){const Y=a[k];for(const Q in Y){const J=Y[Q];for(const R in J)y(J[R].object),delete J[R];delete Y[Q]}delete a[k]}}function P(k){if(a[k.id]===void 0)return;const Y=a[k.id];for(const Q in Y){const J=Y[Q];for(const R in J)y(J[R].object),delete J[R];delete Y[Q]}delete a[k.id]}function Z(k){for(const Y in a){const Q=a[Y];if(Q[k.id]===void 0)continue;const J=Q[k.id];for(const R in J)y(J[R].object),delete J[R];delete Q[k.id]}}function K(){z(),c=!0,u!==l&&(u=l,g(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:Z,initAttributes:_,enableAttribute:M,disableUnusedAttributes:A}}function J1(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,g;if(r)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function eM(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),g=n.getParameter(3379),y=n.getParameter(34076),h=n.getParameter(34921),p=n.getParameter(36347),m=n.getParameter(36348),v=n.getParameter(36349),_=f>0,M=o||e.has("OES_texture_float"),x=_&&M,A=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:y,maxAttributes:h,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:x,maxSamples:A}}function tM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new hr,a=new gn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const g=d.length!==0||f||i!==0||r;return r=f,i=d.length,g},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,g){const y=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!r||y===null||y.length===0||s&&!p)s?c(null):u();else{const v=s?0:i,_=v*4;let M=m.clippingState||null;l.value=M,M=c(y,f,_,g);for(let x=0;x!==_;++x)M[x]=t[x];m.clippingState=M,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,g,y){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,y!==!0||p===null){const m=g+h*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,M=g;_!==h;++_,M+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function nM(n){let e=new WeakMap;function t(o,a){return a===Yc?o.mapping=zs:a===$c&&(o.mapping=Fs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Yc||a===$c)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new my(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class iM extends r0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xs=4,lp=[.125,.215,.35,.446,.526,.582],_r=20,ju=new iM,up=new Je;let Xu=null;const pr=(1+Math.sqrt(5))/2,rs=1/pr,cp=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,pr,rs),new B(0,pr,-rs),new B(rs,0,pr),new B(-rs,0,pr),new B(pr,rs,0),new B(-pr,rs,0)];class fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Xu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu),e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Vo,format:In,encoding:kr,depthBuffer:!1},r=dp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rM(s)),this._blurMaterial=sM(s,e,t)}return r}_compileMaterial(e){const t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,ju)}_sceneToCubeUV(e,t,i,r){const a=new Dn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(up),c.toneMapping=xi,c.autoClear=!1;const g=new Qe({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),y=new Ke(new Ct,g);let h=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,h=!0):(g.color.copy(up),h=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const _=this._cubeSize;Ia(r,v*_,m>2?_:0,_,_),c.setRenderTarget(r),h&&c.render(y,a),c.render(e,a)}y.geometry.dispose(),y.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===zs||e.mapping===Fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ia(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ju)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cp[(r-1)%cp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Ke(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*_r-1),h=s/y,p=isFinite(s)?1+Math.floor(c*h):_r;p>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_r}`);const m=[];let v=0;for(let L=0;L<_r;++L){const S=L/h,T=Math.exp(-S*S/2);m.push(T),L===0?v+=T:L<p&&(v+=2*T)}for(let L=0;L<m.length;L++)m[L]=m[L]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=y,f.mipInt.value=_-i;const M=this._sizeLods[r],x=3*M*(r>_-xs?r-_+xs:0),A=4*(this._cubeSize-M);Ia(t,x,A,3*M,2*M),l.setRenderTarget(t),l.render(d,ju)}}function rM(n){const e=[],t=[],i=[];let r=n;const s=n-xs+1+lp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-xs?l=lp[o-n+xs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,y=6,h=3,p=2,m=1,v=new Float32Array(h*y*g),_=new Float32Array(p*y*g),M=new Float32Array(m*y*g);for(let A=0;A<g;A++){const L=A%3*2/3-1,S=A>2?0:-1,T=[L,S,0,L+2/3,S,0,L+2/3,S+1,0,L,S,0,L+2/3,S+1,0,L,S+1,0];v.set(T,h*y*A),_.set(f,p*y*A);const P=[A,A,A,A,A,A];M.set(P,m*y*A)}const x=new Vr;x.setAttribute("position",new ii(v,h)),x.setAttribute("uv",new ii(_,p)),x.setAttribute("faceIndex",new ii(M,m)),e.push(x),r>xs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function dp(n,e,t){const i=new zr(n,e,t);return i.texture.mapping=zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ia(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function sM(n,e,t){const i=new Float32Array(_r),r=new B(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ed(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function hp(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ed(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function pp(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function ed(){return`

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
	`}function oM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Yc||l===$c,c=l===zs||l===Fs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new fp(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new fp(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function aM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lM(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const y in f)e.update(f[y],34962);const g=d.morphAttributes;for(const y in g){const h=g[y];for(let p=0,m=h.length;p<m;p++)e.update(h[p],34962)}}function u(d){const f=[],g=d.index,y=d.attributes.position;let h=0;if(g!==null){const v=g.array;h=g.version;for(let _=0,M=v.length;_<M;_+=3){const x=v[_+0],A=v[_+1],L=v[_+2];f.push(x,A,A,L,L,x)}}else{const v=y.array;h=y.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const x=_+0,A=_+1,L=_+2;f.push(x,A,A,L,L,x)}}const p=new($g(f)?n0:t0)(f,1);p.version=h;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function c(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function uM(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,g){n.drawElements(s,g,a,f*l),t.update(g,s,1)}function d(f,g,y){if(y===0)return;let h,p;if(r)h=n,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,g,a,f*l,y),t.update(g,s,y)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function cM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function fM(n,e){return n[0]-e[0]}function dM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function hM(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Nt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0;let m=s.get(c);if(m===void 0||m.count!==p){let Q=function(){k.dispose(),s.delete(c),c.removeEventListener("dispose",Q)};var y=Q;m!==void 0&&m.texture.dispose();const M=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let P=0;M===!0&&(P=1),x===!0&&(P=2),A===!0&&(P=3);let Z=c.attributes.position.count*P,K=1;Z>e.maxTextureSize&&(K=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const z=new Float32Array(Z*K*4*p),k=new Jg(z,Z,K,p);k.type=wr,k.needsUpdate=!0;const Y=P*4;for(let J=0;J<p;J++){const R=L[J],G=S[J],H=T[J],se=Z*K*4*J;for(let F=0;F<R.count;F++){const $=F*Y;M===!0&&(o.fromBufferAttribute(R,F),z[se+$+0]=o.x,z[se+$+1]=o.y,z[se+$+2]=o.z,z[se+$+3]=0),x===!0&&(o.fromBufferAttribute(G,F),z[se+$+4]=o.x,z[se+$+5]=o.y,z[se+$+6]=o.z,z[se+$+7]=0),A===!0&&(o.fromBufferAttribute(H,F),z[se+$+8]=o.x,z[se+$+9]=o.y,z[se+$+10]=o.z,z[se+$+11]=H.itemSize===4?o.w:1)}}m={count:p,texture:k,size:new Ie(Z,K)},s.set(c,m),c.addEventListener("dispose",Q)}let v=0;for(let M=0;M<g.length;M++)v+=g[M];const _=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",g),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const h=g===void 0?0:g.length;let p=i[c.id];if(p===void 0||p.length!==h){p=[];for(let x=0;x<h;x++)p[x]=[x,0];i[c.id]=p}for(let x=0;x<h;x++){const A=p[x];A[0]=x,A[1]=g[x]}p.sort(dM);for(let x=0;x<8;x++)x<h&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(fM);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const A=a[x],L=A[0],S=A[1];L!==Number.MAX_SAFE_INTEGER&&S?(m&&c.getAttribute("morphTarget"+x)!==m[L]&&c.setAttribute("morphTarget"+x,m[L]),v&&c.getAttribute("morphNormal"+x)!==v[L]&&c.setAttribute("morphNormal"+x,v[L]),r[x]=S,_+=S):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),v&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const M=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function pM(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const l0=new ln,u0=new Jg,c0=new Jx,f0=new s0,mp=[],gp=[],vp=new Float32Array(16),_p=new Float32Array(9),xp=new Float32Array(4);function Ws(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=mp[r];if(s===void 0&&(s=new Float32Array(r),mp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ul(n,e){let t=gp[e];t===void 0&&(t=new Int32Array(e),gp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function xM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;xp.set(i),n.uniformMatrix2fv(this.addr,!1,xp),yt(t,i)}}function yM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;_p.set(i),n.uniformMatrix3fv(this.addr,!1,_p),yt(t,i)}}function SM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;vp.set(i),n.uniformMatrix4fv(this.addr,!1,vp),yt(t,i)}}function MM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function EM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function TM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function CM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function AM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function PM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||l0,r)}function DM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||c0,r)}function RM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||f0,r)}function IM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||u0,r)}function NM(n){switch(n){case 5126:return mM;case 35664:return gM;case 35665:return vM;case 35666:return _M;case 35674:return xM;case 35675:return yM;case 35676:return SM;case 5124:case 35670:return MM;case 35667:case 35671:return wM;case 35668:case 35672:return EM;case 35669:case 35673:return bM;case 5125:return TM;case 36294:return CM;case 36295:return AM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return IM}}function kM(n,e){n.uniform1fv(this.addr,e)}function zM(n,e){const t=Ws(e,this.size,2);n.uniform2fv(this.addr,t)}function FM(n,e){const t=Ws(e,this.size,3);n.uniform3fv(this.addr,t)}function OM(n,e){const t=Ws(e,this.size,4);n.uniform4fv(this.addr,t)}function UM(n,e){const t=Ws(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function BM(n,e){const t=Ws(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function VM(n,e){const t=Ws(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function GM(n,e){n.uniform1iv(this.addr,e)}function HM(n,e){n.uniform2iv(this.addr,e)}function WM(n,e){n.uniform3iv(this.addr,e)}function jM(n,e){n.uniform4iv(this.addr,e)}function XM(n,e){n.uniform1uiv(this.addr,e)}function qM(n,e){n.uniform2uiv(this.addr,e)}function YM(n,e){n.uniform3uiv(this.addr,e)}function $M(n,e){n.uniform4uiv(this.addr,e)}function ZM(n,e,t){const i=this.cache,r=e.length,s=Ul(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||l0,s[o])}function KM(n,e,t){const i=this.cache,r=e.length,s=Ul(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||c0,s[o])}function QM(n,e,t){const i=this.cache,r=e.length,s=Ul(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||f0,s[o])}function JM(n,e,t){const i=this.cache,r=e.length,s=Ul(t,r);xt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||u0,s[o])}function ew(n){switch(n){case 5126:return kM;case 35664:return zM;case 35665:return FM;case 35666:return OM;case 35674:return UM;case 35675:return BM;case 35676:return VM;case 5124:case 35670:return GM;case 35667:case 35671:return HM;case 35668:case 35672:return WM;case 35669:case 35673:return jM;case 5125:return XM;case 36294:return qM;case 36295:return YM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return ZM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return QM;case 36289:case 36303:case 36311:case 36292:return JM}}class tw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=NM(t.type)}}class nw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=ew(t.type)}}class iw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const qu=/(\w+)(\])?(\[|\.)?/g;function yp(n,e){n.seq.push(e),n.map[e.id]=e}function rw(n,e,t){const i=n.name,r=i.length;for(qu.lastIndex=0;;){const s=qu.exec(i),o=qu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){yp(t,u===void 0?new tw(a,n,e):new nw(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new iw(a),yp(t,d)),t=d}}}class qa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);rw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Sp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let sw=0;function ow(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function aw(n){switch(n){case kr:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Mp(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ow(n.getShaderSource(e),o)}else return r}function lw(n,e){const t=aw(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function uw(n,e){let t;switch(e){case bx:t="Linear";break;case Tx:t="Reinhard";break;case Cx:t="OptimizedCineon";break;case Ax:t="ACESFilmic";break;case Lx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ho).join(`
`)}function fw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dw(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ho(n){return n!==""}function wp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ep(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(n){return n.replace(hw,pw)}function pw(n,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Jc(t)}const mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(n){return n.replace(mw,gw)}function gw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Hg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fo&&(e="SHADOWMAP_TYPE_VSM"),e}function _w(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case zs:case Fs:e="ENVMAP_TYPE_CUBE";break;case zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function yw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xg:e="ENVMAP_BLENDING_MULTIPLY";break;case wx:e="ENVMAP_BLENDING_MIX";break;case Ex:e="ENVMAP_BLENDING_ADD";break}return e}function Sw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Mw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vw(t),u=_w(t),c=xw(t),d=yw(t),f=Sw(t),g=t.isWebGL2?"":cw(t),y=fw(s),h=r.createProgram();let p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[y].filter(ho).join(`
`),p.length>0&&(p+=`
`),m=[g,y].filter(ho).join(`
`),m.length>0&&(m+=`
`)):(p=[Tp(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),m=[g,Tp(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Le.tonemapping_pars_fragment:"",t.toneMapping!==xi?uw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,lw("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),o=Jc(o),o=wp(o,t),o=Ep(o,t),a=Jc(a),a=wp(a,t),a=Ep(a,t),o=bp(o),a=bp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+p+o,M=v+m+a,x=Sp(r,35633,_),A=Sp(r,35632,M);if(r.attachShader(h,x),r.attachShader(h,A),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),n.debug.checkShaderErrors){const T=r.getProgramInfoLog(h).trim(),P=r.getShaderInfoLog(x).trim(),Z=r.getShaderInfoLog(A).trim();let K=!0,z=!0;if(r.getProgramParameter(h,35714)===!1){K=!1;const k=Mp(r,x,"vertex"),Y=Mp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+T+`
`+k+`
`+Y)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||Z==="")&&(z=!1);z&&(this.diagnostics={runnable:K,programLog:T,vertexShader:{log:P,prefix:p},fragmentShader:{log:Z,prefix:m}})}r.deleteShader(x),r.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new qa(r,h)),L};let S;return this.getAttributes=function(){return S===void 0&&(S=dw(r,h)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=sw++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=A,this}let ww=0;class Ew{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bw(e),t.set(e,i)),i}}class bw{constructor(e){this.id=ww++,this.code=e,this.usedTimes=0}}function Tw(n,e,t,i,r,s,o){const a=new Jf,l=new Ew,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(S,T,P,Z,K){const z=Z.fog,k=K.geometry,Y=S.isMeshStandardMaterial?Z.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),J=Q&&Q.mapping===zl?Q.image.height:null,R=y[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const G=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,H=G!==void 0?G.length:0;let se=0;k.morphAttributes.position!==void 0&&(se=1),k.morphAttributes.normal!==void 0&&(se=2),k.morphAttributes.color!==void 0&&(se=3);let F,$,ie,oe;if(R){const je=Jn[R];F=je.vertexShader,$=je.fragmentShader}else F=S.vertexShader,$=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),oe=l.getFragmentShaderID(S);const U=n.getRenderTarget(),Ee=S.alphaTest>0,xe=S.clearcoat>0,ve=S.iridescence>0;return{isWebGL2:c,shaderID:R,shaderName:S.type,vertexShader:F,fragmentShader:$,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:f,outputEncoding:U===null?n.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:kr,map:!!S.map,matcap:!!S.matcap,envMap:!!Q,envMapMode:Q&&Q.mapping,envMapCubeUVHeight:J,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===$x,tangentSpaceNormalMap:S.normalMapType===Yx,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Ze,clearcoat:xe,clearcoatMap:xe&&!!S.clearcoatMap,clearcoatRoughnessMap:xe&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!S.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!S.iridescenceMap,iridescenceThicknessMap:ve&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===Ts,alphaMap:!!S.alphaMap,alphaTest:Ee,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!k.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!z,useFog:S.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:xi,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===At,flipSided:S.side===_n,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)T.push(P),T.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(m(T,S),v(T,S),T.push(n.outputEncoding)),T.push(S.customProgramCacheKey),T.join()}function m(S,T){S.push(T.precision),S.push(T.outputEncoding),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.combine),S.push(T.vertexUvs),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),S.push(a.mask)}function _(S){const T=y[S.type];let P;if(T){const Z=Jn[T];P=fy.clone(Z.uniforms)}else P=S.uniforms;return P}function M(S,T){let P;for(let Z=0,K=u.length;Z<K;Z++){const z=u[Z];if(z.cacheKey===T){P=z,++P.usedTimes;break}}return P===void 0&&(P=new Mw(n,T,S,s),u.push(P)),P}function x(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function L(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:_,acquireProgram:M,releaseProgram:x,releaseShaderCache:A,programs:u,dispose:L}}function Cw(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Aw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ap(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,g,y,h,p){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:g,groupOrder:y,renderOrder:d.renderOrder,z:h,group:p},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=g,m.groupOrder=y,m.renderOrder=d.renderOrder,m.z=h,m.group=p),e++,m}function a(d,f,g,y,h,p){const m=o(d,f,g,y,h,p);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function l(d,f,g,y,h,p){const m=o(d,f,g,y,h,p);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function u(d,f){t.length>1&&t.sort(d||Aw),i.length>1&&i.sort(f||Cp),r.length>1&&r.sort(f||Cp)}function c(){for(let d=e,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function Lw(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ap,n.set(i,[o])):r>=s.length?(o=new Ap,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Pw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Je};break;case"SpotLight":t={position:new B,direction:new B,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Dw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Rw=0;function Iw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Nw(n,e){const t=new Pw,i=Dw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new B);const s=new B,o=new zt,a=new zt;function l(c,d){let f=0,g=0,y=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let h=0,p=0,m=0,v=0,_=0,M=0,x=0,A=0,L=0,S=0;c.sort(Iw);const T=d!==!0?Math.PI:1;for(let Z=0,K=c.length;Z<K;Z++){const z=c[Z],k=z.color,Y=z.intensity,Q=z.distance,J=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=k.r*Y*T,g+=k.g*Y*T,y+=k.b*Y*T;else if(z.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(z.sh.coefficients[R],Y);else if(z.isDirectionalLight){const R=t.get(z);if(R.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const G=z.shadow,H=i.get(z);H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,r.directionalShadow[h]=H,r.directionalShadowMap[h]=J,r.directionalShadowMatrix[h]=z.shadow.matrix,M++}r.directional[h]=R,h++}else if(z.isSpotLight){const R=t.get(z);R.position.setFromMatrixPosition(z.matrixWorld),R.color.copy(k).multiplyScalar(Y*T),R.distance=Q,R.coneCos=Math.cos(z.angle),R.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),R.decay=z.decay,r.spot[m]=R;const G=z.shadow;if(z.map&&(r.spotLightMap[L]=z.map,L++,G.updateMatrices(z),z.castShadow&&S++),r.spotLightMatrix[m]=G.matrix,z.castShadow){const H=i.get(z);H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,r.spotShadow[m]=H,r.spotShadowMap[m]=J,A++}m++}else if(z.isRectAreaLight){const R=t.get(z);R.color.copy(k).multiplyScalar(Y),R.halfWidth.set(z.width*.5,0,0),R.halfHeight.set(0,z.height*.5,0),r.rectArea[v]=R,v++}else if(z.isPointLight){const R=t.get(z);if(R.color.copy(z.color).multiplyScalar(z.intensity*T),R.distance=z.distance,R.decay=z.decay,z.castShadow){const G=z.shadow,H=i.get(z);H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,H.shadowCameraNear=G.camera.near,H.shadowCameraFar=G.camera.far,r.pointShadow[p]=H,r.pointShadowMap[p]=J,r.pointShadowMatrix[p]=z.shadow.matrix,x++}r.point[p]=R,p++}else if(z.isHemisphereLight){const R=t.get(z);R.skyColor.copy(z.color).multiplyScalar(Y*T),R.groundColor.copy(z.groundColor).multiplyScalar(Y*T),r.hemi[_]=R,_++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=y;const P=r.hash;(P.directionalLength!==h||P.pointLength!==p||P.spotLength!==m||P.rectAreaLength!==v||P.hemiLength!==_||P.numDirectionalShadows!==M||P.numPointShadows!==x||P.numSpotShadows!==A||P.numSpotMaps!==L)&&(r.directional.length=h,r.spot.length=m,r.rectArea.length=v,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=A+L-S,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=S,P.directionalLength=h,P.pointLength=p,P.spotLength=m,P.rectAreaLength=v,P.hemiLength=_,P.numDirectionalShadows=M,P.numPointShadows=x,P.numSpotShadows=A,P.numSpotMaps=L,r.version=Rw++)}function u(c,d){let f=0,g=0,y=0,h=0,p=0;const m=d.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){const M=c[v];if(M.isDirectionalLight){const x=r.directional[f];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(M.isSpotLight){const x=r.spot[y];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),y++}else if(M.isRectAreaLight){const x=r.rectArea[h];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),h++}else if(M.isPointLight){const x=r.point[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),g++}else if(M.isHemisphereLight){const x=r.hemi[p];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),p++}}}return{setup:l,setupView:u,state:r}}function Lp(n,e){const t=new Nw(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function kw(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Lp(n,e),t.set(s,[l])):o>=a.length?(l=new Lp(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class zw extends Ol{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fw extends Ol{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uw=`uniform sampler2D shadow_pass;
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
}`;function Bw(n,e,t){let i=new o0;const r=new Ie,s=new Ie,o=new Nt,a=new zw({depthPacking:qx}),l=new Fw,u={},c=t.maxTextureSize,d={[Zi]:_n,[_n]:Zi,[At]:At},f=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Ow,fragmentShader:Uw}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const y=new Vr;y.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Ke(y,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gg,this.render=function(M,x,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const L=n.getRenderTarget(),S=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Wi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let Z=0,K=M.length;Z<K;Z++){const z=M[Z],k=z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const Y=k.getFrameExtents();if(r.multiply(Y),s.copy(k.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Y.x),r.x=s.x*Y.x,k.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Y.y),r.y=s.y*Y.y,k.mapSize.y=s.y)),k.map===null){const J=this.type!==fo?{minFilter:It,magFilter:It}:{};k.map=new zr(r.x,r.y,J),k.map.texture.name=z.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const Q=k.getViewportCount();for(let J=0;J<Q;J++){const R=k.getViewport(J);o.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),P.viewport(o),k.updateMatrices(z,J),i=k.getFrustum(),_(x,A,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===fo&&m(k,A),k.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(L,S,T)};function m(M,x){const A=e.update(h);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new zr(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(x,null,A,f,h,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(x,null,A,g,h,null)}function v(M,x,A,L,S,T){let P=null;const Z=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(Z!==void 0)P=Z;else if(P=A.isPointLight===!0?l:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const K=P.uuid,z=x.uuid;let k=u[K];k===void 0&&(k={},u[K]=k);let Y=k[z];Y===void 0&&(Y=P.clone(),k[z]=Y),P=Y}return P.visible=x.visible,P.wireframe=x.wireframe,T===fo?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:d[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(A.matrixWorld),P.nearDistance=L,P.farDistance=S),P}function _(M,x,A,L,S){if(M.visible===!1)return;if(M.layers.test(x.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===fo)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const Z=e.update(M),K=M.material;if(Array.isArray(K)){const z=Z.groups;for(let k=0,Y=z.length;k<Y;k++){const Q=z[k],J=K[Q.materialIndex];if(J&&J.visible){const R=v(M,J,L,A.near,A.far,S);n.renderBufferDirect(A,null,Z,R,M,Q)}}}else if(K.visible){const z=v(M,K,L,A.near,A.far,S);n.renderBufferDirect(A,null,Z,z,M,null)}}const P=M.children;for(let Z=0,K=P.length;Z<K;Z++)_(P[Z],x,A,L,S)}}function Vw(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const j=new Nt;let te=null;const de=new Nt(0,0,0,0);return{setMask:function(ye){te!==ye&&!D&&(n.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){D=ye},setClear:function(ye,We,Mt,Ut,ir){ir===!0&&(ye*=Ut,We*=Ut,Mt*=Ut),j.set(ye,We,Mt,Ut),de.equals(j)===!1&&(n.clearColor(ye,We,Mt,Ut),de.copy(j))},reset:function(){D=!1,te=null,de.set(-1,0,0,0)}}}function s(){let D=!1,j=null,te=null,de=null;return{setTest:function(ye){ye?Ee(2929):xe(2929)},setMask:function(ye){j!==ye&&!D&&(n.depthMask(ye),j=ye)},setFunc:function(ye){if(te!==ye){switch(ye){case gx:n.depthFunc(512);break;case vx:n.depthFunc(519);break;case _x:n.depthFunc(513);break;case qc:n.depthFunc(515);break;case xx:n.depthFunc(514);break;case yx:n.depthFunc(518);break;case Sx:n.depthFunc(516);break;case Mx:n.depthFunc(517);break;default:n.depthFunc(515)}te=ye}},setLocked:function(ye){D=ye},setClear:function(ye){de!==ye&&(n.clearDepth(ye),de=ye)},reset:function(){D=!1,j=null,te=null,de=null}}}function o(){let D=!1,j=null,te=null,de=null,ye=null,We=null,Mt=null,Ut=null,ir=null;return{setTest:function(tt){D||(tt?Ee(2960):xe(2960))},setMask:function(tt){j!==tt&&!D&&(n.stencilMask(tt),j=tt)},setFunc:function(tt,ri,bn){(te!==tt||de!==ri||ye!==bn)&&(n.stencilFunc(tt,ri,bn),te=tt,de=ri,ye=bn)},setOp:function(tt,ri,bn){(We!==tt||Mt!==ri||Ut!==bn)&&(n.stencilOp(tt,ri,bn),We=tt,Mt=ri,Ut=bn)},setLocked:function(tt){D=tt},setClear:function(tt){ir!==tt&&(n.clearStencil(tt),ir=tt)},reset:function(){D=!1,j=null,te=null,de=null,ye=null,We=null,Mt=null,Ut=null,ir=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},g={},y=new WeakMap,h=[],p=null,m=!1,v=null,_=null,M=null,x=null,A=null,L=null,S=null,T=!1,P=null,Z=null,K=null,z=null,k=null;const Y=n.getParameter(35661);let Q=!1,J=0;const R=n.getParameter(7938);R.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(R)[1]),Q=J>=1):R.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),Q=J>=2);let G=null,H={};const se=n.getParameter(3088),F=n.getParameter(2978),$=new Nt().fromArray(se),ie=new Nt().fromArray(F);function oe(D,j,te){const de=new Uint8Array(4),ye=n.createTexture();n.bindTexture(D,ye),n.texParameteri(D,10241,9728),n.texParameteri(D,10240,9728);for(let We=0;We<te;We++)n.texImage2D(j+We,0,6408,1,1,0,6408,5121,de);return ye}const U={};U[3553]=oe(3553,3553,1),U[34067]=oe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ee(2929),l.setFunc(qc),ut(!1),jt(_h),Ee(2884),St(Wi);function Ee(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function xe(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function ve(D,j){return g[D]!==j?(n.bindFramebuffer(D,j),g[D]=j,i&&(D===36009&&(g[36160]=j),D===36160&&(g[36009]=j)),!0):!1}function fe(D,j){let te=h,de=!1;if(D)if(te=y.get(j),te===void 0&&(te=[],y.set(j,te)),D.isWebGLMultipleRenderTargets){const ye=D.texture;if(te.length!==ye.length||te[0]!==36064){for(let We=0,Mt=ye.length;We<Mt;We++)te[We]=36064+We;te.length=ye.length,de=!0}}else te[0]!==36064&&(te[0]=36064,de=!0);else te[0]!==1029&&(te[0]=1029,de=!0);de&&(t.isWebGL2?n.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function je(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const Ae={[ss]:32774,[sx]:32778,[ox]:32779};if(i)Ae[Mh]=32775,Ae[wh]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ae[Mh]=D.MIN_EXT,Ae[wh]=D.MAX_EXT)}const be={[ax]:0,[lx]:1,[ux]:768,[Wg]:770,[mx]:776,[hx]:774,[fx]:772,[cx]:769,[jg]:771,[px]:775,[dx]:773};function St(D,j,te,de,ye,We,Mt,Ut){if(D===Wi){m===!0&&(xe(3042),m=!1);return}if(m===!1&&(Ee(3042),m=!0),D!==rx){if(D!==v||Ut!==T){if((_!==ss||A!==ss)&&(n.blendEquation(32774),_=ss,A=ss),Ut)switch(D){case Ts:n.blendFuncSeparate(1,771,1,771);break;case xh:n.blendFunc(1,1);break;case yh:n.blendFuncSeparate(0,769,0,1);break;case Sh:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ts:n.blendFuncSeparate(770,771,1,771);break;case xh:n.blendFunc(770,1);break;case yh:n.blendFuncSeparate(0,769,0,1);break;case Sh:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,x=null,L=null,S=null,v=D,T=Ut}return}ye=ye||j,We=We||te,Mt=Mt||de,(j!==_||ye!==A)&&(n.blendEquationSeparate(Ae[j],Ae[ye]),_=j,A=ye),(te!==M||de!==x||We!==L||Mt!==S)&&(n.blendFuncSeparate(be[te],be[de],be[We],be[Mt]),M=te,x=de,L=We,S=Mt),v=D,T=!1}function Ot(D,j){D.side===At?xe(2884):Ee(2884);let te=D.side===_n;j&&(te=!te),ut(te),D.blending===Ts&&D.transparent===!1?St(Wi):St(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const de=D.stencilWrite;u.setTest(de),de&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ee(32926):xe(32926)}function ut(D){P!==D&&(D?n.frontFace(2304):n.frontFace(2305),P=D)}function jt(D){D!==nx?(Ee(2884),D!==Z&&(D===_h?n.cullFace(1029):D===ix?n.cullFace(1028):n.cullFace(1032))):xe(2884),Z=D}function at(D){D!==K&&(Q&&n.lineWidth(D),K=D)}function Ge(D,j,te){D?(Ee(32823),(z!==j||k!==te)&&(n.polygonOffset(j,te),z=j,k=te)):xe(32823)}function En(D){D?Ee(3089):xe(3089)}function Jt(D){D===void 0&&(D=33984+Y-1),G!==D&&(n.activeTexture(D),G=D)}function b(D,j,te){te===void 0&&(G===null?te=33984+Y-1:te=G);let de=H[te];de===void 0&&(de={type:void 0,texture:void 0},H[te]=de),(de.type!==D||de.texture!==j)&&(G!==te&&(n.activeTexture(te),G=te),n.bindTexture(D,j||U[D]),de.type=D,de.texture=j)}function w(){const D=H[G];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function I(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(D){$.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),$.copy(D))}function ge(D){ie.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ie.copy(D))}function ke(D,j){let te=d.get(j);te===void 0&&(te=new WeakMap,d.set(j,te));let de=te.get(D);de===void 0&&(de=n.getUniformBlockIndex(j,D.name),te.set(D,de))}function ze(D,j){const de=d.get(j).get(D);c.get(j)!==de&&(n.uniformBlockBinding(j,de,D.__bindingPointIndex),c.set(j,de))}function qe(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},G=null,H={},g={},y=new WeakMap,h=[],p=null,m=!1,v=null,_=null,M=null,x=null,A=null,L=null,S=null,T=!1,P=null,Z=null,K=null,z=null,k=null,$.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ee,disable:xe,bindFramebuffer:ve,drawBuffers:fe,useProgram:je,setBlending:St,setMaterial:Ot,setFlipSided:ut,setCullFace:jt,setLineWidth:at,setPolygonOffset:Ge,setScissorTest:En,activeTexture:Jt,bindTexture:b,unbindTexture:w,compressedTexImage2D:W,compressedTexImage3D:ne,texImage2D:me,texImage3D:ue,updateUBOMapping:ke,uniformBlockBinding:ze,texStorage2D:I,texStorage3D:ce,texSubImage2D:re,texSubImage3D:le,compressedTexSubImage2D:Te,compressedTexSubImage3D:C,scissor:_e,viewport:ge,reset:qe}}function Gw(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,w){return m?new OffscreenCanvas(b,w):Ho("canvas")}function _(b,w,W,ne){let re=1;if((b.width>ne||b.height>ne)&&(re=ne/Math.max(b.width,b.height)),re<1||w===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const le=w?Qc:Math.floor,Te=le(re*b.width),C=le(re*b.height);h===void 0&&(h=v(Te,C));const I=W?v(Te,C):h;return I.width=Te,I.height=C,I.getContext("2d").drawImage(b,0,0,Te,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Te+"x"+C+")."),I}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function M(b){return Kh(b.width)&&Kh(b.height)}function x(b){return a?!1:b.wrapS!==Xn||b.wrapT!==Xn||b.minFilter!==It&&b.minFilter!==Pn}function A(b,w){return b.generateMipmaps&&w&&b.minFilter!==It&&b.minFilter!==Pn}function L(b){n.generateMipmap(b)}function S(b,w,W,ne,re=!1){if(a===!1)return w;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let le=w;return w===6403&&(W===5126&&(le=33326),W===5131&&(le=33325),W===5121&&(le=33321)),w===33319&&(W===5126&&(le=33328),W===5131&&(le=33327),W===5121&&(le=33323)),w===6408&&(W===5126&&(le=34836),W===5131&&(le=34842),W===5121&&(le=ne===Ze&&re===!1?35907:32856),W===32819&&(le=32854),W===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function T(b,w,W){return A(b,W)===!0||b.isFramebufferTexture&&b.minFilter!==It&&b.minFilter!==Pn?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function P(b){return b===It||b===Eh||b===gu?9728:9729}function Z(b){const w=b.target;w.removeEventListener("dispose",Z),z(w),w.isVideoTexture&&y.delete(w)}function K(b){const w=b.target;w.removeEventListener("dispose",K),Y(w)}function z(b){const w=i.get(b);if(w.__webglInit===void 0)return;const W=b.source,ne=p.get(W);if(ne){const re=ne[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&k(b),Object.keys(ne).length===0&&p.delete(W)}i.remove(b)}function k(b){const w=i.get(b);n.deleteTexture(w.__webglTexture);const W=b.source,ne=p.get(W);delete ne[w.__cacheKey],o.memory.textures--}function Y(b){const w=b.texture,W=i.get(b),ne=i.get(w);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)n.deleteFramebuffer(W.__webglFramebuffer[re]),W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[re]);else{if(n.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let re=0;re<W.__webglColorRenderbuffer.length;re++)W.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[re]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let re=0,le=w.length;re<le;re++){const Te=i.get(w[re]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(w[re])}i.remove(w),i.remove(b)}let Q=0;function J(){Q=0}function R(){const b=Q;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),Q+=1,b}function G(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.encoding),w.join()}function H(b,w){const W=i.get(b);if(b.isVideoTexture&&En(b),b.isRenderTargetTexture===!1&&b.version>0&&W.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(W,b,w);return}}t.bindTexture(3553,W.__webglTexture,33984+w)}function se(b,w){const W=i.get(b);if(b.version>0&&W.__version!==b.version){xe(W,b,w);return}t.bindTexture(35866,W.__webglTexture,33984+w)}function F(b,w){const W=i.get(b);if(b.version>0&&W.__version!==b.version){xe(W,b,w);return}t.bindTexture(32879,W.__webglTexture,33984+w)}function $(b,w){const W=i.get(b);if(b.version>0&&W.__version!==b.version){ve(W,b,w);return}t.bindTexture(34067,W.__webglTexture,33984+w)}const ie={[ji]:10497,[Xn]:33071,[Zc]:33648},oe={[It]:9728,[Eh]:9984,[gu]:9986,[Pn]:9729,[Px]:9985,[Bo]:9987};function U(b,w,W){if(W?(n.texParameteri(b,10242,ie[w.wrapS]),n.texParameteri(b,10243,ie[w.wrapT]),(b===32879||b===35866)&&n.texParameteri(b,32882,ie[w.wrapR]),n.texParameteri(b,10240,oe[w.magFilter]),n.texParameteri(b,10241,oe[w.minFilter])):(n.texParameteri(b,10242,33071),n.texParameteri(b,10243,33071),(b===32879||b===35866)&&n.texParameteri(b,32882,33071),(w.wrapS!==Xn||w.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,10240,P(w.magFilter)),n.texParameteri(b,10241,P(w.minFilter)),w.minFilter!==It&&w.minFilter!==Pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===It||w.minFilter!==gu&&w.minFilter!==Bo||w.type===wr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Vo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Ee(b,w){let W=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",Z));const ne=w.source;let re=p.get(ne);re===void 0&&(re={},p.set(ne,re));const le=G(w);if(le!==b.__cacheKey){re[le]===void 0&&(re[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),re[le].usedTimes++;const Te=re[b.__cacheKey];Te!==void 0&&(re[b.__cacheKey].usedTimes--,Te.usedTimes===0&&k(w)),b.__cacheKey=le,b.__webglTexture=re[le].texture}return W}function xe(b,w,W){let ne=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=35866),w.isData3DTexture&&(ne=32879);const re=Ee(b,w),le=w.source;t.bindTexture(ne,b.__webglTexture,33984+W);const Te=i.get(le);if(le.version!==Te.__version||re===!0){t.activeTexture(33984+W),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const C=x(w)&&M(w.image)===!1;let I=_(w.image,C,!1,c);I=Jt(w,I);const ce=M(I)||a,me=s.convert(w.format,w.encoding);let ue=s.convert(w.type),_e=S(w.internalFormat,me,ue,w.encoding,w.isVideoTexture);U(ne,w,ce);let ge;const ke=w.mipmaps,ze=a&&w.isVideoTexture!==!0,qe=Te.__version===void 0||re===!0,D=T(w,I,ce);if(w.isDepthTexture)_e=6402,a?w.type===wr?_e=36012:w.type===Mr?_e=33190:w.type===Cs?_e=35056:_e=33189:w.type===wr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Tr&&_e===6402&&w.type!==Yg&&w.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Mr,ue=s.convert(w.type)),w.format===Os&&_e===6402&&(_e=34041,w.type!==Cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Cs,ue=s.convert(w.type))),qe&&(ze?t.texStorage2D(3553,1,_e,I.width,I.height):t.texImage2D(3553,0,_e,I.width,I.height,0,me,ue,null));else if(w.isDataTexture)if(ke.length>0&&ce){ze&&qe&&t.texStorage2D(3553,D,_e,ke[0].width,ke[0].height);for(let j=0,te=ke.length;j<te;j++)ge=ke[j],ze?t.texSubImage2D(3553,j,0,0,ge.width,ge.height,me,ue,ge.data):t.texImage2D(3553,j,_e,ge.width,ge.height,0,me,ue,ge.data);w.generateMipmaps=!1}else ze?(qe&&t.texStorage2D(3553,D,_e,I.width,I.height),t.texSubImage2D(3553,0,0,0,I.width,I.height,me,ue,I.data)):t.texImage2D(3553,0,_e,I.width,I.height,0,me,ue,I.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ze&&qe&&t.texStorage3D(35866,D,_e,ke[0].width,ke[0].height,I.depth);for(let j=0,te=ke.length;j<te;j++)ge=ke[j],w.format!==In?me!==null?ze?t.compressedTexSubImage3D(35866,j,0,0,0,ge.width,ge.height,I.depth,me,ge.data,0,0):t.compressedTexImage3D(35866,j,_e,ge.width,ge.height,I.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(35866,j,0,0,0,ge.width,ge.height,I.depth,me,ue,ge.data):t.texImage3D(35866,j,_e,ge.width,ge.height,I.depth,0,me,ue,ge.data)}else{ze&&qe&&t.texStorage2D(3553,D,_e,ke[0].width,ke[0].height);for(let j=0,te=ke.length;j<te;j++)ge=ke[j],w.format!==In?me!==null?ze?t.compressedTexSubImage2D(3553,j,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(3553,j,_e,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,j,0,0,ge.width,ge.height,me,ue,ge.data):t.texImage2D(3553,j,_e,ge.width,ge.height,0,me,ue,ge.data)}else if(w.isDataArrayTexture)ze?(qe&&t.texStorage3D(35866,D,_e,I.width,I.height,I.depth),t.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,me,ue,I.data)):t.texImage3D(35866,0,_e,I.width,I.height,I.depth,0,me,ue,I.data);else if(w.isData3DTexture)ze?(qe&&t.texStorage3D(32879,D,_e,I.width,I.height,I.depth),t.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,me,ue,I.data)):t.texImage3D(32879,0,_e,I.width,I.height,I.depth,0,me,ue,I.data);else if(w.isFramebufferTexture){if(qe)if(ze)t.texStorage2D(3553,D,_e,I.width,I.height);else{let j=I.width,te=I.height;for(let de=0;de<D;de++)t.texImage2D(3553,de,_e,j,te,0,me,ue,null),j>>=1,te>>=1}}else if(ke.length>0&&ce){ze&&qe&&t.texStorage2D(3553,D,_e,ke[0].width,ke[0].height);for(let j=0,te=ke.length;j<te;j++)ge=ke[j],ze?t.texSubImage2D(3553,j,0,0,me,ue,ge):t.texImage2D(3553,j,_e,me,ue,ge);w.generateMipmaps=!1}else ze?(qe&&t.texStorage2D(3553,D,_e,I.width,I.height),t.texSubImage2D(3553,0,0,0,me,ue,I)):t.texImage2D(3553,0,_e,me,ue,I);A(w,ce)&&L(ne),Te.__version=le.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function ve(b,w,W){if(w.image.length!==6)return;const ne=Ee(b,w),re=w.source;t.bindTexture(34067,b.__webglTexture,33984+W);const le=i.get(re);if(re.version!==le.__version||ne===!0){t.activeTexture(33984+W),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const Te=w.isCompressedTexture||w.image[0].isCompressedTexture,C=w.image[0]&&w.image[0].isDataTexture,I=[];for(let j=0;j<6;j++)!Te&&!C?I[j]=_(w.image[j],!1,!0,u):I[j]=C?w.image[j].image:w.image[j],I[j]=Jt(w,I[j]);const ce=I[0],me=M(ce)||a,ue=s.convert(w.format,w.encoding),_e=s.convert(w.type),ge=S(w.internalFormat,ue,_e,w.encoding),ke=a&&w.isVideoTexture!==!0,ze=le.__version===void 0||ne===!0;let qe=T(w,ce,me);U(34067,w,me);let D;if(Te){ke&&ze&&t.texStorage2D(34067,qe,ge,ce.width,ce.height);for(let j=0;j<6;j++){D=I[j].mipmaps;for(let te=0;te<D.length;te++){const de=D[te];w.format!==In?ue!==null?ke?t.compressedTexSubImage2D(34069+j,te,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(34069+j,te,ge,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(34069+j,te,0,0,de.width,de.height,ue,_e,de.data):t.texImage2D(34069+j,te,ge,de.width,de.height,0,ue,_e,de.data)}}}else{D=w.mipmaps,ke&&ze&&(D.length>0&&qe++,t.texStorage2D(34067,qe,ge,I[0].width,I[0].height));for(let j=0;j<6;j++)if(C){ke?t.texSubImage2D(34069+j,0,0,0,I[j].width,I[j].height,ue,_e,I[j].data):t.texImage2D(34069+j,0,ge,I[j].width,I[j].height,0,ue,_e,I[j].data);for(let te=0;te<D.length;te++){const ye=D[te].image[j].image;ke?t.texSubImage2D(34069+j,te+1,0,0,ye.width,ye.height,ue,_e,ye.data):t.texImage2D(34069+j,te+1,ge,ye.width,ye.height,0,ue,_e,ye.data)}}else{ke?t.texSubImage2D(34069+j,0,0,0,ue,_e,I[j]):t.texImage2D(34069+j,0,ge,ue,_e,I[j]);for(let te=0;te<D.length;te++){const de=D[te];ke?t.texSubImage2D(34069+j,te+1,0,0,ue,_e,de.image[j]):t.texImage2D(34069+j,te+1,ge,ue,_e,de.image[j])}}}A(w,me)&&L(34067),le.__version=re.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function fe(b,w,W,ne,re){const le=s.convert(W.format,W.encoding),Te=s.convert(W.type),C=S(W.internalFormat,le,Te,W.encoding);i.get(w).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,C,w.width,w.height,w.depth,0,le,Te,null):t.texImage2D(re,0,C,w.width,w.height,0,le,Te,null)),t.bindFramebuffer(36160,b),Ge(w)?f.framebufferTexture2DMultisampleEXT(36160,ne,re,i.get(W).__webglTexture,0,at(w)):(re===3553||re>=34069&&re<=34074)&&n.framebufferTexture2D(36160,ne,re,i.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function je(b,w,W){if(n.bindRenderbuffer(36161,b),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(W||Ge(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===wr?ne=36012:re.type===Mr&&(ne=33190));const le=at(w);Ge(w)?f.renderbufferStorageMultisampleEXT(36161,le,ne,w.width,w.height):n.renderbufferStorageMultisample(36161,le,ne,w.width,w.height)}else n.renderbufferStorage(36161,ne,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,b)}else if(w.depthBuffer&&w.stencilBuffer){const ne=at(w);W&&Ge(w)===!1?n.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):Ge(w)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,b)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<ne.length;re++){const le=ne[re],Te=s.convert(le.format,le.encoding),C=s.convert(le.type),I=S(le.internalFormat,Te,C,le.encoding),ce=at(w);W&&Ge(w)===!1?n.renderbufferStorageMultisample(36161,ce,I,w.width,w.height):Ge(w)?f.renderbufferStorageMultisampleEXT(36161,ce,I,w.width,w.height):n.renderbufferStorage(36161,I,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function Ae(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);const ne=i.get(w.depthTexture).__webglTexture,re=at(w);if(w.depthTexture.format===Tr)Ge(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,re):n.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===Os)Ge(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,re):n.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function be(b){const w=i.get(b),W=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,b)}else if(W){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=n.createRenderbuffer(),je(w.__webglDepthbuffer[ne],b,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),je(w.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function St(b,w,W){const ne=i.get(b);w!==void 0&&fe(ne.__webglFramebuffer,b,b.texture,36064,3553),W!==void 0&&be(b)}function Ot(b){const w=b.texture,W=i.get(b),ne=i.get(w);b.addEventListener("dispose",K),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=w.version,o.memory.textures++);const re=b.isWebGLCubeRenderTarget===!0,le=b.isWebGLMultipleRenderTargets===!0,Te=M(b)||a;if(re){W.__webglFramebuffer=[];for(let C=0;C<6;C++)W.__webglFramebuffer[C]=n.createFramebuffer()}else{if(W.__webglFramebuffer=n.createFramebuffer(),le)if(r.drawBuffers){const C=b.texture;for(let I=0,ce=C.length;I<ce;I++){const me=i.get(C[I]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Ge(b)===!1){const C=le?w:[w];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let I=0;I<C.length;I++){const ce=C[I];W.__webglColorRenderbuffer[I]=n.createRenderbuffer(),n.bindRenderbuffer(36161,W.__webglColorRenderbuffer[I]);const me=s.convert(ce.format,ce.encoding),ue=s.convert(ce.type),_e=S(ce.internalFormat,me,ue,ce.encoding,b.isXRRenderTarget===!0),ge=at(b);n.renderbufferStorageMultisample(36161,ge,_e,b.width,b.height),n.framebufferRenderbuffer(36160,36064+I,36161,W.__webglColorRenderbuffer[I])}n.bindRenderbuffer(36161,null),b.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),je(W.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ne.__webglTexture),U(34067,w,Te);for(let C=0;C<6;C++)fe(W.__webglFramebuffer[C],b,w,36064,34069+C);A(w,Te)&&L(34067),t.unbindTexture()}else if(le){const C=b.texture;for(let I=0,ce=C.length;I<ce;I++){const me=C[I],ue=i.get(me);t.bindTexture(3553,ue.__webglTexture),U(3553,me,Te),fe(W.__webglFramebuffer,b,me,36064+I,3553),A(me,Te)&&L(3553)}t.unbindTexture()}else{let C=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?C=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,ne.__webglTexture),U(C,w,Te),fe(W.__webglFramebuffer,b,w,36064,C),A(w,Te)&&L(C),t.unbindTexture()}b.depthBuffer&&be(b)}function ut(b){const w=M(b)||a,W=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,re=W.length;ne<re;ne++){const le=W[ne];if(A(le,w)){const Te=b.isWebGLCubeRenderTarget?34067:3553,C=i.get(le).__webglTexture;t.bindTexture(Te,C),L(Te),t.unbindTexture()}}}function jt(b){if(a&&b.samples>0&&Ge(b)===!1){const w=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],W=b.width,ne=b.height;let re=16384;const le=[],Te=b.stencilBuffer?33306:36096,C=i.get(b),I=b.isWebGLMultipleRenderTargets===!0;if(I)for(let ce=0;ce<w.length;ce++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let ce=0;ce<w.length;ce++){le.push(36064+ce),b.depthBuffer&&le.push(Te);const me=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(me===!1&&(b.depthBuffer&&(re|=256),b.stencilBuffer&&(re|=1024)),I&&n.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[ce]),me===!0&&(n.invalidateFramebuffer(36008,[Te]),n.invalidateFramebuffer(36009,[Te])),I){const ue=i.get(w[ce]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ue,0)}n.blitFramebuffer(0,0,W,ne,0,0,W,ne,re,9728),g&&n.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),I)for(let ce=0;ce<w.length;ce++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ce,36161,C.__webglColorRenderbuffer[ce]);const me=i.get(w[ce]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ce,3553,me,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function at(b){return Math.min(d,b.samples)}function Ge(b){const w=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function En(b){const w=o.render.frame;y.get(b)!==w&&(y.set(b,w),b.update())}function Jt(b,w){const W=b.encoding,ne=b.format,re=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Kc||W!==kr&&(W===Ze?a===!1?e.has("EXT_sRGB")===!0&&ne===In?(b.format=Kc,b.minFilter=Pn,b.generateMipmaps=!1):w=Kg.sRGBToLinear(w):(ne!==In||re!==Nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),w}this.allocateTextureUnit=R,this.resetTextureUnits=J,this.setTexture2D=H,this.setTexture2DArray=se,this.setTexture3D=F,this.setTextureCube=$,this.rebindTextures=St,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Ge}function Hw(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===Nr)return 5121;if(s===Nx)return 32819;if(s===kx)return 32820;if(s===Dx)return 5120;if(s===Rx)return 5122;if(s===Yg)return 5123;if(s===Ix)return 5124;if(s===Mr)return 5125;if(s===wr)return 5126;if(s===Vo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===zx)return 6406;if(s===In)return 6408;if(s===Fx)return 6409;if(s===Ox)return 6410;if(s===Tr)return 6402;if(s===Os)return 34041;if(s===Kc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ux)return 6403;if(s===Bx)return 36244;if(s===Vx)return 33319;if(s===Gx)return 33320;if(s===Hx)return 36249;if(s===vu||s===_u||s===xu||s===yu)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===vu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_u)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===yu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===vu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_u)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===yu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bh||s===Th||s===Ch||s===Ah)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===bh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Th)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ch)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ah)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Lh||s===Ph)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Lh)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ph)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dh||s===Rh||s===Ih||s===Nh||s===kh||s===zh||s===Fh||s===Oh||s===Uh||s===Bh||s===Vh||s===Gh||s===Hh||s===Wh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Dh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ih)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Oh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Uh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Su)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Su)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===jx||s===jh||s===Xh||s===qh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Su)return a.COMPRESSED_RED_RGTC1_EXT;if(s===jh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cs?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Ww extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vi extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jw={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,i),m=this._getHandJoint(u,h);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=p.radius),m.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),g=.02,y=.005;u.inputState.pinching&&f>g+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Xw extends ln{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Tr,c!==Tr&&c!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Tr&&(i=Mr),i===void 0&&c===Os&&(i=Cs),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1}}class qw extends Br{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,g=null,y=null;const h=t.getContextAttributes();let p=null,m=null;const v=[],_=[],M=new Set,x=new Map,A=new Dn;A.layers.enable(1),A.viewport=new Nt;const L=new Dn;L.layers.enable(2),L.viewport=new Nt;const S=[A,L],T=new Ww;T.layers.enable(1),T.layers.enable(2);let P=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let $=v[F];return $===void 0&&($=new Yu,v[F]=$),$.getTargetRaySpace()},this.getControllerGrip=function(F){let $=v[F];return $===void 0&&($=new Yu,v[F]=$),$.getGripSpace()},this.getHand=function(F){let $=v[F];return $===void 0&&($=new Yu,v[F]=$),$.getHandSpace()};function K(F){const $=_.indexOf(F.inputSource);if($===-1)return;const ie=v[$];ie!==void 0&&ie.dispatchEvent({type:F.type,data:F.inputSource})}function z(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",k);for(let F=0;F<v.length;F++){const $=_[F];$!==null&&(_[F]=null,v[F].disconnect($))}P=null,Z=null,e.setRenderTarget(p),g=null,f=null,d=null,r=null,m=null,se.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(F){u=F},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",z),r.addEventListener("inputsourceschange",k),h.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:g}),m=new zr(g.framebufferWidth,g.framebufferHeight,{format:In,type:Nr,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let $=null,ie=null,oe=null;h.depth&&(oe=h.stencil?35056:33190,$=h.stencil?Os:Tr,ie=h.stencil?Cs:Mr);const U={colorFormat:32856,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(U),r.updateRenderState({layers:[f]}),m=new zr(f.textureWidth,f.textureHeight,{format:In,type:Nr,depthTexture:new Xw(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const Ee=e.properties.get(m);Ee.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function k(F){for(let $=0;$<F.removed.length;$++){const ie=F.removed[$],oe=_.indexOf(ie);oe>=0&&(_[oe]=null,v[oe].disconnect(ie))}for(let $=0;$<F.added.length;$++){const ie=F.added[$];let oe=_.indexOf(ie);if(oe===-1){for(let Ee=0;Ee<v.length;Ee++)if(Ee>=_.length){_.push(ie),oe=Ee;break}else if(_[Ee]===null){_[Ee]=ie,oe=Ee;break}if(oe===-1)break}const U=v[oe];U&&U.connect(ie)}}const Y=new B,Q=new B;function J(F,$,ie){Y.setFromMatrixPosition($.matrixWorld),Q.setFromMatrixPosition(ie.matrixWorld);const oe=Y.distanceTo(Q),U=$.projectionMatrix.elements,Ee=ie.projectionMatrix.elements,xe=U[14]/(U[10]-1),ve=U[14]/(U[10]+1),fe=(U[9]+1)/U[5],je=(U[9]-1)/U[5],Ae=(U[8]-1)/U[0],be=(Ee[8]+1)/Ee[0],St=xe*Ae,Ot=xe*be,ut=oe/(-Ae+be),jt=ut*-Ae;$.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(jt),F.translateZ(ut),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const at=xe+ut,Ge=ve+ut,En=St-jt,Jt=Ot+(oe-jt),b=fe*ve/Ge*at,w=je*ve/Ge*at;F.projectionMatrix.makePerspective(En,Jt,b,w,at,Ge)}function R(F,$){$===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices($.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;T.near=L.near=A.near=F.near,T.far=L.far=A.far=F.far,(P!==T.near||Z!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,Z=T.far);const $=F.parent,ie=T.cameras;R(T,$);for(let U=0;U<ie.length;U++)R(ie[U],$);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),F.matrix.copy(T.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const oe=F.children;for(let U=0,Ee=oe.length;U<Ee;U++)oe[U].updateMatrixWorld(!0);ie.length===2?J(T,A,L):T.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=F)},this.getPlanes=function(){return M};let G=null;function H(F,$){if(c=$.getViewerPose(u||o),y=$,c!==null){const ie=c.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let oe=!1;ie.length!==T.cameras.length&&(T.cameras.length=0,oe=!0);for(let U=0;U<ie.length;U++){const Ee=ie[U];let xe=null;if(g!==null)xe=g.getViewport(Ee);else{const fe=d.getViewSubImage(f,Ee);xe=fe.viewport,U===0&&(e.setRenderTargetTextures(m,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(m))}let ve=S[U];ve===void 0&&(ve=new Dn,ve.layers.enable(U),ve.viewport=new Nt,S[U]=ve),ve.matrix.fromArray(Ee.transform.matrix),ve.projectionMatrix.fromArray(Ee.projectionMatrix),ve.viewport.set(xe.x,xe.y,xe.width,xe.height),U===0&&T.matrix.copy(ve.matrix),oe===!0&&T.cameras.push(ve)}}for(let ie=0;ie<v.length;ie++){const oe=_[ie],U=v[ie];oe!==null&&U!==void 0&&U.update(oe,$,u||o)}if(G&&G(F,$),$.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let ie=null;for(const oe of M)$.detectedPlanes.has(oe)||(ie===null&&(ie=[]),ie.push(oe));if(ie!==null)for(const oe of ie)M.delete(oe),x.delete(oe),i.dispatchEvent({type:"planeremoved",data:oe});for(const oe of $.detectedPlanes)if(!M.has(oe))M.add(oe),x.set(oe,$.lastChangedTime),i.dispatchEvent({type:"planeadded",data:oe});else{const U=x.get(oe);oe.lastChangedTime>U&&(x.set(oe,oe.lastChangedTime),i.dispatchEvent({type:"planechanged",data:oe}))}}y=null}const se=new a0;se.setAnimationLoop(H),this.setAnimationLoop=function(F){G=F},this.dispose=function(){}}}function Yw(n,e){function t(h,p){p.color.getRGB(h.fogColor.value,i0(n)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,m,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,_)):p.isMeshMatcapMaterial?(r(h,p),g(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),y(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,m,v):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===_n&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===_n&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const m=e.get(p).envMap;if(m&&(h.envMap.value=m,h.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const M=n.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uv2Transform.value.copy(_.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,m,v){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*m,h.scale.value=v*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let m;p.map?m=p.map:p.alphaMap&&(m=p.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),h.uvTransform.value.copy(m.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,m){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===_n&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=m.texture,h.transmissionSamplerSize.value.set(m.width,m.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function g(h,p){p.matcap&&(h.matcap.value=p.matcap)}function y(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function $w(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(v,_){const M=_.program;i.uniformBlockBinding(v,M)}function u(v,_){let M=r[v.id];M===void 0&&(y(v),M=c(v),r[v.id]=M,v.addEventListener("dispose",p));const x=_.program;i.updateUBOMapping(v,x);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function c(v){const _=d();v.__bindingPointIndex=_;const M=n.createBuffer(),x=v.__size,A=v.usage;return n.bindBuffer(35345,M),n.bufferData(35345,x,A),n.bindBuffer(35345,null),n.bindBufferBase(35345,_,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=r[v.id],M=v.uniforms,x=v.__cache;n.bindBuffer(35345,_);for(let A=0,L=M.length;A<L;A++){const S=M[A];if(g(S,A,x)===!0){const T=S.__offset,P=Array.isArray(S.value)?S.value:[S.value];let Z=0;for(let K=0;K<P.length;K++){const z=P[K],k=h(z);typeof z=="number"?(S.__data[0]=z,n.bufferSubData(35345,T+Z,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=z.elements[0],S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=z.elements[0],S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=z.elements[0]):(z.toArray(S.__data,Z),Z+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,T,S.__data)}}n.bindBuffer(35345,null)}function g(v,_,M){const x=v.value;if(M[_]===void 0){if(typeof x=="number")M[_]=x;else{const A=Array.isArray(x)?x:[x],L=[];for(let S=0;S<A.length;S++)L.push(A[S].clone());M[_]=L}return!0}else if(typeof x=="number"){if(M[_]!==x)return M[_]=x,!0}else{const A=Array.isArray(M[_])?M[_]:[M[_]],L=Array.isArray(x)?x:[x];for(let S=0;S<A.length;S++){const T=A[S];if(T.equals(L[S])===!1)return T.copy(L[S]),!0}}return!1}function y(v){const _=v.uniforms;let M=0;const x=16;let A=0;for(let L=0,S=_.length;L<S;L++){const T=_[L],P={boundary:0,storage:0},Z=Array.isArray(T.value)?T.value:[T.value];for(let K=0,z=Z.length;K<z;K++){const k=Z[K],Y=h(k);P.boundary+=Y.boundary,P.storage+=Y.storage}if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,L>0){A=M%x;const K=x-A;A!==0&&K-P.boundary<0&&(M+=x-A,T.__offset=M)}M+=P.storage}return A=M%x,A>0&&(M+=x-A),v.__size=M,v.__cache={},this}function h(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function p(v){const _=v.target;_.removeEventListener("dispose",p);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}function Zw(){const n=Ho("canvas");return n.style.display="block",n}function d0(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:Zw(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const g=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=kr,this.physicallyCorrectLights=!1,this.toneMapping=xi,this.toneMappingExposure=1;const h=this;let p=!1,m=0,v=0,_=null,M=-1,x=null;const A=new Nt,L=new Nt;let S=null,T=e.width,P=e.height,Z=1,K=null,z=null;const k=new Nt(0,0,T,P),Y=new Nt(0,0,T,P);let Q=!1;const J=new o0;let R=!1,G=!1,H=null;const se=new zt,F=new Ie,$=new B,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return _===null?Z:1}let U=t;function Ee(E,O){for(let X=0;X<E.length;X++){const N=E[X],q=e.getContext(N,O);if(q!==null)return q}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kf}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",ke,!1),U===null){const O=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&O.shift(),U=Ee(O,E),U===null)throw Ee(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xe,ve,fe,je,Ae,be,St,Ot,ut,jt,at,Ge,En,Jt,b,w,W,ne,re,le,Te,C,I,ce;function me(){xe=new aM(U),ve=new eM(U,xe,n),xe.init(ve),C=new Hw(U,xe,ve),fe=new Vw(U,xe,ve),je=new cM,Ae=new Cw,be=new Gw(U,xe,fe,Ae,ve,C,je),St=new nM(h),Ot=new oM(h),ut=new _y(U,ve),I=new Q1(U,xe,ut,ve),jt=new lM(U,ut,je,I),at=new pM(U,jt,ut,je),re=new hM(U,ve,be),w=new tM(Ae),Ge=new Tw(h,St,Ot,xe,ve,I,w),En=new Yw(h,Ae),Jt=new Lw,b=new kw(xe,ve),ne=new K1(h,St,Ot,fe,at,c,o),W=new Bw(h,at,ve),ce=new $w(U,je,ve,fe),le=new J1(U,xe,je,ve),Te=new uM(U,xe,je,ve),je.programs=Ge.programs,h.capabilities=ve,h.extensions=xe,h.properties=Ae,h.renderLists=Jt,h.shadowMap=W,h.state=fe,h.info=je}me();const ue=new qw(h,U);this.xr=ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(T,P,!1))},this.getSize=function(E){return E.set(T,P)},this.setSize=function(E,O,X){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,P=O,e.width=Math.floor(E*Z),e.height=Math.floor(O*Z),X!==!1&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(T*Z,P*Z).floor()},this.setDrawingBufferSize=function(E,O,X){T=E,P=O,Z=X,e.width=Math.floor(E*X),e.height=Math.floor(O*X),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(k)},this.setViewport=function(E,O,X,N){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,O,X,N),fe.viewport(A.copy(k).multiplyScalar(Z).floor())},this.getScissor=function(E){return E.copy(Y)},this.setScissor=function(E,O,X,N){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,O,X,N),fe.scissor(L.copy(Y).multiplyScalar(Z).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(E){fe.setScissorTest(Q=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(E=!0,O=!0,X=!0){let N=0;E&&(N|=16384),O&&(N|=256),X&&(N|=1024),U.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),Jt.dispose(),b.dispose(),Ae.dispose(),St.dispose(),Ot.dispose(),at.dispose(),I.dispose(),ce.dispose(),Ge.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",de),ue.removeEventListener("sessionend",ye),H&&(H.dispose(),H=null),We.stop()};function _e(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=je.autoReset,O=W.enabled,X=W.autoUpdate,N=W.needsUpdate,q=W.type;me(),je.autoReset=E,W.enabled=O,W.autoUpdate=X,W.needsUpdate=N,W.type=q}function ke(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ze(E){const O=E.target;O.removeEventListener("dispose",ze),qe(O)}function qe(E){D(E),Ae.remove(E)}function D(E){const O=Ae.get(E).programs;O!==void 0&&(O.forEach(function(X){Ge.releaseProgram(X)}),E.isShaderMaterial&&Ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,X,N,q,Me){O===null&&(O=ie);const Ce=q.isMesh&&q.matrixWorld.determinant()<0,Pe=S0(E,O,X,N,q);fe.setMaterial(N,Ce);let Re=X.index,Ve=1;N.wireframe===!0&&(Re=jt.getWireframeAttribute(X),Ve=2);const Fe=X.drawRange,Oe=X.attributes.position;let ct=Fe.start*Ve,un=(Fe.start+Fe.count)*Ve;Me!==null&&(ct=Math.max(ct,Me.start*Ve),un=Math.min(un,(Me.start+Me.count)*Ve)),Re!==null?(ct=Math.max(ct,0),un=Math.min(un,Re.count)):Oe!=null&&(ct=Math.max(ct,0),un=Math.min(un,Oe.count));const si=un-ct;if(si<0||si===1/0)return;I.setup(q,N,Pe,X,Re);let rr,ft=le;if(Re!==null&&(rr=ut.get(Re),ft=Te,ft.setIndex(rr)),q.isMesh)N.wireframe===!0?(fe.setLineWidth(N.wireframeLinewidth*oe()),ft.setMode(1)):ft.setMode(4);else if(q.isLine){let Ue=N.linewidth;Ue===void 0&&(Ue=1),fe.setLineWidth(Ue*oe()),q.isLineSegments?ft.setMode(1):q.isLineLoop?ft.setMode(2):ft.setMode(3)}else q.isPoints?ft.setMode(0):q.isSprite&&ft.setMode(4);if(q.isInstancedMesh)ft.renderInstances(ct,si,q.count);else if(X.isInstancedBufferGeometry){const Ue=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Bl=Math.min(X.instanceCount,Ue);ft.renderInstances(ct,si,Bl)}else ft.render(ct,si)},this.compile=function(E,O){function X(N,q,Me){N.transparent===!0&&N.side===At&&N.forceSinglePass===!1?(N.side=_n,N.needsUpdate=!0,bn(N,q,Me),N.side=Zi,N.needsUpdate=!0,bn(N,q,Me),N.side=At):bn(N,q,Me)}f=b.get(E),f.init(),y.push(f),E.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(h.physicallyCorrectLights),E.traverse(function(N){const q=N.material;if(q)if(Array.isArray(q))for(let Me=0;Me<q.length;Me++){const Ce=q[Me];X(Ce,E,N)}else X(q,E,N)}),y.pop(),f=null};let j=null;function te(E){j&&j(E)}function de(){We.stop()}function ye(){We.start()}const We=new a0;We.setAnimationLoop(te),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(E){j=E,ue.setAnimationLoop(E),E===null?We.stop():We.start()},ue.addEventListener("sessionstart",de),ue.addEventListener("sessionend",ye),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(O),O=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,O,_),f=b.get(E,y.length),f.init(),y.push(f),se.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J.setFromProjectionMatrix(se),G=this.localClippingEnabled,R=w.init(this.clippingPlanes,G),d=Jt.get(E,g.length),d.init(),g.push(d),Mt(E,O,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(K,z),R===!0&&w.beginShadows();const X=f.state.shadowsArray;if(W.render(X,E,O),R===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(d,E),f.setupLights(h.physicallyCorrectLights),O.isArrayCamera){const N=O.cameras;for(let q=0,Me=N.length;q<Me;q++){const Ce=N[q];Ut(d,E,Ce,Ce.viewport)}}else Ut(d,E,O);_!==null&&(be.updateMultisampleRenderTarget(_),be.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(h,E,O),I.resetDefaultState(),M=-1,x=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function Mt(E,O,X,N){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){N&&$.setFromMatrixPosition(E.matrixWorld).applyMatrix4(se);const Ce=at.update(E),Pe=E.material;Pe.visible&&d.push(E,Ce,Pe,X,$.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==je.render.frame&&(E.skeleton.update(),E.skeleton.frame=je.render.frame),!E.frustumCulled||J.intersectsObject(E))){N&&$.setFromMatrixPosition(E.matrixWorld).applyMatrix4(se);const Ce=at.update(E),Pe=E.material;if(Array.isArray(Pe)){const Re=Ce.groups;for(let Ve=0,Fe=Re.length;Ve<Fe;Ve++){const Oe=Re[Ve],ct=Pe[Oe.materialIndex];ct&&ct.visible&&d.push(E,Ce,ct,X,$.z,Oe)}}else Pe.visible&&d.push(E,Ce,Pe,X,$.z,null)}}const Me=E.children;for(let Ce=0,Pe=Me.length;Ce<Pe;Ce++)Mt(Me[Ce],O,X,N)}function Ut(E,O,X,N){const q=E.opaque,Me=E.transmissive,Ce=E.transparent;f.setupLightsView(X),R===!0&&w.setGlobalState(h.clippingPlanes,X),Me.length>0&&ir(q,O,X),N&&fe.viewport(A.copy(N)),q.length>0&&tt(q,O,X),Me.length>0&&tt(Me,O,X),Ce.length>0&&tt(Ce,O,X),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function ir(E,O,X){const N=ve.isWebGL2;H===null&&(H=new zr(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Vo:Nr,minFilter:Bo,samples:N&&s===!0?4:0})),h.getDrawingBufferSize(F),N?H.setSize(F.x,F.y):H.setSize(Qc(F.x),Qc(F.y));const q=h.getRenderTarget();h.setRenderTarget(H),h.clear();const Me=h.toneMapping;h.toneMapping=xi,tt(E,O,X),h.toneMapping=Me,be.updateMultisampleRenderTarget(H),be.updateRenderTargetMipmap(H),h.setRenderTarget(q)}function tt(E,O,X){const N=O.isScene===!0?O.overrideMaterial:null;for(let q=0,Me=E.length;q<Me;q++){const Ce=E[q],Pe=Ce.object,Re=Ce.geometry,Ve=N===null?Ce.material:N,Fe=Ce.group;Pe.layers.test(X.layers)&&ri(Pe,O,X,Re,Ve,Fe)}}function ri(E,O,X,N,q,Me){E.onBeforeRender(h,O,X,N,q,Me),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(h,O,X,N,E,Me),q.transparent===!0&&q.side===At&&q.forceSinglePass===!1?(q.side=_n,q.needsUpdate=!0,h.renderBufferDirect(X,O,N,q,E,Me),q.side=Zi,q.needsUpdate=!0,h.renderBufferDirect(X,O,N,q,E,Me),q.side=At):h.renderBufferDirect(X,O,N,q,E,Me),E.onAfterRender(h,O,X,N,q,Me)}function bn(E,O,X){O.isScene!==!0&&(O=ie);const N=Ae.get(E),q=f.state.lights,Me=f.state.shadowsArray,Ce=q.state.version,Pe=Ge.getParameters(E,q.state,Me,O,X),Re=Ge.getProgramCacheKey(Pe);let Ve=N.programs;N.environment=E.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(E.isMeshStandardMaterial?Ot:St).get(E.envMap||N.environment),Ve===void 0&&(E.addEventListener("dispose",ze),Ve=new Map,N.programs=Ve);let Fe=Ve.get(Re);if(Fe!==void 0){if(N.currentProgram===Fe&&N.lightsStateVersion===Ce)return rd(E,Pe),Fe}else Pe.uniforms=Ge.getUniforms(E),E.onBuild(X,Pe,h),E.onBeforeCompile(Pe,h),Fe=Ge.acquireProgram(Pe,Re),Ve.set(Re,Fe),N.uniforms=Pe.uniforms;const Oe=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=w.uniform),rd(E,Pe),N.needsLights=w0(E),N.lightsStateVersion=Ce,N.needsLights&&(Oe.ambientLightColor.value=q.state.ambient,Oe.lightProbe.value=q.state.probe,Oe.directionalLights.value=q.state.directional,Oe.directionalLightShadows.value=q.state.directionalShadow,Oe.spotLights.value=q.state.spot,Oe.spotLightShadows.value=q.state.spotShadow,Oe.rectAreaLights.value=q.state.rectArea,Oe.ltc_1.value=q.state.rectAreaLTC1,Oe.ltc_2.value=q.state.rectAreaLTC2,Oe.pointLights.value=q.state.point,Oe.pointLightShadows.value=q.state.pointShadow,Oe.hemisphereLights.value=q.state.hemi,Oe.directionalShadowMap.value=q.state.directionalShadowMap,Oe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Oe.spotShadowMap.value=q.state.spotShadowMap,Oe.spotLightMatrix.value=q.state.spotLightMatrix,Oe.spotLightMap.value=q.state.spotLightMap,Oe.pointShadowMap.value=q.state.pointShadowMap,Oe.pointShadowMatrix.value=q.state.pointShadowMatrix);const ct=Fe.getUniforms(),un=qa.seqWithValue(ct.seq,Oe);return N.currentProgram=Fe,N.uniformsList=un,Fe}function rd(E,O){const X=Ae.get(E);X.outputEncoding=O.outputEncoding,X.instancing=O.instancing,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function S0(E,O,X,N,q){O.isScene!==!0&&(O=ie),be.resetTextureUnits();const Me=O.fog,Ce=N.isMeshStandardMaterial?O.environment:null,Pe=_===null?h.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:kr,Re=(N.isMeshStandardMaterial?Ot:St).get(N.envMap||Ce),Ve=N.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!N.normalMap&&!!X.attributes.tangent,Oe=!!X.morphAttributes.position,ct=!!X.morphAttributes.normal,un=!!X.morphAttributes.color,si=N.toneMapped?h.toneMapping:xi,rr=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ft=rr!==void 0?rr.length:0,Ue=Ae.get(N),Bl=f.state.lights;if(R===!0&&(G===!0||E!==x)){const cn=E===x&&N.id===M;w.setState(N,E,cn)}let wt=!1;N.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Bl.state.version||Ue.outputEncoding!==Pe||q.isInstancedMesh&&Ue.instancing===!1||!q.isInstancedMesh&&Ue.instancing===!0||q.isSkinnedMesh&&Ue.skinning===!1||!q.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==Re||N.fog===!0&&Ue.fog!==Me||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==w.numPlanes||Ue.numIntersection!==w.numIntersection)||Ue.vertexAlphas!==Ve||Ue.vertexTangents!==Fe||Ue.morphTargets!==Oe||Ue.morphNormals!==ct||Ue.morphColors!==un||Ue.toneMapping!==si||ve.isWebGL2===!0&&Ue.morphTargetsCount!==ft)&&(wt=!0):(wt=!0,Ue.__version=N.version);let sr=Ue.currentProgram;wt===!0&&(sr=bn(N,O,q));let sd=!1,js=!1,Vl=!1;const Xt=sr.getUniforms(),or=Ue.uniforms;if(fe.useProgram(sr.program)&&(sd=!0,js=!0,Vl=!0),N.id!==M&&(M=N.id,js=!0),sd||x!==E){if(Xt.setValue(U,"projectionMatrix",E.projectionMatrix),ve.logarithmicDepthBuffer&&Xt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),x!==E&&(x=E,js=!0,Vl=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const cn=Xt.map.cameraPosition;cn!==void 0&&cn.setValue(U,$.setFromMatrixPosition(E.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Xt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||q.isSkinnedMesh)&&Xt.setValue(U,"viewMatrix",E.matrixWorldInverse)}if(q.isSkinnedMesh){Xt.setOptional(U,q,"bindMatrix"),Xt.setOptional(U,q,"bindMatrixInverse");const cn=q.skeleton;cn&&(ve.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),Xt.setValue(U,"boneTexture",cn.boneTexture,be),Xt.setValue(U,"boneTextureSize",cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Gl=X.morphAttributes;if((Gl.position!==void 0||Gl.normal!==void 0||Gl.color!==void 0&&ve.isWebGL2===!0)&&re.update(q,X,N,sr),(js||Ue.receiveShadow!==q.receiveShadow)&&(Ue.receiveShadow=q.receiveShadow,Xt.setValue(U,"receiveShadow",q.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(or.envMap.value=Re,or.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),js&&(Xt.setValue(U,"toneMappingExposure",h.toneMappingExposure),Ue.needsLights&&M0(or,Vl),Me&&N.fog===!0&&En.refreshFogUniforms(or,Me),En.refreshMaterialUniforms(or,N,Z,P,H),qa.upload(U,Ue.uniformsList,or,be)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(qa.upload(U,Ue.uniformsList,or,be),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Xt.setValue(U,"center",q.center),Xt.setValue(U,"modelViewMatrix",q.modelViewMatrix),Xt.setValue(U,"normalMatrix",q.normalMatrix),Xt.setValue(U,"modelMatrix",q.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const cn=N.uniformsGroups;for(let Hl=0,E0=cn.length;Hl<E0;Hl++)if(ve.isWebGL2){const od=cn[Hl];ce.update(od,sr),ce.bind(od,sr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sr}function M0(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function w0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,O,X){Ae.get(E.texture).__webglTexture=O,Ae.get(E.depthTexture).__webglTexture=X;const N=Ae.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=X===void 0,N.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const X=Ae.get(E);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,X=0){_=E,m=O,v=X;let N=!0,q=null,Me=!1,Ce=!1;if(E){const Re=Ae.get(E);Re.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),N=!1):Re.__webglFramebuffer===void 0?be.setupRenderTarget(E):Re.__hasExternalTextures&&be.rebindTextures(E,Ae.get(E.texture).__webglTexture,Ae.get(E.depthTexture).__webglTexture);const Ve=E.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const Fe=Ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(q=Fe[O],Me=!0):ve.isWebGL2&&E.samples>0&&be.useMultisampledRTT(E)===!1?q=Ae.get(E).__webglMultisampledFramebuffer:q=Fe,A.copy(E.viewport),L.copy(E.scissor),S=E.scissorTest}else A.copy(k).multiplyScalar(Z).floor(),L.copy(Y).multiplyScalar(Z).floor(),S=Q;if(fe.bindFramebuffer(36160,q)&&ve.drawBuffers&&N&&fe.drawBuffers(E,q),fe.viewport(A),fe.scissor(L),fe.setScissorTest(S),Me){const Re=Ae.get(E.texture);U.framebufferTexture2D(36160,36064,34069+O,Re.__webglTexture,X)}else if(Ce){const Re=Ae.get(E.texture),Ve=O||0;U.framebufferTextureLayer(36160,36064,Re.__webglTexture,X||0,Ve)}M=-1},this.readRenderTargetPixels=function(E,O,X,N,q,Me,Ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){fe.bindFramebuffer(36160,Pe);try{const Re=E.texture,Ve=Re.format,Fe=Re.type;if(Ve!==In&&C.convert(Ve)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Fe===Vo&&(xe.has("EXT_color_buffer_half_float")||ve.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Fe!==Nr&&C.convert(Fe)!==U.getParameter(35738)&&!(Fe===wr&&(ve.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-N&&X>=0&&X<=E.height-q&&U.readPixels(O,X,N,q,C.convert(Ve),C.convert(Fe),Me)}finally{const Re=_!==null?Ae.get(_).__webglFramebuffer:null;fe.bindFramebuffer(36160,Re)}}},this.copyFramebufferToTexture=function(E,O,X=0){const N=Math.pow(2,-X),q=Math.floor(O.image.width*N),Me=Math.floor(O.image.height*N);be.setTexture2D(O,0),U.copyTexSubImage2D(3553,X,0,0,E.x,E.y,q,Me),fe.unbindTexture()},this.copyTextureToTexture=function(E,O,X,N=0){const q=O.image.width,Me=O.image.height,Ce=C.convert(X.format),Pe=C.convert(X.type);be.setTexture2D(X,0),U.pixelStorei(37440,X.flipY),U.pixelStorei(37441,X.premultiplyAlpha),U.pixelStorei(3317,X.unpackAlignment),O.isDataTexture?U.texSubImage2D(3553,N,E.x,E.y,q,Me,Ce,Pe,O.image.data):O.isCompressedTexture?U.compressedTexSubImage2D(3553,N,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,Ce,O.mipmaps[0].data):U.texSubImage2D(3553,N,E.x,E.y,Ce,Pe,O.image),N===0&&X.generateMipmaps&&U.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(E,O,X,N,q=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=E.max.x-E.min.x+1,Ce=E.max.y-E.min.y+1,Pe=E.max.z-E.min.z+1,Re=C.convert(N.format),Ve=C.convert(N.type);let Fe;if(N.isData3DTexture)be.setTexture3D(N,0),Fe=32879;else if(N.isDataArrayTexture)be.setTexture2DArray(N,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,N.flipY),U.pixelStorei(37441,N.premultiplyAlpha),U.pixelStorei(3317,N.unpackAlignment);const Oe=U.getParameter(3314),ct=U.getParameter(32878),un=U.getParameter(3316),si=U.getParameter(3315),rr=U.getParameter(32877),ft=X.isCompressedTexture?X.mipmaps[0]:X.image;U.pixelStorei(3314,ft.width),U.pixelStorei(32878,ft.height),U.pixelStorei(3316,E.min.x),U.pixelStorei(3315,E.min.y),U.pixelStorei(32877,E.min.z),X.isDataTexture||X.isData3DTexture?U.texSubImage3D(Fe,q,O.x,O.y,O.z,Me,Ce,Pe,Re,Ve,ft.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Fe,q,O.x,O.y,O.z,Me,Ce,Pe,Re,ft.data)):U.texSubImage3D(Fe,q,O.x,O.y,O.z,Me,Ce,Pe,Re,Ve,ft),U.pixelStorei(3314,Oe),U.pixelStorei(32878,ct),U.pixelStorei(3316,un),U.pixelStorei(3315,si),U.pixelStorei(32877,rr),q===0&&N.generateMipmaps&&U.generateMipmap(Fe),fe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?be.setTextureCube(E,0):E.isData3DTexture?be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?be.setTexture2DArray(E,0):be.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){m=0,v=0,_=null,fe.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Kw extends d0{}Kw.prototype.isWebGL1Renderer=!0;class Qw extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const Pp={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Jw{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const g=u[d],y=u[d+1];if(g.global&&(g.lastIndex=0),g.test(c))return y}return null}}}const eE=new Jw;class h0{constructor(e){this.manager=e!==void 0?e:eE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class tE extends h0{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pp.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ho("img");function l(){c(),Pp.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class nE extends h0{constructor(e){super(e)}load(e,t,i,r){const s=new ln,o=new tE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class iE{constructor(e,t,i=0,r=1/0){this.ray=new e0(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Jf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return ef(e,this,i,t),i.sort(Dp),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ef(e[r],this,i,t);return i.sort(Dp),i}}function Dp(n,e){return n.distance-e.distance}function ef(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)ef(r[s],e,t,!0)}}class tf{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kf);const Rp={type:"change"},$u={type:"start"},Ip={type:"end"};class rE extends Br{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:Wr.ROTATE,TWO:Wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Jt),this._domElementKeyEvents=C},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Rp),i.update(),s=r.NONE},this.update=function(){const C=new B,I=new Fr().setFromUnitVectors(e.up,new B(0,1,0)),ce=I.clone().invert(),me=new B,ue=new Fr,_e=2*Math.PI;return function(){const ke=i.object.position;C.copy(ke).sub(i.target),C.applyQuaternion(I),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&T(L()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ze=i.minAzimuthAngle,qe=i.maxAzimuthAngle;return isFinite(ze)&&isFinite(qe)&&(ze<-Math.PI?ze+=_e:ze>Math.PI&&(ze-=_e),qe<-Math.PI?qe+=_e:qe>Math.PI&&(qe-=_e),ze<=qe?a.theta=Math.max(ze,Math.min(qe,a.theta)):a.theta=a.theta>(ze+qe)/2?Math.max(ze,a.theta):Math.min(qe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),C.setFromSpherical(a),C.applyQuaternion(ce),ke.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||me.distanceToSquared(i.object.position)>o||8*(1-ue.dot(i.object.quaternion))>o?(i.dispatchEvent(Rp),me.copy(i.object.position),ue.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",W),i.domElement.removeEventListener("pointerdown",St),i.domElement.removeEventListener("pointercancel",jt),i.domElement.removeEventListener("wheel",En),i.domElement.removeEventListener("pointermove",Ot),i.domElement.removeEventListener("pointerup",ut),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Jt)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new tf,l=new tf;let u=1;const c=new B;let d=!1;const f=new Ie,g=new Ie,y=new Ie,h=new Ie,p=new Ie,m=new Ie,v=new Ie,_=new Ie,M=new Ie,x=[],A={};function L(){return 2*Math.PI/60/60*i.autoRotateSpeed}function S(){return Math.pow(.95,i.zoomSpeed)}function T(C){l.theta-=C}function P(C){l.phi-=C}const Z=function(){const C=new B;return function(ce,me){C.setFromMatrixColumn(me,0),C.multiplyScalar(-ce),c.add(C)}}(),K=function(){const C=new B;return function(ce,me){i.screenSpacePanning===!0?C.setFromMatrixColumn(me,1):(C.setFromMatrixColumn(me,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(ce),c.add(C)}}(),z=function(){const C=new B;return function(ce,me){const ue=i.domElement;if(i.object.isPerspectiveCamera){const _e=i.object.position;C.copy(_e).sub(i.target);let ge=C.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),Z(2*ce*ge/ue.clientHeight,i.object.matrix),K(2*me*ge/ue.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Z(ce*(i.object.right-i.object.left)/i.object.zoom/ue.clientWidth,i.object.matrix),K(me*(i.object.top-i.object.bottom)/i.object.zoom/ue.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function k(C){i.object.isPerspectiveCamera?u/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(C){i.object.isPerspectiveCamera?u*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(C){f.set(C.clientX,C.clientY)}function J(C){v.set(C.clientX,C.clientY)}function R(C){h.set(C.clientX,C.clientY)}function G(C){g.set(C.clientX,C.clientY),y.subVectors(g,f).multiplyScalar(i.rotateSpeed);const I=i.domElement;T(2*Math.PI*y.x/I.clientHeight),P(2*Math.PI*y.y/I.clientHeight),f.copy(g),i.update()}function H(C){_.set(C.clientX,C.clientY),M.subVectors(_,v),M.y>0?k(S()):M.y<0&&Y(S()),v.copy(_),i.update()}function se(C){p.set(C.clientX,C.clientY),m.subVectors(p,h).multiplyScalar(i.panSpeed),z(m.x,m.y),h.copy(p),i.update()}function F(C){C.deltaY<0?Y(S()):C.deltaY>0&&k(S()),i.update()}function $(C){let I=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?P(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),I=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?P(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),I=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),I=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),I=!0;break}I&&(C.preventDefault(),i.update())}function ie(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const C=.5*(x[0].pageX+x[1].pageX),I=.5*(x[0].pageY+x[1].pageY);f.set(C,I)}}function oe(){if(x.length===1)h.set(x[0].pageX,x[0].pageY);else{const C=.5*(x[0].pageX+x[1].pageX),I=.5*(x[0].pageY+x[1].pageY);h.set(C,I)}}function U(){const C=x[0].pageX-x[1].pageX,I=x[0].pageY-x[1].pageY,ce=Math.sqrt(C*C+I*I);v.set(0,ce)}function Ee(){i.enableZoom&&U(),i.enablePan&&oe()}function xe(){i.enableZoom&&U(),i.enableRotate&&ie()}function ve(C){if(x.length==1)g.set(C.pageX,C.pageY);else{const ce=Te(C),me=.5*(C.pageX+ce.x),ue=.5*(C.pageY+ce.y);g.set(me,ue)}y.subVectors(g,f).multiplyScalar(i.rotateSpeed);const I=i.domElement;T(2*Math.PI*y.x/I.clientHeight),P(2*Math.PI*y.y/I.clientHeight),f.copy(g)}function fe(C){if(x.length===1)p.set(C.pageX,C.pageY);else{const I=Te(C),ce=.5*(C.pageX+I.x),me=.5*(C.pageY+I.y);p.set(ce,me)}m.subVectors(p,h).multiplyScalar(i.panSpeed),z(m.x,m.y),h.copy(p)}function je(C){const I=Te(C),ce=C.pageX-I.x,me=C.pageY-I.y,ue=Math.sqrt(ce*ce+me*me);_.set(0,ue),M.set(0,Math.pow(_.y/v.y,i.zoomSpeed)),k(M.y),v.copy(_)}function Ae(C){i.enableZoom&&je(C),i.enablePan&&fe(C)}function be(C){i.enableZoom&&je(C),i.enableRotate&&ve(C)}function St(C){i.enabled!==!1&&(x.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",Ot),i.domElement.addEventListener("pointerup",ut)),ne(C),C.pointerType==="touch"?b(C):at(C))}function Ot(C){i.enabled!==!1&&(C.pointerType==="touch"?w(C):Ge(C))}function ut(C){re(C),x.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",Ot),i.domElement.removeEventListener("pointerup",ut)),i.dispatchEvent(Ip),s=r.NONE}function jt(C){re(C)}function at(C){let I;switch(C.button){case 0:I=i.mouseButtons.LEFT;break;case 1:I=i.mouseButtons.MIDDLE;break;case 2:I=i.mouseButtons.RIGHT;break;default:I=-1}switch(I){case Hr.DOLLY:if(i.enableZoom===!1)return;J(C),s=r.DOLLY;break;case Hr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;R(C),s=r.PAN}else{if(i.enableRotate===!1)return;Q(C),s=r.ROTATE}break;case Hr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;Q(C),s=r.ROTATE}else{if(i.enablePan===!1)return;R(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent($u)}function Ge(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;G(C);break;case r.DOLLY:if(i.enableZoom===!1)return;H(C);break;case r.PAN:if(i.enablePan===!1)return;se(C);break}}function En(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent($u),F(C),i.dispatchEvent(Ip))}function Jt(C){i.enabled===!1||i.enablePan===!1||$(C)}function b(C){switch(le(C),x.length){case 1:switch(i.touches.ONE){case Wr.ROTATE:if(i.enableRotate===!1)return;ie(),s=r.TOUCH_ROTATE;break;case Wr.PAN:if(i.enablePan===!1)return;oe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Wr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ee(),s=r.TOUCH_DOLLY_PAN;break;case Wr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent($u)}function w(C){switch(le(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ve(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;fe(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ae(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;be(C),i.update();break;default:s=r.NONE}}function W(C){i.enabled!==!1&&C.preventDefault()}function ne(C){x.push(C)}function re(C){delete A[C.pointerId];for(let I=0;I<x.length;I++)if(x[I].pointerId==C.pointerId){x.splice(I,1);return}}function le(C){let I=A[C.pointerId];I===void 0&&(I=new Ie,A[C.pointerId]=I),I.set(C.pageX,C.pageY)}function Te(C){const I=C.pointerId===x[0].pointerId?x[1]:x[0];return A[I.pointerId]}i.domElement.addEventListener("contextmenu",W),i.domElement.addEventListener("pointerdown",St),i.domElement.addEventListener("pointercancel",jt),i.domElement.addEventListener("wheel",En,{passive:!1}),this.update()}}class sE extends Ke{constructor(e=1,t=16,i=new Je("#727272"),r=2e3){const s=new Qi(2,2,1,1),o=new Ki({side:At,uniforms:{uSize1:{value:e},uSize2:{value:t},uColor:{value:i},uDistance:{value:r}},transparent:!0,alphaTest:.5,vertexShader:`
            
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
            
            `,extensions:{derivatives:!0}});super(s,o),this.frustumCulled=!1}}let Nn,Rn,Cn;function oE(){Nn=new Qw,Nn.background=new Je("#C6C6C6"),Rn=new Dn(60,(window.innerWidth-300)/window.innerHeight,.1,1e3),Rn.position.set(0,3,8),Rn.rotation.order="YXZ",Cn=new d0({antialias:!0}),Cn.setSize(window.innerWidth-300,window.innerHeight),Cn.setPixelRatio((window.innerWidth-300)/window.innerHeight),Cn.toneMappingExposure=1,Cn.shadowMap.enabled=!0,Cn.shadowMap.type=Hg,document.body.appendChild(Cn.domElement);const n=new sE;n.position.set(8.5,-.5,8.5),Nn.add(n);const e=new Ke(new Ct(1e5,1e5,1e-5),new Qe({color:16776960,visible:!1}));e.rotation.set(Math.PI/2,0,0),e.position.set(0,-.5,0),e.name="helpPlane",Nn.add(e),t();function t(){requestAnimationFrame(t),Se&&Se.update(),Cn.render(Nn,Rn)}window.addEventListener("resize",i),document.oncontextmenu=document.body.oncontextmenu=function(){return!1},window.addEventListener("beforeunload",function(r){return r.stopPropagation(),r.preventDefault(),!1},!0);function i(){Cn.domElement.getBoundingClientRect(),Cn.setSize(window.innerWidth-300,window.innerHeight),Cn.setPixelRatio((window.innerWidth-300)/window.innerHeight),Rn.aspect=(window.innerWidth-300)/window.innerHeight,Rn.updateProjectionMatrix()}}let Se;const mr=new nE;let Zu=!0,De,Dt,Rt;p0("https://raw.githubusercontent.com/Droxus/Builder3D/main/src/assets/textures/deepslate_diamond_ore.png");async function p0(n){mr.load(n,e=>{e&&m0(e)})}function m0(n){Rt=void 0,Dt=void 0;let e=0;bt.includes("side")?(mr.load(fi.filter(i=>i.name.includes(bt.slice(0,bt.length-4).replaceAll(" ","_")+"bottom"))[0]?.download_url,i=>{Rt=i,e++,t()},()=>{},()=>{e++,t()}),mr.load(fi.filter(i=>i.name.includes(bt.slice(0,bt.length-4).replaceAll(" ","_")+"top"))[0]?.download_url,i=>{Dt=i,e++,t()},()=>{},()=>{e++,t()})):bt.includes("log")?(mr.load(fi.filter(i=>i.name.includes(bt.replaceAll(" ","_")+"_bottom"))[0]?.download_url,i=>{Rt=i,e++,t()},()=>{},()=>{e++,t()}),mr.load(fi.filter(i=>i.name.includes(bt.replaceAll(" ","_")+"_top"))[0]?.download_url,i=>{Dt=i,e++,t()},()=>{},()=>{e++,t()})):fi.filter(i=>i.name.includes(bt.replaceAll(" ","_")+"_top"))?mr.load(Dt=fi.filter(i=>i.name.includes(bt.replaceAll(" ","_")+"_top"))[0]?.download_url,i=>{Dt=i,e+=2,t()},()=>{},()=>{e+=2,t()}):fi.filter(i=>i.name.includes(bt.replaceAll(" ","_")+"_bottom"))&&mr.load(Rt=fi.filter(i=>i.name.includes(bt.replaceAll(" ","_")+"_bottom"))[0]?.download_url,i=>{Rt=i,e+=2,t()},()=>{},()=>{e+=2,t()}),t();function t(){if(e>1||Zu){De=n,Rt||(Rt=Dt||De),Dt||(Dt=Rt||De);let i=[Rt,Dt,De];n.format=In,i.forEach(c=>{c&&(c.minFilter=It,c.magFilter=It,c.wrapS=ji,c.wrapT=ji)});const r=16,s=16,o=De.image.width,a=De.image.height,l=o/a,u=r/s;l>u?De.repeat.set(r/o,1):De.repeat.set(1,s/a),Bs(),Zu&&(aE(),os(0,0,0),Zu=!1)}}}function td(){let n=!0;return x0.forEach(e=>{if(bt.includes(e)&&!bt.includes("block"))return n=!1}),n}function Bs(){if(console.log(1),Ji)he.position.set(Math.round(V.point.x),Math.abs(Math.round(V.point.y+.001)),Math.round(V.point.z)),He.position.set(Math.round(V.point.x),Math.abs(Math.round(V.point.y+.001)),Math.round(V.point.z));else{if(td()){let n=[new Qe({map:Rt||Dt||De,transparent:!0,opacity:.5,wireframe:!1,depthWrite:!1,alphaTest:.5}),new Qe({map:Dt||Rt||De,transparent:!0,opacity:.5,wireframe:!1,depthWrite:!1,alphaTest:.5}),new Qe({map:De,transparent:!0,opacity:.5,wireframe:!1,depthWrite:!1,alphaTest:.5})];he.children.forEach(e=>e.material=n),he.visible=!0,He.visible=!1,he.position.set(He.position.x,He.position.y,He.position.z)}else he.visible=!1,He.visible=!0,He.position.set(he.position.x,he.position.y,he.position.z),He.children.forEach(n=>{n.material=new Qe({wireframe:!1,opacity:.5,transparent:!0,map:De,depthWrite:!1,side:At,alphaTest:.5})}),He.children[2].material=new Qe({wireframe:!1,opacity:0,transparent:!0,map:De,depthWrite:!1});yn=="Remove"?(he.children.forEach(n=>n.material.forEach(e=>e.map=null)),he.children.forEach(n=>n.material.forEach(e=>e.opacity=1)),he.children.forEach(n=>n.material.forEach(e=>e.transparent=!0)),he.children.forEach(n=>n.material.forEach(e=>e.wireframe=!0)),he.children.forEach(n=>n.material.forEach(e=>e.needsUpdate=!0)),he.children.forEach(n=>n.material.forEach(e=>e.visible=!0)),As.visible=!0,qi.visible=!1,Xi.visible=!1,he.visible=!0):yn=="Inspect"&&(he.visible=!1,He.visible=!1)}}function os(n,e,t){let i,r;if(td()){De&&(De.wrapS=De.wrapT=ji,De.repeat.set(16/De.image.width,16/De.image.height)),Dt&&(Dt.wrapS=Dt.wrapT=ji,Dt.repeat.set(16/De.image.width,16/De.image.height)),Rt&&(Rt.wrapS=Rt.wrapT=ji,Rt.repeat.set(16/De.image.width,16/De.image.height));let s,o,a;a=new Qe({map:Rt||Dt||De,transparent:!0,side:At}),o=new Qe({map:Dt||Rt||De,transparent:!0,side:At}),s=new Qe({map:De,transparent:!0,side:At});let l;if(xl=="Slabs"){l=new Ct(1,.5,1,1,1,1);let u=new Ke(new Ct(1,1,1,1,1,1),new Qe({map:De,opacity:0,transparent:!0,depthWrite:!1})),c=new Ke(l,s);c.position.set(0,-.25,0),c.name="slabs",u.name="slabsHelped",i=new vi,i.add(c),i.add(u),i.name="slabs"}else if(xl=="Stairs"){l=new Ct(1,.5,1,1,1,1);let u=new Ke(new Ct(1,1,1,1,1,1),new Qe({map:De,opacity:0,transparent:!0,depthWrite:!1})),c=new Ke(l,s);l=new Ct(.5,.5,1,1,1,1);let d=new Ke(l,s);c.position.set(0,-.25,0),d.position.set(.25,.25,0),c.name="stairs",d.name="stairs",u.name="stairsHelped",i=new vi,i.add(c),i.add(d),i.add(u),i.name="stairs"}else l=new Ct(1,1,1,1,1,1),l.groups.forEach((u,c)=>{c===2?u.materialIndex=0:c===0||c===1||c===4||c===5?u.materialIndex=1:u.materialIndex=2}),i=new Ke(l,[o,s,a]);Nn.add(i),i.rotation.set(he.rotation.x,he.rotation.y,he.rotation.z)}else{let s=new Ke(new Qi(1,1),new Qe({map:De,transparent:!0,side:At,depthWrite:!1})),o=new Ke(new Qi(1,1),new Qe({map:De,transparent:!0,side:At,depthWrite:!1}));r=new Ke(new Ct(1,1,1),new Qe({map:De,opacity:0,transparent:!0,depthWrite:!1})),o.rotation.set(0,Math.PI/2,0),i=new vi,i.add(s),i.add(o),i.add(r),r.textureName=bt,i.rotation.set(He.rotation.x,He.rotation.y,He.rotation.z)}i.textureName=bt,Nn.add(i),i.position.set(n,e,t)}let Ji=!1,nd=[new Qe({color:"white",wireframe:!0}),new Qe({color:"white",wireframe:!0}),new Qe({color:"white",wireframe:!0})],he=new vi,As=new Ke(new Ct(1,1,1),nd),Xi=new Ke(new Ct(1,.5,1),nd),qi=new Ke(new Ct(.5,.5,1),nd);he.add(As);he.add(Xi);he.add(qi);Xi.position.set(0,-.25,0);qi.position.set(.25,.25,0);qi.visible=!1;Xi.visible=!1;he.children.forEach(n=>n.geometry.groups.forEach((e,t)=>{t===2?e.materialIndex=1:t===0||t===1||t===4||t===5?e.materialIndex=2:e.materialIndex=0}));let He=new vi,g0=new Ke(new Qi(1,1),new Qe({transparent:!0,side:At,depthWrite:!1})),id=new Ke(new Qi(1,1),new Qe({transparent:!0,side:At,depthWrite:!1})),v0=new Ke(new Ct(1,1,1),new Qe({opacity:0,transparent:!0,depthWrite:!1}));g0.name="hoverBlock";id.name="hoverBlock";v0.name="hoverBlock";id.rotation.set(0,Math.PI/2,0);He.add(g0);He.add(id);He.add(v0);He.name="hoverBlock";As.name="hoverBlock";he.name="hoverBlock";Xi.name="hoverBlock";qi.name="hoverBlock";function aE(){Se=new rE(Rn,Cn.domElement),Se.target.set(0,0,0),Se.autoRotate=!1,Se.autoRotateSpeed=1,Se.enableDamping=!0,Se.dampingFactor=.05,Se.enablePan=!0,Se.enableZoom=!1,document.addEventListener("keydown",i=>{i.keyCode===16&&(Ji=!0,he.visible=!1,He.visible=!1,yn!=="Inspect"&&(Se.mouseButtons={LEFT:2,MIDDLE:1,RIGHT:0},Se.enableZoom=!0))}),document.addEventListener("keyup",i=>{i.keyCode===16&&(Ji=!1,he.visible=!0,He.visible=!0,yn=="Inspect"&&(he.visible=!1,He.visible=!1),yn!=="Inspect"&&(Se.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},Bs(),Se.enableZoom=!1))}),Se.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},Se.touches={ONE:void 0,TWO:void 0},Se.screenSpacePanning=!1,Se.minDistance=1,Se.maxDistance=200,Se.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},Se.listenToKeyEvents(window),Se.keyPanSpeed=50;function n(i,r,s){const o=new tf().setFromVector3(Rn.position.clone().sub(Se.target));o.theta+=i,o.phi+=r,o.radius+=s;const a=1e-6;o.phi=Math.max(a,Math.min(Math.PI-a,o.phi)),Rn.position.setFromSpherical(o).add(Se.target),Rn.lookAt(Se.target)}const e=.1,t=1;document.addEventListener("keydown",i=>{switch(i.code){case"ArrowLeft":n(-e,0,0);break;case"ArrowUp":n(0,-e,0);break;case"ArrowRight":n(e,0,0);break;case"ArrowDown":n(0,e,0);break;case"KeyO":n(0,0,-t);break;case"KeyP":n(0,0,t);break}}),Se.rotateCamera=!0,document.querySelector("canvas")?.addEventListener("mousemove",uE),Nn.add(he),Nn.add(He),Se.addEventListener("change",()=>{y0()}),document.querySelector("canvas")?.addEventListener("mousedown",i=>{(i.button==1||i.buttons==4)&&cE(i)}),document.querySelector("canvas")?.addEventListener("wheel",lE),document.querySelector("canvas")?.addEventListener("click",gr),document.querySelector("canvas")?.addEventListener("contextmenu",vr)}const cr=new iE,Ku=new Ie;function Wo(n){Ku.x=(n.clientX-300)/(window.innerWidth-300)*2-1,Ku.y=-(n.clientY/window.innerHeight)*2+1,cr.setFromCamera(Ku,Rn);let e=cr.intersectObjects(Nn.children);if(e=e.filter(t=>t.object.name!=="hoverBlock"&&t.object.parent?.name!=="hoverBlock"),e=e.filter(t=>t.object.geometry instanceof Ct&&t.object.name!=="helpedCube"&&t.object.name!=="slabsHelped"),e.length>0){let t;if(e[0].object.name!=="helpPlane")if(e[0].object.name!=="slabs"&&e[0].object.name!=="stairs")t={x:e[0].object.rotation.x,y:e[0].object.rotation.y,z:e[0].object.rotation.z},e[0].object.rotation.set(0,0,0),e[0].object.updateMatrixWorld(!0),e=cr.intersectObjects([e[0].object]),t.x!==void 0&&t.y!==void 0&&t.z!==void 0&&e[0].object.rotation.set(t.x,t.y,t.z);else if(e[0].object.name=="slabs"){if(t={x:e[0].object.parent?.rotation.x,y:e[0].object.parent?.rotation.y,z:e[0].object.parent?.rotation.z},e[0].object.parent?.rotation.set(0,0,0),e[0].object.parent?.updateMatrixWorld(!0),e[0].object.parent?.children[1]){let i;cr.intersectObjects([e[0].object])[0]!==void 0&&(i=cr.intersectObjects([e[0].object])[0].face),i&&e[0].face?e[0].face=i:e[0].face=cr.intersectObjects([e[0].object.parent?.children[1]])[0].face,t.x!==void 0&&t.y!==void 0&&t.z!==void 0&&e[0].object.parent?.rotation.set(t.x,t.y,t.z)}}else t={x:e[0].object.parent?.rotation.x,y:e[0].object.parent?.rotation.y,z:e[0].object.parent?.rotation.z},e[0].object.parent?.rotation.set(0,0,0),e[0].object.parent?.updateMatrixWorld(!0),e[0].object.parent?.children[2]&&(e[0].face=cr.intersectObjects([e[0].object.parent?.children[2]])[0].face,t.x!==void 0&&t.y!==void 0&&t.z!==void 0&&e[0].object.parent?.rotation.set(t.x,t.y,t.z))}return e[0]}function gr(n){!Ji&&yn!=="Inspect"&&(V=Wo(n),V&&(V.object.name=="helpPlane"?os(Math.round(V.point.x),Math.abs(Math.round(V.point.y+.001)),Math.round(V.point.z)):(yn=="Build",V.face&&(V.object.parent&&(V.object.parent.children.length==3||V.object.name=="slabs")?os(Math.round(V.object.parent.position.x+V.face.normal.x),Math.abs(Math.round(V.object.parent.position.y+.001+V.face.normal.y)),Math.round(V.object.parent.position.z+V.face.normal.z)):os(Math.round(V.object.position.x+V.face.normal.x),Math.abs(Math.round(V.object.position.y+.001+V.face.normal.y)),Math.round(V.object.position.z+V.face.normal.z))))))}function vr(n){!Ji&&yn!=="Inspect"&&(V=Wo(n),V&&V.object.name!=="helpPlane"&&V.object.name!=="hoverBlock"&&(V.object.parent&&(V.object.parent.children.length==3||V.object.name=="slabs")?Nn.remove(V.object.parent):Nn.remove(V.object)))}function lE(n){let e=n.deltaY/Math.abs(n.deltaY);Ji||(e==1?he.rotation.z<Math.PI*2?he.rotation.set(he.rotation.x,he.rotation.y,he.rotation.z+Math.PI*.5):he.rotation.y<Math.PI*2?he.rotation.set(he.rotation.x,he.rotation.y+Math.PI*.5,0):he.rotation.x<Math.PI*2?he.rotation.set(he.rotation.x+Math.PI*.5,0,0):he.rotation.set(0,0,0):he.rotation.z>-Math.PI*2?he.rotation.set(he.rotation.x,he.rotation.y,he.rotation.z-Math.PI*.5):he.rotation.y>-Math.PI*2?he.rotation.set(he.rotation.x,he.rotation.y-Math.PI*.5,0):he.rotation.x>-Math.PI*2?he.rotation.set(he.rotation.x-Math.PI*.5,0,0):he.rotation.set(0,0,0),He.rotation.set(he.rotation.x,he.rotation.y,he.rotation.z))}let ht,V;function uE(n){if(Ji)V=Wo(n);else if(td()?(ht=he,He.visible=!1):(ht=He,he.visible=!1),yn=="Remove"&&(ht=he,He.visible=!1,he.visible=!0),!Ji&&yn!=="Inspect"&&(ht.children.length>0&&ht.children&&(ht.visible=!0),V=Wo(n),V))if(V.object.name=="helpPlane")he.position.set(Math.round(V.point.x),Math.abs(Math.round(V.point.y+.001)),Math.round(V.point.z)),He.position.set(Math.round(V.point.x),Math.abs(Math.round(V.point.y+.001)),Math.round(V.point.z));else if(yn=="Build"){let e=new Qe({wireframe:!1,opacity:.5,transparent:!0,map:De,depthWrite:!1,side:At});ht.children.length==3?(ht.children.forEach(t=>t.material=e),ht.children[2].material=new Qe({wireframe:!1,opacity:.5,transparent:!0,map:De,depthWrite:!1})):Array.isArray(ht.children)?ht.children.forEach(t=>t.material.forEach(i=>e)):ht.material.forEach(t=>e),V.face&&(V.object.parent&&(V.object.parent.children.length==3||V.object.name=="slabs")?(he.position.set(Math.round(V.object.parent.position.x+V.face.normal.x),Math.abs(Math.round(V.object.parent.position.y+.001+V.face.normal.y)),Math.round(V.object.parent.position.z+V.face.normal.z)),He.position.set(Math.round(V.object.parent.position.x+V.face.normal.x),Math.abs(Math.round(V.object.parent.position.y+.001+V.face.normal.y)),Math.round(V.object.parent.position.z+V.face.normal.z))):V.object.parent&&(V.object.parent.children.length==3||V.object.name=="slabs")?(he.position.set(Math.round(V.object.position.x+V.face.normal.x),Math.abs(Math.round(V.object.position.y+.001+V.face.normal.y)),Math.round(V.object.position.z+V.face.normal.z)),He.position.set(Math.round(V.object.position.x+V.face.normal.x),Math.abs(Math.round(V.object.position.y+.001+V.face.normal.y)),Math.round(V.object.position.z+V.face.normal.z))):(ht.position.set(Math.round(V.object.position.x+V.face.normal.x),Math.abs(Math.round(V.object.position.y+.001+V.face.normal.y)),Math.round(V.object.position.z+V.face.normal.z)),He.position.set(Math.round(V.object.position.x+V.face.normal.x),Math.abs(Math.round(V.object.position.y+.001+V.face.normal.y)),Math.round(V.object.position.z+V.face.normal.z))))}else{let e=new Qe({wireframe:!0,opacity:1,transparent:!0,map:null});ht.children.length>0?ht.children.forEach(t=>t.material.forEach(i=>e)):Array.isArray(ht.children)?ht.forEach(t=>t.material.forEach(i=>e)):ht.material.forEach(t=>e),V.object.parent&&(V.object.parent.children.length==3||V.object.name=="slabs")?ht.position.set(Math.round(V.object.parent.position.x),Math.abs(Math.round(V.object.parent.position.y+.001)),Math.round(V.object.parent.position.z)):ht.position.set(Math.round(V.object.position.x),Math.abs(Math.round(V.object.position.y+.001)),Math.round(V.object.position.z))}}function cE(n){if(V=Wo(n),V&&V.object.name!=="helpPlane"&&V.object.name!=="hoverBlock"){let e=V.object;V.object.name=="stairs"||V.object.name=="stairsHelped"||V.object.name=="slabs"?e=V.object.parent:e=V.object;let t=e,r=t.material;Array.isArray(r)?De=r[1].map:V.object.parent.name=="stairs"?De=V.object.parent.children[2].material.map:V.object.parent.name=="slabs"?De=t.children[1].material.map:De=r.map,dE(e.textureName),m0(De),he.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),He.rotation.set(e.rotation.x,e.rotation.y,e.rotation.z),Bs()}}function fE(){switch(yn){case"Build":Se.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},document.querySelector("canvas")?.removeEventListener("click",gr),document.querySelector("canvas")?.removeEventListener("contextmenu",vr),document.querySelector("canvas")?.removeEventListener("click",vr),document.querySelector("canvas")?.removeEventListener("contextmenu",gr),document.querySelector("canvas")?.addEventListener("click",gr),document.querySelector("canvas")?.addEventListener("contextmenu",vr),Bs(),_0(),Se.enableZoom=!1;break;case"Inspect":he.visible=!1,He.visible=!1,Se.mouseButtons={LEFT:0,MIDDLE:1,RIGHT:2},Se.enableZoom=!0;break;case"Remove":Se.mouseButtons={LEFT:void 0,MIDDLE:void 0,RIGHT:void 0},document.querySelector("canvas")?.removeEventListener("click",gr),document.querySelector("canvas")?.removeEventListener("contextmenu",vr),document.querySelector("canvas")?.removeEventListener("click",vr),document.querySelector("canvas")?.removeEventListener("contextmenu",gr),document.querySelector("canvas")?.addEventListener("click",vr),document.querySelector("canvas")?.addEventListener("contextmenu",gr),Bs(),Se.enableZoom=!1;break}}function _0(){switch(xl){case"Blocks":Bs(),As.visible=!0,qi.visible=!1,Xi.visible=!1;break;case"Slabs":As.visible=!1,qi.visible=!1,Xi.visible=!0;break;case"Stairs":As.visible=!1,qi.visible=!0,Xi.visible=!0;break}}let bt="deepslate_diamond_ore.png",x0=[],fi=[];function dE(n){bt=n}const hE=()=>{const[n,e]=en.useState([]);return en.useEffect(()=>{(async()=>{let r=(await vh(()=>import("./textures-5599cd7a.js"),[])).default;r=r.filter(o=>o.name.slice(-7)!==".mcmeta"),fi=r,r=r.filter(o=>!o.name.includes("top")&&!o.name.includes("bottom")&&!o.name.includes("anvil")&&!o.name.includes("bell")&&!o.name.includes("candle")&&!o.name.includes("redstone_dust")),x0=(await vh(()=>import("./noCubeBlocks-30ca2709.js"),[])).default,e(r)})()},[]),we("div",{className:"grid grid-cols-4 w-full",children:n.map(t=>gt("div",{onClick:pE,className:"relative basis-1/3 flex flex-wrap justify-center cursor-pointer",children:[we("div",{className:"w-full h-14 flex justify-center",children:we("img",{src:t.download_url,alt:"block",className:"textures object-cover w-14 h-14 aspect-square select-none pointer-events-none"})}),we("label",{id:t.name.slice(0,t.name.length-4).replaceAll("_"," "),className:"break-words text-sm select-none",children:t.name.slice(0,t.name.length-4).replaceAll("_"," ").replaceAll("side","").replaceAll("log","").replaceAll("front","").replaceAll("end","")})]},t.name))})};function pE(n){p0(n.currentTarget.querySelector("img").getAttribute("src")),bt=n.currentTarget.querySelector("label").getAttribute("id")}let yn="Build",y0,xl="Blocks";function mE(){const[n,e]=en.useState(""),t=x=>{e(x.target.value)};n||e("My first build");const[i,r]=en.useState(""),s=x=>{r(String(Math.max(Math.min(Number(x.target.value),Se.maxDistance),Se.minDistance))),Rn.position.setLength(Number(Math.max(Math.min(Se.maxDistance-Number(x.target.value)+.5,Se.maxDistance),Se.minDistance)))};y0=function(){r(String(Math.round(Se.maxDistance-Se.getDistance()+.5))),a(String(Math.round(Se.target.x))),u(String(Math.round(Se.target.y))),d(String(Math.round(Se.target.z)))},i||r("192");const[o,a]=en.useState(""),[l,u]=en.useState(""),[c,d]=en.useState(""),f=x=>{a(String(Math.max(Math.min(Number(x.target.value),1e4),-1e4))),Se.target.set(Number(Math.max(Math.min(Number(x.target.value),1e4),-1e4)),Se.target.y,Se.target.z),Se.update()},g=x=>{u(String(Math.max(Math.min(Number(x.target.value),1e4),-1e4))),Se.target.set(Se.target.x,Number(Math.max(Math.min(Number(x.target.value),1e4),-1e4)),Se.target.z),Se.update()},y=x=>{d(String(Math.max(Math.min(Number(x.target.value),1e4),-1e4))),Se.target.set(Se.target.x,Se.target.y,Number(Math.max(Math.min(Number(x.target.value),1e4),-1e4))),Se.update()};o||a("0"),l||u("0"),c||d("0");const[h,p]=en.useState("");h||p("Build");function m(x){p(x.currentTarget.querySelector("label").innerText),yn=x.currentTarget.querySelector("label").innerText,fE()}const[v,_]=en.useState("");v||_("Blocks");function M(x){_(x.target.innerText),xl=x.target.innerText,_0()}return we("div",{className:"App h-full w-full",children:gt("div",{className:"threeSceneInterface h-full w-full overflow-hidden pointer-events-none grid grid-rows-[52px_1fr]",children:[gt("div",{className:" bg-fourthcolor z-50 grid grid-cols-[300px_25%_1fr_34%] text-secondcolor",children:[gt("div",{className:"flex items-center",children:[we("img",{className:"ml-8 aspect-square h-9 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/f4f29d3e38a622e9a547d37c766d7a7308ba2dbc/src/assets/img/whiteLogo.svg",alt:""}),we("label",{className:"text-xl ml-4 font-medium text-firstcolor",children:"Builder 3D"})]}),gt("div",{className:"flex items-center shadow-forTopBlock",children:[we("button",{className:"h-full w-24",children:"Undo"}),we("button",{className:"h-full w-24",children:"Redo"}),we("button",{className:" h-full w-24",children:"Create"})]}),gt("div",{className:"flex items-center justify-center text-firstcolor shadow-forTopBlock",children:[we("button",{className:"outline-none",children:"Droxus228"}),we("label",{className:" mx-2",children:"/"}),we("input",{className:" bg-transparent outline-none",type:"text",value:n,onChange:t})]}),gt("div",{className:"flex items-center justify-end shadow-forTopBlock",children:[we("button",{className:"h-full w-24 ",children:"Save"}),we("button",{className:"h-full w-24",children:"Scene"}),we("button",{className:" h-full w-24 ",children:"Import"}),we("button",{className:"h-full w-24",children:"Export"}),we("button",{className:" h-full w-24 ",children:"Share"})]})]}),gt("div",{className:"leftBlock absolute grid grid-rows-[185px_1fr_135px] h-full w-300  bg-firstcolor text-fourthcolor",children:[gt("div",{className:"pt-20 relative z-30 shadow-forLeftBlockTwo bg-firstcolor",children:[gt("div",{className:"grid grid-cols-[40px_1fr_40px] ",children:[we("button",{className:"flex place-content-center items-center",children:we("img",{className:"h-5 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/f4f29d3e38a622e9a547d37c766d7a7308ba2dbc/src/assets/img/crossBlocks.svg",alt:""})}),we("input",{className:"bg-transparent px-2 h-10 outline-none text-center text-lg border-fourthcolor border-b-2 bg-firstcolor",type:"text",placeholder:"Find Block"}),we("button",{className:"flex place-content-center items-center",children:we("img",{className:"h-6 w-auto",src:"https://raw.githubusercontent.com/Droxus/Builder3D/f4f29d3e38a622e9a547d37c766d7a7308ba2dbc/src/assets/img/searchBlocks.svg",alt:""})})]}),gt("div",{className:"mt-2 flex",children:[we("button",{className:` flex-1 focus:outline-none hover:border-0 transition-none ${v=="Blocks"?" opacity-100":"opacity-40"}`,onClick:M,children:"Blocks"}),we("button",{className:` flex-1 focus:outline-none hover:border-0 transition-none ${v=="Slabs"?" opacity-100":"opacity-40"}`,onClick:M,children:"Slabs"}),we("button",{className:` flex-1 focus:outline-none hover:border-0 transition-none ${v=="Stairs"?" opacity-100":"opacity-40"}`,onClick:M,children:"Stairs"})]})]}),we("div",{className:"texturePickBlock relative h-full overflow-scroll overflow-x-hidden z-10 mt-0 py-24 shadow-forLeftBlockThree",children:we(hE,{})}),we("div",{className:"z-30 -mt-0 bg-firstcolor shadow-forLeftBlockTwo",children:gt("div",{className:" pt-4 h-21",children:[we("label",{className:" text-lg font-medium",children:"Mods"}),gt("div",{className:"flex mt-2 h-full",children:[gt("button",{className:` flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${h=="Build"?" opacity-100":"opacity-40"}`,onClick:m,children:[we("div",{className:"w-full flex justify-center",children:we("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/build.svg",alt:""})}),we("label",{children:"Build"})]}),gt("button",{className:` flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${h=="Inspect"?" opacity-100":"opacity-40"}`,onClick:m,children:[we("div",{className:"w-full flex justify-center",children:we("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/inspect.svg",alt:""})}),we("label",{children:"Inspect"})]}),gt("button",{className:` flex-1 rounded-none focus:outline-none hover:border-0 transition-none ${h=="Remove"?" opacity-100":"opacity-40"}`,onClick:m,children:[we("div",{className:"w-full flex justify-center",children:we("img",{className:"w-10 h-10 select-none pointer-events-none",src:"https://raw.githubusercontent.com/Droxus/Builder3D/bc30f49445a6704a15da644ace2337ee5e86b47b/src/assets/img/remove.svg",alt:""})}),we("label",{children:"Remove"})]})]})]})})]}),gt("div",{className:" absolute top-full left-full -translate-x-120 -translate-y-14 w-120 h-10 flex items-center backdrop-blur-sm bg-black/1 text-fourthcolor font-normal",children:[gt("div",{className:" h-8 w-40 flex items-center ",children:[we("label",{className:" w-12",children:"Scale"}),we("input",{id:"scaleInput",className:" w-14 bg-transparent text-right",type:"number",value:i,onChange:s}),we("label",{children:"%"})]}),gt("div",{className:" h-8 w-80 flex items-center",children:[we("label",{className:" w-24",children:"Position"}),we("label",{children:"x:"}),we("input",{className:"modsButton w-16 bg-transparent text-center",type:"number",value:o,onChange:f}),we("label",{children:"y:"}),we("input",{className:" w-16 bg-transparent text-center",type:"number",value:l,onChange:g}),we("label",{children:"z:"}),we("input",{className:" w-16 bg-transparent text-center",type:"number",value:c,onChange:y})]})]})]})})}oE();Qu.createRoot(document.getElementById("root")).render(we(H0.StrictMode,{children:we(mE,{})}));
