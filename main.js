leftscore=0;
status="";
music="";
music2="";
leftx=0;
rightx=0;
lefty=0;
righty=0;
rightscore=0;
status2="";

function preload(){
    music=loadSound("music.mp3");
    music2=loadSound("music2.mp3");

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);

}
function draw(){
    image(video,0,0,600,500);
    fill("red");
    stroke("red");
    status=music.isPlaying();
    status2=music2.isPlaying();
    if(leftxscore>0.2){
        circle(leftx,lefty,20);
        music2.stop();
        if(status==false){
            music.play();
            document.getElementById("songname").innerHTML=" songname = peter pan";
        }
    }
    if(rightscore>0.2){
        circle(rightx,righty,20);
        music.stop();
        if(status2==false){
            music2.play();
            document.getElementById("songname").innerHTML=" songname = harry potter";
        }
    }
}

function modelloaded(){
    console.log("model is loaded");
}

function gotposes(results){
if(results.length >0){
    console.log(results);
    leftx=results[0].pose.leftWrist.x;
    lefty=results[0].pose.leftWrist.y;
    rightx=results[0].pose.rightWrist.x;
    righty=results[0].pose.rightWrist.y;
    leftscore=results[0].pose.keypoints[9].score;
    rightscore=results[0].pose.keypoints[10].score;
}
}
