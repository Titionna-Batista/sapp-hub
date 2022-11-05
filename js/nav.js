let windowSize = window.innerWidth;
// console.log("The window is currently sized at " + windowSize + " pixels.");

//Steam from the steamed clams we're having//
// var clams = document.querySelector("hamburger");
// clams.addEventListener("onClick", toggleNav());



//onClick it will become active or inactive depending on current state//
function toggleNav(){
    var links = document.getElementById("links");
    var burger = document.querySelector(".hamburger")

    if (links.style.display == "block"){
        links.style.display = "none";
        //Burger Animation
        burger.classList.toggle("is-active");
    } else {
        links.style.display = "block";
        //Burger Animation
        burger.classList.toggle("is-active");
    }
}

