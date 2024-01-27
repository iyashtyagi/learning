// Counter 30 to 0
function counter(setTimeoutStartTime,interval){
    let counterStartTime = new Date(); 
    let numArray = [];
    for(let i= 30; i>=0; i--){
        numArray.push(i);
    }

    let realTime = counterStartTime - setTimeoutStartTime;
    let delta = realTime-interval;
    console.log(`Expected time = ${interval}ms\nReal time = ${realTime}ms\nDelta = ${delta}ms`)
    return [{numArray :numArray},{counterStartTime: counterStartTime}];
}

// console.log(counter());
let interval = 1000;
// time dealy in setTimeout function
let setTimeoutStartTime = new Date();
setTimeout(()=>{
    counter(setTimeoutStartTime,interval);
},interval);
