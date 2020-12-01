var car , wall;
var speed , wight;
var carSpeed,wallWeight;
var PASS,FAIL,BECAREFULL;
function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  wight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = 20;
  carSpeed = speed;
  car.shapeColor = color(255,255,255);

  wall = createSprite(1500,200,60,height/2);
  wallWeight = wight
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("black");
  
  if(wall.x - car.x  < (car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5* wight* speed* speed/22500;

  if(deformation > 180){
    car.shapeColor = color(255,0,0);
    textSize(50);
    fill("red");
    text("FAIL",800,200);
  }

  else if(deformation >100){
    car.shapeColor = color(230,230,0);
    textSize(50);
    fill("yellow");
    text("BECAREFULL",800,200);
  }

  else{
    car.shapeColor = color(0,255,0);
    textSize(50);
    fill("green");
    text("PASS",800,200);
  }
  }
  drawSprites();
  textSize(15);
  fill("pink");
  text(speed,50,50);
  text("CAR SPEED :-",55,35);

  textSize(15);
  fill("pink");
  text(wight,250,50);
  text("WALL WEIGHT :-",255,35);
}