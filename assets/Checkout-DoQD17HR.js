import{i as r,e as o,u as h,r as x,j as e,N as d,L as f,s as u,p,n as m}from"./index-BsJ4w4oe.js";function j({onClose:c,item:n}){r(),o(t=>t.cart);const l=h(),[s,i]=x.useState(!1),a=async()=>{i(!0),await l(u(!0)),await l(p(n)),await l(m()),i(!1),c()};return e.jsx("div",{onClick:c,className:"bg-black/60 inset-0 z-20 flex justify-center items-center w-full fixed ",children:e.jsxs("div",{onClick:t=>t.stopPropagation(),className:"p-5 bg-white rounded-lg w-10/12 flex flex-col items-center gap-5 z-40",children:[e.jsxs("div",{className:"flex flex-col items-center text-xs gap-1 opacity-60",children:[e.jsx("p",{children:"Note: This cannot be cancelled later."}),e.jsx("p",{children:"Click anywhere outside to close"})]}),e.jsx("p",{className:"text-2xl italic tracking-tighter",children:"Confirm your order"}),e.jsx(d,{to:"/orderplaced",onClick:a,className:" text-white font-bold btn bg-gradient-to-r from-indigo-200 to-violet-500 flex items-center",children:s?e.jsx(f,{size:"4px",color:"white"}):"Confirm"})]})})}function N(){const c=r(),[n,l]=x.useState(!1),s=o(t=>t.cart.checkoutDetail),{loading:i}=o(t=>t.cart),a=()=>{c(-1)};return i?e.jsx(f,{}):e.jsx("div",{className:"w-full flex justify-center",children:Object.keys(s).length>0?e.jsxs("div",{className:"w-full flex justify-start rounded-lg shadow-lg p-5 pb-10",children:[n&&e.jsx(j,{item:s,onClose:()=>l(!1)}),e.jsxs("div",{className:"flex flex-col items-center w-full gap-2",children:[e.jsx("div",{className:"h-52 w-full flex justify-center",children:e.jsx("img",{className:"rounded-lg h-full w-full object-contain",src:s.thumbnail})}),e.jsxs("div",{className:"text-base w-full flex flex-col gap-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-serif italic text-xl",children:s==null?void 0:s.title}),e.jsx("p",{className:"text-xs uppercase text-indigo-500/40 font-bold",children:s==null?void 0:s.brand})]}),e.jsx("div",{children:e.jsx("p",{children:s==null?void 0:s.description})}),e.jsxs("p",{children:["Price: $",s==null?void 0:s.price]}),e.jsxs("p",{children:["Qty: ",s==null?void 0:s.quantity]}),e.jsxs("p",{className:"font-bold text-lg italic",children:["Total: $",((s==null?void 0:s.price)*(s==null?void 0:s.quantity)).toFixed(2)]})]}),e.jsxs("div",{className:"flex gap-4 items-center justify-end w-full mt-5",children:[e.jsx("button",{onClick:a,className:"btn",children:"Cancel"}),e.jsx("button",{onClick:()=>l(!0),className:"text-white font-bold btn bg-gradient-to-r z-10 from-indigo-200 to-violet-500",children:"Place Order"})]})]})]}):e.jsxs("div",{className:" flex flex-col items-center gap-2",children:[e.jsx("p",{className:" opacity-50",children:"No checkout in progress"}),e.jsx(d,{to:"/",className:"text-white font-bold btn bg-gradient-to-r from-indigo-200 to-violet-500",children:"Go shopping"})]})})}export{N as default};
