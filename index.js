// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var nb = document.getElementById("navbar");
var spacer = document.getElementById("spacer");
var logo = document.getElementById("logo");
// Get the offset position of the navbar
var sticky = nb.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nb.classList.add("sticky");
    logo.style.width = "35px";
    logo.style.height = "35px";
    document.getElementById("idk").style.marginTop = "30px";
  } else {
    nb.classList.remove("sticky");
    logo.style.width = "75px";
    logo.style.height = "75px";
    document.getElementById("idk").style.marginTop = "45px";
  }
}

