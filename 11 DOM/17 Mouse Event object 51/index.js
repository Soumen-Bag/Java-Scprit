/*
MouseEvent NoT Work In This Eliment <html>,<head>,
<meta>,<title>,<style>,<scipt>,<iframe>,<param>,<base>,<bdo>
*/
//MouseEvent Work In This Eliment 
/* onclick,ondblclick,onmousedown,onmousup,onmouseenter,onmouseleav,onmousemove,onmouseover */

console.clear();
const div=document.querySelector('div');

// div.addEventListener("click",function(){
//     console.log("Clicked");
// });

// div.addEventListener("dblclick", function () {
//   console.log("dblclick is occured");
// });

// div.addEventListener("mousedown", function () {
//   console.log("mousedown is occured");
// });
// div.addEventListener("mouseup", function () {
//   console.log("mouseup is occured");
// });

// div.addEventListener("mouseenter", function () {
//   console.log("mouseenter is occured");
// });
// div.addEventListener("mouseleave", function () {
//   console.log("mouseleave is occured");
// });

// div.addEventListener("mouseover", function () {
//   console.log("mouseover is occured");
// });

// div.addEventListener("mousemove",function(e)
// {
//     //console.log("mousemover is occured");
//     console.log("clientX="+e.clientX+", clientY="+e.clientY);
//     console.log("offsetX = " + e.offsetX + ", offsetY = " + e.offsetY);
// });

const buttons = document.querySelectorAll(".btn");

Array.from(buttons).map((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target.innerText);
  });
});