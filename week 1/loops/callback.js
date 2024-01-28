function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}

function sumOfPower(a, b, fn){
    let num1 = fn(a);
    let num2 = fn(b);
    return num1 + num2;
}

console.log(sumOfPower(10,34,cube)); 