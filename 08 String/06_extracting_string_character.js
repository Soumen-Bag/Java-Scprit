//  There are 3 methods for extracting string character :
//  charAt()
//  charcodeAt()
//  property acces []

// charAt method
let str="Hello world";
console.log(str.charAt(0));//it prints H

// charcodeAt method
console.log(str.charCodeAt(0)); //it prints ASCI value of H 72

// property acces
// ECMAScprit 5 (2009) allows property acces [ ] on string
let str1="Hello world";
console.log(str1[0]); //it prints H