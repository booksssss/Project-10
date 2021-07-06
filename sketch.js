var sea;
var ship;
var createEdgeSprites;

function preload(){
  
  seaImg = loadImage("sea.png");
  ship_moving = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

 function setup(){
   createCanvas(400,400);
  
   
     //sea = createSprite(200,180,5,5);
     sea = createSprite(110,110,400,400);
     sea.addImage ("sea",seaImg);
    //  sea.x=sea.width/2;
    // sea.velocityX=-4
    ship = createSprite (130,200,2,2);
    ship.addAnimation("moving", ship_moving);
    //ship.x = 400
    ship.scale =0.25


   //  createEdgeSprites();
 }

 function draw() {
   background("blue");

   sea.velocityX =-2
   console.log(sea.x);
  
   if (sea.x <0) {
     sea.x = sea.width/2; 
   }
   //ship.collide(sea);
  drawSprites();
 }
// Other Neha's code:
 // function setup(){
//   createCanvas(400,400);
  
//   seaBackground=createSprite(110,110,400,400);
//   seaBackground.addImage("sea", seaImg);
//   seaBackground.x=seaBackground .width/2
//   seaBackground.velocityX=-4
  
//   ship=createSprite(130,200,2,2);
//   ship.addAnimation('shipMoving', ship_moving);
//   ship.scale=0.25
// }

// function draw() {
//   background("blue");
  
//   if(seaBackground.x<0){
//     seaBackground.x=seaBackground.width/2
//   }
  

  
//   drawSprites()
 
// }