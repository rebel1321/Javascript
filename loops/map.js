const myNums= [2,5,67,8,8,3,5,2]

// const newNums = myNums.map((num)=> num+10)

const newNums = myNums
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=> num>=40)
console.log(newNums);
