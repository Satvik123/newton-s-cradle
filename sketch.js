
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4;
var Roof,Rope;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  Roof=new roof(400,300,400,25);
  bob1=new bob(400,500,40);
  bob2=new bob(480,500,40);
  bob3=new bob(560,500,40);
  bob4=new bob(320,500,40);
  bob5=new bob(240,500,40);
  Rope=new rope(bob1.body,Roof.body,0,-40);
  rope1=new rope(bob2.body,Roof.body,40*2,0);
  rope2=new rope(bob3.body,Roof.body,160,50);
  rope3=new rope(bob4.body,Roof.body,-80,0);
  rope4=new rope(bob5.body,Roof.body,-160,0);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");
  Roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  Rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  
 
  drawSprites();
  

  
}



