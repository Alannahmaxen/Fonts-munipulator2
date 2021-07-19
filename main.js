
leftWristX=0;
rightWristX=0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 600);
    video.position(100,100)

    canvas = createCanvas(550,500);
     canvas.position(800,100)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is initialized');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
          leftWristX = results[0].pose.leftWrist.x;
          rightWristX = results[0].pose.rightWrist.x;
          difference = floor(leftWristX - rightWristX);

          console.log("leftWristX ="+ leftWristX + "rightWristX =" + "difference =" + difference)
    }
}

function draw(){

}