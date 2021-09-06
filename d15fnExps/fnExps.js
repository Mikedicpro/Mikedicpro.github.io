"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
 //module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 *@returns {number} double the input
 */
 function double(num){
    return num*2;
}


/**
 * @returns {number} 100 times the input
 */
 function times100(n){
    return n*100;
}
 


/**
 * @returns {Array} creates a new array with function mapped to each element
 */

 let arr=[2,3,4,5];

function myMap(arr,fun){
    let newArray=[];
    for (let i=0;i<arr.length;i++){
        newArray.push(fun([i]));
    }
    return newArray;
}




//  let arr=[2,3,4,5];

//  function doubleArr(arr){
//      for (let i =0;i<arr.length;i++){
//          arr[i]*=2;// arr[i]=arr[i]*2
//      }
//      return arr;
//    // console.log("Expected result ..2,3,4,5 : will be 4,6,8,10" +doubleArr(arr));
//  }
// console.log("Expected result ..2,3,4,5 : will be 4,6,8,10 = " + doubleArr(arr));

// function myMap(arr1,double,hunredTimes){
//     for(let i=0;i<arr.length;i++){
//         arr[i]*=100;
//     }
//     return arr1;

// }

// console.log("Expected result multiply by 2& then *100..400,600,800,1000 will be =   "+myMap(arr));

