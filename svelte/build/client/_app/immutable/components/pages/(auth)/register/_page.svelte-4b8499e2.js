import{S as le,i as re,s as se,k as y,q as B,a as k,l as N,m as M,r as C,h as w,c as A,n as u,b as O,G as f,M as te,N as ie,J as Z,u as X,B as W,O as oe,P as ne,w as L,I as fe,x as j,y as z,K as me,f as R,t as G,z as V,L as ce}from"../../../../chunks/index-29f9af01.js";import{i as ue,L as Q}from"../../../../chunks/LoginInput-71842399.js";function de(r){let e,t,n,a;return{c(){e=y("span"),t=y("img"),a=B(`
            Пароли не совпадают`),this.h()},l(i){e=N(i,"SPAN",{class:!0});var l=M(e);t=N(l,"IMG",{src:!0,alt:!0,class:!0}),a=C(l,`
            Пароли не совпадают`),l.forEach(w),this.h()},h(){ne(t.src,n=ue)||u(t,"src",n),u(t,"alt","error"),u(t,"class","h-5 mr-1"),u(e,"class","text-sm text-red-400 mt-[0.35rem] flex items-center ml-2")},m(i,l){O(i,e,l),f(e,t),f(e,a)},p:W,d(i){i&&w(e)}}}function _e(r){let e,t,n,a,i;return{c(){e=y("span"),t=y("img"),a=k(),i=B(r[2]),this.h()},l(l){e=N(l,"SPAN",{class:!0});var o=M(e);t=N(o,"IMG",{src:!0,alt:!0,class:!0}),a=A(o),i=C(o,r[2]),o.forEach(w),this.h()},h(){ne(t.src,n=ue)||u(t,"src",n),u(t,"alt","error"),u(t,"class","h-5 mr-1"),u(e,"class","text-sm text-red-400 mt-[0.35rem] flex items-center ml-2")},m(l,o){O(l,e,o),f(e,t),f(e,a),f(e,i)},p(l,o){o&4&&X(i,l[2])},d(l){l&&w(e)}}}function he(r){let e,t,n,a,i,l,o,q,h,p;function g(s,m){if(s[6])return _e;if(s[3])return de}let b=g(r),d=b&&b(r);return{c(){e=y("div"),t=y("label"),n=B(r[0]),i=k(),l=y("input"),q=k(),d&&d.c(),this.h()},l(s){e=N(s,"DIV",{class:!0});var m=M(e);t=N(m,"LABEL",{for:!0,class:!0});var P=M(t);n=C(P,r[0]),P.forEach(w),i=A(m),l=N(m,"INPUT",{class:!0,name:!0,id:!0,pattern:!0}),q=A(m),d&&d.l(m),m.forEach(w),this.h()},h(){u(t,"for","email"),u(t,"class",a="text-md mb-1 ml-2 "+((r[6]||r[3])&&"text-red-400")),u(l,"class",o="text-sm bg-gray-200 px-2 rounded-xl h-11 "+((r[6]||r[3])&&"border-2 border-red-400")+" w-full"),u(l,"name",r[1]),u(l,"id",r[1]),u(l,"pattern",r[5]),l.required=!0,u(e,"class","flex flex-col mb-4")},m(s,m){O(s,e,m),f(e,t),f(t,n),f(e,i),f(e,l),te(l,r[7]),f(e,q),d&&d.m(e,null),h||(p=[ie(r[9].call(null,l)),Z(l,"invalid",r[11]),Z(l,"change",r[12]),Z(l,"input",r[13])],h=!0)},p(s,[m]){m&1&&X(n,s[0]),m&72&&a!==(a="text-md mb-1 ml-2 "+((s[6]||s[3])&&"text-red-400"))&&u(t,"class",a),m&72&&o!==(o="text-sm bg-gray-200 px-2 rounded-xl h-11 "+((s[6]||s[3])&&"border-2 border-red-400")+" w-full")&&u(l,"class",o),m&2&&u(l,"name",s[1]),m&2&&u(l,"id",s[1]),m&32&&u(l,"pattern",s[5]),m&128&&l.value!==s[7]&&te(l,s[7]),b===(b=g(s))&&d?d.p(s,m):(d&&d.d(1),d=b&&b(s),d&&(d.c(),d.m(e,null)))},i:W,o:W,d(s){s&&w(e),d&&d.d(),h=!1,oe(p)}}}function pe(r,e,t){let{label:n}=e,{type:a}=e,{id:i}=e,{errorMsg:l}=e,{pwdNotEqual:o}=e,{on_change:q}=e,{pattern:h}=e;var p=!1,g;const b=new RegExp(h),d=_=>{_.type=a},s=()=>{t(6,p=!0)},m=()=>{q(),h&&t(6,p=!b.test(g))};function P(){g=this.value,t(7,g)}return r.$$set=_=>{"label"in _&&t(0,n=_.label),"type"in _&&t(10,a=_.type),"id"in _&&t(1,i=_.id),"errorMsg"in _&&t(2,l=_.errorMsg),"pwdNotEqual"in _&&t(3,o=_.pwdNotEqual),"on_change"in _&&t(4,q=_.on_change),"pattern"in _&&t(5,h=_.pattern)},[n,i,l,o,q,h,p,g,b,d,a,s,m,P]}class ge extends le{constructor(e){super(),re(this,e,pe,he,se,{label:0,type:10,id:1,errorMsg:2,pwdNotEqual:3,on_change:4,pattern:5})}}function ae(r){let e,t;return{c(){e=y("span"),t=B(r[3]),this.h()},l(n){e=N(n,"SPAN",{class:!0});var a=M(e);t=C(a,r[3]),a.forEach(w),this.h()},h(){u(e,"class","text-red-500 text-xl text-center mt-16")},m(n,a){O(n,e,a),f(e,t)},p(n,a){a&8&&X(t,n[3])},d(n){n&&w(e)}}}function be(r){let e,t,n,a,i,l,o,q,h,p,g,b,d,s,m,P,_,S,J,F,U,D,K,Y;i=new Q({props:{label:"Никнейм",type:"text",id:"nickname",pattern:"^[^0-9][a-zA-Z0-9]{4,}$",errorMsg:"Никнейм должен содержать не менее 5 латинских букв и цифр"}}),o=new Q({props:{label:"Email",type:"email",id:"email",pattern:"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",errorMsg:"Неверный Email"}}),h=new Q({props:{label:"Пароль",type:"password",id:"password",pattern:"^(?=.*[0-9])(?=.*[!_@#$%^&*])[a-zA-Z0-9!_@#$%^&*]{6,16}$",errorMsg:"Пароль должен быть не короче 6 символов и состоять из латинского алфавита, цифр и спецсимволов"}}),g=new ge({props:{label:"Повторите пароль",type:"password",id:"repeat",pattern:"^(?=.*[0-9])(?=.*[!_@#$%^&*])[a-zA-Z0-9!_@#$%^&*]{6,16}$",errorMsg:"Невалидный пароль",pwdNotEqual:r[0],on_change:r[5]}});let E=r[2]&&ae(r);return{c(){e=k(),t=y("div"),n=y("div"),a=y("form"),L(i.$$.fragment),l=k(),L(o.$$.fragment),q=k(),L(h.$$.fragment),p=k(),L(g.$$.fragment),b=k(),E&&E.c(),d=k(),s=y("button"),m=B("Присоединиться"),_=k(),S=y("span"),J=B(`Уже есть аккаунт? 
                `),F=y("a"),U=B("Войти"),this.h()},l(c){fe("svelte-pfaiqq",document.head).forEach(w),e=A(c),t=N(c,"DIV",{class:!0});var T=M(t);n=N(T,"DIV",{class:!0});var x=M(n);a=N(x,"FORM",{class:!0});var v=M(a);j(i.$$.fragment,v),l=A(v),j(o.$$.fragment,v),q=A(v),j(h.$$.fragment,v),p=A(v),j(g.$$.fragment,v),b=A(v),E&&E.l(v),d=A(v),s=N(v,"BUTTON",{type:!0,class:!0});var $=M(s);m=C($,"Присоединиться"),$.forEach(w),_=A(v),S=N(v,"SPAN",{class:!0});var H=M(S);J=C(H,`Уже есть аккаунт? 
                `),F=N(H,"A",{href:!0,class:!0});var ee=M(F);U=C(ee,"Войти"),ee.forEach(w),H.forEach(w),v.forEach(w),x.forEach(w),T.forEach(w),this.h()},h(){document.title="Book и друг | Регистрация",u(s,"type","submit"),u(s,"class",P="bg-red-400 rounded-xl w-full h-12 font-semibold "+(r[2]&&"mt-20")+" mt-32"),u(F,"href","/login"),u(F,"class","text-blue-800"),u(S,"class","mt-2 ml-3"),u(a,"class","flex flex-col w-[70%]"),u(n,"class","flex md:w-1/2 sm:w-full h-full bg-white items-center justify-center shadow-2xl"),u(t,"class","fixed w-full h-full bg-gray-200")},m(c,I){O(c,e,I),O(c,t,I),f(t,n),f(n,a),z(i,a,null),f(a,l),z(o,a,null),f(a,q),z(h,a,null),f(a,p),z(g,a,null),f(a,b),E&&E.m(a,null),f(a,d),f(a,s),f(s,m),f(a,_),f(a,S),f(S,J),f(S,F),f(F,U),r[6](a),D=!0,K||(Y=Z(a,"submit",me(r[4])),K=!0)},p(c,[I]){const T={};I&1&&(T.pwdNotEqual=c[0]),g.$set(T),c[2]?E?E.p(c,I):(E=ae(c),E.c(),E.m(a,d)):E&&(E.d(1),E=null),(!D||I&4&&P!==(P="bg-red-400 rounded-xl w-full h-12 font-semibold "+(c[2]&&"mt-20")+" mt-32"))&&u(s,"class",P)},i(c){D||(R(i.$$.fragment,c),R(o.$$.fragment,c),R(h.$$.fragment,c),R(g.$$.fragment,c),D=!0)},o(c){G(i.$$.fragment,c),G(o.$$.fragment,c),G(h.$$.fragment,c),G(g.$$.fragment,c),D=!1},d(c){c&&w(e),c&&w(t),V(i),V(o),V(h),V(g),E&&E.d(),r[6](null),K=!1,Y()}}}function we(r,e,t){var n=!1,a,i=!1,l="";async function o(p){if(n)return;let g=Object.fromEntries(new FormData(a));await fetch("/auth/register",{method:"POST",body:JSON.stringify(g),headers:{"Content-Type":"application/json"}}).then(b=>{if(b.ok&&b.redirected){window.location.assign(b.url);return}t(2,i=!0),t(3,l=b.status===409?"Пользователь с таким именем уже существует!":"Произошла ошибка, попробуйте позже!")})}function q(){let p=Object.fromEntries(new FormData(a));console.log(p),t(0,n=p.password!==p.repeat)}function h(p){ce[p?"unshift":"push"](()=>{a=p,t(1,a)})}return[n,a,i,l,o,q,h]}class ye extends le{constructor(e){super(),re(this,e,we,be,se,{})}}export{ye as default};
