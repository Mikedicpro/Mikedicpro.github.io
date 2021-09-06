  
"use strict";

// You need the module.exports when testing in node.  Comment it out when you send your file to the browser

//module.exports = {maxOfThree, sum, multiply }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
   let max_value=0;
    if(a>b){
        max_value=a;
    }else{
        max_value=b;
    }
    if (c>max_value){
       max_value=c;
    }
    return max_value;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
    
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot =1;
    for (const number of arr){
        tot*=number;
    }
    return tot;

}
/**
 * 
 * @param {arr} array of nummbers 
 * @returns reversed charactor.
 */
function reverseArrayInPlace(arr){
    let temp;
    let count = 0;
    for(let i=arr.length-1; i>=0; i--){
        temp = arr[i];
        arr[i] = arr[count];
        arr[count] = temp;
        if (count === i && arr.length%2 !== 0 || count + 1 === i && arr.length%2 === 0){
            break;
        }
        count++;
    }
    return arr;

console.log(reverseArrayInPlace([1,2,3,4,5]));
}
console.log(reverseArrayInPlace([1,2,3,4,5]));

/**
 * 
 * @param {arr } arrary of numbers 
 * @returns {max} maxword longest word
 */
function findLongestWord(arr) {
    let maxWord = 0;
    for (let word of arr) {
      if (word.length > maxWord) {
        maxWord = word.length;
      }
    }
    return maxWord;
  }
  console.log(findLongestWord(["chair", "car", "computer", "school"]));