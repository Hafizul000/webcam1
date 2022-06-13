
var video = document.getElementById("webcam");
var camera =  navigator.mediaDevices.getUserMedia;
if(camera){
     navigator.mediaDevices.getUserMedia({
        video : true,
        audio : true
     })
     .then(function(streamLive){
        video.srcObject = streamLive;
     })
     .catch(function(){
      console.log("Error Please Try Again ....!");
     })
}