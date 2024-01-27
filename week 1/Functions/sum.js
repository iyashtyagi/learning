// to find sum of 2 numbers

function sum(num1, num2, display){
    let sum1 =  num1 + num2;
    display(sum1);
    console.log("hey")
}

function display(data){
    console.log(`The result is ${data}`)
}
sum(1,3,display)
