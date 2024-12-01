import{r as n,j as e,G as m,a as N,b as d,u as p,g as b,f as K,c as w,d as k,e as y,s as z,R as S,L as C,N as L,h as M}from"./index-AJDRx7vI.js";function B({placeholder:s,onChange:a,value:l,name:r,type:c}){const[o,i]=n.useState(c),u=()=>{i(o==="password"?"text":"password")};return e.jsxs("div",{className:`w-full ${c==="password"?"flex gap-4 items-center justify-center":""}`,children:[e.jsx("input",{className:"p-2 rounded-lg w-11/12 shadow-lg focus:outline focus:outline-blue-700",placeholder:s,onChange:a,value:l,name:r,type:o}),c==="password"?e.jsx("div",{className:"size-8",onClick:u,children:o==="password"?e.jsx(m,{className:"size-6"}):e.jsx(N,{className:"size-6 text-red-400"})}):null]})}function A(s){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h6v6h-6zm10 0h6v6h-6zm-10 10h6v6h-6zm10 3h6"},child:[]}]})(s)}function W(s){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h6v6h-6zm10 0h6v6h-6zm-10 10h6v6h-6zm10 3h6m-3 -3v6"},child:[]}]})(s)}function H(s){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"},child:[]}]})(s)}function V(s){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(s)}function E({item:s}){var i,u,h,x,g;const[a,l]=n.useState({}),r=p(),c=()=>{l(f=>({...f,[s.title]:!a[s.title]}))},o=async()=>{await r(b(s.categoryKey))};return e.jsxs("div",{children:[e.jsxs("p",{className:`
    ${((i=s==null?void 0:s.children)==null?void 0:i.length)>0?"flex items-center gap-1 text-lg  ":"ml-10 p-1 rounded-sm active:opacity-50 shadow-sm"}
    active:text-indigo-500/30 transition-all`,onClick:((u=s==null?void 0:s.children)==null?void 0:u.length)>0?c:o,children:[((h=s==null?void 0:s.children)==null?void 0:h.length)>0&&a[s.title]?e.jsx(H,{}):((x=s==null?void 0:s.children)==null?void 0:x.length)>0&&e.jsx(V,{}),s==null?void 0:s.title]}),e.jsx("ul",{children:a[s.title]&&((g=s==null?void 0:s.children)==null?void 0:g.length)>0&&e.jsx("li",{children:e.jsx(v,{list:s.children})})})]})}function v({list:s=[]}){return e.jsx("div",{className:"flex flex-col gap-4",children:s&&s.length>0&&s.map((a,l)=>e.jsx(E,{item:a},l))})}function F(s){return d({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"},child:[]}]})(s)}const G=[{title:"Fashion",children:[{title:"Men's Shirts",categoryKey:"mens-shirts"},{title:"Men's Shoes",categoryKey:"mens-shoes"},{title:"Men's Watches",categoryKey:"mens-watches"},{title:"Women's Bags",categoryKey:"womens-bags"},{title:"Women's Dresses",categoryKey:"womens-dresses"},{title:"Women's Jewellery",categoryKey:"womens-jewellery"},{title:"Women's Shoes",categoryKey:"womens-shoes"},{title:"Women's Watches",categoryKey:"womens-watches"}]},{title:"Electronics",children:[{title:"Laptops",categoryKey:"laptops"},{title:"Smartphones",categoryKey:"smartphones"},{title:"Tablets",categoryKey:"tablets"},{title:"Mobile Accessories",categoryKey:"mobile-accessories"}]},{title:"Home & Kitchen",children:[{title:"Furniture",categoryKey:"furniture"},{title:"Home Decoration",categoryKey:"home-decoration"},{title:"Kitchen Accessories",categoryKey:"kitchen-accessories"}]},{title:"Beauty & Personal Care",children:[{title:"Beauty",categoryKey:"beauty"},{title:"Fragrances",categoryKey:"fragrances"},{title:"Skin Care",categoryKey:"skin-care"}]},{title:"Sports & Outdoors",children:[{title:"Sports Accessories",categoryKey:"sports-accessories"},{title:"Sunglasses",categoryKey:"sunglasses"}]},{title:"Vehicles",children:[{title:"Motorcycle",categoryKey:"motorcycle"},{title:"Vehicle",categoryKey:"vehicle"}]},{title:"Grocery",children:[{title:"Groceries",categoryKey:"groceries"}]}];function I({onClose:s}){const a=p(),l=async()=>{await a(w(0))};return e.jsxs("div",{className:"fixed inset-y-0 h-screen z-20 bg-white px-10 py-10 shadow-lg w-[290px] left-0 overflow-y-auto flex flex-col items-center justify-between",children:[e.jsxs("div",{className:"flex justify-between w-full items-center mb-5",children:[e.jsx("div",{className:"size-14",children:e.jsx("img",{className:"w-full h-full object-cover",src:K})}),e.jsx(A,{onClick:s,className:"size-8"})]}),e.jsxs("div",{children:[e.jsx("button",{onClick:l,className:"my-5 text-lg",children:"All products"}),e.jsx("div",{className:"overflow-y-auto h-[50vh]",children:e.jsx(v,{list:G})})]}),e.jsxs("div",{className:" flex gap-2 w-full items-center bg-white z-50",children:[e.jsx("a",{className:"size-40",href:"https://www.facebook.com/a.hopelieswithin?mibextid=ZbWKwL",children:e.jsx(F,{className:"w-full h-full opacity-80"})}),e.jsx("div",{children:e.jsxs("p",{className:"  opacity-50 text-xs",children:["This website is made only for practice. This is not capable to do of any transactions.",e.jsx("span",{className:"block mt-2",children:"12/01/24           ©Paris"})]})})]})]})}function P({value:s,setQuery:a,onSubmit:l}){const[r,c]=n.useState(!1);return e.jsxs("div",{className:"flex items-center gap-1",children:[r&&e.jsx(I,{onClose:()=>c(!1)}),e.jsx("button",{onClick:()=>c(!0),className:"flex items-center",children:e.jsx(W,{className:"size-8"})}),e.jsxs("form",{onSubmit:l,className:"flex items-center gap-1",children:[e.jsx(B,{placeholder:"Search products here...",value:s,type:"text",onChange:o=>a(o.target.value)}),e.jsx("button",{type:"submit",className:"btn bg-gradient-to-r from-indigo-200 to-violet-500 text-white font-bold",onClick:l,children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(k,{className:"text-white"}),"Search"]})})]})]})}function T(s){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},child:[]}]})(s)}function D(s){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"},child:[]}]})(s)}function q(){var f,j;const{products:s}=y(t=>t.cart),[a,l]=n.useState(1),{loading:r}=y(t=>t.cart),[c,o]=n.useState(""),[i,u]=n.useState(19),h=p(),{byDefault:x}=y(t=>t.cart);n.useEffect(()=>{h(z(!1)),h(S())},[]);const g=async t=>{if(t.preventDefault(),c.length)h(M(c.toLowerCase().trim())),o("");else return};return n.useEffect(()=>{h(w(a))},[a]),e.jsxs("div",{className:"mx-auto w-full flex flex-col items-center",children:[e.jsx(P,{value:c,onSubmit:g,setQuery:o}),r&&e.jsx(C,{}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full xl:grid-cols-4 2xl:grid-cols-5 ",children:!r&&((f=s==null?void 0:s.products)==null?void 0:f.length)>0?(j=s==null?void 0:s.products)==null?void 0:j.map((t,R)=>e.jsxs(L,{to:`/detail/${t.id}`,className:" w-full min-h-[390px] p-5 rounded-xl shadow-xl flex flex-col items-center gap-4 active:opacity-50",children:[e.jsx("div",{className:"size-60",children:e.jsx("img",{className:"w-full h-full rounded-xl  object-cover",src:t==null?void 0:t.thumbnail})}),e.jsxs("div",{className:"w-full text-left flex flex-col justify-start gap-2 items-start",children:[e.jsx("p",{className:"font-[times] w-full text-xl truncate",children:t==null?void 0:t.title}),e.jsx("p",{className:"text-xs uppercase text-indigo-500/40 font-bold",children:(t==null?void 0:t.brand)||"No brand"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("p",{className:"text-xl italic",children:["$",t==null?void 0:t.price]}),e.jsxs("p",{className:"uppercase text-xs opacity-80",children:["Stock: ",t==null?void 0:t.stock]})]})]})]},t==null?void 0:t.id)):!r&&e.jsx("p",{className:"text-center flex flex-col items-center w-full my-4 opacity-50",children:"No products found"})}),!r&&x&&e.jsxs("div",{className:"w-full flex justify-center items-center my-2 gap-2",children:[e.jsx(T,{className:"size-8",onClick:()=>l(a===1?19:a-1)}),e.jsxs("p",{children:[a,"/",i]}),e.jsx(D,{className:"size-8",onClick:()=>l(a===19?1:a+1)})]})]})}export{q as default};
