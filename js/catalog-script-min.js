var logRegBlock=document.querySelector(".log-in-register-block"),accountMenu=document.querySelector(".account-menu"),signIn=document.querySelector(".sign-in"),registration=document.querySelector(".registration"),logOut=document.querySelector(".logout");signIn.addEventListener("click",function(e){e.preventDefault(),logRegBlock.classList.add("display-none"),accountMenu.classList.remove("display-none")}),registration.addEventListener("click",function(e){e.preventDefault(),logRegBlock.classList.add("display-none"),accountMenu.classList.remove("display-none")}),logOut.addEventListener("click",function(e){e.preventDefault(),logRegBlock.classList.remove("display-none"),accountMenu.classList.add("display-none")});for(var linkbuy=document.querySelectorAll(".buy-button"),modalCart=document.querySelector(".modal-to-cart"),cartClose=document.querySelector(".modal-to-cart .modal-close"),buyMore=modalCart.querySelector(".buy-more"),i=0;i<linkbuy.length;i++)linkbuy[i].addEventListener("click",function(e){e.preventDefault(),modalCart.classList.add("modal-show")});cartClose.addEventListener("click",function(e){e.preventDefault(),modalCart.classList.remove("modal-show")}),buyMore.addEventListener("click",function(e){e.preventDefault(),modalCart.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),modalCart.classList.contains("modal-show")&&modalCart.classList.remove("modal-show"))});