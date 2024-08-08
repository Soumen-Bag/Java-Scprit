for(var i=0;i<3;i++)
{
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        var text=this.innerHTML;
        console.log(text);
        audioPlay(text);
        playAnimation(text);
    });
}

function audioPlay(text)
{
    switch(text)
        {
            case "a":
                var audio=new Audio("music/(webmusic.in)_Acid.mp3");
                audio.play();
                break;

            case "b":
                var audio=new Audio("music/(webmusic.in)_Aro-Ekbaar.mp3");
                audio.play();
                break;
                
            case "c":
                var audio=new Audio("music/(webmusic.in)_Bhalo-Achi-Valo-Theko.mp3");
                audio.play();
                break; 
        }
}

function playAnimation(text)
{
    var selectedButton=document.querySelector("."+text); //Find Slected Button;
    selectedButton.classList.add("anim"); //add css style (.anim ) 

    setTimeout(function(){
        selectedButton.classList.remove("anim");
    },7000);// it atumatically remove the animation after 3 second
}

//keypress litener
document.addEventListener("keypress",function(event){
    var text=event.key;
    audioPlay(text);
    playAnimation(text);
})