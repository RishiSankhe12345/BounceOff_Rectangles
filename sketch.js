var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {3
  background(0,0,0);   
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

/*function bounceOff(f,g){
  if (f.x - g.x < g.width/2 + f.width/2
    && g.x - f.x < g.width/2 + f.width/2) {
  f.velocityX = f.velocityX * (-1);
  g.velocityX = g.velocityX * (-1);
}
if (f.y - g.y < g.height/2 + f.height/2
  && g.y - f.y < g.height/2 + f.height/2){
  f.velocityY = f.velocityY * (-1);
  g.velocityY = g.velocityY * (-1);
}
}*/