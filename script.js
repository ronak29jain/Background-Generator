var firstcolor = document.getElementById('firstcolor');
var secondcolor = document.getElementById('secondcolor');
var h3 = document.querySelector('h3');
h3.innerHTML = "Linear Gradient of color " + firstcolor.value + ' and ' + secondcolor.value;

var body = document.querySelector('body');

function linear_gradient(){
    // console.log(firstcolor.value, secondcolor.value);
    body.style.background = "linear-gradient(to right, " + firstcolor.value + "," + secondcolor.value + ")"; 
    h3.innerHTML = "Linear Gradient of color " + firstcolor.value + ' and ' + secondcolor.value;
}

firstcolor.addEventListener('input', linear_gradient);
secondcolor.addEventListener('input', linear_gradient);
