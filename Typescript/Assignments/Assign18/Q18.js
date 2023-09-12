"use strict";
/*
18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
*/
let favouritePlaces = ["Shanghai", "Berlin", "Switzerland", "Arizona", "Beijing"];
// • Print your array in its original order.
console.log("Original Array", favouritePlaces);
console.log("-----------------------------");
// • Print your array in alphabetical order without modifying the actual list.
let alphabaticalOrder = favouritePlaces;
for (let i = 0; i < alphabaticalOrder.length; i++) {
    for (let j = i + 1; j < alphabaticalOrder.length; j++) {
        if (alphabaticalOrder[j] < alphabaticalOrder[i]) { /* A>B==true */
            // Swap the elements
            let temp = alphabaticalOrder[i];
            alphabaticalOrder[i] = alphabaticalOrder[j];
            alphabaticalOrder[j] = temp;
        }
    }
}
console.log("Alphabetical Order", alphabaticalOrder);
console.log("-----------------------------");
// • Show that your array is still in its original order by printing it.
console.log("Original Array", favouritePlaces);
console.log("-----------------------------");
