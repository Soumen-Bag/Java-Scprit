// Map and Reduce mothod
// Array.phototype.map()
// let newArray=arr.map(callback(currentValue[,index[,array]])){
//     return element for newArray, after executing something
// }

// return a new array containing the results of calling a function
// on every element in this array
const array1=[1,4,9,16,25];
// let newArr=array1.map((currElem,index,arr)=>{
//     return currElem > 9;
// });
// console.log(array1); //[ 1, 4, 9, 16, 25 ]
// console.log(newArr); //[ false, false, false, true, true ]

let newArr=array1.map((currElem,index,arr)=>{
    return `Index no = ${index} and the value is ${currElem} belong to ${arr}`
});
console.log(newArr);


//it rerurn new array without mutating the original array

let newArr1=array1.forEach((currElem,index,arr)=>{
    return `Index no = ${index} and the value is ${currElem} belong to ${arr}`
});
console.log(newArr1);// it return undifined.
// this is the main different between map and forEach method