// using Callback function

function customTimeOut(fn,dealy){
    setTimeout(fn,dealy);
}

customTimeOut(()=>{
    console.log("Hello");
},3000);

// using promises

function promisesTimeOut(duration){
    return new Promise((resolve,reject)=>{
        if (duration<69000) {
            setTimeout(resolve("Gud gud"),duration);
        } else {
            setTimeout(reject("duration is greater then 69 sec"),duration);
        }
    })
}

promisesTimeOut(1000).then(()=>{console.log("from .then()")}).catch((reason)=>{
    console.log(reason);
})

// another way of catching error

promisesTimeOut(69000).then((data)=>{
    if (data){
        console.log(data+" huh");
    }
    else{
        console.log("If you are seeing this, it means you are fucked up xD");
    }
},(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("If you are seeing this, it means you are fucked up xD");
    }
})

// using async await

async function asyncAwaitTimeout(){
    try{
        const data = await promisesTimeOut(1001);
        console.log(data,"async")
    }
    catch(reason){              //here reason can be named anything
        console.log(reason);
    }

}
 
asyncAwaitTimeout()