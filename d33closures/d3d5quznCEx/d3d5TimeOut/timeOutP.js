"use strict";

// function sayHi(){
//     console.log("Wow greeting with time interval  ");
// }

// console.log(" The wait starts ....");

// setTimeout(sayHi,3000);

//setInterval(() => {
    
//}, 1000);
var interval;
let counter =1;
function sayHi(from,stop){
    //console.log("Hello "); 
    // if(counter>=val&& counter<=val2){
    // console.log(counter)
    // }
    // if(counter===9){
    //     clearInterval(interval)
    // }
    
    
    if(counter>=from && counter<=stop){
        console.log(counter);
    }
    counter++;
    interval = setInterval(sayHi,1000,5,10);
if (counter>=10){
    clearTimeout(interval);
}

   }
setTimeout(sayHi,2000);
