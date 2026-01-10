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

console.log(loginUser());
