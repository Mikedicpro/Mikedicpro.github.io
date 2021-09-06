// "use stric";
// let isEven=(abc)=>{return abc%2===0;};
// const isEven2=function(abc){
// return abc%2===0;
// }



// console.log("expect true  ",isEven(4));

// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0)
//       continue;
//     console.log(i);
//   }
  
  // continue inside a while loop
//   let j = 0;
//   while (j++ <= 20) {
//     if (j % 2 !== 0)
//       continue;
//     console.log(j);
//   }
function a(){ 
    console.log(x); // consult Global for x and print 20 from Global
        console.log("fun A output console last one");
    }
    function b(){ 
    let x = 10; 
    a(); // consult Global for a
    console.log(x); 
        console.log("fun b output console after fun A is called ");
    }
    // } 
    let x = 20; 
    b();
// function b(){ 
//     function a(){ 
//     console.log(x); 
//     console.log("fun b output console before this A is called ");
//     }
//     let x = 10; 
//     a(); 
//     console.log(x); 
//     console.log("fun A output console last one");
//     } 
//     let x = 20; 
//    b(); // 10