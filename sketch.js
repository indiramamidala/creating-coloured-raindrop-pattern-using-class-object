function setup() {
  createCanvas(1400,640);
 var raindrop = new Raindrop(1400,320,10,10);
 raindrop.velocityY = 5;
}
function draw(){
  background(255);
  raindrop.display();
  drawSprites();
}