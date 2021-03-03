myID = document.getElementById("fixedbutton");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 800) {
    myID.className = "fixedbutton show"
  } else {
    myID.className = "fixedbutton hide"
  }
};

window.addEventListener("scroll", myScrollFunc);