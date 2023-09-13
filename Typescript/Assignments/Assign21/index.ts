/* 1.  They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
 */

class car {
    company: string;
    year: number;
    color: string;
    constructor(company: string, year: number, color: string) {
        this.company = company;
        this.year = year;
        this.color = color;
    }
    getAge(year: number) {
        const date = new Date();
        const currentYear = date.getFullYear();
        return currentYear - year;
    }
}

let myCar = new car("Honda", 14, "Blue")
console.log("-------------------------")
console.log("Car Age\t",myCar.getAge(2014));
/* \t creates an empty space tab */
