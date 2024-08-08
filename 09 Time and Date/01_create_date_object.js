let currDate = new Date;
console.log(currDate);
console.log(new Date().toString()); //Wed Feb 15 2023 18:20:43 GMT+0530 (India Standard Time)
console.log(new Date().toLocaleString()); //15/2/2023, 6:21:54 pm

//Date.now()
// Returns the numeric value corresponding to the current time the number
// of miliseconds elapsed since January 1, 1970 00:00:00  UTC
console.log(Date.now());

//In JavaScprit count months from 0 to 11
// January is 0 and December is 11
var d = new Date(2018, 11,24,10,33,30,0);
console.log(d.toLocaleString()); //24/12/2018, 10:33:30 am

//Date string 
var d= new Date("October 13, 2021 14:13:45");
console.log(d.toLocaleString()); //13/10/2021, 2:13:45 pm

//miliseconds
var t= new Date(1693549035627)
console.log(t.toLocaleString());