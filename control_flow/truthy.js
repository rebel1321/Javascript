const userEmail = "hagwg@email.com"

if(userEmail){
    console.log("true");
    
}else{
    console.log("false");
    
}

//falsy value
// false,0,-0,BigInt 0n,"", null,undefined,NaN

// truthy val 

//"0",'false'," ",[],{}, function(){}

// in case of array 
// if (userEmail.length ===0) {
//     console.log("Array is empty");
    
// }

// {}
// if (Object.keys(emptyObj).length===0) {
    
// }

//Give true
// false== 0 
// false== ''
// 0==''

// Nullish Coalescing Operator (??) :null undefined
let val1;
val1 = 5 ?? 10 // in case of undefined or null val it take 10
val2 = undefined ?? 10
console.log(val1);
console.log(val2);
val3 = null?? 10?? 20 //10


// ternary operator
// condition ? true :false

const icePrice=79

icePrice>=70? console.log("greter "):console.log("less");
;

