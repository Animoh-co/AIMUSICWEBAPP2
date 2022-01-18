music1 = " ";
music2 = " ";

function preload(){
music1 = loadsound("music.mp3");
music2 = loadsound("musiic2.mp3");
console.log("Music has been loaded");
}

function setup(){
    Canvas = createCanvas(600,550);
    Canvas.center();
    
    
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
   image(video, 0, 0, 600, 550);
}