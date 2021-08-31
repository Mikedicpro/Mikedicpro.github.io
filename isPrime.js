"use strict"

const prompt=require("prompt-sync")();
// const mike =prompt("enter your frst name");
// console.log(`hello${mike}`);
// if ("false") 
// console.log(0) 
// else 
// console.log(1);
// function myFun(){

//     console.log("Oh happy day!")
  
//   }
  
//   const returnVal = myFun();

// 122222222222222222222

//const anum=prompt("enter a num ?");
function testPrime(num){
    for (let i=2;i<num;i=i+1){
    if (num%i==0){
    
    return false;
    }
    }
return true;

}
console.log("expect true ," , testPrime(17));
console.log("expcect false: " , testPrime(51));

