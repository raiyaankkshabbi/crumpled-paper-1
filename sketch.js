var crumbledpaper;
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

	crumbledpaper = Bodies.circle(100,600, 30 , {restitution:0.3,density:1.2,friction:0.5, isStatic:false});
	World.add(world,crumbledpaper);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	boxPosition=width/2+200
	boxY=610
	
	boxleftSprite=createSprite(boxPosition,boxY,20,100);
	boxleftSprite.shapeColor = color(225,0,0);
	
	
	boxLeftBody = Bodies.rectangle(boxPosition,boxY,20,100,{isStatic:true});
	World.add(world, boxLeftBody);
	
	
	boxBase=createSprite(boxPosition+100,boxY+40,200,20);
	boxBase.shapeColor = color(225,0,0);
	
	boxBottomBody = Bodies.rectangle(boxPosition+100,boxY+40,200,20,{isStatic:true});
	World.add(world, boxBottomBody);
	
	
	boxrightSprite=createSprite(boxPosition+200,boxY,20,100);
	boxrightSprite.shapeColor = color(225,0,0);
	
	boxRightBody = Bodies.rectangle(boxPosition+200,boxY,20,100,{isStatic:true});
	World.add(world, boxRightBody);
	
	


	Engine.run(engine);
  
}


function draw() {

  background(0);

  ellipseMode(RADIUS);
  ellipse(crumbledpaper.position.x,crumbledpaper .position.y,30,30);

    rectMode(CENTER);
  rect(boxRightBody.position.x,boxRightBody.position.y,20,100)

  rectMode(CENTER);
  rect(boxLeftBody.position.x,boxLeftBody.position.y,20,100)

  rectMode(CENTER);
  rect(boxBottomBody.position.x,boxBottomBody.position.y,200,20)

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,10);

 
  drawSprites();
 
}


function keyPressed() {

	

if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(crumbledpaper,crumbledpaper.position,{x:150,y:-150})
    

    
  }
}
