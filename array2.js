const myHeros = ["a","b","c"]
const ourHeros = ["e","f","g"]
// myHeros.push(ourHeros)
// console.log(myHeros);
// console.log(myHeros[3][1]);

// let res=myHeros.concat(ourHeros)

// console.log(res);

const all =[...myHeros,...ourHeros]
// console.log(all);


const another = [1,3,4,65,[4,56,6],5,[6,[4,3]]]

const real = another.flat(Infinity)
console.log(real);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"})) //we need to specify from which i need to make array key or what

let score1 =100

let score2 =100

let score3 =100
console.log(Array.of(score1,score2,score3))