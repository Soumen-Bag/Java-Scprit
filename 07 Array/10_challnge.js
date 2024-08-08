//1: Add Dec at the end of an array?
//2: what is the return value of splice method?
//3: update march to March ?
//4: Delete June from an array?

const months=['Jan','march','April','June','July'];

//sol: 1
const newMonths=months.splice(months.length,0,"Dec");
console.log(months);//[ 'Jan', 'march', 'April', 'June', 'July', 'Dec' ]
 
//sol: 2
console.log(newMonths);// []
// its print empty array because splice method weare use for delete.We are not delete 
// any elements.

//sol: 3
//const months=['Jan','march','April','June','July'];
//const updateMonths=months.splice(1,1,'March');//[ 'Jan', 'March', 'April', 'June', 'July', 'Dec' ]
//console.log(months);
const indexofMonth=months.indexOf('march');
if(indexofMonth!=-1)
{
    const updateMonths=months.splice(indexofMonth,1,'March');
    console.log(months);
}
else{
    console.log("No such data found");
}

//sol: 4
const indexofmonth=months.indexOf('June');
updatemonths=months.splice(indexofmonth,1);
console.log(months);//[ 'Jan', 'March', 'April', 'July', 'Dec' ]
console.log(updatemonths); //[ 'June' ]