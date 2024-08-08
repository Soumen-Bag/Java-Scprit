// What is NaN?

// NaN is the property of the global Object.
// In other words, it is a variable of global scope.
// The initial value of NaN id Not-a-Number.

var myPhoneNum=7063537444;
var myName="Soumen Bag";

console.log(myPhoneNum);
console.log(myName);

//Using of NaN
console.log(isNaN(myPhoneNum));
console.log(isNaN(myName));

if(isNaN(myName))
{
    console.log("Please enter valid number")
}