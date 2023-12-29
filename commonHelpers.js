import{f as g,i as m,r as A,a as I,s as _}from"./assets/modal-d59b8522.js";import{a as u,S as Q,P as X}from"./assets/vendor-cb0d5946.js";let v=0;const M=document.querySelector(".hero-image"),N=document.querySelector(".hero-slider-line");function Y(){let t=M.offsetWidth;const s=document.querySelectorAll(".hero-image");console.log(t),console.log("resize"),N.style.width=t*s.length+"px",s.forEach(e=>{e.style.width=t+"px",e.style.height="auto"}),P()}Y();window.addEventListener("resize",P);function P(){let t=M.offsetWidth;v=v+t,v>t*3&&(v=0),N.style.left=-v+"px"}setInterval(P,4e3);function Z(t){return`<ul class="card-container-list">${t.map(e=>{const o=g(e._id),i=e.category.split("_").join(" ");return`
      <li class="photo-card-list" data-id="${e._id}">
        <a class="product-modal-list" href="#">
          <div class="img-container-list">
            <img class="product-image-list" src="${e.img}" alt="${e.name} photo" width=140 height=140 loading="lazy" />
          </div>

          <div class="product-info-list">
            <h3 class="product-name-list">${e.name}</h3>
            <div class="product-atributes-list">
              <p class="atributes-info-list">
                <span class="atributes-list">Category:</span> ${i}
              </p>
              <p class="atributes-info-list">
                <span class="atributes-list">Size:</span> ${e.size}
              </p>
              <p class="atributes-info-list">
                <span class="atributes-list">Popularity:</span> ${e.popularity}
              </p>
            </div>
          </div>
        </a>
        <div class="price-and-btn-list">
          <p class="product-price-list">$${e.price}</p>
          <button class="cart-btn-list" type="button" data-product-id="${e._id}">
            <svg class="list-cart-svg-list" width="18" height="18">
              <use href="${m}#${o?"icon-check":"icon-white-basket"}"></use>
            </svg>
          </button>
        </div> 
      </li>
  `}).join("")}</ul>`}function tt(t){document.querySelectorAll(".cart-btn-list").forEach(s=>{s.addEventListener("click",e=>{e.stopPropagation();const o=e.currentTarget.dataset.productId,i=t.find(r=>r._id===o);g(o)?(A(o),E(o)):(I(i),E(o))})})}function E(t){const s=document.querySelector(`[data-product-id='${t}']`);if(!s)return;g(t)?s.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${m}#icon-check"></use>
        </svg>
      `:s.innerHTML=`
        <svg class="list-cart-svg-list" width="18" height="18">
          <use href="${m}#icon-white-basket"></use>
        </svg>
      `}function et(){document.querySelectorAll(".photo-card-list").forEach(s=>{s.addEventListener("click",e=>{e.preventDefault(),_(s.dataset.id)})})}const S=document.querySelector("#myBtn");function W(){document.body.scrollTop>20||document.documentElement.scrollTop>20?S.style.display="block":S.style.display="none",S.addEventListener("click",st)}function st(){window.scroll({top:0,left:0,behavior:"smooth"})}window.onscroll=W;window.onload=W;const z="productFilters",j=document.querySelector(".filters-select"),H=document.querySelector(".filtersInput"),ot=document.querySelector(".filtersBtn");let k;document.getElementById("products-container");function p(){const t=localStorage.getItem(z);return t?JSON.parse(t):{keyword:null,category:null,page:1,limit:6}}function C(t){localStorage.setItem(z,JSON.stringify(t))}async function it(){try{return(await u.get("https://food-boutique.b.goit.study/api/products/categories")).data}catch(t){throw console.log("Проблема при запросе на сервер"),new Error(t)}}async function O(t){const{keyword:s,category:e,page:o,limit:i}=t;try{let n;return s===null&&e===null?n=await u.get(`https://food-boutique.b.goit.study/api/products?page=${o}&limit=${i}`):s===null?n=await u.get(`https://food-boutique.b.goit.study/api/products?category=${e}&page=${o}&limit=${i}`):e===null?n=await u.get(`https://food-boutique.b.goit.study/api/products?keyword=${s}&page=${o}&limit=${i}`):n=await u.get(`https://food-boutique.b.goit.study/api/products?keyword=${s}&category=${e}&page=${o}&limit=${i}`),n}catch(n){throw console.log("Помилка на сервері при пошуку продуктів",n),new Error(n)}}async function nt(){try{const s=(await it()).map(i=>`<option>${i}</option>`).join("")+"<option>Show all</option>";j.insertAdjacentHTML("beforeend",s);const e=new Q({select:".filters-select"}),o=p();H.value=o.keyword,e.setSelected(o.category)}catch(t){console.log("Проблема при обработке данных с сервера",t)}}nt();j.addEventListener("change",rt);ot.addEventListener("click",ct);async function rt(t){const s=t.currentTarget.value,e=p();s==="Show all"||s==="Categories"?e.category=null:e.category=s,C(e),k=await O(e),w(),console.log(k.data.results)}async function ct(){const t=H.value,s=p();t.trim()?s.keyword=t:s.keyword=null,C(s),w(),console.log(k.data.results)}async function at(){const t=p();return console.log("filters",t),await O(t)}const lt=document.getElementById("products-container");let b,D=window.innerWidth<768?2:4;function dt(t,s){return at()}function q(t,s){const e=p();e[t]=s,C(e)}window.addEventListener("resize",ut);function ut(){let t;window.innerWidth>=1440?t=9:window.innerWidth>=768?t=8:t=6,p().limit!==t&&(q("limit",t),D=window.innerWidth<768?2:4,w())}async function w(){const t=p();let s=t.page||1,e=t.limit||6;try{const{data:o}=await dt(s,e),{perPage:i,totalPages:n,results:r}=o,c=i*n;lt.innerHTML=Z(r),tt(r),et();const a=document.getElementById("tui-pagination-container");n>1?(b?(b.reset(c),b.movePageTo(s)):(b=new X(a,{totalItems:c,itemsPerPage:e,visiblePages:D,centerAlign:!0,page:s}),b.on("beforeMove",l=>{const d=l.page,y=p(),L=y.limit||6;(d!==y.page||L!==y.limit)&&(q("page",d),q("limit",L),w())})),E()):a.innerHTML=""}catch(o){console.error("Error fetching products",o)}}w();const x=document.querySelector(".carts-discount");async function pt(){const{data:t}=await u.get("https://food-boutique.b.goit.study/api/products/discount");return t.sort(()=>Math.random()-.5).slice(0,2)}mt();async function mt(){const t=await pt(),s=t.map(({img:r,is10PercentOff:c,price:a,name:l,_id:d})=>{const y=g(d),L=l.split("").slice(0,11).join("")+"...";return`<li data-id="${d}"class="dis-product-card"><img class="dis-product-img" src="${r}" alt="${l}"/><div class="dis-card-description"><p class="dis-card-name">${l.split("").length>11?L:l}</p><div class="price-btn-list">
        <p class="product-price-list">$${a}</p>
        <button class="dis-btn-list" type="button" data-product-id="${d}">
          <svg class="list-cart-svg-list" width="18" height="18">
            <use href="${m}#${y?"icon-check":"icon-white-basket"}"></use>
          </svg></button>
      </div></div></div>${c?`<svg class="discount-icon"><use href="${m}#icon-discount"></use></svg>`:null}</li>`}).join(""),e=document.createElement("div");e.classList.add("dis-container");const o=document.createElement("h2");o.classList.add("discount-title"),o.innerText="Discount products";const i=document.createElement("ul");i.classList.add("discount-list"),i.innerHTML=s,e.append(o),e.append(i),i.querySelectorAll(".dis-product-card").forEach(r=>{r.addEventListener("click",c=>{const a=r.dataset.id;if(c.target.nodeName==="BUTTON"||c.target.nodeName==="use"||c.target.nodeName==="svg"){const l=t.find(d=>d._id===a);I(l),gt(a,!0)}else _(a)})}),x.append(e)}function gt(t,s){const e=x.querySelector(`[data-id="${t}"]`);if(!e)return;e.children[1].children[1].children[1].children[0].children[0].setAttribute("href",`${m}#${s?"icon-check":"icon-white-basket"}`)}const $=JSON.parse(localStorage.getItem("userEmailsArray"))||[];document.querySelector("body");const R=document.querySelector(".footer-form"),U=document.querySelector(".wrong-email-footer"),J=document.querySelector(".footer-modal-w-success"),G=document.querySelector(".footer-modal-w-failure"),f=R.querySelector("input[type=email]"),ft=R.querySelector("button[type=submit]"),ht=document.querySelector(".footer-close-success-margin"),yt=document.querySelector(".footer-close-failure-margin"),vt=document.querySelector(".footer-close-email-margin"),h=document.querySelector(".modal-section"),bt=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);ft.addEventListener("click",function(t){t.preventDefault(),document.body.classList.add("modal-open");const s=f.value;if(!bt(s)){f.value="",U.classList.add("visibility"),h.classList.add("modal-subscribing-footer");return}Lt()});const wt=()=>{const t=f.value;$.includes(t)?(f.value="",G.classList.add("visibility"),h.classList.add("modal-subscribing-footer")):($.push(t),localStorage.setItem("userEmailsArray",JSON.stringify($)))},Lt=async()=>{try{const t="https://food-boutique.b.goit.study/api/subscription";wt();const s={email:`${f.value}`},e=await u.post(t,s);J.classList.add("visibility"),h.classList.add("modal-subscribing-footer"),f.value=""}catch(t){console.error("Error sending request:",t.message)}};yt.addEventListener("click",function(t){h.classList.remove("modal-subscribing-footer"),G.classList.remove("visibility"),document.body.classList.remove("modal-open")});vt.addEventListener("click",function(t){h.classList.remove("modal-subscribing-footer"),U.classList.remove("visibility"),document.body.classList.remove("modal-open")});ht.addEventListener("click",function(t){h.classList.remove("modal-subscribing-footer"),J.classList.remove("visibility"),document.body.classList.remove("modal-open")});const B=document.querySelector(".footer-modal-w-img"),St=768;function V(){window.innerWidth<=St?B.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle-mobile.png?raw=true":B.src="https://github.com/RaynaLuch/project-teamNumber1/blob/main/src/img/rectangle.png?raw=true"}V();window.addEventListener("resize",V);const $t="https://food-boutique.b.goit.study/api/products/popular",K=document.querySelector(".carts-popular"),F=document.createElement("h2");F.classList.add("popular-product-title");F.textContent="Popular products";K.appendChild(F);const T=document.createElement("ul");T.classList.add("popular-product-list");K.appendChild(T);function Et(t){if(!t)return console.error("Помилка"),null;const s=g(t._id),e=document.createElement("li");e.classList.add("product-preview"),e.setAttribute("data-id",t._id),s?e.classList.add("product-preview--in-cart"):e.classList.remove("product-preview--in-cart");const o=document.createElement("button");return o.onclick=i=>{i.stopPropagation(),g(t._id)?A(t._id):I(t)},o.className="product-preview__cart-btn",o.innerHTML=`
    <svg>
      <use href="${m}#${s?"icon-check":"icon-cart"}">
      </use>
    </svg>`,e.innerHTML=`
    <div class="product-preview__image-container">
      <img src="${t.img}" alt="${t.name}">
    </div>
    <div class="product-preview__info">
      <div class="product-preview__heading-wrapper">
        <h2 class="product-preview__heading">${t.name}</h2>
      </div>
      <div class="product-preview__description">
        <p class="product-preview__category"><span class="product-preview__sub-heading">Category:</span> ${t.category}</p>
        <p><span class="product-preview__sub-heading">Size:</span> ${t.size}</p>
        <p><span class="product-preview__sub-heading">Popularity:</span> ${t.popularity}</p>
      </div>
    </div>
  `,e.children[1].children[0].appendChild(o),e.onclick=()=>{_(t._id)},e}async function kt(){try{return(await u.get($t)).data}catch(t){throw console.error("Помилка при отриманні даних: ",t),t}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await kt();console.log(t),t.sort((s,e)=>e.popularity-s.popularity).forEach(s=>{const e=Et(s);e&&T.appendChild(e)})}catch(t){console.error("Помилка при отриманні даних: ",t)}});
//# sourceMappingURL=commonHelpers.js.map
