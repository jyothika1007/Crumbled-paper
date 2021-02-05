
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(700,580,1400,15);

  paper = new Paper(250,550,21);
  
  dustbin1 = new Dustbin(1100,560,200,20);
	dustbin2 = new Dustbin(1210,500,20,100);
  dustbin3 = new Dustbin(990,500,20,100);
  
	Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
}