/* Assignment for the week:


 */
/* Q No.1
- Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
*/
console.log("============Question 1");
var firstNEven = 12;
var evenNumbers = [];
for (var i_1 = 0;; i_1++) {
    if (i_1 % 2 == 0) {
        evenNumbers.push(i_1);
        if (evenNumbers.length == firstNEven) {
            break;
        }
    }
}
console.log("First N even numbers = ", evenNumbers);
/* Q No.2
- Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
*/
console.log("============Question 2");
var randomNumbers1 = [23, 45, 18, 72, 56, 37, 91, 64, 29, 12, 53, 87, 39, 68, 31, 5, 20, 74, 11, 88, 60, 2, 95, 77, 42, 6, 50, 16, 83, 7, 35, 69, 27, 63, 8, 59, 13, 70, 25, 90, 48, 3, 22, 76, 55, 19, 84, 4, 58, 34, 80, 15, 71, 26, 94, 51, 10];
var evenArr = [];
for (var i_2 = 0; i_2 < randomNumbers1.length; i_2++) {
    if (randomNumbers1[i_2] % 2 == 0) {
        evenArr.push(randomNumbers1[i_2]);
    }
}
console.log("Even numbers from array = ", evenArr);
/* Q No.3
- Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
*/
console.log("============Question 3");
var randomNumbers2 = [23, 45, 18, 72, 56, 37, 91, 64, 29, 12, 53, 87, 39, 68, 31, 5, 20, 74, 11, 88, 60, 2, 95, 77, 42, 6, 50, 63, 8, 59, 13, 70, 25, 90, 48, 3, 22, 76, 55, 19, 84, 4, 58, 34, 80, 15, 71, 26, 94, 51, 10];
var i = 0;
while (i <= randomNumbers2.length) {
    if (randomNumbers2[i] % 2 == 0) {
        randomNumbers2.splice(i, 1);
    }
    i++;
}
console.log("Array with odd Numbers = ", randomNumbers2);
/* Q No.4
- Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
*/
console.log("============Question 4");
// let radius: number = prompt("Enter radius of circle");
function calculateArea(radius) {
    return (Math.PI * Math.pow(radius, 2));
}
// let area = calculateArea(radius);
/* Q No.5
 - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
*/
console.log("============Question 5");
var grades = [
    { subject: "Math", marks: 75 },
    { subject: "English", marks: 88 },
    { subject: "Science", marks: 92 },
    { subject: "History", marks: 39 },
    { subject: "Computer Science", marks: 49 },
    { subject: "Physics", marks: 87 },
    { subject: "Chemistry", marks: 20 }
];
function checkGrades(grades) {
    for (var i_3 = 0; i_3 < grades.length; i_3++) {
        if (grades[i_3].marks < 50) {
            console.log(grades[i_3], ": Failed");
            grades.splice(i_3, 1);
        }
    }
    console.log("Passed Subjects = ", grades);
}
checkGrades(grades);
/* Q No.6
 - Write a program that uses a function to find the largest element in an array of numbers.
*/
console.log("============Question 6");
var randomNumbers3 = [23, 45, 18, 72, 56, 37, 91, 64, 29, 12, 53, 87, 39, 68, 31, 5, 20, 74, 11, 88, 60, 2, 95, 77, 42, 6, 50, 63, 8, 59, 13, 70, 25, 90, 48, 3, 22, 76, 55, 19, 84, 4, 58, 34, 80, 15, 71, 26, 94, 51, 10];
function findLargeNumber(randomNumbers) {
    var largeNumber = randomNumbers[0];
    for (var _i = 0, randomNumbers_1 = randomNumbers; _i < randomNumbers_1.length; _i++) {
        var number = randomNumbers_1[_i];
        if (number > largeNumber) {
            largeNumber = number;
        }
    }
    return largeNumber;
}
console.log("Largest Element is = ", findLargeNumber(randomNumbers3));
