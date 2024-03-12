music1 = "";
music2 = "";
lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;

function preload(){
    music1 = loadSound("music.mp3")
    music2 = loadSound("music2.mp3")
}
function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide();
    pose = ml5.poseNet(video, modelLoaded)
    pose.on("pose", gotpose)
}
function modelLoaded() {
    console.log("posenet has been initialized")
    }
function draw() {
    image(video, 0, 0, 600, 500)
}
function play1() {
    music1.play()
}
function play2(){
    music2.play()
}
 function gotpose(r){

    if(r.length > 0){
        
         lwx = r[0].pose.leftWrist.x;
         lwy = r[0].pose.leftWrist.y;
         rwx = r[0].pose.rightWrist.x;
         rwy = r[0].pose.rightWrist.y;
         console.log(lwx,lwy,)
         console.log(rwx,rwy,)   
}
}
