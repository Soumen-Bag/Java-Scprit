//using of for in loop

var myFriend=['Soumen','Bijoy','Sourav','Kunal']
for(let elements in myFriend)
{
    console.log(elements);//0 1 2 3
}

//using of for of loop
var myFriend=['Soumen','Bijoy','Sourav','Kunal']
for(let elements of myFriend)
{
    console.log(elements); //Soumen Bijoy Sourav Kunal
}