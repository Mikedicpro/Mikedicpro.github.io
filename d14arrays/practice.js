 // "use strict";

///Use the Math.min function and spread operator to find the smallest number in this array, const
//  let numArray = [5, 44, 1, 33]
//     let y=[...numArray]
//  console.log("result  " ,Math.min(...y));

//  console.log("result  " ,y);

// "use strict";
// // #1
function printHello() {

    console.log(this);//_ with strict undfined wzout Global_________

    function innerHello() {

        console.log(this);//__with strict undfined wzout Global___________

    }
 //innerHello();
 }

 //printHello();

// // 1. What does the console show in strict mode 

// // 2. What does the console show in non-strict mode.

// // =================================
// //#2&3
 // "use strict"; //and without
// // console.log(this);// empty object 

// //#4
// // What will appear in the console when the following program runs?

function printMe()   { 

console.log(this);
//
 //console.log(this.setTimeout);

}
// // if use strict mode did apply console.log(this) only print ... empty object and this.setTimeout cause a problem
// // if use strict mode didn't apply, will get empty object and global object
//   printMe();
// // ======================================
// // #5
// // What will appear in the console when the program runs?
//  "use strict";

//
// //"this" inside inner() doesnt have anything to point so it will be undefined.
// returnObject().innerFn();
// ===========================================
// #6
// What will appear in the console when the program runs ?

 "use strict";

let myObject = {
    // a: 1, b: 2, print: () => {       rsul ==  {}  & I am arrow fn
        a: 1, b: 2, print: function()  {  // endale objects propertities

        console.log(this);

        

        return "I am an arrow function"

    }
 }
// // // just retrun "I am an arrow function ".... 'this' didnot indicate any thing , so it is empty object 
 //console.log("when called  ",myObject.print());

// // ==============================================================
// #7
// What will appear in the console when this program runs?

let gameOfChance = {
    dice: 2,
    spinningTops: false,

    playerOne: function () {

        let gameOfSkill = {

            playerTwo: function () {
               console.log(this);
               console.log(this.gameOfChance);// undefinded 
               console.log(this.gameOfSkill);// undefined
               console.log(this.playerTwo);// [fn:palyer two 
               console.log(gameOfSkill);//{payerTwo : [function: palyerTwo]}
            }
        }
        gameOfSkill.playerTwo();
    }
}
 //gameOfChance.playerOne();

// // =================================================================
// // #8
// // What will appear in the console when this program runs?

  "use strict"

function kathak() {

    let jaipur = {

        origin: true,

        expression: function () {

            console.log(this);

        }

    }

    let innerFn = jaipur.expression;

    innerFn();

}

 //    kathak();
// // ==============================================================
// // #9
// // What will appear in the console when the below program runs?

// function river() {

//     function ribbon() {

//         console.log(this);

//     }

//     return { ribbon: ribbon }

// }

// function flow() {

//     river().ribbon();

// }

// // flow();
// // ================================================
// //#10
// // What will appear in the console when this program runs?

// let sea = {

//     deposit: "sodium chloride",

//     tides: function () {

//         console.log(this.deposit);

//         let moonCycles = () => this.deposit = "magnesium";

//         moonCycles();

//         console.log(this.deposit);

//     }

// }

// // sea.tides();

let x={
 //  y : () => console.log(this)  // result    {}
   y : function(){console.log(this)}  // [function:y]
}
x.y()