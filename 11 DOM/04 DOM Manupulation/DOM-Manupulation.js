// Visit Google
/*
var link=document.getElementsByTagName("a")[0];
undefined
link.innerHTML="Hello";
'Hello'
link.style.textDecoration="none";
'none'
link.style.color="green";
'green'
*/

/// Creating New Tag inner div; create h2 tag

var heading3=document.createElement("h2")//creat h3 tag
var text=document.createTextNode("Adding h3");//adding text in h3 tag;
heading3.appendChild(text);//heading3 + text;
var mydiv=document.getElementById("my-div")//jei diver songe add korbo seita khje berkorlam;
mydiv.appendChild(heading3);//add div+h3;

//Remove any tag 
/*
var heading2=document.getElementsByTagName("h2")[1];//find tag
mydiv.removeChild(heading2);//remove
*/

//creating new tag first position
var heading0=document.createElement("h1");
var text0=document.createTextNode("This is heading 0")
heading0.appendChild(text0);
var heading1=document.getElementsByTagName("h1")[0];
mydiv.insertBefore(heading0,heading1);