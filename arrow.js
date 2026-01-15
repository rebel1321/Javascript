
const user = {
    username:"hitesh",
    price:999,
    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMsg()
// user.username="satyam"
// user.welcomeMsg()

// console.log(this);


function chai (){
    let username = "hitesh"
    console.log(this.username); //undefined as this only work with object
    console.log(this);
    
}
chai()

// const chai = function(){
//      let username = "hitesh"
//     console.log(this.username);// same output as before
// }

const chai2 = ()=>{ // arrow function
     let username = "hitesh"
    console.log(this.username);// same output as before
    console.log(this);
    
}
chai2()

// const add = (num1,num2)=>{return num1+num2}
// const add = (num1,num2)=> num1+num2
// const add = (num1,num2)=>( num1+num2)
const add = (num1,num2)=> ({user:"hitesh"})

// console.log(add(4,8));

const myArr = [6,9,9,54]

// myArr.forEach(()=>{})
