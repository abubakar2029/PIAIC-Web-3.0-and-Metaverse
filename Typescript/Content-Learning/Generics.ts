
function swap(params: (number | string)[]): (number | string)[] {
    return [params[1], params[0]]
}
// const numers: number[] = [10, 20]
const abc: string[] = ["a", "b"]
console.log(swap(abc));

// type will be determined when function will call
function swap1<T>(params: T[]): T[] {
    return [params[1], params[0]]
}
const numers1: number[] = [10, 20]
const abc1: string[] = ["a", "b"]
console.log(swap1<number>(numers1));

