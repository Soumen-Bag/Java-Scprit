var num=5;
var newNum=num++;
console.log("After Post Increment");
console.log(num);//6
console.log(newNum);//5

//pre increment
var num=5;
var newNum=++num;
console.log("After pre increment");
console.log(num);
console.log(newNum);

//Decrement
//post decrement
var num=5;
var newNum=num--;
console.log("After post decrement");
console.log(num);
console.log(newNum);

//pre decrement
var num=5;
var newNum=--num;
console.log("After post decrement");
console.log(num);
console.log(newNum);

var num=5;
var newNum=++num + 5;
console.log("After post increment");
console.log(num);//6
console.log(newNum);//11

var num=5;
var newNum=++num + 5;
console.log("After pre increment");
console.log(num);//6
console.log(newNum);//11

var num=5;
var newNum=num-- + 5;
console.log("After post decrement");
console.log(num);// 4
console.log(newNum);// 10