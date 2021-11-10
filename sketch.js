const Engine = Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var snows=[]




var BgImg;
var player;playerImg;
var ground;
var snow;
function preload(){
  BgImg= loadImage("snow2.jpg");
  playerImg= loadImage("Snowman.png");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

 player= createSprite(200, 300, 50, 50);
 player.addImage(playerImg);
 player.scale=0.5;
 ground = createSprite(400,380,800,20); 
 ground.visible = false;
 

}


function draw() {
  background(BgImg);
  Engine.update(engine)
  
  if(keyDown("space")){
    player.velocityY= -10;

  }
  player.velocityY = player.velocityY+0.5;
  player.collide(ground);
  snows.push(new Snow(400,0,50))
  for(var i=0;i<snows.length;i++){
    
  snows[i].display();

  }
  
  drawSprites();
}