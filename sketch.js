const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide, btn;
var world;
var radius = 70;

function preload(){

	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");

}


function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}

	ball = Bodies.circle(260,100,radius/2.6,ball_options);
	World.add(world,ball);

	ground=new Ground(width/2,height-30,width,40);
	leftSide = new Ground(width-360,height-110,10,130);
	rightSide = new Ground(width-240,height-110,10,130);

	Engine.run(engine);
  
}


function draw() {
	background(200);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	ground.display();
	leftSide.display();  
	rightSide.display();

	
	imageMode(CENTER);
	image(dustbinImg,width-300, height-105, 150,150);
	image(paperImg, ball.position.x, ball.position.y, radius, radius);

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:30,y:-30});
    
  	}
}
