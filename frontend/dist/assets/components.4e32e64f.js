import{i as Xe,g as Bn,a as Te,h as wn,j as Ye,u as Ze,k as bn,l as Cn,m as $e,n as qe,o as ge,p as Ke,q as ie,r as Be,v as ze,w as We,x as Ne,s as le,d as Ce,b as y,y as xn,t as V,c as en,C as ue,B as $,T as q,e as nn,F as kn,z as An,I as Ln}from"./index.6c08b9ad.js";function Tn(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}const tn=Tn(/iP(ad|od|hone)/i),Fn=typeof window<"u"?tn&&"download"in document.createElement("a"):null;if(tn&&!Fn&&typeof window<"u"){const e=document.querySelector("html");e.style.cursor="pointer",e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"}const C=[],Sn=e=>{C.push(e)},_e=e=>{const n=C.findIndex(o=>o.uniqueId===e);if(n===-1)return;const t=C[n];return C.splice(n,1),t},On=(e,n)=>{const{containerEl:t,setOpen:o,onClickDocumentRef:r}=e;t.contains(n.target)||(d.closedByEvents=!0,o(!1),e.prevFocusedEl=null,e.addedFocusOutAppEvents=!1,document.removeEventListener("click",r))},Mn=(e,n)=>{const{containerEl:t,setOpen:o,onFocusFromOutsideAppOrTabRef:r}=e;if(!!t){if(t.contains(n.target)){e.addedFocusOutAppEvents=!1,e.prevFocusedEl&&e.prevFocusedEl.removeEventListener("focus",r),e.prevFocusedEl=null;return}e.prevFocusedEl&&e.prevFocusedEl.removeEventListener("focus",r),e.prevFocusedEl=null,d.closedByEvents=!0,o(!1),e.addedFocusOutAppEvents=!1}},xe=e=>{const{onFocusFromOutsideAppOrTabRef:n,onClickDocumentRef:t}=e;!e.prevFocusedEl||(e.prevFocusedEl.removeEventListener("focus",n),document.removeEventListener("click",t),e.prevFocusedEl=null,e.addedFocusOutAppEvents=!1)},on=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","[tabindex]","[contentEditable=true]"].reduce((e,n,t)=>`${e}${t?",":""}${n}:not([tabindex="-1"])`,"");let we=!1;const P=({from:e,stopAtRootElement:n,ignoreElement:t=[],allowSelectors:o,direction:r="forwards",wrap:c})=>{let l,f=!1;if(e instanceof Element)f=ne(e),l=e;else{if(e==="activeElement"){const g=document.activeElement;f=ne(g),l=je(g)}typeof e=="object"&&(e.getActiveElement&&(l=je(e.el)),f=e.isIframe)}const h=l,k=h.parentElement,a=f,v=h,m=on+(o?","+o.join(","):"");if(!v)return null;const B=(g,R)=>{let E=!1;const M=g.children,w=M.length;if(we&&(E=!0),r==="forwards")for(let L=0;L<w;L++){const A=M[L];if(E){if(t.some(z=>z===A))continue;const x=ae(A,m,r);if(x)return x;continue}if(A===n)return null;if(A===R){E=!0;continue}}else for(let L=w-1;L>=0;L--){const A=M[L];if(E){if(t.some(z=>z===A))continue;const x=ae(A,m,r);if(x)return x;continue}if(A===n)return null;if(A===R){E=!0;continue}}if(R=g,g=g.parentElement,!g&&a){const L=document.activeElement;L&&ne(L)&&(R=L,g=L.parentElement)}return g?B(g,R):null};let p=B(k,v);return!p&&c&&n&&(we=!0,p=P({from:n,allowSelectors:o,direction:r,ignoreElement:t,wrap:!1})),we=!1,p},rn=e=>{try{return e.contentWindow}catch{return null}},Rn=e=>{const n=rn(e);return n?n.document:null},je=e=>{if(!ne(e))return e;const n=Rn(e);return n&&n.activeElement||e},He=(e,n=window)=>{const t=r=>r.display==="none"||r.visibility==="hidden";if(e.style&&t(e.style)||e.hidden)return!0;const o=n.getComputedStyle(e);return!!(!o||t(o))},ae=(e,n=on,t="forwards",o=window,r=!0)=>{const c=a=>{if(!a.matches(n))return{el:a,matched:!1};const v=a.getAttribute("tabindex");if(ne(a)&&(!v||v==="-1")){const m=rn(a);return m?(a=m.document.documentElement,o=m,{el:a,matched:!1,windowContext:m}):{el:a,matched:!0}}return{el:a,matched:!0}};if(r){if(He(e,o))return null;const{el:a,matched:v,windowContext:m}=c(e);return e=a,v?e:(o=m||o,ae(e,n,t,o,!1))}const l=e.shadowRoot;l&&(e=l);const f=e.children,h=f.length,k=a=>{if(He(a,o))return{continue:!0};const{el:v,matched:m,windowContext:B}=c(a);if(a=v,o=B||o,m)return{returnVal:a};const p=ae(a,n,t,o,!1);return p?{returnVal:p}:null};if(t==="forwards")for(let a=0;a<h;a++){let v=f[a];const m=k(v);if(m){if(m.continue)continue;if(m.returnVal)return m.returnVal}}else for(let a=h-1;a>=0;a--){let v=f[a];const m=k(v);if(m){if(m.continue)continue;if(m.returnVal)return m.returnVal}}return null},ne=e=>e.tagName==="IFRAME",_=(e,n,t)=>{for(let o=e.length-1;o>=0;o--){const r=n(e[o]);if(r){t(r);continue}return}},ke=e=>e.offsetHeight===0&&e.offsetWidth===0,S=(e,{inputElement:n,type:t,subType:o})=>{if(n==="menuPopup")return e.menuPopupEl;if(n==="menuButton")return D(e.menuBtnEls);if(t==="focusElementOnOpen")return n==="firstChild"?P({from:e.focusSentinelBeforeEl,stopAtRootElement:e.containerEl}):typeof n=="string"?e.containerEl?.querySelector(n):n instanceof Element?n:n();if(n==null&&t==="menuPopup")return e.containerEl?e.menuPopupEl?e.menuPopupEl:e.containerEl.children[1]:null;if(typeof n=="string"&&t==="menuButton"||typeof n=="string")return document.querySelector(n);if(n instanceof Element)return n;if(typeof n=="function"){const r=n();if(r instanceof Element)return r;if(t==="closeButton")return e.containerEl?e.containerEl.querySelector(r):null}if(t==="focusElementOnClose"){if(!n)return null;switch(o){case"tabForwards":return S(e,{inputElement:n.tabForwards});case"tabBackwards":return S(e,{inputElement:n.tabBackwards});case"click":return S(e,{inputElement:n.click});case"escapeKey":return S(e,{inputElement:n.escapeKey});case"scrolling":return S(e,{inputElement:n.scrolling})}}if(n==null)return null;if(Array.isArray(n))return n.map(r=>S(e,{inputElement:r,type:t}));for(const r in n){const c=n[r];return S(e,{inputElement:c})}return null};let Z=!1;const In=(e,n)=>{const{timeouts:t,closeWhenMenuButtonIsClicked:o,focusedMenuBtn:r,onClickOutsideMenuButtonRef:c,setOpen:l,open:f,deadMenuButton:h}=e,k=n.currentTarget;if(d.focusedMenuBtns.forEach(a=>a.el=null),document.removeEventListener("click",c),setTimeout(()=>{document.addEventListener("click",c,{once:!0})}),h){d.addedDocumentClick=!0,setTimeout(()=>{document.addEventListener("click",H,{once:!0})});return}if(e.menuBtnKeyupTabFired=!1,Z&&!f()){Z=!1;return}if(Z=!1,d.addedDocumentClick=!1,document.removeEventListener("click",H),k.focus(),r.el=k,d.focusedMenuBtns.add(r),clearTimeout(t.containerFocusTimeoutId),clearTimeout(t.menuButtonBlurTimeoutId),t.containerFocusTimeoutId=null,f()||(k.addEventListener("focus",e.onFocusMenuButtonRef,{once:!0}),k.addEventListener("keydown",e.onKeydownMenuButtonRef),k.addEventListener("blur",e.onBlurMenuButtonRef)),!o){l(!0);return}f()&&(d.closedByEvents=!0),l(!f())},Dn=(e,n)=>{const{containerEl:t,focusedMenuBtn:o,overlay:r,setOpen:c,timeouts:l,closeWhenMenuButtonIsClicked:f}=e;if(e.menuBtnKeyupTabFired){e.menuBtnKeyupTabFired=!1;return}if(Z&&!f)return;if(!n.relatedTarget){r||d.addedDocumentClick||(d.addedDocumentClick=!0,document.addEventListener("click",H,{once:!0}));return}if(xe(e),!t||t.contains(n.relatedTarget))return;const h=()=>{d.closedByEvents=!0,o.el=null,c(!1)};l.menuButtonBlurTimeoutId=window.setTimeout(h)},Pn=(e,n)=>{const t=n.currentTarget;if(!e.open()){_(C,o=>{if(!o.containerEl.contains(t))return o},o=>{d.focusedMenuBtns.forEach(r=>r.el=null),d.closedByEvents=!0,o.setOpen(!1)}),Z=!1;return}Z=!0},$n=e=>{e.focusedMenuBtn.el=null},qn=(e,n)=>{const{containerEl:t,setOpen:o,open:r,onKeydownMenuButtonRef:c,onBlurMenuButtonRef:l,mount:f,focusSentinelBeforeEl:h,focusSentinelAfterEl:k,ignoreMenuPopupWhenTabbing:a}=e,v=n.currentTarget;if(n.key!=="Tab"||(d.focusedMenuBtns.forEach(B=>B.el=null),!r()))return;if(e.menuBtnKeyupTabFired=!0,n.key==="Tab"&&n.shiftKey){if(d.closedByEvents=!0,!f||v.nextElementSibling!==t){n.preventDefault();let B=P({from:v,direction:"backwards",ignoreElement:[t,h,k]});B&&B.focus()}o(!1),v.removeEventListener("keydown",c),v.removeEventListener("blur",l);return}if(n.preventDefault(),a){const B=P({from:v,direction:"forwards",ignoreElement:[t,h,k]});B&&B.focus(),o(!1),v.removeEventListener("keydown",c),v.removeEventListener("blur",l);return}let m=P({from:h,stopAtRootElement:t});m?m.focus():t.focus(),m||(o(!1),m=P({from:h}),m&&m.focus()),v.removeEventListener("keydown",c),v.removeEventListener("blur",l)},Kn=e=>{const{closeWhenMenuButtonIsTabbed:n,timeouts:t,deadMenuButton:o,menuBtnEls:r}=e;if(o){const c=D(r);c.addEventListener("blur",e.onBlurMenuButtonRef),c.addEventListener("keydown",e.onKeydownMenuButtonRef),d.addedDocumentClick=!0,setTimeout(()=>{document.addEventListener("click",H,{once:!0})});return}n||clearTimeout(t.containerFocusTimeoutId)},D=e=>{if(!!e)return e.length<=1?e[0]:e.find(n=>{if(!(!n||ke(n)))return n})},un=({focusedMenuBtn:e,timeouts:n,el:t})=>{e.el=t,t.addEventListener("blur",o=>{const r=o.currentTarget;d.focusedMenuBtns.add(e),setTimeout(()=>{!r.isConnected||(e.el=null)})},{once:!0})},zn=({state:e,menuButton:n,open:t})=>{if(Array.isArray(n)&&!n.length)return;const{focusedMenuBtn:o}=e,r=S(e,{inputElement:n,type:"menuButton"});if(!r)return;e.menuBtnEls=Array.isArray(r)?r:[r];const c=C.find(l=>l.uniqueId===e.uniqueId);if(c&&(c.menuBtnEls=e.menuBtnEls),e.deadMenuButton){e.menuBtnEls.forEach(l=>{l.addEventListener("click",e.onClickMenuButtonRef),l.addEventListener("mousedown",e.onMouseDownMenuButtonRef),l.addEventListener("focus",e.onFocusMenuButtonRef)});return}e.menuBtnEls.forEach((l,f,h)=>{o.el&&o.el!==l&&(h.length>1?!ke(l):!0)&&(o.el=l,l.focus({preventScroll:!0}),l.addEventListener("keydown",e.onKeydownMenuButtonRef)),l.setAttribute("type","button"),l.addEventListener("click",e.onClickMenuButtonRef),l.addEventListener("mousedown",e.onMouseDownMenuButtonRef),t()&&(!e.focusElementOnOpen||e.focusElementOnOpen==="menuButton"||e.focusElementOnOpen===e.menuBtnEls)&&!ke(l)&&l.addEventListener("blur",e.onBlurMenuButtonRef,{once:!0})})},sn=(e,n)=>{!e||!e.menuBtnEls||e.menuBtnEls.forEach(t=>{e.deadMenuButton||t.removeEventListener("focus",e.onFocusMenuButtonRef),t.removeEventListener("blur",e.onBlurMenuButtonRef),n&&(t.removeEventListener("click",e.onClickMenuButtonRef),t.removeEventListener("mousedown",e.onMouseDownMenuButtonRef))})};let be=!1,Ae=!1,Y=null,ln=0,Le=null,ce=null;const d={closeByFocusSentinel:!1,closedBySetOpen:!1,addedDocumentClick:!1,documentClickTimeout:null,closedByEvents:!1,focusedMenuBtns:new Set,cursorKeysPrevEl:null},H=e=>{const n=e.target;_(C,t=>{const o=D(t.menuBtnEls);if(!(t.overlay||t.overlayElement||o&&o.contains(n)||t.containerEl.contains(n)))return t},t=>{const{setOpen:o}=t;d.closedByEvents=!0,o(!1)}),d.addedDocumentClick=!1},cn=e=>{const n=C[C.length-1];setTimeout(()=>{const o=e.timeStamp-ln;if(!document.hasFocus()&&o<50){_(C,r=>r,r=>{const{setOpen:c}=r;d.closedByEvents=!0,c(!1)});return}});const t=o=>{if(o.overlay||o.overlayEl||!o.closeWhenDocumentBlurs)return;D(o.menuBtnEls).focus(),d.closedByEvents=!0,o.setOpen(!1)};n.overlay||setTimeout(()=>{const o=document.activeElement;if(!o||o.tagName!=="IFRAME"){_(C,r=>r,r=>t(r));return}_(C,r=>{const{containerEl:c}=r;if(c.contains(o)){ce=o,mn(),document.addEventListener("visibilitychange",fn);return}return r},r=>{const{setOpen:c}=r;d.closedByEvents=!0,c(!1)})})},an=e=>{const{focusedMenuBtn:n,setOpen:t,menuBtnEls:o,cursorKeys:r,closeWhenEscapeKeyIsPressed:c,focusElementOnClose:l,timeouts:f,ignoreMenuPopupWhenTabbing:h,focusSentinelAfterEl:k,focusSentinelBeforeEl:a}=C[C.length-1];if(e.key==="Tab"){if(h){e.preventDefault();const B=e.shiftKey,p=D(o),g=P({from:B?a:k,direction:B?"backwards":"forwards",ignoreElement:p?[p]:[]});g&&g.focus();return}ln=e.timeStamp}if(r&&Nn(e),e.key!=="Escape"||!c)return;const v=D(o),m=S({},{inputElement:l,type:"focusElementOnClose",subType:"escapeKey"})||v;m&&(m.focus(),m===v&&un({focusedMenuBtn:n,timeouts:f,el:m})),d.closedByEvents=!0,t(!1)},Fe=e=>{const n=e.target;Le!==n&&_(C,t=>{const{menuPopupEl:o}=t;return o.contains(n)?(Le=n,null):t},t=>{const{setOpen:o,focusElementOnClose:r,menuBtnEls:c}=t,l=D(c);d.closedByEvents=!0,o(!1);const f=S({},{inputElement:r,type:"focusElementOnClose",subType:"scrolling"})||l;f&&f.focus()})},Wn=e=>{Le=null,!Ae&&e&&(Ae=!1,window.addEventListener("wheel",Fe,{capture:!0,passive:!0}),document.body.addEventListener("touchmove",dn)),!C.length&&(document.addEventListener("keydown",an),window.addEventListener("blur",cn))},Ve=()=>{C.length||(Ae=!1,d.addedDocumentClick=!1,d.cursorKeysPrevEl=null,window.clearTimeout(d.documentClickTimeout),d.documentClickTimeout=null,document.removeEventListener("keydown",an),document.removeEventListener("click",H),window.removeEventListener("blur",cn),window.removeEventListener("wheel",Fe,{capture:!0}),document.body.removeEventListener("touchmove",dn))},dn=()=>{be||(be=!0,document.body.addEventListener("touchend",()=>{be=!1},{once:!0}),window.addEventListener("scroll",Fe,{capture:!0,passive:!0,once:!0}))},Nn=e=>{const n=["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],t=["ArrowLeft","ArrowRight"];if(!n.includes(e.key)||(e.preventDefault(),t.includes(e.key)))return;const{menuBtnEls:o,menuPopupEl:r,containerEl:c,focusSentinelBeforeEl:l,focusSentinelAfterEl:f,cursorKeys:h}=C[C.length-1],k=D(o);let a=d.cursorKeysPrevEl||document.activeElement,v;e.key==="ArrowDown"?v="forwards":v="backwards",(a===k||a===r||a===c)&&(e.key==="ArrowUp"?(v="backwards",a=f):(v="forwards",a=l));const m=typeof h=="object",B=m&&h.wrap;let p=P({from:a,direction:v,stopAtRootElement:r});if(!p&&B){const g=e.key==="ArrowDown"?l:f;v=e.key==="ArrowDown"?"forwards":"backwards",p=P({from:g,direction:v,stopAtRootElement:c})}if(m&&h.onKeyDown){h.onKeyDown({currentEl:p,prevEl:d.cursorKeysPrevEl}),d.cursorKeysPrevEl=p;return}p&&p.focus()},fn=()=>{if(document.visibilityState==="visible"&&Y!=null){mn();return}clearTimeout(Y)},mn=()=>{const n=()=>{const t=document.activeElement;if(!!t){if(ce===t){Y=window.setTimeout(n,250);return}_(C,o=>{const{containerEl:r}=o;if(t.tagName==="IFRAME"){if(r&&!r.contains(t))return o;ce=t,Y=window.setTimeout(n,250)}},o=>{const{setOpen:r}=o;d.closedByEvents=!0,r(!1),ce=null,Y=null,document.removeEventListener("visibilitychange",fn)})}};Y=window.setTimeout(n,250)},_n=e=>{const{menuPopup:n}=e;e.menuPopupAdded||(e.menuPopupEl=S(e,{inputElement:n,type:"menuPopup"}),e.menuPopupEl&&(e.menuPopupAdded=!0,e.menuPopupEl.setAttribute("tabindex","-1")))},Ue=e=>{!e.menuPopupEl||!e.menuPopupAdded||(e.menuPopupEl=null,e.menuPopupAdded=!1)},Ge=e=>{const{useShadow:n}=e,t=e.marker||document.createTextNode(""),o=e.mount||document.body;function r(){if(Bn.context){const[h,k]=Te(!1);return queueMicrotask(()=>k(!0)),()=>h()&&e.popupChildren}else return()=>e.popupChildren}const c=document.createElement("div"),l=n&&c.attachShadow?c.attachShadow({mode:"open"}):c;Object.defineProperty(c,"host",{get(){return t.parentNode}}),Xe(l,r());const f=e.overlayChildren;return f&&c.insertAdjacentElement("afterbegin",f),o.appendChild(c),e.ref&&e.ref(c),e.onCreate!=null&&e.onCreate(o,c,t),e.stopComponentEventPropagation?null:t},jn=e=>e.replace(/-./g,n=>n.toUpperCase()[1]),Hn=e=>{let n,t=!0;const[o,r]=Te(),c=wn(()=>e.children),{onBeforeEnter:l,onEnter:f,onAfterEnter:h,onBeforeExit:k,onExit:a,onAfterExit:v,appendToElement:m}=e;function B(E){const M=e.name||"s",w=jn(E)+"Class",L=e[w];return L?L.split(" "):[`${M}-${E}`]}const p=E=>m?m==="menuPopup"?S({containerEl:E},{inputElement:null,type:"menuPopup"}):typeof m=="string"?E.querySelector(m):m:E;function g(E,M){const w=B("enter"),L=B("enter-active"),A=B("enter-to"),x=p(E);l&&l(x),x.classList.add(...w),x.classList.add(...L),requestAnimationFrame(()=>{requestAnimationFrame(()=>{x.classList.remove(...w),x.classList.add(...A),f&&f(x,z),(!f||f.length<2)&&(x.addEventListener("transitionend",z,{once:!0}),x.addEventListener("animationend",z,{once:!0}))})});function z(){x&&(x.classList.remove(...L),x.classList.remove(...A),o()!==E&&r(E),h&&h(x))}r(E)}function R(E){const M=B("exit"),w=B("exit-active"),L=B("exit-to"),A=p(E);if(!E.parentNode)return x();k&&k(E),A.classList.add(...M),A.classList.add(...w),requestAnimationFrame(()=>{A.classList.remove(...M),A.classList.add(...L)}),a&&a(A,x),(!a||a.length<2)&&(A.addEventListener("transitionend",x,{once:!0}),A.addEventListener("animationend",x,{once:!0}));function x(){A.classList.remove(...w),A.classList.remove(...L),o()===E&&r(void 0),v&&v(A)}}return Ye(E=>{for(n=c();typeof n=="function";)n=n();return Ze(()=>(n&&n!==E&&g(n,E),E&&E!==n&&R(E),t=!1,n))}),[o]},Je=(e,{isCleanup:n=!1}={})=>{document.removeEventListener("click",e.onClickDocumentRef),sn(e,n)},Vn=(e,n)=>{const{overlay:t,overlayElement:o,open:r,mount:c,setOpen:l,timeouts:f,stopComponentEventPropagation:h,focusedMenuBtn:k,menuButton:a,deadMenuButton:v}=e,m=n.relatedTarget;if(!t&&!o&&!!r()&&!d.closedBySetOpen){if(c&&h){d.addedDocumentClick||(d.addedDocumentClick=!0,document.addEventListener("click",H,{once:!0}));return}if(!m){if(C.find(B=>B.overlay))return;d.addedDocumentClick||(d.addedDocumentClick=!0,document.addEventListener("click",H,{once:!0}));return}m===a&&v||(f.containerFocusTimeoutId=window.setTimeout(()=>{d.closedByEvents=!0,l(!1)}))}},Un=(e,n)=>{const{timeouts:t}=e;clearTimeout(t.containerFocusTimeoutId),clearTimeout(t.menuButtonBlurTimeoutId),t.containerFocusTimeoutId=null},Gn=e=>{const{focusElementOnOpen:n,focusedMenuBtn:t}=e;if(n==null)return;const o=S(e,{inputElement:n,type:"focusElementOnOpen"});o&&setTimeout(()=>{o.focus(),t.el=null})},Jn=e=>{const{closeWhenOverlayClicked:n,menuPopupEl:t,focusElementOnClose:o,menuBtnEls:r}=e;if(!n){t.focus();return}const c=D(r),l=S(e,{inputElement:o,type:"focusElementOnClose",subType:"click"})||c;l&&l.focus(),_(C,f=>{if(!f.overlayElement)return f},f=>{const{setOpen:h}=f;d.closedByEvents=!0,h(!1)}),d.closedByEvents=!0,e.setOpen(!1)},Qn=({parent:e,matchEl:n})=>{if(e===n)return!0;const t=o=>{if(!o)return!1;const r=o.children[0];return r===n?!0:t(r)};return t(e)},Xn=e=>{const{enableLastFocusSentinel:n,menuBtnEls:t,containerEl:o,focusSentinelAfterEl:r}=e;if(n){r.setAttribute("tabindex","0");return}if(!t)return;const l=D(t).nextElementSibling;Qn({parent:l,matchEl:o})||r.setAttribute("tabindex","0")},Qe=(e,n,t)=>{const{uniqueId:o,containerEl:r,menuBtnEls:c,focusSentinelBeforeEl:l,trapFocus:f,focusSentinelAfterEl:h,closeWhenMenuButtonIsTabbed:k,focusElementOnClose:a,mount:v,open:m,setOpen:B}=e,p=D(c);C.forEach(E=>window.clearTimeout(E.timeouts.containerFocusTimeoutId));const g=(E,M)=>{_(C,w=>{if(M&&D(w.menuBtnEls)===E&&!w.closeWhenMenuButtonIsTabbed){p.addEventListener("focus",e.onFocusMenuButtonRef,{once:!0}),p.addEventListener("keydown",e.onKeydownMenuButtonRef),p.addEventListener("blur",e.onBlurMenuButtonRef,{once:!0});return}if(w.uniqueId===o||!w.containerEl.contains(E))return w},w=>{d.closedByEvents=!0,w.setOpen(!1)}),E&&E.focus()};if(!m())return;if(p&&(t===r||t===p)){P({from:l,direction:"forwards",stopAtRootElement:r}).focus();return}if(n==="before"){if(f){P({from:h,direction:"backwards",stopAtRootElement:r}).focus();return}if(k){d.closedByEvents=!0,B(!1),p.focus();return}const E=S(e,{inputElement:a,type:"focusElementOnClose",subType:"tabBackwards"})||p;if(!e.menuBtnEls){E.focus();return}g(E,!0);return}if(f){P({from:l,stopAtRootElement:r}).focus();return}const R=S(e,{inputElement:a,type:"focusElementOnClose",subType:"tabForwards"})||P({from:p,ignoreElement:[r]});if(v){g(R);return}R&&R.focus(),d.closedByEvents=!0,B(!1)},Yn=V('<div role="presentation"></div>'),Zn=V('<div><div style="position: fixed; top: 0; left: 0; outline: none; pointer-events: none; width: 0; height: 0;" aria-hidden="true"></div><div style="position: fixed; top: 0; left: 0; outline: none; pointer-events: none; width: 0; height: 0;" aria-hidden="true"></div></div>'),et=e=>{const n=e.modal||!1,{id:t,menuButton:o,menuPopup:r,focusElementOnClose:c,focusElementOnOpen:l,cursorKeys:f=!1,closeWhenMenuButtonIsTabbed:h=!1,closeWhenMenuButtonIsClicked:k=!0,closeWhenScrolling:a=!1,closeWhenDocumentBlurs:v=!1,closeWhenOverlayClicked:m=!0,closeWhenEscapeKeyIsPressed:B=!0,overlay:p=n,overlayElement:g=n,trapFocus:R=n,removeScrollbar:E=n,enableLastFocusSentinel:M=!1,mount:w=n?"body":void 0,show:L=!1,onToggleScrollbar:A,onOpen:x,deadMenuButton:z,ignoreMenuPopupWhenTabbing:Se}=e,s={mount:w,addedFocusOutAppEvents:!1,closeWhenOverlayClicked:m,closeWhenDocumentBlurs:v,closeWhenEscapeKeyIsPressed:B,closeWhenMenuButtonIsClicked:k,closeWhenMenuButtonIsTabbed:h,closeWhenScrolling:a,cursorKeys:f,focusElementOnClose:c,deadMenuButton:z,focusElementOnOpen:l,ignoreMenuPopupWhenTabbing:Se,id:t,uniqueId:Cn(),menuBtnId:"",focusedMenuBtn:{el:null},menuBtnKeyupTabFired:!1,menuButton:o,timeouts:{containerFocusTimeoutId:null,menuButtonBlurTimeoutId:null},upperStackRemovedByFocusOut:!1,menuPopup:r,closeByDismissEvent:!1,menuPopupAdded:!1,enableLastFocusSentinel:M,overlay:p,overlayElement:g,removeScrollbar:E,trapFocus:R,hasFocusSentinels:!!c||p||!!g||R||M,open:e.open,setOpen:e.setOpen,onClickOutsideMenuButtonRef:()=>$n(s),onClickDocumentRef:i=>Mn(s,i),onClickOverlayRef:()=>Jn(s),onFocusInContainerRef:i=>Un(s),onFocusOutContainerRef:i=>Vn(s,i),onBlurMenuButtonRef:i=>Dn(s,i),onClickMenuButtonRef:i=>In(s,i),onMouseDownMenuButtonRef:i=>Pn(s,i),onFocusFromOutsideAppOrTabRef:i=>On(s,i),onFocusMenuButtonRef:()=>Kn(s),onKeydownMenuButtonRef:i=>qn(s,i),refContainerCb:i=>{if(g&&(i.style.zIndex="1000",n)){i.style.pointerEvents="none",i.style.position="relative";const u=b=>{b.style.pointerEvents="all"};requestAnimationFrame(()=>{const b=i.querySelector('[role="dialog"]');if(!b){const T=i.children;if(!T)return;const F=T[1].firstElementChild;u(F);return}u(b)})}e.ref&&e.ref(i),s.containerEl=i},refOverlayCb:i=>{i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.zIndex="1000",typeof g=="object"&&g.ref&&g.ref(i),s.overlayEl=i}};let de=w&&!$e?document.createTextNode(""):null;const fe=!e.open();let W,j,me,ve,Ee,ye,te=!1;function Oe(i,u){return g&&(i=i.nextElementSibling),u?u==="menuPopup"?S({containerEl:i},{inputElement:null,type:"menuPopup"}):typeof u=="string"?i.querySelector(u):u:i}function Me(i,u){if(i==="overlay"&&(!e.overlay||!e.overlay.animation))return;const b=i==="popup"?e.animation:e.overlay.animation;if(!b||!b.appear&&!fe)return;te=!1,u=Oe(u,b.appendToElement);const T=b.name;let{onBeforeEnter:I,onEnter:F,onAfterEnter:K,enterActiveClass:O=T+"-enter-active",enterClass:U=T+"-enter",enterToClass:G=T+"-enter-to",exitActiveClass:J=T+"-exit-active",exitClass:Q=T+"-exit",exitToClass:X=T+"-exit-to"}=b;const N=U.split(" "),pe=O.split(" "),Pe=G.split(" "),hn=Q.split(" "),pn=J.split(" "),gn=X.split(" ");i==="popup"?(u.removeEventListener("transitionend",me),u.removeEventListener("animationend",me)):(u.removeEventListener("transitionend",Ee),u.removeEventListener("animationend",Ee)),I&&I(u),u.classList.remove(...hn,...pn,...gn),u.classList.add(...N),u.classList.add(...pe),requestAnimationFrame(()=>{requestAnimationFrame(()=>{u.classList.remove(...N),u.classList.add(...Pe),F&&F(u,ee),(!F||F.length<2)&&(i==="popup"?ve=ee:ye=ee,u.addEventListener("transitionend",ee,{once:!0}),u.addEventListener("animationend",ee,{once:!0}))})});function ee(){u&&(u.classList.remove(...pe),u.classList.remove(...Pe),K&&K(u))}}function oe(i,u){if(!e.animation){j?.removeChild(W),W=null,j=null;return}if(i==="overlay"&&(!e.overlay||!e.overlay.animation))return;const b=i==="popup"?e.animation:e.overlay.animation;te=!0,u=Oe(u,b.appendToElement);const T=b.name;let{onBeforeExit:I,onExit:F,onAfterExit:K,exitActiveClass:O=T+"-exit-active",exitClass:U=T+"-exit",exitToClass:G=T+"-exit-to"}=b;const J=U.split(" "),Q=O.split(" "),X=G.split(" ");if(i==="popup"?(u.removeEventListener("transitionend",ve),u.removeEventListener("animationend",ve)):(u.removeEventListener("transitionend",ye),u.removeEventListener("animationend",ye)),!u.parentNode)return N();I&&I(u),u.classList.add(...J),u.classList.add(...Q),requestAnimationFrame(()=>{u.classList.remove(...J),u.classList.add(...X)}),F&&F(u,N),(!F||F.length<2)&&(i==="popup"?me=N:Ee=N,u.addEventListener("transitionend",N,{once:!0}),u.addEventListener("animationend",N,{once:!0}));function N(){te=!1,j?.removeChild(W),he(!1),d.closedBySetOpen=!1,s.menuBtnEls&&(p||g)&&document.activeElement===document.body&&D(s.menuBtnEls).focus(),K&&K(u),W=null,j=null}}const he=i=>{if(A){if(i){if(C.length>1)return;A.onRemove()}else{if(C.length)return;A.onRestore()}return}if(!E||C.length>1)return;const u=document.scrollingElement;i?u.style.overflow="hidden":u.style.overflow=""},vn=()=>{const i=document.activeElement;if(i!==document.body&&s.menuBtnEls.every(K=>i!==K)&&!s.containerEl?.contains(i))return;const{menuBtnEls:u,focusedMenuBtn:b,timeouts:T}=s,I=D(u),F=S(s,{inputElement:c,type:"focusElementOnClose",subType:"click"})||I;F&&(F.focus(),F===I&&un({focusedMenuBtn:b,timeouts:T,el:F}))},En=()=>{if(d.closedByEvents)return;const i=document.activeElement;if(s.menuBtnEls.every(u=>i!==u)&&!s.containerEl?.contains(i)){setTimeout(()=>{d.closedBySetOpen=!1});return}d.closedBySetOpen||(d.addedDocumentClick=!1,document.removeEventListener("click",H),d.closedBySetOpen=!0,setTimeout(()=>{d.closedBySetOpen=!1,vn()}))};qe(ge(()=>typeof e.menuButton=="function"?e.menuButton():e.menuButton,i=>{zn({state:s,menuButton:i,open:e.open}),Ke(()=>{!s||$e||sn(s,!0)})})),L&&w&&Ge({mount:typeof w=="string"?document.querySelector(w):w,popupChildren:re(e.children),overlayChildren:g?Re():null,marker:de,onCreate:(i,u)=>{j=i,W=u}}),Ye(ge(()=>!!e.open(),(i,u)=>{i!==u&&(i||(s.focusSentinelAfterEl&&(s.focusSentinelAfterEl.tabIndex=-1),En()),!(!w||L)&&(i?(j||Ge({mount:typeof w=="string"?document.querySelector(w):w,popupChildren:re(e.children),overlayChildren:g?Re():null,marker:de,onCreate:(b,T)=>{j=b,W=T}}),Me("popup",W?.firstElementChild),Me("overlay",s.overlayEl)):(oe("popup",W?.firstElementChild),oe("overlay",s.overlayEl))))},{defer:fe})),qe(ge(()=>!!e.open(),(i,u)=>{i!==u&&(i?(d.closedByEvents=!1,_n(s),Gn(s),Wn(a),Sn({id:t,uniqueId:s.uniqueId,open:e.open,setOpen:e.setOpen,containerEl:s.containerEl,menuBtnEls:s.menuBtnEls,focusedMenuBtn:s.focusedMenuBtn,overlayEl:s.overlayEl,menuPopupEl:s.menuPopupEl,overlay:p,closeWhenDocumentBlurs:v,closeWhenEscapeKeyIsPressed:B,closeWhenMenuButtonIsTabbed:h,overlayElement:g,cursorKeys:f,focusElementOnClose:c,focusSentinelBeforeEl:s.focusSentinelBeforeEl,focusSentinelAfterEl:s.focusSentinelAfterEl,ignoreMenuPopupWhenTabbing:Se,upperStackRemovedByFocusOut:!1,detectIfMenuButtonObscured:!1,queueRemoval:!1,timeouts:s.timeouts}),x&&x(i,{uniqueId:s.uniqueId,dismissStack:C}),he(i),Xn(s)):(d.closedByEvents=!1,Je(s),xe(s),Ue(s),_e(s.uniqueId),Ve(),x&&x(i,{uniqueId:s.uniqueId,dismissStack:C}),e.animation||he(i)))},{defer:fe})),Ke(()=>{Je(s,{isCleanup:!0}),Ue(s),xe(s),_e(s.uniqueId),Ve(),!L&&w&&j&&!te&&(oe("popup",W?.firstElementChild),oe("overlay",s.overlayEl))});function Re(){return(()=>{const i=Yn.cloneNode(!0),u=s.refOverlayCb;return typeof u=="function"?ie(u,i):s.refOverlayCb=i,Be(i,"click",s.onClickOverlayRef,!0),ze(b=>{const T=typeof e.overlayElement=="object"?e.overlayElement.class:void 0,I=typeof e.overlayElement=="object"?e.overlayElement.classList||{}:{};return T!==b._v$&&We(i,b._v$=T),b._v$2=Ne(i,I,b._v$2),b},{_v$:void 0,_v$2:void 0}),i})()}function re(i){return(()=>{const u=Zn.cloneNode(!0),b=u.firstChild,T=b.nextSibling,I=s.refContainerCb;typeof I=="function"?ie(I,u):s.refContainerCb=u,Be(u,"focusout",s.onFocusOutContainerRef,!0),Be(u,"focusin",s.onFocusInContainerRef,!0);const F=s.focusSentinelBeforeEl;typeof F=="function"?ie(F,b):s.focusSentinelBeforeEl=b,b.addEventListener("focus",O=>{Qe(s,"before",O.relatedTarget)}),Xe(u,i,T);const K=s.focusSentinelAfterEl;return typeof K=="function"?ie(K,T):s.focusSentinelAfterEl=T,T.addEventListener("focus",()=>{Qe(s,"after")}),ze(O=>{const U=s.id,G=e.class,J=e.classList||{},Q=e.open()?"0":"-1",X=e.open()&&s.hasFocusSentinels?"0":"-1";return U!==O._v$3&&le(u,"id",O._v$3=U),G!==O._v$4&&We(u,O._v$4=G),O._v$5=Ne(u,J,O._v$5),Q!==O._v$6&&le(b,"tabindex",O._v$6=Q),X!==O._v$7&&le(T,"tabindex",O._v$7=X),O},{_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),u})()}if(w)return de;if(L)return re(e.children);let Ie=!1;const yn=Ce(()=>e.open(),!1,{equals:(i,u)=>Ie?i===u:!i==!u}),De=Ce(()=>{const i=yn();if(i){const u=e.children;return(Ie=typeof u=="function"&&u.length>0)?Ze(()=>u(i)):re(u)}});return e.animation?y(Hn,xn(()=>e.animation,{get name(){return e.animation.name},get enterClass(){return e.animation.enterClass},get enterActiveClass(){return e.animation.enterActiveClass},get enterToClass(){return e.animation.enterToClass},get exitClass(){return e.animation.exitClass},get exitActiveClass(){return e.animation.exitActiveClass},get exitToClass(){return e.animation.exitToClass},get appear(){return e.animation.appear},get children(){return De()}})):De};bn(["click","focusin","focusout"]);const nt=V('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),tt=V('<svg><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg>',4,!0),ot=en(()=>[nt.cloneNode(!0),tt.cloneNode(!0)],"Info"),rt=V('<svg><path d="M0 0h24v24H0z" fill="none"></path></svg>',4,!0),it=V('<svg><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>',4,!0),ut=en(()=>[rt.cloneNode(!0),it.cloneNode(!0)],"ArrowForward"),st="/assets/location.4dbf869a.svg",lt=V("<br>"),ct=V('<img height="100%">'),dt=({title:e,address:n,bookList:t,imgSrc:o})=>y(ue,{disableGutters:!0,maxWidth:!1,sx:{display:"flex",flexDirection:"column",m:"30px 0",p:0},get children(){return[y(ue,{maxWidth:!1,sx:{padding:"0 2%"},get children(){return[y(ue,{maxWidth:!1,sx:{display:"flex",flexDirection:"row",alignItems:"center"},get children(){return[y($,{width:"45vw",mr:"10%",get children(){return[y(q,{fontFamily:"Druzhok",fontSize:"4.5vw",lineHeight:"100%",children:e}),y(q,{color:"#E15F41",fontFamily:"Actay",fontSize:"1.5vw",fontStyle:"italic",sx:{ml:"44px"},get children(){return["\u0410\u0434\u0440\u0435\u0441: ",n]}})]}}),y($,{width:"35vw",get children(){return y(nn,{sx:{bgcolor:"#ACCDAA",color:"#000",height:"5vw",width:"35vw",borderRadius:"50px",border:"5px solid #000"},href:"/support",get children(){return[y(q,{fontFamily:"Actay",fontSize:"2.5vw",lineHeight:"100%",children:"\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C"}),y(ut,{sx:{fontSize:"4vw"}})]}})}})]}}),y(ue,{maxWidth:!1,sx:{display:"flex",flexDirection:"row",mt:"2%"},get children(){return[y($,{sx:{backgroundImage:`url(${o})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"35vw auto",border:"5px solid #000",borderRadius:"30px",width:"35vw",height:"19.5vw",m:"0 4%"}}),y($,{sx:{},get children(){return[y(q,{fontFamily:"Actay",fontSize:"3.5vw",mb:"10px",color:"#E15F41",children:"\u0421\u041F\u0418\u0421\u041E\u041A \u041A\u041D\u0418\u0413"}),y(kn,{each:t,children:r=>y(q,{fontFamily:"Actay",fontSize:"1.2vw",lineHeight:"100%",fontStyle:"italic",children:r})})]}})]}})]}}),y($,{sx:{width:"100vw",height:"5vw",bgcolor:"#E15F41",mt:"1%"}})]}}),ft=({date:e,time:n,img:t,title:o,place:r})=>y(An,{sx:{fontSize:"1.2vw",p:"10px 0",height:"17vw",width:"22.5vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",borderRight:"3px solid black","&:last-child":{borderRight:"none"}},get children(){return[y($,{sx:{display:"flex"},get children(){return[y(q,{sx:{fontSize:"1.5vw",fontFamily:"Actay"},children:e}),Ce(()=>n&&y(q,{sx:{color:"#E15F41",ml:"0.5vw",fontSize:"1.5vw",fontFamily:"Actay"},children:n}))]}}),y($,{sx:{height:"11vw",width:"20vw",backgroundImage:`url(${t})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"20vw"}}),y($,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},get children(){return[y(q,{sx:{fontFamily:"Actay",fontSize:"1vw",textAlign:"center"},children:o}),y(q,{sx:{fontFamily:"Actay",fontSize:"1vw",textAlign:"center",color:"#E1A632"},children:r})]}})]}}),se=({children:e,href:n})=>y(nn,{sx:{height:"4vw",color:"#000",fontSize:"1.4vw",lineHeight:"100%",letterSpacing:"0.1rem",fontFamily:"Actay",textAlign:"center"},href:n,children:e}),mt=()=>y($,{component:"header",sx:{display:"flex",alignItems:"center",width:"100%",justifyContent:"space-between",mt:"2.5vw",p:"0 8%",textAlign:"center"},get children(){return[y(se,{href:"/",children:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F"}),y(se,{href:"/monster",get children(){return["\u041A\u043D\u0438\u0436\u043D\u044B\u0439",lt.cloneNode(!0),"\u043C\u043E\u043D\u0441\u0442\u0440"]}}),y(se,{href:"/libraries",children:"\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438"}),y(se,{href:"/playbill",children:"\u0410\u0444\u0438\u0448\u0430"})]}}),vt=({amount:e,id:n,tooltip:t})=>{var o;const[r,c]=Te(!1);return y($,{sx:{display:"flex",position:"relative",height:"14vw",flexDirection:"column",alignItems:"center"},get children(){return[y(Ln,{ref(l){const f=o;typeof f=="function"?f(l):o=l},sx:{position:"absolute",right:"25%",top:"-5%",p:0},get children(){return y(ot,{sx:{fontSize:"2.5vw",color:"#FFD93B"}})}}),y(et,{menuButton:o,open:r,setOpen:c,get children(){return y($,{sx:{position:"absolute",borderRadius:"10px",width:"fit-content",display:"flex",alignItems:"center",p:"0.3vw",boxShadow:"#00000029 0 0 25px",top:"15%",transform:"translate(10%, 0)",bgcolor:"#fff",zIndex:1},get children(){return y(q,{fontFamily:"Actay",fontSize:"1vw",textAlign:"center",children:t})}})}}),y($,{children:n,sx:{position:"absolute",fontSize:"3vw",fontFamily:"Actay",top:"15%"}}),(()=>{const l=ct.cloneNode(!0);return le(l,"src",st),l})(),y(q,{fontFamily:"Actay",mt:"12.5%",fontSize:"1.5vw",get children(){return[e," \u0440\u0443\u0431"]}})]}})};export{et as D,vt as L,se as N,mt as P,ft as a,dt as b};
