//for of
// ["",""]
// [{},{}]
const arr = [1,3,4,5,6]
for (const element of arr) {
    console.log(element);
    
} // Here object refers to anything like map array string 
//Map
const myMap = new Map([
  ["name", "Satyam"],
  ["role", "Developer"]
]);

for (const [key, value] of myMap) {
  console.log(key, ":", value);
}

const name = "Satyam";

//String
for (const ch of name) {
  console.log(ch);
}


//object
const obj = { a: 1, b: 2 };
for (const key of Object.keys(obj)) {
  console.log(key, obj[key]);
}

//For in mainly used for object even it work for string array but not preferred and in case of maps we don't use for in
//obj
for (const key in obj) {
    console.log(obj[key])
    
}
//arr
const arr1 = [10, 20, 30];

for (const index in arr1) {
  console.log(index, arr1[index]);
}
//Maps is not iteratable


// for each loop
const array = [3,5,67,7]
// array.forEach((element) => {
//     console.log(element);
    
// });

// array.forEach(printMe);
// function printMe(item){
//     console.log(item);
    
// }
// array.forEach(function (val) {
//     console.log(val);
    
// });

array.forEach((item,index,arr) => {
    console.log(item,index,arr);
    
});

arr3= [{1:"name"},{2:"lang"}]

arr3.forEach(element => {
    console.log(element);
    
});