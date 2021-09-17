"use strict";

//const numbers = [1,5,19,9,77,108,5,7,2];
// console.log("even numbers: ", numbers.filter(num => num % 2 === 0));

// console.log("first even number: ", numbers.find(num => num % 2 === 0));

// let evenNo=numbers.find(n=>n%2===0);

// console.log("index of first even number: ", numbers.indexOf(evenNo)); 
// const descending = [4,2,100,8,15,10,53,5,6,9,8,4,2,1,-8,105].sort(myComparator );
// //console.log("expect [15, 8, 4, 2]", descending);

// function myComparator(num1, num2){
//     return (num1 - num2);
// } 
    //sort is ascending order by default if
    // return positive when num1 > num2
//     const anyString = "This could be anything";
// const reordered = "be This could anything";

// const words = anyString.split(" ");
// const sortedWords = words.sort(wordComparator1);

// //console.log("expect", reordered, " :: ",  sortedWords.join(" "));

// function wordComparator1(word1, word2){
//     return word1.length - word2.length;
// }

const numbers = [[1, 5],[ 18, 2], [77, 108]];

//console.log(numbers.filter(item => item%2==0));
 console.log(numbers.find(item =>item.find( item%2===0)));