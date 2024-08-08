// Media Event [Audio/Video]
//Canplay,Play,Playing,Pause,Progress,Ended,VolumeChange,Waiting;  
const video=document.querySelector("video");
video.addEventListener("canplay",function(){
    console.log("can play");
});

video.addEventListener("play",function(){
    console.log("play");
});

video.addEventListener("playing",function(){
    console.log("playing");
});

video.addEventListener("pause",function(){
    console.log("pause");
});

video.addEventListener("ended",function(){
    console.log("Thank you for watching");
});

video.addEventListener("volumechange", function(){
    console.log("VolumeChange");
});