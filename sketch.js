var box;

function setup() {
  createCanvas(800,800);
  box=createSprite(400,400,25,25);
}

function draw() 
{
  background(30);
  if(keyDown(LEFT_ARROW)){
    box.x-=5;
  }
  if(keyDown(RIGHT_ARROW)){
    box.x+=5;
  }
  if(keyDown(UP_ARROW)){
    box.y-=5;
  }
  if(keyDown(DOWN_ARROW)){
    box.y+=5;
  }
  if(keyDown("space")){
    background("white");}
  drawSprites();
}




