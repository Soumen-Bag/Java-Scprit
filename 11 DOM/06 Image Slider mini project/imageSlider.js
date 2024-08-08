var photos=["./Image/IMG-20181230-WA0080.japg","./Image/IMG-20181230-WA0081.jpg","./Image/IMG-20181230-WA0089.jpg","./Image/IMG-20181230-WA0090.jpg"];
var imgTag=document.querySelector("img");

var count=0;
function next() {
  count++; 
  if(count>=photos.length)
  {
    count=0
  }
  else{
    imgTag.src=photos[count];
  }  
}

function prev() {
    count--;
  if(count<0)
  {
    count=photos.length-1;
    imgTag.src=photos[count];
  }
  else{
    imgTag.src=photos[count];
  }
}

