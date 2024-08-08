//let vs const vs var
 //var- funtion scope
 // lrt and const-block scope
//  function biodata()
//  {
//     var myFirstName="Soumen";
//     console.log(myFirstName);
//     if(true)
//     {
//         var myLastName="Bag";
//         console.log("inner" + myFirstName);
//         console.log("inner" + myLastName);
//     }
//     console.log("innerouter"+ myLastName);
//  }
// biodata();

// function biodata()
// {
//    let myFirstName="Soumen";
//    console.log(myFirstName);
//    if(true)
//    {
//        let myLastName="Bag";
//        console.log("inner" + myFirstName);
//        console.log("inner" + myLastName);
//    }
//    console.log("innerouter"+ myLastName); //this value not printing
// }
// biodata();

function biodata()
{
   const myFirstName="Soumen";
   console.log(myFirstName);
   if(true)
   {
       const myLastName="Bag";
       console.log("inner" + myFirstName);
       //console.log("inner" + myLastName);
       console.log(`inner${myLastName}`)
   }
   console.log("innerouter"+ myLastName);   //this value not printing
}
biodata();