// singleton 
// Object.create


//obj literal

const myS1=Symbol("key1")
const JsUser ={
    name:"Satyam",
    age:18,
    [myS1]:"mykey1",
    location:"Jaipur",
    "surname":"Tripathi",
    email:"jhit@gmail.com",
    isLoggedIn:false
}

console.log(JsUser.age);
console.log(JsUser["age"]);
console.log(JsUser.surname);
console.log(JsUser[myS1]);


JsUser.age = 22
// Object.freeze(JsUser)  //it restrict any update
JsUser.age=18
console.log(JsUser);

JsUser.greeting = function(){
    return "Hello UJser";
}
JsUser.greeting2 = function(){
    return `Hello UJser , ${this.name}`;
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

