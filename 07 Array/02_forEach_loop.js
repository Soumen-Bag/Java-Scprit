var myFriend=['Soumen','Bijoy','Sourav','Kunal'];
myFriend.forEach (function(element,index,array)
{
    console.log(`elements: ${element},index: ${index}, array: ${array}`);
});

//using fat arrow funtion
var myFriend=['Soumen','Bijoy','Sourav','Kunal'];
myFriend.forEach((element,index,array)=>
{
    console.log(`elements: ${element},index: ${index}, array: ${array}`);
});