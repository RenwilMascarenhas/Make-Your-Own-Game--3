var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");
  doraImg = loadImage("dora.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.addAnimation("JakeRunning",boyImg);
boy2 = createSprite(220,340,30,30);
boy2.addImage("DoraRunning",doraImg);
boy2.scale=0.5;
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  if(keyDown("right")){
    boy.x = boy.x+2
  }
  if(keyDown("left")){
    boy.x = boy.x-2
  }
  // boy2 moving on Xaxis with mouse
  if(keyDown("d")){
    boy2.x = boy2.x+2
  }
  if(keyDown("a")){
    boy2.x = boy2.x-2
  }
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}