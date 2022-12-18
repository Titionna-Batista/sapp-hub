
//Lluxim Elements//
function showChar() {
var element = document.getElementsByClassName("style-container")[0];
var image = document.getElementById("lluxim")
image.src = "/sapp-hub/images/characters/RosterB.png"
element.style.backgroundColor = "red";
element.classList.add("halftone");
}

function showModal() {
var modal = document.getElementsByClassName("modal no-display");
// Going to be a simple show/don't show, work on after styling
modal.classList.remove(no-display);
modal.classList.add("display");

}

function hideChar() {
   var element = document.getElementsByClassName("style-container")[0];
   var image = document.getElementById("lluxim")
   image.src = "/sapp-hub/images/sillhouettes/RosterB.png";
   element.style.backgroundColor = "gray";
   element.classList.remove("halftone");  
}

//John Elements//

function johnShow() {
var element = document.getElementById("john");
element.src = "/sapp-hub/images/characters/RosterC.png";
}

function johnHide(){
    var element = document.getElementById("john");
    element.src = "/sapp-hub/images/sillhouettes/RosterC.png";
}

