// Primitive and non primitive data type
// Primitive:
// Number ,String, Boolean, null, undefined ,Symbol,BigInt

const score =100;
const scoreValue = 100.3

const outsideTemp =null
const id = Symbol('123')
const anotherId =Symbol('123')
console.log(id==anotherId)

const bigNumber =49848686446546n

//Reference(Non primitive):Array ,Objects, Functions
const heros = ["shak","dsf0","trdft"]
let muObj = {
    name:"satys",
    age:22
}

const my = function (){
   console.log("hello world")
}

console.log(typeof heros)
//JS is dynamically typed language





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive:We get copy) Memory and Heap(Non-Primitive: we get reference) Memory


let myYoutubename = "hitesh"
let anotherName = myYoutubename
anotherName="satyam"
console.log(myYoutubename)
console.log(anotherName)

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email="sachin@gmail.com"
console.log(userOne)
console.log(userTwo)
