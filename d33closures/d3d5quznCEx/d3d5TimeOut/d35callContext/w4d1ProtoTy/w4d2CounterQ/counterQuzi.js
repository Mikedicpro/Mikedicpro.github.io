"use strict";

function makeCounter(){
    let count=0;
    return function(increment){
    if(increment===undefined){
    count=count+1;
    } else{
    count+=increment;
    }
    if(increment > 3)
    return "Warning increment was by value greater than 3";
    }
    else{
    return count;
    }
    }
    }
    const counter=makeCounter();
    console.log(counter());
    console.log(counter(2));
    console.log(counter(10));