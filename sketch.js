
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 roof1 = new Roof(400,150,300,300);
		bob1 = new Bob(200,150,40);
		bob3 = new Bob(200,210,40);
		bob4 = new Bob(200,270,40);
		bob5 = new Bob(200,330,40);
		bob2 = new Bob(200,390,40);
		rope1= new Rope(bob1.body,roof1.body,-bob1Diameter*2,0);
		rope2= new Rope(bob2.body,roof1.body,-bob2Diameter*2,0);
		rope3= new Rope(bob3.body,roof1.body,-bob3Diameter*2,0);
		rope4= new Rope(bob4.body,roof1.body,-bob4Diameter*2,0);
		rope5= new Rope(bob5.body,roof1.body,-bob5Diameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roof1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}


