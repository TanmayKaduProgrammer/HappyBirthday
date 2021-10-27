var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x= document.getElementById("myAudio");
function new_image(){
    document.getElementsByTagName("body")[0].backgroundImage = url("hOye.gif");
}

function playSound(){
	x.play();
}
