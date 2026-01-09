// const tinderUser=new Object()
const tinderUser ={}
tinderUser.id="343"
tinderUser.name="akkay"

// console.log(tinderUser);


const reg ={
    email:"ss@gmail.com",
    fullName:{
        firstName:"hitesh",
        lastName:"Chaudary"
    }
}
const obj1={1:"a"}
const obj2={2:"a"}

// const obj3 ={obj1,obj2}
// const obj3= Object.assign(obj1,obj2)
const onj3= Object.assign({} ,obj1,obj2)
const obj3 ={...obj1,...obj2}
console.log(obj3);
console.log(onj3)


const users = [
    {
        id:1,
        email:"vy@gmai.com"
    },

 {
        id:1,
        email:"vy@gmai.com"
    }
]
users[1].email
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    courseName:"js",
    price:999
}

const {courseName:cN}= course
// console.log(courseName);
console.log(cN);

// const navbar = ({company})=>{

    

// }

// navbar(company="hit")

// {
//     "courseName":"js",
//     "price":"free"
// } json

// [{},{},{}] list of obj





