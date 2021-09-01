//const PromptSync = require("prompt-sync");

const prompt = require("prompt-sync")();
//let sales=+prompt("Please enter sales ? ");
let n =5; 

for (let i = 1; i <= n; i++){ 

let row = ""; 

for(let j = 1;j <= n;j++){ 

row += j; 

} 

console.log(row); 

} 

//let n =5; 

for (let i = 1; i <= 5; i++){ 

let row = ""; 

for(let j = 1;j <= i;j++){ 

row += j; 

} 

console.log(row); 

} 


// for (let i = 5; i >= n; i--){ 

// let row = ""; 

// for(let j = 5;j >= i;j--){ 

// row += j; 

// } 

// console.log(row); 

// } 
function addtion(num){
    let sum=0;
    while(true){
        let x=num%10;
        sum+=x;
        num=Math.floor(num/10);
        if(num<10){
            break;
        }
    }
    sum=sum+num
    return sum;
}
let num=prompt("inser num")
console.log(addtion(num));

//Q.3333333333333333333333
 
 //function ageVerify(){
 


    while(true){
        let age=prompt("Please enter an age older than 18  ?");
        if (age>=18){
         break;
        }
     console.log("please enter again ?");
    }
   // return  age;
//}
//console.log(ageVerify());
console.log("Age accepted ");

