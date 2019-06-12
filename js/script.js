 //форма напишите нам
 var contactUs = document.querySelector(".contact-us-button");
 var modalAbout = document.querySelector(".modal-contact-us");
 var close = modalAbout.querySelector(".modal-close");
 var fio = modalAbout.querySelector("[name=fio]");
 var mail = modalAbout.querySelector("[name=mail]");
 var text = modalAbout.querySelector("[name=text]");
 var form = modalAbout.querySelector("form");

 var isStorageSupport = true;
 var storageFio = "";
 var storageMail = "";

 try {
   storageFio = localStorage.getItem("fio");
   storageMail = localStorage.getItem("mail");
 } catch (err) {
   isStorageSupport = false;
 }

 contactUs.addEventListener("click", function (evt) {
   evt.preventDefault();
   modalAbout.classList.add("modal-show");
   if (storageFio) {
     fio.value = storageFio;
     mail.focus();
   } else {
     fio.focus();
   }
 });

 close.addEventListener("click", function (evt) {
   evt.preventDefault();
   modalAbout.classList.remove("modal-show");
   modalAbout.classList.remove("modal-error");
 });

 form.addEventListener("submit", function (evt) {
   if (!fio.value || !mail.value) {
     evt.preventDefault();
     modalAbout.classList.remove("modal-error");
     modalAbout.offsetWidth = modalAbout.offsetWidth;
     modalAbout.classList.add("modal-error");
   } else {
     if (isStorageSupport) {
       localStorage.setItem("fio", fio.value);
       localStorage.setItem("mail", mail.value);
     }
   }
 });

 window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     if (modalAbout.classList.contains("modal-show")) {
       modalAbout.classList.remove("modal-show");
       modalAbout.classList.remove("modal-error");
     }
   }
 });

 // большая карта
 var toMap = document.querySelector(".map");
 var modalMap = document.querySelector(".modal-map");
 var mapClose = modalMap.querySelector(".modal-close");

 toMap.addEventListener("click", function (evt) {
   evt.preventDefault();
   modalMap.classList.add("modal-show");
 });

 window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     if (modalMap.classList.contains("modal-show")) {
       modalMap.classList.remove("modal-show");
     }
   }
 });

 mapClose.addEventListener("click", function (evt) {
   evt.preventDefault();
   modalMap.classList.remove("modal-show");
 });

 //нижний слайдер
 var delivery = document.querySelector(".delivery-link");
 var guarantee = document.querySelector(".guarantee-link");
 var credit = document.querySelector(".credit-link");
 var deliverySlide = document.querySelector(".slide-delivery");
 var guaranteeSlide = document.querySelector(".slide-guarantee");
 var creditSlide = document.querySelector(".slide-credit");

 guarantee.addEventListener("click", function (evt) {
   evt.preventDefault();
   delivery.classList.remove("active-link");
   guarantee.classList.add("active-link");
   credit.classList.remove("active-link");
   deliverySlide.classList.remove("service-slider-active-slide");
   guaranteeSlide.classList.add("service-slider-active-slide");
   creditSlide.classList.remove("service-slider-active-slide");
 });

 credit.addEventListener("click", function (evt) {
   evt.preventDefault();
   delivery.classList.remove("active-link");
   guarantee.classList.remove("active-link");
   credit.classList.add("active-link");
   deliverySlide.classList.remove("service-slider-active-slide");
   guaranteeSlide.classList.remove("service-slider-active-slide");
   creditSlide.classList.add("service-slider-active-slide");
 });

 delivery.addEventListener("click", function (evt) {
   evt.preventDefault();
   delivery.classList.add("active-link");
   guarantee.classList.remove("active-link");
   credit.classList.remove("active-link");
   deliverySlide.classList.add("service-slider-active-slide");
   guaranteeSlide.classList.remove("service-slider-active-slide");
   creditSlide.classList.remove("service-slider-active-slide");
 });

 //верхний слайдер
 var slide1 = document.querySelector(".slide-1");
 var slide2 = document.querySelector(".slide-2");
 var right = document.querySelector(".right-arrow");
 var left = document.querySelector(".left-arrow");

 right.addEventListener("click", function (evt) {
   evt.preventDefault();
   if (slide2.classList.contains("display-none")) {
     slide2.classList.remove("display-none");
     slide1.classList.add("display-none");
   } else {
     slide1.classList.remove("display-none");
     slide2.classList.add("display-none");
   }
 });

 left.addEventListener("click", function (evt) {
   evt.preventDefault();
   if (slide2.classList.contains("display-none")) {
     slide2.classList.remove("display-none");
     slide1.classList.add("display-none");
   } else {
     slide1.classList.remove("display-none");
     slide2.classList.add("display-none");
   }
 });

 //изменение состояния для вошедщих и не вошедших пользователей
 
 var logRegBlock = document.querySelector(".log-in-register-block");
 var accountMenu = document.querySelector(".account-menu");
 var signIn = document.querySelector(".sign-in");
 var registration = document.querySelector(".registration");
 var logOut = document.querySelector(".logout");

 signIn.addEventListener("click", function (evt) {
   evt.preventDefault();
   logRegBlock.classList.add("display-none");
   accountMenu.classList.remove("display-none");
 });

 registration.addEventListener("click", function (evt) {
   evt.preventDefault();
   logRegBlock.classList.add("display-none");
   accountMenu.classList.remove("display-none");
 });

 logOut.addEventListener("click", function (evt) {
   evt.preventDefault();
   logRegBlock.classList.remove("display-none");
   accountMenu.classList.add("display-none");
 });
 
// Окно добавления в корзину
var linkbuy = document.querySelectorAll(".buy-button");
var linkbookm = document.querySelectorAll(".to-bookmarks");
var modalCart = document.querySelector(".modal-to-cart");
var cartClose = document.querySelector(".modal-to-cart .modal-close");
var buyMore = modalCart.querySelector(".buy-more");
var cartValue = document.querySelector(".cart-numbers");
var bookmValue = document.querySelector(".bookmarks-number");
var itemsCart = document.querySelector(".cart-numbers").value;
var itemsBookmarks = document.querySelector(".bookmarks-number").value;
var cartTopButton = document.querySelector(".top-header-cart");
var bookmarksTopButton = document.querySelector(".top-header-bookmarks");

for (var i = 0; i < linkbuy.length; i++) {
    linkbuy[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        modalCart.classList.add("modal-show");
        itemsCart = parseInt(document.querySelector(".cart-numbers").value, 10 ) + 1;
        cartValue.value = itemsCart;
        cartTopButton.classList.add("not-empty-button-top");      
    });
}

cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCart.classList.remove("modal-show");
});

buyMore.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCart.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modalCart.classList.contains("modal-show")) {
            modalCart.classList.remove("modal-show");
        }
    }
});

for (var n = 0; n < linkbookm.length; n++) {
  linkbookm[n].addEventListener("click", function (evt) {
      evt.preventDefault();
      itemsBookmarks = parseInt(document.querySelector(".bookmarks-number").value, 10 ) + 1;
      bookmValue.value = itemsBookmarks;
      bookmarksTopButton.classList.add("not-empty-button-top");  
  });
}
//изменение фона у кнопок в шапке при добавления товара