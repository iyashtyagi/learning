function firstElement<T>(arg:T[]):T{
    return arg[0];
}

const result = firstElement<string>(["yash","tyagi"]);
const resultNum = firstElement<number>([1,2]);

console.log(result.toUpperCase());