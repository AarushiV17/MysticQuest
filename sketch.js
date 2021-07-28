var bg , bgImg ;
var soil , soilImg;
var seed , trash1 , trash2 , trash3;

function preload(){
  bgImg = loadImage("bg.jpg");
  soilImg = loadImage("soil3.png");
}

function setup(){
  createCanvas(600,600);
  bg = createSprite(300,200);
  bg.addImage(bgImg);
  bg.scale = 1.0;
  
  soil = createSprite(100,380);
  soil.addImage("soil",soilImg);
  soil.x = width*2;
  soil.scale = 0.4
  
}

function draw(__) {
  background("white");
  
  drawSprites();
}


