import{i as f,e as l,u as h,r as p,j as e,m as x,L as u,s as m,t as j,N as g,A as d}from"./index-W_lGb0hf.js";import{L as b}from"./LazyImage-DPuiVe6Y.js";function y({onClose:n,item:o}){const a=f();l(i=>i.cart);const t=h();l(i=>i.cart);const[r,c]=p.useState(!1),s=async()=>{c(!0),await t(m(!0)),await t(j(o)),n(),c(!1),a("/orderplaced")};return e.jsx(x.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:n,className:"bg-black/40 inset-0 z-20 flex justify-center items-center w-full fixed ",children:e.jsxs("div",{onClick:i=>i.stopPropagation(),className:"p-5 bg-white rounded-lg w-10/12 flex flex-col items-center gap-5 z-40",children:[e.jsxs("div",{className:"flex flex-col items-center text-xs gap-1 opacity-60",children:[e.jsx("p",{children:"Note: This cannot be cancelled later."}),e.jsx("p",{children:"Click anywhere outside to close"})]}),e.jsx("p",{className:"text-2xl italic tracking-tighter",children:"Confirm your order"}),e.jsx("button",{onClick:s,className:" text-white font-bold btn bg-gradient-to-r from-indigo-200 to-violet-500",children:r?e.jsx(u,{size:"4px",color:"white"}):"Confirm"})]})})}function w(){const n=f(),[o,a]=p.useState(!1),t=l(s=>s.cart.checkoutDetail),{loading:r}=l(s=>s.cart),c=()=>{n(-1)};return r?e.jsx(u,{}):Object.keys(t).length===0?e.jsxs(x.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:" flex flex-col items-center gap-2",children:[e.jsx("p",{className:" opacity-50",children:"No checkout in progress"}),e.jsx(g,{to:"/",className:"text-white font-bold btn bg-gradient-to-r from-indigo-200 to-violet-500",children:"Go shopping"})]}):e.jsx(x.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"w-full flex justify-center",children:e.jsx(d,{children:e.jsxs("div",{className:"w-full flex justify-start rounded-lg shadow-lg p-5 pb-10",children:[e.jsx(d,{children:o&&e.jsx(y,{item:t,onClose:()=>a(!1)})}),e.jsxs("div",{className:"flex flex-col items-center w-full gap-2",children:[e.jsx("div",{className:"h-52 w-full rounded-lg flex justify-center",children:e.jsx(b,{src:t.thumbnail})}),e.jsxs("div",{className:"text-base w-full flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-serif italic text-xl",children:t==null?void 0:t.title}),e.jsx("p",{className:"text-xs uppercase text-indigo-500/40 font-bold",children:t==null?void 0:t.brand})]}),e.jsx("div",{children:e.jsx("p",{children:t==null?void 0:t.description})}),e.jsxs("p",{children:["Price: $",t==null?void 0:t.price]}),e.jsxs("p",{children:["Qty: ",t==null?void 0:t.quantity]}),e.jsxs("p",{className:"font-bold text-lg italic",children:["Total: $",((t==null?void 0:t.price)*(t==null?void 0:t.quantity)).toFixed(2)]})]}),e.jsxs("div",{className:"flex gap-4 items-center justify-end w-full mt-5",children:[e.jsx("button",{onClick:c,className:"btn",children:"Cancel"}),e.jsx("button",{onClick:()=>a(!0),className:"text-white font-bold btn bg-gradient-to-r z-10 from-indigo-200 to-violet-500",children:"Place Order"})]})]})]})})})}export{w as default};
