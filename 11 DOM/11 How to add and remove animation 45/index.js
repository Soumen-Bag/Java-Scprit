for(var i=0;i<3;i++)
{
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        var text=this.innerHTML;
        console.log(text);
        playAnimation(text);
    });
}

function playAnimation(text)
{
    var selectedButton=document.querySelector("."+text); //Find Slected Button;
    selectedButton.classList.add("anim"); //add css style (.anim ) 

    setTimeout(function(){
        selectedButton.classList.remove("anim");
    },3000);// it atumatically remove the animation after 3 second
}