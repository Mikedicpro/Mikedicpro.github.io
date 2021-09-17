"use strict";
//const prompt=require("prompt-sync")();

// let user = { name: "John", age: 30 };
// console.log( "age" in user ); // true, user.age exists
// console.log( "blabla" in user ); // false, user.blabla doesn't exis
// console.log("John" in user);// false
// console.log("name" in user);//true
// let salaries={joh:100,
//              ann:200,
//             pet:300,
//             mike:0,
//             alex:1
//     };


//   let sum=0;
// for(let keyews in salaries){
//     sum+=salaries[keyews];
//    // console.log(salaries);
// }
// console.log("sum is should be 600: ", sum)//; same
// console.log("nothing ",salaries)

// let anewUser = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//     };
//     for (let key in anewUser) {
//     // keys
//     console.log( key ); // name, age, isAdmin
//     // values for the keys
//    console.log( anewUser[key]);
//     }
// let three = 3;
// let four = 4;
// let [one, two] = [three, four];

// console.log(one);  
// console.log(two);  
// console.log(three); 
// console.log(four); 
/**
 * const guess = prompt("Enter either alpha or beta"); 
 * const abc = {alpha: 1, beta: 0}; 
 * //which of the following will output 1 or 0?
 */


//  const guess = prompt("Enter either alpha or beta");
//  const abc = {alpha: 1, beta: 0};

//  consloe.log(abc[1]);	
//  consloe.log(abc[0])	
//  cosnole.log(abc.guess[1])	
//  cosnole.log(abc[guess]	)  // right answer ??????
//  consle.log(abc.guess)	

 // const arr= [1, 2, 3,4];
// let result1=0;
// let result2=0;
// result1=arr.reduce((sum,current)=>sum+current);
// console.log("result2 should be : ",result1);

// result1=arr.reduce((acc, e) => acc * e);

// console.log("result should be 24 : ",result1);
/**
 * Use reduce to find the sum of an array.
   Use reduce to find the largest element of an array.
 */
/* write a function, maxPoints, to find and return the
 maximum points of any single player.  */

const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];

console.log("expect 4:",  maxPoints(players));
