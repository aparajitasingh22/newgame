var gameState= 0;
var avatar1img,avatar2img;
var avatar1,avatar2;
var player;
function preload() {
  avatar1img=loadImage("assets/charecter1.png")
  avatar2img=loadImage("assets/charecter2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  avatar1= createSprite(width/2-300,height/2);
  avatar1.addImage(avatar1img);
  avatar2= createSprite(width/2+180,height/2);
  avatar2.addImage(avatar2img);
  
  player=createSprite(width/2,height/2);
  player.visible=false;
}

function draw() {
  background("black");
  if(gameState === 0){
    stroke("white")
    strokeWeight(3)
    textSize(50);
    fill ("green")
    text ("Maze Runner",width/2 -200, height/4)
    textSize(20);
    fill ("white")
    noStroke();
    text ("Click On Your Avatar",width/2 -150, height/2)
    
    //chooseAvatar();
  }

  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function chooseAvatar(){
  if(mousePressedOver(avatar1)){
    noFill()
    stroke("green")
    strokeWeight(1)
    rect (avatar1.x,avatar1.y,avatar1.width,avatar1.height);
  }
}
