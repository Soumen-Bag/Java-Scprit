function addStyle() {
   var myVar= document.querySelector("#paraId");
    // myVar.style.color="red";
    // myVar.style.fontSize="3rem";
    // myVar.style.fontWeight="bold";
    
    //to avoid again again write the we can use the class function. we create this function in css then we call it
    myVar.classList.add("para-style");
}

function removeStyle()
{
    var myVar= document.querySelector("#paraId");
    myVar.classList.remove("para-style");
}