var contactUs=document.querySelector(".contact-us-button"),modalAbout=document.querySelector(".modal-contact-us"),close=modalAbout.querySelector(".modal-close"),fio=modalAbout.querySelector("[name=fio]"),mail=modalAbout.querySelector("[name=mail]"),text=modalAbout.querySelector("[name=text]"),form=modalAbout.querySelector("form"),isStorageSupport=!0,storageFio="",storageMail="";try{storageFio=localStorage.getItem("fio"),storageMail=localStorage.getItem("mail")}catch(e){isStorageSupport=!1}contactUs.addEventListener("click",function(e){e.preventDefault(),modalAbout.classList.add("modal-show"),storageFio?(fio.value=storageFio,mail.focus()):fio.focus()}),close.addEventListener("click",function(e){e.preventDefault(),modalAbout.classList.remove("modal-show"),modalAbout.classList.remove("modal-error")}),form.addEventListener("submit",function(e){fio.value&&mail.value?isStorageSupport&&(localStorage.setItem("fio",fio.value),localStorage.setItem("mail",mail.value)):(e.preventDefault(),modalAbout.classList.remove("modal-error"),modalAbout.offsetWidth=modalAbout.offsetWidth,modalAbout.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),modalAbout.classList.contains("modal-show")&&(modalAbout.classList.remove("modal-show"),modalAbout.classList.remove("modal-error")))});var toMap=document.querySelector(".map"),modalMap=document.querySelector(".modal-map"),mapClose=modalMap.querySelector(".modal-close");toMap.addEventListener("click",function(e){e.preventDefault(),modalMap.classList.add("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),modalMap.classList.contains("modal-show")&&modalMap.classList.remove("modal-show"))}),mapClose.addEventListener("click",function(e){e.preventDefault(),modalMap.classList.remove("modal-show")});var delivery=document.querySelector(".delivery-link"),guarantee=document.querySelector(".guarantee-link"),credit=document.querySelector(".credit-link"),deliverySlide=document.querySelector(".slide-delivery"),guaranteeSlide=document.querySelector(".slide-guarantee"),creditSlide=document.querySelector(".slide-credit");guarantee.addEventListener("click",function(e){e.preventDefault(),delivery.classList.remove("active-link"),guarantee.classList.add("active-link"),credit.classList.remove("active-link"),deliverySlide.classList.remove("service-slider-active-slide"),guaranteeSlide.classList.add("service-slider-active-slide"),creditSlide.classList.remove("service-slider-active-slide")}),credit.addEventListener("click",function(e){e.preventDefault(),delivery.classList.remove("active-link"),guarantee.classList.remove("active-link"),credit.classList.add("active-link"),deliverySlide.classList.remove("service-slider-active-slide"),guaranteeSlide.classList.remove("service-slider-active-slide"),creditSlide.classList.add("service-slider-active-slide")}),delivery.addEventListener("click",function(e){e.preventDefault(),delivery.classList.add("active-link"),guarantee.classList.remove("active-link"),credit.classList.remove("active-link"),deliverySlide.classList.add("service-slider-active-slide"),guaranteeSlide.classList.remove("service-slider-active-slide"),creditSlide.classList.remove("service-slider-active-slide")});var slide1=document.querySelector(".slide-1"),slide2=document.querySelector(".slide-2"),right=document.querySelector(".right-arrow"),left=document.querySelector(".left-arrow");right.addEventListener("click",function(e){e.preventDefault(),slide2.classList.contains("display-none")?(slide2.classList.remove("display-none"),slide1.classList.add("display-none")):(slide1.classList.remove("display-none"),slide2.classList.add("display-none"))}),left.addEventListener("click",function(e){e.preventDefault(),slide2.classList.contains("display-none")?(slide2.classList.remove("display-none"),slide1.classList.add("display-none")):(slide1.classList.remove("display-none"),slide2.classList.add("display-none"))});var logRegBlock=document.querySelector(".log-in-register-block"),accountMenu=document.querySelector(".account-menu"),signIn=document.querySelector(".sign-in"),registration=document.querySelector(".registration"),logOut=document.querySelector(".logout");signIn.addEventListener("click",function(e){e.preventDefault(),logRegBlock.classList.add("display-none"),accountMenu.classList.remove("display-none")}),registration.addEventListener("click",function(e){e.preventDefault(),logRegBlock.classList.add("display-none"),accountMenu.classList.remove("display-none")}),logOut.addEventListener("click",function(e){e.preventDefault(),logRegBlock.classList.remove("display-none"),accountMenu.classList.add("display-none")});for(var linkbuy=document.querySelectorAll(".buy-button"),linkbookm=document.querySelectorAll(".to-bookmarks"),modalCart=document.querySelector(".modal-to-cart"),cartClose=document.querySelector(".modal-to-cart .modal-close"),buyMore=modalCart.querySelector(".buy-more"),cartValue=document.querySelector(".cart-numbers"),bookmValue=document.querySelector(".bookmarks-number"),itemsCart=document.querySelector(".cart-numbers").value,itemsBookmarks=document.querySelector(".bookmarks-number").value,cartTopButton=document.querySelector(".top-header-cart"),bookmarksTopButton=document.querySelector(".top-header-bookmarks"),i=0;i<linkbuy.length;i++)linkbuy[i].addEventListener("click",function(e){e.preventDefault(),modalCart.classList.add("modal-show"),itemsCart=parseInt(document.querySelector(".cart-numbers").value,10)+1,cartValue.value=itemsCart,cartTopButton.classList.add("not-empty-button-top")});cartClose.addEventListener("click",function(e){e.preventDefault(),modalCart.classList.remove("modal-show")}),buyMore.addEventListener("click",function(e){e.preventDefault(),modalCart.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),modalCart.classList.contains("modal-show")&&modalCart.classList.remove("modal-show"))});for(var n=0;n<linkbookm.length;n++)linkbookm[n].addEventListener("click",function(e){e.preventDefault(),itemsBookmarks=parseInt(document.querySelector(".bookmarks-number").value,10)+1,bookmValue.value=itemsBookmarks,bookmarksTopButton.classList.add("not-empty-button-top")});