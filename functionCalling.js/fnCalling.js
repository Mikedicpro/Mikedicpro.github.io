"use strict"
const prompt=require("prompt-sync")();
/*Write a function, myCallback( func, arg). myCallback will call func
with the given arg and then log the return value to the console.
➢Test myCallback by calling it with a function that takes a number and returns the cube of the
argument. First write it as a normal named function declaration, then as an anonymous
function expression.*/

/**
 * 
 * @param {func} func is any function? 
 * @param {*} arg is any value intered ;
 * @returns {*} no return , side effects of logging to console
 */
//    let x=0
// function myCallback(func,arr){
//      cosnt fucnReturnVal=func(arr);
//     console.log(fucnReturnVal);

// }

// /**
//  * 
//  * @param {*} x 
//  * @returns 
//  */
//  function cube(num){
       
//              //x=x*x*x;
//       return num*num*num;
//     return x;
//  }

 // console.log(cube (10,3));

   console.log("nnnnnnnnnnnnewwwwwwwwwwwww Llllllllllllll");
let x = 5;
//let y = "one";
 // let y="7";
 let y= "seven"
let test = true;

let result = x+y;
console.log(result);
console.log(typeof result);

result = x+test;
console.log(result)
console.log(typeof result);

result = test+y
console.log(result);
console.log(typeof result)

result = y/2;
console.log(result);
console.log(typeof result)
let score =99;
let grade;
if (score>=99){
    grade='A';
}
//console.log(grade);
if(score>=85){
    grade='B'
}
console.log(grade);
if (false) console.log(0) 
else 
console.log(1);

 let age = 10;

console.log(age);

function output() {

   let age = 20;

  console.log(age);

}

output();

console.log(age);
for(let i = 1; i<=10; i++){
    let row="";
    for(let j=1; j<=10; j++){
    row += i*j +"\t";
    }
    console.log(row);
    }
    