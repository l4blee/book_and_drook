import{a as g,D as m,h as f,v as t,C as p,B as n,T as l,r as d,q as c,e as w,t as i}from"./index.064c236d.js";import{P as x,L as o}from"./components.0027740c.js";import{g as y}from"./utils.2c17fa12.js";const v="/assets/monster.fd8e13e1.svg",b="/assets/hungry.a02d6f8b.svg",C="/assets/monsterRoar.9c6f55ed.mp3",D="/assets/monsterBook.d1618334.svg",E=i('<img width="100%" height="100%" style="z-index: 0">'),A=i('<img height="100%" style="z-index: 1">'),$=i('<img width="100%">'),B=i("<br>"),F=()=>{const u=y(),r=new Audio(C);r.volume=.1;const[s,a]=g(0);m(()=>{document.title="Book \u0438 \u0434\u0440\u0443\u0433 | \u041A\u043D\u0438\u0436\u043D\u044B\u0439 \u043C\u043E\u043D\u0441\u0442\u0440"}),f(()=>{a((u()?.donated||0)/5e3)});async function h(){r.currentTime=0,r.play(),a(0);do a(s()+.003),await new Promise(e=>setTimeout(e,8));while(s()<(u()?.donated||0)/5e3)}return t(n,{sx:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},get children(){return[t(x,{}),t(p,{maxWidth:!1,sx:{height:"100%",mt:"4vw",position:"relative",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"space-between"},get children(){return[t(n,{sx:{width:"fit-content",position:"absolute",right:"2%",display:"flex",zIndex:1},get children(){return[t(l,{fontSize:"2vw",fontFamily:"Actay",fontWeight:"bold",get children(){return["\u041C\u043E\u043D\u0441\u0442\u0440 \u0434\u043E\u0432\u043E\u043B\u0435\u043D \u043D\u0430:","\xA0"]}}),t(l,{fontSize:"2vw",fontFamily:"Actay",fontWeight:"bold",fontStyle:"italic",get children(){return[d(()=>d(()=>!!u()?.donated)()?u()?.donated:0)," \u0440\u0443\u0431"]}})]}}),t(n,{sx:{height:"35vw",width:"100%",position:"relative",display:"flex",flexDirection:"row"},get children(){return[t(n,{sx:{width:"75%",display:"flex",alignItems:"center",position:"absolute",top:"45%",left:"16%"},get children(){return[t(n,{sx:{display:"flex",flexDirection:"row",position:"absolute",width:"96%",justifyContent:"space-between",height:"10vw",top:"-150%",right:"-5%",zIndex:1},get children(){return[t(o,{amount:1e3,id:1}),t(o,{amount:2300,id:2}),t(o,{amount:3600,id:3}),t(o,{amount:5e3,id:4})]}}),t(n,{get sx(){return{bgcolor:"#ACCDAA",width:s()-.03,height:"90%",position:"absolute",left:"1.6%",borderRadius:"0 10vw 10vw 0",border:"2px solid"}}}),(()=>{const e=E.cloneNode(!0);return c(e,"src",D),e})()]}}),(()=>{const e=A.cloneNode(!0);return e.$$click=h,c(e,"src",v),e})()]}}),t(n,{sx:{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"end",pb:"1vw",pr:"2vw"},get children(){return[t(n,{width:"5vw",get children(){const e=$.cloneNode(!0);return c(e,"src",b),e}}),t(l,{fontFamily:"Actay",fontSize:"2vw",get children(){return["\u041D\u0430\u043A\u043E\u0440\u043C\u0438 \u043C\u043E\u043D\u0441\u0442\u0440\u0430, \u043F\u043E\u043B\u0443\u0447\u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u0438",B.cloneNode(!0)," \u0438 \u043F\u043E\u043C\u043E\u0433\u0438 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430\u043C \u0432\u0441\u0435\u0441\u0442\u0435 \u0441 \u043D\u0430\u043C\u0438"]}})]}})]}})]}})};w(["click"]);export{F as default};
