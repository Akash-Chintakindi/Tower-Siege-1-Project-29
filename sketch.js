const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground,stand1,stand2;

var block1,block2,block3,block4,block5,block6,block7,block8;

var block9,block10,block11,block12,block13,block14;

var block15,block16,block17,block18;

var block19,block20;

var block21

var block22,block23,block24,block25,block26;

var block27,block28,block29;

var block30;

var polygon,slingshot;



function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(650,300,260,20);
    stand2 = new Ground(1000,200,170,20);
    
    polygon = new Polygon(50,200,20);
    slingshot = new SlingShot(polygon.body,{x:190,y:225});

    //first layer
    block1 = new Box(545,280,30,40);
    block2 = new Box(575,280,30,40);
    block3 = new Box(605,280,30,40);
    block4 = new Box(635,280,30,40);
    block5 = new Box(665,280,30,40);
    block6 = new Box(695,280,30,40);
    block7 = new Box(725,280,30,40);
    block8 = new Box(755,280,30,40);

    //second layer
    block9 = new Box(575,240,30,40);
    block10 = new Box(605,240,30,40);
    block11 = new Box(635,240,30,40);
    block12 = new Box(665,240,30,40);
    block13 = new Box(695,240,30,40);
    block14 = new Box(725,240,30,40);

    //third layer
    block15 = new Box(605,200,30,40);
    block16 = new Box(635,200,30,40);
    block17 = new Box(665,200,30,40);
    block18 = new Box(695,200,30,40);

    //fourth layer
    block19 = new Box(635,130,30,40);
    block20 = new Box(665,130,30,40);

    //top layer
    block21 = new Box(650,90,30,40);

    //first layer
    block22 = new Box(940,170,30,40);
    block23 = new Box(970,170,30,40);
    block24 = new Box(1000,170,30,40);
    block25 = new Box(1030,170,30,40);
    block26 = new Box(1060,170,30,40);

    //second layer
    block27 = new Box(970,130,30,40);
    block28 = new Box(1000,130,30,40);
    block29 = new Box(1030,130,30,40);

    //top layer
    block30 = new Box(1000,90,30,40);

}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  
  strokeWeight(4);
 
  ground.display();
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  block15.display();
  block16.display();
  block17.display();
  block18.display(); 

  block19.display();
  block20.display();

  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  block27.display();
  block28.display();
  block29.display();

  block30.display();

  polygon.display();
  slingshot.display();
} 

function mouseDragged() {
  Matter.Body.setPosition(polygon.body,{x: mouseX,y: mouseY});
}

function mouseReleased() {
  slingshot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
      slingshot.attach(polygon.body);
  }
}