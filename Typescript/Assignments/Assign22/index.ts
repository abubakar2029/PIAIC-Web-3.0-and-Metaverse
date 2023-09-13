/* 22.  Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program.
 */

let programmingLanguages = ["Java", "Javasscript", "C++", "C#", "Python", ".Net", "Solidity", "GoLang"];
// creating an Intentional Error
console.log(`Intentional error:\t${programmingLanguages[programmingLanguages.length]}`);
console.log("---------------------");

// correcting Error
console.log(`Correct:\t${programmingLanguages[programmingLanguages.length - 1]}`);

