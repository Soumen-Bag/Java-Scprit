// Array.phototype.filter()
// return new array containing all elements of the calling
// array for which the provided filtering funtion return true
const price=[200,300,350,400,450,500,600];

// price < 400
const newPrice = price.filter((element,index)=>{
    return element < 400;
});
console.log(newPrice);