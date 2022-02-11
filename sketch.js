var maca;
var macaIMG;
var jardim;
var jardimIMG;
var folha;
var folhaIMG;
var folhalaranja;
var folhalaranjaIMG;
var coelho;
var coelhoIMG;

function preload(){

macaIMG=loadImage("apple.png");
jardimIMG=loadImage("garden.png");
folhaIMG=loadImage("leaf.png");
folhalaranjaIMG=loadImage("orangeleaf.png");
coelhoIMG = loadImage("rabbit.png");

}


function setup(){

createCanvas(400,400);

jardim = createSprite(200,200);
jardim.addImage(jardimIMG);


coelho = createSprite(160,340,20,20);
coelho.scale =0.09;
coelho.addImage(coelhoIMG);



}


function draw(){
 
  coelho.x= World.mouseX;

  edges=createEdgeSprites();
  coelho.collide(edges);
  
  drawSprites();

  desenharmaca();
  desenharfolha();
  desenharfolhalaranja();
}








function desenharmaca(){


if(frameCount%80===0){
maca=createSprite(random(20,400),100,10,10);
maca.addImage(macaIMG);
maca.velocityY=3;
maca.scale=0.07;


}
}


function desenharfolha(){
 
if(frameCount%60===0){
  folha=createSprite(Math.round(random(20,400)),100,10,10);
  folha.addImage(folhaIMG);
  folha.velocityY=3;
  folha.scale=0.07;

}
}


function desenharfolhalaranja(){

  if(frameCount%60===0){
    folhalaranja=createSprite(Math.round(random(20,400)),100,10,10);
    folhalaranja.addImage(folhalaranjaIMG);
    folhalaranja.velocityY=3;
    folhalaranja.scale=0.07;

  
  }
}

