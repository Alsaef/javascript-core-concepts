// block scope in javascript 

// var is a functional scope variable 
// let and const are block scope variable


if (true) {
  var a=10; // it is a functional scope variable  
  let b=20;// it is a block scope variable
}

console.log(a)
console.log(b)