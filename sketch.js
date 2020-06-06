const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options={
        restitution:1.15
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    ball = Bodies.circle(200,200,15,ball_options)
    ball1 = Bodies.circle(200,100,15,ball_options)
    World.add(world,ground);
    World.add(world,ball);
    World.add(world,ball1);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,40);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20)
    ellipse(ball1.position.x,ball1.position.y,20,20)
}