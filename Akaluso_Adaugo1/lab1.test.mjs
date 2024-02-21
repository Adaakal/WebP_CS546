import * as lab1 from './lab1.mjs';

//TODO: Write and call each function in lab1.js 5 times each, passing in different input

// Question One
console.log("Question One");
console.log(lab1.questionOne(7));
console.log(lab1.questionOne(1));
console.log(lab1.questionOne(12));
console.log(lab1.questionOne(4));
console.log(lab1.questionOne(0));

// Question Two
console.log("Question Two");
console.log(lab1.questionTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(lab1.questionTwo([1, 2, 13, 24, 19]));
console.log(lab1.questionTwo([51, 6, 17, 8, 9, 101]));
console.log(lab1.questionTwo([]));
console.log(lab1.questionTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Question Three
console.log("Question Three");
console.log(lab1.questionThree("I'm from outer-space!"));
console.log(lab1.questionThree("The Invisible Life of Addie LaRue..."));
console.log(lab1.questionThree("I'm from outer-space!"));
console.log(lab1.questionThree(" "));
console.log(lab1.questionThree("Special Characters example: #  $  % & ^ etc.."));

// Question Four 
console.log("Question Four");
console.log(lab1.questionFour([1, 3, 3, 5, 2, 7, 78, 0, 0, 1, 5, 6 ]));
console.log(lab1.questionFour([11, 13, 13, 15, 2, 7, 78, 0, 0, 1, 15, 6 ]));
console.log(lab1.questionFour([0, 3, 3, 4, 2, 78, 78, 0]));
console.log(lab1.questionFour([3, 309, 5, 12, 7, 78, 10, 0, 12, 5, 6 ]));
console.log(lab1.questionFour([8, 0, 0, 1, 5, 6, 1, 6, 8]));