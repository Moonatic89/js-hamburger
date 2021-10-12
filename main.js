//Switch between hamburger menu open and close onclick. NOTE: There is an unused .active class in css/media query, which displays the menu itself.

const openButton = document.querySelector("div > a");
const hamburgerMenu = document.querySelector(".hamburger-menu");


//console.log(hamburgerMenu); // <- is working

openButton.addEventListener("click", addActiveClass);

function addActiveClass() {

    console.log(hamburgerMenu); // <- On click event working

    hamburgerMenu.classList.add("active");

    //  classList.add("active"); <- not working
    // document.getElementsByClassName("hamburger-menu").classList.add("active");

}

