// array.phototype.unshift()
// The unshift() method adds one or more elements to the 
// begining of an array and returns the new lenghth of the array

const animal=['pigs','goat','sheep'];
const count=animal.unshift('cats');
console.log(animal);
console.log(count);

// 2nd method
const myNumbers=[1,2,3,5];
myNumbers.unshift(4,6);
console.log(myNumbers);