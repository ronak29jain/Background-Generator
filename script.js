var firstcolor = document.getElementById('firstcolor');
var secondcolor = document.getElementById('secondcolor');

var body = document.getElementsByTagName('body')[0];

function print(){
    console.log(firstcolor.value, secondcolor.value)
    body.style.background = linear-gradient(to left, firstcolor.value, secondcolor.value); 
}

print();
