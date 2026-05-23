// it can be accessable to the inner function 
var num1 =10;

function sum() {
    // closure is a function along with its lexical scope. It allows the inner function to access the variables of the outer function even after the outer function has finished executing.
    var num2 =20;
    return function(){
        return num1 + num2;
    }
}

// console.log(sum())
// console.dir(sum)

// function calling inner or outer 
var add=sum();
console.log(add())
console.dir(add)