import{a as g,D as m,n as f,b as t,C as p,B as o,T as l,d as c,s as d,k as w,t as u}from"./index.db92f151.js";import{P as x,L as i}from"./components.6990e0c1.js";import{g as y}from"./utils.8b091739.js";const v="/assets/monster.fd8e13e1.svg",b="/assets/hungry.a02d6f8b.svg",C="/assets/monsterRoar.9c6f55ed.mp3",D="/assets/monsterBook.d1618334.svg",E=u('<img width="100%" height="100%" style="z-index: 0">'),A=u('<img height="100%" style="z-index: 1">'),B=u('<img width="100%">'),k=u("<br>"),F=()=>{const n=y(),r=new Audio(C);r.volume=.1;const[s,a]=g(0);m(()=>{document.title="Book \u0438 \u0434\u0440\u0443\u0433 | \u041A\u043D\u0438\u0436\u043D\u044B\u0439 \u043C\u043E\u043D\u0441\u0442\u0440"}),f(()=>{a((n()?.donated||0)/5e3)});async function h(){r.currentTime=0,r.play(),a(0);do a(s()+.003),await new Promise(e=>setTimeout(e,8));while(s()<(n()?.donated||0)/5e3)}return t(o,{sx:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},get children(){return[t(x,{}),t(p,{maxWidth:!1,sx:{height:"100%",mt:"4vw",position:"relative",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"space-between"},get children(){return[t(o,{sx:{width:"fit-content",position:"absolute",right:"2%",display:"flex",zIndex:1},get children(){return[t(l,{fontSize:"2vw",fontFamily:"Actay",fontWeight:"bold",get children(){return["\u041C\u043E\u043D\u0441\u0442\u0440 \u0434\u043E\u0432\u043E\u043B\u0435\u043D \u043D\u0430:","\xA0"]}}),t(l,{fontSize:"2vw",fontFamily:"Actay",fontWeight:"bold",fontStyle:"italic",get children(){return[c(()=>c(()=>!!n()?.donated)()?n()?.donated:0)," \u0440\u0443\u0431"]}})]}}),t(o,{sx:{height:"35vw",width:"100%",position:"relative",display:"flex",flexDirection:"row"},get children(){return[t(o,{sx:{width:"75%",display:"flex",alignItems:"center",position:"absolute",top:"45%",left:"16%"},get children(){return[t(o,{sx:{display:"flex",flexDirection:"row",position:"absolute",width:"96%",justifyContent:"space-between",height:"10vw",top:"-150%",right:"-5%",zIndex:1},get children(){return[t(i,{amount:1e3,id:1,tooltip:"\u0424\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0443\u0432\u0435\u043D\u0438\u0440 Book \u0438 \u0414\u0440\u0443\u0433"}),t(i,{amount:2300,id:2,tooltip:'\u0411\u0438\u043B\u0435\u0442 \u0432 \u0442\u0435\u0430\u0442\u0440 "\u0413\u043B\u043E\u0431\u0443\u0441"'}),t(i,{amount:3600,id:3,tooltip:"5 \u043B\u044E\u0431\u044B\u0445 \u043A\u043D\u0438\u0433 \u0438\u0437 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430 Book24"}),t(i,{amount:5e3,id:4,tooltip:"\u0417\u0430\u043A\u0440\u044B\u0442\u0430\u044F \u044D\u043A\u0441\u043A\u0443\u0440\u0441\u0438\u044F \u0432 \u0430\u0440\u0445\u0438\u0432\u044B \u0413\u041F\u041D\u0422\u0411"})]}}),t(o,{get sx(){return{bgcolor:"#ACCDAA",width:s()-.03,height:"90%",position:"absolute",left:"1.6%",borderRadius:"0 10vw 10vw 0",border:"2px solid"}}}),(()=>{const e=E.cloneNode(!0);return d(e,"src",D),e})()]}}),(()=>{const e=A.cloneNode(!0);return e.$$click=h,d(e,"src",v),e})()]}}),t(o,{sx:{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",justifyContent:"end",position:"absolute",bottom:"1vw",right:"1vw"},get children(){return[t(o,{width:"5vw",get children(){const e=B.cloneNode(!0);return d(e,"src",b),e}}),t(l,{fontFamily:"Actay",fontSize:"2vw",get children(){return["\u041D\u0430\u043A\u043E\u0440\u043C\u0438 \u043C\u043E\u043D\u0441\u0442\u0440\u0430, \u043F\u043E\u043B\u0443\u0447\u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u0438",k.cloneNode(!0)," \u0438 \u043F\u043E\u043C\u043E\u0433\u0438 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430\u043C \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043D\u0430\u043C\u0438"]}})]}})]}})]}})};w(["click"]);export{F as default};