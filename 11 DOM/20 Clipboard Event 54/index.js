// ClipboardEvent Object
// oncopy
// oncut
// onpaste

const input=document.querySelector("input");
const p=document.querySelector("p");
input.addEventListener("copy",function(){
    p.innerText="you have copied text"
    //console.log("you have copied text")
});

input.addEventListener("cut",function(){
    p.innerText="you have cut text";
    //console.log("you have cut text")
});

input.addEventListener("paste",function(){
    p.innerText="you have past text";
    //console.log("you have past text")
})