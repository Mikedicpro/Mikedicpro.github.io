/*const numbers = {
one: 1,
two: 22,
three: 333,
four: 444
}
const properties = ["one", "two", "three", "four"];
//write a for loop to print out the values of the properties in numbers. You 
must use the properties array to access the values. You cannot directly
 write console.log(numbers.one)*/

 "use stric";

const prompt = require("prompt-sync")();
 const numbers ={
     one:1,
     two:22,
     three:333,
     four:444
    }; 
const properties = ["one","two","threee","four"];

console.log("The easy way: ", numbers.one);
console.log("The easy way: ", numbers.two);
//  for (let i=0;i<=properties.length;i++){
//      console.log(properties.one);
//  }
 console.log(" the tricky way braket notation is needed.........");

 for (const property of properties){

    console.log(numbers[property]);
 }
 
 /////////////////////////////////////////////////////////
 console.log("22222222222222222222222222222");
 /**
  * 
  */
 const student1={
     studentId:"s101",
     quizAnswers:[1,1,2,4]
 };
 const student2={
    studentId:"s102",
    quizAnswers:[1,1,2,4]
};
const student3={
    studentId:"s103",
    quizAnswers:[1,1,2,4]
};
const quiz=[student1,student2,student3];
 /**
  * 
  * @param {*Arry } quizArry has a student object
  * @param {*} answers has the correct answers
  * @return {} 
  */
 function gradeQuiz(quizArry,answers){
    const grades={}; // need the object to return
    // loop through the arry of student and grade their ansers 
    for (const student of quiz){
        const studentScore=scoreStudent(student,answers)
        grades[student.studentId]
    }

    function scoreStudent (student,answers){
        let score=0;
        for(let i=0;i<answers.length;i++){
            if(student.quizAnswers[i]===answers[i])
            score=score+1;

        }
    }

 }