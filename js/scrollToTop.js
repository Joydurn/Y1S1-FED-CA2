//Get the button from html doc
mybutton = document.getElementById("myBtn");


// When the user clicks on the button, scroll to the top of the document
// 2 types for more browser support
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}