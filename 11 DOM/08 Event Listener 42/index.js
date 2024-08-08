// document.querySelector("button").addEventListener("click",myFunction);

// function myFunction()
// {
//     alert("hello");
// }


document.querySelector("button").addEventListener("click",function()
{
    alert("hello");
});

var myh1=document.querySelector('h1');
myh1.addEventListener("mouseover",function()
{
    console.log("Mouseover event triggered");

    myh1.classList.add("my-style");
});

myh1.addEventListener("mouseout",function()
{
    myh1.classList.remove("my-style");
});
