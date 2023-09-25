// interface is purely for objects can't be use for scalar types    
// type Person2 = {
//     name: string
//     age: number
// }
// // Creating a type
// type Geeks ={
//     name: string;
//     age: number
// }

// type Geeks ={
//     email: string;
// }

// // Using the merged type
// const gfg: Geeks = {
//     name: " kgowda",
//     age: 20,
//     email: " kgowda@gmail.com"
// };

// console.log(gfg); //"Duplicate identifier 'Geeks'" error.
/* ----------------------- */
// Creating a interface
interface Person1 {
    name: string
    age: number
}
interface Geeks {
    name: string;
    age: number
}

interface Geeks {
    email: string;
}

// Using the merged interface
const gfg: Geeks = {
    name: " kgowda",
    age: 20,
    email: " kgowda@gmail.com"
};

console.log(gfg);//No error

/* https://www.geeksforgeeks.org/what-is-the-difference-between-interface-and-type-in-typescript/ */