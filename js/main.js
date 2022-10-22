
//Lluxim Elements//
function showChar() {
var element = document.getElementById("lluxim");
element.src = "/sapp-hub/images/characters/RosterB.png"
element.style.backgroundColor = "red";
element.classList.add("halftone");
}

function hideChar() {
   var element = document.getElementById("lluxim");
   element.src = "/sapp-hub/images/sillhouettes/RosterB.png";
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

