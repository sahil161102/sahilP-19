var car, wall;
var width = 20, weight,speed;


function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500,200,10, 400);
  wall.shapeColor="white";
  car=createSprite(200,200,20, 20);
  car.shapeColor="white";
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
}

function draw() {
  background("black");  


  
  var deformation = 0.5*speed*speed*weight/22500;
  if(car.isTouching(wall)){
  if(deformation>=180){
    car.shapeColor="Red";
  }
  else if(deformation<180&&deformation>=80){
    car.shapeColor="yellow";
  }
  else{
    car.shapeColor="green";
  }
  car.velocityX =0;
}
  drawSprites();
}