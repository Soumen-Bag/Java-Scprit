// js BOM
// popup boxes - alert, confirm, prompt

//alert("error is here");

//confirm box
//confirm("are you sure?");

// function deleteSomething(){
//     let value= confirm("Do you want to delete?");
//     if(value)
//     {
//         console.log("deleted");
//     }
//     else{
//         console.log("not deleted");
//     }
// }
// deleteSomething();

//uses of promt
function welcomeMessage()
{
    //create new h1
    var h1=document.createElement('h1');
    let text;
    var name=prompt("Enter you name: ");
    if(name==null|| name=="")
    {
        text='no name found';
    }
    else{
        text="Welcome "+name;
    }
    //for creating h1 tag
    var textNode=document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}
welcomeMessage();