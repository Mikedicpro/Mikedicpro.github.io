"use strict";

// function sayHi(){
//     console.log("Wow greeting with time interval  ");
// }

// console.log(" The wait starts ....");

// setTimeout(sayHi,3000);

//setInterval(() => {
    
//}, 1000);
// var interval;
// let counter =1;
// function sayHi(from,stop){
//     //console.log("Hello "); 
//     // if(counter>=val&& counter<=val2){
//     // console.log(counter)
//     // }
//     // if(counter===9){
//     //     clearInterval(interval)
//     // }
    
    
//     if(counter>=from && counter<=stop){
//         console.log(counter);
//     }
//     counter++;
//     interval = setInterval(sayHi,1000,5,10);
// if (counter>=10){
//     clearTimeout(interval);
// }

//    }
// setTimeout(sayHi,2000);
let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [ john, pete];

// Use the map function to map the people array to the following:
[{ fullName: "John Smith", id: 1 },
{ fullName: "Pete Hunt", id: 2 },]


const mapPeople = people.map(function (user) {
    const newObj = {
        fullname: user.name + "" + user.lastName,
        age: user.age
    };
    return newObj;
});
 console.log(user.Mapped);
console.log(mapPeople);
