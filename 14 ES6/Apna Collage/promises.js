const getPromises = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am promises");
        resolve("success");
    });
}

let promise=getPromises();
promise.then((res)=>{
    console.log("promise fullfilled", res);
});

promise.catch((err)=>{
    console.log("rejected", err)
})
