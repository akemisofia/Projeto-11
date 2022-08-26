
var fundo, fundomove;
var barco, barcomove;

function preload()
{
  fundomove = loadImage("sea2.png");
  barcomove = loadAnimation("ship-3.1.png","ship-4.png");
}

function setup(){
  createCanvas(1200,600);
  fundo = createSprite(600,300,20,20);
  barco = createSprite(900,300,20,20);
  fundo.addAnimation("sea2.png", fundomove);
  barco.addAnimation("ship-2.png", barcomove);
}

function draw() {
  background("blue");
    drawSprites();
}
