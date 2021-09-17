"use strict";

//factorial(0)=1;
//factorial(n)=n*factorial(n-1) (for 

function interativeFact(n){
    let total=0;
    for (let i=1;i<=n;i++){
        total=total*i
    }
    return total;
    
}
console.log("expect 24 ",interativeFact(4));
 console.log("expect 24 ",recuriveFact(4));

function recuriveFact(n){
    if(n==1){
        return i;
    }else{

        return n*recuriveFact(n-1);
    }

}

