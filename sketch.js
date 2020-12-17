const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();   //engine.world
  world = engine.world;

  var groundOptions = {
    isStatic: true
  }

  var ballOptions = {
    restitution: 1.0
  }

  ground = Bodies.rectangle(200,390,400,20, groundOptions);
  World.add(world, ground);

  ball = Bodies.circle(100,100,20, ballOptions);
  World.add(world, ball);

}

function draw() {
  background(0); 
  Engine.update(engine);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);
  fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 20);

  drawSprites();
}