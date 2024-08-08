// 1: let a=[25,36,9,49,64]
//     find the square root of each element in an array?
// 2: let arr=[2,3,4,6,8]
//     Multiply each element by 2 and return only those
//     elements which are greater than 10?

//sol:1
let a=[25,36,9,49,64];
const findSqroot=a.map((element)=>{
    return Math.sqrt(element);
});
console.log(findSqroot);

// Sol: 2
let arr=[2,3,4,6,8];
const findGreater=arr.map((element)=>{
    return element*2;
}).filter((element)=>{
    return element > 10;
})
console.log(findGreater);