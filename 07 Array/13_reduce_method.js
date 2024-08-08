// flatten an array means to convert the 3rd or 2d array into a
// single dimention array

// The reduce() method executes a reducer function(that you provide) 
// on each element of the array, resulting in single output value 

// The reducer funtion takes four arguments:

// Accumulator
// Current value
// Current index 
// Source Array
let arr=[5,2,6];
let sum=arr.reduce((accumulator,currentValue)=>{
    return accumulator=accumulator+currentValue
});
console.log(sum);

let arr1=[2,3,4,6,8];
const findGreater=arr1.map((element)=> element*2 ).filter((element)=>
    element > 10 ).reduce((accumulator,element)=>{ 
        return accumulator=accumulator+element;})
console.log(findGreater);