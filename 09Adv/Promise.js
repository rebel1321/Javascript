const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asynchronous function");
        resolve()
    },1000)
    console.log("Satyam")
})

promiseOne.then(function(){
    console.log("Promise consumed" )
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asynchronous function 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Assync 2 resolved");
    
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
    
        resolve({username:"Chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user )
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Chai",email:"chai@example.com"})
        }else{
            reject("ERROR:Something went wrong")
        }
    },1000)
})
 promiseFour.then((user)=>{
    console.log(user.username )
    return user.email
}).then((email)=>{
    console.log(email);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("The promise is either resolver or rejected")
)


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JS",email:"js@example.com"})
        }else{
            reject("ERROR:Something went wrong")
        }
    },1000)
})

async function consFive() {

    try {
        const response = await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error);
        
    }
    
}
consFive()