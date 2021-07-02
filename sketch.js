var ship;
var sea;
var createEdgeSprites;

function preload(){
  
  seaImg = loadImage("sea.png");
  ship_moving = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(2400,2400);
   
    sea = createSprite(200,180,5,5);
    sea.addImage ("sea",seaImg);

   ship = createSprite (1200,1200,20,50);
   ship.addAnimation("moving", ship_moving);
   ship.x = 400
   ship.scale =0.9


   createEdgeSprites();
}

function draw() {
  background("blue");

  sea.velocityX =-2
  //console.log(sea.x);
  
  if (sea.x <0) {
    sea.x = sea.width/2; 
  }
  ship.collide(sea);
 drawSprites();
}