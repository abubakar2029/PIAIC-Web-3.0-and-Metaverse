"use strict";
/* 1.  They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
 */
class car {
    constructor(company, year, color) {
        this.company = company;
        this.year = year;
        this.color = color;
    }
    getAge(year) {
        const date = new Date();
        const currentYear = date.getFullYear();
        return currentYear - year;
    }
}
let myCar = new car("Honda", 14, "Blue");
console.log(myCar.getAge(2014));
