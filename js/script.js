window.onload = function () {
    document.querySelector(".header__burger").onclick = function (e) {
        elementTarget = e.target;
        targetClasses = elementTarget.className.split(" ");
        elementBurgerMenu = document.querySelector(".burger-menu")
        console.log(targetClasses.length)
        if (targetClasses.length == 1) {
            elementTarget.className = "header__burger active"
            elementBurgerMenu.className = "burger-menu active"
        }
        else {
            elementTarget.className = "header__burger"
            elementBurgerMenu.className = "burger-menu"
        }
    }
}
window.addEventListener('scroll', function() {
    elementHeader = document.querySelector("header.header");
    if (pageYOffset > 0 && elementHeader.className == "header") {
        elementHeader.className = "header fixed";
    }
    else if (pageYOffset == 0 && elementHeader.className == "header fixed") {
        elementHeader.className = "header";
    }
});