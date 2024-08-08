//Searching and Filter in an array

// Array.phototype.indexOf()
// Returns the first index of an element within the array equal 
// to an element, or -1 if none is found. It search the element
// from the 0th index number
var myFriend=['Soumen','Bijoy','Sourav','Kunal'];
console.log(myFriend.indexOf('Bijoy'));

// Array.phototype.lastIndexOf()
// Returns the first(greatest) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element
// from last to first
var myFriend=['Soumen','Bijoy','Sourav','Kunal','Bijoy'];
console.log(myFriend.lastIndexOf('Bijoy'));

// Array.phototype.includes()
// Determines whether the array contains a value 
// returning true or false as appropriate
var myFriend=['Soumen','Bijoy','Sourav','Kunal','Bijoy'];
console.log(myFriend.includes('Soumen'));

// Find method
// Array.phototype.find()
// Array.find(callback(element[ ,index[ ,array]])[ ,thisArg])
// array satisfies the testing function, or undefined if not found
// only problem is that it return only one element
const price=[200,300,350,400,450,500,600];
// price < 400

const findElement=price.find((curVal)=>{
    return curVal < 400;  
});
console.log(findElement);

// Find index method
// return find the index in an array, if an array 
// satisfies the testing funtion, or -1 if not found
console.log(price.findIndex((curval)=> { 
    return curval< 400
}));