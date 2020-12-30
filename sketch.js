var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var b1,b2,b3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);


	packageSprite = createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	b1 = createSprite(320,600,15,100);
	b1.shapeColor = "red";

	b2 = createSprite(415,655,210,15);
	b2.shapeColor = "red";

	b3 = createSprite(510,600,15,100);
	b3.shapeColor = "red";


	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0, isStatic: true});
	World.add(world, packageBody);
	

	//Creating a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic: true} );
 	World.add(world, ground);


	Engine.run(engine); 
  
}


function draw() {
  rectMode(CENTER);

  background(0);

  Engine.update(engine);

  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y    
	
	ellipseMode(RADIUS);
	ellipse(packageSprite.position.x, packageSprite.position.y,20);

	keyPressed();
	

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

Matter.Body.setStatic(packageBody, false);


  }
}