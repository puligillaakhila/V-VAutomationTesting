let globalVar = "I am global";

function outerFunction() {
  let outerVar = "I am in the outer scope";

  function innerFunction() {
    let innerVar = "I am in the inner scope";
    console.log(innerVar); // Accessible
    console.log(outerVar); // Accessible from outer scope
    console.log(globalVar); // Accessible from global scope
  }

  innerFunction();
  // console.log(innerVar); // ReferenceError: innerVar is not defined
}

outerFunction();
// console.log(outerVar); // ReferenceError: outerVar is not defined




functions outer(){
    let outervar = "I am outside";

   function inner(){
            console.log(outervar);
   } 
   inner();
}
outer();
