var fixrect, movingrect;

function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(400, 200, 80, 30);
  movingrect.shapeColor = "red";

  fixrect = createSprite(200,200,50,80);
  fixrect.shapeColor = "yellow";
}

function draw() {
  //black
  background(0);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
if(movingrect.x-fixrect.x<fixrect.width/2+movingrect.width/2
  && fixrect.x-movingrect.x<fixrect.width/2+movingrect.width/2){
  movingrect.shapeColor = "pink"
  fixrect.shapeColor = "pink"
}
else{
  movingrect.shapeColor = "green"
  fixrect.shapeColor = "green"
}
  drawSprites();
}