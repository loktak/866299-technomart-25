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
var modalCart = document.querySelector(".modal-to-cart");
var cartClose = document.querySelector(".modal-to-cart .modal-close");
var buyMore = modalCart.querySelector(".buy-more");

for (var i = 0; i < linkbuy.length; i++) {
    linkbuy[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        modalCart.classList.add("modal-show");   
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