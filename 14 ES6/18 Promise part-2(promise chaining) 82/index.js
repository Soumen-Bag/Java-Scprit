//promise chaining

console.log("Welcome");
const taskOne=()=>{
    return new Promise((resolve,reject)=>{
        //reject("task 1 is not completed");
        resolve("task 1 is completed");
    });
};

const taskTwo=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("task 2 is completed");
        },2000)
    });
};

const taskThree=()=>{
    return new Promise((resolve,reject)=>{
        //resolve("task 3 is completed");
        reject("task 3 is not completed");
    });
};

const taskFour=()=>{
    return new Promise((resolve,reject)=>{
        resolve("task 4 is completed");
    });
};

taskOne()
.then((res)=>console.log(res))
.then(taskTwo)
.then((res)=>console.log(res))
.then(taskThree)
.then((res)=>console.log(res))
.then(taskFour)
.then((res)=>console.log(res))
.catch((err)=> console.log(err));
// if one function is rejected . next funcion will not print. it reject.

console.log("end")