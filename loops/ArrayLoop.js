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

// const coding = ["g","j", "J"]

// const values = coding.forEach( (item)=> {
//   console.log(item);
//   return item; //undefined
// })

// console.log(values); //undefined


const myNums=[7,8,5,9,3,6]

// const newNums= myNums.filter( (num)=> num>5 )
// const newNums= myNums.filter( (num)=> {
//   return num>4
// } )

// const newNums = []
// myNums.forEach((num) => {
//   if(num>4){
//     newNums.push(num)
//   }
// });
// console.log(newNums);

const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: 1981,
    edition: 2004
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    publish: 1992,
    edition: 2008
  },
  {
    title: "Book Three",
    genre: "History",
    publish: 1999,
    edition: 2007
  },
  {
    title: "Book Four",
    genre: "Non-Fiction",
    publish: 1989,
    edition: 2010
  },
  {
    title: "Book Five",
    genre: "Science",
    publish: 2009,
    edition: 2014
  },
  {
    title: "Book Six",
    genre: "Fiction",
    publish: 1987,
    edition: 2010
  },
  {
    title: "Book Seven",
    genre: "History",
    publish: 1986,
    edition: 1996
  },
  {
    title: "Book Eight",
    genre: "Science",
    publish: 2011,
    edition: 2016
  }
];

let userBooks=books.filter((bk)=> bk.genre==="History")
userBooks = books.filter((bk)=>{ return bk.publish>=2000})
console.log(userBooks);

