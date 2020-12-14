const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine,world;
var stand1, stand2;
var object1, object2, object3, object4, object5, object6, object7, object8, object9, object10, object11, object12, object13, object14, object15, object16,object17, object18, object19, object20, object21, object22, object23, bject24, object25;
var polygon, slingshot, polygonimage;

function preload(){
  polygonimage = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world

  ground = new Ground(400, 350, 800, 20);

  stand1 = new Ground(360, 250, 240, 20);
  stand2 = new Ground(650, 180, 200, 20);

  object1 = new Box(270, 230, 30, 40);
  object2 = new Box(300, 230, 30, 40);
  object3 = new Box(330, 230, 30, 40);
  object4 = new Box(360, 230, 30, 40);
  object5 = new Box(390, 230, 30, 40);
  object6 = new Box(420, 230, 30, 40);
  object7 = new Box(450, 230, 30, 40);
  object8 = new Box(300, 190, 30, 40);
  object9 = new Box(330, 190, 30, 40);
  object10 = new Box(360, 190, 30, 40);
  object11 = new Box(390, 190, 30, 40);
  object12 = new Box(420, 190, 30, 40);
  object13 = new Box(330, 150, 30, 40);
  object14 = new Box(360, 150, 30, 40);
  object15 = new Box(390, 150, 30, 40);
  object16 = new Box(360, 120, 30, 40);
  object17 = new Box(585, 145, 30, 40);
  object18 = new Box(615, 145, 30, 40);
  object19 = new Box(645, 145, 30, 40);
  object20 = new Box(675, 145, 30, 40);
  object21 = new Box(705, 145, 30, 40);
  object22 = new Box(615, 105, 30, 40);
  object23 = new Box(645, 105, 30, 40);
  object24 = new Box(675, 105, 30, 40);
  object25 = new Box(645, 65, 30, 40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon)

  slingshot = new SlingShot(polygon, {x:100, y:200});

  Engine.run(engine);

}

function draw() {
  background("black");  
  imageMode(CENTER);
  image(polygonimage, this.polygon.position.x,this.polygon.position.y, 40, 40);
  ground.display();
  stand1.display();
  stand2.display();
  object1.display();
  object2.display();
  object3.display();
  object4.display();
  object5.display();
  object6.display();
  object7.display();
  object8.display();
  object9.display();
  object10.display();
  object11.display();
  object12.display();
  object13.display();
  object14.display();
  object15.display();
  object16.display();
  object17.display();
  object18.display();
  object19.display();
  object20.display();
  object21.display();
  object22.display();
  object23.display();
  object24.display();
  object25.display();
  drawSprites();
}

function mouseDragged(){
  this.polygon.position.x = mouseX
  this.polygon.position.y = mouseY
}

function mouseReleased(){
  slingshot.fly();
}