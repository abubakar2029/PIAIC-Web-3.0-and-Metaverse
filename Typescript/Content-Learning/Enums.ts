enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
for (const key in Direction) {
    console.log(key, '=', Direction[key]);
}
/* ------------------------------- */
/* enums without initializers either need to be first, or have to come after numeric enums initialized with numeric constants or other constant enum members */

// the following isn’t allowed:
// enum E {
//     A = getSomeValue(),
//     B,
// }
/* ------------------------------- */

enum FileAccess {
// constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length,
}
/* ------------------------------- */

/*   It is a compile time error for constant enum expressions to be evaluated to NaN or Infinity. */
enum ExampleEnum {
    Value1 = 1 / 0, // Division by zero results in Infinity
}
/* ------------------------------- */

/* ENUM MEMBER AS TYPES */
enum AnimalType {
    Dog,
    Cat,
}

interface Dog {
    type: AnimalType.Dog;
    name: string;
    breed: string;
}

interface Cat {
    type: AnimalType.Cat;
    name: string;
    color: string;
}

let myPet: Dog | Cat;

// Correct usage:
myPet = {
    type: AnimalType.Dog,
    name: "Buddy",
    breed: "Golden Retriever",
};

// Incorrect usage (will result in a type error):
myPet = {
    type: AnimalType.Cat,
    name: "Whiskers",
    color: "Tabby",
};
console.log("Enum_member_as_types", myPet.type);

