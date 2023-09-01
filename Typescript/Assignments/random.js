function myIntro(pt) {
    return { name1: pt.name1, age: pt.age1 };
}
var intro = myIntro({ name1: "Abu Bakar", age: 20 });
console.log(intro);
