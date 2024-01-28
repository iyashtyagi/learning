// console logger
function logger(data){
    console.log(data);
}


// Callback func
function yashCallback(fn){
    // your logic
    fn("Callback function");
}

yashCallback(logger);

// .then
function yashThen(){
    return new Promise((resolve,reject)=>{
        // logic here
        resolve(".then function");
    })
}

yashThen().then(logger);

// async await
function yashAsync(){
    return new Promise((resolve,reject)=>{
        // logic here
        resolve("async await function");
    })
}

async function loggerFunc(){
    let data = await yashAsync();
    logger(data);
}

loggerFunc();