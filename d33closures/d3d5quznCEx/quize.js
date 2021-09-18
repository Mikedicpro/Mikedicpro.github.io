//"user strict";

const mapPeople=people.map(function(user){
    const newObj={
    fullName:user.name+""+user.surname,
    age:user.age
    };
    return newObj;
    });
    conslole.log(usersMapped);
    console.log(mapPeople);