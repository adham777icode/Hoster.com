isShowed = false;
let menu = document.getElementById("menu");
function showMenu() {
    if (isShowed === false) {
        isShowed = true;
        menu.classList.add("menu-open");
    }
}
function hideMenu() {
    if (isShowed === true) {
        isShowed = false;
        menu.classList.add("menu-close");
        menu.classList.remove("menu-open");
    }
}