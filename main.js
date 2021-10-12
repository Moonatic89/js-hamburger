//Switch between hamburger menu open and close onclick. NOTE: There is an unused .active class in css/media query, which displays the menu itself.

//#region Initialize Variables

const openButton = document.querySelector("div > a");
const closeButton = document.querySelector(".hamburger-menu > a");
const hamburgerMenu = document.querySelector(".hamburger-menu");

//#endregion

//#region Click event

openButton.addEventListener("click", addActiveClass);
closeButton.addEventListener("click", removeActiveClass);

//#endregion

//#region Functions

function addActiveClass() {
    hamburgerMenu.classList.add("active");
}

function removeActiveClass() {
    hamburgerMenu.classList.remove("active");
}

//#endregion
