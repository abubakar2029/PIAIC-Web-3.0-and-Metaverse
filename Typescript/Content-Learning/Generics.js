"use strict";
function swap(params) {
    return [params[1], params[0]];
}
// const numers: number[] = [10, 20]
const abc = ["a", "b"];
console.log(swap(abc));
// type will be determined when function will execute
function swap1(params) {
    return [params[1], params[0]];
}
const numers1 = [10, 20];
const abc1 = ["a", "b"];
console.log(swap1(numers1));
