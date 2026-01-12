//Global scope 
// let a=10
// const b=90
// var c=30
let a=800
// {} - block scope 
// if(true){
//  let a=10
// const b=90
// // var c=30
// console.log(a);

// }

// console.log(a);
// console.log(b)
// console.log(c); work well as var is accessible out of scope too

//Nested scope

// function one(){
//     const user = "satyam"
//     function two(){
//         const website ="youtube";
//         console.log(user)
//     }
//     // console.log(website)
//     two()
// }

// one()

if(true){

    const user = "satyam"
    if(user==="satyam"){
        const web = "youtube"
        console.log(user+web);
        
    }
    // console.log(web);
    
}
// console.log(user);


//++++++++++++++++++++++++++++++++
addone(5) // this work but in case of expressuion it will not work
console.log(addone(5));
function addone(num){
    return num+1
}
addTwo(2) 
//expression
const addTwo = function(num){
    return num+2
}
addTwo(2)
 


