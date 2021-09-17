"use strict";
/* write a funciton, sumPoints, to get the total points across all players */

const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];

let arrPlayers=[player1,player2,player3];

 function sumPoints(arrPlayers,points){

        const  arrsumRes =[];
        let tot=0;
        for (const player of arrPlayers){
            //sum+=arrPlayers;
            arrsumRes.push(sumTotal(player.points));
          //  tot=arrsumRes.push(sumTotal(player.points));
            
        }
       // console.log("tot 10 ",tot);
return arrsumRes;
    
    }

    function sumTotal(arr){
        let total=0;
        for (const num of arr){
            total+=num;
        }
        //console.log("total",total)
    return total;
    }

//console.log("expect 10: ",sumPoints(players));
    
   console.log("expect 10: ??????"+sumPoints(players));