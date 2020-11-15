/*var Button = document.getElementById('button');

function displayValue() {
    var ButtonValue = Button.value; 
    console.log(ButtonValue); 
}

Button.addEventListener('click', displayValue, false)

*/

function Displayval() {
  var ButtonValue = Button.value;
    console.log(ButtonValue)
}6

var buttons = document.querySelectorAll('.buttons');
for (var button of buttons) {
    addEventListener('click', Displayval, false);
}