import{e as i,u as p,i as f,r as h,j as t,L as m,m as c,N as l,o as n,k as j,p as y}from"./index-D9iVjMWk.js";import{L as g}from"./LazyImage-C1JUC4kx.js";function b(){const{cart:o}=i(e=>e.cart),{loading:r}=i(e=>e.cart),a=p(),d=f();let s=[];h.useEffect(()=>{async function e(){await a(n())}e()},[]),s=o.filter(e=>e.orderPlaced===!1);const x=async e=>{await a(j(e)),d("/checkout")},u=async e=>{await a(y({type:"uuid",value:e.uuid})),a(n())};return t.jsx("div",{className:"w-full flex justify-center",children:r?t.jsx(m,{}):s.length>0?t.jsx("div",{className:"w-full flex flex-col items-center",children:s.slice().reverse().map(e=>t.jsxs(c.div,{initial:{opacity:0},animate:{opacity:100},exit:{opacity:0},className:"p-5 rounded-lg shadow-lg w-full flex flex-col items-start gap-2",children:[t.jsx("div",{className:"h-60 w-full",children:t.jsx(g,{src:e.thumbnail})}),t.jsxs("div",{children:[t.jsx("p",{className:"font-serif text-xl italic",children:e.title}),t.jsx("p",{className:"text-xs uppercase text-indigo-500/50 font-bold",children:e.brand||"no brand"}),t.jsxs("p",{className:"text-xs uppercase opacity-50",children:["Quantity: ",e.quantity]}),t.jsxs("p",{className:"text-xs uppercase opacity-50",children:["Total: $",(e.price*e.quantity).toFixed(2)]})]}),t.jsxs("div",{className:"w-full flex justify-center items-center gap-2",children:[t.jsx("button",{onClick:()=>u(e),className:"btn text-red-400 truncate",children:"Remove"}),t.jsx(l,{to:`/detail/${e.id}`,className:"btn ",children:"Details"}),t.jsx("button",{onClick:()=>x(e),className:"btn bg-gradient-to-r from-indigo-200 to-violet-500 font-bold text-white",children:"Checkout"})]})]},e.uuid))}):t.jsxs(c.div,{initial:{opacity:0},animate:{opacity:100},exit:{opacity:0},className:"flex flex-col items-center gap-2",children:[t.jsx("p",{className:"opacity-50",children:"No products were added to your cart"}),t.jsx(l,{to:"/",className:"btn bg-gradient-to-r from-indigo-200 to-violet-500 text-white font-bold",children:"Go shopping"})]})})}export{b as default};
