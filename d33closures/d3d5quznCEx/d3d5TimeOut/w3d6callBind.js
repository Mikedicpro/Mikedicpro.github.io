"use strict";

let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let sam = { name: "Sami", surname: "boy", age: 28 };
let people = [ john, pete,sam];

// Use the map function to map the people array to the following:

// [{ fullName: "John Smith", id: 1 },
// { fullName: "Pete Hunt", id: 2 },]

// for (let i=0;i<people.length;i++){
//     let fullName=people[i].name+ people.surname
// }
//function printNames(){
   let Obj={};
   let count =0
   //let names=[];
   // return people.map(item => { Obj = {}; Obj.name = item.name +" "+ item.surname;Obj.age=item.age;
   //      count++; Obj.id = count;
   //       return Obj; });
   // let obj = {};
   // let mapped = people.map((user,index)=> obj = {fullName:user.name+"  "+user.surname, id: index, age:user.age});
   let ob = {};
   let mapped = people.map((user,index)=>ob={fullName:user.name+"  "+user.surname,
                                           id:index, age:user.age});
//}
// function myMap(arr){
// return arr.filter(item => item === john);
// }
// console.log(myMap(people));

console.log(mapped);

















// function printNames() {
//    let names = [];

//    let count = 0;
//    for (let item of people) {
//       let obj = {};
//       obj.fullName = item.name + "  " + item.surname 
//       obj.age=item.age;
//       count++;
//       obj.id = count;
//        names.push(obj);
//    }  
//    return names;
// }
// console.log(printNames());



// let group = {
// title: "Our Group",
// students: ["John", "Pete", "Alice"],
// showList() {
// this.students.forEach(function(student) {
// console.log(this.title + ': ' + student)
// });
// }
// };
// group.showList()