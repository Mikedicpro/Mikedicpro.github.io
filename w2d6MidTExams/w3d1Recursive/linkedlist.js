"use strict"
/**
 * write a linked list with three nodes, A, B, C
➢ let a = {value: "A", next: b}; … 
➢ write expression(s) to remove B from the list
➢ write expression(s) to add B to the end of the list
➢ write expression(s) to insert Z between C and B
 */

let c={value:"C",next:null};
let b={value:"B",next:c};
let a={value:"A",next:b};


// write expression(s) remove from the list
a.next=b.next;
// write expression to add B to the end list
c.next=b;
b.next=null;
// write expressions to imsert z betwween c and B

