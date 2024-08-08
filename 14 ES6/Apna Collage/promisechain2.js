function getData(dataId ){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataId);
            resolve("success");
        },2000);
    })
}

//promise chain
getData(1).then((res)=>{
    console.log(res);
    return getData(2);
})
.then((res)=>{
    console.log(res);
    return getData(3);
})
.then((res)=>{
    console.log(res);
});