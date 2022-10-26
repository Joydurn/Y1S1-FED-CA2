//Get the button from html doc
var button = document.getElementById("theme");

var myBody=document.body;

// When the user clicks on the button, scroll to the top of the document
function darkMode() {
  myBody.classList.toggle("bg-dark"); 
  myBody.classList.toggle("text-dark");
}