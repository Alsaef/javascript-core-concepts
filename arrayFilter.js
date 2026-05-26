// filter method in javascript

const numbers =[1,2,3,4,5,6,7,8];

//  filter method create 
const evenNumbers=numbers.filter((num)=>{
   return num % 2 ===0
})

// print even numbers
console.log(evenNumbers)