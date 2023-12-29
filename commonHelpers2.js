import{r as g,b as i,g as l,t as f,i as y}from"./assets/modal-d59b8522.js";import{a as b}from"./assets/vendor-cb0d5946.js";const u="/project-team-clone/assets/yellow-shopping-basket-88cc64a6.png",h="/project-team-clone/assets/yellow-shopping-basket@2x-0323a090.png",r=document.querySelector(".product-list"),v=document.querySelector(".sub-container"),P=document.querySelector(".delete-btn"),d=document.querySelector(".count"),S=document.querySelector(".change"),k=document.querySelector(".order-form"),x="https://food-boutique.b.goit.study/api/orders",$=`<div class="empty">
<img srcset="${u} 1x, ${h} 2x" src="${u}" alt="empty basket" class="empty-picture">
<h2 class="empty-main-text">Your basket is <a href="../index.html" class="empty-link">empty...</a> </h2>
<p class="empty-sub-text">Go to the main page to select your favorite products and add them to the cart.</p>
</div>`;function a(){const t=localStorage.getItem("basket"),e=JSON.parse(t);if(e!==null){const o=e.length;r.insertAdjacentHTML("beforeend",C(l())),d.textContent=o,S.textContent=L(e);return}d.textContent=0,v.innerHTML=$}a();r.addEventListener("click",q);function q(t){if(t.target!==t.currentTarget){const e=t.target.closest(".cart-btn"),s=t.target.closest(".product-cart").dataset.id;if(e!==null){r.innerHTML="",g(s);const c=localStorage.getItem("basket");JSON.parse(c).length===0&&i(),a()}}}P.addEventListener("click",p);function p(){i(),a()}function L(t){let e=0;return t.map(({price:o})=>e+=o),e.toFixed(2)}function C(t){return t.map(({_id:e,img:o,name:s,category:c,size:n,price:m})=>`
      <li class="product-cart" data-id="${e}">
      <img
        class="product-picture"
        src="${o}"
        width="100"
        height="100"
      alt="avocado"
      />
      <div class="">
        <p class="product-name">${s}</p>

        <div class="product-descr">
          <p>Category: <span class="qwe">${c}</span></p>
          <p>Size: <span class="qwe">${n}</span></p>
        </div>

        <p class="product-price">$${m}</p>
      </div>
      <button class="cart-btn" type="button">
        <svg class="cross-icon">
          <use href="${y}#icon-cross"></use>
        </svg>
      </button>
    </li>
    `).join("")}k.addEventListener("submit",w);function w(t){t.preventDefault();const e=l(),o=B(e);b.post(x,{email:t.target.elements.email.value,products:o}).then(s=>{s.status===201&&(p(),f())}).catch(s=>console.log(s.message))}function B(t){return t.map(e=>({productId:e._id,amount:1}))}
//# sourceMappingURL=commonHelpers2.js.map
