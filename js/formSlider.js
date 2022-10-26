/*Get the slider input element*/
var slider = document.getElementById("FormRange");
var output = document.getElementById("demo");

/*Display value of slider*/
output.innerHTML = slider.value;

/*When user changes the value, display again*/
slider.oninput = function() {
  output.innerHTML = this.value;
}

 