//for loop 

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
    
}
// for (let index = 0; index < 10; index++) {
//     for (let j = 0; j < array.length; j++) {
//        // loop inside loop
//     }
    
// }

// break and continue

for (let i = 1; i <=20; i++) {
    if (i==5) {
        console.log("5 detected");
        break;
    }
    console.log(i);
        
}
for (let i = 1; i <=20; i++) {
    if (i==5) {
        console.log("5 detected");
        continue;
    }
    console.log(i);
        
}