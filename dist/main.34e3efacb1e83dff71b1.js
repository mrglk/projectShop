!function(){var e={949:function(){var e=document.querySelector(".header__closeBtn");document.getElementById("header__openBtn").onclick=function(){document.getElementById("header__sidenavId").classList.add("open")},e.onclick=function(){document.getElementById("header__sidenavId").classList.remove("open")}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}!function(){"use strict";function e(){return fetch("./products.json").then((function(e){return e.json()}))}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n(949),document.getElementById("searchBtn").onclick=function(e){e.preventDefault(),document.querySelector(".header__search").classList.toggle("show")},document.addEventListener("DOMContentLoaded",(function(n){e().then((function(e){!function(e){var n,r="",a=function(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,c=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw c}}}}(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;r+='<div class="catalog__item catalog__hide">\n            <div class="catalog__photo">\n                <a href="./product.html?id='.concat(o.id,'" class="catalog__imgLink">\n                    <div class="catalog__imgWrapper">\n                        <img class="catalog__img" src="./uploads/').concat(o.image,'" alt="').concat(o.category,'">\n                    </div>\n                </a>\n            </div>\n            <div class="catalog__footer">\n                <div class="catalog__description">\n                    <a href="./product.html?id=').concat(o.id,'" class="catalog__link">\n                        <p class="catalog__name">').concat(o.name,'</p>\n                    </a>\n                    <p class="catalog__price">').concat(o.price,'$</p>\n                </div>\n                <div class="catalog__basketWrapper hidden">\n                    <div class="catalog__basket">\n                        <a href="" class="catalog__basketLink">Add to cart</a>\n                        <img class="catalog__icon" src="../img/bag.svg" alt="Cart">\n                    </div>\n                </div>\n            </div>\n        </div>')}}catch(e){a.e(e)}finally{a.f()}document.getElementById("searchContainer").innerHTML=r;var c=new URL(window.location.href).searchParams.get("search");function i(){var e=document.getElementById("searchInput").value;if(0!=e.trim().length){var t=document.querySelectorAll(".catalog__item"),n=0;t.forEach((function(t){var r=t.querySelector(".catalog__name");r&&r.innerText.includes(e.toLowerCase().trim())?(t.classList.remove("catalog__hide"),document.getElementById("SearchOnRequest").innerText=e,n++):t.classList.add("catalog__hide")})),0==n&&(document.getElementById("SearchOnRequest").innerText="no items to show")}}document.getElementById("searchInput").value=c,document.getElementById("SearchOnRequest").innerText=c,i(),document.querySelector(".header__searchBtn").addEventListener("click",(function(e){e.preventDefault(),i()}))}(e)}))})),document.addEventListener("DOMContentLoaded",(function(t){e().then((function(e){!function(e){var t,n=document.querySelectorAll(".catalog__item"),a=localStorage.getItem("cart");t=null==a?new Map:new Map(JSON.parse(a)),document.getElementById("countCart").innerHTML=t.size,n.forEach((function(e){var n=e.querySelector(".catalog__basket"),r=e.querySelector(".catalog__name").innerHTML,a=new Object;n.addEventListener("click",(function(e){e.preventDefault(),a={size:"select size",numb:1},t.set(r,a),console.log(t),localStorage.setItem("cart",JSON.stringify(Array.from(t.entries()))),document.getElementById("countCart").innerHTML=t.size}))}));var o,c="",i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,c=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw c}}}}(e);try{for(i.s();!(o=i.n()).done;){var l=o.value;t.has("".concat(l.name))&&(c+='<div class="catalog__item productContainer">\n                <div class="catalog__photo productImg">\n                    <a href="./product.html?id='.concat(l.id,'" class="catalog__imgLink">\n                        <div class="catalog__imgWrapper">\n                            <img class="catalog__img" src="./uploads/').concat(l.image,'" alt="').concat(l.category,'">\n                        </div>\n                    </a>\n                </div>\n                <div class="productAbout">\n                    <div class="productName">\n                        <a href="./product.html?id=').concat(l.id,'" class="catalog__link">\n                            <p class="catalog__name">').concat(l.name,'</p>\n                        </a>\n                        <div class="productDelete">delete</div>\n                    </div>\n                    <div class="productSize">').concat(t.get(l.name).size,'</div>\n                    <div class="productCount">\n                        <div class="productCountBt">\n                            <button class="buttonCountMinus countBt">-</button>\n                            <div class="buttonCountNumber">').concat(t.get(l.name).numb,'</div>\n                            <button class="buttonCountPlus countBt">+</button>\n                        </div>\n                        <div class="hiddenContent"><span class="hiddenPrice">').concat(l.price,'</span>$</div>\n                        <div class="fontResultMul"><span class="resultMul">').concat(l.price*t.get(l.name).numb,"</span>$</div>\n                        </div>\n                    </div>\n                </div>\n            </div><br>"),document.querySelector(".pageContentCart").classList.add("basketContentHide"))}}catch(e){i.e(e)}finally{i.f()}document.getElementById("basketContainer").innerHTML=c;var s=document.querySelectorAll(".productContainer"),u=0,d=document.getElementById("costSum"),m=document.getElementById("costTotal");s.forEach((function(e){var n=e.querySelector(".buttonCountPlus"),r=e.querySelector(".buttonCountMinus"),a=e.querySelector(".buttonCountNumber"),o=e.querySelector(".resultMul"),c=Number(e.querySelector(".hiddenPrice").innerHTML),i=e.querySelector(".catalog__name").innerHTML;u+=Number(o.innerHTML),n.onclick=function(){var e=Number(a.innerHTML);e++,a.innerHTML=e,o.innerHTML=e*c,u+=c,d.innerHTML=u,m.innerHTML=u,t.get(i).numb=e,localStorage.setItem("cart",JSON.stringify(Array.from(t.entries())))},r.onclick=function(){var e=Number(a.innerHTML);e>=2&&(e--,a.innerHTML=e,o.innerHTML=e*c,u-=c,d.innerHTML=u,m.innerHTML=u,t.get(i).numb=e,localStorage.setItem("cart",JSON.stringify(Array.from(t.entries()))))},e.querySelector(".productDelete").onclick=function(){var n=e.querySelector(".catalog__name").innerHTML;document.getElementById("basketContainer").removeChild(e),t.delete(n),localStorage.setItem("cart",JSON.stringify(Array.from(t.entries()))),document.getElementById("countCart").innerHTML=t.size,u-=Number(o.innerHTML),d.innerHTML=u,m.innerHTML=u}})),d.innerHTML=u,m.innerHTML=u}(e)}))}));var a=document.querySelectorAll(".catalogHeader__link"),o=window.location.search.replace("?group=",""),c=document.querySelector(".js-pagination");function i(e){var t=document.querySelector(".catalog__items");t.innerHTML="",e.forEach((function(e){var n;t.innerHTML+='<div class="catalog__item">\n    <div class="catalog__photo">\n        <a href="./product.html?id='.concat((n=e).id,'" class="catalog__imgLink">\n            <div class="catalog__imgWrapper">\n                <img class="catalog__img" src="./uploads/').concat(n.image,'" alt="').concat(n.category,'">\n            </div>\n        </a>\n    </div>\n    <div class="catalog__footer">\n        <div class="catalog__description">\n            <a href="./product.html?id=').concat(n.id,'" class="catalog__link">\n                <p class="catalog__name">').concat(n.name,'</p>\n            </a>\n            <p class="catalog__price">').concat(n.price,'$</p>\n        </div>\n        <div class="catalog__basketWrapper hidden">\n            <div class="catalog__basket">\n                <img class="catalog__icon" src="img/bag.svg" alt="Cart">\n                <a class="catalog__basketLink">Add to cart</a>\n            </div>\n        </div>\n    </div>\n</div>')}))}function l(e,t){return s(e),t.filter((function(t){return t.category==e}))}function s(e){var t=document.querySelector(".pageCaption");t.innerHTML="",t.innerHTML='<a href="index.html">Home</a>\n    <img src="./img/greater.png">\n    <a href="catalog.html">Catalog</a>\n    <img src="./img/greater.png">\n    <span>'.concat(e.charAt(0).toUpperCase()+e.slice(1),"</span>")}function u(e,t,n){if(c.innerHTML="",e>n){c.classList.remove("pagination__inner_hidden");for(var r="",a=1;a<=t;a++)r+='<li class="pagination__link js-pagi-number">'.concat(a,"</li>");c.innerHTML+='<li class="pagination__link js-pagi-back"><img class="pagination__arrow js-pagi-back"\n        src="./img/arrowBack.svg">',c.innerHTML+=r,c.innerHTML+=' <li class="pagination__link js-pagi-next">\n        <img class="pagination__arrow js-pagi-next" src="./img/arrowNext.svg">\n    </li>',document.querySelectorAll(".pagination__link").forEach((function(e){e.classList.toggle("pagination__link_active",1==e.innerText)}))}else c.classList.add("pagination__inner_hidden")}var d=document.querySelectorAll(".categories__link");function m(e){return' <div class="ourFavorites__item">\n    <a href="./product.html?id='.concat(e.id,'" class="ourFavorites__productLink">\n        <div class="ourFavorites__product">\n            <div class="ourFavorites__imgWrapper">\n                <img class="ourFavorites__img" src="./uploads/').concat(e.image,'" alt="Rings">\n            </div>\n            <p class="ourFavorites__name">').concat(e.name,'</p>\n            <p class="ourFavorites__price">').concat(e.price,"$</p>\n        </div>\n    </a>\n</div>")}var g,_=document.getElementById("catalog"),v=document.getElementById("product"),p=document.getElementById("main"),f=document.getElementById("order");_&&(void e().then((function(e){var t=e.length,n=Math.ceil(t/9),r=1,s=0;u(t,n,9),o?(c.innerHTML="",i(l(o,e).slice(s,s+9)),a.forEach((function(e){e.classList.toggle("catalogHeader__link_active",e.innerHTML.toLowerCase()==o)}))):i(e.slice(s,s+9));for(var d=function(t){a[t].addEventListener("click",(function(n){n.preventDefault(),a.forEach((function(e){e.classList.remove("catalogHeader__link_active")}));var r,o,c=l(a[t].innerText.toLowerCase(),e);u(c.length,Math.ceil(c.length/9),9),r=a[t].innerText.toLowerCase(),(o=new URL(window.location)).searchParams.set("group",r),history.pushState(null,null,o),i(c),a[t].classList.add("catalogHeader__link_active")}))},m=0;m<a.length;m++)d(m);function g(t){r=t,s=9*t,i(e.slice(9*(r-1),9*(r-1)+9)),window.scrollTo({top:document.querySelector(".catalogHeader").offsetTop,behavior:"smooth"}),function(e){document.querySelectorAll(".pagination__link").forEach((function(t){t.classList.toggle("pagination__link_active",t.innerText==e)}))}(r)}c.addEventListener("click",(function(e){var t=e.target;t.classList.contains("js-pagi-number")&&g(Number(t.innerText)),t.classList.contains("js-pagi-next")&&(t.classList.remove("pagination__link__disabled"),r==n?t.classList.add("pagination__link__disabled"):g(r+1)),t.classList.contains("js-pagi-back")&&(t.classList.remove("pagination__link__disabled"),1==r?t.classList.toggle("pagination__link__disabled"):g(r-1))}))}))).then((function(){var e,t,n;t=document.querySelectorAll(".catalog__item"),n=localStorage.getItem("cart"),e=null==n?new Map:new Map(JSON.parse(n)),document.getElementById("countCart").innerHTML=e.size,t.forEach((function(t){var n=t.querySelector(".catalog__basket"),r=t.querySelector(".catalog__name").innerHTML,a=new Object;n.addEventListener("click",(function(t){t.preventDefault(),a={size:"select size",numb:1},e.set(r,a),console.log(e),localStorage.setItem("cart",JSON.stringify(Array.from(e.entries()))),document.getElementById("countCart").innerHTML=e.size}))}))})),v&&(g=window.location.search.replace("?id=",""),e().then((function(e){var t,n;!function(e){s(e.name);var t=document.querySelector(".product__img"),n=document.querySelector(".product__name"),r=document.querySelector(".product__price"),a=document.querySelector(".product__description"),o=document.querySelector(".product__select"),c=document.querySelector(".product__selectWrapper"),i=document.querySelector(".product__oneSize");t.src="./uploads/".concat(e.image),n.innerText=e.name,r.innerText=e.price,a.innerText=e.description,e.size?e.size.forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e),t.innerHTML=e,o.appendChild(t)})):(c.classList.add("product__selectWrapper_hidden"),i.classList.remove("hidden"))}((t=e,n=g,t.find((function(e){return e.id==n})))),function(){var e,t=document.querySelector(".product"),n=localStorage.getItem("cart");e=null==n?new Map:new Map(JSON.parse(n)),document.getElementById("countCart").innerHTML=e.size;var r=t.querySelector(".product__button"),a=t.querySelector(".product__button__buy"),o=t.querySelector(".product__name").innerHTML,c=document.querySelector(".product__select"),i=new Object;function l(){var t=c.value;i={size:t,numb:1},e.set(o,i),console.log(e),localStorage.setItem("cart",JSON.stringify(Array.from(e.entries()))),document.getElementById("countCart").innerHTML=e.size}r.addEventListener("click",(function(e){e.preventDefault(),l()})),a.addEventListener("click",(function(e){e.preventDefault(),l(),window.location.href="basket.html"}))}()}))),p&&(e().then((function(e){!function(e){var t=document.querySelector(".ourFavorites__line1"),n=document.querySelector(".ourFavorites__line2");t.innerHTML="",n.innerHTML="";for(var r=e.length-1,a=0;a<2;a++)t.innerHTML+=m(e[Math.round(Math.random()*r)+1]);n.innerHTML=m(e[Math.round(Math.random()*r)+1])}(e),d.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),window.location.href="catalog.html?group=".concat(e.innerText.toLowerCase())}))}))})),function(){document.querySelector(".subscribe__button").onclick=function(t){t.preventDefault();var n=document.querySelector(".subscribe__formField");document.querySelector(".subscribe__message").innerHTML="",1==/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(n.value)?(document.querySelector(".subscribe__message").innerHTML="Thank you! You're successfully subscribed",e()):document.querySelector(".subscribe__message").innerHTML="Please provide valid email!"};var e=function(){var e={email:document.querySelector(".subscribe__formField"),subscription:!0};fetch("https://httpbin.org/post",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}).then((function(e){return console.log(e.json())})).catch((function(e){return console.log(e)}))}}()),f&&function(){var t=function(e){var t=document.getElementById(e);return t.classList.contains("checkout__formField_invalid")&&(t.classList.remove("checkout__formField_invalid"),document.getElementById(e+"Error").style.visibility="hidden"),1!=t.parentElement.classList.length||("userPhone"!=e&&t.value.replace(/ +/g," ").trim(),""!=t.value)||(t.classList.add("checkout__formField_invalid"),document.getElementById(e+"Error").style.visibility="visible",!1)},n=function(e){var t=document.getElementById("user"+e),n=document.querySelector(".errorMessage"+e);return n.innerHTML="",1==("Email"==e?/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i:/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/).test(t.value)||(t.classList.contains("checkout__formField_invalid")||(t.classList.add("checkout__formField_invalid"),document.getElementById("user"+e+"Error").style.visibility="visible",n.innerHTML=e+" doesn't match required format"),!1)},r=document.getElementById("userPhone");r.addEventListener("input",(function(e){var t,n,a=r.value.replace(/\D+/g,"");t=r.value.includes("+8")||"8"===r.value[0]?"":"+";for(var o=0;o<a.length&&o<11;o++){switch(o){case 0:t+="7"===(n=a[o])?"7 (":"8"===n?"8 (":"9"===n?"7 (9":"7 (";continue;case 4:t+=") ";break;case 7:case 9:t+="-"}t+=a[o]}r.value=t}));var a=function(e,t){var n=document.getElementById("userCountry"),r=document.getElementById("userCity"),a=document.getElementById("userAddress");n.value="";var o=function(t){1==e?t.parentElement.classList.remove("formField__wrapper_hidden"):t.parentElement.classList.add("formField__wrapper_hidden")};o(n),o(r),o(a),1==t?n.disabled=!1:(n.value="Russia",n.disabled=!0);var c=document.getElementById("pick-up");r.disabled=c.checked,a.disabled=c.checked};document.getElementById("international").addEventListener("change",(function(e){a(!0,!0),c(20)})),document.getElementById("standard").addEventListener("change",(function(e){a(!0,!1),c(10)})),document.getElementById("courier").addEventListener("change",(function(e){a(!0,!1),c(20)}));var o=!1;document.getElementById("pick-up").addEventListener("change",(function(e){a(!0,!1),c(10),o?window.JCShiptorWidgetPvz.show():(window.JCShiptorWidgetPvz.init(),o=!o)})),document.getElementById("store").addEventListener("change",(function(e){a(!1,!1),c(0)})),document.querySelector("#shiptor_widget_pvz").addEventListener("onPvzSelect",(function(e){console.log(e.detail);var t=function(e,t){document.getElementById(e).value=t};t("userCity",e.detail.prepare_address.administrative_area),t("userAddress",e.detail.address)}));var c=function(e){var t=document.getElementById("subtotal").innerHTML,n=document.getElementById("discount").innerHTML;document.getElementById("delivery").innerHTML=e;var r=document.getElementById("total");console.log("subtotal="+t+" discount = "+n+" delivery="+e),r.innerHTML=+t-+n+ +e};document.querySelector(".discount__button").onclick=function(e){e.preventDefault();var t=document.querySelector(".discount__code").value,n=document.getElementById("total").innerHTML,r=document.getElementById("discount");if("minus10"==t&&""==r.innerHTML){var a=Math.round(.1*n);document.getElementById("total").innerHTML=n-a,r.innerHTML=a}},document.addEventListener("DOMContentLoaded",(function(t){e().then((function(e){!function(e){console.log(e);var t=localStorage.getItem("cart");if(null!=t){var n=JSON.parse(t);console.log(n);var r=document.querySelector(".purchasesList"),a=0;n.forEach((function(t){var n,o,c=t[0],i=t[1].size,l=t[1].numb;e.forEach((function(e){e.name==c&&(n=e.price,o=e.image)}));var s=document.createElement("div");s.classList.add("purchase"),r.append(s);var u=document.createElement("div");u.classList.add("purchase__preview"),s.append(u);var d=document.createElement("img");d.classList.add("image"),d.src="./uploads/"+o,u.append(d);var m=document.createElement("div");m.classList.add("purchase__describtion"),s.append(m);var g=document.createElement("p");g.classList.add("describtionText"),g.innerHTML=c,m.append(g);var _=document.createElement("p");g.classList.add("size"),_.innerHTML=i,m.append(_);var v=document.createElement("div");v.classList.add("purchase__price"),v.innerHTML=n*l+"$",a+=n*l,s.append(v)})),console.log(a),document.getElementById("subtotal").innerHTML=a,document.getElementById("total").innerHTML=a}}(e)})),window._shiptorWidget.load()}));document.getElementById("submitButton").onclick=function(e){var r,a,o;e.preventDefault(),null==localStorage.getItem("cart")?document.querySelector(".errorMessage").innerHTML="Your cart is empty":(r=Math.min(t("userEmail"),n("Email"),t("userName"),t("userSurname"),t("userPhone"),n("Phone"),t("userCountry"),t("userCity"),t("userAddress")),a=document.querySelector(".errorMessage"),1==r?(o={name:document.getElementById("userName").value,surname:document.getElementById("userSurname").value,email:document.getElementById("userEmail").value,phoneNumber:document.getElementById("userPhone").value,subscription:document.getElementById("newsSubscribtion").checked},fetch("https://httpbin.org/post",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(o)}).then((function(e){return console.log(e.json())})).catch((function(e){return console.log(e)})),a.innerHTML="",1==document.getElementById("byCard").checked?document.location.href="./uploads/payment/payment.html":document.querySelector(".container__modal").classList.add("container__modal_visible"),document.getElementById("form").reset()):a.innerHTML="Please provide all required information")},document.getElementById("successButton").addEventListener("click",(function(){document.querySelector(".container__modal").classList.remove("container__modal_visible"),localStorage.removeItem("cart")}))}()}()}();
//# sourceMappingURL=main.34e3efacb1e83dff71b1.js.map