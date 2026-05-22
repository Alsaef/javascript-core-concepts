// What is local/functional scope

// global scope it can be accessed anywhere in the code
var x=10

// local scope
function test(){
   var x=20;
    console.log(x)
}

// calling the function
test()

// global scope outside the function
console.log(x)