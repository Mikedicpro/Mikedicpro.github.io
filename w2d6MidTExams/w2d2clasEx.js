"use strict";
// const prompt=require("prompt-sync")();

// const Manager = {
//     name: "John",
//     age: 27,
//     job: "  Software Engineer"
//   };
//   const Intern= {
//     name: "Ben",
//     age: 21,
//     job: "  Software Engineer Intern  "
//   };
  
//   /**
//    * @returns {undefined} 
//    */
//   function sayHi() {
//      //IMPLEMENT THIS
//     let repaly="Hello, my name is "+this.name+"I am "+this.age  +this.job;
//     console.log(repaly);
//     return repaly;
//   }
  
//   // add sayHi function to both objects
//   Manager.sayHi = sayHi;
//   Intern.sayHi = sayHi;
  
//   Manager.sayHi();; // Hello, my name is John. I am 27.  My job is Software Engineer.'
//   Intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'
 
 
//   // /* eslint-disable */
  
//   // /**
//   //  * @returns {undefined}
//   //  */
//   // function setLatLong() {
//   //     this.lat = 41.00;
//   //     this.long = -92.96;
//   //     console.log(this);
//   //   }
  
//   //   const setLL = setLatLong(); // undefined
//   //   console.log("lat : ", lat);
//   //   console.log("setLL : ", setLL);
//      /**
//  * @param {Array} testArray test array 
//  * @param {function} testFunction helper function name
//  * @returns {Array} creates a new array with function mapped to each element
//  */
//  function myMap(testArray, testFunction) {

//   let newArray = [];
//   for (const element of testArray){
//       newArray.push(testFunction(element));
//   }
//   return newArray;
// }

// console.log(myMap([1,2,3,4], element => 500 * element + 77));


//  let isEven = abc =>  abc%2===0;

// const isEven2 = function(abc){
//     if ((abc)%2===0)
//   return true;
//     else
//     return false
// };

// console.log("expect true: ", isEven(120));

let salaries={
  John:100,
  ann:160,
  pete:130,
};
  let sum=0;
for (let key in salaries){
    sum+=salaries[key];
}
console.log("sum value of salaries in array object",sum);
////////////////////////////////////
// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());