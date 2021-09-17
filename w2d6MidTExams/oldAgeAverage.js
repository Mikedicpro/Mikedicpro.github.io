"use strict";

let array= [{name:"ram",age:29}, //sex:3 can't be a charactor must                                     
            {name:"syam",age:40},  //be an intiger??? why ? 
            {name:"ganga",age:49}];

            let sum = array.reduce((sum,n)=> sum+n.age,0);
            console.log("Average age is:  "+(sum/array.length).toFixed(2));


            // let max = array.reduce((max,current)=> {
            //     console.log(max);
            //     if(!max.age) return current;
            //     if(max.age>current.age)
            //         return max;
            //     return current;
            // },{});
            // console.log(max);
            
    function findOldestMan(array){
                let maxAge = -(2*53);
                let maxAgeName = "";// let obj = {}

                for (let i = 0; i < array.length; i++) {
                if(array[i].age>maxAge){
                maxAge = array[i].age;
                maxAgeName = array[i].name;  
                     }
                 }
         return {nameeeee:maxAgeName,age:maxAge};       
         }
    console.log("oldes man will be ",findOldestMan(array));
            
            
            //let max = arra




// function ageAverage(array){
//     const average=[];
//     for (const age of array){
//         const sum=age.reduce((tot,n)=>tot+n,0);
//         const ageAve=sum/age.length;
//         average.push(array);
//     }
//     return average
// }
//console.log("Result 75.33 ",ageAverage(array));