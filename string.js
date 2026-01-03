const name = "hitesh"

const repoCount = 50

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('hitesh_hc')

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))

console.log(gameName.startsWith('h'))

const newString = gameName.substring(0,4) // not support negative index
console.log(newString)
const anotherString = gameName.substring(-8,4) // support negative index
console.log(anotherString)

const newStr = "      sdbvuisbv      "

console.log(newStr)
console.log(newStr.trim())

const url = "https://saty%20am.com"

console.log(url.replace('%20','-'))


console.log(gameName.split('_'))

