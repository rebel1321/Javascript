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