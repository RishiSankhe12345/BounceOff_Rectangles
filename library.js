function bounceOff(f,g){
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
  }