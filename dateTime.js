//Date
// let date = new Date()
// console.log(date.toString())
// console.log("++++++++++++++++++++++++++++++++++++++++")
// console.log(date.toDateString())
// console.log("++++++++++++++++++++++++++++++++++++++++")

// console.log(date.toISOString())
// console.log("++++++++++++++++++++++++++++++++++++++++")

// console.log(date.toLocaleDateString())
// console.log("++++++++++++++++++++++++++++++++++++++++")

// console.log(date.toLocaleString())
// console.log("++++++++++++++++++++++++++++++++++++++++")

// console.log(date.toTimeString())
// console.log("++++++++++++++++++++++++++++++++++++++++")

// console.log(date.toUTCString())
// console.log("++++++++++++++++++++++++++++++++++++++++")

// // let myCreatedDate = new Date(2023 ,0,23,5,6)
let myCreatedDate = new Date("2023-01-14")

// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Kolkata"
}))