"use strict";


function countInstances(str,letter){
    if(str===""){
    return 0;
}
else {
    if(letter==str[0]){
        return 0;
    } else {
        return 1+countInstances(str.substr(1),letter);
    }
        else {
            return countInstances(str.substr(1),letter);
        }
    }
}

