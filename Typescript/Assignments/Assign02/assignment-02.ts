/* 


Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.


Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.


Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.


Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
*/
/* Write a program that uses filter to remove all negative numbers from an array of numbers */

let numbersArray: number[] = [-3, 17, 9, -12, 14, -5, 10, -1, 8, 6, -4, 11, -7, 5, 2, -13, 16, -9, 18, 3]

function removeNegative(arr: number[]) {
    let temp: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr.splice(i, 1);
            i--;
        }
    }
    return temp;
}
removeNegative(numbersArray)
console.log("Array without negative numbers : ", numbersArray);

/* Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2. */

let givenArray: number[] = [1, 2, 3, 4, 5];

let newArray: number[] = givenArray.map((element) => {
    return element * 2;
})
console.log("Array multiplied by 2 : ", newArray);

/* Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
 */

let fruits: string[] = ["apple", "banana", "cherry", "date", "grape"];

function removeFruits(arr: string[]) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) arr.slice(i, 1);
    }
    return arr;//at first there was an error bcz function was not returning anything and on line 52 it was saying void can't be stored in string[]
}
let newArray1: string[] = removeFruits(fruits);