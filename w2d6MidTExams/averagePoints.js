"use strict";
/**
 * Write a function ,averagPoints, to get an array containing the average 
 * points across for each player.Try with regualer for...of loop and then
 * using map.
 */
// const player1={name:"Bob",points :[24,5,1]};
// const player2={name:"Andre",points :[2,2,11]};
// const player3={name:"Max",points :[3,1,8]};
// const players=[player1,player2,player3];

// function averagPoints(playerArr){
//     const playerAverages=[];
//     for(const player of playerArr){

//           playerAverages.push(calcAverages(player.points));

//     }
//     return playerAverages;
// }
// function averagPoints1(playerArr){
//     return playerArr.map(player=>calcAverages(player.points));
// }

// function calcAverages(arr){
//     let total=0;
//     for(const num of arr){
//         total+=num;
//     }

//     return total/arr.length;
// }
// console.log("Expect [1.33,1,1]  ",averagPoints(players));
// console.log("Expect [1.33,1,1] by map => ",averagPoints1(players));

const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];


// all above code can be just done by the following codes only
console.log("expect [1.33, 1, 1] by reduce:", averagePoints(players));

function averagePoints(playerArr){
    const averages = [];
    for (const player of playerArr){
        //const sum = player.points.reduce((tot, num) => tot + num, 0);
        const sum = player.points.reduce((total,number)=>total+number); 
        const playerAverage = sum/player.points.length;
        averages.push(playerAverage);
    }
    return averages;
}
