!function(){"use strict";var e;(function(){const e=document.querySelectorAll(".js-mobile-nav-btn"),t=document.querySelector(".mobile-nav");if(e)for(let o of e)o.onclick=function(){t.classList.toggle("mobile-nav--open"),document.body.classList.toggle("no-scroll")}})(),function(){let e=document.getElementsByTagName("select");function t(e){const t=document.querySelectorAll(".select");if(!e.target.closest(".select"))for(let e=0;e<t.length;e++){const o=t[e],n=o.querySelector(".select__options");o.classList.remove("_active"),l(n,100)}}function o(e){const t=e.parentElement,o=e.getAttribute("class"),s=e.querySelector("option:checked");e.setAttribute("data-default",s.value),e.style.display="none",t.insertAdjacentHTML("beforeend",'<div class="select select_'+o+'"></div>'),e.parentElement.querySelector(".select").appendChild(e),function(e){const t=e.parentElement,o=t.querySelector(".select__item"),s=e.querySelectorAll("option"),i=e.querySelector("option:checked").text,a=e.getAttribute("data-type");o&&o.remove();let c="";c="input"==a?'<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="'+i+'" data-error="Ошибка" data-value="'+i+'" class="select__input"></div>':'<div class="select__value icon-select-arrow"><span>'+i+"</span></div>",t.insertAdjacentHTML("beforeend",'<div class="select__item"><div class="select__title">'+c+'</div><div class="select__options">'+function(e){if(e){let t="";for(let o=0;o<e.length;o++){const n=e[o],l=n.value;""!=l&&(t=t+'<div data-value="'+l+'" class="select__option">'+n.text+"</div>")}return t}}(s)+"</div></div></div>"),function(e,t){const o=t.querySelector(".select__item"),s=t.querySelector(".select__options"),i=t.querySelectorAll(".select__option"),a=e.getAttribute("data-type"),c=t.querySelector(".select__input");o.addEventListener("click",(function(){let e=document.querySelectorAll(".select");for(let t=0;t<e.length;t++){const n=e[t],r=n.querySelector(".select__options");n!=o.closest(".select")&&(n.classList.remove("_active"),l(r,100))}r(s,100),t.classList.toggle("_active")}));for(let o=0;o<i.length;o++){const l=i[o],r=l.getAttribute("data-value"),s=l.innerHTML;"input"==a?c.addEventListener("keyup",n):l.getAttribute("data-value")==e.value&&(l.style.display="none"),l.addEventListener("click",(function(){for(let e=0;e<i.length;e++)i[e].style.display="block";"input"==a?(c.value=s,e.value=r):(t.querySelector(".select__value").innerHTML="<span>"+s+"</span>",e.value=r,l.style.display="none")}))}}(e,t)}(e)}function n(e){e.target.closest(".select ").querySelector(".select__options");let t=e.target.closest(".select ").querySelectorAll(".select__option"),o=e.target.value.toUpperCase();for(let e=0;e<t.length;e++){let n=t[e];(n.textContent||n.innerText).toUpperCase().indexOf(o)>-1?n.style.display="":n.style.display="none"}}e.length>0&&function(){for(let t=0;t<e.length;t++)o(e[t]);document.addEventListener("click",(function(e){t(e)})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&t(e)}))}();let l=(e,t=500)=>{e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout((()=>{e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")}),t)},r=(e,t=500)=>{if(!e.classList.contains("_slide"))return e.classList.add("_slide"),"none"===window.getComputedStyle(e).display?((e,t=500)=>{e.style.removeProperty("display");let o=window.getComputedStyle(e).display;"none"===o&&(o="flex"),e.style.display=o;let n=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=n+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout((()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")}),t)})(e,t):l(e,t)}}(),"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){const e=document.body;var t=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");t&&o&&(t.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),console.log();var n=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+n+'"]').classList.add("active"),o.classList.add("active"),e.classList.add("not-scroll")}))})),n.forEach((function(t){t.addEventListener("click",(function(t){this.closest(".modal").classList.remove("active"),o.classList.remove("active"),e.classList.remove("not-scroll")}))})),document.body.addEventListener("keyup",(function(t){27==t.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"),e.classList.remove("not-scroll"))}),!1),o.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),e.classList.remove("not-scroll")})))})),window.addEventListener("DOMContentLoaded",(function(){[].forEach.call(document.querySelectorAll(".tel"),(function(e){var t;function o(e){e.keyCode&&(t=e.keyCode),this.selectionStart<3&&e.preventDefault();var o="+7 (___) ___-__-__",n=0,l=(o.replace(/\D/g,""),this.value.replace(/\D/g,"")),r=o.replace(/[_\d]/g,(function(e){return n<l.length?l.charAt(n++):e}));-1!=(n=r.indexOf("_"))&&(n<5&&(n=3),r=r.slice(0,n));var s=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(s=new RegExp("^"+s+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=r),"blur"==e.type&&this.value.length<5&&(this.value="")}e.addEventListener("input",o,!1),e.addEventListener("focus",o,!1),e.addEventListener("blur",o,!1),e.addEventListener("keydown",o,!1)}))})),function(){document.getElementById("current-year").innerHTML=(new Date).getFullYear(),document.querySelector(".footer__up span").addEventListener("click",(()=>window.scrollTo({top:0,behavior:"smooth"})));const e=document.querySelector(".autoplay-progress svg"),t=(new Swiper(".hero-swiper",{direction:"horizontal",loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".hero__box .swiper-pagination",type:"fraction",formatFractionCurrent:function(e){return"0"+e},formatFractionTotal:function(e){return"0"+e}},navigation:{nextEl:".hero__box .swiper-button-next",prevEl:".hero__box .swiper-button-prev"},on:{autoplayTimeLeft(t,o,n){e.style.setProperty("--progress",1-n)}}}),new Swiper(".help__swiper",{direction:"horizontal",loop:!0,slidesPerView:10,spaceBetween:80,autoplay:{delay:2500,disableOnInteraction:!1}}),document.querySelectorAll(".accordion__btn"));if(t)for(let e of t)e.addEventListener("click",(t=>{e.closest(".accordion__item").classList.toggle("active")}))}()}();