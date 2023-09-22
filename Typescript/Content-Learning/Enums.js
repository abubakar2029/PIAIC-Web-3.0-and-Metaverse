"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
for (const key in Direction) {
    console.log(key, '=', Direction[key]);
}
/* enums without initializers either need to be first, or have to come after numeric enums initialized with numeric constants or other constant enum members */
// In other words, the following isn’t allowed:
// enum E {
//     A = getSomeValue(),
//     B,
// }
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
/*   It is a compile time error for constant enum expressions to be evaluated to NaN or Infinity. */
var ExampleEnum;
(function (ExampleEnum) {
    ExampleEnum[ExampleEnum["Value1"] = Infinity] = "Value1";
})(ExampleEnum || (ExampleEnum = {}));
var AnimalType;
(function (AnimalType) {
    AnimalType[AnimalType["Dog"] = 0] = "Dog";
    AnimalType[AnimalType["Cat"] = 1] = "Cat";
})(AnimalType || (AnimalType = {}));
let myPet;
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
console.log("Aho", myPet.type);
