//"use strict";
//let side=1;
function area(){
    let side=1;
    console.log(this);
   return this.side*this.side;
}
//area();
const square1={side:5,area:area};
square1.area();
//console.log(this);


// let counter={
//     count:0,
//     increment(){
//         this.count++;
//     },
//     decrement(){
//         this.count--;
//     },
//     showCount:function(){
//         alert(this.count);
//     }

// };
// counter.increment().decrement().increment.showCount();

