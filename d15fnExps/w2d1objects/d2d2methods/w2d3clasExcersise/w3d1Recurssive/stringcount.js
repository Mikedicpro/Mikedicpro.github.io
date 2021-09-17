
// please show me how to debug this code


function findLengthRecursive(s){

    if(s==="")
    return 0;
    else
    return 1+ findLengthRecursive(s.substr(1));
    }
    console.log(findLengthRecursive("Hello"));