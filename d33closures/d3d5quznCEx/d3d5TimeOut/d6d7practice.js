"use strict";

function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
 // console.log(user.name) ;// John
 // console.log(user.ref) ;// undefined
 // console.log(user.this) ;// undefined
 // console.log(ref.this) ;// can't read typeror undefined
//console.log(user.ref.name)Er:Can't read property 'name' of undefined
function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }
  
  let user1 = makeUser();
//   console.log(user1.ref().name); // John
////////////////////////////////////////////////////////////////////////
function f() {
  //  console.log( this ); // ? null
  }
  
  let user2 = {
    g: f.bind(null+"  what if a string then ?")
  };
  
  user2.g();
  ////////////////////////////////////////////
  function f() {
   // console.log(this.name);// undefined only when f()is commented
   // console.log(this.name12); 
  }
  
  //f = f.bind( {name: "John"} ).bind( {name12: "Ann" } );//?????Ann
  
 //f();// when uncommented op(output)....undefined and John 


 function f() {
 console.log(this.name);//undifined and John...
 }
 
 f = f.bind( {name: "John"} ).bind( {name: "Pete"} );
 
 f(); // 