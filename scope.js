//Global scope 
// let a=10
// const b=90
// var c=30
let a=800
// {} - block scope 
if(true){
 let a=10
const b=90
// var c=30
console.log(a);

}

console.log(a);
// console.log(b)
// console.log(c); work well as var is accessible out of scope too

