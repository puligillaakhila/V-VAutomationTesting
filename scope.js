// Global scope
// Function scope
// Block scope

var Apple = "red";
var orange = "orange";
var banana = "yellow";

function fruit(){
    document.write(Apple)
    document.write(orange)
    document.write(banana)
}
fruit();




var x = 10;
function apple(){
    console.log(x);
    document.write(x)
}
apple();
document.write(x)


function orange(){
    var y = 20;
    document.write(y)
}
orange();
document.write(y);





var x = 10; // outside variable
function apple(){
    
    document.write(x)
}
apple();
document.write(x)


function orange(){
    var y = 20;     //inside variable
    document.write(y)
}
orange();
document.write(y);
