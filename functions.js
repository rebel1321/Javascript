function say(){
    console.log("h");
        console.log("h");
    console.log("h");
    console.log("h");

    
}

// say()

function add(num1, num2){
    console.log(num1+num2);
    return num1+num2
    
}
const res =add(8,9)
// console.log(res);

// add(6,"8")
// add(6,"a")
// add(6,null)

function loginUser(userName="sam"){
    if(!userName){
        console.log("Please enter a userName");
        return
        
    }
    return `${userName} just logged in`
}

// console.log(loginUser());

function calCart(val1, val2,...num1){
    return num1
}

console.log(calCart(200,40,87,98 ,400))

const user = {
    name:"gyguy",
    price:908
}

function handleObj(anyObj){
   console.log(`user is ${anyObj.name} and price is ${anyObj.price}`);
    
}

handleObj(user)
handleObj({
    name:"trd",
    price:899
})
const myarr = [ 332,332,44,22]
function returnSecVal(getArray){
    return getArray[1];
}
console.log(returnSecVal(myarr));
console.log(returnSecVal([3,4,5,6]));

