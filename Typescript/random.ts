


function myIntro(pt): { name1: string; age: number } {
    return { name1: pt.name1, age: pt.age1 }
}

let intro = myIntro({ name1: "Abu Bakar", age: 20 });
console.log(intro);

