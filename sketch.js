var chicken,chickenImg;
var egg1, egg1Img;
var stone, stoneImg;

var field, feildImg;
var break12
var gameState = "play"
var eggGroup





function preload(){
 chickenImg = loadImage("chicken.jpeg")
 egg1Img = loadImage("egg1.jpeg")
 egg2 = loadImage("egg2.png")
 egg3 = loadImage("egg3.png")
 break12 = loadImage("break12.png")
 stoneImg = loadImage("stone.png")
 fieldImg = loadImage("feild.jpg")
}

function setup() {
  createCanvas(600,600)
  field = createSprite(300,300)
  field.addImage("feild", fieldImg)
  field.velocityY = 1;

  chicken = createSprite(200,200,50,50)
  chicken.addImage("chicken", chickenImg)
  chicken.scale = 0.3
}

function draw() {
background(200);


if(gameState === "play") {
    if(keyDown("left_arrow")) {
      chicken.x = chicken.x-3
    }

    if(keyDown("right_arrow")) {
      chicken.x = chicken.x +3
    }
    if(keyDown("space")) {
      chicken.velocityY = -10
    }
    
    chicken.velocityY = chicken.velocityY + 0.8;

    if(field.y > 400){
        field.y = 300
      }
      if(gameState === "end"){
        background("black")
        stroke("yellow");
        fill("yellow");
        textSize(30);
        text("Game Over", 230,250)
      }
      
       
      }
      function SpawnEggs() {
        if(frameCount % 100=== 0) {
         var egg1 = createSprite(200,-50)
         var stone = createSprite (200,10)
         
          
     
         egg1.velocityY=1
         stone.velocityY = 1
         
     
         egg1.x = Math.round(random(300,800))
         stone.x = Math.round(random(100,800))
         
     
         egg1.addImage("egg1",egg1Img);
         stone.addImage("stone",stoneImg);
         egg1.scale=0.2
         stone.scale=0.2
         egg1.depth = stone.depth 
         chicken.depth +=2
         stone.debug = true;
    
       }
}

SpawnEggs();
drawSprites();
}
if(stone.isTouching(chicken)|| chicken.y>600){
    chicken.destroy();
    gameState = "end"
   }
