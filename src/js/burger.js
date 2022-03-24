let closeNav = document.querySelector(".header__closeBtn");
let openNav = document.getElementById("header__openBtn");

openNav.onclick = function () {
    document.getElementById("header__sidenavId").classList.add("open");
}

closeNav.onclick = function () {
    document.getElementById("header__sidenavId").classList.remove("open");
}