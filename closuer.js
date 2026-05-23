var num1 =10;

function sum() {
    var num2 =20;
    return function(){
        return num1 + num2;
    }
}

// console.log(sum())
// console.dir(sum)

var add=sum();
console.log(add())
console.dir(add)