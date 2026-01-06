//array are resizable
const myArray = [0,3,2,5,6,7]
console.log(myArray.length)


const vowels=['a','e','i','o','u']
const myArr2 = new Array(1,2,3,4,5)

myArray.push(9)
myArray.pop()
myArray.unshift(9)
myArray.shift()

const newArr = myArray.join()
console.log(myArray)
console.log(newArr)


console.log(myArr2)
const myn1=myArr2.slice(1,3)
console.log(myn1)
const myn2=myArr2.splice(1,3) // it manipulate the array like the output will get removed from original array
console.log(myn2)
console.log(myArr2)
