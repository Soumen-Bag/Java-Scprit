// how to create a promise - pending,resolve,reject
// const promise1=new Promise((resolve,reject)=>{
//     let completedPromise=true;
//     if(completedPromise){
//         resolve("complete promise 1");
//     }
//     else{
//         reject(new Error("not complete promise"))
//     }
// });

// //console.log(promise1)

// const promise2=new Promise((resolve,reject)=>{
//     resolve("completed promise 2")
// })

// promise1
//     .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// promise2.then((res)=>{
//     console.log(res);
// })

//we can run all promise this below method
// Promise.all([promise1,promise2])
//     .then((res)=>console.log(res));

// Promise.all([promise1,promise2])
//     .then(([res1,res2])=>console.log(res1));


//Promise racee
const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("completed promise1");
    },2000)
});

const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("completed promise2");
    },1000)
});

Promise.race([promise1,promise2])
     .then((res)=>console.log(res));

//race function work on which function taking race time less. that function will be exicuted