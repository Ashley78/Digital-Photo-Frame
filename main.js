function preload(){
}

function setup(){
    canvas= createCanvas(640,480);
    canvas.position(400,200);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 230,150,220,200);

    fill(225,0,0);
    stroke(255,0,0);
    circle(50,50,90);

    fill(240, 0, 20);
    stroke(240, 0, 20);
    rect( 90, 40, 460, 20)

    rect( 90, 40, 460, 20)
    
    fill(225,0,0);
    stroke(255,0,0);
    circle(50,50,90);

    circle(520,50,90);

    fill(240, 0, 20);
    stroke(240, 0, 20);
    rect( 80, 420, 480, 20);

    rect( 80, 420, 480, 20);

    
    fill(225,0,0);
    stroke(255,0,0);
    circle(150,1500,90);

    circle(525,420,90);
    
    fill(225,0,0);
    stroke(255,0,0);
    circle(50,410,90);
    
}
function take_snapshot(){
    save('image.png');
}