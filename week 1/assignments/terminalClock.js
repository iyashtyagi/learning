setInterval((a)=>{
    let currentTime = new Date();
    let seconds = currentTime.getSeconds();
    let minutes = currentTime.getMinutes();
    let hour = currentTime.getHours();
    console.log(`${hour}:${minutes}:${seconds}`);
},1000);