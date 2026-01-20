const nums=[2,5,7,4,2,6]

const initVal =0;
// const myTotal = nums.reduce( function (acc,curr){
//     return acc+curr
// } ,0)
const myTotal = nums.reduce( (acc,curr)=>
     acc+curr ,0)
// const myTotal = nums.reduce( (acc,curr)=>
//     {return acc+curr },0)
console.log(myTotal);
const cart = [
  { name: "Laptop", price: 50000, qty: 1 },
  { name: "Phone", price: 20000, qty: 2 },
  { name: "Headphones", price: 3000, qty: 3 }
];
const totalBill = cart.reduce((acc, item) => 
  acc + item.price * item.qty
, 0);

console.log(totalBill);