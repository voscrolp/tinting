
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var depiction;
var value1,value2,value3;
var tintCheck = true;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	depiction = new Picture(width/2,height/2,200,200);

	value1 = 255;
	value2 = 255;
	value3 = 255;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tint(value1,value2,value3);
  depiction.display();

  textAlign(CENTER);
  textSize(25);
  fill('red');
  text("Press R to Tint Red",width/2,50);
  fill('green');
  text("Press G to Tint Green",width/2,100);
  fill('blue');
  text("Press B to Tint Blue",width/2,150);
  fill('yellow');
  text("Press SPACE for No Tint",width/2,200);

 
}

function keyPressed(){
	if(keyCode == 114 || keyCode == 82){
		value1 = 255;
		value2 = 0;
		value3 = 0;
	}

	if(keyCode == 103 || keyCode == 71){
		value1 = 0;
		value2 = 255;
		value3 = 0;
	}

	if(keyCode == 98 || keyCode == 66){
		value1 = 0;
		value2 = 0;
		value3 = 255;
	}

	if(keyCode == 32){
		value1 = 255;
		value2 = 255;
		value3 = 255;
	}
}



