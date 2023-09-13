"use strict";
/* Assignment for the week:


 */
/*1
- Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
*/
console.log("============Question 1");
let firstNEven = 12;
let evenNumbers = [];
for (let i = 0;; i++) {
    if (i % 2 == 0) {
        evenNumbers.push(i);
        if (evenNumbers.length == firstNEven) {
            break;
        }
    }
}
console.log("First N even numbers = ", evenNumbers);
/*2
- Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
*/
console.log("============Question 2");
const randomNumbers1 = [23, 45, 18, 72, 56, 37, 91, 64, 29, 12, 53, 87, 39, 68, 31, 5, 20, 74, 11, 88, 60, 2, 95, 77, 42, 6, 50, 16, 83, 7, 35, 69, 27, 63, 8, 59, 13, 70, 25, 90, 48, 3, 22, 76, 55, 19, 84, 4, 58, 34, 80, 15, 71, 26, 94, 51, 10];
let evenArr = [];
for (let i = 0; i < randomNumbers1.length; i++) {
    if (randomNumbers1[i] % 2 == 0) {
        evenArr.push(randomNumbers1[i]);
    }
}
console.log("Even numbers from array = ", evenArr);
/*3
- Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
*/
console.log("============Question 3");
const randomNumbers2 = [23, 45, 18, 72, 56, 37, 91, 64, 29, 12, 53, 87, 39, 68, 31, 5, 20, 74, 11, 88, 60, 2, 95, 77, 42, 6, 50, 63, 8, 59, 13, 70, 25, 90, 48, 3, 22, 76, 55, 19, 84, 4, 58, 34, 80, 15, 71, 26, 94, 51, 10];
let i = 0;
while (i <= randomNumbers2.length) {
    if (randomNumbers2[i] % 2 == 0) {
        randomNumbers2.splice(i, 1);
    }
    i++;
}
console.log("Array with odd Numbers = ", randomNumbers2);
/*4
- Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
*/
console.log("============Question 4");
let radius = Number(prompt("Enter radius of circle"));
function calculateArea(radius) {
    return (Math.PI * Math.pow(radius, 2));
}
let area = calculateArea(radius);
console.log(area);
/*5
 - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
*/
console.log("============Question 5");
let grades = [
    { subject: "Math", marks: 75 },
    { subject: "English", marks: 88 },
    { subject: "Science", marks: 92 },
    { subject: "History", marks: 39 },
    { subject: "Computer Science", marks: 49 },
    { subject: "Physics", marks: 87 },
    { subject: "Chemistry", marks: 20 }
];
function checkGrades(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].marks < 50) {
            console.log(grades[i], ": Failed");
            grades.splice(i, 1);
        }
    }
    console.log("Passed Subjects = ", grades);
}
checkGrades(grades);
/*6
 - Write a program that uses a function to find the largest element in an array of numbers.
*/
console.log("============Question 6");
const randomNumbers3 = [23, 45, 18, 72, 56, 37, 91, 64, 29, 12, 53, 87, 39, 68, 31, 5, 20, 74, 11, 88, 60, 2, 95, 77, 42, 6, 50, 63, 8, 59, 13, 70, 25, 90, 48, 3, 22, 76, 55, 19, 84, 4, 58, 34, 80, 15, 71, 26, 94, 51, 10];
function findLargeNumber(randomNumbers) {
    let largeNumber = randomNumbers[0];
    for (const number of randomNumbers) {
        if (number > largeNumber) {
            largeNumber = number;
        }
    }
    return largeNumber;
}
console.log("Largest Element is = ", findLargeNumber(randomNumbers3));
