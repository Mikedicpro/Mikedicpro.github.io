"use strict";
// // write a funtion to Find the average  ?? 
// scores=[{ 101:1,
//           102:15,
//            103:5,
//         104:10}]

// function findAverage(scores){
//     let total=0;
//     let count=0;

    
//     for(let key in scores)
//     let ave=scores
// }
// printing out or logging out even no to the console....
/**
 * slide 25
 * use forEach to log all the even elements of an array to the 
console 
[1,5,16,3, 108]

 */   
//1
// const arr=[1,2,3,4,8,60,61,];

// arr.forEach(function(item){
//     if(item%2===0){
//     console.log("the even no  : "+item);
//     }
// })

/*


his demo on GitHub...



let arr = [1, 2, 3, 4, 5];
//let result = arr.reduce(function (sum, current) { 
 //// return sum + current; 
//}, 0);
let result2 = arr.reduce((sum, current) => sum + current, 0);
//console.log("Expected rslt 15: ",result); // 15
console.log("Same result wz anynomus fun? ", result2); // 15
 

*/

//2 write a function to find the the average score 

// scores=[{id101:10,
//         id102:15,
//         id103:5,
//         id104:10}];

//         let total=0;
// function findAverage(scores){


//     for (const stu of scores){
//     tot+=stu.scrores;
//     }
//       total= tot/scores.length;
//     return total;
//     //console.log("Result111 " +total);
// }
// console.log("Result " +total);


/* Write a function to find average points across all students*/

//  const pointsArray=[{id:1,points:[10,8,6,2,2]},
//               { id:2 ,points:[0,4,2,0,0]}];

//           };
//            console.log("another op OUT PUT");

//   function findAverage(stu.points){
// //   let max=0;
//   //let maxstu=null;
//   for (const stud of pointsArray)
//     tot+=getpoints(stu.points);
//     return tot;
// }

let color="red";
let myObject={  color : "blue",

printColor:function(){
console.log("op isnt blue but RED  :",color);
      }
}
//let res=myObject.printColor(color); undefined wz or wz out color
//console.log("Whole value :  ",res);

/*function checkAge(age) {
  if (age > 18) {
  return true;
  } else {
  console.log("Age is less than 18");
  }
  return age;
 }
 const z = checkAge(19);
 const w = checkAge(15);

 console.log(" what is the value of z ? " ,z);
 console.log(" what is the value of w ? " ,w);
 console.log("newwwwwwwwwwwwwwwwwww");
 function getQuote() {
  return 
  "this is a really long quote and therefore I want it to be on it’s own line."
  }
  const m = getQuote();
  //What is the value of m? ________undefined____________
  console.log("Value of m ? ",m);
  function getSix() { return 6;}
  const f1 = getSix(); // const or let f1=getSix(); same result
  const f2 = getSix;
  const f3 = f1;
  const f4 = f2();
  const f5=f1;
 // const f5 = f1(); // makes it error f1 is not function but ok if f5=f1
  // it will be ok if it was like const f5=f1; not f5=f1()
  //What is the value of f1? ____6__________
  console.log("value of f1 ? ",f1);
  //What is the value of f2? _______fn itself_______
  console.log("value of f2  ? ",f2);
  //What is the value of f3? _____6_________
  console.log("f3 ? " ,f3);
 // What is the value of f4? _____6_________
 console.log("f4  ?",f4);
 //What is the value of f5? _____error_________
 console.log(" f5 ?  " ,f5); // it was erro again b/c f1 is not defined f5=f1(); 
  // now f5 is 6 since line 124 assing it
  */


  const arr = ["b","a", "C"];

  arr.sort();
  
  console.log(arr);

  let myInt = 555;
myInt = false;

let hike = "1043huthuthut";
let what = parseInt(hike, 10);
console.log(hike);
console.log(what);
+"5678" === Number("5678")

const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];

 function sumPoints(players)
   
     let sum=0;
     
     players.forEach(players)
          sum+=players;
     
      return sum,
      
 

console.log("expect 10: ", sumPoints(players));