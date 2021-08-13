 /*const Engine = Matter.Engine;
 const World =  Matter.World;
const Bodies =  Matter.Bodies; */


var backgroundImg;

var boy;
var snow;

function setup() {
  createCanvas(800,400);
  
  
  backgroundImg = loadImage("snow1.jpg");
  boyImg = loadAnimation("boy.jpg");
  //snow = new Snow(200,400,10,10);

}

function draw() {
  background(backgroundImg);
  
  boy = createSprite(300,300);
  boy.addAnimation("run",boyImg);
 boy.scale=0.11;

 //snow.display();
 
  drawSprites();
}