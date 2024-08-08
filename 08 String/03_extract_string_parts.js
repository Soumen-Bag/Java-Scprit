//Extracting String Parts
// There are 3 methods for extracting a part of a String

// slice(start,end)
// substring(start,end)
// substr(start,length)

// The slice() method
// slice() extracts a part of string and returns the extracted part
// in a string.

// the method takes 2 parameters: the start position,
// and the end position (end not include)
var str= "Apple, Bananaa, Kiwi";
let result=str.slice(0,4);
console.log(result); //Appl
console.log(str.slice(7,-2));  //Bananaa, Ki

// substring method
// substring method  similar to slice method
// different is It does not accept the negative value
var str1= "Apple, Bananaa, Kiwi";
let res=str1.substring(0,4);
console.log(res); //Appl

// substr method
// substr() is similar to slice() method
// different is that the second parameter specifies the
// the length of extracted part.
var str2= "Apple, Bananaa, Kiwi";
let res1=str2.substr(0,4);
console.log(res1);