function asyncFun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success")
        },4000);
    });
}

function asyncFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success")
        },4000);
    });
}

console.log("fetching data 1....");
asyncFun1().then((res)=>{
    console.log(res);
    console.log("fetching data 2....");
    asyncFun2().then((res)=>{
        console.log(res);
    })
})