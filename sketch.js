var fixedRect, movingRect,boing1,boing2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 boing1=createSprite(100,500,50,48)
 boing2=createSprite(700,500,39,76)
 boing1.shapeColor="#FF6347"
 boing2.shapeColor="teal"
  movingRect.velocityY = -7;
  fixedRect.velocityY = +5;
  boing1.velocityX=+6
  boing2.velocityX=-6
}

function draw() {
  background(0,0,0);  
boing(movingRect,fixedRect);
boing(boing1,boing2)
  drawSprites();
}





