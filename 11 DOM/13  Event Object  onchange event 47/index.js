// DOM Event
// 1. Event Object 
    /* Event Type: Change,Submit,load,unload,open,play,canplay,progress,ended,resize,scroll,toggle etc;
    properties: type,target,prevenDefault()
    */
// 2. MouseEvent Object
// 3. keybordEvent Object
// 4. FocuseEvent Object
// 5. ClipbordEvent Object
// 6. DragEvent Object

//1. Event Object 
// Event Type: Change
// <input/>- Text,number,password,email,color,raio,checkbox,search,time,date,datetime,week,month,url,tel,file,
//<select>
//<textarea>

//for Event Type : Change
// const myVar=document.querySelector("input");
// myVar.addEventListener('change',changeHandaler);

console.clear();

// function changeHandaler(e)//pass event (e)
// {
//     //console.log("change"); //change event
//     // console.log(e.type); //type of event
//     // console.log(e.target); // Find Targate element
//     // console.log(e.target.className); // find class;
//    // console.log(e.target.id); // find id
//     console.log(e.target.value); //find Value name
// }

//For Event Type: Checkbox

// const myVar=document.querySelectorAll('input[name=program]');
//console.log(myVar); // Give NodeList

/*
Array.from(myVar).map((myVar)=>//convert NodeList to Array
{
    myVar.addEventListener("change",progrmHandler)//add Listener
});

function progrmHandler(e)
{
    if(e.target.checked)
    {
        console.log(e.target.value); //find value
    }
}
*/

// For Event Type:<select>
const department=document.querySelector('#department')
//console.log(department);
department.addEventListener('change',handleDeperment)

function handleDeperment(e)
{
   // console.log("Slected");
    console.log(e.target.value);
}